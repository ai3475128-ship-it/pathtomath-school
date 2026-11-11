"use server";
import { revalidatePath } from "next/cache";
import { connectDB, createId } from "@/lib/db";
import { canAccessCourse, requireManagement, requireOwnedWork } from "@/lib/auth";
import { saveUpload } from "@/lib/uploads";
import { text } from "@/lib/validation";
import { SUBJECTS } from "@/lib/learning-catalog";
async function publishWork(table, form) {
  const user = await requireManagement(),
    title = text(form.get("title"), 300),
    courseId = form.get("courseId") || 'ege-math';
  if (!SUBJECTS.some((course) => course.id === courseId) || !canAccessCourse(user, courseId)) throw Error('Направление недоступно');
  const url = await saveUpload(form.get("pdfFile"), user, { optional: true }),
    db = await connectDB(), batch = createId();
  db.transaction((raw) => {
    for (const student of raw
      .prepare("SELECT u.id FROM User u JOIN StudentCourse sc ON sc.userId=u.id WHERE u.role='PREMIUM_STUDENT' AND u.isBlocked=0 AND sc.courseId=?")
      .all(courseId)) {
      if (table === "Homework")
        raw
          .prepare(
            "INSERT INTO Homework(id,userId,title,description,status,mark,comment,createdAt,solutionUrl,batchId,courseId) VALUES(?,?,?,?,'Не сдано','—','',?,'',?,?)",
          )
          .run(
            createId(),
            student.id,
            title,
            url,
            new Date().toISOString(),
            batch, courseId,
          );
      else
        raw
          .prepare(
            "INSERT INTO Trial(id,userId,title,description,status,score,date,maxScore,batchId,courseId) VALUES(?,?,?,?,'Не сдано',0,?,100,?,?)",
          )
          .run(
            createId(),
            student.id,
            title,
            url,
            new Date().toISOString().slice(0, 10),
            batch, courseId,
          );
    }
  });
  revalidatePath(table === "Homework" ? "/homeworks" : "/trials");
  revalidatePath("/teacher-dashboard");
  revalidatePath("/cabinet/materials");
  revalidatePath("/cabinet/history");
  revalidatePath("/cabinet/review");
  revalidatePath("/cabinet/analytics");
  revalidatePath("/cabinet/progress");
  revalidatePath("/cabinet/learner");
}
async function deleteBatch(table, form) {
  const user = await requireManagement();
  const batch = text(form.get("batchId"), 100), db = await connectDB();
  const work = await db.get(`SELECT courseId FROM ${table} WHERE batchId=?`, [batch]);
  if (!work || (work.courseId === 'legacy' && user.role !== 'ADMIN') || (work.courseId !== 'legacy' && !canAccessCourse(user, work.courseId))) throw Error('Работа недоступна');
  await db.run(`DELETE FROM ${table} WHERE batchId=?`, [batch]);
  revalidatePath(table === "Homework" ? "/homeworks" : "/trials");
  revalidatePath("/teacher-dashboard");
  revalidatePath("/cabinet/materials");
  revalidatePath("/cabinet/history");
  revalidatePath("/cabinet/review");
  revalidatePath("/cabinet/analytics");
  revalidatePath("/cabinet/progress");
  revalidatePath("/cabinet/learner");
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
  revalidatePath("/cabinet/materials");
  revalidatePath("/cabinet/history");
  revalidatePath("/cabinet/review");
  revalidatePath("/cabinet/analytics");
  revalidatePath("/cabinet/progress");
  revalidatePath("/cabinet/learner");
}
export async function deleteStudentSolution(form) {
  const id = text(form.get("hwId"), 100),
    { db } = await requireOwnedWork("Homework", id);
  await db.run(
    "UPDATE Homework SET solutionUrl='',status='Не сдано',mark='—',comment='' WHERE id=?",
    [id],
  );
  revalidatePath("/homeworks");
  revalidatePath("/cabinet/history");
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
  revalidatePath("/cabinet/materials");
  revalidatePath("/cabinet/history");
  revalidatePath("/cabinet/review");
  revalidatePath("/cabinet/analytics");
  revalidatePath("/cabinet/progress");
  revalidatePath("/cabinet/learner");
}
export async function submitTrialSolution(form) {
  const id = text(form.get("trialId"), 100),
    { user, db } = await requireOwnedWork("Trial", id),
    url = await saveUpload(form.get("solutionFile"), user);
  db.transaction((raw) => {
    raw.prepare("UPDATE Trial SET solutionUrl=?,status='На проверке',score=0,comment='' WHERE id=?").run(url, id);
    raw.prepare('DELETE FROM TrialTaskResult WHERE trialId=?').run(id);
  });
  revalidatePath("/trials");
  revalidatePath("/teacher-dashboard");
  revalidatePath("/cabinet/materials");
  revalidatePath("/cabinet/history");
  revalidatePath("/cabinet/review");
  revalidatePath("/cabinet/analytics");
  revalidatePath("/cabinet/progress");
  revalidatePath("/cabinet/learner");
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
  const fieldsProvided = form.get('taskResultsPresent') === '1';
  const taskLimit = work.courseId === 'ege-math' ? 20 : work.courseId === 'physics' ? 26 : work.courseId === 'olympiad-math' ? 100 : 0;
  const taskResults = [];
  if (fieldsProvided) {
    if (!taskLimit) throw Error('По этому пробнику нельзя указать результаты по номерам');
    for (const key of form.keys()) {
      if (key.startsWith('taskResult_')) {
        const suffix = key.slice('taskResult_'.length), num = Number(suffix);
        if (!/^[1-9]\d*$/.test(suffix) || num > taskLimit || form.getAll(key).length !== 1 || !['', '0', '1'].includes(form.get(key))) throw Error('Некорректный результат задания');
        if (form.get(key) !== '') taskResults.push([num, Number(form.get(key))]);
      }
    }
    const numbers = form.getAll('olympiadTaskNumber'), values = form.getAll('olympiadTaskSolved');
    if (numbers.length !== values.length || (numbers.length && work.courseId !== 'olympiad-math')) throw Error('Некорректный результат задания');
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === '' && values[i] === '') continue;
      if (typeof numbers[i] !== 'string' || !/^[1-9]\d*$/.test(numbers[i]) || Number(numbers[i]) > taskLimit || !['0', '1'].includes(values[i])) throw Error('Некорректный результат задания');
      taskResults.push([Number(numbers[i]), Number(values[i])]);
    }
    if (new Set(taskResults.map(([number]) => number)).size !== taskResults.length) throw Error('Номера заданий не должны повторяться');
  }
  db.transaction((raw) => {
    raw.prepare("UPDATE Trial SET score=?,comment=?,status='Проверено' WHERE id=?").run(score, comment, id);
    if (fieldsProvided) {
      raw.prepare('DELETE FROM TrialTaskResult WHERE trialId=?').run(id);
      const insert = raw.prepare('INSERT INTO TrialTaskResult(trialId,taskNumber,solved) VALUES(?,?,?)');
      for (const [number, solved] of taskResults) insert.run(id, number, solved);
    }
  });
  revalidatePath("/trials");
  revalidatePath(`/supervisor/students/${work.userId}`);
  revalidatePath("/teacher-dashboard");
  revalidatePath("/cabinet/materials");
  revalidatePath("/cabinet/history");
  revalidatePath("/cabinet/review");
  revalidatePath("/cabinet/analytics");
  revalidatePath("/cabinet/progress");
  revalidatePath("/cabinet/learner");
}
