"use server";
import { revalidatePath } from "next/cache";
import { connectDB, createId } from "@/lib/db";
import { requireManagement, requireOwnedWork } from "@/lib/auth";
import { saveUpload } from "@/lib/uploads";
import { text } from "@/lib/validation";
async function publishWork(table, form) {
  const user = await requireManagement(),
    title = text(form.get("title"), 300),
    url = await saveUpload(form.get("pdfFile"), user, { optional: true }),
    db = await connectDB(),
    batch = createId();
  db.transaction((raw) => {
    for (const student of raw
      .prepare("SELECT id FROM User WHERE role='PREMIUM_STUDENT'")
      .all()) {
      if (table === "Homework")
        raw
          .prepare(
            "INSERT INTO Homework(id,userId,title,description,status,mark,comment,createdAt,solutionUrl,batchId) VALUES(?,?,?,?,'Не сдано','—','',?,'',?)",
          )
          .run(
            createId(),
            student.id,
            title,
            url,
            new Date().toISOString(),
            batch,
          );
      else
        raw
          .prepare(
            "INSERT INTO Trial(id,userId,title,description,status,score,date,maxScore,batchId) VALUES(?,?,?,?,'Не сдано',0,?,100,?)",
          )
          .run(
            createId(),
            student.id,
            title,
            url,
            new Date().toISOString().slice(0, 10),
            batch,
          );
    }
  });
  revalidatePath(table === "Homework" ? "/homeworks" : "/trials");
  revalidatePath("/teacher-dashboard");
}
async function deleteBatch(table, form) {
  await requireManagement();
  const batch = text(form.get("batchId"), 100),
    db = await connectDB();
  await db.run(`DELETE FROM ${table} WHERE batchId=?`, [batch]);
  revalidatePath(table === "Homework" ? "/homeworks" : "/trials");
  revalidatePath("/teacher-dashboard");
}
export async function createBulkHomework(form) {
  await publishWork("Homework", form);
}
export async function createQuickHomework(form) {
  await publishWork("Homework", form);
}
export async function createBulkTrial(form) {
  await publishWork("Trial", form);
}
export async function deleteBulkHomework(form) {
  await deleteBatch("Homework", form);
}
export async function deleteBulkTrial(form) {
  await deleteBatch("Trial", form);
}
export async function submitHomeworkSolution(form) {
  const id = text(form.get("hwId"), 100),
    { user, db } = await requireOwnedWork("Homework", id),
    url = await saveUpload(form.get("solutionFile"), user);
  await db.run(
    "UPDATE Homework SET solutionUrl=?,status='На проверке',mark='—',comment='' WHERE id=?",
    [url, id],
  );
  revalidatePath("/homeworks");
  revalidatePath("/teacher-dashboard");
}
export async function deleteStudentSolution(form) {
  const id = text(form.get("hwId"), 100),
    { db } = await requireOwnedWork("Homework", id);
  await db.run(
    "UPDATE Homework SET solutionUrl='',status='Не сдано',mark='—',comment='' WHERE id=?",
    [id],
  );
  revalidatePath("/homeworks");
}
export async function checkHomeworkMark(form) {
  const id = text(form.get("hwId"), 100),
    { db, work } = await requireOwnedWork("Homework", id, { management: true }),
    mark = text(form.get("mark"), 20),
    comment = text(form.get("comment") || "", 10000, 0);
  await db.run(
    "UPDATE Homework SET mark=?,comment=?,status='Проверено' WHERE id=?",
    [mark, comment, id],
  );
  revalidatePath("/homeworks");
  revalidatePath(`/supervisor/students/${work.userId}`);
  revalidatePath("/teacher-dashboard");
}
export async function submitTrialSolution(form) {
  const id = text(form.get("trialId"), 100),
    { user, db } = await requireOwnedWork("Trial", id),
    url = await saveUpload(form.get("solutionFile"), user);
  await db.run(
    "UPDATE Trial SET solutionUrl=?,status='На проверке',score=0,comment='' WHERE id=?",
    [url, id],
  );
  revalidatePath("/trials");
  revalidatePath("/teacher-dashboard");
}
export async function checkTrialMark(form) {
  const id = text(form.get("trialId"), 100),
    { db, work } = await requireOwnedWork("Trial", id, { management: true }),
    input = text(form.get("score"), 3),
    score = Number(input),
    comment = text(form.get("comment") || "", 10000, 0);
  if (
    !/^\d+$/.test(input) ||
    !Number.isSafeInteger(score) ||
    score < 0 ||
    score > work.maxScore
  )
    throw Error("Некорректный балл");
  await db.run(
    "UPDATE Trial SET score=?,comment=?,status='Проверено' WHERE id=?",
    [score, comment, id],
  );
  revalidatePath("/trials");
  revalidatePath(`/supervisor/students/${work.userId}`);
  revalidatePath("/teacher-dashboard");
}
