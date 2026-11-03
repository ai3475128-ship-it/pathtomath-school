"use client";
import Link from "next/link";
export default function ErrorPage({ reset }) {
  return (
    <div className="min-h-[60vh] p-8 flex items-center justify-center bg-slate-50 dark:bg-[#03000a]">
      <div className="p-8 rounded-3xl bg-white dark:bg-[#140e24] border border-blue-100 dark:border-purple-500/20 text-center space-y-4">
        <h2 className="text-2xl font-black text-sky-600 dark:text-purple-400">
          Не удалось выполнить действие
        </h2>
        <p className="text-sm text-slate-500">
          Проверьте введённые данные и попробуйте снова.
        </p>
        <button
          onClick={reset}
          className="px-5 py-3 rounded-xl bg-sky-500 dark:bg-[#634EE4] text-white font-bold text-xs cursor-pointer"
        >
          Повторить
        </button>
        <Link
          href="/"
          className="block text-xs font-bold text-sky-600 dark:text-purple-400"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
