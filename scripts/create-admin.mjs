import { loadEnvFile } from "node:process";
import bcrypt from "bcryptjs";
import { randomUUID } from "node:crypto";
import { emailAddress, passwordValue } from "../src/lib/validation.js";
try {
  loadEnvFile(".env.local");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const email = emailAddress(process.env.ADMIN_EMAIL),
  password = passwordValue(process.env.ADMIN_PASSWORD);
if (password.length < 12)
  throw Error("Пароль администратора должен содержать от 12 символов");
const { connectDB } = await import("../src/lib/db.js");
const db = await connectDB();
try {
  if (await db.get("SELECT id FROM User WHERE email=?", [email]))
    throw Error(
      "Аккаунт уже существует: автоматическое повышение роли запрещено",
    );
  const userId = randomUUID();
  const hash = await bcrypt.hash(password, 12);
  db.transaction((raw) => {
    raw.prepare("INSERT INTO User(id,email,name,password,role,createdAt) VALUES(?,?,?,?,'ADMIN',?)")
      .run(userId, email, process.env.ADMIN_NAME?.trim() || "Руководитель", hash, new Date().toISOString());
    raw.prepare("INSERT INTO TeacherSubject(userId,subject) VALUES(?,'ege-math')").run(userId);
  });
  console.log("Администратор создан. Удалите ADMIN_PASSWORD из окружения.");
} finally {
  db.dispose();
}
