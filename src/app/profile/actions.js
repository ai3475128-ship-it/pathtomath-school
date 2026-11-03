"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectDB, createId } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { calendarDate, text } from "@/lib/validation";
export async function saveDailyNote(formData) {
  const user = await requireUser(),
    date = calendarDate(
      formData.get("selectedDate") ?? formData.get("dateText"),
    ),
    content = text(
      formData.get("noteContent") ?? formData.get("content"),
      10000,
      0,
    );
  const db = await connectDB();
  await db.run(
    "INSERT INTO Notes(id,userId,dateText,content) VALUES(?,?,?,?) ON CONFLICT(userId,dateText) DO UPDATE SET content=excluded.content",
    [createId(), user.id, date, content],
  );
  revalidatePath("/profile");
  revalidatePath("/dashboard");
  redirect(`/profile?date=${date}`);
}
