import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connectDB } from "./db.js";
import {
  SESSION_COOKIE,
  readSession,
  isManagement,
  canAccessCourse,
} from "./session.js";
export { isManagement, canAccessCourse } from "./session.js";
export async function getCurrentUser() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return token ? readSession(await connectDB(), token) : null;
}
export async function requireUser(roles) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (roles && !roles.includes(user.role))
    redirect("/profile?error=restricted");
  return user;
}
export const requireAdmin = () => requireUser(["ADMIN"]);
export const requireManagement = () => requireUser(["ADMIN", "TEACHER"]);
export async function requireCourseUser() {
  const user = await requireUser();
  if (!canAccessCourse(user)) redirect("/profile");
  return user;
}
export async function requireOwnedWork(table, id, { management = false } = {}) {
  const user = management
    ? await requireManagement()
    : await requireCourseUser();
  if (!["Homework", "Trial"].includes(table)) throw Error("Invalid work type");
  const db = await connectDB(),
    work = await db.get(`SELECT * FROM ${table} WHERE id=?`, [id]);
  if (!work || (!isManagement(user) && work.userId !== user.id))
    throw Error("Работа недоступна");
  return { user, db, work };
}
