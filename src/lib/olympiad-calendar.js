// Обновляйте расписание вручную после сверки с организаторами.
// Уровни указаны для профилей математики и криптографии в сезоне 2026/27.
export const checkedOn = '2026-11-17';
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
  { id: 'lomonosov-registration', kinds: ['registration'], olympiad: 'lomonosov', start: '2026-10-24', end: '2026-11-27', dateText: '24 октября — 27 ноября 2026, до 12:00 МСК', stage: 'Регистрация', source: 'https://olymp.msu.ru/index.php/rus/event/11014/' },
  { id: 'shag-registration', kinds: ['registration'], olympiad: 'shag', start: '2026-09-30', end: '2026-11-08', dateText: '30 сентября — 8 ноября 2026', stage: 'Регистрация', source: 'https://olymp.bmstu.ru/ru/news/2026/09/30/registraciya-na-olimpiadu-shag-v-buduschee-po-profilyu-matematika-otkryta' },
  { id: 'hse-registration', kinds: ['registration'], olympiad: 'hse', start: '2026-08-20', end: '2026-09-22', dateText: '20 августа — 22 сентября 2026', stage: 'Регистрация', source: 'https://olymp.hse.ru/mmo/' },
  { id: 'verchenko-qual', kinds: ['qualifying'], tentative: true, olympiad: 'verchenko', start: '2026-11-01', end: '2026-11-23', dateText: '1–23 ноября 2026 · дата окончания уточняется', stage: 'Отборочный этап', format: 'Дистанционно', detail: 'В новости организатора указано 23 ноября, а в общем расписании — 24 ноября. Сверьте срок в личном кабинете.', source: 'https://v-olymp.ru/olymp/cryptography', secondarySource: 'https://v-olymp.ru/schedule' },
  { id: 'verchenko-final', kinds: ['final'], olympiad: 'verchenko', start: '2026-11-29', end: '2026-11-29', dateText: '29 ноября 2026', stage: 'Заключительный этап', format: 'Очно', detail: 'Площадки проведения и условия допуска уточняйте у организатора.', source: 'https://v-olymp.ru/olymp/cryptography' },
  { id: 'izumrud-qual', kinds: ['registration', 'qualifying'], olympiad: 'izumrud', start: '2026-09-01', end: '2027-01-19', dateText: '1 сентября 2026 — 19 января 2027', stage: 'Регистрация и отборочный этап', format: 'Дистанционно · 8–11 классы', detail: 'Подайте заявку и выполните задания отборочного этапа.', source: 'https://dovuz.urfu.ru/olymps/izumrud/index' },
  { id: 'belchonok-qual', kinds: ['registration', 'qualifying'], olympiad: 'belchonok', start: '2026-10-01', end: '2027-01-12', dateText: '1 октября 2026 — 12 января 2027', stage: 'Регистрация и отборочный этап', format: 'Дистанционно · 2–11 классы', detail: 'Завершение 12 января в 17:00 по красноярскому времени; условия льгот уточняйте у организатора и в вузе.', source: 'https://dovuz.sfu.ru/press-center/news/novosti-belchonok/startoval-otborochnyy-etap-universitetskoy-olimpiady-shkolnikov-belchonok-2026-2027/' },
  { id: 'innopolis-qual2', kinds: ['qualifying'], tentative: true, olympiad: 'innopolis', start: '2026-11-28', end: '2026-11-29', dateText: '28 ноября — пробный тур, 29 ноября — отборочный (предварительно)', stage: 'II тур: пробный и отборочный', format: 'Дистанционно · 7–11 классы', detail: '28 ноября — пробный тур, 29 ноября — отборочный. Расписание предварительное.', source: 'https://dovuz.innopolis.university/innopolis-open/math' },
  { id: 'umsh-final', kinds: ['final'], tentative: true, olympiad: 'umsh', start: '2026-12-13', end: '2026-12-13', dateText: '13 декабря 2026 · предварительно', stage: 'Заключительный тур', format: 'Очно · 7–11 классы', detail: 'Ориентировочная дата, состав площадок уточняйте на сайте.', source: 'https://yumsh.ru/cms/yumsh-olymp/2026-27' },

  { id: 'lomonosov-qual', kinds: ['qualifying'], olympiad: 'lomonosov', start: '2026-11-20', end: '2026-11-27', dateText: '20–27 ноября 2026', stage: 'Отборочный этап', format: 'Дистанционно · математика', detail: 'Сроки отбора перенесены организатором. Регистрация до 27 ноября, 12:00 МСК.', source: 'https://olymp.msu.ru/index.php/rus/event/11014/' },
  { id: 'rosatom-online', kinds: ['qualifying'], olympiad: 'rosatom', start: '2026-11-17', end: '2026-12-21', dateText: '17 ноября — 21 декабря 2026 (дистанционно)', stage: 'Дистанционный отборочный тур', format: 'Дистанционно · 7–11 классы', detail: 'Доступен в личном кабинете организатора по московскому времени.', source: 'https://olymp.mephi.ru/rosatom/stages/qualification' },
  { id: 'shag-qual', kinds: ['qualifying'], olympiad: 'shag', start: '2026-11-16', end: '2026-11-22', dateText: '16–22 ноября 2026', stage: 'Отборочный этап', format: 'Очно · дату площадки уточняйте у организатора', detail: 'По математике одна волна, продолжительность — 3 часа 55 минут. Регистрация и выбор площадки были до 8 ноября включительно.', source: 'https://olymp.bmstu.ru/ru/FAQ' },
  { id: 'hse-7-8-11', kinds: ['qualifying'], tentative: true, olympiad: 'hse', start: '2026-11-20', end: '2026-11-20', dateText: '20 ноября 2026 (7, 8 и 11 классы)', stage: 'Второй тур отборочного этапа', format: 'Дистанционно · 7, 8 и 11 классы', detail: 'Начало по Москве: 7 класс — 11:30, 8 класс — 12:00, 11 класс — 9:00.', source: 'https://olymp.hse.ru/mmo/timetable1' },
  { id: 'hse-9-10', kinds: ['qualifying'], tentative: true, olympiad: 'hse', start: '2026-11-21', end: '2026-11-21', dateText: '21 ноября 2026 (9 и 10 классы)', stage: 'Второй тур отборочного этапа', format: 'Дистанционно · 9 и 10 классы', detail: 'Начало по Москве: 9 класс — 12:30, 10 класс — 12:00.', source: 'https://olymp.hse.ru/mmo/timetable1' },
  { id: 'rosatom-onsite', kinds: ['qualifying'], olympiad: 'rosatom', start: '2026-11-28', end: '2026-11-29', dateText: '28–29 ноября 2026 (очно)', stage: 'Очный отборочный тур', format: 'Очно · Москва и регионы', detail: 'Дата и время зависят от площадки; в Москве математика — 29 ноября.', source: 'https://olymp.mephi.ru/rosatom/stages/qualification' },
  { id: 'pvg-registration', kinds: ['registration'], olympiad: 'pvg', start: '2026-12-01', end: null, dateText: 'с 1 декабря 2026', stage: 'Открытие регистрации', format: 'Дистанционно · 5–11 классы', detail: 'Начало отборочного этапа организатор предварительно назначил на 8 декабря.', source: 'https://pvg.mk.ru/' },
  { id: 'rosatom-final', kinds: ['final'], olympiad: 'rosatom', start: '2027-02-06', end: '2027-02-07', dateText: '6–7 февраля 2027 (общий период по предметам)', stage: 'Заключительные туры', format: 'Очный этап · дата по предмету уточняется', detail: 'Общий период финалов по математике и физике.', source: 'https://olymp.mephi.ru/rosatom/about' },
];


