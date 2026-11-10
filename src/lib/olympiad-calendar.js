// Обновляйте расписание вручную после сверки с организаторами.
// Уровни указаны для профилей математики и криптографии в сезоне 2026/27.
export const checkedOn = '10 ноября 2026 года';
export const registryUrl = 'https://rsr-olymp.ru/';

export const olympiads = [
  { id: 'hse', name: 'Высшая проба', level: 'I', url: 'https://olymp.hse.ru/mmo/' },
  { id: 'moscow', name: 'Московская олимпиада школьников', level: 'I', url: 'https://mos.olimpiada.ru/' },
  { id: 'lomonosov', name: 'Ломоносов', level: 'I', registerUrl: 'https://olymp.msu.ru/rus/event/request/11014/form?role_section_switcher%5Bsection%5D=43461', url: 'https://pk.math.msu.ru/olimpiady/lomonosov-matematika/' },
  { id: 'pvg', name: 'Покори Воробьёвы горы!', level: 'I', url: 'https://pvg.mk.ru/' },
  { id: 'fizteh', name: 'Физтех', level: 'I', url: 'https://olymp-online.mipt.ru/' },
  { id: 'spbu', name: 'Олимпиада школьников Санкт-Петербургского государственного университета', level: 'I', url: 'https://olymp.spbu.ru/' },
  { id: 'spb', name: 'Санкт-Петербургская олимпиада школьников', level: 'I', url: 'https://www.pdmi.ras.ru/~olymp/' },
  { id: 'turgor', name: 'Турнир городов', level: 'I', url: 'https://turgor.ru/' },
  { id: 'siberia', name: 'Всесибирская открытая олимпиада школьников', level: 'II', url: 'https://sesc.nsu.ru/olymp-vsesib/' },
  { id: 'innopolis', name: 'Международная олимпиада Иннополиса', level: 'II', registerUrl: 'https://start.innopolis.university/olimpiady/innopolis-open-po-matematike/', url: 'https://dovuz.innopolis.university/innopolis-open/math' },
  { id: 'omo', name: 'Объединённая межвузовская олимпиада школьников', level: 'II', url: 'https://olympiads.mccme.ru/ommo/' },
  { id: 'kurchatov', name: 'Олимпиада «Курчатов»', level: 'II', url: 'https://olimpiadakurchatov.ru/' },
  { id: 'umsh', name: 'Олимпиада Юношеской математической школы', level: 'II', url: 'https://yumsh.ru/cms/yumsh-olymp/2026-27' },
  { id: 'rosatom', name: 'Росатом', level: 'II', registerUrl: 'https://org.mephi.ru/', url: 'https://olymp.mephi.ru/rosatom/about' },
  { id: 'verchenko', name: 'Олимпиада имени И. Я. Верченко по математике и криптографии', level: 'II', url: 'https://v-olymp.ru/olymp/cryptography' },
  { id: 'turlom', name: 'Турнир имени М. В. Ломоносова', level: 'II', url: 'https://xn--k1acfgjg.xn--l1afu.xn--p1ai/' },
  { id: 'izumrud', name: 'Изумруд', level: 'III', registerUrl: 'https://dovuz.urfu.ru/olymps/izumrud/registration', url: 'https://dovuz.urfu.ru/olymps/izumrud/index' },
  { id: 'bibn', name: 'Будущие исследователи — будущее науки', level: 'III', url: 'https://bibn.unn.ru/' },
  { id: 'shag', name: 'Шаг в будущее', level: 'III', registerUrl: 'https://lk-olymp.bmstu.ru/', url: 'https://olymp.bmstu.ru/' },
  { id: 'open', name: 'Открытая олимпиада школьников', level: 'III', url: 'https://olymp.itmo.ru/' },
  { id: 'belchonok', name: 'Бельчонок', level: 'III', registerUrl: 'https://dovuz.sfu.ru/reg/', url: 'https://dovuz.sfu.ru/press-center/news/novosti-belchonok/startoval-otborochnyy-etap-universitetskoy-olimpiady-shkolnikov-belchonok-2026-2027/' },
];

