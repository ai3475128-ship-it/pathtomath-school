// Public exam numbers are separate from the original storage identifiers.
// This keeps existing progress, reports and videos attached to their topics.
export const EGE_SECTIONS = [
  [1, 'Планиметрия', '1', [1]],
  [2, 'Векторы', '2', [2]],
  [3, 'Стереометрия', '3', [3]],
  [4, 'Введение в теорию вероятностей', '4', [4]],
  [5, 'Сложные задачи по теории вероятностей', '5', [5]],
  [6, 'Случайные величины', 'ege-random', ['ege-random']],
  [7, 'Простейшие уравнения', '6', [6]],
  [8, 'Преобразования и вычисления', '7', [7]],
  [9, 'Функция и её производная', '8', [8, 12]],
  [10, 'Задачи прикладного характера', '9', [9]],
  [11, 'Текстовые задачи', '10', [10]],
  [12, 'Графики функций', '11', [11]],
  [13, 'Экономические задачи', '16', [16]],
  [14, 'Уравнения', '13', [13]],
  [15, 'Стереометрия', '14', [14]],
  [16, 'Неравенства', '15', [15]],
  [17, 'Прикладные задачи на оптимизацию', 'ege-optimization', ['ege-optimization']],
  [18, 'Планиметрия', '17', [17]],
  [19, 'Задачи с параметром', '18', [18]],
  [20, 'Задачи на теорию чисел', '19', [19]],
].map(([number, title, module, videoSections]) => ({ number, title, module, videoSections }));

export const EGE_INTRO_SECTIONS = [
  { number: 15, title: 'Стереометрия', module: '14-intro' },
  { number: 18, title: 'Планиметрия', module: '17-intro' },
  { number: 19, title: 'Параметры', module: '18-intro' },
  { number: 20, title: 'Теория чисел', module: '19-intro' },
];

export function egeSection(number) {
  if (!/^(?:[1-9]|1[0-9]|20)$/.test(String(number))) return null;
  return EGE_SECTIONS[Number(number) - 1] || null;
}
export function taskModuleForRoute(route) {
  const section = egeSection(route);
  if (section) return section.module;
  const intro = EGE_INTRO_SECTIONS.find((item) => `${item.number}-intro` === route);
  if (intro) return intro.module;
  return typeof route === 'string' && route.startsWith('olympiad-') ? route : null;
}
export function displayNumberForModule(module) {
  if (module === '12') return 9; // Former extremum section, now covered by functions.
  return EGE_SECTIONS.find((item) => item.module === module)?.number ??
    EGE_INTRO_SECTIONS.find((item) => item.module === module)?.number ?? null;
}