// Дополнительные соревнования представлены только в календаре и не меняют каталог задач.
export const calendarOlympiads = [
  ...olympiads.map((item) => item.id === 'spbu' ? { ...item, url: 'https://sch-olymp.spbu.ru/' } : item),
  { id: 'formula', name: 'Формула Единства / Третье тысячелетие', level: 'II', url: 'https://www.formulo.org/ru/olymp/2026-math-ru/' },
  { id: 'vsosh', name: 'Всероссийская олимпиада школьников', level: null, url: 'https://vserosolimp.edsoo.ru/' },
];

// Даты приведены по профилю математики; общие периоды и проекты помечены отдельно.
events.push(
  { id:'hse-first-math', kinds:['qualifying'], olympiad:'hse', start:'2026-09-27', end:'2026-09-27', dateText:'27 сентября 2026', stage:'Первый отборочный тур', format:'Дистанционно · 7–11 классы', detail:'Время начала зависит от класса.', source:'https://olymp.hse.ru/mmo/timetable' },
  { id:'hse-final-period', kinds:['final'], olympiad:'hse', start:'2027-02-05', end:'2027-02-15', dateText:'5–15 февраля 2027 · общий период по профилям', stage:'Заключительный этап · общий период', format:'Дата математики уточняется', detail:'Точный день по математике смотрите в расписании организатора.', source:'https://olymp.hse.ru/mmo/' },
  { id:'umsh-first', kinds:['qualifying'], olympiad:'umsh', start:'2026-09-13', end:'2026-09-13', dateText:'13 сентября 2026, 10:00 МСК', stage:'Первый отборочный тур', format:'Дистанционно · 4–11 классы', detail:'На решение и загрузку работы отводится 5 часов.', source:'https://yumsh.ru/cms/node/370' },
  { id:'umsh-second', kinds:['qualifying'], olympiad:'umsh', start:'2026-10-17', end:'2026-10-17', dateText:'17 октября 2026, 16:00 МСК', stage:'Второй отборочный тур', format:'Дистанционно · 4–11 классы', detail:'Регистрация заканчивается за сутки до начала.', source:'https://yumsh.ru/cms/node/370' },
  { id:'fizteh-registration-one', kinds:['registration'], olympiad:'fizteh', start:'2026-09-07', end:'2026-10-10', dateText:'7 сентября — 10 октября 2026', stage:'Регистрация · I тур', format:'Математика · 9–11 классы', detail:'Завершение регистрации за сутки до тура; время уточняйте у организатора.', source:'https://olymp-online.mipt.ru/event/449' },
  { id:'fizteh-one', kinds:['qualifying'], olympiad:'fizteh', start:'2026-10-11', end:'2026-10-11', dateText:'11 октября 2026', stage:'I онлайн-тур', format:'Дистанционно · 9–11 классы', detail:'На решение отводится 4 часа.', source:'https://olymp-online.mipt.ru/event/449' },
  { id:'fizteh-registration-two', kinds:['registration'], olympiad:'fizteh', start:'2026-10-31', end:'2026-10-31', dateText:'до 31 октября 2026', stage:'Окончание регистрации · II тур', format:'Математика · 9–11 классы', detail:'Проверьте время окончания регистрации у организатора.', source:'https://olymp-online.mipt.ru/event/449' },
  { id:'fizteh-two', kinds:['qualifying'], olympiad:'fizteh', start:'2026-11-01', end:'2026-11-01', dateText:'1 ноября 2026', stage:'II онлайн-тур', format:'Дистанционно · 9–11 классы', detail:'На решение отводится 4 часа.', source:'https://olymp-online.mipt.ru/event/449' },
  { id:'fizteh-registration-three', kinds:['registration'], olympiad:'fizteh', start:'2026-11-06', end:'2026-11-06', dateText:'до 6 ноября 2026', stage:'Окончание регистрации · III тур', format:'Математика · 11 класс', detail:'Проверьте время окончания регистрации у организатора.', source:'https://olymp-online.mipt.ru/event/449' },
  { id:'fizteh-three', kinds:['qualifying'], olympiad:'fizteh', start:'2026-11-07', end:'2026-11-07', dateText:'7 ноября 2026', stage:'III онлайн-тур', format:'Дистанционно · 11 класс', detail:'На решение отводится 4 часа.', source:'https://olymp-online.mipt.ru/event/449' },
  { id:'siberia-registration', kinds:['registration'], olympiad:'siberia', start:'2026-09-28', end:'2026-10-16', dateText:'28 сентября — 16 октября 2026', stage:'Регистрация на отбор', format:'Математика · 7–11 классы', detail:'Регистрация на площадку по правилам организатора.', source:'https://sesc.nsu.ru/olymp-vsesib/' },
  { id:'siberia-math', kinds:['qualifying'], olympiad:'siberia', start:'2026-10-18', end:'2026-10-18', dateText:'18 октября 2026', stage:'Отборочный этап', format:'Очно · 7–11 классы', detail:'Время и место зависят от площадки.', source:'https://np.fmschool72.ru/olimpiadi/drugie-olimpiadi/vsesibirskaya-otkritaya-olimpiada-shkolnikov-osnovnoi-otborochnii-etap-napravlenie-matematika-dlya-711-klassov2026' },
  { id:'turgor-basic', kinds:['qualifying'], olympiad:'turgor', start:'2026-10-04', end:'2026-10-04', dateText:'4 октября 2026', stage:'Базовый осенний тур', format:'Формат и площадку уточняйте у организатора', source:'https://olimpiada.ru/activity/5' },
  { id:'turgor-advanced', kinds:['qualifying'], olympiad:'turgor', start:'2026-10-18', end:'2026-10-18', dateText:'18 октября 2026', stage:'Сложный осенний тур', format:'Формат и площадку уточняйте у организатора', source:'https://olimpiada.ru/activity/5' },
  { id:'turlom-math', kinds:['qualifying'], olympiad:'turlom', start:'2026-10-04', end:'2026-10-04', dateText:'4 октября 2026', stage:'Турнир', format:'Площадку уточняйте у организатора', source:'https://mathus.ru/calendar.php' },
  { id:'innopolis-qual1', kinds:['qualifying'], tentative:true, olympiad:'innopolis', start:'2026-10-24', end:'2026-10-25', dateText:'24 октября — пробный, 25 октября — отборочный тур · предварительно', stage:'I тур: пробный и отборочный', format:'Дистанционно · 7–11 классы', detail:'24 октября пробный тур, 25 октября отборочный. Даты указаны в предварительном расписании.', source:'https://dovuz.innopolis.university/innopolis-open/math' },
  { id:'innopolis-registration2', kinds:['registration'], olympiad:'innopolis', start:'2026-10-26', end:'2026-11-23', dateText:'26 октября — 23 ноября 2026, до 15:00 МСК', stage:'Регистрация · II тур', format:'Дистанционно', detail:'Отдельная регистрация на второй тур.', source:'https://dovuz.innopolis.university/innopolis-open/math' },
  { id:'innopolis-final', kinds:['final'], tentative:true, olympiad:'innopolis', start:'2027-03-05', end:'2027-03-07', dateText:'5–7 марта 2027 · предварительно', stage:'Заключительный этап', format:'Очно · площадки уточняются', source:'https://dovuz.innopolis.university/innopolis-open/math' },
  { id:'pvg-qual-start', kinds:['qualifying'], tentative:true, olympiad:'pvg', start:'2026-12-08', end:null, dateText:'с 8 декабря 2026 · ориентировочно', stage:'Начало отборочного этапа', format:'Дистанционно', detail:'Начало предварительное; дату окончания организатор пока не указал.', source:'https://pvg.mk.ru/' },
  { id:'spb-district', kinds:['qualifying'], olympiad:'spb', start:'2026-11-14', end:'2026-11-14', dateText:'14 ноября 2026', stage:'Районный тур', format:'Санкт-Петербург · площадку уточняйте у организатора', source:'https://www.pdmi.ras.ru/~olymp/current.html' },
  { id:'omo-online', kinds:['registration','qualifying'], olympiad:'omo', start:'2027-01-11', end:'2027-01-25', dateText:'11–25 января 2027', stage:'Регистрация и первый тур', format:'Дистанционно · 11 класс', detail:'Первый тур проходит на платформе «Сириус.Онлайн»; для выхода в финал нужно верно решить три задачи.', source:'https://olympiads.mccme.ru/ommo/27/' },
  { id:'spbu-math-qual', kinds:['qualifying'], olympiad:'spbu', start:'2026-10-20', end:'2026-12-01', dateText:'20 октября — 1 декабря 2026', stage:'Отборочный этап', format:'Дистанционно', detail:'Приступить можно в любое время в течение окна; на выполнение отводится ограниченное время.', source:'https://sch-olymp.spbu.ru/' },
  { id:'formula-math', kinds:['qualifying'], olympiad:'formula', start:'2026-10-15', end:'2026-11-18', endInstant:'2026-11-18T02:59:59+03:00', activeUntil:'18 ноября, 02:59 МСК', dateText:'15 октября — 18 ноября 2026, 02:59 МСК', stage:'Отборочный этап', format:'Дистанционно · 5–11 классы', detail:'Срок продлён: загрузка до 23:59:59 UTC 17 ноября (02:59:59 МСК 18 ноября).', source:'https://www.formulo.org/ru/olymp/2026-math-ru/' },
  { id:'vsosh-regional', kinds:['qualifying'], olympiad:'vsosh', start:'2027-02-02', end:'2027-02-03', dateText:'2–3 февраля 2027', stage:'Региональный этап', format:'9–11 классы · площадку уточняйте в регионе', detail:'Условия допуска определяются результатами предыдущих этапов и правилами организатора.', source:'https://olimpiada.ru/activity/72./events/23578' },
);

