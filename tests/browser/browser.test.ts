import { expect, test, assertType } from 'vitest';
import { server } from '@vitest/browser/context';
import { neon, Pool, Client, type QueryResult } from '../../dist/npm';

const DATABASE_URL = server.config.env.VITE_NEON_DB_URL!;

test('log version', () => {
  if (typeof navigator !== 'undefined') {
    console.log(`UA: ${navigator.userAgent}`);
  }
});

test('http query', async () => {
  const sql = neon(DATABASE_URL);
  const str = 'fetch';
  const fetchResult = await sql`SELECT ${str} AS str`;
  assertType<Record<string, unknown>[]>(fetchResult);
  expect(fetchResult).toStrictEqual([{ str: 'fetch' }]);
});

test('pool.query() over WebSockets', async () => {
  const wsPool = new Pool({ connectionString: DATABASE_URL });
  const wsResult = await wsPool.query('SELECT $1::int AS one', [1]);
  assertType<QueryResult<any>>(wsResult);
  expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
  expect((wsResult as any).viaNeonFetch).toBeUndefined();
});

test('client.query()', async () => {
  const client = new Client(DATABASE_URL);
  await client.connect();
  const wsResult = await client.query('SELECT $1::int AS one', [1]);
  assertType<QueryResult<any>>(wsResult);
  await client.end();
  expect(wsResult.rows).toStrictEqual([{ one: 1 }]);
  expect((wsResult as any).viaNeonFetch).toBeUndefined();
});
