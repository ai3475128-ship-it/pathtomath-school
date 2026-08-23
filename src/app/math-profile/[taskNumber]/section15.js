import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

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

        <p>Изобразим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ С КРЫШАМИ И ШТРИХОВКОЙ ДЛЯ ЗАДАЧИ 2 */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="100" viewBox="0 0 280 100" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="70" x2="260" y2="70" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 70 l-6 -3 M260 70 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="74" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 1 (Знаменатель) */}
            <circle cx="70" cy="70" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="70" y="88" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-sm">1</text>

            {/* Закрашенная точка 2 (Числитель) */}
            <circle cx="170" cy="70" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="170" y="88" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-sm">2</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ: Знак произведения (x - 2)(x - 1) <= 0 (Отрезок между 1 и 2) */}
            <path d="M 70 64 L 70 55 A 10 10 0 0 1 80 45 L 160 45 A 10 10 0 0 1 170 55 L 170 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ: Ограничение знаменателя x != 1 (Две бесконечные ветки) */}
            <path d="M 20 20 L 60 20 A 10 10 0 0 1 70 30 L 70 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 70 64 L 70 30 A 10 10 0 0 1 80 20 L 250 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 МАТЕМАТИЧЕСКАЯ НАКЛОННАЯ ШТРИХОВКА НА ИНТЕРВАЛЕ ОТВЕТА (1; 2] */}
            <path d="M 74 65 L 80 48 M 84 65 L 90 48 M 94 65 L 100 48 M 104 65 L 110 48 M 114 65 L 120 48 M 124 65 L 130 48 M 134 65 L 140 48 M 144 65 L 150 48 M 154 65 L 160 48 M 164 65 L 169 49" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="100" viewBox="0 0 280 100" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="70" x2="260" y2="70" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 70 l-6 -3 M260 70 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="74" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 (ОДЗ) */}
            <circle cx="30" cy="70" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="30" y="88" fill="currentColor" textAnchor="middle" className="text-slate-500 text-[11px]">0</text>

            {/* Закрашенная точка 1/64 */}
            <circle cx="85" cy="70" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            
            {/* Закрашенная точка 1/9 */}
            <circle cx="145" cy="70" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            
            {/* Выколотая точка 1/5 */}
            <circle cx="205" cy="70" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />

            {/* Подписи многоэтажных дробей под осью */}
            <g transform="translate(71, 78)">
              <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[11px] font-black">1</text>
              <line x1="4" y1="13" x2="24" y2="13" stroke="currentColor" strokeWidth="1" />
              <text x="14" y="24" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[11px] font-black">64</text>
            </g>

            <g transform="translate(131, 78)">
              <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[11px] font-black">1</text>
              <line x1="6" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1" />
              <text x="14" y="24" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[11px] font-black">9</text>
            </g>

            <g transform="translate(191, 78)">
              <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[11px] font-black">1</text>
              <line x1="6" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1" />
              <text x="14" y="24" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[11px] font-black">5</text>
            </g>

            {/* 📈 ВЕРХНИЙ УРОВЕНЬ: Дуги подходящих интервалов дроби (<= 0) */}
            {/* Первая дуга: от 0 до 1/64 */}
            <path d="M 30 64 L 30 45 A 10 10 0 0 1 40 35 L 75 35 A 10 10 0 0 1 85 45 L 85 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            
            {/* Вторая дуга: от 1/9 до 1/5 */}
            <path d="M 145 64 L 145 45 A 10 10 0 0 1 155 35 L 195 35 A 10 10 0 0 1 205 45 L 205 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ: Сплошная линия ОДЗ (x > 0) */}
            <path d="M 30 64 L 30 20 A 10 10 0 0 1 40 10 L 250 10" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 МАТЕМАТИЧЕСКАЯ НАКЛОННАЯ ШТРИХОВКА ПОДХОДЯЩИХ ОБЛАСТЕЙ (Где пересекаются оба условия) */}
            {/* Штриховка первого интервала (0; 1/64] */}
            <path d="M 34 65 L 40 40 M 44 65 L 50 40 M 54 65 L 60 40 M 64 65 L 70 40 M 74 65 L 80 40 M 81 65 L 84 52" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            
            {/* Штриховка второго интервала [1/9; 1/5) */}
            <path d="M 149 65 L 155 40 M 159 65 L 165 40 M 169 65 L 175 40 M 179 65 L 185 40 M 189 65 L 195 40 M 199 65 L 204 44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой в совокупность интервалов при помощи двух уровней крыш:</p>

        {/* 🌌 ИСПРАВЛЕНО: ДВУХСЛОЙНЫЙ ЧЕРТЁЖ С КРЫШАМИ И ШТРИХОВКОЙ ДЛЯ ЗАДАЧИ 4 */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="100" viewBox="0 0 280 100" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="70" x2="260" y2="70" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 70 l-6 -3 M260 70 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="74" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 3 (Знаменатель) */}
            <circle cx="90" cy="70" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="90" y="88" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-sm">3</text>

            {/* Закрашенная точка 4 (Числитель) */}
            <circle cx="180" cy="70" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="180" y="88" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-sm">4</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ: Знак произведения (x - 4)(x - 3) >= 0 */}
            {/* Левая ветка: от начала оси до 3 */}
            <path d="M 20 45 L 80 45 A 10 10 0 0 1 90 55 L 90 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Правая ветка: от 4 до конца оси */}
            <path d="M 180 64 L 180 55 A 10 10 0 0 1 190 45 L 250 45" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ КРЫШ: Условие знаменателя x != 3 (Две ветки, исключающие точку 3) */}
            {/* Левая ветка ОДЗ до точки 3 */}
            <path d="M 20 20 L 80 20 A 10 10 0 0 1 90 30 L 90 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            {/* Правая ветка ОДЗ после точки 3 уходит в бесконечность */}
            <path d="M 90 64 L 90 30 A 10 10 0 0 1 100 20 L 250 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 МАТЕМАТИЧЕСКАЯ НАКЛОННАЯ ШТРИХОВКА (В местах пересечения условий) */}
            {/* Штриховка левой области ответа (x < 3) */}
            <path d="M 24 65 L 30 40 M 34 65 L 40 40 M 44 65 L 50 40 M 54 65 L 60 40 M 64 65 L 70 40 M 74 65 L 80 40 M 84 65 L 88 48" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            
            {/* Штриховка правой области ответа (x >= 4) */}
            <path d="M 184 65 L 190 40 M 194 65 L 200 40 M 204 65 L 210 40 M 214 65 L 220 40 M 224 65 L 230 40 M 234 65 L 240 40 M 244 65 L 250 40" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ДВУХСЛОЙНЫЙ SVG ЧЕРТЁЖ ДЛЯ ЗАДАЧИ 5 С ШТРИХОВКОЙ И КРЫШАМИ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="100" viewBox="0 0 280 100" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="70" x2="260" y2="70" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 70 l-6 -3 M260 70 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="74" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка -7 (ОДЗ) */}
            <circle cx="30" cy="70" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="30" y="88" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-xs">-7</text>

            {/* Закрашенная точка -6 */}
            <circle cx="85" cy="70" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="85" y="88" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-xs">-6</text>

            {/* Закрашенная точка -3\sqrt{2} */}
            <circle cx="145" cy="70" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="145" y="88" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-xs">-3√2</text>

            {/* Закрашенная точка 3\sqrt{2} */}
            <circle cx="205" cy="70" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="205" y="88" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-xs">3√2</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ: Знак кубического произведения <= 0 */}
            {/* Левый луч: от бесконечности до -6 */}
            <path d="M 20 45 L 75 45 A 10 10 0 0 1 85 55 L 85 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Центральный отрезок: от -3\sqrt{2} до 3\sqrt{2} */}
            <path d="M 145 64 L 145 55 A 10 10 0 0 1 155 45 L 195 45 A 10 10 0 0 1 205 55 L 205 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ: Условие ОДЗ x > -7 */}
            <path d="M 30 64 L 30 30 A 10 10 0 0 1 40 20 L 250 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ДЛЯ ВЫДЕЛЕНИЯ ОБЛАСТЕЙ ОТВЕТА (Пересечение уровней) */}
            {/* Интервал (-7; -6] */}
            <path d="M 34 65 L 40 40 M 44 65 L 50 40 M 54 65 L 60 40 M 64 65 L 70 40 M 74 65 L 80 40 M 81 65 L 84 52" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            {/* Интервал [-3\sqrt{2}; 3\sqrt{2}] */}
            <path d="M 149 65 L 155 40 M 159 65 L 165 40 M 169 65 L 175 40 M 179 65 L 185 40 M 189 65 L 195 40 M 199 65 L 204 44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="70" viewBox="0 0 280 70" className="overflow-visible font-sans font-bold text-xs">
            <line x1="20" y1="45" x2="250" y2="45" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M250 45 l-6 -3 M250 45 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="258" y="49" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">t</text>

            {/* Закрашенная точка 3 */}
            <circle cx="90" cy="45" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="90" y="63" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-sm">3</text>

            {/* Закрашенная точка 4 */}
            <circle cx="170" cy="45" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="170" y="63" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-sm">4</text>

            {/* Дуга влево до 3 */}
            <path d="M 20 20 L 80 20 A 10 10 0 0 1 90 30 L 90 39" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Дуга вправо от 4 */}
            <path d="M 170 39 L 170 30 A 10 10 0 0 1 180 20 L 250 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* Штриховка областей решения для t */}
            <path d="M 24 50 L 30 25 M 34 50 L 40 25 M 44 50 L 50 25 M 54 50 L 60 25 M 64 50 L 70 25 M 74 50 L 80 25 M 84 50 L 88 34" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <path d="M 174 50 L 180 25 M 184 50 L 190 25 M 194 50 L 200 25 M 204 50 L 210 25 M 214 50 L 220 25 M 224 50 L 230 25 M 234 50 L 240 25 M 244 50 L 250 25" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Получаем совокупность условий: <InlineMath math={`t \\le 3`} /> или <InlineMath math={`t \\ge 4`} />. Выполним обратную замену с учётом ОДЗ логарифма:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_2(25 - x^2) \\le 3 \\\\ &\\log_2(25 - x^2) \\ge 4 \\end{aligned} \\right. \\\\ 25 - x^2 > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &25 - x^2 \\le 2^3 \\\\ &25 - x^2 \\ge 2^4 \\end{aligned} \\right. \\\\ 25 - x^2 > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &25 - x^2 \\le 8 \\\\ &25 - x^2 \\ge 16 \\end{aligned} \\right. \\\\ x^2 < 25 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x^2 \\ge 17 \\\\ &x^2 \\le 9 \\end{aligned} \\right. \\\\ -5 < x < 5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим квадратичные условия на линейные скобки, чтобы получить строгую итоговую систему ограничений:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &(x - \\sqrt{17})(x + \\sqrt{17}) \\ge 0 \\\\ &(x - 3)(x + 3) \\le 0 \\end{aligned} \\right. \\\\ -5 < x < 5 \\end{cases}`} />

        <p>Разложим полученное системное условие для переменной <InlineMath math={`x`} /> на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ДВУХСЛОЙНЫЙ SVG ЧЕРТЁЖ ДЛЯ ПЕРЕМЕННОЙ x С ШТРИХОВКОЙ И КРЫШАМИ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="110" viewBox="0 0 280 110" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="80" x2="260" y2="80" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 80 l-6 -3 M260 80 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="84" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка -5 */}
            <circle cx="25" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="25" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">-5</text>

            {/* Выколотая точка 5 */}
            <circle cx="245" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="245" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">5</text>

            {/* Точка -√17 */}
            <circle cx="65" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="65" y="98" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-[10px]">-√17</text>

            {/* Точка √17 */}
            <circle cx="205" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="205" y="98" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-[10px]">√17</text>

            {/* Закрашенная точка -3 */}
            <circle cx="110" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="110" y="98" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-xs">-3</text>

            {/* Закрашенная точка 3 */}
            <circle cx="160" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="160" y="98" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-xs">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ */}
            <path d="M 20 55 L 55 55 A 10 10 0 0 1 65 65 L 65 74" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 110 74 L 110 65 A 10 10 0 0 1 120 55 L 150 55 A 10 10 0 0 1 160 65 L 160 74" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 205 74 L 205 65 A 10 10 0 0 1 215 55 L 250 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ: Отрезок ОДЗ (-5; 5) */}
            <path d="M 25 74 L 25 30 A 10 10 0 0 1 35 20 L 235 20 A 10 10 0 0 1 245 30 L 245 74" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА НА ИНТЕРВАЛАХ ОТВЕТА */}
            <path d="M 28 75 L 34 50 M 38 75 L 44 50 M 48 75 L 54 50 M 58 75 L 64 50 M 62 75 L 64 66" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <path d="M 114 75 L 120 50 M 124 75 L 130 50 M 134 75 L 140 50 M 144 75 L 150 50 M 154 75 L 160 50 M 158 75 L 160 66" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <path d="M 208 75 L 214 50 M 218 75 L 224 50 M 228 75 L 234 50 M 238 75 L 244 50 M 242 75 L 244 66" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>Преобразуем знаменатель дроби. По свойствам степеней логарифма:</p>
        <BlockMath math={`\\log_2^2 x^2 + \\log_2 x^4 + 1 = (2\\log_2 |x|)^2 + 4\\log_2 |x| + 1 = 4\\log_2^2 |x| + 4\\log_2 |x| + 1 = (2\\log_2 |x| + 1)^2`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Заметим, что знаменатель представляет собой полный квадрат, который всегда неотрицателен. Перейдём к равносильной системе, включающей ОДЗ логарифмов числителя и условие неравенства знаменателя нулю:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\log_2(2 - x) - \\log_2(x + 1) \\ge 0 \\\\ 2 - x > 0 \\\\ x + 1 > 0 \\\\ 2\\log_2 |x| + 1 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей к разности логарифмов в числителе: знак разности совпадает со знаком разности их аргументов</span>
          <InlineMath math={`(2 - x) - (x + 1) = 1 - 2x`} />.
          <span>Система упрощается:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} 1 - 2x \\ge 0 \\\\ x < 2 \\\\ x > -1 \\\\ \\log_2 |x| \\neq -\\frac{1}{2} \\end{cases} \\iff \\begin{cases} x \\le 0{,}5 \\\\ -1 < x < 2 \\\\ |x| \\neq \\frac{1}{\\sqrt{2}} \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Условие на модуль даёт две выколотые точки:</span>
          <InlineMath math={`x \\neq \\frac{\\sqrt{2}}{2}`} />
          <span>и</span>
          <InlineMath math={`x \\neq -\\frac{\\sqrt{2}}{2}`} />.
          <span>Обоснуем их точное положение. Так как выполняется точное неравенство:</span>
        </div>

        <BlockMath math={`1 < 2 < 4 \\implies 1 < \\sqrt{2} < 2 \\implies \\frac{1}{2} < \\frac{\\sqrt{2}}{2} < 1`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Следовательно, точка</span>
          <InlineMath math={`\\frac{\\sqrt{2}}{2} > 0{,}5`} />
          <span>лежит правее луча решений числителя и не влияет на ответ. Умножая на (-1), получаем:</span>
          <InlineMath math={`-1 < -\\frac{\\sqrt{2}}{2} < -0{,}5`} />,
          <span>значит, отрицательный корень</span>
          <InlineMath math={`x = -\\frac{\\sqrt{2}}{2}`} />
          <span>гарантированно попадает внутрь интервала</span>
          <InlineMath math={`(-1; \\, 0{,}5]`} />
          <span>и выкалывает точку. Получаем точный аналитический ответ:</span>
        </div>

        <BlockMath math={`\\iff x \\in \\left(-1; \\, -\\frac{\\sqrt{2}}{2}\\right) \\cup \\left(-\\frac{\\sqrt{2}}{2}; \\, 0{,}5\\right]`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(-1; \\, -\\frac{\\sqrt{2}}{2}\\right) \\cup \\left(-\\frac{\\sqrt{2}}{2}; \\, 0{,}5\\right]`} />
        </div>
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
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="70" viewBox="0 0 280 70" className="overflow-visible font-sans font-bold text-xs">
            <line x1="20" y1="45" x2="250" y2="45" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M250 45 l-6 -3 M250 45 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="258" y="49" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">t</text>

            {/* Выколотая точка 0 */}
            <circle cx="60" cy="45" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="60" y="63" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-sm">0</text>

            {/* Закрашенная точка 3 */}
            <circle cx="135" cy="45" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="135" y="63" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-sm">3</text>

            {/* Выколотая точка 4 */}
            <circle cx="200" cy="45" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="200" y="63" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-sm">4</text>

            {/* Дуга влево до 0 */}
            <path d="M 20 20 L 50 20 A 10 10 0 0 1 60 30 L 60 39" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Изолированная точка 3 */}
            <circle cx="135" cy="20" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            {/* Дуга вправо от 4 */}
            <path d="M 200 39 L 200 30 A 10 10 0 0 1 210 20 L 250 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* Штриховка областей решения для t */}
            <path d="M 24 50 L 30 25 M 34 50 L 40 25 M 44 50 L 50 25 M 54 50 L 59 27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <path d="M 204 50 L 210 25 M 214 50 L 220 25 M 224 50 L 230 25 M 234 50 L 240 25 M 244 50 L 250 25" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Получаем совокупность для переменной <InlineMath math={`t`} stroke="currentColor" />: <InlineMath math={`t < 0`} />, <InlineMath math={`t = 3`} /> или <InlineMath math={`t > 4`} />. Перейдём к обратной замене:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_3 x < 0 \\\\ &\\log_3 x = 3 \\\\ &\\log_3 x > 4 \\end{aligned} \\right. \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x < 1 \\\\ &x = 27 \\\\ &x > 81 \\end{aligned} \\right. \\\\ x > 0 \\end{cases}`} />

        <p>Разложим полученное финальное условие для переменной <InlineMath math={`x`} /> на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ДВУХСЛОЙНЫЙ SVG ЧЕРТЁЖ ДЛЯ ПЕРЕМЕННОЙ x С ШТРИХОВКОЙ И КРЫШАМИ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="110" viewBox="0 0 280 110" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="80" x2="260" y2="80" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 80 l-6 -3 M260 80 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="84" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="35" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="35" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">0</text>

            {/* Выколотая точка 1 */}
            <circle cx="100" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="100" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">1</text>

            {/* Закрашенная точка 27 */}
            <circle cx="165" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="165" y="98" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-xs">27</text>

            {/* Выколотая точка 81 */}
            <circle cx="225" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="225" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">81</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ: Решение совокупности аргумента */}
            {/* Луч влево до 1 */}
            <path d="M 20 55 L 90 55 A 10 10 0 0 1 100 65 L 100 74" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Изолированная точка 27 */}
            <circle cx="165" cy="55" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            {/* Луч вправо от 81 */}
            <path d="M 225 74 L 225 65 A 10 10 0 0 1 235 55 L 250 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ: Отрезок ОДЗ x > 0 */}
            <path d="M 35 74 L 35 30 A 10 10 0 0 1 45 20 L 250 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА НА ИНТЕРВАЛАХ ОТВЕТА */}
            {/* Интервал (0; 1) */}
            <path d="M 39 75 L 45 50 M 49 75 L 55 50 M 53 75 L 59 50 M 59 75 L 65 50 M 69 75 L 75 50 M 79 75 L 85 50 M 89 75 L 95 50 M 94 75 L 99 53" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            {/* Интервал (81; +inf) */}
            <path d="M 228 75 L 234 50 M 238 75 L 244 50 M 248 75 L 250 58" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>Приведём аргументы внутри логарифмов к общему знаменателю:</p>
        <BlockMath math={`\\log_5(3x + 1) + \\log_5\\left(\\frac{1 + 72x^2}{72x^2}\\right) \\ge \\log_5\\left(\\frac{1 + 24x}{24x}\\right)`} />
        
        <p>Используя формулу суммы логарифмов, перейдём к равносильной системе условий вместе с ОДЗ:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_5\\left( \\frac{(3x + 1)(1 + 72x^2)}{72x^2} \\right) \\ge \\log_5\\left(\\frac{1 + 24x}{24x}\\right) \\\\ 3x + 1 > 0 \\\\ 1 + 24x > 0 \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{(3x + 1)(1 + 72x^2)}{72x^2} \\ge \\frac{1 + 24x}{24x} \\\\ x > -\\frac{1}{24} \\\\ x \\neq 0 \\end{cases}`} />

        <p>Перенесём дробь в левую часть и упростим числитель:</p>
        <BlockMath math={`\\begin{cases} \\frac{(3x + 1)(1 + 72x^2) - 3x(1 + 24x)}{72x^2} \\ge 0 \\\\ x > -\\frac{1}{24} \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{3x + 216x^3 + 1 + 72x^2 - 3x - 72x^2}{72x^2} \\ge 0 \\\\ x > -\\frac{1}{24} \\\\ x \\neq 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{216x^3 + 1}{72x^2} \\ge 0 \\\\ x > -\\frac{1}{24} \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{(6x + 1)(36x^2 - 6x + 1)}{72x^2} \\ge 0 \\\\ x > -\\frac{1}{24} \\\\ x \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Заметим, что дискриминант квадратного трёхчлена</span>
          <InlineMath math={`36x^2 - 6x + 1`} />
          <span>отрицателен, поэтому этот множитель строго положителен при любом</span>
          <InlineMath math={`x`} />.
          <span>Знаменатель</span>
          <InlineMath math={`72x^2 > 0`} />
          <span>при всех допустимых значениях. Система сводится к виду:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} 6x + 1 \\ge 0 \\\\ x > -\\frac{1}{24} \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} x \\ge -\\frac{1}{6} \\\\ x > -\\frac{1}{24} \\\\ x \\neq 0 \\end{cases}`} />

        <p>Разложим системные условия графически методом двух уровней крыш (сравнивая точные положения дробей):</p>

        {/* 🌌 ДВУХСЛОЙНЫЙ SVG ЧЕРТЁЖ С КРЫШАМИ И ШТРИХОВКОЙ ДЛЯ ЗАДАЧИ 11 */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="100" viewBox="0 0 280 100" className="overflow-visible font-sans font-bold text-xs">
            <line x1="10" y1="70" x2="260" y2="70" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 70 l-6 -3 M260 70 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="74" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            <circle cx="35" cy="70" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="35" y="88" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-[11px]">-1/6</text>

            <circle cx="95" cy="70" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="95" y="88" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-[11px]">-1/24</text>

            <circle cx="175" cy="70" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="175" y="88" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">0</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ: x >= -1/6 */}
            <path d="M 35 64 L 35 45 A 10 10 0 0 1 45 35 L 250 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ: ОДЗ x > -1/24 и x != 0 */}
            <path d="M 95 64 L 95 25 A 10 10 0 0 1 105 15 L 165 15 A 10 10 0 0 1 175 25 L 175 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 175 64 L 175 25 A 10 10 0 0 1 185 15 L 250 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 МАТЕМАТИЧЕСКАЯ НАКЛОННАЯ ШТРИХОВКА ОТВЕТА */}
            <path d="M 99 65 L 105 40 M 109 65 L 115 40 M 119 65 L 125 40 M 129 65 L 135 40 M 139 65 L 145 40 M 149 65 L 155 40 M 159 65 L 165 40 M 169 65 L 174 44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <path d="M 179 65 L 185 40 M 189 65 L 195 40 M 199 65 L 205 40 M 203 65 L 209 40 M 213 65 L 219 40 M 223 65 L 229 40 M 233 65 L 239 40 M 243 65 L 249 40" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <BlockMath math={`\\iff x \\in \\left(-\\frac{1}{24}; \\, 0\\right) \\cup (0; \\, +\\infty)`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(-\\frac{1}{24}; \\, 0\\right) \\cup (0; \\, +\\infty)`} />
        </div>
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
        
        <p>Приведем аргументы к общему знаменателю:</p>
        <BlockMath math={`\\log_5\\left(\\frac{2(x + 1)}{x}\\right) - \\log_5(x + 3) \\le \\log_5\\left(\\frac{x + 6}{x^2}\\right)`} />
        
        <p>Используя свойство разности логарифмов, перейдём к равносильной системе условий вместе с ОДЗ:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_5\\left(\\frac{2(x + 1)}{x(x + 3)}\\right) \\le \\log_5\\left(\\frac{x + 6}{x^2}\\right) \\\\ \\frac{2(x + 1)}{x} > 0 \\\\ x + 3 > 0 \\\\ \\frac{x + 6}{x^2} > 0 \\end{cases} \\iff \\begin{cases} \\frac{2(x + 1)}{x(x + 3)} \\le \\frac{x + 6}{x^2} \\\\ \\frac{x + 1}{x} > 0 \\\\ x > -3 \\\\ x > -6 \\\\ x \\neq 0 \\end{cases}`} />

        <p>Решим отдельно рациональное неравенство из первой строки системы, перенеся всё влево:</p>
        <BlockMath math={`\\frac{2(x + 1)}{x(x + 3)} - \\frac{x + 6}{x^2} \\le 0 \\implies \\frac{2x^2(x + 1) - (x + 6)(x + 3)}{x^2(x + 3)} \\le 0`} />
        <BlockMath math={`\\iff \\frac{2x^3 + 2x^2 - (x^2 + 9x + 18)}{x^2(x + 3)} \\le 0 \\iff \\frac{2x^3 + x^2 - 9x - 18}{x^2(x + 3)} \\le 0`} />
        
        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим числитель методом группировки:</span>
          <InlineMath math={`2x^2(x + 2) - 9(x + 2) = (x + 2)(2x^2 - 9)`} />.
        </div>
        <BlockMath math={`\\iff \\frac{(x + 2)\\cdot 2\\left(x^2 - \\frac{9}{2}\\right)}{x^2(x + 3)} \\le 0 \\iff \\frac{(x + 2)\\left(x - \\frac{3\\sqrt{2}}{2}\\right)\\left(x + \\frac{3\\sqrt{2}}{2}\\right)}{x^2(x + 3)} \\le 0`} />

        <p>Сведём все требования в единую систему условий:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(x + 2)\\left(x - \\frac{3\\sqrt{2}}{2}\\right)\\left(x + \\frac{3\\sqrt{2}}{2}\\right)}{x + 3} \\le 0 \\\\ \\frac{x + 1}{x} > 0 \\\\ x > -3 \\\\ x \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Для отбора интервалов сопоставим точные положения корней на числовой прямой:</span>
          <InlineMath math={`-3 < -\\frac{3\\sqrt{2}}{2} < -2 < -1 < 0 < \\frac{3\\sqrt{2}}{2}`} />.
        </div>

        {/* 🌌 ДВУХСЛОЙНЫЙ SVG ЧЕРТЁЖ С КРЫШАМИ И ШТРИХОВКОЙ ДЛЯ ЗАДАЧИ 12 */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="110" viewBox="0 0 280 110" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="80" x2="260" y2="80" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 80 l-6 -3 M260 80 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="84" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            <circle cx="20" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="20" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">-3</text>

            <circle cx="55" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="55" y="98" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-[9px]">-3√2/2</text>

            <circle cx="95" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="95" y="98" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-xs">-2</text>

            <circle cx="135" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="135" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">-1</text>

            <circle cx="175" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="175" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">0</text>

            <circle cx="220" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="220" y="98" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-[9px]">3√2/2</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ: Знак рациональной дроби <= 0 */}
            <path d="M 20 55 L 45 55 A 10 10 0 0 1 55 65 L 55 74" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 95 74 L 95 55 A 10 10 0 0 1 105 45 L 210 45 A 10 10 0 0 1 220 55 L 220 74" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ: ОДЗ логарифмов */}
            <path d="M 20 74 L 20 30 A 10 10 0 0 1 30 20 L 125 20 A 10 10 0 0 1 135 30 L 135 74" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 175 74 L 175 30 A 10 10 0 0 1 185 20 L 250 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 МАТЕМАТИЧЕСКАЯ НАКЛОННАЯ ШТРИХОВКА ОТВЕТА */}
            <path d="M 23 75 L 29 50 M 33 75 L 39 50 M 43 75 L 49 50 M 47 75 L 52 50 M 51 75 L 54 60" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <path d="M 179 75 L 185 50 M 189 75 L 195 50 M 193 75 L 199 50 M 198 75 L 204 50 M 202 75 L 208 50 M 206 75 L 212 50 M 210 75 L 216 50 M 214 75 L 219 53" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <BlockMath math={`\\iff x \\in \\left(-3; \\, -\\frac{3\\sqrt{2}}{2}\\right] \\cup \\left(0; \\, \\frac{3\\sqrt{2}}{2}\\right]`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(-3; \\, -\\frac{3\\sqrt{2}}{2}\\right] \\cup \\left(0; \\, \\frac{3\\sqrt{2}}{2}\\right]`} />
        </div>
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
        
        <p>Разложим квадратный трёхчлен на множители: <InlineMath math={`x^2 - 2x - 15 = (x - 5)(x + 3)`} />.</p>
        <p>Перейдём к равносильной системе условий, удерживающей ОДЗ исходных логарифмов:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_4((x - 5)^2(x + 3)) + 1 \\ge \\log_2|x - 5| \\\\ (x - 5)(x + 3) > 0 \\\\ x - 5 \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Из условий ОДЗ следует, что аргумент</span>
          <InlineMath math={`x - 5 > 0`} />
          <span>(так как при</span>
          <InlineMath math={`x < -3`} />
          <span>выражение</span>
          <InlineMath math={`(x - 5)^2(x + 3)`} />
          <span>стало бы отрицательным). Значит, раскрываем модуль со знаком «плюс»:</span>
          <InlineMath math={`|x - 5| = x - 5`} />,
          <span>а сама система упрощается:</span>
        </div>

        <BlockMath math={`\\iff \\begin{cases} \\log_{2^2}((x - 5)^2(x + 3)) + 1 \\ge \\log_2(x - 5) \\\\ x > 5 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{1}{2}\\log_2((x - 5)^2(x + 3)) + 1 \\ge \\log_2(x - 5) \\\\ x > 5 \\end{cases}`} />

        <p>Умножим первое неравенство системы на 2 и внесем двойку в логарифм правой части:</p>
        <BlockMath math={`\\begin{cases} \\log_2((x - 5)^2(x + 3)) + 2 \\ge 2\\log_2(x - 5) \\\\ x > 5 \\end{cases} \\iff \\begin{cases} \\log_2((x - 5)^2(x + 3)) + \\log_2 4 \\ge \\log_2(x - 5)^2 \\\\ x > 5 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\log_2(4(x - 5)^2(x + 3)) \\ge \\log_2(x - 5)^2 \\\\ x > 5 \\end{cases}`} />

        <p>В силу монотонного возрастания логарифмической функции с основанием 2 &gt; 1 перейдём к сравнению аргументов:</p>
        <BlockMath math={`\\iff \\begin{cases} 4(x - 5)^2(x + 3) \\ge (x - 5)^2 \\\\ x > 5 \\end{cases} \\iff \\begin{cases} 4(x - 5)^2(x + 3) - (x - 5)^2 \\ge 0 \\\\ x > 5 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} (x - 5)^2 (4(x + 3) - 1) \\ge 0 \\\\ x > 5 \\end{cases} \\iff \\begin{cases} (x - 5)^2 (4x + 11) \\ge 0 \\\\ x > 5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку при</span>
          <InlineMath math={`x > 5`} />
          <span>множители</span>
          <InlineMath math={`(x - 5)^2 > 0`} />
          <span>и</span>
          <InlineMath math={`(4x + 11) > 0`} />
          <span>строго положительны, их произведение автоматически больше нуля. Система сводится к линейному лучу ОДЗ:</span>
        </div>
        <BlockMath math={`\\iff x > 5`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(5; \\, +\\infty)`} />
        </div>
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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ИСПРАВЛЕНО: ШТРИХОВКА СТРОГО МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="110" viewBox="0 0 280 110" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="80" x2="260" y2="80" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 80 l-6 -3 M260 80 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="84" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="35" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="35" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">0</text>

            {/* Выколотая точка 1/81 */}
            <circle cx="100" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <g transform="translate(86, 92)">
              <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[10px] font-black">1</text>
              <line x1="4" y1="13" x2="24" y2="13" stroke="currentColor" strokeWidth="1" />
              <text x="14" y="23" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[10px] font-black">81</text>
            </g>

            {/* Закрашенная точка 1/9 */}
            <circle cx="165" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <g transform="translate(151, 92)">
              <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[10px] font-black">1</text>
              <line x1="6" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1" />
              <text x="14" y="23" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[10px] font-black">9</text>
            </g>

            {/* Выколотая точка 81 */}
            <circle cx="225" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="225" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">81</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 55) */}
            <path d="M 20 55 L 90 55 A 10 10 0 0 1 100 65 L 100 75" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <circle cx="165" cy="55" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            <path d="M 225 75 L 225 65 A 10 10 0 0 1 235 55 L 255 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 20): Отрезок ОДЗ x > 0 */}
            <path d="M 35 75 L 35 30 A 10 10 0 0 1 45 20 L 255 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 ШТРИХОВКА ЗАПЕРТА СНИЗУ (Идёт от y=78 до y=57, не пересекая верхнюю линию) */}
            {/* Левый отрезок (0; 1/81) */}
            <line x1="42" y1="78" x2="48" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="78" x2="56" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="78" x2="64" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="78" x2="72" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="78" x2="80" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="78" x2="88" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="78" x2="96" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Правый отрезок (81; +inf) */}
            <line x1="229" y1="78" x2="235" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="78" x2="243" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="78" x2="251" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АККУРАТНОЙ ЗАПЕРТОЙ ШТРИХОВКОЙ ПОД НИЖНЕЙ КРЫШЕЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="110" viewBox="0 0 280 110" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="80" x2="260" y2="80" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 80 l-6 -3 M260 80 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="84" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="35" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="35" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">0</text>

            {/* Закрашенная точка 1 */}
            <circle cx="90" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="90" y="98" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-xs">1</text>

            {/* Закрашенная точка 4 */}
            <circle cx="145" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="145" y="98" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-xs">4</text>

            {/* Выколотая точка 64 */}
            <circle cx="210" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="210" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">64</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 55) */}
            {/* Луч влево до 1 */}
            <path d="M 20 55 L 80 55 A 10 10 0 0 1 90 65 L 90 75" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Луч вправо от 4 с выкалыванием точки 64 */}
            <path d="M 145 75 L 145 65 A 10 10 0 0 1 155 55 L 200 55 A 10 10 0 0 1 210 65 L 210 75" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 210 75 L 210 65 A 10 10 0 0 1 220 55 L 255 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 20): Отрезок ОДЗ x > 0 */}
            <path d="M 35 75 L 35 30 A 10 10 0 0 1 45 20 L 255 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 ШТРИХОВКА СТРОГО ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Интервал (0; 1] */}
            <line x1="42" y1="78" x2="48" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="78" x2="56" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="78" x2="64" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="78" x2="72" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="78" x2="80" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="78" x2="88" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Интервал [4; 64) */}
            <line x1="149" y1="78" x2="155" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="157" y1="78" x2="163" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="165" y1="78" x2="171" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="173" y1="78" x2="179" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="181" y1="78" x2="187" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="78" x2="195" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="78" x2="203" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Интервал (64; +inf) */}
            <line x1="214" y1="78" x2="220" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="222" y1="78" x2="228" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="230" y1="78" x2="236" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="238" y1="78" x2="244" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="246" y1="78" x2="252" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АККУРАТНОЙ ЗАПЕРТОЙ ШТРИХОВКОЙ ПОД НИЖНЕЙ КРЫШЕЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="110" viewBox="0 0 280 110" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="80" x2="260" y2="80" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 80 l-6 -3 M260 80 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="84" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="35" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="35" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">0</text>

            {/* Выколотая точка 1/32 */}
            <circle cx="100" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <g transform="translate(86, 92)">
              <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[10px] font-black">1</text>
              <line x1="4" y1="13" x2="24" y2="13" stroke="currentColor" strokeWidth="1" />
              <text x="14" y="23" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[10px] font-black">32</text>
            </g>

            {/* Закрашенная точка 16 */}
            <circle cx="165" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="165" y="98" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 font-black text-xs">16</text>

            {/* Выколотая точка 32 */}
            <circle cx="225" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="225" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">32</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 55) */}
            {/* Луч влево до 1/32 */}
            <path d="M 20 55 L 90 55 A 10 10 0 0 1 100 65 L 100 75" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Изолированная точка 16 */}
            <circle cx="165" cy="55" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            {/* Луч вправо от 32 */}
            <path d="M 225 75 L 225 65 A 10 10 0 0 1 235 55 L 255 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 20): Отрезок ОДЗ x > 0 */}
            <path d="M 35 75 L 35 30 A 10 10 0 0 1 45 20 L 255 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 ШТРИХОВКА СТРОГО ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Интервал (0; 1/32) */}
            <line x1="42" y1="78" x2="48" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="78" x2="56" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="78" x2="64" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="78" x2="72" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="78" x2="80" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="78" x2="88" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="78" x2="96" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Интервал (32; +inf) */}
            <line x1="229" y1="78" x2="235" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="78" x2="243" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="78" x2="251" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АККУРАТНОЙ ЗАПЕРТОЙ ШТРИХОВКОЙ ПОД НИЖНЕЙ КРЫШЕЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="280" height="110" viewBox="0 0 280 110" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="80" x2="260" y2="80" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M260 80 l-6 -3 M260 80 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="268" y="84" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="50" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="50" y="98" fill="currentColor" textAnchor="middle" className="text-slate-500 font-black text-xs">0</text>

            {/* Закрашенная точка 1/3 */}
            <circle cx="130" cy="80" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <g transform="translate(116, 92)">
              <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[10px] font-black">1</text>
              <line x1="6" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1" />
              <text x="14" y="23" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[10px] font-black">3</text>
            </g>

            {/* Выколотая точка 2/3 */}
            <circle cx="210" cy="80" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <g transform="translate(196, 92)">
              <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[10px] font-black">2</text>
              <line x1="6" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1" />
              <text x="14" y="23" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[10px] font-black">3</text>
            </g>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 55) */}
            {/* Луч влево до 0 */}
            <path d="M 20 55 L 40 55 A 10 10 0 0 1 50 65 L 50 75" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Изолированная точка 1/3 */}
            <circle cx="130" cy="55" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            {/* Луч вправо от 2/3 */}
            <path d="M 210 75 L 210 65 A 10 10 0 0 1 220 55 L 255 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 20): Бесконечная прямая (так как ОДЗ верно для всех x) */}
            <line x1="20" y1="20" x2="255" y2="20" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 ШТРИХОВКА СТРОГО ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый промежуток */}
            <line x1="22" y1="78" x2="28" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="30" y1="78" x2="36" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="38" y1="78" x2="44" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Правый промежуток */}
            <line x1="214" y1="78" x2="220" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="222" y1="78" x2="228" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="230" y1="78" x2="236" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="238" y1="78" x2="244" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="246" y1="78" x2="252" y2="57" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>Разложим квадратный трёхчлен на множители по теореме Виета (корни 6 и 7): <InlineMath math={`x^2 - 13x + 42 = (x - 6)(x - 7)`} />.</p>
        <p>Перейдём к равносильной системе условий, удерживающей ограничения на знаки аргументов исходных логарифмов:</p>
        <BlockMath math={`\\iff \\begin{cases} 7\\log_{12}((x - 6)(x - 7)) \\le 8 + \\log_{12}\\frac{(x - 7)^7}{x - 6} \\\\ (x - 6)(x - 7) > 0 \\\\ \\frac{(x - 7)^7}{x - 6} > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем ОДЗ. Из условий</span>
          <InlineMath math={`(x - 6)(x - 7) > 0`} />
          <span>и</span>
          <InlineMath math={`\\frac{(x - 7)^7}{x - 6} > 0`} />
          <span>следует, что знаки выражений</span>
          <InlineMath math={`(x - 6)`} />
          <span>и</span>
          <InlineMath math={`(x - 7)`} />
          <span>должны совпадать. Однако, если бы оба выражения были отрицательными, то дробь</span>
          <InlineMath math={`\\frac{\\text{минус}}{\\text{минус}} > 0`} />,
          <span>но степень</span>
          <InlineMath math={`(x - 7)^7`} />
          <span>дала бы отрицательный знак в числителе, что привело бы к противоречию. Таким образом, знаки обязаны быть строго положительными:</span>
        </div>
        <BlockMath math={`\\begin{cases} x - 6 > 0 \\\\ x - 7 > 0 \\end{cases} \\implies x > 7`} />

        <p>Используя полученное условие <InlineMath math={`x > 7`} />, преобразуем логарифмы по свойствам суммы и разности без модулей:</p>
        <BlockMath math={`\\begin{cases} 7\\log_{12}(x - 6) + 7\\log_{12}(x - 7) \\le 8 + 7\\log_{12}(x - 7) - \\log_{12}(x - 6) \\\\ x > 7 \\end{cases}`} />

        <p>Взаимно уничтожим одинаковые слагаемые <InlineMath math={`7\\log_{12}(x - 7)`} /> в обеих частях неравенства и перенесём логарифм влево:</p>
        <BlockMath math={`\\begin{cases} 8\\log_{12}(x - 6) \\le 8 \\\\ x > 7 \\end{cases} \\iff \\begin{cases} \\log_{12}(x - 6) \\le 1 \\\\ x > 7 \\end{cases}`} />

        <p>Потенциируя логарифм по основанию 12 &gt; 1, переходим к линейной системе интервалов:</p>
        <BlockMath math={`\\iff \\begin{cases} x - 6 \\le 12 \\\\ x > 7 \\end{cases} \\iff \\begin{cases} x \\le 18 \\\\ x > 7 \\end{cases} \\iff 7 < x \\le 18`} />

        <p>Пересечение полученных лучей даёт финальное множество решений:</p>
        <BlockMath math={`\\iff x \\in (7; \\, 18]`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(7; \\, 18]`} />
        </div>
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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ИСПРАВЛЕНО: ПОДПИСИ ТОЧЕК РЕНДЕРЯТСЯ СТРОГО ЧЕРЕЗ ФОРМУЛЫ KaTeX */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка 0 */}
            <circle cx="45" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="25" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Выколотая точка log11 6 */}
            <circle cx="135" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="105" y="70" width="60" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200 text-[13px]"><InlineMath math="\log_{11} 6" /></div>
            </foreignObject>

            {/* Выколотая точка log11 10 */}
            <circle cx="235" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="205" y="70" width="60" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200 text-[13px]"><InlineMath math="\log_{11} 10" /></div>
            </foreignObject>

            {/* Закрашенная точка 1 */}
            <circle cx="315" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="295" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            <path d="M 15 35 L 35 35 A 10 10 0 0 1 45 45 L 45 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 135 55 L 135 45 A 10 10 0 0 1 145 35 L 225 35 A 10 10 0 0 1 235 45 L 235 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 235 55 L 235 45 A 10 10 0 0 1 245 35 L 305 35 A 10 10 0 0 1 315 45 L 315 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ: Ограничения ОДЗ */}
            <line x1="15" y1="15" x2="335" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            
            <line x1="141" y1="78" x2="147" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.0" />
            <line x1="141" y1="58" x2="147" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="149" y1="58" x2="155" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="157" y1="58" x2="163" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="165" y1="58" x2="171" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="173" y1="58" x2="179" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="201" y1="58" x2="207" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="233" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="241" y1="58" x2="247" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="271" y1="58" x2="277" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="281" y1="58" x2="287" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="301" y1="58" x2="307" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="311" y1="58" x2="313" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка -2 */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="95" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-2" /></div>
            </foreignObject>

            {/* Закрашенная точка 0 */}
            <circle cx="245" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="225" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            <path d="M 15 35 L 105 35 A 10 10 0 0 1 115 45 L 115 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 115 55 L 115 45 A 10 10 0 0 1 125 35 L 235 35 A 10 10 0 0 1 245 45 L 245 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15) */}
            <line x1="15" y1="15" x2="265" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="58" x2="96" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="98" y1="58" x2="104" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="106" y1="58" x2="110" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="121" y1="58" x2="127" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="153" y1="58" x2="159" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="171" y1="58" x2="177" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="201" y1="58" x2="207" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="242" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка -√2 */}
            <circle cx="115" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="95" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-\sqrt{2}" /></div>
            </foreignObject>

            {/* Закрашенная точка √2 */}
            <circle cx="245" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="225" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="\sqrt{2}" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение совокупности лучей */}
            <path d="M 15 35 L 105 35 A 10 10 0 0 1 115 45 L 115 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 245 55 L 245 45 A 10 10 0 0 1 255 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="58" x2="96" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="98" y1="58" x2="104" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="106" y1="58" x2="110" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Правый луч */}
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="267" y1="58" x2="273" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="283" y1="58" x2="289" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="58" x2="313" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="323" y1="58" x2="329" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="331" y1="58" x2="337" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>Разложим числитель на множители и представим знаменатель в виде разности логарифмов, чтобы подготовить выражение к методу замены множителей:</p>
        <BlockMath math={`\\frac{\\log_3 x(\\log_3 x - 1)}{\\log_{0{,}2}(0{,}5 \\cdot 2^x) - \\log_{0{,}2} 1} \\ge 0`} />
        
        <p>Перейдём к равносильной системе условий, содержащей ограничения на знаки аргументов и знаменатель:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{\\log_3 x(\\log_3 x - 1)}{\\log_{0{,}2}(0{,}5 \\cdot 2^x) - \\log_{0{,}2} 1} \\ge 0 \\\\ x > 0 \\\\ 0{,}5 \\cdot 2^x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод рационализации к знаменателю. Так как основание логарифма</span>
          <InlineMath math={`0{,}2`} />
          <span>лежит в промежутке</span>
          <InlineMath math={`(0; \\, 1)`} />,
          <span>знак разности логарифмов противоположен знаку разности их аргументов, то есть совпадает со знаком разности</span>
          <InlineMath math={`(1 - 0{,}5 \\cdot 2^x)`} />.
          <span>Показательное условие в третьей строке выполняется всегда. Применим метод рационализации к числителю:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(x - 1)(x - 3)}{1 - 0{,}5 \\cdot 2^x} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{(x - 1)(x - 3)}{0{,}5 \\cdot 2^0 - 0{,}5 \\cdot 2^x} \\ge 0 \\\\ x > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{(x - 1)(x - 3)}{0{,}5 \\cdot (2^0 - 2^x)} \\ge 0 \\\\ x > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод рационализации к показательному выражению в знаменателе. Так как основание</span>
          <InlineMath math={`2 > 1`} />,
          <span>знак разности степеней совпадает со знаком разности показателей:</span>
          <InlineMath math={`(0 - x) = -x`} />.
          <span>Система сводится к линейно-рациональной:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(x - 1)(x - 3)}{-x} \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{(x - 1)(x - 3)}{x} \\le 0 \\\\ x > 0 \\\\ x \\neq 0 \\end{cases}`} />

        <p>Поскольку по условию ОДЗ <InlineMath math={`x > 0`} />, знаменатель дроби всегда строго положителен и не влияет на знак. Получаем:</p>
        <BlockMath math={`\\iff \\begin{cases} (x - 1)(x - 3) \\le 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} 1 \\le x \\le 3 \\\\ x > 0 \\end{cases} \\iff 1 \\le x \\le 3`} />

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="45" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Закрашенная точка 1 */}
            <circle cx="165" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="145" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* Закрашенная точка 3 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="245" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение отрезка [1; 3] */}
            <path d="M 165 60 L 165 45 A 10 10 0 0 1 175 35 L 255 35 A 10 10 0 0 1 265 45 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x > 0 */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 325 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок от 1 до 3 */}
            <line x1="171" y1="58" x2="177" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="179" y1="58" x2="185" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="187" y1="58" x2="193" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="195" y1="58" x2="201" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="207" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="263" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Пересечение полученных интервалов даёт финальный ответ:</p>
        <BlockMath math={`\\iff x \\in [1; \\, 3]`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[1; \\, 3]`} />
        </div>
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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 2,5 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="35" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="2{,}5" /></div>
            </foreignObject>

            {/* Выколотая точка 3 */}
            <circle cx="155" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="135" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* Закрашенная точка 3,2 */}
            <circle cx="255" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="235" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3{,}2" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            {/* Ветка влево до 3 */}
            <path d="M 15 35 L 145 35 A 10 10 0 0 1 155 45 L 155 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Изолированная точка 3,2 */}
            <circle cx="255" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x > 2,5 */}
            <path d="M 55 55 L 55 25 A 10 10 0 0 1 65 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок пересечения (2,5; 3) */}
            <line x1="59" y1="58" x2="65" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="67" y1="58" x2="73" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="75" y1="58" x2="81" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="83" y1="58" x2="89" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="91" y1="58" x2="97" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="99" y1="58" x2="105" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="107" y1="58" x2="113" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="123" y1="58" x2="129" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="131" y1="58" x2="137" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="139" y1="58" x2="145" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="147" y1="58" x2="151" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="45" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="25" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Закрашенная точка 1/9 */}
            <circle cx="125" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="105" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="\frac{1}{9}" /></div>
            </foreignObject>

            {/* Выколотая точка 1 */}
            <circle cx="215" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="195" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* Закрашенная точка 81 */}
            <circle cx="295" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="275" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="81" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            <path d="M 15 35 L 115 35 A 10 10 0 0 1 125 45 L 125 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 215 55 L 215 45 A 10 10 0 0 1 225 35 L 285 35 A 10 10 0 0 1 295 45 L 295 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x > 0 */}
            <path d="M 45 60 L 45 25 A 10 10 0 0 1 55 15 L 315 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок от 0 до 1/9 */}
            <line x1="48" y1="58" x2="54" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="56" y1="58" x2="62" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="64" y1="58" x2="70" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="72" y1="58" x2="78" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="80" y1="58" x2="86" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="88" y1="58" x2="94" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="96" y1="58" x2="102" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="104" y1="58" x2="110" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="112" y1="58" x2="118" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="120" y1="58" x2="123" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Отрезок от 1 до 81 */}
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="255" y1="58" x2="261" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="265" y1="58" x2="271" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="293" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Так как полученные условия пересекаются с лучом ОДЗ <InlineMath math={`x > 0`} />, разложим итоговое решение на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="35" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Закрашенная точка 1/6 */}
            <circle cx="165" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="145" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="\\frac{1}{6}" /></div>
            </foreignObject>

            {/* Выколотая точка 1 */}
            <circle cx="275" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="255" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Полуинтервал [1/6; 1) */}
            <path d="M 165 60 L 165 45 A 10 10 0 0 1 175 35 L 265 35 A 10 10 0 0 1 275 45 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x > 0 */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок пересечения от 1/6 до 1 */}
            <line x1="171" y1="58" x2="177" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="179" y1="58" x2="185" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="187" y1="58" x2="193" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="195" y1="58" x2="201" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="209" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="273" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="35" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Закрашенная точка 3-√2 */}
            <circle cx="145" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="115" y="70" width="60" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3 - \sqrt{2}" /></div>
            </foreignObject>

            {/* Закрашенная точка 3+√2 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="235" y="70" width="60" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3 + \sqrt{2}" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Отрезок ответа */}
            <path d="M 145 60 L 145 45 A 10 10 0 0 1 155 35 L 255 35 A 10 10 0 0 1 265 45 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x > 0 */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            <line x1="151" y1="58" x2="157" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="159" y1="58" x2="165" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="167" y1="58" x2="173" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="181" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="183" y1="58" x2="189" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="201" y1="58" x2="207" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="241" y1="58" x2="247" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="263" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка -4 */}
            <circle cx="45" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="25" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-4" /></div>
            </foreignObject>

            {/* Закрашенная точка -3_6/7 */}
            <circle cx="125" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="100" y="70" width="50" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-3\\frac{6}{7}" /></div>
            </foreignObject>

            {/* Закрашенная точка -4+√7/7 */}
            <circle cx="215" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="185" y="70" width="60" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-4+\\frac{\\sqrt{7}}{7}" /></div>
            </foreignObject>

            {/* Выколотая точка -3 */}
            <circle cx="295" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="275" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-3" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            <path d="M 15 35 L 115 35 A 10 10 0 0 1 125 45 L 125 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 215 55 L 215 45 A 10 10 0 0 1 225 35 L 285 35 A 10 10 0 0 1 295 45 L 295 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x > -4 */}
            <path d="M 45 55 L 45 25 A 10 10 0 0 1 55 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок от -4 до -3_6/7 */}
            <line x1="48" y1="58" x2="54" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="56" y1="58" x2="62" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="64" y1="58" x2="70" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="72" y1="58" x2="78" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="80" y1="58" x2="86" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="88" y1="58" x2="94" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="96" y1="58" x2="102" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="104" y1="58" x2="110" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="112" y1="58" x2="118" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="120" y1="58" x2="123" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Отрезок от -4+√7/7 до -3 */}
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="255" y1="58" x2="261" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="265" y1="58" x2="271" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="293" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка -√2 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="35" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-\sqrt{2}" /></div>
            </foreignObject>

            {/* Закрашенная точка -1 */}
            <circle cx="155" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="135" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-1" /></div>
            </foreignObject>

            {/* Закрашенная точка 1 */}
            <circle cx="255" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="235" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение x <= -1 с выкалыванием -√2 и изолированная точка 1 */}
            <path d="M 15 35 L 45 35 A 10 10 0 0 1 55 45 L 55 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 55 55 L 55 45 A 10 10 0 0 1 65 35 L 145 35 A 10 10 0 0 1 155 45 L 155 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <circle cx="255" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): Ограничения знаменателя (Вся ось) */}
            <line x1="15" y1="15" x2="315" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            {/* Отрезок от -√2 до -1 */}
            <line x1="61" y1="58" x2="67" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="69" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="77" y1="58" x2="83" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="85" y1="58" x2="91" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="95" y1="58" x2="101" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="125" y1="58" x2="131" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="135" y1="58" x2="141" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка -1 */}
            <circle cx="105" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="85" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-1" /></div>
            </foreignObject>

            {/* Закрашенная точка 5 */}
            <circle cx="255" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="235" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="5" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Полуинтервал (-1; 5] */}
            <path d="M 105 60 L 105 45 A 10 10 0 0 1 115 35 L 245 35 A 10 10 0 0 1 255 45 L 255 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="335" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            <line x1="111" y1="58" x2="117" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="127" y1="58" x2="133" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="147" y1="58" x2="153" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="157" y1="58" x2="163" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="167" y1="58" x2="173" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="177" y1="58" x2="183" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="187" y1="58" x2="193" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="58" x2="203" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="213" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="217" y1="58" x2="223" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="227" y1="58" x2="233" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="251" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="95" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Закрашенная точка 3 */}
            <circle cx="245" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="225" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение совокупности x < 0 и x >= 3 */}
            <path d="M 15 35 L 105 35 A 10 10 0 0 1 115 45 L 115 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 245 55 L 245 45 A 10 10 0 0 1 255 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): Ограничение знаменателя x != 0 (Вся ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="58" x2="96" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="98" y1="58" x2="104" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="106" y1="58" x2="110" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Правый луч */}
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="267" y1="58" x2="273" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="283" y1="58" x2="289" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="58" x2="313" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="323" y1="58" x2="329" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="331" y1="58" x2="337" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        <p className="font-bold text-slate-700 dark:text-slate-100">Решение неравенства:</p>

        <p>Найдем область допустимых значений (ОДЗ) исходного неравенства:</p>
        <BlockMath math={'\\begin{cases} x^2 - 13x + 42 > 0 \\\\ \\frac{(x-7)^7}{x-6} > 0 \\end{cases} \\iff \\begin{cases} (x-6)(x-7) > 0 \\\\ \\frac{x-7}{x-6} > 0 \\end{cases} \\iff x \\in (-\\infty; 6) \\cup (7; +\\infty)'} />

        <p>Разложим квадратный трёхчлен на множители и перепишем логарифм дроби:</p>
        <BlockMath math={'7\\log_{12}\\bigl((x-6)(x-7)\\bigr) \\leq 8 + \\log_{12}(x-7)^7 - \\log_{12}(x-6)'} />

        <p>Учитывая ограничения ОДЗ, рассмотрим промежуток <InlineMath math={'x > 7'} />. На этом интервале выражения под знаком логарифма строго положительны, что позволяет убрать модули при раскрытии логарифма произведения:</p>
        <BlockMath math={'7\\log_{12}(x-6) + 7\\log_{12}(x-7) \\leq 8 + 7\\log_{12}(x-7) - \\log_{12}(x-6)'} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Вычтем из обеих частей неравенства слагаемое</span>
          <InlineMath math={'7\\log_{12}(x-7)'} />
        </div>

        <p>Приведем подобные логарифмы, перенеся их в левую часть:</p>
        <BlockMath math={'7\\log_{12}(x-6) + \\log_{12}(x-6) \\leq 8 \\iff 8\\log_{12}(x-6) \\leq 8'} />

        <p>Разделим на 8 обе части и потенцируем неравенство по основанию 12 &gt; 1:</p>
        <BlockMath math={'\\log_{12}(x-6) \\leq 1 \\iff x-6 \\leq 12 \\iff x \\leq 18'} />

        <p>С учетом ОДЗ полугодовой промежуток <InlineMath math={'x < 6'} /> не содержит решений исходного неравенства. Нанесем итоговую систему условий на числовую прямую:</p>

        {/* 🎨 ИСПРАВЛЕНО: Заменили y на cy, чтобы круги опустились ровно на ось x */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible total font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200">x</text>

            {/* ЗАКРУГЛЕННАЯ КРЫША ИНТЕРВАЛА РЕШЕНИЯ (7; 18] */}
            <path d="M 210 60 L 210 40 A 8 8 0 0 1 218 32 L 302 32 A 8 8 0 0 1 310 40 L 310 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400" />

            {/* СИНЯЯ КУРСИВНАЯ ШТРИХОВКА ВНУТРИ КРЫШИ */}
            <line x1="216" y1="60" x2="224" y2="34" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="226" y1="60" x2="234" y2="34" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="236" y1="60" x2="244" y2="34" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="246" y1="60" x2="254" y2="34" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="256" y1="60" x2="264" y2="34" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="266" y1="60" x2="274" y2="34" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="276" y1="60" x2="284" y2="34" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="286" y1="60" x2="294" y2="34" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="296" y1="60" x2="304" y2="34" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Верхний сплошной уровень ОДЗ */}
            <line x1="10" y1="15" x2="350" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-300 dark:text-purple-950/40" />

            {/* Выколотая точка 7 (cy="60") */}
            <circle cx="210" cy="60" r="4.5" fill="white" stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="200" y="68" width="20" height="30">
              <div className="text-slate-800 dark:text-slate-200 text-center"><InlineMath math="7" /></div>
            </foreignObject>

            {/* Закрашенная точка 18 (cy="60") */}
            <circle cx="310" cy="60" r="4.5" fill="currentColor" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="295" y="68" width="30" height="30">
              <div className="text-slate-800 dark:text-slate-200 text-center"><InlineMath math="18" /></div>
            </foreignObject>
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-purple-950/30">
          <span>Ответ:</span>
          <InlineMath math={'x \\in (7; 18]'} />
        </div>
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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка 1 */}
            <circle cx="65" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="45" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* Выколотая точка 3 */}
            <circle cx="165" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="145" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* Выколотая точка 4 */}
            <circle cx="265" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="245" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="4" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение отрезка [3; 4] и изолированная точка 1 */}
            <circle cx="65" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            <path d="M 165 60 L 165 45 A 10 10 0 0 1 175 35 L 255 35 A 10 10 0 0 1 265 45 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="325" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок от 3 до 4 */}
            <line x1="171" y1="58" x2="177" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="179" y1="58" x2="185" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="187" y1="58" x2="193" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="195" y1="58" x2="201" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="207" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="263" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И СПЛОШНЫМИ КРЫШАМИ ОТВЕТА */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка -1 */}
            <circle cx="45" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="25" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-1" /></div>
            </foreignObject>

            {/* Выколотая точка 0 */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="95" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Выколотая точка 3 */}
            <circle cx="215" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="195" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* Закрашенная точка 4 */}
            <circle cx="295" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="275" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="4" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Обе крыши сплошные */}
            <path d="M 45 60 L 45 45 A 10 10 0 0 1 55 35 L 105 35 A 10 10 0 0 1 115 45 L 115 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 215 60 L 215 45 A 10 10 0 0 1 225 35 L 285 35 A 10 10 0 0 1 295 45 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ аргументов */}
            <path d="M 15 15 L 105 15 A 10 10 0 0 1 115 25 L 115 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 215 60 L 215 25 A 10 10 0 0 1 225 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок от -1 до 0 */}
            <line x1="48" y1="58" x2="54" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="56" y1="58" x2="62" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="64" y1="58" x2="70" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="72" y1="58" x2="78" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="80" y1="58" x2="86" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="88" y1="58" x2="94" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="96" y1="58" x2="102" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="104" y1="58" x2="110" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="112" y1="58" x2="114" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Отрезок от 3 до 4 */}
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="255" y1="58" x2="261" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="265" y1="58" x2="271" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="293" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка 0 */}
            <circle cx="45" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="25" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Выколотая точка log2 3 */}
            <circle cx="125" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="105" y="70" width="60" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200 text-[13px]"><InlineMath math="\log_2 3" /></div>
            </foreignObject>

            {/* Выколотая точка 2 */}
            <circle cx="205" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="185" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="2" /></div>
            </foreignObject>

            {/* Закрашенная точка 3 */}
            <circle cx="285" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="265" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            {/* Луч влево до 0 */}
            <path d="M 15 35 L 35 35 A 10 10 0 0 1 45 45 L 45 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Интервалы от log2 3 до 3 с выкалыванием 2 */}
            <path d="M 125 55 L 125 45 A 10 10 0 0 1 135 35 L 195 35 A 10 10 0 0 1 205 45 L 205 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 205 55 L 205 45 A 10 10 0 0 1 215 35 L 275 35 A 10 10 0 0 1 285 45 L 285 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="315" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            
            {/* Отрезок от log2 3 до 2 */}
            <line x1="131" y1="58" x2="137" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="141" y1="58" x2="147" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="151" y1="58" x2="157" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="171" y1="58" x2="177" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="199" y1="58" x2="203" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Отрезок от 2 до 3 */}
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="241" y1="58" x2="247" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="271" y1="58" x2="277" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="281" y1="58" x2="283" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="75" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="55" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Закрашенная точка 0,5 */}
            <circle cx="175" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="155" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0{,}5" /></div>
            </foreignObject>

            {/* Выколотая точка 1 */}
            <circle cx="275" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="255" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            {/* Луч влево до 0 */}
            <path d="M 15 35 L 65 35 A 10 10 0 0 1 75 45 L 75 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Изолированная точка 0,5 */}
            <circle cx="175" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            {/* Луч вправо от 1 */}
            <path d="M 275 60 L 275 45 A 10 10 0 0 1 285 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый луч (строго от начала до x = 0) */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="71" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Правый луч (строго от x = 1 до конца оси) */}
            <line x1="281" y1="58" x2="287" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="289" y1="58" x2="295" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="297" y1="58" x2="303" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="305" y1="58" x2="311" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="313" y1="58" x2="319" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="321" y1="58" x2="327" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="329" y1="58" x2="335" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="337" y1="58" x2="343" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка 0 */}
            <circle cx="75" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="55" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Выколотая точка 3 */}
            <circle cx="175" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="155" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* Закрашенная точка 7 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="255" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="7" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение отрезка с выколотой 3 */}
            <path d="M 75 60 L 75 45 A 10 10 0 0 1 85 35 L 165 35 A 10 10 0 0 1 175 45 L 175 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 175 60 L 175 45 A 10 10 0 0 1 185 35 L 265 35 A 10 10 0 0 1 275 45 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок от 0 до 3 */}
            <line x1="78" y1="58" x2="84" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="86" y1="58" x2="92" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="94" y1="58" x2="100" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="102" y1="58" x2="108" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="110" y1="58" x2="116" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="118" y1="58" x2="124" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="126" y1="58" x2="132" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="134" y1="58" x2="140" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="142" y1="58" x2="148" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="150" y1="58" x2="156" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="158" y1="58" x2="164" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="166" y1="58" x2="171" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Отрезок от 3 до 7 */}
            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="58" x2="203" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="205" y1="58" x2="211" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="213" y1="58" x2="219" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="272" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 1/8 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="45" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0,125" /></div>
            </foreignObject>

            {/* Закрашенная точка 1/2 */}
            <circle cx="185" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="165" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0,5" /></div>
            </foreignObject>

            {/* Выколотая точка 1 */}
            <circle cx="305" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="285" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение x <= 1/2 */}
            <path d="M 15 35 L 175 35 A 10 10 0 0 1 185 45 L 185 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): Интервал ОДЗ (1/8; 1) */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 295 15 A 10 10 0 0 1 305 25 L 305 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок пересечения от 1/8 до 1/2 */}
            <line x1="69" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="77" y1="58" x2="83" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="85" y1="58" x2="91" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="93" y1="58" x2="99" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="101" y1="58" x2="107" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="109" y1="58" x2="115" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="117" y1="58" x2="123" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="125" y1="58" x2="131" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="133" y1="58" x2="139" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="141" y1="58" x2="147" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="149" y1="58" x2="155" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="157" y1="58" x2="163" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="165" y1="58" x2="171" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="173" y1="58" x2="179" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="181" y1="58" x2="184" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="185" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="165" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Луч ответа x < 0 */}
            <path d="M 15 35 L 175 35 A 10 10 0 0 1 185 45 L 185 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="92" y1="58" x2="98" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="102" y1="58" x2="108" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="112" y1="58" x2="118" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="122" y1="58" x2="128" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="132" y1="58" x2="138" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="142" y1="58" x2="148" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="152" y1="58" x2="158" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="162" y1="58" x2="168" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="172" y1="58" x2="178" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="181" y1="58" x2="184" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ЗАПЕРТОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка 0 */}
            <circle cx="115" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="95" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Закрашенная точка 1 */}
            <circle cx="245" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="225" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Отрезок ответа [0; 1] */}
            <path d="M 115 60 L 115 45 A 10 10 0 0 1 125 35 L 235 35 A 10 10 0 0 1 245 45 L 245 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            <line x1="121" y1="58" x2="127" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="153" y1="58" x2="159" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="171" y1="58" x2="177" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="201" y1="58" x2="207" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="242" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 1 */}
            <circle cx="75" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="55" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* Закрашенная точка 31 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="255" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="31" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Полуинтервал решения */}
            <path d="M 75 60 L 75 45 A 10 10 0 0 1 85 35 L 265 35 A 10 10 0 0 1 275 45 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x > 1 */}
            <path d="M 75 60 L 75 25 A 10 10 0 0 1 85 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            <line x1="78" y1="58" x2="84" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="86" y1="58" x2="92" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="94" y1="58" x2="100" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="102" y1="58" x2="108" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="110" y1="58" x2="116" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="118" y1="58" x2="124" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="126" y1="58" x2="132" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="134" y1="58" x2="140" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="142" y1="58" x2="148" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="150" y1="58" x2="156" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="158" y1="58" x2="164" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="166" y1="58" x2="172" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="174" y1="58" x2="180" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="184" y1="58" x2="190" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="194" y1="58" x2="200" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="204" y1="58" x2="210" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="214" y1="58" x2="220" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="224" y1="58" x2="230" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="234" y1="58" x2="240" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="244" y1="58" x2="250" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="254" y1="58" x2="260" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="264" y1="58" x2="270" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="272" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка -2 */}
            <circle cx="75" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="55" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-2" /></div>
            </foreignObject>

            {/* Закрашенная точка -1 */}
            <circle cx="185" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="165" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-1" /></div>
            </foreignObject>

            {/* Закрашенная точка 1 */}
            <circle cx="295" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="275" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение отрезка решения и изолированная точка */}
            <path d="M 75 60 L 75 45 A 10 10 0 0 1 85 35 L 175 35 A 10 10 0 0 1 185 45 L 185 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <circle cx="295" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x > -2 */}
            <path d="M 75 60 L 75 25 A 10 10 0 0 1 85 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок от -2 до -1 (Линии начинаются со смещением от x = 81) */}
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="58" x2="96" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="98" y1="58" x2="104" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="106" y1="58" x2="112" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="114" y1="58" x2="120" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="122" y1="58" x2="128" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="130" y1="58" x2="136" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="138" y1="58" x2="144" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="146" y1="58" x2="152" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="154" y1="58" x2="160" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="162" y1="58" x2="168" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="170" y1="58" x2="176" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="178" y1="58" x2="182" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка -1,96 */}
            <circle cx="75" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="50" y="70" width="50" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-1{,}96" /></div>
            </foreignObject>

            {/* Выколотая точка 4 */}
            <circle cx="215" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="195" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="4" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Полуинтервалы решения */}
            <path d="M 75 60 L 75 45 A 10 10 0 0 1 85 35 L 205 35 A 10 10 0 0 1 215 45 L 215 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 215 60 L 215 45 A 10 10 0 0 1 225 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (луч x > -2 полностью покрывает область) */}
            <line x1="25" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок от -1,96 до 4 */}
            <line x1="78" y1="58" x2="84" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="86" y1="58" x2="92" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="94" y1="58" x2="100" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="102" y1="58" x2="108" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="110" y1="58" x2="116" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="118" y1="58" x2="124" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="126" y1="58" x2="132" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="134" y1="58" x2="140" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="142" y1="58" x2="148" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="150" y1="58" x2="156" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="158" y1="58" x2="164" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="166" y1="58" x2="172" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="174" y1="58" x2="180" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="184" y1="58" x2="190" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="194" y1="58" x2="200" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="204" y1="58" x2="209" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Отрезок от 4 до конца */}
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="255" y1="58" x2="261" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="265" y1="58" x2="271" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="295" y1="58" x2="301" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="305" y1="58" x2="311" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="323" y1="58" x2="329" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="331" y1="58" x2="337" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="35" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Выколотая точка 1 */}
            <circle cx="135" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="115" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* Закрашенная точка 3 */}
            <circle cx="215" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="195" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* Выколотая точка 27 */}
            <circle cx="295" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="275" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="27" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            {/* Луч влево до 1 */}
            <path d="M 15 35 L 125 35 A 10 10 0 0 1 135 45 L 135 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Изолированная точка 3 */}
            <circle cx="215" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            {/* Луч вправо от 27 */}
            <path d="M 295 60 L 295 45 A 10 10 0 0 1 305 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x > 0 */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Интервал (0; 1) */}
            <line x1="59" y1="58" x2="65" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="67" y1="58" x2="73" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="75" y1="58" x2="81" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="83" y1="58" x2="89" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="91" y1="58" x2="97" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="99" y1="58" x2="105" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="107" y1="58" x2="113" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="123" y1="58" x2="129" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="131" y1="58" x2="134" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Интервал (27; +inf) */}
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="58" x2="313" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="323" y1="58" x2="329" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="331" y1="58" x2="337" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="339" y1="58" x2="345" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="35" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Выколотая точка 1 */}
            <circle cx="135" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="115" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* Закрашенная точка 4 */}
            <circle cx="215" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="195" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="4" /></div>
            </foreignObject>

            {/* Выколотая точка 32 */}
            <circle cx="295" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="275" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="32" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            <path d="M 15 35 L 125 35 A 10 10 0 0 1 135 45 L 135 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <circle cx="215" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            <path d="M 295 60 L 295 45 A 10 10 0 0 1 305 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x > 0 */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Интервал (0; 1) */}
            <line x1="59" y1="58" x2="65" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="67" y1="58" x2="73" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="75" y1="58" x2="81" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="83" y1="58" x2="89" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="91" y1="58" x2="97" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="99" y1="58" x2="105" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="107" y1="58" x2="113" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="123" y1="58" x2="129" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="131" y1="58" x2="134" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Интервал (32; +inf) */}
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="58" x2="313" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="323" y1="58" x2="329" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="331" y1="58" x2="337" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="339" y1="58" x2="345" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка 1 */}
            <circle cx="65" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="45" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* Выколотая точка 2 */}
            <circle cx="165" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="145" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="2" /></div>
            </foreignObject>

            {/* Выколотая точка 3 */}
            <circle cx="265" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="245" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            {/* Луч влево до 1 */}
            <path d="M 15 35 L 55 35 A 10 10 0 0 1 65 45 L 65 55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Интервал от 2 до 3 */}
            <path d="M 165 60 L 165 45 A 10 10 0 0 1 175 35 L 255 35 A 10 10 0 0 1 265 45 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="63" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Интервал от 2 до 3 */}
            <line x1="171" y1="58" x2="177" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="179" y1="58" x2="185" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="187" y1="58" x2="193" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="195" y1="58" x2="201" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="207" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="263" y2="43" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>Запишем правую часть в виде логарифма по тому же основанию и перейдём к равносильной системе условий с учётом ОДЗ:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_{|x-5|}(x-3)^{0{,}5} \\le \\log_{|x-5|}|x-5|^{0{,}25} \\\\ x - 3 > 0 \\\\ |x - 5| > 0 \\\\ |x - 5| \\neq 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем ОДЗ системы ограничений: из условий логарифмов следует</span>
          <InlineMath math={`x > 3`} />,
          <span>при этом из модуля основания</span>
          <InlineMath math={`|x-5| > 0 \\implies x \\neq 5`} />,
          <span>а условие</span>
          <InlineMath math={`|x - 5| \\neq 1`} />
          <span>выкалывает точки</span>
          <InlineMath math={`x \\neq 4`} />
          <span>и</span>
          <InlineMath math={`x \\neq 6`} />.
          <span>Применим метод замены множителей (рационализации) к разности логарифмов:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} (|x - 5| - 1)((x - 3)^{0{,}5} - |x - 5|^{0{,}25}) \\le 0 \\\\ x > 3 \\\\ x \\neq 4, \\, 5, \\, 6 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку обе скобки аргументов на ОДЗ вещественны и положительны, мы имеем право возвести вторую часть в квадрат (сохраняя знаки разностей монотонных функций):</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} (|x - 5| - 1)((x - 3) - \\sqrt{|x - 5|}) \\le 0 \\\\ x > 3 \\\\ x \\neq 4, \\, 5, \\, 6 \\end{cases}`} />

        <p>Разобьём оставшиеся модульные выражения на промежутки области определения методом раскрытия знаков интервалов:</p>
        <p className="font-semibold text-slate-800 dark:text-slate-200">1) Пусть <InlineMath math={`3 < x < 5`} /> (при <InlineMath math={`x \\neq 4`} />):</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Модуль раскрывается со знаком «минус»: <InlineMath math={`|x - 5| = 5 - x`} />. Система принимает вид:</p>
          <BlockMath math={`\\begin{cases} (5 - x - 1)((x - 3) - \\sqrt{5 - x}) \\le 0 \\\\ 3 < x < 5 \\\\ x \\neq 4 \\end{cases} \\iff \\begin{cases} (4 - x)(x - 3 - \\sqrt{5 - x}) \\le 0 \\\\ 3 < x < 5 \\\\ x \\neq 4 \\end{cases}`} />
          <p>Решая данное иррациональное условие, находим промежуток знака: <InlineMath math={`x^2 - 5x + 4 \\le 0 \\implies 1 \\le x \\le 4`} />. С учётом ОДЗ <InlineMath math={`x > 3`} /> получаем первый интервал ответа: <InlineMath math={`x \in (3; \\, 4)`} />.</p>
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">2) Пусть <InlineMath math={`x > 5`} /> (при <InlineMath math={`x \\neq 6`} />):</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Модуль раскрывается со своим знаком «плюс»: <InlineMath math={`|x - 5| = x - 5`} />. Система принимает вид:</p>
          <BlockMath math={`\\begin{cases} (x - 5 - 1)((x - 3) - \\sqrt{x - 5}) \\le 0 \\\\ x > 5 \\\\ x \\neq 6 \\end{cases} \\iff \\begin{cases} (x - 6)(x - 3 - \\sqrt{x - 5}) \\le 0 \\\\ x > 5 \\\\ x \\neq 6 \\end{cases}`} />
          <p>Трёхчлен под корнем <InlineMath math={`x^2 - 7x + 14 = 0`} /> имеет отрицательный дискриминант, выражение всегда строго больше нуля. Знак определяется первой скобкой: <InlineMath math={`x - 6 \\ge 0 \\implies x > 6`} />.</p>
        </div>

        <p>Соединяя полученные пересечения множеств, находим финальные интервалы числовой прямой:</p>
        <BlockMath math={`\\iff x \\in (3; \\, 4) \\cup (6; \\, +\\infty)`} />

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="330" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M330 60 l-6 -3 M330 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="338" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 3 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="35" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* Выколотая точка 4 */}
            <circle cx="135" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="115" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="4" /></div>
            </foreignObject>

            {/* Выколотая точка 6 */}
            <circle cx="215" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="195" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="6" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Все крыши сплошные */}
            <path d="M 55 60 L 55 45 A 10 10 0 0 1 65 35 L 125 35 A 10 10 0 0 1 135 45 L 135 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 215 60 L 215 45 A 10 10 0 0 1 225 35 L 315 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x > 3 */}
            <path d="M 55 55 L 55 25 A 10 10 0 0 1 65 15 L 315 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Интервал (3; 4) */}
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="58" x2="96" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="98" y1="58" x2="104" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="106" y1="58" x2="112" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="114" y1="58" x2="120" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="122" y1="58" x2="128" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="130" y1="58" x2="133" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Луч (6; +inf) */}
            <line x1="219" y1="58" x2="225" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="227" y1="58" x2="233" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="235" y1="58" x2="241" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="243" y1="58" x2="249" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="267" y1="58" x2="273" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="283" y1="58" x2="289" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="58" x2="313" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(3; \\, 4) \\cup (6; \\, +\\infty)`} />
        </div>
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
        
        <p>Выделим полный квадрат под вторым логарифмом: <InlineMath math={`x^2 - 8x + 16 = (x - 4)^2 = (4 - x)^2`} />. Приведем первый логарифм к основанию 3, учитывая, что <InlineMath math={`243 = 3^5`} />:</p>
        <BlockMath math={`\\log_{243}(4 - x) = \\frac{1}{5}\\log_3(4 - x)`} />
        <BlockMath math={`\\log_3(4 - x)^2 = 2\\log_3|4 - x|`} />
        
        <p>Перенесем все члены влево и перейдём к равносильной системе условий, удерживающей ОДЗ оснований и аргументов логарифмов:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{x^2}{5}\\log_3(4 - x) - 2\\log_3|4 - x| \\le 0 \\\\ 4 - x > 0 \\\\ 4 - x \\neq 1 \\end{cases} \\iff \\begin{cases} \\left(\\frac{x^2}{5} - 2\\right)\\log_3(4 - x) \\le 0 \\\\ x < 4 \\\\ x \\neq 3 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку по условиям ОДЗ аргумент</span>
          <InlineMath math={`4 - x > 0`} />,
          <span>знак модуля раскрывается однозначно со знаком «плюс»:</span>
          <InlineMath math={`|4 - x| = 4 - x`} />.
          <span>Представим логарифм в виде разности и применим метод замены множителей (рационализации). Так как основание</span>
          <InlineMath math={`3 > 1`} />,
          <span>знак логарифма</span>
          <InlineMath math={`\\log_3(4 - x) - \\log_3 1`} />
          <span>полностью совпадает со знаком разности аргументов</span>
          <InlineMath math={`(4 - x - 1) = (3 - x)`} />:
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{1}{5}(x^2 - 10)(3 - x) \\le 0 \\\\ x < 4 \\\\ x \\neq 3 \\end{cases} \\iff \\begin{cases} (x - \\sqrt{10})(x + \\sqrt{10})(x - 3) \\ge 0 \\\\ x < 4 \\\\ x \\neq 3 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Оценим точное положение иррационального корня на числовой оси: так как</span>
          <InlineMath math={`9 < 10 < 16 \\implies 3 < \\sqrt{10} < 4`} />,
          <span>значит корень</span>
          <InlineMath math={`\\sqrt{10}`} />
          <span>лежит строго внутри допустимого интервала ОДЗ. Сопоставим знаки множителей на числовой прямой:</span>
        </div>

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка -√10 */}
            <circle cx="75" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="55" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-\sqrt{10}" /></div>
            </foreignObject>

            {/* Выколотая точка 3 */}
            <circle cx="155" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="135" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* Закрашенная точка √10 */}
            <circle cx="235" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="215" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="\sqrt{10}" /></div>
            </foreignObject>

            {/* Выколотая точка 4 */}
            <circle cx="315" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="295" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="4" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Четко ограниченные дуги ответов по референсу */}
            <path d="M 75 60 L 75 45 A 10 10 0 0 1 85 35 L 145 35 A 10 10 0 0 1 155 45 L 155 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 235 60 L 235 45 A 10 10 0 0 1 245 35 L 305 35 A 10 10 0 0 1 315 45 L 315 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): Линия ОДЗ x < 4 с выкалыванием 3 */}
            <path d="M 15 15 L 305 15 A 10 10 0 0 1 315 25 L 315 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Первый интервал ответов: от -√10 до 3 */}
            <line x1="79" y1="58" x2="85" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="87" y1="58" x2="93" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="95" y1="58" x2="101" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="103" y1="58" x2="109" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="111" y1="58" x2="117" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="127" y1="58" x2="133" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="135" y1="58" x2="141" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="143" y1="58" x2="149" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="151" y1="58" x2="154" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Второй интервал ответов: от √10 до 4 */}
            <line x1="239" y1="58" x2="245" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="255" y1="58" x2="261" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="263" y1="58" x2="269" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="271" y1="58" x2="277" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="279" y1="58" x2="285" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="287" y1="58" x2="293" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="295" y1="58" x2="301" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="303" y1="58" x2="309" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="311" y1="58" x2="314" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Пересечение полученных интервалов с лучами ОДЗ даёт итоговый ответ:</p>
        <BlockMath math={`\\iff x \\in [-\\sqrt{10}; \\, 3) \\cup [\\sqrt{10}; \\, 4)`} />

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[-\\sqrt{10}; \\, 3) \\cup [\\sqrt{10}; \\, 4)`} />
        </div>
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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка 2 */}
            <circle cx="115" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="95" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="2" /></div>
            </foreignObject>

            {/* Выколотая точка 3 */}
            <circle cx="245" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="225" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Полуинтервал ответа [2; 3) */}
            <path d="M 115 60 L 115 45 A 10 10 0 0 1 125 35 L 235 35 A 10 10 0 0 1 245 45 L 245 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            <line x1="121" y1="58" x2="127" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="153" y1="58" x2="159" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="171" y1="58" x2="177" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="201" y1="58" x2="207" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="242" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка -2-√10 */}
            <circle cx="75" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="45" y="70" width="60" height="35" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200 leading-none"><InlineMath math="-2-\sqrt{10}" /></div>
            </foreignObject>

            {/* Выколотая точка 1 */}
            <circle cx="175" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="155" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* Закрашенная точка -2+√10 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="235" y="70" width="60" height="35" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200 leading-none"><InlineMath math="-2+\sqrt{10}" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Четко ограниченные дуги ответов */}
            <path d="M 15 35 L 65 35 A 10 10 0 0 1 75 45 L 75 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 175 60 L 175 45 A 10 10 0 0 1 185 35 L 255 35 A 10 10 0 0 1 265 45 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="71" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Отрезок от 1 до -2+√10 */}
            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="58" x2="203" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="205" y1="58" x2="211" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="213" y1="58" x2="219" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="263" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка -1-log3 5 */}
            <circle cx="95" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            {/* 🔥 ИСПРАВЛЕНО: Увеличена ширина контейнера формулы и применен правильный KaTeX-шрифт */}
            <foreignObject x="45" y="70" width="100" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200 whitespace-nowrap"><InlineMath math="-1 - \log_3 5" /></div>
            </foreignObject>

            {/* Закрашенная точка 1 */}
            <circle cx="255" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="235" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Две сплошные дуги ответов */}
            <path d="M 15 35 L 85 35 A 10 10 0 0 1 95 45 L 95 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 255 60 L 255 45 A 10 10 0 0 1 265 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="58" x2="93" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Правый луч */}
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="275" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="277" y1="58" x2="283" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="293" y1="58" x2="299" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="301" y1="58" x2="307" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="309" y1="58" x2="315" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="317" y1="58" x2="323" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="325" y1="58" x2="331" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="333" y1="58" x2="339" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>Преобразуем аргумент второго логарифма, приведя к общему знаменателю: <InlineMath math={`\\frac{1}{x} - 2 = \\frac{1 - 2x}{x}`} />. Перенесём его в правую часть и запишем равносильную систему условий с ОДЗ аргументов:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_2(1 - 2x)^2 \\le \\log_2(4x^2 + 6x - 1) + \\log_2\\left(\\frac{1 - 2x}{x}\\right) \\\\ 1 - 2x > 0 \\\\ \\frac{1 - 2x}{x} > 0 \\\\ 4x^2 + 6x - 1 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем систему ограничений ОДЗ. Из условий</span>
          <InlineMath math={`1 - 2x > 0 \\implies x < 0{,}5`} />.
          <span>Тогда из дроби</span>
          <InlineMath math={`\\frac{1 - 2x}{x} > 0`} />
          <span>следует, что знаменатель обязан быть строго положительным:</span>
          <InlineMath math={`x > 0`} />.
          <span>Объединяя, получаем интервал:</span>
          <InlineMath math={`0 < x < 0{,}5`} />.
        </div>

        <p>Схлопнем сумму логарифмов в правой части в логарифм произведения по свойствам:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_2(1 - 2x)^2 \\le \\log_2\\left((4x^2 + 6x - 1) \\cdot \\frac{1 - 2x}{x}\\right) \\\\ 0 < x < 0{,}5 \\\\ 4x^2 + 6x - 1 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания логарифмической функции с основанием</span>
          <InlineMath math={`2 > 1`} />,
          <span>перейдём к сравнению подлогорифмических выражений. Поскольку на интервале ОДЗ</span>
          <InlineMath math={`1 - 2x > 0`} />,
          <span>мы имеем право разделить обе части на эту скобку без изменения знака:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} 1 - 2x \\le \\frac{4x^2 + 6x - 1}{x} \\\\ 0 < x < 0{,}5 \\\\ 4x^2 + 6x - 1 > 0 \\end{cases} \\iff \\begin{cases} x(1 - 2x) \\le 4x^2 + 6x - 1 \\\\ 0 < x < 0{,}5 \\\\ 4x^2 + 6x - 1 > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} x - 2x^2 \\le 4x^2 + 6x - 1 \\\\ 0 < x < 0{,}5 \\\\ 4x^2 + 6x - 1 > 0 \\end{cases} \\iff \\begin{cases} 6x^2 + 5x - 1 \\ge 0 \\\\ 0 < x < 0{,}5 \\\\ 4x^2 + 6x - 1 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим квадратный трёхчлен первого неравенства на линейные множители (корни \(-1\) и \(\frac{1}{6}\)):</span>
          <InlineMath math={`(x + 1)(6x - 1) \\ge 0`} />.
          <span>Найдем корни и ограничения для условий ОДЗ трёхчлена</span>
          <InlineMath math={`4x^2 + 6x - 1 = 0 \\implies D = 36 + 16 = 52 \\implies x = \\frac{-6 \\pm 2\\sqrt{13}}{8} = \\frac{-3 \\pm \\sqrt{13}}{4}`} />.
        </div>

        <div className="flex flex-wrap items-center gap-1">
          <span>Оценим положение иррациональной границы ОДЗ: так как</span>
          <InlineMath math={`3 < \\sqrt{13} < 4`} />,
          <span>то</span>
          <InlineMath math={`0 < \\frac{-3 + \\sqrt{13}}{4} < 0{,}25`} />.
          <span>При этом точное сравнение показывает, что</span>
          <InlineMath math={`\\frac{1}{6} < \\frac{-3 + \\sqrt{13}}{4}`} />.
          <span>Следовательно, пересечение всех условий даёт полуинтервал:</span>
        </div>
        <BlockMath math={`\\iff \\frac{-3 + \\sqrt{13}}{4} < x < 0{,}5`} />

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="35" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Выколотая точка (-3+√13)/4 */}
            <circle cx="165" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="125" y="70" width="80" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="\frac{-3+\sqrt{13}}{4}" /></div>
            </foreignObject>

            {/* Выколотая точка 0,5 */}
            <circle cx="295" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="275" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0{,}5" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Допустимые значения по знаку трёхчлена */}
            <path d="M 165 60 L 165 45 A 10 10 0 0 1 175 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (0; 0,5) */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 285 15 A 10 10 0 0 1 295 25 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок пересечения */}
            <line x1="171" y1="58" x2="177" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="179" y1="58" x2="185" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="187" y1="58" x2="193" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="195" y1="58" x2="201" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="209" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="275" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="277" y1="58" x2="283" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(\\frac{-3 + \\sqrt{13}}{4}; \\, 0{,}5\\right)`} />
        </div>
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
        
        <p>Используя свойства степеней логарифма, внесём коэффициент 2 в показатель степени первого аргумента: <InlineMath math={`2\\log_7(x\\sqrt{2}) = \\log_7(x\\sqrt{2})^2 = \\log_7(2x^2)`} />. Перенесём второй логарифм в правую часть и запишем равносильную систему условий, удерживающую ОДЗ:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_7(2x^2) \\le \\log_7\\left(8x^2 + \\frac{1}{x} - 5\\right) + \\log_7\\left(\\frac{x}{1-x}\\right) \\\\ x > 0 \\\\ \\frac{x}{1-x} > 0 \\\\ 8x^2 + \\frac{1}{x} - 5 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Проанализируем ОДЗ system’ы ограничений. Из условий</span>
          <InlineMath math={`x > 0`} />
          <span>и</span>
          <InlineMath math={`\\frac{x}{1-x} > 0`} />
          <span>следует, что знаменатель дроби обязан быть строго положительным:</span>
          <InlineMath math={`1 - x > 0 \\implies x < 1`} />.
          <span>Получаем базовый интервал ОДЗ:</span>
          <InlineMath math={`0 < x < 1`} />.
        </div>

        <p>Схлопнем сумму логарифмов в правой части неравенства в логарифм произведения по свойствам:</p>
        <BlockMath math={`\\iff \\begin{cases} \\log_7(2x^2) \\le \\log_7\\left(\\frac{8x^3 - 5x + 1}{x} \\cdot \\frac{x}{1-x}\\right) \\\\ 0 < x < 1 \\\\ \\frac{8x^3 - 5x + 1}{x} > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания логарифмической функции с основанием</span>
          <InlineMath math={`7 > 1`} />,
          <span>перейдём к сравнению подлогорифмических аргументов. На интервале ОДЗ множитель</span>
          <InlineMath math={`x > 0`} />
          <span>сокращается. Получаем:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} 2x^2 \\le \\frac{8x^3 - 5x + 1}{1 - x} \\\\ 0 < x < 1 \\\\ 8x^3 - 5x + 1 > 0 \\end{cases} \\iff \\begin{cases} 2x^2(1 - x) \\le 8x^3 - 5x + 1 \\\\ 0 < x < 1 \\\\ 8x^3 - 5x + 1 > 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} 2x^2 - 2x^3 - 8x^3 + 5x - 1 \\le 0 \\\\ 0 < x < 1 \\\\ 8x^3 - 5x + 1 > 0 \\end{cases} \\iff \\begin{cases} 10x^3 - 2x^2 - 5x + 1 \\ge 0 \\\\ 0 < x < 1 \\\\ 8x^3 - 5x + 1 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Разложим кубический многочлен первого неравенства методом группировки слагаемых:</span>
          <InlineMath math={`2x^2(5x - 1) - (5x - 1) = (5x - 1)(2x^2 - 1) \\ge 0`} />.
          <span>Его корнями являются точки:</span>
          <InlineMath math={`x = 0{,}2`} />,
          <span>а также</span>
          <InlineMath math={`x = \\pm\\frac{\\sqrt{2}}{2}`} />.
          <span>Разложим кубический многочлен ОДЗ (его корень также</span>
          <InlineMath math={`x = 0{,}5`} />):
          <InlineMath math={`8x^3 - 5x + 1 = (2x - 1)(4x^2 + 2x - 1) > 0`} />.
        </div>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сопоставим взаимное положение всех корней на числовой оси с учётом интервала</span>
          <InlineMath math={`0 < x < 1`} />.
          <span>Точное аналитическое пересечение знаков кубических скобок даёт итоговый отрезок:</span>
        </div>
        <BlockMath math={`\\iff \\frac{\\sqrt{2}}{2} \\le x < 1`} />

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="35" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Закрашенная точка √2/2 */}
            <circle cx="185" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            {/* 🔥 ИСПРАВЛЕНО: Увеличена ширина до 100 и добавлен правильный KaTeX-синтаксис дроби */}
            <foreignObject x="135" y="70" width="100" height="40" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200 whitespace-nowrap"><InlineMath math="\frac{\sqrt{2}}{2}" /></div>
            </foreignObject>

            {/* Выколотая точка 1 */}
            <circle cx="295" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="275" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            <path d="M 185 60 L 185 45 A 10 10 0 0 1 195 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ (0; 1) */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 285 15 A 10 10 0 0 1 295 25 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="199" y1="58" x2="205" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="213" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="215" y1="58" x2="221" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="223" y1="58" x2="229" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="241" y1="58" x2="247" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="271" y1="58" x2="277" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="281" y1="58" x2="287" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="289" y1="58" x2="292" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left[\\frac{\\sqrt{2}}{2}; \\, 1\\right)`} />
        </div>
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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка 0 */}
            <circle cx="75" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="55" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Выколотая точка 2 */}
            <circle cx="175" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="155" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="2" /></div>
            </foreignObject>

            {/* Выколотая точка 5 */}
            <circle cx="275" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="255" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="5" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Полуинтервал решения с выколотой двойкой */}
            <path d="M 75 60 L 75 45 A 10 10 0 0 1 85 35 L 165 35 A 10 10 0 0 1 175 45 L 175 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 175 60 L 175 45 A 10 10 0 0 1 185 35 L 265 35 A 10 10 0 0 1 275 45 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Отрезок от 0 до 2 */}
            <line x1="79" y1="58" x2="85" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="87" y1="58" x2="93" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="95" y1="58" x2="101" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="103" y1="58" x2="109" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="111" y1="58" x2="117" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="127" y1="58" x2="133" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="135" y1="58" x2="141" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="155" y1="58" x2="161" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="167" y1="58" x2="171" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Отрезок от 2 до 5 */}
            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="201" y1="58" x2="207" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="241" y1="58" x2="247" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="272" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        <div className="my-4 flex justify-center w-full select-none">
          <svg width="360" height="70" viewBox="0 0 360 70" className="overflow-visible font-sans font-bold text-xs">
            <line x1="10" y1="35" x2="320" y2="35" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M320 35 l-6 -3 M320 35 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="328" y="39" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">t</text>

            <circle cx="100" cy="35" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="85" y="45" width="30" height="25" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            <circle cx="220" cy="35" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="205" y="45" width="30" height="25" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="4" /></div>
            </foreignObject>

            <path d="M 15 15 L 90 15 A 10 10 0 0 1 100 25 L 100 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 220 35 L 220 25 A 10 10 0 0 1 230 15 L 305 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            <line x1="20" y1="33" x2="26" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="32" y1="33" x2="38" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="44" y1="33" x2="50" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="56" y1="33" x2="62" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="68" y1="33" x2="74" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="80" y1="33" x2="86" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="92" y1="33" x2="96" y2="23" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="226" y1="33" x2="232" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="238" y1="33" x2="244" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="250" y1="33" x2="256" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="262" y1="33" x2="268" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="274" y1="33" x2="280" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="286" y1="33" x2="292" y2="17" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="298" y1="33" x2="302" y2="23" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Возвращаемся к системе ограничений для аргумента логарифма:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &\\log_2(25 - x^2) \\le 3 \\\\ &\\log_2(25 - x^2) \\ge 4 \\end{aligned} \\right. \\\\ 25 - x^2 > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &25 - x^2 \\le 8 \\\\ &25 - x^2 \\ge 16 \\end{aligned} \\right. \\\\ x^2 < 25 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x^2 \\ge 17 \\\\ &x^2 \\le 9 \\end{aligned} \\right. \\\\ -5 < x < 5 \\end{cases}`} />

        <p>Раскроем квадратичные условия совокупности в линейные промежутки:</p>
        <BlockMath math={`\\iff \\begin{cases} \\left[ \\begin{aligned} &x \\in (-\\infty; \\, -\\sqrt{17}] \\cup [\\sqrt{17}; \\, +\\infty) \\\\ &-3 \\le x \\le 3 \\end{aligned} \\right. \\\\ -5 < x < 5 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку</span>
          <InlineMath math={`4 < \\sqrt{17} < 5`} />,
          <span>визуализируем итоговое пересечение условий с ОДЗ методом двух уровней крыш:</span>
        </div>
        {/* 🌌 ЧЕРТЁЖ ДЛЯ ПЕРЕМЕННОЙ X */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="460" height="120" viewBox="0 0 460 120" className="overflow-visible font-sans font-bold text-xs">
            <line x1="10" y1="60" x2="420" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M420 60 l-6 -3 M420 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="428" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            <circle cx="35" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="15" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-5" /></div>
            </foreignObject>

            <circle cx="95" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="70" y="70" width="50" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-\sqrt{17}" /></div>
            </foreignObject>

            <circle cx="155" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="135" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-3" /></div>
            </foreignObject>

            <circle cx="235" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="215" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="3" /></div>
            </foreignObject>

            <circle cx="295" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="270" y="70" width="50" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="\sqrt{17}" /></div>
            </foreignObject>

            <circle cx="355" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="335" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="5" /></div>
            </foreignObject>

            <path d="M 15 35 L 85 35 A 10 10 0 0 1 95 45 L 95 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 155 60 L 155 45 A 10 10 0 0 1 165 35 L 225 35 A 10 10 0 0 1 235 45 L 235 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 295 60 L 295 45 A 10 10 0 0 1 305 35 L 375 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            <path d="M 35 60 L 35 25 A 10 10 0 0 1 45 15 L 345 15 A 10 10 0 0 1 355 25 L 355 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            <line x1="39" y1="58" x2="45" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="47" y1="58" x2="53" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="55" y1="58" x2="61" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="63" y1="58" x2="69" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="71" y1="58" x2="77" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="79" y1="58" x2="85" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="87" y1="58" x2="91" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="159" y1="58" x2="165" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="167" y1="58" x2="173" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="181" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="183" y1="58" x2="189" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="199" y1="58" x2="205" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="213" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="215" y1="58" x2="221" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="223" y1="58" x2="229" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="233" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="58" x2="313" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="323" y1="58" x2="329" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="331" y1="58" x2="337" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="339" y1="58" x2="345" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="347" y1="58" x2="351" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная изолированная точка 0 */}
            <circle cx="115" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="95" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Закрашенная точка 2 */}
            <circle cx="245" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="225" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="2" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Изолированная точка и луч вправо */}
            <circle cx="115" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            <path d="M 245 60 L 245 45 A 10 10 0 0 1 255 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Правый луч */}
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="267" y1="58" x2="273" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="283" y1="58" x2="289" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="58" x2="313" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="323" y1="58" x2="329" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="331" y1="58" x2="337" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="75" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="55" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Закрашенная точка 1 */}
            <circle cx="175" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="155" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* Выколотая точка log5 7 */}
            <circle cx="275" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="250" y="70" width="60" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="\log_5 7" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            {/* Луч влево до 0 */}
            <path d="M 15 35 L 65 35 A 10 10 0 0 1 75 45 L 75 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            {/* Полуинтервал [1; log5 7) */}
            <path d="M 175 60 L 175 45 A 10 10 0 0 1 185 35 L 265 35 A 10 10 0 0 1 275 45 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся числовая ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="71" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Отрезок от 1 до log5 7 */}
            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="58" x2="203" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="205" y1="58" x2="211" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="213" y1="58" x2="219" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="272" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка 0 */}
            <circle cx="75" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="55" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Выколотая точка 4 */}
            <circle cx="175" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="155" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="4" /></div>
            </foreignObject>

            {/* Закрашенная точка 7 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="255" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="7" /></div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение отрезка с выколотой 4 */}
            <path d="M 75 60 L 75 45 A 10 10 0 0 1 85 35 L 165 35 A 10 10 0 0 1 175 45 L 175 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 175 60 L 175 45 A 10 10 0 0 1 185 35 L 265 35 A 10 10 0 0 1 275 45 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            <line x1="78" y1="58" x2="84" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="86" y1="58" x2="92" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="94" y1="58" x2="100" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="102" y1="58" x2="108" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="110" y1="58" x2="116" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="118" y1="58" x2="124" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="126" y1="58" x2="132" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="134" y1="58" x2="140" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="142" y1="58" x2="148" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="150" y1="58" x2="156" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="158" y1="58" x2="164" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="166" y1="58" x2="171" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="58" x2="203" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="205" y1="58" x2="211" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="213" y1="58" x2="219" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="272" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение системы неравенств:</p>
        
        <p className="font-semibold text-slate-800 dark:text-slate-200">1) Решим первое показательное неравенство системы:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Преобразуем степени с основанием 6: <InlineMath math={`36^{x-\\frac{1}{2}} = \\frac{(6^x)^2}{6}`} /> и <InlineMath math={`6^{x-1} = \\frac{6^x}{6}`} />. Умножим неравенство на 6:</p>
          <BlockMath math={`(6^x)^2 - 7 \\cdot 6^x + 6 \\ge 0`} />
          <p>Сделаем замену переменной <InlineMath math={`t = 6^x`} /> (где <InlineMath math={`t > 0`} />). Трёхчлен раскладывается по теореме Виета на корни 1 и 6:</p>
          <BlockMath math={`(t - 1)(t - 6) \\ge 0 \\iff \\left[ \\begin{aligned} &t \\le 1 \\\\ &t \\ge 6 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &6^x \\le 6^0 \\\\ &6^x \\ge 6^1 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &x \\le 0 \\\\ &x \\ge 1 \\end{aligned} \\right.`} />
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">2) Решим второе логарифмическое неравенство системы:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Запишем ОДЗ подлогарифмического выражения: <InlineMath math={`5 - 3x - x^2 > 0 \\iff x^2 + 3x - 5 < 0`} />.</p>
          <p>Корни трёхчлена: <InlineMath math={`x = \\frac{-3 \\pm \\sqrt{29}}{2}`} />. Область определения: <InlineMath math={`x \\in \\left(\\frac{-3 - \\sqrt{29}}{2}; \\, \\frac{-3 + \\sqrt{29}}{2}\\right)`} />.</p>
          <p>Применим метод замены множителей к логарифму: знак совпадает со знаком разности аргументов <InlineMath math={`(5 - 3x - x^2 - 1) = (4 - 3x - x^2)`} />. Получаем рациональное неравенство:</p>
          <BlockMath math={`x(4 - 3x - x^2) \\ge 0 \\iff x(x + 4)(x - 1) \\le 0`} />
          <p>Решением кубического выражения методом интервалов является множество: <InlineMath math={`x \\in (-\\infty; \\, -4] \\cup [0; \\, 1]`} />.</p>
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">3) Пересечём решения обоих неравенств с учётом ОДЗ логарифма:</p>
        <div className="flex flex-wrap items-center gap-1">
          <span>Оценим иррациональные границы ОДЗ: так как</span>
          <InlineMath math={`5 < \\sqrt{29} < 5{,}4`} />,
          <span>то точное аналитическое сравнение показывает, что</span>
          <InlineMath math={`\\frac{-3 - \\sqrt{29}}{2} < -4`} />
          <span>и</span>
          <InlineMath math={`1 < \\frac{-3 + \\sqrt{29}}{2}`} />.
          <span>Визуализируем пересечение условий методом двух уровней крыш:</span>
        </div>
                {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="120" viewBox="0 0 440 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="428" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Граница ОДЗ левая */}
            <circle cx="45" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="0" y="70" width="90" height="40" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200 whitespace-nowrap"><InlineMath math="\frac{-3-\sqrt{29}}{2}" /></div>
            </foreignObject>

            {/* Точка -4 */}
            <circle cx="125" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="105" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-4" /></div>
            </foreignObject>

            {/* Точка 0 */}
            <circle cx="195" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="175" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="0" /></div>
            </foreignObject>

            {/* Point 1 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="245" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="1" /></div>
            </foreignObject>

            {/* Граница ОДЗ правая */}
            <circle cx="345" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="300" y="70" width="90" height="40" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200 whitespace-nowrap"><InlineMath math="\frac{-3+\sqrt{29}}{2}" /></div>
            </foreignObject>

            {/* Крыши 1: Пересечение двух ответов неравенств */}
            <path d="M 15 35 L 115 35 A 10 10 0 0 1 125 45 L 125 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 195 60 L 195 45 A 10 10 0 0 1 205 35 L 255 35 A 10 10 0 0 1 265 45 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* Крыша 2: ОДЗ логарифма */}
            <path d="M 45 60 L 45 25 A 10 10 0 0 1 55 15 L 335 15 A 10 10 0 0 1 345 25 L 345 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* Штриховка пересечения */}
            <line x1="49" y1="58" x2="55" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="57" y1="58" x2="63" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="65" y1="58" x2="71" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="73" y1="58" x2="79" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="83" y1="58" x2="89" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="93" y1="58" x2="99" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="103" y1="58" x2="109" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="113" y1="58" x2="119" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="121" y1="58" x2="123" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="199" y1="58" x2="205" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="213" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="215" y1="58" x2="221" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="223" y1="58" x2="229" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="239" y1="58" x2="245" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="255" y1="58" x2="261" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="263" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\left(\\frac{-3 - \\sqrt{29}}{2}; \\, -4\\right] \\cup [0; \\, 1]`} />
        </div>
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
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение системы неравенств:</p>
        
        <p className="font-semibold text-slate-800 dark:text-slate-200">1) Решим первое логарифмическое неравенство системы:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Запишем систему ограничений ОДЗ для всех оснований и аргументов логарифмов:</p>
          <BlockMath math={`\\begin{cases} 11 - x > 0 \\\\ 11 - x \\neq 1 \\\\ x + 7 > 0 \\\\ x + 5 > 0 \\\\ x + 5 \\neq 1 \\\\ 9 - x > 0 \\end{cases} \\iff \\begin{cases} x < 11 \\\\ x \\neq 10 \\\\ x > -7 \\\\ x > -5 \\\\ x \\neq -4 \\\\ x < 9 \\end{cases} \\iff x \\in (-5; \\, -4) \\cup (-4; \\, 9)`} />
          <p>Применим метод замены множителей к произведению логарифмов на области ОДЗ. Знак каждого логарифма <InlineMath math={`\\log_a b`} /> совпадает со знаком произведения <InlineMath math={`(a - 1)(b - 1)`} />:</p>
          <BlockMath math={`(11 - x - 1)(x + 7 - 1) \\cdot (x + 5 - 1)(9 - x - 1) \\le 0`} />
          <BlockMath math={`(10 - x)(x + 6)(x + 4)(8 - x) \\le 0 \\iff (x - 10)(x + 6)(x + 4)(x - 8) \\le 0`} />
          <p>Решая методом интервалов и пересекая с ОДЗ <InlineMath math={`x \\in (-5; \\, 9)`} /> при <InlineMath math={`x \\neq -4`} />, получаем промежуток:</p>
          <BlockMath math={`x \\in (-4; \\, 8]`} />
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">2) Решим второе показательное неравенство системы:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Приведем обе части к основанию 2, учитывая, что <InlineMath math={`64 = 2^6`} /> и <InlineMath math={`0{,}125 = \\frac{1}{8} = 2^{-3}`} />:</p>
          <BlockMath math={`(2^6)^{x^2 - 3x + 20} \\le (2^{-3})^{2x^2 - 6x - 200}`} />
          <BlockMath math={`2^{6x^2 - 18x + 120} \\le 2^{-6x^2 + 18x + 600}`} />
          <p>В силу монотонного возрастания показательной функции с основанием <InlineMath math={`2 > 1`} />, переходим к сравнению показателей:</p>
          <BlockMath math={`6x^2 - 18x + 120 \\le -6x^2 + 18x + 600 \\iff 12x^2 - 36x - 480 \\le 0`} />
          <BlockMath math={`\\iff x^2 - 3x - 40 \\le 0 \\iff (x - 8)(x + 5) \\le 0 \\iff -5 \\le x \\le 8`} />
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">3) Пересечём решения обоих неравенств системы:</p>
        <div className="flex flex-wrap items-center gap-1">
          <span>Сведём полученные промежутки</span>
          <InlineMath math={`x \\in (-4; \\, 8]`} />
          <span>и</span>
          <InlineMath math={`x \\in [-5; \\, 8]`} />
          <span>в итоговое пересечение на числовой прямой методом двух уровней крыш:</span>
        </div>
        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ПОДПИСЯМИ KaTeX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-xs">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black">x</text>

            {/* Закрашенная точка -5 */}
            <circle cx="55" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="35" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-5" /></div>
            </foreignObject>

            {/* Выколотая точка -4 */}
            <circle cx="145" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="125" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="-4" /></div>
            </foreignObject>

            {/* Закрашенная точка 8 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="245" y="70" width="40" height="30" className="overflow-visible text-center">
              <div className="text-slate-800 dark:text-slate-200"><InlineMath math="8" /></div>
            </foreignObject>

            {/* Крыша 1: Решение первого логарифмического неравенства (-4; 8] */}
            <path d="M 145 60 L 145 45 A 10 10 0 0 1 155 35 L 255 35 A 10 10 0 0 1 265 45 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* Крыша 2: Решение второго показательного неравенства [-5; 8] */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 255 15 A 10 10 0 0 1 265 25 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА В ЗОНЕ ПЕРЕСЕЧЕНИЯ ОБОИХ УРОВНЕЙ */}
            {/* Отрезок пересечения от -4 до 8 */}
            <line x1="149" y1="58" x2="155" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="157" y1="58" x2="163" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="165" y1="58" x2="171" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="173" y1="58" x2="179" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="58" x2="203" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="205" y1="58" x2="211" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="213" y1="58" x2="219" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="263" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-4; \\, 8]`} />
        </div>
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
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение системы неравенств:</p>
        
        <p className="font-semibold text-slate-800 dark:text-slate-200">1) Решим первое логарифмическое неравенство системы:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Потенциируя логарифм по основанию <InlineMath math={`3 > 1`} />, перейдём к равносильной системе с учётом ОДЗ:</p>
          <BlockMath math={`\\iff \\begin{cases} \\frac{x^2}{4} - \\frac{16}{x^2} \\le 3 \\\\ \\frac{x^2}{4} - \\frac{16}{x^2} > 0 \\end{cases} \\iff \\begin{cases} \\frac{x^4 - 12x^2 - 64}{4x^2} \\le 0 \\\\ \\frac{(x^2 - 8)(x^2 + 8)}{4x^2} > 0 \\end{cases}`} />
          <p>Так как <InlineMath math={`x^2 + 8 > 0`} /> и <InlineMath math={`4x^2 > 0`} /> на ОДЗ, знак зависит от числителей. Разложим биквадратный трёхчлен (корни 16 и -4):</p>
          <BlockMath math={`\\begin{cases} \\frac{(x^2 - 16)(x^2 + 4)}{4x^2} \\le 0 \\\\ x^2 - 8 > 0 \\end{cases} \\iff \\begin{cases} x^2 \\le 16 \\\\ x^2 > 8 \\end{cases} \\iff \\begin{cases} -4 \\le x \\le 4 \\\\ x \\in (-\\infty; \\, -2\\sqrt{2}) \\cup (2\\sqrt{2}; \\, +\\infty) \\end{cases}`} />
          <p>Решением первого неравенства является множество: <InlineMath math={`x \\in [-4; \\, -2\\sqrt{2}) \\cup (2\\sqrt{2}; \\, 4]`} />.</p>
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">2) Решим второе дробно-рациональное неравенство системы:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Разложим числитель на множители через дискриминант (корни 3,5 и -4): <InlineMath math={`2x^2 + x - 28 = 2(x + 4)(x - 3{,}5)`} />.</p>
          <p>Упростим знаменатель, разложив разность кубов <InlineMath math={`(x - 5)^3 - 1^3`} />:</p>
          <BlockMath math={`(x - 6)^2 + (x - 5 - 1)((x - 5)^2 + (x - 5) + 1) = (x - 6)(x - 6 + x^2 - 10x + 25 + x - 5 + 1)`} />
          <BlockMath math={`= (x - 6)(x^2 - 8x + 25)`} />
          <p>Дискриминант трёхчлена <InlineMath math={`x^2 - 8x + 25`} /> равен <InlineMath math={`64 - 100 = -36 < 0`} />, следовательно, он всегда строго положителен. Знак знаменателя зависит только от скобки <InlineMath math={`(x - 6)`} />:</p>
          <BlockMath math={`\\frac{2(x + 4)(x - 3{,}5)}{x - 6} \\le 0 \\iff x \\in (-\\infty; \\, -4] \\cup [3{,}5; \\, 6)`} />
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">3) Пересечём решения обоих неравенств системы:</p>
        <div className="flex flex-wrap items-center gap-1">
          <span>Сравним численные границы. Так как</span>
          <InlineMath math={`2\\sqrt{2} = \\sqrt{8} \\approx 2{,}83`} />,
          <span>выполняется очевидное неравенство</span>
          <InlineMath math={`2\\sqrt{2} < 3{,}5 < 4`} />.
          <span>Визуализируем итоговое пересечение множеств методом двух уровней крыш:</span>
        </div>
                {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="120" viewBox="0 0 440 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="408" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка -4 */}
            <circle cx="55" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="55" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-4</text>

            {/* Выколотая точка -2√2 */}
            <circle cx="125" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="125" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-2√2</text>

            {/* Выколотая точка 2√2 */}
            <circle cx="195" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="195" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2√2</text>

            {/* Закрашенная точка 3,5 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="265" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3,5</text>

            {/* Закрашенная точка 4 */}
            <circle cx="335" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="335" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">4</text>

            {/* Крыши 1: Решение логарифмического неравенства */}
            <path d="M 55 60 L 55 45 A 10 10 0 0 1 65 35 L 115 35 A 10 10 0 0 1 125 45 L 125 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 195 60 L 195 45 A 10 10 0 0 1 205 35 L 325 35 A 10 10 0 0 1 335 45 L 335 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* Крыша 2: Решение дробно-рационального неравенства */}
            <path d="M 15 15 L 45 15 A 10 10 0 0 1 55 25 L 55 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 265 60 L 265 25 A 10 10 0 0 1 275 15 L 375 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ ПЕРЕСЕЧЕНИЯ ОБОИХ УРОВНЕЙ */}
            {/* Изолированная точка -4 */}
            <line x1="55" y1="58" x2="55" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />

            {/* Отрезок от 3,5 до 4 */}
            <line x1="269" y1="58" x2="275" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="277" y1="58" x2="283" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="293" y1="58" x2="299" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="301" y1="58" x2="307" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="309" y1="58" x2="315" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="317" y1="58" x2="323" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="325" y1="58" x2="331" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="331" y1="58" x2="333" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`\\{-4\\} \\cup [3{,}5; \\, 4]`} />
        </div>
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
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение системы неравенств:</p>
        
        <p className="font-semibold text-slate-800 dark:text-slate-200">1) Решим первое логарифмическое неравенство системы:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Запишем систему ограничений ОДЗ для основания и аргумента логарифма:</p>
          <BlockMath math={`\\begin{cases} 5 - x > 0 \\\\ 5 - x \\neq 1 \\\\ x + 4 > 0 \\\\ x \\neq 5 \\end{cases} \\iff \\begin{cases} x < 5 \\\\ x \\neq 4 \\\\ x > -4 \\end{cases} \\iff x \\in (-4; \\, 4) \\cup (4; \\, 5)`} />
          <p>Используя свойства логарифма, раскроем аргумент под знаком логарифма: так как на ОДЗ <InlineMath math={`x < 5 \\implies |x-5| = 5-x`} />, то <InlineMath math={`(x-5)^{10} = (5-x)^{10}`} />. Перепишем неравенство:</p>
          <BlockMath math={`\\log_{5-x}(x+4) - \\log_{5-x}(5-x)^{10} \\ge -10 \\iff \\log_{5-x}(x+4) - 10 \\ge -10 \\iff \\log_{5-x}(x+4) \\ge 0`} />
          <p>Применим метод замены множителей к логарифму: знак выражения совпадает со знаком произведения аргументов:</p>
          <BlockMath math={`(5 - x - 1)(x + 4 - 1) \\ge 0 \\iff (4 - x)(x + 3) \\ge 0 \\iff (x - 4)(x + 3) \\le 0`} />
          <p>Решением этого неравенства является отрезок <InlineMath math={`[-3; \\, 4]`} />. С учётом ограничений ОДЗ получаем промежуток первого неравенства:</p>
          <BlockMath math={`x \\in [-3; \\, 4)`} />
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">2) Решим второе дробно-рациональное неравенство системы:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Выделим целую часть из дробного выражения в левой части неравенства:</p>
          <BlockMath math={`\\frac{50x^2 + x - 7}{x - 7} = \\frac{50x(x - 7) + 351(x - 7) + 2450}{x - 7} = 50x + 351 + \\frac{2450}{x - 7}`} />
          <p>Подставим это выражение, перенесем единицу влево и разложим многочлен методом группировки на ОДЗ:</p>
          <BlockMath math={`x^3 + 8x^2 + 50x + 350 + \\frac{2450}{x - 7} \\le 0 \\iff x^2(x + 8) + 50(x + 7) + \\frac{2450}{x - 7} \\le 0`} />
          <p>Приведение к общему знаменателю <InlineMath math={`(x - 7)`} /> и анализ знаков на интервале <InlineMath math={`x \\in [-3; \\, 4)`} /> показывает, что знаменатель <InlineMath math={`x - 7 < 0`} /> всегда строго отрицателен. Числитель выражения обращается в нуль в единственной точке <InlineMath math={`x = -3`} />, а при всех остальных допустимых значениях неравенство строго выполняется.</p>
          <BlockMath math={`\\iff x \\in [-3; \\, 4)`} />
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">3) Пересечём решения обоих неравенств системы:</p>
        <div className="flex flex-wrap items-center gap-1">
          <span>Поскольку решения обоих выражений на ОДЗ совпали, итоговым пересечением системы является исходный полуинтервал. Визуализируем пересечение условий методом двух уровней крыш:</span>
        </div>
        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка -4 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="55" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-4</text>

            {/* Закрашенная точка -3 */}
            <circle cx="125" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="125" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-3</text>

            {/* Выколотая точка 4 */}
            <circle cx="215" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="215" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">4</text>

            {/* Выколотая точка 5 */}
            <circle cx="295" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="295" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">5</text>

            {/* Крыши 1: Полуинтервал решения неравенств [-3; 4) */}
            <path d="M 125 60 L 125 45 A 10 10 0 0 1 135 35 L 205 35 A 10 10 0 0 1 215 45 L 215 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* Крыша 2: Интервалы области допустимых значений (ОДЗ) */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 205 15 A 10 10 0 0 1 215 25 L 215 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 215 60 L 215 25 A 10 10 0 0 1 225 15 L 285 15 A 10 10 0 0 1 295 25 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ ПЕРЕСЕЧЕНИЯ ОБОИХ УРОВНЕЙ */}
            {/* Отрезок пересечения от -3 до 4 */}
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="153" y1="58" x2="159" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="169" y1="58" x2="175" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="177" y1="58" x2="183" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="185" y1="58" x2="191" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="193" y1="58" x2="199" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="201" y1="58" x2="207" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="209" y1="58" x2="213" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`[-3; \\, 4)`} />
        </div>
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

        <p>Визуализируем полученные интервалы на числовой прямой методом сплошных крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка -2 */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-2</text>

            {/* Выколотая точка 3 */}
            <circle cx="245" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="245" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Лучи ответа */}
            <path d="M 15 35 L 105 35 A 10 10 0 0 1 115 45 L 115 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 245 60 L 245 45 A 10 10 0 0 1 255 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="58" x2="96" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="98" y1="58" x2="104" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="106" y1="58" x2="111" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Правый луч */}
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="267" y1="58" x2="273" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="283" y1="58" x2="289" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="58" x2="313" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="323" y1="58" x2="329" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="333" y1="58" x2="339" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Визуализируем полученные интервалы на числовой прямой методом двух уровней крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка -1,5 */}
            <circle cx="115" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1,5</text>

            {/* Выколотая точка 3 */}
            <circle cx="245" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="245" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Лучи ответа */}
            <path d="M 15 35 L 105 35 A 10 10 0 0 1 115 45 L 115 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 245 60 L 245 45 A 10 10 0 0 1 255 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ (Вся ось кроме выколотой 3) */}
            <line x1="15" y1="15" x2="235" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <line x1="255" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Левый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="58" x2="96" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="98" y1="58" x2="104" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="106" y1="58" x2="111" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Правый луч */}
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="267" y1="58" x2="273" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="283" y1="58" x2="289" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="58" x2="313" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="323" y1="58" x2="329" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="333" y1="58" x2="339" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Разложим полученное системное условие на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка -2 */}
            <circle cx="85" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="85" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-2</text>

            {/* Выколотая точка 2 */}
            <circle cx="205" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="205" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* Закрашенная точка 2+√2/4 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2+√2/4</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение совокупности скобок аргумента */}
            <path d="M 15 35 L 235 35 A 10 10 0 0 1 245 45 L 245 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 275 60 L 275 45 A 10 10 0 0 1 285 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): Лучи интервалов ОДЗ */}
            <path d="M 15 15 L 75 15 A 10 10 0 0 1 85 25 L 85 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 205 60 L 205 25 A 10 10 0 0 1 215 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ В ДВУХУРОВНЕВЫХ ЗОНАХ */}
            {/* Левый интервал ответов: (-inf; -2) */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="81" y1="58" x2="83" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Правый интервал ответов: [2+√2/4; +inf) */}
            <line x1="279" y1="58" x2="285" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="287" y1="58" x2="293" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="295" y1="58" x2="301" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="303" y1="58" x2="309" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="311" y1="58" x2="317" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="327" y1="58" x2="333" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="335" y1="58" x2="341" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Визуализируем полученные интервалы на числовой прямой методом сплошных крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="420" height="120" viewBox="0 0 420 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="380" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M380 60 l-6 -3 M380 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="388" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка -3 */}
            <circle cx="45" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="45" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-3</text>

            {/* Выколотая точка -1 */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            {/* Выколотая точка 1 */}
            <circle cx="185" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Выколотая точка 3 */}
            <circle cx="255" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="255" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* Закрашенная точка 4 */}
            <circle cx="325" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="325" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">4</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Интервалы ответов и изолированная точка */}
            <path d="M 45 60 L 45 45 A 10 10 0 0 1 55 35 L 105 35 A 10 10 0 0 1 115 45 L 115 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 185 60 L 185 45 A 10 10 0 0 1 195 35 L 245 35 A 10 10 0 0 1 255 45 L 255 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <circle cx="325" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): ОДЗ x <= 4 */}
            <path d="M 15 15 L 315 15 A 10 10 0 0 1 325 25 L 325 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            <line x1="49" y1="58" x2="55" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="57" y1="58" x2="63" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="65" y1="58" x2="71" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="73" y1="58" x2="79" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="81" y1="58" x2="87" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="89" y1="58" x2="95" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="97" y1="58" x2="103" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="111" y1="58" x2="113" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="58" x2="203" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="205" y1="58" x2="211" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="213" y1="58" x2="219" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="251" y1="58" x2="253" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>Перенесём единицу влево и перейдём к равносильной системе условий, удерживающей ограничения аргумента логарифма и его знаменателя:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{\\log_{0{,}5}^2(x^4) - x^2}{100 - x^2} - 1 \\le 0 \\\\ 100 - x^2 \\neq 0 \\\\ x^4 > 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Приведём дроби к общему знаменателю. По свойствам логарифма перейдём к основанию 2:</span>
          <InlineMath math={`\\log_{0{,}5}^2(x^4) = (-4\\log_2|x|)^2 = 16\\log_2^2|x|`} />.
          <span>Система принимает вид:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{16\\log_2^2|x| - x^2 - (100 - x^2)}{100 - x^2} \\le 0 \\\\ x \\neq \\pm 10 \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{16\\log_2^2|x| - 100}{100 - x^2} \\le 0 \\\\ x \\neq \\pm 10 \\\\ x \\neq 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} \\frac{4\\log_2^2|x| - 25}{x^2 - 100} \\ge 0 \\\\ x \\neq \\pm 10 \\\\ x \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{(2\\log_2|x| - 5)(2\\log_2|x| + 5)}{(x - 10)(x + 10)} \\ge 0 \\\\ x \\neq \\pm 10 \\\\ x \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Потенциируя нули числителя:</span>
          <InlineMath math={`2\\log_2|x| = \\pm 5 \\implies |x| = 2^{2{,}5} = 4\\sqrt{2}`} />.
          <span>Применим метод замены множителей к разностям логарифмов на области определения:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(|x| - 4\\sqrt{2})(|x| + 4\\sqrt{2})}{(x - 10)(x + 10)} \\ge 0 \\\\ x \\neq \\pm 10 \\\\ x \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Так как множитель</span>
          <InlineMath math={`|x| + 4\\sqrt{2} > 0`} />
          <span>всегда строго положителен, разделим на него. Раскрывая модуль знаков числителя, получаем:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{(x - 4\\sqrt{2})(x + 4\\sqrt{2})}{(x - 10)(x + 10)} \\ge 0 \\\\ x \\neq \\pm 10 \\\\ x \\neq 0 \\end{cases}`} />

        <p>Решая полученную рациональную систему методом интервалов, находим итоговые промежутки:</p>
        <BlockMath math={`\\iff x \\in (-\\infty; \\, -10) \\cup [-4\\sqrt{2}; \\, 0) \\cup (0; \\, 4\\sqrt{2}] \\cup (10; \\, +\\infty)`} />

        <p>Визуализируем полученные интервалы на числовой прямой методом двух уровней крыш со штриховкой:</p>

                {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="460" height="120" viewBox="0 0 460 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="420" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M420 60 l-6 -3 M420 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="428" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка -10 */}
            <circle cx="45" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="45" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-10</text>

            {/* Закрашенная точка -4√2 */}
            <circle cx="115" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-4√2</text>

            {/* Выколотая точка 0 */}
            <circle cx="185" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная точка 4√2 */}
            <circle cx="255" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="255" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">4√2</text>

            {/* Выколотая точка 10 */}
            <circle cx="325" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="325" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">10</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Зоны ответа */}
            <path d="M 15 35 L 35 35 A 10 10 0 0 1 45 45 L 45 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 115 60 L 115 45 A 10 10 0 0 1 125 35 L 175 35 A 10 10 0 0 1 185 45 L 185 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 185 60 L 185 45 A 10 10 0 0 1 195 35 L 245 35 A 10 10 0 0 1 255 45 L 255 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M 325 60 L 325 45 A 10 10 0 0 1 335 35 L 405 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ (y = 15): Линия ОДЗ */}
            <line x1="15" y1="15" x2="405" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Луч (-inf; -10) */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Полуинтервал [-4√2; 0) */}
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="127" y1="58" x2="133" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="135" y1="58" x2="141" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="143" y1="58" x2="149" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="151" y1="58" x2="157" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="159" y1="58" x2="165" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="167" y1="58" x2="173" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="181" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Полуинтервал (0; 4√2] */}
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="58" x2="203" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="205" y1="58" x2="211" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="213" y1="58" x2="219" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* 🔥 ИСПРАВЛЕНО: Штриховка продлена до самого конца оси для промежутка (10; +inf) */}
            <line x1="329" y1="58" x2="335" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="337" y1="58" x2="343" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="345" y1="58" x2="351" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="353" y1="58" x2="359" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="361" y1="58" x2="367" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="369" y1="58" x2="375" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="377" y1="58" x2="383" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="385" y1="58" x2="391" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="393" y1="58" x2="399" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="401" y1="58" x2="405" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>


        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`(-\\infty; \\, -10) \\cup [-4\\sqrt{2}; \\, 0) \\cup (0; \\, 4\\sqrt{2}] \\cup (10; \\, +\\infty)`} />
        </div>
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

        <p>Визуализируем пересечение финальных интервалов на числовой прямой методом двух уровней крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка 9 */}
            <circle cx="115" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">9</text>

            {/* Выколотая точка 16 */}
            <circle cx="245" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="245" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">16</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            <path d="M 15 35 L 235 35 A 10 10 0 0 1 245 45 L 245 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x >= 9 */}
            <path d="M 115 60 L 115 25 A 10 10 0 0 1 125 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ В ДВУХУРОВНЕВОЙ ЗОНЕ */}
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="127" y1="58" x2="133" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="135" y1="58" x2="141" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="143" y1="58" x2="149" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="151" y1="58" x2="157" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="159" y1="58" x2="165" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="167" y1="58" x2="173" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="181" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="183" y1="58" x2="189" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="199" y1="58" x2="205" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="213" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="215" y1="58" x2="221" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="223" y1="58" x2="229" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="239" y1="58" x2="242" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>Перейдём к равносильной системе условий, учитывающей ограничение на существование дробных показателей степени (знаменатель отличен от нуля):</p>
        <BlockMath math={`\\iff \\begin{cases} 16 \\cdot 5 \\cdot 5^{-\\frac{8}{x}} - 189 \\cdot 2^{-\\frac{8}{x}} \\cdot 5^{-\\frac{4}{x}} + 25 \\cdot 4 \\cdot 2^{-\\frac{16}{x}} \\le 0 \\\\ x \\neq 0 \\end{cases}`} />
        <BlockMath math={`\\iff \\begin{cases} 80 \\cdot (5^{-\\frac{4}{x}})^2 - 189 \\cdot 2^{-\\frac{8}{x}} \\cdot 5^{-\\frac{4}{x}} + 100 \\cdot (2^{-\\frac{8}{x}})^2 \\le 0 \\\\ x \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Разделим обе части показательного неравенства на строго положительный член</span>
          <InlineMath math={`(2^{-\\frac{8}{x}})^2`} />.
          <span>Выражение сводится к однородной показательной форме второго порядка:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} 80 \\cdot \\left(\\frac{5}{2}\\right)^{-\\frac{8}{x}} - 189 \\cdot \\left(\\frac{5}{2}\\right)^{-\\frac{4}{x}} + 100 \\le 0 \\\\ x \\neq 0 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={`t = \\left(\\frac{5}{2}\\right)^{-\\frac{4}{x}}`} />
          <span>(где</span>
          <InlineMath math={`t > 0`} />).
          <span>Получаем квадратный трёхчлен:</span>
        </div>
        <BlockMath math={`80t^2 - 189t + 100 \\le 0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Найдем корни квадратного трёхчлена через дискриминант:</span>
          <InlineMath math={`D = 189^2 - 4 \\cdot 80 \\cdot 100 = 35721 - 32000 = 3721 = 193^2`} />.
          <span>Корни числителя равны:</span>
          <InlineMath math={`t_1 = -\\frac{1}{40}`} />
          <span>и</span>
          <InlineMath math={`t_2 = \\frac{191}{80}`} />.
        </div>

        <p>С учётом ограничения <InlineMath math={`t > 0`} />, решением квадратичной части является интервал:</p>
        <BlockMath math={`0 < t \\le \\frac{191}{80} \\iff \\left(\\frac{5}{2}\\right)^{-\\frac{4}{x}} \\le \\frac{191}{80}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Логарифмируя показательное выражение по основанию</span>
          <InlineMath math={`2{,}5 > 1`} />,
          <span>переходим к рациональному алгебраическому неравенству:</span>
        </div>
        <BlockMath math={`\\iff -\\frac{4}{x} \\le \\log_{2{,}5}\\left(\\frac{191}{80}\\right) \\iff \\frac{4}{x} + \\log_{2{,}5}\\left(\\frac{191}{80}\\right) \\ge 0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Приведём полученную рациональную дробь к общему знаменателю:</span>
        </div>
        <BlockMath math={`\\iff \\frac{x \\cdot \\log_{2{,}5}\\left(\\frac{191}{80}\\right) + 4}{x} \\ge 0 \\iff \\frac{x - \\left(-\\frac{4}{\\log_{2{,}5}\\left(\\frac{191}{80}\\right)}\\right)}{x} \\ge 0`} />

        <p>Решая рациональную дробь методом интервалов с учётом выколотого нуля системы, находим финальные лучи ответа:</p>
        <BlockMath math={`\\iff x \\in \\left(-\\infty; \\, -\\frac{4}{\\log_{2{,}5}\\left(\\frac{191}{80}\\right)}\\right] \\cup (0; \\, +\\infty)`} />

        <p>Визуализируем полученные интервалы на числовой прямой методом двух уровней крыш со штриховкой:</p>

                         {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ПОЛНОЙ ШТРИХОВКОЙ ДО КОНЦА ОСИ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="460" height="140" viewBox="0 0 460 140" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="420" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M420 60 l-6 -3 M420 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="428" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка со сложной логарифмической дробью */}
            <circle cx="135" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            
            {/* 🔥 ИСПРАВЛЕНО: Минус вынесен на уровень черты, строгий KaTeX-рендер без потери слэшей */}
            <foreignObject x="55" y="62" width="160" height="75" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath math="-\frac{4}{\log_{2{,}5}\left(\frac{191}{80}\right)}" />
              </div>
            </foreignObject>

            {/* Выколотая точка 0 */}
            <circle cx="285" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="285" y="82" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35) */}
            <path d="M 15 35 L 125 35 A 10 10 0 0 1 135 45 L 135 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 285 60 L 285 45 A 10 10 0 0 1 295 35 L 405 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x != 0 */}
            <line x1="15" y1="15" x2="275" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <line x1="295" y1="15" x2="405" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ПОЛНОСТЬЮ ЗАПОЛНЯЕТ ЛУЧИ ДО КОНЦА */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="58" x2="96" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="98" y1="58" x2="104" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="106" y1="58" x2="112" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="114" y1="58" x2="120" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="122" y1="58" x2="126" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="58" x2="313" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="323" y1="58" x2="329" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="331" y1="58" x2="337" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="339" y1="58" x2="345" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="347" y1="58" x2="353" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="355" y1="58" x2="361" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="363" y1="58" x2="369" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="371" y1="58" x2="377" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="379" y1="58" x2="385" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="387" y1="58" x2="393" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="395" y1="58" x2="401" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math="(-\infty; \, -\frac{4}{\log_{2{,}5}\left(\frac{191}{80}\right)}] \cup (0; \, +\infty)" />
        </div>
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
        
        <p>Запишем систему ограничений ОДЗ для аргументов всех логарифмов, входящих в выражение:</p>
        <BlockMath math={`\\begin{cases} x^2 - 4x + 4 > 0 \\\\ 3 - x > 0 \\\\ (x - 2)^2 > 0 \\end{cases} \\iff \\begin{cases} (x - 2)^2 \\neq 0 \\\\ x < 3 \\end{cases} \\iff x \\in (-\\infty; \\, 2) \\cup (2; \\, 3)`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Преобразуем логарифмы по свойствам степеней на области ОДЗ. Так как при</span>
          <InlineMath math={`x < 3`} />
          <span>выражение</span>
          <InlineMath math={`x^2 - 4x + 4 = (x - 2)^2 = |x - 2|^2`} />,
          <span>вынесем показатель степени 2 перед логарифм. По ОДЗ аргумент правого слагаемого</span>
          <InlineMath math={`3 - x > 0 \\implies x - 2 < 1`} />,
          <span>поэтому вынос степени даёт:</span>
          <InlineMath math={`\\log_2(x - 2)^2 = 2\\log_2|x - 2|`} />.
        </div>

        <p>Перенесем все члены в левая часть неравенства и сгруппируем слагаемые:</p>
        <BlockMath math={`(x^2 - 2x - 3) \\cdot 2\\log_2|x - 2| - 4 \\cdot (x^2 - 2x - 3) + 4 \\cdot 2^x \\cdot \\log_2(3 - x) - 2^x \\cdot 2\\log_2|x - 2| \\ge 0`} />
        <BlockMath math={`2(x^2 - 2x - 3) \\cdot (\\log_2|x - 2| - 2) - 2 \\cdot 2^x \\cdot (\\log_2|x - 2| - 2\\log_2(3 - x)) \\ge 0`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Учитывая, что на интервале ОДЗ</span>
          <InlineMath math={`x < 2 \\implies |x - 2| = 2 - x`} />,
          <span>а при</span>
          <InlineMath math={`2 < x < 3 \\implies |x - 2| = x - 2`} />,
          <span>проведём аналитическое разложение методом интервалов знаков. Равносильная система распадается на две линейные скобки:</span>
        </div>
        <BlockMath math={`\\iff \\begin{cases} (x - 3)(x + 1)(x - 2) \\ge 0 \\\\ x \\in (-\\infty; \\, 2) \\cup (2; \\, 3) \\end{cases}`} />

        <p>Решая полученную рациональную систему методом интервалов, находим пересечение промежутков знаков с ОДЗ:</p>
        <BlockMath math={`\\iff x \\in [-1; \\, 2)`} />

        <p>Визуализируем полученный интервал на числовой прямой методом двух уровней крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка -1 */}
            <circle cx="115" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            {/* Выколотая точка 2 */}
            <circle cx="215" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="215" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* Выколотая точка 3 */}
            <circle cx="295" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="295" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части */}
            <path d="M 115 60 L 115 45 A 10 10 0 0 1 125 35 L 205 35 A 10 10 0 0 1 215 45 L 215 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 295 60 L 295 45 A 10 10 0 0 1 305 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x < 3, x != 2 */}
            <path d="M 15 15 L 205 15 A 10 10 0 0 1 215 25 L 215 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 215 60 L 215 25 A 10 10 0 0 1 225 15 L 285 15 A 10 10 0 0 1 295 25 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ В ДВУХУРОВНЕВОЙ ЗОНЕ */}
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="127" y1="58" x2="133" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="135" y1="58" x2="141" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="143" y1="58" x2="149" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="151" y1="58" x2="157" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="159" y1="58" x2="165" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="167" y1="58" x2="173" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="181" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="183" y1="58" x2="189" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="199" y1="58" x2="205" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="212" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math="[-1; \, 2)" />
        </div>
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

        <p>Визуализируем итоговый интервал пересечения на числовой прямой методом двух уровней крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка -4 */}
            <circle cx="95" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="95" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-4</text>

            {/* Выколотая точка 1 */}
            <circle cx="195" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="195" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Выколотая точка 3 */}
            <circle cx="275" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение по знаку раскрытия раскрытого модуля */}
            <path d="M 95 60 L 95 45 A 10 10 0 0 1 105 35 L 185 35 A 10 10 0 0 1 195 45 L 195 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифмов */}
            <path d="M 15 15 L 185 15 A 10 10 0 0 1 195 25 L 195 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 275 60 L 275 25 A 10 10 0 0 1 285 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ В ДВУХУРОВНЕВОЙ ЗОНЕ */}
            {/* Полуинтервал [-4; 1) */}
            <line x1="99" y1="58" x2="105" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="107" y1="58" x2="113" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="123" y1="58" x2="129" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="131" y1="58" x2="137" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="153" y1="58" x2="159" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="169" y1="58" x2="175" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="177" y1="58" x2="183" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="185" y1="58" x2="191" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="193" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение системы неравенств:</p>
        
        <p className="font-semibold text-slate-800 dark:text-slate-200">1) Решим первое неравенство системы:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Перейдём к равносильной системе условий, содержащей ОДЗ всех аргументов, ограничение знаменателя и метод рационализации дроби по основанию <InlineMath math={`3 > 1`} />:</p>
          <BlockMath math={`\\iff \\begin{cases} \\frac{x + 1 - 1}{x - 2 - 1} \\le 0 \\\\ x + 1 > 0 \\\\ x - 2 > 0 \\\\ x - 2 \\neq 1 \\end{cases} \\iff \\begin{cases} \\frac{x}{x - 3} \\le 0 \\\\ x > -1 \\\\ x > 2 \\\\ x \\neq 3 \\end{cases}`} />
          <p>Решая рациональную дробь методом интервалов и пересекая её с лучами ограничений, находим:</p>
          <BlockMath math={`\\iff \\begin{cases} 0 \\le x < 3 \\\\ x > 2 \\end{cases} \\iff x \\in (2; \\, 3)`} />
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">2) Решим второе неравенство системы:</p>
        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p>Разложим числитель по теореме Виета, а к знаменателю применим метод рационализации по основанию <InlineMath math={`0{,}5 < 1`} />, что меняет знак разности на противоположный:</p>
          <BlockMath math={`\\iff \\begin{cases} \\frac{(x + 1)(x - 5)}{-(x - 1 - 1)} \\ge 0 \\\\ x - 1 > 0 \\\\ x - 1 \\neq 1 \\end{cases} \\iff \\begin{cases} \\frac{(x + 1)(x - 5)}{x - 2} \\le 0 \\\\ x > 1 \\\\ x \\neq 2 \\end{cases}`} />
          <p>Исследуем знаки полученного рационального выражения методом интервалов с учётом ограничений ОДЗ переменной:</p>

          {/* 📈 МЕТОД ИНТЕРВАЛОВ ДЛЯ ВТОРОГО НЕРАВЕНСТВА */}
          <div className="my-4 flex justify-center w-full select-none">
            <svg width="400" height="70" viewBox="0 0 400 70" className="overflow-visible font-sans font-bold text-[13px]">
              <line x1="10" y1="35" x2="360" y2="35" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
              <path d="M360 35 l-6 -3 M360 35 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
              <text x="368" y="39" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

              {/* Выколотая граница ОДЗ 1 */}
              <circle cx="75" cy="35" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
              <text x="75" y="55" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

              {/* Выколотая точка знаменателя 2 */}
              <circle cx="165" cy="35" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
              <text x="165" y="55" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

              {/* Закрашенная точка числителя 5 */}
              <circle cx="265" cy="35" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
              <text x="265" y="55" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">5</text>

              {/* Крыши знаков "-" (удовлетворяющие неравенству на области x > 1) */}
              <path d="M 75 35 L 75 20 A 10 10 0 0 1 85 10 L 155 10 A 10 10 0 0 1 165 20 L 165 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
              <path d="M 265 35 L 265 20 A 10 10 0 0 1 275 10 L 345 10" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />

              {/* Штриховка интервалов второго неравенства */}
              <line x1="79" y1="33" x2="85" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="89" y1="33" x2="95" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="99" y1="33" x2="105" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="109" y1="33" x2="115" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="119" y1="33" x2="125" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="129" y1="33" x2="135" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="139" y1="33" x2="145" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="149" y1="33" x2="155" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="157" y1="33" x2="161" y2="22" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

              <line x1="269" y1="33" x2="275" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="279" y1="33" x2="285" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="289" y1="33" x2="295" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="299" y1="33" x2="305" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="309" y1="33" x2="315" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="319" y1="33" x2="325" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="329" y1="33" x2="335" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
              <line x1="339" y1="33" x2="345" y2="12" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            </svg>
          </div>
          <p>Получаем объединение множеств: <InlineMath math={`x \\in (1; \\, 2) \\cup [5; \\, +\\infty)`} /></p>
        </div>

        <p className="font-semibold text-slate-800 dark:text-slate-200">3) Пересечём решения обоих неравенств:</p>
        <p>Сопоставим полученные промежутки <InlineMath math={`x \\in (2; \\, 3)`} /> и <InlineMath math={`x \\in (1; \\, 2) \\cup [5; \\, +\\infty)`} /> на общей координатной прямой:</p>

        {/* 🌌 ФИНАЛЬНЫЙ ДВУХУРОВНЕВЫЙ ЧЕРТЁЖ ПЕРЕСЕЧЕНИЯ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка 1 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="55" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Выколотая точка 2 */}
            <circle cx="125" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="125" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* Выколотая точка 3 */}
            <circle cx="195" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="195" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* Закрашенная точка 5 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">5</text>

            {/* УРОВЕНЬ КРЫШ 1: Решение первого неравенства (2; 3) */}
            <path d="M 125 60 L 125 45 A 10 10 0 0 1 135 35 L 185 35 A 10 10 0 0 1 195 45 L 195 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* УРОВЕНЬ КРЫШ 2: Решение второго неравенства (1; 2) U [5; +inf) */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 115 15 A 10 10 0 0 1 125 25 L 125 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 275 60 L 275 25 A 10 10 0 0 1 285 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* Множества не имеют пересечений */}
          </svg>
        </div>

        <p>Так как полученные множества решений не имеют ни одной общей точки пересечения, данная система неравенств не имеет решений.</p>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: 'nowrap' }}>
            <InlineMath math="\varnothing" />
          </div>
        </div>
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

        <p>Визуализируем полученный интервал на числовой прямой методом двух уровней крыш со штриховкой:</p>

         {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ПОЛНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        {/* 🔥 ИСПРАВЛЕНО: Применено четырёхкратное экранирование слэшей внутри строкового литерала. Формула отобразится идеально. */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="135" viewBox="0 0 440 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="408" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ -1.5 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="55" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1,5</text>

            {/* Выколотая точка ОДЗ -1 */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            {/* Закрашенная точка -0,5 */}
            <circle cx="185" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-0,5</text>

            {/* Закрашенная иррациональная точка ответа */}
            <circle cx="305" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />

            {/* Контейнер с красивой иррациональной дробью точно под правой точкой (cx = 305) */}
            <foreignObject x="255" y="68" width="100" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath math={`\\dfrac{-5 + \\sqrt{513}}{4}`} />
              </div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Итоговый непрерывный отложенный отрез */}
            <path d="M 185 60 L 185 45 A 10 10 0 0 1 195 35 L 295 35 A 10 10 0 0 1 305 45 L 305 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифмов */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 105 15 A 10 10 0 0 1 115 25 L 115 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 115 60 L 115 25 A 10 10 0 0 1 125 15 L 375 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ В ДВУХУРОВНЕВОЙ ЗОНЕ */}
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="58" x2="203" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="205" y1="58" x2="211" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="213" y1="58" x2="219" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="275" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="277" y1="58" x2="283" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="293" y1="58" x2="299" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="299" y1="58" x2="303" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>




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
        
        <p>Перейдём к равносильной системе условий, содержащей исходное неравенство и ограничения области определения подкоренного выражения и знаменателя:</p>
        <BlockMath math={`\\iff \\begin{cases} \\frac{3^{|x-2|} - 3^2}{5^{\\sqrt{x}} - 5^1} \\ge 0 \\\\ x \\ge 0 \\\\ 5^{\\sqrt{x}} - 5 \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{3^{|x-2|} - 3^2}{5^{\\sqrt{x}} - 5^1} \\ge 0 \\\\ x \\ge 0 \\\\ x \\neq 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) для показательных функций. На области определения знак разности степеней вида</span>
          <InlineMath math={`a^f - a^g`} />
          <span>при основаниях</span>
          <InlineMath math={`a > 1`} />
          <span>полностью совпадает со знаком разности их показателей</span>
          <InlineMath math={`f - g`} />:
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{|x - 2| - 2}{\\sqrt{x} - 1} \\ge 0 \\\\ x \\ge 0 \\\\ x \\neq 1 \\end{cases}`} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод рационализации к модулю и иррациональному корню. Разность</span>
          <InlineMath math={`|x - 2| - 2`} />
          <span>имеет тот же знак, что и произведение</span>
          <InlineMath math={`(x - 2 - 2)(x - 2 + 2) = x(x - 4)`} />,
          <span>а знак разности</span>
          <InlineMath math={`\\sqrt{x} - 1`} stroke="currentColor" />
          <span>на области ОДЗ совпадает со знаком</span>
          <InlineMath math={`x - 1`} />:
        </div>
        <BlockMath math={`\\iff \\begin{cases} \\frac{x(x - 4)}{x - 1} \\ge 0 \\\\ x \\ge 0 \\\\ x \\neq 1 \\end{cases}`} />

        <p>Решим полученное рациональное выражение методом интервалов с учётом ограничений системы:</p>
        <BlockMath math={`\\iff x \\in \\{0\\} \\cup (1; \\, 4]`} />

        <p>Визуализируем полученные интервалы на числовой прямой методом двух уровней крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка ОДЗ и корень 0 */}
            <circle cx="75" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="75" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка знаменателя 1 */}
            <circle cx="175" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="175" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Закрашенная точка числителя 4 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">4</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части (изолированный 0 и отрезок) */}
            <circle cx="75" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            <path d="M 175 60 L 175 45 A 10 10 0 0 1 185 35 L 265 35 A 10 10 0 0 1 275 45 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x >= 0 */}
            <path d="M 75 60 L 75 25 A 10 10 0 0 1 85 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ В ДВУХУРОВНЕВОЙ ЗОНЕ */}
            {/* Изолированная точка 0 */}
            <line x1="75" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />

            {/* Полуинтервал (1; 4] */}
            <line x1="181" y1="58" x2="187" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="58" x2="203" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="205" y1="58" x2="211" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="213" y1="58" x2="219" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="273" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: 'nowrap' }}>
            <InlineMath math={`\\{0\\} \\cup (1; \\, 4]`} />
          </div>
        </div>
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
        
        <p>
          Используем формулу перехода к новому основанию для знаменателя дроби: 
          <InlineMath math={"\\log_{x+4}(3-x) = \\frac{1}{\\log_{3-x}(x+4)}"} />. 
          Перенесем единицу влево и перейдём к единой равносильной системе условий, удерживающей ОДЗ всех аргументов и оснований:
        </p>
        <BlockMath math={"\\iff \\begin{cases} \\left(\\log_{3-x}(x+4)\\right)^2 - 1 \\le 0 \\\\ 3 - x > 0 \\\\ 3 - x \\neq 1 \\\\ x + 4 > 0 \\\\ x + 4 \\neq 1 \\\\ \\log_{3-x}(x+4) \\neq 0 \\end{cases} \\iff \\begin{cases} \\left(\\log_{3-x}(x+4) - 1\\right)\\left(\\log_{3-x}(x+4) + 1\\right) \\le 0 \\\\ x < 3 \\\\ x \\neq 2 \\\\ x > -4 \\\\ x \\neq -3 \\\\ x + 4 \\neq 1 \\end{cases}"} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сведём ограничения аргументов и оснований логарифмов к общему пересечению интервалов:</span>
          <InlineMath math={"x \\in (-4; \\, -3) \\cup (-3; \\, 2) \\cup (2; \\, 3)"} />.
          <span>Применим метод замены множителей (рационализации) к полученной разности квадратов:</span>
        </div>
        <BlockMath math={"(3 - x - 1)(x + 4 - (3 - x)) \\cdot (3 - x - 1)\\left(x + 4 - \\frac{1}{3-x}\\right) \\le 0"} />
        <BlockMath math={"\\iff \\frac{(2 - x)^2 (2x + 1)(x^2 + x - 11)}{3 - x} \\le 0"} />

        <p>Так как на ОДЗ множитель знаменателя <InlineMath math={"3 - x > 0"} /> строго положителен, знаки кубической части определяются только числителем:</p>
        <BlockMath math={"\\iff \\begin{cases} (2 - x)^2 (2x + 1)(x^2 + x - 11) \\le 0 \\\\ x \\in (-4; \\, -3) \\cup (-3; \\, 2) \\cup (2; \\, 3) \\end{cases}"} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Найдем корни квадратного трёхчлена:</span>
          <InlineMath math={"x = \\frac{-1 \\pm \\sqrt{45}}{2}"} />.
          <span>Проведём строгое аналитическое сравнение иррациональных границ с ОДЗ без приближённых значений. Так как</span>
          <InlineMath math={"36 < 45 < 49 \\iff 6 < \\sqrt{45} < 7"} />,
          <span>оценим положение левого корня:</span>
        </div>
        <BlockMath math={"-7 < -\\sqrt{45} < -6 \\iff -8 < -1 - \\sqrt{45} < -7 \\iff -4 < \\frac{-1 - \\sqrt{45}}{2} < -3"} />
        <p>Левый корень гарантированно попадает в интервал ОДЗ <InlineMath math={"(-4; \\, -3)"} />.</p>

        <p>Оценим положение правого корня:</p>
        <BlockMath math={"6 < \\sqrt{45} < 7 \\iff 5 < -1 + \\sqrt{45} < 6 \\iff 2 < \\frac{-1 + \\sqrt{45}}{2} < 3"} />
        <p>Правый корень гарантированно попадает в интервал ОДЗ <InlineMath math={"(2; \\, 3)"} />.</p>

        <p>Решая рациональное выражение методом интервалов с учётом выколотых точек системы, получаем финальные промежутки:</p>
        <BlockMath math={"\\iff x \\in \\left(-4; \\, \\frac{-1-\\sqrt{45}}{2}\\right] \\cup [-0{,}5; \\, 2) \\cup \\left(2; \\, \\frac{-1+\\sqrt{45}}{2}\\right]"} />

        <p>Визуализируем полученные интервалы на числовой прямой методом двух уровней крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        {/* 🔥 ИСПРАВЛЕНО: Слэши защищены на уровне JSX дочерних элементов (children) внутри foreignObject */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="460" height="135" viewBox="0 0 460 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="420" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M420 60 l-6 -3 M420 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="428" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ -4 */}
            <circle cx="45" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="45" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-4</text>

            {/* Закрашенная иррациональная точка числителя левая */}
            <circle cx="105" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="65" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{-1-\\sqrt{45}}{2}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка ОДЗ -3 */}
            <circle cx="165" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="165" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-3</text>

            {/* Закрашенная точка числителя -0,5 */}
            <circle cx="215" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="215" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-0,5</text>

            {/* Выколотая точка ОДЗ 2 */}
            <circle cx="265" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="265" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* Закрашенная иррациональная точка числителя правая */}
            <circle cx="315" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="275" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{-1+\\sqrt{45}}{2}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка ОДЗ 3 */}
            <circle cx="365" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="365" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Зоны ответа */}
            <path d="M 45 60 L 45 45 A 10 10 0 0 1 55 35 L 95 35 A 10 10 0 0 1 105 45 L 105 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 215 60 L 215 45 A 10 10 0 0 1 225 35 L 255 35 A 10 10 0 0 1 265 45 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 265 60 L 265 45 A 10 10 0 0 1 275 35 L 305 35 A 10 10 0 0 1 315 45 L 315 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифмов */}
            <path d="M 45 60 L 45 25 A 10 10 0 0 1 55 15 L 155 15 A 10 10 0 0 1 165 25 L 165 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 165 60 L 165 25 A 10 10 0 0 1 175 15 L 255 15 A 10 10 0 0 1 265 25 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 265 60 L 265 25 A 10 10 0 0 1 275 15 L 355 15 A 10 10 0 0 1 365 25 L 365 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ В ЗОНАХ ПЕРЕСЕЧЕНИЯ */}
            {/* Левый полуинтервал */}
            <line x1="49" y1="58" x2="55" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="57" y1="58" x2="63" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="65" y1="58" x2="71" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="73" y1="58" x2="79" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="81" y1="58" x2="87" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="89" y1="58" x2="95" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="97" y1="58" x2="101" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Средний полуинтервал */}
            <line x1="219" y1="58" x2="225" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="227" y1="58" x2="233" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="235" y1="58" x2="241" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="243" y1="58" x2="249" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="251" y1="58" x2="253" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Правый полуинтервал */}
            <line x1="269" y1="58" x2="275" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="277" y1="58" x2="283" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="293" y1="58" x2="299" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="301" y1="58" x2="307" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="309" y1="58" x2="311" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>
              {"\\left(-4; \\, \\frac{-1-\\sqrt{45}}{2}\\right] \\cup [-0{,}5; \\, 2) \\cup \\left(2; \\, \\frac{-1+\\sqrt{45}}{2}\\right]"}
            </InlineMath>
          </div>
        </div>
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
        
        <p>
          Используем формулу перехода к новому основанию для знаменателя дроби: 
          <InlineMath>{"\\log_{x-3}(|x-2|-1) = \\frac{1}{\\log_{|x-2|-1}(x-3)}"}</InlineMath>. 
          Перейдём к единой равносильной системе условий, удерживающей ОДЗ всех аргументов и переменных оснований логарифмов:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{|x-2|-1}((x-1)(x-3)) \\cdot \\log_{|x-2|-1}(x-3) \\le 0 \\\\ (x-1)(x-3) > 0 \\\\ x - 3 > 0 \\\\ |x-2| - 1 > 0 \\\\ |x-2| - 1 \\neq 1 \\\\ x - 3 \\neq 1 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сведём ограничения ОДЗ аргументов к общему базовому промежутку: из системы строго следует, что</span>
          <InlineMath>{"x > 3"}</InlineMath>
          <span>и</span>
          <InlineMath>{"x \\neq 4"}</InlineMath>.
          <span>На данном интервале модуль раскрывается однозначно со знаком «плюс»:</span>
          <InlineMath>{"|x - 2| = x - 2"}</InlineMath>,
          <span>что позволяет упростить основание:</span>
          <InlineMath>{"|x - 2| - 1 = x - 3"}</InlineMath>.
        </div>

        <p>Подставим полученное линейное основание в систему условий и преобразуем произведение логарифмов:</p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{x-3}(x-1) \\le \\log_{x-3}\\left(\\frac{1}{x-3}\\right) \\\\ x > 3 \\\\ x \\neq 4 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Применим метод замены множителей (рационализации) к полученному логарифмическому выражению:</span>
        </div>
        <BlockMath>{"\\iff \\begin{cases} (x - 3 - 1)\\left(x - 1 - \\frac{1}{x - 3}\\right) \\le 0 \\\\ x > 3 \\\\ x \\neq 4 \\end{cases} \\iff \\begin{cases} (x - 4)\\frac{x^2 - 4x + 2}{x - 3} \\le 0 \\\\ x > 3 \\\\ x \\neq 4 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Так как на области ОДЗ множитель</span>
          <InlineMath>{"x - 3 > 0"}</InlineMath>
          <span>строго положителен, знаки определяются только числителем. Нули квадратного трёхчлена:</span>
          <InlineMath>{"x = 2 \\pm \\sqrt{2}"}</InlineMath>.
          <span>Проведём строгое аналитическое сравнение: так как</span>
          <InlineMath>{"1 < \\sqrt{2} < 2 \\iff 3 < 2 + \\sqrt{2} < 4"}</InlineMath>,
          <span>корень лежит внутри рассматриваемой области:</span>
        </div>
        <BlockMath>{"\\iff \\begin{cases} (x - 4)(x - (2 - \\sqrt{2}))(x - (2 + \\sqrt{2})) \\le 0 \\\\ x > 3 \\\\ x \\neq 4 \\end{cases}"}</BlockMath>

        <p>Решая полученную рациональную систему методом интервалов на области ограничений, находим итоговое пересечение множеств:</p>
        <BlockMath>{"\\iff x \\in (3; \\, 2 + \\sqrt{2}]"}</BlockMath>

        <p>Визуализируем полученный интервал на числовой прямой методом двух уровней крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="135" viewBox="0 0 400 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 3 */}
            <circle cx="95" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="95" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* Закрашенная иррациональная точка ответа */}
            <circle cx="195" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="155" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"2+\\sqrt{2}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка ОДЗ 4 */}
            <circle cx="295" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="295" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">4</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части */}
            <path d="M 95 60 L 95 45 A 10 10 0 0 1 105 35 L 185 35 A 10 10 0 0 1 195 45 L 195 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифмов */}
            <path d="M 95 60 L 95 25 A 10 10 0 0 1 105 15 L 285 15 A 10 10 0 0 1 295 25 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 295 60 L 295 25 A 10 10 0 0 1 305 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ В ЗОНЕ ПЕРЕСЕЧЕНИЯ */}
            {/* Полуинтервал (3; 2 + √2] */}
            <line x1="99" y1="58" x2="105" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="107" y1="58" x2="113" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="123" y1="58" x2="129" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="131" y1="58" x2="137" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="139" y1="58" x2="145" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="147" y1="58" x2="153" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="155" y1="58" x2="161" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="163" y1="58" x2="169" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="177" y1="58" x2="183" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="185" y1="58" x2="191" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="193" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>
              {"(3; \\, 2 + \\sqrt{2}]"}
            </InlineMath>
          </div>
        </div>
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
        <p>Визуализируем пустое пересечение областей на числовой прямой методом двух уровней крыш:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка 0 */}
            <circle cx="135" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="135" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка 2 */}
            <circle cx="235" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="235" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): ОДЗ числителя (0; 2) */}
            <path d="M 135 60 L 135 45 A 10 10 0 0 1 145 35 L 225 35 A 10 10 0 0 1 235 45 L 235 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ знаменателя (-inf; 0) U (2; +inf) */}
            <path d="M 15 15 L 125 15 A 10 10 0 0 1 135 25 L 135 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 235 60 L 235 25 A 10 10 0 0 1 245 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* Множества не имеют пересечений, штриховка отсутствует */}
          </svg>
        </div>

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

        <p>Визуализируем полученные интервалы на числовой прямой методом двух уровней крыш со штриховкой:</p>
        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ТЕКСТОВЫМИ ПОДПИСЯМИ И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка числителя -1 */}
            <circle cx="55" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="55" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="135" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="135" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка основания 0,5 */}
            <circle cx="215" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="215" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0,5</text>

            {/* Закрашенная точка числителя 1 */}
            <circle cx="295" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="295" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Зоны ответа */}
            <path d="M 55 60 L 55 45 A 10 10 0 0 1 65 35 L 125 35 A 10 10 0 0 1 135 45 L 135 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 135 60 L 135 45 A 10 10 0 0 1 145 35 L 205 35 A 10 10 0 0 1 215 45 L 215 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 215 60 L 215 45 A 10 10 0 0 1 225 35 L 285 35 A 10 10 0 0 1 295 45 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): Линия ОДЗ */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Полуинтервал [-1; 0) */}
            <line x1="59" y1="58" x2="65" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="67" y1="58" x2="73" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="75" y1="58" x2="81" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="83" y1="58" x2="89" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="91" y1="58" x2="97" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="99" y1="58" x2="105" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="107" y1="58" x2="113" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="123" y1="58" x2="129" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="133" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Интервал (0; 0,5) */}
            <line x1="139" y1="58" x2="145" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="147" y1="58" x2="153" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="155" y1="58" x2="161" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="163" y1="58" x2="169" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="171" y1="58" x2="177" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="179" y1="58" x2="185" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="187" y1="58" x2="193" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="195" y1="58" x2="201" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="209" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="209" y1="58" x2="213" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Полуинтервал (0,5; 1] */}
            <line x1="219" y1="58" x2="225" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="227" y1="58" x2="233" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="235" y1="58" x2="241" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="243" y1="58" x2="249" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="267" y1="58" x2="273" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="283" y1="58" x2="289" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="289" y1="58" x2="293" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>
          Запишем единую равносильную систему условий, учитывающую ограничения ОДЗ для аргументов и оснований степеней:
        </p>
        <BlockMath math={"\\iff \\begin{cases} x^{\\log_{\\sqrt[3]{16}} x - 12} > 8^{4(\\log_4 x - 8)} \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}"} />

        <p>Преобразуем основания логарифмов в показателях степеней к основанию 2, используя свойства степеней:</p>
        <BlockMath math={"\\log_{\\sqrt[3]{16}} x = \\log_{2^{4/3}} x = \\frac{3}{4}\\log_2 x \\quad \\text{и} \\quad \\log_4 x = \\frac{1}{2}\\log_2 x"} />
        <p>Приведём также основание правой части к числу 2: <InlineMath math={"8 = 2^3"} />. Подставим данные преобразования в систему:</p>
        <BlockMath math={"\\iff \\begin{cases} x^{\\frac{3}{4}\\log_2 x - 12} > \\left(2^3\\right)^{4(\\frac{1}{2}\\log_2 x - 8)} \\\\ x > 0 \\\\ x \\neq 1 \\end{cases} \\iff \\begin{cases} x^{\\frac{3}{4}\\log_2 x - 12} > 2^{6\\log_2 x - 96} \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}"} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Прологарифмируем обе части неравенства по основанию</span>
          <InlineMath math={"2 > 1"} />,
          <span>что позволяет сохранить исходный знак неравенства без изменений:</span>
        </div>
        <BlockMath math={"\\iff \\begin{cases} \\log_2 \\left(x^{\\frac{3}{4}\\log_2 x - 12}\\right) > \\log_2 \\left(2^{6\\log_2 x - 96}\\right) \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}"} />

        <p>Вынесем показатели степеней за знаки логарифмов по свойствам степеней:</p>
        <BlockMath math={"\\iff \\begin{cases} \\left(\\frac{3}{4}\\log_2 x - 12\\right) \\cdot \\log_2 x > 6\\log_2 x - 96 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}"} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath math={"t = \\log_2 x"} />.
          <span>Раскроем скобки и перенесём все члены в левую часть:</span>
        </div>
        <BlockMath math={"\\frac{3}{4}t^2 - 12t - 6t + 96 > 0 \\iff \\frac{3}{4}t^2 - 18t + 96 > 0"} />
        <p>Умножим неравенство на <InlineMath math={"\\frac{4}{3}"} />, чтобы упростить старший коэффициент квадратного трёхчлена:</p>
        <BlockMath math={"t^2 - 24t + 126 > 0"} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Найдем корни полученного квадратного трёхчлена через дискриминант:</span>
          <InlineMath math={"D = 24^2 - 4 \\cdot 126 = 576 - 504 = 72 = (6\\sqrt{2})^2"} />.
          <span>Откуда получаем интервалы решения относительно переменной</span>
          <InlineMath math={"t"} />:
        </div>
        <BlockMath math={"\\iff \\left[ \\begin{aligned} &t < 12 - 3\\sqrt{2} \\\\ &t > 12 + 3\\sqrt{2} \\end{aligned} \\right."} />

        <p>Выполним обратную замену для логарифмической функции по монотонно возрастающему основанию 2:</p>
        <BlockMath math={"\\iff \\left[ \\begin{aligned} &\\log_2 x < 12 - 3\\sqrt{2} \\\\ &\\log_2 x > 12 + 3\\sqrt{2} \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &x < 2^{12 - 3\\sqrt{2}} \\\\ &x > 2^{12 + 3\\sqrt{2}} \\end{aligned} \\right."} />


        <p>Визуализируем полученные интервалы на числовой прямой методом двух уровней крыш со штриховкой:</p>

         {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        {/* 🔥 ИСПРАВЛЕНО: Слэши степеней логарифмов на оси защищены через children-синтаксис {"..."} внутри foreignObject */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="135" viewBox="0 0 440 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="428" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="45" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="45" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка ОДЗ 1 */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Выколотая иррациональная точка числителя левая */}
            <circle cx="205" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="155" y="68" width="100" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"2^{12-3\\sqrt{2}}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая иррациональная точка числителя правая */}
            <circle cx="315" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="265" y="68" width="100" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"2^{12+3\\sqrt{2}}"}</InlineMath>
              </div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Зоны ответа совокупности */}
            <path d="M 45 60 L 45 45 A 10 10 0 0 1 55 35 L 195 35 A 10 10 0 0 1 205 45 L 205 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 315 60 L 315 45 A 10 10 0 0 1 325 35 L 385 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): Линия ОДЗ x > 0, x != 1 */}
            <path d="M 45 60 L 45 25 A 10 10 0 0 1 55 15 L 105 15 A 10 10 0 0 1 115 25 L 115 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 115 60 L 115 25 A 10 10 0 0 1 125 15 L 385 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ В ЗОНАХ ПЕРЕСЕЧЕНИЯ */}
            {/* Интервал (0; 1) */}
            <line x1="49" y1="58" x2="55" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="57" y1="58" x2="63" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="65" y1="58" x2="71" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="73" y1="58" x2="79" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="81" y1="58" x2="87" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="89" y1="58" x2="95" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="97" y1="58" x2="103" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="111" y1="58" x2="113" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Интервал (1; 2^(12-3sqrt(2))) */}
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="127" y1="58" x2="133" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="135" y1="58" x2="141" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="143" y1="58" x2="149" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="151" y1="58" x2="157" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="159" y1="58" x2="165" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="167" y1="58" x2="173" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="181" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="183" y1="58" x2="189" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="191" y1="58" x2="197" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="199" y1="58" x2="203" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Луч (2^(12+3sqrt(2)); +inf) */}
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="327" y1="58" x2="333" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="335" y1="58" x2="341" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="343" y1="58" x2="349" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="351" y1="58" x2="357" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="359" y1="58" x2="365" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="367" y1="58" x2="373" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="375" y1="58" x2="381" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="383" y1="58" x2="385" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>


        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(0; \\, 1) \\cup (1; \\, 2^{12 - 3\\sqrt{2}}) \\cup (2^{12 + 3\\sqrt{2}}; \\, +\\infty)"}</InlineMath>
          </div>
        </div>
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

        <p>Визуализируем полученные интервалы на числовой прямой методом двух уровней крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ -1.5 */}
            <circle cx="45" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="45" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1,5</text>

            {/* Закрашенная точка числителя -1 */}
            <circle cx="115" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="195" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="195" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная точка числителя 3 */}
            <circle cx="285" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="285" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение квадратичной части */}
            <path d="M 115 60 L 115 45 A 10 10 0 0 1 125 35 L 185 35 A 10 10 0 0 1 195 45 L 195 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 195 60 L 195 45 A 10 10 0 0 1 205 35 L 275 35 A 10 10 0 0 1 285 45 L 285 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифмов */}
            <path d="M 45 60 L 45 25 A 10 10 0 0 1 55 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Полуинтервал [-1; 0) */}
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="127" y1="58" x2="133" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="135" y1="58" x2="141" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="143" y1="58" x2="149" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="151" y1="58" x2="157" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="159" y1="58" x2="165" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="167" y1="58" x2="173" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="181" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="183" y1="58" x2="189" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="58" x2="193" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Полуинтервал (0; 3] */}
            <line x1="199" y1="58" x2="205" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="213" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="215" y1="58" x2="221" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="223" y1="58" x2="229" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="239" y1="58" x2="245" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="255" y1="58" x2="261" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="263" y1="58" x2="269" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="271" y1="58" x2="277" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="279" y1="58" x2="283" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Визуализируем полученные интервалы на числовой прямой методом двух уровней крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        {/* 🔥 ИСПРАВЛЕНО: Слэши логарифма на оси защищены через children-синтаксис {"..."} внутри foreignObject */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="135" viewBox="0 0 440 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="408" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка числителя -1 */}
            <circle cx="105" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="105" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            {/* Закрашенная точка числителя 2 */}
            <circle cx="205" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="205" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* Выколотая иррациональная точка ограничения */}
            <circle cx="315" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="265" y="68" width="100" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\log_{1{,}5}\\left(\\frac{35}{12}\\right)"}</InlineMath>
              </div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение однородной совокупности */}
            <path d="M 15 35 L 95 35 A 10 10 0 0 1 105 45 L 105 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 205 60 L 205 45 A 10 10 0 0 1 215 35 L 385 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): Ограничение аргумента логарифма */}
            <path d="M 15 15 L 305 15 A 10 10 0 0 1 315 25 L 315 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ В ДВУХУРОВНЕВОЙ ЗОНЕ */}
            {/* Левый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="90" y1="58" x2="96" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="96" y1="58" x2="101" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Правый отрезок */}
            <line x1="209" y1="58" x2="215" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="217" y1="58" x2="223" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="225" y1="58" x2="231" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="233" y1="58" x2="239" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="241" y1="58" x2="247" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="249" y1="58" x2="255" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="257" y1="58" x2="263" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="265" y1="58" x2="271" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="273" y1="58" x2="279" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="281" y1="58" x2="287" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="289" y1="58" x2="295" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="297" y1="58" x2="303" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="305" y1="58" x2="311" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="311" y1="58" x2="313" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>


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
        
        <p>
          Запишем единую равносильную систему условий с учётом области существования логарифма и ограничений аргумента под квадратом:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{x^3 + x^2 - x - 1}{\\log_4^2\\left(\\frac{15}{4} - x\\right) - 2\\log_2^2\\left(x - \\frac{15}{4}\\right)^2 + 16} \\ge 0 \\\\ \\frac{15}{4} - x > 0 \\\\ \\left(x - \\frac{15}{4}\\right)^2 > 0 \\end{cases} \\iff \\begin{cases} \\frac{x^3 + x^2 - x - 1}{\\log_4^2\\left(\\frac{15}{4} - x\\right) - 2\\log_2^2\\left(x - \\frac{15}{4}\\right)^2 + 16} \\ge 0 \\\\ x < 3{,}75 \\end{cases}"}</BlockMath>

        <p>Разложим числитель дроби методом попарной группировки слагаемых:</p>
        <BlockMath math={"x^3 + x^2 - x - 1 = x^2(x + 1) - (x + 1) = (x + 1)(x^2 - 1) = (x + 1)^2(x - 1)"} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Преобразуем логарифмы в знаменателе к единому основанию 4. Учитывая ОДЗ</span>
          <InlineMath>{"x < 3{,}75 \\implies \\left|x - \\frac{15}{4}\\right| = \\frac{15}{4} - x"}</InlineMath>,
          <span>вынесем степень из аргумента второго слагаемого:</span>
        </div>
        <BlockMath math={"2\\log_2^2\\left(x - \\frac{15}{4}\\right)^2 = 2 \\cdot \\left(2\\log_2\\left|x - \\frac{15}{4}\\right|\\right)^2 = 8\\log_2^2\\left(\\frac{15}{4} - x\\right) = 32\\log_4^2\\left(\\frac{15}{4} - x\\right)"} />

        <p>Подставим полученные показательные эквиваленты обратно в знаменатель и приведём подобные члены:</p>
        <BlockMath>{"\\log_4^2\\left(\\frac{15}{4} - x\\right) - 32\\log_4^2\\left(\\frac{15}{4} - x\\right) + 16 = 16 - 31\\log_4^2\\left(\\frac{15}{4} - x\\right)"}</BlockMath>

        <p>Применим разность квадратов и метод рационализации (замены множителей) к знаменателю дроби по основанию <InlineMath>{"4 > 1"}</InlineMath>:</p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{(x + 1)^2(x - 1)}{\\left(4 - \\sqrt{31}\\log_4\\left(\\frac{15}{4}-x\\right)\\right)\\left(4 + \\sqrt{31}\\log_4\\left(\\frac{15}{4}-x\\right)\\right)} \\ge 0 \\\\ x < 3{,}75 \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} \\frac{(x + 1)^2(x - 1)}{\\left(\\frac{15}{4} - x - 4^{4/\\sqrt{31}}\\right)\\left(\\frac{15}{4} - x - 4^{-4/\\sqrt{31}}\\right)} \\ge 0 \\\\ x < 3{,}75 \\end{cases}"}</BlockMath>

        <p>Решая рациональное выражение методом интервалов знаков с учётом выколотых нулей знаменателя и базового луча ОДЗ, находим:</p>
        <BlockMath>{"\\iff x \\in \\{-1\\} \\cup \\left[1; \\, 3{,}75 - 4^{-4/\\sqrt{31}}\\right) \\cup \\left(3{,}75 - 4^{4/\\sqrt{31}}; \\, 3{,}75\\right)"}</BlockMath>

        <p>Визуализируем полученный интервал на числовой прямой методом двух уровней крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="135" viewBox="0 0 440 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="420" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M420 60 l-6 -3 M420 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="428" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная изолированная точка числителя -1 */}
            <circle cx="55" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="55" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            {/* Закрашенная точка числителя 1 */}
            <circle cx="125" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="125" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Выколотая точка знаменателя правая */}
            <circle cx="215" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="165" y="68" width="100" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-[10px]">
                <InlineMath>{"3{,}75-4^{-\\frac{4}{\\sqrt{31}}}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка знаменателя левая */}
            <circle cx="305" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="255" y="68" width="100" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-[10px]">
                <InlineMath>{"3{,}75-4^{\\frac{4}{\\sqrt{31}}}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка ОДЗ 3,75 */}
            <circle cx="375" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="375" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3,75</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Зоны ответа */}
            <circle cx="55" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />
            <path d="M 125 60 L 125 45 A 10 10 0 0 1 135 35 L 205 35 A 10 10 0 0 1 215 45 L 215 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 305 60 L 305 45 A 10 10 0 0 1 315 35 L 365 35 A 10 10 0 0 1 375 45 L 375 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x < 3.75 */}
            <path d="M 15 15 L 365 15 A 10 10 0 0 1 375 25 L 375 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА МЕЖДУ ОСЬЮ И НИЖНЕЙ КРЫШЕЙ */}
            {/* Изолированная точка -1 */}
            <line x1="55" y1="58" x2="55" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />

            {/* Полуинтервал [1; правый корень) */}
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="153" y1="58" x2="159" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="169" y1="58" x2="175" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="177" y1="58" x2="183" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="185" y1="58" x2="191" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="193" y1="58" x2="199" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="201" y1="58" x2="207" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="211" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Интервал (левый корень; 3,75) */}
            <line x1="309" y1="58" x2="315" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="317" y1="58" x2="323" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="325" y1="58" x2="331" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="333" y1="58" x2="339" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="341" y1="58" x2="347" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="349" y1="58" x2="355" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="357" y1="58" x2="363" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="365" y1="58" x2="371" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="371" y1="58" x2="373" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\{-1\\} \\cup \\left[1; \\, 3{,}75 - 4^{-\\frac{4}{\\sqrt{31}}}\\right) \\cup \\left(3{,}75 - 4^{\\frac{4}{\\sqrt{31}}}; \\, 3{,}75\\right)"}</InlineMath>
          </div>
        </div>
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

        <p>Визуализируем полученное решение на числовой прямой методом двух уровней крыш со штриховкой:</p>

        {/* 🌌 ЧЕРТЁЖ С АКАДЕМИЧЕСКИМИ ШРИФТАМИ KATEX И ИДЕАЛЬНОЙ ШТРИХОВКОЙ ПО СЕТКЕ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная изолированная точка ответа 1 */}
            <circle cx="215" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="215" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Изолированная точка */}
            <circle cx="215" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифмов x > 0 */}
            <path d="M 115 60 L 115 25 A 10 10 0 0 1 125 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ВЕРТИКАЛЬНАЯ ШТРИХОВКА ДЛЯ ИЗОЛИРОВАННОЙ ТОЧКИ */}
            <line x1="215" y1="58" x2="215" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />
          </svg>
        </div>

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
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="110" viewBox="0 0 400 110" className="overflow-visible font-sans font-bold text-[13px]">
            <line x1="10" y1="50" x2="360" y2="50" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 50 l-6 -3 M360 50 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="54" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка числителя 5,5 */}
            <circle cx="145" cy="50" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="145" y="70" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">5,5</text>

            {/* Выколотая точка знаменателя 6 */}
            <circle cx="235" cy="50" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="235" y="70" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">6</text>

            {/* Расстановка классических крыш решения дроби (>= 0) */}
            <path d="M 15 25 L 135 25 A 10 10 0 0 1 145 35 L 145 50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 235 50 L 235 35 A 10 10 0 0 1 245 25 L 345 25" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* Штриховка чистой дроби */}
            <line x1="19" y1="48" x2="25" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="35" y1="48" x2="41" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="51" y1="48" x2="57" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="67" y1="48" x2="73" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="83" y1="48" x2="89" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="99" y1="48" x2="105" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="48" x2="121" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="131" y1="48" x2="137" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="243" y1="48" x2="249" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="48" x2="265" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="48" x2="281" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="48" x2="297" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="48" x2="313" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="323" y1="48" x2="329" y2="27" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="339" y1="48" x2="343" y2="34" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Откуда находим промежуточное решение для дробной части:</p>
        <BlockMath>{"x \\in (-\\infty; \\, 5{,}5] \\cup (6; \\, +\\infty)"}</BlockMath>
        <p>Пересечём полученные лучи с условиями области допустимых значений системы:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 5,4 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">5,4</text>

            {/* Закрашенная точка числителя 5,5 */}
            <circle cx="145" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="145" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">5,5</text>

            {/* Выколотая точка знаменателя 6 */}
            <circle cx="235" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="235" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">6</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части (-inf; 5.5] U (6; +inf) */}
            <path d="M 15 35 L 135 35 A 10 10 0 0 1 145 45 L 145 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 235 60 L 235 45 A 10 10 0 0 1 245 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > 5,4 (с выколотой 6) */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 225 15 A 10 10 0 0 1 235 25 L 235 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 235 60 L 235 25 A 10 10 0 0 1 245 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Полуинтервал (5,4; 5,5] */}
            <line x1="69" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="77" y1="58" x2="83" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="85" y1="58" x2="91" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="93" y1="58" x2="99" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="101" y1="58" x2="107" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="109" y1="58" x2="115" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="117" y1="58" x2="123" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="125" y1="58" x2="131" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="133" y1="58" x2="139" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="139" y1="58" x2="143" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Открытый луч (6; +inf) */}
            <line x1="239" y1="58" x2="245" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="255" y1="58" x2="261" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="263" y1="58" x2="269" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="271" y1="58" x2="277" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="279" y1="58" x2="285" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="287" y1="58" x2="293" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="295" y1="58" x2="301" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="303" y1="58" x2="309" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="311" y1="58" x2="317" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="327" y1="58" x2="333" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="335" y1="58" x2="341" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="343" y1="58" x2="345" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Исследуем знаки полученной рациональной дроби методом интервалов. На геометрическом чертеже крышами отмечены области, где функция строго больше нуля (&gt; 0):</p>

        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="110" viewBox="0 0 400 110" className="overflow-visible font-sans font-bold text-[13px]">
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка -1 */}
            <circle cx="95" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="95" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            {/* Выколотая точка 0 */}
            <circle cx="185" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка 1 */}
            <circle cx="275" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Классические крыши решения дроби там, где знак "+" (> 0). В точке 0 знак не меняется, там провал. */}
            <path d="M 15 35 L 85 35 A 10 10 0 0 1 95 45 L 95 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 275 60 L 275 45 A 10 10 0 0 1 285 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* Штриховка чистых интервалов знака "+" */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="32" y1="58" x2="38" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="46" y1="58" x2="52" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="60" y1="58" x2="66" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="88" y1="58" x2="91" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="279" y1="58" x2="285" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="293" y1="58" x2="299" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="307" y1="58" x2="313" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="321" y1="58" x2="327" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="335" y1="58" x2="341" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Откуда находим промежуточное решение для рациональной части:</p>
        <BlockMath>{"x \\in (-\\infty; \\, -1) \\cup (1; \\, +\\infty)"}</BlockMath>

        <p>Пересечёт полученные лучи с условиями области допустимых значений системы:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка -1 */}
            <circle cx="95" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="95" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            {/* Выколотая точка 0 */}
            <circle cx="185" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка 1 */}
            <circle cx="275" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части (-inf; -1) U (1; +inf) */}
            <path d="M 15 35 L 85 35 A 10 10 0 0 1 95 45 L 95 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 275 60 L 275 45 A 10 10 0 0 1 285 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x != 0, x != 1, x != -1 */}
            <path d="M 15 15 L 85 15 A 10 10 0 0 1 95 25 L 95 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 95 60 L 95 25 A 10 10 0 0 1 105 15 L 175 15 A 10 10 0 0 1 185 25 L 185 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 185 60 L 185 25 A 10 10 0 0 1 195 15 L 265 15 A 10 10 0 0 1 275 25 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 275 60 L 275 25 A 10 10 0 0 1 285 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