export const olympiadDetails = {
  omo: { grades:'11 класс', selection:'Регистрация и первый тур проходят заочно через «Сириус.Онлайн»; для выхода в финал необходимо верно решить три задачи.', final:'Финальный тур очный. На странице организатора указаны разные сроки, поэтому точную дату и площадку следует уточнить.', source:'https://olympiads.mccme.ru/ommo/27/' },
  spb: { selection:'Районный тур проводится в Санкт-Петербурге; подробности и доступность для участников своего района уточняйте у организатора.', final:'Правила и даты городского этапа публикуются организатором.', source:'https://www.pdmi.ras.ru/~olymp/current.html' },
  shag: { selection:'В сезоне 2026/27 отбор по математике проходит очно в одну волну на официальных площадках; конкретный день и час выбирает площадка.', final:'Условия допуска и точное расписание финала проверьте на странице олимпиады.', source:'https://olymp.bmstu.ru/ru/mathematics-olymp' },
  pvg: { selection:'Заочный отбор проходит с применением дистанционных технологий; для участия нужна регистрация на портале олимпиады.', final:'Финал по математике проходит очно в МГУ и на региональных площадках; условия допуска уточняйте у организатора.', source:'https://pk.cs.msu.ru/pvg' },
  verchenko: { selection:'Отбор по математике и криптографии дистанционный. Окончание необходимо перепроверить: новость и общий график организатора называют разные даты.', final:'Заключительный этап: 29 ноября 2026; формат и площадки уточняйте у организатора.', source:'https://v-olymp.ru/schedule' },
  hse: { grades:'7–11 классы', selection:'Отбор проходит дистанционно в два тура. Расписание и время старта зависят от класса; второй тур проводится с прокторингом.', final:'Заключительный этап проводится очно. Общий период по профилям — 5–15 февраля 2027 года; день математики уточняйте в расписании.', source:'https://olymp.hse.ru/mmo/' },
  lomonosov: { selection:'По математике отбор проводится дистанционно. Организатор перенёс его на 20–27 ноября; регистрация продлена до 12:00 МСК 27 ноября.', final:'К заключительному этапу приглашают участников по итогам отбора. Формат, места и даты проверяйте у организатора.', source:'https://olymp.msu.ru/index.php/rus/event/11014/' },
  fizteh: { grades:'9–11 классы', selection:'Онлайн-отбор по математике проходит в несколько туров; третий тур предназначен для 11 класса. Для допуска достаточно стать победителем или призёром одного из предложенных онлайн-туров.', final:'Заключительный этап проводится очно; уточните регистрацию, дату и площадку на сайте МФТИ.', source:'https://olymp-online.mipt.ru/event/449' },
  siberia: { grades:'7–11 классы', selection:'Основной отбор по математике проходит очно на площадках; время зависит от города.', final:'Участников приглашают по итогам отбора. Регистрацию и площадку заключительного этапа проверяйте у организатора.', source:'https://sesc.nsu.ru/olymp-vsesib/' },
  umsh: { grades:'4–11 классы на отборе', selection:'Два дистанционных тура с полными решениями. Для приглашения на финал достаточно успешного результата в одном туре; есть дополнительные основания для приглашения.', final:'Заключительный тур очный. Дату, классы и площадки уточняйте у организатора.', source:'https://yumsh.ru/cms/node/370' },
  innopolis: { grades:'7–11(12) классы и 1–2 курс СПО', selection:'Два независимых онлайн-тура на платформе All Cups. Перед каждым проходит пробный тур; для выхода в финал достаточно стать призёром одного из отборов.', final:'Финал очный на нескольких площадках; 5–7 марта 2027 указаны в предварительном расписании.', source:'https://dovuz.innopolis.university/innopolis-open/math' },
  rosatom: { grades:'7–11 классы', selection:'Есть дистанционные, очные и очно-заочные отборочные туры. При допуске в финал организатор учитывает лучший результат.', final:'Заключительные туры проходят очно; 6–7 февраля 2027 — общий период по математике и физике.', source:'https://olymp.mephi.ru/rosatom/seasons/2026-2027' },
  spbu: { selection:'Дистанционный отбор: приступить к заданиям можно в опубликованное окно; после начала время на выполнение ограничено.', final:'Порядок допуска, регистрацию и площадки заключительного этапа проверяйте на сайте СПбГУ.', source:'https://sch-olymp.spbu.ru/' },
  belchonok: { grades:'2–11 классы', selection:'Дистанционная регистрация и выполнение заданий в личном кабинете до 12 января 2027 года, 17:00 по красноярскому времени.', final:'Условия допуска, площадки и дату финала уточняйте у СФУ.', source:'https://dovuz.sfu.ru/press-center/news/novosti-belchonok/startoval-otborochnyy-etap-universitetskoy-olimpiady-shkolnikov-belchonok-2026-2027/' },
  izumrud: { grades:'8–11 классы', selection:'Регистрация и отборочный этап по математике проходят дистанционно в опубликованное окно.', final:'Правила допуска и расписание заключительного этапа смотрите на странице УрФУ.', source:'https://dovuz.urfu.ru/olymps/izumrud/index' },
  formula: { grades:'5–11 классы', selection:'Отбор дистанционный: решения задач загружаются через личный кабинет в срок, установленный для математики.', final:'Заключительный этап проходит очно на региональных площадках; допуск — по итогам отбора.', source:'https://www.formulo.org/ru/olymp/2026-math-ru/' },
  turgor: { selection:'Турнир проводит базовый и сложный туры. Условия участия и регистрацию уточняйте на площадке своего города.', final:'Правила следующих этапов и подведения итогов опубликованы организаторами турнира.', source:'https://olimpiada.ru/activity/5' },
  vsosh: { selection:'Школьный и муниципальный этапы проводятся по региональным графикам. На региональный этап приглашают по результатам предыдущих этапов согласно правилам.', final:'Заключительный этап проходит весной; даты и условия допуска публикуют организаторы.', source:'https://vserosolimp.edsoo.ru/' },
};

