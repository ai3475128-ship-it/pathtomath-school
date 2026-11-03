import { verifyCode } from './actions';
import Image from 'next/image';

export default async function VerifyEmailPage({ searchParams }) {
  const queryParams = await searchParams;
  const email = queryParams?.email || '';
  const errorType = queryParams?.error;

  let errorMessage = '';
  if (errorType === 'limited') errorMessage = 'Слишком много попыток. Повторите через 15 минут.';
  if (errorType === 'unavailable') errorMessage = 'Регистрация временно недоступна. Обратитесь к преподавателю.';
  if (errorType === 'fields') errorMessage = 'Пожалуйста, введите код.';
  if (errorType === 'wrong') errorMessage = 'Код неверен, истёк или исчерпаны попытки. Запросите новый код через регистрацию.';
  if (errorType === 'server') errorMessage = 'Ошибка сервера. Попробуйте позже.';

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-6 relative overflow-hidden bg-white dark:bg-[#03000a]">
      
      {/* 🌌 ЗАДНИЙ ФОН: СИНХРОНИЗИРОВАН С КАРТИНКАМИ ЛОГИНА */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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

      {/* 🔮 Полупрозрачная матовая карточка (Glassmorphism) */}
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-blue-100/60 shadow-xl shadow-blue-900/5 w-full max-w-md dark:bg-[#140e24]/80 dark:border-purple-500/20 transition-all duration-500 relative z-10">
        
        <h2 className="text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-500 to-blue-600 dark:from-purple-400 dark:to-pink-400 mb-2">
          Подтверждение Email
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center text-sm mb-6 font-medium leading-relaxed">
          Мы отправили 6-значный цифровой код на адрес <br />
          <span className="font-bold text-slate-700 dark:text-purple-300">{email}</span>. <br />
          Введите его ниже для активации личного кабинета.
        </p>

        {errorMessage && (
          <div className="bg-red-500/5 border border-red-200 text-red-500 p-3 rounded-xl text-sm mb-4 text-center font-semibold">
            {errorMessage}
          </div>
        )}

        <form action={verifyCode} className="space-y-5">
          {/* Скрытое поле для передачи email обратно на сервер */}
          <input type="hidden" name="email" value={email} />

          <div>
            <label className="block text-xs font-black text-slate-400 dark:text-purple-400 uppercase tracking-wider mb-2 text-center">
              Код из письма
            </label>
            <input 
              name="code"
              type="text" 
              required
              maxLength={6}
              placeholder="000000"
              className="w-full bg-white/50 border border-blue-100/60 rounded-xl px-4 py-3.5 text-center text-xl font-black tracking-[0.5em] text-slate-800 dark:bg-purple-950/40 dark:border-purple-500/30 dark:text-slate-100 placeholder-slate-300 focus:outline-none focus:border-blue-400 dark:focus:border-purple-500 transition shadow-sm backdrop-blur-sm"
            />
          </div>

          <button 
            type="submit" 
            className="w-full font-black py-3.5 rounded-xl border uppercase tracking-widest text-xs cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:brightness-110
                       bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 text-white border-white/40 shadow-lg shadow-sky-500/10 hover:shadow-xl hover:shadow-sky-500/20
                       dark:from-[#7C3AED] dark:via-[#634EE4] dark:to-[#4F46E5] dark:border-white/20 dark:shadow-[0_0_12px_rgba(99,78,228,0.25)] dark:hover:shadow-[0_0_15px_rgba(99,78,228,0.4)]"
          >
            Подтвердить и войти
          </button>
        </form>

      </div>
    </div>
  );
}
