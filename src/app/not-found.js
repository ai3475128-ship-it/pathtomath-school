import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-[60vh] p-8 flex items-center justify-center bg-slate-50 dark:bg-[#03000a]">
      <div className="p-8 rounded-3xl bg-white dark:bg-[#140e24] border border-blue-100 dark:border-purple-500/20 text-center space-y-4">
        <h1 className="text-2xl font-black text-sky-600 dark:text-purple-400">
          Страница не найдена
        </h1>
        <p className="text-sm text-slate-500">
          Проверьте адрес или вернитесь на главную.
        </p>
        <Link
          href="/"
          className="inline-block px-5 py-3 rounded-xl bg-sky-500 dark:bg-[#634EE4] text-white font-bold text-xs"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
