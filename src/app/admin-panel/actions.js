'use server';
import { SUBJECTS } from '@/lib/learning-catalog';
import { requireAdmin } from '@/lib/auth';
import { text,emailAddress,passwordValue } from '@/lib/validation';
import { connectDB, createId } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
// SERVER ACTION 1: Создание аккаунта преподавателя руководителем
export async function createTeacher(formData) {
  await requireAdmin();
  const name = text(formData.get('name'),150,2);
  const email = emailAddress(formData.get('email'));
  const password = passwordValue(formData.get('password'));
  const subject = formData.get('subject') || 'ege-math';
  if (!SUBJECTS.some((item) => item.id === subject)) throw Error('Некорректное направление');

  if (!name || !email || !password) return;

  let db;
  try {
    db = await connectDB();
    const existing = await db.get('SELECT * FROM User WHERE email = ?', [email.toLowerCase().trim()]);
    if (existing) return;

    const hashedPassword = await bcrypt.hash(password, 12);
    const userId = createId();
    const createdAt = new Date().toISOString();

    db.transaction((raw) => {
      raw.prepare("INSERT INTO User (id, name, email, password, role, createdAt) VALUES (?, ?, ?, ?, 'TEACHER', ?)")
        .run(userId, name.trim(), email.toLowerCase().trim(), hashedPassword, createdAt);
      raw.prepare('INSERT INTO TeacherSubject(userId,subject) VALUES(?,?)').run(userId, subject);
    });
    revalidatePath('/admin-panel');
    revalidatePath('/cabinet/staff');
    revalidatePath('/cabinet/reports');
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (db) await db.close();
  }
}

export async function updateSubjects(formData) {
  await requireAdmin();
  const id = text(formData.get('id'), 100);
  const subjects = [...new Set(formData.getAll('subjects').map(String))];
  if (!subjects.length || subjects.some((id) => !SUBJECTS.some((subject) => subject.id === id))) throw Error('Выберите корректное направление');
  const db = await connectDB();
  db.transaction((raw) => {
    const member = raw.prepare("SELECT id FROM User WHERE id=? AND role IN ('ADMIN','TEACHER')").get(id);
    if (!member) throw Error('Преподаватель не найден');
    raw.prepare('DELETE FROM TeacherSubject WHERE userId=?').run(id);
    for (const subject of subjects) raw.prepare('INSERT INTO TeacherSubject(userId,subject) VALUES(?,?)').run(id, subject);
  });
  revalidatePath('/admin-panel');
  revalidatePath('/cabinet/staff');
  revalidatePath('/cabinet/reports');
}

// SERVER ACTION 2: Понижение преподавателя обратно до ученика
export async function removeTeacher(formData) {
  await requireAdmin();
  const id = formData.get('id');
  if (!id) return;

  let db;
  try {
    db = await connectDB();
    db.transaction((raw) => {
      const result = raw.prepare("UPDATE User SET role='STUDENT' WHERE id=? AND role='TEACHER'").run(id);
      if (result.changes) {
        raw.prepare('DELETE FROM TeacherSubject WHERE userId=?').run(id);
        raw.prepare('DELETE FROM Session WHERE userId=?').run(id);
      }
    });
    revalidatePath('/admin-panel');
    revalidatePath('/cabinet/staff');
    revalidatePath('/cabinet/reports');
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (db) await db.close();
  }
}
// SERVER ACTION 3: Серверное переключение галочки (спуск опечатки вниз списка)
export async function toggleReportStatus(formData) {
  await requireAdmin();
  const reportId = formData.get('reportId');
  const currentStatus = formData.get('currentStatus');
  if (!reportId) return;

  let db;
  try {
    db = await connectDB();
    const nextStatus = currentStatus === 'true' ? '' : 'ИСПРАВЛЕНО';

    await db.run('UPDATE ErrorReports SET status=? WHERE id=?',[nextStatus,reportId]);

    revalidatePath('/admin-panel');
    revalidatePath('/cabinet/staff');
    revalidatePath('/cabinet/reports');
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (db) await db.close();
  }
}

// SERVER ACTION 4: Полное и безвозвратное удаление баг-репорта из SQLite
export async function deleteReportPermanently(formData) {
  await requireAdmin();
  const reportId = formData.get('reportId');
  if (!reportId) return;

  let db;
  try {
    db = await connectDB();

    await db.run('DELETE FROM ErrorReports WHERE id=?',[reportId]);

    revalidatePath('/admin-panel');
    revalidatePath('/cabinet/staff');
    revalidatePath('/cabinet/reports');
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (db) await db.close();
  }
}
