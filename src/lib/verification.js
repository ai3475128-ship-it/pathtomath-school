import {
  createHash,
  randomInt,
  randomUUID,
  timingSafeEqual,
} from "node:crypto";
const hashCode = (id, code) =>
  createHash("sha256").update(`${id}:${code}`).digest("hex");
export function verificationChallenge(now = Date.now()) {
  const id = randomUUID(),
    code = String(randomInt(100000, 1000000));
  return { id, code, digest: hashCode(id, code), expiresAt: now + 15 * 60000 };
}
export function activatePendingUser(db, email, code, now = Date.now()) {
  return db.transaction((raw) => {
    const pending = raw
      .prepare("SELECT * FROM PendingUsers WHERE email=?")
      .get(email);
    if (!pending || pending.expiresAt <= now || pending.attempts >= 5)
      return false;
    raw
      .prepare("UPDATE PendingUsers SET attempts=attempts+1 WHERE email=?")
      .run(email);
    const expected = Buffer.from(pending.code, "hex"),
      received = Buffer.from(hashCode(pending.id, code), "hex");
    if (
      expected.length !== received.length ||
      !timingSafeEqual(expected, received)
    )
      return false;
    raw
      .prepare(
        "INSERT INTO User(id,email,name,password,role,createdAt) VALUES(?,?,?,?,'STUDENT',?)",
      )
      .run(
        randomUUID(),
        pending.email,
        pending.name,
        pending.password,
        new Date(now).toISOString(),
      );
    raw.prepare("DELETE FROM PendingUsers WHERE email=?").run(email);
    return true;
  });
}
