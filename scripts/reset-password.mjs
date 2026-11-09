import { loadEnvFile } from "node:process";
import bcrypt from "bcryptjs";
import { emailAddress, passwordValue } from "../src/lib/validation.js";
import { replaceAccountPassword } from "../src/lib/password-reset.js";
try {
  loadEnvFile(".env.local");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const email = emailAddress(process.env.RESET_EMAIL),
  password = passwordValue(process.env.RESET_PASSWORD);
const { connectDB } = await import("../src/lib/db.js");
const db = await connectDB();
try {
  const user = await db.get("SELECT id FROM User WHERE email=?", [email]);
  if (!user) throw Error("Аккаунт не найден");
  const hash = await bcrypt.hash(password, 12);
  if (!db.transaction((raw) => replaceAccountPassword(raw, user.id, hash)))
    throw Error("Аккаунт не найден");
  console.log("Пароль обновлён, все сессии отозваны.");
} finally {
  db.dispose();
}
