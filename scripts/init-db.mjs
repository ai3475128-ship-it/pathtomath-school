import { loadEnvFile } from "node:process";
try {
  loadEnvFile(".env.local");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const { connectDB } = await import("../src/lib/db.js");
const db = await connectDB();
try {
  const row = await db.get(
    "SELECT COUNT(*) AS count FROM ProgressMigrationIssue",
  );
  console.log(
    `База готова. Неоднозначные старые отметки сохранены отдельно: ${row.count}.`,
  );
} finally {
  db.dispose();
}
