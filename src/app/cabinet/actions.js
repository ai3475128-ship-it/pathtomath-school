'use server';
import { revalidatePath } from 'next/cache';
import { requireUser, requireManagement, canAccessCourse } from '@/lib/auth';
import { connectDB, createId } from '@/lib/db';
import { SUBJECTS } from '@/lib/learning-catalog';
import { calendarDate, text } from '@/lib/validation';

async function student() { return requireUser(['STUDENT', 'PREMIUM_STUDENT']); }
function validCourse(user, id) { return SUBJECTS.some((c) => c.id === id) && (user.role === 'STUDENT' || user.courses.includes(id)); }
export async function savePlan(form) {
  const user = await student(), date = calendarDate(form.get('date')), content = text(form.get('content'), 10000, 0), db = await connectDB();
  await db.run('INSERT INTO Notes(id,userId,dateText,content) VALUES(?,?,?,?) ON CONFLICT(userId,dateText) DO UPDATE SET content=excluded.content', [createId(), user.id, date, content]);
  revalidatePath('/cabinet/plans'); revalidatePath('/profile');
}
export async function addGoal(form) {
  const user = await student(), course = form.get('courseId'), title = text(form.get('title'), 160);
  if (!validCourse(user, course)) throw Error('Направление недоступно');
  const db = await connectDB();
  db.transaction((raw) => {
    if (raw.prepare('SELECT COUNT(*) AS n FROM StudyGoal WHERE userId=? AND courseId=?').get(user.id, course).n >= 100) throw Error('Слишком много целей');
    raw.prepare('INSERT INTO StudyGoal(id,userId,courseId,title,done,createdAt) VALUES(?,?,?,?,0,?)').run(createId(), user.id, course, title, new Date().toISOString());
  });
  revalidatePath('/cabinet/goals');
}
export async function toggleGoal(form) {
  const user = await student(), id = text(form.get('goalId'), 100), db = await connectDB();
  const goal = await db.get('SELECT courseId FROM StudyGoal WHERE id=? AND userId=?', [id, user.id]);
  if (!goal || !validCourse(user, goal.courseId)) throw Error('Цель недоступна');
  await db.run('UPDATE StudyGoal SET done=1-done WHERE id=? AND userId=?', [id, user.id]);
  revalidatePath('/cabinet/goals');
}
export async function deleteGoal(form) {
  const user = await student(), id = text(form.get('goalId'), 100), db = await connectDB();
  const goal = await db.get('SELECT courseId FROM StudyGoal WHERE id=? AND userId=?', [id, user.id]);
  if (!goal || !validCourse(user, goal.courseId)) throw Error('Цель недоступна');
  await db.run('DELETE FROM StudyGoal WHERE id=? AND userId=?', [id, user.id]);
  revalidatePath('/cabinet/goals');
}
export async function createScheduleEvent(form) {
  const user = await requireManagement(), course = form.get('courseId');
  if (!SUBJECTS.some((c) => c.id === course) || !canAccessCourse(user, course)) throw Error('Направление недоступно');
  const title = text(form.get('title'), 300), date = calendarDate(form.get('lessonDate')), time = form.get('time'), type = form.get('type');
  if (typeof time !== 'string' || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time) || !['Вебинар','Созвон','Мастер-группа'].includes(type)) throw Error('Некорректное время или тип занятия');
  const db = await connectDB();
  await db.run('INSERT INTO Schedule(id,time,title,type,dateText,createdAt,courseId) VALUES(?,?,?,?,?,?,?)', [createId(), time, title, type, date, new Date().toISOString(), course]);
  revalidatePath('/cabinet'); revalidatePath('/cabinet/schedule'); revalidatePath('/teacher-dashboard');
}

export async function updateStudentCourses(form) {
  const { requireAdmin } = await import('@/lib/auth');
  const { setStudentCourses } = await import('@/lib/student-access');
  const admin = await requireAdmin(), id = form.get('studentId'), courses = form.getAll('courses').map(String), db = await connectDB();
  if (!setStudentCourses(db, admin, id, courses)) throw Error('Не удалось изменить курсы');
  revalidatePath('/cabinet/students'); revalidatePath('/cabinet/access'); revalidatePath('/cabinet/course-students'); revalidatePath('/admin-panel'); revalidatePath(`/supervisor/students/${id}`);
}
export async function changeStudentBlock(form) {
  const { requireAdmin } = await import('@/lib/auth');
  const { setStudentBlocked } = await import('@/lib/student-access');
  const admin = await requireAdmin(), id = form.get('studentId'), blocked = form.get('blocked');
  if (typeof id !== 'string' || !['0','1'].includes(blocked)) throw Error('Некорректный запрос');
  const db = await connectDB();
  if (!setStudentBlocked(db, admin, id, blocked === '1')) throw Error('Ученик не найден');
  revalidatePath('/cabinet/students'); revalidatePath('/cabinet/access'); revalidatePath('/cabinet/course-students'); revalidatePath('/admin-panel'); revalidatePath(`/supervisor/students/${id}`);
}
