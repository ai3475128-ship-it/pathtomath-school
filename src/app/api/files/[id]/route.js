import path from "node:path";
import { getCurrentUser } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { canReadFile, fileResponse, uploadDirectory } from "@/lib/uploads";
export async function GET(request, { params }) {
  const user = await getCurrentUser();
  if (!user) return new Response("Требуется вход", { status: 401 });
  const { id } = await params,
    db = await connectDB(),
    file = await db.get("SELECT * FROM Upload WHERE id=?", [id]);
  if (
    !file ||
    !(await canReadFile(db, user, `/api/files/${id}`, file.ownerId)) ||
    path.basename(file.storageName) !== file.storageName
  )
    return new Response("Файл недоступен", { status: 404 });
  return fileResponse(
    path.join(uploadDirectory(), file.storageName),
    file.mime,
  );
}
