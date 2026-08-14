import Link from 'next/link';
import { cookies } from 'next/headers';
import { logoutUser } from './login/actions';
import ThemeToggle from './ThemeToggle';
import MenuLinks from './MenuLinks';
import './globals.css';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

export const metadata = {
  title: 'Онлайн-Школа Математики PATHtoMATH',
  description: 'Бесплатный банк заданий ЕГЭ по профильной математике',
};

async function connectDB() {
  return open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
}

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('userSession')?.value;
  const hasUser = !!sessionCookie;

  // По умолчанию отправляем на стандартный профиль
  let cabinetUrl = '/profile';
  let userRole = null; // Объявляем переменную здесь, чтобы она была доступна ВСЕГДА
  if (sessionCookie) {
    let db;
    try {
      db = await connectDB();
      let userId = null;

      // ДЕКОДИРОВАНИЕ BASE64: Читаем защищенную куку Данилы точь-в-точь как в его профиле
      try {
        const sessionData = JSON.parse(Buffer.from(sessionCookie, 'base64').toString('utf8'));
        userId = sessionData?.id || sessionData?.email;
      } catch (e) {
        // Резервный вариант, если кука сохранена обычной строкой
        userId = sessionCookie;
      }

      if (userId) {
        // Напрямую заглядываем в базу данных dev.db и считываем роль пользователя
        const user = await db.get('SELECT role FROM User WHERE id = ? OR email = ? OR password = ?', [userId, userId, sessionCookie]);
        
        if (user && user.role) {
          userRole = user.role; // Присваиваем живую роль для передачи в MenuLinks
          
          if (user.role === 'ADMIN') {
            cabinetUrl = '/admin-panel'; // Главного руководителя сразу ведем в админку!
          } else if (user.role === 'TEACHER') {
            cabinetUrl = '/teacher-dashboard'; // Преподавателя - в учительскую панель
          } else {
            cabinetUrl = '/profile'; // Учеников оставляем в их профиле
          }
        }
      }
    } catch (err) {
      console.error('Ошибка проверки роли в глобальном шаблоне:', err);
      cabinetUrl = '/profile';
    } finally {
      if (db) await db.close();
    }
  }
  return (
    <html lang="ru">
      <body className="antialiased min-h-screen flex flex-col font-sans selection:bg-blue-200/50">
        
        {/* Шапка сайта с жесткой высотой h-20 */}
        <header className="w-full sticky top-0 z-50 h-20 transition-all duration-300 bg-white border-b border-slate-200/60 dark:bg-[#0c0714]/95 dark:border-purple-950/40 shadow-[0_4px_6px_-1px_rgba(147,197,253,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(147,51,234,0.08)]">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            
            {/* Название бренда */}
            <Link href="/" scroll={false} className="flex items-center group select-none">
              <span className="font-black text-2xl tracking-tight uppercase text-sky-600 dark:text-purple-400 transition-colors duration-300">
                PATH<span className="text-sky-700 font-semibold lowercase dark:text-pink-400">to</span>MATH
              </span>
            </Link>

            {/* ДИНАМИЧЕСКОЕ МЕНЮ С НЕОНОВОЙ ПОДСВЕТКОЙ: Передаем статус и живую роль из базы */}
            <MenuLinks hasUser={hasUser} userRole={userRole} />

            {/* Правые кнопки авторизации и смены темы */}
            <div className="flex items-center gap-4">
              
              <ThemeToggle />

              {hasUser ? (
                <div className="flex items-center gap-3">
                  <Link href={cabinetUrl} scroll={false}>
                    <button className="bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition border border-blue-100 shadow-sm dark:bg-purple-950/20 dark:text-purple-200 dark:border-purple-500/30 dark:hover:bg-purple-950/40 cursor-pointer">
                      Личный кабинет
                    </button>
                  </Link>
                  <form action={logoutUser}>
                    <button type="submit" className="text-xs text-slate-400 hover:text-red-500 font-bold transition px-2 py-2 dark:text-slate-500 dark:hover:text-red-400 cursor-pointer">
                      Выйти
                    </button>
                  </form>
                </div>
              ) : (
                <Link href="/login" scroll={false}>
                  <button className="text-xs font-black px-7 py-3 rounded-full uppercase tracking-widest cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:brightness-110
                                     bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 text-white border border-white/40 shadow-lg shadow-sky-500/10 hover:shadow-xl hover:shadow-sky-500/20
                                     dark:from-[#7C3AED] dark:via-[#634EE4] dark:to-[#4F46E5] dark:border-white/20 dark:shadow-purple-950/20 dark:hover:shadow-purple-500/20"
                  >
                    Войти 
                  </button>
                </Link>
              )}
            </div>

          </div>
        </header>

        {/* Область контента страниц */}
        <main className="flex-grow">
          {children}
        </main>

      </body>
    </html>
  );
}