// Период означает окно проведения, а не несколько самостоятельных экзаменов.
export const events = [
  { id: 'lomonosov-registration', kinds: ['registration'], olympiad: 'lomonosov', start: '2026-10-24', end: '2026-11-20', dateText: '24 октября — 20 ноября 2026', stage: 'Регистрация', source: 'https://pk.math.msu.ru/olimpiady/lomonosov-matematika/' },
  { id: 'shag-registration', kinds: ['registration'], olympiad: 'shag', start: '2026-09-30', end: '2026-11-08', dateText: '30 сентября — 8 ноября 2026', stage: 'Регистрация', source: 'https://olymp.bmstu.ru/ru/news/2026/09/30/registraciya-na-olimpiadu-shag-v-buduschee-po-profilyu-matematika-otkryta' },
  { id: 'hse-registration', kinds: ['registration'], olympiad: 'hse', start: '2026-08-20', end: '2026-09-22', dateText: '20 августа — 22 сентября 2026', stage: 'Регистрация', source: 'https://olymp.hse.ru/mmo/' },
  { id: 'verchenko-qual', kinds: ['qualifying'], olympiad: 'verchenko', start: '2026-11-01', end: '2026-11-23', dateText: '1–23 ноября 2026', stage: 'Отборочный этап', format: 'Дистанционно', detail: 'Задания доступны на сайте олимпиады; условия участия уточняйте у организатора.', source: 'https://v-olymp.ru/olymp/cryptography' },
  { id: 'verchenko-final', kinds: ['final'], olympiad: 'verchenko', start: '2026-11-29', end: '2026-11-29', dateText: '29 ноября 2026', stage: 'Заключительный этап', format: 'Очно', detail: 'Площадки проведения и условия допуска уточняйте у организатора.', source: 'https://v-olymp.ru/olymp/cryptography' },
  { id: 'izumrud-qual', kinds: ['registration', 'qualifying'], olympiad: 'izumrud', start: '2026-09-01', end: '2027-01-19', dateText: '1 сентября 2026 — 19 января 2027', stage: 'Регистрация и отборочный этап', format: 'Формат уточняйте у организатора · 8–11 классы', detail: 'Подайте заявку и выполните задания отборочного этапа.', source: 'https://dovuz.urfu.ru/olymps/izumrud/index' },
  { id: 'belchonok-qual', kinds: ['registration', 'qualifying'], olympiad: 'belchonok', start: '2026-10-01', end: '2027-01-12', dateText: '1 октября 2026 — 12 января 2027', stage: 'Регистрация и отборочный этап', format: 'Дистанционно · 2–11 классы', detail: 'Завершение 12 января в 17:00 по красноярскому времени; условия льгот уточняйте у организатора и в вузе.', source: 'https://dovuz.sfu.ru/press-center/news/novosti-belchonok/startoval-otborochnyy-etap-universitetskoy-olimpiady-shkolnikov-belchonok-2026-2027/' },
  { id: 'innopolis-qual2', kinds: ['qualifying'], olympiad: 'innopolis', start: '2026-11-28', end: '2026-11-29', dateText: '28 ноября — пробный тур, 29 ноября — отборочный (предварительно)', stage: 'Второй отборочный тур · предварительно', format: 'Дистанционно · 7–11 классы', detail: '28 ноября — пробный тур, 29 ноября — отборочный. Расписание предварительное.', source: 'https://dovuz.innopolis.university/innopolis-open/math' },
  { id: 'umsh-final', kinds: ['final'], tentative: true, olympiad: 'umsh', start: '2026-12-13', end: '2026-12-13', dateText: '13 декабря 2026 · предварительно', stage: 'Заключительный тур', format: 'Очно · 7–11 классы', detail: 'Ориентировочная дата, состав площадок уточняйте на сайте.', source: 'https://yumsh.ru/cms/yumsh-olymp/2026-27' },

  { id: 'lomonosov-qual', kinds: ['qualifying'], olympiad: 'lomonosov', start: '2026-11-13', end: '2026-11-20', dateText: '13–20 ноября 2026', stage: 'Отборочный этап', format: 'Дистанционно · 5–11 классы', detail: 'Начало и окончание в 12:00 по Москве; время решения зависит от класса.', source: 'https://pk.math.msu.ru/olimpiady/lomonosov-matematika/' },
  { id: 'rosatom-online', kinds: ['qualifying'], olympiad: 'rosatom', start: '2026-11-17', end: '2026-12-21', dateText: '17 ноября — 21 декабря 2026 (дистанционно)', stage: 'Дистанционный отборочный тур', format: 'Дистанционно · 7–11 классы', detail: 'Доступен в личном кабинете организатора по московскому времени.', source: 'https://olymp.mephi.ru/rosatom/stages/qualification' },
  { id: 'shag-qual', kinds: ['qualifying'], olympiad: 'shag', start: '2026-11-16', end: '2026-11-22', dateText: '16–22 ноября 2026', stage: 'Отборочный этап', format: 'Очно · дату площадки уточняйте у организатора', detail: 'По математике одна волна, продолжительность — 3 часа 55 минут. Регистрация и выбор площадки были до 8 ноября включительно.', source: 'https://olymp.bmstu.ru/ru/FAQ' },
  { id: 'hse-7-8-11', kinds: ['qualifying'], olympiad: 'hse', start: '2026-11-20', end: '2026-11-20', dateText: '20 ноября 2026 (7, 8 и 11 классы)', stage: 'Второй тур отборочного этапа', format: 'Дистанционно · 7, 8 и 11 классы', detail: 'Начало по Москве: 7 класс — 11:30, 8 класс — 12:00, 11 класс — 9:00.', source: 'https://olymp.hse.ru/mmo/timetable1' },
  { id: 'hse-9-10', kinds: ['qualifying'], olympiad: 'hse', start: '2026-11-21', end: '2026-11-21', dateText: '21 ноября 2026 (9 и 10 классы)', stage: 'Второй тур отборочного этапа', format: 'Дистанционно · 9 и 10 классы', detail: 'Начало по Москве: 9 класс — 12:30, 10 класс — 12:00.', source: 'https://olymp.hse.ru/mmo/timetable1' },
  { id: 'rosatom-onsite', kinds: ['qualifying'], olympiad: 'rosatom', start: '2026-11-28', end: '2026-11-29', dateText: '28–29 ноября 2026 (очно)', stage: 'Очный отборочный тур', format: 'Очно · Москва и регионы', detail: 'Дата и время зависят от площадки; в Москве математика — 29 ноября.', source: 'https://olymp.mephi.ru/rosatom/stages/qualification' },
  { id: 'pvg-registration', kinds: ['registration'], olympiad: 'pvg', start: '2026-12-01', end: null, dateText: 'с 1 декабря 2026', stage: 'Открытие регистрации', format: 'Дистанционно · 5–11 классы', detail: 'Начало отборочного этапа организатор предварительно назначил на 8 декабря.', source: 'https://pvg.mk.ru/' },
  { id: 'rosatom-final', kinds: ['final'], olympiad: 'rosatom', start: '2027-02-06', end: '2027-02-07', dateText: '6–7 февраля 2027 (общий период по предметам)', stage: 'Заключительные туры', format: 'Очный этап · дата по предмету уточняется', detail: 'Общий период финалов по математике и физике.', source: 'https://olymp.mephi.ru/rosatom/about' },
];

// Олимпиада считается завершённой только после подтверждённого финала.
export function orderOlympiadsByDates(items, scheduledEvents, today) {
  return items.map((item) => {
    const dates = scheduledEvents.filter((event) => event.olympiad === item.id);
    const finals = dates.filter((event) => event.kinds.includes('final'));
    const relevant = dates.filter((event) => event.end ? event.end >= today : event.start >= today);
    const completed = finals.length > 0
      && finals.every((event) => !event.tentative && event.end && event.end < today)
      && relevant.length === 0;
    // A started registration with an unknown closing date cannot be treated as ended.
    const nextDate = relevant.map((event) => event.start <= today ? (event.end || event.start) : event.start).sort()[0];
    const priority = completed ? 2 : nextDate ? 0 : 1;
    return { ...item, dates, completed, nextDate, priority };
  }).sort((a, b) => a.priority - b.priority
    || (a.nextDate || '').localeCompare(b.nextDate || '')
    || a.name.localeCompare(b.name, 'ru'));
}
