import Link from 'next/link';
import { cookies } from 'next/headers';
import { logoutUser } from './login/actions';
import ThemeToggle from './ThemeToggle';
import MenuLinks from './MenuLinks'; // 👈 Импортируем наше динамическое меню
import './globals.css';

export const metadata = {
  title: 'Онлайн-Школа Математики PATHtoMATH',
  description: 'Бесплатный банк заданий ЕГЭ по профильной математике',
};

export default async function RootLayout({ children }) {
  // 🔐 Читаем куки напрямую на сервере (работает без задержек и кэша)
  const cookieStore = await cookies();
  // ИСПРАВЛЕНО: Теперь считываем актуальное имя куки сессии
  const hasUser = !!cookieStore.get('userSession')?.value;

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

            {/* 🚀 ВСТАВЛЯЕМ НАШЕ УМНОЕ ДИНАМИЧЕСКОЕ МЕНЮ С НЕОНОВОЙ ПОДСВЕТКОЙ */}
            {/* ИСПРАВЛЕНО: Передаем статус авторизации в компонент ссылок меню */}
            <MenuLinks hasUser={hasUser} />

            {/* Правые кнопки + НАШ КРАСИВЫЙ БЕГАЮЩИЙ ПОЛЗУНОК */}
            <div className="flex items-center gap-4">
              
              <ThemeToggle />

              {/* СЕРВЕРНАЯ ПРОВЕРОЧНАЯ ЛОГИКА */}
              {hasUser ? (
                <div className="flex items-center gap-3">
                  <Link href="/profile" scroll={false}>
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

        {/* Область основного контента */}
        <main className="flex-grow">
          {children}
        </main>

      </body>
    </html>
  );
}
