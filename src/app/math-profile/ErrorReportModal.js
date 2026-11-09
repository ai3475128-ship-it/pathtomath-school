'use client';

import React, { useState } from 'react';
import { sendErrorReport } from './actions';
import { taskModuleForRoute } from '@/lib/ege-sections';

export default function ErrorReportModal({ sectionNumber,module }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(module || String(sectionNumber || 1));
  const [taskId, setTaskId] = useState('');
  const [description, setDescription] = useState('');
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setStatusMessage({ type: '', text: '' });

    const formData = new FormData();
    formData.append('module', taskModuleForRoute(String(selectedSection)) || '');
    formData.append('taskId', taskId || 0);
    formData.append('description', description);

    let result;
    try { result = await sendErrorReport(formData); } catch { result = {success:false,error:'Не удалось отправить сообщение. Повторите позже.'}; }

    setIsPending(false);
    if (result?.success) {
      setStatusMessage({ type: 'success', text: 'Спасибо! Сообщение успешно отправлено.' });
      setDescription('');
      setTaskId('');
      setTimeout(() => {
        setIsOpen(false);
        setStatusMessage({ type: '', text: '' });
      }, 2000);
    } else {
      setStatusMessage({ type: 'error', text: result?.error || 'Произошла ошибка' });
    }
  };

  return (
    <>
      {/* 🔮 ПРЯМОУГОЛЬНАЯ КНОПКА С МАКСИМАЛЬНЫМ ПРИОРИТЕТОМ Z-INDEX */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-20" />
        <button 
          onClick={() => setIsOpen(true)}
          className="relative flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-[#7C3AED] dark:to-[#634EE4] text-white rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer select-none font-black text-xs uppercase tracking-widest"
        >
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-white/90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <span>Сообщить об ошибке</span>
        </button>
      </div>
      {/* 💎 МОДЕРНИЗИРОВАННОЕ МОДАЛЬНОЕ ОКНО */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => !isPending && setIsOpen(false)} />

          <div className="bg-white/95 dark:bg-[#140e24]/95 backdrop-blur-md w-full max-w-md p-6 rounded-3xl border border-blue-100/60 dark:border-purple-500/20 shadow-2xl relative z-10">
            <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-500 to-blue-600 dark:from-purple-400 dark:to-pink-400 mb-1">
              Сообщить об опечатке
            </h3>
            <p className="text-xs text-slate-400 font-medium mb-4">
              Заполните графы ниже. Информация мгновенно поступит руководству школы.
            </p>

            {statusMessage.text && (
              <div className={`p-3 text-xs font-semibold rounded-xl mb-4 text-center border ${
                statusMessage.type === 'success' ? 'bg-emerald-500/5 text-emerald-500 border-emerald-200/30' : 'bg-red-500/5 text-red-500 border-red-200/30'
              }`}>
                {statusMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-[10px] font-black text-slate-400 dark:text-purple-400 uppercase tracking-wider mb-1.5">Раздел ЕГЭ</label>
                  <div
                    onClick={() => !isPending && setIsSelectOpen(!isSelectOpen)}
                    className="w-full text-sm bg-slate-50 border border-blue-100/60 rounded-xl p-3 text-slate-700 dark:bg-purple-950/40 dark:border-purple-500/30 dark:text-slate-200 focus:outline-none cursor-pointer flex justify-between items-center shadow-sm select-none"
                  >
                    <span>{String(selectedSection).includes('olympiad') ? `Олимпиады · раздел ${String(selectedSection).match(/\d+/)?.[0]}` : `Задание №${selectedSection}`}</span>
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-3.5 h-3.5 text-blue-500 transition-transform duration-300 ${isSelectOpen ? 'rotate-180' : ''}`}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </div>

                  {isSelectOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsSelectOpen(false)} />
                      <div className="absolute left-0 right-0 mt-2 max-h-48 overflow-y-auto bg-white/95 backdrop-blur-md border border-blue-100 rounded-xl shadow-xl z-20 font-medium text-sm p-1.5 divide-y divide-blue-50/50 dark:bg-[#140e24]/95 dark:border-purple-500/30">
                        {module && module !== String(parseInt(module,10)) && <div onClick={() => {setSelectedSection(module);setIsSelectOpen(false);}} className="px-3 py-2.5 rounded-lg cursor-pointer text-sky-600">Текущий раздел</div>}
                        {[...Array(20)].map((_, idx) => (
                          <div
                            key={idx + 1}
                            onClick={() => { setSelectedSection(String(idx + 1)); setIsSelectOpen(false); }}
                            className={`px-3 py-2.5 rounded-lg cursor-pointer ${selectedSection === String(idx + 1) ? 'bg-blue-50 text-blue-600 font-bold dark:bg-purple-950/40' : 'text-slate-600 hover:bg-blue-50/50'}`}
                          >
                            Задание №{idx + 1}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 dark:text-purple-400 uppercase tracking-wider mb-1.5">Номер задачи (ID)</label>
                  <input type="number" min="1" value={taskId} onChange={(e) => setTaskId(e.target.value)} disabled={isPending} placeholder="Например: 14" className="w-full text-sm bg-slate-50 border border-blue-100/60 rounded-xl p-3 text-slate-800 focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 dark:text-purple-400 uppercase tracking-wider mb-1.5">Описание проблемы</label>
                <textarea required rows="4" value={description} onChange={(e) => setDescription(e.target.value)} disabled={isPending} placeholder="Опишите опечатку..." className="w-full text-sm bg-slate-50 border border-blue-100/60 rounded-xl p-3 text-slate-800 focus:outline-none resize-none" />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" disabled={isPending} onClick={() => setIsOpen(false)} className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-slate-600">Отмена</button>
                <button type="submit" disabled={isPending} className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-black text-xs rounded-xl uppercase tracking-widest shadow-lg">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
