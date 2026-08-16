import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export const section18Tasks = [
  {
     id: 1,
    title: 'Задача 1 (ЕГЭ 2026, основная волна, Центр)',
    textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
    mathA: '(x^2 - x)a^2 + (x^4 - x^3 - x + 1)a - x^3 + x^2 = 0',
    textAfter: 'имеет ровно 2 решения.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <p>Разложим каждый коэффициент на множители. Уравнение принимает вид:</p>
        <BlockMath math={`x(x - 1)a^2 + (x - 1)(x^3 - 1)a - x^2(x - 1) = 0,`} />
        <BlockMath math={`(x - 1)\\left(xa^2 + (x^3 - 1)a - x^2\\right) = 0.`} />
        
        <p>Группируем:</p>
        <BlockMath math={`ax^3 - x^2 + a^2x - a = ax(x^2 + a) - (x^2 + a) = (x^2 + a)(ax - 1).`} />

        <p>Итак, исходное уравнение равносильно</p>
        <BlockMath math={`(x - 1)(x^2 + a)(ax - 1) = 0.`} />
        
        <p>
          Решим задачу графическим методом в координатах <InlineMath math={`(xOa)`} />. Уравнению отвечает объединение трёх кривых на плоскости <InlineMath math={`xOa`} /> (<InlineMath math={`x`} /> — Ось абсцисс, <InlineMath math={`a`} /> — Ось ординат):
        </p>
        <BlockMath math={`x = 1, \\quad a = -x^2, \\quad a = \\frac{1}{x}.`} />
        
        <p>Точки, где кривые пересекаются между собой:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><InlineMath math={`x = 1`} /> и <InlineMath math={`a = -x^2`} /> пересекаются в <InlineMath math={`(1; -1)`} />;</li>
          <li><InlineMath math={`x = 1`} /> и <InlineMath math={`a = \\frac{1}{x}`} /> пересекаются в <InlineMath math={`(1; 1)`} />;</li>
          <li><InlineMath math={`a = -x^2`} /> и <InlineMath math={`a = \\frac{1}{x}`} />: из <InlineMath math={`-x^2 = \\frac{1}{x}`} /> следует <InlineMath math={`x^3 = -1`} />, точка <InlineMath math={`(-1; -1)`} />.</li>
        </ul>

        <p>Число решений уравнения при фиксированном <InlineMath math={`a`} /> равно числу точек пересечения горизонтальной прямой <InlineMath math={`a = \\text{const}`} /> с этим объединением.</p>

        {/* Высокоточный и идеально сглаженный математический SVG График */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 400 400" className="w-full max-w-[400px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Сетка уровней a = 1 и a = -1 */}
            <g stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" className="dark:stroke-slate-800">
              <line x1="30" y1="130" x2="370" y2="130" />
              <line x1="30" y1="270" x2="370" y2="270" />
            </g>

            {/* Оси координат (Центр в 200, 200. Масштаб: 1 ед = 70px) */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="20" y1="200" x2="370" y2="200" />
              <line x1="200" y1="30" x2="200" y2="380" />
            </g>
            
            {/* Стрелки */}
            <path d="M 370,200 L 362,196 M 370,200 L 362,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 200,30 L 196,38 M 200,30 L 204,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            
            <text x="380" y="205" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
            <text x="195" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>

            {/* Вертикальная прямая x = 1 */}
            <line x1="270" y1="30" x2="270" y2="380" stroke="#0e7490" strokeWidth="2" />
            <text x="280" y="48" fill="#0e7490" className="font-semibold font-serif text-sm">x = 1</text>

            {/* Парабола a = -x^2 */}
            <path 
              d="M 88,379.2 L 102,337.2 L 116,300.8 L 130,270 L 144,244.8 L 158,225.2 L 172,211.2 L 186,202.8 L 200,200 L 214,202.8 L 228,211.2 L 242,225.2 L 256,244.8 L 270,270 L 284,300.8 L 298,337.2 L 312,379.2" 
              fill="none" 
              stroke="#86198f" 
              strokeWidth="2" 
            />
            <text x="45" y="350" fill="#86198f" className="font-semibold font-serif text-sm">a = -x²</text>

            {/* Гипербола a = 1/x */}
            {/* Правая ветвь (x > 0) */}
            <path 
              d="M 231.5,44.4 L 235,60 L 242,83.3 L 249,100 L 256,112.5 L 270,130 L 284,141.7 L 298,150 L 312,156.3 L 326,161.1 L 340,165 L 370,172" 
              fill="none" 
              stroke="#ea580c" 
              strokeWidth="2" 
            />
            {/* Левая ветвь (x < 0) */}
            <path 
              d="M 30,228 L 60,235 L 88,243.8 L 102,250 L 116,258.3 L 130,270 L 144,287.5 L 151,300.1 L 158,316.7 L 165,340 L 172,375" 
              fill="none" 
              stroke="#ea580c" 
              strokeWidth="2" 
            />
            <text x="325" y="125" fill="#ea580c" className="font-semibold font-serif text-sm">a = 1/x</text>

            {/* Черные маркеры точек строго на пересечениях */}
            <circle cx="200" cy="200" r="3.5" fill="#000000" />
            <text x="210" y="222" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(0, 0)</text>

            <circle cx="270" cy="130" r="3.5" fill="#000000" />
            <text x="280" y="125" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(1, 1)</text>

            <circle cx="270" cy="270" r="3.5" fill="#000000" />
            <text x="280" y="288" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(1, -1)</text>

            <circle cx="130" cy="270" r="3.5" fill="#000000" />
            <text x="75" y="288" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(-1, -1)</text>
          </svg>
        </div>

        <p>Исследуем количество решений при движении горизонтальной прямой <InlineMath math={`a = \\text{const}`} /> сверху вниз:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><InlineMath math={`a > 1`} />: 2 пересечения системы с прямой а;</li>
          <li><InlineMath math={`a = 1`} />: 1 пересечение (не подходит);</li>
          <li><InlineMath math={`0 < a < 1`} />: 2 пересечения;</li>
          <li><InlineMath math={`a = 0`} />: 2 пересечения;</li>
          <li><InlineMath math={`-1 < a < 0`} />: 4 пересечения (не подходит);</li>
          <li><InlineMath math={`a = -1`} />: 2 пересечения;</li>
          <li><InlineMath math={`a < -1`} />: снова 4 точки (не подходит).</li>
        </ul>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`a \\in \\{-1\\} \\cup [0; 1) \\cup (1; +\\infty)`} />
        </div>
      </div>
    )
  },

    {
    id: 2,
    title: 'Задача 2 (ЕГЭ 2026, основная волна, Центр)',
    textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
    mathA: 'ax^4 + x^3 + (a^3 - 2a)x^2 + (a^2 - 2)x = ax^3 + x^2 + (a^3 - 2a)x + a^2 - 2',
    textAfter: 'имеет ровно 2 решения.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>

        <p>Перенесем все члены уравнения в левую часть и сгруппируем их:</p>
        <BlockMath math={`(ax^4 - ax^3) + (x^3 - x^2) + (a^3 - 2a)(x^2 - x) + (a^2 - 2)(x - 1) = 0,`} />
        <BlockMath math={`ax^3(x - 1) + x^2(x - 1) + (a^3 - 2a)x(x - 1) + (a^2 - 2)(x - 1) = 0.`} />

        <p>Вынесем общий множитель <InlineMath math={`(x - 1)`} /> за скобки:</p>
        <BlockMath math={`(x - 1)\\left[ax^3 + x^2 + (a^3 - 2a)x + a^2 - 2\\right] = 0.`} />

        <p>Теперь разложим на множители выражение внутри квадратных скобок, сгруппировав слагаемые по степеням параметра <InlineMath math={`a`} />:</p>
        <BlockMath math={`ax^3 + x^2 + a^3x - 2ax + a^2 - 2 = a^2(ax + 1) + ax(x^2 - 2) + (x^2 - 2) = 0,`} />
        <BlockMath math={`a^2(ax + 1) + (ax + 1)(x^2 - 2) = (ax + 1)(x^2 + a^2 - 2) = 0.`} />

        <p>Таким образом, исходное уравнение равносильно совокупности:</p>
        <BlockMath math={`(x - 1)(ax + 1)(x^2 + a^2 - 2) = 0.`} />

        <p>
          Решим задачу графическим методом в координатах <InlineMath math={`(xOa)`} />. Уравнению отвечает объединение трёх кривых на плоскости <InlineMath math={`xOa`} /> (<InlineMath math={`x`} /> — ось абсцисс, <InlineMath math={`a`} /> — ось ординат):
        </p>
        <BlockMath math={`x = 1, \\qquad a = -\\frac{1}{x}, \\qquad x^2 + a^2 = 2.`} />

        <p>Найдем точки пересечения этих кривых:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Прямая <InlineMath math={`x = 1`} /> и окружность <InlineMath math={`x^2 + a^2 = 2`} /> пересекаются в точках <InlineMath math={`(1; 1)`} /> и <InlineMath math={`(1; -1)`} />;</li>
          <li>Прямая <InlineMath math={`x = 1`} /> и гипербола <InlineMath math={`a = -\\frac{1}{x}`} /> пересекаются в точке <InlineMath math={`(1; -1)`} />;</li>
          <li>Гипербола <InlineMath math={`a = -\\frac{1}{x}`} /> и окружность <InlineMath math={`x^2 + a^2 = 2`} /> пересекаются в точках <InlineMath math={`(1; -1)`} /> и <InlineMath math={`(-1; 1)`} />, причем в обеих точках гипербола касается окружности.</li>
        </ul>

        <p>
          Число решений уравнения при фиксированном <InlineMath math={`a`} /> равно числу точек пересечения горизонтальной прямой <InlineMath math={`a = \\mathrm{const}`} /> с этим объединением графиков.
        </p>

        {/* Корректный SVG график без заливки черным */}
        <div className="flex justify-center my-6 overflow-x-auto">
          <svg width="360" height="340" viewBox="0 0 360 340" className="select-none overflow-visible fill-none">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="#475569" />
              </marker>
            </defs>

            {/* Особые горизонтальные линии уровня */}
            <line x1="20" y1="110" x2="310" y2="110" stroke="#94a3b8" strokeDasharray="4" strokeWidth="1" fill="none" />
            <line x1="20" y1="130" x2="310" y2="130" stroke="#94a3b8" strokeDasharray="4" strokeWidth="1" fill="none" />
            <line x1="20" y1="210" x2="310" y2="210" stroke="#94a3b8" strokeDasharray="4" strokeWidth="1" fill="none" />
            <line x1="20" y1="230" x2="310" y2="230" stroke="#94a3b8" strokeDasharray="4" strokeWidth="1" fill="none" />
            
            <text x="315" y="114" className="text-[10px] fill-slate-400 font-sans">a=√2</text>
            <text x="315" y="134" className="text-[10px] fill-slate-400 font-sans">a=1</text>
            <text x="315" y="214" className="text-[10px] fill-slate-400 font-sans">a=-1</text>
            <text x="315" y="234" className="text-[10px] fill-slate-400 font-sans">a=-√2</text>

            {/* Декартовы оси */}
            <line x1="20" y1="170" x2="310" y2="170" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none" />
            <line x1="170" y1="310" x2="170" y2="30" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none" />
            <text x="315" y="174" className="text-xs font-serif italic fill-slate-600 dark:fill-slate-400">x</text>
            <text x="166" y="25" className="text-xs font-serif italic fill-slate-600 dark:fill-slate-400">a</text>

            {/* Фиолетовая окружность */}
            <circle cx="170" cy="170" r="56.56" stroke="#a855f7" strokeWidth="2" fill="none" />
            <text x="115" y="245" className="text-[11px] fill-purple-500 font-sans">x²+a²=2</text>

            {/* Бирюзовая прямая x=1 */}
            <line x1="210" y1="30" x2="210" y2="310" stroke="#0d9488" strokeWidth="2" fill="none" />
            <text x="216" y="45" className="text-[11px] fill-teal-600 font-sans">x=1</text>

            {/* Оранжевая гипербола без черной заливки */}
            <path d="M 60,154 C 110,150 124,142 130,130 C 136,118 144,70 146,30" stroke="#f97316" strokeWidth="2" fill="none" />
            <path d="M 194,310 C 196,270 204,222 210,210 C 216,198 230,190 280,186" stroke="#f97316" strokeWidth="2" fill="none" />
            <text x="90" y="150" className="text-[11px] fill-orange-500 font-sans">a=-1/x</text>

            {/* Узловые точки */}
            <circle cx="210" cy="130" r="3.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="216" y="126" className="text-[11px] font-sans font-medium fill-slate-800 dark:fill-slate-200">(1,1)</text>

            <circle cx="210" cy="210" r="3.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="216" y="222" className="text-[11px] font-sans font-medium fill-slate-800 dark:fill-slate-200">(1,-1)</text>

            <circle cx="130" cy="130" r="3.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <text x="94" y="126" className="text-[11px] font-sans font-medium fill-slate-800 dark:fill-slate-200">(-1,1)</text>
          </svg>
        </div>

        <p>Исследуем количество решений при движении горизонтальной прямой <InlineMath math={`a = \\mathrm{const}`} /> сверху вниз:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><InlineMath math={`a > \\sqrt{2}`} />: 2 пересечения — подходит;</li>
          <li><InlineMath math={`a = \\sqrt{2}`} />: 3 пересечения;</li>
          <li><InlineMath math={`1 < a < \\sqrt{2}`} />: 4 пересечения;</li>
          <li><InlineMath math={`a = 1`} />: 2 пересечения — подходит;</li>
          <li><InlineMath math={`0 < a < 1`} />: 4 пересечения;</li>
          <li><InlineMath math={`a = 0`} />: 3 пересечения;</li>
          <li><InlineMath math={`-1 < a < 0`} />: 4 пересечения;</li>
          <li><InlineMath math={`a = -1`} />: 2 пересечения — подходит;</li>
          <li><InlineMath math={`-\\sqrt{2} < a < -1`} />: 4 пересечения;</li>
          <li><InlineMath math={`a = -\\sqrt{2}`} />: 3 пересечения;</li>
          <li><InlineMath math={`a < -\\sqrt{2}`} />: 2 пересечения — подходит.</li>
        </ul>

        <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded border border-emerald-200 dark:border-emerald-800">
          <p className="font-bold text-emerald-800 dark:text-emerald-400">
            Ответ: <InlineMath math={`a \\in (-\\infty; -\\sqrt{2}) \\cup \\{-1\\} \\cup \\{1\\} \\cup (\\sqrt{2}; +\\infty)`} />
          </p>
        </div>
      </div>
    )
  },

