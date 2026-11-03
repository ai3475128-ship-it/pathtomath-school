import { loadEnvFile } from "node:process";
import { isTaskInModule } from "../src/lib/task-modules.js";
try {
  loadEnvFile(".env.local");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const { connectDB } = await import("../src/lib/db.js");
const db = await connectDB();
try {
  const args = process.argv.slice(2);
  if (args.length === 0)
    console.log(
      JSON.stringify(
        await db.all(
          "SELECT userId,taskNumber,candidates FROM ProgressMigrationIssue",
        ),
        null,
        2,
      ),
    );
  else {
    if (args.length !== 4)
      throw Error(
        "Usage: node scripts/review-progress.mjs USER_ID OLD_NUMBER MODULE TASK_ID",
      );
    const [userId, oldNumber, slug, newId] = args,
      number = Number(oldNumber),
      taskId = Number(newId);
    if (!Number.isSafeInteger(number) || !isTaskInModule(slug, taskId))
      throw Error("Invalid task");
    db.transaction((raw) => {
      const issue = raw
        .prepare(
          "SELECT candidates FROM ProgressMigrationIssue WHERE userId=? AND taskNumber=?",
        )
        .get(userId, number);
      if (
        !issue ||
        !JSON.parse(issue.candidates).some(
          (x) => x.module === slug && x.taskId === taskId,
        )
      )
        throw Error("Selected task is not a migration candidate");
      const old = raw
        .prepare(
          "SELECT completedAt FROM Progress WHERE userId=? AND taskNumber=?",
        )
        .get(userId, number);
      raw
        .prepare(
          "INSERT OR IGNORE INTO TaskProgress(userId,module,taskId,completedAt) VALUES(?,?,?,?)",
        )
        .run(
          userId,
          slug,
          taskId,
          old?.completedAt || new Date().toISOString(),
        );
      raw
        .prepare(
          "DELETE FROM ProgressMigrationIssue WHERE userId=? AND taskNumber=?",
        )
        .run(userId, number);
    });
    console.log("Отметка сверена. Исходная запись Progress сохранена.");
  }
} finally {
  db.dispose();
}
