import { isTaskInModule } from "./task-modules.js";
export async function setTaskProgress(db, userId, slug, taskId, solved) {
  if (!isTaskInModule(slug, taskId) || typeof solved !== "boolean")
    throw Error("Некорректная задача");
  if (solved)
    await db.run(
      "INSERT INTO TaskProgress(userId,module,taskId,completedAt) VALUES(?,?,?,?) ON CONFLICT(userId,module,taskId) DO NOTHING",
      [userId, slug, taskId, new Date().toISOString()],
    );
  else
    await db.run(
      "DELETE FROM TaskProgress WHERE userId=? AND module=? AND taskId=?",
      [userId, slug, taskId],
    );
}
