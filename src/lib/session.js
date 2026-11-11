import { randomBytes, createHash } from "node:crypto";
export const SESSION_COOKIE = "userSession",
  SESSION_DURATION = 7 * 86400000;
const hash = (token) => createHash("sha256").update(token).digest("hex");
export async function createSession(db, userId, now = Date.now(), credentials) {
  const token = randomBytes(32).toString("base64url");
  const created = db.transaction((raw) => {
    // Check inside the transaction so a blocked account cannot race with login.
    const user = raw.prepare("SELECT password, isBlocked FROM User WHERE id=?").get(userId);
    if (!user || user.isBlocked) return false;
    if (credentials) {
      // Password comparison happened outside this transaction. Reject a login that raced with a reset.
      if (user.password !== credentials.expectedHash) return false;
      if (credentials.upgradedHash)
        raw.prepare("UPDATE User SET password=? WHERE id=?").run(credentials.upgradedHash, userId);
    }
    raw.prepare("DELETE FROM Session WHERE expiresAt<=?").run(now);
    raw.prepare("INSERT INTO Session(tokenHash,userId,expiresAt) VALUES(?,?,?)")
      .run(hash(token), userId, now + SESSION_DURATION);
    return true;
  });
  return created ? token : null;
}
export async function readSession(db, token, now = Date.now()) {
  if (typeof token !== "string" || !/^[A-Za-z0-9_-]{43}$/.test(token))
    return null;
  const user = await db.get(
    "SELECT u.id,u.email,u.name,u.role,u.createdAt FROM Session s JOIN User u ON u.id=s.userId WHERE s.tokenHash=? AND s.expiresAt>? AND u.isBlocked=0",
    [hash(token), now],
  );
  if (!user) return null;
  const courses = await db.all('SELECT courseId FROM StudentCourse WHERE userId=?', [user.id]);
  const subjects = await db.all('SELECT subject FROM TeacherSubject WHERE userId=?', [user.id]);
  return { ...user, courses: courses.map((row) => row.courseId), subjects: subjects.map((row) => row.subject) };
}
export async function revokeSession(db, token) {
  if (typeof token === "string")
    await db.run("DELETE FROM Session WHERE tokenHash=?", [hash(token)]);
}
export const isManagement = (user) =>
  user?.role === "ADMIN" || user?.role === "TEACHER";
export const canAccessCourse = (user, courseId) => {
  if (user?.role === 'ADMIN') return true;
  if (user?.role === 'TEACHER') return !courseId || user.subjects?.includes(courseId);
  return user?.role === 'PREMIUM_STUDENT' && (!courseId || user.courses?.includes(courseId));
};
