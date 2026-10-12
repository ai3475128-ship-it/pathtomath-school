import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
export const olympiadIntro04Tasks = [

      {
    id: 1,
    title: (
      <span>
        Задача 1
      </span>
    ),
    textBefore: (
      <span>
        Алфавит племени Мумбо-Юмбо состоит из букв А и У. Словом считается любая последовательность, состоящая не более, чем из 5 букв. Сколько слов в словаре Мумбо-Юмбо?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          На каждой позиции в слове может стоять либо буква А, либо буква У — отсюда для каждого места есть ровно 2 варианта. Степень зависит от количества букв в слове:
          <br />
          • Однобуквенные слова: <InlineMath math={`2^1 = 2`} />
          <br />
          • Двубуквенные слова: <InlineMath math={`2 \\cdot 2 = 2^2 = 4`} />
          <br />
          • Трёхбуквенные слова: <InlineMath math={`2 \\cdot 2 \\cdot 2 = 2^3 = 8`} />
          <br />
          • Четырёхбуквенные слова: <InlineMath math={`2^4 = 16`} />
          <br />
          • Пятибуквенные слова: <InlineMath math={`2^5 = 32`} />
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Сложим все варианты для слов длиной от 1 до 5 букв:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = 2 + 4 + 8 + 16 + 32 = 62.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 62.</span>
        </span>
      </span>
    )
  },


    {
    id: 2,
    title: (
      <span>
        Задача 2 (Выбор с учётом и без учёта порядка)
      </span>
    ),
    textBefore: (
      <span>
        В футбольной команде 11 человек. Сколькими способами можно выбрать а) капитана и заместителя; б) двоих нападающих?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          <b>а) Выбор капитана и заместителя:</b>
          <br />
          Капитаном можно выбрать любого из 11 человек. После этого заместителем может стать любой из 10 оставшихся игроков. Так как роли распределены (порядок важен):
          <span className="flex justify-center my-3">
            <InlineMath math={`N_a = 11 \\cdot 10 = 110 \\quad \\text{способов.}`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <b>б) Выбор двоих нападающих:</b>
          <br />
          Если сначала просто выбрать двух человек подряд, получится <InlineMath math={`11 \\cdot 10 = 110`} /> вариантов. Но поскольку нападающие равноправны и порядок их выбора значения не имеет, каждую пару мы посчитали ровно дважды (например, выбрать Иванова, а затем Петрова — это то же самое, что Петрова, а затем Иванова). Делим результат на 2:
          <span className="flex justify-center my-3">
            <InlineMath math={`N_б = \\dfrac{11 \\cdot 10}{2} = 55 \\quad \\text{способов.}`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: а) 110; б) 55.</span>
        </span>
      </span>
    )
  },


    {
    id: 3,
    title: (
      <span>
        Задача 3 (Размещение фигур на шахматной доске)
      </span>
    ),
    textBefore: (
      <span>
        Сколько способами можно поставить на шахматную доску а) черную и белую ладьи; б) черного и белого королей так, чтобы они не били друг друга? (Ладьи бьют все клетки на своей горизонтали и на своей вертикали, а короли бьют все соседние со своей клетки, в том числе по диагонали.)
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          <b>а) Черная и белая ладьи:</b>
          <br />
          Первую (например, черную) ладью можно поставить на любую из <InlineMath math={`64`} /> клеток доски. 
          При этом она «бьет» вертикаль и горизонталь, на которых стоит (всего <InlineMath math={`8 + 8 - 1 = 15`} /> клеток, включая саму клетку с ладьей).
          <br />
          Значит, для белой ладьи остаётся <InlineMath math={`64 - 15 = 49`} /> безопасных клеток.
          
          {/* Рисунок к пункту А */}
          <span className="flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 my-3">
            <svg width="200" height="200" viewBox="0 0 200 200" className="text-slate-800 dark:text-slate-200 font-medium">
              {/* Сетка доски 8х8 */}
              {Array.from({ length: 8 }).map((_, r) =>
                Array.from({ length: 8 }).map((_, c) => {
                  const isBeaten = r === 3 || c === 4;
                  const isRook = r === 3 && c === 4;
                  return (
                    <g key={`${r}-${c}`}>
                      <rect
                        x={c * 24 + 4}
                        y={r * 24 + 4}
                        width="22"
                        height="24"
                        className={`${
                          isRook
                            ? "fill-slate-800 dark:fill-slate-400 stroke-slate-900"
                            : isBeaten
                            ? "fill-rose-100 dark:fill-rose-950/40 stroke-rose-200 dark:stroke-rose-900/60"
                            : (r + c) % 2 === 0
                            ? "fill-slate-200 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700"
                            : "fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-slate-700"
                        }`}
                        strokeWidth="0.5"
                      />
                      {isRook && (
                        <text 
                          x={c * 24 + 15} 
                          y={r * 24 + 22} 
                          textAnchor="middle" 
                          className="fill-white dark:fill-slate-900 font-bold text-2xl stroke-none"
                        >
                          ♜
                        </text>
                      )}
                    </g>
                  );
                })
              )}
            </svg>
          </span>

          <span className="flex justify-center my-2">
            <InlineMath math={`N_a = 64 \\cdot 49 = 3136 \\quad \\text{способов.}`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <b>б) Черный и белый короли:</b>
          <br />
          Количество клеток, которые бьет черный король, зависит от его положения на доске:
          <br />
          1) <b>В углах</b> (4 клетки): король занимает 1 клетку и бьет 3 соседние (всего 4). Для белого короля остается <InlineMath math={`64 - 4 = 60`} /> клеток.
          <br />
          2) <b>На краю доски</b>, кроме углов (24 клетки): король занимает 1 клетку и бьет 5 соседних (всего 6). Остается <InlineMath math={`64 - 6 = 58`} /> клеток.
          <br />
          3) <b>Внутри доски</b> (36 клеток): король занимает 1 клетку и бьет 8 соседних (всего 9). Остается <InlineMath math={`64 - 9 = 55`} /> клеток.

          {/* Рисунок к пункту Б */}
          <span className="flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 my-3">
            <svg width="200" height="200" viewBox="0 0 200 200" className="text-slate-800 dark:text-slate-200 font-medium">
              {Array.from({ length: 8 }).map((_, r) =>
                Array.from({ length: 8 }).map((_, c) => {
                  const isKing = r === 4 && c === 3;
                  const isBeaten = Math.abs(r - 4) <= 1 && Math.abs(c - 3) <= 1;
                  return (
                    <g key={`${r}-${c}`}>
                      <rect
                        x={c * 24 + 4}
                        y={r * 24 + 4}
                        width="22"
                        height="24"
                        className={`${
                          isKing
                            ? "fill-slate-800 dark:fill-slate-400 stroke-slate-900"
                            : isBeaten
                            ? "fill-rose-100 dark:fill-rose-950/40 stroke-rose-200 dark:stroke-rose-900/60"
                            : (r === 0 || r === 7 || c === 0 || c === 7)
                            ? "fill-amber-50/40 dark:fill-amber-950/20 stroke-slate-300 dark:stroke-slate-700"
                            : (r + c) % 2 === 0
                            ? "fill-slate-200 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700"
                            : "fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-slate-700"
                        }`}
                        strokeWidth="0.5"
                      />
                      {isKing && (
                        <text 
                          x={c * 24 + 15} 
                          y={r * 24 + 22} 
                          textAnchor="middle" 
                          className="fill-white dark:fill-slate-900 font-bold text-2xl stroke-none"
                        >
                          ♚
                        </text>
                      )}
                    </g>
                  );
                })
              )}
            </svg>
          </span>

          Суммируем варианты для всех трех зон размещения первого короля:
          <span className="flex justify-center my-3">
            <InlineMath math={`N_б = 4 \\cdot 60 + 24 \\cdot 58 + 36 \\cdot 55 = 240 + 1392 + 1980 = 3612 \\quad \\text{способов.}`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: а) 3136; б) 3612.</span>
        </span>
      </span>
    )
  },


  {
    id: 4,
    title: (
      <span>
        Задача 4
      </span>
    ),
    textBefore: (
      <span>
        Каких семизначных чисел больше — тех, в записи которых есть цифра 1, или тех, в записи которых ее нет?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Всего существует <InlineMath math={`9 \\cdot 10^6 = 9\\,000\\,000`} /> семизначных чисел. Половина от этого количества составляет <InlineMath math={`4.5 \\cdot 10^6 = 4\\,500\\,000`} />.
          <br /><br />
          Посчитаем количество чисел, в записи которых нет ни одной единицы:
          <br />
          • На первом месте может стоять любая цифра, кроме 0 и 1 (8 вариантов).
          <br />
          • На остальных 6 местах — любая цифра, кроме 1 (по 9 вариантов).
          <span className="flex justify-center my-3">
            <InlineMath math={`N_{\\text{без 1}} = 8 \\cdot 9^6.`} />
          </span>
          Сравним это число с половиной от всех семизначных чисел:
          <span className="flex justify-center my-3">
            <InlineMath math={`8 \\cdot 9^6 \\quad \\lor \\quad 4.5 \\cdot 10^6`} />
          </span>
          Разделим обе части на 9:
          <span className="flex justify-center my-3">
            <InlineMath math={`8 \\cdot 9^5 \\quad \\lor \\quad 0.5 \\cdot 10^6`} />
          </span>
          Умножим обе части на 2, чтобы избавиться от десятичной дроби:
          <span className="flex justify-center my-3">
            <InlineMath math={`16 \\cdot 9^5 \\quad \\lor \\quad 10^6 \\quad (1\\,000\\,000)`} />
          </span>
          Оценим левую часть сверху. Так как <InlineMath math={`9^5 = 59\\,049 < 60\\,000`} />, получаем:
          <span className="flex justify-center my-3">
            <InlineMath math={`16 \\cdot 9^5 < 16 \\cdot 60\\,000 = 960\\,000 < 1\\,000\\,000.`} />
          </span>
          Поскольку количество чисел без единицы строго меньше половины, то на числа с единицей гарантированно приходится больше половины от общего объёма.
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: тех, в записи которых есть цифра 1.</span>
        </span>
      </span>
    )
  },

    {
    id: 5,
    title: (
      <span>
        Задача 5 (Правило сложения вариантов)
      </span>
    ),
    textBefore: (
      <span>
        Перед Крошем и Нюшей лежат 3 различных печеньки и 4 различных пряничка. Сначала Нюша выбирает одну из сладостей, а после этого Крош выбирает сладость того же вида, которую только что взяла Нюша. Сколькими способами Нюша и Крош могут выбрать себе пару сладостей?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Разберём два возможных сценария в зависимости от того, какой вид сладостей выберет Нюша:
          <br /><br />
          1) <b>Если Нюша выбирает печенье:</b>
          <br />
          У неё есть 3 варианта выбора. После этого Крош должен выбрать одну из оставшихся 2 печенек. Всего для этого случая:
          <span className="flex justify-center my-3">
            <InlineMath math={`N_1 = 3 \\cdot 2 = 6 \\quad \\text{способов.}`} />
          </span>
          2) <b>Если Нюша выбирает пряник:</b>
          <br />
          У неё есть 4 варианта выбора. После этого Крош выбирает один из оставшихся 3 пряников. Всего для этого случая:
          <span className="flex justify-center my-3">
            <InlineMath math={`N_2 = 4 \\cdot 3 = 12 \\quad \\text{способов.}`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Сложим варианты для обоих непересекающихся случаев:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = N_1 + N_2 = 6 + 12 = 18 \\quad \\text{способов.}`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 18.</span>
        </span>
      </span>
    )
  },


    {
    id: 6,
    title: (
      <span>
        Задача 6
      </span>
    ),
    textBefore: (
      <span>
        Сколько существует 6-значных чисел, в которых любые две соседние цифры различны?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Разберём количество вариантов для каждой позиции в шестизначном числе по очереди:
          <br /><br />
          • <b>1-я цифра:</b> может быть любой, кроме 0 (всего 9 вариантов).
          <br />
          • <b>2-я цифра:</b> может быть любой, кроме той, что стоит на первом месте (всего 9 вариантов, так как теперь 0 использовать можно).
          <br />
          • <b>3-я цифра:</b> может быть любой, кроме той, что стоит на втором месте (9 вариантов).
          <br />
          • <b>4-я, 5-я и 6-я цифры:</b> по аналогии с предыдущими, каждая из них не должна совпадать со своим левым соседом, то есть имеет по 9 вариантов выбора.
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Перемножим количество вариантов для всех шести позиций:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = 9 \\cdot 9 \\cdot 9 \\cdot 9 \\cdot 9 \\cdot 9 = 9^6`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: <InlineMath math={`9^6`} /></span>
        </span>
      </span>
    )
  },
  {
    id: 7,
    title: (
      <span>
        Задача 7 (Метод дополнения)
      </span>
    ),
    textBefore: (
      <span>
        Сколько существует 6-значных чисел, в которых есть цифра "5"?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Всего существует <InlineMath math={`9 \\cdot 10^5 = 900\\,000`} /> шестизначных чисел (9 вариантов на первом месте, и по 10 вариантов на остальных пяти).
          <br /><br />
          <b>1) Посчитаем числа, в которых вообще нет цифры "5":</b>
          <br />
          • На первом месте может стоять любая цифра, кроме 0 и 5 (8 вариантов).
          <br />
          • На остальных 5 позициях — любая цифра, кроме 5 (по 9 вариантов).
          <span className="flex justify-center my-3">
            <InlineMath math={`N_{\\text{без 5}} = 8 \\cdot 9^5.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <b>2) Найдём количество чисел, где есть хотя бы одна "5":</b>
          <br />
          Для этого из общего числа шестизначных чисел вычтем те, в которых пятёрок нет совсем:
          <span className="flex justify-center my-3">
            <InlineMath math={`N_{\\text{с 5}} = 9 \\cdot 10^5 - 8 \\cdot 9^5.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: <InlineMath math={`9 \\cdot 10^5 - 8 \\cdot 9^5`} />.</span>
        </span>
      </span>
    )
  },

      {
    id: 8,
    title: (
      <span>
        Задача 8
      </span>
    ),
    textBefore: (
      <span>
        На кружок по математике ходят 10 человек. Учителю нужно выбрать троих для участия в турнире математических игр. Сколькими способами он может сделать выбор?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Учителю необходимо выбрать команду из 3 человек из общего состава в 10 человек. Поскольку порядок выбора участников внутри команды значения не имеет (все трое равноправны), общее число способов определяется формулой числа сочетаний:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = C_{10}^3 = \\dfrac{10!}{3! \\cdot (10 - 3)!} = \\dfrac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 120.</span>
        </span>
      </span>
    )
  },


  {
    id: 9,
    title: (
      <span>
        Задача 9 (Круговой турнир)
      </span>
    ),
    textBefore: (
      <span>
        В школе проводится чемпионат по игре в шахматы. В турнире участвуют 20 человек, по правилам каждый участник должен сыграть с каждым из остальных по одному разу. Сколько партий будет сыграно на этом турнире?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          <b>Способ 1:</b>
          <br />
          Каждый из 20 участников играет с 19 остальными. Перемножив варианты, получаем <InlineMath math={`20 \\cdot 19 = 380`} />. Поскольку в каждой игре участвуют двое и порядок их выбора не важен, мы посчитали каждую партию дважды (например, партия Бори против Ани и партия Ани против Бори — это одна и та же игра). Делим результат на 2:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = \\dfrac{20 \\cdot 19}{2} = 190.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <b>Способ 2 (Число сочетаний):</b>
          <br />
          Каждая сыгранная партия уникально определяется выбором пары игроков из 20 участников турнира. Так как порядок выбора внутри пары значения не имеет, общее количество игр равно числу сочетаний из 20 элементов по 2:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = C_{20}^2 = \\dfrac{20!}{2! \\cdot (20 - 2)!} = \\dfrac{20 \\cdot 19}{2} = 190.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 190.</span>
        </span>
      </span>
    )
  },


    {
    id: 10,
    title: (
      <span>
        Задача 10
      </span>
    ),
    textBefore: (
      <span>
        По кругу отмечены 10 точек. Сколько существует замкнутых 10-звенных (возможно, самопересекающихся) ломаных с вершинами в этих точках?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        {/* Идеальный тригонометрический рисунок без погрешностей */}
        <span className="flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 my-3">
          <svg width="240" height="240" viewBox="0 0 240 240" className="text-slate-800 dark:text-slate-200 stroke-current fill-none font-medium">
            {/* Опорная пунктирная окружность */}
            <circle cx="120" cy="120" r="90" strokeWidth="1" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
            
            {/* Ломаная, проходящая строго по вершинам (индексы обхода: 0 -> 4 -> 8 -> 2 -> 6 -> 9 -> 3 -> 7 -> 1 -> 5 -> 0) */}
            <polygon 
              points="210,120 47.16,172.9 147.81,34.1 147.81,205.9 47.16,67.1 192.81,67.1 92.19,205.9 92.19,34.1 192.81,172.9 30,120" 
              strokeWidth="2" 
              className="text-indigo-500 dark:text-indigo-400 stroke-current" 
            />
            
            {/* Точки с тригонометрическими координатами: x = 120 + 90*cos(a), y = 120 + 90*sin(a) */}
            <circle cx="210" cy="120" r="5" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="192.81" cy="172.9" r="5" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="147.81" cy="205.9" r="5" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="92.19" cy="205.9" r="5" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="47.16" cy="172.9" r="5" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="30" cy="120" r="5" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="47.16" cy="67.1" r="5" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="92.19" cy="34.1" r="5" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="147.81" cy="34.1" r="5" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="192.81" cy="67.1" r="5" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
          </svg>
        </span>

        <span className="block">
          Любая такая ломаная уникально задаётся последовательным порядком обхода всех её 10 вершин.
          <br /><br />
          1) Количество способов выстроить 10 точек в один линейный ряд равно числу их перестановок: <InlineMath math={`10!`} />.
          <br /><br />
          2) Поскольку ломаная является замкнутой (контур замыкается в петлю), у неё нет фиксированной «первой» вершины. Любой из 10 возможных циклических сдвигов при обходе задаёт одну и ту же геометрическую ломаную. Избавляемся от повторов делением на 10:
          <span className="flex justify-center my-3">
            <InlineMath math={`\\dfrac{10!}{10} = 9!`} />
          </span>
          3) Направление обхода этой замкнутой петли (по часовой стрелке или против неё) выдаёт абсолютно одинаковый рисунок ломаной на плоскости. Чтобы убрать это дублирование, делим получившееся выражение на 2:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = \\dfrac{9!}{2}.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 9! / 2.</span>
        </span>
      </span>
    )
  },


    {
    id: 11,
    title: (
      <span>
        Задача 11 (Перестановки с повторениями) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Ломоносов», 2015)</span>
      </span>
    ),
    textBefore: (
      <span>
        Сколько девятизначных чисел, которые делятся на 5, можно составить путём перестановки цифр числа <InlineMath math={`377353752`} />?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Исходное число состоит из 9 цифр, среди которых: цифра 3 встречается 3 раза, цифра 7 — 3 раза, цифра 5 — 2 раза, цифра 2 — 1 раз.
          <br /><br />
          Чтобы получившееся девятизначное число делилось на 5, оно должно оканчиваться на цифру 5 (так как нуля в нашем наборе нет). 
          <br /><br />
          Зафиксируем одну цифру 5 на последнем месте. На оставшихся 8 позициях нам нужно произвольно переставить оставшиеся 8 цифр:
          <br />
          • Цифра 3 (3 штуки)
          <br />
          • Цифра 7 (3 штуки)
          <br />
          • Цифра 5 (1 штука)
          <br />
          • Цифра 2 (1 штука)
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Количество уникальных комбинаций определяется формулой перестановок с повторениями:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = \\dfrac{8!}{3! \\cdot 3! \\cdot 1! \\cdot 1!}`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: <InlineMath math={`\\dfrac{8!}{3! \\cdot 3! \\cdot 1! \\cdot 1!}`} /></span>
        </span>
      </span>
    )
  },


    {
    id: 12,
    title: (
      <span>
        Задача 12 (Формула включений и исключений)
      </span>
    ),
    textBefore: (
      <span>
        Сколько есть способов поставить 5 крестиков в прямоугольнике <InlineMath math={`4 \\times 5`} /> так, чтобы в каждой строке и в каждом столбце стоял хотя бы один крестик? А сколько в квадрате <InlineMath math={`4 \\times 4`} />?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          <b>1) Прямоугольник 4 × 5 (5 крестиков):</b>
          <br />
          Всего в таблице <InlineMath math={`4 \\cdot 5 = 20`} /> клеток. Чтобы в каждом из 5 столбцов был хотя бы один крестик, в каждом столбце должно находиться ровно по одному крестику. 
          При этом нам нужно следить только за тем, чтобы ни одна из 4 строк не оказалась пустой.
          <br /><br />
          Применим формулу включений-исключений по пустым строкам:
          <br />
          • Всего способов выбрать клетки: <InlineMath math={`C_{20}^5`} />
          <br />
          • Вычтем случаи, когда пуста хотя бы одна конкретная строка: <InlineMath math={`C_4^1 \\cdot C_{15}^5`} />
          <br />
          • Прибавим случаи, когда пусты хотя бы две строки: <InlineMath math={`C_4^2 \\cdot C_{10}^5`} />
          <br />
          • Вычтем случаи, когда пусты хотя бы три строки: <InlineMath math={`C_4^3 \\cdot C_{5}^5`} />

          {/* Рисунок к прямоугольнику 4х5 */}
          <span className="flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 my-3">
            <svg width="150" height="120" viewBox="0 0 150 120" className="text-slate-800 dark:text-slate-200 font-medium">
              {Array.from({ length: 4 }).map((_, r) =>
                Array.from({ length: 5 }).map((_, c) => {
                  // Пример расстановки, где в каждой строке и столбце есть крестик
                  const hasCross = (r === 0 && c === 0) || (r === 1 && c === 1) || (r === 2 && c === 2) || (r === 3 && c === 3) || (r === 3 && c === 4);
                  return (
                    <g key={`${r}-${c}`}>
                      <rect
                        x={c * 24 + 15}
                        y={r * 24 + 12}
                        width="22"
                        height="22"
                        className="fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-slate-700"
                        strokeWidth="1"
                      />
                      {hasCross && (
                        <text x={c * 24 + 26} y={r * 24 + 29} textAnchor="middle" className="fill-rose-500 dark:fill-rose-400 font-bold text-sm stroke-none">✕</text>
                      )}
                    </g>
                  );
                })
              )}
            </svg>
          </span>

          <span className="flex justify-center my-3">
            <InlineMath math={`N_1 = C_{20}^5 - C_4^1 \\cdot C_{15}^5 + C_4^2 \\cdot C_{10}^5 - C_4^3 \\cdot C_5^5.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <b>2) Квадрат 4 × 4 (5 крестиков):</b>
          <br />
          Всего в таблице <InlineMath math={`4 \\cdot 4 = 16`} /> клеток. Чтобы в каждой из 4 строк и в каждом из 4 столбцов было по крестику, структура должна быть следующей: в одной строке и в одном столбце стоят по 2 крестика, а во всех остальных — строго по 1.
          <br /><br />
          • Выберем «особую» строку и «особый» столбец, на пересечении которых будет стоять крестик: <InlineMath math={`4 \\cdot 4 = 16`} /> способов.
          <br />
          • В этой строке нужно выбрать ещё 1 место из 3 оставшихся, а в этом столбце — ещё 1 место из 3 оставшихся: <InlineMath math={`3 \\cdot 3 = 9`} /> способов.
          <br />
          • Для оставшихся 2 крестиков в незанятых строках и столбцах остаётся ровно <InlineMath math={`2! = 2`} /> способа расстановки.

          {/* Рисунок к квадрату 4х4 */}
          <span className="flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 my-3">
            <svg width="130" height="120" viewBox="0 0 130 120" className="text-slate-800 dark:text-slate-200 font-medium">
              {Array.from({ length: 4 }).map((_, r) =>
                Array.from({ length: 4 }).map((_, c) => {
                  // Пример расстановки для квадрата 4х4
                  const hasCross = (r === 0 && c === 0) || (r === 0 && c === 1) || (r === 1 && c === 0) || (r === 2 && c === 2) || (r === 3 && c === 3);
                  return (
                    <g key={`${r}-${c}`}>
                      <rect
                        x={c * 24 + 19}
                        y={r * 24 + 12}
                        width="22"
                        height="22"
                        className="fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-slate-700"
                        strokeWidth="1"
                      />
                      {hasCross && (
                        <text x={c * 24 + 30} y={r * 24 + 29} textAnchor="middle" className="fill-rose-500 dark:fill-rose-400 font-bold text-sm stroke-none">✕</text>
                      )}
                    </g>
                  );
                })
              )}
            </svg>
          </span>

          Перемножим полученные независимые варианты выбора:
          <span className="flex justify-center my-3">
            <InlineMath math={`N_2 = 16 \\cdot 9 \\cdot 2 = 288.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 4×5: C(20,5) - 4·C(15,5) + 6·C(10,5) - 4; 4×4: 288.</span>
        </span>
      </span>
    )
  },



    {
    id: 13,
    title: (
      <span>
        Задача 13 (Признаки делимости) <span className="text-sm font-normal text-slate-400 ml-1.5">(Всеросс., 2020, ШЭ)</span>
      </span>
    ),
    textBefore: (
      <span>
        На доске записано натуральное число. Николай заметил, что может двумя способами приписать к нему цифру справа так, чтобы полученное число делилось на 9. Сколькими способами он может приписать к данному числу цифру справа так, чтобы полученное число делилось на 3?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Пусть сумма цифр исходного числа равна <InlineMath math={`S`} />, а приписываемая справа цифра равна <InlineMath math={`x`} /> (где <InlineMath math={`x \\in \\{0, 1, \\dots, 9\\}`} />). 
          Тогда сумма цифр нового числа равна <InlineMath math={`S + x`} />.
          <br /><br />
          <b>1) Анализ делимости на 9:</b>
          <br />
          Число делится на 9 тогда и только тогда, когда сумма его цифр делится на 9. Среди 10 возможных цифр шагом в 9 могут отличаться только две цифры: <b>0 и 9</b>. 
          По условию таких способов ровно два, значит, приписаны могли быть только цифры 0 или 9. 
          Это гарантирует, что исходная сумма цифр <InlineMath math={`S`} /> сама делится на 9 (так как <InlineMath math={`S + 0`} /> и <InlineMath math={`S + 9`} /> делятся на 9).
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <b>2) Анализ делимости на 3:</b>
          <br />
          Число делится на 3 тогда и только тогда, когда сумма его цифр <InlineMath math={`S + x`} /> делится на 3. 
          Поскольку мы уже выяснили, что <InlineMath math={`S`} /> делится на 9, оно автоматически делится и на 3. 
          Следовательно, для того чтобы сумма <InlineMath math={`S + x`} /> делилась на 3, приписываемая цифра <InlineMath math={`x`} /> тоже обязана делиться на 3.
          <br /><br />
          Среди всех цифр выберем те, которые делятся на 3: это цифры <b>0, 3, 6 и 9</b> — всего 4 варианта.
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 4.</span>
        </span>
      </span>
    )
  },


    {
    id: 14,
    title: (
      <span>
        Задача 14 (Формула включений-исклечений для отрезка) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Покори Воробьёвы горы!», 2020)</span>
      </span>
    ),
    textBefore: (
      <span>
        Найдите количество натуральных чисел, кратных 3, не кратных 5 и принадлежащих отрезку <InlineMath math={`[1200; 2020]`} />.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Чтобы найти количество чисел, кратных 3, но не кратных 5, нужно из общего числа всех чисел отрезка, делящихся на 3, вычесть те, которые делятся одновременно на 3 и на 5 (то есть кратны <InlineMath math={`3 \\cdot 5 = 15`} />).
          <br /><br />
          <b>1) Посчитаем количество чисел, кратных 3, на отрезке [1200; 2020]:</b>
          <br />
          • Первое такое число: <InlineMath math={`1200`} />
          <br />
          • Последнее такое число: <InlineMath math={`2019`} />
          <br />
          Количество членов этой арифметической прогрессии с шагом 3 равно:
          <span className="flex justify-center my-2">
            <InlineMath math={`N_3 = \\dfrac{2019 - 1200}{3} + 1 = \\dfrac{819}{3} + 1 = 273 + 1 = 274.`} />
          </span>
          <b>2) Посчитаем количество чисел, кратных 15, на том же отрезке:</b>
          <br />
          • Первое такое число: <InlineMath math={`1200`} /> (так как <InlineMath math={`1200 = 15 \\cdot 80`} />)
          <br />
          • Последнее такое число: <InlineMath math={`2010`} /> (так как <InlineMath math={`2020 = 15 \\cdot 134 + 10`} />)
          <br />
          Количество членов прогрессии с шагом 15 равно:
          <span className="flex justify-center my-2">
            <InlineMath math={`N_{15} = \\dfrac{2010 - 1200}{15} + 1 = \\dfrac{810}{15} + 1 = 54 + 1 = 55.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Вычтем из чисел, делящихся на 3, те, которые также делятся на 15:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = N_3 - N_{15} = 274 - 55 = 219.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 219.</span>
        </span>
      </span>
    )
  },


    {
    id: 15,
    title: (
      <span>
        Задача 15 (Разложение на множители и делители числа) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Ломоносов», 2014)</span>
      </span>
    ),
    textBefore: (
      <span>
        Найдите количество пары целых чисел <InlineMath math={`(m, n)`} />, для которых выполнено равенство:
        <span className="flex justify-center my-3">
          <InlineMath math={`n^2 + 2^{2014} = m^2.`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Перенесём <InlineMath math={`n^2`} /> в правую часть и разложим её по формуле разности квадратов:
          <span className="flex justify-center my-3">
            <InlineMath math={`(m - n)(m + n) = 2^{2014}.`} />
          </span>
          Пусть <InlineMath math={`m - n = x`} />, а <InlineMath math={`m + n = y`} />. Перемножив их, мы получаем <InlineMath math={`x \\cdot y = 2^{2014}`} />.
          <br /><br />
          Так как произведение двух чисел равно степени двойки, оба сомножителя обязаны быть степенями двойки с точностью до знака.
          Сложим выражения для <InlineMath math={`x`} /> и <InlineMath math={`y`} />:
          <span className="flex justify-center my-3">
            <InlineMath math={`(m - n) + (m + n) = x + y \\implies 2m = x + y \\implies m = \\dfrac{x + y}{2}.`} />
          </span>
          Для того чтобы число <InlineMath math={`m`} /> получилось целым, сумма <InlineMath math={`x + y`} /> должна быть чётной. Так как их произведение чётно, то <InlineMath math={`x`} /> и <InlineMath math={`y`} /> обязаны иметь одинаковую чётность, то есть они оба должны делиться на 2.
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <b>Подсчёт количества вариантов:</b>
          <br />
          С учётом чётности, представим сомножители в положительном случае как:
          <span className="flex justify-center my-3">
            <InlineMath math={`x = 2^k \\quad \\text{и} \\quad y = 2^{2014 - k}.`} />
          </span>
          Поскольку оба числа должны быть чётными, показатель степени <InlineMath math={`k`} /> не может принимать значения <InlineMath math={`0`} /> (тогда <InlineMath math={`x=1`} /> — нечётно) и <InlineMath math={`2014`} /> (тогда <InlineMath math={`y=1`} /> — нечётно).
          <br /><br />
          Значит, переменная <InlineMath math={`k`} /> может быть любым целым числом из диапазона:
          <span className="flex justify-center my-3">
            <InlineMath math={`1 \\leq k \\leq 2013.`} />
          </span>
          Количество таких целых значений равно ровно 2013.
          <br /><br />
          Так как числа <InlineMath math={`x`} /> и <InlineMath math={`y`} /> могут быть одновременно как положительными, так и отрицательными, общее число пар удваивается:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = 2013 \\cdot 2 = 4026.`} />
          </span>
          Каждому выбору пары соответствует ровно одна уникальная пара целых чисел <InlineMath math={`(m, n)`} />.
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 4026.</span>
        </span>
      </span>
    )
  },




    {
    id: 16,
    title: (
      <span>
        Задача 16 (Геометрическая вероятность)
      </span>
    ),
    textBefore: (
      <span>
        Два друга договариваются встретиться в кафе в промежутке с 16:00 до 17:00. Каждый из них приходит в случайный момент времени в этом интервале и ждёт другого ровно 10 минут, после чего уходит. Какова вероятность того, что они встретятся?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Пусть промежуток времени составляет 60 минут. Обозначим через <InlineMath math={`x`} /> время прихода первого друга (в минутах от 16:00), а через <InlineMath math={`y`} /> — время прихода второго друга.
          <br />
          По условию: <InlineMath math={`0 \\leq x \\leq 60`} /> и <InlineMath math={`0 \\leq y \\leq 60`} />. Множеством всех возможных исходов является квадрат со стороной 60 и площадью:
          <span className="flex justify-center my-2">
            <InlineMath math={`S_{\\text{всего}} = 60 \\cdot 60 = 3600.`} />
          </span>
          Друзья встретятся, если разность между временами их прихода не превышает 10 минут:
          <span className="flex justify-center my-2">
            <InlineMath math={`|x - y| \\leq 10 \\iff -10 \\leq x - y \\leq 10.`} />
          </span>
        </span>

        {/* Наглядный крупный SVG-график области встречи */}
        <span className="flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 my-3">
          <svg width="240" height="240" viewBox="-20 -15 155 155" className="text-slate-800 dark:text-slate-200 fill-none font-medium text-[9px]">
            <defs>
              <linearGradient id="meetGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            
            {/* Тонкая координатная сетка */}
            <path d="M 20,0 L 20,120 M 100,0 L 100,120 M 0,20 L 120,20 M 0,100 L 120,100" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" className="text-slate-200 dark:text-slate-800" />
            
            {/* Оси координат */}
            <line x1="0" y1="120" x2="135" y2="120" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="120" x2="0" y2="-10" stroke="currentColor" strokeWidth="1" />
            <text x="132" y="123" className="fill-current stroke-none font-bold">x</text>
            <text x="-10" y="-4" className="fill-current stroke-none font-bold">y</text>
            
            {/* Квадрат всех возможных исходов */}
            <rect x="0" y="0" width="120" height="120" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-600" />
            <text x="116" y="131" className="fill-current stroke-none">60</text>
            <text x="-14" y="5" className="fill-current stroke-none">60</text>
            
            {/* Благоприятная полоса встречи с градиентом */}
            <polygon 
              points="0,120 20,120 120,20 120,0 100,0 0,100" 
              fill="url(#meetGrad)"
              stroke="#3b82f6" 
              strokeWidth="1.2" 
            />
            
            {/* Маркеры делений (10 минут) */}
            <text x="18" y="131" className="fill-current stroke-none">10</text>
            <text x="-14" y="104" className="fill-current stroke-none">10</text>
            
            {/* Подписи линий границ */}
            <text x="50" y="38" className="fill-blue-600 dark:fill-blue-400 stroke-none font-sans text-[7px] rotate-[-45deg] transform origin-left">y = x + 10</text>
            <text x="72" y="60" className="fill-blue-600 dark:fill-blue-400 stroke-none font-sans text-[7px] rotate-[-45deg] transform origin-left">y = x - 10</text>
          </svg>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Вместо вычисления площади центральной полосы (благоприятных исходов), проще найти площадь двух пустых неблагоприятных треугольников в углах квадрата. 
          Каждый из них является прямоугольным треугольником с катетами <InlineMath math={`60 - 10 = 50`} />.
          <br /><br />
          Их суммарная площадь равна площади одного полного квадрата со стороной 50:
          <span className="flex justify-center my-2">
            <InlineMath math={`S_{\\text{неблаг}} = 50 \\cdot 50 = 2500.`} />
          </span>
          Тогда площадь благоприятной области встречи равна:
          <span className="flex justify-center my-2">
            <InlineMath math={`S_{\\text{благ}} = S_{\\text{всего}} - S_{\\text{неблаг}} = 3600 - 2500 = 1100.`} />
          </span>
          Искомая геометрическая вероятность встречи составляет:
          <span className="flex justify-center my-3">
            <InlineMath math={`P = \\dfrac{S_{\\text{благ}}}{S_{\\text{всего}}} = \\dfrac{1100}{3600} = \\dfrac{11}{36}.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 11 / 36.</span>
        </span>
      </span>
    )
  },



    {
    id: 17,
    title: (
      <span>
        Задача 17 (Геометрическая вероятность)
      </span>
    ),
    textBefore: (
      <span>
        В треугольнике <InlineMath math={`ABC`} /> угол <InlineMath math={`A`} /> равен 40 градусам. Треугольник случайным образом бросают на стол. Найдите вероятность того, что вершина <InlineMath math={`A`} /> окажется восточнее двух других вершин.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Пусть треугольник упал так, что обход от <InlineMath math={`A`} /> к <InlineMath math={`B`} /> и далее к <InlineMath math={`C`} /> осуществляется против часовой стрелки. 
          <br /><br />
          Проведём через вершину <InlineMath math={`A`} /> прямую, идущую строго с юга на север. Событие «Вершина <InlineMath math={`A`} /> восточнее двух других» осуществляется тогда и только тогда, когда вершины <InlineMath math={`B`} /> и <InlineMath math={`C`} /> расположены в западной полуплоскости от проведённой прямой (то есть слева от неё).
        </span>

        {/* Строгий геометрический SVG-рисунок по образцу Школково */}
        <span className="flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 my-3">
          <svg width="240" height="240" viewBox="0 0 240 240" className="text-slate-800 dark:text-slate-200 fill-none font-medium text-[10px]">
            {/* Вертикальная ось Юг - Север */}
            <line x1="120" y1="20" x2="120" y2="220" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <text x="114" y="15" className="fill-current stroke-none font-bold">Север</text>
            <text x="115" y="233" className="fill-current stroke-none font-bold">Юг</text>
            
            {/* Центральная вершина А */}
            <circle cx="120" cy="120" r="3.5" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <text x="127" y="123" className="fill-current stroke-none font-bold">A</text>
            
            {/* Положение 1: вершина B на границе полуплоскости */}
            <polygon points="120,120 120,40 60,70" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-500" />
            <circle cx="120" cy="40" r="2.5" className="fill-slate-400 stroke-none" />
            <circle cx="60" cy="70" r="2.5" className="fill-slate-400 stroke-none" />
            <text x="125" y="44" className="fill-slate-400 stroke-none">B</text>
            <text x="50" y="74" className="fill-slate-400 stroke-none">C</text>
            
            {/* Положение 2: вершина C на границе полуплоскости */}
            <polygon points="120,120 70,165 120,195" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-500" />
            <circle cx="70" cy="165" r="2.5" className="fill-slate-400 stroke-none" />
            <circle cx="120" cy="195" r="2.5" className="fill-slate-400 stroke-none" />
            <text x="60" y="169" className="fill-slate-400 stroke-none">B'</text>
            <text x="125" y="199" className="fill-slate-400 stroke-none">C'</text>
            
            {/* Дуга закрашенного внешнего сектора (угол 140 градусов) */}
            <path d="M 120,70 A 50,50 0 0,0 120,170" stroke="#3b82f6" strokeWidth="1.5" className="fill-blue-100/30 dark:fill-blue-950/20" />
            
            {/* Символ солнца/направления на Восток в секторе */}
            <circle cx="155" cy="120" r="6" stroke="#f59e0b" strokeWidth="1.2" />
            <path d="M 155,108 L 155,112 M 155,128 L 155,132 M 143,120 L 147,120 M 163,120 L 167,120" stroke="#f59e0b" strokeWidth="1" />
          </svg>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          На рисунке показаны два крайних граничных положения треугольника, при которых его вершины <InlineMath math={`B`} /> и <InlineMath math={`C`} /> всё ещё не выходят в восточную полуплоскость. 
          <br /><br />
          Видно, что луч <InlineMath math={`AB`} /> (или <InlineMath math={`AC`} />) должен проходить внутри закрашенного тупого угла, который является внешним к внутреннему углу <InlineMath math={`A`} /> треугольника и смежным с ним относительно вертикальной прямой. 
          <br /><br />
          Величина этого благоприятного углового сектора равна:
          <span className="flex justify-center my-2">
            <InlineMath math={`180^{\\circ} - 40^{\\circ} = 140^{\\circ}.`} />
          </span>
          Поскольку треугольник при падении ориентирован на плоскости стола абсолютно случайно, область всех возможных исходов составляет полный оборот в <InlineMath math={`360^{\\circ}`} />. 
          <br /><br />
          Следовательно, искомая геометрическая вероятность этого события равна:
          <span className="flex justify-center my-3">
            <InlineMath math={`P = \\dfrac{180^{\\circ} - 40^{\\circ}}{360^{\\circ}} = \\dfrac{140^{\\circ}}{360^{\\circ}} = \\dfrac{7}{18}.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 7 / 18.</span>
        </span>
      </span>
    )
  },


  {
    id: 18,
    title: (
      <span>
        Задача 18 (Задача о сломанной палке)
      </span>
    ),
    textBefore: (
      <span>
        Палку случайным образом сломали в двух местах. Найдите вероятность того, что из образовавшихся кусков можно составить треугольник.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Пусть длина палки равна <InlineMath math={`L = 1`} />. Обозначим расстояния от левого конца палки до двух точек излома как <InlineMath math={`x`} /> и <InlineMath math={`y`} />. 
          Без потери общности положим, что <InlineMath math={`x < y`} />.
          <br />
          Тогда длины трёх получившихся кусков равны: <InlineMath math={`x`} />, <InlineMath math={`y - x`} /> и <InlineMath math={`1 - y`} />.
          <br /><br />
          Область всех возможных исходов при условии <InlineMath math={`0 \\leq x \\leq y \\leq 1`} /> представляет собой прямоугольный треугольник с катетами 1 на координатной плоскости. Его площадь равна:
          <span className="flex justify-center my-2">
            <InlineMath math={`S_{\\text{всего}} = \\dfrac{1}{2} \\cdot 1 \\cdot 1 = \\dfrac{1}{2}.`} />
          </span>
          Из трёх кусков можно составить треугольник тогда и только тогда, когда выполняются три неравенства треугольника (сумма двух любых сторон строго больше третьей):
          <br />
          1) <InlineMath math={`x + (y - x) > 1 - y \\implies y > 0.5`} />
          <br />
          2) <InlineMath math={`x + (1 - y) > y - x \\implies y < x + 0.5`} />
          <br />
          3) <InlineMath math={`(y - x) + (1 - y) > x \\implies x < 0.5`} />
        </span>

        {/* Скорректированный геометрический рисунок */}
        <span className="flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 my-3">
          <svg width="200" height="200" viewBox="-15 -15 135 135" className="text-slate-800 dark:text-slate-200 fill-none font-medium text-[9px]">
            {/* Оси координат (ноль в 0,100) */}
            <line x1="0" y1="100" x2="115" y2="100" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="100" x2="0" y2="-15" stroke="currentColor" strokeWidth="1" />
            <text x="112" y="103" className="fill-current stroke-none font-bold">x</text>
            <text x="-10" y="-8" className="fill-current stroke-none font-bold">y</text>
            
            {/* Общая область исходов x < y (треугольник с вершинами (0,100), (0,0), (100,0)) */}
            <polygon points="0,100 0,0 100,0" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-slate-300 dark:text-slate-700" />
            <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" />
            <text x="96" y="111" className="fill-current stroke-none">1</text>
            <text x="-10" y="4" className="fill-current stroke-none">1</text>
            
            {/* Благоприятная область (центральный треугольник с вершинами (0,50), (50,50), (50,0) по осям математики) */}
            {/* В координатах SVG: (0,50), (50,50), (50,50) */}
            <polygon 
              points="0,50 50,50 50,0" 
              className="fill-emerald-100/50 dark:fill-emerald-950/30 stroke-emerald-500" 
              strokeWidth="1.5" 
            />
            
            {/* Линии ограничений x = 0.5 и y = 0.5 */}
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 1" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 1" />
            
            <text x="-14" y="53" className="fill-current stroke-none">0.5</text>
            <text x="44" y="111" className="fill-current stroke-none">0.5</text>
          </svg>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Нанесём полученные три ограничительные линии на график. Они отсекают внутри исходного треугольника центральный прямоугольный треугольник с катетами по <InlineMath math={`0.5`} />. 
          <br /><br />
          Вычислим площадь получившейся благоприятной области:
          <span className="flex justify-center my-2">
            <InlineMath math={`S_{\\text{благ}} = \\dfrac{1}{2} \\cdot 0.5 \\cdot 0.5 = \\dfrac{1}{8}.`} />
          </span>
          Искомая геометрическая вероятность равна отношению площадей двух этих треугольников:
          <span className="flex justify-center my-3">
            <InlineMath math={`P = \\dfrac{S_{\\text{благ}}}{S_{\\text{всего}}} = \\dfrac{1/8}{1/2} = \\dfrac{1}{4}.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 1 / 4.</span>
        </span>
      </span>
    )
  },







  {
    id: 19,
    title: (
      <span>
        Задача 19 (Геометрическая вероятность)
      </span>
    ),
    textBefore: (
      <span>
        Студент добирается до факультета с пересадкой. Сначала он ждет на остановке трамвай, затем на другой остановке ждет автобус. Интервал движения трамвая составляет 12 минут, интервал движения автобуса — 8 минут. Найти вероятность того, что студенту придется ждать на остановках в сумме не более 10 минут.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Введём переменные: пусть <InlineMath math={`x`} /> — время ожидания трамвая (<InlineMath math={`0 \\leq x \\leq 12`} />), а <InlineMath math={`y`} /> — время ожидания автобуса (<InlineMath math={`0 \\leq y \\leq 8`} />). 
          Областью всех возможных исходов на плоскости является прямоугольник со сторонами 12 и 8.
        </span>

        {/* Наш новый, красивый и крупный SVG-рисунок с градиентом */}
        <span className="flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 my-3">
          <svg width="280" height="220" viewBox="-30 -15 170 125" className="text-slate-800 dark:text-slate-200 fill-none font-medium text-[9px]">
            <defs>
              <linearGradient id="favGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            
            {/* Тонкая сетка для визуальной строгости */}
            <path d="M 20,0 L 20,80 M 60,0 L 60,80 M 100,0 L 100,80 M 0,40 L 120,40" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" className="text-slate-200 dark:text-slate-800" />
            
            {/* Оси со стрелками */}
            <line x1="0" y1="80" x2="140" y2="80" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="80" x2="0" y2="-10" stroke="currentColor" strokeWidth="1" />
            
            {/* Главный прямоугольник исходов */}
            <rect x="0" y="0" width="120" height="80" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-600" />
            
            {/* Благоприятная зона (Пятиугольник, отсекаемый линией x+y=10) */}
            <polygon 
              points="0,80 100,80 20,0 0,0" 
              fill="url(#favGrad)"
              stroke="#3b82f6" 
              strokeWidth="1.5" 
            />
            
            {/* Центральная точка симметрии прямоугольника (6, 4) */}
            <circle cx="60" cy="40" r="3" className="fill-rose-500 stroke-none" />
            <line x1="60" y1="40" x2="60" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" className="text-rose-400" />
            <line x1="0" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" className="text-rose-400" />

            {/* Подписи делений */}
            <text x="116" y="91" className="fill-current stroke-none">12</text>
            <text x="97" y="91" className="fill-current stroke-none">10</text>
            <text x="57" y="91" className="fill-rose-500 stroke-none font-bold">6</text>
            <text x="18" y="91" className="fill-current stroke-none">2</text>
            <text x="-10" y="4" className="fill-current stroke-none">8</text>
            <text x="-10" y="43" className="fill-rose-500 stroke-none font-bold">4</text>
            
            <text x="135" y="83" className="fill-current stroke-none font-bold">x</text>
            <text x="-8" y="-5" className="fill-current stroke-none font-bold">y</text>
            
            {/* Уравнение секущей линии */}
            <path d="M 20,0 L 100,80" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="45" y="32" className="fill-blue-600 dark:fill-blue-400 stroke-none font-semibold text-[8px] rotate-[26deg] transform origin-left">x + y = 10</text>
          </svg>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <b>Идея красивого решения через геометрический центр:</b>
          <br />
          Любой прямоугольник на плоскости центрально-симметричен относительно своей середины. Центром нашего прямоугольника исходов является точка <InlineMath math={`M(6; 4)`} /> (середина интервалов ожидания 12 и 8).
          <br /><br />
          Проверим, проходит ли линия границы благоприятных исходов <InlineMath math={`x + y = 10`} /> через этот геометрический центр. Подставим координаты точки <InlineMath math={`M`} /> в уравнение прямой:
          <span className="flex justify-center my-2">
            <InlineMath math={`6 + 4 = 10 \\implies 10 = 10.`} />
          </span>
          Тождество выполняется! Это означает, что прямая границы <InlineMath math={`x + y = 10`} /> проходит <b>строго через центр симметрии</b> нашего прямоугольника.
          <br /><br />
          Поскольку любая прямая, проходящая через центр симметрии фигуры, рассекает эту фигуру на две абсолютно равные по площади части, область над прямой (неблагоприятные исходы) и область под прямой (благоприятные исходы) имеют одинаковую площадь.
          <br /><br />
          Следовательно, площадь благоприятных исходов составляет ровно половину от общей площади прямоугольника исходов, а искомая вероятность равна:
          <span className="flex justify-center my-3">
            <InlineMath math={`P = 0.5.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 0,5.</span>
        </span>
      </span>
    )
  },


  {
    id: 20,
    title: (
      <span>
        Задача 20 (Пути на графах и перебор вариантов) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Ломоносов», 2011)</span>
      </span>
    ),
    textBefore: (
      <span>
        Города <InlineMath math={`A, \\ B, \\ C`} /> и <InlineMath math={`D`} /> соединены дорогами так, как показано на рисунке. Сколькими способами можно проделать путь из города <InlineMath math={`A`} /> в город <InlineMath math={`D`} />, побывав в каждом городе ровно по одному разу?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        {/* Исправленный утончённый SVG-граф со всеми дорогами и чёткими буквами */}
        <span className="flex justify-center py-6 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 my-3">
          <svg width="320" height="140" viewBox="0 0 320 140" className="text-slate-800 dark:text-slate-200 fill-none font-medium text-sm">
            {/* Дороги A - B (3 дороги: прямая и 2 дуги) */}
            <line x1="40" y1="70" x2="120" y2="70" stroke="currentColor" strokeWidth="1" />
            <path d="M 40,70 Q 80,35 120,70" stroke="currentColor" strokeWidth="1" />
            <path d="M 40,70 Q 80,105 120,70" stroke="currentColor" strokeWidth="1" />
            
            {/* Дороги B - C (2 дуги) */}
            <path d="M 120,70 Q 160,35 200,70" stroke="currentColor" strokeWidth="1" />
            <path d="M 120,70 Q 160,105 200,70" stroke="currentColor" strokeWidth="1" />
            
            {/* Дороги C - D (3 дороги: прямая и 2 дуги) */}
            <line x1="200" y1="70" x2="280" y2="70" stroke="currentColor" strokeWidth="1" />
            <path d="M 200,70 Q 240,35 280,70" stroke="currentColor" strokeWidth="1" />
            <path d="M 200,70 Q 240,105 280,70" stroke="currentColor" strokeWidth="1" />
            
            {/* Длинная верхняя дорога B - D (1 дуга) */}
            <path d="M 120,70 Q 200,5 280,70" stroke="currentColor" strokeWidth="1" />
            
            {/* Длинная нижняя дорога A - C (1 дуга) */}
            <path d="M 40,70 Q 120,135 200,70" stroke="currentColor" strokeWidth="1" />
            
            {/* Вершины графа */}
            <circle cx="40" cy="70" r="4" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="120" cy="70" r="4" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="200" cy="70" r="4" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            <circle cx="280" cy="70" r="4" className="fill-slate-800 dark:fill-slate-200 stroke-none" />
            
            {/* Подписи городов смещены наружу от линий */}
            <text x="18" y="75" className="fill-current stroke-none font-bold text-base">A</text>
            <text x="114" y="91" className="fill-current stroke-none font-bold text-base">B</text>
            <text x="194" y="53" className="fill-current stroke-none font-bold text-base">C</text>
            <text x="292" y="75" className="fill-current stroke-none font-bold text-base">D</text>
          </svg>
        </span>

        <span className="block">
          Внимательно подсчитаем количество дорог между городами на рисунке:
          <br />
          • Между <InlineMath math={`A`} /> и <InlineMath math={`B`} /> ведут 3 дороги.
          <br />
          • Между <InlineMath math={`B`} /> и <InlineMath math={`C`} /> ведут 2 дороги.
          <br />
          • Между <InlineMath math={`C`} /> и <InlineMath math={`D`} /> ведут 3 дороги.
          <br />
          • Напрямую между <InlineMath math={`A`} /> и <InlineMath math={`C`} /> ведёт 1 длинная нижняя дорога.
          <br />
          • Напрямую между <InlineMath math={`B`} /> и <InlineMath math={`D`} /> ведёт 1 длинная верхняя дорога.
          <br /><br />
          Нам нужно проехать из <InlineMath math={`A`} /> в <InlineMath math={`D`} />, посетив каждый город ровно по одному разу. Существует два подходящих маршрута:
          <br /><br />
          <b>1) Маршрут №1: последовательный обход по цепочке <InlineMath math={`A \\rightarrow B \\rightarrow C \\rightarrow D`} /></b>
          <br />
          Перемножаем варианты дорог на каждом этапе:
          <span className="flex justify-center my-2">
            <InlineMath math={`N_1 = 3 \\cdot 2 \\cdot 3 = 18 \\quad \\text{способов.}`} />
          </span>
          
          <b>2) Маршрут №2: обход по дугам <InlineMath math={`A \\rightarrow C \\rightarrow B \\rightarrow D`} /></b>
          <br />
          Перемножаем варианты дорог:
          <span className="flex justify-center my-2">
            <InlineMath math={`N_2 = 1 \\cdot 2 \\cdot 1 = 2 \\quad \\text{способа.}`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Другие последовательности обхода городов не удовлетворяют условию. Например, путь <InlineMath math={`A \\rightarrow B \\rightarrow D`} /> не подходит, так как оставляет город <InlineMath math={`C`} /> пропущенным.
          <br /><br />
          Сложим количество вариантов для обоих независимых маршрутов:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = N_1 + N_2 = 18 + 2 = 20.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 20.</span>
        </span>
      </span>
    )
  },




    {
    id: 21,
    title: (
      <span>
        Задача 21 <span className="text-sm font-normal text-slate-400 ml-1.5">(«Ломоносов», 2024)</span>
      </span>
    ),
    textBefore: (
      <span>
        Болельщики должны выбрать 6 лучших хоккеистов чемпионата: одного вратаря, двух защитников и трех нападающих. Среди претендентов: 2 вратаря, 5 защитников, 6 нападающих и 3 “универсала”. “Универсал” — игрок, хороший в разных ролях, который поэтому может быть выбран как в качестве защитника, так и в качестве нападающего (но не вратаря). Сколько существует способов выбрать эту шестёрку? Требуется получить числовое значение.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Выбор вратаря всегда независим: его можно выбрать <InlineMath math={`C_2^1 = 2`} /> способами.
          <br /><br />
          Для выбора остальных 5 игроков разберём случаи в зависимости от того, сколько именно “универсалов” идёт на позиции защитников:
          <br /><br />
          • <b>Случай 1 (0 универсалов в защиту):</b>
          <br />
          Все 2 защитника выбираются из 5 обычных защитников (<InlineMath math={`C_5^2 = 10`} /> способов). Все 3 универсала теперь могут претендовать только на роли нападающих. Значит, 3 нападающих выбираются из <InlineMath math={`6 + 3 = 9`} /> человек (<InlineMath math={`C_9^3 = 84`} /> способов).
          <span className="flex justify-center my-1"><InlineMath math={`N_1 = 10 \\cdot 84 = 840.`} /></span>
          
          • <b>Случай 2 (1 универсал в защиту):</b>
          <br />
          Один защитник из 5 обычных, один из 3 универсалов (<InlineMath math={`C_5^1 \\cdot C_3^1 = 5 \\cdot 3 = 15`} /> способов). Осталось 2 универсала, они идут к нападающим. Выбираем 3 нападающих из <InlineMath math={`6 + 2 = 8`} /> человек (<InlineMath math={`C_8^3 = 56`} /> способов).
          <span className="flex justify-center my-1"><InlineMath math={`N_2 = 15 \\cdot 56 = 840.`} /></span>
          
          • <b>Случай 3 (2 универсала в защиту):</b>
          <br />
          Оба защитника выбираются из 3 универсалов (<InlineMath math={`C_3^2 = 3`} /> способа). Остался 1 универсал, он идёт к нападающим. Выбираем 3 нападающих из <InlineMath math={`6 + 1 = 7`} /> человек (<InlineMath math={`C_7^3 = 35`} /> способов).
          <span className="flex justify-center my-1"><InlineMath math={`N_3 = 3 \\cdot 35 = 105.`} /></span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Сложим способы выбора полевых игроков для всех непересекающихся случаев и умножим на 2 (варианты выбора вратаря):
          <span className="flex justify-center my-3">
            <InlineMath math={`N = 2 \\cdot (N_1 + N_2 + N_3) = 2 \\cdot (840 + 840 + 105) = 2 \\cdot 1785 = 3570.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 3570.</span>
        </span>
      </span>
    )
  },


      {
    id: 22,
    title: (
      <span>
        Задача 22 (Формула включений-исключений) <span className="text-sm font-normal text-slate-400 ml-1.5">(ММО, 2006)</span>
      </span>
    ),
    textBefore: (
      <span>
        В саду у Ани и Вити росло 2006 розовых кустов. Витя полил половину всех кустов, и Аня полила половину всех кустов. При этом оказалось, что ровно три куста, самые красивые, были политы и Аней, и Витей. Сколько розовых кустов остались не политыми?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Всего в саду <InlineMath math={`2006`} /> кустов. По условию, Витя и Аня полили по половине от этого количества:
          <span className="flex justify-center my-2">
            <InlineMath math={`|V| = 2006 / 2 = 1003, \\quad |A| = 2006 / 2 = 1003.`} />
          </span>
          Количество кустов, политых обоими детьми (их пересечение), равно ровно 3:
          <span className="flex justify-center my-2">
            <InlineMath math={`|V \\cap A| = 3.`} />
          </span>
          Найдем общее количество кустов, которые были политы хотя бы кем-то одним (их объединение):
          <span className="flex justify-center my-3">
            <InlineMath math={`|V \\cup A| = |V| + |A| - |V \\cap A| = 1003 + 1003 - 3 = 2003.`} />
          </span>
          Чтобы узнать количество не политых кустов, вычтем политые кусты из общего числа:
          <span className="flex justify-center my-3">
            <InlineMath math={`N_{\\text{не полит}} = 2006 - 2003 = 3.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 3.</span>
        </span>
      </span>
    )
  },


    {
    id: 23,
    title: (
      <span>
        Задача 23 (Формула включений-исключений) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Покори Воробьёвы горы!», 2018)</span>
      </span>
    ),
    textBefore: (
      <span>
        В кружок робототехники берут только тех, кто знает математику, физику или программирование. Известно, что 8 членов кружка знают физику, 7 — математику, 11 — программирование. При этом известно, что не менее двоих знают одновременно физику и математику, не менее троих — математику и программирование, и не менее четырёх — физику и программирование. Какое наибольшее количество участников кружка может быть при этих условиях?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Пусть <InlineMath math={`F, \\ M, \\ P`} /> — множества учеников, знающих физику, математику и программирование. По условию:
          <span className="flex justify-center my-2">
            <InlineMath math={`|F| = 8, \\quad |M| = 7, \\quad |P| = 11`} />
          </span>
          <span className="flex justify-center my-2">
            <InlineMath math={`|F \\cap M| \\geq 2, \\quad |M \\cap P| \\geq 3, \\quad |F \\cap P| \\geq 4`} />
          </span>
          Запишем формулу включений-исключений для общего числа участников <InlineMath math={`N`} />:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = |F| + |M| + |P| - |F \\cap M| - |M \\cap P| - |F \\cap P| + |F \\cap M \\cap P|`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Для максимизации <InlineMath math={`N`} /> необходимо минимизировать вычитаемые парные пересечения и максимизировать прибавляемое тройное пересечение:
          <br /><br />
          • Минимальные парные пересечения: <InlineMath math={`|F \\cap M| = 2, \\ \\ |M \\cap P| = 3, \\ \\ |F \\cap P| = 4.`} />
          <br />
          • Тройное пересечение ограничено минимальной из пар: <InlineMath math={`|F \\cap M \\cap P| \\leq \\min(2, 3, 4) = 2.`} /> Берём максимум: <InlineMath math={`|F \\cap M \\cap P| = 2.`} />
          <br /><br />
          Подставляем экстремальные значения в формулу:
          <span className="flex justify-center my-3">
            <InlineMath math={`N_{\\text{max}} = 8 + 7 + 11 - 2 - 3 - 4 + 2 = 19.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 19.</span>
        </span>
      </span>
    )
  },


    {
    id: 24,
    title: (
      <span>
        Задача 24 (Принцип Дирихле в геометрии) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Покори Воробьёвы горы!», 2017)</span>
      </span>
    ),
    textBefore: (
      <span>
        В правильном 2017-угольнике провели все диагонали. Петя выбирает наугад какие-то <InlineMath math={`N`} /> диагоналей. При каком наименьшем <InlineMath math={`N`} /> среди выбранных диагоналей гарантированно найдутся две, имеющие одинаковую длину?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>

        <span className="block">
          Длина любой диагонали или стороны в правильном многоугольнике однозначно определяется количеством пропущенных между её концами вершин. 
          <br /><br />
          Выясним, сколько всего различных длин могут иметь диагонали в правильном <InlineMath math={`2017`} />-угольнике. Будем последовательно соединять фиксированную вершину с остальными, пропуская <InlineMath math={`1, \\ 2, \\ \\dots`} /> вершин:
          <br />
          • Самая короткая диагональ соединяет вершины через одну (пропущена 1 вершина).
          <br />
          • Следующая по длине диагональ соединяет вершины через две (пропущены 2 вершины).
          <br />
          • Процесс продолжается до тех пор, пока мы не дойдём до середины многоугольника.
          <br /><br />
          Так как число вершин <InlineMath math={`2017`} /> нечётно, максимальное количество пропущенных вершин до «самой длинной» диагонали равно:
          <span className="flex justify-center my-2">
            <InlineMath math={`k = \\dfrac{2017 - 3}{2} = 1007.`} />
          </span>
          Таким образом, все диагонали в данном многоугольнике могут иметь ровно <b>1007 различных длин</b> (это наши «ящики» в терминах принципа Дирихле).
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Чтобы среди выбранных диагоналей («зайцев») гарантированно нашлись две диагонали одинаковой длины, их количество должно строго превышать число возможных длин на единицу:
          <span className="flex justify-center my-3">
            <InlineMath math={`N = 1007 + 1 = 1008.`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: 1008.</span>
        </span>
      </span>
    )
  },


    {
    id: 25,
    title: (
      <span>
        Задача 25 (Геометрическая ТВ)
      </span>
    ),
    textBefore: (
      <span>
        Точка с координатой <InlineMath math={`\\xi`} /> выбирается наудачу на отрезке <InlineMath math={`[0,3]`} />, и независимо от неё точка с координатой <InlineMath math={`\\eta`} /> выбирается наудачу на отрезке <InlineMath math={`[0,2]`} />. Проверить, являются ли три события: <InlineMath math={`A = \\{\\xi + \\eta < 2\\}`} />, <InlineMath math={`B = \\{1 < \\xi < 5/2\\}`} /> и <InlineMath math={`C = \\{\\eta < 1\\}`} />, независимыми в совокупности.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Область всех исходов — прямоугольник со сторонами 3 и 2. Её площадь: <InlineMath math={`S_{\\Omega} = 3 \\cdot 2 = 6`} />.
          <br /><br />
          <b>Построение линий и областей на графике:</b>
          <br />
          • Граница события <InlineMath math={`A`} /> задаётся прямой <InlineMath math={`y = 2 - x`} />. Она проходит через точки <InlineMath math={`(2, 0)`} /> и <InlineMath math={`(0, 2)`} />, отсекая прямоугольный треугольник в левом нижнем углу.
          <br />
          • Граница события <InlineMath math={`B`} /> задаётся двумя вертикальными прямыми <InlineMath math={`x = 1`} /> и <InlineMath math={`x = 2.5`} />, образуя вертикальную полосу.
          <br />
          • Граница события <InlineMath math={`C`} /> задаётся горизонтальной прямой <InlineMath math={`y = 1`} />, образуя нижнюю половину прямоугольника.
        </span>

        {/* Координатный SVG-рисунок областей */}
        <span className="flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 my-3">
          <svg width="240" height="180" viewBox="-20 -15 150 115" className="text-slate-800 dark:text-slate-200 fill-none font-medium text-[9px]">
            <line x1="0" y1="80" x2="130" y2="80" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="80" x2="0" y2="-10" stroke="currentColor" strokeWidth="1" />
            <text x="126" y="83" className="fill-current stroke-none font-bold">x (ξ)</text>
            <text x="-12" y="-4" className="fill-current stroke-none font-bold">y (η)</text>
            
            <rect x="0" y="0" width="120" height="80" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <text x="116" y="91" className="fill-current stroke-none">3</text>
            <text x="-10" y="4" className="fill-current stroke-none">2</text>
            
            {/* Полоса B */}
            <rect x="40" y="0" width="60" height="80" fill="currentColor" opacity="0.05" className="text-blue-500" />
            <line x1="40" y1="0" x2="40" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-blue-400" />
            <line x1="100" y1="0" x2="100" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-blue-400" />
            <text x="36" y="91" className="fill-current stroke-none">1</text>
            <text x="94" y="91" className="fill-current stroke-none">5/2</text>
            
            {/* Линия C */}
            <rect x="0" y="40" width="120" height="40" fill="currentColor" opacity="0.05" className="text-amber-500" />
            <line x1="0" y1="40" x2="120" y2="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-amber-400" />
            <text x="-10" y="44" className="fill-current stroke-none">1</text>
            
            {/* Треугольник A */}
            <polygon points="0,80 80,80 0,0" stroke="#10b981" strokeWidth="1.2" fill="currentColor" opacity="0.1" className="text-emerald-500" />
            <text x="76" y="91" className="fill-current stroke-none">2</text>
            <text x="-10" y="4" className="fill-current stroke-none">2</text>
          </svg>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <b>Вычисление вероятностей и проверка:</b>
          <br />
          • <InlineMath math={`P(A) = \\dfrac{S(A)}{S_{\\Omega}} = \\dfrac{\\frac{1}{2} \\cdot 2 \\cdot 2}{6} = \\dfrac{2}{6} = \\dfrac{1}{3}`} />
          <br />
          • <InlineMath math={`P(B) = \\dfrac{S(B)}{S_{\\Omega}} = \\dfrac{1.5 \\cdot 2}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}`} />
          <br /><br />
          Для независимости в совокупности события обязаны быть попарно независимыми. Проверим пересечение <InlineMath math={`A \\cap B`} /> (общая часть треугольника <InlineMath math={`A`} /> и полосы <InlineMath math={`B`} />). 
          Это прямоугольный треугольник на отрезке <InlineMath math={`x \\in [1, 2]`} /> под линией <InlineMath math={`y = 2 - x`} />. Его катеты равны 1.
          <span className="flex justify-center my-2">
            <InlineMath math={`P(A \\cap B) = \\dfrac{\\frac{1}{2} \\cdot 1 \\cdot 1}{6} = \\dfrac{1}{12}`} />
          </span>
          Сравним полученное значение с произведением их одиночных вероятностей:
          <span className="flex justify-center my-2">
            <InlineMath math={`P(A) \\cdot P(B) = \\dfrac{1}{3} \\cdot \\dfrac{1}{2} = \\dfrac{1}{6} = \\dfrac{2}{12}`} />
          </span>
          Поскольку <InlineMath math={`P(A \\cap B) \\neq P(A)P(B)`} />, условие попарной независимости нарушено. Следовательно, события не являются независимыми в совокупности.
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">Ответ: нет, не являются.</span>
        </span>
      </span>
    )
  },



  

];