{
    id: 3,
    title: 'Задача 3 (ЕГЭ 2026, основная волна, Дальний Восток)',
    textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
    mathA: '(x + 1)a^2 + (x^3 + x + 2)a - x^4 + x^3 + 2x^2 = 0',
    textAfter: 'имеет ровно 2 решения.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>

        <p>Разложим на множители коэффициенты уравнения. Свободный член запишем в виде:</p>
        <BlockMath math={`-x^4 + x^3 + 2x^2 = -x^2(x^2 - x - 2) = -x^2(x - 2)(x + 1).`} />

        <p>Коэффициент при <InlineMath math={`a`} /> преобразуется следующим образом:</p>
        <BlockMath math={`x^3 + x + 2 = (x^3 + 1) + (x + 1) = (x + 1)(x^2 - x + 1) + (x + 1) = (x + 1)(x^2 - x + 2).`} />

        <p>Теперь перепишем исходное уравнение, вынося общий множитель <InlineMath math={`(x + 1)`} /> за скобки:</p>
        <BlockMath math={`(x + 1)\\left[a^2 + (x^2 - x + 2)a - x^2(x - 2)\\right] = 0.`} />

        <p>
          Разложим на множители квадратный трёхчлен относительно <InlineMath math={`a`} /> внутри квадратных скобок. Заметим, что по теореме Виета его корнями являются <InlineMath math={`a = -x^2`} /> и <InlineMath math={`a = x - 2`} />:
        </p>
        <BlockMath math={`(x + 1)(a + x^2)(a - x + 2) = 0.`} />

        <p>
          Решим задачу графическим методом в координатах <InlineMath math={`(xOa)`} />. Уравнению отвечает объединение трёх кривых на плоскости <InlineMath math={`xOa`} /> (<InlineMath math={`x`} /> — ось абсцисс, <InlineMath math={`a`} /> — ось ординат):
        </p>
        <BlockMath math={`x = -1, \\quad a = -x^2, \\quad a = x - 2.`} />

        <p>Найдем точки взаимного пересечения этих линий:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Прямая <InlineMath math={`x = -1`} /> и парабола <InlineMath math={`a = -x^2`} /> пересекаются в точке <InlineMath math={`(-1; -1)`} />;</li>
          <li>Прямая <InlineMath math={`x = -1`} /> и прямая <InlineMath math={`a = x - 2`} /> пересекаются в точке <InlineMath math={`(-1; -3)`} />;</li>
          <li>Парабола <InlineMath math={`a = -x^2`} /> и прямая <InlineMath math={`a = x - 2`} /> пересекаются в точках, определяемых уравнением <InlineMath math={`-x^2 = x - 2 \\iff x^2 + x - 2 = 0`} />, что дает точки <InlineMath math={`(1; -1)`} /> и <InlineMath math={`(-2; -4)`} />.</li>
        </ul>

        <p>Число решений уравнения при фиксированном <InlineMath math={`a`} /> равно числу точек пересечения горизонтальной прямой <InlineMath math={`a = \\text{const}`} /> с построенным семейством графиков.</p>

        {/* Высокоточный и идеально сглаженный математический SVG График */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 440 480" className="w-full max-w-[300px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Пунктирные уровни a = -1, a = -3, a = -4 */}
            <g stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" className="dark:stroke-slate-800">
              <line x1="30" y1="265" x2="405" y2="265" />
              <line x1="30" y1="375" x2="405" y2="375" />
              <line x1="30" y1="430" x2="405" y2="430" />
            </g>

            {/* Оси координат (Центр в 200, 210. Масштаб: 1 ед = 55px) */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="20" y1="210" x2="420" y2="210" />
              <line x1="200" y1="20" x2="200" y2="470" />
            </g>

            {/* Стрелки */}
            <path d="M 420,210 L 412,206 M 420,210 L 412,214" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 200,20 L 196,28 M 200,20 L 204,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />

            <text x="428" y="215" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
            <text x="195" y="14" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>

            {/* Вертикальная прямая x = -1 */}
            <line x1="145" y1="20" x2="145" y2="470" stroke="#0e7490" strokeWidth="2" />
            <text x="60" y="38" fill="#0e7490" className="font-semibold font-serif text-sm">x = -1</text>

            {/* Прямая a = x - 2 */}
            <line x1="50" y1="470" x2="400" y2="120" stroke="#ea580c" strokeWidth="2" />
            <text x="325" y="100" fill="#ea580c" className="font-semibold font-serif text-sm">a = x - 2</text>

            {/* Парабола a = -x^2, обе ветви полные и симметричные */}
            <path
              d="M 79,476.2 L 90,430 L 101,388.2 L 112,350.8 L 123,317.8 L 134,289.2 L 145,265 L 156,245.2 L 167,229.8 L 178,218.8 L 189,212.2 L 200,210 L 211,212.2 L 222,218.8 L 233,229.8 L 244,245.2 L 255,265 L 266,289.2 L 277,317.8 L 288,350.8 L 299,388.2 L 310,430 L 321,476.2"
              fill="none"
              stroke="#86198f"
              strokeWidth="2"
            />
            <text x="240" y="300" fill="#86198f" className="font-semibold font-serif text-sm">a = -x²</text>

            {/* Черные маркеры точек строго на пересечениях */}
            <circle cx="200" cy="210" r="3.5" fill="#000000" />
            <text x="210" y="204" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(0, 0)</text>

            <circle cx="145" cy="265" r="3.5" fill="#000000" />
            <text x="60" y="262" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(-1, -1)</text>

            <circle cx="145" cy="375" r="3.5" fill="#000000" />
            <text x="55" y="372" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(-1, -3)</text>

            <circle cx="255" cy="265" r="3.5" fill="#000000" />
            <text x="265" y="260" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(1, -1)</text>

            <circle cx="90" cy="430" r="3.5" fill="#000000" />
            <text x="35" y="427" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(-2, -4)</text>

            {/* Подписи уровней a = const */}
            <text x="409" y="269" fill="#64748b" className="dark:fill-slate-500 font-serif text-sm">a = -1</text>
            <text x="409" y="379" fill="#64748b" className="dark:fill-slate-500 font-serif text-sm">a = -3</text>
            <text x="409" y="434" fill="#64748b" className="dark:fill-slate-500 font-serif text-sm">a = -4</text>
          </svg>
        </div>

        <p>Проводя горизонтальную прямую <InlineMath math={`a = \\text{const}`} /> сверху вниз, получаем:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><InlineMath math={`a > 0`} />: 2 точки пересечения — подходит;</li>
          <li><InlineMath math={`a = 0`} />: 3 точки пересечения;</li>
          <li><InlineMath math={`-1 < a < 0`} />: 4 точки пересечения;</li>
          <li><InlineMath math={`a = -1`} />: 2 точки пересечения — подходит;</li>
          <li><InlineMath math={`-3 < a < -1`} />: 4 точки пересечения;</li>
          <li><InlineMath math={`a = -3`} />: 3 точки пересечения;</li>
          <li><InlineMath math={`-4 < a < -3`} />: 4 точки пересечения;</li>
          <li><InlineMath math={`a = -4`} />: 3 точки пересечения;</li>
          <li><InlineMath math={`a < -4`} />: 4 точки пересечения.</li>
        </ul>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`a \\in \\{-1\\} \\cup (0; +\\infty)`} />
        </div>
      </div>
    )
  },

