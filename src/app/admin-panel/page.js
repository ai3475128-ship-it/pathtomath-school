import { getCurrentUser } from '../login/actions';
import { redirect } from 'next/navigation';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import StudentManager from './StudentManager';

// Список Email-адресов двух руководителей онлайн-школы
const ALLOWED_ADMINS = [
  'ai3475128@gmail.com', // Впишите сюда точную почту Александра
  'danilapokoyovets@gmail.com' // Впишите сюда точную почту Данилы
];

async function connectDB() {
  return open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
}

// // SERVER ACTION: Создание аккаунта преподавателя руководителем
async function createTeacher(formData) {
  'use server';
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  if (!name || !email || !password) return;

  let db;
  try {
    db = await connectDB();
    const existing = await db.get('SELECT * FROM User WHERE email = ?', [email.toLowerCase().trim()]);
    if (existing) return;

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = 'teacher_' + Math.random().toString(36).substring(2, 11);
    const createdAt = new Date().toISOString();

    // Записываем пользователя строго с ролью 'TEACHER'
    await db.run(
      'INSERT INTO User (id, name, email, password, role, createdAt) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, name.trim(), email.toLowerCase().trim(), hashedPassword, 'TEACHER', createdAt]
    );

    revalidatePath('/admin-panel');
  } catch (err) {
    console.error(err);
  } finally {
    if (db) await db.close();
  }
}

// // SERVER ACTION: Понижение преподавателя обратно до ученика
async function removeTeacher(formData) {
  'use server';
  const id = formData.get('id');
  let db;
  try {
    db = await connectDB();
    await db.run("UPDATE User SET role = 'STUDENT' WHERE id = ?", [id]);
    revalidatePath('/admin-panel');
  } catch (err) {
    console.error(err);
  } finally {
    if (db) await db.close();
  }
}

export default function AdminPanelPage() {
  // Вызываем асинхронную функцию рендеринга данных
  return <AdminPanelContent />;
}

