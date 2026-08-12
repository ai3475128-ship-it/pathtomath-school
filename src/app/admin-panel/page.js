import { getCurrentUser } from '../login/actions';
import { redirect } from 'next/navigation';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

// 🔒 Список Email-адресов двух руководителей онлайн-школы
const ALLOWED_ADMINS = [
  'ai3475128@gmail.com', // 👈 Впишите сюда точную почту Александра
  'danilapokoyovets@gmail.com'    // 👈 Впишите сюда точную почту Данилы
];

async function connectDB() {
  return open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
}

// SERVER ACTION: Создание аккаунта преподавателя руководителем
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
      'INSERT INTO User (id, email, name, password, role, createdAt) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, email.toLowerCase().trim(), name.trim(), hashedPassword, 'TEACHER', createdAt]
    );

    revalidatePath('/admin-panel');
  } catch (err) {
    console.error(err);
  } finally {
    if (db) await db.close();
  }
}

// SERVER ACTION: Понижение преподавателя обратно до ученика
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

export default async function AdminPanelPage() {
  const currentUser = await getCurrentUser();

  // Жесткий барьер безопасности на входе
  if (!currentUser || currentUser.role !== 'ADMIN' || !ALLOWED_ADMINS.includes(currentUser.email.toLowerCase())) {
    redirect('/login?error=wrong');
  }

  let db;
  let teachers = [];
  let errorReports = [];
  let activityLogs = [];
  let totalStudentsCount = 0;

  try {
    db = await connectDB();
    
    // Подгружаем списки
    teachers = await db.all("SELECT id, name, email, createdAt FROM User WHERE role = 'TEACHER'");
    errorReports = await db.all("SELECT * FROM ErrorReports ORDER BY createdAt DESC LIMIT 10");
    activityLogs = await db.all("SELECT email, timestamp FROM ActivityLog WHERE actionType = 'LOGIN' ORDER BY timestamp DESC LIMIT 15");
    
    // Считаем общее число учеников
    const studentsRes = await db.get("SELECT COUNT(*) as count FROM User WHERE role = 'STUDENT'");
    totalStudentsCount = studentsRes?.count || 0;
  } catch (e) {
    console.error('Ошибка загрузки данных админки:', e);
  } finally {
    if (db) await db.close();
  }
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#03000a] p-6 text-slate-800 dark:text-slate-100">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Шапка приветствия */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl shadow-blue-900/5 dark:bg-[#140e24]/80 dark:border-purple-500/20">
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-500 to-blue-600 dark:from-purple-400 dark:to-pink-400">
            Панель Руководства PATHtoMATH
          </h1>
          <p className="text-sm text-slate-400 mt-1 font-medium">
            Управляющий аккаунт: <span className="font-bold text-sky-600 dark:text-purple-300">{currentUser.email}</span>
          </p>
        </div>

        {/* 📊 Мониторинг активности посещения сайта */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-blue-100/60 dark:bg-[#140e24]/80 dark:border-purple-500/20 shadow-sm flex flex-col justify-center">
            <h3 className="text-slate-400 text-xs font-black uppercase tracking-wider mb-1">Всего учеников на платформе</h3>
            <p className="text-4xl font-black text-blue-600 dark:text-purple-400">{totalStudentsCount}</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-blue-100/60 dark:bg-[#140e24]/80 dark:border-purple-500/20 shadow-sm md:col-span-2">
            <h3 className="text-slate-400 text-xs font-black uppercase tracking-wider mb-2">Активность посещения (Последние входы)</h3>
            <div className="text-xs space-y-1.5 max-h-24 overflow-y-auto font-medium">
              {activityLogs.length === 0 ? (
                <p className="text-slate-400">Лог посещений пуст</p>
              ) : activityLogs.map((log, i) => (
                <div key={i} className="flex justify-between border-b border-slate-100 dark:border-purple-950/40 pb-1">
                  <span className="text-slate-600 dark:text-slate-300">{log.email}</span>
                  <span className="text-slate-400">{new Date(log.timestamp).toLocaleString('ru-RU')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 👥 Управление штатом преподавателей */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-md dark:bg-[#140e24]/80 dark:border-purple-500/20 space-y-6">
          <h2 className="text-xl font-black border-b border-slate-100 dark:border-purple-950/60 pb-2">👥 Управление штатом преподавателей</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Форма создания */}
            <form action={createTeacher} className="space-y-4 bg-slate-50/50 dark:bg-purple-950/10 p-5 rounded-2xl border border-slate-100 dark:border-purple-950/40">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Добавить преподавателя</h4>
              <input name="name" required placeholder="ФИО преподавателя" className="w-full bg-white border border-blue-100/60 rounded-xl px-4 py-2.5 text-sm dark:bg-purple-950/40 dark:border-purple-500/20" />
              <input name="email" type="email" required placeholder="Email адрес" className="w-full bg-white border border-blue-100/60 rounded-xl px-4 py-2.5 text-sm dark:bg-purple-950/40 dark:border-purple-500/20" />
              <input name="password" type="password" required placeholder="Пароль для входа" className="w-full bg-white border border-blue-100/60 rounded-xl px-4 py-2.5 text-sm dark:bg-purple-950/40 dark:border-purple-500/20" />
              <button type="submit" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl uppercase tracking-wider transition-all">Создать аккаунт</button>
            </form>
            
            {/* Таблица текущих преподавателей */}
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
                  ) : teachers.map((teacher) => (
                    <tr key={teacher.id}>
                      <td className="py-3 font-bold">{teacher.name}</td>
                      <td className="py-3 text-slate-500">{teacher.email}</td>
                      <td className="py-3">
                        <form action={removeTeacher}>
                          <input type="hidden" name="id" value={teacher.id} />
                          <button type="submit" className="text-red-500 hover:text-red-600 font-bold transition-all">Снять полномочия</button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Раздел: Сообщения об ошибках в заданиях */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-md dark:bg-[#140e24]/80 dark:border-purple-500/20">
          <h2 className="text-xl font-black border-b border-slate-100 dark:border-purple-950/60 pb-2 mb-4"> Раздел сообщений об ошибках от учеников и учителей</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-purple-950/40">
                  <th className="pb-2 font-black">Задача</th>
                  <th className="pb-2 font-black">Описание опечатки</th>
                  <th className="pb-2 font-black">Дата отправки</th>
                  <th className="pb-2 font-black">Статус</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-purple-950/40 font-medium">
                {errorReports.length === 0 ? (
                  <tr><td colSpan="4" className="py-4 text-center text-slate-400">Сообщений об ошибках пока нет</td></tr>
                ) : errorReports.map((report) => (
                  <tr key={report.id}>
                    <td className="py-3 font-bold text-blue-600 dark:text-purple-400">Секция {report.sectionNumber}, №{report.taskId}</td>
                    <td className="py-3 max-w-sm break-words text-slate-600 dark:text-slate-300">{report.description}</td>
                    <td className="py-3 text-slate-400">{new Date(report.createdAt).toLocaleDateString('ru-RU')}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${report.status === 'OPEN' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                        {report.status === 'OPEN' ? 'НОВОЕ' : 'ИСПРАВЛЕНО'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
