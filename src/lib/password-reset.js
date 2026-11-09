import { createHash, createHmac, randomBytes, randomInt, timingSafeEqual } from "node:crypto";
import bcrypt from "bcryptjs";
import { clearRateLimit } from "./rate-limit.js";

export const PASSWORD_RESET_COOKIE = "passwordReset";
export const PASSWORD_RESET_LIFETIME = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

export const newPasswordResetToken = () => randomBytes(32).toString("base64url");
const tokenHash = (token) => createHash("sha256").update(token).digest("hex");
// The HMAC key stays in the browser cookie, so a database copy alone cannot verify guessed codes.
const codeDigest = (token, code) => createHmac("sha256", token).update(code).digest("hex");

export function issuePasswordReset(db, email, token, now = Date.now()) {
  const code = String(randomInt(10000000, 100000000));
  return db.transaction((raw) => {
    const user = raw.prepare("SELECT id,email FROM User WHERE email=?").get(email);
    raw.prepare("DELETE FROM PasswordReset WHERE expiresAt<=?").run(now);
    // Use an indistinguishable challenge for an unregistered address, with no account to update.
    raw.prepare(
      "INSERT INTO PasswordReset(tokenHash,userId,codeDigest,expiresAt) VALUES(?,?,?,?)",
    ).run(tokenHash(token), user?.id ?? null, codeDigest(token, code), now + PASSWORD_RESET_LIFETIME);
    return user ? { email: user.email, code } : null;
  });
}

export function replaceAccountPassword(raw, userId, hash) {
  const user = raw.prepare("UPDATE User SET password=? WHERE id=? RETURNING email").get(hash, userId);
  if (!user) return false;
  raw.prepare("DELETE FROM PasswordReset WHERE userId=?").run(userId);
  raw.prepare("DELETE FROM Session WHERE userId=?").run(userId);
  clearRateLimit(raw, "login", user.email);
  return true;
}

export async function completePasswordReset(db, token, code, password, clock = Date.now) {
  if (typeof token !== "string" || !/^[A-Za-z0-9_-]{43}$/.test(token) ||
      typeof code !== "string" || !/^\d{8}$/.test(code)) return false;

  const key = tokenHash(token);
  const digest = Buffer.from(codeDigest(token, code), "hex");
  const check = (raw) => {
    const reset = raw.prepare("SELECT * FROM PasswordReset WHERE tokenHash=?").get(key);
    if (!reset || reset.expiresAt <= clock() || reset.attempts >= MAX_ATTEMPTS) return null;
    return reset;
  };
  const accepted = db.transaction((raw) => {
    const reset = check(raw);
    if (!reset) return false;
    const expected = Buffer.from(reset.codeDigest, "hex");
    if (expected.length === digest.length && timingSafeEqual(expected, digest) && reset.userId)
      return true;
    raw.prepare("UPDATE PasswordReset SET attempts=attempts+1 WHERE tokenHash=?").run(key);
    return false;
  });
  if (!accepted) return false;

  const passwordHash = await bcrypt.hash(password, 12);
  // Hash outside the write lock. Recheck after hashing to reject replay, expiry or an intervening reset.
  return db.transaction((raw) => {
    const reset = check(raw);
    return Boolean(reset && replaceAccountPassword(raw, reset.userId, passwordHash));
  });
}
