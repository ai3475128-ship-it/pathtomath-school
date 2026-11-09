import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { PASSWORD_RESET_COOKIE } from "@/lib/password-reset";
import { requestPasswordReset, resetForgottenPassword } from "./actions";

const inputStyle = "w-full rounded-xl border border-blue-100 bg-white/60 px-4 py-3 text-sm text-slate-700 focus-visible:outline-2 focus-visible:outline-sky-500 dark:border-purple-500/30 dark:bg-purple-950/40 dark:text-slate-100";
const labelStyle = "mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200";
const linkStyle = "font-semibold text-sky-700 hover:underline dark:text-purple-300";
const messages = new Map([
  ["email", "Введите корректный адрес электронной почты."],
  ["unavailable", "Восстановление пароля временно недоступно. Попробуйте позже."],
  ["limited", "Слишком много запросов кода. Повторите попытку позже."],
  ["expired", "Запросите новый код, чтобы восстановить пароль."],
  ["code", "Код неверен, истёк или исчерпаны попытки. Проверьте код или запросите новый."],
  ["password", "Пароль должен содержать минимум 8 символов и занимать до 72 байт."],
  ["confirmation", "Пароли не совпадают."],
]);

export default async function ForgotPasswordPage({ searchParams }) {
  const query = await searchParams;
  const hasToken = (await cookies()).has(PASSWORD_RESET_COOKIE);
  const showCode = query.step === "code" && hasToken;
  const error = messages.get(query.step === "code" && !hasToken ? "expired" : query.error);

  return (
    <main className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-white p-6 dark:bg-[#03000a]">
      <div className="pointer-events-none absolute inset-0 dark:hidden">
        <Image src="/auth-bg-light.jpg" alt="" fill unoptimized className="object-cover object-center" />
      </div>
      <div className="pointer-events-none absolute inset-0 hidden dark:block">
        <Image src="/auth-bg.jpg" alt="" fill unoptimized className="object-cover object-center" />
      </div>
      <section className="relative z-10 w-full max-w-md rounded-3xl border border-blue-100/60 bg-white/80 p-6 shadow-xl shadow-blue-900/5 backdrop-blur-md sm:p-8 dark:border-purple-500/20 dark:bg-[#140e24]/80">
        <h1 className="mb-2 text-center text-2xl font-black text-sky-700 dark:text-purple-300">Восстановление пароля</h1>
        <p className="mb-6 text-center text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {showCode
            ? "Если адрес привязан к аккаунту, на него придёт восьмизначный код. Введите его здесь в течение 15 минут. Если письма нет, проверьте папку «Спам»."
            : "Укажите адрес электронной почты, который записан в вашем профиле."}
        </p>
        {error && (
          <p role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200">
            {error}
          </p>
        )}
        <form action={showCode ? resetForgottenPassword : requestPasswordReset} className="space-y-4">
          {showCode ? (
            <>
              <div>
                <label htmlFor="reset-code" className={labelStyle}>Код из письма</label>
                <input id="reset-code" name="code" type="text" inputMode="numeric" autoComplete="one-time-code"
                  pattern="[0-9]{8}" maxLength={8} required className={inputStyle} />
              </div>
              <div>
                <label htmlFor="reset-password" className={labelStyle}>Новый пароль</label>
                <input id="reset-password" name="password" type="password" autoComplete="new-password"
                  minLength={8} maxLength={72} required className={inputStyle} />
              </div>
              <div>
                <label htmlFor="reset-confirmation" className={labelStyle}>Повторите новый пароль</label>
                <input id="reset-confirmation" name="confirmPassword" type="password" autoComplete="new-password"
                  minLength={8} maxLength={72} required className={inputStyle} />
              </div>
            </>
          ) : (
            <div>
              <label htmlFor="reset-email" className={labelStyle}>Почта из профиля</label>
              <input id="reset-email" name="email" type="email" autoComplete="email" maxLength={254}
                required placeholder="name@example.com" className={inputStyle} />
            </div>
          )}
          <button type="submit" className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 py-3.5 text-sm font-bold text-white hover:brightness-110 dark:from-purple-600 dark:to-indigo-600">
            {showCode ? "Сменить пароль" : "Отправить код"}
          </button>
        </form>
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-center text-sm">
          {showCode && <Link href="/forgot-password" className={linkStyle}>Запросить новый код</Link>}
          {!showCode && hasToken && <Link href="/forgot-password?step=code" className={linkStyle}>У меня уже есть код</Link>}
          <Link href="/login" className={linkStyle}>Вернуться ко входу</Link>
        </div>
      </section>
    </main>
  );
}
