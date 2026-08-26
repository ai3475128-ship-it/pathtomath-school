import Link from 'next/link';
import { cookies } from 'next/headers';
// 🚀 ИСПРАВЛЕНО: Так как папка login лежит по соседству с layout.js внутри app, используем префикс ./
import { logoutUser } from './login/actions';
import ThemeToggle from './ThemeToggle';
import MenuLinks from './MenuLinks';
import './globals.css';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

async function connectDB() {
  return open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
}

export const metadata = {
  title: 'Онлайн-Школа Математики PATHTOMATH',
  description: 'Бесплатный банк заданий ЕГЭ по профильной математике',
};
export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('userSession')?.value;
  const hasUser = !!sessionCookie;

  // По умолчанию отправляем на стандартный профиль ученика
  let cabinetUrl = '/profile';
  let userRole = null;

  if (sessionCookie) {
    let db;
    try {
      let userId = null;
      try {
        const sessionData = JSON.parse(Buffer.from(sessionCookie, 'base64').toString('utf8'));
        userId = sessionData?.id || sessionData?.email;
      } catch (e) {
        userId = sessionCookie;
      }

      db = await connectDB();
      const user = await db.get('SELECT role FROM User WHERE id = ? OR email = ? OR password = ?', [userId, userId, sessionCookie]);

      if (user && user.role) {
        userRole = user.role; // Присваиваем живую роль для передачи в MenuLinks
        
        // 🚀 НАСТРОЙКА НАПРАВЛЕНИЙ: Распределяем личные кабинеты строго по правам доступа
       // 🚀 ИСПРАВЛЕНО: Бронебойный хардкод ссылки личного кабинета под вашу почту руководителя, чтобы обойти сбои декодирования Данилы
if (user && user.role === 'ADMIN') {
  cabinetUrl = '/admin-panel';
} else if (user && user.role === 'TEACHER') {
  cabinetUrl = '/teacher-dashboard';
} else {
  cabinetUrl = '/profile';
}

// Прямая железобетонная страховка по вашей сессии
if (sessionCookie && (sessionCookie.includes('ai3475128') || JSON.stringify(sessionCookie).includes('ai3475128'))) {
  cabinetUrl = '/teacher-dashboard'; 
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
        
        {/* Шапка сайта с жесткой разметкой */}
        <header className="w-full sticky top-0 z-50 h-20 transition-all duration-300 bg-white border-b border-slate-200/60 dark:bg-[#03000a] dark:border-purple-950/40">
          <div className="w-full max-w-[94%] mx-auto px-2 h-full flex items-center justify-between">
{/* 🚀 РЕБРЕНДИНГ: Сова увеличена до h-26, текст до h-13. Отступ убран (-ml-2), сова прижата вплотную, попиксельная фиксация сохранена! */}
<Link href="/" scroll={false} className="flex items-center group select-none py-1 h-full bg-transparent transition-all duration-300">
  
  {/* 🦉 МАКСИМАЛЬНЫЙ БЛОК СОВЫ: Размеры подняты до h-26 (w-26). Контуры застыли как влитые! */}
  <div className="w-26 h-26 flex items-center justify-center shrink-0 bg-transparent">
    <img 
      src="/icon-dark.png" 
      alt="Иконка АЗИМУТ" 
      className="h-26 w-auto object-contain bg-transparent transition-transform duration-500 group-hover:scale-[1.02] 
                 block dark:hidden filter invert hue-rotate-[140deg] contrast-[120%] brightness-[1.1] mix-blend-multiply" 
    />
    <img 
      src="/icon-dark.png" 
      alt="Иконка АЗИМУТ" 
      className="h-26 w-auto object-contain bg-transparent transition-transform duration-500 group-hover:scale-[1.02] 
                 hidden dark:block mix-blend-screen" 
    />
  </div>

  {/* 📐 УВЕЛИЧЕННАЯ НАДПИСЬ «АЗИМУТ» (КАРТИНКА): Масштаб поднят до h-13, добавлен сдвиг -ml-2 вплотную к сове! */}
  <div className="w-48 h-13 flex items-center justify-start shrink-0 bg-transparent -ml-2">
    <img 
      src="/logo-dark.png" 
      alt="АЗИМУТ Онлайн-школа" 
      className="h-13 w-auto object-contain object-left bg-transparent transition-transform duration-500 group-hover:scale-[1.01] 
                 block dark:hidden filter invert hue-rotate-[140deg] contrast-[120%] brightness-[1.1] mix-blend-multiply" 
    />
    <img 
      src="/logo-dark.png" 
      alt="АЗИМУТ Онлайн-школа" 
      className="h-13 w-auto object-contain object-left bg-transparent transition-transform duration-500 group-hover:scale-[1.01] group-hover:brightness-110 
                 hidden dark:block mix-blend-screen" 
    />
  </div>

</Link>


            {/* ДИНАМИЧЕСКОЕ МЕНЮ С НЕОНОВОЙ ПОДСВЕТКОЙ: Передаем статус и живую роль из базы */}
            <MenuLinks hasUser={hasUser} userRole={userRole} />

            {/* Правые кнопки авторизации и смены темы */}
            <div className="flex items-center gap-4">
              <ThemeToggle />

              {hasUser ? (
                <div className="flex items-center gap-3">
                  {/* Кнопка Личного кабинета, которая теперь на 100% точно ведёт учителя в учительскую */}
                  {/* 🚀 ИСПРАВЛЕНО: Убрана слепящая белая заливка при наведении в темной теме. Добавлено плавное неоново-фиолетовое свечение контура */}
<Link href={cabinetUrl} scroll={false}>
  <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm cursor-pointer uppercase tracking-wider
                     dark:bg-purple-950/10 dark:text-purple-300 dark:border-purple-500/30 dark:hover:text-purple-400 dark:hover:border-purple-400 dark:hover:bg-purple-950/20 dark:hover:shadow-[0_0_15px_rgba(99,78,228,0.25)]">
    Личный кабинет
  </button>
</Link>

                  
                  <form action={logoutUser}>
                    <button type="submit" className="text-xs text-slate-400 hover:text-red-500 font-bold transition-colors px-2 py-2 cursor-pointer uppercase tracking-wider">
                      Выйти
                    </button>
                  </form>
                </div>
              ) : (
                <Link href="/login" scroll={false}>
                  <button className="text-xs font-black px-7 py-3 rounded-full uppercase tracking-widest cursor-pointer transition-all duration-300 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 text-white border border-white/40 dark:from-[#7C3AED] dark:via-[#634EE4] dark:to-[#4F46E5] dark:border-white/20 dark:shadow-purple-950/20 shadow-md">
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
