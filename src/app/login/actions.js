"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { connectDB, createId } from "@/lib/db";
import {
  createSession,
  revokeSession,
  SESSION_COOKIE,
  SESSION_DURATION,
  isManagement,
} from "@/lib/session";
import { emailAddress } from "@/lib/validation";
import { consumeRateLimit } from "@/lib/rate-limit";
export async function loginUser(formData) {
  let email;
  const password = formData.get("password");
  try {
    email = emailAddress(formData.get("email"));
  } catch {
    redirect("/login?error=fields");
  }
  if (
    typeof password !== "string" ||
    !password ||
    Buffer.byteLength(password) > 72
  )
    redirect("/login?error=wrong");
  const db = await connectDB();
  if (!consumeRateLimit(db, "login", email, 10, 15 * 60000))
    redirect("/login?error=limited");
  const user = await db.get("SELECT * FROM User WHERE email=?", [email]);
  const dummy = "$2b$12$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy";
  const valid = await bcrypt.compare(password, user?.password || dummy);
  if (!user || !valid) redirect("/login?error=wrong");
  if (formData.get("selectedTab") === "teacher" && !isManagement(user))
    redirect("/login?error=not_a_teacher&tab=teacher");
  if (bcrypt.getRounds(user.password) < 12)
    await db.run("UPDATE User SET password=? WHERE id=?", [
      await bcrypt.hash(password, 12),
      user.id,
    ]);
  const store = await cookies();
  await revokeSession(db, store.get(SESSION_COOKIE)?.value);
  const token = await createSession(db, user.id);
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_DURATION / 1000,
    path: "/",
  });
  store.delete("userId");
  await db.run(
    "INSERT INTO ActivityLog(id,userId,email,actionType,timestamp) VALUES(?,?,?,?,?)",
    [createId(), user.id, user.email, "LOGIN", new Date().toISOString()],
  );
  redirect(
    user.role === "ADMIN"
      ? "/admin-panel"
      : user.role === "TEACHER"
        ? "/teacher-dashboard"
        : "/profile",
  );
}
export async function logoutUser() {
  const store = await cookies();
  await revokeSession(await connectDB(), store.get(SESSION_COOKIE)?.value);
  store.delete(SESSION_COOKIE);
  store.delete("userId");
  redirect("/");
}
