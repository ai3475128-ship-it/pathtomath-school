"use server";
import { revalidatePath } from "next/cache";
import { connectDB, createId } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { text } from "@/lib/validation";
import { getTaskModule, isTaskInModule } from "@/lib/task-modules";
import { displayNumberForModule } from "@/lib/ege-sections";
import { consumeRateLimit } from "@/lib/rate-limit";
export async function sendErrorReport(formData) {
  const slug = getTaskModule(formData.get("module")),
    taskId = Number(formData.get("taskId"));
  let description;
  try {
    description = text(formData.get("description"), 5000, 3);
  } catch {
    return { success: false, error: "Заполните описание (3–5000 символов)" };
  }
  if (!slug || !isTaskInModule(slug, taskId))
    return { success: false, error: "Проверьте раздел и номер задачи" };
  const user = await getCurrentUser(),
    db = await connectDB();
  if (
    !consumeRateLimit(
      db,
      "error-reports",
      user?.id || "guest",
      user ? 20 : 10,
      3600000,
    )
  )
    return {
      success: false,
      error: "Слишком много обращений. Повторите позже",
    };
  await db.run(
    "INSERT INTO ErrorReports(id,userId,sectionNumber,taskId,description,status,createdAt,module) VALUES(?,?,?,?,?,?,?,?)",
    [
      createId(),
      user?.id || "GUEST",
      displayNumberForModule(slug) || Number(slug.match(/\d+/)?.[0]),
      taskId,
      description,
      "OPEN",
      new Date().toISOString(),
      slug,
    ],
  );
  revalidatePath("/admin-panel");
  return { success: true };
}
