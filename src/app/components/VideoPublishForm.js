import { EGE_SECTIONS } from '@/lib/ege-sections';
import { PHYSICS_SECTIONS, OLYMPIAD_TOPICS } from '@/lib/learning-catalog';
import { olympiads } from '@/lib/olympiad-calendar';

export default function VideoPublishForm() {
  const input = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm dark:border-purple-900 dark:bg-[#03000a]';
  return <div className="max-w-xl space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-6 dark:border-purple-500/20 dark:bg-[#140e24]/40">
    <h3 className="text-lg font-black text-slate-800 dark:text-white">Добавить видеоурок</h3>
    <form action="/api/videos/create" method="POST" className="space-y-4">
      <label className="block text-sm font-bold">Название<input className={input} name="title" required /></label>
      <label className="block text-sm font-bold">Ссылка для встраивания VK Видео или Kinescope<input className={input} name="url" required /></label>
      <label className="block text-sm font-bold">Направление и раздел
        <select className={input} name="destination" required defaultValue="">
          <option value="" disabled>Выберите раздел</option>
          <optgroup label="Математика ЕГЭ">{EGE_SECTIONS.map((s) => <option key={s.number} value={`ege-math|${s.number}`}>№{s.number} {s.title}</option>)}</optgroup>
          <optgroup label="Физика ЕГЭ">{PHYSICS_SECTIONS.map((s) => <option key={s.number} value={`physics|${s.number}`}>№{s.number} {s.title}</option>)}</optgroup>
          <optgroup label="Олимпиадная математика: темы">{OLYMPIAD_TOPICS.map((s) => <option key={s.id} value={`olympiad-math|topic:${s.id}`}>{s.title}</option>)}</optgroup>
          <optgroup label="Олимпиады">{olympiads.map((s) => <option key={s.id} value={`olympiad-math|competition:${s.id}`}>{s.name}</option>)}</optgroup>
        </select>
      </label>
      <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" name="isPremium" defaultChecked /> Только для платного курса</label>
      <button className="w-full rounded-xl bg-sky-600 px-4 py-3 font-bold text-white hover:bg-sky-700">Опубликовать видеоматериал</button>
    </form>
  </div>;
}