async function AdminPanelContent() {
  const currentUser = await getCurrentUser();

  // Жесткий барьер безопасности на входе
  if (!currentUser || currentUser.role !== 'ADMIN' || !ALLOWED_ADMINS.includes(currentUser.email.toLowerCase().trim())) {
    redirect('/login?error=wrong');
  }

  let db;
  let teachers = [];
  let errorReports = [];
  let students = [];
  let totalStudentsCount = 0;
  try {
    db = await connectDB();

    // Подгружаем список преподавателей
    teachers = await db.all("SELECT id, name, email, createdAt FROM User WHERE role = 'TEACHER'");

    // Подгружаем сообщения об ошибках
    errorReports = await db.all("SELECT * FROM ErrorReports ORDER BY createdAt DESC LIMIT 10");

    // 🚀 ИСПРАВЛЕНО: Теперь вытаскиваем из базы и обычных, и платных учеников (Василий вернётся!)
    students = await db.all("SELECT id, name, email, role FROM User WHERE role IN ('STUDENT', 'PREMIUM_STUDENT') ORDER BY name ASC");

    // 🚀 ИСПРАВЛЕНО: Считаем общее число учеников на платформе с учётом премиум-аккаунтов для виджета статистики
    const studentsRes = await db.get("SELECT COUNT(*) as count FROM User WHERE role IN ('STUDENT', 'PREMIUM_STUDENT')");
    totalStudentsCount = studentsRes?.count || 0;

  } catch (e) {
    console.error('Ошибка загрузки данных админки:', e);
  } finally {
    if (db) await db.close();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#03000a] p-6 text-slate-800 dark:text-slate-100">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* /* Шапка приветствия */ }
        <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl shadow-blue-900/5 dark:border-purple-950/40">
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-500 to-blue-500 dark:from-purple-400 dark:to-pink-500">
            Панель Руководства PATHTOMATH
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1 dark:text-slate-400">
            Управляющий аккаунт: <span className="font-bold text-sky-600 dark:text-purple-300">{(currentUser.email)}</span>
          </p>
        </div>

        {/* /* Мониторинг активности посещения сайта */ }
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* /* Увеличенный виджет статистики общего количества студентов */ }
          <div className="flex flex-col justify-between p-6 bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md rounded-3xl border border-blue-100/60 shadow-xl shadow-blue-900/5 dark:border-purple-950/40">
            <h3 className="text-slate-400 text-xs font-black uppercase tracking-wider mb-2">
              Всего учеников на платформе
            </h3>
            
            {/* /* ИСПРАВЛЕНО: Цифра стала огромной, отцентрированной и с красивым градиентным переливом */ }
            <div className="flex-1 flex items-center justify-center py-4">
              <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-purple-400 dark:to-pink-500 tracking-tighter">
                {totalStudentsCount}
              </span>
            </div>

            {/* /* Небольшая декоративная плашка снизу для баланса веса */ }
            <div className="text-[10px] font-bold text-slate-400/60 uppercase tracking-widest hidden sm:block text-center">
              активные пользователи
            </div>
          </div>

          {/* /* Интерактивная клиентская панель управления учениками со встроенным живым поиском */ }
          <div className="md:col-span-2">
            <StudentManager initialStudents={students} />
          </div>
        </div>
        {/* /* Управление штатом преподавателей */ }
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* /* Форма создания */ }
          <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl shadow-blue-900/5 dark:border-purple-950/40">
            <h2 className="text-xl font-black border-b border-slate-100 pb-2 mb-4 dark:border-purple-950/40">Управление штатом преподавателей</h2>
            <form action={createTeacher} className="space-y-4 bg-slate-50/50 dark:bg-purple-950/10 p-5 rounded-2xl border border-slate-100 dark:border-purple-500/10">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Добавить преподавателя</h4>
              <input type="text" name="name" required placeholder="ФИО преподавателя" className="w-full bg-white border border-blue-100/60 dark:bg-purple-950/30 dark:border-purple-500/10 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none" />
              <input type="email" name="email" required placeholder="Email адрес" className="w-full bg-white border border-blue-100/60 dark:bg-purple-950/30 dark:border-purple-500/10 rounded-xl px-4 py-2.5 text-xs font-bold source focus:outline-none" />
              <input type="password" name="password" required placeholder="Пароль для входа" className="w-full bg-white border border-blue-100/60 dark:bg-purple-950/30 dark:border-purple-500/10 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none" />
              <button type="submit" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-text text-xs font-bold text-center rounded-xl transition-all shadow-md">Создать</button>
            </form>
          </div>

          {/* /* Таблица текущих преподавателей */ }
          <div className="lg:col-span-2 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-purple-950/40">
                  <th className="pb-2 font-black">Преподаватель</th>
                  <th className="pb-2 font-black">Email</th>
                  <th className="pb-2 font-black">Действие</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-purple-950/40 font-medium">
                {teachers.length === 0 ? (
                  <tr><td colSpan="3" className="py-4 text-center text-slate-400">Список преподавателей пуст</td></tr>
                ) : (
                  teachers.map((teacher) => (
                    <tr key={teacher.id} className="text-slate-700 dark:text-slate-300">
                      <td className="py-3 font-bold">{teacher.name}</td>
                      <td className="py-3 text-slate-500">{teacher.email}</td>
                      <td className="py-3">
                        <form action={removeTeacher}>
                          <input type="hidden" name="id" value={teacher.id} />
                          <button type="submit" className="text-red-500 hover:text-red-600 font-bold transition-all">Снять полномочия</button>
                        </form>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* /* Раздел: Сообщения об ошибках в заданиях */ }
        <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl shadow-blue-900/5 dark:border-purple-950/40">
          <h2 className="text-xl font-black border-b border-slate-100 pb-2 mb-4 dark:border-purple-950/40">Раздел сообщений об ошибках от учеников</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-purple-950/40">
                  <th className="pb-2 font-black">Задача</th>
                  <th className="pb-2 font-black">Описание опечатки</th>
                  <th className="pb-2 font-black">Дата отправки</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-purple-950/40 font-medium">
                {errorReports.length === 0 ? (
                  <tr><td colSpan="3" className="py-4 text-center text-slate-400">Сообщений об ошибках пока нет</td></tr>
                ) : (
                  errorReports.map((report) => (
                    <tr key={report.id} className="text-slate-700 dark:text-slate-300">
                      <td className="py-3 font-bold text-blue-600 dark:text-purple-400">Секция {report.sectionNumber}, №{report.taskNumber}</td>
                      <td className="py-3 max-w-sm break-words text-slate-600 dark:text-slate-400">{report.description}</td>
                      <td className="py-3 text-slate-400">{new Date(report.createdAt).toLocaleString('ru-RU')}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
