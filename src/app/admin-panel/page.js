import Link from 'next/link';
import { SUBJECTS } from '@/lib/learning-catalog';
import VideoPublishForm from '@/app/components/VideoPublishForm';
import OlympiadCalendarLink from '../components/OlympiadCalendarLink';
import { displayNumberForModule } from '@/lib/ege-sections';
import { requireAdmin } from '@/lib/auth';
import { text,emailAddress,passwordValue } from '@/lib/validation';
import { connectDB, createId } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import StudentManager from './StudentManager';



// SERVER ACTION 1: Создание аккаунта преподавателя руководителем
async function createTeacher(formData) {
  'use server';
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
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (db) await db.close();
  }
}

async function updateSubjects(formData) {
  'use server';
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
}

// SERVER ACTION 2: Понижение преподавателя обратно до ученика
async function removeTeacher(formData) {
  'use server';
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
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (db) await db.close();
  }
}
// SERVER ACTION 3: Серверное переключение галочки (спуск опечатки вниз списка)
async function toggleReportStatus(formData) {
  'use server';
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
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (db) await db.close();
  }
}

// SERVER ACTION 4: Полное и безвозвратное удаление баг-репорта из SQLite
async function deleteReportPermanently(formData) {
  'use server';
  await requireAdmin();
  const reportId = formData.get('reportId');
  if (!reportId) return;

  let db;
  try {
    db = await connectDB();
    
    await db.run('DELETE FROM ErrorReports WHERE id=?',[reportId]);
    
    revalidatePath('/admin-panel');
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (db) await db.close();
  }
}

