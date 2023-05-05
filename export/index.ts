export { default } from './httpQuery';

import { Client, Connection, Pool } from 'pg';
import { Socket } from '../shims/net';
import { NeonConfig } from './neonConfig';

/**
 * We export the pg library mostly unchanged, but we do make a few tweaks.
 *
 * (1) Connecting and querying can require a lot of network round-trips. We
 * add a pipelining option for the connection (startup + auth + first query),
 * but this works with cleartext password auth only. We can also pipeline TLS
 * startup, but currently this works only with Neon hosts (not vanilla pg or
 * pgbouncer).
 *
 * (2) SCRAM auth is deliberately CPU-intensive, and this is not appropriate
 * for a serverless environment. In case it is still used, however, we replace
 * the standard (synchronous) pg implementation with one that uses SubtleCrypto
 * for repeated SHA-256 digests. This saves some time and CPU.
 */

declare interface NeonClient {
  // these types suppress type errors in this file, but do not carry over to
  // the npm package

  connection: Connection & {
    stream: Socket;
    sendSCRAMClientFinalMessage: (response: any) => void;
  };
  _handleReadyForQuery: any;
  _handleAuthCleartextPassword: any;
  startup: any;
  getStartupConf: any;
  saslSession: any;
}

class NeonClient extends Client {

  get neonConfig(): NeonConfig { return this.connection.stream; }

  connect(): Promise<void>;
  connect(callback: (err?: Error) => void): void;
  connect(callback?: (err?: Error) => void) {
    if (this.ssl && this.neonConfig.useSecureWebSocket) {
      console.warn(`SSL is enabled for both Postgres (e.g. ?sslmode=true in the connection string) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. Please disable SSL on the Postgres connection.`);
    }
    if (this.host === 'localhost') {
      console.warn(`The database host is 'localhost', which is the default host when none is set. If that's intentional, please ignore this warning. If not, perhaps an environment variable has not been set, or has not been passed to the library?`);
    }

    const result = super.connect(callback as any) as void | Promise<void>;

    const pipelineTLS = this.neonConfig.pipelineTLS && this.ssl;
    const pipelineConnect = this.neonConfig.pipelineConnect === 'password';

    if (!pipelineTLS && !this.neonConfig.pipelineConnect) return result;

    const con = this.connection;

    if (pipelineTLS) {
      // for a pipelined SSL connection, fake the SSL support message from the
      // server (the server's actual 'S' response is ignored via the
      // expectPreData argument to startTls in shims / net / index.ts)

      con.on('connect', () => con.stream.emit('data', 'S'));
      // -> prompts call to tls.connect and immediate 'sslconnect' event
    }

    if (pipelineConnect) {
      // for a pipelined startup:
      // (1) don't respond to authenticationCleartextPassword; instead, send
      // the password ahead of time
      // (2) *one time only*, don't respond to readyForQuery; instead, assume
      // it's already true

      con.removeAllListeners('authenticationCleartextPassword');
      con.removeAllListeners('readyForQuery');
      con.once('readyForQuery', () => con.on('readyForQuery', this._handleReadyForQuery.bind(this)));

      const connectEvent = this.ssl ? 'sslconnect' : 'connect';
      con.on(connectEvent, () => {
        this._handleAuthCleartextPassword();
        this._handleReadyForQuery();
      });
    }

    return result;
  }

  async _handleAuthSASLContinue(msg: any) {
    const session = this.saslSession;
    const password = this.password;
    const serverData = msg.data;

    if (session.message !== 'SASLInitialResponse' || typeof password !== 'string' || typeof serverData !== 'string') throw new Error('SASL: protocol error');

    const attrPairs = Object.fromEntries(
      serverData.split(',').map(attrValue => {
        if (!/^.=/.test(attrValue)) throw new Error('SASL: Invalid attribute pair entry')
        const name = attrValue[0];
        const value = attrValue.substring(2);
        return [name, value];
      })
    );

    const nonce = attrPairs.r;
    const salt = attrPairs.s;
    const iterationText = attrPairs.i;

    if (!nonce || !/^[!-+--~]+$/.test(nonce)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable');
    if (!salt || !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(salt)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64');
    if (!iterationText || !/^[1-9][0-9]*$/.test(iterationText)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count');
    if (!nonce.startsWith(session.clientNonce)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce');
    if (nonce.length === session.clientNonce.length) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short');

    const iterations = parseInt(iterationText, 10);
    const saltBytes = Buffer.from(salt, 'base64');
    const enc = new TextEncoder();
    const passwordBytes = enc.encode(password);
    const iterHmacKey = await crypto.subtle.importKey('raw', passwordBytes, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    let ui1 = new Uint8Array(await crypto.subtle.sign('HMAC', iterHmacKey, Buffer.concat([saltBytes, Buffer.from([0, 0, 0, 1])])));
    let ui = ui1;
    for (var i = 0; i < iterations - 1; i++) {
      ui1 = new Uint8Array(await crypto.subtle.sign('HMAC', iterHmacKey, ui1));
      ui = Buffer.from(ui.map((_, i) => ui[i] ^ ui1[i]));
    }
    const saltedPassword = ui;

    const ckHmacKey = await crypto.subtle.importKey('raw', saltedPassword, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    const clientKey = new Uint8Array(await crypto.subtle.sign('HMAC', ckHmacKey, enc.encode('Client Key')));
    const storedKey = await crypto.subtle.digest('SHA-256', clientKey);

    const clientFirstMessageBare = 'n=*,r=' + session.clientNonce;
    const serverFirstMessage = 'r=' + nonce + ',s=' + salt + ',i=' + iterations;
    const clientFinalMessageWithoutProof = 'c=biws,r=' + nonce;
    const authMessage = clientFirstMessageBare + ',' + serverFirstMessage + ',' + clientFinalMessageWithoutProof;

    const csHmacKey = await crypto.subtle.importKey('raw', storedKey, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    var clientSignature = new Uint8Array(await crypto.subtle.sign('HMAC', csHmacKey, enc.encode(authMessage)));
    var clientProofBytes = Buffer.from(clientKey.map((_, i) => clientKey[i] ^ clientSignature[i]));
    var clientProof = clientProofBytes.toString('base64');

    const skHmacKey = await crypto.subtle.importKey('raw', saltedPassword, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    const serverKey = await crypto.subtle.sign('HMAC', skHmacKey, enc.encode('Server Key'));
    const ssbHmacKey = await crypto.subtle.importKey('raw', serverKey, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    var serverSignatureBytes = Buffer.from(await crypto.subtle.sign('HMAC', ssbHmacKey, enc.encode(authMessage)));

    session.message = 'SASLResponse';
    session.serverSignature = serverSignatureBytes.toString('base64');
    session.response = clientFinalMessageWithoutProof + ',p=' + clientProof;

    this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
  };
}

class NeonPool extends Pool {
  Client = NeonClient;
}

export {
  Socket as neonConfig,
  NeonPool as Pool,
  NeonClient as Client,
};

export {
  Connection,
  DatabaseError,
  Query,
  ClientBase,
  defaults,
  types,
} from 'pg';
