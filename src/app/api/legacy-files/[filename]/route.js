import path from "node:path";
import { readFile } from "node:fs/promises";
import { getCurrentUser } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { canReadFile, detectFileType, fileResponse } from "@/lib/uploads";
export async function GET(request, { params }) {
  const user = await getCurrentUser();
  if (!user) return new Response("Требуется вход", { status: 401 });
  const { filename } = await params;
  if (!/^[a-zA-Z0-9_-]+\.(pdf|png|jpe?g|webp)$/i.test(filename))
    return new Response("Файл недоступен", { status: 404 });
  const db = await connectDB();
  if (!(await canReadFile(db, user, `/uploads/${filename}`)))
    return new Response("Файл недоступен", { status: 404 });
  const location = path.join(
    /* turbopackIgnore: true */ process.env.LEGACY_UPLOAD_DIR ||
      path.join(process.cwd(), "public", "uploads"),
    filename,
  );
  try {
    const type = detectFileType(
      await readFile(/* turbopackIgnore: true */ location),
    );
    return type
      ? fileResponse(location, type.mime)
      : new Response("Неподдерживаемый файл", { status: 415 });
  } catch (error) {
    if (error.code === "ENOENT")
      return new Response("Файл не найден", { status: 404 });
    throw error;
  }
}