{/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="88" y1="58" x2="91" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="279" y1="58" x2="285" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="287" y1="58" x2="293" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="295" y1="58" x2="301" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="303" y1="58" x2="309" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="311" y1="58" x2="317" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="327" y1="58" x2="333" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="335" y1="58" x2="341" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="343" y1="58" x2="345" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>
          Представим единицу в числителе как логарифм по основанию 2 и запишем единую равносильную систему условий с ограничениями ОДЗ аргументов и знаменателя:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{\\log_2(2x^2 - 17x + 35) - \\log_2 2}{\\log_2(x + 6)} \\le 0 \\\\ 2x^2 - 17x + 35 > 0 \\\\ x + 6 > 0 \\\\ \\log_2(x + 6) \\neq 0 \\end{cases} \\iff \\begin{cases} \\frac{\\log_2(2x^2 - 17x + 35) - \\log_2 2}{\\log_2(x + 6)} \\le 0 \\\\ (2x - 5)(x - 7) > 0 \\\\ x > -6 \\\\ x \\neq -5 \\end{cases}"}</BlockMath>

        <p>
          Применим метод замены множителей (рационализации) к разностям логарифмов в числителе и знаменателе по основанию <InlineMath>{"2 > 1"}</InlineMath>:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{2x^2 - 17x + 35 - 2}{x + 6 - 1} \\le 0 \\\\ x \\in (-\\infty; \\, 2,5) \\cup (7; \\, +\\infty) \\\\ x > -6 \\\\ x \\neq -5 \\end{cases} \\iff \\begin{cases} \\frac{2x^2 - 17x + 33}{x + 5} \\le 0 \\\\ x \\in (-\\infty; \\, 2,5) \\cup (7; \\, +\\infty) \\\\ x > -6 \\\\ x \\neq -5 \\end{cases}"}</BlockMath>

        <p>Разложим квадратный трёхчлен в числителе дроби на линейные множители (корни по дискриминанту равны 3 и 5,5):</p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{2(x - 3)(x - 5{,}5)}{x + 5} \\le 0 \\\\ x \\in (-\\infty; \\, 2,5) \\cup (7; \\, +\\infty) \\\\ x > -6 \\\\ x \\neq -5 \\end{cases}"}</BlockMath>

        <p>Исследуем знаки полученного рационального выражения методом интервалов. На геометрическом чертеже крышами отмечены области, где дробь меньше или равна нулю (\\le 0):</p>

        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="110" viewBox="0 0 400 110" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка знаменателя -5 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-5</text>

            {/* Закрашенная точка числителя 3 */}
            <circle cx="175" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="175" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* Закрашенная точка числителя 5,5 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">5,5</text>

            {/* Крыши решения дроби там, где знак "-" (<= 0): луч (-inf; -5) и отрезок [3; 5.5] */}
            <path d="M 15 35 L 55 35 A 10 10 0 0 1 65 45 L 65 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 175 60 L 175 45 A 10 10 0 0 1 185 35 L 265 35 A 10 10 0 0 1 275 45 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* Штриховка чистых интервалов знака "-" */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="32" y1="58" x2="38" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="46" y1="58" x2="52" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="61" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="179" y1="58" x2="185" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="193" y1="58" x2="199" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="213" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="235" y1="58" x2="241" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="249" y1="58" x2="255" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="263" y1="58" x2="269" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="271" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Откуда находим промежуточное решение для рациональной части неравенства:</p>
        <BlockMath>{"x \\in (-\\infty; \\, -5) \\cup [3; \\, 5{,}5]"}</BlockMath>

        <p>Пересечёт полученные множества с условиями области допустимых значений логарифмов:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ С ВЫВЕРЕННЫМИ КООРДИНАТАМИ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="125" viewBox="0 0 440 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="408" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ -6 */}
            <circle cx="35" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="35" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-6</text>

            {/* Выколотая точка знаменателя -5 */}
            <circle cx="85" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="85" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-5</text>

            {/* Выколотая точка ОДЗ 2,5 */}
            <circle cx="165" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="165" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2,5</text>

            {/* Закрашенная точка числителя 3 */}
            <circle cx="215" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="215" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* Закрашенная точка числителя 5,5 */}
            <circle cx="295" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="295" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">5,5</text>

            {/* Выколотая точка ОДЗ 7 */}
            <circle cx="355" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="355" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">7</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части (-inf; -5) U [3; 5.5] */}
            <path d="M 15 35 L 75 35 A 10 10 0 0 1 85 45 L 85 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 215 60 L 215 45 A 10 10 0 0 1 225 35 L 285 35 A 10 10 0 0 1 295 45 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > -6, x != -5, x входит в лучи (-inf; 2.5) U (7; +inf) */}
            <path d="M 35 60 L 35 25 A 10 10 0 0 1 45 15 L 75 15 A 10 10 0 0 1 85 25 L 85 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 85 60 L 85 25 A 10 10 0 0 1 95 15 L 155 15 A 10 10 0 0 1 165 25 L 165 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Полуинтервал (-6; -5) */}
            <line x1="39" y1="58" x2="45" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="47" y1="58" x2="53" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="55" y1="58" x2="61" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="63" y1="58" x2="69" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="71" y1="58" x2="77" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="79" y1="58" x2="83" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Отрезок [3; 5.5] ОДЗ не перекрывает, штриховки там нет */}
          </svg>
        </div>

        <p>В результате пересечения множеств получаем окончательный ответ всей системы:</p>
        <BlockMath>{"x \\in (-6; \\, -5)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(-6; \\, -5)"}</InlineMath>
          </div>
        </div>
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

        <p>Исследуем знаки полученного рационального выражения методом интервалов. На геометрическом чертеже крышами отмечены области, где дробь меньше или равна нулю:</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="110" viewBox="0 0 400 110" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотый корень знаменателя кратности 2 */}
            <circle cx="95" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="95" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0,6</text>

            {/* Закрашенная точка числителя 1 */}
            <circle cx="185" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Закрашенная точка числителя 2 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* Крыша решения дроби там, где знак "-" (<= 0): отрезок [1; 2] */}
            <path d="M 185 60 L 185 45 A 10 10 0 0 1 195 35 L 265 35 A 10 10 0 0 1 275 45 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* Штриховка чистых интервалов знака "-" */}
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="209" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="217" y1="58" x2="223" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="273" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Откуда находим промежуточное решение для дробной части неравенства:</p>
        <BlockMath>{"x \\in [1; \\, 2]"}</BlockMath>

        <p>Пересечёт полученный отрезок с условием выколотой точки знаменателя:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка знаменателя 0,6 */}
            <circle cx="95" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="95" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0,6</text>

            {/* Закрашенная точка числителя 1 */}
            <circle cx="185" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Закрашенная точка числителя 2 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части [1; 2] */}
            <path d="M 185 60 L 185 45 A 10 10 0 0 1 195 35 L 265 35 A 10 10 0 0 1 275 45 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x != 0,6 (Вся ось с выколотой точкой) */}
            <path d="M 15 15 L 85 15 A 10 10 0 0 1 95 25 L 95 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 95 60 L 95 25 A 10 10 0 0 1 105 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Поскольку точка 0,6 лежит левее отрезка [1; 2], она не выкалывает из него решений */}
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="197" y1="58" x2="203" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="205" y1="58" x2="211" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="213" y1="58" x2="219" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="221" y1="58" x2="227" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="237" y1="58" x2="243" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="253" y1="58" x2="259" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="273" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка числителя -2 */}
            <circle cx="95" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="95" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-2</text>

            {/* Закрашенная изолированная точка числителя -1 */}
            <circle cx="185" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            {/* Закрашенная точка числителя 3 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части (-inf; -2] U {-1} U [3; +inf) */}
            <path d="M 15 35 L 85 35 A 10 10 0 0 1 95 45 L 95 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <circle cx="185" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 275 60 L 275 45 A 10 10 0 0 1 285 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ (Выполняется при всех действительных x, сплошная ось) */}
            <line x1="15" y1="15" x2="345" y2="15" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Левый открытый луч */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="82" y1="58" x2="88" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="88" y1="58" x2="91" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Изолированная точка -1 */}
            <line x1="185" y1="58" x2="185" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />

            {/* Правый открытый луч */}
            <line x1="279" y1="58" x2="285" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="287" y1="58" x2="293" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="295" y1="58" x2="301" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="303" y1="58" x2="309" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="311" y1="58" x2="317" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="327" y1="58" x2="333" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="335" y1="58" x2="341" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="343" y1="58" x2="345" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Исследуем знаки полученного рационального выражения методом интервалов. На геометрическом чертеже крышами отмечены области, где произведение скобок меньше или равно нулю (&le; 0):</p>

        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="135" viewBox="0 0 440 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="408" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная иррациональная точка левая */}
            <circle cx="55" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="15" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"-\\sqrt{5}-1"}</InlineMath>
              </div>
            </foreignObject>

            {/* Закрашенная точка -2.5 */}
            <circle cx="145" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="145" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-2,5</text>

            {/* Закрашенная точка -2 */}
            <circle cx="225" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="225" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-2</text>

            {/* Закрашенная иррациональная точка правая */}
            <circle cx="315" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="275" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\sqrt{5}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Крыши решения там, где знак "-" (<= 0) */}
            <path d="M 55 60 L 55 45 A 10 10 0 0 1 65 35 L 135 35 A 10 10 0 0 1 145 45 L 145 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 225 60 L 225 45 A 10 10 0 0 1 235 35 L 305 35 A 10 10 0 0 1 315 45 L 315 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* Штриховка чистых интервалов знака "-" */}
            <line x1="59" y1="58" x2="65" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="73" y1="58" x2="79" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="87" y1="58" x2="93" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="101" y1="58" x2="107" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="139" y1="58" x2="141" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="243" y1="58" x2="249" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="257" y1="58" x2="263" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="271" y1="58" x2="277" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="309" y1="58" x2="311" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Откуда находим промежуточное решение для рациональной части неравенства:</p>
        <BlockMath>{"x \\in [-\\sqrt{5} - 1; \\, -2.5] \\cup [-2; \\, \\sqrt{5}]"}</BlockMath>

        <p>Пересечёт полученные множества с базовым ограничивающим лучом ОДЗ логарифмов:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="135" viewBox="0 0 440 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="408" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная иррациональная точка левая */}
            <circle cx="45" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="5" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"-\\sqrt{5}-1"}</InlineMath>
              </div>
            </foreignObject>

            {/* Закрашенная точка -2.5 */}
            <circle cx="115" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-2,5</text>

            {/* Выколотая точка границы ОДЗ -sqrt(5) */}
            <circle cx="175" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="135" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"-\\sqrt{5}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Закрашенная точка -2 */}
            <circle cx="235" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="235" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-2</text>

            {/* Закрашенная иррациональная точка правая */}
            <circle cx="315" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="275" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\sqrt{5}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Крыши решения там, где знак "-" (<= 0) */}
            <path d="M 55 60 L 55 45 A 10 10 0 0 1 65 35 L 135 35 A 10 10 0 0 1 145 45 L 145 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 225 60 L 225 45 A 10 10 0 0 1 235 35 L 305 35 A 10 10 0 0 1 315 45 L 315 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* Штриховка чистых интервалов знака "-" */}
            <line x1="59" y1="58" x2="65" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="73" y1="58" x2="79" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="87" y1="58" x2="93" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="101" y1="58" x2="107" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="139" y1="58" x2="141" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="229" y1="58" x2="235" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="243" y1="58" x2="249" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="257" y1="58" x2="263" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="271" y1="58" x2="277" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="309" y1="58" x2="311" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Откуда находим промежуточное решение для рациональной части неравенства:</p>
        <BlockMath>{"x \\in [-\\sqrt{5} - 1; \\, -2.5] \\cup [-2; \\, \\sqrt{5}]"}</BlockMath>

        <p>Пересечёт полученные множества с базовым ограничивающим лучом ОДЗ логарифмов:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="135" viewBox="0 0 440 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="408" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная иррациональная точка левая */}
            <circle cx="45" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="5" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"-\\sqrt{5}-1"}</InlineMath>
              </div>
            </foreignObject>

            {/* Закрашенная точка -2.5 */}
            <circle cx="115" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-2,5</text>

            {/* Выколотая точка границы ОДЗ -sqrt(5) */}
            <circle cx="175" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="135" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"-\\sqrt{5}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Закрашенная точка -2 */}
            <circle cx="235" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="235" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-2</text>

            {/* Закрашенная иррациональная точка правая */}
            <circle cx="315" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="275" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\sqrt{5}"}</InlineMath>
              </div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части */}
            <path d="M 45 60 L 45 45 A 10 10 0 0 1 55 35 L 105 35 A 10 10 0 0 1 115 45 L 115 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 235 60 L 235 45 A 10 10 0 0 1 245 35 L 305 35 A 10 10 0 0 1 315 45 L 315 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x < -sqrt(5) */}
            <path d="M 15 15 L 165 15 A 10 10 0 0 1 175 25 L 175 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            <line x1="49" y1="58" x2="55" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="57" y1="58" x2="63" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="65" y1="58" x2="71" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="73" y1="58" x2="79" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="81" y1="58" x2="87" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="89" y1="58" x2="95" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="97" y1="58" x2="103" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="111" y1="58" x2="113" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Исследуем промежуточные знаки полученного рационального выражения методом интервалов. На геометрическом чертеже крышами отмечены области, где дробь строго больше нуля (&gt; 0):</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="135" viewBox="0 0 400 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая логарифмическая точка знаменателя */}
            <circle cx="185" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="135" y="68" width="100" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"1+\\log_4 3"}</InlineMath>
              </div>
            </foreignObject>

            {/* Крыша решения там, где знак "+" (> 0): открытый луч */}
            <path d="M 185 60 L 185 45 A 10 10 0 0 1 195 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* Штриховка чистых интервалов знака "+" */}
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="209" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="217" y1="58" x2="223" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="273" y1="58" x2="279" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="287" y1="58" x2="293" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="301" y1="58" x2="307" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="327" y1="58" x2="333" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="339" y1="58" x2="345" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Откуда находим промежуточное решение для дробной части неравенства:</p>
        <BlockMath>{"x \\in (1 + \\log_4 3; \\, +\\infty)"}</BlockMath>

        <p>Пересечёт полученный луч со всеми условиями области допустимых значений ОДЗ радикалов:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="135" viewBox="0 0 400 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка ОДЗ -4 */}
            <circle cx="65" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-4</text>

            {/* Выколотая логарифмическая точка знаменателя */}
            <circle cx="215" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="165" y="68" width="100" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"1+\\log_4 3"}</InlineMath>
              </div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Изолированное решение -4 и луч */}
            <circle cx="65" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 215 60 L 215 45 A 10 10 0 0 1 225 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x >= -4 */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Изолированная точка -4 */}
            <line x1="65" y1="58" x2="65" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />

            {/* Луч (1 + log4(3); +inf) */}
            <line x1="219" y1="58" x2="225" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="227" y1="58" x2="233" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="235" y1="58" x2="241" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="243" y1="58" x2="249" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="251" y1="58" x2="257" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="267" y1="58" x2="273" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="283" y1="58" x2="289" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="299" y1="58" x2="305" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="313" y1="58" x2="319" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="321" y1="58" x2="327" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="335" y1="58" x2="341" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>
          Запишем единую равносильную систему условий, содержащую исходное неравенство и ограничения ОДЗ для аргументов логарифмов:
        </p>
        <BlockMath>{"\\iff \\begin{cases} (2^3)^{\\lg(-1-x)} \\le (x^2-1)^{\\lg 2} \\\\ -1 - x > 0 \\\\ x^2 - 1 > 0 \\end{cases} \\iff \\begin{cases} 2^{3\\lg(-1-x)} \\le (x^2-1)^{\\lg 2} \\\\ x < -1 \\\\ (x-1)(x+1) > 0 \\end{cases}"}</BlockMath>

        <p>Пересечение ограничений ОДЗ на аргументы логарифмов даёт базовый ограничивающий луч:</p>
        <BlockMath>{"\\iff x \\in (-\\infty; \\, -1)"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Преобразуем правую часть неравенства по основному логарифмическому свойству перестановки основания и аргумента</span>
          <InlineMath>{"A^{\\lg B} = B^{\\lg A}"}</InlineMath>:
          <span>выражение</span>
          <InlineMath>{"(x^2 - 1)^{\\lg 2}"}</InlineMath>
          <span>полностью равносильно форме</span>
          <InlineMath>{"2^{\\lg(x^2 - 1)}"}</InlineMath>.
          <span>Подставим это свойство обратно в систему условий:</span>
        </div>
        <BlockMath>{"\\iff \\begin{cases} 2^{3\\lg(-1-x)} \\le 2^{\\lg(x^2 - 1)} \\\\ x < -1 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>В силу монотонного возрастания показательной функции по основанию</span>
          <InlineMath>{"2 > 1"}</InlineMath>
          <span>и десятичного логарифма по основанию</span>
          <InlineMath>{"10 > 1"}</InlineMath>,
          <span>опустим основания функций и перейдём к сравнению аргументов:</span>
        </div>
        <BlockMath>{"\\iff \\begin{cases} 3\\lg(-1-x) \\le \\lg(x^2 - 1) \\\\ x < -1 \\end{cases} \\iff \\begin{cases} \\lg(-1-x)^3 \\le \\lg(x^2 - 1) \\\\ x < -1 \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} (-1-x)^3 \\le x^2 - 1 \\\\ x < -1 \\end{cases} \\iff \\begin{cases} -(x+1)^3 \\le (x-1)(x+1) \\\\ x < -1 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Перенесём все члены в одну сторону и разложим выражение на множители. Так как на ОДЗ</span>
          <InlineMath>{"x < -1 \\implies x + 1 < 0"}</InlineMath>,
          <span>разделим неравенство на строго отрицательный член</span>
          <InlineMath>{"(x + 1) < 0"}</InlineMath>
          <span>со сменой знака:</span>
        </div>
        <BlockMath>{"\\iff \\begin{cases} -(x+1)^2 \\le x - 1 \\\\ x < -1 \\end{cases} \\iff \\begin{cases} -(x^2 + 2x + 1) - x + 1 \\le 0 \\\\ x < -1 \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} -x^2 - 3x \\le 0 \\\\ x < -1 \\end{cases} \\iff \\begin{cases} x(x + 3) \\ge 0 \\\\ x < -1 \\end{cases}"}</BlockMath>

        <p>Решая полученное рациональное выражение методом интервалов знаков, находим промежуточное решение для дробной части:</p>
        <BlockMath>{"x \\in (-\\infty; \\, -3] \\cup [0; \\, +\\infty)"}</BlockMath>

        <p>Пересечёт полученные множества с базовым ограничивающим лучом ОДЗ системы:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка числителя -3 */}
            <circle cx="85" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="85" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-3</text>

            {/* Выколотая точка границы ОДЗ -1 */}
            <circle cx="185" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            {/* Закрашенная точка числителя 0 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="265" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части (-inf; -3] U [0; +inf) */}
            <path d="M 15 35 L 75 35 A 10 10 0 0 1 85 45 L 85 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 265 60 L 265 45 A 10 10 0 0 1 275 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x < -1 */}
            <path d="M 15 15 L 175 15 A 10 10 0 0 1 185 25 L 185 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Луч (-inf; -3] полностью покрывается ОДЗ */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="26" y1="58" x2="32" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="34" y1="58" x2="40" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="42" y1="58" x2="48" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="50" y1="58" x2="56" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="58" y1="58" x2="64" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="66" y1="58" x2="72" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="81" y1="58" x2="83" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Луч [0; +inf) лежит целиком правее границы -1, пересечения с ОДЗ нет */}
          </svg>
        </div>

        <p>В результате пересечения множеств получаем окончательный ответ всей системы:</p>
        <BlockMath>{"x \\in (-\\infty; \\, -3]"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(-\\infty; \\, -3]"}</InlineMath>
          </div>
        </div>
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
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="135" viewBox="0 0 440 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="408" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная сложная левая точка */}
            <circle cx="75" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="15" y="66" width="120" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-[10px]">
                <InlineMath>{"\\frac{-\\ln 7-\\sqrt{\\ln^2 7+4}}{2}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка знаменателя 0 */}
            <circle cx="175" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="175" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная сложная правая точка */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="215" y="66" width="120" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-[10px]">
                <InlineMath>{"\\frac{-\\ln 7+\\sqrt{\\ln^2 7+4}}{2}"}</InlineMath>
              </div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части полуинтервал и луч */}
            <path d="M 75 60 L 75 45 A 10 10 0 0 1 85 35 L 165 35 A 10 10 0 0 1 175 45 L 175 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 275 60 L 275 45 A 10 10 0 0 1 285 35 L 375 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x != 0 (Сплошная линия со штриховкой, исключая 0) */}
            <path d="M 15 15 L 165 15 A 10 10 0 0 1 175 25 L 175 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 175 60 L 175 25 A 10 10 0 0 1 185 15 L 375 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Полуинтервал */}
            <line x1="79" y1="58" x2="85" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="91" y1="58" x2="97" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="103" y1="58" x2="109" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="127" y1="58" x2="133" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="139" y1="58" x2="145" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="151" y1="58" x2="157" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="163" y1="58" x2="169" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="169" y1="58" x2="171" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Луч */}
            <line x1="279" y1="58" x2="285" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="303" y1="58" x2="309" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="315" y1="58" x2="321" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="327" y1="58" x2="333" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="339" y1="58" x2="345" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="351" y1="58" x2="357" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="363" y1="58" x2="369" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="375" y1="58" x2="375" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Исследуем знаки полученного рационального выражения методом интервалов. На геометрическом чертеже крышами отмечены области, удовлетворяющие системе неравенства:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка границы 0,5 */}
            <circle cx="165" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="165" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0,5</text>

            {/* Закрашенная изолированная точка числителя 1 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="265" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части дробного знака */}
            <path d="M 15 35 L 155 35 A 10 10 0 0 1 165 45 L 165 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <circle cx="265" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > 0, x != 0,5 */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 155 15 A 10 10 0 0 1 165 25 L 165 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 165 60 L 165 25 A 10 10 0 0 1 175 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Интервал (0; 0,5) */}
            <line x1="69" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="77" y1="58" x2="83" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="85" y1="58" x2="91" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="93" y1="58" x2="99" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="101" y1="58" x2="107" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="109" y1="58" x2="115" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="117" y1="58" x2="123" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="125" y1="58" x2="131" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="133" y1="58" x2="139" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="141" y1="58" x2="147" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="149" y1="58" x2="155" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="157" y1="58" x2="161" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Изолированная закрашенная точка 1 */}
            <line x1="265" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />
          </svg>
        </div>

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

        <p>Визуализируем пустое пересечение областей на числовой прямой методом двух уровней крыш:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="120" viewBox="0 0 400 120" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка границы ОДЗ 1 */}
            <circle cx="135" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="135" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части (пустое множество, крыша отсутствует) */}

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > 1 */}
            <path d="M 135 60 L 135 25 A 10 10 0 0 1 145 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* Множества не имеют пересечений, штриховка отсутствует */}
          </svg>
        </div>

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
    title: "Задача 98 (Дробно-логарифмическое неравенство с тригонометрией)",
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

        <p>Определим знаки полученного выражения методом интервалов на области <InlineMath>{"(0; \\, 2\\pi)"}</InlineMath>. На чертеже крышами отмечены области, где дробь меньше или равна нулю (\\le 0):</p>

                {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="110" viewBox="0 0 440 110" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось */}
            <line x1="10" y1="60" x2="420" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M420 60 l-6 -3 M420 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="428" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка знаменателя 0,5 */}
            <circle cx="85" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="85" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0,5</text>

            {/* Выколотая точка знаменателя 1 */}
            <circle cx="145" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="145" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Закрашенная точка числителя log2(5) */}
            <circle cx="215" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="175" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\log_2 5"}</InlineMath>
              </div>
            </foreignObject>

            {/* Закрашенная точка числителя 3 */}
            <circle cx="295" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="295" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* Выколотая точка знаменателя pi */}
            <circle cx="365" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="325" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs font-normal">
                <InlineMath>{"\\pi"}</InlineMath>
              </div>
            </foreignObject>

            {/* Крыши решения там, где знак дроби меньше или равен нулю (<= 0) */}
            <path d="M 85 60 L 85 45 A 10 10 0 0 1 95 35 L 135 35 A 10 10 0 0 1 145 45 L 145 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 215 60 L 215 45 A 10 10 0 0 1 225 35 L 285 35 A 10 10 0 0 1 295 45 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 365 60 L 365 45 A 10 10 0 0 1 375 35 L 415 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* Штриховка интервалов */}
            <line x1="89" y1="58" x2="95" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="97" y1="58" x2="103" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="113" y1="58" x2="119" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="121" y1="58" x2="127" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="131" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="219" y1="58" x2="225" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="233" y1="58" x2="239" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="289" y1="58" x2="291" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="369" y1="58" x2="375" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="383" y1="58" x2="389" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="397" y1="58" x2="403" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="411" y1="58" x2="413" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Откуда находим промежуточное решение для дробной части неравенства:</p>
        <BlockMath>{"x \\in (0{,}5; \\, 1) \\cup [\\log_2 5; \\, 3] \\cup (\\pi; \\, +\\infty)"}</BlockMath>

        <p>Пересечёт полученные множества с базовыми интервалами ОДЗ системы логарифмов:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ С ВЫВЕРЕННЫМИ КООРДИНАТАМИ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="480" height="135" viewBox="0 0 480 135" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="440" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M440 60 l-6 -3 M440 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="448" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="35" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="35" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка знаменателя 0,5 */}
            <circle cx="85" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="85" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0,5</text>

            {/* Выколотая точка ОДЗ 1 */}
            <circle cx="135" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="135" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Закрашенная иррациональная точка числителя log2(5) */}
            <circle cx="195" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="155" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\log_2 5"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка ОДЗ 3 */}
            <circle cx="255" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="255" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* Выколотая точка знаменателя pi */}
            <circle cx="315" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="275" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs font-normal">
                <InlineMath>{"\\pi"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая иррациональная точка ОДЗ log2(10) */}
            <circle cx="385" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="345" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\log_2 10"}</InlineMath>
              </div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части */}
            <path d="M 85 60 L 85 45 A 10 10 0 0 1 95 35 L 125 35 A 10 10 0 0 1 135 45 L 135 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 195 60 L 195 45 A 10 10 0 0 1 205 35 L 245 35 A 10 10 0 0 1 255 45 L 255 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 315 60 L 315 45 A 10 10 0 0 1 325 35 L 435 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифмов */}
            <path d="M 35 60 L 35 25 A 10 10 0 0 1 45 15 L 125 15 A 10 10 0 0 1 135 25 L 135 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 135 60 L 135 25 A 10 10 0 0 1 145 15 L 245 15 A 10 10 0 0 1 255 25 L 255 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 255 60 L 255 25 A 10 10 0 0 1 265 15 L 375 15 A 10 10 0 0 1 385 25 L 385 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Интервал (0.5; 1) */}
            <line x1="89" y1="58" x2="95" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="97" y1="58" x2="103" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="113" y1="58" x2="119" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="121" y1="58" x2="127" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="131" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Полуинтервал [log2(5); 3) */}
            <line x1="199" y1="58" x2="205" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="213" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="215" y1="58" x2="221" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="223" y1="58" x2="229" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="239" y1="58" x2="245" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="249" y1="58" x2="251" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Интервал (pi; log2 10) */}
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="327" y1="58" x2="333" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="335" y1="58" x2="341" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="343" y1="58" x2="349" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="351" y1="58" x2="357" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="359" y1="58" x2="365" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="367" y1="58" x2="373" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="375" y1="58" x2="381" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="381" y1="58" x2="383" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Исследуем знаки полученной рациональной дроби относительно переменной t методом интервалов. Крышами отмечены области, где функция меньше или равна нулю (&le; 0):</p>

        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ПЕРЕМЕННОЙ T В СТИЛЕ КРЫШ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="110" viewBox="0 0 400 110" className="overflow-visible font-sans font-bold text-[13px]">
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">t</text>

            {/* Выколотый ноль знаменателя */}
            <circle cx="95" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="95" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная точка 0,5 */}
            <circle cx="185" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0,5</text>

            {/* Закрашенная точка 2 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* Крыши решения дроби там, где знак "-" (<= 0) */}
            <path d="M 15 35 L 85 35 A 10 10 0 0 1 95 45 L 95 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 185 60 L 185 45 A 10 10 0 0 1 195 35 L 265 35 A 10 10 0 0 1 275 45 L 275 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* Штриховка интервалов t */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="32" y1="58" x2="38" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="46" y1="58" x2="52" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="60" y1="58" x2="66" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="88" y1="58" x2="91" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="209" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="217" y1="58" x2="223" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="245" y1="58" x2="251" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="271" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Откуда получаем совокупность промежутков для обратной замены:</p>
        <BlockMath>{"\\left[ \\begin{aligned} &t < 0 \\\\ &0{,}5 \\le t \\le 2 \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &\\log_{x+1}(x - 1) < \\log_{x+1} 1 \\\\ &\\log_{x+1}\\sqrt{x + 1} \\le \\log_{x+1}(x - 1) \\le \\log_{x+1}(x + 1)^2 \\end{aligned} \\right."}</BlockMath>
        <p>
          Поскольку на всей области допустимых значений основание логарифма <InlineMath>{"x + 1 > 2 > 1"}</InlineMath> строго больше единицы, опустим логарифмы с сохранением знаков неравенств и перейдём к сквозной системе:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\left[ \\begin{aligned} &x - 1 < 1 \\\\ &\\begin{cases} x - 1 \\ge \\sqrt{x+1} \\\\ x - 1 \\le x^2 + 2x + 1 \\end{cases} \\end{aligned} \\right. \\\\ x \\in (1; \\, 2) \\cup (2; \\, +\\infty) \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x < 2 \\\\ &\\begin{cases} (x-1)^2 \\ge x + 1 \\\\ x^2 + x + 2 \\ge 0 \\end{cases} \\end{aligned} \\right. \\\\ x \\in (1; \\, 2) \\cup (2; \\, +\\infty) \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} \\left[ \\begin{aligned} &x < 2 \\\\ &x^2 - 3x \\ge 0 \\end{aligned} \\right. \\\\ x \\in (0; \\, 2) \\cup (2; \\, +\\infty) \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x < 2 \\\\ &x \\ge 3 \\end{aligned} \\right. \\\\ x \\in (1; \\, 2) \\cup (2; \\, +\\infty) \\end{cases}"}</BlockMath>

        <p>Пересечём полученную совокупность лучей с интервалами ОДЗ логарифмической системы:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ ДЛЯ ПЕРЕМЕННОЙ X */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 1 */}
            <circle cx="85" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="85" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Выколотая точка ОДЗ 2 */}
            <circle cx="185" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* Закрашенная точка числителя 3 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="275" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение совокупности (x < 2 U x >= 3) */}
            <path d="M 15 35 L 175 35 A 10 10 0 0 1 185 45 L 185 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 275 60 L 275 45 A 10 10 0 0 1 285 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > 1, x != 2 */}
            <path d="M 85 60 L 85 25 A 10 10 0 0 1 95 15 L 175 15 A 10 10 0 0 1 185 25 L 185 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 185 60 L 185 25 A 10 10 0 0 1 195 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА В ЗОНАХ ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Интервал (1; 2) */}
            <line x1="89" y1="58" x2="95" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="97" y1="58" x2="103" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="113" y1="58" x2="119" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="121" y1="58" x2="127" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="153" y1="58" x2="159" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="169" y1="58" x2="175" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="179" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Луч [3; +inf) */}
            <line x1="279" y1="58" x2="285" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="287" y1="58" x2="293" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="295" y1="58" x2="301" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="303" y1="58" x2="309" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="311" y1="58" x2="317" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="327" y1="58" x2="333" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="335" y1="58" x2="341" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="341" y1="58" x2="343" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Исследуем промежуточные знаки полученного рационального выражения методом интервалов. На геометрическом чертеже крышами отмечены области выполнения условий совместной системы:</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ СИСТЕМЫ (БЕЗ ОДЗ) */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="110" viewBox="0 0 440 110" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось */}
            <line x1="10" y1="60" x2="420" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M420 60 l-6 -3 M420 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="428" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Точки оси */}
            <circle cx="45" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="45" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-6</text>

            <circle cx="105" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="105" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-5</text>

            <circle cx="175" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="175" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-4</text>

            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="265" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">8</text>

            <circle cx="355" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="355" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">10</text>

            {/* Крыши решений */}
            {/* Неравенство 1: [-6; -4] U [8; 10] */}
            <path d="M 45 60 L 45 45 A 10 10 0 0 1 55 35 L 165 35 A 10 10 0 0 1 175 45 L 175 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 265 60 L 265 45 A 10 10 0 0 1 275 35 L 345 35 A 10 10 0 0 1 355 45 L 355 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            {/* Неравенство 2: [-5; 8] */}
            <path d="M 105 60 L 105 20 A 10 10 0 0 1 115 10 L 255 10 A 10 10 0 0 1 265 20 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.5" />

            {/* Штриховка совместного пересечения: [-5; -4] и изолированная точка {8} */}
            <line x1="109" y1="58" x2="115" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="123" y1="58" x2="129" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="151" y1="58" x2="157" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="165" y1="58" x2="171" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="171" y1="58" x2="173" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="265" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />
          </svg>
        </div>

               <p>Откуда находим промежуточное решение рациональной системы условий:</p>
        <BlockMath>{"x \\in [-5; \\, -4] \\cup \\{8\\}"}</BlockMath>

        <p>Пересечём полученные множества со сквозными интервалами области допустимых значений ОДЗ:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="125" viewBox="0 0 440 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="420" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M420 60 l-6 -3 M420 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="428" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ -5 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="55" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-5</text>

            {/* Выколотая точка ОДЗ -4 */}
            <circle cx="145" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="145" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-4</text>

            {/* Закрашенная точка решения 8 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="265" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">8</text>

            {/* Выколотая точка ОДЗ 9 */}
            <circle cx="355" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="355" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">9</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Промежуточное решение */}
            <path d="M 55 60 L 55 45 A 10 10 0 0 1 65 35 L 135 35 A 10 10 0 0 1 145 45 L 145 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <circle cx="265" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ (-5; -4) U (-4; 9) */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 135 15 A 10 10 0 0 1 145 25 L 145 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 145 60 L 145 25 A 10 10 0 0 1 155 15 L 345 15 A 10 10 0 0 1 355 25 L 355 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Границы -5 и -4 выкалываются по ОДЗ, превращая отрезок в интервал (-5; -4) */}
            <line x1="59" y1="58" x2="65" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="73" y1="58" x2="79" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="87" y1="58" x2="93" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="101" y1="58" x2="107" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="139" y1="58" x2="141" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Изолированная закрашенная точка {8} полностью входит в ОДЗ */}
            <line x1="265" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />
          </svg>
        </div>

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

        <p>Исследуем знаки полученных выражений методом интервалов на числовой прямой. На чертеже крышами отмечены области выполнения условий совместной системы:</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ СИСТЕМЫ (БЕЗ ОДЗ) */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="110" viewBox="0 0 400 110" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Точки оси */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="55" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-3</text>

            <circle cx="135" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="95" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"-\\frac{5}{3}"}</InlineMath>
              </div>
            </foreignObject>

            <circle cx="215" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="215" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            <circle cx="295" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="255" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{1}{3}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Крыши решений */}
            {/* Неравенство 1: (-3; 1/3) */}
            <path d="M 55 60 L 55 45 A 10 10 0 0 1 65 35 L 285 35 A 10 10 0 0 1 295 45 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            {/* Неравенство 2: (-inf; -5/3] U [-1; +inf) */}
            <path d="M 15 15 L 125 15 A 10 10 0 0 1 135 25 L 135 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.5" />
            <path d="M 215 60 L 215 25 A 10 10 0 0 1 225 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.5" />

            {/* Штриховка пересечения: (-3; -5/3] и [-1; 1/3) */}
            <line x1="59" y1="58" x2="65" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="73" y1="58" x2="79" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="87" y1="58" x2="93" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="101" y1="58" x2="107" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="115" y1="58" x2="121" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="133" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="219" y1="58" x2="225" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="233" y1="58" x2="239" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="289" y1="58" x2="291" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Откуда находим промежуточное решение рациональной системы неравенств:</p>
        <BlockMath>{"x \\in \\left(-3; \\, -\\frac{5}{3}\\right] \\cup \\left[-1; \\, \\frac{1}{3}\\right)"}</BlockMath>

        <p>Пересечёт полученные промежутки с фоновым условием ОДЗ неотрицательности логарифма:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Точки координатной сетки */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="55" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-3</text>

            <circle cx="125" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="85" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"-\\frac{5}{3}"}</InlineMath>
              </div>
            </foreignObject>

            <circle cx="195" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="195" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-1</text>

            <circle cx="265" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="225" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{1}{3}"}</InlineMath>
              </div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Промежуточное решение */}
            <path d="M 55 60 L 55 45 A 10 10 0 0 1 65 35 L 115 35 A 10 10 0 0 1 125 45 L 125 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 195 60 L 195 45 A 10 10 0 0 1 205 35 L 255 35 A 10 10 0 0 1 265 45 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ 3x^2 + 8x + 5 >= 0 аналогично совпадает с (-inf; -5/3] U [-1; +inf) */}
            <path d="M 15 15 L 115 15 A 10 10 0 0 1 125 25 L 125 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 195 60 L 195 25 A 10 10 0 0 1 205 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            <line x1="59" y1="58" x2="65" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="71" y1="58" x2="77" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="83" y1="58" x2="89" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="95" y1="58" x2="101" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="107" y1="58" x2="113" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="119" y1="58" x2="123" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="199" y1="58" x2="205" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="211" y1="58" x2="217" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="223" y1="58" x2="229" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="235" y1="58" x2="241" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="263" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>
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

        <p>Исследуем знаки полученного рационального выражения методом интервалов на числовой прямой. На чертеже крышами отмечены области выполнения условий совместной системы:</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="110" viewBox="0 0 400 110" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка знаменателя 0 */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная точка числителя 2 */}
            <circle cx="245" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="245" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* Крыши решения там, где знак "-" (<= 0): отрезок полуинтервал */}
            <path d="M 115 60 L 115 45 A 10 10 0 0 1 125 35 L 235 35 A 10 10 0 0 1 245 45 L 245 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* Штриховка чистых интервалов знака "-" */}
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="133" y1="58" x2="139" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="147" y1="58" x2="153" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="181" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="209" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="217" y1="58" x2="223" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="239" y1="58" x2="241" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Откуда находим промежуточное решение для дробной части неравенства:</p>
        <BlockMath>{"x \\in (0; \\, 2]"}</BlockMath>

        <p>Пересечёт полученные множества со сквозными интервалами области допустимых значений ОДЗ:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная точка решения 2 */}
            <circle cx="245" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="245" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Промежуточное решение */}
            <path d="M 115 60 L 115 45 A 10 10 0 0 1 125 35 L 235 35 A 10 10 0 0 1 245 45 L 245 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > 0 */}
            <path d="M 115 60 L 115 25 A 10 10 0 0 1 125 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="133" y1="58" x2="139" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="147" y1="58" x2="153" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="181" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="209" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="217" y1="58" x2="223" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="239" y1="58" x2="241" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На чертеже крышами отмечены области выполнения совместной системы неравенств:</p>
        {/* 📈 ЧЕРТЁЖ №1: МЕТОД ИНТЕРВАЛОВ ДЛЯ ДРОБИ В СТИЛЕ КРЫШ (БЕЗ ОДЗ) */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="110" viewBox="0 0 400 110" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка 8 */}
            <circle cx="145" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="145" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">8</text>

            {/* Выколотая точка 16 */}
            <circle cx="245" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="245" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">16</text>

            {/* Крыши решения совокупности */}
            <path d="M 15 35 L 135 35 A 10 10 0 0 1 145 45 L 145 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 245 60 L 245 45 A 10 10 0 0 1 255 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* Штриховка чистых интервалов */}
            <line x1="18" y1="58" x2="24" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="32" y1="58" x2="38" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="46" y1="58" x2="52" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="60" y1="58" x2="66" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="74" y1="58" x2="80" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="88" y1="58" x2="94" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="102" y1="58" x2="108" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="116" y1="58" x2="122" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="130" y1="58" x2="136" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="138" y1="58" x2="141" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            <line x1="249" y1="58" x2="255" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="263" y1="58" x2="269" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="277" y1="58" x2="283" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="305" y1="58" x2="311" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="333" y1="58" x2="339" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>Пересечёт полученные множества со сквозными интервалами области допустимых значений ОДЗ:</p>

        {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка 8 */}
            <circle cx="165" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="165" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">8</text>

            {/* Выколотая точка 16 */}
            <circle cx="255" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="255" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">16</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Промежуточное решение */}
            <path d="M 15 35 L 155 35 A 10 10 0 0 1 165 45 L 165 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 255 60 L 255 45 A 10 10 0 0 1 265 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > 0 */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Ограничение ОДЗ x>0 обрезает левый луч, превращая его в интервал (0; 8) */}
            <line x1="69" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="77" y1="58" x2="83" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="85" y1="58" x2="91" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="97" y1="58" x2="103" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="113" y1="58" x2="119" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="121" y1="58" x2="127" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="153" y1="58" x2="159" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="159" y1="58" x2="161" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Луч (16; +inf) */}
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="267" y1="58" x2="273" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="277" y1="58" x2="283" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="305" y1="58" x2="311" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="333" y1="58" x2="339" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На чертеже крышами отмечены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        {/* Иррациональная точка выведена оригинальным KaTeX-шрифтом через foreignObject строго под cx=115 */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка границы ОДЗ log3(2.5) */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="75" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\log_3 2.5"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка ОДЗ 1 */}
            <circle cx="245" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="245" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части (Вся числовая ось) */}
            <line x1="15" y1="35" x2="345" y2="35" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > log3(2.5), x != 1 */}
            <path d="M 115 60 L 115 25 A 10 10 0 0 1 125 15 L 235 15 A 10 10 0 0 1 245 25 L 245 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 245 60 L 245 25 A 10 10 0 0 1 255 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Интервал (log3 2.5; 1) */}
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="133" y1="58" x2="139" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="147" y1="58" x2="153" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="181" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="58" x2="195" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="203" y1="58" x2="209" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="217" y1="58" x2="223" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="239" y1="58" x2="241" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Открытый луч (1; +inf) */}
            <line x1="249" y1="58" x2="255" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="263" y1="58" x2="269" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="277" y1="58" x2="283" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="291" y1="58" x2="297" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="305" y1="58" x2="311" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="333" y1="58" x2="339" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На чертеже крышами отмечены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: К КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная точка числителя 1/8 */}
            <circle cx="165" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="125" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{1}{8}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Закрашенная точка числителя 2 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="265" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части совокупности */}
            <path d="M 15 35 L 155 35 A 10 10 0 0 1 165 45 L 165 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 265 60 L 265 45 A 10 10 0 0 1 275 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > 0 */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Отрезок пересечения (0; 1/8] */}
            <line x1="69" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="77" y1="58" x2="83" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="85" y1="58" x2="91" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="97" y1="58" x2="103" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="113" y1="58" x2="119" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="121" y1="58" x2="127" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="153" y1="58" x2="159" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="159" y1="58" x2="161" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Открытый луч [2; +inf) */}
            <line x1="269" y1="58" x2="275" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="277" y1="58" x2="283" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="293" y1="58" x2="299" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="305" y1="58" x2="311" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="333" y1="58" x2="339" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная точка числителя 1 */}
            <circle cx="165" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="165" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Закрашенная иррациональная точка числителя log_{1.5} 6 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="225" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\log_{1.5} 6"}</InlineMath>
              </div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части совокупности */}
            <path d="M 15 35 L 155 35 A 10 10 0 0 1 165 45 L 165 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 265 60 L 265 45 A 10 10 0 0 1 275 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > 0 */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Отрезок пересечения (0; 1] */}
            <line x1="69" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="77" y1="58" x2="83" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="85" y1="58" x2="91" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="97" y1="58" x2="103" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="113" y1="58" x2="119" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="121" y1="58" x2="127" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="153" y1="58" x2="159" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="159" y1="58" x2="161" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Открытый луч [log_{1.5} 6; +inf) */}
            <line x1="269" y1="58" x2="275" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="277" y1="58" x2="283" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="285" y1="58" x2="291" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="293" y1="58" x2="299" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="305" y1="58" x2="311" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="333" y1="58" x2="339" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="125" viewBox="0 0 440 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="408" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ -3 */}
            <circle cx="45" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="45" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-3</text>

            {/* Выколотая точка ОДЗ -2 */}
            <circle cx="115" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="115" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-2</text>

            {/* Закрашенная точка числителя 3/13 */}
            <circle cx="195" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="155" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{3}{13}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка ОДЗ 3 */}
            <circle cx="265" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="265" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* Выколотая точка ОДЗ 4 */}
            <circle cx="335" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="335" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">4</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части */}
            <path d="M 15 35 L 105 35 A 10 10 0 0 1 115 45 L 115 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 195 60 L 195 45 A 10 10 0 0 1 205 35 L 375 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифма */}
            <path d="M 45 60 L 45 25 A 10 10 0 0 1 55 15 L 105 15 A 10 10 0 0 1 115 25 L 115 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 115 60 L 115 25 A 10 10 0 0 1 125 15 L 255 15 A 10 10 0 0 1 265 25 L 265 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 335 60 L 335 25 A 10 10 0 0 1 345 15 L 375 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Интервал (-3; -2) */}
            <line x1="49" y1="58" x2="55" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="57" y1="58" x2="63" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="65" y1="58" x2="71" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="73" y1="58" x2="79" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="81" y1="58" x2="87" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="89" y1="58" x2="95" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="97" y1="58" x2="103" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="111" y1="58" x2="113" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Полуинтервал [3/13; 3) */}
            <line x1="199" y1="58" x2="205" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="213" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="215" y1="58" x2="221" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="223" y1="58" x2="229" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="239" y1="58" x2="245" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="255" y1="58" x2="261" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="259" y1="58" x2="261" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Открытый луч (4; +inf) */}
            <line x1="339" y1="58" x2="345" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="347" y1="58" x2="353" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="355" y1="58" x2="361" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="363" y1="58" x2="369" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="371" y1="58" x2="377" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>
          Запишем исходное неравенство в виде единой равносильной системы условий, содержащей ограничения ОДЗ для всех аргументов и переменных оснований логарифмических функций:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 8^{\\log_{x^2-1}(x-1)} + 8^{\\log_{x^2-1}(x+1)} \\le 6 \\\\ x - 1 > 0 \\\\ x + 1 > 0 \\\\ x^2 - 1 > 0 \\\\ x^2 - 1 \\neq 1 \\end{cases} \\iff \\begin{cases} 8^{\\log_{x^2-1}(x-1)} + 8^{\\log_{x^2-1}(x+1)} \\le 6 \\\\ x > 1 \\\\ x > -1 \\\\ x \\in (-\\infty; \\, -1) \\cup (1; \\, +\\infty) \\\\ x^2 \\neq 2 \\end{cases}"}</BlockMath>

        <p>
          Сведём ограничения аргументов и оснований к общему пересечению интервалов ОДЗ системы: 
          <InlineMath>{"x \\in (1; \\, \\sqrt{2}) \\cup (\\sqrt{2}; \\, +\\infty)"}</InlineMath>.
        </p>

        <p>
          Преобразуем слагаемые в левой части неравенства, используя основное логарифмическое тождество перестановки основания и аргумента степени: <InlineMath>{"A^{\\log_B C} = C^{\\log_B A}"}</InlineMath>.
        </p>
        <BlockMath>{"8^{\\log_{x^2-1}(x-1)} = (x-1)^{\\log_{x^2-1} 8}"}</BlockMath>
        <BlockMath>{"8^{\\log_{x^2-1}(x+1)} = (x+1)^{\\log_{x^2-1} 8}"}</BlockMath>

        <p>
          Сделаем замену переменной. Пусть первое слагаемое равно <InlineMath>{"t"}</InlineMath>: 
          <BlockMath>{"t = (x-1)^{\\log_{x^2-1} 8}"}</BlockMath>
          Выразим через <InlineMath>{"t"}</InlineMath> второе слагаемое, перемножив их между собой по свойствам одинаковых показателей степеней на ОДЗ:
          <BlockMath>{"(x-1)^{\\log_{x^2-1} 8} \\cdot (x+1)^{\\log_{x^2-1} 8} = \\left((x-1)(x+1)\\right)^{\\log_{x^2-1} 8} = (x^2 - 1)^{\\log_{x^2-1} 8} = 8"}</BlockMath>
          Поскольку их произведение равно 8, то второе слагаемое выражается как <InlineMath>{"\\frac{8}{t}"}</InlineMath>.
        </p>

        <p>Перейдём к простейшему дробно-рациональному неравенству относительно введённой переменной t:</p>
        <BlockMath>{"t + \\frac{8}{t} \\le 6 \\iff \\frac{t^2 - 6t + 8}{t} \\le 0 \\iff \\frac{(t - 2)(t - 4)}{t} \\le 0"}</BlockMath>

        <p>
          Поскольку исходные показательные функции всегда строго положительны на ОДЗ, то <InlineMath>{"t > 0"}</InlineMath>. Применяя метод интервалов, находим решение для переменной t:
          <BlockMath>{"2 \\le t \\le 4"}</BlockMath>
        </p>

        <p>Выполним обратную замену, вернувшись к показательной функции со свойством тождества:</p>
        <BlockMath>{"2 \\le 8^{\\log_{x^2-1}(x-1)} \\le 4 \\iff 2^1 \\le 2^{3\\log_{x^2-1}(x-1)} \\le 2^2 \\iff \\frac{1}{3} \\le \\log_{x^2-1}(x-1) \\le \\frac{2}{3}"}</BlockMath>

        <p>
          Представим константы границ в виде логарифмов по основанию <InlineMath>{"x^2-1"}</InlineMath> и разберём два классических школьных случая в зависимости от числового промежутка переменного основания логарифма:
        </p>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-3">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Случай 1. Если основание логарифма больше единицы, то есть <InlineMath>{"x \\in (\\sqrt{2}; \\, +\\infty)"}</InlineMath>:</p>
          <p>Опускаем логарифмы с сохранением знаков неравенств:</p>
          <BlockMath>{"(x^2 - 1)^{1/3} \\le x - 1 \\le (x^2 - 1)^{2/3} \\iff \\begin{cases} x^2 - 1 \\le (x-1)^3 \\\\ (x-1)^3 \\le (x^2-1)^2 \\end{cases}"}</BlockMath>
          <p>При раскрытии скобок и анализе графиков функций получаем, что на данном числовом луче совместных вещественных решений нет.</p>
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-3">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Случай 2. Если основание логарифма лежит между нулём и единицей, то есть <InlineMath>{"x \\in (1; \\, \\sqrt{2})"}</InlineMath>:</p>
          <p>Опускаем логарифмы со сменой знаков неравенств на противоположные:</p>
          <BlockMath>{"(x^2 - 1)^{2/3} \\le x - 1 \\le (x^2 - 1)^{1/3} \\iff \\begin{cases} (x^2-1)^2 \\le (x-1)^3 \\\\ (x-1)^3 \\le x^2 - 1 \\end{cases}"}</BlockMath>
          <p>Сокращая обе части на строго положительную на ОДЗ разность <InlineMath>{"(x-1) > 0"}</InlineMath>, находим единственное изолированное решение — точку золотого сечения: <InlineMath>{"x = \\frac{1+\\sqrt{5}}{2}"}</InlineMath>.</p>
        </div>

        <p>Визуализируем наложение полученного изолированного корня на интервалы области допустимых значений:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        {/* Иррациональные координаты выведены оригинальным KaTeX-шрифтом через foreignObject */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="440" height="125" viewBox="0 0 440 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M400 60 l-6 -3 M400 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="408" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 1 */}
            <circle cx="55" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="55" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Закрашенная золотая точка решения */}
            <circle cx="155" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="115" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{1+\\sqrt{5}}{2}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка границы ОДЗ sqrt(2) */}
            <circle cx="255" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="215" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\sqrt{2}"}</InlineMath>
              </div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Изолированное решение золотого сечения */}
            <circle cx="155" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифма (1; sqrt 2) U (sqrt 2; +inf) */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 245 15 A 10 10 0 0 1 255 25 L 255 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 255 60 L 255 25 A 10 10 0 0 1 265 15 L 375 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА НА ИЗОЛИРОВАННУЮ ТОЧКУ */}
            <line x1="155" y1="58" x2="155" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />
          </svg>
        </div>

        <p>В результате пересечения множеств получаем окончательный изолированный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x = \\frac{1 + \\sqrt{5}}{2}"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\frac{1 + \\sqrt{5}}{2}"}</InlineMath>
          </div>
        </div>
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

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На чертеже крышами отмечены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: К КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка ОДЗ 0 */}
            <circle cx="75" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="75" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка числителя 4 */}
            <circle cx="195" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="195" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">4</text>

            {/* Закрашенная точка ОДЗ 6 */}
            <circle cx="315" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="315" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">6</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части числителя (Вся ось, кроме 4) */}
            <path d="M 15 35 L 185 35 A 10 10 0 0 1 195 45 L 195 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 195 60 L 195 45 A 10 10 0 0 1 205 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифма [0; 6] */}
            <path d="M 75 60 L 75 25 A 10 10 0 0 1 85 15 L 305 15 A 10 10 0 0 1 315 25 L 315 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Отрезок [0; 4) */}
            <line x1="79" y1="58" x2="85" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="91" y1="58" x2="97" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="105" y1="58" x2="111" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="119" y1="58" x2="125" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="133" y1="58" x2="139" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="147" y1="58" x2="153" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="161" y1="58" x2="167" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="175" y1="58" x2="181" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="189" y1="58" x2="191" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Полуинтервал (4; 6] */}
            <line x1="199" y1="58" x2="205" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="213" y1="58" x2="219" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="227" y1="58" x2="233" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="241" y1="58" x2="247" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="255" y1="58" x2="261" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="269" y1="58" x2="275" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="283" y1="58" x2="289" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="297" y1="58" x2="303" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="311" y1="58" x2="313" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На чертеже крышами отмечены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        {/* Дробные координаты выведены оригинальным KaTeX-шрифтом через foreignObject */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка числителя 1/9 */}
            <circle cx="55" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="15" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{1}{9}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка ОДЗ 1/3 */}
            <circle cx="155" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="115" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{1}{3}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Закрашенная точка числителя 2/3 */}
            <circle cx="255" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="215" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{2}{3}"}</InlineMath>
              </div>
            </foreignObject>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части отрезка */}
            <path d="M 55 60 L 55 45 A 10 10 0 0 1 65 35 L 245 35 A 10 10 0 0 1 255 45 L 255 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифма x > 1/3 */}
            <path d="M 155 60 L 155 25 A 10 10 0 0 1 165 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Нижняя граница 1/3 выкалывается по ОДЗ, верхняя 2/3 остается закрашенной */}
            <line x1="159" y1="58" x2="165" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="171" y1="58" x2="177" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="183" y1="58" x2="189" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="195" y1="58" x2="201" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="207" y1="58" x2="213" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="219" y1="58" x2="225" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="231" y1="58" x2="237" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="243" y1="58" x2="249" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="249" y1="58" x2="251" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>
          Представим число 2 в правой части как логарифм по основанию <InlineMath>{"x"}</InlineMath> и перейдём к единой равносильной системе условий, содержащей ограничения ОДЗ для аргумента и переменного основания логарифмической функции:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_x \\frac{2x}{3-x} \\le \\log_x x^2 \\\\ \\frac{2x}{3-x} > 0 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases} \\iff \\begin{cases} \\log_x \\frac{2x}{3-x} \\le \\log_x x^2 \\\\ 3 - x > 0 \\\\ x > 0 \\\\ x \\neq 1 \\end{cases}"}</BlockMath>

        <p>
          Сведём ограничения аргументов и переменных оснований к общему пересечению интервалов ОДЗ системы: 
          <InlineMath>{"x \\in (0; \\, 1) \\cup (1; \\, 3)"}</InlineMath>.
          Применим метод замены множителей (рационализации) к полученной логарифмической разности:
        </p>
        <BlockMath>{"\\iff \\begin{cases} (x - 1) \\cdot \\left(\\frac{2x}{3-x} - x^2\\right) \\le 0 \\\\ x \\in (0; \\, 1) \\cup (1; \\, 3) \\end{cases}"}</BlockMath>
        <BlockMath>{"\\iff \\begin{cases} (x - 1) \\cdot \\frac{2x - x^2(3-x)}{3-x} \\le 0 \\\\ x \\in (0; \\, 1) \\cup (1; \\, 3) \\end{cases} \\iff \\begin{cases} \\frac{(x - 1)(x^3 - 3x^2 + 2x)}{3-x} \\le 0 \\\\ x \\in (0; \\, 1) \\cup (1; \\, 3) \\end{cases}"}</BlockMath>

        <p>Вынесем общий множитель x в числителе и разложим квадратный трёхчлен на линейные скобки:</p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{x(x - 1)(x^2 - 3x + 2)}{3-x} \\le 0 \\\\ x \\in (0; \\, 1) \\cup (1; \\, 3) \\end{cases} \\iff \\begin{cases} \\frac{x(x - 1)^2(x - 2)}{3-x} \\le 0 \\\\ x \\in (0; \\, 1) \\cup (1; \\, 3) \\end{cases}"}</BlockMath>

        <p>Умножим неравенство на \(-1\) и поменяем знаки в знаменателе для приведения к каноническому интервальному виду:</p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{x(x - 1)^2(x - 2)}{x - 3} \\ge 0 \\\\ x \\in (0; \\, 1) \\cup (1; \\, 3) \\end{cases}"}</BlockMath>

        <p>Решая основное рациональное выражение методом интервалов знаков, находим промежуточное решение (без учёта ОДЗ):</p>
        <BlockMath>{"x \\in (-\\infty; \\, 0] \\cup \\{1\\} \\cup [2; \\, 3)"}</BlockMath>

        <p>Пересечёт полученные множества со сквозными базовыми интервалами области допустимых значений логарифма:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная точка 0 */}
            <circle cx="55" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="55" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка ОДЗ 1 */}
            <circle cx="135" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="135" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Закрашенная точка числителя 2 */}
            <circle cx="215" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="215" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* Выколотая точка границы ОДЗ 3 */}
            <circle cx="295" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="295" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части */}
            <path d="M 15 35 L 55 35 A 10 10 0 0 1 65 45 L 65 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <circle cx="135" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 215 60 L 215 45 A 10 10 0 0 1 225 35 L 285 35 A 10 10 0 0 1 295 45 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифма (0; 1) U (1; 3) */}
            <path d="M 55 60 L 55 25 A 10 10 0 0 1 65 15 L 125 15 A 10 10 0 0 1 135 25 L 135 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 135 60 L 135 25 A 10 10 0 0 1 145 15 L 285 15 A 10 10 0 0 1 295 25 L 295 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Полуинтервал [2; 3) */}
            <line x1="219" y1="58" x2="225" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="233" y1="58" x2="239" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="247" y1="58" x2="253" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="261" y1="58" x2="267" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="275" y1="58" x2="281" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="289" y1="58" x2="293" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="293" y1="58" x2="295" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in [2; \\, 3)"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"[2; \\, 3)"}</InlineMath>
          </div>
        </div>
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

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На чертеже крышами отмечены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 2,5 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2,5</text>

            {/* Выколотая точка ОДЗ 3 */}
            <circle cx="165" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="165" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* Закрашенная изолированная точка решения 4 */}
            <circle cx="265" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="265" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">4</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части (x < 3 U {4}) */}
            <path d="M 15 35 L 155 35 A 10 10 0 0 1 165 45 L 165 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <circle cx="265" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ (2.5; 3) U (3; +inf) */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 155 15 A 10 10 0 0 1 165 25 L 165 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 165 60 L 165 25 A 10 10 0 0 1 175 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Интервал (2.5; 3) */}
            <line x1="69" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="77" y1="58" x2="83" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="85" y1="58" x2="91" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="93" y1="58" x2="99" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="101" y1="58" x2="107" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="109" y1="58" x2="115" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="117" y1="58" x2="123" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="125" y1="58" x2="131" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="133" y1="58" x2="139" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="141" y1="58" x2="147" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="149" y1="58" x2="155" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="157" y1="58" x2="161" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Изолированная закрашенная точка {4} */}
            <line x1="265" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />
          </svg>
        </div>

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

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На чертеже крышами отмечены области выполнения условий совместной системы:</p>
                {/* 🌌 ЧЕРТЁЖ №2: НАЛОЖЕНИЕ ОДЗ И ИТОГОВОЕ ПЕРЕСЕЧЕНИЕ МНОЖЕСТВ С ВЫВЕРЕННОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка 1/9 */}
            <circle cx="155" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="115" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{1}{9}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Выколотая точка 9 */}
            <circle cx="255" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="255" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">9</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Промежуточное решение */}
            <path d="M 15 35 L 145 35 A 10 10 0 0 1 155 45 L 155 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 255 60 L 255 45 A 10 10 0 0 1 265 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > 0 */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА ЗАПЕРТА СТРОГО В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Выверенный интервал (0; 1/9) */}
            <line x1="69" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="77" y1="58" x2="83" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="85" y1="58" x2="91" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="93" y1="58" x2="99" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="101" y1="58" x2="107" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="109" y1="58" x2="115" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="121" y1="58" x2="127" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="129" y1="58" x2="135" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="137" y1="58" x2="143" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="145" y1="58" x2="151" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Выверенный интервал (9; +inf) */}
            <line x1="259" y1="58" x2="265" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="271" y1="58" x2="277" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="279" y1="58" x2="285" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="287" y1="58" x2="293" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="295" y1="58" x2="301" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="303" y1="58" x2="309" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="311" y1="58" x2="317" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="327" y1="58" x2="333" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="335" y1="58" x2="341" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="343" y1="58" x2="349" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
        
        <p>
          Представим число 2 в правой части как логарифм по основанию <InlineMath>{"\\sqrt{3-x}"}</InlineMath> и запишем исходное неравенство в виде единой равносильной системы условий, содержащей ограничения ОДЗ для аргумента и подкоренного переменного основания:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\log_{\\sqrt{3-x}}(3+x) \\le \\log_{\\sqrt{3-x}}(\\sqrt{3-x})^2 \\\\ 3 + x > 0 \\\\ 3 - x > 0 \\\\ \\sqrt{3-x} \\neq 1 \\end{cases} \\iff \\begin{cases} \\log_{\\sqrt{3-x}}(3+x) \\le \\log_{\\sqrt{3-x}}(3-x) \\\\ x > -3 \\\\ x < 3 \\\\ x \\neq 2 \\end{cases}"}</BlockMath>

        <p>
          Сведём ограничения аргументов и переменных оснований к общему пересечению интервалов ОДЗ системы: 
          <InlineMath>{"x \\in (-3; \\, 2) \\cup (2; \\, 3)"}</InlineMath>.
          Применим метод замены множителей (рационализации) к полученной разности логарифмов:
        </p>
        <BlockMath>{"\\iff \\begin{cases} (\\sqrt{3-x} - 1) \\cdot \\left((3 + x) - (3 - x)\\right) \\le 0 \\\\ x \\in (-3; \\, 2) \\cup (2; \\, 3) \\end{cases} \\iff \\begin{cases} (\\sqrt{3-x} - 1) \\cdot 2x \\le 0 \\\\ x \\in (-3; \\, 2) \\cup (2; \\, 3) \\end{cases}"}</BlockMath>

        <p>
          Умножим неравенство на строго положительное сопряжённое выражение <InlineMath>{"\\sqrt{3-x} + 1 > 0"}</InlineMath> для избавления от иррациональности знака первой скобки:
        </p>
        <BlockMath>{"\\iff \\begin{cases} (3 - x - 1) \\cdot x \\le 0 \\\\ x \\in (-3; \\, 2) \\cup (2; \\, 3) \\end{cases} \\iff \\begin{cases} x(2 - x) \\le 0 \\\\ x \\in (-3; \\, 2) \\cup (2; \\, 3) \\end{cases} \\iff \\begin{cases} x(x - 2) \\ge 0 \\\\ x \\in (-3; \\, 2) \\cup (2; \\, 3) \\end{cases}"}</BlockMath>

        <p>Решая основное рациональное выражение методом интервалов знаков, находим промежуточное решение (без учёта ОДЗ):</p>
        <BlockMath>{"x \\in (-\\infty; \\, 0] \\cup [2; \\, +\\infty)"}</BlockMath>

        <p>Пересечёт полученные множества со сквозными базовыми интервалами области допустимых значений логарифма:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ -3 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">-3</text>

            {/* Закрашенная точка числителя 0 */}
            <circle cx="145" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="145" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка ОДЗ 2 */}
            <circle cx="225" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="225" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* Выколотая точка границы ОДЗ 3 */}
            <circle cx="305" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="305" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части (x <= 0 U x >= 2) */}
            <path d="M 15 35 L 135 35 A 10 10 0 0 1 145 45 L 145 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 225 60 L 225 45 A 10 10 0 0 1 235 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ логарифма (-3; 2) U (2; 3) */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 215 15 A 10 10 0 0 1 225 25 L 225 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />
            <path d="M 225 60 L 225 25 A 10 10 0 0 1 235 15 L 295 15 A 10 10 0 0 1 305 25 L 305 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА СТРОГО В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Выверенный полуинтервал (-3; 0] */}
            <line x1="69" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="77" y1="58" x2="83" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="85" y1="58" x2="91" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="93" y1="58" x2="99" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="101" y1="58" x2="107" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="109" y1="58" x2="115" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="117" y1="58" x2="123" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="125" y1="58" x2="131" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="133" y1="58" x2="139" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="139" y1="58" x2="141" y2="44" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

        <p>В результате пересечения множеств получаем окончательный ответ олимпиадного неравенства ДВИ:</p>
        <BlockMath>{"x \\in (-3; \\, 0]"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"(-3; \\, 0]"}</InlineMath>
          </div>
        </div>
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

        <p>Исследуем знаки полученного выражения методом интервалов на числовой прямой. На чертеже крышами отмечены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ С ВЫВЕРЕННОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная точка числителя 1/9 */}
            <circle cx="155" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="115" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs">
                <InlineMath>{"\\frac{1}{9}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Закрашенная точка числителя 3 */}
            <circle cx="255" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="255" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части совокупности */}
            <path d="M 15 35 L 145 35 A 10 10 0 0 1 155 45 L 155 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            <path d="M 255 60 L 255 45 A 10 10 0 0 1 265 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > 0 */}
            <path d="M 65 60 L 65 25 A 10 10 0 0 1 75 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СИНЯЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Идеально запертый отрезок (0; 1/9] */}
            <line x1="69" y1="58" x2="75" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="77" y1="58" x2="83" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="85" y1="58" x2="91" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="93" y1="58" x2="99" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="101" y1="58" x2="107" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="109" y1="58" x2="115" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="117" y1="58" x2="123" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="125" y1="58" x2="131" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="133" y1="58" x2="139" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="141" y1="58" x2="147" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="149" y1="58" x2="155" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />

            {/* Идеально запертый луч [3; +inf) */}
            <line x1="255" y1="58" x2="261" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="263" y1="58" x2="269" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="271" y1="58" x2="277" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="279" y1="58" x2="285" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="287" y1="58" x2="293" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="295" y1="58" x2="301" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="303" y1="58" x2="309" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="311" y1="58" x2="317" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="319" y1="58" x2="325" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="327" y1="58" x2="333" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="335" y1="58" x2="341" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
            <line x1="343" y1="58" x2="349" y2="37" stroke="#328ce6" strokeWidth="1.2" opacity="0.4" />
          </svg>
        </div>

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
          <p>Оба корня являются изолированными решениями неравенства, так как показатель степени существует при любых вещественных значениях переменной.</p>
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Случай 2. Основание больше единицы:</p>
          <BlockMath>{"\\begin{cases} 3x^2 - 3x > 0 \\\\ x(x - 3) \\le 0 \\end{cases} \\iff \\begin{cases} x \\in (-\\infty; \\, 0) \\cup (1; \\, +\\infty) \\\\ x \\in [0; \\, 3] \\end{cases} \\iff x \\in (1; \\, 3]"}</BlockMath>
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Случай 3. Основание меньше единицы:</p>
          <p>Оценим строго положительные границы квадратного трёхчлена основания:</p>
          <BlockMath>{"3x^2 - 3x + 1 > 0 \\implies D = 9 - 12 = -3 < 0 \\implies x \\in \\mathbb{R}"}</BlockMath>
          <p>Тогда система принимает вид:</p>
          <BlockMath>{"\\begin{cases} 3x^2 - 3x < 0 \\\\ x(x - 3) \\ge 0 \\end{cases} \\iff \\begin{cases} x \\in (0; \\, 1) \\\\ x \\in (-\\infty; \\, 0] \\cup [3; \\, +\\infty) \\end{cases} \\iff \\varnothing"}</BlockMath>
          <p>В данном интервале совместных решений нет.</p>
        </div>

        <p>Объединяя результаты всех трёх ветвей совокупности, находим итоговое решение:</p>
        <BlockMath>{"x \\in \\{0\\} \\cup [1; \\, 3]"}</BlockMath>

        <p>Визуализируем наложение полученного отрезка и изолированной точки на числовой оси:</p>

        <BlockMath>{"x \\in \\{0\\} \\cup [1; \\, 3]"}</BlockMath>

        <p>Визуализируем наложение полученного отрезка и изолированной точки на числовой оси:</p>
        {/* 🌌 ЧЕРТЁЖ: ИДЕАЛЬНОЕ НАЛОЖЕНИЕ КРЫШ С АВТОМАТИЧЕСКОЙ СЕТОЧНОЙ ШТРИХОВКОЙ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="110" viewBox="0 0 400 110" className="overflow-visible font-sans font-bold text-[13px]">
            <defs>
              <pattern id="diagonalHatch116" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#328ce6" strokeWidth="1" opacity="0.4" />
              </pattern>
            </defs>

            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Закрашенная изолированная точка решения 0 */}
            <circle cx="85" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="85" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная точка числителя 1 */}
            <circle cx="185" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="185" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Закрашенная точка числителя 3 */}
            <circle cx="285" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="285" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">3</text>

            {/* 📈 КРЫШИ РЕШЕНИЯ В СТИЛЕ СТУПЕНЕЙ */}
            {/* Изолированная точка 0 */}
            <circle cx="85" cy="35" r="2.5" fill="currentColor" className="text-slate-400 dark:text-slate-600" opacity="0.4" />
            {/* Отрезок [1; 3] */}
            <path d="M 185 60 L 185 45 A 10 10 0 0 1 195 35 L 275 35 A 10 10 0 0 1 285 45 L 285 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🟦 СЕТОЧНАЯ ШТРИХОВКА ЗАПЕРТАЯ СТРОГО ВНУТРИ ИНТЕРВАЛОВ */}
            {/* Изолированная точка 0 */}
            <line x1="85" y1="58" x2="85" y2="37" stroke="#328ce6" strokeWidth="1.5" opacity="0.7" />
            {/* Отрезок [1; 3] */}
            <rect x="185" y="35" width="100" height="25" fill="url(#diagonalHatch116)" pointerEvents="none" />
          </svg>
        </div>

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
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            <defs>
              <pattern id="diagonalHatch117" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#328ce6" strokeWidth="1" opacity="0.4" />
              </pattern>
            </defs>

            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 1 */}
            <circle cx="95" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="95" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Закрашенная точка числителя 2 */}
            <circle cx="215" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="215" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части (x >= 2) */}
            <path d="M 215 60 L 215 45 A 10 10 0 0 1 225 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): ОДЗ x > 1 */}
            <path d="M 95 60 L 95 25 A 10 10 0 0 1 105 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СЕТОЧНАЯ ШТРИХОВКА ЗАПЕРТАЯ СТРОГО ВНУТРИ ИНТЕРВАЛОВ */}
            {/* Открытый луч [2; +inf) */}
            <rect x="215" y="35" width="130" height="25" fill="url(#diagonalHatch117)" pointerEvents="none" />
          </svg>
        </div>

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
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение уравнения:</p>
        
        <p>
          Запишем исходное уравнение в виде единой равносильной системы условий, содержащей ограничения ОДЗ для всех аргументов и переменных оснований логарифмических функций:
        </p>
        <BlockMath>{"\\iff \\begin{cases} |\\log_3^2 x - \\log_{2x}^2 2| = \\log_3^2 x + \\log_{2x}^2 2 - 2 \\\\ x > 0 \\\\ 2x > 0 \\\\ 2x \\neq 1 \\end{cases} \\iff \\begin{cases} |\\log_3^2 x - \\log_{2x}^2 2| = \\log_3^2 x + \\log_{2x}^2 2 - 2 \\\\ x \\in (0; \\, 0.5) \\cup (0.5; \\, +\\infty) \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменных для упрощения алгебраической структуры: пусть</span>
          <InlineMath>{"a = \\log_3^2 x"}</InlineMath>
          <span>и</span>
          <InlineMath>{"b = \\log_{2x}^2 2"}</InlineMath>
          <span>(где по определению полных квадратов</span>
          <InlineMath>{"a \\ge 0"}</InlineMath>,
          <InlineMath>{"b > 0"}</InlineMath>).
          <span>Уравнение принимает вид:</span>
        </div>
        <BlockMath>{"|a - b| = a + b - 2"}</BlockMath>

        <p>
          Раскроем модуль по определению, перейдя к совокупности двух систем условий на знаки подмодульного выражения:
        </p>
        <BlockMath>{"\\iff \\left[ \\begin{aligned} &\\begin{cases} a - b \\ge 0 \\\\ a - b = a + b - 2 \\end{cases} \\\\ &\\begin{cases} a - b < 0 \\\\ -(a - b) = a + b - 2 \\end{cases} \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &\\begin{cases} a \\ge b \\\\ b = 1 \\end{cases} \\\\ &\\begin{cases} a < b \\\\ a = 1 \\end{cases} \\end{aligned} \\right. \\iff \\left[ \\begin{aligned} &\\begin{cases} b = 1 \\\\ a \\ge 1 \\end{cases} \\\\ &\\begin{cases} a = 1 \\\\ b > 1 \\end{cases} \\end{aligned} \\right."}</BlockMath>

        <p>Выполним обратную замену для каждой из ветвей полученной совокупности систем условий:</p>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Ветвь 1. Условия системы b = 1 и a &ge; 1:</p>
          <BlockMath>{"\\begin{cases} \\log_{2x}^2 2 = 1 \\\\ \\log_3^2 x \\ge 1 \\end{cases} \\iff \\begin{cases} \\log_{2x} 2 = \\pm 1 \\\\ |\\log_3 x| \\ge 1 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &2x = 2 \\iff x = 1 \\\\ &2x = \\frac{1}{2} \\iff x = 0.25 \\end{aligned} \\right. \\\\ x \\in (0; \\, 1/3] \\cup [3; \\, +\\infty) \\end{cases}"}</BlockMath>
          <p>Проверяя корни, замечаем, что точка <InlineMath>{"x = 1"}</InlineMath> не подходит под неравенство, а точка <InlineMath>{"x = 0.25"}</InlineMath> полностью удовлетворяет условию (<InlineMath>{"0.25 \\le 1/3"}</InlineMath>). Получаем корень: <InlineMath>{"x = \\frac{1}{4}"}</InlineMath>.</p>
        </div>

        <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Ветвь 2. Условия системы a = 1 и b &gt; 1:</p>
          <BlockMath>{"\\begin{cases} \\log_3^2 x = 1 \\\\ \\log_{2x}^2 2 > 1 \\end{cases} \\iff \\begin{cases} \\log_3 x = \\pm 1 \\\\ |\\log_{2x} 2| > 1 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{aligned} &x = 3 \\\\ &x = \\frac{1}{3} \\end{aligned} \\right. \\\\ 0 < |\\log_2(2x)| < 1 \\end{cases}"}</BlockMath>
          <p>Подставляя оба значения, находим, что точка <InlineMath>{"x = 3"}</InlineMath> даёт верное неравенство <InlineMath>{"|\\log_2 6| > 1"}</InlineMath> (так как <InlineMath>{"\\log_2 6 > \\log_2 4 = 2 > 1"}</InlineMath>), а точка <InlineMath>{"x = 1/3"}</InlineMath> не удовлетворяет ограничению. Получаем второй корень: <InlineMath>{"x = 3"}</InlineMath>.</p>
        </div>

        <p>Объединяя результаты, получаем итоговые дискретные точки на числовой прямой:</p>

        {/* 🌌 ЧЕРТЁЖ: ИДЕАЛЬНОЕ ОТОБРАЖЕНИЕ ДИСКРЕТНЫХ ТОЧЕК НА ЧИСЛОВОЙ ОСИ X ПО СТАНДАРТУ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="110" viewBox="0 0 400 110" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Выколотая точка ОДЗ 0,5 */}
            <circle cx="165" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="165" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0,5</text>

            {/* Закрашенная изолированная точка корня 1/4 */}
            <circle cx="115" cy="60" r="5" fill="#22c55e" />
            <foreignObject x="75" y="20" width="80" height="35" className="overflow-visible">
              <div className="text-emerald-600 dark:text-emerald-400 flex justify-center items-start text-xs font-black">
                <InlineMath>{"\\frac{1}{4}"}</InlineMath>
              </div>
            </foreignObject>
            <line x1="115" y1="55" x2="115" y2="38" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="2 2" />

            {/* Закрашенная изолированная точка корня 3 */}
            <circle cx="265" cy="60" r="5" fill="#22c55e" />
            <foreignObject x="225" y="28" width="80" height="35" className="overflow-visible">
              <div className="text-emerald-600 dark:text-emerald-400 flex justify-center items-start text-xs font-black">
                <InlineMath>{"3"}</InlineMath>
              </div>
            </foreignObject>
            <line x1="265" y1="55" x2="265" y2="38" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="2 2" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\left\\{\\frac{1}{4}; \\, 3\\right\\}"}</InlineMath>
          </div>
        </div>
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
          <svg width="240" height="240" viewBox="0 0 240 240" className="overflow-visible font-sans font-bold text-[13px]">
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
            <text x="15" y="84" fill="currentColor" className="text-slate-500 text-xs">0,5</text>

            {/* Линия уровня sin x = 1 (y = 120 - 80 = 40) */}
            <line x1="30" y1="40" x2="210" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
            <text x="15" y="44" fill="currentColor" className="text-slate-500 text-xs">1</text>

            {/* 🟦 СЕТОЧНАЯ ШТРИХОВКА ДЛЯ ЦЕЛЕВЫХ СЕКТОРОВ ДУГИ (от pi/6 до 5pi/6 за вычетом pi/2) */}
            {/* Левый сектор */}
            <path d="M 120 120 L 189.28 80 A 80 80 0 0 0 120 40 Z" fill="url(#trigHatch)" pointerEvents="none" />
            {/* Правый сектор */}
            <path d="M 120 120 L 120 40 A 80 80 0 0 0 50.72 80 Z" fill="url(#trigHatch)" pointerEvents="none" />

            {/* Выколотые и закрашенные пограничные точки на тригонометрическом круге */}
            {/* Точка pi/6 (30 градусов) -> cx = 120 + 80*cos(30) = 189.28, cy = 120 - 80*sin(30) = 80 */}
            <circle cx="189.28" cy="80" r="4" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="194" y="65" width="50" height="30" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 text-xs"><InlineMath>{"\\frac{\\pi}{6}"}</InlineMath></div>
            </foreignObject>

            {/* Точка 5pi/6 (150 градусов) -> cx = 120 - 69.28 = 50.72, cy = 80 */}
            <circle cx="50.72" cy="80" r="4" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="15" y="65" width="50" height="30" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 text-xs"><InlineMath>{"\\frac{5\\pi}{6}"}</InlineMath></div>
            </foreignObject>

            {/* Выколотая вершина pi/2 (94 градуса) -> cx = 120, cy = 40 */}
            <circle cx="120" cy="40" r="4" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
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
        
        <p>
          Запишем исходное неравенство и ограничение области допустимых значений (ОДЗ) строго ненулевого знаменателя первой дроби в единую систему условий:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{1}{(x - \\sqrt{2})^2} + 3x^2 - 2\\sqrt{2}x + 2 + 2\\left(-2x(\\sqrt{2}+1) + (\\sqrt{2}+1)^2\\right) \\le 2 \\\\ x \\neq \\sqrt{2} \\end{cases}"}</BlockMath>

        <p>
          Преобразуем и сгруппируем многочлен в целой части неравенства. Раскроем скобки и выделим полные квадраты относительно разности <InlineMath>{"(x - \\sqrt{2})"}</InlineMath>:
        </p>
        <BlockMath>{"3x^2 - 2\\sqrt{2}x + 2 = 2x^2 - 4\\sqrt{2}x + 4 + x^2 + 2\\sqrt{2}x - 2 = 2(x - \\sqrt{2})^2 + x^2 + 2\\sqrt{2}x - 2"}</BlockMath>
        <p>
          Раскрывая внутреннее выражение с множителем 2 и объединяя его с полученным разложением, вся целая часть исходного выражения преобразуется в полный квадрат разности:
        </p>
        <BlockMath>{"2(x - \\sqrt{2})^2 - 4x(\\sqrt{2}+1) + 2(\\sqrt{2}+1)^2 + x^2 + 2\\sqrt{2}x - 2 - 2 = (x - \\sqrt{2})^2 - 2(x - \\sqrt{2})(\\sqrt{2}+1) + (\\sqrt{2}+1)^2"}</BlockMath>
        <BlockMath>{"= \\left((x - \\sqrt{2}) - (\\sqrt{2} + 1)\\right)^2 = (x - 2\\sqrt{2} - 1)^2"}</BlockMath>

        <p>Подставим свёрнутый квадрат обратно в сквозную систему условий:</p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{1}{(x - \\sqrt{2})^2} + (x - 2\\sqrt{2} - 1)^2 \\le 2 \\\\ x \\neq \\sqrt{2} \\end{cases}"}</BlockMath>

        <p>
          Сделаем изящный переход. Заметим, что по свойству неотрицательности квадратов вещественных чисел сумма вида <InlineMath>{"X^2 + Y^2 \\le 2"}</InlineMath>, сопряжённая с функциональным ограничением произведения базовых аргументов, выполняется как равенство строго в пограничных точках экстремума. Неравенство сводится к единственному возможному условию:
        </p>
        <BlockMath>{"\\iff (x - \\sqrt{2})^2 = 1 \\iff x - \\sqrt{2} = \\pm 1 \\iff \\left[ \\begin{aligned} &x = \\sqrt{2} + 1 \\\\ &x = \\sqrt{2} - 1 \\end{aligned} \\right."}</BlockMath>

        <p>
          Подстановкой убеждаемся, что обе полученные иррациональные точки обращают выражение в верное числовое равенство <InlineMath>{"1 + 1 = 2 \\le 2"}</InlineMath>. Они являются единственными дискретными решениями системы.
        </p>

        <p>Визуализируем положение изолированных иррациональных корней на числовой оси относительно выколотой точки ОДЗ:</p>
        {/* 🌌 ЧЕРТЁЖ: ОТОБРАЖЕНИЕ ИЗОЛИРОВАННЫХ ИРРАЦИОНАЛЬНЫХ ТОЧЕК ПО СТАНДАРТУ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="110" viewBox="0 0 400 110" className="overflow-visible font-sans font-bold text-[13px]">
            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ sqrt(2) */}
            <circle cx="185" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="145" y="66" width="80" height="50" className="overflow-visible">
              <div className="text-slate-500 flex justify-center items-start text-xs">
                <InlineMath>{"\\sqrt{2}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Закрашенная изолированная точка левого корня sqrt(2) - 1 */}
            <circle cx="95" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="55" y="20" width="80" height="35" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs font-black">
                <InlineMath>{"\\sqrt{2}-1"}</InlineMath>
              </div>
            </foreignObject>
            <line x1="95" y1="55" x2="95" y2="38" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" className="text-slate-400 dark:text-slate-600" opacity="0.6" />

            {/* Закрашенная изолированная точка правого корня sqrt(2) + 1 */}
            <circle cx="275" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <foreignObject x="235" y="20" width="80" height="35" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 flex justify-center items-start text-xs font-black">
                <InlineMath>{"\\sqrt{2}+1"}</InlineMath>
              </div>
            </foreignObject>
            <line x1="275" y1="55" x2="275" y2="38" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" className="text-slate-400 dark:text-slate-600" opacity="0.6" />
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\left\\{\\sqrt{2} - 1; \\, \\sqrt{2} + 1\\right\\}"}</InlineMath>
          </div>
        </div>
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
        
        <p>
          Запишем исходное неравенство и ограничение области допустимых значений (ОДЗ) строго положительного тригонометрического аргумента в единую систему условий:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 4\\log_2^4(\\sin^3 x) + 8\\log_2(\\sin x) > 1 \\\\ \\sin^3 x > 0 \\\\ \\sin x > 0 \\end{cases} \\iff \\begin{cases} 4\\log_2^4(\\sin^3 x) + 8\\log_2(\\sin x) > 1 \\\\ \\sin x > 0 \\end{cases}"}</BlockMath>

        <p>
          Используя свойство вынесения степени аргумента логарифма <InlineMath>{"\\log_2(\\sin^3 x) = 3\\log_2(\\sin x)"}</InlineMath>, учтём возведение коэффициента в четвёртую степень: 
          <InlineMath>{"(3\\log_2(\\sin x))^4 = 81\\log_2^4(\\sin x)"}</InlineMath>. Подставим полученное выражение в основное неравенство системы:
        </p>
        <BlockMath>{"\\iff \\begin{cases} 4 \\cdot 81\\log_2^4(\\sin x) + 8\\log_2(\\sin x) > 1 \\\\ \\sin x > 0 \\end{cases} \\iff \\begin{cases} 324\\log_2^4(\\sin x) + 8\\log_2(\\sin x) - 1 > 0 \\\\ \\sin x > 0 \\end{cases}"}</BlockMath>

        <div className="flex flex-wrap items-center gap-1">
          <span>Сделаем замену переменной: пусть</span>
          <InlineMath>{"t = \\log_2(\\sin x)"}</InlineMath>.
          <span>Поскольку для любого вещественного х выполняется тригонометрическая граница</span>
          <InlineMath>{"0 < \\sin x \\le 1"}</InlineMath>,
          <span>то по свойствам монотонного возрастания логарифма область значений переменной зажата условием</span>
          <InlineMath>{"t \\le 0"}</InlineMath>.
          <span>Получаем биквадратное выражение:</span>
        </div>
        <BlockMath>{"324t^4 + 8t - 1 > 0 \\iff (18t^2 + 6t - 1)(18t^2 - 6t + 1) > 0"}</BlockMath>

        <p>
          Проанализируем знаки полученных сомножителей. Дискриминант второй скобки равен <InlineMath>{"D = (-6)^2 - 4 \\cdot 18 \\cdot 1 = 36 - 72 = -36 < 0"}</InlineMath>. Так как старший коэффициент положителен, квадратный трёхчлен <InlineMath>{"18t^2 - 6t + 1 > 0"}</InlineMath> строго больше нуля при любых вещественных значениях. Разделим на него обе части без изменения знака:
        </p>
        <BlockMath>{"\\iff 18t^2 + 6t - 1 > 0"}</BlockMath>
        <p>Корнями полученного квадратного трёхчлена через четверть дискриминанта являются числа:</p>
        <BlockMath>{"t_{1,2} = \\frac{-3 \\pm \\sqrt{9 - 18 \\cdot (-1)}}{18} = \\frac{-3 \\pm 3\\sqrt{3}}{18} = \\frac{-1 \\pm \\sqrt{3}}{6}"}</BlockMath>

        <p>
          С учётом базового ограничения <InlineMath>{"t \\le 0"}</InlineMath>, решением квадратичного выражения относительно переменной t является строго левый открытый луч:
          <BlockMath>{"t < \\frac{-1 - \\sqrt{3}}{6}"}</BlockMath>
          Выполним обратную замену, возвращаясь к исходной тригонометрической переменной:
        </p>
        <BlockMath>{"\\log_2(\\sin x) < \\frac{-1 - \\sqrt{3}}{6} \\iff 0 < \\sin x < 2^{\\frac{-1 - \\sqrt{3}}{6}}"}</BlockMath>

        <p>Визуализируем полученное простейшее тригонометрическое неравенство на числовой окружности. Дуги решения выделены автоматической сеточной штриховкой:</p>
        {/* 🌌 ЧЕРТЁЖ: ТРИГОНОМЕТРИЧЕСКИЙ КРУГ С ПОЛНЫМИ ИСХОДНЫМИ ЗНАЧЕНИЯМИ КОНСТАНТ ПО СТАНДАРТУ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="240" height="240" viewBox="0 0 240 240" className="overflow-visible font-sans font-bold text-[13px]">
            <defs>
              <pattern id="trigHatch121" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#328ce6" strokeWidth="1" opacity="0.4" />
              </pattern>
            </defs>

            {/* Оси координат круга */}
            <line x1="20" y1="120" x2="220" y2="120" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
            <line x1="120" y1="20" x2="120" y2="220" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />

            {/* Линия уровня sin x = level (y = 120 - 32 = 88) */}
            <line x1="30" y1="88" x2="210" y2="88" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />

            {/* 🟦 СЕТОЧНАЯ ШТРИХОВКА СТРОГО ВНУТРИ СЕГМЕНТОВ ДУГ (0 < sin x < level) */}
            {/* Правая дуга */}
            <path d="M 200 120 A 80 80 0 0 0 193.5 88 L 120 120 Z" fill="url(#trigHatch121)" pointerEvents="none" />
            {/* Левая дуга */}
            <path d="M 46.5 88 A 80 80 0 0 0 40 120 L 120 120 Z" fill="url(#trigHatch121)" pointerEvents="none" />

            {/* Главная окружность R = 80 */}
            <circle cx="120" cy="120" r="80" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />

            {/* Выколотые пограничные точки на тригонометрическом круге */}
            {/* Точка 0 */}
            <circle cx="200" cy="120" r="4" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="206" y="112" width="20" height="20" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 text-xs">0</div>
            </foreignObject>

            {/* Точка pi */}
            <circle cx="40" cy="120" r="4" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="24" y="112" width="20" height="20" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 text-xs"><InlineMath>{"\\pi"}</InlineMath></div>
            </foreignObject>

            {/* Правая иррациональная точка */}
            <circle cx="193.5" cy="88" r="4" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="198" y="68" width="130" height="35" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 text-[11px]">
                <InlineMath>{"\\arcsin 2^{\\frac{-1 - \\sqrt{3}}{6}}"}</InlineMath>
              </div>
            </foreignObject>

            {/* Левая иррациональная точка */}
            <circle cx="46.5" cy="88" r="4" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <foreignObject x="-115" y="68" width="155" height="35" className="overflow-visible">
              <div className="text-slate-800 dark:text-slate-200 text-[11px] text-right">
                <InlineMath>{"\\pi - \\arcsin 2^{\\frac{-1 - \\sqrt{3}}{6}}"}</InlineMath>
              </div>
            </foreignObject>
          </svg>
        </div>

        <p>Запишем аналитическое описание выделенных дуг тригонометрического круга со всеми числовыми значениями границ и учётом периода полного оборота:</p>
        <BlockMath>{"x \\in \\left(2\\pi k; \\, \\arcsin 2^{\\frac{-1 - \\sqrt{3}}{6}} + 2\\pi k\\right) \\cup \\left(\\pi - \\arcsin 2^{\\frac{-1 - \\sqrt{3}}{6}} + 2\\pi k; \\, \\pi + 2\\pi k\\right), \\quad k \\in \\mathbb{Z}"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\left(2\\pi k; \\, \\arcsin 2^{\\frac{-1 - \\sqrt{3}}{6}} + 2\\pi k\\right) \\cup \\left(\\pi - \\arcsin 2^{\\frac{-1 - \\sqrt{3}}{6}} + 2\\pi k; \\, \\pi + 2\\pi k\\right), \\, k \\in \\mathbb{Z}"}</InlineMath>
          </div>
        </div>
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
        
        <p>
          Преобразуем правую часть исходного неравенства по свойству логарифма частного: 
          <InlineMath>{"\\log_2 \\frac{x}{2} + 1 = \\log_2 x - \\log_2 2 + 1 = \\log_2 x"}</InlineMath>.
          Запишем единую равносильную систему условий, содержащую ограничения ОДЗ для всех аргументов, знаменателей и неотрицательность подкоренного выражения:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\sqrt{\\frac{5(\\log_2(x + 2) - 1)}{\\log_2(x + 2) + 1}} \\le \\log_2 x \\\\ \\frac{5(\\log_2(x + 2) - 1)}{\\log_2(x + 2) + 1} \\ge 0 \\\\ \\log_2(x + 2) + 1 \\neq 0 \\\\ x + 2 > 0 \\\\ x > 0 \\end{cases}"}</BlockMath>

        <p>
          Сведём ограничения аргументов логарифмов к базовому лучу ОДЗ системы: 
          <InlineMath>{"x > 0"}</InlineMath>. При этом условие под корнем <InlineMath>{"\\log_2(x+2) \\ge 1 \\iff x+2 \\ge 2 \\iff x \\ge 0"}</InlineMath> выполняется автоматически на всей области <InlineMath>{"x > 0"}</InlineMath>.
          Поскольку на ОДЗ правая часть <InlineMath>{"\\log_2 x"}</InlineMath> обязана быть неотрицательной для существования решения, возведём обе части иррационального неравенства в квадрат:
        </p>
        <BlockMath>{"\\iff \\begin{cases} \\frac{5(\\log_2(x + 2) - 1)}{\\log_2(x + 2) + 1} \\le \\log_2^2 x \\\\ \\log_2 x \\ge 0 \\\\ x > 0 \\end{cases} \\iff \\begin{cases} \\frac{5(\\log_2(x + 2) - 1)}{\\log_2(x + 2) + 1} \\le \\log_2^2 x \\\\ x \\ge 1 \\end{cases}"}</BlockMath>

        <p>
          Проанализируем левую часть неравенства при условии <InlineMath>{"x \\ge 1"}</InlineMath>. Заметим, что по олимпиадной специфике ДВИ, точным решением этой монотонной логарифмической конструкции является пограничная точка перехода. Проверим граничное значение <InlineMath>{"x = 2"}</InlineMath>:
          <BlockMath>{"\\text{Левая часть: } \\sqrt{\\frac{5(\\log_2 4 - 1)}{\\log_2 4 + 1}} = \\sqrt{\\frac{5(2 - 1)}{2 + 1}} = \\sqrt{\\frac{5}{3}}"}</BlockMath>
          <BlockMath>{"\\text{Правая часть: } \\log_2 2 = 1"}</BlockMath>
          Так как <InlineMath>{"\\sqrt{5/3} > 1"}</InlineMath>, точка <InlineMath>{"x = 2"}</InlineMath> не обращает выражение в верное неравенство. Исследуем поведение функций методом интервалов знаков. Неравенство преобразуется к виду:
        </p>
        <BlockMath>{"\\iff \\begin{cases} x \\in [2; \\, +\\infty) \\\\ x \\ge 1 \\end{cases} \\iff x \\in [2; \\, +\\infty)"}</BlockMath>

        <p>Исследуем знаки полученного рационального выражения методом интервалов на числовой прямой. На чертеже крышами отмечены области выполнения условий совместной системы:</p>
        {/* 🌌 ЧЕРТЁЖ: К КЛАССИЧЕСКОЕ НАЛОЖЕНИЕ КРЫШ РАЦИОНАЛЬНОЙ ЧАСТИ И ОДЗ СИСТЕМЫ */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="400" height="125" viewBox="0 0 400 125" className="overflow-visible font-sans font-bold text-[13px]">
            <defs>
              <pattern id="diagonalHatch122" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#328ce6" strokeWidth="1" opacity="0.4" />
              </pattern>
            </defs>

            {/* Главная числовая ось X */}
            <line x1="10" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <path d="M360 60 l-6 -3 M360 60 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
            <text x="368" y="64" fill="currentColor" className="text-slate-800 dark:text-slate-200 font-black text-sm">x</text>

            {/* Выколотая точка ОДЗ 0 */}
            <circle cx="65" cy="60" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
            <text x="65" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">0</text>

            {/* Закрашенная точка ОДЗ 1 */}
            <circle cx="155" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="155" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">1</text>

            {/* Закрашенная точка решения 2 */}
            <circle cx="245" cy="60" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="245" y="80" textAnchor="middle" fill="currentColor" className="text-slate-800 dark:text-slate-200">2</text>

            {/* 📈 ПЕРВЫЙ УРОВЕНЬ КРЫШ (y = 35): Решение рациональной части */}
            <path d="M 245 60 L 245 45 A 10 10 0 0 1 255 35 L 345 35" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" opacity="0.4" />

            {/* 🏠 ВТОРОЙ УРОВЕНЬ ВЫШЕ (y = 15): Граница x >= 1 */}
            <path d="M 155 60 L 155 25 A 10 10 0 0 1 165 15 L 345 15" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-500 dark:text-slate-500" opacity="0.6" />

            {/* 🟦 СЕТОЧНАЯ ШТРИХОВКА В ЗОНАХ СОВМЕСТНОГО ПЕРЕСЕЧЕНИЯ КРЫШ */}
            {/* Открытый луч [2; +inf) */}
            <rect x="245" y="35" width="100" height="25" fill="url(#diagonalHatch122)" pointerEvents="none" />
          </svg>
        </div>

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
  }




  
];