{
    id: 4,
    title: 'Задача 4 (ЕГЭ 2026, досрочная волна, Дальний Восток)',
    textBefore: 'Найдите все значения параметра a, при каждом из которых система',
    mathA: '\\begin{cases} |x - a| + |y| = 2, \\\\ y = \\sqrt{4 - x^2} \\end{cases}',
    textAfter: 'имеет ровно одно решение.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>

        <p>
          Второе уравнение задаёт верхнюю полуокружность <InlineMath math={`x^2 + y^2 = 4`} />, при <InlineMath math={`y \\ge 0`} /> (<InlineMath math={`x \\in [-2; 2]`} />), поэтому первое уравнение равносильно (т.к. <InlineMath math={`y \\ge 0`} />)
        </p>
        <BlockMath math={`y = 2 - |x - a|,`} />
        <p>
          графику «уголка» с вершиной <InlineMath math={`(a; 2)`} /> и основаниями <InlineMath math={`(a - 2; 0)`} />, <InlineMath math={`(a + 2; 0)`} />. Правое ребро уголка: <InlineMath math={`y = (a + 2) - x`} />; левое ребро: <InlineMath math={`y = x + (2 - a)`} />.
        </p>

        <p>
          <em>Пересечение правого ребра с окружностью.</em> Подставим <InlineMath math={`y = (a + 2) - x`} />, обозначим <InlineMath math={`b = a + 2`} />:
        </p>
        <BlockMath math={`x^2 + (b - x)^2 = 4 \\implies 2x^2 - 2bx + b^2 - 4 = 0 \\implies x^2 - bx + \\frac{b^2 - 4}{2} = 0,`} />
        <BlockMath math={`D = b^2 - 4 \\cdot \\frac{b^2 - 4}{2} = b^2 - 2(b^2 - 4) = 8 - b^2.`} />

        <p>
          Решения есть при <InlineMath math={`|b| \\le 2\\sqrt{2}`} />, касание (<InlineMath math={`D = 0`} />) — при <InlineMath math={`b = 2\\sqrt{2}`} /> и <InlineMath math={`b = -2\\sqrt{2}`} />.
        </p>
        <p>Из <InlineMath math={`b = -2\\sqrt{2}`} /> получаем <InlineMath math={`a = -2\\sqrt{2} - 2`} />, не подходит т.к. касание происходит с несуществующей частью окружности.</p>
        <p>Из <InlineMath math={`b = 2\\sqrt{2}`} /> получаем <InlineMath math={`a = 2\\sqrt{2} - 2`} />, точка касания правого ребра с окружностью.</p>

        <p><em>Пересечение левого ребра с окружностью.</em> Аналогично, при <InlineMath math={`c = 2 - a`} />:</p>
        <BlockMath math={`x^2 + cx + \\frac{c^2 - 4}{2} = 0`} />
        <BlockMath math={`D = c^2 - 4 \\cdot \\frac{c^2 - 4}{2} = c^2 - 2c^2 - 8 = 8 - c^2`} />
        <p>
          касание (<InlineMath math={`D = 0`} />) при <InlineMath math={`c = 2\\sqrt{2}`} />, то есть <InlineMath math={`a = 2 - 2\\sqrt{2}`} />,
        </p>
        <p>
          и при <InlineMath math={`c = -2\\sqrt{2}`} /> то есть <InlineMath math={`a = 2 + 2\\sqrt{2}`} />, не подходит т.к. касание происходит с несуществующей частью окружности.
        </p>

        <p><em>Особое положение уголка:</em></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>вершина <InlineMath math={`(a; 2)`} /> лежит на окружности <InlineMath math={`\\iff a^2 + 4 = 4 \\iff a = 0`} />;</li>
          <li>основание <InlineMath math={`(a - 2; 0)`} /> совпадает с <InlineMath math={`(2; 0)`} /> при <InlineMath math={`a = 4`} /> и с <InlineMath math={`(-2; 0)`} /> при <InlineMath math={`a = 0`} />;</li>
          <li>основание <InlineMath math={`(a + 2; 0)`} /> совпадает с <InlineMath math={`(-2; 0)`} /> при <InlineMath math={`a = -4`} /> и с <InlineMath math={`(2; 0)`} /> при <InlineMath math={`a = 0`} />.</li>
        </ul>
        <p>(При <InlineMath math={`a = 0`} /> вершина и оба основания одновременно лежат на полуокружности.)</p>

        {/* График 1: общее положение "уголка" */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 300 220" className="w-full max-w-[300px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="20" y1="170" x2="280" y2="170" />
              <line x1="150" y1="20" x2="150" y2="190" />
            </g>
            <path d="M 280,170 L 272,166 M 280,170 L 272,174" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 150,20 L 146,28 M 150,20 L 154,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <text x="286" y="174" fill="#000000" className="dark:fill-slate-300 font-serif italic text-sm">x</text>
            <text x="144" y="14" fill="#000000" className="dark:fill-slate-300 font-serif italic text-sm">y</text>

            {/* Полуокружность x^2+y^2=4 */}
            <path
              d="M90,170 L92,154.5 L98,140 L107.6,127.6 L120,118 L134.5,112 L150,110 L165.5,112 L180,118 L192.4,127.6 L202,140 L208,154.5 L210,170"
              fill="none" stroke="#2563eb" strokeWidth="2"
            />

            {/* Уголок: вершина (a,2), основания (a-2,0),(a+2,0) */}
            <polyline points="108,170 168,110 228,170" fill="none" stroke="#dc2626" strokeWidth="2" />

            {/* Пунктир от вершины к оси x */}
            <line x1="168" y1="110" x2="168" y2="170" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-slate-400" />

            {/* Точки и подписи */}
            <circle cx="168" cy="110" r="2.5" fill="#000000" />
            <text x="176" y="103" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(a, 2)</text>

            <text x="88" y="186" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(a - 2, 0)</text>
            <text x="158" y="186" fill="#000000" className="dark:fill-slate-300 font-serif italic text-sm">a</text>
            <text x="205" y="186" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(a + 2, 0)</text>
          </svg>
        </div>

        <p>
          Критические значения параметра: <InlineMath math={`a = -4,\\ 2 - 2\\sqrt{2},\\ 0,\\ 2\\sqrt{2} - 2,\\ 4`} />.
        </p>
        <p>Разобьём их на 4 случая (Т.к. в нуле число решений не изменяется)</p>

        {/* График 2: семейство уголков в критических положениях */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 300 200" className="w-full max-w-[300px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="10" y1="170" x2="290" y2="170" />
              <line x1="150" y1="20" x2="150" y2="190" />
            </g>
            <path d="M 290,170 L 282,166 M 290,170 L 282,174" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <text x="150" y="14" fill="#000000" className="dark:fill-slate-300 font-serif italic text-sm">y</text>
            <text x="296" y="174" fill="#000000" className="dark:fill-slate-300 font-serif italic text-sm">x</text>

            {/* Полуокружность */}
            <path
              d="M100,170 L101.7,157.1 L106.7,145 L114.6,134.6 L125,126.7 L137.1,121.7 L150,120 L162.9,121.7 L175,126.7 L185.4,134.6 L193.3,145 L198.3,157.1 L200,170"
              fill="none" stroke="#2563eb" strokeWidth="2"
            />

            {/* Пунктирные линии к точкам (-2,0) и (2,0) */}
            <line x1="100" y1="170" x2="100" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="200" y1="170" x2="200" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="170" r="2.5" fill="#000000" />
            <circle cx="200" cy="170" r="2.5" fill="#000000" />
            <text x="70" y="184" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(-2, 0)</text>
            <text x="204" y="184" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(2, 0)</text>

            {/* Уголок 1: крайний левый */}
            <polyline points="25,170 75,120 125,170" fill="none" stroke="#9f1239" strokeWidth="2" />
            <text x="70" y="108" fill="#0e7490" className="font-semibold font-serif text-sm">1</text>

            {/* Уголок 2: касание слева (a = 2-2√2) */}
            <polyline points="79.25,170 129.25,120 179.25,170" fill="none" stroke="#9f1239" strokeWidth="2" />
            <text x="125" y="108" fill="#0e7490" className="font-semibold font-serif text-sm">2</text>

            {/* Уголок 3: касание справа (a = 2√2-2) */}
            <polyline points="120.75,170 170.75,120 220.75,170" fill="none" stroke="#9f1239" strokeWidth="2" />
            <text x="167" y="108" fill="#0e7490" className="font-semibold font-serif text-sm">3</text>

            {/* Уголок 4: крайний правый */}
            <polyline points="175,170 225,120 275,170" fill="none" stroke="#9f1239" strokeWidth="2" />
            <text x="221" y="108" fill="#0e7490" className="font-semibold font-serif text-sm">4</text>
          </svg>
        </div>

        <p>Сводка числа решений:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Левее сл.1: нет решений.</li>
          <li>сл.1: 1 решение</li>
          <li>Правее 1, но левее 2: 1 решение</li>
          <li>сл.2: 2 решения</li>
          <li>Правее 2, но левее 3: 3 решения</li>
          <li>сл. 3: 2 решения</li>
          <li>Правее 3, но левее 4: 1 решение</li>
          <li>Правее 4: нет решений</li>
        </ul>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`a \\in [-4;\\ 2 - 2\\sqrt{2}) \\cup (2\\sqrt{2} - 2;\\ 4]`} />
        </div>
      </div>
    )
  },




];