// ISO-формат сравнивается как строка, чтобы даты не сдвигались из-за часового пояса.
export function calendarMonth(value, today) {
  return typeof value === 'string' && /^20\d{2}-(0[1-9]|1[0-2])$/.test(value) ? value : today.slice(0, 7);
}
export function shiftCalendarMonth(month, delta) {
  const [y, m] = month.split('-').map(Number);
  const d = new Date(Date.UTC(y, m - 1 + delta, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
}
// Дни раскладываются с понедельника, без зависимости от часового пояса сервера.
export function monthGrid(month) {
  const [year, number] = month.split('-').map(Number);
  const leading = (new Date(Date.UTC(year, number - 1, 1)).getUTCDay() + 6) % 7;
  const length = new Date(Date.UTC(year, number, 0)).getUTCDate();
  const total = Math.ceil((leading + length) / 7) * 7;
  return Array.from({ length: total }, (_, index) => {
    const day = index - leading + 1;
    return day >= 1 && day <= length ? `${month}-${String(day).padStart(2, '0')}` : null;
  });
}
export function eventsForMonth(allEvents, month) {
  const points = [];
  const monthStart = `${month}-01`;
  for (const event of allEvents) {
    if (event.end && event.start < monthStart && event.end >= monthStart) points.push({ ...event, date:monthStart, boundary:'continues' });
    if (event.start.startsWith(month)) points.push({ ...event, date:event.start, boundary: event.end && event.end !== event.start ? 'start' : 'single' });
    if (event.end && event.end !== event.start && event.end.startsWith(month)) points.push({ ...event, date:event.end, boundary:'end' });
  }
  return points.sort((a,b)=>a.date.localeCompare(b.date) || a.stage.localeCompare(b.stage,'ru') || a.id.localeCompare(b.id));
}
export function activeEvents(allEvents, today, now = new Date()) {
  const active = allEvents.filter((e)=>e.end && (e.start !== e.end || e.endInstant) && e.start <= today && e.end >= today && (!e.endInstant || Date.parse(e.endInstant) >= now.getTime()));
  return active.filter((e)=>!e.kinds.includes('registration') || e.kinds.includes('qualifying') || !active.some((other)=>other.olympiad===e.olympiad && other.kinds.includes('qualifying')))
    .sort((a,b)=>a.end.localeCompare(b.end) || a.stage.localeCompare(b.stage,'ru'));
}

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
