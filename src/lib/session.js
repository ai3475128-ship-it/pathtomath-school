import { randomBytes, createHash } from "node:crypto";
export const SESSION_COOKIE = "userSession",
  SESSION_DURATION = 7 * 86400000;
const hash = (token) => createHash("sha256").update(token).digest("hex");
export async function createSession(db, userId, now = Date.now()) {
  const token = randomBytes(32).toString("base64url");
  await db.run("DELETE FROM Session WHERE expiresAt<=?", [now]);
  await db.run(
    "INSERT INTO Session(tokenHash,userId,expiresAt) VALUES(?,?,?)",
    [hash(token), userId, now + SESSION_DURATION],
  );
  return token;
}
export async function readSession(db, token, now = Date.now()) {
  if (typeof token !== "string" || !/^[A-Za-z0-9_-]{43}$/.test(token))
    return null;
  return (
    (await db.get(
      "SELECT u.id,u.email,u.name,u.role,u.createdAt FROM Session s JOIN User u ON u.id=s.userId WHERE s.tokenHash=? AND s.expiresAt>?",
      [hash(token), now],
    )) ?? null
  );
}
export async function revokeSession(db, token) {
  if (typeof token === "string")
    await db.run("DELETE FROM Session WHERE tokenHash=?", [hash(token)]);
}
export const isManagement = (user) =>
  user?.role === "ADMIN" || user?.role === "TEACHER";
export const canAccessCourse = (user) =>
  isManagement(user) || user?.role === "PREMIUM_STUDENT";
