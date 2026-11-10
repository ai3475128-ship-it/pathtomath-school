import { HubTiles, SectionFrame } from '../components/SectionHub';

export const metadata = { title: 'Олимпиады по математике | АЗИМУТ', description: 'Олимпиадный календарь и задачи для подготовки по темам и олимпиадам.' };

export default function OlympiadsHubPage() {
  return <SectionFrame title="Олимпиады" description="Выберите календарь или формат подготовки к олимпиадам по математике.">
    <HubTiles items={[
      { href: '/olympiad-calendar', title: 'Олимпиадный календарь', description: 'Даты регистрации и этапов олимпиад.' },
      { href: '/math-profile/olympiads/intro', title: 'Подготовительные задачи', description: 'Подготовка к олимпиадам по темам.' },
      { href: '/math-profile/olympiads/main', title: 'Задачи с олимпиад', description: 'Олимпиадные задачи по темам.' },
      { href: '/olympiads/tasks', title: 'Задачи по олимпиадам', description: 'Задания, сгруппированные по названиям олимпиад.' },
    ]} />
  </SectionFrame>;
}
