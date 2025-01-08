/**
 * This file shims parts of the Node.js built-in net and tls packages, by
 * implementing net.Socket and tls.connect() on top of WebSockets. It's
 * designed to work both in browsers and in Cloudflare Workers (where
 * WebSockets work a bit differently). The calling client is assumed to be pg
 * (node-postgres).
 */
import { EventEmitter } from 'events';
import type * as subtls from 'subtls';
export type { subtls };
export interface WebSocketLike {
    readonly readyState: number;
    binaryType: string;
    close(code?: number, reason?: string): void;
    send(data: any): void;
    addEventListener(type: 'open' | 'message' | 'close' | 'error', listener: (this: WebSocketLike, ev: any) => any, options?: any): void;
}
export interface WebSocketConstructor {
    new (...args: any[]): WebSocketLike;
}
export declare function isIP(input: string): number;
export interface FetchEndpointOptions {
    jwtAuth?: boolean;
}
export interface SocketDefaults {
    poolQueryViaFetch: boolean;
    fetchEndpoint: string | ((host: string, port: number | string, options?: FetchEndpointOptions) => string);
    fetchConnectionCache: boolean;
    fetchFunction: any;
    webSocketConstructor: WebSocketConstructor | undefined;
    wsProxy: string | ((host: string, port: number | string) => string);
    useSecureWebSocket: boolean;
    forceDisablePgSSL: boolean;
    coalesceWrites: boolean;
    pipelineConnect: 'password' | false;
    subtls: typeof subtls | undefined;
    rootCerts: string;
    pipelineTLS: boolean;
    disableSNI: boolean;
}
export declare class Socket extends EventEmitter {
    static defaults: SocketDefaults;
    static opts: Partial<SocketDefaults>;
    private opts;
    /**
     * **Experimentally**, when `poolQueryViaFetch` is `true`, and no listeners
     * for the `"connect"`, `"acquire"`, `"release"` or `"remove"` events are set
     * on the `Pool`, queries via `Pool.query()` will be sent by low-latency HTTP
     * fetch request.
     *
     * Default: `false`.
     */
    static get poolQueryViaFetch(): SocketDefaults["poolQueryViaFetch"];
    static set poolQueryViaFetch(newValue: SocketDefaults['poolQueryViaFetch']);
    /**
     * Set `fetchEndpoint` to set the server endpoint to be sent queries via http
     * fetch. May be useful in local development (e.g. to set a port that's not
     * the default 443).
     *
     * Provide either the full endpoint URL, or a function that takes the
     * database host address, port and options, and returns the full endpoint URL
     * (including protocol).
     *
     * Default: custom logic to connect to Neon endpoints.
     */
    static get fetchEndpoint(): SocketDefaults["fetchEndpoint"];
    static set fetchEndpoint(newValue: SocketDefaults['fetchEndpoint']);
    /**
     * **DEPRECATED**. Previously, only when `fetchConnectionCache` was `true`
     * did queries carried via HTTP fetch make use of a connection pool/cache
     * on the server. All queries now use the connection pool/cache: this setting
     * is ignored.
     *
     * Default: `true`.
     */
    static get fetchConnectionCache(): SocketDefaults["fetchConnectionCache"];
    static set fetchConnectionCache(newValue: SocketDefaults['fetchConnectionCache']);
    /**
     * The `fetchFunction` option allows you to supply an alternative function
     * for making http requests. The function must accept the same arguments as
     * native `fetch`.
     *
     * Default: `undefined`.
     */
    static get fetchFunction(): SocketDefaults["fetchFunction"];
    static set fetchFunction(newValue: SocketDefaults['fetchFunction']);
    /**
     * Only if no global `WebSocket` object is available, such as in older
     * versions of Node, set `webSocketConstructor` to the constructor for a
     * custom WebSocket implementation, such as those provided by `ws` or
     * `undici`.
     *
     * Default: `undefined`.
     */
    static get webSocketConstructor(): SocketDefaults["webSocketConstructor"];
    static set webSocketConstructor(newValue: SocketDefaults['webSocketConstructor']);
    get webSocketConstructor(): SocketDefaults["webSocketConstructor"];
    set webSocketConstructor(newValue: SocketDefaults['webSocketConstructor']);
    /**
     * Set `wsProxy` to use your own WebSocket proxy server.
     *
     * Provide either the proxy server’s domain name, or a function that takes
     * the database host and port and returns the proxy server address (without
     * protocol).
     *
     * Example: `(host, port) => "myproxy.example.net?address=" + host + ":" + port`
     *
     * Default: `host => host + '/v2'`
     */
    static get wsProxy(): SocketDefaults["wsProxy"];
    static set wsProxy(newValue: SocketDefaults['wsProxy']);
    get wsProxy(): SocketDefaults["wsProxy"];
    set wsProxy(newValue: SocketDefaults['wsProxy']);
    /**
     * Batch multiple network writes per run-loop into a single outgoing
     * WebSocket message.
     *
     * Default: `true`.
     */
    static get coalesceWrites(): SocketDefaults["coalesceWrites"];
    static set coalesceWrites(newValue: SocketDefaults['coalesceWrites']);
    get coalesceWrites(): SocketDefaults["coalesceWrites"];
    set coalesceWrites(newValue: SocketDefaults['coalesceWrites']);
    /**
     * Use a secure (`wss:`) connection to the WebSocket proxy.
     *
     * Default: `true`.
     */
    static get useSecureWebSocket(): SocketDefaults["useSecureWebSocket"];
    static set useSecureWebSocket(newValue: SocketDefaults['useSecureWebSocket']);
    get useSecureWebSocket(): SocketDefaults["useSecureWebSocket"];
    set useSecureWebSocket(newValue: SocketDefaults['useSecureWebSocket']);
    /**
     * Disable TLS encryption in the Postgres protocol (as set via e.g.
     * `?sslmode=require` in the connection string). Connection remains secure
     * as long as `useSecureWebSocket` is `true`, which is the default.
     *
     * Default: `true`
     */
    static get forceDisablePgSSL(): SocketDefaults["forceDisablePgSSL"];
    static set forceDisablePgSSL(newValue: SocketDefaults['forceDisablePgSSL']);
    get forceDisablePgSSL(): SocketDefaults["forceDisablePgSSL"];
    set forceDisablePgSSL(newValue: SocketDefaults['forceDisablePgSSL']);
    /**
     * When using subtls with `forceDisablePgSSL = false` and Postgres connection
     * parameters that specify TLS, setting `disableSNI = true` means that no SNI
     * data in included in the Postgres TLS handshake.
     *
     * On Neon, disabling SNI and including the Neon project name in the password
     * avoids CPU-intensive SCRAM authentication, but this is only relevant for
     * earlier iterations of Neon's WebSocket support.
     *
     * Default: `false`.
     */
    static get disableSNI(): SocketDefaults["disableSNI"];
    static set disableSNI(newValue: SocketDefaults['disableSNI']);
    get disableSNI(): SocketDefaults["disableSNI"];
    set disableSNI(newValue: SocketDefaults['disableSNI']);
    /**
     * Pipelines the startup message, cleartext password message and first query
     * when set to `"password"`. This works only for cleartext password auth.
     *
     * Default: `"password"`.
     */
    static get pipelineConnect(): SocketDefaults["pipelineConnect"];
    static set pipelineConnect(newValue: SocketDefaults['pipelineConnect']);
    get pipelineConnect(): SocketDefaults["pipelineConnect"];
    set pipelineConnect(newValue: SocketDefaults['pipelineConnect']);
    /**
     * If `forceDisablePgSSL` is `false` and the Postgres connection parameters
     * specify TLS, you must supply the subtls TLS library to this option:
     *
     * ```
     * import { neonConfig } from '@neondatabase/serverless';
     * import * as subtls from 'subtls';
     * neonConfig.subtls = subtls;
     * ```
     *
     * Default: `undefined`.
     */
    static get subtls(): SocketDefaults["subtls"];
    static set subtls(newValue: SocketDefaults['subtls']);
    get subtls(): SocketDefaults["subtls"];
    set subtls(newValue: SocketDefaults['subtls']);
    /**
     * Pipeline the pg SSL request and TLS handshake when `forceDisablePgSSL` is
     * `false` and the Postgres connection parameters specify TLS. Currently
     * compatible only with Neon hosts.
     *
     * Default: `false`.
     */
    static get pipelineTLS(): SocketDefaults["pipelineTLS"];
    static set pipelineTLS(newValue: SocketDefaults['pipelineTLS']);
    get pipelineTLS(): SocketDefaults["pipelineTLS"];
    set pipelineTLS(newValue: SocketDefaults['pipelineTLS']);
    /**
     * Set `rootCerts` to a string comprising one or more PEM files. These are
     * the trusted root certificates for a TLS connection to Postgres when
     * `forceDisablePgSSL` is `false` and the Postgres connection parameters
     * specify TLS.
     *
     * Default: `""`.
     */
    static get rootCerts(): SocketDefaults["rootCerts"];
    static set rootCerts(newValue: SocketDefaults['rootCerts']);
    get rootCerts(): SocketDefaults["rootCerts"];
    set rootCerts(newValue: SocketDefaults['rootCerts']);
    wsProxyAddrForHost(host: string, port: number): string;
    connecting: boolean;
    pending: boolean;
    writable: boolean;
    encrypted: boolean;
    authorized: boolean;
    destroyed: boolean;
    private ws;
    private writeBuffer;
    private tlsState;
    private tlsRead;
    private tlsWrite;
    setNoDelay(): this;
    setKeepAlive(): this;
    ref(): this;
    unref(): this;
    connect(port: number | string, host: string, connectListener?: () => void): void;
    startTls(host: string): Promise<void>;
    tlsReadLoop(): Promise<void>;
    rawWrite(data: Uint8Array): void;
    write(data: Buffer | string, encoding?: string, callback?: (err?: any) => void): boolean;
    end(data?: Buffer | string, encoding?: string, callback?: () => void): this;
    destroy(): this;
}
