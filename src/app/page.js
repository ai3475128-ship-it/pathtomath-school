import Image from 'next/image';
import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth';

const sectionButton = 'inline-flex min-h-12 items-center justify-center rounded-2xl border border-sky-400/40 bg-white px-8 py-3.5 text-sm font-bold text-sky-600 shadow-sm transition-all duration-300 hover:border-sky-600 hover:text-sky-700 hover:shadow-[0_0_15px_rgba(14,165,233,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-purple-500/30 dark:bg-[#140e24] dark:text-purple-300 dark:hover:border-purple-400 dark:hover:text-purple-200 dark:focus-visible:outline-purple-400';

export default async function Home() {
  const isAuthenticated = Boolean(await getCurrentUser());

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#e8eff9] text-slate-900 dark:bg-[#080512] dark:text-white">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-[1600px] items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:px-16 xl:px-20">
        <div className="min-w-0 py-4 lg:py-12">
          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-sky-600 dark:text-purple-400 sm:text-5xl xl:text-6xl">
            Курсы ЕГЭ <br />по математике
          </h1>
          <div className="mt-9 flex flex-wrap gap-3 sm:mt-12 sm:gap-4">
            {!isAuthenticated && (
              <Link href="/register" className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:bg-[#7C3AED] dark:hover:bg-[#6D28D9] dark:focus-visible:outline-purple-400">
                Зарегистрироваться
              </Link>
            )}
            <Link href="/math-profile" className={sectionButton}>ЕГЭ</Link>
            <Link href="/olympiads" className={sectionButton}>Олимпиады</Link>
          </div>
        </div>

        <div aria-hidden="true" className="relative aspect-square w-full overflow-hidden rounded-[28px] sm:rounded-[36px]">
          <Image src="/hero-bg.jpg" alt="" fill priority unoptimized sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-right dark:hidden" />
          <Image src="/hero-bg-dark.jpg" alt="" fill unoptimized sizes="(min-width: 1024px) 55vw, 100vw" className="hidden object-cover object-right dark:block" />
        </div>
      </div>
    </main>
  );
}
