import { NextResponse } from "next/server";
import { getCurrentUser, isManagement } from "@/lib/auth";
import { connectDB, createId } from "@/lib/db";
import { text } from "@/lib/validation";
import { videoEmbedUrl } from "@/lib/videos";
import { egeSection } from "@/lib/ege-sections";
import { sameOrigin, limitedBody } from "@/lib/http";
export async function POST(request) {
  if (!sameOrigin(request))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const user = await getCurrentUser();
  if (!user)
    return NextResponse.json({ error: "Требуется вход" }, { status: 401 });
  if (!isManagement(user))
    return NextResponse.json({ error: "Недостаточно прав" }, { status: 403 });
  let title, url, sectionNum, isPremium;
  try {
    const bytes = await limitedBody(request);
    const form = await new Request(request.url, {
      method: "POST",
      headers: request.headers,
      body: bytes,
    }).formData();
    title = text(form.get("title"), 300);
    url = videoEmbedUrl(form.get("url"));
    sectionNum = Number(form.get("sectionNum"));
    isPremium = form.get("isPremium") === "on" ? 1 : 0;
    if (!Number.isSafeInteger(sectionNum) || !egeSection(sectionNum))
      throw Error("Invalid section");
  } catch {
    return NextResponse.json(
      {
        error:
          "Проверьте название, раздел и ссылку встраивания VK Видео или Kinescope",
      },
      { status: 400 },
    );
  }
  const db = await connectDB();
  await db.run(
    "INSERT INTO Video(id,title,url,sectionNum,isPremium,createdAt) VALUES(?,?,?,?,?,?)",
    [createId(), title, url, egeSection(sectionNum).videoSections[0], isPremium, new Date().toISOString()],
  );
  return NextResponse.redirect(
    new URL(`/videos/${sectionNum}`, request.url),
    303,
  );
}
