import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import fs from 'fs/promises';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

async function connectDB() {
  return open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
}

function findAuthCookie(allCookies) {
  return allCookies.find(c => 
    c.name.toLowerCase().includes('session') || 
    c.name.toLowerCase().includes('token') || 
    c.name.toLowerCase().includes('auth')
  );
}

// Выдать ДЗ на весь курс
async function createBulkHomework(formData) {
  'use server';
  const title = formData.get('title');
  const file = formData.get('pdfFile');
  if (!title) return;

  let fileUrl = '';
  if (file && file.size > 0 && file.name) {
    try {
      const fileExtension = path.extname(file.name);
      const safeFileName = `hw_task_${Math.random().toString(36).substring(2, 11)}${fileExtension}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      await fs.mkdir(uploadDir, { recursive: true });
      
      const bytes = await file.arrayBuffer();
      await fs.writeFile(path.join(uploadDir, safeFileName), Buffer.from(bytes));
      fileUrl = `/uploads/${safeFileName}`;
    } catch (e) { 
      console.error(e); 
    }
  }

  let db;
  try {
    db = await connectDB();
    const premiumStudents = await db.all("SELECT id FROM User WHERE role = 'PREMIUM_STUDENT'");
    const createdAt = new Date().toISOString();

    for (const student of premiumStudents) {
      const hwId = 'hw_' + Math.random().toString(36).substring(2, 11);
      await db.run(
        "INSERT INTO Homework (id, userId, title, description, status, mark, comment, createdAt, solutionUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, '')",
        [hwId, student.id, title.trim(), fileUrl, 'Не сдано', '—', '', createdAt]
      );
    }
    revalidatePath('/homeworks');
  } catch (err) { 
    console.error(err); 
  } finally { 
    if (db) await db.close(); 
  }
}
// Отозвать ДЗ у всей группы
async function deleteBulkHomework(formData) {
  'use server';
  const titleToDelete = formData.get('title');
  if (!titleToDelete) return;

  let db;
  try {
    db = await connectDB();
    await db.run("DELETE FROM Homework WHERE title = ?", [titleToDelete]);
    revalidatePath('/homeworks');
  } catch (err) { 
    console.error(err); 
  } finally { 
    if (db) await db.close(); 
  }
}

// Отправить решение учеником
async function submitHomeworkSolution(formData) {
  'use server';
  const hwId = formData.get('hwId');
  const file = formData.get('solutionFile');
  if (!file || file.size === 0) return;

  let solutionUrl = '';
  try {
    const fileExtension = path.extname(file.name);
    const safeFileName = `hw_sol_${Math.random().toString(36).substring(2, 11)}${fileExtension}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    const bytes = await file.arrayBuffer();
    await fs.writeFile(path.join(uploadDir, safeFileName), Buffer.from(bytes));
    solutionUrl = `/uploads/${safeFileName}`;

    let db = await connectDB();
    await db.run("UPDATE Homework SET solutionUrl = ?, status = 'На проверке' WHERE id = ?", [solutionUrl, hwId]);
    await db.close();
    revalidatePath('/homeworks');
  } catch (e) { 
    console.error(e); 
  }
}

// Стереть файл решения учеником
async function deleteStudentSolution(formData) {
  'use server';
  const hwId = formData.get('hwId');
  let db;
  try {
    db = await connectDB();
    await db.run("UPDATE Homework SET solutionUrl = '', status = 'Не сдано' WHERE id = ?", [hwId]);
    revalidatePath('/homeworks');
  } catch (err) { 
    console.error(err); 
  } finally { 
    if (db) await db.close(); 
  }
}

// Оценить работу куратором
async function checkHomeworkMark(formData) {
  'use server';
  const hwId = formData.get('hwId');
  const mark = formData.get('mark');
  const comment = formData.get('comment');

  let db;
  try {
    db = await connectDB();
    await db.run("UPDATE Homework SET mark = ?, comment = ?, status = 'Проверено' WHERE id = ?", [mark.trim() || '—', comment.trim(), hwId]);
    revalidatePath('/homeworks');
  } catch (err) { 
    console.error(err); 
  } finally { 
    if (db) await db.close(); 
  }
}
export default async function HomeworksPage() {
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();
  const authCookie = findAuthCookie(allCookies);

  if (!authCookie) redirect('/login?error=auth');

  let db;
  let user = null;
  let homeworksList = [];
  let studentsList = [];
  let uniqueGroupTasks = [];

  let statTotalIssued = 0;
  let statPendingCheck = 0;
  let statChecked = 0;

  try {
    db = await connectDB();
    let searchKey = authCookie.value;
    try {
      const decoded = JSON.parse(Buffer.from(authCookie.value, 'base64').toString('utf8'));
      searchKey = decoded?.id || decoded?.email || authCookie.value;
    } catch (e) { 
      searchKey = authCookie.value; 
    }

    user = await db.get('SELECT id, name, email, role FROM User WHERE id = ? OR email = ? OR password = ?', [searchKey, searchKey, authCookie.value]);
    if (!user || user.role === 'STUDENT') redirect('/');

    if (user.role === 'ADMIN' || user.role === 'TEACHER') {
      const rawStudents = await db.all("SELECT id, name, email FROM User WHERE role = 'PREMIUM_STUDENT'");
      homeworksList = await db.all("SELECT * FROM Homework");
      
      const rawTasks = await db.all("SELECT DISTINCT title FROM Homework ORDER BY createdAt DESC");
      uniqueGroupTasks = rawTasks.map(t => t.title);

      statTotalIssued = uniqueGroupTasks.length;
      statPendingCheck = homeworksList.filter(h => h.status === 'На проверке').length;
      statChecked = homeworksList.filter(h => h.status === 'Проверено').length;

      // УМНАЯ СОРТИРОВКА: Поднимаем наверх тех, у кого status === 'На проверке'
      studentsList = rawStudents.sort((a, b) => {
        const aUnchecked = homeworksList.filter(h => h.userId === a.id && h.status === 'На проверке').length;
        const bUnchecked = homeworksList.filter(h => h.userId === b.id && h.status === 'На проверке').length;
        
        if (bUnchecked !== aUnchecked) {
          return bUnchecked - aUnchecked;
        }
        return a.name.localeCompare(b.name, 'ru-RU');
      });
    } else {
      homeworksList = await db.all("SELECT * FROM Homework WHERE userId = ? ORDER BY createdAt DESC", [user.id]);
      
      statTotalIssued = homeworksList.length;
      statPendingCheck = homeworksList.filter(h => h.status === 'На проверке').length;
      statChecked = homeworksList.filter(h => h.status === 'Проверено').length;
    }
  } catch (e) { 
    console.error(e); 
  } finally { 
    if (db) await db.close(); 
  }

  const isManagement = user.role === 'ADMIN' || user.role === 'TEACHER';
  {/* 🚀 ВШИТО: Индивидуальный контекстный фон для раздела Домашних заданий */}
return (
  <div 
    className="min-h-screen p-6 bg-cover bg-center bg-no-repeat transition-all duration-500 text-slate-800 dark:text-slate-100 font-sans"
    style={{
      backgroundImage: "url('/hw-bg-light.jpg')"
    }}
  >
    <style dangerouslySetInnerHTML={{__html: `
      .dark div[style*="hw-bg-light.jpg"] {
        background-image: url('/hw-bg-dark.jpg') !important;
      }
    `}} />

    <div className="max-w-6xl mx-auto space-y-6">

        
        {/* Шапка */}
        <div className="bg-white/80 dark:bg-[#140e24]/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-xl shadow-blue-900/5 dark:border-purple-950/40 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-block bg-sky-50 dark:bg-purple-950/40 px-3 py-1 rounded-full text-[10px] font-black uppercase text-sky-600 dark:text-purple-400 tracking-widest">
              Контроль домашних заданий
            </div>
            <h1 className="text-2xl font-black text-sky-600 dark:text-purple-400 uppercase tracking-tight mt-1">
              {isManagement ? 'Домашние задания' : 'Домашние задания'}
            </h1>
            <p className="text-xs text-slate-400 font-bold dark:text-purple-300">
              {isManagement ? `Панель куратора: ${user.name}` : 'Сдавайте работы, скачивайте файлы и изучайте рецензии'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-slate-50 dark:bg-purple-950/20 rounded-xl text-center border dark:border-purple-500/5 min-w-[90px]">
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">Выдано</span>
              <span className="text-base font-black text-sky-500 dark:text-purple-400">{statTotalIssued}</span>
            </div>
            <div className="px-4 py-2 bg-slate-50 dark:bg-purple-950/20 rounded-xl text-center border dark:border-purple-500/5 min-w-[90px]">
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">Проверка</span>
              <span className="text-base font-black text-sky-500 dark:text-purple-400">{statPendingCheck}</span>
            </div>
            <div className="px-4 py-2 bg-slate-50 dark:bg-purple-950/20 rounded-xl text-center border dark:border-purple-500/5 min-w-[90px]">
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">Готово</span>
              <span className="text-base font-black text-sky-500 dark:text-purple-400">{statChecked}</span>
            </div>
          </div>
        </div>

        {/* 💎 ИНТЕРФЕЙС УЧЕНИКА */}
        {!isManagement ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homeworksList.map((hw) => (
              <div key={hw.id} className="bg-white dark:bg-[#140e24]/75 rounded-3xl border border-blue-100/40 dark:border-purple-500/10 shadow-sm flex flex-col justify-between group hover:border-sky-400 dark:hover:border-[#634EE4] hover:bg-sky-500 dark:hover:bg-[#634EE4] transition-all duration-300 min-h-44 overflow-hidden">
                
                {hw.description ? (
                  <a href={hw.description} target="_blank" rel="noopener noreferrer" className="p-6 pb-3 block flex-grow cursor-pointer" title="Кликните, чтобы открыть файл задания">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-white transition-colors duration-300 tracking-tight leading-snug">{hw.title}</h3>
                      <span className="text-xl font-black text-sky-500 dark:text-purple-400 group-hover:text-white transition-colors duration-300">{hw.mark}</span>
                    </div>
                  </a>
                ) : (
                  <div className="p-6 pb-3 flex-grow">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-base font-black text-slate-900 dark:text-white transition-colors tracking-tight leading-snug">{hw.title}</h3>
                      <span className="text-xl font-black text-sky-500 dark:text-purple-400">{hw.mark}</span>
                    </div>
                  </div>
                )}

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-purple-950/40 group-hover:border-white/20 transition-colors duration-300 space-y-3 bg-white/40 dark:bg-black/5">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-sky-100 transition-colors duration-300">
                    <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-600 dark:bg-purple-950 dark:text-purple-400 group-hover:bg-white/20 group-hover:text-white font-black tracking-widest">{hw.status}</span>
                    <span className="font-bold">{new Date(hw.createdAt).toLocaleDateString('ru-RU')}</span>
                  </div>

                  <div className="bg-slate-50 dark:bg-purple-950/20 p-2.5 rounded-xl border dark:border-purple-500/5 group-hover:bg-white/10 group-hover:border-none transition-all duration-300">
                    {hw.solutionUrl ? (
                      <div className="flex items-center justify-between text-xs">
                        <a href={hw.solutionUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-purple-400 group-hover:text-white font-black underline cursor-pointer">Файл решения отправлен</a>
                        {hw.status !== 'Проверено' && (
                          <form action={deleteStudentSolution}>
                            <input type="hidden" name="hwId" value={hw.id} />
                            <button type="submit" className="text-[10px] text-red-500 group-hover:text-white font-black uppercase tracking-wider cursor-pointer">Удалить</button>
                          </form>
                        )}
                      </div>
                    ) : (
                      hw.status !== 'Проверено' && (
                        <form action={submitHomeworkSolution} className="flex gap-2 items-center justify-between">
                          <input type="hidden" name="hwId" value={hw.id} />
                          <input type="file" name="solutionFile" accept=".pdf,image/*" required className="text-[10px] text-slate-500 group-hover:text-white font-bold max-w-[150px] cursor-pointer" />
                          <button type="submit" className="bg-sky-500 dark:bg-[#634EE4] group-hover:bg-white group-hover:text-sky-600 dark:group-hover:text-[#634EE4] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-lg transition-colors cursor-pointer">Сдать</button>
                        </form>
                      )
                    )}
                  </div>

                  {hw.comment && <p className="text-xs italic text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-purple-950/40 p-2 rounded-xl group-hover:bg-white/10 group-hover:text-white leading-relaxed">{hw.comment}</p>}
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* 👑 ИНТЕРФЕЙС ПРЕПОДАВАТЕЛЯ / РУКОВОДИТЕЛЯ */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* ЛЕВАЯ КОЛОНКА (2/3): Список студентов курса */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 pl-1">Список учеников курса</h3>
              {studentsList.length === 0 ? (
                <p className="text-xs font-medium text-slate-400 text-center py-8 bg-white dark:bg-[#140e24]/75 rounded-3xl border border-blue-100/40">На курсе пока нет учеников.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studentsList.map((student) => {
                    const studentHWs = homeworksList.filter(h => h.userId === student.id);
                    const uncheckedCount = studentHWs.filter(h => h.status === 'На проверке').length;
                    
                    // Расчет живого счетчика сданных домашних заданий конкретного ученика
                    const submittedCount = studentHWs.filter(h => h.solutionUrl && h.solutionUrl.trim() !== '').length;

                    return (
                      <div key={student.id} className="bg-white dark:bg-[#140e24]/75 p-5 rounded-3xl border border-blue-100/40 dark:border-purple-500/10 shadow-sm flex flex-col justify-between group hover:border-sky-400 dark:hover:border-[#634EE4] hover:bg-sky-500 dark:hover:bg-[#634EE4] transition-all duration-300">
                        <div className="space-y-1">
                          {/* 🚀 ИСПРАВЛЕНО: Число показывает честный объем сданных работ ученика на бэкенде */}
                          <div className="text-xl font-black text-sky-500 dark:text-purple-400 group-hover:text-white transition-colors duration-300 tracking-tighter">
                            {submittedCount < 10 ? `0${submittedCount}` : submittedCount}
                          </div>
                          <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 group-hover:text-white transition-colors duration-300 tracking-tight truncate">{student.name}</h4>
                          <p className="text-[10px] text-slate-400 group-hover:text-sky-100 transition-colors duration-300 truncate">{student.email}</p>
                        </div>
                        
                        {/* Панель кнопок куратора с экспресс-ссылками на бланки */}
                        <div className="mt-6 pt-3 border-t border-slate-100 dark:border-purple-950/40 group-hover:border-white/20 transition-colors duration-300 flex flex-col gap-2">
                          {studentHWs.filter(h => h.solutionUrl).map((hwWithSol) => (
                            <a 
                              key={hwWithSol.id}
                              href={hwWithSol.solutionUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-full text-center bg-sky-50 hover:bg-sky-100 dark:bg-purple-950/40 dark:hover:bg-purple-900/50 text-sky-600 dark:text-purple-300 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider block transition-colors border border-sky-100/30 dark:border-purple-500/10 cursor-pointer"
                            >
                               Бланки: {hwWithSol.title}
                            </a>
                          ))}

                          <div className="flex items-center justify-between mt-1">
                            <span className={`px-2 py-1 rounded-xl text-[9px] font-black uppercase tracking-wider transition-colors duration-300 ${
                              uncheckedCount > 0 
                                ? 'bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400 group-hover:bg-white/20 group-hover:text-white' 
                                : 'bg-sky-50 text-sky-600 dark:bg-purple-950/40 dark:text-purple-300 group-hover:bg-white/20 group-hover:text-white'
                            }`}>{uncheckedCount > 0 ? `Проверить: ${uncheckedCount}` : 'Всё проверено'}</span>
                            <a href={`/supervisor/students/${student.id}`} className="text-[10px] font-black uppercase tracking-widest text-sky-500 dark:text-purple-400 group-hover:text-white transition-colors duration-300 underline underline-offset-4 cursor-pointer"></a>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ПРАВАЯ КОЛОНКА (1/3): Панели управления потоком */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 pl-1">Управление потоком</h3>
              <div className="bg-white dark:bg-[#140e24]/75 p-5 rounded-3xl border border-blue-100/40 shadow-sm space-y-4">
                <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-500">Выдать тему на курс</h4>
                <form action={createBulkHomework} className="space-y-3">
                  <input type="text" name="title" required placeholder="Название темы ДЗ" className="w-full bg-slate-50 border border-slate-200 dark:bg-[#0c0714] dark:border-purple-500/10 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-sky-500 dark:focus:border-[#634EE4] transition-colors" />
                  <input type="file" name="pdfFile" accept=".pdf" required className="w-full bg-slate-50 border border-slate-200 dark:bg-[#0c0714] dark:border-purple-500/10 rounded-xl px-3 py-2 text-xs font-bold text-slate-400 file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-sky-50 file:text-sky-600 dark:file:bg-purple-950 cursor-pointer" />
                  <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 dark:bg-[#634EE4] dark:hover:bg-[#523fd1] text-white text-xs font-black uppercase tracking-wider py-2.5 rounded-xl shadow-md transition-all cursor-pointer">Опубликовать тему</button>
                </form>
              </div>

              <div className="bg-white dark:bg-[#140e24]/75 p-5 rounded-3xl border border-blue-100/40 shadow-sm space-y-4">
                <h4 className="text-[11px] font-black uppercase tracking-wider text-blue-400">Отозвать ДЗ</h4>
                {uniqueGroupTasks.length === 0 ? (
                  <p className="text-[11px] text-slate-400 font-medium py-2 text-center">Выданных тем нет.</p>
                ) : (
                  <form action={deleteBulkHomework} className="space-y-3">
                    <select name="title" required className="w-full bg-slate-50 border border-slate-200 dark:bg-[#0c0714] dark:border-purple-500/10 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none text-slate-700 dark:text-slate-300">
                      {uniqueGroupTasks.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white text-xs font-black uppercase tracking-wider py-2.5 rounded-xl shadow-sm transition-colors cursor-pointer">Удалить тему</button>
                  </form>
                )}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
