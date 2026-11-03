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
  await db.run(
    "INSERT INTO User(id,email,name,password,role,createdAt) VALUES(?,?,?,?,'ADMIN',?)",
    [
      randomUUID(),
      email,
      process.env.ADMIN_NAME?.trim() || "Руководитель",
      await bcrypt.hash(password, 12),
      new Date().toISOString(),
    ],
  );
  console.log("Администратор создан. Удалите ADMIN_PASSWORD из окружения.");
} finally {
  db.dispose();
}
