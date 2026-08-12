import { getCurrentUser } from '../login/actions';
import { redirect } from 'next/navigation';

export default async function TeacherDashboardPage() {
  const user = await getCurrentUser();

  // 🔒 Защита роута: пускаем только TEACHER или ADMIN (руководителей)
  if (!user || (user.role !== 'TEACHER' && user.role !== 'ADMIN')) {
    redirect('/login?error=wrong');
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#03000a] p-6 text-slate-800 dark:text-slate-100">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Панель приветствия */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-blue-100/60 shadow-md dark:bg-[#140e24]/80 dark:border-purple-500/20">
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-pink-400">
            Рабочая панель преподавателя
          </h1>
          <p className="text-sm text-slate-400 mt-1 font-medium">
            Добро пожаловать в систему, <span className="font-bold text-slate-600 dark:text-purple-300">{user.email}</span>.
          </p>
        </div>

        {/* Сюда в будущем выведем проверку ответов и домашку */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-blue-100/60 dark:bg-[#140e24]/80 dark:border-purple-500/20 shadow-sm">
          <h3 className="font-bold text-lg mb-4 text-slate-700 dark:text-purple-300">📝 Проверка задач и связь с учениками</h3>
          <div className="text-sm text-slate-400 font-medium py-12 text-center border-2 border-dashed border-slate-200 dark:border-purple-950/60 rounded-xl">
            В данный момент нет непроверенных решений от учеников.
          </div>
        </div>

      </div>
    </div>
  );
}
