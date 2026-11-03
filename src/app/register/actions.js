"use server";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { connectDB } from "@/lib/db";
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
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASSWORD
  )
    redirect("/register?error=unavailable");
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
  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    disableFileAccess: true,
    disableUrlAccess: true,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
  let delivered = false;
  try {
    await transport.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: "Код активации профиля",
      text: `Привет! Код активации PATHtoMATH: ${challenge.code}. Код действует 15 минут.`,
    });
    delivered = true;
  } catch {
    await db.run("DELETE FROM PendingUsers WHERE id=?", [challenge.id]);
    console.error("Не удалось отправить письмо подтверждения");
  } finally {
    transport.close();
  }
  if (!delivered) redirect("/register?error=server");
  redirect(`/verify-email?email=${encodeURIComponent(email)}`);
}