export default async function AdminPanelPage() {
  const currentUser = await requireAdmin();

  let db;
  let teachers = [];
  let staffSubjects = [];
  let errorReports = [];
  let students = [];
  let totalStudentsCount = 0;

  try {
    db = await connectDB();
    teachers = await db.all("SELECT id, name, email, role, createdAt FROM User WHERE role IN ('TEACHER','ADMIN') ORDER BY role, name");
    staffSubjects = await db.all('SELECT userId, subject FROM TeacherSubject');
    
    errorReports = await db.all('SELECT * FROM ErrorReports ORDER BY createdAt DESC LIMIT 10');

    students = await db.all("SELECT id, name, email, role, isBlocked FROM User WHERE role IN ('STUDENT', 'PREMIUM_STUDENT') ORDER BY name ASC");
    const studentsRes = await db.get("SELECT COUNT(*) as count FROM User WHERE role IN ('STUDENT', 'PREMIUM_STUDENT')");
    totalStudentsCount = studentsRes?.count || 0;
  } catch (e) {
    console.error(e);
  } finally {
    if (db) await db.close();
  }
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#03000a] p-6 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-8">
        <OlympiadCalendarLink />
        <Link href="/teacher-dashboard" className="inline-block rounded-xl bg-sky-600 px-5 py-3 font-bold text-white hover:bg-sky-700">Преподавательские инструменты</Link>
        
        {/* Шапка приветствия */}
        <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-block bg-sky-50 dark:bg-purple-950/40 px-3 py-1 rounded-full text-[10px] font-black uppercase text-sky-600 dark:text-purple-400 tracking-widest">
              Школьная администрация
            </div>
            <h1 className="text-2xl font-black text-sky-600 dark:text-purple-400 uppercase tracking-tight mt-1">
              Панель Руководства PATHTOMATH
            </h1>
            <p className="text-xs text-slate-400 font-bold dark:text-purple-300">
              Управляющий аккаунт: <span className="font-bold text-sky-600 dark:text-purple-300">{currentUser.email}</span>
            </p>
          </div>
        </div>

        {/* Мониторинг активности и счетчик студентов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl flex flex-col justify-between">
            <h3 className="text-slate-400 text-xs font-black uppercase tracking-wider mb-2">Всего учеников на платформе</h3>
            <div className="flex flex-1 items-center justify-center py-4">
              <span className="text-6xl md:text-7xl font-black text-sky-600 dark:text-purple-400 tracking-tighter">{totalStudentsCount}</span>
            </div>
            <div className="text-[10px] font-bold text-slate-400/60 uppercase tracking-widest text-center">активные пользователи</div>
          </div>

          <div className="md:col-span-2">
            <StudentManager initialStudents={students} />
          </div>
        </div>

        <VideoPublishForm user={currentUser} />


        {/* Управление штатом преподавателей */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl space-y-4">
            <h2 className="text-lg font-black text-sky-600 dark:text-purple-400 border-b dark:border-purple-950/40 pb-2 uppercase tracking-tight">Управление штатом</h2>
            <form action={createTeacher} className="space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400">Добавить преподавателя</h4>
              <input type="text" name="name" required placeholder="ФИО преподавателя" className="w-full bg-slate-50 border border-slate-200 dark:bg-[#0c0714] dark:border-purple-500/10 rounded-xl px-4 py-2 text-xs font-bold focus:outline-none focus:border-sky-500" />
              <input type="email" name="email" required placeholder="Email адрес" className="w-full bg-slate-50 border border-slate-200 dark:bg-[#0c0714] dark:border-purple-500/10 rounded-xl px-4 py-2 text-xs font-bold focus:outline-none focus:border-sky-500" />
              <input type="password" name="password" required placeholder="Пароль для входа" className="w-full bg-slate-50 border border-slate-200 dark:bg-[#0c0714] dark:border-purple-500/10 rounded-xl px-4 py-2 text-xs font-bold focus:outline-none focus:border-sky-500" />
              <label className="block text-xs font-bold">Направление
                <select name="subject" required defaultValue="ege-math" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-800">
                  {SUBJECTS.map((subject) => <option key={subject.id} value={subject.id}>{subject.title}</option>)}
                </select>
              </label>
              <button type="submit" className="w-full py-2 bg-sky-500 hover:bg-sky-600 dark:bg-[#634EE4] dark:hover:bg-[#523fd1] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer">Опубликовать</button>
            </form>
          </div>

          <div className="lg:col-span-2 bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 uppercase tracking-wider border-b dark:border-purple-950/40">
                  <th className="pb-2 font-black">Преподаватель</th>
                  <th className="pb-2 font-black">Email</th>
                  <th className="pb-2 font-black">Направления</th>
                  <th className="pb-2 font-black text-right pr-4">Действие</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-purple-950/40 font-medium">
                {teachers.length === 0 ? (
                  <tr><td colSpan="4" className="py-4 text-center text-slate-400 font-bold">Список преподавателей пуст.</td></tr>
                ) : (
                  teachers.map((teacher) => (
                    <tr key={teacher.id} className="text-slate-700 dark:text-slate-300">
                      <td className="py-3 font-bold">{teacher.name}</td>
                      <td className="py-3 text-slate-400">{teacher.email}</td>
                      <td className="py-3"><form action={updateSubjects} className="space-y-1">
                        <input type="hidden" name="id" value={teacher.id} />
                        {SUBJECTS.map((subject) => <label key={subject.id} className="flex items-center gap-2"><input type="checkbox" name="subjects" value={subject.id} defaultChecked={staffSubjects.some((row) => row.userId === teacher.id && row.subject === subject.id)} />{subject.title}</label>)}
                        <button type="submit" className="font-bold text-sky-600">Сохранить</button>
                      </form></td>
                      <td className="py-3 text-right pr-2">
                        {teacher.role === 'ADMIN' ? <span>Руководитель</span> : <form action={removeTeacher}>
                          <input type="hidden" name="id" value={teacher.id} />
                          <button type="submit" className="text-[10px] text-red-500 hover:text-red-600 font-black uppercase tracking-wider cursor-pointer transition-colors">Снять полномочия</button>
                        </form>}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* Раздел сообщений об ошибках от учеников */}
        <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl space-y-4">
          <h2 className="text-xl font-black text-sky-600 dark:text-purple-400 border-b border-slate-100 dark:border-purple-950/40 pb-2 mb-4 uppercase tracking-tight">Раздел сообщений об ошибках от учеников</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-purple-950/40">
                  <th className="pb-2 font-black">Задача</th>
                  <th className="pb-2 font-black">Описание опечатки</th>
                  <th className="pb-2 font-black">Дата отправки</th>
                  <th className="pb-2 font-black text-right pr-4 w-28">Статус</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-purple-950/40 font-medium">
                {(!errorReports || errorReports.length === 0) ? (
                  <tr><td colSpan="4" className="py-4 text-center text-slate-400 font-bold">Сообщений об ошибках пока нет. Отличная работа!</td></tr>
                ) : (
                  /* СОРТИРОВКА: Сначала активные баги, а исправленные (isChecked === true) автоматически улетают в самый низ списка */
                  [...errorReports].sort((a, b) => {
                    const aDone = a.status === 'ИСПРАВЛЕНО' || a.mark === 'done' ? 1 : 0;
                    const bDone = b.status === 'ИСПРАВЛЕНО' || b.mark === 'done' ? 1 : 0;
                    return aDone - bDone;
                  }).map((report) => {
                    const actualTaskNum = report.taskNumber || report.taskNum || report.taskId || report.problemId || '—';
                    const sectionNum = displayNumberForModule(report.module) || report.sectionNumber || report.section || '—';
                    const isChecked = report.status === 'ИСПРАВЛЕНО' || report.mark === 'done';

                    return (
                      <tr key={report.id} className={`transition-all duration-300 ${isChecked ? 'text-slate-400/60 dark:text-slate-500 bg-slate-50/20 dark:bg-black/10 line-through' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50/50 dark:hover:bg-purple-950/10'}`}>
                        <td className={`py-3 font-bold ${isChecked ? 'text-slate-400 dark:text-slate-500' : 'text-blue-600 dark:text-purple-400'}`}>
                          Секция {sectionNum}, №{actualTaskNum}
                        </td>
                        <td className="py-3 max-w-sm break-words font-medium">
                          {report.description || report.content}
                        </td>
                        <td className="py-3 opacity-80">
                          {report.createdAt ? new Date(report.createdAt).toLocaleString('ru-RU') : '—'}
                        </td>
                        
                        {/* ДВЕ НЕЗАВИСИМЫЕ СЕРВЕРНЫЕ ФОРМЫ: Чекбокс и Удаление в одной ячейке */}
                        <td className="py-3 pr-4">
                          <div className="flex items-center justify-end gap-3 w-24 ml-auto">
                            
                            {/* Форма 1: Квадратик-галочка (Опустить вниз) */}
                            <form action={toggleReportStatus} className="inline-block">
                              <input type="hidden" name="reportId" value={report.id} />
                              <input type="hidden" name="currentStatus" value={isChecked ? 'true' : 'false'} />
                              <button
                                type="submit"
                                className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
                                  isChecked 
                                    ? 'bg-emerald-500 border-transparent text-white shadow-sm' 
                                    : 'bg-white dark:bg-[#0c0714] border-slate-300 dark:border-purple-500/20 hover:border-sky-500 dark:hover:border-purple-400'
                                }`}
                                title={isChecked ? "Вернуть в активные" : "Пометить как исправленное"}
                              >
                                {isChecked && <span className="text-[10px] font-black select-none">✓</span>}
                              </button>
                            </form>

                            {/* Форма 2: Маленькая красная кнопка-крестик (Удалить насовсем) */}
                            <form action={deleteReportPermanently} className="inline-block">
                              <input type="hidden" name="reportId" value={report.id} />
                              <button
                                type="submit"
                                className="w-5 h-5 rounded-md border border-red-200 hover:border-transparent bg-red-50 hover:bg-red-500 text-red-500 hover:text-white dark:bg-red-950/20 dark:border-red-900/30 dark:hover:bg-red-600 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer"
                                title="Удалить обращение навсегда"
                              >
                                <span className="text-[9px] font-black select-none">✕</span>
                              </button>
                            </form>

                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
