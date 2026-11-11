import { mkdir, writeFile, readFile, unlink } from "node:fs/promises";
import path from "node:path";
import { connectDB, createId } from "./db.js";
import { canAccessCourse } from "./session.js";
import { consumeRateLimit } from "./rate-limit.js";
export const MAX_UPLOAD_SIZE = 10 * 1024 * 1024;
export function detectFileType(bytes) {
  if (bytes.subarray(0, 5).toString() === "%PDF-")
    return { mime: "application/pdf", extension: ".pdf" };
  if (
    bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  )
    return { mime: "image/png", extension: ".png" };
  if (bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255)
    return { mime: "image/jpeg", extension: ".jpg" };
  if (
    bytes.subarray(0, 4).toString() === "RIFF" &&
    bytes.subarray(8, 12).toString() === "WEBP"
  )
    return { mime: "image/webp", extension: ".webp" };
  return null;
}
export const uploadDirectory = () =>
  path.resolve(
    /* turbopackIgnore: true */ process.env.UPLOAD_DIR ||
      path.join(process.cwd(), "storage", "uploads"),
  );
export async function saveUpload(file, user, { optional = false } = {}) {
  if (!file || typeof file.arrayBuffer !== "function" || file.size === 0) {
    if (optional) return "";
    throw Error("Выберите файл решения");
  }
  if (file.size > MAX_UPLOAD_SIZE)
    throw Error("Максимальный размер файла — 10 МБ");
  const bytes = Buffer.from(await file.arrayBuffer()),
    type = detectFileType(bytes);
  if (!type || bytes.length > MAX_UPLOAD_SIZE)
    throw Error("Разрешены только PDF, PNG, JPEG и WebP");
  const db = await connectDB();
  if (!consumeRateLimit(db, "uploads", user.id, 30, 3600000))
    throw Error("Слишком много загрузок");
  const id = createId(),
    storageName = id + type.extension;
  await mkdir(uploadDirectory(), { recursive: true, mode: 0o700 });
  await writeFile(path.join(uploadDirectory(), storageName), bytes, {
    flag: "wx",
    mode: 0o600,
  });
  try {
    await db.run(
      "INSERT INTO Upload(id,storageName,mime,size,ownerId,createdAt) VALUES(?,?,?,?,?,?)",
      [
        id,
        storageName,
        type.mime,
        bytes.length,
        user.id,
        new Date().toISOString(),
      ],
    );
  } catch (error) {
    await unlink(path.join(uploadDirectory(), storageName));
    throw error;
  }
  return `/api/files/${id}`;
}
export async function canReadFile(db, user, url, ownerId) {
  if (!user) return false;
  if (user.role === 'ADMIN' || (ownerId === user.id && user.role !== 'TEACHER')) return true;
  for (const table of ["Homework", "Trial"]) {
    const rows = user.role === 'TEACHER'
      ? await db.all(`SELECT w.courseId FROM ${table} w WHERE (w.description=? OR w.solutionUrl=?) AND EXISTS (SELECT 1 FROM StudentCourse c JOIN TeacherSubject t ON t.subject=c.courseId WHERE c.userId=w.userId AND t.userId=?)`, [url, url, user.id])
      : await db.all(`SELECT courseId FROM ${table} WHERE userId=? AND (description=? OR solutionUrl=?)`, [user.id, url, url]);
    if (rows.some((work) => work.courseId === 'legacy' ? canAccessCourse(user) : canAccessCourse(user, work.courseId))) return true;
  }
  return false;
}
export async function fileResponse(filename, mime) {
  try {
    const bytes = await readFile(/* turbopackIgnore: true */ filename);
    return new Response(bytes, {
      headers: {
        "Content-Type": mime,
        "Content-Disposition": "attachment",
        "Content-Length": String(bytes.length),
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "sandbox; default-src 'none'",
      },
    });
  } catch (error) {
    if (error.code === "ENOENT")
      return new Response("Файл не найден", { status: 404 });
    throw error;
  }
}
