import { createHash } from "node:crypto";
export function consumeRateLimit(
  db,
  category,
  identity,
  limit,
  duration,
  now = Date.now(),
) {
  const key = createHash("sha256")
    .update(`${category}:${identity}`)
    .digest("hex");
  return db.transaction((raw) => {
    raw.prepare("DELETE FROM RateLimit WHERE resetAt<=?").run(now);
    const row = raw.prepare("SELECT count FROM RateLimit WHERE key=?").get(key);
    if (row && row.count >= limit) return false;
    raw
      .prepare(
        "INSERT INTO RateLimit(key,count,resetAt) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1",
      )
      .run(key, now + duration);
    return true;
  });
}
