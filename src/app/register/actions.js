"use server";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { sendEmail, smtpConfigured } from "@/lib/email";
import { safeSmtpError } from "@/lib/smtp-options";
import { text, emailAddress, passwordValue } from "@/lib/validation";
import { verificationChallenge } from "@/lib/verification";
import { consumeRateLimit } from "@/lib/rate-limit";
export async function registerNewUser(formData) {
  let name, email, password;
  try {
    name = text(formData.get("name"), 150, 2);
    email = emailAddress(formData.get("email"));
    password = passwordValue(formData.get("password"));
  } catch {
    redirect("/register?error=fields");
  }
  const db = await connectDB();
  if (
    !consumeRateLimit(db, "register-email", email, 3, 15 * 60000) ||
    !consumeRateLimit(db, "register-global", "all", 100, 15 * 60000)
  )
    redirect("/register?error=limited");
  if (await db.get("SELECT id FROM User WHERE email=?", [email]))
    redirect("/register?error=exists");
  if (!smtpConfigured()) redirect("/register?error=unavailable");
  const challenge = verificationChallenge();
  const hashed = await bcrypt.hash(password, 12);
  await db.run(
    `INSERT INTO PendingUsers(id,email,name,password,code,createdAt,attempts,expiresAt) VALUES(?,?,?,?,?,?,0,?) ON CONFLICT(email) DO UPDATE SET id=excluded.id,name=excluded.name,password=excluded.password,code=excluded.code,createdAt=excluded.createdAt,attempts=0,expiresAt=excluded.expiresAt`,
    [
      challenge.id,
      email,
      name,
      hashed,
      challenge.digest,
      new Date().toISOString(),
      challenge.expiresAt,
    ],
  );
  try {
    await sendEmail({
      to: email,
      subject: "Код активации профиля",
      text: `Привет! Код активации PATHtoMATH: ${challenge.code}. Код действует 15 минут.`,
    });
  } catch (error) {
    await db.run("DELETE FROM PendingUsers WHERE id=?", [challenge.id]);
    console.error("Не удалось отправить письмо подтверждения", safeSmtpError(error));
    redirect("/register?error=server");
  }
  redirect(`/verify-email?email=${encodeURIComponent(email)}`);
}
