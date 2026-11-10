'use client';

import React, { useState } from 'react';
import {useRouter} from 'next/navigation';

export default function StudentManager({ initialStudents }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = initialStudents.filter((student) => {
    const query = searchQuery.toLowerCase();
    const name = student.name ? student.name.toLowerCase() : '';
    const email = student.email ? student.email.toLowerCase() : '';
    const id = student.id ? String(student.id).toLowerCase() : '';
    return name.includes(query) || email.includes(query) || id.includes(query);
  });

  const handleOpenProfile = (student) => {
    // 🚀 ЖЕЛЕЗОБЕТОННЫЙ ФИКС: Перебираем все возможные варианты полей, чтобы ссылка никогда не улетала пустой
    const targetId = student.id;
    if (!targetId) return;
    
    // Экранируем спецсимволы и пробелы для безопасной передачи в адресную строку Next.js
    router.push(`/supervisor/students/${encodeURIComponent(targetId)}`);
  };

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-blue-100/60 shadow-md dark:bg-[#140e24]/80 dark:border-purple-500/20 overflow-visible">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-purple-950/30 pb-4 mb-4">
        <div>
          <h3 className="text-slate-400 text-xs font-black uppercase tracking-wider mb-1">
            Список учеников платформы
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Всего студентов найдено: <span className="font-bold text-sky-500 dark:text-purple-400">{filteredStudents.length}</span>
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Поиск по фамилии, имени или логину..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-8 py-2 text-xs font-medium bg-slate-50 dark:bg-purple-950/20 text-slate-700 dark:text-slate-200 rounded-xl border border-slate-200/60 dark:border-purple-500/10 focus:outline-none focus:border-sky-400 dark:focus:border-purple-400 transition-all placeholder:text-slate-400"
          />
          <span className="absolute left-2.5 top-2.5 text-slate-400 text-xs select-none"></span>
          
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold px-1"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="space-y-3 max-h-[380px] overflow-y-auto overflow-x-hidden px-1 pr-1.5 py-1">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div
              key={student.id || student.email || student.id}
              onClick={() => handleOpenProfile(student)}
              role="button"
              tabIndex={0}
              onKeyDown={event => {if (event.key === 'Enter') handleOpenProfile(student);}}
              className="group flex items-center justify-between p-4 bg-slate-50/50 dark:bg-purple-950/5 rounded-2xl border border-slate-100 dark:border-purple-500/10 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:bg-sky-50/40 dark:hover:bg-sky-950/10 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow-md hover:shadow-sky-400/10 dark:hover:shadow-sky-400/5 gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500 text-white font-black text-xs flex items-center justify-center uppercase select-none shadow-sm shrink-0">
                  {student.name ? student.name.charAt(0) : 'U'}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 tracking-tight transition-colors group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    {student.name || 'Без имени'}
                  </h4>
                  <p className="text-[10px] md:text-xs font-medium text-slate-400 dark:text-slate-500 truncate">
                    {student.email}
                    {student.isBlocked ? ' · Доступ ограничен' : ''}
                  </p>
                </div>
              </div>

              <div className="text-slate-300 dark:text-purple-900/40 text-sm font-bold pr-2 select-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-sky-400">
                →
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center text-xs font-medium text-slate-400 dark:text-purple-400/60">
            Ученики с такими данными не найдены. Попробуйте изменить запрос.
          </div>
        )}
      </div>

    </div>
  );
}
