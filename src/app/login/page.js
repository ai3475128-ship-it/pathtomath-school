import { loginUser } from './actions';
import Link from 'next/link';
import Image from 'next/image';

export default async function LoginPage({ searchParams }) {
  const queryParams = await searchParams;
  const errorType = queryParams?.error;
  
  // Определяем, какая вкладка активна (по умолчанию ученик)
  const activeTab = queryParams?.tab === 'teacher' ? 'teacher' : 'student';
  let errorMessage = '';
  if (errorType === 'limited') errorMessage = 'Слишком много попыток. Повторите через 15 минут.';
  if (errorType === 'unavailable') errorMessage = 'Регистрация временно недоступна. Обратитесь к преподавателю.';
  if (errorType === 'fields') errorMessage = 'Пожалуйста, заполните все поля.';
  if (errorType === 'wrong') errorMessage = 'Неверный Email или пароль. Попробуйте ещё раз.';
  if (errorType === 'server') errorMessage = 'Ошибка сервера. Попробуйте позже.';
  // Добавляем этот текст:
  if (errorType === 'not_a_teacher') errorMessage = 'У вас нет прав доступа преподавателя.';

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
          Войти в аккаунт
        </h2>
        <p className="text-slate-400 dark:text-slate-400 text-center text-sm mb-6 font-medium">
          Введите ваши данные для входа на платформу.
        </p>

        {/* 🛠 НОВЫЙ БЛОК: Переключатель ролей (Вкладки) */}
        <div className="flex bg-slate-100 dark:bg-purple-950/40 p-1 rounded-xl mb-6 border border-blue-100/20 dark:border-purple-500/10">
          <Link 
            href="/login?tab=student"
            scroll={false}
            className={`flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
              activeTab === 'student' 
                ? 'bg-white text-sky-600 shadow-sm dark:bg-[#7C3AED] dark:text-white' 
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-purple-300'
            }`}
          >
            Ученик
          </Link>
          <Link 
            href="/login?tab=teacher"
            scroll={false}
            className={`flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
              activeTab === 'teacher' 
                ? 'bg-white text-sky-600 shadow-sm dark:bg-[#7C3AED] dark:text-white' 
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-purple-300'
            }`}
          >
            Преподаватель
          </Link>
        </div>

        {errorMessage && (
          <div className="bg-red-500/5 border border-red-200 text-red-500 p-3 rounded-xl text-sm mb-4 text-center font-semibold">
            {errorMessage}
          </div>
        )}

        <form action={loginUser} className="space-y-4">
          {/* Скрытое поле, передающее выбранную вкладку на бэкенд для дополнительной валидации */}
          <input type="hidden" name="selectedTab" value={activeTab} />

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
            Войти как {activeTab === 'teacher' ? 'преподаватель' : 'ученик'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-400 mt-6 font-medium">
          Ещё нет аккаунта?{' '}
          <Link href="/register" className="text-sky-600 hover:text-sky-700 dark:text-purple-400 dark:hover:text-purple-300 hover:underline font-bold transition">
            Зарегистрироваться
          </Link>
        </p>

      </div>
    </div>
  );
}
