import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { InequalityNumberLine, SvgMathLabel } from './InequalityNumberLine';
import diagramStyles from './inequality-diagram.module.css';

export const section15Tasks = [
       {
    id: 1,
    title: 'Задача 1',
    mathA: '\\frac{x^3 + x^2 - x - 1}{4^{x^2} - 8 \\cdot 2^{x^2} + 16} \\ge 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Разложим числитель и знаменатель дроби на множители:</p>
        <BlockMath math={`\\frac{x^2(x + 1) - (x + 1)}{(2^{x^2} - 4)^2} \\ge 0 \\iff \\frac{(x - 1)(x + 1)^2}{(2^{x^2} - 4)^2} \\ge 0`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку квадрат любого выражения неотрицателен, перейдём к равносильной системе условий, удерживающей знак числителя и требующей неравенство знаменателя нулю:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} (x - 1)(x + 1)^2 \\ge 0 \\\\ 2^{x^2} - 4 \\neq 0 \\end{cases} \\iff \\begin{cases} (x - 1)(x + 1)^2 \\ge 0 \\\\ x^2 \\neq 2 \\end{cases} \\iff \\begin{cases} (x - 1)(x + 1)^2 \\ge 0 \\\\ x \\neq \\pm\\sqrt{2} \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Так как множитель</span>
          <InlineMath math={`(x + 1)^2 \\ge 0`} />
          <span>при любом положении переменной, раскроем систему в равносильную совокупность:</span>
        </div>

        <BlockMath math={`\\iff \\left[ \\begin{aligned} &\\begin{cases} x - 1 \\ge 0 \\\\ x \\neq \\pm\\sqrt{2} \\end{cases} \\\\ &\\begin{cases} x + 1 = 0 \\\\ x \\neq \\pm\\sqrt{2} \\end{cases} \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &\\begin{cases} x \\ge 1 \\\\ x \\neq \\sqrt{2} \\end{cases} \\\\ &x = -1 \\end{aligned} \\right.`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Значение</span>
          <InlineMath math={`x = -\\sqrt{2}`} />
          <span>автоматически отсекается из первого условия, так как оно меньше</span>
          <InlineMath math={`1`} />.
          <span>Точка</span>
          <InlineMath math={`x = \\sqrt{2}`} />
          <span>попадает внутрь луча</span>
          <InlineMath math={`x \\ge 1`} />
          <span>и разбивает его, выкалывая внутреннее значение. Получаем финальное множество решений:</span>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\{-1\\} \\cup [1; \\, \\sqrt{2}) \\cup (\\sqrt{2}; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
      {
    id: 2,
    title: 'Задача 2',
    mathA: '\\frac{3^{3x} - 15 \\cdot 9^x + 7 \\cdot 3^{x+2} - 81}{x - 1} \\le 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Преобразуем числитель дроби, используя свойства степеней:</p>
        <BlockMath math={`3^{3x} - 15 \\cdot 3^{2x} + 7 \\cdot 9 \\cdot 3^x - 81 = 3^{3x} - 15 \\cdot 3^{2x} + 63 \\cdot 3^x - 81`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной для числителя: пусть</span>
          <InlineMath math={`t = 3^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Тогда числитель принимает вид кубического многочлена:</span>
        </div>
        <BlockMath math={`t^3 - 15t^2 + 63t - 81`} />
        
        <p>Разложим его на множители методом группировки слагаемых:</p>
        <BlockMath math={`t^3 - 9t^2 - 6t^2 + 54t + 9t - 81 = t^2(t - 9) - 6t(t - 9) + 9(t - 9) = (t - 9)(t^2 - 6t + 9) = (t - 9)(t - 3)^2`} />
        
        <p>Выполним обратную замену в числителе:</p>
        <BlockMath math={`(3^x - 3^2)(3^x - 3^1)^2`} />

        <p>Перейдём к равносильной системе условий, удерживающей знак всей дроби и ограничение знаменателя:</p>
        <BlockMath math={`\\frac{(3^x - 3^2)(3^x - 3)^2}{x - 1} \\le 0 \\iff \\begin{cases} (3^x - 3^2)(3^x - 3)^2(x - 1) \\le 0 \\\\ x - 1 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку множитель</span>
          <InlineMath math={`(3^x - 3)^2 \\ge 0`} />
          <span>при любом положении переменной, он не влияет на знак строгого неравенства, но даёт изолированное решение при равенстве нулю. Перейдём к равносильной совокупности систем:</span>
        </div>

        <BlockMath math={`\\iff \\left[ \\begin{aligned} &\\begin{cases} (3^x - 3^2)(x - 1) \\le 0 \\\\ x \\neq 1 \\end{cases} \\\\ &\\begin{cases} 3^x - 3 = 0 \\\\ x \\neq 1 \\end{cases} \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &\\begin{cases} (x - 2)(x - 1) \\le 0 \\\\ x \\neq 1 \\end{cases} \\\\ &\\begin{cases} x = 1 \\\\ x \\neq 1 \\end{cases} \\end{aligned} \\right.`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Во второй системе совокупности получаем противоречие</span>
          <InlineMath math={`(x = 1 \\text{ и } x \\neq 1)`} />,
          <span>значит, она не даёт решений. В первой системе множители знаков показательной функции заменены на разность показателей в силу монотонного возрастания основания 3. Система упрощается:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} (x - 2)(x - 1) \\le 0 \\\\ x \\neq 1 \\end{cases}`} />

        <p>Изобразим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ С КРЫШАМИ И ШТРИХОВКОЙ ДЛЯ ЗАДАЧИ 2 */}
        <InequalityNumberLine points={[{ label: "1", closed: false }, { label: "2", closed: true }]} selected={[[1, 2]]} />

        <p>Пересечение условий даёт итоговый полуинтервал решений:</p>
        <BlockMath math={`\\iff 1 < x \\le 2`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(1; \\, 2]`} />
        </div>
      </div>
    )
  },

    {
    id: 3,
    title: 'Задача 3',
    mathA: '\\frac{\\log_3(9x) \\cdot \\log_4(64x)}{5x^2 - |x|} \\le 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Перепишем аргументы логарифмов в виде разностей, чтобы применить метод рационализации:</span>
          <InlineMath math={`\\log_3(9x) = \\log_3 x + 2 = \\log_3 x - \\log_3\\left(\\frac{1}{9}\\right)`} />
          <span>и</span>
          <InlineMath math={`\\log_4(64x) = \\log_4 x + 3 = \\log_4 x - \\log_4\\left(\\frac{1}{64}\\right)`} />.
        </div>

        <p>Перейдём к равносильной системе, включающей ОДЗ логарифмов и знак всей дроби:</p>
        <BlockMath math={`\\begin{cases} \\frac{\\left(\\log_3 x - \\log_3 \\frac{1}{9}\\right)\\left(\\log_4 x - \\log_4 \\frac{1}{64}\\right)}{5x^2 - |x|} \\le 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Так как по ОДЗ</span>
          <InlineMath math={`x > 0`} />,
          <span>то модуль в знаменателе раскрывается однозначно:</span>
          <InlineMath math={`|x| = x`} />,
          <span>а сам знаменатель разлагается как</span>
          <InlineMath math={`x(5x - 1)`} />.
          <span>Применим метод замены множителей к числителю: знаки разностей логарифмов совпадают со знаками разностей их аргументов. Система принимает вид:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\frac{\\left(x - \\frac{1}{9}\\right)\\left(x - \\frac{1}{64}\\right)}{x(5x - 1)} \\le 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{\\left(x - \\frac{1}{9}\\right)\\left(x - \\frac{1}{64}\\right)}{5x - 1} \\le 0 \\\\ x > 0 \\\\ x \\neq \\frac{1}{5} \\end{cases}`} />

        <p>Решим полученную систему методом интервалов. Нанесём ОДЗ и знаки дроби на числовую прямую в виде строгих геометрических дуг:</p>

        {/* 🌌 ИСПРАВЛЕНО: КРИСТАЛЬНО ЧИСТЫЙ ГРАФИЧЕСКИЙ ОТБОР С ДУГАМИ И ШТРИХОВКОЙ ДЛЯ ЗАДАЧИ 3 */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "\\frac{1}{64}", closed: true }, { label: "\\frac{1}{9}", closed: true }, { label: "\\frac{1}{5}", closed: false }]} selected={[[1, 2], [3, 4]]} />

        <p>Объединяя все промежутки, где выполняются оба системных требования, находим финальный ответ неравенства:</p>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(0; \\, \\frac{1}{64}\\right] \\cup \\left[\\frac{1}{9}; \\, \\frac{1}{5}\\right)`} />
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'Задача 4',
    mathA: '\\frac{2}{3^x + 27} \\ge \\frac{1}{3^x - 27}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Перенесём все члены неравенства в левую часть и приведём дроби к общему знаменателю:</p>
        <BlockMath math={`\\frac{2}{3^x + 27} - \\frac{1}{3^x - 27} \\ge 0 \\iff \\frac{2(3^x - 27) - (3^x + 27)}{(3^x + 27)(3^x - 27)} \\ge 0`} />
        <BlockMath math={`\\iff \\frac{2 \\cdot 3^x - 54 - 3^x - 27}{(3^x + 27)(3^x - 27)} \\ge 0 \\iff \\frac{3^x - 81}{(3^x + 27)(3^x - 27)} \\ge 0`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Представим числа в виде степеней с основанием 3:</span>
          <InlineMath math={`81 = 3^4`} />
          <span>и</span>
          <InlineMath math={`27 = 3^3`} />.
          <span>Заметим также, что множитель</span>
          <InlineMath math={`3^x + 27 > 0`} />
          <span>при любом значении переменной, поэтому он не влияет на знак дроби. Получаем равносильную систему:</span>
        </div>

        <BlockMath math={`\\begin{cases} \\frac{3^x - 3^4}{3^x - 3^3} \\ge 0 \\\\ 3^x - 3^3 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Так как показательная функция с основанием</span>
          <InlineMath math={`3 > 1`} />
          <span>монотонно возрастает, знаки разностей</span>
          <InlineMath math={`(3^x - 3^4)`} />
          <span>и</span>
          <InlineMath math={`(3^x - 3^3)`} />
          <span>совпадают со знаками разностей их показателей. Система принимает вид линейно-рациональной:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\frac{x - 4}{x - 3} \\ge 0 \\\\ x \\neq 3 \\end{cases} \\iff \\begin{cases} (x - 4)(x - 3) \\ge 0 \\\\ x \\neq 3 \\end{cases}`} />

        <p>Разложим полученное системное условие на числовой прямой в совокупность интервалов методом интервалов:</p>

        {/* 🌌 ИСПРАВЛЕНО: ДВУХСЛОЙНЫЙ ЧЕРТЁЖ С КРЫШАМИ И ШТРИХОВКОЙ ДЛЯ ЗАДАЧИ 4 */}
        <InequalityNumberLine points={[{ label: "3", closed: false }, { label: "4", closed: true }]} selected={[[0, 1], [2, 3]]} />

        <p>Итоговая совокупность равносильных переходов даёт финальное множество решений неравенства:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &x < 3 \\\\ &x \\ge 4 \\end{aligned} \\right.`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, 3) \\cup [4; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: 'Задача 5',
    mathA: 'x^2 \\log_{512}(x + 7) \\le \\log_2(x^2 + 14x + 49)',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Преобразуем обе части неравенства к основанию 2. Заметим, что</span>
          <InlineMath math={`512 = 2^9`} />,
          <span>откуда</span>
          <InlineMath math={`\\log_{512}(x + 7) = \\frac{1}{9}\\log_2(x + 7)`} />.
          <span>В правой части выделим полный квадрат:</span>
          <InlineMath math={`x^2 + 14x + 49 = (x + 7)^2`} />.
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <span>Вынося показатель степени 2 перед знаком логарифма, мы обязаны удержать условие строго положительного аргумента. Запишем исходное неравенство в виде равносильной системы:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\frac{x^2}{9}\\log_2(x + 7) \\le 2\\log_2(x + 7) \\\\ x + 7 > 0 \\end{cases} \\iff \\begin{cases} \\left(\\frac{x^2}{9} - 2\\right)\\log_2(x + 7) \\le 0 \\\\ x > -7 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{1}{9}(x^2 - 18)\\log_2(x + 7) \\le 0 \\\\ x > -7 \\end{cases} \\iff \\begin{cases} (x - 3\\sqrt{2})(x + 3\\sqrt{2})\\log_2(x + 7) \\le 0 \\\\ x > -7 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей к логарифму: знак выражения</span>
          <InlineMath math={`\\log_2(x + 7)`} />
          <span>совпадает со знаком разности его аргумента и единицы, то есть</span>
          <InlineMath math={`(x + 7 - 1) = (x + 6)`} />:
        </div>

        <BlockMath math={`\\iff \\begin{cases} (x - 3\\sqrt{2})(x + 3\\sqrt{2})(x + 6) \\le 0 \\\\ x > -7 \\end{cases}`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ДВУХСЛОЙНЫЙ SVG ЧЕРТЁЖ ДЛЯ ЗАДАЧИ 5 С ШТРИХОВКОЙ И КРЫШАМИ */}
        <InequalityNumberLine points={[{ label: "-7", closed: false }, { label: "-6", closed: true }, { label: "-3\\sqrt{2}", closed: true }, { label: "3\\sqrt{2}", closed: true }]} selected={[[1, 2], [3, 4]]} />

        <p>Сводя пересечения условий в итоговые промежутки, получаем окончательный ответ неравенства:</p>
        <BlockMath math={`\\iff x \\in (-7; \\, -6] \\cup [-3\\sqrt{2}; \\, 3\\sqrt{2}]`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-7; \\, -6] \\cup [-3\\sqrt{2}; \\, 3\\sqrt{2}]`} />
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: 'Задача 6',
    mathA: '\\log_2^2(25 - x^2) - 7\\log_2(25 - x^2) + 12 \\ge 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Пусть</span>
          <InlineMath math={`t = \\log_2(25 - x^2)`} />.
          <span>Тогда логарифмическая часть сводится к квадратному трёхчлену:</span>
        </div>
        <BlockMath math={`t^2 - 7t + 12 \\ge 0 \\implies (t - 3)(t - 4) \\ge 0`} />
        
        <p>Решим вспомогательное неравенство относительно переменной <InlineMath math={`t`} /> методом интервалов:</p>

        {/* 🌌 SVG ЧЕРТЁЖ ДЛЯ МЕТОДА ИНТЕРВАЛОВ ПО ПЕРЕМЕННОЙ t */}
        <InequalityNumberLine points={[{ label: "3", closed: true }, { label: "4", closed: true }]} selected={[[0, 1], [2, 3]]} variable="t" />

        <p>Получаем совокупность условий: <InlineMath math={`t \\le 3`} /> или <InlineMath math={`t \\ge 4`} />. Выполним обратную замену с учётом ОДЗ логарифма:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_2(25 - x^2) \\le 3 \\\\ &\\log_2(25 - x^2) \\ge 4 \\end{aligned} \\right. \\\\ 25 - x^2 > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &25 - x^2 \\le 2^3 \\\\ &25 - x^2 \\ge 2^4 \\end{aligned} \\right. \\\\ 25 - x^2 > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &25 - x^2 \\le 8 \\\\ &25 - x^2 \\ge 16 \\end{aligned} \\right. \\\\ x^2 < 25 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x^2 \\ge 17 \\\\ &x^2 \\le 9 \\end{aligned} \\right. \\\\ -5 < x < 5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим квадратичные условия на линейные скобки, чтобы получить строгую итоговую систему ограничений:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &(x - \\sqrt{17})(x + \\sqrt{17}) \\ge 0 \\\\ &(x - 3)(x + 3) \\le 0 \\end{aligned} \\right. \\\\ -5 < x < 5 \\end{cases}`} />

        <p>Разложим полученное системное условие для переменной <InlineMath math={`x`} /> на числовой прямой методом интервалов:</p>

        {/* 🌌 ДВУХСЛОЙНЫЙ SVG ЧЕРТЁЖ ДЛЯ ПЕРЕМЕННОЙ x С ШТРИХОВКОЙ И КРЫШАМИ */}
        <InequalityNumberLine points={[{ label: "-5", closed: false }, { label: "-\\sqrt{17}", closed: true }, { label: "-3", closed: true }, { label: "3", closed: true }, { label: "\\sqrt{17}", closed: true }, { label: "5", closed: false }]} selected={[[1, 2], [3, 4], [5, 6]]} />

        <p>Находя пересечение множеств на числовой прямой, получаем окончательное решение исходного неравенства:</p>
        <BlockMath math={`\\iff x \\in (-5; \\, -\\sqrt{17}] \\cup [-3; \\, 3] \\cup [\\sqrt{17}; \\, 5)`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-5; \\, -\\sqrt{17}] \\cup [-3; \\, 3] \\cup [\\sqrt{17}; \\, 5)`} />
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: 'Задача 7',
    // 👍 ОПЕЧАТКА ИСПРАВЛЕНА: \frac восстановлен полностью
    mathA: '\\frac{\\log_2(2 - x) - \\log_2(x + 1)}{\\log_2^2 x^2 + \\log_2 x^4 + 1} \\ge 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>В знаменателе стоят логарифмы от степеней x, поэтому сначала учитываем <InlineMath math={`x \\ne 0`} />. Преобразуем знаменатель:</p>
        <BlockMath math={`\\log_2^2(x^2)+\\log_2(x^4)+1=(2\\log_2|x|+1)^2`} />
        <p>Он положителен, если определён и не равен нулю. Ограничения исходного выражения:</p>
        <BlockMath math={`-1<x<2,\\qquad x\\ne 0,\\qquad x\\ne\\pm\\frac{\\sqrt{2}}{2}.`} />
        <p>Знак дроби определяется числителем; поскольку логарифм по основанию 2 возрастает,</p>
        <BlockMath math={`\\log_2(2-x)-\\log_2(x+1)\\ge 0 \\iff 2-x\\ge x+1 \\iff x\\le\\frac12.`} />
        <p>Пересекаем с ОДЗ. Положительная точка <InlineMath math={`\\sqrt{2}/2`} /> лежит правее <InlineMath math={`1/2`} /> и на ответ не влияет.</p>
        <InequalityNumberLine points={[{ label: '-1', closed: false }, { label: '-\\frac{\\sqrt{2}}{2}', closed: false }, { label: '0', closed: false }, { label: '\\frac12', closed: true }]} selected={[[1,2],[2,3],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\left(-1;-\\frac{\\sqrt{2}}{2}\\right)\\cup\\left(-\\frac{\\sqrt{2}}{2};0\\right)\\cup\\left(0;\\frac12\\right]`} /></div>
      </div>
    )
  },
  {
    id: 8,
    title: 'Задача 8',
    mathA: '\\log_5((3 - x)(x^2 + 2)) \\ge \\log_5(x^2 - 7x + 12) + \\log_5(5 - x)',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используем свойство суммы логарифмов с одинаковым основанием. Перейдём к равносильной системе, включающей ограничения на аргументы всех логарифмов исходного выражения:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_5((3 - x)(x^2 + 2)) \\ge \\log_5((x^2 - 7x + 12)(5 - x)) \\\\ (3 - x)(x^2 + 2) > 0 \\\\ x^2 - 7x + 12 > 0 \\\\ 5 - x > 0 \\end{cases}`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим квадратный трёхчлен на множители:</span>
          <InlineMath math={`x^2 - 7x + 12 = (x - 3)(x - 4)`} />.
          <span>Заметим, что выражение</span>
          <InlineMath math={`x^2 + 2 > 0`} />
          <span>при любом положении переменной. Упростим систему ограничений:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\log_5((3 - x)(x^2 + 2)) \\ge \\log_5((x - 3)(x - 4)(5 - x)) \\\\ 3 - x > 0 \\\\ (x - 3)(x - 4) > 0 \\\\ x < 5 \\end{cases} \\iff \\begin{cases} \\log_5((3 - x)(x^2 + 2)) \\ge \\log_5((3 - x)(4 - x)(5 - x)) \\\\ x < 3 \\\\ \\left[ \\begin{aligned} &x < 3 \\\\ &x > 4 \\end{aligned} \\right. \\\\ x < 5 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\log_5((3 - x)(x^2 + 2)) \\ge \\log_5((3 - x)(4 - x)(5 - x)) \\\\ x < 3 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания логарифмической функции с основанием</span>
          <InlineMath math={`5 > 1`} />,
          <span>перейдём от сравнения логарифмов к сравнению их аргументов:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} (3 - x)(x^2 + 2) \\ge (3 - x)(4 - x)(5 - x) \\\\ x < 3 \\end{cases}`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Так как по условию системы</span>
          <InlineMath math={`x < 3`} />,
          <span>множитель</span>
          <InlineMath math={`(3 - x)`} />
          <span>гарантированно строго положителен. Мы имеем право разделить на него обе части неравенства без изменения знака:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} x^2 + 2 \\ge (4 - x)(5 - x) \\\\ x < 3 \\end{cases} \\iff \\begin{cases} x^2 + 2 \\ge 20 - 9x + x^2 \\\\ x < 3 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} 9x \\ge 18 \\\\ x < 3 \\end{cases} \\iff \\begin{cases} x \\ge 2 \\\\ x < 3 \\end{cases} \\iff 2 \\le x < 3`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[2; \\, 3)`} />
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: 'Задача 9',
    mathA: '\\frac{2\\log_3(9x) - 13}{\\log_3^2 x - \\log_3 x^4} \\le 1',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используем свойства логарифма для преобразования выражений в числителе и знаменателе:</p>
        <BlockMath math={`2\\log_3(9x) - 13 = 2(\\log_3 9 + \\log_3 x) - 13 = 2(2 + \\log_3 x) - 13 = 2\\log_3 x - 9`} />
        <BlockMath math={`\\log_3^2 x - \\log_3 x^4 = \\log_3^2 x - 4\\log_3 x`} />

        <p>Перенесём единицу в левую часть и запишем неравенство в виде равносильной системы с учётом ОДЗ:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{2\\log_3 x - 9}{\\log_3^2 x - 4\\log_3 x} - 1 \\le 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{2\\log_3 x - 9 - \\log_3^2 x + 4\\log_3 x}{\\log_3 x(\\log_3 x - 4)} \\le 0 \\\\ x > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{-\\log_3^2 x + 6\\log_3 x - 9}{\\log_3 x(\\log_3 x - 4)} \\le 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{\\log_3^2 x - 6\\log_3 x + 9}{\\log_3 x(\\log_3 x - 4)} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Свернём числитель по формуле квадрата разности:</span>
          <InlineMath math={`\\log_3^2 x - 6\\log_3 x + 9 = (\\log_3 x - 3)^2`} />.
          <span>Пусть</span>
          <InlineMath math={`t = \\log_3 x`} />.
          <span>Система принимает вид относительно переменной</span>
          <InlineMath math={`t`} />:
        </div>

        <BlockMath math={`\\begin{cases} \\frac{(t - 3)^2}{t(t - 4)} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <p>Решим вспомогательное рациональное неравенство для переменной <InlineMath math={`t`} /> методом интервалов:</p>

        {/* 🌌 SVG ЧЕРТЁЖ ДЛЯ МЕТОДА ИНТЕРВАЛОВ ПО ПЕРЕМЕННОЙ t */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "3", closed: true }, { label: "4", closed: false }]} selected={[[0, 1], [3, 4]]} variable="t" />

        <p>Получаем совокупность для переменной <InlineMath math={`t`} stroke="currentColor" />: <InlineMath math={`t < 0`} />, <InlineMath math={`t = 3`} /> или <InlineMath math={`t > 4`} />. Перейдём к обратной замене:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_3 x < 0 \\\\ &\\log_3 x = 3 \\\\ &\\log_3 x > 4 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x < 1 \\\\ &x = 27 \\\\ &x > 81 \\end{aligned} \\right. \\\\ x > 0 \\end{cases}`} />

        <p>Разложим полученное финальное условие для переменной <InlineMath math={`x`} /> на числовой прямой методом интервалов:</p>

        {/* 🌌 ДВУХСЛОЙНЫЙ SVG ЧЕРТЁЖ ДЛЯ ПЕРЕМЕННОЙ x С ШТРИХОВКОЙ И КРЫШАМИ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "1", closed: false }, { label: "27", closed: true }, { label: "81", closed: false }]} selected={[[1, 2], [4, 5]]} />

        <p>Объединяя интервалы пересечения и изолированную точку, получаем финальный ответ:</p>
        <BlockMath math={`\\iff x \\in (0; \\, 1) \\cup \\{27\\} \\cup (81; \\, +\\infty)`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(0; \\, 1) \\cup \\{27\\} \\cup (81; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: 'Задача 10',
    mathA: '\\frac{4}{\\log_2 x} - \\log_2\\left(\\frac{4}{x}\\right) \\le \\frac{38}{\\log_2 x^2}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используем свойства логарифма для преобразования членов неравенства:</p>
        <BlockMath math={`\\log_2\\left(\\frac{4}{x}\\right) = \\log_2 4 - \\log_2 x = 2 - \\log_2 x`} />
        <BlockMath math={`\\log_2 x^2 = 2\\log_2 |x|`} />
        
        <p>Перенесём все члены влево и перейдём к равносильной системе с учётом ограничений на логарифмы:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{4}{\\log_2 x} - (2 - \\log_2 x) - \\frac{38}{2\\log_2 x} \\le 0 \\\\ x > 0 \\\\ \\log_2 x \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{4}{\\log_2 x} - 2 + \\log_2 x - \\frac{19}{\\log_2 x} \\le 0 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\log_2 x - 2 - \\frac{15}{\\log_2 x} \\le 0 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Пусть</span>
          <InlineMath math={`t = \\log_2 x`} />.
          <span>Приведём к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\frac{t^2 - 2t - 15}{t} \\le 0 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases} \\iff \\begin{cases} \\frac{(t - 5)(t + 3)}{t} \\le 0 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}`} />
        
        <p>Решая рациональное неравенство относительно переменной <InlineMath math={`t`} />, получаем совокупность простейших лучей:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t \\le -3 \\\\ &0 < t \\le 5 \\end{aligned} \\right. \\\\ x > 0 \\\\ x \\neq 1 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_2 x \\le -3 \\\\ &0 < \\log_2 x \\le 5 \\end{aligned} \\right. \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}`} />
        
        <p>Потенциируя логарифмические условия по основанию <InlineMath math={`2 > 1`} />, переходим к линейным промежуткам:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x \\le \\frac{1}{8} \\\\ &1 < x \\le 32 \\end{aligned} \\right. \\\\ x > 0 \\\\ x \\neq 1 \\end{cases} \\iff \\left[ \\begin{aligned} &0 < x \\le \\frac{1}{8} \\\\ &1 < x \\le 32 \\end{aligned} \\right.`} />

        <p>Объединяя полученные интервалы, находим финальное множество решений:</p>
        <BlockMath math={`\\iff x \\in \\left(0; \\, \\frac{1}{8}\\right] \\cup (1; \\, 32]`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(0; \\, \\frac{1}{8}\\right] \\cup (1; \\, 32]`} />
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: 'Задача 11',
    mathA: '\\log_5(3x + 1) + \\log_5\\left(\\frac{1}{72x^2} + 1\\right) \\ge \\log_5\\left(\\frac{1}{24x} + 1\\right)',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>Запишем ОДЗ, учитывая знак дроби под правым логарифмом:</p>
        <BlockMath math={`3x+1>0,\\qquad x\\ne0,\\qquad \\frac{1+24x}{24x}>0 \\iff x\\in\\left(-\\frac13;-\\frac1{24}\\right)\\cup(0;+\\infty).`} />
        <p>На ОДЗ объединим логарифмы слева и сравним аргументы, поскольку основание 5 больше единицы:</p>
        <BlockMath math={`\\frac{(3x+1)(72x^2+1)}{72x^2}\\ge\\frac{24x+1}{24x} \\iff \\frac{216x^3+1}{72x^2}\\ge0.`} />
        <p>Знаменатель положителен, а <InlineMath math={`216x^3+1=(6x+1)(36x^2-6x+1)`} />; второй множитель всегда положителен. Значит, <InlineMath math={`x\\ge-\\frac16`} />. Пересекаем это условие с ОДЗ.</p>
        <InequalityNumberLine points={[{ label: '-\\frac16', closed: true }, { label: '-\\frac1{24}', closed: false }, { label: '0', closed: false }]} selected={[[1,2],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\left[-\\frac16;-\\frac1{24}\\right)\\cup(0;+\\infty)`} /></div>
      </div>
    )
  },
  {
    id: 12,
    title: 'Задача 12',
    mathA: '\\log_5\\left(\\frac{2}{x} + 2\\right) - \\log_5(x + 3) \\le \\log_5\\left(\\frac{x + 6}{x^2}\\right)',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>Запишем область допустимых значений:</p>
        <BlockMath math={`\\frac{2(x+1)}x>0,\\quad x+3>0,\\quad \\frac{x+6}{x^2}>0 \\iff x\\in(-3;-1)\\cup(0;+\\infty).`} />
        <p>На ОДЗ объединим логарифмы и сравним их аргументы:</p>
        <BlockMath math={`\\frac{2(x+1)}{x(x+3)}\\le\\frac{x+6}{x^2} \\iff \\frac{2x(x+1)-(x+6)(x+3)}{x^2(x+3)}\\le0.`} />
        <p>При приведении к общему знаменателю первое слагаемое домножается на <InlineMath math={`x`} />. Раскроем скобки:</p>
        <BlockMath math={`\\frac{x^2-7x-18}{x^2(x+3)}=\\frac{(x-9)(x+2)}{x^2(x+3)}\\le0.`} />
        <p>На ОДЗ знаменатель положителен, поэтому получаем <InlineMath math={`-2\\le x\\le9`} />. Пересечение с ОДЗ даёт:</p>
        <InequalityNumberLine points={[{ label: '-2', closed: true }, { label: '-1', closed: false }, { label: '0', closed: false }, { label: '9', closed: true }]} selected={[[1,2],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`[-2;-1)\\cup(0;9]`} /></div>
      </div>
    )
  },
  {
    id: 13,
    title: 'Задача 13',
    mathA: '\\frac{\\log_2 x^2 - \\log_3 x^2}{\\log_6^2(2x^2 - 10x + 12{,}5) + 1} \\le 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Проанализируем знаменатель дроби. Рассмотрим выражение, стоящее под знаком логарифма:</p>
        <BlockMath math={`2x^2 - 10x + 12{,}5 = 2\\left(x^2 - 5x + 6{,}25\\right) = 2(x - 2{,}5)^2`} />
        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку квадрат любого вещественного числа неотрицателен, выражение</span>
          <InlineMath math={`2(x - 2{,}5)^2 \\ge 0`} />.
          <span>Знаменатель дроби содержит квадрат логарифма плюс единицу:</span>
          <InlineMath math={`\\log_6^2(2x^2 - 10x + 12{,}5) + 1`} />.
          <span>Данная сумма всегда строго положительна (не меньше 1) при всех допустимых значениях переменной и не влияет на знак неравенства.</span>
        </div>

        <p>Перейдём к равносильной системе условий, удерживающей знак числителя и ОДЗ логарифмов:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_2 x^2 - \\log_3 x^2 \\le 0 \\\\ x^2 > 0 \\\\ 2x^2 - 10x + 12{,}5 > 0 \\end{cases} \\iff \\begin{cases} 2\\log_2 |x| - 2\\log_3 |x| \\le 0 \\\\ x \\neq 0 \\\\ 2(x - 2{,}5)^2 > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\log_2 |x| - \\log_3 |x| \\le 0 \\\\ x \\neq 0 \\\\ x \\neq 2{,}5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Перейдём к одному основанию в числителе по формуле перехода:</span>
          <InlineMath math={`\\log_3 |x| = \\frac{\\log_2 |x|}{\\log_2 3}`} />.
          <span>Вынесем общий множитель за скобки:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\log_2 |x| \\cdot \\left(1 - \\frac{1}{\\log_2 3}\\right) \\le 0 \\\\ x \\neq 0 \\\\ x \\neq 2{,}5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Так как основание</span>
          <InlineMath math={`3 > 2`} />,
          <span>то логарифм</span>
          <InlineMath math={`\\log_2 3 > 1`} />,
          <span>следовательно, дробь</span>
          <InlineMath math={`\\frac{1}{\\log_2 3} < 1`} />.
          <span>Значит, постоянный числовой множитель в скобках гарантированно положителен:</span>
          <InlineMath math={`1 - \\frac{1}{\\log_2 3} > 0`} />.
          <span>Разделим на него обе части неравенства без изменения знака:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\log_2 |x| \\le 0 \\\\ x \\neq 0 \\\\ x \\neq 2{,}5 \\end{cases} \\iff \\begin{cases} |x| \\le 1 \\\\ x \\neq 0 \\\\ x \\neq 2{,}5 \\end{cases}`} />
        
        <p>Раскрывая ограничение модуля, получаем пересечение интервалов:</p>
        <BlockMath math={`\\iff \\begin{cases} -1 \\le x \\le 1 \\\\ x \\neq 0 \\\\ x \\neq 2{,}5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Выколотая точка знаменателя</span>
          <InlineMath math={`x = 2{,}5`} />
          <span>лежит строго правее полученного отрезка</span>
          <InlineMath math={`[-1; \\, 1]`} />
          <span>и не влияет на финальный ответ. Точка</span>
          <InlineMath math={`x = 0`} />
          <span>разбивает отрезки, выкалывая внутреннее значение. Получаем окончательное решение:</span>
        </div>
        <BlockMath math={`\\iff x \\in [-1; \\, 0) \\cup (0; \\, 1]`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[-1; \\, 0) \\cup (0; \\, 1]`} />
        </div>
      </div>
    )
  },
  {
    id: 14,
    title: 'Задача 14',
    mathA: '\\log_4((x - 5)(x^2 - 2x - 15)) + 1 \\ge 0{,}5\\log_2(x - 5)^2',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>Разложим квадратный трёхчлен: <InlineMath math={`x^2-2x-15=(x-5)(x+3)`} />. Поэтому аргумент первого логарифма равен <InlineMath math={`(x-5)^2(x+3)`} />, и ОДЗ имеет вид</p>
        <BlockMath math={`x>-3,\\qquad x\\ne5.`} />
        <p>Правая часть равна <InlineMath math={`\\log_4(x-5)^2`} />. На ОДЗ можно разделить аргументы логарифмов на положительный множитель <InlineMath math={`(x-5)^2`} />:</p>
        <BlockMath math={`\\log_4\\bigl((x-5)^2(x+3)\\bigr)+1\\ge\\log_4(x-5)^2 \\iff \\log_4(x+3)\\ge-1.`} />
        <p>Основание больше единицы, следовательно, <InlineMath math={`x+3\\ge\\frac14`} />, то есть <InlineMath math={`x\\ge-\\frac{11}4`} />. Выкалываем запрещённую точку 5.</p>
        <InequalityNumberLine points={[{ label: '-\\frac{11}4', closed: true }, { label: '5', closed: false }]} selected={[[1,2],[2,3]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\left[-\\frac{11}4;5\\right)\\cup(5;+\\infty)`} /></div>
      </div>
    )
  },
  {
    id: 15,
    title: 'Задача 15',
    mathA: '\\frac{\\log_3(81x)}{\\log_3 x - 4} + \\frac{\\log_3 x - 4}{\\log_3(81x)} \\ge \\frac{24 - \\log_3(x^8)}{\\log_3^2 x - 16}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используем свойства логарифма для упрощения элементов неравенства:</p>
        <BlockMath math={`\\log_3(81x) = \\log_3 81 + \\log_3 x = \\log_3 x + 4`} />
        <BlockMath math={`\\log_3(x^8) = 8\\log_3 |x|`} />
        
        <p>Перенесем все члены влево и перейдём к равносильной системе условий с ОДЗ:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{\\log_3 x + 4}{\\log_3 x - 4} + \\frac{\\log_3 x - 4}{\\log_3 x + 4} - \\frac{24 - 8\\log_3 x}{\\log_3^2 x - 16} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Заметим, что общий знаменатель равен</span>
          <InlineMath math={`\\log_3^2 x - 16 = (\\log_3 x - 4)(\\log_3 x + 4)`} />.
          <span>Пусть</span>
          <InlineMath math={`t = \\log_3 x`} />.
          <span>Приведём дроби к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\frac{(t + 4)^2 + (t - 4)^2 - (24 - 8t)}{(t - 4)(t + 4)} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{t^2 + 8t + 16 + t^2 - 8t + 16 - 24 + 8t}{(t - 4)(t + 4)} \\ge 0 \\\\ x > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{2t^2 + 8t + 8}{(t - 4)(t + 4)} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{2(t + 2)^2}{(t - 4)(t + 4)} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Решим рациональное неравенство относительно переменной</span>
          <InlineMath math={`t`} />.
          <span>Поскольку множитель</span>
          <InlineMath math={`(t + 2)^2 \\ge 0`} />
          <span>при любом положении переменной, он не влияет на знак строгого неравенства, но даёт изолированное решение при равенстве нулю. Раскроем систему в равносильную совокупность:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t < -4 \\\\ &t = -2 \\\\ &t > 4 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_3 x < -4 \\\\ &\\log_3 x = -2 \\\\ &\\log_3 x > 4 \\end{aligned} \\right. \\\\ x > 0 \\end{cases}`} />

        <p>Потенциируя логарифмические условия по основанию 3 &gt; 1, переходим к переменной x:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x < \\frac{1}{81} \\\\ &x = \\frac{1}{9} \\\\ &x > 81 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\left[ \\begin{aligned} &0 < x < \\frac{1}{81} \\\\ &x = \\frac{1}{9} \\\\ &x > 81 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ИСПРАВЛЕНО: ШТРИХОВКА СТРОГО МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "\\frac{1}{81}", closed: false }, { label: "\\frac{1}{9}", closed: true }, { label: "81", closed: false }]} selected={[[1, 2], [4, 5]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(0; \\, \\frac{1}{81}\\right) \\cup \\left\\{\\frac{1}{9}\\right\\} \\cup (81; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 16,
    title: 'Задача 16',
    mathA: '1 + \\frac{5}{\\log_4 x - 3} + \\frac{6}{\\log_4^2 x - \\log_4(64x^6) + 12} \\ge 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Упростим логарифмическое выражение во втором знаменателе дроби:</p>
        <BlockMath math={`\\log_4(64x^6) = \\log_4 64 + \\log_4 x^6 = 3 + 6\\log_4 |x|`} />
        
        <p>Перейдём к равносильной системе условий вместе с ОДЗ логарифма (где по условию <InlineMath math={`x > 0`} />, следовательно, <InlineMath math={`|x| = x`} />):</p>
        <BlockMath math={`\\iff \\begin{cases} 1 + \\frac{5}{\\log_4 x - 3} + \\frac{6}{\\log_4^2 x - 6\\log_4 x - 3 + 12} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} 1 + \\frac{5}{\\log_4 x - 3} + \\frac{6}{\\log_4^2 x - 6\\log_4 x + 9} \\ge 0 \\\\ x > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} 1 + \\frac{5}{\\log_4 x - 3} + \\frac{6}{(\\log_4 x - 3)^2} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = \\log_4 x`} />.
          <span>Приведём дроби к общему знаменателю</span>
          <InlineMath math={`(t - 3)^2`} />:
        </div>
        <BlockMath math={`\\begin{cases} \\frac{(t - 3)^2 + 5(t - 3) + 6}{(t - 3)^2} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{t^2 - 6t + 9 + 5t - 15 + 6}{(t - 3)^2} \\ge 0 \\\\ x > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{t^2 - t}{(t - 3)^2} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{t(t - 1)}{(t - 3)^2} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <p>Решим полученное рациональное неравенство для переменной <InlineMath math={`t`} /> методом интервалов:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t \\le 0 \\\\ &t \\ge 1 \\end{aligned} \\right. \\\\ t \\neq 3 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_4 x \\le 0 \\\\ &\\log_4 x \\ge 1 \\end{aligned} \\right. \\\\ \\log_4 x \\neq 3 \\\\ x > 0 \\end{cases}`} />

        <p>Потенциируя условия по основанию <InlineMath math={`4 > 1`} />, переходим к переменной <InlineMath math={`x`} />:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x \\le 1 \\\\ &x \\ge 4 \\end{aligned} \\right. \\\\ x \\neq 64 \\\\ x > 0 \\end{cases} \\iff \\left[ \\begin{aligned} &0 < x \\le 1 \\\\ &4 \\le x < 64 \\\\ &x > 64 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АККУРАТНОЙ ЗАПЕРТОЙ ШТРИХОВКОЙ ПОД НИЖНЕЙ КРЫШЕЙ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "1", closed: true }, { label: "4", closed: true }, { label: "64", closed: false }]} selected={[[1, 2], [3, 4], [4, 5]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(0; \\, 1] \\cup [4; \\, 64) \\cup (64; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 17,
    title: 'Задача 17',
    mathA: '\\frac{\\log_2(32x)}{\\log_2 x - 5} + \\frac{\\log_2 x - 5}{\\log_2(32x)} \\ge \\frac{\\log_2(x^{16}) + 18}{\\log_2^2 x - 25}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используем свойства логарифма для упрощения элементов неравенства:</p>
        <BlockMath math={`\\log_2(32x) = \\log_2 32 + \\log_2 x = \\log_2 x + 5`} />
        <BlockMath math={`\\log_2(x^{16}) = 16\\log_2 |x|`} />
        
        <p>Перенесем все члены влево и перейдём к равносильной системе условий с ОДЗ логарифма (где по условию <InlineMath math={`x > 0`} />, следовательно, <InlineMath math={`|x| = x`} />):</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{\\log_2 x + 5}{\\log_2 x - 5} + \\frac{\\log_2 x - 5}{\\log_2 x + 5} - \\frac{16\\log_2 x + 18}{\\log_2^2 x - 25} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Заметим, что общий знаменатель равен</span>
          <InlineMath math={`\\log_2^2 x - 25 = (\\log_2 x - 5)(\\log_2 x + 5)`} />.
          <span>Пусть</span>
          <InlineMath math={`t = \\log_2 x`} />.
          <span>Приведём дроби к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\frac{(t + 5)^2 + (t - 5)^2 - (16t + 18)}{(t - 5)(t + 5)} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{t^2 + 10t + 25 + t^2 - 10t + 25 - 16t - 18}{(t - 5)(t + 5)} \\ge 0 \\\\ x > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{2t^2 - 16t + 32}{(t - 5)(t + 5)} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{2(t - 4)^2}{(t - 5)(t + 5)} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Решим рациональное неравенство относительно переменной</span>
          <InlineMath math={`t`} />.
          <span>Поскольку множитель</span>
          <InlineMath math={`(t - 4)^2 \\ge 0`} />
          <span>при любом положении переменной, он не влияет на знак строгого неравенства, но даёт изолированное решение при равенстве нулю. Раскроем систему в равносильную совокупность:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t < -5 \\\\ &t = 4 \\\\ &t > 5 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_2 x < -5 \\\\ &\\log_2 x = 4 \\\\ &\\log_2 x > 5 \\end{aligned} \\right. \\\\ x > 0 \\end{cases}`} />

        <p>Потенциируя логарифмические условия по основанию 2 &gt; 1, переходим к переменной x:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x < \\frac{1}{32} \\\\ &x = 16 \\\\ &x > 32 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\left[ \\begin{aligned} &0 < x < \\frac{1}{32} \\\\ &x = 16 \\\\ &x > 32 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АККУРАТНОЙ ЗАПЕРТОЙ ШТРИХОВКОЙ ПОД НИЖНЕЙ КРЫШЕЙ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "\\frac{1}{32}", closed: false }, { label: "16", closed: true }, { label: "32", closed: false }]} selected={[[1, 2], [4, 5]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(0; \\, \\frac{1}{32}\\right) \\cup \\{16\\} \\cup (32; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 18,
    title: 'Задача 18',
    mathA: '12^x - 8^x - 2 \\cdot 6^{x+1} + 3 \\cdot 4^{x+1} + 32 \\cdot 3^x - 2^{x+5} \\le 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используя свойства степеней, разложим основания на простые множители и вынесем числовые коэффициенты:</p>
        <BlockMath math={`(4 \\cdot 3)^x - 2^{3x} - 2 \\cdot 6 \\cdot (2 \\cdot 3)^x + 3 \\cdot 4 \\cdot 2^{2x} + 32 \\cdot 3^x - 32 \\cdot 2^x \\le 0`} />
        <BlockMath math={`2^{2x} \\cdot 3^x - 2^{3x} - 12 \\cdot 2^x \\cdot 3^x + 12 \\cdot 2^{2x} + 32 \\cdot 3^x - 32 \\cdot 2^x \\le 0`} />
        
        <p>Сгруппируем слагаемые попарно, вынося общие множители:</p>
        <BlockMath math={`2^{2x}(3^x - 2^x) - 12 \\cdot 2^x(3^x - 2^x) + 32(3^x - 2^x) \\le 0`} />
        <BlockMath math={`(3^x - 2^x)(2^{2x} - 12 \\cdot 2^x + 32) \\le 0`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим квадратный трёхчлен во второй скобке на линейные множители относительно</span>
          <InlineMath math={`2^x`} stroke="currentColor" />
          <span>по теореме Виета (корни 4 и 8):</span>
        </div>
        <BlockMath math={`(3^x - 2^x)(2^x - 4)(2^x - 8) \\le 0 \\iff (3^x - 2^x)(2^x - 2^2)(2^x - 2^3) \\le 0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку</span>
          <InlineMath math={`2^x > 0`} stroke="currentColor" />,
          <span>разделим обе части неравенства на строго положительный множитель</span>
          <InlineMath math={`2^x`} stroke="currentColor" />.
          <span>Выражение в первой скобке примет вид:</span>
          <InlineMath math={`\\left(\\frac{3}{2}\\right)^x - 1`} />.
        </div>
        <BlockMath math={`\\iff \\left(\\left(\\frac{3}{2}\\right)^x - \\left(\\frac{3}{2}\\right)^0\\right)(2^x - 2^2)(2^x - 2^3) \\le 0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) для показательных функций. Так как основания</span>
          <InlineMath math={`\\frac{3}{2} > 1`} />
          <span>и</span>
          <InlineMath math={`2 > 1`} />,
          <span>знаки скобок совпадают со знаками разностей их показателей. Перейдём к равносильному алгебраическому неравенству:</span>
        </div>
        <BlockMath math={`\\iff (x - 0)(x - 2)(x - 3) \\le 0 \\iff x(x - 2)(x - 3) \\le 0`} />

        <p>Полученное системное условие распадается на простейшую совокупность числовых интервалов:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &x \\le 0 \\\\ &2 \\le x \\le 3 \\end{aligned} \\right.`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, 0] \\cup [2; \\, 3]`} />
        </div>
      </div>
    )
  },
  {
    id: 19,
    title: 'Задача 19',
    mathA: '\\frac{2 \\cdot 8^{x-1}}{2 \\cdot 8^{x-1} - 1} \\ge \\frac{3}{8^x - 1} + \\frac{8}{64^x - 5 \\cdot 8^x + 4}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Упростим показательные элементы в дробях, используя свойства степеней:</p>
        <BlockMath math={`2 \\cdot 8^{x-1} = 2 \\cdot \\frac{8^x}{8} = \\frac{8^x}{4}`} />
        <BlockMath math={`64^x - 5 \\cdot 8^x + 4 = (8^x)^2 - 5 \\cdot 8^x + 4 = (8^x - 1)(8^x - 4)`} />

        <p>Подставим полученные выражения, перенесём все члены влево и перейдём к равносильной системе условий:</p>
        <BlockMath math={`\\iff \\frac{\\frac{8^x}{4}}{\\frac{8^x}{4} - 1} - \\frac{3}{8^x - 1} - \\frac{8}{(8^x - 1)(8^x - 4)} \\ge 0`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{8^x}{8^x - 4} - \\frac{3}{8^x - 1} - \\frac{8}{(8^x - 1)(8^x - 4)} \\ge 0 \\\\ 8^x - 1 \\neq 0 \\\\ 8^x - 4 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 8^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Приведём дроби к общему знаменателю</span>
          <InlineMath math={`(t - 1)(t - 4)`} />:
        </div>
        <BlockMath math={`\\begin{cases} \\frac{t(t - 1) - 3(t - 4) - 8}{(t - 1)(t - 4)} \\ge 0 \\\\ t \\neq 1 \\\\ t \\neq 4 \\end{cases} \\iff \\begin{cases} \\frac{t^2 - t - 3t + 12 - 8}{(t - 1)(t - 4)} \\ge 0 \\\\ t \\neq 1 \\\\ t \\neq 4 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{t^2 - 4t + 4}{(t - 1)(t - 4)} \\ge 0 \\\\ t \\neq 1 \\\\ t \\neq 4 \\end{cases} \\iff \\begin{cases} \\frac{(t - 2)^2}{(t - 1)(t - 4)} \\ge 0 \\\\ t \\neq 1 \\\\ t \\neq 4 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Решим рациональное неравенство относительно</span>
          <InlineMath math={`t`} />.
          <span>Множитель</span>
          <InlineMath math={`(t - 2)^2 \\ge 0`} />
          <span>всегда неотрицателен, поэтому он даёт изолированное решение при равенстве нулю и не меняет знак неравенства. Получаем совокупность систем:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t < 1 \\\\ &t = 2 \\\\ &t > 4 \\end{aligned} \\right. \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &8^x < 1 \\\\ &8^x = 2 \\\\ &8^x > 4 \\end{aligned} \\right. \\\\ 8^x > 0 \\end{cases}`} />

        <p>Выразим переменную x, представив числа как степени двойки (основание 2 &gt; 1 монотонно возрастает):</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &2^{3x} < 2^0 \\\\ &2^{3x} = 2^1 \\\\ &2^{3x} > 2^2 \\end{aligned} \\right. \\\\ x \\in \\mathbb{R} \\end{cases} \\iff \\left[ \\begin{aligned} &x < 0 \\\\ &x = \\frac{1}{3} \\\\ &x > \\frac{2}{3} \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АККУРАТНОЙ ЗАПЕРТОЙ ШТРИХОВКОЙ ПОД НИЖНЕЙ КРЫШЕЙ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "\\frac{1}{3}", closed: true }, { label: "\\frac{2}{3}", closed: false }]} selected={[[0, 1], [3, 4]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, 0) \\cup \\left\\{\\frac{1}{3}\\right\\} \\cup \\left(\\frac{2}{3}; \\, +\\infty\\right)`} />
        </div>
      </div>
    )
  },
  {
    id: 20,
    title: 'Задача 20',
    mathA: '7\\log_{12}(x^2 - 13x + 42) \\le 8 + \\log_{12}\\frac{(x - 7)^7}{x - 6}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>Для существования логарифмов требуется <InlineMath math={`(x-7)(x-6)>0`} /> и <InlineMath math={`(x-7)^7/(x-6)>0`} />. Оба условия дают одну область:</p>
        <BlockMath math={`x<6\\quad\\text{или}\\quad x>7.`} />
        <p>На этой области запишем логарифмы через модули положительных множителей:</p>
        <BlockMath math={`7\\bigl(\\log_{12}|x-7|+\\log_{12}|x-6|\\bigr)\\le8+7\\log_{12}|x-7|-\\log_{12}|x-6|.`} />
        <p>Сократив одинаковые слагаемые, получаем</p>
        <BlockMath math={`\\log_{12}|x-6|\\le1 \\iff |x-6|\\le12 \\iff -6\\le x\\le18.`} />
        <p>Пересекаем этот отрезок с ОДЗ.</p>
        <InequalityNumberLine points={[{ label: '-6', closed: true }, { label: '6', closed: false }, { label: '7', closed: false }, { label: '18', closed: true }]} selected={[[1,2],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`[-6;6)\\cup(7;18]`} /></div>
      </div>
    )
  },
  {
    id: 21,
    title: 'Задача 21',
    mathA: '11^x - 6 - \\frac{24 \\cdot 11^x - 244}{121^x - 16 \\cdot 11^x + 60} \\le \\frac{1}{11^x - 10}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Преобразуем знаменатель первой дроби, выделив степени с основанием 11: <InlineMath math={`121^x - 16 \\cdot 11^x + 60 = (11^x)^2 - 16 \\cdot 11^x + 60`} />.</p>
        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 11^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Разложим квадратный трёхчлен по теореме Виета (корни 6 и 10):</span>
          <InlineMath math={`t^2 - 16t + 60 = (t - 6)(t - 10)`} />.
        </div>

        <p>Переносём все члены влево и запишем равносильную систему условий с ограничениями знаменателей:</p>
        <BlockMath math={`\\iff \\begin{cases} t - 6 - \\frac{24t - 244}{(t - 6)(t - 10)} - \\frac{1}{t - 10} \\le 0 \\\\ t > 0 \\\\ t \\neq 6 \\\\ t \\neq 10 \\end{cases}`} />
        
        <p>Приведём дроби к общему знаменателю <InlineMath math={`(t - 6)(t - 10)`} /> в первом условии:</p>
        <BlockMath math={`\\begin{cases} \\frac{(t - 6)^2(t - 10) - (24t - 244) - (t - 6)}{(t - 6)(t - 10)} \\le 0 \\\\ t > 0 \\\\ t \\neq 6 \\\\ t \\neq 10 \\end{cases} \\iff \\begin{cases} \\frac{(t^2 - 12t + 36)(t - 10) - 24t + 244 - t + 6}{(t - 6)(t - 10)} \\le 0 \\\\ t > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{t^3 - 10t^2 - 12t^2 + 120t + 36t - 360 - 25t + 250}{(t - 6)(t - 10)} \\le 0 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\frac{t^3 - 22t^2 + 131t - 110}{(t - 6)(t - 10)} \\le 0 \\\\ t > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим кубический многочлен в числителе на множители. Заметим, что сумма коэффициентов равна нулю, значит корень</span>
          <InlineMath math={`t = 1`} />.
          <span>Разделим уголком на</span>
          <InlineMath math={`(t - 1)`} />:
          <InlineMath math={`t^3 - 22t^2 + 131t - 110 = (t - 1)(t^2 - 21t + 110)`} />.
          <span>Корни квадратного трёхчлена равны 10 и 11. Получаем:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(t - 1)(t - 10)(t - 11)}{(t - 6)(t - 10)} \\le 0 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\frac{(t - 1)(t - 11)}{t - 6} \\le 0 \\\\ t > 0 \\\\ t \\neq 6 \\\\ t \\neq 10 \\end{cases}`} />

        <p>Решая полученное рациональное неравенство для переменной <InlineMath math={`t`} /> методом интервалов, находим совокупность:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t \\le 1 \\\\ &6 < t \\le 11 \\end{aligned} \\right. \\\\ t \\neq 10 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &11^x \\le 1 \\\\ &6 < 11^x \\le 11 \\end{aligned} \\right. \\\\ 11^x \\neq 10 \\\\ x \\in \\mathbb{R} \\end{cases}`} />

        <p>Потенциируя условия по основанию 11 &gt; 1, переходим к переменной x:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &x \\le 0 \\\\ &\\log_{11} 6 < x \\le 1 \\quad \\text{при } x \\neq \\log_{11} 10 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ИСПРАВЛЕНО: ПОДПИСИ ТОЧЕК РЕНДЕРЯТСЯ СТРОГО ЧЕРЕЗ ФОРМУЛЫ KaTeX */}
        <InequalityNumberLine points={[{ label: "0", closed: true }, { label: "\\log_{11} 6", closed: false }, { label: "\\log_{11} 10", closed: false }, { label: "1", closed: true }]} selected={[[0, 1], [2, 3], [3, 4]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, 0] \\cup (\\log_{11} 6; \\, \\log_{11} 10) \\cup (\\log_{11} 10; \\, 1]`} />
        </div>
      </div>
    )
  },
  {
    id: 22,
    title: 'Задача 22',
    mathA: '\\frac{x^2 + 2x}{\\log_2(9 \\cdot 3^x)} \\le 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Разложим числитель на множители и представим знаменатель в виде разности логарифмов:</p>
        <BlockMath math={`\\frac{x(x + 2)}{\\log_2(9 \\cdot 3^x) - \\log_2 1} \\le 0`} />
        
        <p>Перейдём к равносильной системе условий, содержащей ОДЗ логарифма и ограничение знаменателя:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{x(x + 2)}{\\log_2(9 \\cdot 3^x) - \\log_2 1} \\le 0 \\\\ 9 \\cdot 3^x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) к знаменателю. Так как основание логарифма</span>
          <InlineMath math={`2 > 1`} />,
          <span>знак разности логарифмов совпадает со знаком разности их аргументов:</span>
          <InlineMath math={`(9 \\cdot 3^x - 1)`} />.
          <span>Показательное условие</span>
          <InlineMath math={`9 \\cdot 3^x > 0`} />
          <span>выполняется при любых вещественных значениях переменной. Система принимает вид:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{x(x + 2)}{9 \\cdot 3^x - 1} \\le 0 \\\\ x \\in \\mathbb{R} \\end{cases} \\iff \\frac{x(x + 2)}{3^{x+2} - 3^0} \\le 0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод рационализации повторно, теперь для показательного выражения в знаменателе. Так как основание степени</span>
          <InlineMath math={`3 > 1`} />,
          <span>знак разности степеней совпадает со знаком разности их показателей:</span>
          <InlineMath math={`(x + 2 - 0) = (x + 2)`} />.
          <span>Получаем линейно-рациональную дробь:</span>
        </div>
        <BlockMath math={`\\iff \\frac{x(x + 2)}{x + 2} \\le 0 \\iff \\begin{cases} x \\le 0 \\\\ x + 2 \\neq 0 \\end{cases} \\iff \\begin{cases} x \\le 0 \\\\ x \\neq -2 \\end{cases}`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "-2", closed: false }, { label: "0", closed: true }]} selected={[[0, 1], [1, 2]]} />

        <p>Сводя пересечения интервалов на оси, получаем окончательное решение:</p>
        <BlockMath math={`\\iff x \\in (-\\infty; \\, -2) \\cup (-2; \\, 0]`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, -2) \\cup (-2; \\, 0]`} />
        </div>
      </div>
    )
  },
  {
    id: 23,
    title: 'Задача 23',
    mathA: '3^{\\log_3(4 + x^2)} + x^4 - 10 \\ge 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используя основное логарифмическое тождество, перейдём к равносильной системе условий, удерживающей ОДЗ исходного логарифма:</p>
        <BlockMath math={`\\iff \\begin{cases} (4 + x^2) + x^4 - 10 \\ge 0 \\\\ 4 + x^2 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Заметим, что квадратичное выражение</span>
          <InlineMath math={`4 + x^2 > 0`} />
          <span>строго положительно при любых вещественных значениях переменной</span>
          <InlineMath math={`x \\in \\mathbb{R}`} />.
          <span>Система сводится к биквадратному неравенству в первой строке:</span>
        </div>
        <BlockMath math={`\\iff x^4 + x^2 - 6 \\ge 0`} />
        
        <p>Разложим левую часть неравенства на линейные и квадратичные множители (через замену переменной или по теореме Виета):</p>
        <BlockMath math={`(x^2 + 3)(x^2 - 2) \\ge 0 \\iff (x^2 + 3)(x - \\sqrt{2})(x + \\sqrt{2}) \\ge 0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Так как множитель</span>
          <InlineMath math={`x^2 + 3 > 0`} />
          <span>строго положителен для любого</span>
          <InlineMath math={`x`} />,
          <span>разделим на него обе части неравенства без изменения знака. Получаем линейное произведение скобок:</span>
        </div>
        <BlockMath math={`\\iff (x - \\sqrt{2})(x + \\sqrt{2}) \\ge 0`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "-\\sqrt{2}", closed: true }, { label: "\\sqrt{2}", closed: true }]} selected={[[0, 1], [2, 3]]} />

        <p>Пересечение полученных лучей даёт финальное множество решений:</p>
        <BlockMath math={`\\iff x \\in (-\\infty; \\, -\\sqrt{2}] \\cup [\\sqrt{2}; \\, +\\infty)`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, -\\sqrt{2}] \\cup [\\sqrt{2}; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 24,
    title: 'Задача 24',
    mathA: '\\frac{\\log_3^2 x - \\log_3 x}{\\log_{0{,}2}(0{,}5 \\cdot 2^x)} \\ge 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>Условия определения: <InlineMath math={`x>0`} /> и знаменатель не равен нулю. Поскольку <InlineMath math={`0{,}5\\cdot2^x=2^{x-1}`} />, получаем <InlineMath math={`x\\ne1`} />.</p>
        <p>Разложим числитель и преобразуем знаменатель:</p>
        <BlockMath math={`\\frac{\\log_3 x(\\log_3 x-1)}{(x-1)\\log_{0{,}2}2}\\ge0.`} />
        <p>Здесь <InlineMath math={`\\log_{0{,}2}2<0`} />. На ОДЗ знаки <InlineMath math={`\\log_3x`} /> и <InlineMath math={`x-1`} /> совпадают, а знак <InlineMath math={`\\log_3x-1`} /> совпадает со знаком <InlineMath math={`x-3`} />. Поэтому исходное неравенство равносильно</p>
        <BlockMath math={`x-3\\le0,\\qquad x>0,\\qquad x\\ne1.`} />
        <p>Точка <InlineMath math={`x=1`} /> исключается: в исходной дроби знаменатель равен нулю.</p>
        <InequalityNumberLine points={[{ label: '0', closed: false }, { label: '1', closed: false }, { label: '3', closed: true }]} selected={[[1,2],[2,3]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(0;1)\\cup(1;3]`} /></div>
      </div>
    )
  },
  {
    id: 25,
    title: 'Задача 25',
    mathA: '\\frac{25x^2 - 160x + 256}{\\log_2(4^x - 32) - \\log_2 2^{x+2}} \\le 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Свернём числитель дроби по формуле квадрата разности: <InlineMath math={`25x^2 - 160x + 256 = (5x - 16)^2`} />.</p>
        <p>Упростим второй логарифм в знаменателе, используя тождество: <InlineMath math={`\\log_2 2^{x+2} = x + 2`} />.</p>
        
        <p>Перейдём к равносильной системе условий, содержащей знак всей дроби и ОДЗ логарифма знаменателя:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(5x - 16)^2}{\\log_2(4^x - 32) - \\log_2 2^{x+2}} \\le 0 \\\\ 4^x - 32 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) к разности логарифмов в знаменателе. Так как основание</span>
          <InlineMath math={`2 > 1`} />,
          <span>знак разности логарифмов полностью совпадает со знаком разности их аргументов:</span>
          <InlineMath math={`(4^x - 32 - 2^{x+2})`} />.
          <span>Система принимает вид:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\frac{(5x - 16)^2}{4^x - 4 \\cdot 2^x - 32} \\le 0 \\\\ 4^x > 32 \\end{cases} \\iff \\begin{cases} \\frac{(5x - 16)^2}{(2^x - 8)(2^x + 4)} \\le 0 \\\\ 2^{2x} > 2^5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Показательный множитель</span>
          <InlineMath math={`2^x + 4 > 0`} />
          <span>строго положителен при любых вещественных значениях переменной, поэтому мы имеем право разделить на него обе части без изменения знака. Применим метод рационализации к скобке</span>
          <InlineMath math={`(2^x - 2^3)`} />:
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\frac{(5x - 16)^2}{2^x - 2^3} \\le 0 \\\\ 2x > 5 \\end{cases} \\iff \\begin{cases} \\frac{(5x - 16)^2}{x - 3} \\le 0 \\\\ x > 2{,}5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку полный квадрат числителя</span>
          <InlineMath math={`(5x - 16)^2 \\ge 0`} />
          <span>всегда неотрицателен, он не влияет на знак строгого неравенства, но даёт изолированное решение при равенстве нулю</span>
          <InlineMath math={`5x - 16 = 0 \\implies x = 3{,}2`} />.
          <span>Раскроем систему в равносильную совокупность:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x - 3 < 0 \\\\ &x = 3{,}2 \\end{aligned} \\right. \\\\ x > 2{,}5 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x < 3 \\\\ &x = 3{,}2 \\end{aligned} \\right. \\\\ x > 2{,}5 \\end{cases}`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "2{,}5", closed: false }, { label: "3", closed: false }, { label: "3{,}2", closed: true }]} selected={[[1, 2]]} />

        <p>Сводя пересечения интервалов и добавляя изолированное решение числителя, получаем окончательный ответ:</p>
        <BlockMath math={`\\iff x \\in (2{,}5; \\, 3) \\cup \\{3{,}2\\}`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(2{,}5; \\, 3) \\cup \\{3{,}2\\}`} />
        </div>
      </div>
    )
  },
  {
    id: 26,
    title: 'Задача 26',
    mathA: '\\frac{9}{\\log_3 x} - \\log_3\\left(\\frac{9}{x}\\right) \\le \\frac{34}{\\log_3 x^2}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используем свойства логарифма для преобразования членов неравенства:</p>
        <BlockMath math={`\\log_3\\left(\\frac{9}{x}\\right) = \\log_3 9 - \\log_3 x = 2 - \\log_3 x`} />
        <BlockMath math={`\\log_3 x^2 = 2\\log_3 |x|`} />
        
        <p>Перенесём все члены влево и перейдём к равносильной системе с учётом ограничений на логарифмы:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{9}{\\log_3 x} - (2 - \\log_3 x) - \\frac{34}{2\\log_3 x} \\le 0 \\\\ x > 0 \\\\ \\log_3 x \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{9}{\\log_3 x} - 2 + \\log_3 x - \\frac{17}{\\log_3 x} \\le 0 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\log_3 x - 2 - \\frac{8}{\\log_3 x} \\le 0 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Пусть</span>
          <InlineMath math={`t = \\log_3 x`} />.
          <span>Приведём к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\frac{t^2 - 2t - 8}{t} \\le 0 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases} \\iff \\begin{cases} \\frac{(t - 4)(t + 2)}{t} \\le 0 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}`} />
        
        <p>Решая рациональное неравенство относительно переменной <InlineMath math={`t`} /> методом интервалов, находим совокупность простейших лучей:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t \\le -2 \\\\ &0 < t \\le 4 \\end{aligned} \\right. \\\\ x > 0 \\\\ x \\neq 1 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_3 x \\le -2 \\\\ &0 < \\log_3 x \\le 4 \\end{aligned} \\right. \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}`} />
        
        <p>Потенциируя логарифмические условия по основанию <InlineMath math={`3 > 1`} />, переходим к линейным промежуткам:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x \\le \\frac{1}{9} \\\\ &1 < x \\le 81 \\end{aligned} \\right. \\\\ x > 0 \\\\ x \\neq 1 \\end{cases} \\iff \\left[ \\begin{aligned} &0 < x \\le \\frac{1}{9} \\\\ &1 < x \\le 81 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "\\frac{1}{9}", closed: true }, { label: "1", closed: false }, { label: "81", closed: true }]} selected={[[1, 2], [3, 4]]} />

        <p>Объединяя интервалы пересечения, получаем окончательное решение:</p>
        <BlockMath math={`\\iff x \\in \\left(0; \\, \\frac{1}{9}\\right] \\cup (1; \\, 81]`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(0; \\, \\frac{1}{9}\\right] \\cup (1; \\, 81]`} />
        </div>
      </div>
    )
  },
  {
    id: 27,
    title: 'Задача 27 (ЕГЭ 2026)',
    mathA: '(\\log_{36} x + 1) \\cdot \\left(\\frac{1}{\\log_{36} x} + 1\\right) \\le \\log_{36} x',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Перейдём к равносильной системе условий, содержащей исходное неравенство, ОДЗ логарифма и ограничение знаменателя:</p>
        <BlockMath math={`\\iff \\begin{cases} (\\log_{36} x + 1) \\cdot \\left(\\frac{1}{\\log_{36} x} + 1\\right) \\le \\log_{36} x \\\\ x > 0 \\\\ \\log_{36} x \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = \\log_{36} x`} />.
          <span>Система принимает рациональный вид:</span>
        </div>
        <BlockMath math={`\\begin{cases} (t + 1) \\cdot \\left(\\frac{1}{t} + 1\\right) \\le t \\\\ x > 0 \\\\ t \\neq 0 \\end{cases} \\iff \\begin{cases} (t + 1) \\cdot \\frac{1 + t}{t} - t \\le 0 \\\\ x > 0 \\\\ t \\neq 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{(t + 1)^2 - t^2}{t} \\le 0 \\\\ x > 0 \\\\ t \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{t^2 + 2t + 1 - t^2}{t} \\le 0 \\\\ x > 0 \\\\ t \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{2t + 1}{t} \\le 0 \\\\ x > 0 \\\\ t \\neq 0 \\end{cases}`} />

        <p>Решая рациональное неравенство относительно переменной <InlineMath math={`t`} /> методом интервалов, находим отрезок корней:</p>
        <BlockMath math={`\\iff \\begin{cases} -0{,}5 \\le t < 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} -\\frac{1}{2} \\le \\log_{36} x < 0 \\\\ x > 0 \\end{cases}`} />

        <p>Потенциируя условия по основанию <InlineMath math={`36 > 1`} />, переходим к двойному неравенству для переменной <InlineMath math={`x`} />:</p>
        <BlockMath math={`\\iff 36^{-\\frac{1}{2}} \\le x < 36^0 \\iff \\frac{1}{\\sqrt{36}} \\le x < 1 \\iff \\frac{1}{6} \\le x < 1`} />

        <p>Так как полученные условия пересекаются с лучом ОДЗ <InlineMath math={`x > 0`} />, разложим итоговое решение на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "\\frac{1}{6}", closed: true }, { label: "1", closed: false }]} selected={[[1, 2]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left[\\frac{1}{6}; \\, 1\\right)`} />
        </div>
      </div>
    )
  },
  {
    id: 28,
    title: 'Задача 28 (ЕГЭ 2026)',
    mathA: '\\log_{x+1}(x^2 - 5x + 7) \\le \\log_{x+1} x',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Перенесём все члены влево и перейдём к равносильной системе условий, удерживающей ОДЗ переменного основания и аргументов логарифмов:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_{x+1}(x^2 - 5x + 7) - \\log_{x+1} x \\le 0 \\\\ x + 1 > 0 \\\\ x + 1 \\neq 1 \\\\ x^2 - 5x + 7 > 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем ОДЗ аргумента</span>
          <InlineMath math={`x^2 - 5x + 7 > 0`} />.
          <span>Дискриминант этого трёхчлена</span>
          <InlineMath math={`D = 25 - 28 = -3 < 0`} />,
          <span>а старший коэффициент положителен, поэтому выражение строго больше нуля при любых</span>
          <InlineMath math={`x \\in \\mathbb{R}`} />.
          <span>Система ограничений ОДЗ сводится к лучу</span>
          <InlineMath math={`x > 0`} />.
        </div>

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) к разности логарифмов с переменным основанием. Знак разности логарифмов совпадает со знаком произведения</span>
          <InlineMath math={`(a - 1)(f - g)`} />:
        </div>
        <BlockMath math={`\\iff \\begin{cases} (x + 1 - 1)(x^2 - 5x + 7 - x) \\le 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} x(x^2 - 6x + 7) \\le 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Найдем корни квадратного трёхчлена</span>
          <InlineMath math={`x^2 - 6x + 7 = 0`} />:
          <InlineMath math={`D/4 = 9 - 7 = 2`} />,
          <span>откуда</span>
          <InlineMath math={`x = 3 \\pm \\sqrt{2}`} />.
          <span>Разложим систему на линейные скобки:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} x(x - (3 - \\sqrt{2}))(x - (3 + \\sqrt{2})) \\le 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку по условию ОДЗ</span>
          <InlineMath math={`x > 0`} />,
          <span>множитель</span>
          <InlineMath math={`x`} />
          <span>строго положителен и не влияет на знак. Разделим на него обе части первого неравенства. Получаем:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} (x - (3 - \\sqrt{2}))(x - (3 + \\sqrt{2})) \\le 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} 3 - \\sqrt{2} \\le x \\le 3 + \\sqrt{2} \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Обоснуем точное положение левой границы. Так как выполняется строгое неравенство:</span>
          <InlineMath math={`1 < 2 < 4 \\implies 1 < \\sqrt{2} < 2`} />,
          <span>умножая на \(-1\) и добавляя 3, получаем:</span>
          <InlineMath math={`1 < 3 - \\sqrt{2} < 2`} />.
          <span>Следовательно, точка</span>
          <InlineMath math={`3 - \\sqrt{2} > 0`} />
          <span>лежит строго правее начала луча ОДЗ.</span>
        </div>

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "3 - \\sqrt{2}", closed: true }, { label: "3 + \\sqrt{2}", closed: true }]} selected={[[1, 2]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[3 - \\sqrt{2}; \\, 3 + \\sqrt{2}]`} />
        </div>
      </div>
    )
  },
  {
    id: 29,
    title: 'Задача 29 (ЕГЭ 2026)',
    mathA: '\\log_{49}(x + 4) + \\log_{(x^2 + 8x + 16)}\\sqrt{7} \\le -\\frac{3}{4}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Выделим полный квадрат в основании второго логарифма: <InlineMath math={`x^2 + 8x + 16 = (x + 4)^2`} />. Приведём логарифмы к основанию 7:</p>
        <BlockMath math={`\\log_{49}(x + 4) = \\log_{7^2}(x + 4) = \\frac{1}{2}\\log_7(x + 4)`} />
        <BlockMath math={`\\log_{(x + 4)^2}\\sqrt{7} = \\frac{1}{2 \\cdot 2}\\log_{|x + 4|} 7 = \\frac{1}{4\\log_7 |x + 4|}`} />
        
        <p>Перейдём к равносильной системе условий, удерживающей ОДЗ исходного логарифма и основания:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{1}{2}\\log_7(x + 4) + \\frac{1}{4\\log_7(x + 4)} \\le -\\frac{3}{4} \\\\ x + 4 > 0 \\\\ x + 4 \\neq 1 \\end{cases} \\iff \\begin{cases} \\frac{1}{2}\\log_7(x + 4) + \\frac{1}{4\\log_7(x + 4)} + \\frac{3}{4} \\le 0 \\\\ x > -4 \\\\ x \\neq -3 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = \\log_7(x + 4)`} />.
          <span>Умножим первое рациональное неравенство на 4 и приведём к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} 2t + \\frac{1}{t} + 3 \\le 0 \\\\ x > -4 \\\\ x \\neq -3 \\end{cases} \\iff \\begin{cases} \\frac{2t^2 + 3t + 1}{t} \\le 0 \\\\ x > -4 \\\\ x \\neq -3 \\end{cases} \\iff \\begin{cases} \\frac{2(t + 1)(t + 0{,}5)}{t} \\le 0 \\\\ x > -4 \\\\ x \\neq -3 \\end{cases}`} />
        
        <p>Решая рациональное неравенство относительно переменной <InlineMath math={`t`} /> методом интервалов, находим совокупность простейших лучей:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t \\le -1 \\\\ &-0{,}5 \\le t < 0 \\end{aligned} \\right. \\\\ x > -4 \\\\ x \\neq -3 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_7(x + 4) \\le -1 \\\\ &-\\frac{1}{2} \\le \\log_7(x + 4) < 0 \\end{aligned} \\right. \\\\ x > -4 \\\\ x \\neq -3 \\end{cases}`} />
        
        <p>Потенциируя логарифмические условия по основанию <InlineMath math={`7 > 1`} />, переходим к линейным промежуткам:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x + 4 \\le \\frac{1}{7} \\\\ &\\frac{1}{\\sqrt{7}} \\le x + 4 < 1 \\end{aligned} \\right. \\\\ x > -4 \\\\ x \\neq -3 \\end{cases} \\iff \\left[ \\begin{aligned} &-4 < x \\le -3\\frac{6}{7} \\\\ &-4 + \\frac{\\sqrt{7}}{7} \\le x < -3 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "-4", closed: false }, { label: "-3\\frac{6}{7}", closed: true }, { label: "-4+\\frac{\\sqrt{7}}{7}", closed: true }, { label: "-3", closed: false }]} selected={[[1, 2], [3, 4]]} />

        <p>Объединяя интервалы пересечения, получаем окончательное решение:</p>
        <BlockMath math={`\\iff x \\in \\left(-4; \\, -3\\frac{6}{7}\\right] \\cup \\left[-4 + \\frac{\\sqrt{7}}{7}; \\, -3\\right)`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(-4; \\, -3\\frac{6}{7}\\right] \\cup \\left[-4 + \\frac{\\sqrt{7}}{7}; \\, -3\\right)`} />
        </div>
      </div>
    )
  },
  {
    id: 30,
    title: 'Задача 30 (ЕГЭ 2025)',
    mathA: '\\frac{x^3 - x^2 - x + 1}{9^{x^2} - 18 \\cdot 3^{x^2} + 81} \\le 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Разложим на множители числитель дроби методом группировки слагаемых:</p>
        <BlockMath math={`x^3 - x^2 - x + 1 = x^2(x - 1) - (x - 1) = (x - 1)(x^2 - 1) = (x - 1)^2(x + 1)`} />
        
        <p>Преобразуем знаменатель дроби, заметив формулу полного квадрата разности:</p>
        <BlockMath math={`9^{x^2} - 18 \\cdot 3^{x^2} + 81 = (3^{x^2} - 9)^2 = (3^{x^2} - 3^2)^2`} />
        
        <p>Перейдём к равносильной системе условий, удерживающей знак всей дроби и требование существования знаменателя:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(x - 1)^2(x + 1)}{(3^{x^2} - 3^2)^2} \\le 0 \\\\ 3^{x^2} - 3^2 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку знаменатель возведён во вторую степень, выражение</span>
          <InlineMath math={`(3^{x^2} - 3^2)^2 > 0`} />
          <span>строго положительно на всей области определения. Знак дроби зависит только от числителя:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} (x - 1)^2(x + 1) \\le 0 \\\\ x^2 \\neq 2 \\end{cases} \\iff \\begin{cases} (x - 1)^2(x + 1) \\le 0 \\\\ x \\neq \\pm\\sqrt{2} \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Так как множитель полного квадрата</span>
          <InlineMath math={`(x - 1)^2 \\ge 0`} />
          <span>всегда неотрицателен, он не влияет на знак строгого неравенства, но даёт корень при знаке равенства</span>
          <InlineMath math={`x = 1`} />.
          <span>Раскроем систему в равносильную совокупность:</span>
        </div>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &\\begin{cases} x + 1 \\le 0 \\\\ x \\neq \\pm\\sqrt{2} \\end{cases} \\\\ &\\begin{cases} x = 1 \\\\ x \\neq \\pm\\sqrt{2} \\end{cases} \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &\\begin{cases} x \\le -1 \\\\ x \\neq -\\sqrt{2} \\end{cases} \\\\ &x = 1 \\end{aligned} \\right.`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Обоснуем точное положение выколотой точки знаменателя. Так как выполняется точное неравенство:</span>
          <InlineMath math={`1 < 2 < 4 \\implies 1 < \\sqrt{2} < 2`} />,
          <span>умножая на \(-1\), получаем:</span>
          <InlineMath math={`-2 < -\\sqrt{2} < -1`} />.
          <span>Следовательно, точка</span>
          <InlineMath math={`-\\sqrt{2}`} />
          <span>гарантированно попадает внутрь луча</span>
          <InlineMath math={`x \\le -1`} />
          <span>и выкалывает внутреннее значение, а точка</span>
          <InlineMath math={`\\sqrt{2} > 1`} />
          <span>лежит правее изолированного корня и не влияет на него.</span>
        </div>

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "-\\sqrt{2}", closed: false }, { label: "-1", closed: true }, { label: "1", closed: true }]} selected={[[0, 1], [1, 2]]} />

        <p>Объединяя интервалы пересечения и изолированное решение, получаем итоговый ответ:</p>
        <BlockMath math={`\\iff x \\in (-\\infty; \\, -\\sqrt{2}) \\cup (-\\sqrt{2}; \\, -1] \\cup \\{1\\}`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, -\\sqrt{2}) \\cup (-\\sqrt{2}; \\, -1] \\cup \\{1\\}`} />
        </div>
      </div>
    )
  },
  {
    id: 31,
    title: 'Задача 31 (ЕГЭ 2025)',
    mathA: '\\frac{2}{2^x + 10} \\le \\frac{3}{2^{x+1} - 1}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используя свойства степеней, запишем <InlineMath math={`2^{x+1} = 2 \\cdot 2^x`} />. Перенесём правую дробь влево и запишем равносильную систему условий с ограничениями знаменателей:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{2}{2^x + 10} - \\frac{3}{2 \\cdot 2^x - 1} \\le 0 \\\\ 2 \\cdot 2^x - 1 \\neq 0 \\\\ 2^x + 10 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 2^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Заметим, что выражение</span>
          <InlineMath math={`t + 10 > 0`} />
          <span>при любых допустимых значениях переменной. Приведём первое условие к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\frac{2(2t - 1) - 3(t + 10)}{(t + 10)(2t - 1)} \\le 0 \\\\ t > 0 \\\\ 2t - 1 \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{4t - 2 - 3t - 30}{(t + 10)(2t - 1)} \\le 0 \\\\ t > 0 \\\\ t \\neq 0{,}5 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{t - 32}{(t + 10)(2t - 1)} \\le 0 \\\\ t > 0 \\\\ t \\neq 0{,}5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку на ОДЗ множитель</span>
          <InlineMath math={`t + 10 > 0`} />
          <span>строго положителен, умножим на него обе части рационального неравенства. Разделим знаменатель на числовой коэффициент 2:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{t - 32}{t - 0{,}5} \\le 0 \\\\ t > 0 \\\\ t \\neq 0{,}5 \\end{cases} \\iff \\begin{cases} 0{,}5 < t \\le 32 \\\\ t > 0 \\end{cases} \\iff 0{,}5 < t \\le 32`} />

        <p>Выполним обратную замену переменной для показательной функции:</p>
        <BlockMath math={`\\iff 0{,}5 < 2^x \\le 32 \\iff 2^{-1} < 2^x \\le 2^5`} />

        <p>В силу монотонного возрастания показательной функции с основанием 2 &gt; 1 перейдём к простейшим линейным ограничениям:</p>
        <BlockMath math={`\\iff -1 < x \\le 5`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "-1", closed: false }, { label: "5", closed: true }]} selected={[[1, 2]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-1; \\, 5]`} />
        </div>
      </div>
    )
  },
  {
    id: 32,
    title: 'Задача 32 (ЕГЭ 2025)',
    mathA: '\\frac{3^{3x} - 29 \\cdot 3^{2x} + 55 \\cdot 3^x - 27}{x} \\ge 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной для числителя дроби: пусть</span>
          <InlineMath math={`t = 3^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Тогда кубический многочлен числителя принимает вид:</span>
        </div>
        <BlockMath math={`t^3 - 29t^2 + 55t - 27`} />
        
        <p>Разложим его на множители методом группировки слагаемых:</p>
        <BlockMath math={`t^3 - t^2 - 28t^2 + 28t + 27t - 27 = t^2(t - 1) - 28t(t - 1) + 27(t - 1) = (t - 1)(t^2 - 28t + 27)`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>По теореме Виета корни квадратного трёхчлена</span>
          <InlineMath math={`t^2 - 28t + 27`} />
          <span>равны 1 и 27. Окончательно получаем разложение числителя:</span>
        </div>
        <BlockMath math={`(t - 1)(t - 1)(t - 27) = (t - 1)^2(t - 27)`} />

        <p>Выполним обратную замену переменной и перейдём к равносильной системе с учётом знака знаменателя:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(3^x - 3^0)^2(3^x - 3^3)}{x} \\ge 0 \\\\ x \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) к числителю. Так как основание степени</span>
          <InlineMath math={`3 > 1`} />,
          <span>знаки разностей оснований совпадают со знаками разностей их показателей:</span>
          <InlineMath math={`(3^x - 3^0) \\to (x - 0) = x`} />
          <span>и</span>
          <InlineMath math={`(3^x - 3^3) \\to (x - 3)`} />.
          <span>Система принимает вид:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{x^2(x - 3)}{x} \\ge 0 \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} x(x - 3) \\ge 0 \\\\ x \\neq 0 \\end{cases}`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "3", closed: true }]} selected={[[0, 1], [2, 3]]} />

        <p>Пересечение полученных интервалов на оси даёт финальное множество решений:</p>
        <BlockMath math={`\\iff x \\in (-\\infty; \\, 0) \\cup [3; \\, +\\infty)`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, 0) \\cup [3; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
    {
    id: 33,
    title: 'Задача 33 (ЕГЭ 2025)',
    mathA: '7\\log_{12}(x^2 - 13x + 42) \\leq 8 + \\log_{12}\\frac{(x-7)^7}{x-6}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>Для существования логарифмов требуется <InlineMath math={`(x-7)(x-6)>0`} /> и <InlineMath math={`(x-7)^7/(x-6)>0`} />. Оба условия дают одну область:</p>
        <BlockMath math={`x<6\\quad\\text{или}\\quad x>7.`} />
        <p>На этой области запишем логарифмы через модули положительных множителей:</p>
        <BlockMath math={`7\\bigl(\\log_{12}|x-7|+\\log_{12}|x-6|\\bigr)\\le8+7\\log_{12}|x-7|-\\log_{12}|x-6|.`} />
        <p>Сократив одинаковые слагаемые, получаем</p>
        <BlockMath math={`\\log_{12}|x-6|\\le1 \\iff |x-6|\\le12 \\iff -6\\le x\\le18.`} />
        <p>Пересекаем этот отрезок с ОДЗ.</p>
        <InequalityNumberLine points={[{ label: '-6', closed: true }, { label: '6', closed: false }, { label: '7', closed: false }, { label: '18', closed: true }]} selected={[[1,2],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`[-6;6)\\cup(7;18]`} /></div>
      </div>
    ),
    textBefore: '',
    mathB: ''
  },


  {
    id: 34,
    title: 'Задача 34 (ЕГЭ 2025)',
    mathA: '\\frac{31 - 5 \\cdot 2^x}{4^x - 24 \\cdot 2^x + 128} \\ge 0{,}25',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Переведём десятичную дробь в обыкновенную: <InlineMath math={`0{,}25 = \\frac{1}{4}`} />. Разложим знаменатель на множители по теореме Виета (корни 8 и 16):</p>
        <BlockMath math={`4^x - 24 \\cdot 2^x + 128 = (2^x - 8)(2^x - 16) = (2^x - 2^3)(2^x - 2^4)`} />
        
        <p>Перенесём все члены неравенства в левую часть и запишем равносильную систему условий с ограничениями знаменателя:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{31 - 5 \\cdot 2^x}{(2^x - 8)(2^x - 16)} - \\frac{1}{4} \\ge 0 \\\\ 2^x - 2^3 \\neq 0 \\\\ 2^x - 2^4 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 2^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Приведём рациональное выражение к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\frac{4(31 - 5t) - (t - 8)(t - 16)}{4(t - 8)(t - 16)} \\ge 0 \\\\ t \\neq 8 \\\\ t \\neq 16 \\end{cases} \\iff \\begin{cases} \\frac{124 - 20t - (t^2 - 24t + 128)}{4(t - 8)(t - 16)} \\ge 0 \\\\ t \\neq 8 \\\\ t \\neq 16 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{-t^2 + 4t - 4}{4(t - 8)(t - 16)} \\ge 0 \\\\ t \\neq 8 \\\\ t \\neq 16 \\end{cases} \\iff \\begin{cases} \\frac{t^2 - 4t + 4}{4(t - 8)(t - 16)} \\le 0 \\\\ t \\neq 8 \\\\ t \\neq 16 \\end{cases} \\iff \\begin{cases} \\frac{(t - 2)^2}{4(t - 8)(t - 16)} \\le 0 \\\\ t \\neq 8 \\\\ t \\neq 16 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Решим рациональное неравенство относительно</span>
          <InlineMath math={`t`} />.
          <span>Полный квадрат числителя</span>
          <InlineMath math={`(t - 2)^2 \\ge 0`} />
          <span>всегда неотрицателен, поэтому он не меняет знак неравенства при переходе, но даёт изолированный корень</span>
          <InlineMath math={`t = 2`} />.
          <span>Раскроем систему в равносильную совокупность:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &8 < t < 16 \\\\ &t = 2 \\end{aligned} \\right. \\\\ t > 0 \\end{cases} \\iff \\left[ \\begin{aligned} &2^3 < 2^x < 2^4 \\\\ &2^x = 2^1 \\end{aligned} \\right.`} />

        <p>В силу монотонного возрастания показательной функции с основанием 2 &gt; 1, переходим к переменной x:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &3 < x < 4 \\\\ &x = 1 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "1", closed: true }, { label: "3", closed: false }, { label: "4", closed: false }]} selected={[[2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\{1\\} \\cup (3; \\, 4)`} />
        </div>
      </div>
    )
  },
  {
    id: 35,
    title: 'Задача 35 (ЕГЭ 2025)',
    mathA: '\\frac{2 \\log_8(x^2 - 3x)}{\\log_8 x^2} \\le 1',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Перенесем единицу в левую часть и запишем равносильную систему условий с учётом ОДЗ логарифмов и ограничений знаменателя:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{2 \\log_8(x^2 - 3x)}{\\log_8 x^2} - 1 \\le 0 \\\\ x^2 - 3x > 0 \\\\ x^2 > 0 \\\\ \\log_8 x^2 \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{\\log_8(x^2 - 3x)^2 - \\log_8 x^2}{\\log_8 x^2} \\le 0 \\\\ x(x - 3) > 0 \\\\ x \\neq 0 \\\\ x^2 \\neq 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) к числителю и знаменателю. Так как основание логарифмов</span>
          <InlineMath math={`8 > 1`} />,
          <span>знаки разностей логарифмов полностью совпадают со знаками разностей их аргументов (а для знаменателя — с разностью аргумента и единицы):</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(x^2 - 3x)^2 - x^2}{x^2 - 1} \\le 0 \\\\ x \\in (-\\infty; \\, 0) \\cup (3; \\, +\\infty) \\\\ x \\neq \\pm 1 \\end{cases}`} />

        <p>Разложим числитель по формуле разности квадратов <InlineMath math={`(A-B)(A+B)`} />:</p>
        <BlockMath math={`(x^2 - 3x - x)(x^2 - 3x + x) = (x^2 - 4x)(x^2 - 2x) = x^2(x - 4)(x - 2)`} />

        <p>Подставим разложение в систему и упростим:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{x^2(x - 4)(x - 2)}{(x - 1)(x + 1)} \\le 0 \\\\ x \\in (-\\infty; \\, 0) \\cup (3; \\, +\\infty) \\\\ x \\neq \\pm 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку на области ОДЗ переменная</span>
          <InlineMath math={`x \\neq 0`} />,
          <span>множитель полного квадрата</span>
          <InlineMath math={`x^2 > 0`} />
          <span>строго положителен и не влияет на знак строгого неравенства. Разделим на него обе части. Получаем систему ограничений:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(x - 4)(x - 2)}{(x - 1)(x + 1)} \\le 0 \\\\ x \\in (-\\infty; \\, 0) \\cup (3; \\, +\\infty) \\\\ x \\neq \\pm 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Решая рациональную дробь методом интервалов, находим интервалы знака дроби:</span>
          <InlineMath math={`x \\in (-1; \\, 1) \\cup [2; \\, 4]`} />.
          <span>Пересечём эти множества с условиями ОДЗ</span>
          <InlineMath math={`x \\in (-\\infty; \\, 0) \\cup (3; \\, +\\infty)`} />:
        </div>
        <BlockMath math={`\\iff x \\in (-1; \\, 0) \\cup (3; \\, 4]`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И СПЛОШНЫМИ КРЫШАМИ ОТВЕТА */}
        <InequalityNumberLine points={[{ label: "-1", closed: false }, { label: "0", closed: false }, { label: "3", closed: false }, { label: "4", closed: true }]} selected={[[1, 2], [3, 4]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-1; \\, 0) \\cup (3; \\, 4]`} />
        </div>
      </div>
    )
  },
  {
    id: 36,
    title: 'Задача 36 (ЕГЭ 2024)',
    mathA: '2^x - 6 - \\frac{9 \\cdot 2^x - 37}{4^x - 7 \\cdot 2^x + 12} \\le \\frac{1}{2^x - 4}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Разложим знаменатель второй дроби на множители по теореме Виета (корни 3 и 4): <InlineMath math={`4^x - 7 \\cdot 2^x + 12 = (2^x - 3)(2^x - 4)`} />.</p>
        <p>Перенесём все члены неравенства в левую часть и запишем равносильную систему условий с ограничениями знаменателей:</p>
        <BlockMath math={`\\iff \\begin{cases} 2^x - 6 - \\frac{9 \\cdot 2^x - 37}{(2^x - 3)(2^x - 4)} - \\frac{1}{2^x - 4} \\le 0 \\\\ 2^x - 3 \\neq 0 \\\\ 2^x - 4 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 2^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Приведём рациональное выражение к общему знаменателю</span>
          <InlineMath math={`(t - 3)(t - 4)`} />:
        </div>
        <BlockMath math={`\\begin{cases} \\frac{(t - 6)(t - 3)(t - 4) - (9t - 37) - (t - 3)}{(t - 3)(t - 4)} \\le 0 \\\\ t \\neq 3 \\\\ t \\neq 4 \\end{cases} \\iff \\begin{cases} \\frac{(t - 6)(t^2 - 7t + 12) - 9t + 37 - t + 3}{(t - 3)(t - 4)} \\le 0 \\\\ t > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{t^3 - 7t^2 + 12t - 6t^2 + 42t - 72 - 10t + 40}{(t - 3)(t - 4)} \\le 0 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\frac{t^3 - 13t^2 + 44t - 32}{(t - 3)(t - 4)} \\le 0 \\\\ t > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим кубический многочлен в числителе на множители. Заметим, что при</span>
          <InlineMath math={`t = 1`} />
          <span>выражение обращается в ноль:</span>
          <InlineMath math={`1 - 13 + 44 - 32 = 0`} />.
          <span>Разделим многочлен на скобку</span>
          <InlineMath math={`(t - 1)`} />
          <span>уголком: получаем</span>
          <InlineMath math={`(t - 1)(t^2 - 12t + 32)`} />.
          <span>Корни квадратного трёхчлена равны 4 и 8. Итоговая система принимает вид:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(t - 1)(t - 4)(t - 8)}{(t - 3)(t - 4)} \\le 0 \\\\ t > 0 \\\\ t \\neq 3 \\\\ t \\neq 4 \\end{cases} \\iff \\begin{cases} \\frac{(t - 1)(t - 8)}{t - 3} \\le 0 \\\\ t > 0 \\\\ t \\neq 3 \\\\ t \\neq 4 \\end{cases}`} />

        <p>Решая рациональное неравенство для переменной <InlineMath math={`t`} /> методом интервалов, находим совокупность промежутков:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t \\le 1 \\\\ &3 < t \\le 8 \\end{aligned} \\right. \\\\ t \\neq 4 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &2^x \\le 2^0 \\\\ &3 < 2^x \\le 2^3 \\end{aligned} \\right. \\\\ 2^x \\neq 2^2 \\\\ x \\in \\mathbb{R} \\end{cases}`} />

        <p>Потенциируя условия по основанию 2 &gt; 1, переходим к переменной x:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &x \\le 0 \\\\ &\\log_2 3 < x \\le 3 \\quad \\text{при } x \\neq 2 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "0", closed: true }, { label: "\\log_2 3", closed: false }, { label: "2", closed: false }, { label: "3", closed: true }]} selected={[[0, 1], [2, 3], [3, 4]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, 0] \\cup (\\log_2 3; \\, 2) \\cup (2; \\, 3]`} />
        </div>
      </div>
    )
  },
  {
    id: 37,
    title: 'Задача 37 (ЕГЭ 2024)',
    mathA: '\\frac{9^{x-1}}{9^{x-1} - 1} - \\frac{5}{9^x - 1} \\ge \\frac{36}{81^x - 10 \\cdot 9^x + 9}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используя свойства степеней, запишем <InlineMath math={`9^{x-1} = \\frac{9^x}{9}`} /> и разложим квадратный трёхчлен в знаменателе справа по теореме Виета (корни 1 и 9): <InlineMath math={`(9^x)^2 - 10 \\cdot 9^x + 9 = (9^x - 1)(9^x - 9)`} />.</p>
        <p>Подставим эти выражения, перенесём все члены влево и запишем равносильную систему условий с ограничениями знаменателей:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{\\frac{9^x}{9}}{\\frac{9^x}{9} - 1} - \\frac{5}{9^x - 1} - \\frac{36}{(9^x - 1)(9^x - 9)} \\ge 0 \\\\ 9^x - 1 \\neq 0 \\\\ 9^x - 9 \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{9^x}{9^x - 9} - \\frac{5}{9^x - 1} - \\frac{36}{(9^x - 1)(9^x - 9)} \\ge 0 \\\\ 9^x - 1 \\neq 0 \\\\ 9^x - 9 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 9^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Приведём рациональное выражение к общему знаменателю</span>
          <InlineMath math={`(t - 1)(t - 9)`} />:
        </div>
        <BlockMath math={`\\begin{cases} \\frac{t(t - 1) - 5(t - 9) - 36}{(t - 1)(t - 9)} \\ge 0 \\\\ t \\neq 1 \\\\ t \\neq 9 \\end{cases} \\iff \\begin{cases} \\frac{t^2 - t - 5t + 45 - 36}{(t - 1)(t - 9)} \\ge 0 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\frac{t^2 - 6t + 9}{(t - 1)(t - 9)} \\ge 0 \\\\ t > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{(t - 3)^2}{(t - 1)(t - 9)} \\ge 0 \\\\ t > 0 \\\\ t \\neq 1 \\\\ t \\neq 9 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Решим рациональное неравенство относительно</span>
          <InlineMath math={`t`} />.
          <span>Полный квадрат числителя</span>
          <InlineMath math={`(t - 3)^2 \\ge 0`} />
          <span>всегда неотрицателен, поэтому он даёт изолированный корень при равенстве нулю и не меняет знак неравенства при переходе через интервалы. Раскроем систему в равносильную совокупность:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t < 1 \\\\ &t = 3 \\\\ &t > 9 \\end{aligned} \\right. \\\\ t > 0 \\end{cases} \\iff \\left[ \\begin{aligned} &0 < 9^x < 1 \\\\ &9^x = 3 \\\\ &9^x > 9^1 \\end{aligned} \\right.`} />

        <p>Выразим переменную x, представив числа в виде степеней с основанием 9 &gt; 1 (монотонно возрастает):</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &9^x < 9^0 \\\\ &9^x = 9^{0{,}5} \\\\ &9^x > 9^1 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &x < 0 \\\\ &x = 0{,}5 \\\\ &x > 1 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "0{,}5", closed: true }, { label: "1", closed: false }]} selected={[[0, 1], [3, 4]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, 0) \\cup \\{0{,}5\\} \\cup (1; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 38,
    title: 'Задача 38 (ЕГЭ 2024)',
    mathA: '2\\log_{(x^2 - 6x + 10)^2}(5x^2 + 3) \\le \\log_{x^2 - 6x + 10}(4x^2 + 7x + 3)',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Вынесем показатель степени 2 из основания логарифма в левой части перед знаком логарифма:</p>
        <BlockMath math={`2 \\cdot \\frac{1}{2}\\log_{|x^2 - 6x + 10|}(5x^2 + 3) = \\log_{|x^2 - 6x + 10|}(5x^2 + 3)`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Выделим полный квадрат в выражении основания логарифма:</span>
          <InlineMath math={`x^2 - 6x + 10 = (x - 3)^2 + 1`} />.
          <span>Поскольку квадрат всегда неотрицателен, выражение</span>
          <InlineMath math={`(x - 3)^2 + 1 \\ge 1`} />
          <span>при любом положении переменной. Следовательно, знак модуля раскрывается однозначно со знаком «плюс», а само основание всегда строго больше нуля.</span>
        </div>

        <p>Перенесём все члены влево и перейдём к равносильной системе условий, удерживающей ОДЗ основания и аргументов логарифмов:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_{x^2 - 6x + 10}(5x^2 + 3) - \\log_{x^2 - 6x + 10}(4x^2 + 7x + 3) \\le 0 \\\\ x^2 - 6x + 10 \\neq 1 \\\\ 5x^2 + 3 > 0 \\\\ 4x^2 + 7x + 3 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем ОДЗ. Квадратный трёхчлен числителя</span>
          <InlineMath math={`5x^2 + 3 > 0`} />
          <span>выполняется при всех</span>
          <InlineMath math={`x \\in \\mathbb{R}`} />.
          <span>Условие на основание даёт:</span>
          <InlineMath math={`(x - 3)^2 + 1 \\neq 1 \\implies (x - 3)^2 \\neq 0 \\implies x \\neq 3`} />.
          <span>Разложим квадратный трёхчлен последнего условия по теореме Виета:</span>
          <InlineMath math={`4x^2 + 7x + 3 > 0 \\implies (x + 1)(4x + 3) > 0`} />.
        </div>

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) к разности логарифмов. Знак разности логарифмов совпадает со знаком произведения</span>
          <InlineMath math={`(a - 1)(f - g)`} />:
        </div>
        <BlockMath math={`\\iff \\begin{cases} (x^2 - 6x + 10 - 1)(5x^2 + 3 - (4x^2 + 7x + 3)) \\le 0 \\\\ x \\neq 3 \\\\ x \\in (-\\infty; \\, -1) \\cup (-0{,}75; \\, +\\infty) \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} (x^2 - 6x + 9)(x^2 - 7x) \\le 0 \\\\ x \\neq 3 \\\\ x \\in (-\\infty; \\, -1) \\cup (-0{,}75; \\, +\\infty) \\end{cases} \\iff \\begin{cases} (x - 3)^2 x(x - 7) \\le 0 \\\\ x \\neq 3 \\\\ x \\in (-\\infty; \\, -1) \\cup (-0{,}75; \\, +\\infty) \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку на ОДЗ множитель полного квадрата</span>
          <InlineMath math={`(x - 3)^2 > 0`} />
          <span>строго положителен (так как</span>
          <InlineMath math={`x \\neq 3`} />),
          <span>разделим на него обе части рационального неравенства. Система сводится к виду:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} x(x - 7) \\le 0 \\\\ x \\neq 3 \\\\ x \\in (-\\infty; \\, -1) \\cup (-0{,}75; \\, +\\infty) \\end{cases} \\iff \\begin{cases} 0 \\le x \\le 7 \\\\ x \\neq 3 \\\\ x \\in (-\\infty; \\, -1) \\cup (-0{,}75; \\, +\\infty) \\end{cases}`} />

        <p>Пересечём полученный отрезковый промежуток с лучами ОДЗ. Поскольку подмножество <InlineMath math={`[0; \\, 7]`} /> полностью лежит внутри интервала <InlineMath math={`(-0{,}75; \\, +\\infty)`} />, ограничения ОДЗ лишь выкалывают точку 3. Получаем:</p>
        <BlockMath math={`\\iff x \\in [0; \\, 3) \\cup (3; \\, 7]`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "0", closed: true }, { label: "3", closed: false }, { label: "7", closed: true }]} selected={[[1, 2], [2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[0; \\, 3) \\cup (3; \\, 7]`} />
        </div>
      </div>
    )
  },
  {
    id: 39,
    title: 'Задача 39 (ЕГЭ 2024)',
    mathA: '\\log_3\\left(\\frac{1}{x} - 1\\right) + \\log_3\\left(\\frac{1}{x} + 1\\right) \\ge \\log_3(8x - 1)',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используем формулу суммы логарифмов с одинаковым основанием. Перейдём к равносильной системе условий, содержащей ограничения на знаки аргументов всех логарифмов исходного выражения:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_3\\left[\\left(\\frac{1}{x} - 1\\right)\\left(\\frac{1}{x} + 1\\right)\\right] \\ge \\log_3(8x - 1) \\\\ \\frac{1}{x} - 1 > 0 \\\\ \\frac{1}{x} + 1 > 0 \\\\ 8x - 1 > 0 \\end{cases}`} />
        
        <p>Свернём произведение в первом аргументе по формуле разности квадратов и упростим систему ограничений ОДЗ</p>
        <BlockMath math={``} />

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания логарифмической функции с основанием</span>
          <InlineMath math={`3 > 1`} />,
          <span>перейдём от сравнения логарифмов к сравнению их подлогарифмических выражений:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{1}{x^2} - 1 \\ge 8x - 1 \\\\ \\frac{1}{8} < x < 1 \\end{cases} \\iff \\begin{cases} \\frac{1}{x^2} \\ge 8x \\\\ \\frac{1}{8} < x < 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Так как по системному ограничению</span>
          <InlineMath math={`x > \\frac{1}{8}`} />,
          <span>знаменатель</span>
          <InlineMath math={`x^2 > 0`} />
          <span>гарантированно строго положителен. Мы имеем право умножить на него обе части неравенства без изменения знака:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} 1 \\ge 8x^3 \\\\ \\frac{1}{8} < x < 1 \\end{cases} \\iff \\begin{cases} x^3 \\le \\frac{1}{8} \\\\ \\frac{1}{8} < x < 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Извлекая кубический корень из обеих частей (функция</span>
          <InlineMath math={`f(t) = t^3`} />
          <span>монотонно возрастает), получаем простейшее линейное ограничение:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} x \\le \\frac{1}{2} \\\\ \\frac{1}{8} < x < 1 \\end{cases} \\iff \\frac{1}{8} < x \\le \\frac{1}{2}`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "0{,}125", closed: false }, { label: "0{,}5", closed: true }]} selected={[[1, 2]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(\\frac{1}{8}; \\, \\frac{1}{2}\\right]`} />
        </div>
      </div>
    )
  },
  {
    id: 40,
    title: 'Задача 40 (ЕГЭ 2024)',
    mathA: '2(50^x + 8^x) > 20^x + 3 \\cdot 125^x',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Разложим основания степеней на простые множители и раскроем скобки в левой части:</p>
        <BlockMath math={`2 \\cdot (2 \\cdot 5^2)^x + 2 \\cdot (2^3)^x > (2^2 \\cdot 5)^x + 3 \\cdot (5^3)^x`} />
        <BlockMath math={`2 \\cdot 2^x \\cdot 5^{2x} + 2 \\cdot 2^{3x} - 2^{2x} \\cdot 5^x - 3 \\cdot 5^{3x} > 0`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Разделим обе части неравенства на строго положительное выражение</span>
          <InlineMath math={`5^{3x}`} />
          <span>(так как показательная функция</span>
          <InlineMath math={`5^{3x} > 0`} />
          <span>при любом положении переменной):</span>
        </div>
        <BlockMath math={`2 \\cdot \\left(\\frac{2}{5}\\right)^x + 2 \\cdot \\left(\\frac{2}{5}\\right)^{3x} - \\left(\\frac{2}{5}\\right)^{2x} - 3 > 0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = \\left(\\frac{2}{5}\\right)^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Получаем кубическое неравенство:</span>
        </div>
        <BlockMath math={`2t^3 - t^2 + 2t - 3 > 0`} />
        
        <p>Разложим многочлен на множители методом группировки слагаемых:</p>
        <BlockMath math={`2t^3 - 2t^2 + t^2 - t + 3t - 3 = 2t^2(t - 1) + t(t - 1) + 3(t - 1) = (t - 1)(2t^2 + t + 3) > 0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем знак квадратного трёхчлена</span>
          <InlineMath math={`2t^2 + t + 3`} />.
          <span>Его дискриминант</span>
          <InlineMath math={`D = 1 - 4 \\cdot 2 \\cdot 3 = -23 < 0`} />,
          <span>а старший коэффициент положителен. Значит, это выражение строго положительно при любом</span>
          <InlineMath math={`t`} />.
          <span>Разделим на него обе части неравенства:</span>
        </div>
        <BlockMath math={`\\iff t - 1 > 0 \\iff t > 1`} />

        <p>Выполним обратную замену переменной для показательной функции:</p>
        <BlockMath math={`\\iff \\left(\\frac{2}{5}\\right)^x > \\left(\\frac{2}{5}\\right)^0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку основание показательной функции</span>
          <InlineMath math={`0 < \\frac{2}{5} < 1`} />,
          <span>она является монотонно убывающей, и при переходе к показателям знак строгого неравенства меняется на противоположный:</span>
        </div>
        <BlockMath math={`\\iff x < 0`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }]} selected={[[0, 1]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, 0)`} />
        </div>
      </div>
    )
  },
  {
    id: 41,
    title: 'Задача 41 (ЕГЭ 2024)',
    mathA: '9^x - 3^x - 3^{1-x} + \\frac{1}{9^{x-1}} \\le 6',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используя свойства степеней, преобразуем члены неравенства: <InlineMath math={`3^{1-x} = \\frac{3}{3^x}`} /> и <InlineMath math={`\\frac{1}{9^{x-1}} = \\frac{1}{\\frac{9^x}{9}} = \\frac{9}{9^x}`} />.</p>
        <p>Перенесем шестерку влево и перейдём к равносильной системе условий с ограничением существования знаменателя:</p>
        <BlockMath math={`\\iff \\begin{cases} 9^x - 3^x - \\frac{3}{3^x} + \\frac{9}{9^x} - 6 \\le 0 \\\\ 9^x \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 3^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Тогда</span>
          <InlineMath math={`9^x = t^2`} />,
          <span>а система принимает рациональный вид:</span>
        </div>
        <BlockMath math={`\\begin{cases} t^2 - t - \\frac{3}{t} + \\frac{9}{t^2} - 6 \\le 0 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\left(t^2 + \\frac{9}{t^2}\\right) - \\left(t + \\frac{3}{t}\\right) - 6 \\le 0 \\\\ t > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод введения новой взаимно обратной переменной. Пусть</span>
          <InlineMath math={`u = t + \\frac{3}{t}`} />.
          <span>Возведём обе части в квадрат:</span>
          <InlineMath math={`u^2 = t^2 + 6 + \\frac{9}{t^2} \\implies t^2 + \\frac{9}{t^2} = u^2 - 6`} />.
          <span>Подставим замену во второе выражение:</span>
        </div>
        <BlockMath math={`(u^2 - 6) - u - 6 \\le 0 \\iff u^2 - u - 12 \\le 0 \\iff (u - 4)(u + 3) \\le 0`} />

        <p>Вернемся к переменной <InlineMath math={`t`} />. Так как <InlineMath math={`t > 0`} />, выражение <InlineMath math={`u = t + \\frac{3}{t} > 0`} /> всегда строго положительно, поэтому условие <InlineMath math={`u + 3 \\ge 0`} /> выполняется автоматически. Система упрощается до одного неравенства:</p>
        <BlockMath math={`t + \\frac{3}{t} - 4 \\le 0 \\iff \\frac{t^2 - 4t + 3}{t} \\le 0 \\iff \\frac{(t - 1)(t - 3)}{t} \\le 0`} />

        <p>Поскольку <InlineMath math={`t > 0`} />, знаменатель не влияет на знак. Решением рациональной части является отрезок: <InlineMath math={`1 \\le t \\le 3`} />.</p>
        <p>Выполним обратную замену переменной для показательной функции:</p>
        <BlockMath math={`\\iff 1 \\le 3^x \\le 3 \\iff 3^0 \\le 3^x \\le 3^1`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания показательной функции с основанием</span>
          <InlineMath math={`3 > 1`} />,
          <span>переходим к двойному линейному неравенству для показателей степеней:</span>
        </div>
        <BlockMath math={`\\iff 0 \\le x \\le 1`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "0", closed: true }, { label: "1", closed: true }]} selected={[[1, 2]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[0; \\, 1]`} />
        </div>
      </div>
    )
  },
  {
    id: 42,
    title: 'Задача 42 (ЕГЭ 2023)',
    mathA: '\\log_8(x^3 - 3x^2 + 3x - 1) \\ge \\log_2(x^2 - 1) - 5',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Выделим полный куб разности в аргументе первого логарифма и разложим разность квадратов во втором логарифме:</p>
        <BlockMath math={`x^3 - 3x^2 + 3x - 1 = (x - 1)^3`} />
        <BlockMath math={`x^2 - 1 = (x - 1)(x + 1)`} />
        
        <p>Перенесём все члены влево и перейдём к равносильной системе условий, удерживающей ОДЗ исходных логарифмов:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_{2^3}(x - 1)^3 - \\log_2((x - 1)(x + 1)) + 5 \\ge 0 \\\\ (x - 1)^3 > 0 \\\\ (x - 1)(x + 1) > 0 \\end{cases} \\iff \\begin{cases} \\log_2(x - 1) - \\log_2(x - 1) - \\log_2(x + 1) + 5 \\ge 0 \\\\ x > 1 \\\\ x \\in (-\\infty; \\,-1) \\cup (1; \\,+\\infty) \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Взаимно уничтожим противоположные слагаемые</span>
          <InlineMath math={`\\log_2(x - 1)`} />
          <span>в левой части неравенства. Система значительно упрощается и сводится к простейшему логарифмическому неравенству:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} 5 - \\log_2(x + 1) \\ge 0 \\\\ x > 1 \\end{cases} \\iff \\begin{cases} \\log_2(x + 1) \\le 5 \\\\ x > 1 \\end{cases}`} />

        <p>Потенциируя логарифм по основанию <InlineMath math={`2 > 1`} />, переходим к двойному линейному неравенству для аргумента:</p>
        <BlockMath math={`\\iff \\begin{cases} x + 1 \\le 2^5 \\\\ x > 1 \\end{cases} \\iff \\begin{cases} x \\le 31 \\\\ x > 1 \\end{cases} \\iff 1 < x \\le 31`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "1", closed: false }, { label: "31", closed: true }]} selected={[[1, 2]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(1; \\, 31]`} />
        </div>
      </div>
    )
  },
  {
    id: 43,
    title: 'Задача 43 (ЕГЭ 2023)',
    mathA: '(\\log_{0{,}25}^2(x + 3) - \\log_4(x^2 + 6x + 9) + 1) \\cdot \\log_4(x + 2) \\le 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Выделим полный квадрат в аргументе второго логарифма: <InlineMath math={`x^2 + 6x + 9 = (x + 3)^2`} />. Приведем первый логарифм к основанию 4, учитывая, что <InlineMath math={`0{,}25 = 4^{-1}`} />:</p>
        <BlockMath math={`\\log_{4^{-1}}^2(x + 3) = (-\\log_4(x + 3))^2 = \\log_4^2(x + 3)`} />
        <BlockMath math={`\\log_4(x + 3)^2 = 2\\log_4|x + 3|`} />
        
        <p>Перейдём к равносильной системе условий, удерживающей ОДЗ аргументов всех логарифмов исходного выражения:</p>
        <BlockMath math={`\\iff \\begin{cases} (\\log_4^2(x + 3) - 2\\log_4|x + 3| + 1) \\cdot \\log_4(x + 2) \\le 0 \\\\ x + 3 \\neq 0 \\\\ x + 2 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>По ОДЗ имеем</span>
          <InlineMath math={`x > -2`} />,
          <span>откуда аргумент</span>
          <InlineMath math={`x + 3 > 1 > 0`} />.
          <span>Следовательно, модуль раскрывается однозначно со знаком «плюс»:</span>
          <InlineMath math={`|x + 3| = x + 3`} />.
          <span>Свернём выражение в первой скобке по формуле квадрата разности:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} (\\log_4(x + 3) - 1)^2 \\cdot \\log_4(x + 2) \\le 0 \\\\ x > -2 \\end{cases} \\iff \\begin{cases} (\\log_4(x + 3) - \\log_4 4)^2 \\cdot (\\log_4(x + 2) - \\log_4 1) \\le 0 \\\\ x > -2 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) к обоим логарифмическим выражениям. Так как основание</span>
          <InlineMath math={`4 > 1`} />,
          <span>знаки разностей логарифмов полностью совпадают со знаками разностей их аргументов:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} (x + 3 - 4)^2 \\cdot (x + 2 - 1) \\le 0 \\\\ x > -2 \\end{cases} \\iff \\begin{cases} (x - 1)^2(x + 1) \\le 0 \\\\ x > -2 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Так как полный квадрат</span>
          <InlineMath math={`(x - 1)^2 \\ge 0`} />
          <span>всегда неотрицателен, он не влияет на знак строгого неравенства, но даёт изолированное решение при равенстве нулю</span>
          <InlineMath math={`x = 1`} />.
          <span>Раскроем систему в равносильную совокупность:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x + 1 \\le 0 \\\\ &x = 1 \\end{aligned} \\right. \\\\ x > -2 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x \\le -1 \\\\ &x = 1 \\end{aligned} \\right. \\\\ x > -2 \\end{cases} \\iff \\left[ \\begin{aligned} &-2 < x \\le -1 \\\\ &x = 1 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "-2", closed: false }, { label: "-1", closed: true }, { label: "1", closed: true }]} selected={[[1, 2]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-2; \\, -1] \\cup \\{1\\}`} />
        </div>
      </div>
    )
  },
  {
    id: 44,
    title: 'Задача 44 (ЕГЭ 2023)',
    mathA: '\\log_{25}((x - 4)(x^2 - 2x - 8)) + 1 \\ge 0{,}5\\log_5(x - 4)^2',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Разложим квадратный трёхчлен в аргументе логарифма на множители: <InlineMath math={`x^2 - 2x - 8 = (x - 4)(x + 2)`} />. Перепишем исходное неравенство, приведя основания логарифмов к общему основанию 5:</p>
        <BlockMath math={`\\log_{5^2}((x - 4)^2(x + 2)) + 1 \\ge \\frac{1}{2}\\log_5(x - 4)^2`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим логарифм произведения в левой части в сумму логарифмов. По свойствам степеней при вынесении чётного показателя 2 мы обязаны удержать аргумент под знаком модуля:</span>
          <InlineMath math={`\\log_5(x - 4)^2 = 2\\log_5|x - 4|`} />.
          <span>Запишем исходное выражение в виде равносильной системы с ОДЗ:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\frac{1}{2}\\left(\\log_5(x - 4)^2 + \\log_5(x + 2)\\right) + 1 \\ge \\frac{1}{2} \\cdot 2\\log_5|x - 4| \\\\ (x - 4)^2(x + 2) > 0 \\\\ x - 4 \\neq 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{1}{2} \\cdot 2\\log_5|x - 4| + \\frac{1}{2}\\log_5(x + 2) + 1 \\ge \\log_5|x - 4| \\\\ x + 2 > 0 \\\\ x \\neq 4 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\log_5|x - 4| + \\frac{1}{2}\\log_5(x + 2) + 1 \\ge \\log_5|x - 4| \\\\ x > -2 \\\\ x \\neq 4 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Взаимно уничтожим одинаковые слагаемые</span>
          <InlineMath math={`\\log_5|x - 4|`} />
          <span>в обеих частях неравенства. Ограничение</span>
          <InlineMath math={`x \\neq 4`} />
          <span>при этом строго удерживается в системе, фиксируя выколотую точку исходного ОДЗ:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\frac{1}{2}\\log_5(x + 2) + 1 \\ge 0 \\\\ x > -2 \\\\ x \\neq 4 \\end{cases} \\iff \\begin{cases} \\log_5(x + 2) \\ge -2 \\\\ x > -2 \\\\ x \\neq 4 \\end{cases}`} />

        <p>Потенциируя логарифмическое условие по основанию <InlineMath math={`5 > 1`} />, переходим к линейной системе интервалов:</p>
        <BlockMath math={`\\iff \\begin{cases} x + 2 \\ge 5^{-2} \\\\ x > -2 \\\\ x \\neq 4 \\end{cases} \\iff \\begin{cases} x + 2 \\ge \\frac{1}{25} \\\\ x > -2 \\\\ x \\neq 4 \\end{cases} \\iff \\begin{cases} x \\ge -1{,}96 \\\\ x \\neq 4 \\end{cases}`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "-1{,}96", closed: true }, { label: "4", closed: false }]} selected={[[1, 2], [2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[-1{,}96; \\, 4) \\cup (4; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 45,
    title: 'Задача 45 (ЕГЭ 2023)',
    mathA: '\\frac{\\log_3 x}{\\log_3\\left(\\frac{x}{27}\\right)} \\ge \\frac{2}{\\log_3 x} + \\frac{5}{\\log_3^2 x - \\log_3(x^3)}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используем свойства логарифма для преобразования выражений в знаменателях дробей:</p>
        <BlockMath math={`\\log_3\\left(\\frac{x}{27}\\right) = \\log_3 x - \\log_3 27 = \\log_3 x - 3`} />
        <BlockMath math={`\\log_3^2 x - \\log_3(x^3) = \\log_3^2 x - 3\\log_3 |x|`} />
        
        <p>Перенесём все члены влево и перейдём к равносильной системе условий с учётом ОДЗ логарифма (где по условию <InlineMath math={`x > 0`} />, следовательно, <InlineMath math={`|x| = x`} />):</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{\\log_3 x}{\\log_3 x - 3} - \\frac{2}{\\log_3 x} - \\frac{5}{\\log_3^2 x - 3\\log_3 x} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = \\log_3 x`} />.
          <span>Приведём рациональные дроби к общему знаменателю</span>
          <InlineMath math={`t(t - 3)`} />:
        </div>
        <BlockMath math={`\\begin{cases} \\frac{t \\cdot t - 2(t - 3) - 5}{t(t - 3)} \\ge 0 \\\\ t \\neq 3 \\\\ t \\neq 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{t^2 - 2t + 1}{t(t - 3)} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{(t - 1)^2}{t(t - 3)} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Решим рациональное неравенство относительно</span>
          <InlineMath math={`t`} />.
          <span>Полный квадрат числителя</span>
          <InlineMath math={`(t - 1)^2 \\ge 0`} />
          <span>всегда неотрицателен, поэтому он даёт изолированное решение при равенстве нулю и не меняет знак неравенства при переходе через интервалы:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t < 0 \\\\ &t = 1 \\\\ &t > 3 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_3 x < 0 \\\\ &\\log_3 x = 1 \\\\ &\\log_3 x > 3 \\end{aligned} \\right. \\\\ x > 0 \\end{cases}`} />

        <p>Потенциируя логарифмические условия по основанию 3 &gt; 1, переходим к переменной x:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x < 1 \\\\ &x = 3 \\\\ &x > 27 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\left[ \\begin{aligned} &0 < x < 1 \\\\ &x = 3 \\\\ &x > 27 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "1", closed: false }, { label: "3", closed: true }, { label: "27", closed: false }]} selected={[[1, 2], [4, 5]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(0; \\, 1) \\cup \\{3\\} \\cup (27; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 46,
    title: 'Задача 46 (ЕГЭ 2022)',
    mathA: '\\frac{\\log_2(32x) - 1}{\\log_2^2 x - \\log_2 x^5} \\ge -1',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используем свойства логарифма для преобразования членов неравенства:</p>
        <BlockMath math={`\\log_2(32x) = \\log_2 32 + \\log_2 x = 5 + \\log_2 x`} />
        <BlockMath math={`\\log_2 x^5 = 5\\log_2 |x|`} />
        
        <p>Перенесём единицу в левую часть и перейдём к равносильной системе условий с учётом ОДЗ логарифма (где по условию <InlineMath math={`x > 0`} />, следовательно, <InlineMath math={`|x| = x`} />):</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(5 + \\log_2 x) - 1}{\\log_2^2 x - 5\\log_2 x} + 1 \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{\\log_2 x + 4}{\\log_2 x(\\log_2 x - 5)} + 1 \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = \\log_2 x`} />.
          <span>Приведём рациональное выражение к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\frac{t + 4 + t(t - 5)}{t(t - 5)} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{t^2 - 4t + 4}{t(t - 5)} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{(t - 2)^2}{t(t - 5)} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Решим рациональное неравенство относительно</span>
          <InlineMath math={`t`} />.
          <span>Полный квадрат числителя</span>
          <InlineMath math={`(t - 2)^2 \\ge 0`} />
          <span>всегда неотрицателен, поэтому он даёт изолированный корень при равенстве нулю и не меняет знак неравенства при переходе через интервалы:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t < 0 \\\\ &t = 2 \\\\ &t > 5 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_2 x < 0 \\\\ &\\log_2 x = 2 \\\\ &\\log_2 x > 5 \\end{aligned} \\right. \\\\ x > 0 \\end{cases}`} />

        <p>Потенциируя логарифмические условия по основанию 2 &gt; 1, переходим к переменной x:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x < 1 \\\\ &x = 4 \\\\ &x > 32 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\left[ \\begin{aligned} &0 < x < 1 \\\\ &x = 4 \\\\ &x > 32 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "1", closed: false }, { label: "4", closed: true }, { label: "32", closed: false }]} selected={[[1, 2], [4, 5]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(0; \\, 1) \\cup \\{4\\} \\cup (32; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 47,
    title: 'Задача 47 (ЕГЭ 2022)',
    mathA: '\\frac{6}{5^x - 125} \\le \\frac{1}{5^x - 25}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Перенесем правую дробь влево и перейдём к равносильной системе условий с ограничениями знаменателей:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{6}{5^x - 125} - \\frac{1}{5^x - 25} \\le 0 \\\\ 5^x - 125 \\neq 0 \\\\ 5^x - 25 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 5^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Приведём рациональное выражение к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\frac{6(t - 25) - (t - 125)}{(t - 125)(t - 25)} \\le 0 \\\\ t \\neq 125 \\\\ t \\neq 25 \\end{cases} \\iff \\begin{cases} \\frac{6t - 150 - t + 125}{(t - 125)(t - 25)} \\le 0 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\frac{5t - 25}{(t - 125)(t - 25)} \\le 0 \\\\ t > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{5(t - 5)}{(t - 25)(t - 125)} \\le 0 \\\\ t > 0 \\end{cases}`} />

        <p>Решая рациональное неравенство для переменной <InlineMath math={`t`} /> методом интервалов, находим совокупность промежутков:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t \\le 5 \\\\ &25 < t < 125 \\end{aligned} \\right. \\\\ t > 0 \\end{cases} \\iff \\left[ \\begin{aligned} &0 < 5^x \\le 5^1 \\\\ &5^2 < 5^x < 5^3 \\end{aligned} \\right.`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания показательной функции с основанием</span>
          <InlineMath math={`5 > 1`} />,
          <span>переходим к числовым интервалам для переменной</span>
          <InlineMath math={`x`} />:
        </div>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &x \\le 1 \\\\ &2 < x < 3 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "1", closed: true }, { label: "2", closed: false }, { label: "3", closed: false }]} selected={[[0, 1], [2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, 1] \\cup (2; \\, 3)`} />
        </div>
      </div>
    )
  },
  {
    id: 48,
    title: 'Задача 48 (ЕГЭ 2022)',
    mathA: '\\log_{|x-5|}\\sqrt{x-3} \\le \\frac{1}{4}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`x>3,\\quad x\\ne4,5,6`} />. Сравним логарифм с <InlineMath math={`\\log_{|x-5|}|x-5|^{1/4}`} />, учитывая, возрастает или убывает логарифм:</p>
        <BlockMath math={`(|x-5|-1)\\left(\\sqrt{x-3}-\\sqrt[4]{|x-5|}\\right)\\le0.`} />
        <p>Оба выражения во второй скобке положительны, поэтому знак их разности сохраняется при возведении в четвёртую степень. Получаем</p>
        <BlockMath math={`(|x-5|-1)\\bigl((x-3)^2-|x-5|\\bigr)\\le0.`} />
        <p>При <InlineMath math={`3<x<5`} /> вторая скобка равна <InlineMath math={`(x-3)^2-(5-x)=(x-4)(x-1)`} />, а первая — <InlineMath math={`4-x`} />. Произведение неположительно. При <InlineMath math={`x>5`} /> вторая скобка равна <InlineMath math={`x^2-7x+14>0`} />, поэтому требуется <InlineMath math={`x-6<0`} />.</p>
        <p>Исключаем точки, запрещённые ОДЗ.</p>
        <InequalityNumberLine points={[{ label: '3', closed: false }, { label: '4', closed: false }, { label: '5', closed: false }, { label: '6', closed: false }]} selected={[[1,2],[2,3],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(3;4)\\cup(4;5)\\cup(5;6)`} /></div>
      </div>
    )
  },
  {
    id: 49,
    title: 'Задача 49 (ЕГЭ 2021)',
    mathA: '(16^x - 2 \\cdot 4^x + 1)^2 - 23 \\cdot (16^x - 2 \\cdot 4^x + 1) + 112 \\ge 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем первую замену переменной для повторяющегося выражения. Пусть</span>
          <InlineMath math={`t = 16^x - 2 \\cdot 4^x + 1`} stroke="currentColor" />.
          <span>Заметим, что трёхчлен сворачивается в полный квадрат:</span>
          <InlineMath math={`t = (4^x - 1)^2`} stroke="currentColor" />,
          <span>следовательно,</span>
          <InlineMath math={`t \\ge 0`} stroke="currentColor" />
          <span>при любом положении переменной.</span>
        </div>

        <p>Перепишем неравенство относительно новой переменной и разложим квадратный трёхчлен на линейные множители по теореме Виета (корни 7 и 16):</p>
        <BlockMath math={`t^2 - 23t + 112 \\ge 0 \\iff (t - 7)(t - 16) \\ge 0`} />

        <p>Решая полученное квадратичное неравенство методом интервалов с учётом ограничения <InlineMath math={`t \\ge 0`} />, переходим к совокупности:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &0 \\le t \\le 7 \\\\ &t \\ge 16 \\end{aligned} \\right.`} />

        <p>Выполним обратную замену переменной и запишем условия для показательной функции:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &0 \\le (4^x - 1)^2 \\le 7 \\\\ &(4^x - 1)^2 \\ge 16 \\end{aligned} \\right.`} />

        <p>Раскроем квадратичные неравенства в равносильные системы линейных модулей и корней:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &|4^x - 1| \\le \\sqrt{7} \\\\ &\\left[ \\begin{aligned} &4^x - 1 \\le -4 \\\\ &4^x - 1 \\ge 4 \\end{aligned} \\right. \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &-\\sqrt{7} \\le 4^x - 1 \\le \\sqrt{7} \\\\ &\\left[ \\begin{aligned} &4^x \\le -3 \\quad \\text{(нет реш.)} \\\\ &4^x \\ge 5 \\end{aligned} \\right. \\end{aligned} \\right.`} />
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &1 - \\sqrt{7} \\le 4^x \\le 1 + \\sqrt{7} \\\\ &4^x \\ge 5 \\end{aligned} \\right.`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку показательная функция всегда строго больше нуля (</span>
          <InlineMath math={`4^x > 0`} stroke="currentColor" />),
          <span>а число</span>
          <InlineMath math={`1 - \\sqrt{7} < 0`} />,
          <span>левая граница двойного неравенства выполняется автоматически при любых</span>
          <InlineMath math={`x`} />.
          <span>Совокупность упрощается до вида:</span>
        </div>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &4^x \\le 1 + \\sqrt{7} \\\\ &4^x \\ge 5 \\end{aligned} \\right.`} />

        <p>Логарифмируя показательные выражения по основанию 4 &gt; 1, находим финальные линейные промежутки:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &x \\le \\log_4(1 + \\sqrt{7}) \\\\ &x \\ge \\log_4 5 \\end{aligned} \\right.`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, \\log_4(1 + \\sqrt{7})] \\cup [\\log_4 5; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 50,
    title: 'Задача 50 (ЕГЭ 2020)',
    mathA: 'x^2 \\log_{243}(4 - x) \\le \\log_3(x^2 - 8x + 16)',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`x<4`} />. По свойствам логарифмов</p>
        <BlockMath math={`\\log_{243}(4-x)=\\frac15\\log_3(4-x),\\qquad \\log_3(x^2-8x+16)=2\\log_3(4-x).`} />
        <p>Перенесём всё влево. Знак <InlineMath math={`\\log_3(4-x)`} /> совпадает со знаком <InlineMath math={`3-x`} />:</p>
        <BlockMath math={`(x^2-10)\\log_3(4-x)\\le0 \\iff (x^2-10)(3-x)\\le0,\\qquad x<4.`} />
        <p>Точка <InlineMath math={`x=3`} /> входит в ответ: оба логарифма в исходном неравенстве равны нулю.</p>
        <InequalityNumberLine points={[{ label: '-\\sqrt{10}', closed: true }, { label: '3', closed: true }, { label: '\\sqrt{10}', closed: true }, { label: '4', closed: false }]} selected={[[1,2],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`[-\\sqrt{10};3]\\cup[\\sqrt{10};4)`} /></div>
      </div>
    )
  },
  {
    id: 51,
    title: 'Задача 51 (ЕГЭ 2019)',
    mathA: '\\frac{9^x + 2 \\cdot 3^x - 117}{3^x - 27} \\le 1',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Перенесем единицу в левую часть и запишем равносильную систему условий с ограничением знаменателя:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{9^x + 2 \\cdot 3^x - 117}{3^x - 27} - 1 \\le 0 \\\\ 3^x - 27 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 3^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Приведём выражение в первой строке к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\frac{t^2 + 2t - 117 - (t - 27)}{t - 27} \\le 0 \\\\ t \\neq 27 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\frac{t^2 + t - 90}{t - 27} \\le 0 \\\\ t > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим квадратный трёхчлен в числителе по теореме Виета (корни \(-10\) и \(9\)):</span>
          <InlineMath math={`t^2 + t - 90 = (t + 10)(t - 9)`} />.
          <span>Система принимает вид:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(t + 10)(t - 9)}{t - 27} \\le 0 \\\\ t > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку по условию замены</span>
          <InlineMath math={`t > 0`} />,
          <span>множитель</span>
          <InlineMath math={`t + 10 > 10 > 0`} />
          <span>всегда строго положителен и не влияет на знак неравенства. Разделим на него обе части рациональной дроби:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{t - 9}{t - 27} \\le 0 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} 9 \\le t < 27 \\\\ t > 0 \\end{cases} \\iff 9 \\le t < 27`} />

        <p>Выполним обратную замену переменной для показательной функции:</p>
        <BlockMath math={`\\iff 9 \\le 3^x < 27 \\iff 3^2 \\le 3^x < 3^3`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания показательной функции с основанием</span>
          <InlineMath math={`3 > 1`} />,
          <span>переходим к двойному линейному неравенству для показателей степеней:</span>
        </div>
        <BlockMath math={`\\iff 2 \\le x < 3`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "2", closed: true }, { label: "3", closed: false }]} selected={[[1, 2]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[2; \\, 3)`} />
        </div>
      </div>
    )
  },
  {
    id: 52,
    title: 'Задача 52 (ЕГЭ 2019)',
    mathA: '\\frac{4^{x^2 + x - 4} - 0{,}5 \\cdot 2^{x^2 - 2x - 1}}{0{,}2 \\cdot 5^x - 1} \\le 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Приведем все степени в числителе к общему основанию 2, а знаменатель перепишем через основание 5:</p>
        <BlockMath math={`4^{x^2 + x - 4} = (2^2)^{x^2 + x - 4} = 2^{2x^2 + 2x - 8}`} />
        <BlockMath math={`0{,}5 \\cdot 2^{x^2 - 2x - 1} = 2^{-1} \\cdot 2^{x^2 - 2x - 1} = 2^{x^2 - 2x - 2}`} />
        <BlockMath math={`0{,}2 \\cdot 5^x - 1 = 5^{-1} \\cdot 5^x - 5^0 = 5^{x-1} - 5^0`} />
        
        <p>Перейдём к равносильной системе условий, удерживающей ограничения на существование знаменателя дроби:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{2^{2x^2 + 2x - 8} - 2^{x^2 - 2x - 2}}{5^{x-1} - 5^0} \\le 0 \\\\ 5^{x-1} - 5^0 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) независимо для числителя и знаменателя. Так как основания степеней</span>
          <InlineMath math={`2 > 1`} />
          <span>и</span>
          <InlineMath math={`5 > 1`} />,
          <span>знаки разностей функций полностью совпадают со знаками разностей их показателей:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(2x^2 + 2x - 8) - (x^2 - 2x - 2)}{x - 1 - 0} \\le 0 \\\\ x - 1 \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{x^2 + 4x - 6}{x - 1} \\le 0 \\\\ x \\neq 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Найдем корни квадратного трёхчлена в числителе дроби через дискриминант:</span>
          <InlineMath math={`D/4 = 4 - 1(-6) = 10`} />,
          <span>откуда</span>
          <InlineMath math={`x = -2 \\pm \\sqrt{10}`} />.
          <span>Разложим числитель на линейные скобки:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(x - (-2 - \\sqrt{10}))(x - (-2 + \\sqrt{10}))}{x - 1} \\le 0 \\\\ x \\neq 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Оценим точное положение иррационального корня на оси: так как выполняется неравенство</span>
          <InlineMath math={`9 < 10 < 16 \\implies 3 < \\sqrt{10} < 4`} />,
          <span>добавляя \(-2\), получаем точную оценку:</span>
          <InlineMath math={`1 < -2 + \\sqrt{10} < 2`} />.
          <span>Следовательно, точка</span>
          <InlineMath math={`-2 + \\sqrt{10}`} />
          <span>лежит строго правее выколотой точки знаменателя</span>
          <InlineMath math={`x = 1`} />.
        </div>

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "-2-\\sqrt{10}", closed: true }, { label: "1", closed: false }, { label: "-2+\\sqrt{10}", closed: true }]} selected={[[0, 1], [2, 3]]} />

        <p>Объединяя полученные интервалы пересечения, получаем окончательное решение:</p>
        <BlockMath math={`\\iff x \\in (-\\infty; \\, -2 - \\sqrt{10}] \\cup (1; \\, -2 + \\sqrt{10}]`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, -2 - \\sqrt{10}] \\cup (1; \\, -2 + \\sqrt{10}]`} />
        </div>
      </div>
    )
  },
  {
    id: 53,
    title: 'Задача 53 (ЕГЭ 2018)',
    mathA: '3^{x^2} \\cdot 5^{x-1} \\ge 3',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Поскольку обе части неравенства строго положительны при любых значениях переменной, прологарифмируем их по основанию <InlineMath math={`3 > 1`} /> с сохранением знака неравенства:</p>
        <BlockMath math={`\\log_3\\left(3^{x^2} \\cdot 5^{x-1}\\right) \\ge \\log_3 3`} />
        
        <p>Используя свойство логарифма произведения, разложим левую часть в сумму и вынесем показатели степеней:</p>
        <BlockMath math={`\\log_3 3^{x^2} + \\log_3 5^{x-1} \\ge 1 \\iff x^2 + (x - 1)\\log_3 5 \\ge 1`} />
        <BlockMath math={`\\iff x^2 + x\\log_3 5 - \\log_3 5 - 1 \\ge 0`} />
        
        <p>Сгруппируем слагаемые для разложения квадратного трёхчлена на линейные множители:</p>
        <BlockMath math={`(x^2 - 1) + \\log_3 5 \\cdot (x - 1) \\ge 0 \\iff (x - 1)(x + 1) + \\log_3 5 \\cdot (x - 1) \\ge 0`} />
        <BlockMath math={`\\iff (x - 1)\\left(x + 1 + \\log_3 5\\right) \\ge 0 \\iff (x - 1)\\left(x - (-1 - \\log_3 5)\\right) \\ge 0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Оценим положение левого корня на числовой оси. Так как</span>
          <InlineMath math={`\\log_3 5 > 0`} />,
          <span>то значение</span>
          <InlineMath math={`-1 - \\log_3 5 < -1`} />,
          <span>следовательно, этот корень лежит строго левее единицы. Решим полученное неравенство методом интервалов:</span>
        </div>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &x \\le -1 - \\log_3 5 \\\\ &x \\ge 1 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "-1 - \\log_3 5", closed: true }, { label: "1", closed: true }]} selected={[[0, 1], [2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, -1 - \\log_3 5] \\cup [1; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 54,
    title: 'Задача 54 (ЕГЭ 2018)',
    mathA: '2\\log_2(1 - 2x) - \\log_2\\left(\\frac{1}{x} - 2\\right) \\le \\log_2(4x^2 + 6x - 1)',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ первых логарифмов: <InlineMath math={`0<x<\\frac12`} />. После объединения логарифмов слева получаем</p>
        <BlockMath math={`2\\log_2(1-2x)-\\log_2\\left(\\frac1x-2\\right)=\\log_2\\bigl(x(1-2x)\\bigr).`} />
        <p>Левый аргумент на указанном промежутке положителен. При сравнении аргументов правый автоматически будет положителен:</p>
        <BlockMath math={`x(1-2x)\\le4x^2+6x-1 \\iff 6x^2+5x-1\\ge0 \\iff (6x-1)(x+1)\\ge0.`} />
        <p>Пересекаем решение квадратного неравенства с <InlineMath math={`0<x<1/2`} />.</p>
        <InequalityNumberLine points={[{ label: '0', closed: false }, { label: '\\frac16', closed: true }, { label: '\\frac12', closed: false }]} selected={[[2,3]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\left[\\frac16;\\frac12\\right)`} /></div>
      </div>
    )
  },
  {
    id: 55,
    title: 'Задача 55 (ЕГЭ 2018)',
    mathA: '2\\log_7(x\\sqrt{2}) - \\log_7\\left(\\frac{x}{1-x}\\right) \\le \\log_7\\left(8x^2 + \\frac{1}{x} - 5\\right)',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ первых двух логарифмов даёт <InlineMath math={`0<x<1`} />; аргумент справа также должен быть положителен.</p>
        <p>На этой области объединим логарифмы слева:</p>
        <BlockMath math={`2\\log_7(x\\sqrt{2})-\\log_7\\frac{x}{1-x}=\\log_7\\bigl(2x(1-x)\\bigr).`} />
        <p>Левый аргумент положителен. Если после сравнения аргументов правый не меньше левого, то и он автоматически положителен. Поэтому получаем равносильное на <InlineMath math={`0<x<1`} /> неравенство:</p>
        <BlockMath math={`2x(1-x)\\le8x^2+\\frac1x-5 \\iff 10x^3-2x^2-5x+1\\ge0.`} />
        <BlockMath math={`(5x-1)(2x^2-1)\\ge0.`} />
        <p>Отметим корни и пересечём подходящие промежутки с <InlineMath math={`(0;1)`} />.</p>
        <InequalityNumberLine points={[{ label: '0', closed: false }, { label: '\\frac15', closed: true }, { label: '\\frac{\\sqrt{2}}{2}', closed: true }, { label: '1', closed: false }]} selected={[[1,2],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\left(0;\\frac15\\right]\\cup\\left[\\frac{\\sqrt{2}}{2};1\\right)`} /></div>
      </div>
    )
  },
  {
    id: 56,
    title: 'Задача 56 (ЕГЭ 2018)',
    mathA: '\\frac{6^x - 4 \\cdot 3^x}{x \\cdot 2^x - 5 \\cdot 2^x - 4x + 20} \\le \\frac{1}{x - 5}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Разложим числитель левой дроби, вынеся общий множитель: <InlineMath math={`6^x - 4 \\cdot 3^x = 3^x(2^x - 4)`} />.</p>
        <p>Разложим знаменатель левой дроби методом попарной группировки слагаемых:</p>
        <BlockMath math={`x \\cdot 2^x - 5 \\cdot 2^x - 4x + 20 = 2^x(x - 5) - 4(x - 5) = (2^x - 4)(x - 5)`} />

        <p>Перенесем правую дробь влево и запишем равносильную систему условий с ограничениями знаменателей:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{3^x(2^x - 4)}{(2^x - 4)(x - 5)} - \\frac{1}{x - 5} \\le 0 \\\\ 2^x - 4 \\neq 0 \\\\ x - 5 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>По ОДЗ системы множитель</span>
          <InlineMath math={`2^x - 4 \\neq 0 \\implies 2^x \\neq 2^2 \\implies x \\neq 2`} />.
          <span>При этом условии мы имеем право сократить дробь на общую скобку</span>
          <InlineMath math={`(2^x - 4)`} />:
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{3^x}{x - 5} - \\frac{1}{x - 5} \\le 0 \\\\ x \\neq 2 \\\\ x \\neq 5 \\end{cases} \\iff \\begin{cases} \\frac{3^x - 1}{x - 5} \\le 0 \\\\ x \\neq 2 \\end{cases} \\iff \\begin{cases} \\frac{3^x - 3^0}{x - 5} \\le 0 \\\\ x \\neq 2 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) к числителю дроби. Так как основание степени</span>
          <InlineMath math={`3 > 1`} />,
          <span>знак разности степеней полностью совпадает со знаком разности показателей:</span>
          <InlineMath math={`(3^x - 3^0) \\to (x - 0) = x`} />.
          <span>Система сводится к линейно-рациональному виду:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{x}{x - 5} \\le 0 \\\\ x \\neq 2 \\end{cases} \\iff \\begin{cases} 0 \\le x < 5 \\\\ x \\neq 2 \\end{cases}`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "0", closed: true }, { label: "2", closed: false }, { label: "5", closed: false }]} selected={[[1, 2], [2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[0; \\, 2) \\cup (2; \\, 5)`} />
        </div>
      </div>
    )
  },
  {
    id: 57,
    title: 'Задача 57 (ЕГЭ 2018)',
    mathA: '2^{x+1} + 0{,}5^{x-3} \\ge 17',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используя свойства степеней, приведем показательные слагаемые к основанию 2:</p>
        <BlockMath math={`2^{x+1} = 2 \\cdot 2^x`} />
        <BlockMath math={`0{,}5^{x-3} = \\left(\\frac{1}{2}\\right)^{x-3} = 2^{-(x-3)} = 2^{3-x} = \\frac{2^3}{2^x} = \\frac{8}{2^x}`} />
        
        <p>Перенесем число 17 влево и запишем равносильную систему условий с ограничением замены:</p>
        <BlockMath math={`\\iff \\begin{cases} 2 \\cdot 2^x + \\frac{8}{2^x} - 17 \\ge 0 \\\\ 2^x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 2^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Приведем выражение к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\frac{2t^2 - 17t + 8}{t} \\ge 0 \\\\ t > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим квадратный трёхчлен в числителе на множители (корни</span>
          <InlineMath math={`t = 0{,}5`} />
          <span>и</span>
          <InlineMath math={`t = 8`} />):
          <InlineMath math={`2t^2 - 17t + 8 = 2(t - 0{,}5)(t - 8)`} />.
          <span>Так как знаменатель</span>
          <InlineMath math={`t > 0`} />
          <span>строго положителен, он не влияет на знак. Неравенство распадается на простейшую показательную совокупность:</span>
        </div>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &t \\le 0{,}5 \\\\ &t \\ge 8 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &2^x \\le 2^{-1} \\\\ &2^x \\ge 2^3 \\end{aligned} \\right.`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания показательной функции с основанием</span>
          <InlineMath math={`2 > 1`} />,
          <span>переходим к числовым промежуткам для показателей степени без изменения знаков неравенств:</span>
        </div>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &x \\le -1 \\\\ &x \\ge 3 \\end{aligned} \\right.`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, -1] \\cup [3; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 58,
    title: 'Задача 58 (ЕГЭ 2017)',
    mathA: '\\log_2^2(25 - x^2) - 7\\log_2(25 - x^2) + 12 \\ge 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>Перейдём к равносильной системе условий, содержащей исходное неравенство и ограничение ОДЗ:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_2^2(25 - x^2) - 7\\log_2(25 - x^2) + 12 \\ge 0 \\\\ 25 - x^2 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = \\log_2(25 - x^2)`} />.
          <span>Разложим квадратный трёхчлен по теореме Виета:</span>
        </div>
        <BlockMath math={`t^2 - 7t + 12 \\ge 0 \\iff (t - 3)(t - 4) \\ge 0`} />
        
        <p>Решим полученное неравенство для переменной <InlineMath math={`t`} /> методом интервалов:</p>

        {/* 📈 ЧЕРТЁЖ ДЛЯ ПЕРЕМЕННОЙ T */}
        <InequalityNumberLine points={[{ label: "3", closed: true }, { label: "4", closed: true }]} selected={[[0, 1], [2, 3]]} variable="t" />

        <p>Возвращаемся к системе ограничений для аргумента логарифма:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_2(25 - x^2) \\le 3 \\\\ &\\log_2(25 - x^2) \\ge 4 \\end{aligned} \\right. \\\\ 25 - x^2 > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &25 - x^2 \\le 8 \\\\ &25 - x^2 \\ge 16 \\end{aligned} \\right. \\\\ x^2 < 25 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x^2 \\ge 17 \\\\ &x^2 \\le 9 \\end{aligned} \\right. \\\\ -5 < x < 5 \\end{cases}`} />

        <p>Раскроем квадратичные условия совокупности в линейные промежутки:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x \\in (-\\infty; \\, -\\sqrt{17}] \\cup [\\sqrt{17}; \\, +\\infty) \\\\ &-3 \\le x \\le 3 \\end{aligned} \\right. \\\\ -5 < x < 5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку</span>
          <InlineMath math={`4 < \\sqrt{17} < 5`} />,
          <span>визуализируем итоговое пересечение условий с ОДЗ методом интервалов:</span>
        </div>
        {/* 🌌 ЧЕРТЁЖ ДЛЯ ПЕРЕМЕННОЙ X */}
        <InequalityNumberLine points={[{ label: "-5", closed: false }, { label: "-\\sqrt{17}", closed: true }, { label: "-3", closed: true }, { label: "3", closed: true }, { label: "\\sqrt{17}", closed: true }, { label: "5", closed: false }]} selected={[[1, 2], [3, 4], [5, 6]]} />

        <p>Сводя пересечения интервалов на числовой прямой, получаем окончательное решение:</p>
        <BlockMath math={`\\iff x \\in (-5; \\, -\\sqrt{17}] \\cup [-3; \\, 3] \\cup [\\sqrt{17}; \\, 5)`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-5; \\, -\\sqrt{17}] \\cup [-3; \\, 3] \\cup [\\sqrt{17}; \\, 5)`} />
        </div>
      </div>
    )
  },
  {
    id: 59,
    title: 'Задача 59 (ЕГЭ 2017)',
    mathA: '(9^x - 2 \\cdot 3^x)^2 - 62 \\cdot (9^x - 2 \\cdot 3^x) - 63 \\ge 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем первую замену переменной для повторяющегося выражения. Пусть</span>
          <InlineMath math={`t = 9^x - 2 \\cdot 3^x`} />.
          <span>Исходное неравенство сводится к квадратичному виду относительно переменной</span>
          <InlineMath math={`t`} />:
        </div>
        <BlockMath math={`t^2 - 62t - 63 \\ge 0`} />
        
        <p>Разложим квадратный трёхчлен на линейные множители по теореме Виета (корни \(-1\) и \(63\)):</p>
        <BlockMath math={`(t + 1)(t - 63) \\ge 0`} />

        <p>Решая рациональное неравенство методом интервалов, переходим к совокупности условий:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &t \\le -1 \\\\ &t \\ge 63 \\end{aligned} \\right.`} />

        <p>Выполним обратную замену переменной и разложим условия для показательной функции:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &9^x - 2 \\cdot 3^x \\le -1 \\\\ &9^x - 2 \\cdot 3^x \\ge 63 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &(3^x)^2 - 2 \\cdot 3^x + 1 \\le 0 \\\\ &(3^x)^2 - 2 \\cdot 3^x - 63 \\ge 0 \\end{aligned} \\right.`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем вторую замену переменной: пусть</span>
          <InlineMath math={`u = 3^x`} />
          <span>(где</span>
          <InlineMath math={`u > 0`} />).
          <span>Совокупность принимает вид:</span>
        </div>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &u^2 - 2u + 1 \\le 0 \\\\ &u^2 - 2u - 63 \\ge 0 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &(u - 1)^2 \\le 0 \\\\ &(u + 7)(u - 9) \\ge 0 \\end{aligned} \\right.`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Решим каждое условие совокупности. Полный квадрат</span>
          <InlineMath math={`(u - 1)^2 \\le 0`} />
          <span>может быть равен только нулю, что даёт корень</span>
          <InlineMath math={`u = 1`} stroke="currentColor" />.
          <span>Второе неравенство с учётом ограничения</span>
          <InlineMath math={`u > 0`} />
          <span>сводится к лучу</span>
          <InlineMath math={`u \\ge 9`} stroke="currentColor" />.
        </div>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &u = 1 \\\\ &u \\ge 9 \\end{aligned} \\right.`} />

        <p>Выполним обратную замену для показательной функции по основанию 3 &gt; 1:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &3^x = 3^0 \\\\ &3^x \\ge 3^2 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &x = 0 \\\\ &x \\ge 2 \\end{aligned} \\right.`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "0", closed: true }, { label: "2", closed: true }]} selected={[[2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\{0\\} \\cup [2; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 60,
    title: 'Задача 60 (ЕГЭ 2016)',
    mathA: '\\frac{25^x - 5^{x+2} + 26}{5^x - 1} + \\frac{25^x - 7 \\cdot 5^x + 1}{5^x - 7} \\le 2 \\cdot 5^x - 24',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение inequality:</p>
        
        <p>Выделим целые части в каждой дроби левой части неравенства с помощью алгебраического деления или подбора слагаемых:</p>
        <BlockMath math={`\\frac{(5^x)^2 - 25 \\cdot 5^x + 26}{5^x - 1} = \\frac{(5^x)^2 - 5^x - 24\\cdot 5^x + 24 + 2}{5^x - 1} = 5^x - 24 + \\frac{2}{5^x - 1}`} />
        <BlockMath math={`\\frac{(5^x)^2 - 7 \\cdot 5^x + 1}{5^x - 7} = 5^x + \\frac{1}{5^x - 7}`} />
        
        <p>Подставим полученные выражения в исходное неравенство и перейдём к равносильной системе условий, удерживающей ограничения знаменателей:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left(5^x - 24 + \\frac{2}{5^x - 1}\\right) + \\left(5^x + \\frac{1}{5^x - 7}\\right) \\le 2 \\cdot 5^x - 24 \\\\ 5^x - 1 \\neq 0 \\\\ 5^x - 7 \\neq 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} 2 \\cdot 5^x - 24 + \\frac{2}{5^x - 1} + \\frac{1}{5^x - 7} \\le 2 \\cdot 5^x - 24 \\\\ 5^x \\neq 1 \\\\ 5^x \\neq 7 \\end{cases} \\iff \\begin{cases} \\frac{2}{5^x - 1} + \\frac{1}{5^x - 7} \\le 0 \\\\ 5^x \\neq 1 \\\\ 5^x \\neq 7 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 5^x`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Приведем полученные рациональные дроби к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\begin{cases} \\frac{2(t - 7) + (t - 1)}{(t - 1)(t - 7)} \\le 0 \\\\ t \\neq 1 \\\\ t \\neq 7 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\frac{3t - 15}{(t - 1)(t - 7)} \\le 0 \\\\ t > 0 \\end{cases} \\iff \\begin{cases} \\frac{3(t - 5)}{(t - 1)(t - 7)} \\le 0 \\\\ t > 0 \\end{cases}`} />

        <p>Решая рациональное неравенство для переменной <InlineMath math={`t`} /> методом интервалов, находим совокупность промежутков:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &t < 1 \\\\ &5 \\le t < 7 \\end{aligned} \\right. \\\\ t > 0 \\end{cases} \\iff \\left[ \\begin{aligned} &0 < 5^x < 5^0 \\\\ &5^1 \\le 5^x < 7 \\end{aligned} \\right.`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Логарифмируя показательные выражения по основанию</span>
          <InlineMath math={`5 > 1`} />,
          <span>переходим к числовым интервалам для переменной</span>
          <InlineMath math={`x`} />:
        </div>
        <BlockMath math={`\\iff x \\in (-\\infty; \\, 0) \\cup [1; \\, \\log_5 7)`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "1", closed: true }, { label: "\\log_5 7", closed: false }]} selected={[[0, 1], [2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, 0) \\cup [1; \\, \\log_5 7)`} />
        </div>
      </div>
    )
  },
  {
    id: 61,
    title: 'Задача 61 (ЕГЭ 2016)',
    mathA: '2 \\log_{(x^2 - 8x + 17)^2}(3x^2 + 5) \\le \\log_{x^2 - 8x + 17}(2x^2 + 7x + 5)',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Вынесем показатель степени 2 из основания логарифма в левой части перед знак логарифма:</p>
        <BlockMath math={`2 \\cdot \\frac{1}{2}\\log_{|x^2 - 8x + 17|}(3x^2 + 5) = \\log_{|x^2 - 8x + 17|}(3x^2 + 5)`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Выделим полный квадрат в выражении основания логарифма:</span>
          <InlineMath math={`x^2 - 8x + 17 = (x - 4)^2 + 1`} />.
          <span>Поскольку квадрат вещественного числа всегда неотрицателен, выражение</span>
          <InlineMath math={`(x - 4)^2 + 1 \\ge 1`} />
          <span>при любом положении переменной. Модуль раскрывается однозначно со знаком «плюс».</span>
        </div>

        <p>Перенесем все члены влево и перейдём к равносильной системе условий с учётом ОДЗ:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_{x^2 - 8x + 17}(3x^2 + 5) - \\log_{x^2 - 8x + 17}(2x^2 + 7x + 5) \\le 0 \\\\ x^2 - 8x + 17 \\neq 1 \\\\ 3x^2 + 5 > 0 \\\\ 2x^2 + 7x + 5 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем ОДЗ. Квадратный трёхчлен</span>
          <InlineMath math={`3x^2 + 5 > 0`} />
          <span>выполняется при всех x. Условие на основание даёт:</span>
          <InlineMath math={`(x - 4)^2 \\neq 0 \\implies x \\neq 4`} />.
          <span>Разложим квадратный трёхчлен последнего условия на линейные скобки:</span>
        </div>
        <BlockMath math={`2x^2 + 7x + 5 > 0 \\iff 2(x + 2{,}5)(x + 1) > 0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей к разности логарифмов. Знак разности логарифмов совпадает со знаком произведения</span>
          <InlineMath math={`(a - 1)(f - g)`} />:
        </div>
        <BlockMath math={`\\iff \\begin{cases} (x^2 - 8x + 17 - 1)(3x^2 + 5 - (2x^2 + 7x + 5)) \\le 0 \\\\ x \\neq 4 \\\\ x \\in (-\\infty; \\, -2{,}5) \\cup (-1; \\, +\\infty) \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} (x - 4)^2 x(x - 7) \\le 0 \\\\ x \\neq 4 \\\\ x \\in (-\\infty; \\, -2{,}5) \\cup (-1; \\, +\\infty) \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку на ОДЗ множитель полного квадрата</span>
          <InlineMath math={`(x - 4)^2 > 0`} />
          <span>строго положителен, разделим на него обе части. Система сводится к виду:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} x(x - 7) \\le 0 \\\\ x \\neq 4 \\\\ x \\in (-\\infty; \\, -2{,}5) \\cup (-1; \\, +\\infty) \\end{cases} \\iff x \\in [0; \\, 4) \\cup (4; \\, 7]`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "0", closed: true }, { label: "4", closed: false }, { label: "7", closed: true }]} selected={[[1, 2], [2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[0; \\, 4) \\cup (4; \\, 7]`} />
        </div>
      </div>
    )
  },
  {
    id: 62,
    title: 'Задача 62 (ЕГЭ 2014)',
    mathA: '\\begin{cases} 36^{x-\\frac{1}{2}} - 7 \\cdot 6^{x-1} + 1 \\ge 0 \\\\ x \\cdot \\log_4(5 - 3x - x^2) \\ge 0 \\end{cases}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>В первом неравенстве положим <InlineMath math={`t=6^{x-1}>0`} />. Тогда</p>
        <BlockMath math={`36^{x-1/2}-7\\cdot6^{x-1}+1=6t^2-7t+1=(6t-1)(t-1)\\ge0.`} />
        <p>Следовательно, <InlineMath math={`t\\le\\frac16`} /> или <InlineMath math={`t\\ge1`} />, то есть <InlineMath math={`x\\le0`} /> или <InlineMath math={`x\\ge1`} />.</p>
        <p>Для второго неравенства необходимо <InlineMath math={`5-3x-x^2>0`} />, то есть <InlineMath math={`\\frac{-3-\\sqrt{29}}2<x<\\frac{-3+\\sqrt{29}}2`} />. Учитывая знак x и логарифма, получаем</p>
        <BlockMath math={`x\\in\\left(\\frac{-3-\\sqrt{29}}2;-4\\right]\\cup[0;1].`} />
        <p>Пересекаем это множество с решением первого неравенства: из отрезка <InlineMath math={`[0;1]`} /> остаются только его концы.</p>
        <InequalityNumberLine points={[{ label: '\\frac{-3-\\sqrt{29}}2', closed: false }, { label: '-4', closed: true }, { label: '0', closed: true }, { label: '1', closed: true }]} selected={[[1,2]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\left(\\frac{-3-\\sqrt{29}}2;-4\\right]\\cup\\{0;1\\}`} /></div>
      </div>
    )
  },
  {
    id: 63,
    title: 'Задача 63 (ЕГЭ 2014)',
    mathA: '\\begin{cases} \\log_{11-x}(x+7) \\cdot \\log_{x+5}(9-x) \\le 0 \\\\ 64^{x^2-3x+20} - 0{,}125^{2x^2-6x-200} \\le 0 \\end{cases}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ логарифмов: <InlineMath math={`-5<x<9,\\quad x\\ne-4`} />. На ней <InlineMath math={`x+7>1`} /> и <InlineMath math={`11-x>1`} />, поэтому первый логарифм строго положителен.</p>
        <p>Второй логарифм неположителен на <InlineMath math={`(-5;-4)\\cup[8;9)`} />: его основание меньше единицы на первом промежутке и больше единицы на втором, а аргумент равен единице при <InlineMath math={`x=8`} />.</p>
        <p>Приводим второе неравенство системы к основанию 2:</p>
        <BlockMath math={`6(x^2-3x+20)\\le-3(2x^2-6x-200) \\iff x^2-3x-40\\le0 \\iff -5\\le x\\le8.`} />
        <p>Пересекаем найденные множества; точка 8 подходит обоим условиям.</p>
        <InequalityNumberLine points={[{ label: '-5', closed: false }, { label: '-4', closed: false }, { label: '8', closed: true }, { label: '9', closed: false }]} selected={[[1,2]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(-5;-4)\\cup\\{8\\}`} /></div>
      </div>
    )
  },
  {
    id: 64,
    title: 'Задача 64 (ЕГЭ 2014)',
    mathA: '\\begin{cases} \\log_3\\left(\\frac{x^2}{4} - \\frac{16}{x^2}\\right) \\le 1 \\\\ \\frac{2x^2 + x - 28}{(x - 6)^2 + (x - 5)^3 - 1} \\le 0 \\end{cases}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>Логарифмическое неравенство равносильно системе</p>
        <BlockMath math={`0<\\frac{x^2}{4}-\\frac{16}{x^2}\\le3.`} />
        <p>Умножая на положительное <InlineMath math={`4x^2`} /> и обозначая <InlineMath math={`u=x^2`} />, получаем <InlineMath math={`u>8`} /> и <InlineMath math={`u^2-12u-64\\le0`} />, то есть</p>
        <BlockMath math={`x\\in[-4;-2\\sqrt{2})\\cup(2\\sqrt{2};4].`} />
        <p>Разложим числитель и знаменатель второй дроби:</p>
        <BlockMath math={`\\frac{2x^2+x-28}{(x-6)^2+(x-5)^3-1}=\\frac{(x+4)(2x-7)}{(x-6)(x-5)(x-3)}\\le0.`} />
        <p>На отрицательном промежутке из решения первого неравенства подходит только нуль числителя <InlineMath math={`x=-4`} />. На положительном подходят <InlineMath math={`3<x\\le7/2`} />; точка 3 исключена из-за знаменателя.</p>
        <InequalityNumberLine points={[{ label: '-4', closed: true }, { label: '3', closed: false }, { label: '\\frac72', closed: true }, { label: '4', closed: false }]} selected={[[2,3]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\{-4\\}\\cup\\left(3;\\frac72\\right]`} /></div>
      </div>
    )
  },
  {
    id: 65,
    title: 'Задача 65 (ЕГЭ 2013)',
    mathA: '\\begin{cases} \\log_{5-x}\\left(\\frac{x+4}{(x-5)^{10}}\\right) \\ge -10 \\\\ x^3 + 8x^2 + \\frac{50x^2+x-7}{x-7} \\le 1 \\end{cases}',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ первого логарифма: <InlineMath math={`-4<x<5,\\quad x\\ne4`} />. Сравним его с <InlineMath math={`\\log_{5-x}(5-x)^{-10}`} /> и учтём знак основания:</p>
        <BlockMath math={`(4-x)\\left(\\frac{x+4}{(5-x)^{10}}-\\frac1{(5-x)^{10}}\\right)\\ge0 \\iff (4-x)(x+3)\\ge0.`} />
        <p>С учётом ОДЗ первое неравенство даёт <InlineMath math={`[-3;4)`} />.</p>
        <p>Во втором неравенстве перенесём единицу влево и разложим дробь:</p>
        <BlockMath math={`x^3+8x^2+\\frac{50x^2+x-7}{x-7}-1=\\frac{x^2(x-2)(x+3)}{x-7}\\le0.`} />
        <p>Внутри <InlineMath math={`[-3;4)`} /> знаменатель отрицателен. Числитель неотрицателен при <InlineMath math={`x=-3`} />, <InlineMath math={`x=0`} /> и <InlineMath math={`x\\ge2`} />. Пересечение условий:</p>
        <InequalityNumberLine points={[{ label: '-3', closed: true }, { label: '0', closed: true }, { label: '2', closed: true }, { label: '4', closed: false }]} selected={[[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\{-3;0\\}\\cup[2;4)`} /></div>
      </div>
    )
  },
  {
    id: 66,
    title: 'Задача 66',
    mathA: '||2x - 1| - 2| > 3',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Используем геометрический смысл и свойства модуля. Неравенство вида <InlineMath math={`|f(x)| > a`} /> при <InlineMath math={`a > 0`} /> равносильно совокупности двух условий. Раскроем внешний модуль:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &|2x - 1| - 2 > 3 \\\\ &|2x - 1| - 2 < -3 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &|2x - 1| > 5 \\\\ &|2x - 1| < -1 \\end{aligned} \\right.`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем второе неравенство совокупности. Так как модуль любого вещественного выражения всегда неотрицателен (</span>
          <InlineMath math={`|2x - 1| \\ge 0`} />
          <span>), условие</span>
          <InlineMath math={`|2x - 1| < -1`} />
          <span>не имеет решений. Совокупность сводится к одному неравенству:</span>
        </div>
        <BlockMath math={`\\iff |2x - 1| > 5`} />

        <p>Снова применим схему раскрытия строгого модуля для знака «больше» в виде равносильной совокупности двух линейных неравенств:</p>
        <BlockMath math={`\\iff \\left[ \\begin{aligned} &2x - 1 > 5 \\\\ &2x - 1 < -5 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &2x > 6 \\\\ &2x < -4 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &x > 3 \\\\ &x < -2 \\end{aligned} \\right.`} />

        <p>Объединяя полученные открытые числовые лучи, находим финальное аналитическое решение:</p>
        <BlockMath math={`\\iff x \\in (-\\infty; \\, -2) \\cup (3; \\, +\\infty)`} />

        <p>Визуализируем полученные интервалы на числовой прямой с помощью штриховки:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "-2", closed: false }, { label: "3", closed: false }]} selected={[[0, 1], [2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, -2) \\cup (3; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 67,
    title: 'Задача 67',
    mathA: '\\frac{x^3 - 27}{|x - 3|} - x|x - 3| \\ge 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Запишем ОДЗ неравенства, исключающее равенство знаменателя нулю: <InlineMath math={`|x - 3| \\neq 0 \\implies x \\neq 3`} />. Разложим разность кубов в числителе: <InlineMath math={`x^3 - 27 = (x - 3)(x^2 + 3x + 9)`} />. Раскроем модули по знаку подмодульного выражения на двух промежутках:</p>

        <p className="font-semibold text-slate-800 dark:text-slate-200">1) Пусть <InlineMath math={`x > 3`} />:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Модуль раскрывается со знаком «плюс»: <InlineMath math={`|x - 3| = x - 3`} />. Подставим в исходное выражение:</p>
          <BlockMath math={`\\begin{cases} \\frac{(x - 3)(x^2 + 3x + 9)}{x - 3} - x(x - 3) \\ge 0 \\\\ x > 3 \\end{cases} \\iff \\begin{cases} x^2 + 3x + 9 - x^2 + 3x \\ge 0 \\\\ x > 3 \\end{cases}`} />
          <BlockMath math={`\\iff \\begin{cases} 6x + 9 \\ge 0 \\\\ x > 3 \\end{cases} \\iff \\begin{cases} x \\ge -1{,}5 \\\\ x > 3 \\end{cases} \\iff x \\in (3; \\, +\\infty)`} />
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">2) Пусть <InlineMath math={`x < 3`} />:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Модуль раскрывается со знаком «минус»: <InlineMath math={`|x - 5| = -(x - 3) = 3 - x`} />. Подставим в исходное выражение:</p>
          <BlockMath math={`\\begin{cases} \\frac{(x - 3)(x^2 + 3x + 9)}{-(x - 3)} - x(-(x - 3)) \\ge 0 \\\\ x < 3 \\end{cases} \\iff \\begin{cases} -(x^2 + 3x + 9) + x^2 - 3x \\ge 0 \\\\ x < 3 \\end{cases}`} />
          <BlockMath math={`\\iff \\begin{cases} -6x - 9 \\ge 0 \\\\ x < 3 \\end{cases} \\iff \\begin{cases} x \\le -1{,}5 \\\\ x < 3 \\end{cases} \\iff x \\in (-\\infty; \\, -1{,}5]`} />
        </div>

        <p>Объединяя полученные промежутки, находим финальное аналитическое решение:</p>
        <BlockMath math={`\\iff x \\in (-\\infty; \\, -1{,}5] \\cup (3; \\, +\\infty)`} />

        <p>Визуализируем полученные интервалы на числовой прямой с помощью штриховки:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "-1{,}5", closed: true }, { label: "3", closed: false }]} selected={[[0, 1], [2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, -1{,}5] \\cup (3; \\, +\\infty)`} />
        </div>
      </div>
    )
  },
  {
    id: 68,
    title: 'Задача 68',
    mathA: '2\\log_4(x^2 - 4) - \\log_{0{,}5}\\left(\\frac{x - 2}{x + 2}\\right) \\ge -3',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Приведем все логарифмы к общему основанию 2, используя свойства степеней основания логарифма: <InlineMath math={`2\\log_{2^2}(x^2 - 4) = 2 \\cdot \\frac{1}{2}\\log_2(x^2 - 4) = \\log_2(x^2 - 4)`} /> и <InlineMath math={`-\\log_{2^{-1}}\\left(\\frac{x - 2}{x + 2}\\right) = +\\log_2\\left(\\frac{x - 2}{x + 2}\\right)`} />.</p>
        <p>Перенесем число \(-3\) влево и перейдём к равносильной системе условий с ОДЗ аргументов:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_2(x^2 - 4) + \\log_2\\left(\\frac{x - 2}{x + 2}\\right) + 3 \\ge 0 \\\\ x^2 - 4 > 0 \\\\ \\frac{x - 2}{x + 2} > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем ОДЗ системы ограничений: разложим разность квадратов</span>
          <InlineMath math={`x^2 - 4 = (x - 2)(x + 2) > 0`} />.
          <span>Тогда из дробного условия</span>
          <InlineMath math={`\\frac{x - 2}{x + 2} > 0`} />
          <span>следует то же самое ограничение интервалов: знаки числителя и знаменателя должны совпадать. Базовое ОДЗ:</span>
          <InlineMath math={`x \\in (-\\infty; \\, -2) \\cup (2; \\, +\\infty)`} />.
        </div>

        <p>Схлопнем сумму логарифмов в левой части в логарифм произведения по свойствам, а тройку представим как логарифм числа 8:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_2\\left((x - 2)(x + 2) \\cdot \\frac{x - 2}{x + 2}\\right) \\ge -3 \\\\ x \\in (-\\infty; \\, -2) \\cup (2; \\, +\\infty) \\end{cases} \\iff \\begin{cases} \\log_2(x - 2)^2 \\ge \\log_2 2^{-3} \\\\ x \\in (-\\infty; \\, -2) \\cup (2; \\, +\\infty) \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания логарифмической функции с основанием</span>
          <InlineMath math={`2 > 1`} />,
          <span>перейдём к сравнению подлогорифмических аргументов без изменения знака:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} (x - 2)^2 \\ge \\frac{1}{8} \\\\ x \\in (-\\infty; \\, -2) \\cup (2; \\, +\\infty) \\end{cases}`} />

        <p>Раскроем квадратичное неравенство в равносильную совокупность линейных иррациональных промежутков:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x - 2 \\ge \\frac{1}{2\\sqrt{2}} \\\\ &x - 2 \\le -\\frac{1}{2\\sqrt{2}} \\end{aligned} \\right. \\\\ x \\in (-\\infty; \\, -2) \\cup (2; \\, +\\infty) \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x \\ge 2 + \\frac{\\sqrt{2}}{4} \\\\ &x \\le 2 - \\frac{\\sqrt{2}}{4} \\end{aligned} \\right. \\\\ x \\in (-\\infty; \\, -2) \\cup (2; \\, +\\infty) \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Оценим точное положение иррациональных точек относительно лучей ОДЗ. Так как</span>
          <InlineMath math={`1 < \\sqrt{2} < 2 \\implies 0{,}25 < \\frac{\\sqrt{2}}{4} < 0{,}5`} />,
          <span>то значение</span>
          <InlineMath math={`2 - \\frac{\\sqrt{2}}{4} \\approx 1{,}65`} />
          <span>лежит строго правее \(-2\), но левее \(2\). Следовательно, этот луч ОДЗ отсекает левую ветвь совокупности. Значение</span>
          <InlineMath math={`2 + \\frac{\\sqrt{2}}{4} \\approx 2{,}35`} stroke="currentColor" />
          <span>полностью попадает в правый интервал ОДЗ. Пересечение множеств даёт итоговый результат:</span>
        </div>
        <BlockMath math={`\\iff x \\in (-\\infty; \\, -2) \\cup [2 + \\frac{\\sqrt{2}}{4}; \\, +\\infty)`} />

        <p>Разложим полученное системное условие на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "-2", closed: false }, { label: "2+\\frac{\\sqrt{2}}{4}", closed: true }]} selected={[[0, 1], [2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, -2) \\cup \\left[2 + \\frac{\\sqrt{2}}{4}; \\, +\\infty\\right)`} />
        </div>
      </div>
    )
  },
  {
    id: 69,
    title: 'Задача 69',
    mathA: '\\frac{\\sqrt{4 - x}}{2^{x^2 - 5} - 17 \\cdot 2^{0{,}5x^2 - 4{,}5} + 1} \\le 0',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Перейдём к единой равносильной системе условий, содержащей ограничение ОДЗ на подкоренное выражение и условия знаков дроби:</p>
        <BlockMath math={`\\iff \\begin{cases} 4 - x \\ge 0 \\\\ \\left[ \\begin{aligned} & \\begin{cases} \\sqrt{4 - x} = 0 \\\\ 2^{x^2 - 5} - 17 \\cdot 2^{0{,}5x^2 - 4{,}5} + 1 \\neq 0 \\end{cases} \\\\ & 2^{x^2 - 5} - 17 \\cdot 2^{0{,}5x^2 - 4{,}5} + 1 < 0 \\end{aligned} \\right. \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Первое условие системы задаёт область определения:</span>
          <InlineMath math={`x \\le 4`} />.
          <span>Вложенная система в совокупности даёт изолированное решение</span>
          <InlineMath math={`x = 4`} />,
          <span>так как при этом значении знаменатель отличен от нуля. Для решения показательной части преобразуем степени:</span>
        </div>
        <BlockMath math={`2^{x^2 - 5} = (2^{0{,}5x^2 - 2{,}5})^2 \\quad \\text{и} \\quad 2^{0{,}5x^2 - 4{,}5} = \\frac{1}{4} \\cdot 2^{0{,}5x^2 - 2{,}5}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = 2^{0{,}5x^2 - 2{,}5}`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Умножая получившийся квадратный трёхчлен на 4, получаем интервал:</span>
        </div>
        <BlockMath math={`4t^2 - 17t + 4 < 0 \\iff 4(t - 4)(t - 0{,}25) < 0 \\iff 0{,}25 < t < 4`} />

        <p>Выполним обратную замену для показательной функции по основанию <InlineMath math={`2 > 1`} />:</p>
        <BlockMath math={`\\iff 2^{-2} < 2^{0{,}5x^2 - 2{,}5} < 2^2 \\iff -2 < 0{,}5x^2 - 2{,}5 < 2`} />
        <BlockMath math={`\\iff 0{,}5 < 0{,}5x^2 < 4{,}5 \\iff 1 < x^2 < 9 \\iff x \\in (-3; \\, -1) \\cup (1; \\, 3)`} />

        <p>Объединяя интервалы показательной части с изолированной точкой и пересекая с ОДЗ <InlineMath math={`x \\le 4`} />, находим итоговое решение:</p>
        <BlockMath math={`\\iff x \\in ((-3; \\, -1) \\cup (1; \\, 3)) \\cup \\{4\\}`} />

        <p>Визуализируем полученные интервалы на числовой прямой с помощью штриховки:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "-3", closed: false }, { label: "-1", closed: false }, { label: "1", closed: false }, { label: "3", closed: false }, { label: "4", closed: true }]} selected={[[1, 2], [3, 4]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-3; \\, -1) \\cup (1; \\, 3) \\cup \\{4\\}`} />
        </div>
      </div>
    )
  },
  {
    id: 70,
    title: 'Задача 70',
    mathA: '\\frac{\\log_{0{,}5}^2(x^4) - x^2}{100 - x^2} \\le 1',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`x\\ne0,\\quad x\\ne\\pm10`} />. Перенесём единицу влево и используем <InlineMath math={`\\log_{0{,}5}(x^4)=-4\\log_2|x|`} />:</p>
        <BlockMath math={`\\frac{16\\log_2^2|x|-100}{100-x^2}\\le0 \\iff \\frac{(2\\log_2|x|-5)(2\\log_2|x|+5)}{x^2-100}\\ge0.`} />
        <p>У числителя два положительных по модулю корня:</p>
        <BlockMath math={`|x|=2^{5/2}=4\\sqrt{2},\\qquad |x|=2^{-5/2}=\\frac{\\sqrt{2}}{8}.`} />
        <p>С учётом обоих корней знак числителя совпадает со знаком <InlineMath math={`(|x|-4\\sqrt{2})(|x|-\\sqrt{2}/8)`} />. Отмечаем все шесть граничных точек и выбираем промежутки, где дробь неотрицательна.</p>
        <InequalityNumberLine points={[{ label: '-10', closed: false }, { label: '-4\\sqrt{2}', closed: true }, { label: '-\\frac{\\sqrt{2}}{8}', closed: true }, { label: '\\frac{\\sqrt{2}}{8}', closed: true }, { label: '4\\sqrt{2}', closed: true }, { label: '10', closed: false }]} selected={[[0,1],[2,3],[4,5],[6,7]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(-\\infty;-10)\\cup\\left[-4\\sqrt{2};-\\frac{\\sqrt{2}}{8}\\right]\\cup\\left[\\frac{\\sqrt{2}}{8};4\\sqrt{2}\\right]\\cup(10;+\\infty)`} /></div>
      </div>
    )
  },
    {
    id: 71,
    title: 'Задача 71',
    mathA: '\\frac{\\sqrt{x + 9} - 2}{\\sqrt{x - 9} + 2} > \\sqrt{x - 9} - 2',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Перенесём все члены в левую часть и запишем равносильную систему условий с учётом области определения радикалов:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{\\sqrt{x + 9} - 2}{\\sqrt{x - 9} + 2} - (\\sqrt{x - 9} - 2) > 0 \\\\ x + 9 \\ge 0 \\\\ x - 9 \\ge 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Из нижних условий получаем базовое ОДЗ системы:</span>
          <InlineMath math={`x \\ge 9`} />.
          <span>Приведём выражение в числителе к общему знаменателю</span>
          <InlineMath math={`\\sqrt{x - 9} + 2`} />,
          <span>который строго положителен при всех допустимых значениях переменной:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{\\sqrt{x + 9} - 2 - (\\sqrt{x - 9} - 2)(\\sqrt{x - 9} + 2)}{\\sqrt{x - 9} + 2} > 0 \\\\ x \\ge 9 \\end{cases}`} />

        <p>Свернём разность квадратов в числителе: <InlineMath math={`(\\sqrt{x - 9} - 2)(\\sqrt{x - 9} + 2) = x - 9 - 4 = x - 13`} />. Умножим обе части на строго положительный знаменатель:</p>
        <BlockMath math={`\\iff \\begin{cases} \\sqrt{x + 9} - 2 - (x - 13) > 0 \\\\ x \\ge 9 \\end{cases} \\iff \\begin{cases} \\sqrt{x + 9} > x - 11 \\\\ x \\ge 9 \\end{cases}`} />

        <p>Раскроем иррациональное условие <InlineMath math={`\\sqrt{f(x)} > g(x)`} /> в виде структурированной совокупности двух систем (по знаку правой части):</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &\\begin{cases} x - 11 < 0 \\\\ x + 9 \\ge 0 \\end{cases} \\\\ &\\begin{cases} x - 11 \\ge 0 \\\\ x + 9 > (x - 11)^2 \\end{cases} \\end{aligned} \\right. \\\\ x \\ge 9 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &-9 \\le x < 11 \\\\ &\\begin{cases} x \\ge 11 \\\\ x^2 - 23x + 112 < 0 \\end{cases} \\end{aligned} \\right. \\\\ x \\ge 9 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим квадратный трёхчлен второй ветви на множители (корни по дискриминанту равны 7 и 16):</span>
          <InlineMath math={`x^2 - 23x + 112 < 0 \\implies 7 < x < 16`} />.
          <span>Тогда вторая система сводится к полуинтервалу</span>
          <InlineMath math={`[11; \\, 16)`} />.
          <span>Объединяя обе ветви совокупности, получаем непрерывный промежуток:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} x < 16 \\\\ x \\ge 9 \\end{cases} \\iff 9 \\le x < 16`} />

        <p>Визуализируем пересечение финальных интервалов на числовой прямой с помощью штриховки:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "9", closed: true }, { label: "16", closed: false }]} selected={[[1, 2]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[9; \\, 16)`} />
        </div>
      </div>
    )
  },
  {
    id: 72,
    title: "Задача 72",
    mathA: "16 \\cdot 5^{1 - \\frac{8}{x}} - 189 \\cdot 20^{-\\frac{4}{x}} + 25 \\cdot 2^{2 - \\frac{16}{x}} \\le 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`x\\ne0`} />. Разделим неравенство на положительное выражение <InlineMath math={`2^{-16/x}`} /> и сделаем замену</p>
        <BlockMath math={`t=\\left(\\frac54\\right)^{-4/x}>0.`} />
        <p>Получаем квадратное неравенство:</p>
        <BlockMath math={`80t^2-189t+100\\le0,\\qquad D=3721=61^2.`} />
        <BlockMath math={`t_1=\\frac45,\\quad t_2=\\frac{25}{16},\\qquad \\frac45\\le t\\le\\frac{25}{16}.`} />
        <p>Так как <InlineMath math={`\\frac45=(\\frac54)^{-1}`} /> и <InlineMath math={`\\frac{25}{16}=(\\frac54)^2`} />, сравниваем показатели:</p>
        <BlockMath math={`-1\\le-\\frac4x\\le2,\\qquad x\\ne0.`} />
        <p>При <InlineMath math={`x>0`} /> получаем <InlineMath math={`x\\ge4`} />, а при <InlineMath math={`x<0`} /> — <InlineMath math={`x\\le-2`} />.</p>
        <InequalityNumberLine points={[{ label: '-2', closed: true }, { label: '0', closed: false }, { label: '4', closed: true }]} selected={[[0,1],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(-\\infty;-2]\\cup[4;+\\infty)`} /></div>
      </div>
    )
  },
  {
    id: 73,
    title: "Задача 73",
    mathA: "(x^2 - 2x - 3) \\cdot \\log_2(x^2 - 4x + 4) + 2^{x+2} \\cdot \\log_2(3 - x) \\ge 4 \\cdot (x^2 - 2x - 3) + 2^x \\cdot \\log_2((x - 2)^2)",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`x<3,\\quad x\\ne2`} />. Перенесём всё влево и обозначим полученную функцию через <InlineMath math={`F(x)`} />. После группировки:</p>
        <BlockMath math={`\\frac{F(x)}2=(x-3)(x+1)(\\log_2|x-2|-2)+2^x\\log_2\\frac{(3-x)^2}{|x-2|}.`} />
        <p>При <InlineMath math={`x<2`} /> положим <InlineMath math={`u=2-x>0`} />. Тогда</p>
        <BlockMath math={`\\frac{F(x)}2=(u+1)(u-3)(\\log_2u-2)+4\\cdot2^{-u}\\log_2\\frac{(u+1)^2}{u}.`} />
        <p>Второе слагаемое положительно. Первое неотрицательно при <InlineMath math={`u\\le3`} /> и <InlineMath math={`u\\ge4`} />. Если <InlineMath math={`3<u<4`} />, его модуль меньше <InlineMath math={`1/(3\\ln2)<1/2`} />: здесь <InlineMath math={`(u-3)(4-u)\\le1/4`} /> и <InlineMath math={`\\ln(4/u)\\le(4-u)/u`} />. При этом второе слагаемое больше <InlineMath math={`\\frac14\\log_2(16/3)>1/2`} />. Значит, <InlineMath math={`F(x)>0`} /> при всех <InlineMath math={`x<2`} />.</p>
        <p>При <InlineMath math={`2<x<3`} /> положим <InlineMath math={`v=x-2\\in(0;1)`} />. Тогда</p>
        <BlockMath math={`\\frac{F(x)}2=(v-1)(v+3)(\\log_2v-2)+4\\cdot2^v\\log_2\\frac{(1-v)^2}{v}.`} />
        <p>Оба слагаемых строго убывают по <InlineMath math={`v`} />. Для второго это следует из <InlineMath math={`\\ln((1-v)^2/v)\\le1/v-1`} />: его производная имеет отрицательный знак. Функция <InlineMath math={`F`} /> непрерывна, стремится к <InlineMath math={`+\\infty`} /> при <InlineMath math={`x\\to2+`} /> и к <InlineMath math={`-\\infty`} /> при <InlineMath math={`x\\to3-`} />. Поэтому на <InlineMath math={`(2;3)`} /> есть единственный корень <InlineMath math={`\\alpha\\approx2{,}49390`} />.</p>
        <InequalityNumberLine points={[{ label: '2', closed: false }, { label: '\\alpha', closed: true }]} selected={[[0,1],[1,2]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(-\\infty;2)\\cup(2;\\alpha],\\quad F(\\alpha)=0,\\quad \\alpha\\in(2;3)`} /></div>
      </div>
    )
  },
  {
    id: 74,
    title: "Задача 74",
    mathA: "\\log_5(x^2 - 4x + 3) + \\log_5\\left(\\frac{x - 1}{x - 3}\\right) \\le \\log_5(|x - 2| - 1) + 1",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Запишем единую равносильную систему условий, удерживающую ограничения аргументов всех логарифмов:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_5\\left((x - 1)(x - 3) \\cdot \\frac{x - 1}{x - 3}\\right) \\le \\log_5(5(|x - 2| - 1)) \\\\ (x - 1)(x - 3) > 0 \\\\ \\frac{x - 1}{x - 3} > 0 \\\\ |x - 2| - 1 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем ОДЗ системы ограничений. Из квадратного и дробного условий находим:</span>
          <InlineMath math={`x \\in (-\\infty; \\, 1) \\cup (3; \\, +\\infty)`} />.
          <span>Раскрывая линейный модуль</span>
          <InlineMath math={`|x - 2| > 1`} />,
          <span>получаем лучи</span>
          <InlineMath math={`x < 1`} />
          <span>или</span>
          <InlineMath math={`x > 3`} />,
          <span>что полностью совпадает с базовой областью определения.</span>
        </div>

        <p>Схлопнем произведение аргументов в левой части логарифма на области ОДЗ, где множитель <InlineMath math={`(x - 3)`} /> сокращается без изменения знака:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_5(x - 1)^2 \\le \\log_5(5|x - 2| - 5) \\\\ x \\in (-\\infty; \\, 1) \\cup (3; \\, +\\infty) \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания логарифмической функции с основанием</span>
          <InlineMath math={`5 > 1`} />,
          <span>перейдём к сравнению подлогорифмических аргументов. Раскроем знак модуля на ОДЗ:</span>
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">При x &lt; 1:</p>
          <p>Модуль раскрывается со знаком «минус»: <InlineMath math={`|x - 2| = 2 - x`} />. Получаем:</p>
          <BlockMath math={`(x - 1)^2 \\le 5(2 - x) - 5 \\iff x^2 - 2x + 1 \\le 5 - 5x \\iff x^2 + 3x - 4 \\le 0`} />
          <p>Раскладывая по теореме Виета (корни (-4) и 1), находим: <InlineMath math={`-4 \\le x \\le 1`} />. С учётом <InlineMath math={`x < 1`} /> получаем: <InlineMath math={`x \\in [-4; \\, 1)`} />.</p>
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">При x &gt; 3:</p>
          <p>Модуль раскрывается со знаком «плюс»: <InlineMath math={`|x - 2| = x - 2`} />. Получаем:</p>
          <BlockMath math={`(x - 1)^2 \\le 5(x - 2) - 5 \\iff x^2 - 2x + 1 \\le 5x - 15 \\iff x^2 - 7x + 16 \\le 0`} />
          <p>Дискриминант полученного трёхчлена <InlineMath math={`D = 49 - 64 = -15 < 0`} />, а старший коэффициент строго положителен. Следовательно, ветвь не имеет вещественных решений.</p>
        </div>

        <p>Объединяя результаты обоих интервалов ОДЗ, находим окончательный промежуток системы:</p>
        <BlockMath math={`\\iff x \\in [-4; \\, 1)`} />

        <p>Визуализируем итоговый интервал пересечения на числовой прямой с помощью штриховки:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "-4", closed: true }, { label: "1", closed: false }]} selected={[[1, 2]]} />

               <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40 whitespace-nowrap">
          <span>Ответ:</span>
          <InlineMath math="[-4; \, 1)" />
        </div>
      </div>
    )
  },
    {
    id: 75,
    title: "Задача 75",
    mathA: "\\begin{cases} \\frac{\\log_3(x + 1)}{\\log_3(x - 2)} \\le 0 \\\\ \\frac{x^2 - 4x - 5}{\\log_{0{,}5}(x - 1)} \\ge 0 \\end{cases}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ первой дроби: <InlineMath math={`x>2,\\quad x\\ne3`} />. При этих значениях <InlineMath math={`\\log_3(x+1)>0`} />, поэтому первое неравенство выполняется тогда и только тогда, когда</p>
        <BlockMath math={`\\log_3(x-2)<0 \\iff 2<x<3.`} />
        <p>На найденном промежутке <InlineMath math={`1<x-1<2`} />, а точка <InlineMath math={`x=2`} /> не входит. Точнее, при <InlineMath math={`2<x<3`} /> имеем <InlineMath math={`x-1>1`} />, поэтому <InlineMath math={`\\log_{0{,}5}(x-1)<0`} />. Числитель второго неравенства <InlineMath math={`(x-5)(x+1)<0`} />; их отношение положительно на всём промежутке.</p>
        <InequalityNumberLine points={[{ label: '2', closed: false }, { label: '3', closed: false }]} selected={[[1,2]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(2;3)`} /></div>
      </div>
    )
  },
    {
    id: 76,
    title: "Задача 76",
    mathA: "|\\log_4(x+1)^2 - 2| + |\\log_2(2x+3) - 1| \\le 3",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>Перейдём к равносильной системе условий, содержащей ограничения ОДЗ для аргументов обоих логарифмов:</p>
        <BlockMath math={`\\iff \\begin{cases} |\\log_4(x+1)^2 - 2| + |\\log_2(2x+3) - 1| \\le 3 \\\\ (x+1)^2 > 0 \\\\ 2x + 3 > 0 \\end{cases} \\iff \\begin{cases} |2\\log_4|x+1| - 2| + |\\log_2(2x+3) - 1| \\le 3 \\\\ x \\neq -1 \\\\ x > -1{,}5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Преобразуем первый модуль, переходя к основанию 2:</span>
          <InlineMath math={`2\\log_4|x+1| = 2 \\cdot \\frac{1}{2}\\log_2|x+1| = \\log_2|x+1|`} />.
          <span>Тогда подмодульные функции обращаются в нуль в точках</span>
          <InlineMath math={`x = 3`} />
          <span>и</span>
          <InlineMath math={`x = -0{,}5`} />.
          <span>Разобьём область ОДЗ на три промежутка и исследуем поведение суммы модулей на каждом из них:</span>
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">1) Промежуток №1: при <InlineMath math={`x \\in (-1{,}5; \\, -1) \\cup (-1; \\, -0{,}5)`} /></p>
          <p>На этом интервале <InlineMath math={`|x+1| < 0{,}5 \\implies \\log_2|x+1| < -1`} />. Тогда первое подмодульное выражение оценивается снизу:</p>
          <BlockMath math={`\\log_2|x+1| - 2 < -3 \\implies |\\log_2|x+1| - 2| > 3`} />
          <p>Поскольку первое слагаемое уже строго больше 3, а второй модуль неотрицателен, вся сумма на данном промежутке гарантированно превосходит 3. Решений здесь нет.</p>
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">2) Промежуток №2: при <InlineMath math={`x \\in [-0{,}5; \\, 3]`} /></p>
          <p>На данном отрезке логарифмы принимают значения, при которых модули раскрываются по знакам подмодульных выражений в следующую систему:</p>
          <BlockMath math={`\\iff \\begin{cases} -(\\log_2(x+1) - 2) + (\\log_2(2x+3) - 1) \\le 3 \\\\ -0{,}5 \\le x \\le 3 \\end{cases} \\iff \\begin{cases} \\log_2(2x+3) - \\log_2(x+1) \\le 2 \\\\ -0{,}5 \\le x \\le 3 \\end{cases}`} />
          <BlockMath math={`\\iff \\begin{cases} \\log_2\\left(\\frac{2x+3}{x+1}\\right) \\le \\log_2 4 \\\\ -0{,}5 \\le x \\le 3 \\end{cases} \\iff \\begin{cases} \\frac{2x+3}{x+1} \\le 4 \\\\ -0{,}5 \\le x \\le 3 \\end{cases} \\iff \\begin{cases} 2x + 3 \\le 4x + 4 \\\\ -0{,}5 \\le x \\le 3 \\end{cases}`} />
          <p>Решая линейное неравенство, получаем пересечение промежутков, которое полностью совпадает с границами данного интервала:</p>
          <BlockMath math={`\\iff \\begin{cases} 2x \\ge -1 \\\\ -0{,}5 \\le x \\le 3 \\end{cases} \\iff -0{,}5 \\le x \\le 3`} />
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">3) Промежуток №3: при <InlineMath math={`x \\in (3; \\, +\\infty)`} /></p>
          <p>На данном интервале выполняются неравенства <InlineMath math={`x+1 > 4 \\implies \\log_2(x+1) > 2`} /> и <InlineMath math={`2x+3 > 9 \\implies \\log_2(2x+3) > 3`} />, поэтому оба модуля раскрываются со знаком «плюс»:</p>
          <BlockMath math={`\\log_2(x+1) - 2 + \\log_2(2x+3) - 1 \\le 3 \\iff \\log_2((x+1)(2x+3)) \\le 6 \\iff 2x^2 + 5x + 3 \\le 64`} />
          <BlockMath math={`\\iff 2x^2 + 5x - 61 \\le 0`} />
          <p>Корни полученного квадратного трёхчлена: <InlineMath math={`x = \\frac{-5 \\pm \\sqrt{513}}{4}`} />. С учётом ограничений рассматриваемого луча получаем систему неравенств:</p>
          <BlockMath math={`\\begin{cases} \\frac{-5 - \\sqrt{513}}{4} \\le x \\le \\frac{-5 + \\sqrt{513}}{4} \\\\ x > 3 \\end{cases}`} />
          <p>Проведём строгое аналитическое сравнение правой границы с крайними точками. Так как <InlineMath math={`513 < 529 = 23^2 \\implies \\sqrt{513} < 23`} />, то выполняется строгое неравенство:</p>
          <BlockMath math={`\\frac{-5 + \\sqrt{513}}{4} < \\frac{-5 + 23}{4} = \\frac{18}{4} = 4{,}5`} />
          <p>Второе сравнение: <InlineMath math={`\\sqrt{513} > \\sqrt{484} = 22 \\implies \\frac{-5 + \\sqrt{513}}{4} > \\frac{-5 + 22}{4} = 4{,}25 > 3`} />. Следовательно, на данном промежутке система имеет решение:</p>
          <BlockMath math={`x \\in \\left(3; \\, \\frac{-5 + \\sqrt{513}}{4}\\right]`} />
        </div>

        <p>Объединяя результаты пересечений промежутков №2 и №3, получаем итоговое непрерывное аналитическое решение:</p>
        <BlockMath math={`\\iff x \\in \\left[-0{,}5; \\, \\frac{-5 + \\sqrt{513}}{4}\\right]`} />

        <p>Визуализируем полученный интервал на числовой прямой с помощью штриховки:</p>

         {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ПОЛНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        {/* 🔥 ИСПРАВЛЕНО: Применено четырёхкратное экранирование слэшей внутри строкового литерала. Формула отобразится идеально. */}
        <InequalityNumberLine points={[{ label: "-0{,}5", closed: true }, { label: "\\dfrac{-5 + \\sqrt{513}}{4}", closed: true }]} selected={[[1, 2]]} />




               <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath math={`\\left[-0{,}5; \\, \\frac{-5 + \\sqrt{513}}{4}\\right]`} />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 77,
    title: "Задача 77",
    mathA: "\\frac{3^{|x-2|} - 9}{5^{\\sqrt{x}} - 5} \\ge 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`x\\ge0,\\quad x\\ne1`} />. По возрастанию показательных функций исходная дробь имеет тот же знак, что и</p>
        <BlockMath math={`\\frac{|x-2|-2}{\\sqrt{x}-1}.`} />
        <p>Знак первой разности совпадает со знаком <InlineMath math={`x(x-4)`} />, а второй — со знаком <InlineMath math={`x-1`} />. Получаем равносильную систему:</p>
        <BlockMath math={`\\frac{x(x-4)}{x-1}\\ge0,\\qquad x\\ge0,\\qquad x\\ne1.`} />
        <p>На промежутке <InlineMath math={`(0;1)`} /> числитель и знаменатель отрицательны, на <InlineMath math={`(1;4)`} /> дробь отрицательна, а при <InlineMath math={`x>4`} /> положительна. Нули 0 и 4 входят в ответ.</p>
        <InequalityNumberLine points={[{ label: '0', closed: true }, { label: '1', closed: false }, { label: '4', closed: true }]} selected={[[1,2],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`[0;1)\\cup[4;+\\infty)`} /></div>
      </div>
    )
  },
    {
    id: 78,
    title: "Задача 78",
    mathA: "\\frac{\\log_{3-x}(x+4)}{\\log_{x+4}(3-x)} \\le 1",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>Обозначим <InlineMath math={`u=x+4`} />, <InlineMath math={`v=3-x`} />. Область определения исходного выражения:</p>
        <BlockMath math={`-4<x<3,\\qquad x\\ne-3,2.`} />
        <p>По формуле перехода к основанию исходное неравенство равносильно <InlineMath math={`(\\log_v u)^2\\le1`} />. Сравнив квадраты логарифмов, получаем</p>
        <BlockMath math={`(\\ln u-\\ln v)(\\ln u+\\ln v)\\le0.`} />
        <p>Знаки множителей совпадают со знаками <InlineMath math={`u-v=2x+1`} /> и <InlineMath math={`uv-1=-x^2-x+11`} /> соответственно.</p>
        <BlockMath math={`(2x+1)(-x^2-x+11)\\le0,\\qquad x\\in(-4;3)\\setminus\\{-3,2\\}.`} />
        <p>Нули квадратного множителя равны <InlineMath math={`\\frac{-1\\pm\\sqrt{45}}2`} />. Расставляем знаки и пересекаем найденные промежутки с ОДЗ.</p>
        <InequalityNumberLine points={[{ label: '\\frac{-1-\\sqrt{45}}2', closed: true }, { label: '-3', closed: false }, { label: '-\\frac12', closed: true }, { label: '\\frac{-1+\\sqrt{45}}2', closed: true }, { label: '3', closed: false }]} selected={[[1,2],[2,3],[4,5]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\left[\\frac{-1-\\sqrt{45}}2;-3\\right)\\cup\\left(-3;-\\frac12\\right]\\cup\\left[\\frac{-1+\\sqrt{45}}2;3\\right)`} /></div>
      </div>
    )
  },
    {
    id: 79,
    title: "Задача 79",
    mathA: "\\frac{\\log_{|x-2|-1}(x^2 - 4x + 3)}{\\log_{x-3}(|x-2|-1)} \\le 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>Из ограничений оснований и аргументов получаем <InlineMath math={`x>3,\\quad x\\ne4`} />. На этом промежутке <InlineMath math={`|x-2|-1=x-3`} />, поэтому знаменатель исходной дроби равен единице:</p>
        <BlockMath math={`\\log_{x-3}(x-3)=1.`} />
        <p>Сравним числитель с нулём методом рационализации:</p>
        <BlockMath math={`\\log_{x-3}((x-1)(x-3))\\le0 \\iff (x-4)\\bigl((x-1)(x-3)-1\\bigr)\\le0.`} />
        <BlockMath math={`(x-4)(x^2-4x+2)\\le0,\\qquad x>3,\\qquad x\\ne4.`} />
        <p>Нужный корень квадратного множителя равен <InlineMath math={`2+\\sqrt{2}`} /> и лежит между 3 и 4. По знакам произведения получаем:</p>
        <InequalityNumberLine points={[{ label: '3', closed: false }, { label: '2+\\sqrt{2}', closed: true }, { label: '4', closed: false }]} selected={[[2,3]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\left[2+\\sqrt{2};4\\right)`} /></div>
      </div>
    )
  },
  {
    id: 80,
    title: "Задача 80",
    mathA: "\\frac{\\log_{|x|-1}(2x - x^2)}{\\log_{|x|-1}(x^2 - 2x)} \\le 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Используем формулу перехода к новому основанию для знаменателя дроби и перейдём к единой равносильной системе условий, удерживающей ограничения всех аргументов и переменных оснований логарифмов:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{|x|-1}(2x - x^2) \\cdot \\log_{x^2 - 2x}(|x|-1) \\le 0 \\\\ 2x - x^2 > 0 \\\\ x^2 - 2x > 0 \\\\ |x| - 1 > 0 \\\\ |x| - 1 \\neq 1 \\end{cases}"}</BlockMath>

        <p>Разложим квадратные трёхчлены внутри ограничений аргументов на линейные множители:</p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{|x|-1}(2x - x^2) \\cdot \\log_{x^2 - 2x}(|x|-1) \\le 0 \\\\ x(2 - x) > 0 \\\\ x(x - 2) > 0 \\\\ |x| > 1 \\\\ |x| \\neq 2 \\end{cases}"}</BlockMath>

        <p>Перейдём к системе пересечения числовых интервалов для областей определения аргументов:</p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{|x|-1}(2x - x^2) \\cdot \\log_{x^2 - 2x}(|x|-1) \\le 0 \\\\ x \\in (0; \\, 2) \\\\ x \\in (-\\infty; \\, 0) \\cup (2; \\, +\\infty) \\\\ x \\in (-\\infty; \\, -1) \\cup (1; \\, +\\infty) \\\\ x \\neq \\pm 2 \\end{cases}"}</BlockMath>

        <p>Найдём пересечение множеств для условий на аргументы внутри системы:</p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{|x|-1}(2x - x^2) \\cdot \\log_{x^2 - 2x}(|x|-1) \\le 0 \\\\ x \\in \\varnothing \\end{cases} \\iff x \\in \\varnothing"}</BlockMath>

        <p>Так как области определения аргументов логарифмов взаимно исключают друг друга, вся система не имеет совместных решений.</p>
        <p>Визуализируем пустое пересечение областей на числовой прямой методом интервалов:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[]} selected={[]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\varnothing"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 81,
    title: "Задача 81",
    mathA: "\\log_{2^{|2x-1|}}\\left(2 \\cdot (2^x)^2 - 4 \\cdot 2^x + 2\\right) \\le \\log_{2^{|2x-1|}}\\left(2^{|2x-1|}\\right)^{\\frac{x}{|2x-1|}}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Упростим правую часть неравенства по основному логарифмическому тождеству и перейдём к единой равносильной системе условий с ограничениями ОДЗ:
        </p>
        <BlockMath math={"\\iff \\begin{cases} \\log_{2^{|2x-1|}}\\left(2(2^x - 1)^2\\right) \\le \\frac{x}{|2x-1|} \\\\ 2(2^x - 1)^2 > 0 \\\\ 2^{|2x-1|} > 0 \\\\ 2^{|2x-1|} \\neq 1 \\end{cases} \\iff \\begin{cases} \\log_{2^{|2x-1|}}\\left(2(2^x - 1)^2\\right) \\le \\frac{x}{|2x-1|} \\\\ 2^x - 1 \\neq 0 \\\\ |2x - 1| \\neq 0 \\end{cases}"} />

        <p>Вынесем показатель степени основания логарифма: <InlineMath math={"\\log_{2^{|2x-1|}}(f) = \\frac{1}{|2x-1|}\\log_2(f)"} />. Подставим в систему:</p>
        <BlockMath math={"\\iff \\begin{cases} \\frac{1}{|2x-1|}\\log_2\\left(2(2^x - 1)^2\\right) \\le \\frac{x}{|2x-1|} \\\\ x \\neq 0 \\\\ x \\neq 0{,}5 \\end{cases}"} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку множитель знаменателя</span>
          <InlineMath math={"|2x - 1| > 0"} />
          <span>строго положителен на всей области определения, умножим обе части на него без изменения знака:</span>
        </div>
        <BlockMath math={"\\iff \\begin{cases} \\log_2\\left(2(2^x - 1)^2\\right) \\le x \\\\ x \\neq 0 \\\\ x \\neq 0{,}5 \\end{cases} \\iff \\begin{cases} \\log_2 2 + \\log_2(2^x - 1)^2 - \\log_2 2^x \\le 0 \\\\ x \\neq 0 \\\\ x \\neq 0{,}5 \\end{cases}"} />
        <BlockMath math={"\\iff \\log_2\\left(\\frac{2(2^x - 1)^2}{2^x}\\right) \\le 0"} />

        <p>Применим метод замены множителей (рационализации) для логарифма по основанию <InlineMath math={"2 > 1"} />:</p>
        <BlockMath math={"\\iff \\begin{cases} \\frac{2(2^x - 1)^2}{2^x} - 1 \\le 0 \\\\ x \\neq 0 \\\\ x \\neq 0{,}5 \\end{cases} \\iff \\begin{cases} \\frac{2(2^x)^2 - 4 \\cdot 2^x + 2 - 2^x}{2^x} \\le 0 \\\\ x \\neq 0 \\\\ x \\neq 0{,}5 \\end{cases}"} />
        <BlockMath math={"\\iff \\begin{cases} 2(2^x)^2 - 5 \\cdot 2^x + 2 \\le 0 \\\\ x \\neq 0 \\\\ x \\neq 0{,}5 \\end{cases}"} />

        <p>Разложим полученный квадратный трёхчлен относительно показательной функции <InlineMath math={"2^x"} /> на множители:</p>
        <BlockMath math={"\\iff \\begin{cases} 2(2^x - 2)\\left(2^x - \\frac{1}{2}\\right) \\le 0 \\\\ x \\neq 0 \\\\ x \\neq 0{,}5 \\end{cases} \\iff \\begin{cases} (2^x - 2^1)(2^x - 2^{-1}) \\le 0 \\\\ x \\neq 0 \\\\ x \\neq 0{,}5 \\end{cases}"} />

        <p>Применим метод рационализации к разностям показательных функций:</p>
        <BlockMath math={"\\iff \\begin{cases} (x - 1)(x - (-1)) \\le 0 \\\\ x \\neq 0 \\\\ x \\neq 0{,}5 \\end{cases} \\iff \\begin{cases} (x - 1)(x + 1) \\le 0 \\\\ x \\neq 0 \\\\ x \\neq 0{,}5 \\end{cases}"} />
        <BlockMath math={"\\iff \\begin{cases} -1 \\le x \\le 1 \\\\ x \\neq 0 \\\\ x \\neq 0{,}5 \\end{cases} \\iff x \\in [-1; \\, 0) \\cup (0; \\, 0{,}5) \\cup (0{,}5; \\, 1]"} />

        <p>Визуализируем полученные интервалы на числовой прямой с помощью штриховки:</p>
        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "-1", closed: true }, { label: "0", closed: false }, { label: "0{,}5", closed: false }, { label: "1", closed: true }]} selected={[[1, 2], [2, 3], [3, 4]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"[-1; \\, 0) \\cup (0; \\, 0{,}5) \\cup (0{,}5; \\, 1]"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 82,
    title: "Задача 82",
    mathA: "x^{\\log_{\\sqrt[3]{16}} x - 12} > 8^{4(\\log_4 x - 8)}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`x>0`} />. Значение <InlineMath math={`x=1`} /> допустимо: основание логарифма слева постоянно и не равно единице.</p>
        <p>Положим <InlineMath math={`t=\\log_2x`} />. Тогда</p>
        <BlockMath math={`x^{\\log_{\\sqrt[3]{16}}x-12}=2^{\\frac34t^2-12t},\\qquad 8^{4(\\log_4x-8)}=2^{6t-96}.`} />
        <p>Поскольку основание 2 больше единицы, сравним показатели:</p>
        <BlockMath math={`\\frac34t^2-12t>6t-96 \\iff t^2-24t+128>0 \\iff (t-8)(t-16)>0.`} />
        <p>Получаем <InlineMath math={`t<8`} /> или <InlineMath math={`t>16`} /> и возвращаемся к переменной x.</p>
        <InequalityNumberLine points={[{ label: '0', closed: false }, { label: '256', closed: false }, { label: '65536', closed: false }]} selected={[[1,2],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(0;256)\\cup(65536;+\\infty)`} /></div>
      </div>
    )
  },
  {
    id: 83,
    title: "Задача 83",
    mathA: "3^{\\log_2(x^2)} + 2 \\cdot |x|^{\\log_2 9} \\le 3 \\cdot \\left(\\frac{1}{3}\\right)^{\\log_{0{,}5}(2x+3)}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Перейдём к единой равносильной системе условий, содержащей ограничения ОДЗ для всех аргументов и оснований логарифмических функций:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 3^{\\log_2(x^2)} + 2 \\cdot |x|^{\\log_2 9} \\le 3 \\cdot \\left(\\frac{1}{3}\\right)^{\\log_{0{,}5}(2x+3)} \\\\ x^2 > 0 \\\\ x \\neq 0 \\\\ 2x + 3 > 0 \\end{cases} \\iff \\begin{cases} 3^{\\log_2(x^2)} + 2 \\cdot |x|^{\\log_2 9} \\le 3 \\cdot \\left(\\frac{1}{3}\\right)^{\\log_{0{,}5}(2x+3)} \\\\ x > -1{,}5 \\\\ x \\neq 0 \\end{cases}"}</BlockMath>

        <p>Преобразуем компоненты неравенства по свойствам логарифмов и степеней. Для левой части, учитывая, что по свойству тождества <InlineMath>{"a^{\\log_b c} = c^{\\log_b a}"}</InlineMath>, получаем:</p>
        <BlockMath math={"3^{\\log_2(x^2)} = 3^{2\\log_2|x|} = (3\\log_2|x|)^2 \\quad \\text{и} \\quad |x|^{\\log_2 9} = 9^{\\log_2|x|} = (3^2)^{\\log_2|x|} = (3^{\\log_2|x|})^2"} />

        <p>Для правой части перейдём к единому монотонному основанию степеней 3 и логарифмов 2:</p>
        <BlockMath math={"\\left(\\frac{1}{3}\\right)^{\\log_{0{,}5}(2x+3)} = (3^{-1})^{-\\log_2(2x+3)} = 3^{\\log_2(2x+3)}"} />

        <p>Подставим полученные показательные эквиваленты обратно в равносильную систему:</p>
        <BlockMath>{"\\iff \\begin{cases} (3^{\\log_2|x|})^2 + 2 \\cdot (3^{\\log_2|x|})^2 \\le 3 \\cdot 3^{\\log_2(2x+3)} \\\\ x > -1{,}5 \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} 3 \\cdot (3^{\\log_2|x|})^2 \\le 3 \\cdot 3^{\\log_2(2x+3)} \\\\ x > -1{,}5 \\\\ x \\neq 0 \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} 3^{2\\log_2|x|} \\le 3^{\\log_2(2x+3)} \\\\ x > -1{,}5 \\\\ x \\neq 0 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания показательной функции по основанию</span>
          <InlineMath>{"3 > 1"}</InlineMath>
          <span>и логарифмической функции по основанию</span>
          <InlineMath>{"2 > 1"}</InlineMath>,
          <span>опустим основания и перейдём к сравнению аргументов:</span>
        </div>
        <BlockMath>{"\\iff \\begin{cases} 2\\log_2|x| \\le \\log_2(2x+3) \\\\ x > -1{,}5 \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} \\log_2(x^2) \\le \\log_2(2x+3) \\\\ x > -1{,}5 \\\\ x \\neq 0 \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} x^2 \\le 2x + 3 \\\\ x > -1{,}5 \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} x^2 - 2x - 3 \\le 0 \\\\ x > -1{,}5 \\\\ x \\neq 0 \\end{cases}"}</BlockMath>

        <p>Разложим квадратный трёхчлен числителя на линейные множители по теореме Виета (корни \(-1\) и \(3\)):</p>
        <BlockMath>{"\\iff \\begin{cases} (x + 1)(x - 3) \\le 0 \\\\ x > -1{,}5 \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} -1 \\le x \\le 3 \\\\ x > -1{,}5 \\\\ x \\neq 0 \\end{cases}"}</BlockMath>

        <p>Пересекая полученный непрерывный отрез с выколотыми точками ограничений ОДЗ, находим финальные интервалы ответа:</p>
        <BlockMath>{"\\iff x \\in [-1; \\, 0) \\cup (0; \\, 3]"}</BlockMath>

        <p>Визуализируем полученные интервалы на числовой прямой с помощью штриховки:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "-1", closed: true }, { label: "0", closed: false }, { label: "3", closed: true }]} selected={[[1, 2], [2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"[-1; \\, 0) \\cup (0; \\, 3]"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
    {
    id: 84,
    title: "Задача 84 (Сборник Ященко)",
    mathA: "2x \\ge \\log_2\\left(\\frac{35}{3} \\cdot 6^{x-1} - 2 \\cdot 9^{x - \\frac{1}{2}}\\right)",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Перейдём к единой равносильной системе условий, потенцируя логарифм по основанию <InlineMath>{"2 > 1"}</InlineMath> и удерживая строгое ограничение на его аргумент:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 2^{2x} \\ge \\frac{35}{3} \\cdot 6^{x-1} - 2 \\cdot 9^{x - \\frac{1}{2}} \\\\ \\frac{35}{3} \\cdot 6^{x-1} - 2 \\cdot 9^{x - \\frac{1}{2}} > 0 \\end{cases} \\iff \\begin{cases} 4^x \\ge \\frac{35}{3} \\cdot \\frac{6^x}{6} - 2 \\cdot \\frac{9^x}{3} \\\\ \\frac{35}{18} \\cdot 6^x - \\frac{2}{3} \\cdot 9^x > 0 \\end{cases}"}</BlockMath>

        <p>Преобразуем первое неравенство системы, умножив его на 18 для избавления от дробных коэффициентов:</p>
        <BlockMath>{"18 \\cdot 4^x \\ge 35 \\cdot 6^x - 12 \\cdot 9^x \\iff 12 \\cdot (3^x)^2 - 35 \\cdot 2^x \\cdot 3^x + 18 \\cdot (2^x)^2 \\ge 0"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Разделим обе части на строго положительный член</span>
          <InlineMath>{"(3^x)^2 > 0"}</InlineMath>.
          <span>Выражение сводится к однородной показательной форме второго порядка:</span>
        </div>
        <BlockMath>{"12 - 35 \\cdot \\left(\\frac{2}{3}\\right)^x + 18 \\cdot \\left(\\frac{2}{3}\\right)^{2x} \\ge 0"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath>{"t = \\left(\\frac{2}{3}\\right)^x"}</InlineMath>
          <span>(где</span>
          <InlineMath>{"t > 0"}</InlineMath>).
          <span>Получаем квадратный трёхчлен:</span>
        </div>
        <BlockMath>{"18t^2 - 35t + 12 \\ge 0"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Найдем корни квадратного трёхчлена через дискриминант:</span>
          <InlineMath>{"D = 35^2 - 4 \\cdot 18 \\cdot 12 = 1225 - 864 = 361 = 19^2"}</InlineMath>.
          <span>Откуда корни равны:</span>
          <InlineMath>{"t_1 = \\frac{16}{36} = \\frac{4}{9} = \\left(\\frac{2}{3}\\right)^2"}</InlineMath>
          <span>и</span>
          <InlineMath>{"t_2 = \\frac{54}{36} = \\frac{3}{2} = \\left(\\frac{2}{3}\\right)^{-1}"}</InlineMath>.
        </div>

        <p>Решая квадратичную часть методом интервалов, получаем совокупность промежутков:</p>
        <BlockMath>{"\\iff \\left[ \\begin{aligned} &t \\le \\frac{4}{9} \\\\ &t \\ge \\frac{3}{2} \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &\\left(\\frac{2}{3}\\right)^x \\le \\left(\\frac{2}{3}\\right)^2 \\\\ &\\left(\\frac{2}{3}\\right)^x \\ge \\left(\\frac{2}{3}\\right)^{-1} \\end{aligned} \\right."}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного убывания показательного основания</span>
          <InlineMath>{"\\frac{2}{3} < 1"}</InlineMath>,
          <span>при опускании оснований знаки неравенств меняются на противоположные:</span>
        </div>
        <BlockMath>{"\\iff \\left[ \\begin{aligned} &x \\ge 2 \\\\ &x \\le -1 \\end{aligned} \\right."}</BlockMath>

        <p>Теперь преобразуем второе условие системы (ограничение аргумента логарифма):</p>
        <BlockMath>{"\\frac{35}{18} \\cdot 6^x > \\frac{2}{3} \\cdot 9^x \\iff \\frac{35}{12} > \\left(\\frac{9}{6}\\right)^x \\iff \\left(\\frac{3}{2}\\right)^x < \\frac{35}{12} \\iff x < \\log_{1{,}5}\\left(\\frac{35}{12}\\right)"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Проведём строгое аналитическое сравнение верхней границы ограничения с числом 2:</span>
          <InlineMath>{"\\log_{1{,}5}\\left(\\frac{35}{12}\\right) \\vee 2 \\iff \\frac{35}{12} \\vee 1{,}5^2 = 2{,}25 = \\frac{27}{12}"}</InlineMath>.
          <span>Так как</span>
          <InlineMath>{"35 > 27"}</InlineMath>,
          <span>получаем, что граница строго больше двух:</span>
          <InlineMath>{"\\log_{1{,}5}\\left(\\frac{35}{12}\\right) > 2"}</InlineMath>.
        </div>

        <p>Пересекая найденную совокупность решений с ограничением, находим финальные интервалы:</p>
        <BlockMath>{"\\iff x \\in (-\\infty; \\, -1] \\cup \\left[2; \\, \\log_{1{,}5}\\left(\\frac{35}{12}\\right)\\right)"}</BlockMath>

        <p>Визуализируем полученные интервалы на числовой прямой с помощью штриховки:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        {/* 🔥 ИСПРАВЛЕНО: Слэши логарифма на оси защищены через children-синтаксис {"..."} внутри foreignObject */}
        <InequalityNumberLine points={[{ label: "-1", closed: true }, { label: "2", closed: true }, { label: "\\log_{1{,}5}\\left(\\frac{35}{12}\\right)", closed: false }]} selected={[[0, 1], [2, 3]]} />


        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath math="(-\infty; \, -1] \cup \left[2; \, \log_{1{,}5}\left(\frac{35}{12}\right)\right)" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 85,
    title: "Задача 85",
    mathA: "\\frac{x^3 + x^2 - x - 1}{\\log_4^2\\left(\\frac{15}{4} - x\\right) - 2\\log_2^2\\left(x - \\frac{15}{4}\\right)^2 + 16} \\ge 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ логарифмов: <InlineMath math={`x<\\frac{15}4`} />. Разложим числитель и приведём логарифмы знаменателя к основанию 4:</p>
        <BlockMath math={`x^3+x^2-x-1=(x+1)^2(x-1),`} />
        <BlockMath math={`\\log_4^2\\!\\left(\\frac{15}4-x\\right)-2\\log_2^2\\!\\left(x-\\frac{15}4\\right)^2+16=16-31\\log_4^2\\!\\left(\\frac{15}4-x\\right).`} />
        <p>Обозначим нули знаменателя:</p>
        <BlockMath math={`a=\\frac{15}4-4^{4/\\sqrt{31}},\\qquad b=\\frac{15}4-4^{-4/\\sqrt{31}},\\qquad 1<a<b<\\frac{15}4.`} />
        <p>Знаменатель положителен между <InlineMath math={`a`} /> и <InlineMath math={`b`} /> и отрицателен вне этого промежутка. Числитель отрицателен при <InlineMath math={`x<1`} /> (кроме нулевой точки −1), а при <InlineMath math={`x\\ge1`} /> неотрицателен. Совместим знаки и ОДЗ:</p>
        <InequalityNumberLine points={[{ label: '1', closed: true }, { label: 'a', closed: false }, { label: 'b', closed: false }, { label: '\\frac{15}4', closed: false }]} selected={[[0,1],[2,3]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(-\\infty;1]\\cup(a;b),\\quad a=\\frac{15}4-4^{4/\\sqrt{31}},\\quad b=\\frac{15}4-4^{-4/\\sqrt{31}}`} /></div>
      </div>
    )
  },
  {
    id: 86,
    title: "Задача 86",
    mathA: "7^x \\cdot \\log_4 x + 4^x \\cdot \\log_7 x \\le 7 \\cdot 4^{x-1} \\cdot \\log_4 x + 4 \\cdot 7^{x-1} \\cdot \\log_7 x",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Запишем единую равносильную систему условий с учётом области существования аргументов и оснований всех логарифмических функций:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 7^x \\cdot \\log_4 x + 4^x \\cdot \\log_7 x \\le 7 \\cdot 4^{x-1} \\cdot \\log_4 x + 4 \\cdot 7^{x-1} \\cdot \\log_7 x \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>Преобразуем показательные члены в правой части неравенства по свойствам степеней:</p>
        <BlockMath math={"7 \\cdot 4^{x-1} = 7 \\cdot \\frac{4^x}{4} = \\frac{7}{4} \\cdot 4^x \\quad \\text{и} \\quad 4 \\cdot 7^{x-1} = 4 \\cdot \\frac{7^x}{7} = \\frac{4}{7} \\cdot 7^x"} stroke="currentColor" />

        <p>Перенесем все члены в левую часть неравенства и сгруппируем слагаемые, вынося общие множители:</p>
        <BlockMath>{"\\iff 7^x \\cdot \\log_4 x - \\frac{7}{4} \\cdot 4^x \\cdot \\log_4 x + 4^x \\cdot \\log_7 x - \\frac{4}{7} \\cdot 7^x \\cdot \\log_7 x \\le 0"}</BlockMath>
        <BlockMath>{"\\iff \\log_4 x \\cdot \\left(7^x - \\frac{7}{4} \\cdot 4^x\\right) - \\log_7 x \\cdot \\left(\\frac{4}{7} \\cdot 7^x - 4^x\\right) \\le 0"}</BlockMath>

        <p>Приведём выражения внутри скобок к общему знаменателю и вынесем однородные множители:</p>
        <BlockMath>{"\\iff \\log_4 x \\cdot \\frac{4 \\cdot 7^x - 7 \\cdot 4^x}{4} - \\log_7 x \\cdot \\frac{4 \\cdot 7^x - 7 \\cdot 4^x}{7} \\le 0"}</BlockMath>
        <BlockMath>{"\\iff (4 \\cdot 7^x - 7 \\cdot 4^x) \\cdot \\left(\\frac{\\log_4 x}{4} - \\frac{\\log_7 x}{7}\\right) \\le 0"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Разделим показательную скобку на строго положительный член</span>
          <InlineMath>{"4 \\cdot 4^x > 0"}</InlineMath>
          <span>и перейдём к сравнению оснований степеней:</span>
        </div>
        <BlockMath math={"4 \\cdot 7^x - 7 \\cdot 4^x = 4^x \\cdot 7^x \\cdot \\left(4 \\cdot \\left(\\frac{7}{4}\\right)^x - 7\\right) \\to \\left(\\frac{7}{4}\\right)^x - \\frac{7}{4} = \\left(\\frac{7}{4}\\right)^x - \\left(\\frac{7}{4}\\right)^1 \\to x - 1"} />

        <p>Перейдём к единому основанию логарифмов во второй скобке по формуле перехода: <InlineMath>{"\\log_7 x = \\frac{\\log_4 x}{\\log_4 7}"}</InlineMath>:</p>
        <BlockMath>{"\\iff (x - 1) \\cdot \\log_4 x \\cdot \\left(\\frac{1}{4} - \\frac{1}{7\\log_4 7}\\right) \\le 0"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Проведём строгое аналитическое сравнение константы в скобках с нулём: так как</span>
          <InlineMath>{"7\\log_4 7 > 7 \\cdot 1 = 7 > 4"}</InlineMath>,
          <span>то дробь</span>
          <InlineMath>{"\\frac{1}{7\\log_4 7} < \\frac{1}{4}"}</InlineMath>.
          <span>Следовательно, числовой множитель</span>
          <InlineMath>{"\\left(\\frac{1}{4} - \\frac{1}{7\\log_4 7}\\right) > 0"}</InlineMath>
          <span>строго положителен и не меняет знак неравенства при делении на него.</span>
        </div>

        <p>Применим метод замены множителей (рационализации) к оставшемуся логарифму по основанию <InlineMath>{"4 > 1"}</InlineMath>:</p>
        <BlockMath>{"\\iff \\begin{cases} (x - 1) \\cdot (x - 1) \\le 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} (x - 1)^2 \\le 0 \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>Поскольку квадрат любой вещественной величины неотрицателен, равенство нулю достигается строго в одной изолированной точке:</p>
        <BlockMath>{"\\iff x = 1"}</BlockMath>

        <p>Визуализируем полученное решение на числовой прямой с помощью штриховки:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <InequalityNumberLine points={[{ label: "1", closed: true }]} selected={[]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\{1\\}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
   {
    id: 87,
    title: "Задача 87",
    mathA: "\\frac{\\log_5(5x - 27)}{\\log_5(x - 5)} \\ge 1",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Перенесём единицу в левую часть неравенства и перейдём к единой равносильной системе условий, удерживающей ОДЗ всех аргументов и знаменателя:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{\\log_5(5x - 27) - \\log_5(x - 5)}{\\log_5(x - 5)} \\ge 0 \\\\ 5x - 27 > 0 \\\\ x - 5 > 0 \\\\ \\log_5(x - 5) \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{\\log_5(5x - 27) - \\log_5(x - 5)}{\\log_5(x - 5)} \\ge 0 \\\\ x > 5{,}4 \\\\ x > 5 \\\\ x - 5 \\neq 1 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сведём ограничения ОДЗ аргументов к общему базовому промежутку: из условий строго следует, что</span>
          <InlineMath>{"x > 5{,}4"}</InlineMath>
          <span>и</span>
          <InlineMath>{"x \\neq 6"}</InlineMath>.
          <span>Применим метод замены множителей (рационализации) к логарифмам в числителе и знаменателе по основанию</span>
          <InlineMath>{"5 > 1"}</InlineMath>:
        </div>
        <BlockMath>{"\\iff \\begin{cases} \\frac{(5x - 27) - (x - 5)}{x - 5 - 1} \\ge 0 \\\\ x > 5{,}4 \\\\ x \\neq 6 \\end{cases} \\iff \\begin{cases} \\frac{4(x - 5{,}5)}{x - 6} \\ge 0 \\\\ x > 5{,}4 \\\\ x \\neq 6 \\end{cases}"}</BlockMath>

        <p>Исследуем знаки полученной рациональной дроби методом интервалов на числовой прямой:</p>

        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ (ДО НАЛОЖЕНИЯ ОДЗ) */}
        <InequalityNumberLine points={[{ label: "5{,}5", closed: true }, { label: "6", closed: false }]} selected={[[0, 1], [2, 3]]} />

        <p>Откуда находим промежуточное решение для дробной части:</p>
        <BlockMath>{"x \\in (-\\infty; \\, 5{,}5] \\cup (6; \\, +\\infty)"}</BlockMath>
        <p>Пересечём полученные лучи с условиями области допустимых значений системы:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <InequalityNumberLine points={[{ label: "5{,}4", closed: false }, { label: "5{,}5", closed: true }, { label: "6", closed: false }]} selected={[[1, 2], [3, 4]]} />

        <p>В результате пересечения множеств получаем окончательный ответ системы:</p>
        <BlockMath>{"x \\in (5{,}4; \\, 5{,}5] \\cup (6; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(5{,}4; \\, 5{,}5] \\cup (6; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
   {
    id: 88,
    title: "Задача 88",
    mathA: "\\log_{x^2}(x^2 + 1) > 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Перейдём к единой равносильной системе условий, удерживающей ОДЗ переменного основания и строго положительного аргумента логарифма:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{x^2}(x^2 + 1) > \\log_{x^2} 1 \\\\ x^2 + 1 > 0 \\\\ x^2 > 0 \\\\ x^2 \\neq 1 \\end{cases} \\iff \\begin{cases} \\log_{x^2}(x^2 + 1) > \\log_{x^2} 1 \\\\ x \\neq 0 \\\\ x \\neq \\pm 1 \\end{cases}"}</BlockMath>

        <p>
          Применим метод замены множителей (рационализации) для логарифма с переменным основанием. Знак разности логарифмов совпадает со знаком произведения разностей оснований и аргументов:
        </p>
        <BlockMath>{"\\iff \\begin{cases} (x^2 - 1)(x^2 + 1 - 1) > 0 \\\\ x \\neq 0 \\\\ x \\neq \\pm 1 \\end{cases} \\iff \\begin{cases} x^2(x^2 - 1) > 0 \\\\ x \\neq 0 \\\\ x \\neq \\pm 1 \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} x^2(x - 1)(x + 1) > 0 \\\\ x \\neq 0 \\\\ x \\neq \\pm 1 \\end{cases}"}</BlockMath>

        <p>Исследуем знаки полученной рациональной дроби методом интервалов. На числовой прямой выделены области, где функция строго больше нуля (&gt; 0):</p>

        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <InequalityNumberLine points={[{ label: "-1", closed: false }, { label: "1", closed: false }]} selected={[[0, 1], [2, 3]]} />

        <p>Откуда находим промежуточное решение для рациональной части:</p>
        <BlockMath>{"x \\in (-\\infty; \\, -1) \\cup (1; \\, +\\infty)"}</BlockMath>

        <p>Пересечёт полученные лучи с условиями области допустимых значений системы:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <InequalityNumberLine points={[{ label: "-1", closed: false }, { label: "1", closed: false }]} selected={[[0, 1], [2, 3]]} />

        <p>В результате пересечения множеств получаем окончательный ответ системы:</p>
        <BlockMath>{"x \\in (-\\infty; \\, -1) \\cup (1; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(-\\infty; \\, -1) \\cup (1; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 89,
    title: "Задача 89",
    mathA: "\\frac{\\log_2(2x^2 - 17x + 35) - 1}{\\log_2(x + 6)} \\le 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`2x^2-17x+35>0,\\ x>-6,\\ x\\ne-5`} />. Квадратный трёхчлен раскладывается как</p>
        <BlockMath math={`2x^2-17x+35=(2x-7)(x-5),`} />
        <p>поэтому первый логарифм определён при <InlineMath math={`x<\\frac72`} /> или <InlineMath math={`x>5`} />.</p>
        <p>Поскольку основание логарифмов больше 1, знак дроби совпадает со знаком</p>
        <BlockMath math={`\\frac{2x^2-17x+35-2}{x+6-1}=\\frac{2(x-3)(x-\\frac{11}{2})}{x+5}\\le0.`} />
        <p>Метод интервалов даёт <InlineMath math={`(-\\infty;-5)\\cup[3;\\frac{11}{2}]`} />. Пересекаем с ОДЗ.</p>
        <InequalityNumberLine points={[{ label: '-6', closed: false }, { label: '-5', closed: false }, { label: '3', closed: true }, { label: '\\frac72', closed: false }, { label: '5', closed: false }, { label: '\\frac{11}2', closed: true }]} selected={[[1,2],[3,4],[5,6]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(-6;-5)\\cup\\left[3;\\frac72\\right)\\cup\\left(5;\\frac{11}2\\right]`} /></div>
      </div>
    )
  },
  {
    id: 90,
    title: "Задача 90 (Сборник Ященко)",
    mathA: "\\frac{16^x - 4^{x+1} - 4^{x+2} + 64}{5x^2 - 6x + 1{,}8} \\le 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Запишем исходное неравенство и исследуем его компоненты. Преобразуем числитель дроби, используя свойства степеней: 
          <InlineMath>{"16^x = (4^x)^2"}</InlineMath>, <InlineMath>{"4^{x+1} = 4 \\cdot 4^x"}</InlineMath> и <InlineMath>{"4^{x+2} = 16 \\cdot 4^x"}</InlineMath>.
        </p>
        <BlockMath>{"(4^x)^2 - 4 \\cdot 4^x - 16 \\cdot 4^x + 64 = (4^x)^2 - 20 \\cdot 4^x + 64"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной для числителя: пусть</span>
          <InlineMath>{"t = 4^x"}</InlineMath>
          <span>(где</span>
          <InlineMath>{"t > 0"}</InlineMath>).
          <span>Получаем квадратный трёхчлен, корни которого по теореме Виета равны 4 и 16:</span>
        </div>
        <BlockMath>{"t^2 - 20t + 64 \\le 0 \\iff (t - 4)(t - 16) \\le 0 \\iff (4^x - 4^1)(4^x - 4^2) \\le 0"}</BlockMath>

        <p>Применим метод замены множителей (рационализации) к полученным показательным разностям числителя по основанию <InlineMath>{"4 > 1"}</InlineMath>:</p>
        <BlockMath>{"(4 - 1)(x - 1) \\cdot (4 - 1)(x - 2) \\le 0 \\iff (x - 1)(x - 2) \\le 0"}</BlockMath>

        <p>Теперь исследуем квадратный трёхчлен в знаменателе исходной дроби:</p>
        <BlockMath>{"5x^2 - 6x + 1{,}8 = 0 \\iff D = (-6)^2 - 4 \\cdot 5 \\cdot 1{,}8 = 36 - 36 = 0"}</BlockMath>
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку дискриминант знаменателя равен нулю, трёхчлен имеет один единственный вещественный корень кратности 2:</span>
          <InlineMath>{"x = \\frac{6}{2 \\cdot 5} = 0{,}6"}</InlineMath>.
          <span>При этом выражение сводится к полному квадрату</span>
          <InlineMath>{"5(x - 0{,}6)^2"}</InlineMath>,
          <span>который строго положителен при всех</span>
          <InlineMath>{"x \\neq 0{,}6"}</InlineMath>.
        </div>

        <p>С учётом этого преобразуем исходное дробное неравенство к общему рациональному виду:</p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{(x - 1)(x - 2)}{5(x - 0{,}6)^2} \\le 0 \\\\ x \\neq 0{,}6 \\end{cases}"}</BlockMath>

        <p>Исследуем знаки полученного рационального выражения методом интервалов. На числовой прямой выделены области, где дробь меньше или равна нулю:</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <InequalityNumberLine points={[{ label: "1", closed: true }, { label: "2", closed: true }]} selected={[[1, 2]]} />

        <p>Откуда находим промежуточное решение для дробной части неравенства:</p>
        <BlockMath>{"x \\in [1; \\, 2]"}</BlockMath>

        <p>Пересечёт полученный отрезок с условием выколотой точки знаменателя:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <InequalityNumberLine points={[{ label: "1", closed: true }, { label: "2", closed: true }]} selected={[[1, 2]]} />

        <p>В результате пересечения множеств получаем окончательный ответ всей системы:</p>
        <BlockMath>{"x \\in [1; \\, 2]"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"[1; \\, 2]"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 91,
    title: "Задача 91",
    mathA: "(4^{x^2-x-6} - 1) \\cdot \\log_{0{,}25}(4^{x^2+2x+2} - 3) \\le 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Запишем единую равносильную систему условий, содержащую исходное неравенство и ограничение на строго положительный аргумент логарифмической функции:
        </p>
        <BlockMath>{"\\iff \\begin{cases} (4^{x^2-x-6} - 4^0) \\cdot \\log_{0{,}25}(4^{x^2+2x+2} - 3) \\le 0 \\\\ 4^{x^2+2x+2} - 3 > 0 \\end{cases}"}</BlockMath>

        <p>
          Применим метод замены множителей (рационализации) к обоим сомножителям. Знак показательной разности при основании <InlineMath>{"4 > 1"}</InlineMath> совпадает со знаком разности степеней. Знак логарифма по основанию <InlineMath>{"0{,}25 < 1"}</InlineMath> имеет противоположный знак по отношению к разности аргумента и единицы:
        </p>
        <BlockMath>{"\\log_{0{,}25}(f) \\to (0{,}25 - 1)(f - 1) = -0{,}75(f - 1)"}</BlockMath>
        <p>С учётом смены знака при делении на отрицательную константу, перейдём к рациональной системе:</p>
        <BlockMath>{"\\iff \\begin{cases} (x^2 - x - 6) \\cdot (4^{x^2+2x+2} - 3 - 1) \\ge 0 \\\\ 4^{x^2+2x+2} > 3 \\end{cases} \\iff \\begin{cases} (x^2 - x - 6)(4^{x^2+2x+2} - 4^1) \\ge 0 \\\\ x^2+2x+2 > \\log_4 3 \\end{cases}"}</BlockMath>

        <p>Повторно применим метод рационализации ко второй показательной скобке числителя:</p>
        <BlockMath>{"\\iff \\begin{cases} (x^2 - x - 6)(x^2 + 2x + 2 - 1) \\ge 0 \\\\ x^2+2x+2 - \\log_4 3 > 0 \\end{cases} \\iff \\begin{cases} (x - 3)(x + 1)^2(x + 2) \\ge 0 \\\\ x^2+2x+2 - \\log_4 3 > 0 \\end{cases}"}</BlockMath>

        <p>
          Проанализируем квадратичное ограничение аргумента логарифма (ОДЗ). Выделим полный квадрат: 
          <InlineMath>{"x^2+2x+2 = (x+1)^2 + 1"}</InlineMath>. Поскольку квадрат любой величины неотрицателен, выражение 
          <InlineMath>{"(x+1)^2 + 1 \\ge 1"}</InlineMath> при всех x. Так как константа 
          <InlineMath>{"\\log_4 3 < \\log_4 4 = 1"}</InlineMath>, ограничение 
          <InlineMath>{"((x+1)^2 + 1) - \\log_4 3 > 0"}</InlineMath> строго выполняется на всём множестве действительных чисел.
        </p>

        <p>Решая основное рациональное выражение методом интервалов знаков, находим промежуточное решение для дробной части:</p>
        <BlockMath>{"x \\in (-\\infty; \\, -2] \\cup \\{-1\\} \\cup [3; \\, +\\infty)"}</BlockMath>

        <p>Пересечёт полученные множества с тривиальным ограничением области допустимых значений логарифмов:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ (ВСЯ ОСЬ) */}
        <InequalityNumberLine points={[{ label: "-2", closed: true }, { label: "-1", closed: true }, { label: "3", closed: true }]} selected={[[0, 1], [3, 4]]} />

        <p>В результате пересечения множеств получаем окончательный ответ системы:</p>
        <BlockMath>{"x \\in (-\\infty; \\, -2] \\cup \\{-1\\} \\cup [3; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(-\\infty; \\, -2] \\cup \\{-1\\} \\cup [3; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 92,
    title: "Задача 92 (Сборник Ященко)",
    mathA: "(2x^2 + 9x + 10) \\left(\\frac{1}{3}\\log_{0{,}5}(x^2 - 5) + \\log_8(\\sqrt{5} - x)\\right) \\ge 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Преобразуем первое слагаемое во второй скобке, перейдя к основанию 8: 
          <InlineMath>{"\\frac{1}{3}\\log_{0{,}5}(x^2 - 5) = \\frac{1}{3}\\log_{2^{-1}}(x^2 - 5) = -\\log_{2^3}(x^2 - 5) = -\\log_8(x^2 - 5)"}</InlineMath>.
          Запишем единую равносильную систему условий, содержащую ограничения ОДЗ для всех аргументов:
        </p>
        <BlockMath>{"\\iff \\begin{cases} (2x^2 + 9x + 10) \\left(\\log_8(\\sqrt{5} - x) - \\log_8(x^2 - 5)\\right) \\ge 0 \\\\ x^2 - 5 > 0 \\\\ \\sqrt{5} - x > 0 \\end{cases} \\iff \\begin{cases} (2x^2 + 9x + 10) \\left(\\log_8(\\sqrt{5} - x) - \\log_8(x^2 - 5)\\right) \\ge 0 \\\\ (x - \\sqrt{5})(x + \\sqrt{5}) > 0 \\\\ x < \\sqrt{5} \\end{cases}"}</BlockMath>

        <p>
          Пересечение условий ОДЗ даёт базовый ограничивающий луч: <InlineMath>{"x < -\\sqrt{5}"}</InlineMath>.
          Разложим первый квадратный трёхчлен на множители, а к разности логарифмов применим метод замены множителей (рационализации) по основанию <InlineMath>{"8 > 1"}</InlineMath>:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 2(x + 2)(x + 2.5) \\cdot \\left((\\sqrt{5} - x) - (x^2 - 5)\\right) \\ge 0 \\\\ x < -\\sqrt{5} \\end{cases} \\iff \\begin{cases} 2(x + 2)(x + 2.5)(-x^2 - x + 5 + \\sqrt{5}) \\ge 0 \\\\ x < -\\sqrt{5} \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим вторую скобку на множители. Корнями уравнения</span>
          <InlineMath>{"x^2 + x - (5 + \\sqrt{5}) = 0"}</InlineMath>
          <span>по теореме Виета являются числа</span>
          <InlineMath>{"x = \\sqrt{5}"}</InlineMath>
          <span>и</span>
          <InlineMath>{"x = -\\sqrt{5} - 1"}</InlineMath>.
          <span>Домножив систему на минус единицу, получим:</span>
        </div>
        <BlockMath>{"\\iff \\begin{cases} (x + 2)(x + 2.5)(x - \\sqrt{5})(x + \\sqrt{5} + 1) \\le 0 \\\\ x < -\\sqrt{5} \\end{cases}"}</BlockMath>

        <p>Исследуем знаки полученного рационального выражения методом интервалов. На числовой прямой выделены области, где произведение скобок меньше или равно нулю (&le; 0):</p>

        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <InequalityNumberLine points={[{ label: "-\\sqrt{5}-1", closed: true }, { label: "-2{,}5", closed: true }, { label: "-2", closed: true }, { label: "\\sqrt{5}", closed: true }]} selected={[[1, 2], [3, 4]]} />

        <p>Откуда находим промежуточное решение для рациональной части неравенства:</p>
        <BlockMath>{"x \\in [-\\sqrt{5} - 1; \\, -2.5] \\cup [-2; \\, \\sqrt{5}]"}</BlockMath>

        <p>Пересечём полученные множества с базовым ограничивающим лучом ОДЗ логарифмов:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <InequalityNumberLine points={[{ label: "-\\sqrt{5}-1", closed: true }, { label: "-2{,}5", closed: true }]} selected={[[1, 2]]} />

        <p>В результате пересечения множеств получаем окончательный ответ всей системы:</p>
        <BlockMath>{"x \\in [-\\sqrt{5} - 1; \\, -2.5]"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"[-\\sqrt{5} - 1; \\, -2.5]"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 93,
    title: "Задача 93",
    mathA: "\\frac{\\sqrt{x+4}\\left(8 - 3^{2+x^2}\\right)}{4^{x-1} - 3} \\le 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Запишем исходное неравенство в виде равносильной системы условий, содержащей ограничения области определения для подкоренного выражения и знаменателя дроби:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{\\sqrt{x+4}\\left(3^{\\log_3 8} - 3^{2+x^2}\\right)}{4^{x-1} - 4^{\\log_4 3}} \\le 0 \\\\ x + 4 \\ge 0 \\\\ 4^{x-1} - 3 \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{\\sqrt{x+4}\\left(3^{\\log_3 8} - 3^{2+x^2}\\right)}{4^{x-1} - 4^{\\log_4 3}} \\le 0 \\\\ x \\ge -4 \\\\ x \\neq 1 + \\log_4 3 \\end{cases}"}</BlockMath>

        <p>
          Рассмотрим граничную точку области определения <InlineMath>{"x = -4"}</InlineMath>: при подстановке радикал равен нулю, числитель обнуляется, а знаменатель принимает ненулевое значение. Неравенство обращается в верное равенство <InlineMath>{"0 \\le 0"}</InlineMath>, следовательно, <InlineMath>{"x = -4"}</InlineMath> является изолированным решением.
        </p>

        <div className="flex flex-wrap items-center gap-1">
          <span>На интервале</span>
          <InlineMath>{"x > -4"}</InlineMath>
          <span>множитель</span>
          <InlineMath>{"\\sqrt{x+4} > 0"}</InlineMath>
          <span>строго положителен, поэтому мы можем разделить на него обе части неравенства без изменения знака. Применим метод замены множителей к показательным функциям в числителе и знаменателе при основаниях</span>
          <InlineMath>{"3 > 1"}</InlineMath>
          <span>и</span>
          <InlineMath>{"4 > 1"}</InlineMath>:
        </div>
        <BlockMath>{"\\iff \\begin{cases} \\frac{\\log_3 8 - (2 + x^2)}{x - 1 - \\log_4 3} \\le 0 \\\\ x > -4 \\\\ x \\neq 1 + \\log_4 3 \\end{cases} \\iff \\begin{cases} \\frac{x^2 + 2 - \\log_3 8}{x - (1 + \\log_4 3)} \\ge 0 \\\\ x > -4 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем знак числителя полученной дроби. Так как</span>
          <InlineMath>{"\\log_3 8 < \\log_3 9 = 2"}</InlineMath>,
          <span>то разность</span>
          <InlineMath>{"2 - \\log_3 8 > 0"}</InlineMath>
          <span>строго положительна. Следовательно, выражение</span>
          <InlineMath>{"x^2 + (2 - \\log_3 8) > 0"}</InlineMath>
          <span>строго больше нуля при любых вещественных значениях аргумента. Знак всей дроби полностью определяется только знаменателем:</span>
        </div>
        <BlockMath>{"\\iff \\begin{cases} x - (1 + \\log_4 3) > 0 \\\\ x > -4 \\end{cases} \\iff \\begin{cases} x > 1 + \\log_4 3 \\\\ x > -4 \\end{cases}"}</BlockMath>

        <p>Исследуем промежуточные знаки полученного рационального выражения методом интервалов. На числовой прямой выделены области, где дробь строго больше нуля (&gt; 0):</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <InequalityNumberLine points={[{ label: "1+\\log_4 3", closed: false }]} selected={[[1, 2]]} />

        <p>Откуда находим промежуточное решение для дробной части неравенства:</p>
        <BlockMath>{"x \\in (1 + \\log_4 3; \\, +\\infty)"}</BlockMath>

        <p>Пересечёт полученный луч со всеми условиями области допустимых значений ОДЗ радикалов:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <InequalityNumberLine points={[{ label: "-4", closed: true }, { label: "1+\\log_4 3", closed: false }]} selected={[[2, 3]]} />

        <p>Объединяя изолированный корень и непрерывный луч, получаем итоговое решение:</p>
        <BlockMath>{"x \\in \\{-4\\} \\cup (1 + \\log_4 3; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\{-4\\} \\cup (1 + \\log_4 3; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 94,
    title: "Задача 94",
    mathA: "8^{\\lg(-1-x)} \\le (x^2-1)^{\\lg 2}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`x<-1`} />. Используя тождество <InlineMath math={`a^{\\lg b}=b^{\\lg a}`} /> для положительных оснований, преобразуем:</p>
        <BlockMath math={`2^{3\\lg(-1-x)}\\le2^{\\lg(x^2-1)} \\iff (-1-x)^3\\le x^2-1.`} />
        <p>Положим <InlineMath math={`t=-1-x>0`} />. Тогда <InlineMath math={`x^2-1=t(t+2)`} />, и после деления на положительное <InlineMath math={`t`} /> получаем</p>
        <BlockMath math={`t^2\\le t+2 \\iff (t-2)(t+1)\\le0 \\iff 0<t\\le2.`} />
        <p>Возвращаемся к x: <InlineMath math={`-3\\le x<-1`} />.</p>
        <InequalityNumberLine points={[{ label: '-3', closed: true }, { label: '-1', closed: false }]} selected={[[1,2]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`[-3;-1)`} /></div>
      </div>
    )
  },
  {
    id: 95,
    title: "Задача 95",
    mathA: "\\ln(7e^x) \\ge \\frac{1}{x}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Используем свойство логарифма произведения: <InlineMath>{"\\ln(a \\cdot b) = \\ln a + \\ln b"}</InlineMath> на области определения. Учитывая, что аргумент логарифма <InlineMath>{"7e^x"}</InlineMath> всегда строго положителен при любых вещественных значениях переменной, запишем единую равносильную систему с ограничением на знаменатель правой части:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\ln 7 + \\ln(e^x) \\ge \\frac{1}{x} \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} x + \\ln 7 \\ge \\frac{1}{x} \\\\ x \\neq 0 \\end{cases}"}</BlockMath>

        <p>Перенесём дробную часть влево и приведём выражение к общему знаменателю:</p>
        <BlockMath>{"\\iff \\begin{cases} x + \\ln 7 - \\frac{1}{x} \\ge 0 \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{x^2 + x\\ln 7 - 1}{x} \\ge 0 \\\\ x \\neq 0 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Найдем нули квадратного трёхчлена в числителе через дискриминант:</span>
          <InlineMath>{"D = (\\ln 7)^2 - 4 \\cdot 1 \\cdot (-1) = (\\ln 7)^2 + 4"}</InlineMath>.
          <span>Так как полученный дискриминант строго положителен, числитель имеет два действительных корня:</span>
        </div>
        <BlockMath>{"x = \\frac{-\\ln 7 \\pm \\sqrt{(\\ln 7)^2 + 4}}{2}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Проведём строгое аналитическое сравнение корней числителя с выколотым нулём знаменателя. Поскольку величина</span>
          <InlineMath>{"\\sqrt{(\\ln 7)^2 + 4} > \\sqrt{(\\ln 7)^2} = \\ln 7"}</InlineMath>,
          <span>то левый корень гарантированно отрицательный:</span>
          <InlineMath>{"x_1 = \\frac{-\\ln 7 - \\sqrt{(\\ln 7)^2 + 4}}{2} < 0"}</InlineMath>,
          <span>а правый корень строго положительный:</span>
          <InlineMath>{"x_2 = \\frac{-\\ln 7 + \\sqrt{(\\ln 7)^2 + 4}}{2} > 0"}</InlineMath>.
        </div>

        <p>Решая полученную рациональную дробь методом интервалов знаков, находим промежуточное решение для дробной части:</p>
        <BlockMath>{"x \\in \\left[ \\frac{-\\ln 7 - \\sqrt{(\\ln 7)^2 + 4}}{2}; \\, 0 \\right) \\cup \\left[ \\frac{-\\ln 7 + \\sqrt{(\\ln 7)^2 + 4}}{2}; \\, +\\infty \\right)"}</BlockMath>

        <p>Пересечёт полученные множества с базовым ограничением ОДЗ знаменателя (выколотой точкой 0):</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ ЗНАМЕНАТЕЛЯ */}
        {/* Иррациональные натуральные логарифмы выведены оригинальным KaTeX-шрифтом через foreignObject строго под cx=75 и cx=275 */}
        <InequalityNumberLine points={[{ label: "\\frac{-\\ln 7-\\sqrt{\\ln^2 7+4}}{2}", closed: true }, { label: "0", closed: false }, { label: "\\frac{-\\ln 7+\\sqrt{\\ln^2 7+4}}{2}", closed: true }]} selected={[[1, 2], [3, 4]]} />

        <p>В результате пересечения множеств получаем окончательный ответ всей системы:</p>
        <BlockMath>{"x \\in \\left[ \\frac{-\\ln 7 - \\sqrt{(\\ln 7)^2 + 4}}{2}; \\, 0 \\right) \\cup \\left[ \\frac{-\\ln 7 + \\sqrt{(\\ln 7)^2 + 4}}{2}; \\, +\\infty \\right)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\left[ \\frac{-\\ln 7 - \\sqrt{(\\ln 7)^2 + 4}}{2}; \\, 0 \\right) \\cup \\left[ \\frac{-\\ln 7 + \\sqrt{(\\ln 7)^2 + 4}}{2}; \\, +\\infty \\right)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 96,
    title: "Задача 96",
    mathA: "\\frac{\\lg^2 x^2 \\cdot \\left(\\log_{2x+7}^2(x + 7) + 3\\log_{2x+7}(x + 7) + \\log_{2x+7}(2x + 7)^2\\right)}{(5^x - 1) \\lg 2x} \\le 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Запишем исходное неравенство в виде единой равносильной системы условий, учитывающей ограничения области допустимых значений:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{4\\lg^2 x \\cdot \\left(\\log_{2x+7}^2(x + 7) + 3\\log_{2x+7}(x + 7) + 2\\right)}{(5^x - 5^0) (\\lg 2x - \\lg 1)} \\le 0 \\\\ x > 0 \\\\ 2x + 7 > 0 \\\\ 2x + 7 \\neq 1 \\\\ x + 7 > 0 \\\\ 2x > 0 \\\\ 2x \\neq 1 \\end{cases} \\iff \\begin{cases} \\frac{4\\lg^2 x \\cdot (\\log_{2x+7}(x + 7) + 1)(\\log_{2x+7}(x + 7) + 2)}{(5^x - 5^0) (\\lg 2x - \\lg 1)} \\le 0 \\\\ x \\in (0; \\, 0{,}5) \\cup (0{,}5; \\, +\\infty) \\end{cases}"}</BlockMath>

        <p>
          Поскольку на ОДЗ множитель <InlineMath>{"4\\lg^2 x \\ge 0"}</InlineMath> неотрицателен, он даёт изолированный корень при <InlineMath>{"x = 1"}</InlineMath>. Для остальных слагаемых применим метод замены множителей (рационализации):
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{\\left((x + 7) - \\frac{1}{2x+7}\\right)\\left((x + 7) - \\frac{1}{(2x+7)^2}\\right)}{(5 - 1)(x - 0) \\cdot (10 - 1)(2x - 1)} \\le 0 \\\\ x \\in (0; \\, 0{,}5) \\cup (0{,}5; \\, +\\infty) \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} \\frac{(2x^2+21x+48)(4x^3+60x^2+220x+244)}{x(2x - 1)(2x+7)^3} \\le 0 \\\\ x \\in (0; \\, 0{,}5) \\cup (0{,}5; \\, +\\infty) \\end{cases}"}</BlockMath>

        <p>
          Так как при всех <InlineMath>{"x > 0"}</InlineMath> многочлены числителя и скобка <InlineMath>{"2x+7"}</InlineMath> строго положительны, знак всей дроби определяется только линейной скобкой знаменателя с учётом изолированного корня:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\left[ \\begin{aligned} &\\frac{1}{2x - 1} \\le 0 \\\\ &x = 1 \\end{aligned} \\right. \\\\ x \\in (0; \\, 0{,}5) \\cup (0{,}5; \\, +\\infty) \\end{cases} \\iff x \\in (0; \\, 0{,}5) \\cup \\{1\\}"}</BlockMath>

        <p>Исследуем знаки полученного рационального выражения методом интервалов. На числовой прямой выделены области, удовлетворяющие системе неравенства:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "0{,}5", closed: false }, { label: "1", closed: true }]} selected={[[1, 2]]} />

        <p>В результате пересечения множеств получаем окончательный ответ всей системы:</p>
        <BlockMath>{"x \\in (0; \\, 0{,}5) \\cup \\{1\\}"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(0; \\, 0{,}5) \\cup \\{1\\}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 97,
    title: "Задача 97",
    mathA: "\\log_{(x+7)}(x^2 + 4) < -\\frac{1}{\\log_x \\sqrt{x+7}} + \\log_{(x+7)}(x^2 - 1)",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Преобразуем первое слагаемое в правой части неравенства, используя формулы перехода к новому основанию и вынесения степени аргумента:
          <InlineMath>{"-\\frac{1}{\\log_x \\sqrt{x+7}} = -\\frac{1}{\\frac{1}{2}\\log_x(x+7)} = -\\frac{2}{\\log_x(x+7)} = -2\\log_{x+7} x = \\log_{x+7}(x^{-2})"}</InlineMath>.
          Запишем единую равносильную систему условий, удерживающую ограничения ОДЗ всех аргументов и переменных оснований логарифмов:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{x+7}(x^2 + 4) < \\log_{x+7}\\left(\\frac{x^2 - 1}{x^2}\\right) \\\\ x^2 + 4 > 0 \\\\ x^2 - 1 > 0 \\\\ x > 0 \\\\ x \\neq 1 \\\\ x + 7 > 0 \\\\ x + 7 \\neq 1 \\end{cases} \\iff \\begin{cases} \\log_{x+7}(x^2 + 4) - \\log_{x+7}\\left(1 - \\frac{1}{x^2}\\right) < 0 \\\\ (x - 1)(x + 1) > 0 \\\\ x > 0 \\\\ x \\neq 1 \\\\ x > -7 \\\\ x \\neq -6 \\end{cases}"}</BlockMath>

        <p>
          Сведём ограничения аргументов и оснований к общему пересечению интервалов системы ОДЗ: <InlineMath>{"x \\in (1; \\, +\\infty)"}</InlineMath>.
          Применим метод замены множителей (рационализации) к полученной разности логарифмов по переменному основанию, которое на ОДЗ гарантированно больше единицы (<InlineMath>{"x + 7 > 8 > 1"}</InlineMath>):
        </p>
        <BlockMath>{"\\iff \\begin{cases} (x + 7 - 1) \\cdot \\left((x^2 + 4) - \\left(1 - \\frac{1}{x^2}\\right)\\right) < 0 \\\\ x > 1 \\end{cases} \\iff \\begin{cases} (x + 6) \\cdot \\left(x^2 + 3 + \\frac{1}{x^2}\\right) < 0 \\\\ x > 1 \\end{cases}"}</BlockMath>

        <p>
          Проанализируем знаки полученных сомножителей на области допустимых значений системы. Так как для любого <InlineMath>{"x > 1"}</InlineMath> линейная скобка <InlineMath>{"x + 6 > 7 > 0"}</InlineMath> строго положительна, а сумма квадратов и взаимно обратных величин <InlineMath>{"x^2 + 3 + \\frac{1}{x^2} > 5 > 0"}</InlineMath> также строго больше нуля, произведение двух положительных скобок не может быть меньше нуля.
        </p>
        <p>Следовательно, полученная рациональная система не имеет совместных решений на своей области определения.</p>

        <p>Визуализируем пустое пересечение областей на числовой прямой методом интервалов:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ */}
        <InequalityNumberLine points={[]} selected={[]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\varnothing"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
    {
    id: 98,
    title: "Задача 98",
    mathA: "\\frac{\\log_{4-x}(x+5) \\cdot \\log_{x+1}(\\log_2 10 - x)}{\\sin x \\cdot \\log_x(2x)} \\le 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Запишем исходное неравенство и ограничения ОДЗ для всех аргументов, знаменателей и переменных оснований логарифмических функций в единую систему условий:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{\\log_{4-x}(x+5) \\cdot \\log_{x+1}(\\log_2 10 - x)}{\\sin x \\cdot \\log_x(2x)} \\le 0 \\\\ x + 1 > 0 \\\\ 4 - x > 0 \\\\ x + 5 > 0 \\\\ \\log_2 10 - x > 0 \\\\ x + 1 \\neq 1 \\\\ 4 - x \\neq 1 \\\\ x > 0 \\\\ x \\neq 1 \\\\ 2x > 0 \\end{cases} \\iff \\begin{cases} \\frac{\\log_{4-x}(x+5) \\cdot \\log_{x+1}(\\log_2 10 - x)}{\\sin x \\cdot \\log_x(2x)} \\le 0 \\\\ x > -1 \\\\ x < 4 \\\\ x > -5 \\\\ x < \\log_2 10 \\\\ x \\neq 0 \\\\ x \\neq 3 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}"}</BlockMath>

        <p>
          Пересечение всех линейных условий даёт базовое множество интервалов ОДЗ: 
          <InlineMath>{"x \\in (0; \\, 1) \\cup (1; \\, 3) \\cup (3; \\, \\log_2 10)"}</InlineMath>.
        </p>

        <p>
          Применим метод замены множителей (рационализации) к логарифмическим выражениям исходной дроби, удерживая всё выражение внутри большой сквозной системы:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{(4 - x - 1)(x + 5 - 1)(x + 1 - 1)(\\log_2 10 - x - 1)}{\\sin x \\cdot (x - 1)(2x - 1)} \\le 0 \\\\ x > -1 \\\\ x < 4 \\\\ x > -5 \\\\ x < \\log_2 10 \\\\ x \\neq 0 \\\\ x \\neq 3 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases} \\iff \\begin{cases} \\frac{(3 - x)(x + 4) \\cdot x \\cdot (\\log_2 10 - 1 - x)}{\\sin x \\cdot (x - 1)(2x - 1)} \\le 0 \\\\ x > -1 \\\\ x < 4 \\\\ x > -5 \\\\ x < \\log_2 10 \\\\ x \\neq 0 \\\\ x \\neq 3 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}"}</BlockMath>

        <p>
          Преобразуем последнюю скобку числителя, приведя единицу к логарифмическому основанию 2: 
          <InlineMath>{"\\log_2 10 - 1 - x = \\log_2 10 - \\log_2 2 - x = \\log_2 5 - x = -(x - \\log_2 5)"}</InlineMath>. 
          Вынесем знак минус из первой скобки числителя: <InlineMath>{"(3 - x) = -(x - 3)"}</InlineMath>. Произведение двух минусов даёт плюс.
        </p>
        <p>
          Поскольку на рассматриваемой области ОДЗ множители <InlineMath>{"x > 0"}</InlineMath> и <InlineMath>{"x + 4 > 0"}</InlineMath> гарантированно строго положительны, сократим на них и перейдём к канонической рациональной форме внутри сквозной системы:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{(x - 3)(x - \\log_2 5)}{\\sin x \\cdot (x - 1)(2x - 1)} \\le 0 \\\\ x > -1 \\\\ x < 4 \\\\ x > -5 \\\\ x < \\log_2 10 \\\\ x \\neq 0 \\\\ x \\neq 3 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}"}</BlockMath>

        <p>
          Проведём строгое аналитическое сравнение верхней границы области ОДЗ — числа <InlineMath>{"\\log_2 10"}</InlineMath> — с константой <InlineMath>{"\\pi"}</InlineMath>, используя метод разделяющих чисел:
        </p>
        <BlockMath>{"\\log_2 10 = \\log_2(8 \\cdot 1{,}25) = \\log_2 8 + \\log_2 1{,}25 = 3 + \\log_2 1{,}25"}</BlockMath>
        <p>
          Оценим значение <InlineMath>{"\\log_2 1{,}25"}</InlineMath> «снизу» через более близкое круглое число <InlineMath>{"1{,}2"}</InlineMath>. Возведём его в четвёртую степень:
        </p>
        <BlockMath>{"(1{,}2)^4 = 1{,}44 \\cdot 1{,}44 = 2{,}0736 > 2 \\implies 1{,}2 > \\sqrt{2}"}</BlockMath>
        <BlockMath>{"\\implies \\log_2 1{,}25 > \\log_2 1{,}2 > \\log_2 \\sqrt{2} = 0{,}25"}</BlockMath>
        <BlockMath>{"\\implies \\log_2 10 = 3 + \\log_2 1{,}25 > 3 + 0{,}25 = 3{,}25"}</BlockMath>
        <p>
          Поскольку в тригонометрии константа <InlineMath>{"\\pi < 3{,}15 < 3{,}25"}</InlineMath>, получаем строгое взаимное расположение точек: 
          <InlineMath>{"3 < \\pi < 3{,}25 < \\log_2 10"}</InlineMath>. Следовательно, корень знаменателя <InlineMath>{"x = \\pi"}</InlineMath> входит в область ОДЗ неравенства, разбивая правый интервал и меняя знак тригонометрической функции <InlineMath>{"\\sin x"}</InlineMath>.
        </p>

        <p>Определим знаки полученного выражения методом интервалов на области <InlineMath>{"(0; \\, 2\\pi)"}</InlineMath>. На числовой прямой выделены области, где дробь меньше или равна нулю (\\le 0):</p>

                {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <InequalityNumberLine points={[{ label: "0{,}5", closed: false }, { label: "1", closed: false }, { label: "\\log_2 5", closed: true }, { label: "3", closed: true }, { label: "\\pi", closed: false }]} selected={[[1, 2], [3, 4], [5, 6]]} />

        <p>Откуда находим промежуточное решение для дробной части неравенства:</p>
        <BlockMath>{"x \\in (0{,}5; \\, 1) \\cup [\\log_2 5; \\, 3] \\cup (\\pi; \\, +\\infty)"}</BlockMath>

        <p>Пересечёт полученные множества с базовыми интервалами ОДЗ системы логарифмов:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ С ВЫВЕРЕННЫМИ КООРДИНАТАМИ */}
        <InequalityNumberLine points={[{ label: "0{,}5", closed: false }, { label: "1", closed: false }, { label: "\\log_2 5", closed: true }, { label: "3", closed: false }, { label: "\\pi", closed: false }, { label: "\\log_2 10", closed: false }]} selected={[[1, 2], [3, 4], [5, 6]]} />

        <p>В результате пересечения множеств получаем окончательный ответ всей системы:</p>
        <BlockMath>{"x \\in (0{,}5; \\, 1) \\cup [\\log_2 5; \\, 3) \\cup (\\pi; \\, \\log_2 10)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(0{,}5; \\, 1) \\cup [\\log_2 5; \\, 3) \\cup (\\pi; \\, \\log_2 10)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 99,
    title: "Задача 99 (ДВИ 2026, Вариант 1)",
    mathA: "2 \\log_{x+1}(x^2 - 1) + \\log_{x-1}(x^2 + 2x + 1) \\le 7",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Запишем исходное неравенство и ограничения ОДЗ для аргументов и оснований обеих логарифмических функций в единую систему условий:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 2 \\log_{x+1}(x^2 - 1) + \\log_{x-1}(x^2 + 2x + 1) \\le 7 \\\\ x^2 - 1 > 0 \\\\ x^2 + 2x + 1 > 0 \\\\ x + 1 > 0 \\\\ x + 1 \\neq 1 \\\\ x - 1 > 0 \\\\ x - 1 \\neq 1 \\end{cases} \\iff \\begin{cases} 2 \\log_{x+1}(x^2 - 1) + \\log_{x-1}(x^2 + 2x + 1) \\le 7 \\\\ x > 1 \\\\ x \\neq 2 \\end{cases}"}</BlockMath>

        <p>
          Таким образом, базовая область допустимых значений системы: <InlineMath>{"x \\in (1; \\, 2) \\cup (2; \\, +\\infty)"}</InlineMath>. 
          Разложим аргументы логарифмов на множители по формулам разности квадратов и полного квадрата суммы:
        </p>
        <BlockMath>{"\\log_{x+1}(x^2 - 1) = \\log_{x+1}((x-1)(x+1)) = \\log_{x+1}(x-1) + \\log_{x+1}(x+1) = \\log_{x+1}(x-1) + 1"}</BlockMath>
        <BlockMath>{"\\log_{x-1}(x^2 + 2x + 1) = \\log_{x-1}(x+1)^2 = 2\\log_{x-1}(x+1)"}</BlockMath>

        <p>Подставим полученные логарифмические эквиваленты обратно в основное неравенство системы условий:</p>
        <BlockMath>{"\\iff \\begin{cases} 2(\\log_{x+1}(x-1) + 1) + 2\\log_{x-1}(x+1) \\le 7 \\\\ x \\in (1; \\, 2) \\cup (2; \\, +\\infty) \\end{cases} \\iff \\begin{cases} 2\\log_{x+1}(x-1) + 2\\log_{x-1}(x+1) \\le 5 \\\\ x \\in (1; \\, 2) \\cup (2; \\, +\\infty) \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath>{"t = \\log_{x+1}(x-1)"}</InlineMath>,
          <span>тогда по свойству перехода к новому основанию получаем</span>
          <InlineMath>{"\\log_{x-1}(x+1) = \\frac{1}{t}"}</InlineMath>.
          <span>Неравенство сводится к дробно-рациональному виду:</span>
        </div>
        <BlockMath>{"2t + \\frac{2}{t} \\le 5 \\iff \\frac{2t^2 - 5t + 2}{t} \\le 0 \\iff \\frac{2(t - 0{,}5)(t - 2)}{t} \\le 0"}</BlockMath>

        <p>Исследуем знаки полученной рациональной дроби относительно переменной t методом интервалов. На числовой прямой выделены области, где функция меньше или равна нулю (&le; 0):</p>

        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ПЕРЕМЕННОЙ T В СТИЛЕ КРЫШ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "0{,}5", closed: true }, { label: "2", closed: true }]} selected={[[0, 1], [2, 3]]} variable="t" />

        <p>Откуда получаем совокупность промежутков для обратной замены:</p>
        <BlockMath>{"\\left[ \\begin{aligned} &t < 0 \\\\ &0{,}5 \\le t \\le 2 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &\\log_{x+1}(x - 1) < \\log_{x+1} 1 \\\\ &\\log_{x+1}\\sqrt{x + 1} \\le \\log_{x+1}(x - 1) \\le \\log_{x+1}(x + 1)^2 \\end{aligned} \\right."}</BlockMath>
        <p>
          Поскольку на всей области допустимых значений основание логарифма <InlineMath>{"x + 1 > 2 > 1"}</InlineMath> строго больше единицы, опустим логарифмы с сохранением знаков неравенств и перейдём к сквозной системе:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\left[ \\begin{aligned} &x - 1 < 1 \\\\ &\\begin{cases} x - 1 \\ge \\sqrt{x+1} \\\\ x - 1 \\le x^2 + 2x + 1 \\end{cases} \\end{aligned} \\right. \\\\ x \\in (1; \\, 2) \\cup (2; \\, +\\infty) \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x < 2 \\\\ &\\begin{cases} (x-1)^2 \\ge x + 1 \\\\ x^2 + x + 2 \\ge 0 \\end{cases} \\end{aligned} \\right. \\\\ x \\in (1; \\, 2) \\cup (2; \\, +\\infty) \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} \\left[ \\begin{aligned} &x < 2 \\\\ &x^2 - 3x \\ge 0 \\end{aligned} \\right. \\\\ x \\in (0; \\, 2) \\cup (2; \\, +\\infty) \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x < 2 \\\\ &x \\ge 3 \\end{aligned} \\right. \\\\ x \\in (1; \\, 2) \\cup (2; \\, +\\infty) \\end{cases}"}</BlockMath>

        <p>Пересечём полученную совокупность лучей с интервалами ОДЗ логарифмической системы:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ ДЛЯ ПЕРЕМЕННОЙ X */}
        <InequalityNumberLine points={[{ label: "1", closed: false }, { label: "2", closed: false }, { label: "3", closed: true }]} selected={[[1, 2], [3, 4]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадной системы ДВИ:</p>
        <BlockMath>{"x \\in (1; \\, 2) \\cup [3; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(1; \\, 2) \\cup [3; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 100,
    title: "Задача 100 (ДВИ 2026, Вариант 2)",
    mathA: "\\begin{cases} \\log_{11-x}(x + 7) \\cdot \\log_{x+5}(9 - x) \\le 0 \\\\ 64^{x^2-3x+20} - 0{,}125^{2x^2-6x-200} \\le 0 \\end{cases}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение системы неравенств:</p>
        
        <p>
          Составим единую сквозную систему ограничений области допустимых значений (ОДЗ) для аргументов и переменных оснований обеих логарифмических функций:
        </p>
        <BlockMath>{"\\begin{cases} x + 7 > 0 \\\\ 11 - x > 0 \\\\ 11 - x \\neq 1 \\\\ 9 - x > 0 \\\\ x + 5 > 0 \\\\ x + 5 \\neq 1 \\end{cases} \\iff \\begin{cases} x > -7 \\\\ x < 11 \\\\ x \\neq 10 \\\\ x < 9 \\\\ x > -5 \\\\ x \\neq -4 \\end{cases}"}</BlockMath>

        <p>
          Пересечение всех линейных условий даёт базовое множество интервалов ОДЗ системы: 
          <InlineMath>{"x \\in (-5; \\, -4) \\cup (-4; \\, 9)"}</InlineMath>.
        </p>

        <p>
          Применим метод замены множителей (рационализации) к первому логарифмическому неравенству системы. Знак каждого логарифмического сомножителя совпадает со знаком произведения разностей его основания с единицей и аргумента с единицей:
        </p>
        <BlockMath>{"\\log_{11-x}(x + 7) \\cdot \\log_{x+5}(9 - x) \\le 0 \\iff (11 - x - 1)(x + 7 - 1) \\cdot (x + 5 - 1)(9 - x - 1) \\le 0"}</BlockMath>
        <BlockMath>{"\\iff (10 - x)(x + 6)(x + 4)(8 - x) \\le 0 \\iff (x - 10)(x + 6)(x + 4)(x - 8) \\le 0"}</BlockMath>

        <p>
          Преобразуем второе показательное неравенство системы, приведя обе степени к единому основанию <InlineMath>{"2 > 1"}</InlineMath>, учитывая, что <InlineMath>{"64 = 2^6"}</InlineMath> и <InlineMath>{"0{,}125 = 2^{-3}"}</InlineMath>:
        </p>
        <BlockMath>{"2^{6(x^2 - 3x + 20)} \\le 2^{-3(2x^2 - 6x - 200)} \\iff 6(x^2 - 3x + 20) \\le -3(2x^2 - 6x - 200)"}</BlockMath>
        <BlockMath>{"\\iff 6x^2 - 18x + 120 \\le -6x^2 + 18x + 600 \\iff 12x^2 - 36x - 480 \\le 0 \\iff x^2 - 3x - 40 \\le 0"}</BlockMath>
        <p>Корнями полученного квадратного трёхчлена по теореме Виета являются числа \(-5\) и \(8\):</p>
        <BlockMath>{"\\iff (x + 5)(x - 8) \\le 0 \\iff -5 \\le x \\le 8"}</BlockMath>

        <p>
          Объединим решения обоих рационализированных неравенств в промежуточную систему (без учёта ОДЗ):
        </p>
        <BlockMath>{"\\begin{cases} (x - 10)(x + 6)(x + 4)(x - 8) \\le 0 \\\\ -5 \\le x \\le 8 \\end{cases}"}</BlockMath>

        <p>Исследуем промежуточные знаки полученного рационального выражения методом интервалов. На числовой прямой выделены области выполнения условий совместной системы:</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ СИСТЕМЫ (БЕЗ ОДЗ) */}
        <InequalityNumberLine points={[{ label: "-5", closed: true }, { label: "-4", closed: true }, { label: "8", closed: true }]} selected={[[1, 2]]} />

               <p>Откуда находим промежуточное решение рациональной системы условий:</p>
        <BlockMath>{"x \\in [-5; \\, -4] \\cup \\{8\\}"}</BlockMath>

        <p>Пересечём полученные множества со сквозными интервалами области допустимых значений ОДЗ:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <InequalityNumberLine points={[{ label: "-5", closed: false }, { label: "-4", closed: false }, { label: "8", closed: true }]} selected={[[1, 2]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадной системы ДВИ:</p>
        <BlockMath>{"x \\in (-5; \\, -4) \\cup \\{8\\}"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(-5; \\, -4) \\cup \\{8\\}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 101,
    title: "Задача 101 (ДВИ 2025, Вариант 1)",
    mathA: "1 + \\sqrt{\\log_9(3x^2 + 8x + 6)} > \\log_3(3x^2 + 8x + 6)",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Приведём логарифм в правой части к основанию 9 по формуле перехода: 
          <InlineMath>{"\\log_3(f) = \\log_{9^{0.5}}(f) = 2\\log_9(f)"}</InlineMath>.
          Запишем единую равносильную систему условий, содержащую ограничения ОДЗ для аргумента логарифма и неотрицательность подкоренного выражения:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 1 + \\sqrt{\\log_9(3x^2 + 8x + 6)} > 2\\log_9(3x^2 + 8x + 6) \\\\ \\log_9(3x^2 + 8x + 6) \\ge 0 \\\\ 3x^2 + 8x + 6 > 0 \\end{cases}"}</BlockMath>

        <p>
          Проанализируем квадратичный аргумент: дискриминант квадратного трёхчлена <InlineMath>{"D = 8^2 - 4 \\cdot 3 \\cdot 6 = 64 - 72 = -8 < 0"}</InlineMath> строго меньше нуля. Поскольку старший коэффициент положителен, условие <InlineMath>{"3x^2 + 8x + 6 > 0"}</InlineMath> выполняется автоматически на всём множестве действительных чисел.
        </p>
        <p>
          Второе ограничение ОДЗ по методу рационализации логарифма при основании <InlineMath>{"9 > 1"}</InlineMath> сводится к виду:
          <InlineMath>{"\\log_9(3x^2 + 8x + 6) \\ge \\log_9 1 \\iff 3x^2 + 8x + 6 \\ge 1 \\iff 3x^2 + 8x + 5 \\ge 0"}</InlineMath>.
        </p>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной для решения основного иррационального неравенства: пусть</span>
          <InlineMath>{"t = \\sqrt{\\log_9(3x^2 + 8x + 6)}"}</InlineMath>
          <span>(где по определению корня</span>
          <InlineMath>{"t \\ge 0"}</InlineMath>).
          <span>Получаем квадратный трёхчлен:</span>
        </div>
        <BlockMath>{"1 + t > 2t^2 \\iff 2t^2 - t - 1 < 0 \\iff 2(t - 1)(t + 0.5) < 0"}</BlockMath>
        
        <p>
          С учётом базового ограничения <InlineMath>{"t \\ge 0"}</InlineMath>, решением квадратичного неравенства относительно переменной t является интервал:
          <InlineMath>{"0 \\le t < 1"}</InlineMath>. Выполним обратную замену:
        </p>
        <BlockMath>{"\\iff 0 \\le \\sqrt{\\log_9(3x^2 + 8x + 6)} < 1 \\iff 0 \\le \\log_9(3x^2 + 8x + 6) < 1"}</BlockMath>
        <BlockMath>{"\\iff \\log_9 1 \\le \\log_9(3x^2 + 8x + 6) < \\log_9 9"}</BlockMath>

        <p>
          Поскольку основание логарифма <InlineMath>{"9 > 1"}</InlineMath> строго больше единицы, опустим логарифмы с сохранением знаков и перейдём к сквозной системе условий для переменной х:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 3x^2 + 8x + 6 < 9 \\\\ 3x^2 + 8x + 6 \\ge 1 \\end{cases} \\iff \\begin{cases} 3x^2 + 8x - 3 < 0 \\\\ 3x^2 + 8x + 5 \\ge 0 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим оба квадратных трёхчлена на линейные множители. Корнями первого уравнения являются числа \(-3\) и \(\frac{1}{3}\), а корнями второго — числа \(-5/3\) и \(-1\):</span>
        </div>
        <BlockMath>{"\\iff \\begin{cases} 3(x + 3)\\left(x - \\frac{1}{3}\\right) < 0 \\\\ 3(x + 1)\\left(x + \\frac{5}{3}\\right) \\ge 0 \\end{cases}"}</BlockMath>

        <p>Исследуем знаки полученных выражений методом интервалов на числовой прямой. На числовой прямой выделены области выполнения условий совместной системы:</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ СИСТЕМЫ (БЕЗ ОДЗ) */}
        <InequalityNumberLine points={[{ label: "-3", closed: false }, { label: "-\\frac{5}{3}", closed: true }, { label: "-1", closed: true }, { label: "\\frac{1}{3}", closed: false }]} selected={[[1, 2], [3, 4]]} />

        <p>Откуда находим промежуточное решение рациональной системы неравенств:</p>
        <BlockMath>{"x \\in \\left(-3; \\, -\\frac{5}{3}\\right] \\cup \\left[-1; \\, \\frac{1}{3}\\right)"}</BlockMath>

        <p>Пересечёт полученные промежутки с фоновым условием ОДЗ неотрицательности логарифма:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <InequalityNumberLine points={[{ label: "-3", closed: false }, { label: "-\\frac{5}{3}", closed: true }, { label: "-1", closed: true }, { label: "\\frac{1}{3}", closed: false }]} selected={[[1, 2], [3, 4]]} />
        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in \\left(-3; \\, -\\frac{5}{3}\\right] \\cup \\left[-1; \\, \\frac{1}{3}\\right)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\left(-3; \\, -\\frac{5}{3}\\right] \\cup \\left[-1; \\, \\frac{1}{3}\\right)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
    {
    id: 102,
    title: "Задача 102 (ДВИ 2025, Вариант 2)",
    mathA: "\\log_{1/2}\\left(\\frac{2}{9^x-1}\\right) \\le \\log_{1/2}\\left(\\frac{1}{3^x+31}\\right)",
    mathB: "",
    solutionBuilder: () => (

      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Запишем единую равносильную систему условий, содержащую исходное неравенство и ограничения ОДЗ строго положительных аргументов логарифмов:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{2}{9^x - 1} \\ge \\frac{1}{3^x + 31} \\\\ \\frac{2}{9^x - 1} > 0 \\\\ \\frac{1}{3^x + 31} > 0 \\end{cases}"}</BlockMath>

        <p>
          Проанализируем ОДЗ аргументов. Множитель числителя второй дроби равен единице, а знаменатель <InlineMath>{"3^x + 31 > 0"}</InlineMath> строго положителен при любых вещественных значениях переменной. Следовательно, условие ОДЗ сводится только к строго положительному знаменателю первой дроби:
          <InlineMath>{"9^x - 1 > 0 \\iff 9^x > 9^0 \\iff x > 0"}</InlineMath>.
        </p>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной для решения основного неравенства: пусть</span>
          <InlineMath>{"t = 3^x"}</InlineMath>
          <span>(где</span>
          <InlineMath>{"t > 0"}</InlineMath>,
          <span>тогда</span>
          <InlineMath>{"9^x = t^2"}</InlineMath>).
          <span>С учётом ОДЗ знаменателей перейдём к рациональной дробной системе:</span>
        </div>
        <BlockMath>{"\\iff \\begin{cases} \\frac{2}{t^2 - 1} \\ge \\frac{1}{t + 31} \\\\ t > 1 \\end{cases} \\iff \\begin{cases} \\frac{2(t + 31) - (t^2 - 1)}{(t - 1)(t + 1)(t + 31)} \\ge 0 \\\\ t > 1 \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} \\frac{-t^2 + 2t + 63}{(t - 1)(t + 1)(t + 31)} \\ge 0 \\\\ t > 1 \\end{cases} \\iff \\begin{cases} \\frac{t^2 - 2t - 63}{(t - 1)(t + 1)(t + 31)} \\le 0 \\\\ t > 1 \\end{cases}"}</BlockMath>

        <p>Разложим квадратный трёхчлен в числителе основной дроби на линейные множители (корни по теореме Виета равны \(-7\) и \(9\)):</p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{(t - 9)(t + 7)}{(t - 1)(t + 1)(t + 31)} \\le 0 \\\\ t > 1 \\end{cases}"}</BlockMath>

        <p>
          Проанализируем знаки множителей на области <InlineMath>{"t > 1"}</InlineMath>. Скобки <InlineMath>{"t + 7 > 8 > 0"}</InlineMath>, <InlineMath>{"t + 1 > 2 > 0"}</InlineMath> и <InlineMath>{"t + 31 > 32 > 0"}</InlineMath> строго положительны, поэтому мы можем убрать их без изменения знака неравенства:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{t - 9}{t - 1} \\le 0 \\\\ t > 1 \\end{cases} \\iff 1 < t \\le 9"}</BlockMath>

        <p>Выполним обратную замену для переменной х:</p>
        <BlockMath>{"1 < 3^x \\le 9 \\iff 3^0 < 3^x \\le 3^2 \\iff 0 < x \\le 2"}</BlockMath>

        <p>Исследуем знаки полученного рационального выражения методом интервалов на числовой прямой. На числовой прямой выделены области выполнения условий совместной системы:</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "2", closed: true }]} selected={[[1, 2]]} />

        <p>Откуда находим промежуточное решение для дробной части неравенства:</p>
        <BlockMath>{"x \\in (0; \\, 2]"}</BlockMath>

        <p>Пересечёт полученные множества со сквозными интервалами области допустимых значений ОДЗ:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "2", closed: true }]} selected={[[1, 2]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in (0; \\, 2]"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(0; \\, 2]"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 103,
    title: "Задача 103 (ДВИ 2025, Вариант 3)",
    mathA: "\\sqrt{\\log_2^2(x^{\\sqrt{2}}) - 3\\log_4 x^6 + 13} > \\log_2\\left(\\frac{x}{2}\\right)",
    mathB: "",
    solutionBuilder: () => (

      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Запишем исходное неравенство и ограничения ОДЗ строго положительного аргумента логарифмической функции в единую сквозную систему условий:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\sqrt{\\log_2^2(x^{\\sqrt{2}}) - 3\\log_4 x^6 + 13} > \\log_2 x - \\log_2 2 \\\\ x > 0 \\\\ x^{\\sqrt{2}} > 0 \\\\ x^6 > 0 \\end{cases} \\iff \\begin{cases} \\sqrt{\\log_2^2(x^{\\sqrt{2}}) - 3\\log_4 x^6 + 13} > \\log_2 x - 1 \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>
          Преобразуем компоненты подкоренного выражения, используя свойства логарифмов на области <InlineMath>{"x > 0"}</InlineMath>:
          <BlockMath>{"\\log_2^2(x^{\\sqrt{2}}) = (\\sqrt{2}\\log_2 x)^2 = 2\\log_2^2 x"}</BlockMath>
          <BlockMath>{"3\\log_4 x^6 = 3 \\cdot \\frac{6}{2}\\log_2 x = 9\\log_2 x"}</BlockMath>
          Подставим полученные эквиваленты обратно в систему условий:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\sqrt{2\\log_2^2 x - 9\\log_2 x + 13} > \\log_2 x - 1 \\\\ x > 0 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной для раскрытия иррациональной структуры: пусть</span>
          <InlineMath>{"t = \\log_2 x"}</InlineMath>.
          <span>Неравенство принимает классический школьный вид</span>
          <InlineMath>{"\\sqrt{f(t)} > g(t)"}</InlineMath>,
          <span>который равносильно распадается на совокупность двух систем:</span>
        </div>
                <BlockMath>{"\\iff \\left[ \\begin{aligned} &\\begin{cases} g(t) < 0 \\\\ f(t) \\ge 0 \\end{cases} \\\\ &\\begin{cases} g(t) \\ge 0 \\\\ f(t) > g^2(t) \\end{cases} \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &\\begin{cases} t - 1 < 0 \\\\ 2t^2 - 9t + 13 \\ge 0 \\end{cases} \\\\ &\\begin{cases} t - 1 \\ge 0 \\\\ 2t^2 - 9t + 13 > (t - 1)^2 \\end{cases} \\end{aligned} \\right."}</BlockMath>

        <p>
          Проанализируем знак подкоренного выражения <InlineMath>{"2t^2 - 9t + 13"}</InlineMath>. Дискриминант трёхчлена равен <InlineMath>{"D = (-9)^2 - 4 \\cdot 2 \\cdot 13 = 81 - 104 = -23 < 0"}</InlineMath>. Поскольку старший коэффициент положителен, выражение строго больше нуля при любых вещественных значениях переменной. Первая система совокупности сводится к лучу: <InlineMath>{"t < 1"}</InlineMath>.
        </p>
        <p>Раскроем квадрат разности во второй системе совокупности и приведём подобные члены:</p>
        <BlockMath>{"2t^2 - 9t + 13 > t^2 - 2t + 1 \\iff t^2 - 7t + 12 > 0 \\iff (t - 3)(t - 4) > 0"}</BlockMath>
        <p>
          С учётом условия <InlineMath>{"t \\ge 1"}</InlineMath>, решением второй системы является множество: <InlineMath>{"t \\in [1; \\, 3) \\cup (4; \\, +\\infty)"}</InlineMath>.
        </p>
        
        <p>Объединяя результаты обеих систем совокупности, находим итоговое решение относительно переменной t:</p>
        <BlockMath>{"t \\in (-\\infty; \\, 3) \\cup (4; \\, +\\infty)"}</BlockMath>

        <p>Выполним обратную замену для переменной х с удержанием базового ограничения ОДЗ:</p>
        <BlockMath>{"\\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_2 x < 3 \\\\ &\\log_2 x > 4 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x < 8 \\\\ &x > 16 \\end{aligned} \\right. \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На числовой прямой выделены области выполнения совместной системы неравенств:</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <InequalityNumberLine points={[{ label: "8", closed: false }, { label: "16", closed: false }]} selected={[[0, 1], [2, 3]]} />

        <p>Пересечёт полученные множества со сквозными интервалами области допустимых значений ОДЗ:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "8", closed: false }, { label: "16", closed: false }]} selected={[[1, 2], [3, 4]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in (0; \\, 8) \\cup (16; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(0; \\, 8) \\cup (16; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 104,
    title: "Задача 104 (ДВИ 2025, Вариант 4)",
    mathA: "(2 - 2x) \\cdot \\log_{2 \\cdot 3^x - 5} \\sqrt{3} \\le 1",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Преобразуем аргумент логарифма, вынеся степень: 
          <InlineMath>{"\\log_{a} \\sqrt{3} = \\log_{a} 3^{0.5} = \\frac{1}{2} \\log_{a} 3"}</InlineMath>.
          Тогда первая скобка примет вид <InlineMath>{"(2 - 2x) \\cdot \\frac{1}{2} = 1 - x"}</InlineMath>.
          Запишем единую равносильную систему условий с ограничениями ОДЗ на переменное основание логарифма:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{1 - x}{\\log_3(2 \\cdot 3^x - 5)} \\le 1 \\\\ 2 \\cdot 3^x - 5 > 0 \\\\ 2 \\cdot 3^x - 5 \\neq 1 \\end{cases} \\iff \\begin{cases} \\frac{1 - x}{\\log_3(2 \\cdot 3^x - 5)} \\le 1 \\\\ 3^x > 2.5 \\\\ 3^x \\neq 3 \\end{cases}"}</BlockMath>

        <p>
          Сведём ограничения ОДЗ аргумента к базовым интервалам для переменной х: 
          <InlineMath>{"x > \\log_3 2.5"}</InlineMath> при условии <InlineMath>{"x \\neq 1"}</InlineMath>. 
          Сделаем замену переменной для раскрытия показательной структуры: пусть 
          <InlineMath>{"t = 3^x"}</InlineMath> (где <InlineMath>{"t > 0"}</InlineMath>). Так как 
          <InlineMath>{"x = \\log_3 t"}</InlineMath>, перейдём к рационализированной системе:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{1 - \\log_3 t}{\\log_3(2t - 5)} \\le 1 \\\\ t > 2.5 \\\\ t \\neq 3 \\end{cases} \\iff \\begin{cases} \\frac{\\log_3(3/t)}{\\log_3(2t - 5)} \\le 1 \\\\ t > 2.5 \\\\ t \\neq 3 \\end{cases}"}</BlockMath>

        <p>Применим метод замены множителей (рационализации) ко всей дробно-логарифмической конструкции по основанию 3  :</p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{3/t - 1}{2t - 5 - 1} \\le 1 \\\\ t > 2.5 \\\\ t \\neq 3 \\end{cases} \\iff \\begin{cases} \\frac{3 - t}{2t(t - 3)} \\le 1 \\\\ t > 2.5 \\\\ t \\neq 3 \\end{cases} \\iff \\begin{cases} -\\frac{1}{2t} \\le 1 \\\\ t > 2.5 \\\\ t \\neq 3 \\end{cases}"}</BlockMath>

        <p>
          Поскольку на рассматриваемой области ОДЗ переменная <InlineMath>{"t > 2.5 > 0"}</InlineMath> строго положительна, левая дробь 
          <InlineMath>{"-\\frac{1}{2t} < 0"}</InlineMath> всегда отрицательна. Следовательно, неравенство 
          <InlineMath>{"-\\frac{1}{2t} \\le 1"}</InlineMath> выполняется автоматически при всех допустимых значениях переменной t.
        </p>
        <p>Решением системы относительно переменной t являются интервалы ограничений ОДЗ:</p>
        <BlockMath>{"t \\in (2.5; \\, 3) \\cup (3; \\, +\\infty)"}</BlockMath>

        <p>Выполним обратную замену для переменной х с удержанием базовых логарифмических границ:</p>
        <BlockMath>{"\\iff 2.5 < 3^x \\neq 3 \\iff x \\in (\\log_3 2.5; \\, 1) \\cup (1; \\, +\\infty)"}</BlockMath>

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На числовой прямой выделены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        {/* Иррациональная точка выведена оригинальным KaTeX-шрифтом через foreignObject строго под cx=115 */}
        <InequalityNumberLine points={[{ label: "\\log_3 2.5", closed: false }, { label: "1", closed: false }]} selected={[[1, 2], [2, 3]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in (\\log_3 2.5; \\, 1) \\cup (1; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(\\log_3 2.5; \\, 1) \\cup (1; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 105,
    title: "Задача 105 (ДВИ 2025, Вариант 5)",
    mathA: "(\\sqrt[3]{x})^{5+\\log_2 x} \\ge 2^{1+\\log_2 x}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Представим корень третьей степени в основании левой части как степень: <InlineMath>{"\\sqrt[3]{x} = x^{1/3}"}</InlineMath>.
          Запишем единую равносильную систему условий, содержащую исходное неравенство и ограничение ОДЗ на строго положительный аргумент логарифма:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\left(x^{1/3}\\right)^{5+\\log_2 x} \\ge 2^{1+\\log_2 x} \\\\ x > 0 \\end{cases} \\iff \\begin{cases} x^{\\frac{5+\\log_2 x}{3}} \\ge 2^{1+\\log_2 x} \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>
          Прологарифмируем обе части неравенства по основанию <InlineMath>{"2 > 1"}</InlineMath> с сохранением знака неравенства, используя свойство вынесения показателя степени:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_2 \\left(x^{\\frac{5+\\log_2 x}{3}}\\right) \\ge \\log_2 \\left(2^{1+\\log_2 x}\\right) \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{5 + \\log_2 x}{3} \\cdot \\log_2 x \\ge 1 + \\log_2 x \\\\ x > 0 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной для решения основного квадратного выражения: пусть</span>
          <InlineMath>{"t = \\log_2 x"}</InlineMath>.
          <span>Приведём подобные члены и избавимся от знаменателя дроби:</span>
        </div>
        <BlockMath>{"\\frac{5 + t}{3} \\cdot t \\ge 1 + t \\iff t(5 + t) \\ge 3(1 + t) \\iff 5t + t^2 \\ge 3 + 3t \\iff t^2 + 2t - 3 \\ge 0"}</BlockMath>

        <p>Разложим квадратный трёхчлен на линейные множители (его корни по теореме Виета равны \(-3\) и \(1\)):</p>
        <BlockMath>{"\\iff (t + 3)(t - 1) \\ge 0 \\iff \\left[ \\begin{aligned} &t \\le -3 \\\\ &t \\ge 1 \\end{aligned} \\right."}</BlockMath>

        <p>Выполним обратную замену для переменной х внутри сквозной системы условий:</p>
        <BlockMath>{"\\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_2 x \\le -3 \\\\ &\\log_2 x \\ge 1 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x \\le 2^{-3} \\\\ &x \\ge 2^1 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x \\le \\frac{1}{8} \\\\ &x \\ge 2 \\end{aligned} \\right. \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На числовой прямой выделены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: К КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "\\frac{1}{8}", closed: true }, { label: "2", closed: true }]} selected={[[1, 2], [3, 4]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in \\left(0; \\, \\frac{1}{8}\\right] \\cup [2; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\left(0; \\, \\frac{1}{8}\\right] \\cup [2; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 106,
    title: "Задача 106 (ДВИ 2025, Вариант 6)",
    mathA: "\\log_{3/2} x^{3/2} + \\log_{2/3} x^{2/3} \\le \\frac{5}{6} \\cdot x \\cdot \\log_6 x",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Запишем исходное неравенство и ограничение области допустимых значений (ОДЗ) для строго положительного аргумента логарифмических функций в единую систему условий:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{3/2} x^{3/2} + \\log_{2/3} x^{2/3} \\le \\frac{5}{6}x \\log_6 x \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>
          Преобразуем левую часть неравенства, используя свойства логарифма по вынесению степени аргумента и инвертированию основания функций на области <InlineMath>{"x > 0"}</InlineMath>:
          <BlockMath>{"\\log_{3/2} x^{3/2} = \\frac{3}{2}\\log_{3/2} x"}</BlockMath>
          <BlockMath>{"\\log_{2/3} x^{2/3} = \\frac{2}{3}\\log_{(3/2)^{-1}} x = -\\frac{2}{3}\\log_{3/2} x"}</BlockMath>
          Приведём подобные слагаемые в левой части основной системы условий:
          <BlockMath>{"\\frac{3}{2}\\log_{3/2} x - \\frac{2}{3}\\log_{3/2} x = \\left(\\frac{3}{2} - \\frac{2}{3}\\right)\\log_{3/2} x = \\frac{5}{6}\\log_{3/2} x"}</BlockMath>
        </p>

        <p>Подставим полученный упрощённый эквивалент обратно в сквозную систему условий:</p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{5}{6}\\log_{3/2} x \\le \\frac{5}{6}x \\log_6 x \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\log_{3/2} x \\le x \\log_6 x \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>
          Перейдём к единому основанию логарифмов (например, к числу 6) по формуле перехода: 
          <InlineMath>{"\\log_{3/2} x = \\frac{\\log_6 x}{\\log_6(1.5)}"}</InlineMath>. Перенесём все члены в левую часть:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{\\log_6 x}{\\log_6 1.5} - x \\log_6 x \\le 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\log_6 x \\cdot \\left(\\frac{1}{\\log_6 1.5} - x\\right) \\le 0 \\\\ x > 0 \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} \\log_6 x \\cdot (\\log_{1.5} 6 - x) \\le 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} (\\log_6 x - \\log_6 1) \\cdot (x - \\log_{1.5} 6) \\ge 0 \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>
          Применим метод замены множителей (рационализации) к логарифмической скобке числителя по основанию <InlineMath>{"6 > 1"}</InlineMath>:
        </p>
        <BlockMath>{"\\iff \\begin{cases} (6 - 1)(x - 1) \\cdot (x - \\log_{1.5} 6) \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} (x - 1)(x - \\log_{1.5} 6) \\ge 0 \\\\ x > 0 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Проведём строгое аналитическое сравнение иррациональной точки</span>
          <InlineMath>{"\\log_{1.5} 6"}</InlineMath>
          <span>с единицей. Так как основание логарифма</span>
          <InlineMath>{"1.5 > 1"}</InlineMath>
          <span>больше единицы, а аргумент</span>
          <InlineMath>{"6 > 1.5"}</InlineMath>,
          <span>то выполняется строгое неравенство:</span>
          <InlineMath>{"\\log_{1.5} 6 > \\log_{1.5} 1.5 = 1"}</InlineMath>.
        </div>

        <p>Решая основное рациональное выражение методом интервалов знаков, находим промежуточное решение для дробной части (без учёта ОДЗ):</p>
        <BlockMath>{"x \\in (-\\infty; \\, 1] \\cup [\\log_{1.5} 6; \\, +\\infty)"}</BlockMath>

        <p>Пересечёт полученные множества со сквозным интервалом области допустимых значений ОДЗ системы:</p>
        {/* 🌌 ЧЕРТЁЖ: К КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        {/* Иррациональная точка выведена оригинальным KaTeX-шрифтом через foreignObject строго под cx=265 */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "1", closed: true }, { label: "\\log_{1.5} 6", closed: true }]} selected={[[1, 2], [3, 4]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in (0; \\, 1] \\cup [\\log_{1.5} 6; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(0; \\, 1] \\cup [\\log_{1.5} 6; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 107,
    title: "Задача 107 (ДВИ 2024, Вариант 1)",
    mathA: "\\log_{x+3}(x^2 - 7x + 12) \\le 2",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Представим число 2 в правой части как логарифм по основанию <InlineMath>{"x+3"}</InlineMath> и перейдём к единой равносильной системе условий, содержащей ограничения ОДЗ для аргумента и переменного основания логарифмической функции:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{x+3}(x^2 - 7x + 12) \\le \\log_{x+3}(x+3)^2 \\\\ x^2 - 7x + 12 > 0 \\\\ x + 3 > 0 \\\\ x + 3 \\neq 1 \\end{cases} \\iff \\begin{cases} \\log_{x+3}(x^2 - 7x + 12) \\le \\log_{x+3}(x^2 + 6x + 9) \\\\ (x - 3)(x - 4) > 0 \\\\ x > -3 \\\\ x \\neq -2 \\end{cases}"}</BlockMath>

        <p>
          Сведём ограничения аргументов и переменных оснований к общему пересечению интервалов ОДЗ системы: 
          <InlineMath>{"x \\in (-3; \\, -2) \\cup (-2; \\, 3) \\cup (4; \\, +\\infty)"}</InlineMath>.
          Применим метод замены множителей (рационализации) к полученной логарифмической разности:
        </p>
        <BlockMath>{"\\iff \\begin{cases} (x + 3 - 1) \\cdot \\left((x^2 - 7x + 12) - (x^2 + 6x + 9)\\right) \\le 0 \\\\ x \\in (-3; \\, -2) \\cup (-2; \\, 3) \\cup (4; \\, +\\infty) \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} (x + 2) \\cdot (-13x + 3) \\le 0 \\\\ x \\in (-3; \\, -2) \\cup (-2; \\, 3) \\cup (4; \\, +\\infty) \\end{cases}"}</BlockMath>

        <p>Вынесем минус из второй скобки числителя, поменяв знак неравенства на канонический:</p>
        <BlockMath>{"\\iff \\begin{cases} (x + 2)\\left(x - \\frac{3}{13}\\right) \\ge 0 \\\\ x \\in (-3; \\, -2) \\cup (-2; \\, 3) \\cup (4; \\, +\\infty) \\end{cases}"}</BlockMath>

        <p>Решая основное рациональное выражение методом интервалов знаков, находим промежуточное решение (без учёта ОДЗ):</p>
        <BlockMath>{"x \\in (-\\infty; \\, -2] \\cup \\left[\\frac{3}{13}; \\, +\\infty\\right)"}</BlockMath>

        <p>Пересечёт полученные множества со сквозными базовыми интервалами области допустимых значений логарифма:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        {/* Иррациональная дробная координата выведена оригинальным KaTeX-шрифтом через foreignObject строго под cx=215 */}
        <InequalityNumberLine points={[{ label: "-3", closed: false }, { label: "-2", closed: false }, { label: "\\frac{3}{13}", closed: true }, { label: "3", closed: false }, { label: "4", closed: false }]} selected={[[1, 2], [3, 4], [5, 6]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in (-3; \\, -2) \\cup \\left[\\frac{3}{13}; \\, 3\\right) \\cup (4; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(-3; \\, -2) \\cup \\left[\\frac{3}{13}; \\, 3\\right) \\cup (4; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 108,
    title: "Задача 108 (ДВИ 2024, Вариант 2)",
    mathA: "8^{\\log_{x^2-1}(x-1)} + 8^{\\log_{x^2-1}(x+1)} \\le 6",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`x>1,\\quad x\\ne\\sqrt{2}`} />. Обозначим</p>
        <BlockMath math={`a=\\log_{x^2-1}(x-1),\\qquad b=\\log_{x^2-1}(x+1).`} />
        <p>Так как <InlineMath math={`(x-1)(x+1)=x^2-1`} />, имеем <InlineMath math={`a+b=1`} />. Положим <InlineMath math={`t=8^a>0`} />. Тогда <InlineMath math={`8^b=8/t`} />, и</p>
        <BlockMath math={`t+\\frac8t\\le6 \\iff (t-2)(t-4)\\le0 \\iff 2\\le t\\le4 \\iff \\frac13\\le a\\le\\frac23.`} />
        <p>При <InlineMath math={`1<x<\\sqrt{2}`} /> число <InlineMath math={`a>1`} />, а при <InlineMath math={`\\sqrt{2}<x<2`} /> имеем <InlineMath math={`a<0`} />. Значит, достаточно рассмотреть <InlineMath math={`x\\ge2`} />, где основание больше единицы.</p>
        <p>Условие <InlineMath math={`a\\ge1/3`} /> равносильно <InlineMath math={`(x-1)^3\\ge x^2-1`} />, то есть <InlineMath math={`x\\ge3`} />. Второе условие <InlineMath math={`a\\le2/3`} /> при <InlineMath math={`x\\ge3`} /> выполняется автоматически.</p>
        <InequalityNumberLine points={[{ label: '1', closed: false }, { label: '\\sqrt{2}', closed: false }, { label: '3', closed: true }]} selected={[[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`[3;+\\infty)`} /></div>
      </div>
    )
  },
  {
    id: 109,
    title: "Задача 109 (ДВИ 2024, Вариант 3)",
    mathA: "\\frac{4^{x^2} - 16^{4x-8}}{\\sqrt{x^2 + 4x} + \\sqrt{12 + 4x - x^2}} > 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Запишем исходное неравенство в виде единой равносильной системы условий, содержащей ограничения ОДЗ неотрицательности для обоих подкоренных выражений в знаменателе:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{4^{x^2} - (4^2)^{4x-8}}{\\sqrt{x^2 + 4x} + \\sqrt{12 + 4x - x^2}} > 0 \\\\ x^2 + 4x \\ge 0 \\\\ 12 + 4x - x^2 \\ge 0 \\end{cases} \\iff \\begin{cases} \\frac{4^{x^2} - 4^{8x-16}}{\\sqrt{x^2 + 4x} + \\sqrt{12 + 4x - x^2}} > 0 \\\\ x(x + 4) \\ge 0 \\\\ x^2 - 4x - 12 \\le 0 \\end{cases}"}</BlockMath>

        <p>
          Разложим квадратный трёхчлен во втором ограничении ОДЗ на линейные множители (его корни по теореме Виета равны \(-2\) и \(6\)):
        </p>
        <BlockMath>{"\\iff \\begin{cases} x(x + 4) \\ge 0 \\\\ (x + 2)(x - 6) \\le 0 \\end{cases} \\iff \\begin{cases} x \\in (-\\infty; \\, -4] \\cup [0; \\, +\\infty) \\\\ x \\in [-2; \\, 6] \\end{cases}"}</BlockMath>
        
        <p>
          Пересечение интервалов даёт базовую область допустимых значений системы: <InlineMath>{"x \\in [0; \\, 6]"}</InlineMath>.
        </p>

        <p>
          Проанализируем знаменатель исходной дроби. Так как на ОДЗ подкоренные выражения неотрицательны, а точки их одновременного обнуления отсутствуют, сумма двух радикалов <InlineMath>{"\\sqrt{x^2 + 4x} + \\sqrt{12 + 4x - x^2} > 0"}</InlineMath> строго положительна. Следовательно, мы можем убрать знаменатель без изменения знака неравенства.
        </p>
        
        <p>Применим метод замены множителей (рационализации) к показательной разности числителя по основанию <InlineMath>{"4 > 1"}</InlineMath>:</p>
        <BlockMath>{"\\iff \\begin{cases} x^2 - (8x - 16) > 0 \\\\ x \\in [0; \\, 6] \\end{cases} \\iff \\begin{cases} x^2 - 8x + 16 > 0 \\\\ x \\in [0; \\, 6] \\end{cases}"}</BlockMath>

        <p>
          Свернём полученный квадратный трёхчлен числителя по формуле полного квадрата разности:
        </p>
        <BlockMath>{"\\iff \\begin{cases} (x - 4)^2 > 0 \\\\ x \\in [0; \\, 6] \\end{cases}"}</BlockMath>
        
        <p>
          Поскольку квадрат любой вещественной величины неотрицателен, условие <InlineMath>{"(x - 4)^2 > 0"}</InlineMath> выполняется при всех значениях, кроме точки его обнуления: <InlineMath>{"x \\neq 4"}</InlineMath>.
        </p>

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На числовой прямой выделены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: К КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <InequalityNumberLine points={[{ label: "0", closed: true }, { label: "4", closed: false }, { label: "6", closed: true }]} selected={[[1, 2], [2, 3]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in [0; \\, 4) \\cup (4; \\, 6]"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"[0; \\, 4) \\cup (4; \\, 6]"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 110,
    title: "Задача 110 (ДВИ 2024, Вариант 4)",
    mathA: "\\log_9\\left(x + \\frac{1}{3}\\right) - \\log_3\\left(x - \\frac{1}{3}\\right) \\ge 1",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Приведем первый логарифм к основанию 3 по формуле вынесения степени: 
          <InlineMath>{"\\log_9(f) = \\log_{3^2}(f) = \\frac{1}{2}\\log_3(f) = \\log_3\\sqrt{f}"}</InlineMath>.
          Запишем единую равносильную систему условий, содержащую исходное неравенство и ограничения ОДЗ строго положительных аргументов логарифмов:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_3\\sqrt{x + \\frac{1}{3}} - \\log_3\\left(x - \\frac{1}{3}\\right) \\ge \\log_3 3 \\\\ x + \\frac{1}{3} > 0 \\\\ x - \\frac{1}{3} > 0 \\end{cases} \\iff \\begin{cases} \\log_3\\sqrt{x + \\frac{1}{3}} \\ge \\log_3\\left(3\\left(x - \\frac{1}{3}\\right)\\right) \\\\ x > -\\frac{1}{3} \\\\ x > \\frac{1}{3} \\end{cases}"}</BlockMath>

        <p>
          Сведём ограничения аргументов к базовому лучу ОДЗ системы: 
          <InlineMath>{"x \\in \\left(\\frac{1}{3}; \\, +\\infty\\right)"}</InlineMath>.
          В силу монотонного возрастания логарифмической функции по основанию <InlineMath>{"3 > 1"}</InlineMath>, опустим логарифмы с сохранением знака неравенства:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\sqrt{x + \\frac{1}{3}} \\ge 3x - 1 \\\\ x > \\frac{1}{3} \\end{cases}"}</BlockMath>

        <p>
          Поскольку на рассматриваемой области ОДЗ выражение <InlineMath>{"x > \\frac{1}{3} \\implies 3x - 1 > 0"}</InlineMath> гарантированно строго положительно, мы имеем право возвести обе части иррационального неравенства в квадрат без изменения знака:
        </p>
        <BlockMath>{"\\iff \\begin{cases} x + \\frac{1}{3} \\ge (3x - 1)^2 \\\\ x > \\frac{1}{3} \\end{cases} \\iff \\begin{cases} x + \\frac{1}{3} \\ge 9x^2 - 6x + 1 \\\\ x > \\frac{1}{3} \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} 9x^2 - 7x + \\frac{2}{3} \\le 0 \\\\ x > \\frac{1}{3} \\end{cases} \\iff \\begin{cases} 27x^2 - 21x + 2 \\le 0 \\\\ x > \\frac{1}{3} \\end{cases}"}</BlockMath>

        <p>
          Найдем корни полученного квадратного трёхчлена через дискриминант:
          <InlineMath>{"D = (-21)^2 - 4 \\cdot 27 \\cdot 2 = 441 - 216 = 225 = 15^2"}</InlineMath>.
          <BlockMath>{"x_1 = \\frac{21 - 15}{54} = \\frac{6}{54} = \\frac{1}{9}, \\quad x_2 = \\frac{21 + 15}{54} = \\frac{36}{54} = \\frac{2}{3}"}</BlockMath>
          Запишем разложение числителя на линейные множители:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 27\\left(x - \\frac{1}{9}\\right)\\left(x - \\frac{2}{3}\\right) \\le 0 \\\\ x > \\frac{1}{3} \\end{cases} \\iff \\begin{cases} \\frac{1}{9} \\le x \\le \\frac{2}{3} \\\\ x > \\frac{1}{3} \\end{cases}"}</BlockMath>

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На числовой прямой выделены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        {/* Дробные координаты выведены оригинальным KaTeX-шрифтом через foreignObject */}
        <InequalityNumberLine points={[{ label: "\\frac{1}{3}", closed: false }, { label: "\\frac{2}{3}", closed: true }]} selected={[[1, 2]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in \\left(\\frac{1}{3}; \\, \\frac{2}{3}\\right]"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\left(\\frac{1}{3}; \\, \\frac{2}{3}\\right]"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 111,
    title: "Задача 111 (ДВИ 2024, Вариант 5)",
    mathA: "\\log_x \\frac{2x}{3-x} \\le 2",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`0<x<3,\\quad x\\ne1`} />. Представим 2 как <InlineMath math={`\\log_x x^2`} /> и учтём знак основания при сравнении логарифмов:</p>
        <BlockMath math={`(x-1)\\left(\\frac{2x}{3-x}-x^2\\right)\\le0.`} />
        <p>После разложения получаем:</p>
        <BlockMath math={`\\frac{x(x-1)^2(x-2)}{3-x}\\le0.`} />
        <p>На ОДЗ множители <InlineMath math={`x`} />, <InlineMath math={`(x-1)^2`} /> и <InlineMath math={`3-x`} /> положительны. Поэтому <InlineMath math={`x-2\\le0`} />. Выкалываем запрещённую точку 1.</p>
        <InequalityNumberLine points={[{ label: '0', closed: false }, { label: '1', closed: false }, { label: '2', closed: true }]} selected={[[1,2],[2,3]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(0;1)\\cup(1;2]`} /></div>
      </div>
    )
  },
  {
    id: 112,
    title: "Задача 112 (ДВИ 2024, Вариант 6)",
    mathA: "\\log_{x-1}(2x-5) + \\log_{4x^2-20x+25}(x^2-2x+1) - \\log_{2x-5}(4x^2-20x+25) \\le 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Свернём квадратные трёхчлены во втором и третьем логарифмах по формулам квадратов разности: 
          <InlineMath>{"4x^2 - 20x + 25 = (2x - 5)^2"}</InlineMath> и <InlineMath>{"x^2 - 2x + 1 = (x - 1)^2"}</InlineMath>.
          Запишем единую равносильную систему условий с ограничениями ОДЗ на все аргументы и переменные основания:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{x-1}(2x-5) + \\log_{(2x-5)^2}(x-1)^2 - \\log_{2x-5}(2x-5)^2 \\le 0 \\\\ 2x - 5 > 0 \\\\ 2x - 5 \\neq 1 \\\\ x - 1 > 0 \\\\ x - 1 \\neq 1 \\end{cases} \\iff \\begin{cases} \\log_{x-1}(2x-5) + \\log_{2x-5}(x-1) - 2 \\le 0 \\\\ x > 2{,}5 \\\\ x \\neq 3 \\\\ x > 1 \\\\ x \\neq 2 \\end{cases}"}</BlockMath>

        <p>
          Сведём ограничения аргументов к базовым интервалам ОДЗ системы: 
          <InlineMath>{"x \\in (2.5; \\, 3) \\cup (3; \\, +\\infty)"}</InlineMath>.
          Сделаем замену переменной для раскрытия дробной структуры: пусть 
          <InlineMath>{"t = \\log_{x-1}(2x-5)"}</InlineMath>, тогда по формуле перехода к новому основанию получаем 
          <InlineMath>{"\\log_{2x-5}(x-1) = \\frac{1}{t}"}</InlineMath>. Подставим её в неравенство:
        </p>
        <BlockMath>{"t + \\frac{1}{t} - 2 \\le 0 \\iff \\frac{t^2 - 2t + 1}{t} \\le 0 \\iff \\frac{(t - 1)^2}{t} \\le 0"}</BlockMath>

        <p>
          Проанализируем знаки полученной дроби методом интервалов. Числитель <InlineMath>{"(t-1)^2 \\ge 0"}</InlineMath> всегда неотрицателен, что даёт корень при <InlineMath>{"t = 1"}</InlineMath>. Сама дробь меньше или равна нулю только при строго отрицательном знаменателе <InlineMath>{"t < 0"}</InlineMath>. Перейдём к совокупности условий для обратной замены:
        </p>
        <BlockMath>{"\\iff \\left[ \\begin{aligned} &t < 0 \\\\ &t = 1 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &\\log_{x-1}(2x-5) < \\log_{x-1} 1 \\\\ &\\log_{x-1}(2x-5) = \\log_{x-1}(x-1) \\end{aligned} \\right."}</BlockMath>

        <p>Разберём полученные совокупности с удержанием ОДЗ внутри единой системы, разбив решение на два олимпиадных случая:</p>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-3">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Случай 1. Изолированный корень t = 1:</p>
          <BlockMath>{"2x - 5 = x - 1 \\iff x = 4"}</BlockMath>
          <p>Точка <InlineMath>{"x = 4"}</InlineMath> входит в интервал ОДЗ и является полноценным решением.</p>
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-3">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Случай 2. Отрицательный луч t &lt; 0:</p>
          <p>Поскольку на ОДЗ основание логарифма <InlineMath>{"x - 1 > 1.5 > 1"}</InlineMath> всегда строго больше единицы, опустим логарифмы с сохранением знака неравенства:</p>
          <BlockMath>{"2x - 5 < 1 \\iff 2x < 6 \\iff x < 3"}</BlockMath>
        </div>

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На числовой прямой выделены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <InequalityNumberLine points={[{ label: "2{,}5", closed: false }, { label: "3", closed: false }, { label: "4", closed: true }]} selected={[[1, 2]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in (2{,}5; \\, 3) \\cup \\{4\\}"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(2{,}5; \\, 3) \\cup \\{4\\}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 113,
    title: "Задача 113 (ДВИ 2023, Вариант 1)",
    mathA: "x^{\\log_3 \\sqrt{x}} > 9",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Вынесем степень подкоренного выражения из показателя: 
          <InlineMath>{"\\log_3 \\sqrt{x} = \\log_3 x^{0.5} = \\frac{1}{2}\\log_3 x"}</InlineMath>.
          Запишем единую равносильную систему условий, содержащую исходное неравенство и ограничение ОДЗ на строго положительный аргумент логарифма:
        </p>
        <BlockMath>{"\\iff \\begin{cases} x^{\\frac{1}{2}\\log_3 x} > 9 \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>
          Прологарифмируем обе части неравенства по основанию <InlineMath>{"3 > 1"}</InlineMath> с сохранением знака, используя свойство вынесения показателя степени:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_3 \\left(x^{\\frac{1}{2}\\log_3 x}\\right) > \\log_3 9 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{1}{2}\\log_3 x \\cdot \\log_3 x > 2 \\\\ x > 0 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной для решения полученного квадратного выражения: пусть</span>
          <InlineMath>{"t = \\log_3 x"}</InlineMath>.
          <span>Умножим обе части на 2 и перенесём константу влево:</span>
        </div>
        <BlockMath>{"\\frac{1}{2}t^2 > 2 \\iff t^2 > 4 \\iff t^2 - 4 > 0 \\iff (t - 2)(t + 2) > 0"}</BlockMath>

        <p>Применяя метод интервалов, находим решение для переменной t, распадающееся на совокупность двух лучей:</p>
        <BlockMath>{"\\iff \\left[ \\begin{aligned} &t < -2 \\\\ &t > 2 \\end{aligned} \\right."}</BlockMath>

        <p>Выполним обратную замену для переменной х внутри сквозной системы условий:</p>
        <BlockMath>{"\\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_3 x < -2 \\\\ &\\log_3 x > 2 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x < 3^{-2} \\\\ &x > 3^2 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x < \\frac{1}{9} \\\\ &x > 9 \\end{aligned} \\right. \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На числовой прямой выделены области выполнения условий совместной системы:</p>
                {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ С ВЫВЕРЕННОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "\\frac{1}{9}", closed: false }, { label: "9", closed: false }]} selected={[[1, 2], [3, 4]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in \\left(0; \\, \\frac{1}{9}\\right) \\cup (9; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\left(0; \\, \\frac{1}{9}\\right) \\cup (9; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 114,
    title: "Задача 114 (ДВИ 2023, Вариант 3)",
    mathA: "\\log_{\\sqrt{3-x}}(3+x) \\le 2",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`-3<x<3,\\quad x\\ne2`} />. Представим 2 как логарифм от квадрата основания и применим рационализацию:</p>
        <BlockMath math={`(\\sqrt{3-x}-1)\\bigl((3+x)-(3-x)\\bigr)\\le0.`} />
        <p>Умножение на положительное сопряжённое <InlineMath math={`\\sqrt{3-x}+1`} /> сохраняет знак, поэтому</p>
        <BlockMath math={`x(2-x)\\le0 \\iff x\\le0 \\text{ или } x\\ge2.`} />
        <p>Пересекаем с ОДЗ: точка 2 исключена, но промежуток от 2 до 3 входит в ответ.</p>
        <InequalityNumberLine points={[{ label: '-3', closed: false }, { label: '0', closed: true }, { label: '2', closed: false }, { label: '3', closed: false }]} selected={[[1,2],[3,4]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`(-3;0]\\cup(2;3)`} /></div>
      </div>
    )
  },
  {
    id: 115,
    title: "Задача 115 (ДВИ 2023, Вариант 4)",
    mathA: "(\\sqrt{x})^{3+\\log_3 x} \\ge 3^{1+\\log_3 x}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Представим корень в основании левой части неравенства как степень: <InlineMath>{"\\sqrt{x} = x^{1/2}"}</InlineMath>.
          Запишем единую равносильную систему условий, содержащую исходное неравенство и ограничение ОДЗ на строго положительный аргумент логарифмической функции:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\left(x^{1/2}\\right)^{3+\\log_3 x} \\ge 3^{1+\\log_3 x} \\\\ x > 0 \\end{cases} \\iff \\begin{cases} x^{\\frac{3+\\log_3 x}{2}} \\ge 3^{1+\\log_3 x} \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>
          Прологарифмируем обе части неравенства по основанию <InlineMath>{"3 > 1"}</InlineMath> с сохранением знака, используя свойство вынесения показателя степени:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_3 \\left(x^{\\frac{3+\\log_3 x}{2}}\\right) \\ge \\log_3 \\left(3^{1+\\log_3 x}\\right) \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{3 + \\log_3 x}{2} \\cdot \\log_3 x \\ge 1 + \\log_3 x \\\\ x > 0 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной для решения полученного квадратного выражения: пусть</span>
          <InlineMath>{"t = \\log_3 x"}</InlineMath>.
          <span>Умножим обе части неравенства на 2 и перенесём все члены в левую часть:</span>
        </div>
        <BlockMath>{"\\frac{3 + t}{2} \\cdot t \\ge 1 + t \\iff t(3 + t) \\ge 2(1 + t) \\iff 3t + t^2 \\ge 2 + 2t \\iff t^2 + t - 2 \\ge 0"}</BlockMath>

        <p>Разложим квадратный трёхчлен на линейные множители (его корни по теореме Виета равны \(-2\) и \(1\)):</p>
        <BlockMath>{"\\iff (t + 2)(t - 1) \\ge 0 \\iff \\left[ \\begin{aligned} &t \\le -2 \\\\ &t \\ge 1 \\end{aligned} \\right."}</BlockMath>

        <p>Выполним обратную замену для переменной х внутри сквозной системы условий:</p>
        <BlockMath>{"\\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_3 x \\le -2 \\\\ &\\log_3 x \\ge 1 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x \\le 3^{-2} \\\\ &x \\ge 3^1 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x \\le \\frac{1}{9} \\\\ &x \\ge 2 \\end{aligned} \\right. \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На числовой прямой выделены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ С ВЫВЕРЕННОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "0", closed: false }, { label: "\\frac{1}{9}", closed: true }, { label: "3", closed: true }]} selected={[[1, 2], [3, 4]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in \\left(0; \\, \\frac{1}{9}\\right] \\cup [3; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\left(0; \\, \\frac{1}{9}\\right] \\cup [3; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 116,
    title: "Задача 116 (ДВИ 2023, Вариант 5)",
    mathA: "(3x^2 - 3x + 1)^{x^2 - 3x} \\le 1",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Показательно-степенное неравенство вида <InlineMath>{"f(x)^{g(x)} \\le 1"}</InlineMath> на области определения <InlineMath>{"f(x) > 0"}</InlineMath> равносильно распадается на стандартную школьную совокупность трех систем условий:
        </p>
        <BlockMath>{"\\iff \\left[ \\begin{aligned} &\\begin{cases} 3x^2 - 3x + 1 = 1 \\\\ x^2 - 3x \\in \\mathbb{R} \\end{cases} \\\\ &\\begin{cases} 3x^2 - 3x + 1 > 1 \\\\ x^2 - 3x \\le 0 \\end{cases} \\\\ &\\begin{cases} 0 < 3x^2 - 3x + 1 < 1 \\\\ x^2 - 3x \\ge 0 \\end{cases} \\end{aligned} \\right."}</BlockMath>

        <p>Разберём каждый случай совокупности пошагово через простейшие квадратные трёхчлены:</p>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Случай 1. Основание равно единице:</p>
          <BlockMath>{"3x^2 - 3x = 0 \\iff 3x(x - 1) = 0 \\iff x = 0 \\quad \\text{или} \\quad x = 1"}</BlockMath>
          <p>Оба корня являются решениями неравенства, так как показатель степени существует при любых вещественных значениях переменной.</p>
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Случай 2. Основание больше единицы:</p>
          <BlockMath>{"\\begin{cases} 3x^2 - 3x > 0 \\\\ x(x - 3) \\le 0 \\end{cases} \\iff \\begin{cases} x \\in (-\\infty; \\, 0) \\cup (1; \\, +\\infty) \\\\ x \\in [0; \\, 3] \\end{cases} \\iff x \\in (1; \\, 3]"}</BlockMath>
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Случай 3. Основание меньше единицы:</p>
          <p>Докажем, что основание положительно при всех действительных значениях x:</p>
          <BlockMath>{"D = 9 - 12 = -3 < 0, \\quad 3 > 0 \\implies 3x^2 - 3x + 1 > 0 \\quad \\text{при всех } x \\in \\mathbb{R}"}</BlockMath>
          <p>Тогда система принимает вид:</p>
          <BlockMath>{"\\begin{cases} 3x^2 - 3x < 0 \\\\ x(x - 3) \\ge 0 \\end{cases} \\iff \\begin{cases} x \\in (0; \\, 1) \\\\ x \\in (-\\infty; \\, 0] \\cup [3; \\, +\\infty) \\end{cases} \\iff \\varnothing"}</BlockMath>
          <p>В данном интервале совместных решений нет.</p>
        </div>

        <p>Объединяя результаты всех трёх ветвей совокупности, находим итоговое решение:</p>
        <BlockMath>{"x \\in \\{0\\} \\cup [1; \\, 3]"}</BlockMath>

        <p>Визуализируем наложение полученного отрезка и изолированной точки на числовой оси:</p>
        {/* 🌌 ЧЕРТЁЖ: ИДЕАЛЬНОЕ НАЛОЖЕНИЕ КРЫШ С АВТОМАТИЧЕСКОЙ СЕТОЧНОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "0", closed: true }, { label: "1", closed: true }, { label: "3", closed: true }]} selected={[[2, 3]]} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\{0\\} \\cup [1; \\, 3]"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 117,
    title: "Задача 117 (ДВИ 2023, Вариант 6)",
    mathA: "\\log_x \\log_3(2^x - 1) \\ge 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
        <p>
          Представим число 0 в правой части как логарифм по основанию <InlineMath>{"x"}</InlineMath> и запишем исходное неравенство в виде единой равносильной системы условий, содержащей ограничения ОДЗ для всех внутренних аргументов и переменных оснований логарифмических функций:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_x \\log_3(2^x - 1) \\ge \\log_x 1 \\\\ \\log_3(2^x - 1) > 0 \\\\ 2^x - 1 > 0 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases} \\iff \\begin{cases} \\log_x \\log_3(2^x - 1) - \\log_x 1 \\ge 0 \\\\ \\log_3(2^x - 1) > \\log_3 1 \\\\ 2^x > 1 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}"}</BlockMath>

        <p>
          Сведём ограничения аргументов к базовым интервалам ОДЗ системы: 
          <InlineMath>{"2^x > 2 \\iff x > 1"}</InlineMath>. 
          Так как область допустимых значений полностью зажата условием <InlineMath>{"x > 1"}</InlineMath>, переменное основание логарифма гарантированно строго больше единицы. Опустим логарифмы по основанию х с сохранением знака неравенства:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_3(2^x - 1) \\ge 1 \\\\ x > 1 \\end{cases} \\iff \\begin{cases} \\log_3(2^x - 1) \\ge \\log_3 3 \\\\ x > 1 \\end{cases}"}</BlockMath>

        <p>
          В силу монотонного возрастания логарифмической функции по постоянному основанию <InlineMath>{"3 > 1"}</InlineMath>, опустим логарифмы с сохранением знака неравенства:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 2^x - 1 \\ge 3 \\\\ x > 1 \\end{cases} \\iff \\begin{cases} 2^x \\ge 4 \\\\ x > 1 \\end{cases} \\iff \\begin{cases} x \\ge 2 \\\\ x > 1 \\end{cases}"}</BlockMath>

        <p>Пересечёт полученный луч со сквозным интервалом области допустимых значений ОДЗ системы:</p>
        {/* 🌌 ЧЕРТЁЖ: ИДЕАЛЬНОЕ НАЛОЖЕНИЕ КРЫШ С АВТОМАТИЧЕСКОЙ СЕТОЧНОЙ ШТРИХОВКОЙ */}
        <InequalityNumberLine points={[{ label: "2", closed: true }]} selected={[[1, 2]]} />

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in [2; \\, +\\infty)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"[2; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 118,
    title: "Задача 118 (ДВИ 2023, Вариант 8)",
    mathA: "|\\log_3^2 x - \\log_{2x}^2 2| = \\log_3^2 x + \\log_{2x}^2 2 - 2",
    mathB: "",
        solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`x>0,\\quad x\\ne\\frac12`} />. Положим <InlineMath math={`a=\\log_3^2x`} /> и <InlineMath math={`b=\\log_{2x}^22`} />. Тогда исходное уравнение равносильно</p>
        <BlockMath math={`|a-b|=a+b-2 \\iff \\min(a,b)=1.`} />
        <p>Если <InlineMath math={`b=1,\\ a\\ge1`} />, то <InlineMath math={`x=1`} /> или <InlineMath math={`x=\\frac14`} />; проверку проходит только <InlineMath math={`x=\\frac14`} />.</p>
        <p>Если <InlineMath math={`a=1,\\ b\\ge1`} />, то <InlineMath math={`x=3`} /> или <InlineMath math={`x=\\frac13`} />. При <InlineMath math={`x=3`} /> имеем <InlineMath math={`b=(\\log_6 2)^2<1`} />, а при <InlineMath math={`x=\\frac13`} /> выполняется <InlineMath math={`b=(\\log_{2/3}2)^2>1`} />. Поэтому подходит только вторая точка.</p>
        <InequalityNumberLine points={[{ label: '\\frac14', closed: true }, { label: '\\frac13', closed: true }, { label: '\\frac12', closed: false }]} selected={[]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\left\\{\\frac14;\\frac13\\right\\}`} /></div>
      </div>
    )
  },

  {
    id: 119,
    title: "Задача 119",
    mathA: "\\log_{2\\sin x + \\cos^2 x - 1} \\left(\\sin x - \\frac{3}{2}\\right)^4 > 0",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        
                <p>
          Преобразуем выражение в основании логарифма, используя основное тригонометрическое тождество <InlineMath>{"\\cos^2 x = 1 - \\sin^2 x"}</InlineMath>:
        </p>
        <BlockMath>{"2\\sin x + \\cos^2 x - 1 = 2\\sin x + (1 - \\sin^2 x) - 1 = 2\\sin x - \\sin^2 x = \\sin x(2 - \\sin x)"}</BlockMath>
        <p>
          Запишем единую равносильную систему условий, содержащую исходное неравенство и ограничения ОДЗ для аргумента и переменного основания:
        </p>

        <BlockMath>{"\\iff \\begin{cases} \\log_{\\sin x(2 - \\sin x)} \\left(\\sin x - \\frac{3}{2}\\right)^4 > 0 \\\\ \\sin x(2 - \\sin x) > 0 \\\\ \\sin x(2 - \\sin x) \\neq 1 \\\\ \\left(\\sin x - \\frac{3}{2}\\right)^4 > 0 \\end{cases}"}</BlockMath>

        <p>
          Поскольку для любого вещественного х выполняется неравенство <InlineMath>{"-1 \\le \\sin x \\le 1"}</InlineMath>, скобка <InlineMath>{"2 - \\sin x \\ge 1 > 0"}</InlineMath> всегда строго положительна. Ограничение ОДЗ основания упрощается к виду: <InlineMath>{"\\sin x > 0"}</InlineMath>. Аргумент логарифма также всегда строго положителен, так как <InlineMath>{"\\sin x - 1.5 \\le -0.5 \\neq 0"}</InlineMath>.
        </p>
        <p>
          Применим метод замены множителей (рационализации) к логарифму вида <InlineMath>{"\\log_a f > 0 \\iff (a - 1)(f - 1) > 0"}</InlineMath>:
        </p>
        <BlockMath>{"\\iff \\begin{cases} (\\sin x(2 - \\sin x) - 1) \\cdot \\left(\\left(\\sin x - \\frac{3}{2}\\right)^4 - 1\\right) > 0 \\\\ \\sin x > 0 \\\\ \\sin x \\neq 1 \\end{cases}"}</BlockMath>

        <p>
          Преобразуем первый сомножитель: <InlineMath>{"-\\sin^2 x + 2\\sin x - 1 = -(\\sin x - 1)^2"}</InlineMath>. С учётом условия <InlineMath>{"\\sin x \\neq 1"}</InlineMath>, этот квадрат строго отрицателен. Чтобы произведение было больше нуля, второй сомножитель обязан быть строго меньше нуля:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\left(\\sin x - \\frac{3}{2}\\right)^4 - 1 < 0 \\\\ 0 < \\sin x < 1 \\end{cases} \\iff \\begin{cases} \\left(\\sin x - \\frac{3}{2}\\right)^2 < 1 \\\\ 0 < \\sin x < 1 \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} -1 < \\sin x - \\frac{3}{2} < 1 \\\\ 0 < \\sin x < 1 \\end{cases} \\iff \\begin{cases} \\frac{1}{2} < \\sin x < \\frac{5}{2} \\\\ 0 < \\sin x < 1 \\end{cases} \\iff \\frac{1}{2} < \\sin x < 1"}</BlockMath>

        <p>Визуализируем полученное простейшее тригонометрическое неравенство на числовой окружности. Дуги решения выделены автоматической сеточной штриховкой:</p>
        {/* 🌌 ЧЕРТЁЖ: ТРИГОНОМЕТРИЧЕСКИЙ КРУГ С ВЫВЕРЕННЫМИ ДУГАМИ И ПОДПИСЯМИ ПО СТАНДАРТУ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="240" height="240" viewBox="0 0 240 240" className={`overflow-visible font-sans font-bold text-[13px] ${diagramStyles.diagram}`} >
            <defs>
              <pattern id="trigHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#328ce6" strokeWidth="1" opacity="0.4" />
              </pattern>
            </defs>

            {/* Оси координат круга */}
            <line x1="20" y1="120" x2="220" y2="120" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
            <line x1="120" y1="20" x2="120" y2="220" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />

            {/* Главная окружность R = 80 */}
            <circle cx="120" cy="120" r="80" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />

            {/* Линия уровня sin x = 0,5 (y = 120 - 40 = 80) */}
            <line x1="30" y1="80" x2="210" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
            <SvgMathLabel x={15.0} y={84.0} anchor="start" math={"0{,}5"} />

            {/* Линия уровня sin x = 1 (y = 120 - 80 = 40) */}
            <line x1="30" y1="40" x2="210" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
            <SvgMathLabel x={15.0} y={44.0} anchor="start" math={"1"} />

            {/* 🟦 СЕТОЧНАЯ ШТРИХОВКА ДЛЯ ЦЕЛЕВЫХ СЕКТОРОВ ДУГИ (от pi/6 до 5pi/6 за вычетом pi/2) */}
            {/* Левый сектор */}
            <path d="M 120 120 L 189.28 80 A 80 80 0 0 0 120 40 Z" fill="url(#trigHatch)" pointerEvents="none" />
            {/* Правый сектор */}
            <path d="M 120 120 L 120 40 A 80 80 0 0 0 50.72 80 Z" fill="url(#trigHatch)" pointerEvents="none" />

            {/* Выколотые и закрашенные пограничные точки на тригонометрическом круге */}
            {/* Точка pi/6 (30 градусов) -> cx = 120 + 80*cos(30) = 189.28, cy = 120 - 80*sin(30) = 80 */}
            <circle cx="189.28" cy="80" r="4" fill="var(--inequality-open-point)" stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="194" y="65" width="50" height="30" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 text-xs"><InlineMath>{"\\frac{\\pi}{6}"}</InlineMath></div>
            </foreignObject>

            {/* Точка 5pi/6 (150 градусов) -> cx = 120 - 69.28 = 50.72, cy = 80 */}
            <circle cx="50.72" cy="80" r="4" fill="var(--inequality-open-point)" stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="15" y="65" width="50" height="30" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 text-xs"><InlineMath>{"\\frac{5\\pi}{6}"}</InlineMath></div>
            </foreignObject>

            {/* Выколотая вершина pi/2 (94 градуса) -> cx = 120, cy = 40 */}
            <circle cx="120" cy="40" r="4" fill="var(--inequality-open-point)" stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="112" y="10" width="50" height="30" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 text-xs"><InlineMath>{"\\frac{\\pi}{2}"}</InlineMath></div>
            </foreignObject>
          </svg>
        </div>

        <p>Запишем аналитическое описание выделенных дуг тригонометрического круга с учётом периода периода полного оборота:</p>
        <BlockMath>{"x \\in \\left(\\frac{\\pi}{6} + 2\\pi k; \\, \\frac{\\pi}{2} + 2\\pi k\\right) \\cup \\left(\\frac{\\pi}{2} + 2\\pi k; \\, \\frac{\\frac{5\\pi}{6}} + 2\\pi k\\right), \\quad k \\in \\mathbb{Z}"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\left(\\frac{\\pi}{6} + 2\\pi k; \\, \\frac{\\pi}{2} + 2\\pi k\\right) \\cup \\left(\\frac{\\pi}{2} + 2\\pi k; \\, \\frac{5\\pi}{6} + 2\\pi k\\right), \\, k \\in \\mathbb{Z}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 120,
    title: "Задача 120",
    mathA: "\\frac{1}{(x - \\sqrt{2})^2} + 3x^2 - 2\\sqrt{2}x + 2 + 2\\left(-2x(\\sqrt{2}+1) + (\\sqrt{2}+1)^2\\right) \\le 2",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`x\\ne\\sqrt{2}`} />. Положим <InlineMath math={`t=x-\\sqrt{2}`} /> и перенесём правую часть влево. После раскрытия скобок исходное неравенство принимает вид</p>
        <BlockMath math={`\\frac1{t^2}+3t^2-4t\\le0.`} />
        <p>Умножаем на положительное <InlineMath math={`t^2`} /> и раскладываем многочлен:</p>
        <BlockMath math={`3t^4-4t^3+1=(t-1)^2(3t^2+2t+1)\\le0.`} />
        <p>У квадратного множителя дискриминант отрицателен, а старший коэффициент положителен, поэтому он всегда положителен. Неравенство возможно только при <InlineMath math={`t=1`} />, то есть <InlineMath math={`x=\\sqrt{2}+1`} />.</p>
        <InequalityNumberLine points={[{ label: '\\sqrt{2}', closed: false }, { label: '\\sqrt{2}+1', closed: true }]} selected={[]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\{\\sqrt{2}+1\\}`} /></div>
      </div>
    )
  },
  {
    id: 121,
    title: "Задача 121",
    mathA: "4\\log_2^4(\\sin^3 x) + 8\\log_2(\\sin x) > 1",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>ОДЗ: <InlineMath math={`\\sin x>0`} />. Положим <InlineMath math={`t=\\log_2(\\sin x)\\le0`} />. Поскольку <InlineMath math={`\\log_2(\\sin^3x)=3t`} />, получаем</p>
        <BlockMath math={`324t^4+8t-1>0,\\qquad t\\le0.`} />
        <p>Обозначим левую часть через <InlineMath math={`f(t)`} />. Производная <InlineMath math={`f'(t)=1296t^3+8`} /> имеет ровно один нуль <InlineMath math={`t_c=-\\sqrt[3]{1/162}<0`} />. На <InlineMath math={`(-\\infty;t_c)`} /> функция убывает, на <InlineMath math={`(t_c;0]`} /> возрастает; при этом <InlineMath math={`f(0)=-1`} /> и <InlineMath math={`f(t)\\to+\\infty`} /> при <InlineMath math={`t\\to-\\infty`} />.</p>
        <p>Поэтому уравнение <InlineMath math={`f(t)=0`} /> имеет единственный отрицательный корень <InlineMath math={`t_0\\approx-0{,}324595`} />, и решение — <InlineMath math={`t<t_0`} />.</p>
        <InequalityNumberLine points={[{ label: 't_0', closed: false }, { label: '0', closed: false }]} variable="t" selected={[[0,1]]} />
        <p>Переходя обратно к синусу и обозначая <InlineMath math={`\\beta=\\arcsin(2^{t_0})`} />, получаем <InlineMath math={`0<\\sin x<2^{t_0}`} />.</p>
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`\\displaystyle\\bigcup_{k\\in\\mathbb Z}\\bigl((2\\pi k;\\beta+2\\pi k)\\cup(\\pi-\\beta+2\\pi k;\\pi+2\\pi k)\\bigr),\\quad \\beta=\\arcsin(2^{t_0})`} /></div>
      </div>
    )
  },
  {
    id: 122,
    title: "Задача 122",
    mathA: "\\sqrt{\\frac{5 \\cdot (\\log_2(x + 2) - 1)}{\\log_2(x + 2) + 1}} \\le \\log_2 \\frac{x}{2} + 1",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение неравенства:</p>
        <p>По свойствам логарифма правая часть равна <InlineMath math={`\\log_2x`} />. ОДЗ исходного неравенства — <InlineMath math={`x>0`} />. Левая часть неотрицательна, значит, решения возможны только при <InlineMath math={`x\\ge1`} />.</p>
        <p>При <InlineMath math={`1\\le x\\le2`} /> положим <InlineMath math={`L=\\log_2(x+2)`} />. Тогда <InlineMath math={`L\\ge\\log_2 3>3/2`} />, поэтому</p>
        <BlockMath math={`\\frac{5(L-1)}{L+1}>1\\ge\\log_2^2x.`} />
        <p>Следовательно, на этом отрезке решений нет. При <InlineMath math={`x\\ge2`} /> положим <InlineMath math={`t=\\log_2x\\ge1`} /> и <InlineMath math={`L(t)=\\log_2(2+2^t)\\ge2`} />. Неравенство равносильно</p>
        <BlockMath math={`\\frac{5(L(t)-1)}{(L(t)+1)t^2}\\le1.`} />
        <p>Левая часть строго убывает: <InlineMath math={`0<L'(t)<1`} /> и <InlineMath math={`t\\le L(t)<L(t)^2-1`} />, откуда её производная отрицательна. При <InlineMath math={`t=1`} /> она больше 1, а при <InlineMath math={`t\\to+\\infty`} /> стремится к нулю. Значит, граница решения существует и единственна.</p>
        <p>Обозначим через <InlineMath math={`\\alpha`} /> единственный корень уравнения</p>
        <BlockMath math={`\\log_2^2\\alpha=\\frac{5(\\log_2(\\alpha+2)-1)}{\\log_2(\\alpha+2)+1},\\qquad \\alpha>2;\\quad \\alpha\\approx2{,}58061.`} />
        <InequalityNumberLine points={[{ label: '\\alpha', closed: true }]} selected={[[1,2]]} />
        <div className="font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-200/40">Ответ: <InlineMath math={`[\\alpha;+\\infty)`} /></div>
      </div>
    )
  }




  
];
