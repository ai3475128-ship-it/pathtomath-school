// Display numbers are independent of storage IDs so existing progress and videos stay attached to their topics.
export const EGE_SECTIONS = [
  [1, 'Планиметрия', '1', [1], 1],
  [2, 'Векторы', '2', [2], 2],
  [3, 'Стереометрия', '3', [3], 3],
  [4, 'Начала теории вероятностей', '4', [4], 4],
  [5, 'Вероятности сложных событий', '5', [5], 5],
  [6, 'Простейшие уравнения', '6', [6], 7],
  [7, 'Вычисления и преобразования', '7', [7], 8],
  [8, 'Производная и первообразная', '8', [8], 9],
  [9, 'Задачи с прикладным содержанием', '9', [9], 10],
  [10, 'Текстовые задачи', '10', [10], 11],
  [11, 'Графики функций', '11', [11], 12],
  [12, 'Наибольшее и наименьшее значение', '12', [12], 17],
  [13, 'Уравнения', '13', [13], 14],
  [14, 'Стереометрическая задача', '14', [14], 15],
  [15, 'Неравенства', '15', [15], 16],
  [16, 'Экономическая задача', '16', [16, 'ege-optimization'], 13],
  [17, 'Планиметрическая задача', '17', [17], 18],
  [18, 'Задача с параметром', '18', [18], 19],
  [19, 'Числа и их свойства', '19', [19], 20],
].map(([number, title, module, videoSections, previewNumber]) => ({ number, title, module, videoSections, previewNumber }));

export const EGE_INTRO_SECTIONS = [
  { number: 14, title: 'Стереометрия', module: '14-intro', previewNumber: 15 },
  { number: 17, title: 'Планиметрия', module: '17-intro', previewNumber: 18 },
  { number: 18, title: 'Параметры', module: '18-intro', previewNumber: 19 },
  { number: 19, title: 'Теория чисел', module: '19-intro', previewNumber: 20 },
];

export function egeSection(number) {
  if (!/^(?:[1-9]|1[0-9])$/.test(String(number))) return null;
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
  if (module === 'ege-optimization') return 16;
  return EGE_SECTIONS.find((item) => item.module === module)?.number ??
    EGE_INTRO_SECTIONS.find((item) => item.module === module)?.number ?? null;
}
