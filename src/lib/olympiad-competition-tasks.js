// Ссылки на исходные модули и номера уже имеющихся задач. Прогресс остаётся общим.
export const competitionTasks = {
  lomonosov: [
    { module: 'olympiad-1-intro', topic: 'Логика', ids: [21, 30] },
    { module: 'olympiad-2-intro', topic: 'Теория чисел', ids: [15, 20] },
    { module: 'olympiad-3-intro', topic: 'Тождественные преобразования', ids: [29] },
    { module: 'olympiad-4-intro', topic: 'Комбинаторика', ids: [11, 15, 20, 21] },
  ],
  omo: [
    { module: 'olympiad-1-intro', topic: 'Логика', ids: [27] },
    { module: 'olympiad-3-intro', topic: 'Тождественные преобразования', ids: [16] },
  ],
  belchonok: [{ module: 'olympiad-2-intro', topic: 'Теория чисел', ids: [14, 29] }],
  turgor: [
    { module: 'olympiad-1-intro', topic: 'Логика', ids: [33] },
    { module: 'olympiad-2-intro', topic: 'Теория чисел', ids: [24, 25, 27, 30] },
  ],
  turlom: [{ module: 'olympiad-2-intro', topic: 'Теория чисел', ids: [23] }],
  hse: [{ module: 'olympiad-2-intro', topic: 'Теория чисел', ids: [19] }],
};

// Только проверенные страницы с заданиями и решениями организаторов.
export const competitionArchives = {
  lomonosov: 'https://olymp.msu.ru/rus/page/main/29/page/menuForParticipants',
  moscow: 'https://mmo.mccme.ru/',
  pvg: 'https://pvg.mk.ru/archive/archive/',
  kurchatov: 'https://olimpiadakurchatov.ru/tasks',
  bibn: 'https://bibn.unn.ru/preparation.html',
  open: 'https://olymp.itmo.ru/',
  spb: 'https://www.pdmi.ras.ru/~olymp/',
  spbu: 'https://olympiada.spbu.ru/arkhiv.html',
  turgor: 'https://olympiads.mccme.ru/turgor/turgor.htm',
  fizteh: 'https://olymp.mipt.ru/olympiad/samples',
  siberia: 'https://sesc.nsu.ru/olymp-vsesib/sections/maths/',
  shag: 'https://olymp.bmstu.ru/ru/mathematics-olymp',
  hse: 'https://olymp.hse.ru/mmo/tasks-math',
  omo: 'https://olympiads.mccme.ru/ommo/',
  turlom: 'https://olympiads.mccme.ru/turlom/',
  belchonok: 'https://dovuz.sfu.ru/abiturientu-sfu/olimpiady/belchonok/arkhiv/',
  izumrud: 'https://dovuz.urfu.ru/olymps/izumrud/tasks',
  rosatom: 'https://olymp.mephi.ru/rosatom/about/traning',
  verchenko: 'https://v-olymp.ru/olymp/cryptography',
  umsh: 'https://yumsh.ru/cms/yumsh-olymp/about',
  innopolis: 'https://dovuz.innopolis.university/innopolis-open/math',
};
