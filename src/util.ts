import { Client, ClientBase, Pool } from '../export';
import type { Query } from './queries';

export async function timed(f: () => Promise<any>) {
  const t0 = Date.now();
  const result = await f();
  const t = Date.now() - t0;
  return [t, result] as const;
}

export async function timedRepeats(n: number, f: () => Promise<any>, timeListener = (ms: number, result: any) => { }) {
  const results = [];
  for (let i = 0; i < n; i++) {
    const tPlusResult = await timed(f);
    const [t, result] = tPlusResult;
    timeListener(t, result);
    results.push(tPlusResult);
  }
  const total = results.reduce((memo, [t]) => memo + t, 0);
  return [total, results] as const;
}

export async function runQuery(queryable: ClientBase | Pool, query: Query) {
  const { sql, test } = query;
  const { rows } = await queryable.query(sql);
  if (!test(rows)) throw new Error(`Result fails test\nQuery: ${sql}\nResult: ${JSON.stringify(rows)}`);
  return rows;
}

export async function clientRunQuery(n: number, client: Client, ctx: ExecutionContext, query: Query) {
  await client.connect();
  const tPlusResults = await timedRepeats(n, () => runQuery(client, query));
  ctx.waitUntil(client.end());
  return tPlusResults;
}

export async function poolRunQuery(n: number, dbUrl: string, ctx: ExecutionContext, query: Query) {
  const pool = new Pool({ connectionString: dbUrl });
  const tPlusResults = await timedRepeats(n, () => runQuery(pool, query));
  ctx.waitUntil(pool.end());
  return tPlusResults;
}
