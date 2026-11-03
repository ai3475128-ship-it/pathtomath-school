import { registerNewUser } from './actions';
import Link from 'next/link';
import Image from 'next/image';

export default async function RegisterPage({ searchParams }) {
  const queryParams = await searchParams;
  const errorType = queryParams?.error;

  let errorMessage = '';
  if (errorType === 'limited') errorMessage = 'Слишком много попыток. Повторите через 15 минут.';
  if (errorType === 'unavailable') errorMessage = 'Регистрация временно недоступна. Обратитесь к преподавателю.';
  if (errorType === 'fields') errorMessage = 'Заполните все поля. Пароль — от 8 символов, не более 72 байт.';
  if (errorType === 'exists') errorMessage = 'Пользователь с таким Email уже существует.';
  if (errorType === 'server') errorMessage = 'Произошла ошибка при сохранении. Попробуйте еще раз.';

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-6 relative overflow-hidden bg-white dark:bg-[#03000a]">
      
      {/* 🌌 ЗАДНИЙ ФОН: ПЛАВНОЕ ПЕРЕТЕКАНИЕ СВЕТЛОЙ И ТЁМНОЙ КАРТИНКИ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* ☀️ Светлый фон */}
        <div className="absolute inset-0 block dark:hidden">
          <Image
            src="/auth-bg-light.jpg"
            alt="Auth Background Light"
            fill
            priority
            unoptimized 
            className="object-cover object-center"
          />
        </div>
        {/* 🌙 Тёмный фон */}
        <div className="absolute inset-0 hidden dark:block">
          <Image
            src="/auth-bg.jpg"
            alt="Auth Background Dark"
            fill
            priority
            unoptimized 
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* 🔮 Полупрозрачная матовая карточка (Glassmorphism парит на слое z-10) */}
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-blue-100/60 shadow-xl shadow-blue-900/5 w-full max-w-md dark:bg-[#140e24]/80 dark:border-purple-500/20 transition-all duration-500 relative z-10">
        
        <h2 className="text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-500 to-blue-600 dark:from-purple-400 dark:to-pink-400 mb-2">
          Создать аккаунт
        </h2>
        <p className="text-slate-400 dark:text-slate-400 text-center text-sm mb-6 font-medium">
          Зарегистрируйтесь, чтобы сохранять свой прогресс подготовки.
        </p>

        {errorMessage && (
          <div className="bg-red-500/5 border border-red-200 text-red-500 p-3 rounded-xl text-sm mb-4 text-center font-semibold">
            {errorMessage}
          </div>
        )}

        <form action={registerNewUser} className="space-y-4">
          <div>
            <label className="block text-xs font-black text-slate-400 dark:text-purple-400 uppercase tracking-wider mb-2">Ваше имя</label>
            <input 
              name="name"
              type="text" 
              required
              placeholder=""
              className="w-full bg-white/50 border border-blue-100/60 rounded-xl px-4 py-3 text-slate-700 dark:bg-purple-950/40 dark:border-purple-500/30 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 dark:focus:border-purple-500 transition text-sm font-medium backdrop-blur-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-400 dark:text-purple-400 uppercase tracking-wider mb-2">Email адрес</label>
            <input 
              name="email"
              type="email" 
              required
              placeholder="name@example.com"
              className="w-full bg-white/50 border border-blue-100/60 rounded-xl px-4 py-3 text-slate-700 dark:bg-purple-950/40 dark:border-purple-500/30 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 dark:focus:border-purple-500 transition text-sm font-medium backdrop-blur-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-400 dark:text-purple-400 uppercase tracking-wider mb-2">Пароль</label>
            <input 
              name="password"
              type="password" 
              required
              placeholder="••••••••"
              className="w-full bg-white/50 border border-blue-100/60 rounded-xl px-4 py-3 text-slate-700 dark:bg-purple-950/40 dark:border-purple-500/30 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 dark:focus:border-purple-500 transition text-sm font-medium backdrop-blur-sm"
            />
          </div>

          <button 
            type="submit" 
            className="w-full font-black py-3.5 rounded-xl border uppercase tracking-widest text-xs cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:brightness-110
                       bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 text-white border-white/40 shadow-lg shadow-sky-500/10 hover:shadow-xl hover:shadow-sky-500/20
                       dark:from-[#7C3AED] dark:via-[#634EE4] dark:to-[#4F46E5] dark:border-white/20 dark:shadow-[0_0_12px_rgba(99,78,228,0.25)] dark:hover:shadow-[0_0_15px_rgba(99,78,228,0.4)]"
          >
            Зарегистрироваться
          </button>
        </form>

        <p className="text-center text-sm text-slate-400 mt-6 font-medium">
          Уже есть аккаунт?{' '}
          <Link href="/login" className="text-sky-600 hover:text-sky-700 dark:text-purple-400 dark:hover:text-purple-300 hover:underline font-bold transition">
            Войти
          </Link>
        </p>

      </div>
    </div>
  );
}
