import { getCurrentUser } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { getTaskModule, isTaskInModule } from "@/lib/task-modules";
import { setTaskProgress } from "@/lib/progress";
import { sameOrigin, limitedBody } from "@/lib/http";
export async function GET(request) {
  const slug = getTaskModule(new URL(request.url).searchParams.get("module"));
  if (!slug)
    return Response.json({ error: "Некорректный раздел" }, { status: 400 });
  const user = await getCurrentUser();
  if (!user)
    return Response.json(
      { isAuth: false, solvedSubTasks: [] },
      { headers: { "Cache-Control": "private, no-store" } },
    );
  const db = await connectDB(),
    rows = await db.all(
      "SELECT taskId FROM TaskProgress WHERE userId=? AND module=?",
      [user.id, slug],
    );
  return Response.json(
    { isAuth: true, solvedSubTasks: rows.map((r) => r.taskId) },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
export async function POST(request) {
  if (!sameOrigin(request))
    return Response.json({ error: "Forbidden" }, { status: 403 });
  const user = await getCurrentUser();
  if (!user)
    return Response.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );
  let data;
  try {
    data = JSON.parse((await limitedBody(request, 4096)).toString());
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }
  const { module: slug, taskId, solved } = data || {};
  if (!isTaskInModule(slug, taskId) || typeof solved !== "boolean")
    return Response.json({ success: false }, { status: 400 });
  await setTaskProgress(await connectDB(), user.id, slug, taskId, solved);
  return Response.json({ success: true, solved });
}
