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


  {
    id: 5,
    title: 'Задача 5 (ЕГЭ 2026, досрочная волна, Центр)',
    textBefore: 'Найдите все значения параметра a, при каждом из которых система',
    mathA: '\\begin{cases} 5 \\cdot 2^{|x|} + 6|x| + 7 = 5y + 6x^2 - a, \\\\ x^2 + y^2 = 1 \\end{cases}',
    textAfter: 'имеет единственное решение.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <p>Заметим что <InlineMath math={`|x|`} /> — чётен <InlineMath math={`\\Rightarrow`} /> Если <InlineMath math={`x_0`} /> — решение системы, то и <InlineMath math={`-x_0`} /> тоже решение системы. Значит, единственное решение возможно только при <InlineMath math={`x = 0`} />.</p>
        <p>Из первого уравнения</p>
        <BlockMath math={`y = \\frac{5 \\cdot 2^{|x|} + 6|x| + 7 - 6x^2 + a}{5}.`} />
        
        <p>При <InlineMath math={`x = 0`} />: <InlineMath math={`y(0) = \\frac{12 + a}{5}`} />, а по второму уравнению <InlineMath math={`y = \\pm 1`} />. Отсюда <InlineMath math={`a = -7`} /> (при <InlineMath math={`y = 1`} />) или <InlineMath math={`a = -17`} /> (при <InlineMath math={`y = -1`} />).</p>
        <p>получили 2 решения: <InlineMath math={`(0,1), a = -7`} /> и <InlineMath math={`(0, -1), a = -17`} /></p>
        <p>Проверим оба значения. (Нам нужно убедиться, что при данных значениях параметра система имеет только одно решение).</p>
        <p><i>Проверим <InlineMath math={`a = -17`} /></i></p>
        <p>Подставляя в 1-е уравнение получим:</p>
        
        <BlockMath math={`5 \\cdot 2^{|x|} + 6|x| = 5y + 6x^2 + 10`} />
        <p>Заметим что при <InlineMath math={`x = 1`} />:</p>
        <BlockMath math={`y = 0`} />
        <p>Следовательно при <InlineMath math={`a = -17`} /> имеется хотя бы 2 решения: (1,0) и (0, -1)</p>
        
        <p><i>Проверим <InlineMath math={`a = -7`} /></i></p>
        <p>Подставляя в 1-е уравнение получим:</p>
        <BlockMath math={`5 \\cdot 2^{|x|} + 6|x| = 5y + 6x^2`} />
        <BlockMath math={`y = \\frac{5 \\cdot 2^{|x|} + 6|x| - 6x^2}{5}`} />
        
        <p>Рассмотрим <InlineMath math={`y(x)`} /> на отрезке <InlineMath math={`[0; 1]`} /> (тк <InlineMath math={`|x|`} /> - чётен график будет симметричен относительно оси <InlineMath math={`Oy`} />)</p>
        <BlockMath math={`y = \\frac{5 \\cdot 2^x + 6x - 6x^2}{5} = 2^x + \\frac{6(x - x^2)}{5} \\geq 2^x + 0 \\geq 1`} />
        <p>Т.к. <InlineMath math={`x^2 \\geq x`} /> на отрезке <InlineMath math={`[0; 1]`} /></p>
        <p>Случай равенства достигается только при <InlineMath math={`x = 0, (y = 1)`} />. В остальных случаях уравнение не имеет пересечений с окружностью.(схематичный рисунок для понимания).</p>

        {/* Высокоточный математический SVG График с разнесенными надписями */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 400 320" className="w-full max-w-[400px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси координат (Центр в 180, 175. Масштаб: 1 ед = 80px) */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="90" y1="175" x2="270" y2="175" />
              <line x1="180" y1="40" x2="180" y2="290" />
            </g>
            
            {/* Стрелки осей */}
            <path d="M 270,175 L 264,171 M 270,175 L 264,179" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 180,40 L 176,46 M 180,40 L 184,46" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            
            {/* Подписи осей */}
            <text x="280" y="179" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
            <text x="175" y="26" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>

            {/* Синяя окружность x^2 + y^2 = 1 */}
            <circle cx="180" cy="175" r="80" fill="none" stroke="#0000cc" strokeWidth="1.8" />
            <text x="55" y="112" fill="#0000cc" className="font-serif text-lg italic">x² + y² = 1</text>

            {/* Красный график параболы y(x), a = -7 касающийся вершины окружности в (180, 95) */}
            <path 
              d="M 115,45 Q 180,145 245,45" 
              fill="none" 
              stroke="#cc0000" 
              strokeWidth="1.8" 
            />
            {/* Отодвинутое вправо и вверх пояснение функции, чтобы исключить наложение на ось и график */}
            <text x="220" y="55" fill="#cc0000" className="font-serif text-lg italic">y(x), a = -7</text>

            {/* Черная точка касания (0, 1) */}
            <circle cx="180" cy="95" r="3.5" fill="#000000" />
            <text x="190" y="88" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(0, 1)</text>
          </svg>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`a = -7`} />
        </div>
      </div>
    )
  },






  {
    id: 6,
    title: 'Задача 6 (ЕГЭ 2026, резервный день, Дальний Восток)',
    textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
    mathA: '\\sqrt{1 - 4x} = a - 3|x|',
    textAfter: 'имеет больше двух корней.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>

        <p>Решим задачу графическим методом в координатах <InlineMath math={`xOy`} />.</p>
        <p>
          Пусть <InlineMath math={`f(x) = \\sqrt{1 - 4x}`} /> и <InlineMath math={`g(x) = a - 3|x|`} />. Уравнение <InlineMath math={`f(x) = g(x)`} /> имеет столько же корней, сколько общих точек у графиков <InlineMath math={`f`} /> и <InlineMath math={`g`} />.
        </p>
        <p>
          График <InlineMath math={`f`} /> — неподвижная кривая с вершиной в <InlineMath math={`\\left(\\frac{1}{4}; 0\\right)`} /> и точкой <InlineMath math={`(0; f(0)) = (0; 1)`} /> на оси <InlineMath math={`y`} /> (график корня):
        </p>

        {/* График 1: f(x) = sqrt(1-4x), гладкая дуга */}
                {/* График функции f(x) */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 400 250" className="w-full max-w-[400px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси координат (Центр в 220, 160. Масштаб: 1 ед = 120px) */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="120" y1="160" x2="320" y2="160" />
              <line x1="220" y1="30" x2="220" y2="210" />
            </g>
            
            {/* Стрелки осей */}
            <path d="M 320,160 L 314,156 M 320,160 L 314,164" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 220,30 L 216,36 M 220,30 L 224,36" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            
            {/* Подписи осей */}
            <text x="330" y="164" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
            <text x="215" y="24" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>

            {/* Идеально гладкая математическая дуга корня f(x) без изломов с вертикальным входом в вершину */}
            <path 
              d="M 140,-10 C 175,25 200,50 220,80 C 232,98 245,124 250,160" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="2" 
              strokeLinecap="round"
            />

            {/* Векторная подпись функции, смещенная левее графика */}
            <g className="font-serif text-sm">
              <text x="65" y="65" fill="#3b82f6">f(x) = </text>
              <path 
                d="M 106,59 L 110,59 L 115,66 L 121,48 L 168,48" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="1.4" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text x="123" y="65" fill="#3b82f6">1 - 4x</text>
            </g>

            {/* Маркерные точки и подписи */}
            <circle cx="220" cy="80" r="3" fill="#000000" />
            <text x="206" y="85" fill="#000000" className="dark:fill-slate-300 font-serif font-bold text-sm">1</text>

            <circle cx="250" cy="160" r="3" fill="#000000" />
            
            {/* Дробь 1/4 */}
            <text x="246" y="174" fill="#000000" className="dark:fill-slate-300 font-serif text-[10px] text-center">1</text>
            <text x="244" y="179" fill="#000000" className="dark:fill-slate-300 font-serif text-[10px] text-center">—</text>
            <text x="246" y="186" fill="#000000" className="dark:fill-slate-300 font-serif text-[10px] text-center">4</text>
          </svg>
        </div>


        <p>
          <InlineMath math={`g`} /> — «уголок» с вершиной <InlineMath math={`(0; a)`} /> и рёбрами с наклоном <InlineMath math={`\\pm 3`} />; при изменении <InlineMath math={`a`} /> он целиком едет по вертикали, не меняя формы:
        </p>

                {/* График функции g(x) */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 400 240" className="w-full max-w-[400px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси координат (Центр в 200, 190. Масштаб: 1 ед = 80px) */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="120" y1="190" x2="280" y2="190" />
              <line x1="200" y1="40" x2="200" y2="220" />
            </g>
            
            {/* Стрелки осей */}
            <path d="M 280,190 L 274,186 M 280,190 L 274,194" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 200,40 L 196,46 M 200,40 L 204,46" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            
            {/* Подписи осей */}
            <text x="290" y="194" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
            <text x="195" y="32" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>

            {/* Идеально прямые линии рёбер уголка g(x) = a - 3|x| без скруглений */}
            <path 
              d="M 140,230 L 200,65 L 260,230" 
              fill="none" 
              stroke="#dc2626" 
              strokeWidth="2" 
              strokeLinecap="square"
            />
            {/* Пояснение к графику аккуратно сдвинуто влево */}
            <text x="95" y="65" fill="#dc2626" className="font-serif text-sm font-bold">g(x) = a - 3|x|</text>

            {/* Вершина (0; a) */}
            <circle cx="200" cy="65" r="3.5" fill="#000000" />
            <text x="210" y="69" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(0; a)</text>
          </svg>
        </div>


        <p>Так как форма <InlineMath math={`g`} /> жёсткая, всё зависит от того, на какой высоте стоит её вершина. Отметим три опорных положения.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <em>Правое ребро <InlineMath math={`g`} /> проходит через правый конец дуги <InlineMath math={`\\left(\\frac{1}{4}; 0\\right)`} /></em>: подставим <InlineMath math={`x = \\frac{1}{4}`} /> в <InlineMath math={`g`} />:
            <BlockMath math={`g\\left(\\frac{1}{4}\\right) = a - 3 \\cdot \\frac{1}{4} = 0 \\implies a = \\frac{3}{4}.`} />
          </li>
          <li>
            <em>Вершина <InlineMath math={`g`} /> пересекает <InlineMath math={`f`} /> в точке <InlineMath math={`(0; 1)`} /></em>
            <BlockMath math={`g(0) = f(0) \\implies a = 1.`} />
          </li>
          <li>
            <em>Правое ребро <InlineMath math={`g`} /> касается дуги</em> (одна общая точка, а не пересечение). Приравняем <InlineMath math={`a - 3x = \\sqrt{1 - 4x}`} /> и возведём в квадрат (<InlineMath math={`x \\ge 0`} />):
            <BlockMath math={`(a-3x)^2 = 1-4x \\implies 9x^2+(4-6a)x+(a^2-1)=0, \\qquad D=(4-6a)^2-36(a^2-1)=52-48a.`} />
            <p>Касание — при <InlineMath math={`D = 0`} />:</p>
            <BlockMath math={`a = \\frac{13}{12}.`} />
          </li>
        </ul>

                  {/* График 3: f (гладкая дуга) и три критических уголка */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 400 280" className="w-full max-w-[400px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси координат (Центр в 220, 200. Масштаб: 1 ед по x = 160px, 1 ед по y = 120px) */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="80" y1="200" x2="360" y2="200" />
              <line x1="220" y1="30" x2="220" y2="230" />
            </g>
            
            {/* Стрелки осей */}
            <path d="M 360,200 L 352,196 M 360,200 L 352,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 220,30 L 216,38 M 220,30 L 224,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            
            {/* Подписи осей */}
            <text x="375" y="204" fill="#000000" className="dark:fill-slate-300 font-serif text-lg">x</text>
            <text x="212" y="22" fill="#000000" className="dark:fill-slate-300 font-serif text-lg">y</text>

            {/* Идеологически выверенная, пропорциональная и красивая геометрия знака корня */}
            <g className="font-serif text-sm">
              <text x="65" y="65" fill="#0000ff">f(x) = </text>
              {/* Аккуратная стартовая черта, глубокая галочка и длинная крыша */}
              <path 
                d="M 106,59 L 110,59 L 115,66 L 121,48 L 168,48" 
                fill="none" 
                stroke="#0000ff" 
                strokeWidth="1.4" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text x="123" y="65" fill="#0000ff">1 - 4x</text>
            </g>

            {/* Три критических уголка g(x) = a - 3|x| с идеально точным наклоном рёбер */}
            {/* 1. Касание (a = 13/12, вершина в y = 70). Самый высокий уголок, правое ребро касается синей дуги f(x) */}
            <path d="M 135.6,260 L 220,70 L 304.4,260" fill="none" stroke="#b0003a" strokeWidth="1.5" />
            {/* 2. Проход через (0,1) (a = 1, вершина в y = 80). Средний уголок, вершина ровно в точке (220, 80) */}
            <path d="M 140,260 L 220,80 L 300,260" fill="none" stroke="#b0003a" strokeWidth="1.5" />
            {/* 3. Проход через (1/4, 0) (a = 3/4, вершина в y = 110). Нижний уголок, правое ребро проходит через (260, 200) */}
            <path d="M 153.3,260 L 220,110 L 260,200 L 286.7,260" fill="none" stroke="#b0003a" strokeWidth="1.5" />

            {/* Синяя дуга f(x) = sqrt(1-4x). Идеальное касание с правым ребром верхнего уголка (в районе x=0.1) */}
            {/* Траектория скорректирована через кубический сплайн для плавного соприкосновения без пересечения */}
            <path 
              d="M 140,-10 C 175,25 200,50 220,80 C 235,102 248,135 260,200" 
              fill="none" 
              stroke="#0000ff" 
              strokeWidth="2" 
              strokeLinecap="round"
            />

            {/* Маркерные точки и подписи делений в полном соответствии со скриншотом */}
            <circle cx="220" cy="80" r="3" fill="#000000" />
            <text x="202" y="85" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">1</text>

            <circle cx="260" cy="200" r="3" fill="#000000" />
            
            {/* Дробь 1/4 без использования tspan */}
            <text x="256" y="214" fill="#000000" className="dark:fill-slate-300 font-serif text-xs text-center">1</text>
            <text x="254" y="220" fill="#000000" className="dark:fill-slate-300 font-serif text-xs text-center">—</text>
            <text x="256" y="228" fill="#000000" className="dark:fill-slate-300 font-serif text-xs text-center">4</text>
          </svg>
        </div>



        <ul className="list-disc pl-5 space-y-1">
          <li><InlineMath math={`a < \\frac{3}{4}`} />: уголок целиком ниже дуги — 0 общих точек;</li>
          <li><InlineMath math={`\\frac{3}{4} \\le a < 1`} />: правое ребро пересекает дугу один раз, левое — ни разу — 1 общая точка;</li>
          <li><InlineMath math={`a = 1`} />: вершина уголка легла на дугу (это и есть точка от левого ребра), правое ребро пересекает дугу ещё в одной точке — 2 общие точки;</li>
          <li><InlineMath math={`1 < a < \\frac{13}{12}`} />: правое ребро пересекает дугу дважды, левое — ещё один раз — 3 общие точки;</li>
          <li><InlineMath math={`a = \\frac{13}{12}`} />: правое ребро лишь касается дуги (1 точка), левое даёт ещё одну — 2 общие точки;</li>
          <li><InlineMath math={`a > \\frac{13}{12}`} />: правое ребро больше не достаёт до дуги, но левое по-прежнему пересекает её один раз — 1 общая точка.</li>
        </ul>

        <p>Больше двух общих точек — только при <InlineMath math={`1 < a < \\frac{13}{12}`} />.</p>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`a \\in \\left(1;\\ \\frac{13}{12}\\right)`} />
        </div>
      </div>
    )
  },

  {
    id: 7,
    title: 'Задача 7 (ЕГЭ 2026, резервный день, Центр)',
    textBefore: 'Найдите все положительные значения параметра a, при каждом из которых уравнение',
    mathA: '|1 - 3\\sqrt{x}| = x + a',
    textAfter: 'имеет два различных корня.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>

        <p><em>P.S* Обратите внимание, что в условии задачи просят Найти только положительные значения (a &gt; 0).</em></p>
        <p>
          Область: <InlineMath math={`x \\ge 0`} />. Замена <InlineMath math={`t = \\sqrt{x} \\ge 0`} /> (взаимно однозначна с <InlineMath math={`x`} />) сводит уравнение к
        </p>
        <BlockMath math={`|1 - 3t| = t^2 + a.`} />

        <p>
          Рассмотрим два графика: неподвижную «галочку» <InlineMath math={`f(t) = |1 - 3t|`} /> с вершиной <InlineMath math={`\\left(\\frac{1}{3}; 0\\right)`} /> и <InlineMath math={`f(0) = 1`} />, и параболу <InlineMath math={`g(t) = t^2 + a`} /> с вершиной <InlineMath math={`(0; a)`} />, которая едет по вертикали.
        </p>

                {/* График: галочка f(t) и две параболы g(t) при a=1 и a=5/4 */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 300 240" className="w-full max-w-[300px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="30" y1="215" x2="280" y2="215" />
              <line x1="60" y1="225" x2="60" y2="15" />
            </g>
            <path d="M 280,215 L 272,211 M 280,215 L 272,219" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 60,15 L 56,23 M 60,15 L 64,23" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <text x="286" y="219" fill="#000000" className="dark:fill-slate-300 font-serif italic text-sm">t</text>
            <text x="54" y="10" fill="#000000" className="dark:fill-slate-300 font-serif italic text-sm">y</text>

            {/* Галочка f(t) = |1-3t|, острая вершина в (80,215), прямые лучи */}
            <polyline
              points="60,160 80,215 155,10"
              fill="none" stroke="#000000" strokeWidth="2" strokeLinejoin="round" className="dark:stroke-slate-300"
            />
            <text x="165" y="35" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">f(t)</text>

            {/* Парабола g(t) = t^2 + 1 (a=1), плотная выборка точек — визуально гладкая */}
            <polyline
              points="60,160 66,159.45 72,157.8 78,155.05 84,151.2 90,146.25 96,140.2 102,133.05 108,124.8 114,115.45 120,105 126,93.45 132,80.8 138,67.05 144,52.2 150,36.25"
              fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round"
            />
            <text x="120" y="150" fill="#ea580c" className="font-semibold font-serif text-sm">a = 1</text>

            {/* Вторая парабола g(t) = t^2 + 5/4 (a=5/4). Касается f(t) точно в (150, 22.5), после чего круто уходит вверх-влево отдельно от черной линии */}
            <polyline
              points="60,146.25 66,145.7 72,144.05 78,141.3 84,137.45 90,132.5 96,126.45 102,119.3 108,111.05 114,101.7 120,91.25 126,79.7 132,67.05 138,53.3 144,38.45 150,22.5 152.5,10.2 154.5,-2.3"
              fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"
            />
            
            {/* Скорректированное пояснение, слегка смещенное вправо для идеального баланса */}
            <g className="font-semibold font-serif text-sm select-none" fill="#dc2626">
              <text x="75" y="100">a = </text>
              <text x="101" y="93" className="text-[10px]">5</text>
              <line x1="100" y1="96" x2="108" y2="96" stroke="#dc2626" strokeWidth="1" />
              <text x="101" y="105" className="text-[10px]">4</text>
            </g>

            {/* Точки */}
            <circle cx="60" cy="160" r="3" fill="#000000" />
            <text x="10" y="157" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(0, 1)</text>

            <circle cx="150" cy="22.5" r="3" fill="#000000" />
          </svg>
        </div>


        <p>
          <em>Опорное положение 1</em>: вершина параболы попадает в точку <InlineMath math={`(0; 1)`} /> — начало левой ветви галочки:
        </p>
        <BlockMath math={`g(0) = f(0) \\implies a = 1.`} />

        <p>
          <em>Опорное положение 2</em>: правая ветвь параболы касается правой ветви галочки (<InlineMath math={`t > \\frac{1}{3}`} />, <InlineMath math={`f(t) = 3t - 1`} />). Приравняем:
        </p>
        <BlockMath math={`t^2 + a = 3t - 1 \\implies t^2 - 3t + (a + 1) = 0, \\qquad D = 9 - 4(a+1) = 5 - 4a.`} />
        <p>
          Касание при <InlineMath math={`D = 0`} />: <InlineMath math={`a = \\frac{5}{4}`} />, точка касания <InlineMath math={`t = \\frac{3}{2}`} />.
        </p>

        <p>Проверим количество точек пересечения по промежуткам:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><InlineMath math={`0 < a < 1`} />: 3 точки пересечений;</li>
          <li><InlineMath math={`a = 1`} />: 3 точки;</li>
          <li><InlineMath math={`1 < a < \\frac{5}{4}`} />: 2 точки;</li>
          <li><InlineMath math={`a = \\frac{5}{4}`} />: 1 точка;</li>
          <li><InlineMath math={`a > \\frac{5}{4}`} />: пересечений нет. (т.к. квадратичная функция растёт быстрее линейной)</li>
        </ul>
        <p>Ровно два корня — только при <InlineMath math={`1 < a < \\frac{5}{4}`} />.</p>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`a \\in \\left(1;\\ \\frac{5}{4}\\right)`} />
        </div>
      </div>
    )
  },


  {
    id: 8,
    title: 'Задача 8 (По мотивам ЕГЭ 2026, резервный день, Центр)',
    textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
    mathA: '\\frac{x^2 + 4x - a}{15x^2 - 8ax + a^2} = 0',
    textAfter: 'имеет ровно два различных решения.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>

        <p>Уравнение равносильно системе: числитель равен нулю, знаменатель не равен нулю.</p>
        <p>Разложим знаменатель на множители:</p>
        <p>
          <InlineMath math={`D = 64a^2 - 60a^2 = 4a^2`} />, корни <InlineMath math={`x = \\dfrac{8a \\pm 2a}{30}`} />, то есть <InlineMath math={`x = \\dfrac{a}{3}`} /> и <InlineMath math={`x = \\dfrac{a}{5}`} />. Проверкой убеждаемся, что
        </p>
        <BlockMath math={`15x^2 - 8ax + a^2 = (3x - a)(5x - a).`} />
        <p>Значит, ОДЗ: <InlineMath math={`x \\ne \\dfrac{a}{3},\\ x \\ne \\dfrac{a}{5}`} />.</p>

        <p>
          Числитель: <InlineMath math={`x^2 + 4x - a = 0`} />, откуда <InlineMath math={`x = -2 \\pm \\sqrt{4 + a}`} /> — два различных корня при <InlineMath math={`a > -4`} />, один (двойной) корень <InlineMath math={`x = -2`} /> при <InlineMath math={`a = -4`} />, корней нет при <InlineMath math={`a < -4`} />.
        </p>
        <p>При <InlineMath math={`a = -4`} /> имеем только один корень числителя — он не может дать два решения, значение исключается сразу.</p>
        <p>
          При <InlineMath math={`a > -4`} /> нужно, чтобы <em>ни один</em> из корней числителя не попал в ОДЗ-исключения (иначе останется только одно решение). Найдём, когда <InlineMath math={`x = \\dfrac{a}{3}`} /> является корнем числителя:
        </p>
        <BlockMath math={`\\left(\\frac{a}{3}\\right)^2 + 4 \\cdot \\frac{a}{3} - a = 0 \\implies \\frac{a^2}{9} + \\frac{a}{3} = 0 \\implies a^2 + 3a = 0 \\implies a = 0 \\text{ или } a = -3.`} />

        <p>Аналогично для <InlineMath math={`x = \\dfrac{a}{5}`} />:</p>
        <BlockMath math={`\\left(\\frac{a}{5}\\right)^2 + 4 \\cdot \\frac{a}{5} - a = 0 \\implies \\frac{a^2}{25} - \\frac{a}{5} = 0 \\implies a^2 - 5a = 0 \\implies a = 0 \\text{ или } a = 5.`} />

        <p>Проверим эти значения:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><InlineMath math={`a = 0`} />: корни числителя <InlineMath math={`0, -4`} />; <InlineMath math={`x = 0`} /> совпадает с <InlineMath math={`\\frac{a}{3} = \\frac{a}{5} = 0`} /> — остаётся одно решение;</li>
          <li><InlineMath math={`a = -3`} />: корни числителя <InlineMath math={`-1, -3`} />; <InlineMath math={`x = -1`} /> совпадает с <InlineMath math={`\\frac{a}{3} = -1`} /> — остаётся одно решение;</li>
          <li><InlineMath math={`a = 5`} />: корни числителя <InlineMath math={`1, -5`} />; <InlineMath math={`x = 1`} /> совпадает с <InlineMath math={`\\frac{a}{5} = 1`} /> — остаётся одно решение.</li>
        </ul>
        <p>При всех остальных <InlineMath math={`a > -4`} /> оба корня числителя не совпадают с исключениями — ровно два решения.</p>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`a \\in (-4; -3) \\cup (-3; 0) \\cup (0; 5) \\cup (5; +\\infty)`} />
        </div>
      </div>
    )
  },


  {
    id: 9,
    title: 'Задача 9 (ЕГЭ 2026, резервный день, Центр)',
    textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
    mathA: '(ax^2 + 2x)^2 - (a^2 + a + 2)(ax^2 + 2x) + a^2(a + 2) = 0',
    textAfter: 'имеет ровно два различных решения.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>

        <p>Пусть <InlineMath math={`t = ax^2 + 2x`} />;</p>
        <BlockMath math={`t^2 - (a^2 + a + 2)t + a^2(a + 2) = 0`} />
        <p>По теореме Виета его корни <InlineMath math={`t = a^2`} /> и <InlineMath math={`t = a + 2`} />:</p>
        <BlockMath math={`(t - a^2)(t - (a + 2)) = 0.`} />

        <p>Значит, исходное уравнение равносильно совокупности</p>
        <BlockMath math={`ax^2 + 2x = a^2 \\qquad \\text{или} \\qquad ax^2 + 2x = a + 2.`} />

        <p><em>Случай a = 0.</em> Уравнения линейные: <InlineMath math={`2x = 0 \\Rightarrow x = 0`} /> и <InlineMath math={`2x = 2 \\Rightarrow x = 1`} /> — два различных решения. Подходит.</p>

        <p>
          <em>Случай a ≠ 0.</em> Теперь это две параболы одинаковой формы <InlineMath math={`y = ax^2 + 2x`} />, пересечённые горизонталями <InlineMath math={`y = a^2`} /> и <InlineMath math={`y = a + 2`} />. У параболы <InlineMath math={`y = ax^2 + 2x`} /> вершина находится в точке
        </p>
        <BlockMath math={`x_0 = -\\frac{1}{a}, \\qquad y_0 = ax_0^2 + 2x_0 = \\frac{1}{a} - \\frac{2}{a} = -\\frac{1}{a},`} />
        <p>
          то есть вершина <em>всегда лежит на прямой</em> <InlineMath math={`y = x`} /> — удобный ориентир. Число решений уравнения <InlineMath math={`ax^2 + 2x = k`} /> зависит от того, как высота <InlineMath math={`k`} /> расположена относительно вершины <InlineMath math={`y_0 = -\\frac{1}{a}`} />: при <InlineMath math={`a > 0`} /> (ветви вверх) нужно <InlineMath math={`k > y_0`} /> для двух корней; при <InlineMath math={`a < 0`} /> (ветви вниз) нужно <InlineMath math={`k < y_0`} />.
        </p>

        <p className="font-bold">Рассмотрим случай когда две горизонтали совпадают.</p>
        <p>Это происходит при</p>
        <BlockMath math={`a^2 - a - 2 = 0 \\implies (a - 2)(a + 1) = 0 \\implies a = 2 \\text{ или } a = -1.`} />

        <p>
          <em>При a = 2</em>: единственное уравнение <InlineMath math={`2x^2 + 2x - 4 = 0 \\Rightarrow x^2 + x - 2 = 0 \\Rightarrow x = 1`} /> или <InlineMath math={`x = -2`} /> — 2 различных решения. Подходит.
        </p>
        <p>
          <em>При a = -1</em>: единственное уравнение <InlineMath math={`-x^2 + 2x - 1 = 0 \\Rightarrow -(x-1)^2 = 0 \\Rightarrow x = 1`} /> (вершина как раз касается этой горизонтали) — только 1 решение. Не подходит.
        </p>

        {/* График 1: a > 0, ветви вверх, вершина ниже обеих горизонталей */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 300 260" className="w-full max-w-[300px] h-auto overflow-visible font-sans text-xs select-none">
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="45" y1="230" x2="285" y2="230" />
              <line x1="60" y1="15" x2="60" y2="235" />
            </g>
            <path d="M 285,230 L 277,226 M 285,230 L 277,234" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 60,15 L 56,23 M 60,15 L 64,23" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <text x="291" y="234" fill="#000000" className="dark:fill-slate-300 font-serif italic text-sm">x</text>
            <text x="54" y="10" fill="#000000" className="dark:fill-slate-300 font-serif italic text-sm">y</text>

            {/* Дугообразные горизонтали */}
            <line x1="60" y1="60" x2="270" y2="60" stroke="#dc2626" strokeWidth="1.3" strokeDasharray="4 3" />
            <text x="275" y="64" fill="#dc2626" className="font-semibold font-serif text-sm">a + 2</text>

            <line x1="60" y1="110" x2="270" y2="110" stroke="#ea580c" strokeWidth="1.3" strokeDasharray="4 3" />
            <text x="275" y="114" fill="#ea580c" className="font-semibold font-serif text-sm">a²</text>

            {/* Парабола, ветви вверх, гладкая */}
            <polyline
              points="90,20 100,75 110,120 120,155 130,180 140,195 150,200 160,195 170,180 180,155 190,120 200,75 210,20"
              fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"
            />

            <circle cx="150" cy="200" r="3" fill="#000000" />
            <text x="95" y="222" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(-1/a, -1/a)</text>
          </svg>
        </div>

        {/* График 2: a < 0, ветви вниз, вершина между горизонталями */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 300 260" className="w-full max-w-[300px] h-auto overflow-visible font-sans text-xs select-none">
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="45" y1="230" x2="285" y2="230" />
              <line x1="60" y1="15" x2="60" y2="235" />
            </g>
            <path d="M 285,230 L 277,226 M 285,230 L 277,234" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 60,15 L 56,23 M 60,15 L 64,23" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <text x="291" y="234" fill="#000000" className="dark:fill-slate-300 font-serif italic text-sm">x</text>
            <text x="54" y="10" fill="#000000" className="dark:fill-slate-300 font-serif italic text-sm">y</text>

            {/* Дугообразные горизонтали */}
            <line x1="60" y1="50" x2="270" y2="50" stroke="#ea580c" strokeWidth="1.3" strokeDasharray="4 3" />
            <text x="275" y="54" fill="#ea580c" className="font-semibold font-serif text-sm">a²</text>

            <line x1="60" y1="140" x2="270" y2="140" stroke="#dc2626" strokeWidth="1.3" strokeDasharray="4 3" />
            <text x="275" y="144" fill="#dc2626" className="font-semibold font-serif text-sm">a + 2</text>

            {/* Парабола, ветви вниз, гладкая */}
            <polyline
              points="90,230 100,187 110,152 120,125 130,106 140,94 150,90 160,94 170,106 180,125 190,152 200,187 210,230"
              fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"
            />

            <circle cx="150" cy="90" r="3" fill="#000000" />
            <text x="155" y="80" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(-1/a, -1/a)</text>
          </svg>
        </div>

        <p className="font-bold">Остальные a ≠ 0, -1, 2 (горизонтали различны).</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <InlineMath math={`a > 0`} />: вершина <InlineMath math={`y_0 = -\\frac{1}{a} < 0`} />, а обе горизонтали <InlineMath math={`a^2 > 0`} /> и <InlineMath math={`a+2 > 0`} /> — выше вершины <InlineMath math={`\\Rightarrow`} /> по 2 точки на каждой горизонтали, итого 4 (горизонтали различны, так как <InlineMath math={`a \\ne 2`} />).
          </li>
          <li>
            <InlineMath math={`-1 < a < 0`} />: вершина <InlineMath math={`y_0 = -\\frac{1}{a} > 0`} />. Проверим <InlineMath math={`a+2`} /> против <InlineMath math={`y_0`} />: неравенство <InlineMath math={`a + 2 < -\\frac{1}{a}`} /> равносильно (после умножения на <InlineMath math={`a < 0`} /> со сменой знака) <InlineMath math={`(a+1)^2 > 0`} /> — всегда верно (<InlineMath math={`a \\ne -1`} />), то есть <InlineMath math={`a+2`} /> достижимо (2 точки). Проверим <InlineMath math={`a^2`} />: неравенство <InlineMath math={`a^2 < -\\frac{1}{a}`} /> равносильно <InlineMath math={`a^3 > -1`} />, то есть <InlineMath math={`a > -1`} /> — в этом промежутке тоже верно (2 точки). Итого <InlineMath math={`2 + 2 = 4`} />.
          </li>
          <li>
            <InlineMath math={`a < -1`} />: как и выше, <InlineMath math={`a + 2`} /> всегда достижимо (2 точки). А вот <InlineMath math={`a^3 > -1`} /> здесь <em>не</em> выполняется (<InlineMath math={`a < -1 \\Rightarrow a^3 < -1`} />), значит <InlineMath math={`a^2 > y_0`} /> — горизонталь <InlineMath math={`a^2`} /> выше вершины (ветви вниз!) и параболы не достигает — 0 точек. Итого <InlineMath math={`0 + 2 = 2`} />. Подходит для <em>всех</em> таких <InlineMath math={`a`} />.
          </li>
        </ul>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`a \\in (-\\infty; -1) \\cup \\{0\\} \\cup \\{2\\}`} />
        </div>
      </div>
    )
  },



  {
    id: 10,
    title: 'Задача 10 (ЕГЭ 2026, пересдача, Дальний Восток)',
    textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
    mathA: 'x \\cdot |x| - 4x = ax + a + 4',
    textAfter: 'имеет единственное решение.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <p>Перегруппируем правую часть:</p>
        <BlockMath math={`x \\cdot |x| - 4x = ax + a + 4 \\implies x|x| = ax + a + 4x + 4 = a(x + 1) + 4(x + 1) = (a + 4)(x + 1).`} />
        <BlockMath math={`x|x| = (a + 4)(x + 1).`} />
        
        <p>
          Правая часть — пучок прямых, проходящих через фиксированную точку <InlineMath math={`(-1; 0)`} /> с угловым коэффициентом <InlineMath math={`k = a + 4`} />. Левая часть <InlineMath math={`y = x|x|`} /> — фиксированная неограниченно возрастающая кривая (при <InlineMath math={`x \\geq 0`} /> это <InlineMath math={`y = x^2`} />, выпуклая; при <InlineMath math={`x < 0`} /> это <InlineMath math={`y = -x^2`} />, вогнутая; в нуле — перегиб).
        </p>

                {/* Высокоточный математический SVG График 1 в 1 для задачи 10 */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 500 360" className="w-full max-w-[500px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Горизонтальная ось x (укорочена с обеих сторон) и вертикальная ось y */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="120" y1="200" x2="390" y2="200" />
              <line x1="270" y1="40" x2="270" y2="340" />
            </g>
            
            {/* Стрелки осей */}
            <path d="M 390,200 L 382,196 M 390,200 L 382,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 270,40 L 266,48 M 270,40 L 274,48" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            
            <text x="400" y="204" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
            <text x="264" y="32" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>

            {/* Тёмно-зелёный пунктир для случая a = -4 (явно выходит за границы укороченной оси Ox с обеих сторон) */}
            <line x1="70" y1="200" x2="430" y2="200" stroke="#15803d" strokeWidth="1.5" strokeDasharray="5 4" />
            <text x="80" y="185" fill="#15803d" className="font-serif text-sm">прямая при (a = -4)</text>

            {/* Идеально гладкая непрерывная кубическая дуга y = x|x| без изломов и углов */}
            <path 
              d="M 215,340 C 235,270 250,210 270,200 C 290,190 305,130 325,40" 
              fill="none" 
              stroke="#0000ff" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            {/* Синее пояснение сдвинуто еще чуть правее для идеального соответствия скриншоту */}
            <text x="335" y="85" fill="#0000ff" className="font-serif text-base italic">y = x|x|</text>

            {/* Фиолетовая сплошная линия пучка для случая a = 0 (строго проходит через 240, 200) */}
            <line x1="210" y1="350" x2="277" y2="40" stroke="#a855f7" strokeWidth="2" />
            <text x="80" y="245" fill="#a855f7" className="font-serif text-sm">прямая при (a = 0)</text>

            {/* Красная падающая прямая k = a + 4, математически выверенная строго через центр точки (-1; 0) */}
            <line x1="160" y1="136" x2="320" y2="264" stroke="#ff0000" strokeWidth="1.8" />
            <text x="300" y="255" fill="#ff0000" className="font-serif text-sm">прямая при k = a + 4</text>

            {/* Черная точка пучка (-1; 0) -> в координатах SVG (270 - 30 = 240, 200) */}
            <circle cx="240" cy="200" r="4" fill="#000000" />
            <text x="215" y="222" fill="#000000" className="dark:fill-slate-300 font-serif font-bold text-sm">(-1; 0)</text>
          </svg>
        </div>


        <p>Найдём касательные из точки <InlineMath math={`(-1; 0)`} /> к каждой ветви.</p>
        <p>К правой ветви <InlineMath math={`y = x^2 \\ (x \\geq 0)`} />:</p>
        <BlockMath math={`x^2 - (a + 4)x - (a + 4) = 0`} />
        <BlockMath math={`(D = 0) : (a + 4)^2 + 4a + 16 = 0`} />
        <BlockMath math={`a^2 + 12a + 32 = 0`} />
        
        <p>Следовательно <InlineMath math={`a = -8`} /> либо <InlineMath math={`a = -4`} /></p>
        <p>При <InlineMath math={`a = -8`} /> происходит касание с мнимой частью параболы. (левой веткой)</p>
        <p>При <InlineMath math={`a = -4`} /> происходит касание с параболой в нуле. (подходит)</p>
        
        <p>К левой ветви <InlineMath math={`y = -x^2 \\ (x < 0)`} />:</p>
        <BlockMath math={`-x^2 - (a + 4)x - (a + 4) = 0`} />
        <BlockMath math={`(D = 0) : (a + 4)^2 - 4a - 16 = 0`} />
        <BlockMath math={`a^2 + 4a = 0`} />
        
        <p>Следовательно <InlineMath math={`a = 0`} /> либо <InlineMath math={`a = -4`} /></p>
        <p>При <InlineMath math={`a = 0`} /> происходит касание с левой веткой параболы. (не подходит)</p>
        <p>При <InlineMath math={`a = -4`} /> происходит касание с параболой в игре. (подходит)</p>
        
        <p>Если <InlineMath math={`(-\\infty < a < 0)`} /> — 1 решение</p>
        <p>Если <InlineMath math={`(a = 0)`} /> — 2 решение (пересечение одновременно с нижней и верхней ветвями, т.к. квадратичная функция растёт быстрее линейной).</p>
        <p>Если <InlineMath math={`(0 < a < +\\infty)`} /> — 2 решение (пересечение одновременно с нижней и верхней ветвями, т.к. квадратичная функция растёт быстрее линейной).</p>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`a \\in (-\\infty; 0)`} />
        </div>
      </div>
    )
},



  {
  id: 11,
  title: 'Задача 11 (ЕГЭ 2025, основная волна, Сибирь)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: `a \\left( x + \\frac{4}{x} \\right)^2 + 2 \\left( x + \\frac{4}{x} \\right) - 25a + 10 = 0`,
  textAfter: 'имеет ровно два различных решения.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Сделаем замену: <InlineMath math={`t = x + \\frac{4}{x}`} />, где <InlineMath math={`x \\neq 0`} />. По неравенству между средним арифметическим и геометрическим:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>при <InlineMath math={`x > 0`} />: <InlineMath math={`t \\ge 4`} />;</li>
        <li>при <InlineMath math={`x < 0`} />: <InlineMath math={`t \\le -4`} />.</li>
      </ul>
      <p>Таким образом, <InlineMath math={`t \\in (-\\infty; -4] \\cup [4; +\\infty)`} />.</p>
      
      <p>Подставим <InlineMath math={`t`} /> в уравнение:</p>
      <BlockMath math={`a t^2 + 2t - 25a + 10 = 0.`} />
      <p>Сгруппируем слагаемые:</p>
      <BlockMath math={`a(t^2 - 25) + 2(t + 5) = a(t - 5)(t + 5) + 2(t + 5) = (t + 5)[a(t - 5) + 2] = 0.`} />
      
      <p>Отсюда получаем два случая:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><InlineMath math={`t = -5`} /> — корень при любом <InlineMath math={`a`} />;</li>
        <li>при <InlineMath math={`a \\neq 0`} />: <InlineMath math={`t = 5 - \\frac{2}{a}`} />.</li>
      </ul>
      
      <p>Каждому <InlineMath math={`t`} /> соответствует квадратное уравнение <InlineMath math={`x^2 - tx + 4 = 0`} /> с дискриминантом <InlineMath math={`D = t^2 - 16`} />. Количество решений <InlineMath math={`x`} />:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>2 корня при <InlineMath math={`|t| > 4`} />;</li>
        <li>1 корень при <InlineMath math={`|t| = 4`} />;</li>
        <li>0 корней при <InlineMath math={`|t| < 4`} />.</li>
      </ul>
      
      <p>Так как <InlineMath math={`|-5| = 5 > 4`} />, значение <InlineMath math={`t = -5`} /> всегда даёт ровно 2 решения <InlineMath math={`x`} />. Чтобы общее количество решений было равно двум, второй корень <InlineMath math={`t = 5 - \\frac{2}{a}`} /> (если он существует) не должен добавлять новых решений. Это возможно в двух случаях:</p>
      
      <p><strong>Случай 1.</strong> Совпадение корней:</p>
      <BlockMath math={`5 - \\frac{2}{a} = -5 \\Rightarrow \\frac{2}{a} = 10 \\Rightarrow a = \\frac{1}{5}.`} />
      
      <p><strong>Случай 2.</strong> Второй корень не даёт решений для <InlineMath math={`x`} />, то есть <InlineMath math={`|t| < 4`} />:</p>
      <BlockMath math={`-4 < 5 - \\frac{2}{a} < 4.`} />
      <p>Преобразуем:</p>
      <BlockMath math={`-9 < -\\frac{2}{a} < -1 \\Rightarrow 1 < \\frac{2}{a} < 9 \\Rightarrow \\frac{1}{2} < \\frac{1}{a} < \\frac{9}{2}.`} />
      <p>При <InlineMath math={`a > 0`} /> это эквивалентно <InlineMath math={`\\frac{2}{9} < a < 2`} />. При <InlineMath math={`a < 0`} /> решений нет (левая часть положительна, а <InlineMath math={`\\frac{1}{a} < 0`} />).</p>
      
      <p><strong>Отдельно рассмотрим <InlineMath math={`a = 0`} />:</strong> уравнение принимает вид <InlineMath math={`2(x + \\frac{4}{x}) + 10 = 0`} />, откуда <InlineMath math={`t = -5`} />, что даёт ровно 2 решения. Значит, <InlineMath math={`a = 0`} /> подходит.</p>
      
      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{0\\} \\cup \\left\\{ \\frac{1}{5} \\right\\} \\cup \\left( \\frac{2}{9}; 2 \\right)`} />
      </div>
    </div>
  )
},

{
    id: 12,
    title: 'Задача 12 (ЕГЭ 2025, основная волна, Сибирь)',
    textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
    mathA: '(7x + |x + a - 1| - 6|x + a + 1| + 7a)^2 - a(7x + |x + a - 1| - 6|x + a + 1| + 7a) + 1 = 0',
    textAfter: 'имеет ровно два различных решения.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <p>Сделаем замену <InlineMath math={`t = f(x) = 7x + |x + a - 1| - 6|x + a + 1| + 7a`} />. Тогда уравнение принимает вид:</p>
        <BlockMath math={`t^2 - at + 1 = 0`} />
        
        <p>Раскроем модули для функции <InlineMath math={`f(x)`} /> в зависимости от критических точек <InlineMath math={`x = -a - 1`} /> и <InlineMath math={`x = -a + 1`} />:</p>
        <BlockMath math={`f(x) = \\begin{cases} 12x + 12a + 7, & x \\leq -a - 1, \\\\ -5, & -a - 1 \\leq x \\leq -a + 1, \\\\ 2x + 2a - 7, & x \\geq -a + 1. \\end{cases}`} />
        
        <p>Функция <InlineMath math={`f(x)`} /> непрерывна и не убывает. Построим эскиз графика функции <InlineMath math={`f(x)`} /> в осях <InlineMath math={`xOt`} />:</p>

                {/* Высокоточный математический SVG График ломаной функции f(x) 1 в 1 */}
        <div className="my-6 flex justify-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 540 220" className="w-full max-w-[540px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси координат (Максимально крупный масштаб, укороченная ось t) */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="50" y1="120" x2="490" y2="120" />
              <line x1="270" y1="25" x2="270" y2="195" />
            </g>
            
            {/* Стрелки осей */}
            <path d="M 490,120 L 482,116 M 490,120 L 482,124" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 270,25 L 266,33 M 270,25 L 274,33" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            
            {/* Подписи осей */}
            <text x="505" y="124" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
            <text x="265" y="16" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">t</text>

            {/* Пунктирные линии проекций к точкам излома */}
            <g stroke="#000000" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" className="dark:stroke-slate-500">
              <line x1="180" y1="120" x2="180" y2="160" />
              <line x1="360" y1="120" x2="360" y2="160" />
            </g>

            {/* Максимально увеличенный и растянутый синий график ломаной функции f(x) */}
            <path 
              d="M 90,215 L 180,160 L 360,160 L 450,70" 
              fill="none" 
              stroke="#2563eb" 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />

            {/* Точки излома и пересечения графика */}
            <circle cx="180" cy="160" r="3.5" fill="#000000" />
            <circle cx="360" cy="160" r="3.5" fill="#000000" />
            <circle cx="270" cy="160" r="3.5" fill="#000000" />

            {/* Текстовые метки делений, полностью изолированные от линий */}
            <text x="162" y="108" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">-a - 1</text>
            <text x="342" y="108" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">-a + 1</text>
            <text x="248" y="165" fill="#000000" className="dark:fill-slate-300 font-serif text-base">-5</text>
          </svg>
        </div>


        <p>Анализ количества решений для обратной замены:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>При <InlineMath math={`t < -5`} /> — ровно одно решение <InlineMath math={`x`} />;</li>
          <li>При <InlineMath math={`t = -5`} /> — бесконечно много решений <InlineMath math={`x`} /> (отрезок <InlineMath math={`[-a - 1; -a + 1]`} />);</li>
          <li>При <InlineMath math={`t > -5`} /> — ровно одно решение <InlineMath math={`x`} />.</li>
        </ul>

        <p>Чтобы исходное уравнение имело ровно два различных решения, квадратное уравнение <InlineMath math={`t^2 - at + 1 = 0`} /> должно иметь два различных корня, отличных от <InlineMath math={`-5`} />.</p>
        
        <p>1) Условие существования двух корней:</p>
        <BlockMath math={`D = a^2 - 4 > 0 \\implies a \\in (-\\infty; -2) \\cup (2; +\\infty).`} />
        
        <p>2) Исключаем случай, когда один из корней равен <InlineMath math={`-5`} />:</p>
        <BlockMath math={`(-5)^2 - a \\cdot (-5) + 1 = 0 \\implies 26 + 5a = 0 \\implies a = -\\frac{26}{5} = -5,2.`} />
        
        <p>(При <InlineMath math={`a = -5,2`} /> получаем корни <InlineMath math={`t_1 = -5`} /> и <InlineMath math={`t_2 = -0,2`} />, что дает бесконечное множество решений).</p>
        <p>Следовательно <InlineMath math={`a \\neq -5,2`} /></p>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`a \\in (-\\infty; -5,2) \\cup (-5,2; -2) \\cup (2; +\\infty)`} />
        </div>
      </div>
    )
},


{
    id: 13,
    title: 'Задача 13 (ЕГЭ 2025, основная волна, Центр)',
    textBefore: 'Найдите все значения a, при каждом из которых уравнение',
    mathA: '(|x - 8| - |x - a|)^2 - 7a(|x - 8| - |x - a|) + 10a^2 + 6a - 4 = 0',
    textAfter: 'имеет ровно два различных решения.',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <p>Пусть <InlineMath math={`t = f(x) = |x - 8| - |x - a|`} />.</p>
        <p>Уравнение принимает вид: <InlineMath math={`t^2 - 7at + 10a^2 + 6a - 4 = 0`} /></p>
        
        <BlockMath math={`D = 49a^2 - 4(10a^2 + 6a - 4) = 9a^2 - 24a + 16 = (3a - 4)^2,`} />
        <p>корни <InlineMath math={`t = 5a - 2`} /> и <InlineMath math={`t = 2a + 2`} /></p>
        
        <p>Функция <InlineMath math={`f(x) = |x - 8| - |x - a|`} /> — кусочно-линейная функция. (<InlineMath math={`a \\neq 8`} />)</p>
        <p>Далее возможно 3 случая:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li><InlineMath math={`a < 8`} /></li>
          <li><InlineMath math={`a = 8`} /></li>
          <li><InlineMath math={`a > 8`} /></li>
        </ol>

        <p><b>Случай 2)</b> <InlineMath math={`a = 8`} />:</p>
        <p>Подставляя <InlineMath math={`a = 8`} /> в исходное уравнение:</p>
        <p><InlineMath math={`640 + 48 - 4 = 0`} />; Получили неверное равенство <InlineMath math={`\\Rightarrow a = 8`} /> не подходит.</p>

        <p><b>Случай 1)</b> <InlineMath math={`a < 8`} />:</p>

        {/* Скорректированный размер: еще на самую малость больше (max-w-[420px]) */}
        <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 440 220" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси координат */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="70" y1="140" x2="380" y2="140" />
              <line x1="220" y1="20" x2="220" y2="200" />
            </g>
            <path d="M 380,140 L 372,136 M 380,140 L 372,144" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 220,20 L 216,28 M 220,20 L 224,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            
            <text x="395" y="144" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
            <text x="215" y="14" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">t</text>

            {/* Пунктирные линии сетки */}
            <g stroke="#000000" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" className="dark:stroke-slate-500">
              <line x1="150" y1="80" x2="150" y2="140" />
              <line x1="290" y1="140" x2="290" y2="180" />
              <line x1="150" y1="80" x2="230" y2="80" />
              <line x1="230" y1="180" x2="300" y2="180" />
            </g>

            {/* Зелёный график f(x) при a < 8 */}
            <path 
              d="M 80,80 L 150,80 L 290,180 L 360,180" 
              fill="none" 
              stroke="#22c55e" 
              strokeWidth="2.4" 
              strokeLinejoin="round"
            />

            {/* Опорные точки */}
            <circle cx="150" cy="140" r="3.5" fill="#000000" />
            <circle cx="290" cy="140" r="3.5" fill="#000000" />
            <circle cx="230" cy="80" r="2" fill="#000000" />
            <circle cx="230" cy="180" r="2" fill="#000000" />

            {/* Подписи значений */}
            <text x="146" y="155" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">a</text>
            <text x="286" y="132" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">8</text>
            <text x="175" y="84" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">8 - a</text>
            <text x="175" y="184" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">a - 8</text>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-2">Рис. 1. Случай a &lt; 8</span>
        </div>

        <p>При раскрытии модулей получаем, что при <InlineMath math={`x \\leq a`} /> function <InlineMath math={`f(x) = 8 - a`} />, а при <InlineMath math={`x \\geq 8`} /> функция <InlineMath math={`f(x) = a - 8`} />. Область значений функции: <InlineMath math={`E(f) = [a - 8; 8 - a]`} />.</p>
        <p>Каждое из уравнений совокупности имеет ровно один корень тогда и только тогда, когда значения <InlineMath math={`t_1`} /> и <InlineMath math={`t_2`} /> лежат строго между полками графика. Чтобы совокупность суммарно имела ровно два различных решения, оба корня должны попасть внутрь интервала <InlineMath math={`(a - 8; 8 - a)`} /> и не совпадать:</p>

        <BlockMath math={`\\begin{cases} a - 8 < 5a - 2 < 8 - a \\\\ a - 8 < 2a + 2 < 8 - a \\\\ 5a - 2 \\neq 2a + 2 \\end{cases} \\iff \\begin{cases} a > -\\frac{3}{2} \\text{ и } a < \\frac{5}{3} \\\\ a > -10 \\text{ и } a < 2 \\\\ a \\neq \\frac{4}{3} \\end{cases}`} />
        
        <p>С учетом условия <InlineMath math={`a < 8`} />, получаем интервал: <InlineMath math={`a \\in \\left(-\\frac{3}{2}; \\frac{4}{3}\\right) \\cup \\left(\\frac{4}{3}; \\frac{5}{3}\\right).`} /></p>

        <p><b>3) Случай</b> <InlineMath math={`a > 8`} />:</p>

        {/* Скорректированный размер: еще на самую малость больше (max-w-[420px]) */}
        <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 440 220" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси координат */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="70" y1="140" x2="380" y2="140" />
              <line x1="220" y1="20" x2="220" y2="200" />
            </g>
            <path d="M 380,140 L 372,136 M 380,140 L 372,144" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 220,20 L 216,28 M 220,20 L 224,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            
            {/* Подписи осей */}
            <text x="395" y="144" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
            <text x="215" y="14" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">t</text>

            {/* Пунктирные линии сетки */}
            <g stroke="#000000" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" className="dark:stroke-slate-500">
              <line x1="150" y1="140" x2="150" y2="180" />
              <line x1="290" y1="80" x2="290" y2="140" />
              <line x1="150" y1="180" x2="230" y2="180" />
              <line x1="230" y1="80" x2="290" y2="80" />
            </g>

            {/* Зелёный график f(x) при a > 8 */}
            <path 
              d="M 80,180 L 150,180 L 290,80 L 360,80" 
              fill="none" 
              stroke="#22c55e" 
              strokeWidth="2.4" 
              strokeLinejoin="round"
            />

            {/* Опорные точки */}
            <circle cx="150" cy="140" r="3.5" fill="#000000" />
            <circle cx="290" cy="140" r="3.5" fill="#000000" />
            <circle cx="220" cy="80" r="2" fill="#000000" />
            <circle cx="220" cy="180" r="2" fill="#000000" />

            {/* Подписи значений */}
            <text x="146" y="132" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">8</text>
            <text x="286" y="155" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">a</text>
            <text x="185" y="84" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">a - 8</text>
            <text x="185" y="184" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">8 - a</text>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-2">Рис. 2. Случай a &gt; 8</span>
        </div>

        <p>В данном случае полки меняются местами, область значений принимает вид <InlineMath math={`E(f) = [8 - a; a - 8]`} />. Условия для двух решений запишутся как:</p>
        
        <BlockMath math={`\\begin{cases} 8 - a < 5a - 2 < a - 8 \\\\ 8 - a < 2a + 2 < a - 8 \\\\ 5a - 2 \\neq 2a + 2 \\end{cases}`} />

        <p>Из первого двойного неравенства имеем: <InlineMath math={`8 - a < 5a - 2 \\implies 6a > 10 \\implies a > \\frac{5}{3}`} />, но одновременно <InlineMath math={`5a - 2 < a - 8 \\implies 4a < -6 \\implies a < -1,5`} />. Данная система не имеет решений.</p>
        <p>Объединяя результаты всех пунктов, получаем итоговый ответ.</p>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={`a \\in \\left(-\\frac{3}{2}; \\frac{4}{3}\\right) \\cup \\left(\\frac{4}{3}; \\frac{5}{3}\\right)`} />
        </div>
      </div>
    )
},


{
  id: 14,
  title: 'Задача 14 (ЕГЭ 2025, основная волна, Центр)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '(|x - a - 1| + |x - a + 1|)^2 + a(|x - a - 1| + |x - a + 1|) + a^2 - 16 = 0',
  textAfter: 'имеет ровно два различных корня.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Замена, пусть <InlineMath math={`t = f(x) = |x - a - 1| + |x - a + 1|, \\quad t \\geq 0`} /></p>
      <BlockMath math={`t^2 + at + a^2 - 16 = 0`} />
      
      <p>Анализ замены: <InlineMath math={`t = |x - (a + 1)| + |x - (a - 1)|`} /> — график кусочно-линейной функции с "дном" на высоте <InlineMath math={`t = 2`} /></p>
      <p>Изобразим <InlineMath math={`f(x)`} /> в осях <InlineMath math={`xOt`} />:</p>
      
      <BlockMath math={`\\begin{cases} t = 2a - 2x, & x \\leq a - 1, \\\\ t = 2, & a - 1 \\leq x \\leq a + 1, \\\\ t = 2x - 2a, & x \\geq a + 1. \\end{cases}`} />

      {/* Первый рисунок: функция f(x) типа "корыто". Стрелка оси x перенесена на правый край линии */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 220" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none">
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="60" y1="170" x2="360" y2="170" />
            <line x1="220" y1="20" x2="220" y2="190" />
          </g>
          {/* Классическая стрелка строго на правом краю оси x (координата 360) */}
          <path d="M 360,170 L 352,166 M 360,170 L 352,174" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 220,20 L 216,28 M 220,20 L 224,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="372" y="174" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="215" y="14" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">t</text>

          <g stroke="#000000" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" className="dark:stroke-slate-500">
            <line x1="150" y1="130" x2="150" y2="170" />
            <line x1="290" y1="130" x2="290" y2="170" />
            <line x1="60" y1="130" x2="380" y2="130" />
          </g>

          <path d="M 70,30 L 150,130 L 290,130 L 370,30" fill="none" stroke="#000000" strokeWidth="2.2" strokeLinejoin="round" className="dark:stroke-slate-300" />

          <circle cx="150" cy="170" r="3.5" fill="#000000" />
          <circle cx="290" cy="170" r="3.5" fill="#000000" />

          <text x="135" y="192" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">a - 1</text>
          <text x="275" y="192" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">a + 1</text>
          <text x="390" y="134" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">t = 2</text>
        </svg>
      </div>

      <p>Значит при обратной замене:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>при <InlineMath math={`t < 2`} /> нет решений для <InlineMath math={`x`} />;</li>
        <li>при <InlineMath math={`t = 2`} /> — бесконечно много решений для <InlineMath math={`x`} />;</li>
        <li>при <InlineMath math={`t > 2`} /> — ровно два значения <InlineMath math={`x`} />;</li>
      </ul>
      
      <p>Следовательно уравнение <InlineMath math={`h(t) = t^2 + at + a^2 - 16 = 0`} /> должно иметь ровно один корень на промежутке <InlineMath math={`(2; +\\infty)`} />.</p>
      <p>Это возможно в двух случаях.</p>
      
      <p><i>Случай 1: <InlineMath math={`D = 0`} />, и двойной корень <InlineMath math={`t_0 > 2`} />.</i></p>
      <BlockMath math={`D = a^2 - 4(a^2 - 16) = 64 - 3a^2 = 0 \\implies a = \\pm \\frac{8}{\\sqrt{3}}.`} />
      
      <p>Подставим <InlineMath math={`a = -\\frac{8}{\\sqrt{3}}`} />:</p>
      <BlockMath math={`t^2 - \\frac{8}{\\sqrt{3}}t + \\frac{16}{3} = 0`} />
      <BlockMath math={`\\left(t - \\frac{4}{\\sqrt{3}}\\right)^2 = 0`} />
      <BlockMath math={`t = \\frac{4}{\\sqrt{3}} > 2`} />
      
      <p>Подставим <InlineMath math={`a = \\frac{8}{\\sqrt{3}}`} />:</p>
      <BlockMath math={`t^2 + \\frac{8}{\\sqrt{3}}t + \\frac{16}{3} = 0`} />
      <BlockMath math={`\\left(t + \\frac{4}{\\sqrt{3}}\\right)^2 = 0`} />
      <BlockMath math={`t = -\\frac{4}{\\sqrt{3}} \\leq 2`} />
      
      <p>Удовлетворяет только <InlineMath math={`t = \\frac{4}{\\sqrt{3}} \\implies`} /> Подходит только <InlineMath math={`a = -\\frac{8}{\\sqrt{3}}`} /></p>
      
      <p><i>Случай 2: <InlineMath math={`D > 0`} />: один из корней существует на <InlineMath math={`(2; +\\infty)`} />, а другой нет.</i></p>
      <p>Нам подходит следующая картинка:</p>

            {/* Второй рисунок: парабола сдвинута влево, а точка 2 смещена далеко вправо, заходя под дугу параболы */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 160" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none">
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="60" y1="50" x2="380" y2="50" />
          </g>
          <path d="M 380,50 L 372,46 M 380,50 L 372,54" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="390" y="54" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">t</text>

          {/* Парабола сдвинута правее, чтобы точка 2 оказалась глубоко внутри её левой ветви */}
          <path d="M 100,10 Q 220,210 320,10" fill="none" stroke="#000000" strokeWidth="1.8" className="dark:stroke-slate-300" />
          
          {/* Точка 2 значительно смещена вправо (с 145 на 160), теперь она находится глубоко под дугой параболы */}
          <circle cx="160" cy="50" r="3.5" fill="#000000" />
          <text x="156" y="72" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">2</text>
        </svg>
      </div>

      <p>Необходимое и достаточное условие: <InlineMath math={`h(2) < 0`} /></p>
      <p>В таком случае один из корней (для t) существует и при обратной замене даёт 2 корня (для <InlineMath math={`x`} />), а другой при обратной замене не имеет решений (для <InlineMath math={`x`} />).</p>
      
      <BlockMath math={`h(2) = 4 + 2a + a^2 - 16 = a^2 + 2a - 12 < 0.`} />
      <p>Корни: <InlineMath math={`a = -1 \\pm \\sqrt{13}`} />, значит</p>
      <BlockMath math={`(a + 1 - \\sqrt{13})(a + 1 + \\sqrt{13}) < 0`} />
      <p>По методу интервалов:</p>

      {/* Третий рисунок: числовая прямая со сбалансированными по величине крупными знаками */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 100" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none">
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="50" y1="50" x2="390" y2="50" />
          </g>
          <path d="M 390,50 L 382,46 M 390,50 L 382,54" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="400" y="54" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          <g stroke="#000000" strokeWidth="1" opacity="0.7" className="dark:stroke-slate-400">
            <line x1="145" y1="50" x2="155" y2="35" />
            <line x1="160" y1="50" x2="170" y2="35" />
            <line x1="175" y1="50" x2="185" y2="35" />
            <line x1="190" y1="50" x2="200" y2="35" />
            <line x1="205" y1="50" x2="215" y2="35" />
            <line x1="220" y1="50" x2="230" y2="35" />
            <line x1="235" y1="50" x2="245" y2="35" />
            <line x1="250" y1="50" x2="260" y2="35" />
            <line x1="265" y1="50" x2="275" y2="35" />
            <line x1="280" y1="50" x2="290" y2="35" />
            <line x1="295" y1="50" x2="305" y2="35" />
          </g>

          <circle cx="140" cy="50" r="4" fill="#ffffff" stroke="#000000" strokeWidth="1.2" />
          <circle cx="310" cy="50" r="4" fill="#ffffff" stroke="#000000" strokeWidth="1.2" />

          <text x="86" y="32" fill="#000000" className="dark:fill-slate-300 font-bold text-xl">+</text>
          <text x="218" y="32" fill="#000000" className="dark:fill-slate-300 font-bold text-xl">—</text>
          <text x="346" y="32" fill="#000000" className="dark:fill-slate-300 font-bold text-xl">+</text>

          <g className="font-serif text-sm">
            <text x="95" y="75" fill="#000000" className="dark:fill-slate-300">-1 - </text>
            <path d="M 125,69 L 129,69 L 133,75 L 138,58 L 154,58" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
            <text x="140" y="75" fill="#000000" className="dark:fill-slate-300">13</text>
          </g>

          <g className="font-serif text-sm">
            <path d="M 285,69 L 289,69 L 293,75 L 298,58 L 314,58" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
            <text x="300" y="75" fill="#000000" className="dark:fill-slate-300">13</text>
            <text x="318" y="75" fill="#000000" className="dark:fill-slate-300"> - 1</text>
          </g>
        </svg>
      </div>

      <BlockMath math={`a \\in (-1 - \\sqrt{13}; \\sqrt{13} - 1).`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left\\{-\\frac{8}{\\sqrt{3}}\\right\\} \\cup (-1 - \\sqrt{13}; \\sqrt{13} - 1)`} />
      </div>
    </div>
  )
},


{
  id: 15,
  title: 'Задача 15 (ЕГЭ 2025, основная волна, Центр)',
  textBefore: 'При каких значениях параметра a уравнение',
  mathA: '\\sqrt[4]{a^4 + x^4} = \\cos \\frac{x}{2} + a^2 - 2a + 1',
  textAfter: 'имеет единственное решение?',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Заметим, что переменная <InlineMath math={`x`} /> входит в уравнение только в чётной степени (<InlineMath math={`x^4`} />) и под знак чётной функции (<InlineMath math={`\\cos \\frac{x}{2}`} />). Это означает, что если число <InlineMath math={`x_0`} /> является корнем данного уравнения, то и число <InlineMath math={`-x_0`} /> также обязательно будет его корнем.
      </p>
      <p>
        Для того чтобы уравнение имело ровно одно решение, необходимо, чтобы эти корни совпали, то есть <InlineMath math={`x_0 = -x_0 \\implies x = 0`} />.
      </p>
      <p>
        <i>Необходимое условие:</i> подставим <InlineMath math={`x = 0`} /> в исходное уравнение для нахождения потенциальных значений параметра <InlineMath math={`a`} />.
      </p>
      
      <BlockMath math={`\\sqrt[4]{a^4 + 0} = \\cos 0 + a^2 - 2a + 1`} />
      <p>Учитывая, что <InlineMath math={`\\sqrt[4]{a^4} = |a|`} />, а <InlineMath math={`\\cos 0 = 1`} />, получаем следующее уравнение:</p>
      <BlockMath math={`|a| = 1 + a^2 - 2a + 1`} />
      <BlockMath math={`|a| = a^2 - 2a + 2`} />
      
      <p>Раскроем модуль, рассмотрев два случая в зависимости от знака параметра:</p>
      
      <p>1) Если <InlineMath math={`a \\geq 0`} />, то уравнение принимает вид:</p>
      <BlockMath math={`a = a^2 - 2a + 2 \\implies a^2 - 3a + 2 = 0 \\implies a = 1 \\text{ или } a = 2.`} />
      
      <p>2) Если <InlineMath math={`a < 0`} />, то уравнение принимает вид:</p>
      <BlockMath math={`-a = a^2 - 2a + 2 \\implies a^2 - a + 2 = 0`} />
      <p>Дискриминант этого уравнения <InlineMath math={`D = 1 - 8 = -7 < 0`} />, следовательно корней нет.</p>
      
      <p>
        Таким образом, единственное решение может существовать только при <InlineMath math={`a = 1`} /> или <InlineMath math={`a = 2`} />. Проверим каждое из этих значений на достаточность методом оценок.
      </p>
      
      <p><b>Проверка для <InlineMath math={`a = 1`} />:</b> подставим это значение в исходное уравнение.</p>
      <BlockMath math={`\\sqrt[4]{1 + x^4} = \\cos \\frac{x}{2} + 1 - 2 + 1 \\iff \\sqrt[4]{1 + x^4} = \\cos \\frac{x}{2}`} />
      
      <p>Оценим левую и правую части полученного уравнения для всех действительных значений <InlineMath math={`x`} />:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Левая часть: <InlineMath math={`\\sqrt[4]{1 + x^4} \\geq \\sqrt[4]{1} = 1`} />, причем равенство достигается только при <InlineMath math={`x = 0`} />.</li>
        <li>Правая часть: <InlineMath math={`\\cos \\frac{x}{2} \\leq 1`} Confidential />.</li>
      </ul>
      <p>
        Следовательно, равенство левой и правой частей возможно тогда и только тогда, когда обе части одновременно принимают своё экстремальное значение, равное 1:
      </p>
      <BlockMath math={`\\sqrt[4]{1 + x^4} = 1 \\implies x = 0`} />
      <BlockMath math={`\\cos \\frac{x}{2} = 1 \\implies \\cos 0 = 1 \\text{ (верно)}`} />
      <p>Значит, при <InlineMath math={`a = 1`} /> исходное уравнение действительно имеет единственное решение <InlineMath math={`x = 0`} />. Значение <InlineMath math={`a = 1`} /> подходит.</p>
      
      <p><b>Проверка для <InlineMath math={`a = 2`} />:</b> подставим это значение в исходное уравнение.</p>
      <BlockMath math={`\\sqrt[4]{16 + x^4} = \\cos \\frac{x}{2} + 4 - 4 + 1 \\iff \\sqrt[4]{16 + x^4} = \\cos \\frac{x}{2} + 1`} />
      
      <p>Снова воспользуемся методом оценок для левой и правой частей уравнения:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Левая часть: <InlineMath math={`\\sqrt[4]{16 + x^4} \\geq \\sqrt[4]{16} = 2`} />, причем равенство достигается только при <InlineMath math={`x = 0`} />.</li>
        <li>Правая часть: <InlineMath math={`\\cos \\frac{x}{2} + 1 \\leq 1 + 1 = 2`} />.</li>
      </ul>
      <p>
        Единственный шанс для существования решений — это одновременное достижение равенства на уровне верхней и нижней границ, то есть равенство обеих частей числу 2:
      </p>
      <BlockMath math={`\\sqrt[4]{16 + x^4} = 2 \\implies x = 0`} />
      <BlockMath math={`\\cos \\frac{x}{2} + 1 = 2 \\implies \\cos 0 + 1 = 2 \\text{ (верно)}`} />
      <p>Таким образом, при <InlineMath math={`a = 2`} /> уравнение также имеет ровно одно решение <InlineMath math={`x = 0`} />. Значение <InlineMath math={`a = 2`} /> нам подходит.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{1; 2\\}`} />
      </div>
    </div>
  )
},


{
  id: 16,
  title: 'Задача 16 (ЕГЭ)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: 'x^4 + (a - 3)^2 = |x - a + 3| + |x + a - 3|',
  textAfter: 'имеет единственное решение.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Заметим, что если число <InlineMath math={`x_0`} /> является решением данного уравнения, то и число <InlineMath math={`-x_0`} /> также будет его решением из-за чётности степеней и свойств модулей.
      </p>
      <p>Тогда единственное решение может быть только при <InlineMath math={`x = 0`} />.</p>
      <p>
        <i>Необходимое условие:</i> подставим <InlineMath math={`x = 0`} /> в исходное уравнение для нахождения потенциальных значений параметра <InlineMath math={`a`} />.
      </p>
      
      <BlockMath math={`0 + (a - 3)^2 = |3 - a| + |a - 3|`} />
      <BlockMath math={`(a - 3)^2 = 2|a - 3|`} />
      <BlockMath math={`|a - 3| \\cdot (|a - 3| - 2) = 0`} />
      
      <p>Отсюда получаем совокупность для поиска корней:</p>
      <BlockMath math={`a = 3 \\text{ либо } |a - 3| - 2 = 0 \\iff a = 3 \\text{ либо } a = 5 \\text{ либо } a = 1`} />
      
      <p>Геометрически этот этап можно проиллюстрировать графиками функций <InlineMath math={`f(a) = (a - 3)^2`} /> и <InlineMath math={`g(a) = 2|a - 3|`} /> в осях <InlineMath math={`aOy`} />:</p>

            {/* Первый график: синяя парабола и красный уголок с общей вершиной в (3,0) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 240" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none">
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="60" y1="200" x2="380" y2="200" />
            <line x1="120" y1="30" x2="120" y2="220" />
          </g>
          <path d="M 380,200 L 372,196 M 380,200 L 372,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 120,30 L 116,38 M 120,30 L 124,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          
          <text x="392" y="204" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="114" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Пунктирные проекции точек пересечения на y = 120 */}
          <g stroke="#000000" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" className="dark:stroke-slate-500">
            <line x1="170" y1="120" x2="170" y2="200" />
            <line x1="310" y1="120" x2="310" y2="200" />
          </g>

          {/* Синяя математически точная парабола, проходящая строго через (170, 120), (240, 200) и (310, 120) */}
          {/* Координаты Безье вычислены так, чтобы кривая проходила ровно через центры кружков */}
          <path d="M 152.5,35 C 152.5,120 195,200 240,200 C 285,200 327.5,120 327.5,35" fill="none" stroke="#2563eb" strokeWidth="1.8" />
          
          {/* Красный модуль, также проходящий идеально через те же центры (170, 120) и (310, 120) */}
          <line x1="100" y1="40" x2="240" y2="200" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="240" y1="200" x2="380" y2="40" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" />

          {/* Опорные точки пересечения на координатах y = 120 */}
          <circle cx="240" cy="200" r="3.5" fill="#000000" />
          <circle cx="170" cy="120" r="3.5" fill="#000000" />
          <circle cx="310" cy="120" r="3.5" fill="#000000" />

          {/* Подписи */}
          <text x="105" y="214" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>
          <text x="166" y="215" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">1</text>
          <text x="236" y="215" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">3</text>
          <text x="306" y="215" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">5</text>
        </svg>
      </div>



      <p>Проверим каждое из трёх найденных значений на достаточность.</p>
      
      <p><b>1) Проверка при <InlineMath math={`a = 1`} />:</b> исходное уравнение принимает вид <InlineMath math={`x^4 + 4 = |x + 2| + |x - 2|`} />.</p>
      <p>График левой части <InlineMath math={`y = x^4 + 4`} /> касается «дна» кусочно-линейной функции правых модулей <InlineMath math={`y = |x + 2| + |x - 2|`} /> ровно в одной точке <InlineMath math={`(0; 4)`} /> и далее уходит вверх.</p>

            {/* Второй график: "корыто" модулей и парабола 4-й степени (масштаб уменьшен до max-w-[420px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 240" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none">
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="60" y1="170" x2="380" y2="170" />
            <line x1="220" y1="30" x2="220" y2="210" />
          </g>
          <path d="M 380,170 L 372,166 M 380,170 L 372,174" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 220,30 L 216,38 M 220,30 L 224,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          
          <text x="392" y="174" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="214" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Пунктирные проекции углов "корыта" */}
          <g stroke="#000000" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" className="dark:stroke-slate-500">
            <line x1="150" y1="110" x2="150" y2="170" />
            <line x1="290" y1="110" x2="290" y2="170" />
          </g>

          {/* Красный график модулей ("корыто" с дном на y=110) */}
          <path d="M 100,50 L 150,110 L 290,110 L 340,50" fill="none" stroke="#dc2626" strokeWidth="1.8" strokeLinejoin="round" />
          
          {/* Синяя функция четвертой степени y = x^4 + 4, плавно касающаяся дна в (220, 110) */}
          <path d="M 180,30 C 198,92 205,110 220,110 C 235,110 242,92 260,30" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />

          {/* Точка касания и изломов */}
          <circle cx="220" cy="110" r="3.5" fill="#000000" />
          <circle cx="150" cy="110" r="3.5" fill="#000000" />
          <circle cx="290" cy="110" r="3.5" fill="#000000" />

          {/* Подписи меток */}
          <text x="142" y="186" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">-2</text>
          <text x="286" y="186" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">2</text>
          <text x="226" y="104" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">4</text>
        </svg>
        <span className="text-xs font-semibold text-slate-500 mt-2">(1 решение).</span>
      </div>


      <p><b>2) Проверка при <InlineMath math={`a = 3`} />:</b> исходное уравнение принимает вид <InlineMath math={`x^4 + 0 = |x| + |x|`} />.</p>
      <BlockMath math={`|x|^4 = 2|x| \\implies |x| \\cdot (|x|^3 - 2) = 0`} />
      <p>Данное уравнение имеет три корня: <InlineMath math={`x = 0`} /> и <InlineMath math={`x = \\pm \\sqrt[3]{2}`} />. Условие единственности корня нарушено. (не подходит)</p>
      
      <p><b>3) Проверка при <InlineMath math={`a = 5`} />:</b> исходное уравнение принимает вид <InlineMath math={`x^4 + 4 = |x - 2| + |x + 2|`} />.</p>
      <p>Полученное уравнение полностью совпадает с уравнением из первого пункта для <InlineMath math={`a = 1`} />, следовательно, оно также имеет ровно одно решение <InlineMath math={`x = 0`} />. — Хороший случай.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{1; 5\\}`} />
      </div>
    </div>
  )
},


{
  id: 17,
  title: 'Задача 17 (Досрок 2025 / ЕГЭ 2012)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: 'x^{10} + (a - 2|x|)^5 + x^2 - 2|x| + a = 0',
  textAfter: 'имеет более 3-х решений.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Перенесем часть слагаемых в правую часть уравнения:</p>
      <BlockMath math={`x^{10} + x^2 = (2|x| - a)^5 + (2|x| - a)`} />
      <BlockMath math={`(x^2)^5 + x^2 = (2|x| - a)^5 + (2|x| - a)`} />
      
      <p>Рассмотри функцию <InlineMath math={`f(t) = t^5 + t`} />. Тогда наше уравнение принимает вид:</p>
      <BlockMath math={`f(x^2) = f(2|x| - a)`} />
      
      <p>Так как функция <InlineMath math={`f(t) = t^5 + t`} /> монотонно возрастающая на всей числовой прямоугольной плоскости, так как</p>
      <BlockMath math={`f'(t) = 5t^4 \\geq 0 \\text{ Всегда } \\implies \\text{Монотонно возрастает}`} />
      
      <p>она принимает каждое свое значение в единственной точке. Следовательно, можем перейти к равенству аргументов функций:</p>
      <BlockMath math={`x^2 = 2|x| - a`} />
      
      <p>
        Это полученное уравнение должно иметь более 3-х различных решений. Нам нужно найти все такие случаи, когда графики функций <InlineMath math={`y = x^2`} /> (парабола) и <InlineMath math={`y = 2|x| - a`} /> («галочка») имеют более 3-х точек пересечения друг с другом.
      </p>
      <p>Изобразим графики функций на координатной плоскости <InlineMath math={`xOy`} />:</p>

            {/* Высокоточный и сбалансированный SVG График (max-w-[400px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 280" className="w-full max-w-[400px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="60" y1="210" x2="380" y2="210" />
            <line x1="220" y1="30" x2="220" y2="260" />
          </g>
          <path d="M 380,210 L 372,206 M 380,210 L 372,214" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 220,30 L 216,38 M 220,30 L 224,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          
          <text x="392" y="214" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="214" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="204" y="224" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Синяя парабола y = x^2 (построена по точкам для идеального честного касания) */}
          <path d="M 120,50 C 160,170 180,210 220,210 C 260,210 280,170 320,50" fill="none" stroke="#2563eb" strokeWidth="2" />
          <text x="285" y="150" fill="#2563eb" className="font-serif text-xs italic">y = x^2</text>

          {/* Положение I: Истинное геометрическое касание параболы и пунктирного уголка */}
          {/* Вершина опущена на y = 250. Наклон k = ±1.6 идеально притирается к графику y = x^2 в точках (170, 170) и (270, 170) */}
          <path d="M 113.75,80 L 220,250 L 326.25,80" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="120" y="98" fill="#64748b" className="font-serif text-xs font-bold">I</text>

          {/* Положение II: Проход через (0,0), вершина строго в начале координат y = 210 */}
          {/* Идёт строго параллельно первому случаю */}
          <path d="M 138.75,80 L 220,210 L 301.25,80" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="142" y="94" fill="#64748b" className="font-serif text-xs font-bold">II</text>

          {/* Красная рабочая галочка в промежуточном положении (вершина на y = 230), дающая ровно 4 точки пересечения */}
          <path d="M 126.25,80 L 220,230 L 313.75,80" fill="none" stroke="#dc2626" strokeWidth="1.8" />
          <text x="295" y="90" fill="#dc2626" className="font-serif text-xs">y = 2|x| - a</text>

          {/* Маркер начала координат */}
          <circle cx="220" cy="210" r="3.5" fill="#000000" />
        </svg>
      </div>


      <p>
        Такой случай возможен только при движении графика от положения I до положения II, так как квадратное уравнение с модулем не может иметь больше чем 4 решения.
      </p>
      <p>
        Найдем значение параметра в положении I (случай касания параболы и правой ветви галочки при <InlineMath math={`x > 0`} />):
      </p>
      <BlockMath math={`x^2 = 2x - a \\implies x^2 - 2x + a = 0`} />
      <BlockMath math={`D = 4 - 4a = 0 \\implies a = 1.`} />
      
      <p>В положении II вершина «галочки» находится в начале координат, что соответствует значению <InlineMath math={`a = 0`} />.</p>
      <p>
        Таким образом, более 3-х решений (а именно ровно 4 решения) исходное уравнение имеет при условиях, когда параметр находится строго между этими пограничными положениями.
      </p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (0; 1)`} />
      </div>
    </div>
  )
},


{
  id: 18,
  title: 'Задача 18 (ЕГЭ 2025, резервный день, Центр)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} \\frac{(y^2 - 4y - xy + 2x + 4)\\sqrt{x + 4}}{\\sqrt{5 - y}} = 0, \\\\ a = x + y \\end{cases}',
  textAfter: 'имеет единственное решение.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Найдем область допустимых значений (ОДЗ) системы, определяемую подкоренными выражениями:</p>
      <BlockMath math={`\\begin{cases} x + 4 \\geq 0, \\\\ 5 - y > 0 \\end{cases} \\iff \\begin{cases} x \\geq -4, \\\\ y < 5. \\end{cases}`} />
      
      <p>Приравняем к нулю числитель первого уравнения на ОДЗ. Произведение равно нулю, когда хотя бы один из множителей равен нулю:</p>
      <p>1) <InlineMath math={`\\sqrt{x + 4} = 0 \\implies x = -4`} /> (при <InlineMath math={`y < 5`} />).</p>
      
      <p>2) <InlineMath math={`y^2 - 4y - xy + 2x + 4 = 0`} />. Разложим это выражение на множители методом группировки:</p>
      <BlockMath math={`(y^2 - 4y + 4) - x(y - 2) = 0 \\implies (y - 2)^2 - x(y - 2) = 0 \\implies (y - 2)(y - 2 - x) = 0.`} />
      
      <p>Отсюда получаем еще две линии: <InlineMath math={`y = 2`} /> (при <InlineMath math={`x \\geq -4`} bitumen />) и <InlineMath math={`y = x + 2`} /> (при <InlineMath math={`x \\geq -4, y < 5`} />).</p>
      <p>Таким образом, графиком первого уравнения на плоскости <InlineMath math={`xOy`} /> является объединение трех элементов (с учётом ОДЗ):</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Вертикальный луч <InlineMath math={`x = -4`} /> при <InlineMath math={`y < 5`} />.</li>
        <li>Горизонтальный луч <InlineMath math={`y = 2`} /> при <InlineMath math={`x \\geq -4`} />.</li>
        <li>Отрезок прямой <InlineMath math={`y = x + 2`} /> от точки <InlineMath math={`(-4; -2)`} /> до выколотой точки <InlineMath math={`(3; 5)`} />.</li>
      </ul>
      
      <p>Второе уравнение системы <InlineMath math={`y = -x + a`} /> задаёт семейство параллельных прямых с наклоном <InlineMath math={`-1`} />. Нам необходимо определить, при каких значениях <InlineMath math={`a`} /> эта сканирующая прямая имеет ровно одну точку пересечения с полученным графиком.</p>
      <p>Изобразим графическую ситуацию в осях <InlineMath math={`xOy`} />:</p>

            {/* Высокоточный SVG-график (масштаб скорректирован до сбалансированных max-w-[430px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 500 340" className="w-full max-w-[430px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Координатная сетка осей (Центр: x=240, y=200 соответствует (0,0)) */}
          {/* Масштаб: 1 ед = 25px */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="200" x2="440" y2="200" /> {/* Ось Ox */}
            <line x1="240" y1="30" x2="240" y2="310" />  {/* Ось Oy */}
          </g>
          <path d="M 440,200 L 432,196 M 440,200 L 432,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 240,30 L 236,38 M 240,30 L 244,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="452" y="204" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="234" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="226" y="216" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Красная пунктирная граница ОДЗ y = 5 (200 - 5*25 = 75) */}
          <line x1="100" y1="75" x2="440" y2="75" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="445" y="79" fill="#ef4444" className="font-serif font-bold text-xs">y = 5</text>

          {/* Сканирующие серые пунктирные прямые y = -x + a (наклон строго -1) */}
          {/* Все линии строго НЕ выходят выше ОДЗ (y >= 75) и снабжены чёткими аккуратными подписями */}
          <g stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4">
            {/* a = -6 (Проходит через (-4, -2) -> (140, 250)) */}
            <line x1="140" y1="250" x2="190" y2="300" />
            <text x="195" y="312" fill="#64748b" stroke="none" className="font-sans text-xs font-medium">a = -6</text>

            {/* a = -2 (Проходит через (-4, 2) -> (140, 150) и (2, -2) -> (290, 250)) */}
            <line x1="140" y1="150" x2="265" y2="275" />
            <text x="270" y="287" fill="#64748b" stroke="none" className="font-sans text-xs font-medium">a = -2</text>

            {/* a = 1 (Стартует строго ИЗ выколотой точки (-4, 5) -> (140, 75)) */}
            <line x1="140" y1="75" x2="315" y2="250" />
            <text x="320" y="262" fill="#64748b" stroke="none" className="font-sans text-xs font-medium">a = 1</text>

            {/* a = 2 (Стартует из ОДЗ на x=-3 -> (165, 75), идет через (0,2) -> (240, 150)) */}
            <line x1="165" y1="75" x2="340" y2="250" />
            <text x="345" y="262" fill="#64748b" stroke="none" className="font-sans text-xs font-medium">a = 2</text>

            {/* a = 8 (Стартует строго ИЗ выколотой точки (3, 5) -> (315, 75)) */}
            <line x1="315" y1="75" x2="440" y2="200" />
            <text x="445" y="212" fill="#64748b" stroke="none" className="font-sans text-xs font-medium">a = 8</text>
          </g>

          {/* Синие сплошные линии графика первого уравнения */}
          {/* Вертикальный луч x = -4 (от y=5 до y=-3, т.е. от 75 до 275) */}
          <line x1="140" y1="75" x2="140" y2="290" stroke="#2563eb" strokeWidth="2.5" />
          {/* Горизонтальный луч y = 2 (от x=-4 до конца, т.е. от 140 до 420) */}
          <line x1="140" y1="150" x2="420" y2="150" stroke="#2563eb" strokeWidth="2.5" />
          {/* Наклонный отрезок y = x + 2 (от (-4, -2) до (3, 5), т.е. от (140, 250) до (315, 75)) */}
          <line x1="140" y1="250" x2="315" y2="75" stroke="#2563eb" strokeWidth="2.5" />

          {/* Метки ключевых точек пересечений и узлов */}
          <text x="94" y="70" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">(-4; 5)</text>
          <text x="94" y="145" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(-4; 2)</text>
          <text x="146" y="255" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(-4; -2)</text>
          <text x="246" y="144" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">(0; 2)</text>
          <text x="320" y="70" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">(3; 5)</text>

          {/* Закрашенные узловые точки графика */}
          <circle cx="140" cy="150" r="3.5" fill="#000000" />
          <circle cx="140" cy="250" r="3.5" fill="#000000" />
          <circle cx="240" cy="150" r="3.5" fill="#000000" />

          {/* Две незакрашенные (выколотые) точки ОДЗ на линии y = 5 */}
          <circle cx="140" cy="75" r="4" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
          <circle cx="315" cy="75" r="4" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
        </svg>
      </div>


      <p>Найдем значения параметра <InlineMath math={`a = x + y`} /> в пограничных точках графика:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>В точке пересечения <InlineMath math={`(-4; -2)`} /> значение параметра равно: <InlineMath math={`a = -4 + (-2) = -6`} />.</li>
        <li>В точке пересечения <InlineMath math={`(-4; 2)`} /> значение параметра равно: <InlineMath math={`a = -4 + 2 = -2`} />.</li>
        <li>В точке пересечения <InlineMath math={`(0; 2)`} /> значение параметра равно: <InlineMath math={`a = 0 + 2 = 2`} />.</li>
        <li>В выколотой точке <InlineMath math={`(-4; 5)`} /> значение параметра равно: <InlineMath math={`a = -4 + 5 = 1`} />.</li>
        <li>В выколотой точке <InlineMath math={`(3; 5)`} /> значение параметра равно: <InlineMath math={`a = 3 + 5 = 8`} />.</li>
      </ul>

      <p>Проанализируем количество решений при движении прямой снизу вверх (с увеличением <InlineMath math={`a`} />):</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>При <InlineMath math={`a \\leq -6`} /> прямая пересекает только вертикальный луч <InlineMath math={`x = -4`} />. Имеется ровно 1 решение.</li>
        <li>При <InlineMath math={`-6 < a \\leq -2`} /> прямая пересекает вертикальный луч и наклонный отрезок. Имеются 2 решения.</li>
        <li>При <InlineMath math={`-2 < a < 1`} /> прямая пересекает все три элемента графика. Имеются 3 решения.</li>
        <li>При <InlineMath math={`1 < a < 2`} /> прямая пересекает горизонтальную и наклонную прямые. Имеется 2 решения.</li>
        <li>При <InlineMath math={`a = 2`} /> прямая пересекает пересечение двух элементов графика. Имеется 1 решение.</li>
        <li>При <InlineMath math={`2 < a < 8`} /> прямая пересекает горизонтальный луч и наклонный отрезок (так как пересечение с лучхом <InlineMath math={`x = -4`} /> уходит выше ОДЗ <InlineMath math={`y = 5`} />). Имеются 2 решения.</li>
        <li>При <InlineMath math={`a \\geq 8`} /> наклонный отрезок больше не пересекается (пересечение уходит в выколотую область), и прямая пересекает только горизонтальный луч <InlineMath math={`y = 2`} bitumen />. Имеется ровно 1 решение.</li>
      </ul>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -6] \\cup \\{2\\} \\cup [8; +\\infty)`} />
      </div>
    </div>
  )
},



{
  id: 19,
  title: 'Задача 19 (ЕГЭ 2025, резервный день 23.06, Центр)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '\\frac{(a - x - 4)(a^2 + x^2 - 10)}{\\sqrt{-6x - x^2}} = 0',
  textAfter: 'имеет ровно два различных решения.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Найдем область допустимых значений (ОДЗ) уравнения, которая определяется строго положительным подкоренным выражением в знаменателе:</p>
      <BlockMath math={`-6x - x^2 > 0 \\iff x(x + 6) < 0 \\iff x \\in (-6; 0).`} />
      
      <p>На ОДЗ дробь равна нулю, когда её числитель равен нулю. Получаем совокупность двух уравнений:</p>
      <p>1) <InlineMath math={`a - x - 4 = 0 \\implies a = x + 4`} />, при <InlineMath math={`x \\in (-6; 0)`} />.</p>
      <p>2) <InlineMath math={`a^2 + x^2 - 10 = 0 \\implies x^2 + a^2 = 10`} />. Это окружность с центром в начале координат <InlineMath math={`(0;0)`} /> и радиусом <InlineMath math={`R = \\sqrt{10}`} />. С учётом ОДЗ <InlineMath math={`x \\in (-6; 0)`} /> нас интересует только её левая половина (полуокружность), задаваемая функцией <InlineMath math={`x = -\\sqrt{10 - a^2}`} />.</p>
      
      <p>Найдем координаты ключевых пограничных и выколотых точек графиков при <InlineMath math={`x = -6`} /> и <InlineMath math={`x = 0`} />:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Для прямой <InlineMath math={`a = x + 4`} />: при <InlineMath math={`x = -6`} /> получаем выколотую точку <InlineMath math={`A(-6; -2)`} />; при <InlineMath math={`x = 0`} /> получаем выколотую точку <InlineMath math={`B(0; 4)`} />.</li>
        <li>Для полуокружности <InlineMath math={`x^2 + a^2 = 10`} />: при <InlineMath math={`x = 0`} /> получаем <InlineMath math={`a^2 = 10 \\implies a = \\pm\\sqrt{10}`} />, выколотые точки <InlineMath math={`C(0; \\sqrt{10})`} /> и <InlineMath math={`D(0; -\\sqrt{10})`} />.</li>
      </ul>

      <p>Найдем точки пересечения прямой и полуокружности, решив систему уравнений:</p>
      <BlockMath math={`x^2 + (x + 4)^2 = 10 \\iff 2x^2 + 8x + 16 = 10 \\iff x^2 + 4x + 3 = 0.`} />
      <p>Корни по теореме Виета: <InlineMath math={`x_1 = -1`} /> и <InlineMath math={`x_2 = -3`} />. Оба значения лежат внутри интервала ОДЗ <InlineMath math={`(-6; 0)`} />. Найдем соответствующие ординаты (значения параметра <InlineMath math={`a`} />):</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>При <InlineMath math={`x = -1`} />: <InlineMath math={`a = -1 + 4 = 3`} />, точка пересечения <InlineMath math={`E(-1; 3)`} />.</li>
        <li>При <InlineMath math={`x = -3`} />: <InlineMath math={`a = -3 + 4 = 1`} />, точка пересечения <InlineMath math={`F(-3; 1)`} />.</li>
      </ul>

      <p>Изобразим графическую ситуацию в координатной плоскости <InlineMath math={`xOa`} />. Количество решений исходного уравнения при каждом значении параметра <InlineMath math={`a`} /> определяется числом точек пересечения графика с горизонтальной сканирующей прямой.</p>

            {/* Полностью исправленный SVG-график Задачи 19 (max-w-[500px], полуокружность строго ПРАВАЯ по референсу) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 540 360" className="w-full max-w-[500px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Координатные оси (Центр смещен влево: x=300, y=200 соответствует (0,0)) */}
          {/* Масштаб: 1 ед = 28px */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="200" x2="420" y2="200" /> {/* Ось Ox */}
            <line x1="300" y1="20" x2="300" y2="330" />  {/* Ось Oa */}
          </g>
          <path d="M 420,200 L 412,196 M 420,200 L 412,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 300,20 L 296,38 M 300,30 L 304,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="432" y="204" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="294" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="286" y="216" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Левая вертикальная граница ОДЗ x = -6 (300 - 6*28 = 150) */}
          <line x1="150" y1="30" x2="150" y2="310" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="126" y="44" fill="#ef4444" className="font-serif font-bold text-xs">x = -6</text>

          {/* Горизонтальные серые пунктирные линии (все линии продлены влево до красной черты x = -6, т.е. до x1="150") */}
          <g stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4">
            {/* a = -sqrt(10) ≈ -3.16 (200 + 3.16*28 = 288.5) */}
            <line x1="150" y1="288.5" x2="300" y2="288.5" />
            <text x="312" y="295" fill="#94a3b8" stroke="none" className="font-sans text-[11px] font-normal">a = -√10</text>

            {/* a = -2 (200 + 56 = 256). Проходит через выколотую точку A(-6, -2) -> (150, 256) */}
            <line x1="150" y1="256" x2="300" y2="256" />
            <text x="308" y="260" fill="#94a3b8" stroke="none" className="font-sans text-[11px] font-normal">a = -2</text>

            {/* a = 1 (200 - 28 = 172). Проходит через узел F(-3, 1) -> (216, 172) */}
            <line x1="150" y1="172" x2="300" y2="172" />
            <text x="312" y="176" fill="#94a3b8" stroke="none" className="font-sans text-[11px] font-normal">a = 1</text>

            {/* a = 3 (200 - 84 = 116). Проходит через узел E(-1, 3) -> (272, 116) */}
            <line x1="150" y1="116" x2="300" y2="116" />
            <text x="312" y="123" fill="#94a3b8" stroke="none" className="font-sans text-[11px] font-normal">a = 3</text>

            {/* a = sqrt(10) ≈ 3.16 (200 - 88.5 = 111.5) */}
            <line x1="150" y1="111.5" x2="340" y2="111.5" />
            <text x="312" y="110" fill="#94a3b8" stroke="none" className="font-sans text-[11px] font-normal">a = √10</text>
          </g>

          {/* Синие сплошные графики */}
          {/* Отрезок прямой a = x + 4 (от (-6, -2) -> (150, 230) до (0, 4) -> (300, 88)) */}
          <line x1="150" y1="230" x2="300" y2="88" stroke="#2563eb" strokeWidth="2.5" />

          {/* ПРАВАЯ полуокружность x^2 + a^2 = 10 с радиусом R=88.5 (выгнута строго вправо в полуплоскость x > 0) */}
          <path d="M 300,288.5 A 88.5,88.5 0 0,1 300,111.5" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Метки ключевых точек и узлов */}
          <text x="74" y="260" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">A(-6; -2)</text>
          <text x="312" y="90" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">B(0; 4)</text>
          <text x="312" y="140" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">C(0; √10)</text>
          <text x="312" y="276" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">D(0; -√10)</text>
          <text x="210" y="125" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">E(-1; 3)</text>
          <text x="174" y="165" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">F(-3; 1)</text>

          {/* Чёрные маркерные точки пересечения (сидят идеально ровно на пересечении отрезка и сканирующих прямых) */}
          <circle cx="272" cy="116" r="3.5" fill="#000000" />
          <circle cx="216" cy="172" r="3.5" fill="#000000" />

          {/* Четыре выколотые (незакрашенные) граничные точки на границах ОДЗ (x = -6 и x = 0) */}
          <circle cx="150" cy="230" r="4" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
          <circle cx="300" cy="80" r="4" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
          <circle cx="300" cy="111.5" r="4" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
          <circle cx="300" cy="288.5" r="4" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
        </svg>
      </div>

      <p>Проанализируем количество решений (точек пересечения) при движении горизонтальной прямой снизу вверх:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>При <InlineMath math={`a \\leq -\\sqrt{10}`} /> или <InlineMath math={`a \\geq 4`} /> точек пересечения нет (0 решений).</li>
        <li>При <InlineMath math={`a \\in (-\\sqrt{10}; -2]`} /> прямая пересекает только дугу полуокружности (1 решение). Точка <InlineMath math={`A(-6; -2)`} /> выколота, поэтому при <InlineMath math={`a = -2`} /> прямая отрезок не задевает.</li>
        <li>При <InlineMath math={`a \\in (-2; 1)`} /> прямая пересекает и отрезок, и дугу полуокружности (ровно 2 решения).</li>
        <li>При <InlineMath math={`a = 1`} /> прямая проходит через точку пересечения <InlineMath math={`F(-3; 1)`} />, корни совпадают (1 решение).</li>
        <li>При <InlineMath math={`a \\in (1; 3)`} /> прямая пересекает и отрезок, и дугу полуокружности (ровно 2 решения).</li>
        <li>При <InlineMath math={`a = 3`} /> прямая проходит через точку пересечения <InlineMath math={`E(-1; 3)`} />, корни совпадают (1 решение).</li>
        <li>При <InlineMath math={`a \\in (3; \\sqrt{10})`} /> прямая снова пересекает и отрезок, и дугу полуокружности (ровно 2 решения).</li>
        <li>При <InlineMath math={`a \\in [\\sqrt{10}; 4)`} /> дуга окружности закончилась, прямая пересекает только отрезок (1 решение).</li>
      </ul>

      <p>Таким образом, ровно два различных решения достигаются на интервалах между ключевыми точками.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-2; 1) \\cup (1; 3) \\cup (3; \\sqrt{10})`} />
      </div>
    </div>
  )
},


{
  id: 20,
  title: 'Задача 20 (ЕГЭ 2025, пересдача, Центр)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\ln(5x - 2) \\cdot \\sqrt{x^2 - 2x + 2a - a^2} = 0',
  textAfter: 'имеет ровно один корень на отрезке [0; 1].',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Найдем область допустимых значений (ОДЗ) уравнения, определяемую аргументом логарифма и подкоренным выражением:</p>
      <BlockMath math={`\\begin{cases} 5x - 2 > 0 \\\\ x^2 - 2x + 2a - a^2 \\geq 0 \\end{cases} \\iff \\begin{cases} x > 0{,}4 \\\\ (x - 1)^2 \\geq (a - 1)^2 \\end{cases}`} />
      
      <p>Последнее неравенство раскладывается как <InlineMath math={`|x - 1| \\geq |a - 1|`} />, что равносильно условию:</p>
      <BlockMath math={`1 - |x - 1| \\leq a \\leq 1 + |x - 1|`} />
      
      <p>
        Нас интересуют корни, принадлежащие отрезку <InlineMath math={`[0; 1]`} />. С учётом строгого условия <InlineMath math={`x > 0{,}4`} /> рабочий промежуток для поиска корней сужается до полуинтервала <InlineMath math={`x \\in (0{,}4; 1]`} />. На этом полуинтервале модуль <InlineMath math={`|x - 1| = 1 - x`} />, поэтому ОДЗ принимает вид:
      </p>
      <BlockMath math={`1 - (1 - x) \\leq a \\leq 1 + (1 - x) \\iff x \\leq a \\leq 2 - x`} />
      
      <p>На ОДЗ произведение равно нулю, когда хотя бы один из множителей равен нулю. Получаем две серии потенциальных корней:</p>
      <p>
        1) <InlineMath math={`\\ln(5x - 2) = 0 \\implies 5x - 2 = 1 \\implies x_1 = 0{,}6`} />. Этот корень всегда лежит на полуинтервале <InlineMath math={`(0{,}4; 1]`} />. Чтобы он существовал, он должен удовлетворять условию ОДЗ по параметру:
      </p>
      <BlockMath math={`0{,}6 \\leq a \\leq 2 - 0{,}6 \\iff a \\in [0{,}6; 1{,}4] \\iff a \\in \\left[\\frac{3}{5}; \\frac{7}{5}\\right]`} />
      
      <p>
        2) <InlineMath math={`\\sqrt{x^2 - 2x + 2a - a^2} = 0 \\implies (x - 1)^2 = (a - 1)^2 \\implies |x - 1| = |a - 1|`} bitumen />. На полуинтервале <InlineMath math={`x \\in (0{,}4; 1]`} /> это выражение раскрывается как <InlineMath math={`1 - x = |a - 1|`} />, откуда получаем два уравнения для корней:
      </p>
      <p>
        Первый корень: <InlineMath math={`1 - x = a - 1 \\implies x_2 = 2 - a`} />. Он попадает в промежуток <InlineMath math={`(0{,}4; 1]`} /> при условии <InlineMath math={`0{,}4 < 2 - a \\leq 1`} />, что дает <InlineMath math={`1 \\leq a < 1{,}6 \\iff a \\in \\left[1; \\frac{8}{5}\\right)`} />.
      </p>
      <p>
        Второй корень: <InlineMath math={`1 - x = 1 - a \\implies x_3 = a`} />. Он попадает в промежуток <InlineMath math={`(0{,}4; 1]`} /> при условии <InlineMath math={`0{,}4 < a \\leq 1`} />, то есть <InlineMath math={`a \\in (0{,}4; 1] \\iff a \\in \\left(\\frac{2}{5}; 1\\right]`} />.
      </p>
      <p>
        Заметим, что корни <InlineMath math={`x_2`} /> и <InlineMath math={`x_3`} /> лежат на границе ОДЗ подкоренного выражения, поэтому они автоматически удовлетворяют неравенству <InlineMath math={`(x - 1)^2 \\geq (a - 1)^2`} />.
      </p>

      <p>
        Для отбора значений <InlineMath math={`a`} />, при которых исходное уравнение имеет ровно один корень, исследуем взаимное расположение промежутков существования найденных корней на числовой прямой. Найдем точки их попарного совпания:
      </p>
      <BlockMath math={`x_1 = x_2 \\implies 0{,}6 = 2 - a \\implies a = 1{,}4 = \\frac{7}{5}`} />
      <BlockMath math={`x_1 = x_3 \\implies 0{,}6 = a \\implies a = 0{,}6 = \\frac{3}{5}`} />
      <BlockMath math={`x_2 = x_3 \\implies 2 - a = a \\implies a = 1`} />

      <p className="text-center font-semibold pt-2">Общая схема существования корней</p>

      {/* Выверенная по размерам схема интервалов существования корней */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 500 180" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Главная числовая ось параметров а */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="130" x2="440" y2="130" />
          </g>
          <path d="M 440,130 L 432,126 M 440,130 L 432,134" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="452" y="134" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* Масштабная сетка: 2/5 -> 100, 3/5 -> 170, 1 -> 240, 7/5 -> 310, 8/5 -> 380 */}
          {/* Зеленая дуга/скоба для корня x3 на интервале (2/5; 1] */}
          <path d="M 100,130 L 100,75 L 240,75 L 240,130" fill="none" stroke="#22c55e" strokeWidth="1.8" />
          <text x="165" y="66" fill="#22c55e" className="font-serif italic text-sm font-medium">x₃</text>

          {/* Синяя дуга/скоба для корня x1 на интервале [3/5; 7/5] */}
          <path d="M 170,130 L 170,95 L 310,95 L 310,130" fill="none" stroke="#2563eb" strokeWidth="1.8" />
          <text x="235" y="88" fill="#2563eb" className="font-serif italic text-sm font-medium">x₁</text>

          {/* Красная дуга/скоба для корня x2 на интервале [1; 8/5) */}
          <path d="M 240,130 L 240,45 L 380,45 L 380,130" fill="none" stroke="#ef4444" strokeWidth="1.8" />
          <text x="305" y="38" fill="#ef4444" className="font-serif italic text-sm font-medium">x₂</text>

          {/* Выколотые и закрашенные точки границ промежутков */}
          <circle cx="100" cy="130" r="4" fill="#ffffff" stroke="#000000" strokeWidth="1.2" /> {/* 2/5 */}
          <circle cx="170" cy="130" r="3.5" fill="#000000" />                                  {/* 3/5 */}
          <circle cx="240" cy="130" r="3.5" fill="#000000" />                                  {/* 1 */}
          <circle cx="310" cy="130" r="3.5" fill="#000000" />                                  {/* 7/5 */}
          <circle cx="380" cy="130" r="4" fill="#ffffff" stroke="#000000" strokeWidth="1.2" /> {/* 8/5 */}

          {/* Дробные подписи меток осей */}
          <g className="font-serif text-xs" fill="#000000">
            {/* 2/5 */}
            <text x="94" y="152" className="dark:fill-slate-300">2</text>
            <line x1="92" y1="156" x2="108" y2="156" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
            <text x="94" y="168" className="dark:fill-slate-300">5</text>

            {/* 3/5 */}
            <text x="164" y="152" className="dark:fill-slate-300">3</text>
            <line x1="162" y1="156" x2="178" y2="156" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
            <text x="164" y="168" className="dark:fill-slate-300">5</text>

            {/* 1 */}
            <text x="236" y="160" className="dark:fill-slate-300 text-sm">1</text>

            {/* 7/5 */}
            <text x="304" y="152" className="dark:fill-slate-300">7</text>
            <line x1="302" y1="156" x2="318" y2="156" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
            <text x="304" y="168" className="dark:fill-slate-300">5</text>

            {/* 8/5 */}
            <text x="374" y="152" className="dark:fill-slate-300">8</text>
            <line x1="372" y1="156" x2="388" y2="156" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
            <text x="374" y="168" className="dark:fill-slate-300">5</text>
          </g>
        </svg>
      </div>

      <p>Анализируя взаимное расположение интервалов, получаем, что ровно один корень существует в следующих случаях:</p>
      <ul className="list-bullet pl-5 space-y-2">
        <li>
          Когда работает исключительно одна из ветвей корня радикала, а логарифмический корень <InlineMath math={`x_1`} /> не существует по условиям ОДЗ. Это даёт интервалы <InlineMath math={`a \\in \\left(\\frac{2}{5}; \\frac{3}{5}\\right)`} /> и <InlineMath math={`a \\in \\left(\\frac{7}{5}; \\frac{8}{5}\\right)`} />.
        </li>
        <li>
          В точках совпадения корней, когда <InlineMath math={`x_1 = x_3 \\implies a = \\frac{3}{5}`} /> и <InlineMath math={`x_1 = x_2 \\implies a = \\frac{7}{5}`} />. В этих положениях два различных потенциальных корня склеиваются в один уникальный, удовлетворяющий условию задачи.
        </li>
      </ul>

      <p>Объединяя открытые интервалы с граничными точками совпадения корней, получаем итоговый результат.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(\\frac{2}{5}; \\frac{3}{5}\\right] \\cup \\left[\\frac{7}{5}; \\frac{8}{5}\\right)`} />
      </div>
    </div>
  )
},



<<<<<<< HEAD
{
  id: 21,
  title: 'Задача 21 (ЕГЭ 2024, основная волна, Дальний Восток)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} 2x + 2ay + a - 3 = 0, \\\\ x|y| + 2x - 3 = 0 \\end{cases}',
  textAfter: ' имеет ровно два различных решения',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Выразим переменную <InlineMath math={`x`} /> из второго уравнения системы, которое не содержит параметра:</p>
      <BlockMath math={`x(|y| + 2) = 3 \\implies x = \\frac{3}{|y| + 2}`} />
      
      <p>
        Рассмотрим координатную плоскость, в которой горизонтальной осью будет ось <InlineMath math={`y`} />, а вертикальной — ось <InlineMath math={`x`} />. Функция <InlineMath math={`x(y) = \\frac{3}{|y| + 2}`} /> определена для всех <InlineMath math={`y \\in \\mathbb{R}`} /> и является чётной, то есть её график симметричен относительно вертикальной оси <InlineMath math={`Ox`} />.
      </p>
      <p>
        При <InlineMath math={`y = 0`} /> функция достигает своего максимума в вершине <InlineMath math={`V(0; 1{,}5)`} />. При <InlineMath math={`y \\to \\pm\\infty`} /> значения <InlineMath math={`x \\to 0^+`} />, то есть горизонтальной асимптотой служит ось <InlineMath math={`Oy`} />. График представляет собой плавный «холм» с изломом в вершине <InlineMath math={`V`} />.
      </p>
      
      <p>Преобразуем первое уравнение системы, переписав его как уравнение пучка прямых на плоскости <InlineMath math={`yOx`} />:</p>
      <BlockMath math={`2x - 3 + a(2y + 1) = 0`} />
      
      <p>При любом значении параметра <InlineMath math={`a`} /> эта линия является прямой, проходящей через фиксированный центр пучка <InlineMath math={`P`} />. Найдём его координаты, приравняв к нулю выражения при параметре и без него:</p>
      <BlockMath math={`\\begin{cases} 2y + 1 = 0 \\implies y = -0{,}5, \\\\ 2x - 3 = 0 \\implies x = 1{,}5. \\end{cases}`} />
      
      <p>Таким образом, фиксированная точка имеет координаты <InlineMath math={`P(-0{,}5; 1{,}5)`} />. Заметим, что она лежит на той же высоте, что и вершина «холма» <InlineMath math={`V(0; 1{,}5)`} />, но смещена левее неё.</p>
      <p>Поскольку точка пучка <InlineMath math={`P(-0{,}5; 1{,}5)`} /> расположена строго выше левой ветви графика (<InlineMath math={`y < 0`} />), любая невертикальная прямая пучка (при <InlineMath math={`a \\neq 0`} />) всегда пересекает левую ветвь «холма» ровно в одной точке.</p>
      <p>Чтобы вся система уравнений имела ровно два различных решения, прямая пучка обязана пересекать правую ветвь графика (<InlineMath math={`y \\geq 0`} />) также ровно в одной точке. Геометрически это соответствует случаю касания прямой пучка и правой нисходящей ветви «холма».</p>

            {/* Высокоточный и сбалансированный SVG-график задачи в осях yOx (max-w-[480px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 520 280" className="w-full max-w-[480px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Координатные оси (Центр: x=250, y=220 соответствует (0,0)) */}
          {/* Масштаб: 1 ед = 80px */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="220" x2="460" y2="220" />  {/* Axis Oy */}
            <line x1="250" y1="30" x2="250" y2="250" />  {/* Axis Ox */}
          </g>
          <path d="M 460,220 L 452,216 M 460,220 L 452,224" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 250,30 L 246,38 M 250,30 L 254,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="472" y="224" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="244" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="236" y="234" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Синий холм x = 3 / (|y| + 2). Вершина V(0; 1.5) -> (250, 100) */}
          <path d="M 50,165 C 120,155 180,135 250,100 C 320,135 380,155 450,165" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Описание синего графика аккуратно смещено вправо и поднято */}
          <g className="font-serif text-xs">
            <text x="385" y="142" fill="#2563eb">x =</text>
            <text x="407" y="134" fill="#2563eb">3</text>
            <line x1="405" y1="138" x2="440" y2="138" stroke="#2563eb" strokeWidth="1" />
            <text x="407" y="149" fill="#2563eb">|y| + 2</text>
          </g>
          <text x="258" y="96" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">V(0; 1,5)</text>
          <circle cx="250" cy="100" r="3.5" fill="#000000" />

          {/* Полностью пересчитанная красная пунктирная касательная линия a = 1/3 */}
          {/* Проходит математически строго ТАКЖЕ через центр обеих красных точек: P(210, 100) и касания (330, 140) */}
          <line x1="90" y1="60" x2="450" y2="180" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5 4" />
          <text x="456" y="184" fill="#dc2626" className="font-serif text-xs">a = 1/3</text>

          {/* Точка пучка P(-0.5; 1.5) -> (210, 100) */}
          <circle cx="210" cy="100" r="3.5" fill="#dc2626" />
          <text x="125" y="94" fill="#dc2626" className="font-serif text-xs">P(-0,5; 1,5)</text>

          {/* Точка касания (1; 1) -> (330, 140) */}
          <circle cx="330" cy="140" r="3.5" fill="#dc2626" />
          <text x="338" y="132" fill="#dc2626" className="font-serif text-xs">(1; 1)</text>
        </svg>
      </div>




      <p>Для нахождения условия касания подставим уравнение правой ветви <InlineMath math={`x = \\frac{3}{y + 2}`} /> в уравнение прямой пучка:</p>
      <BlockMath math={`2\\left(\\frac{3}{y + 2}\\right) + 2ay + a - 3 = 0`} />
      <BlockMath math={`6 + (2ay + a - 3)(y + 2) = 0`} />
      <BlockMath math={`6 + 2ay^2 + 4ay + ay + 2a - 3y - 6 = 0`} />
      <BlockMath math={`2ay^2 + (5a - 3)y + 2a = 0`} />
      
      <p>Полученное квадратное уравнение имеет единственный корень (случай касания), когда его дискриминант равен нулю:</p>
      <BlockMath math={`D = (5a - 3)^2 - 4 \\cdot 2a \\cdot 2a = 25a^2 - 30a + 9 - 16a^2 = 9a^2 - 30a + 9 = 0`} />
      <BlockMath math={`a^2 - \\frac{10}{3}a + 1 = 0 \\implies a = 3 \\text{ или } a = \\frac{1}{3}.`} />
      
      <p>Проверим знаки абсцисс <InlineMath math={`y`} /> точек касания для каждого значения параметра:</p>
      <ul className="list-bullet pl-5 space-y-2">
        <li>
          При <InlineMath math={`a = 3`} /> уравнение принимает вид <InlineMath math={`6y^2 + 12y + 6 = 0 \\implies 6(y + 1)^2 = 0 \\implies y = -1`} />. Это значение отрицательно, что противоречит условию правой ветви (<InlineMath math={`y \\geq 0`} />). Касания на правой ветви нет.
        </li>
        <li>
          При <InlineMath math={`a = \\frac{1}{3}`} /> уравнение принимает вид <InlineMath math={`\\frac{2}{3}y^2 - \\frac{4}{3}y + \\frac{2}{3} = 0 \\implies \\frac{2}{3}(y - 1)^2 = 0 \\implies y = 1`} />. Условию <InlineMath math={`y \\geq 0`} /> удовлетворяет, это истинная точка касания <InlineMath math={`(1; 1)`} />.
        </li>
      </ul>
      
      <p>
        При <InlineMath math={`a = \\frac{1}{3}`} /> прямая касается правой ветви (1 решение) и пересекает левую ветвь (1 решение), давая в сумме ровно два различных решения исходной системы.
      </p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a = \\frac{1}{3}`} />
      </div>
    </div>
  )
},


{
  id: 22,
  title: 'Задача 22 (ЕГЭ 2024, основная волна, Сибирь)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} x + y = a, \\\\ |y| = |x^2 - 2x| \\end{cases}',
  textAfter: 'имеет ровно два различных решения.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Рассмотрим второе уравнение системы, не содержащее параметра: <InlineMath math={`|y| = |x^2 - 2x|`} />. По свойству равенства модулей, данное уравнение равносильно совокупности двух уравнений:
      </p>
      <BlockMath math={`\\left[ \\begin{array}{l} y = x^2 - 2x, \\\\ y = -(x^2 - 2x) = -x^2 + 2x. \\end{array} \\right.`} />
      
      <p>Таким образом, графиком второго уравнения на координатной плоскости <InlineMath math={`xOy`} /> является объединение двух парабол:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Парабола <InlineMath math={`y = x^2 - 2x`} /> с вершиной в точке <InlineMath math={`(1; -1)`} />, ветви которой направлены вверх. Она пересекает ось абсцисс в точках <InlineMath math={`(0; 0)`} /> и <InlineMath math={`(2; 0)`} />.</li>
        <li>Парабола <InlineMath math={`y = -x^2 + 2x`} /> с вершиной в точке <InlineMath math={`(1; 1)`} />, ветви которой направлены вниз. Она пересекает ось абсцисс в тех же точках <InlineMath math={`(0; 0)`} /> и <InlineMath math={`(2; 0)`} />.</li>
      </ul>
      
      <p>Вместе эти две параболы образуют симметричную замкнутую «петлю» (линзу) между точками <InlineMath math={`x = 0`} /> и <InlineMath math={`x = 2`} />, переходящую в бесконечные ветви при <InlineMath math={`x < 0`} /> и <InlineMath math={`x > 2`} />.</p>
      <p>Первое уравнение системы <InlineMath math={`y = -x + a`} /> задаёт семейство параллельных прямых с наклоном <InlineMath math={`-1`} />. Нам необходимо определить, при каких значениях <InlineMath math={`a`} /> (задающих сдвиг прямой по вертикали) эта сканирующая прямая имеет ровно две общие точки с объединением парабол.</p>
      
      <p>Изобразим графическую ситуацию в осях <InlineMath math={`xOy`} />:</p>

                  {/* Высокоточный SVG-график Задачи 22 (max-w-[430px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 500 360" className="w-full max-w-[430px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Серая фоновая рамка-сетка из оригинального чертежа */}
          <rect x="135" y="65" width="230" height="230" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" className="dark:stroke-slate-800" />

          {/* Координатные оси (Центр (0,0) зафиксирован строго на x=180, y=180. Масштаб: 1 ед = 85px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="180" x2="440" y2="180" /> {/* Ось Ox */}
            <line x1="180" y1="30" x2="180" y2="330" />  {/* Ось Oy */}
          </g>
          <path d="M 440,180 L 432,176 M 440,180 L 432,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 180,30 L 176,38 M 180,30 L 184,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="452" y="184" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="174" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="164" y="196" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Истинный график уравнения |y| = |x^2 - 2x| — ЖЕСТКО ЗАФИКСИРОВАН БЕЗ ИЗМЕНЕНИЙ */}
          {/* Линия 1: y = |x^2 - 2x| */}
          <path d="M 132.5,70 Q 180,180 180,180 Q 222.5,95 265,95 Q 307.5,95 350,180 Q 350,180 397.5,70" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Линия 2: y = -|x^2 - 2x| */}
          <path d="M 132.5,290 Q 180,180 180,180 Q 222.5,265 265,265 Q 307.5,265 350,180 Q 350,180 397.5,290" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Строго параллельные сканирующие прямые y = -x + a (наклон ровно -1, угол 135 градусов) */}
          <g stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 4">
            {/* a = -0.25 Опущена еще на 0,1 единицы масштаба (суммарно на 0,5 от исходного: 0,1 * 85px = 8.5px вниз) */}
            {/* Изменено с y1="125" на "133.5", с y2="370" на "378.5". Параллельный наклон сохранен */}
            <line x1="110" y1="133.5" x2="355" y2="378.5" />
            <text x="315" y="360.5" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">a = -0,25</text>

            {/* a = 0 Проходит идеально точно через начало координат (180, 180) */}
            <line x1="100" y1="100" x2="330" y2="330" />
            <text x="295" y="303" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">a = 0</text>

            {/* a = 2 Проходит идеально точно через правый узел линзы x=2 -> 180 + 2*85 = 350, y=180 */}
            <line x1="180" y1="10" x2="450" y2="280" />
            <text x="405" y="262" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">a = 2</text>

            {/* a = 2.25 Зафиксирована на прежней позиции */}
            <line x1="195" y1="4.5" x2="460" y2="269.5" />
            <text x="415" y="226.5" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">a = 2,25</text>
          </g>

          {/* Метки ключевых точек */}
          <text x="249" y="85" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">(1; 1)</text>
          <text x="243" y="283" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">(1; -1)</text>
          <text x="354" y="196" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">2</text>

          {/* Чёрные маркерные узловые точки и вершины строго на своих местах */}
          <circle cx="180" cy="180" r="3.5" fill="#000000" />
          <circle cx="350" cy="180" r="3.5" fill="#000000" />
          <circle cx="265" cy="95" r="3.5" fill="#000000" />
          <circle cx="265" cy="265" r="3.5" fill="#000000" />
        </svg>
      </div>



      <p>Найдем аналитические значения параметра <InlineMath math={`a`} />, соответствующие моментам касания сканирующей прямой с каждой из парабол.</p>
      
      <p><b>1) Касание с нижней параболой <InlineMath math={`y = x^2 - 2x`} />:</b></p>
      <BlockMath math={`-x + a = x^2 - 2x \\implies x^2 - x - a = 0`} />
      <BlockMath math={`D = 1 - 4(1)(-a) = 1 + 4a = 0 \\implies a = -0{,}25.`} />
      <p>
        Точка касания имеет абсциссу <InlineMath math={`x = 0{,}5`} />. В этом положении прямая касается нижней параболы (1 точка) и пересекает две внешние ветви верхней параболы (2 точки), давая в сумме 3 решения.
      </p>
      
      <p><b>2) Касание с верхней параболой <InlineMath math={`y = -x^2 + 2x`} />:</b></p>
      <BlockMath math={`-x + a = -x^2 + 2x \\implies x^2 - 3x + a = 0`} />
      <BlockMath math={`D = 9 - 4(1)(a) = 9 - 4a = 0 \\implies a = 2{,}25.`} />
      <p>
        Точка касания имеет абсциссу <InlineMath math={`x = 1{,}5`} />. В этом положении прямая касается верхней параболы (1 точка) и пересекает две внешние ветви нижней параболы (2 точки), давая в сумме 3 решения.
      </p>
      
      <p><b>3) Проход прямой через узловые точки пересечения парабол <InlineMath math={`(0; 0)`} /> and <InlineMath math={`(2; 0)`} />:</b></p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Через <InlineMath math={`(0; 0)`} />: <InlineMath math={`0 + 0 = a \\implies a = 0`} />.</li>
        <li>Через <InlineMath math={`(2; 0)`} />: <InlineMath math={`2 + 0 = a \\implies a = 2`} />.</li>
      </ul>
      
      <p>Проанализируем количество решений (точек пересечения) при движении сканирующей прямой снизу вверх (с увеличением <InlineMath math={`a`} />):</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>При <InlineMath math={`a < -0{,}25`} /> прямая лежит строго ниже области касания и пересекает только две внешние ветви парабол. Имеем <b>ровно 2 решения</b>.</li>
        <li>При <InlineMath math={`a = -0{,}25`} /> прямая касается нижней параболы. Имеем 3 решения.</li>
        <li>При <InlineMath math={`a \\in (-0{,}25; 0)`} /> прямая пересекает внешние ветви и дважды пересекает нижнюю параболу. Имеем 4 решения.</li>
        <li>При <InlineMath math={`a = 0`} /> прямая проходит через <InlineMath math={`(0; 0)`} />, пересекает вершину верхней параболы в точке <InlineMath math={`(2; 0)`} /> и внешнюю ветвь. Имеем 3 решения.</li>
        <li>При <InlineMath math={`a \\in (0; 2)`} /> прямая пересекает внутреннюю «петлю» и внешние ветви. Имеем 4 решения.</li>
        <li>При <InlineMath math={`a = 2`} /> прямая проходит через <InlineMath math={`(2; 0)`} />, пересекает <InlineMath math={`(0; 0)`} /> и внешнюю ветвь. Имеем 3 решения.</li>
        <li>При <InlineMath math={`a \\in (2; 2{,}25)`} /> прямая дважды пересекает верхнюю параболу и внешние ветви. Имеем 4 решения.</li>
        <li>При <InlineMath math={`a = 2{,}25`} /> прямая касается верхней параболы. Имеем 3 решения.</li>
        <li>При <InlineMath math={`a > 2{,}25`} /> прямая уходит выше области касания и пересекает только две уходящие вверх внешние ветви исходных парабол. Имеем <b>ровно 2 решения</b>.</li>
      </ul>
      
      <p>Таким образом, ровно два различных решения система имеет, когда прямая находится вне зоны внутренних пересечений и касаний.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -0{,}25) \\cup (2{,}25; +\\infty)`} />
      </div>
    </div>
  )
},


{
  id: 23,
  title: 'Задача 23 (ЕГЭ 2024, основная волна, Дагестан)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} |y| + |x| = a, \\\\ y = \\sqrt{x + 9} \\end{cases}',
  textAfter: 'имеет два различных решения.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Рассмотрим второе уравнение системы, не содержащее параметра: <InlineMath math={`y = \\sqrt{x + 9}`} />. Графиком этой функции является верхняя ветвь параболы с вершиной в точке <InlineMath math={`A(-9; 0)`} />, направленная вправо. Она пересекает ось ординат в точке <InlineMath math={`(0; 3)`} />. По определению квадратного корня, для всех точек этого графика выполнены условия <InlineMath math={`x \\geq -9`} /> и <InlineMath math={`y \\geq 0`} />.
      </p>
      
      <p>
        Первое уравнение системы при <InlineMath math={`a > 0`} /> задаёт на плоскости ромб с центром в начале координат <InlineMath math={`(0; 0)`} /> and вершинами в точках <InlineMath math={`(a; 0), (0; a), (-a; 0), (0; -a)`} />. Поскольку парабола целиком лежит в области <InlineMath math={`y \\geq 0`} />, нас интересует её пересечение только с двумя верхними сторонами ромба:
      </p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Правая верхняя сторона: <InlineMath math={`y = -x + a`} /> при <InlineMath math={`x \\geq 0`} />.</li>
        <li>Левая верхняя сторона: <InlineMath math={`y = x + a`} /> при <InlineMath math={`x \\leq 0`} />.</li>
      </ul>
      
      <p>Изобразим графическую ситуацию на координатной плоскости <InlineMath math={`xOy`} />:</p>

            {/* Высокоточный и чистый SVG-график Задачи 23 (max-w-[450px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 500 360" className="w-full max-w-[430px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Серая фоновая рамка-сетка из оригинального чертежа */}
          <rect x="135" y="65" width="230" height="230" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" className="dark:stroke-slate-800" />

          {/* Координатные оси (Центр (0,0) на x=250, y=180. Масштаб: 1 ед = 13px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="180" x2="440" y2="180" /> {/* Ось Ox */}
            <line x1="250" y1="30" x2="250" y2="330" />  {/* Ось Oy */}
          </g>
          <path d="M 440,180 L 432,176 M 440,180 L 432,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 250,30 L 246,38 M 250,30 L 254,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="452" y="184" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="244" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="236" y="196" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Вспомогательные серые пунктирные ромбы малых параметров */}
          <path d="M 211,180 L 250,141 L 289,180 L 250,219 Z" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

          {/* Семейство ромбов (Красные линии с наклоном ровно 45 градусов, т.е. delta x = delta y) */}
          {/* 1) Ромб a = 3 (Сплошной красный) */}
          <path d="M 211,180 L 250,141 L 289,180 L 250,219 Z" fill="none" stroke="#dc2626" strokeWidth="1.8" />
          <text x="222" y="152" fill="#dc2626" className="font-serif italic text-[11px]">a = 3</text>

          {/* 2) Ромб касания a = 9.25 (Пунктирный красный) */}
          <path d="M 129.75,180 L 250,59.75 L 370.25,180 L 250,300.25 Z" fill="none" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />
          <text x="110" y="140" fill="#dc2626" stroke="none" className="font-serif italic text-[11px] font-normal">a = 37/4</text>

          {/* 3) Ромб a = 9 (Пунктирный красный, проходит строго через (-9,0) -> 250-117=133) */}
          <path d="M 133,180 L 250,63 L 367,180 L 250,297 Z" fill="none" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />
          {/* Подвинута ещё чуть-чуть правее! Координата x изменена с 205 на 217. Теперь надпись идеально сидит строго посередине между линиями ромбов */}
          <text x="217" y="105" fill="#dc2626" className="font-serif italic text-[11px]">a = 9</text>

          {/* Синий график параболы y = sqrt(x + 9). Вершина в (-9,0) -> (133, 180), точка (0,3) -> (250, 141) */}
          <path d="M 133,180 C 145,165 200,147 250,141 C 300,135 370,123 410,115" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="325" y="110" fill="#2563eb" className="font-serif text-xs">y = √(x + 9)</text>

          {/* Ключевые точки */}
          <text x="118" y="194" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">-9</text>

          {/* Чёрные маркерные точки вершин и пересечений */}
          <circle cx="133" cy="180" r="3.5" fill="#000000" />  {/* Вершина параболы (-9,0) */}
          <circle cx="250" cy="141" r="3.5" fill="#000000" />  {/* Точка пересечения (0,3) */}
        </svg>
      </div>


      <p>Проанализируем количество решений системы при различных значениях параметра <InlineMath math={`a`} /> (при расширении ромба от начала координат):</p>
      
      <p>
        1) При <InlineMath math={`a \\in (0; 3]`} /> правая верхняя сторона ромба пересекает параболу строго в одной точке при <InlineMath math={`x \\geq 0`} />. Левая верхняя сторона проходит ниже параболы и не пересекает её. Система имеет <b>ровно 1 решение</b>.
      </p>
      
      <p>
        2) При <InlineMath math={`a \\in (3; 9)`} /> правая сторона ромба пересекает параболу в одной точке при <InlineMath math={`x > 0`} />. Левая сторона ромба <InlineMath math={`y = x + a`} /> пересекает левую ветвь параболы ровно 1 раз, так как левая вершина ромба <InlineMath math={`(-a; 0)`} /> находится строго правее начальной точки параболы <InlineMath math={`A(-9; 0)`} />. Система имеет <InlineMath math={`1 + 1 = 2`} /> решения.
      </p>
      
      <p>
        3) При <InlineMath math={`a = 9`} /> левая вершина ромба попадает в точку <InlineMath math={`A(-9; 0)`} />. Левая сторона пересекает параболу в точке <InlineMath math={`A(-9; 0)`} /> и из-за своей крутизны пересекает её ещё один раз на интервале <InlineMath math={`x \\in (-9; 0)`} />. Правая сторона даёт 1 пересечение. Система имеет <InlineMath math={`2 + 1 = 3`} /> решения.
      </p>
      
      <p>
        4) При <InlineMath math={`a \\in (9; 9{,}25)`} /> левая вершина ромба уходит левее точки <InlineMath math={`A`} />, а левая сторона опускается ниже и пересекает левую ветвь параболы 2 раза. Правая сторона даёт 1 пересечение. Система имеет <InlineMath math={`2 + 1 = 3`} /> решения.
      </p>
      
      <p>
        5) При <InlineMath math={`a = 9{,}25`} /> достигается случай касания левой верхней стороны ромба <InlineMath math={`y = x + a`} /> и ветви параболы при <InlineMath math={`x \\leq 0`} />:
      </p>
      <BlockMath math={`x + a = \\sqrt{x + 9} \\implies (x + a)^2 = x + 9 \\implies x^2 + (2a - 1)x + a^2 - 9 = 0`} />
      <BlockMath math={`D = (2a - 1)^2 - 4(a^2 - 9) = -4a + 37 = 0 \\implies a = \\frac{37}{4} = 9{,}25.`} />
      <p>
        Абсцисса точки касания: <InlineMath math={`x = \\frac{1 - 2a}{2} = \\frac{1 - 18{,}5}{2} = -8{,}75`} />. Эта точка принадлежит области определения <InlineMath math={`x \\in [-9; 0]`} />. В данном положении левая сторона касается параболы (1 точка), а правая сторона пересекает её при <InlineMath math={`x > 0`} /> (1 точка). Система имеет <b>ровно 2 решения</b>.
      </p>
      
      <p>
        6) При <InlineMath math={`a > 9{,}25`} /> левая сторона ромба поднимается выше параболы и больше не касается её. Единственное пересечение остаётся на правой стороне ромба при <InlineMath math={`x > 0`} />. Система имеет <b>ровно 1 решение</b>.
      </p>
      
      <p>
        Таким образом, ровно два различных решения исходная система имеет при всех значениях параметра из интервала <InlineMath math={`(3; 9)`} />, а также в изолированной точке касания <InlineMath math={`a = 9{,}25`} />.
      </p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (3; 9) \\cup \\left\\{\\frac{37}{4}\\right\\}`} />
      </div>
    </div>
  )
},


{
  id: 24,
  title: 'Задача 24 (ЕГЭ 2024, основная волна, Центр)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} 2x - y + a = 0, \\\\ 2|y| - x^2 + 2x = 0 \\end{cases}',
  textAfter: 'имеет ровно два различных решения.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Рассмотрим второе уравнение системы, не содержащее параметра: <InlineMath math={`2|y| = x^2 - 2x`} />. Так как левая часть уравнения неотрицательна, то правая часть накладывает ограничение на ОДЗ переменной <InlineMath math={`x`} />:
      </p>
      <BlockMath math={`x^2 - 2x \\geq 0 \\iff x \\in (-\\infty; 0] \\cup [2; +\\infty).`} />
      <p>Внутри полосы <InlineMath math={`x \\in (0; 2)`} /> график функции отсутствует.</p>
      
      <p>Раскрывая модуль по определению, получаем совокупность двух уравнений парабол на ОДЗ:</p>
      <BlockMath math={`\\left[ \\begin{array}{l} y = 0{,}5x^2 - x, \\\\ y = -0{,}5x^2 + x. \\end{array} \\right.`} />
      <p>График представляет собой две пары симметричных ветвей парабол, сходящихся в узловых точках <InlineMath math={`(0;0)`} /> и <InlineMath math={`(2;0)`} />.</p>
      
      <p>
        Первое уравнение системы задаёт семейство параллельных прямых <InlineMath math={`y = 2x + a`} /> с угловым коэффициентом <InlineMath math={`k = 2`} />. Нам необходимо определить число точек пересечения этих прямых с ветвями парабол при различных значениях <InlineMath math={`a`} />.
      </p>

            {/* Высокоточный SVG-график Задачи 24 (max-w-[440px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 500 380" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Серая фоновая рамка-сетка */}
          <rect x="100" y="50" width="300" height="280" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" className="dark:stroke-slate-800" />

          {/* Координатные оси (Центр (0,0) зафиксирован строго на x=200, y=190. Масштаб: 1 ед = 50px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="180" x2="440" y2="180" /> {/* Ось Ox */}
            <line x1="200" y1="30" x2="200" y2="340" />  {/* Ось Oy */}
          </g>
          <path d="M 440,190 L 432,176 M 440,190 L 432,194" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 200,30 L 196,38 M 200,30 L 204,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="452" y="194" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="194" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="186" y="204" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>
          <text x="302" y="206" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">2</text>

          {/* Синие непрерывные ветви парабол с пустотой на интервале (0; 2) */}
          <path d="M 60,40 C 110,120 160,170 200,190 C 160,210 110,260 60,340" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <path d="M 300,190 C 340,170 390,120 440,40 M 300,190 C 340,210 390,260 440,340" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Строго параллельные сканирующие прямые y = 2x + a (наклон k = 2) */}
          <g stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 4">
            {/* a = 0,5 */}
            <line x1="60" y1="340" x2="210" y2="40" />
            <text x="140" y="32" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">a = 0,5</text>

            {/* a = 0 — Проходит идеально точно через начало координат (200, 190) */}
            <line x1="125" y1="340" x2="275" y2="40" />
            <text x="250" y="35" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">a = 0</text>

            {/* a = -4 — Проходит идеально точно через правый узел (2,0) -> (300, 190) */}
            <line x1="225" y1="340" x2="375" y2="40" />
            <text x="345" y="65" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">a = -4</text>

            {/* a = -4,5 (Сдвинута вправо на 1.6 единицы масштаба: 1.6 * 50px = 80px вправо. x1 и x2 увеличены на 80px) */}
            {/* Было x1="210" стало "290", было x2="360" стало "440". Теперь она наглядно и четко касается правой параболы */}
            <line x1="290" y1="340" x2="440" y2="40" />
            <text x="445" y="45" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">a = -4,5</text>
          </g>

          {/* Чёрные маркерные узловые точки слияния веток */}
          <circle cx="200" cy="190" r="3.5" fill="#000000" />
          <circle cx="300" cy="190" r="3.5" fill="#000000" />
        </svg>
      </div>


      <p><b>1) Найдем условия пересечения с правой верхней ветвью (<InlineMath math={`x \\geq 2, \\ y = 0{,}5x^2 - x`} />):</b></p>
      <BlockMath math={`2x + a = 0{,}5x^2 - x \\implies 0{,}5x^2 - 3x - a = 0 \\implies D = 9 + 2a.`} />
      <p>
        Касание происходит при <InlineMath math={`D = 0 \\implies a = -4{,}5`} /> в точке <InlineMath math={`x = 3 \\geq 2`} /> (корень принадлежит ОДЗ). При <InlineMath math={`a < -4{,}5`} /> решений нет. При <InlineMath math={`a \\in (-4{,}5; -4]`} /> имеем 2 решения, при <InlineMath math={`a > -4`} /> — 1 решение.
      </p>
      
      <p><b>2) Найдем условия пересечения с левой нижней ветвью (<InlineMath math={`x \\leq 0, \\ y = -0{,}5x^2 + x`} />):</b></p>
      <BlockMath math={`2x + a = -0{,}5x^2 + x \\implies 0{,}5x^2 + x + a = 0 \\implies D = 1 - 2a.`} />
      <p>
        Касание происходит при <InlineMath math={`D = 0 \\implies a = 0{,}5`} /> в точке <InlineMath math={`x = -1 \\leq 0`} /> (корень принадлежит ОДЗ). При <InlineMath math={`a > 0{,}5`} /> решений нет. При <InlineMath math={`a \\in [0; 0{,}5)`} /> имеем 2 решения, при <InlineMath math={`a < 0`} /> — 1 решение.
      </p>
      
      <p>Совместим результаты для всех четырёх ветвей при движении сканирующей прямой слева направо (с увеличением <InlineMath math={`a`} />):</p>
      <ul className="list-bullet pl-5 space-y-2">
        <li>При <InlineMath math={`a < -4{,}5`} />: прямая пересекает только 1 раз левую нижнюю ветвь и 1 раз правую нижнюю ветвь. Имеем <b>ровно 2 решения</b>.</li>
        <li>При <InlineMath math={`a = -4{,}5`} />: добавляется точка касания на правой верхней ветви. Имеем 3 решения.</li>
        <li>При <InlineMath math={`a \\in (-4{,}5; -4)`} />: прямая пересекает левую нижнюю (1), правую нижнюю (1) и дважды правую верхнюю ветвь (2). Имеем 4 решения.</li>
        <li>При <InlineMath math={`a = -4`} />: прямая проходит через узел <InlineMath math={`(2;0)`} /> (склеивание 2-х ветвей) и пересекает левую нижнюю и правую верхнюю ветви. Имеем 3 решения.</li>
        <li>При <InlineMath math={`a \\in (-4; 0)`} />: прямая пересекает только левую нижнюю (1) и правую верхнюю (1) ветви. Имеем <b>ровно 2 решения</b>.</li>
        <li>При <InlineMath math={`a = 0`} />: прямая проходит через узел <InlineMath math={`(0;0)`} /> (склеивание 2-х ветвей) и пересекает левую нижнюю и правую верхнюю ветви. Имеем 3 решения.</li>
        <li>При <InlineMath math={`a \\in (0; 0{,}5)`} />: прямая дважды пересекает левую нижнюю (2), 1 раз левую верхнюю (1) и 1 раз правую верхнюю (1) ветви. Имеем 4 решения.</li>
        <li>При <InlineMath math={`a = 0{,}5`} />: прямая касается левой нижней ветви (1), пересекает левую верхнюю (1) и правую верхнюю (1). Имеем 3 решения.</li>
        <li>При <InlineMath math={`a > 0{,}5`} />: левая нижняя ветвь больше не пересекается. Прямая пересекает только левую верхнюю (1) и правую верхнюю (1) ветви. Имеем <b>ровно 2 решения</b>.</li>
      </ul>
      
      <p>Следовательно, ровно два различных решения достигаются на трёх открытых промежутках.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -4{,}5) \\cup (-4; 0) \\cup (0{,}5; +\\infty)`} />
      </div>
    </div>
  )
},



{
  id: 25,
  title: 'Задача 25 (ЕГЭ 2024, досрочная волна)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: 'x^2 - (x - 1)\\sqrt{2x - a} = x',
  textAfter: 'имеет ровно один корень.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Перенесем слагаемые, не содержащие радикал, в правую часть уравнения:
      </p>
      <BlockMath math={`x^2 - x = (x - 1)\\sqrt{2x - a} \\implies x(x - 1) - (x - 1)\\sqrt{2x - a} = 0`} />
      
      <p>Вынесем общий множитель <InlineMath math={`(x - 1)`} /> за скобки:</p>
      <BlockMath math={`(x - 1)(x - \\sqrt{2x - a}) = 0`} />
      
      <p>
        Данное уравнение на своей области определения (при условии <InlineMath math={`2x - a \\geq 0 \\iff a \\leq 2x`} />) равносильно совокупности двух независимых уравнений:
      </p>
      
      <p>
        <b>1)</b> <InlineMath math={`x - 1 = 0 \\implies x_1 = 1`} />. Найдём условие существования этого корня из неравенства ОДЗ подкоренного выражения:
      </p>
      <BlockMath math={`2(1) - a \\geq 0 \\implies a \\leq 2.`} />
      <p>
        Таким образом, корень <InlineMath math={`x_1 = 1`} /> существует при всех <InlineMath math={`a \\in (-\\infty; 2]`} />. На плоскости <InlineMath math={`xOa`} /> этот корень задаёт вертикальный луч.
      </p>
      
      <p>
        <b>2)</b> <InlineMath math={`x - \\sqrt{2x - a} = 0 \\implies \\sqrt{2x - a} = x`} />. Возведём уравнение в квадрат при естественном условии <InlineMath math={`x \\geq 0`} />:
      </p>
      <BlockMath math={`2x - a = x^2 \\implies a = -x^2 + 2x.`} />
      <p>
        Данный корень задаёт на плоскости <InlineMath math={`xOa`} /> дугу параболы <InlineMath math={`a = -x^2 + 2x`} /> при <InlineMath math={`x \\geq 0`} bitumen />. Проверим её соответствие базовому неравенству ОДЗ <InlineMath math={`a \\leq 2x`} />:
      </p>
      <BlockMath math={`-x^2 + 2x \\leq 2x \\iff -x^2 \\leq 0,`} />
      <p>
        что справедливо для всех действительных значений <InlineMath math={`x`} />. Значит, дуга параболы при <InlineMath math={`x \\geq 0`} /> целиком лежит внутри области допустимых значений.
      </p>
      
      <p>
        Построим графическую иллюстрацию полученных линий в координатной плоскости <InlineMath math={`xOa`} />, где горизонтальная сканирующая прямая на уровне параметра <InlineMath math={`a`} /> своим количеством пересечений будет определять число корней исходного уравнения.
      </p>

      {/* Высокоточный SVG-график Задачи 25 в осях xOa (max-w-[460px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 580 420" className="w-full max-w-[460px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Серая фоновая рамка-сетка */}
          <rect x="135" y="45" width="250" height="330" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" className="dark:stroke-slate-800" />

          {/* Координатные оси (Центр (0,0) зафиксирован строго на x=180, y=260. Масштаб: 1 ед = 85px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="260" x2="520" y2="260" /> {/* Ось Ox продлена под viewBox */}
            <line x1="180" y1="30" x2="180" y2="390" />  {/* Ось Oa */}
          </g>
          <path d="M 520,260 L 512,256 M 520,260 L 512,264" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 180,30 L 176,38 M 180,30 L 184,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="532" y="264" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="166" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="166" y="274" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Синие линии решений в плоскости xOa */}
          {/* Вертикальный луч x = 1 (180 + 85 = 265), идущий снизу до точки a = 2 (260 - 170 = 90) */}
          <line x1="265" y1="90" x2="265" y2="390" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Истинный график параболы a = -x^2 + 2x. Её вершина СТРОГО И ПРИНУДИТЕЛЬНО находится в точке (1;1) -> (265, 175) */}
          <path d="M 180,260 Q 222.5,175 265,175 Q 307.5,175 350,340" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Вспомогательные надписи к синим графикам */}
          <text x="225" y="340" fill="#2563eb" className="font-serif italic text-xs">x = 1</text>
          <text x="315" y="220" fill="#2563eb" className="font-serif italic text-xs">a = -x² + 2x</text>

          {/* Горизонтальные параллельные сканирующие прямые (красный пунктир) */}
          <g stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 4">
            {/* a = 2 (Верхняя граница луча, y = 260 - 2*85 = 90) */}
            <line x1="50" y1="90" x2="410" y2="90" />
            <text x="420" y="94" fill="#dc2626" stroke="none" className="font-serif italic text-[11px] font-normal">a = 2</text>
            {/* Шрифт меток точек сделан тонким font-normal и переведен в font-sans, как у пунктирных прямых */}
            <text x="275" y="82" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px] font-normal">(1; 2)</text>

            {/* a = 1 (Вершина параболы и точка пересечения с лучом, y = 260 - 1*85 = 175) */}
            <line x1="50" y1="175" x2="410" y2="175" />
            <text x="420" y="179" fill="#dc2626" stroke="none" className="font-serif italic text-[11px] font-normal">a = 1</text>
            {/* Шрифт меток точек сделан тонким font-normal и переведен в font-sans, как у пунктирных прямых */}
            <text x="275" y="167" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px] font-normal">(1; 1)</text>

            {/* a = 0 (Ось абсцисс, y = 260) */}
            <line x1="40" y1="260" x2="532" y2="260" />
            <text x="550" y="264" fill="#dc2626" stroke="none" className="font-serif italic text-[11px] font-normal">a = 0</text>
          </g>

          {/* Чёрные маркерные точки ключевых узлов */}
          <circle cx="180" cy="260" r="3.5" fill="#000000" /> {/* (0;0) */}
          <circle cx="265" cy="175" r="3.5" fill="#000000" /> {/* (1;1) */}
          <circle cx="265" cy="90" r="3.5" fill="#000000" />  {/* (1;2) */}
        </svg>
      </div>



      <p>Найдем точки пересечения и совпадения ветвей:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Точка пересечения вертикального луча <InlineMath math={`x = 1`} /> и параболы: <InlineMath math={`a = -1^2 + 2(1) = 1`} />, точка <InlineMath math={`(1; 1)`} />. Заметим, что эта точка одновременно является вершиной параболы.</li>
        <li>Точка начала параболы при <InlineMath math={`x = 0`} />: <InlineMath math={`a = 0`} />, точка <InlineMath math={`(0; 0)`} />.</li>
        <li>Верхняя граница существования вертикального луча: <InlineMath math={`a = 2`} />, точка <InlineMath math={`(1; 2)`} />.</li>
      </ul>

      <p>Проанализируем количество корней (точек пересечения графика с горизонтальной прямой) при различных значениях параметра <InlineMath math={`a`} /> (двигаясь снизу вверх):</p>
      <ul className="list-bullet pl-5 space-y-2">
        <li>При <InlineMath math={`a < 0`} />: прямая пересекает вертикальный луч <InlineMath math={`x = 1`} /> и правую ветвь параболы (при <InlineMath math={`x > 2`} />). Имеем ровно 2 корня.</li>
        <li>При <InlineMath math={`a = 0`} />: прямая проходит через точку <InlineMath math={`(0;0)`} /> на параболе и пересекает луч <InlineMath math={`x = 1`} bitumen />. Имеем ровно 2 корня (<InlineMath math={`x = 0`} /> и <InlineMath math={`x = 1`} />).</li>
        <li>При <InlineMath math={`a \\in (0; 1)`} />: прямая дважды пересекает дугу параболы (по обе стороны от вершины) и пересекает вертикальный луч <InlineMath math={`x = 1`} />. Имеем 3 корня.</li>
        <li>При <InlineMath math={`a = 1`} />: прямая проходит через вершину параболы, где она касается её и пересекает луч <InlineMath math={`x = 1`} />. Так как эти точки совпадают (<InlineMath math={`(1; 1)`} />), серии корней склеиваются. Имеем <b>ровно 1 корень</b> (<InlineMath math={`x = 1`} bitumen />).</li>
        <li>При <InlineMath math={`a \\in (1; 2)`} />: парабола в этой области больше не существует, прямая пересекает только вертикальный луч <InlineMath math={`x = 1`} bitumen />. Имеем <b>ровно 1 корень</b>.</li>
        <li>При <InlineMath math={`a = 2`} />: прямая проходит через крайнюю верхнюю точку луча <InlineMath math={`x = 1`} />. Имеем <b>ровно 1 корень</b>.</li>
        <li>При <InlineMath math={`a > 2`} />: вертикальный луч закончился, параболы нет. Уравнение не имеет решений (0 корней).</li>
      </ul>

      <p>
        Таким образом, ровно один корень исходное уравнение имеет, когда горизонтальная сканирующая прямая находится на промежутке от вершины параболы до верхнего конца луча включительно.
      </p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in [1; 2]`} />
      </div>
    </div>
  )
},

{
  id: 26,
  title: 'Задача 26 (ЕГЭ 2024, резервный день)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '(1 - (x - 2a + 1)^2)^3 - (1 - (x - 2a + 1)^2)^2 = 2^{3|x + 2a|} - 2^{2|x + 2a|}',
  textAfter: 'имеет хотя бы один корень.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Пусть <InlineMath math={`f(t) = t^3 - t^2 = t^2(t - 1)`} />. Уравнение принимает вид:</p>
      <BlockMath math={`f\\left(1 - (x - 2a + 1)^2\\right) = f\\left(2^{|x + 2a|}\\right)`} />
      
      <p>Обозначим аргументы функций через <InlineMath math={`u`} /> и <InlineMath math={`v`} /> и оценим их области значений:</p>
      <BlockMath math={`u = 1 - (x - 2a + 1)^2 \\leq 1`} />
      <BlockMath math={`v = 2^{|x + 2a|} \\geq 2^0 = 1`} />
      
      <p>
        Если <InlineMath math={`t \\leq 1`} />, то <InlineMath math={`f(t) \\leq 0`} />. Если <InlineMath math={`t \\geq 1`} />, то <InlineMath math={`f(t) \\geq 0`} />. 
        Тогда так как <InlineMath math={`u \\leq 1`} /> и <InlineMath math={`v \\geq 1`} />, то получаем, что <InlineMath math={`f(u) \\leq 0`} /> и <InlineMath math={`f(v) \\geq 0`} />, то есть равенство достигается только при одновременном равенстве нулю:
      </p>
      <BlockMath math={`f(u) = f(v) = 0 \\iff \\begin{cases} \\left[ \\begin{array}{l} u = 1, \\\\ u = 0, \\end{array} \\right. \\\\ v = 1. \\end{cases}`} />

      <p>Из уравнения для <InlineMath math={`v`} /> находим связь переменных:</p>
      <BlockMath math={`2^{|x + 2a|} = 1 \\iff |x + 2a| = 0 \\iff x = -2a`} />

      <p>Выполняем равносильные переходы для двух возможных случаев:</p>

      <p><b>Случай 1. При <InlineMath math={`u = 1`} />:</b></p>
      <BlockMath math={`\\begin{cases} 1 - (x - 2a + 1)^2 = 1 \\\\ x = -2a \\end{cases} \\iff \\begin{cases} (x - 2a + 1)^2 = 0 \\\\ x = -2a \\end{cases} \\iff \\begin{cases} x - 2a + 1 = 0 \\\\ x = -2a \\end{cases}`} />
      <BlockMath math={`\\iff -2a - 2a + 1 = 0 \\iff -4a = -1 \\implies a = 0{,}25`} />

      <p><b>Случай 2. При <InlineMath math={`u = 0`} />:</b></p>
      <BlockMath math={`\\begin{cases} 1 - (x - 2a + 1)^2 = 0 \\\\ x = -2a \\end{cases} \\iff \\begin{cases} (x - 2a + 1)^2 = 1 \\\\ x = -2a \\end{cases} \\iff \\begin{cases} \\left[ \\begin{array}{l} x - 2a + 1 = 1, \\\\ x - 2a + 1 = -1, \\end{array} \\right. \\\\ x = -2a \\end{cases}`} />
      <BlockMath math={`\\iff \\left[ \\begin{array}{l} -2a - 2a + 1 = 1 \\\\ -2a - 2a + 1 = -1 \\end{array} \\right. \\iff \\left[ \\begin{array}{l} -4a = 0 \\\\ -4a = -2 \\end{array} \\right. \\implies \\left[ \\begin{array}{l} a = 0, \\\\ a = 0{,}5. \\end{array} \\right.`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{0; 0{,}25; 0{,}5\\}`} />
      </div>
    </div>
  )
},



{
  id: 27,
  title: 'Задача 27 (ЕГЭ 2024, резервный день)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '(3 + 2|x + a|)^3 - (3 + 2|x + a|)^2 = (7 - x^2 - 2ax - 2a^2)^3 - (7 - x^2 - 2ax - 2a^2)^2',
  textAfter: 'имеет хотя бы один корень.',
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Пусть <InlineMath math={`f(t) = t^3 - t^2 = t^2(t - 1)`} />. Уравнение принимает вид:</p>
      <BlockMath math={`f(3 + 2|x + a|) = f(7 - (x + a)^2 - a^2)`} />
      
      <p>Обозначим аргументы через <InlineMath math={`u`} /> и <InlineMath math={`v`} /> и оценим их области значений:</p>
      <BlockMath math={`u = 3 + 2|x + a| \\geq 3`} />
      <BlockMath math={`v = 7 - (x + a)^2 - a^2 \\leq 7`} />
      
      <p>
        При <InlineMath math={`t \\geq 1`} /> оба множителя функции <InlineMath math={`f(t) = t^2(t - 1)`} /> неотрицательны, а её производная <InlineMath math={`f'(t) = 3t^2 - 2t > 0`} />, что гарантирует строгую монотонность (возрастание) на всём промежутке <InlineMath math={`[1; +\\infty)`} />.
      </p>
      <p>
        Так как оба аргумента <InlineMath math={`u`} /> и <InlineMath math={`v`} /> заведомо находятся в области возрастания функции, равенство <InlineMath math={`f(u) = f(v)`} /> возможно тогда и только тогда, когда равны сами аргументы:
      </p>
      <BlockMath math={`3 + 2|x + a| = 7 - (x + a)^2 - a^2 \\iff (x + a)^2 + 2|x + a| + a^2 - 4 = 0`} />

      <p>Пусть <InlineMath math={`y = |x + a|`} />, где <InlineMath math={`y \\geq 0`} />. Уравнение принимает вид:</p>
      <BlockMath math={`y^2 + 2y + a^2 - 4 = 0 \\iff a^2 = -y^2 - 2y + 4`} />

      <p>Изобразим эскиз графика функции <InlineMath math={`g(y) = -y^2 - 2y + 4`} /> в координатах <InlineMath math={`yOa^2`} />:</p>

      {/* Высокоточный и наглядный SVG-график Задачи 27 (max-w-[360px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 400 360" className="w-full max-w-[360px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Вертикальная сетка-рамка для наглядности */}
          <rect x="70" y="45" width="260" height="260" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" className="dark:stroke-slate-800" />

          {/* Координатные оси (Начало координат (0,0) на x=160, y=250. Масштаб: 1 ед = 40px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="250" x2="360" y2="250" /> {/* Ось Oy */}
            <line x1="160" y1="20" x2="160" y2="330" />  {/* Ось O(a^2) */}
          </g>
          <path d="M 360,250 L 352,246 M 360,250 L 352,254" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 160,20 L 156,28 M 160,20 L 164,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="372" y="254" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="136" y="24" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a²</text>
          <text x="146" y="264" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* ЛЕВАЯ ЧАСТЬ ПАРАБОЛЫ (y < 0): СТРОГО И НАГЛЯДНО ПУНКТИРОМ */}
          {/* Вершина полной параболы находится в (-1; 5) -> x = 160 - 40 = 120, y = 250 - 5*40 = 50 */}
          <path d="M 60,210 Q 120,50 160,90" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* ПРАВАЯ ЧАСТЬ ПАРАБОЛЫ (y >= 0): ИДЕАЛЬНАЯ НЕПРЕРЫВНАЯ СИНЯЯ ЛИНИЯ */}
          {/* Выходит из (0;4) -> (160, 90) и падает в корень y = sqrt(5)-1 ~= 1.236 -> (210, 250) */}
          <path d="M 160,90 Q 185,150 210,250" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="215" y="140" fill="#2563eb" className="font-serif text-xs">g(y) = -y² - 2y + 4</text>

          {/* Ключевые маркерные метки на осях */}
          <text x="146" y="94" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">4</text>
          <text x="146" y="54" fill="#94a3b8" className="font-sans text-xs">5</text>
          <text x="212" y="266" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">√5 - 1</text>
          <text x="110" y="266" fill="#94a3b8" className="font-sans text-xs">-1</text>

          {/* Чёрные маркерные граничные точки и вершина */}
          <circle cx="160" cy="90" r="3.5" fill="#000000" />  {/* Граничная точка (0;4) */}
          <circle cx="210" cy="250" r="3.5" fill="#000000" /> {/* Корень */}
          <circle cx="120" cy="50" r="2.5" fill="#94a3b8" />  {/* Скрытая вершина параболы (-1;5) */}
        </svg>
      </div>

      <p>
        Исходное уравнение имеет корни, если полученное уравнение имеет хотя бы один неотрицательный корень (<InlineMath math={`y \\geq 0`} />). Из эскиза графика видно, что область значений функции при <InlineMath math={`y \\geq 0`} /> составляет:
      </p>
      <BlockMath math={`E(g) = (-\\infty; 4]`} />

      <p>Следовательно, уровень горизонтальной прямой должен удовлетворять условию:</p>
      <BlockMath math={`a^2 \\leq 4 \\iff |a| \\leq 2 \\iff a \\in [-2; 2].`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in [-2; 2]`} />
      </div>
    </div>
  )
},


{
  id: 28,
  title: 'Задача 28 (ЕГЭ 2024, резервная волна)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '\\sin 3x + a \\sin x = 0',
  textAfter: <span>не имеет решений на промежутке <InlineMath math={"\\left(0; \\frac{\\pi}{4}\\right)."} /></span>,


  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Используем формулу синуса тройного угла <InlineMath math={`\\sin 3x = 3\\sin x - 4\\sin^3 x`} />:</p>
      <BlockMath math={`3\\sin x - 4\\sin^3 x + a\\sin x = 0 \\iff \\sin x \\cdot (3 - 4\\sin^2 x + a) = 0`} />
      
      <p>
        На интервале <InlineMath math={`x \\in \\left(0; \\frac{\\pi}{4}\\right)`} /> выполнено условие <InlineMath math={`\\sin x \\neq 0`} />, поэтому разделим обе части на <InlineMath math={`\\sin x`} /> и выразим параметр <InlineMath math={`a`} />:
      </p>
      <BlockMath math={`3 - 4\\sin^2 x + a = 0 \\iff a = 4\\sin^2 x - 3`} />
      
      <p>
        Исходное уравнение <b>не имеет решений</b> на заданном промежутке, если значение параметра <InlineMath math={`a`} /> не попадает в область значений функции <InlineMath math={`g(x) = 4\\sin^2 x - 3`} /> при <InlineMath math={`x \\in \\left(0; \\frac{\\pi}{4}\\right)`} />.
      </p>
      
      <p>Определим область значений функции <InlineMath math={`g(x)`} /> последовательной оценкой:</p>
      <BlockMath math={`0 < x < \\frac{\\pi}{4} \\implies 0 < \\sin x < \\frac{\\sqrt{2}}{2} \\implies 0 < \\sin^2 x < \\frac{1}{2}`} />
      <BlockMath math={`\\iff 0 < 4\\sin^2 x < 2 \\iff -3 < 4\\sin^2 x - 3 < -1 \\implies E(g) = (-3; -1)`} />
      
      <p>
        Таким образом, при <InlineMath math={`a \\in (-3; -1)`} /> уравнение имеет решения. Следовательно, решений нет при всех остальных значениях параметра <InlineMath math={`a`} />, включая границы интервала.
      </p>
      
      <p>Изобразим схему отбора на числовой прямой параметра <InlineMath math={`a`} />:</p>

      {/* Высокоточный и наглядный SVG-график Задачи 28 (max-w-[400px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 460 140" className="w-full max-w-[400px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Паттерн для штриховки областей "решений нет" */}
          <defs>
            <pattern id="hatch-gray" width="5" height="5" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="5" stroke="#cbd5e1" strokeWidth="1" className="dark:stroke-slate-800" />
            </pattern>
          </defs>

          {/* Прямоугольники зон со штриховкой */}
          <rect x="50" y="50" width="80" height="40" fill="url(#hatch-gray)" />
          <rect x="250" y="50" width="100" height="40" fill="url(#hatch-gray)" />

          {/* Границы и линии областей */}
          <path d="M 50,50 L 130,50 L 130,90" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M 130,90 L 250,90 M 130,50 L 250,50" fill="none" stroke="#dc2626" strokeWidth="1.5" />
          <path d="M 250,90 L 250,50 L 350,50" fill="none" stroke="#2563eb" strokeWidth="1.5" />

          {/* Главная ось параметра a */}
          <line x1="30" y1="90" x2="420" y2="90" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <path d="M 420,90 L 412,86 M 420,90 L 412,94" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="430" y="94" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* Текстовые метки над графиком */}
          <text x="62" y="38" fill="#2563eb" className="font-sans text-[11px] font-normal">решений нет</text>
          <text x="162" y="38" fill="#dc2626" className="font-sans text-[11px] font-normal">есть решения</text>
          <text x="272" y="38" fill="#2563eb" className="font-sans text-[11px] font-normal">решений нет</text>

          {/* Метки координат на оси */}
          <text x="123" y="112" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">-3</text>
          <text x="243" y="112" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">-1</text>
          <text x="317" y="112" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">0</text>

          {/* Выколотые точки -3 и -1 */}
          <circle cx="130" cy="90" r="3.5" fill="white" stroke="#000000" strokeWidth="1.2" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />
          <circle cx="250" cy="90" r="3.5" fill="white" stroke="#000000" strokeWidth="1.2" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />
          {/* Закрашенная точка 0 */}
          <circle cx="320" cy="90" r="3" fill="#000000" className="dark:fill-slate-400" />
        </svg>
      </div>

      <p>Из геометрической схемы получаем итоговые промежутки для параметра <InlineMath math={`a`} />.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -3] \\cup [-1; +\\infty)`} />
      </div>
    </div>
  )
},


{
  id: 29,
  title: 'Задача 29 (ЕГЭ 2024, резервная волна)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '2\\sin x + \\cos x = a',
  textAfter: <span>имеет единственное решение на отрезке <InlineMath math={"\\left[\\frac{\\pi}{4}; \\frac{3\\pi}{4}\\right]."} /></span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Пусть <InlineMath math={`f(x) = 2\\sin x + \\cos x`} />. Найдем критические точки функции на заданном отрезке с помощью производной:
      </p>
      <BlockMath math={`f'(x) = 2\\cos x - \\sin x = 0 \\iff \\tan x = 2`} />
      
      <p>
        Так как <InlineMath math={`\\tan x = 2 > 0`} />, то единственная точка экстремума на отрезке — это <InlineMath math={`x_0 = \\arctan 2`} />. Поскольку <InlineMath math={`\\tan \\frac{\\pi}{4} = 1 < 2`} />, а при <InlineMath math={`x \\to \\frac{\\pi}{2}`} /> тангенс стремится к <InlineMath math={`+\\infty`} />, точка максимума лежит внутри отрезка: <InlineMath math={`x_0 \\in \\left(\\frac{\\pi}{4}; \\frac{\\pi}{2}\\right)`} />.
      </p>
      
      <p>Вычислим значения функции в точке максимума и на границах отрезка:</p>
      <BlockMath math={`f(x_0) = \\sqrt{2^2 + 1^2} = \\sqrt{5}, \\quad \\text{так как } \\sin x_0 = \\frac{2}{\\sqrt{5}}, \\ \\cos x_0 = \\frac{1}{\\sqrt{5}}`} />
      <BlockMath math={`f\\left(\\frac{\\pi}{4}\\right) = 2 \\cdot \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2}}{2} = \\frac{3\\sqrt{2}}{2}`} />
      <BlockMath math={`f\\left(\\frac{3\\pi}{4}\\right) = 2 \\cdot \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2}}{2}`} />
      
      <p>Сравним полученные граничные значения между собой и с точкой максимума:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Очевидно, что <InlineMath math={`\\frac{3\\sqrt{2}}{2} > \\frac{\\sqrt{2}}{2}`} />.</li>
        <li>Сравним <InlineMath math={`\\sqrt{5}`} /> and <InlineMath math={`\\frac{3\\sqrt{2}}{2}`} />, возведя оба положительных числа в квадрат:</li>
      </ul>
      <BlockMath math={`(\\sqrt{5})^2 = 5 = \\frac{20}{4}; \\quad \\left(\\frac{3\\sqrt{2}}{2}\\right)^2 = \\frac{18}{4} \\implies \\sqrt{5} > \\frac{3\\sqrt{2}}{2}.`} />
      
      <p>
        Функция непрерывно возрастает на промежутке <InlineMath math={`\\left[\\frac{\\pi}{4}; x_0\\right]`} /> и непрерывно убывает на промежутке <InlineMath math={`\\left[x_0; \\frac{3\\pi}{4}\\right]`} />. С учётом строгого неравенства <InlineMath math={`\\frac{\\sqrt{2}}{2} < \\frac{3\\sqrt{2}}{2} < \\sqrt{5}`} />, уравнение <InlineMath math={`f(x) = a`} /> имеет ровно один корень в двух случаях:
      </p>
      <ul className="list-bullet pl-5 space-y-2">
        <li><b>1.</b> В точке глобального максимума: при <InlineMath math={`a = \\sqrt{5}`} />.</li>
        <li><b>2.</b> На полуинтервале, где значения функции на левом возрастающем усе уже не перекрываются правым убывающим усом: при <InlineMath math={`a \\in \\left[\\frac{\\sqrt{2}}{2}; \\frac{3\\sqrt{2}}{2}\\right)`} />.</li>
      </ul>
      
      <p>Изобразим графическую схему поведения функции на заданном отрезке и сканирующие горизонтальные прямые уровня <InlineMath math={`y = a`} />:</p>

            {/* Высокоточный и понятный график функции g(x) со сканированием горизонтальных линий (max-w-[480px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 500 360" className="w-full max-w-[480px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Серая фоновая рамка-сетка */}
          <rect x="90" y="50" width="320" height="260" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" className="dark:stroke-slate-800" />

          {/* Координатные оси (Начало (0,0) зафиксировано на x=130, y=280. Масштаб: 1 ед_x = 100px, 1 ед_y = 90px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="280" x2="450" y2="280" /> {/* Ось Ox */}
            <line x1="130" y1="30" x2="130" y2="330" />  {/* Ось Oy */}
          </g>
          <path d="M 450,280 L 442,276 M 450,280 L 442,284" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 130,30 L 126,38 M 130,30 L 134,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="462" y="284" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="116" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="116" y="294" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Синие график функции f(x) = 2sin(x) + cos(x) на отрезке [pi/4; 3pi/4] */}
          <path d="M 208.5,89 Q 224.6,79 240.7,79 Q 303.1,79 365.6,216" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="285" y="115" fill="#2563eb" className="font-serif text-xs">y = 2·sin x + cos x</text>

          {/* Вертикальные вспомогательные пунктиры от точек графика к оси абсцисс */}
          <g stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3">
            <line x1="208.5" y1="89" x2="208.5" y2="280" />
            <line x1="240.7" y1="79" x2="240.7" y2="280" />
            <line x1="365.6" y1="216" x2="365.6" y2="280" />
            
            {/* Горизонтальные пунктиры к оси ординат */}
            <line x1="240.7" y1="79" x2="130" y2="79" />
            <line x1="208.5" y1="89" x2="130" y2="89" />
            <line x1="365.6" y1="216" x2="130" y2="216" />
          </g>

          {/* Подписи координат на осях */}
          <text x="193" y="296" fill="#000000" className="dark:fill-slate-300 font-serif text-[11px]">π/4</text>
          <text x="232" y="296" fill="#000000" className="dark:fill-slate-300 font-serif text-[11px]">x₀</text>
          <text x="350" y="296" fill="#000000" className="dark:fill-slate-300 font-serif text-[11px]">3π/4</text>

          <text x="100" y="83" fill="#000000" className="dark:fill-slate-300 font-serif text-[11px]">√5</text>
          <text x="85" y="93" fill="#000000" className="dark:fill-slate-300 font-serif text-[11px]">3√2/2</text>
          <text x="94" y="220" fill="#000000" className="dark:fill-slate-300 font-serif text-[11px]">√2/2</text>

          {/* Горизонтальные сканирующие прямые y = a (красный пунктир) */}
          <g stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 4">
            {/* a = sqrt(5) — Изолированное касание вершины */}
            <line x1="80" y1="79" x2="420" y2="79" />
            <text x="426" y="83" fill="#dc2626" stroke="none" className="font-serif italic text-[11px]">a = √5 (1 р.)</text>

            {/* Пример линии из зоны одного решения (полуинтервал) */}
            <line x1="80" y1="170" x2="420" y2="170" />
            <text x="426" y="174" fill="#dc2626" stroke="none" className="font-serif italic text-[11px]">a ∈ полуинт. (1 р.)</text>
          </g>

          {/* Чёрные маркерные узловые точки на графике */}
          <circle cx="208.5" cy="89" r="3" fill="#000000" />
          <circle cx="240.7" cy="79" r="3" fill="#000000" />
          <circle cx="365.6" cy="216" r="3" fill="#000000" />
        </svg>
      </div>


      <p>Объединяя изолированную точку максимума и найденный полуинтервал, получаем итоговый результат.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left[\\frac{\\sqrt{2}}{2}; \\frac{3\\sqrt{2}}{2}\\right) \\cup \\{\\sqrt{5}\\}`} />
      </div>
    </div>
  )
},


{
  id: 30,
  title: 'Задача 30 (ЕГЭ 2024, пересдача ДВ)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} |4x| + |3y| = 12a, \\\\ x^2 + y^2 + 10y = 0 \\end{cases}',
  textAfter: <span>имеет ровно два различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Преобразуем второе уравнение системы, выделив полный квадрат относительно переменной <InlineMath math={`y`} />:
      </p>
      <BlockMath math={`x^2 + (y^2 + 10y + 25) - 25 = 0 \\implies x^2 + (y + 5)^2 = 25.`} />
      <p>
        Данное уравнение задаёт окружность с центром в точке <InlineMath math={`M(0; -5)`} /> и радиусом <InlineMath math={`R = 5`} />. Окружность касается оси абсцисс в начале координат <InlineMath math={`(0; 0)`} /> и целиком расположена в нижней полуплоскости <InlineMath math={`y \\leq 0`} />.
      </p>
      
      <p>
        Рассмотрим первое уравнение системы при условии <InlineMath math={`a > 0`} /> (случай <InlineMath math={`a < 0`} /> невозможен, так как сумма модулей неотрицательна; при <InlineMath math={`a = 0`} /> ромб схлопывается в точку <InlineMath math={`(0; 0)`} />, лежащую на окружности, что даёт 1 решение).
      </p>
      <p>
        Уравнение задаёт семейство ромбов с центром в начале координат <InlineMath math={`(0; 0)`} /> и вершинами на осях: <InlineMath math={`(\\pm 3a; 0)`} /> и <InlineMath math={`(0; \\pm 4a)`} />.
      </p>
      <p>
        Так как окружность расположена в полуплоскости <InlineMath math={`y \\leq 0`} />, точки пересечения могут возникать только с нижними сторонами ромба. Уравнение прямой, содержащей правую нижнюю сторону ромба (при <InlineMath math={`x \\geq 0, y \\leq 0`} />), имеет вид:
      </p>
      <BlockMath math={`4x - 3y = 12a \\implies 4x - 3y - 12a = 0.`} />

      <p>Изобразим графическую ситуацию на координатной плоскости <InlineMath math={`xOy`} />:</p>

      {/* Высокоточный и наглядный SVG-график Задачи 30 (max-w-[450px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 500 500" className="w-full max-w-[450px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Координатная сетка */}
          <g stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" className="dark:stroke-slate-800">
            <line x1="50" y1="410" x2="450" y2="410" />
            <line x1="50" y1="90" x2="450" y2="90" />
          </g>

          {/* Координатные оси (Начало (0,0) зафиксировано на x=250, y=250. Масштаб: 1 ед = 16px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="50" y1="250" x2="450" y2="250" /> {/* Ось Ox */}
            <line x1="250" y1="30" x2="250" y2="470" />  {/* Ось Oy */}
          </g>
          <path d="M 450,250 L 442,246 M 450,250 L 442,254" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 250,30 L 246,38 M 250,30 L 254,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="462" y="254" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="244" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="236" y="264" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Идеальная синяя окружность. Центр M(0, -5) -> (250, 250 + 5*16 = 330), R=5*16=80 */}
          <circle cx="250" cy="330" r="80" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <circle cx="250" cy="330" r="3.5" fill="#000000" /> {/* Точка центра M */}
          <text x="260" y="334" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">M(0; -5)</text>
          <text x="256" y="422" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">(0; -10)</text>

          {/* Семейство ромбов */}
          {/* 1) Серый пунктирный ромб при a = 2.5. Вершины: x = +-3*2.5 = +-7.5 -> 250 +- 120 = 130 / 370. y = +-4*2.5 = +-10 -> 250 +- 160 = 90 / 410 */}
          <path d="M 130,250 L 250,90 L 370,250 L 250,410 Z" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="144" y="180" fill="#94a3b8" className="font-serif italic text-[11px]">a = 2,5</text>

          {/* 2) Красный сплошной ромб касания при a = 10/3 ~= 3.33. Вершины: x = +-10 -> 250 +- 160 = 90 / 410. y = +-13.33 -> 250 +- 213.3 = 36.7 / 463.3 */}
          <path d="M 90,250 L 250,36.7 L 410,250 L 250,463.3 Z" fill="none" stroke="#dc2626" strokeWidth="1.8" />
          <text x="325" y="160" fill="#dc2626" stroke="none" className="font-serif italic text-[11px]">a = 10/3 (касание)</text>

          {/* Чёрные маркерные узловые точки пересечений на осях */}
          <circle cx="250" cy="250" r="3.5" fill="#000000" />   {/* (0;0) */}
          <circle cx="250" cy="410" r="3.5" fill="#000000" />   {/* (0;-10) */}
        </svg>
      </div>

      <p>
        Нижние стороны ромба касаются окружности, если расстояние от центра <InlineMath math={`M(0; -5)`} /> до этих прямых равно радиусу <InlineMath math={`R = 5`} />:
      </p>
      <BlockMath math={`\\frac{|4(0) - 3(-5) - 12a|}{\\sqrt{4^2 + (-3)^2}} = 5 \\implies \\frac{|15 - 12a|}{5} = 5 \\implies |15 - 12a| = 25.`} />
      
      <p>Учитывая условие <InlineMath math={`a > 0`} />, раскрываем модуль с противоположным знаком:</p>
      <BlockMath math={`15 - 12a = -25 \\implies 12a = 40 \\implies a = \\frac{10}{3}.`} />
      <p>
        При <InlineMath math={`a = \\frac{10}{3}`} /> нижние боковые стороны ромба касаются окружности в двух симметричных точках.
      </p>
      
      <p>
        Найдем значение параметра, при котором нижняя вершина ромба <InlineMath math={`(0; -4a)`} /> проходит через самую нижнюю точку окружности <InlineMath math={`(0; -10)`} />:
      </p>
      <BlockMath math={`-4a = -10 \\implies a = \\frac{5}{2} = 2{,}5.`} />

      <p>Проанализируем количество решений системы при изменении параметра <InlineMath math={`a > 0`} />:</p>
      <ul className="list-bullet pl-5 space-y-2">
        <li>
          <b>1.</b> При <InlineMath math={`a \\in \\left(0; \\frac{5}{2}\\right)`} /> ромб маленький, его нижняя вершина находится выше точки <InlineMath math={`(0; -10)`} />. Нижние боковые стороны ромба пересекают окружность ровно в двух точках. Имеем <b>ровно 2 решения</b>.
        </li>
        <li>
          <b>2.</b> При <InlineMath math={`a = \\frac{5}{2}`} /> нижняя вершина ромба касается окружности в точке <InlineMath math={`(0; -10)`} />, а боковые стороны пересекают её ещё в двух точках. Имеем 3 решения.
        </li>
        <li>
          <b>3.</b> При <InlineMath math={`a \\in \\left(\\frac{5}{2}; \\frac{10}{3}\\right)`} /> ромб пересекает окружность в четырёх точках. Имеем 4 решения.
        </li>
        <li>
          <b>4.</b> При <InlineMath math={`a = \\frac{10}{3}`} /> нижние боковые стороны ромба касаются окружности. Имеем <b>ровно 2 решения</b>.
        </li>
        <li>
          <b>5.</b> При <InlineMath math={`a > \\frac{10}{3}`} /> ромб становится слишком большим и не имеет общих точек с окружностью. Решений нет.
        </li>
      </ul>
      
      <p>Таким образом, ровно два различных решения исходная система имеет на открытом интервале и в изолированной точке касания.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(0; \\frac{5}{2}\\right) \\cup \\left\\{\\frac{10}{3}\\right\\}`} />
      </div>
    </div>
  )
},


{
  id: 31,
  title: 'Задача 31 (ЕГЭ 2024, основная волна)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '\\sqrt{x - a} \\sin x = -\\sqrt{x - a} \\cos x',
  textAfter: <span>имеет ровно одно решение на отрезке <InlineMath math={"[0; \\pi]."} /></span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Найдем область допустимых значений (ОДЗ) уравнения, определяемую подкоренным выражением:
      </p>
      <BlockMath math={`x - a \\geq 0 \\iff x \\geq a.`} />
      <p>
        Нас интересуют корни, принадлежащие отрезку <InlineMath math={`[0; \\pi]`} />. С учётом ОДЗ рабочий промежуток для поиска решений принимает вид: <InlineMath math={`x \\in [a; \\pi]`} /> при <InlineMath math={`a \\leq \\pi`} />. Если <InlineMath math={`a > \\pi`} />, рабочий промежуток пуст, решений нет.
      </p>
      
      <p>Перенесем все слагаемые в левую часть и вынесем общий множитель за скобки:</p>
      <BlockMath math={`\\sqrt{x - a} \\sin x + \\sqrt{x - a} \\cos x = 0 \\implies \\sqrt{x - a}(\\sin x + \\cos x) = 0.`} />
      
      <p>Данная группа распадается на две независимые серии потенциальных корней:</p>
      <p>
        <b>1)</b> <InlineMath math={`\\sqrt{x - a} = 0 \\implies x_1 = a`} />. Этот корень существует всегда при условии, что он попадает в рассматриваемый отрезок <InlineMath math={`[0; \\pi]`} />, то есть при <InlineMath math={`a \\in [0; \\pi]`} />.
      </p>
      <p>
        <b>2)</b> <InlineMath math={`\\sin x + \\cos x = 0 \\implies \\tan x = -1`} />. Получаем корень <InlineMath math={`x_2 = \\frac{3\\pi}{4}`} />. Он всегда принадлежит отрезку <InlineMath math={`[0; \\pi]`} /> и существует, если удовлетворяет ОДЗ:
      </p>
      <BlockMath math={`x_2 \\geq a \\iff \\frac{3\\pi}{4} \\geq a \\iff a \\in \\left(-\\infty; \\frac{3\\pi}{4}\\right].`} />
      
      <p>Определим значение параметра, при котором серии корней совпадают (склеиваются):</p>
      <BlockMath math={`x_1 = x_2 \\implies a = \\frac{3\\pi}{4}.`} />
      <p>В этой точке вместо двух корней мы получаем ровно один корень.</p>

      <p>Проанализируем количество решений уравнения на отрезке <InlineMath math={`[0; \\pi]`} /> при различных значениях параметра <InlineMath math={`a`} />:</p>
      <ul className="list-bullet pl-5 space-y-2">
        <li>
          <b>1.</b> При <InlineMath math={`a < 0`} /> корень <InlineMath math={`x_1 = a`} /> лежит левее отрезка и не рассматривается. Существует только корень <InlineMath math={`x_2 = \\frac{3\\pi}{4}`} />. Имеем <b>ровно 1 решение</b>.
        </li>
        <li>
          <b>2.</b> При <InlineMath math={`a \\in \\left[0; \\frac{3\\pi}{4}\\right)`} /> на отрезке существуют оба корня <InlineMath math={`x_1 = a`} /> и <InlineMath math={`x_2 = \\frac{3\\pi}{4}`} />, причём они различны. Имеем 2 решения.
        </li>
        <li>
          <b>3.</b> При <InlineMath math={`a = \\frac{3\\pi}{4}`} /> корни совпадают (<InlineMath math={`x_1 = x_2 = \\frac{3\\pi}{4}`} />). Имеем <b>ровно 1 решение</b>.
        </li>
        <li>
          <b>4.</b> При <InlineMath math={`a \\in \\left(\\frac{3\\pi}{4}; \\pi\\right]`} /> корень <InlineMath math={`x_2 = \\frac{3\\pi}{4}`} /> больше не удовлетворяет ОДЗ (<InlineMath math={`x_2 < a`} />) и исчезает. На отрезке остается только корень <InlineMath math={`x_1 = a`} />. Имеем <b>ровно 1 решение</b>.
        </li>
        <li>
          <b>5.</b> При <InlineMath math={`a > \\pi`} /> рабочий промежуток пуст. Решений нет.
        </li>
      </ul>

      <p>Изобразим многоярусную схему отбора на числовой прямой параметра <InlineMath math={`a`} />:</p>

      {/* Высокоточный и наглядный SVG-график Задачи 31 (max-w-[400px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 460 160" className="w-full max-w-[400px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Паттерн для штриховки областей "ровно 1 решение" */}
          <defs>
            <pattern id="hatch-red" width="5" height="5" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="5" stroke="#fca5a5" strokeWidth="1" className="dark:stroke-rose-950/40" />
            </pattern>
          </defs>

          {/* Прямоугольники зон со штриховкой ответа (ровно 1 решение) */}
          <rect x="40" y="80" width="100" height="20" fill="url(#hatch-red)" />
          <rect x="230" y="80" width="110" height="20" fill="url(#hatch-red)" />

          {/* Главная ось параметра a */}
          <line x1="30" y1="90" x2="420" y2="90" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <path d="M 420,90 L 412,86 M 420,90 L 412,94" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="430" y="94" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* Ярус 1: существует x1 (от 0 до pi) */}
          {/* x=0 -> 140, x=pi -> 340 */}
          <path d="M 140,90 L 140,30 L 340,30 L 340,90" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <text x="210" y="24" fill="#2563eb" className="font-sans text-[11px] font-normal">существует x₁</text>

          {/* Ярус 2: существует x2 (от -inf до 3pi/4) */}
          {/* x=3pi/4 -> 290 */}
          <path d="M 40,55 L 290,55 L 290,90" fill="none" stroke="#16a34a" strokeWidth="1.5" />
          <text x="135" y="48" fill="#16a34a" className="font-sans text-[11px] font-normal">существует x₂</text>

          {/* Красные маркерные линии выделения итогового ответа на оси */}
          <line x1="40" y1="90" x2="140" y2="90" stroke="#dc2626" strokeWidth="2" />
          <line x1="290" y1="90" x2="340" y2="90" stroke="#dc2626" strokeWidth="2" />

          {/* Метки координат на оси */}
          <text x="136" y="112" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">0</text>
          <text x="278" y="112" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">3π/4</text>
          <text x="336" y="112" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">π</text>

          {/* Точки стыков и границ */}
          {/* Закрашенные точки 0, 3pi/4, pi */}
          <circle cx="140" cy="90" r="3.5" fill="#000000" className="dark:fill-slate-400" />
          <circle cx="290" cy="90" r="3.5" fill="#000000" className="dark:fill-slate-400" />
          <circle cx="340" cy="90" r="3.5" fill="#000000" className="dark:fill-slate-400" />
        </svg>
      </div>

      <p>Из геометрической схемы получаем итоговые промежутки для параметра <InlineMath math={`a`} />.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; 0) \\cup \\left[\\frac{3\\pi}{4}; \\pi\\right]`} />
      </div>
    </div>
  )
},


{
  id: 32,
  title: 'Задача 32 (ЕГЭ 2023, резервная волна)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '\\sqrt{x^2 + 6x + 8} = \\sqrt{a - 3x}',
  textAfter: <span>имеет корни (хотя бы один), ровно один из которых отрицательный.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Перейдем к равносильной системе, возведя уравнение в квадрат и зафиксировав ОДЗ через более простое подкоренное выражение:
      </p>
      <BlockMath math={`\\begin{cases} x^2 + 6x + 8 = a - 3x, \\\\ x^2 + 6x + 8 \\geq 0 \\end{cases} \\iff \\begin{cases} a = x^2 + 9x + 8, \\\\ (x + 2)(x + 4) \\geq 0. \\end{cases}`} />
      
      <p>
        Решением неравенства ОДЗ является множество <InlineMath math={`x \\in (-\\infty; -4] \\cup [-2; +\\infty)`} />. Внутри полосы <InlineMath math={`x \\in (-4; -2)`} /> график функции параметра отсутствует. Дополнительно по условию задачи нас интересуют только отрицательные корни исходного уравнения (<InlineMath math={`x < 0`} />).
      </p>
      
      <p>
        Решим задачу графически в координатах <InlineMath math={`xOa`} />, где <InlineMath math={`a = x^2 + 9x + 8`} /> является параболой, ограниченной рабочими промежутками ОДЗ и условием отрицательности корней.
      </p>
      
      <p>Найдем координаты ключевых точек параболы для разметки графика:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Вершина параболы: <InlineMath math={`x_0 = -4{,}5`} />; <InlineMath math={`a_0 = (-4{,}5)^2 + 9(-4{,}5) + 8 = -12{,}25`} /> (точка <InlineMath math={`V`} />, непрерывна).</li>
        <li>Граничная точка слева: при <InlineMath math={`x = -4`} /> получаем <InlineMath math={`a = (-4 + 1)(-4 + 8) = -12`} /> (точка <InlineMath math={`C(-4; -12)`} />, закрашена).</li>
        <li>Граничная точка справа: при <InlineMath math={`x = -2`} /> получаем <InlineMath math={`a = (-2 + 1)(-2 + 8) = -6`} /> (точка <InlineMath math={`B(-2; -6)`} />, закрашена).</li>
        <li>Правая граница отрицательности: при <InlineMath math={`x = 0`} /> получаем <InlineMath math={`a = 8`} /> (точка <InlineMath math={`A(0; 8)`} />, строго выколотая).</li>
      </ul>

      <p>Изобразим графическую ситуацию на координатной плоскости <InlineMath math={`xOa`} />:</p>

      {/* Высокоточный SVG-график Задачи 32 с разрывом ОДЗ (max-w-[380px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 400 520" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Серая полоса запрещенной зоны ОДЗ x in (-4, -2) */}
          {/* Масштаб: x=0 на 260, 1 ед_x = 40px -> x=-4 это 100, x=-2 это 180. y=0 на 200, 1 ед_y = 18px */}
          <rect x="100" y="30" width="80" height="460" fill="#f1f5f9" className="dark:fill-slate-900" opacity="0.9" />
          <line x1="100" y1="30" x2="100" y2="490" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-slate-800" />
          <line x1="180" y1="30" x2="180" y2="490" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-slate-800" />

          {/* Координатные оси */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="30" y1="200" x2="360" y2="200" /> {/* Ось Ox */}
            <line x1="260" y1="20" x2="260" y2="500" />  {/* Ось Oa */}
          </g>
          <path d="M 360,200 L 352,196 M 360,200 L 352,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 260,20 L 256,28 M 260,20 L 264,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="372" y="204" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="246" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="246" y="214" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Синие ветви разрешенной ОДЗ параболы a = x^2 + 9x + 8 */}
          {/* Левое крыло: x <= -4. Вершина в (-4.5; -12.25) -> (80, 200 + 12.25*18 = 420.5). Точка C(-4; -12) -> (100, 200 + 12*18 = 416) */}
          <path d="M 40,310 Q 60,420.5 80,420.5 Q 90,420.5 100,416" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Правое крыло: x >= -2. Точка B(-2; -6) -> (180, 200 + 6*18 = 308). Точка A(0; 8) -> (260, 200 - 8*18 = 56) */}
          <path d="M 180,308 Q 220,182 260,56 M 260,56 L 264,42" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Горизонтальные сканирующие прямые уровня параметров (красный пунктир) */}
          <g stroke="#dc2626" strokeWidth="1.1" strokeDasharray="4 4">
            {/* a = 8 */}
            <line x1="40" y1="56" x2="330" y2="56" />
            <text x="336" y="60" fill="#dc2626" stroke="none" className="font-sans text-[11px]">a = 8</text>

            {/* a = -6 */}
            <line x1="40" y1="308" x2="330" y2="308" />
            <text x="336" y="312" fill="#dc2626" stroke="none" className="font-sans text-[11px]">a = -6</text>

            {/* a = -12 */}
            <line x1="40" y1="416" x2="330" y2="416" />
            <text x="336" y="420" fill="#dc2626" stroke="none" className="font-sans text-[11px]">a = -12</text>

            {/* a = -12.25 */}
            <line x1="40" y1="420.5" x2="330" y2="420.5" />
            <text x="376" y="424" fill="#dc2626" stroke="none" className="font-sans text-[11px]">a = -12,25</text>
          </g>

          {/* Метки координат ОДЗ по оси Ox */}
          <text x="92" y="214" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">-4</text>
          <text x="172" y="214" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">-2</text>

          {/* Маркерные точки */}
          <circle cx="100" cy="416" r="3.5" fill="#000000" /> {/* Точка C, закрашена */}
          <text x="106" y="414" fill="#000000" className="dark:fill-slate-300 font-sans text-[10px]">C</text>
          
          <circle cx="180" cy="308" r="3.5" fill="#000000" /> {/* Точка B, закрашена */}
          <text x="186" y="304" fill="#000000" className="dark:fill-slate-300 font-sans text-[10px]">B</text>

          <circle cx="80" cy="420.5" r="3.5" fill="#000000" /> {/* Вершина V */}
          <text x="66" y="434" fill="#000000" className="dark:fill-slate-300 font-sans text-[10px]">V</text>

          {/* Строго ВЫКОЛОТАЯ точка A(0, 8) */}
          <circle cx="260" cy="56" r="3.5" fill="white" stroke="#000000" strokeWidth="1.2" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />
          <text x="268" y="60" fill="#000000" className="dark:fill-slate-300 font-sans text-[10px]">A(0; 8)</text>
        </svg>
      </div>

      <p>Проанализируем количество точек пересечения графика с горизонтальной сканирующей прямой при различных уровнях параметра <InlineMath math={`a`} /> (двигаясь снизу вверх):</p>
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>При <InlineMath math={`a < -12{,}25`} />: пересечений нет (0 отрицательных корней).</li>
        <li>При <InlineMath math={`a = -12{,}25`} />: прямая касается параболы в её вершине <InlineMath math={`V`} />. Имеем <b>ровно 1 отрицательный корень</b>.</li>
        <li>При <InlineMath math={`a \\in (-12{,}25; -12)`} />: прямая дважды пересекает левую ветвь параболы. Имеем 2 корня.</li>
        <li>При <InlineMath math={`a = -12`} />: прямая проходит через точку <InlineMath math={`C(-4; -12)`} /> и пересекает левое крыло левее вершины. Имеем ровно 2 корня.</li>
        <li>При <InlineMath math={`a \\in (-12; -6)`} />: левая ветвь даёт только 1 точку пересечения, а на правом участке параболы графика нет. Имеем <b>ровно 1 отрицательный корень</b>.</li>
        <li>При <InlineMath math={`a = -6`} />: прямая проходит через точку <InlineMath math={`B(-2; -6)`} /> и пересекает левое крыло. Имеем ровно 2 корня.</li>
        <li>При <InlineMath math={`a \\in (-6; 8)`} />: прямая пересекает левое крыло параболы (при <InlineMath math={`x < -4`} />) и правое крыло параболы (при <InlineMath math={`x \\in (-2; 0)`} />). Имеем 2 корня.</li>
        <li>При <InlineMath math={`a = 8`} />: прямая проходит через выколотую точку <InlineMath math={`A(0; 8)`} />, пересечение справа исчезает, остаётся только 1 точка пересечения на левом крыле. Имеем <b>ровно 1 отрицательный корень</b>.</li>
        <li>При <InlineMath math={`a > 8`} />: правое крыло вышло из зоны отрицательных <InlineMath math={`x`} />, прямая пересекает только левое крыло параболы. Имеем <b>ровно 1 отрицательный корень</b>.</li>
      </ul>
      
      <p>
        Условие задачи (ровно один отрицательный корень) выполняется в изолированной точке касания вершины, на полуинтервале от точки <InlineMath math={`C`} /> до точки <InlineMath math={`B`} />, а также при всех значениях параметра начиная от выколотой точки <InlineMath math={`A`} /> и выше.
      </p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{-12{,}25\\} \\cup (-12; -6) \\cup [8; +\\infty)`} />
      </div>
    </div>
  )
},

{
  id: 33,
  title: 'Задача 33 (ЕГЭ 2023, резервный день)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: 'x\\sqrt{x - a} = \\sqrt{6x^2 - (6a + 3)x + 3a}',
  textAfter: <span>имеет ровно один корень на отрезке <InlineMath math={"[0; 1]."} /></span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Разложим квадратный трёхчлен под радикалом в правой части уравнения на множители. Для этого найдем его корни относительно переменной <InlineMath math={`x`} />:
      </p>
      <BlockMath math={`6x^2 - (6a + 3)x + 3a = 0.`} />
      
      <p>Дискриминант этого уравнения равен:</p>
      <BlockMath math={`D = (6a + 3)^2 - 4 \\cdot 6 \\cdot 3a = 36a^2 + 36a + 9 - 72a = 36a^2 - 36a + 9 = (6a - 3)^2.`} />
      
      <p>Тогда корни равны:</p>
      <BlockMath math={`x = \\frac{6a + 3 \\pm (6a - 3)}{12} \\implies x_1 = a, \\quad x_2 = \\frac{6}{12} = \\frac{1}{2}.`} />
      
      <p>
        Таким образом, правая часть исходного уравнения принимает вид <InlineMath math={`\\sqrt{6(x - a)\\left(x - \\frac{1}{2}\\right)}`} />. Перепишем уравнение:
      </p>
      <BlockMath math={`x\\sqrt{x - a} = \\sqrt{6(x - a)\\left(x - \\frac{1}{2}\\right)}.`} />
      
      <p>Перейдем к равносильной системе. Уравнение имеет смысл при выполнении ОДЗ: <InlineMath math={`x - a \\geq 0 \\iff x \\geq a`} />. При этом условии возведем обе части уравнения в квадрат:</p>
      <BlockMath math={`\\begin{cases} x \\geq a, \\\\ x^2(x - a) = 6(x - a)\\left(x - \\frac{1}{2}\\right) \\end{cases} \\iff \\begin{cases} x \\geq a, \\\\ (x - a)(x^2 - 6x + 3) = 0. \\end{cases}`} />
      
      <p>Равенство нулю произведения дает две независимые серии корней:</p>
      <p>
        <b>1)</b> <InlineMath math={`x - a = 0 \\implies x_1 = a`} />. Этот корень автоматически удовлетворяет условию <InlineMath math={`x \\geq a`} />. Чтобы он подходил под условие задачи, он должен принадлежать отрезку <InlineMath math={`[0; 1]`} />, то есть:
      </p>
      <BlockMath math={`a \\in [0; 1].`} />
      
      <p>
        <b>2)</b> <InlineMath math={`x^2 - 6x + 3 = 0`} />. Корни этого квадратного уравнения равны:
      </p>
      <BlockMath math={`x = 3 \\pm \\sqrt{9 - 3} \\implies x_2 = 3 - \\sqrt{6}, \\quad x_3 = 3 + \\sqrt{6}.`} />
      
      <p>
        Так как <InlineMath math={`2 < \\sqrt{6} < 2{,}5`} />, то корень <InlineMath math={`x_3 = 3 + \\sqrt{6} > 5`} /> заведомо не принадлежит отрезку <InlineMath math={`[0; 1]`} />. Корень же <InlineMath math={`x_2 = 3 - \\sqrt{6}`} /> попадает на отрезок <InlineMath math={`[0; 1]`} />, поскольку <InlineMath math={`0{,}5 < 3 - \\sqrt{6} < 1`} />. Чтобы корень <InlineMath math={`x_2`} /> существовал, он должен удовлетворять условию <InlineMath math={`x \\geq a`} />:
      </p>
      <BlockMath math={`3 - \\sqrt{6} \\geq a \\iff a \\in (-\\infty; 3 - \\sqrt{6}].`} />
      
      <p>Определим значение параметра, при котором серии корней <InlineMath math={`x_1`} /> и <InlineMath math={`x_2`} /> совпадают (склеиваются):</p>
      <BlockMath math={`x_1 = x_2 \\implies a = 3 - \\sqrt{6}.`} />
      <p>В этой точке вместо двух различных корней мы получаем один уникальный корень.</p>

      <p>Проанализируем количество решений исходного уравнения на отрезке <InlineMath math={`[0; 1]`} /> при различных значениях параметра <InlineMath math={`a`} />:</p>
      <ul className="list-bullet pl-5 space-y-2">
        <li>
          <b>1.</b> При <InlineMath math={`a < 0`} /> корень <InlineMath math={`x_1 = a`} /> лежит левее отрезка и не рассматривается. Корень <InlineMath math={`x_2 = 3 - \\sqrt{6}`} /> удовлетворяет условию <InlineMath math={`a \\leq 3 - \\sqrt{6}`} /> и существует. Имеем <b>ровно 1 решение</b>.
        </li>
        <li>
          <b>2.</b> При <InlineMath math={`a \\in [0; 3 - \\sqrt{6})`} /> на отрезке существуют оба корня <InlineMath math={`x_1 = a`} /> и <InlineMath math={`x_2 = 3 - \\sqrt{6}`} />, причём они различны. Имеем 2 решения.
        </li>
        <li>
          <b>3.</b> При <InlineMath math={`a = 3 - \\sqrt{6}`} /> корни совпадают (<InlineMath math={`x_1 = x_2 = 3 - \\sqrt{6}`} />). Имеем <b>ровно 1 решение</b>.
        </li>
        <li>
          <b>4.</b> При <InlineMath math={`a \\in (3 - \\sqrt{6}; 1]`} /> корень <InlineMath math={`x_2 = 3 - \\sqrt{6}`} /> больше не удовлетворяет условию существования (<InlineMath math={`x_2 < a`} />) и исчезает. На отрезке остается только корень <InlineMath math={`x_1 = a`} />. Имеем <b>ровно 1 решение</b>.
        </li>
        <li>
          <b>5.</b> При <InlineMath math={`a > 1`} /> корень <InlineMath math={`x_1 = a`} /> уходит правее отрезка <InlineMath math={`[0; 1]`} />, а корень <InlineMath math={`x_2`} /> не существует. Решений нет.
        </li>
      </ul>

      <p>Изобразим многоярусную схему существования и отбора корней на числовой прямой параметра <InlineMath math={`a`} />:</p>

      {/* Высокоточный и чистый SVG-график Задачи 33 (max-w-[400px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 460 160" className="w-full max-w-[400px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Паттерн для штриховки областей "ровно 1 решение" */}
          <defs>
            <pattern id="hatch-red-33" width="5" height="5" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="5" stroke="#fca5a5" strokeWidth="1" className="dark:stroke-rose-950/40" />
            </pattern>
          </defs>

          {/* Прямоугольники зон со штриховкой ответа */}
          <rect x="40" y="80" width="100" height="20" fill="url(#hatch-red-33)" />
          <rect x="210" y="80" width="80" height="20" fill="url(#hatch-red-33)" />

          {/* Главная ось параметра a */}
          <line x1="30" y1="90" x2="420" y2="90" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <path d="M 420,90 L 412,86 M 420,90 L 412,94" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="430" y="94" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* Ярус 1: существует x1 (от 0 до 1) */}
          {/* x=0 -> 140, x=1 -> 290 */}
          <path d="M 140,90 L 140,30 L 290,30 L 290,90" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <text x="180" y="24" fill="#2563eb" className="font-sans text-[11px] font-normal">существует x₁</text>

          {/* Ярус 2: существует x2 (от -inf до 3 - sqrt(6)) */}
          {/* x = 3 - sqrt(6) ~= 0.55 -> 140 + 0.55*150 = 222.5 */}
          <path d="M 40,55 L 222.5,55 L 222.5,90" fill="none" stroke="#16a34a" strokeWidth="1.5" />
          <text x="105" y="48" fill="#16a34a" className="font-sans text-[11px] font-normal">существует x₂</text>

          {/* Маркерные линии выделения итогового ответа на оси */}
          <line x1="40" y1="90" x2="140" y2="90" stroke="#dc2626" strokeWidth="2" />
          <line x1="222.5" y1="90" x2="290" y2="90" stroke="#dc2626" strokeWidth="2" />

          {/* Метки координат на оси */}
          <text x="136" y="112" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">0</text>
          <text x="200" y="112" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">3 - √6</text>
          <text x="286" y="112" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Точки стыков и границ на оси */}
          <circle cx="140" cy="90" r="3.5" fill="#000000" className="dark:fill-slate-400" />
          <circle cx="222.5" cy="90" r="3.5" fill="#000000" className="dark:fill-slate-400" />
          <circle cx="290" cy="90" r="3.5" fill="#000000" className="dark:fill-slate-400" />
        </svg>
      </div>

      <p>Из геометрической схемы получаем итоговые промежутки для параметра <InlineMath math={`a`} />.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; 0) \\cup [3 - \\sqrt{6}; 1]`} />
      </div>
    </div>
  )
},


{
  id: 34,
  title: 'Задача 34 (СтатГрад)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '(2x - x^2)^2 - 4\\sqrt{2x - x^2} = a^2 - 4a',
  textAfter: <span>имеет хотя бы один корень.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Пусть <InlineMath math={`t = \\sqrt{2x - x^2}`} />, где по определению квадратного корня <InlineMath math={`t \\geq 0`} />.</p>
      
      <p>
        Выясним точные границы изменения переменной <InlineMath math={`t`} />. Подкоренное выражение представляет собой квадратичную функцию <InlineMath math={`y(x) = 2x - x^2`} />, график которой — парабола, ветви которой направлены вниз. Вершина параболы находится в точке <InlineMath math={`x_0 = -\\frac{2}{2 \\cdot (-1)} = 1`} />, а её максимальное значение равно:
      </p>
      <BlockMath math={`y(1) = 2(1) - 1^2 = 1.`} />
      
      <p>
        Следовательно, для существования действительных значений <InlineMath math={`x`} /> подкоренное выражение должно удовлетворять ОДЗ:
      </p>
      <BlockMath math={`0 \\leq 2x - x^2 \\leq 1 \\implies 0 \\leq \\sqrt{2x - x^2} \\leq 1.`} />
      <p>Таким образом, область значений новой переменной: <InlineMath math={`t \\in [0; 1]`} />.</p>
      
      <p>
        Выразим левую часть исходного уравнения через <InlineMath math={`t`} />. Поскольку <InlineMath math={`(2x - x^2)^2 = (t^2)^2 = t^4`} />, исходное уравнение принимает вид:
      </p>
      <BlockMath math={`t^4 - 4t = a^2 - 4a.`} />
      <p>
        Оно имеет хотя бы один корень <InlineMath math={`x`} /> тогда и только тогда, когда полученное уравнение относительно <InlineMath math={`t`} /> имеет хотя бы один корень на отрезке <InlineMath math={`[0; 1]`} />.
      </p>
      
      <p>
        Рассмотрим функцию в левой части: <InlineMath math={`f(t) = t^4 - 4t`} />. Исследуем её поведение на промежутке <InlineMath math={`[0; 1]`} /> с помощью производной:
      </p>
      <BlockMath math={`f'(t) = 4t^3 - 4 = 4(t^3 - 1).`} />
      <p>
        Для любого <InlineMath math={`t \\in [0; 1)`} /> выполнено условие <InlineMath math={`t^3 < 1`} />, откуда <InlineMath math={`f'(t) < 0`} bitumen />. Это означает, что функция <InlineMath math={`f(t)`} /> строго убывает на всем отрезке <InlineMath math={`[0; 1]`} />.
      </p>
      
      <p>Найдем значения функции на границах этого отрезка:</p>
      <BlockMath math={`f(0) = 0^4 - 4 \\cdot 0 = 0,`} />
      <BlockMath math={`f(1) = 1^4 - 4 \\cdot 1 = -3.`} />
      
      <p>
        Так как функция непрерывна и строго убывает, областью её значений на отрезке <InlineMath math={`[0; 1]`} /> является отрезок <InlineMath math={`[-3; 0]`} />.
      </p>
      <p>
        Таким образом, уравнение <InlineMath math={`f(t) = a^2 - 4a`} /> имеет решения тогда и только тогда, когда правая часть попадает в область значений левой части:
      </p>
      <BlockMath math={`-3 \\leq a^2 - 4a \\leq 0.`} />
      
      <p>Решим полученную систему двойных неравенств:</p>
      <BlockMath math={`\\begin{cases} a^2 - 4a \\geq -3, \\\\ a^2 - 4a \\leq 0 \\end{cases} \\iff \\begin{cases} a^2 - 4a + 3 \\geq 0, \\\\ a(a - 4) \\leq 0 \\end{cases} \\iff \\begin{cases} (a - 1)(a - 3) \\geq 0, \\\\ a(a - 4) \\leq 0. \\end{cases}`} />
      
      <p>Изобразим решение системы на числовой прямой параметра <InlineMath math={`a`} />:</p>

      {/* Высокоточный и наглядный SVG-график Задачи 34 (max-w-[400px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 460 160" className="w-full max-w-[400px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Паттерн для штриховки пересечения множеств */}
          <defs>
            <pattern id="hatch-red-34" width="5" height="5" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="5" stroke="#fca5a5" strokeWidth="1" className="dark:stroke-rose-950/40" />
            </pattern>
          </defs>

          {/* Прямоугольники итогового ответа со штриховкой */}
          <rect x="100" y="90" width="40" height="20" fill="url(#hatch-red-34)" />
          <rect x="220" y="90" width="40" height="20" fill="url(#hatch-red-34)" />

          {/* Главная ось параметра a */}
          <line x1="30" y1="100" x2="420" y2="100" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <path d="M 420,100 L 412,96 M 420,100 L 412,104" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="430" y="104" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* Верхний зеленый ярус: 0 <= a <= 4 */}
          {/* x=0 -> 100, x=4 -> 260 */}
          <path d="M 100,100 L 100,30 L 260,30 L 260,100" fill="none" stroke="#16a34a" strokeWidth="1.5" />
          <text x="160" y="24" fill="#16a34a" className="font-sans text-[11px] font-normal">0 ≤ a ≤ 4</text>

          {/* Нижний синий ярус: a <= 1 и a >= 3 */}
          {/* x=1 -> 140, x=3 -> 220 */}
          <path d="M 40,60 L 140,60 L 140,100" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <text x="70" y="54" fill="#2563eb" className="font-sans text-[11px] font-normal">a ≤ 1</text>
          
          <path d="M 220,100 L 220,60 L 320,60" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <text x="250" y="54" fill="#2563eb" className="font-sans text-[11px] font-normal">a ≥ 3</text>

          {/* Яркие маркерные отрезки итогового пересечения на оси */}
          <line x1="100" y1="100" x2="140" y2="100" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="220" y1="100" x2="260" y2="100" stroke="#dc2626" strokeWidth="2.5" />

          {/* Метки координат на оси */}
          <text x="96" y="122" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">0</text>
          <text x="136" y="122" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <text x="216" y="122" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">3</text>
          <text x="256" y="122" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">4</text>

          {/* Все граничные точки закрашены */}
          <circle cx="100" cy="100" r="3.5" fill="#000000" className="dark:fill-slate-400" />
          <circle cx="140" cy="100" r="3.5" fill="#000000" className="dark:fill-slate-400" />
          <circle cx="220" cy="100" r="3.5" fill="#000000" className="dark:fill-slate-400" />
          <circle cx="260" cy="100" r="3.5" fill="#000000" className="dark:fill-slate-400" />
        </svg>
      </div>

      <p>Пересечением множеств решений является объединение отрезков <InlineMath math={`a \\in [0; 1] \\cup [3; 4]`} />.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in [0; 1] \\cup [3; 4]`} />
      </div>
    </div>
  )
},


{
  id: 35,
  title: 'Задача 35 (ЕГЭ, Демоверсия)',
  textBefore: 'Найдите все положительные значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} (|x| - 5)^2 + (y - 4)^2 = 9, \\\\ (x + 2)^2 + y^2 = a^2 \\end{cases}',
  textAfter: <span>имеет ровно одно решение.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Решим задачу геометрическим методом в координатной плоскости <InlineMath math={`xOy`} />.</p>
      <p>
        <b>1)</b> Первое уравнение системы задает две неподвижные окружности радиуса <InlineMath math={`R = 3`} />:
      </p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Окружность <InlineMath math={`\\omega_1`} /> с центром в точке <InlineMath math={`C_1(5; 4)`} /> при <InlineMath math={`x \\geq 0`} />.</li>
        <li>Окружность <InlineMath math={`\\omega_2`} /> с центром в точке <InlineMath math={`C_2(-5; 4)`} /> при <InlineMath math={`x < 0`} />.</li>
      </ul>
      
      <p>
        <b>2)</b> Второе уравнение при <InlineMath math={`a > 0`} /> задает подвижную окружность <InlineMath math={`\\omega_a`} /> радиуса <InlineMath math={`r = a`} /> с центром в точке <InlineMath math={`A(-2; 0)`} />. С увеличением параметра <InlineMath math={`a`} /> её радиус непрерывно растет.
      </p>
      <p>
        Система имеет ровно одно решение, когда окружность <InlineMath math={`\\omega_a`} /> касается ровно одной из окружностей <InlineMath math={`\\omega_1`} /> или <InlineMath math={`\\omega_2`} />, не пересекая при этом другую.
      </p>
      <p>Найдем точные расстояния от центра подвижной окружности <InlineMath math={`A(-2; 0)`} /> до центров <InlineMath math={`C_1`} /> и <InlineMath math={`C_2`} />:</p>
      <BlockMath math={`AC_2 = \\sqrt{(-5 - (-2))^2 + (4 - 0)^2} = \\sqrt{(-3)^2 + 4^2} = 5,`} />
      <BlockMath math={`AC_1 = \\sqrt{(5 - (-2))^2 + (4 - 0)^2} = \\sqrt{7^2 + 4^2} = \\sqrt{65}.`} />

            {/* Высокоточный и наглядный SVG-график Задачи 35 (max-w-[460px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 500 480" className="w-full max-w-[460px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Координатные оси (Начало (0,0) зафиксировано на x=250, y=260. Масштаб: 1 ед = 16px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="260" x2="460" y2="260" /> {/* Ось Ox */}
            <line x1="250" y1="30" x2="250" y2="450" />  {/* Ось Oy */}
          </g>
          <path d="M 460,260 L 442,256 M 460,260 L 442,284" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 250,30 L 246,38 M 250,30 L 254,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="472" y="264" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="244" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="236" y="274" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Неподвижные синие окружности R=3*16=48px */}
          {/* C1(5, 4) -> (250 + 5*16 = 330, 260 - 4*16 = 196) */}
          <circle cx="330" cy="196" r="48" fill="none" stroke="#2563eb" strokeWidth="2" />
          <circle cx="330" cy="196" r="3" fill="#2563eb" />
          <text x="324" y="185" fill="#2563eb" className="font-serif text-xs">C₁</text>

          {/* C2(-5, 4) -> (250 - 5*16 = 170, 260 - 4*16 = 196) */}
          <circle cx="170" cy="196" r="48" fill="none" stroke="#2563eb" strokeWidth="2" />
          <circle cx="170" cy="196" r="3" fill="#2563eb" />
          <text x="164" y="185" fill="#2563eb" className="font-serif text-xs">C₂</text>

          {/* Point of interest: центр подвижной окружности A(-2, 0) -> (250 - 2*16 = 218, 260) */}
          <circle cx="218" cy="260" r="3.5" fill="#000000" />
          <text x="214" y="276" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">A</text>

          {/* Подвижные красные окружности в моменты верных касаний */}
          {/* 1) Внешнее касание ближней окружности при a = 2 (r = 2*16 = 32px) */}
          <circle cx="218" cy="260" r="32" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="155" y="280" fill="#dc2626" stroke="none" className="font-serif italic text-[10px]">a = 2</text>

          {/* 2) Внутреннее касание дальней окружности при a = sqrt(65)+3 ~= 11.06 (r = 11.06*16 = 177px) */}
          <circle cx="218" cy="260" r="177" fill="none" stroke="#dc2626" strokeWidth="1.8" />
          <text x="325" y="415" fill="#dc2626" stroke="none" className="font-serif italic text-[10px]">a = √65 + 3</text>
        </svg>
      </div>


      <p>Поскольку центры окружностей фиксированы, ровно одно решение возможно только в моменты касания. Сформулируем строгие условия для каждого случая:</p>
      
      <p>
        <b>1. Внешнее касание с ближней окружностью <InlineMath math={`\\omega_2`} />:</b> достигается при <InlineMath math={`a = AC_2 - R = 5 - 3 = 2`} />.
      </p>
      <p>
        Для того чтобы при этом значении параметра отсутствовали точки пересечения с дальней окружностью <InlineMath math={`\\omega_1`} />, радиус <InlineMath math={`a = 2`} /> должен быть строго меньше минимального расстояния от точки <InlineMath math={`A`} /> до окружности <InlineMath math={`\\omega_1`} />. Докажем это неравенство:
      </p>
      <BlockMath math={`2 < AC_1 - R \\iff 2 < \\sqrt{65} - 3 \\iff 5 < \\sqrt{65} \\iff 25 < 65.`} />
      <p>Неравенство верно. Значит, при <InlineMath math={`a = 2`} /> окружность <InlineMath math={`\\omega_a`} /> имеет ровно 1 общую точку с <InlineMath math={`\\omega_2`} /> и не дотягивается до <InlineMath math={`\\omega_1`} />. Значение подходит.</p>

      <p>
        <b>2. Внутреннее касание с ближней окружностью <InlineMath math={`\\omega_2`} />:</b> достигается при <InlineMath math={`a = AC_2 + R = 5 + 3 = 8`} />.
      </p>
      <p>
        Проверим, пересекает ли окружность <InlineMath math={`\\omega_a`} /> в этот момент дальнюю окружность <InlineMath math={`\\omega_1`} />. Пересечение имеет место, если радиус <InlineMath math={`a = 8`} /> лежит строго между минимальным и максимальным расстояниями от <InlineMath math={`A`} /> до <InlineMath math={`\\omega_1`} />:
      </p>
      <BlockMath math={`\\sqrt{65} - 3 < 8 < \\sqrt{65} + 3.`} />
      <p>Следовательно, при <InlineMath math={`a = 8`} /> окружность дополнительно пересекает <InlineMath math={`\\omega_1`} /> в двух точках. Всего получается 3 решения (не подходит).</p>

      <p>
        <b>3. Внешнее касание с дальней окружностью <InlineMath math={`\\omega_1`} />:</b> достигается при <InlineMath math={`a = AC_1 - R = \\sqrt{65} - 3`} />.
      </p>
      <p>
        Проверим взаимное расположение с окружностью <InlineMath math={`\\omega_2`} />. Окружность <InlineMath math={`\\omega_a`} /> пересекает <InlineMath math={`\\omega_2`} />, если её радиус лежит в интервале между <InlineMath math={`AC_2 - R`} /> и <InlineMath math={`AC_2 + R`} />, то есть:
      </p>
      <BlockMath math={`2 < \\sqrt{65} - 3 < 8 \\iff 5 < \\sqrt{65} < 11 \\iff 25 < 65 < 121.`} />
      <p>Это двойное неравенство абсолютно верно. Следовательно, в данный момент система имеет 3 решения (не подходит).</p>

      <p>
        <b>4. Внутреннее касание с дальней окружностью <InlineMath math={`\\omega_1`} />:</b> достигается при <InlineMath math={`a = AC_1 + R = \\sqrt{65} + 3`} />.
      </p>
      <p>
        Для того чтобы в этот момент не было точек пересечения с окружностью <InlineMath math={`\\omega_2`} />, радиус должен быть строго больше максимального расстояния до неё:
      </p>
      <BlockMath math={`\\sqrt{65} + 3 > 8 \\iff \\sqrt{65} > 5 \\iff 65 < 25.`} />
      <p>Неравенство верно, окружность <InlineMath math={`\\omega_a`} /> полностью поглотила <InlineMath math={`\\omega_2`} /> и не пересекается с ней. Таким образом, остается ровно одна общая точка — точка касания с <InlineMath math={`\\omega_1`} bitumen />. Значение подходит.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a = 2, \\quad a = \\sqrt{65} + 3`} />
      </div>
    </div>
  )
},


{
  id: 36,
  title: 'Задача 36 (ЕГЭ 2023, Основная волна)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} (xy - x + 8) \\cdot \\sqrt{y - x + 8} = 0, \\\\ y = 2x + a \\end{cases}',
  textAfter: <span>имеет ровно два решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        <b>1) ОДЗ системы:</b> Подкоренное выражение накладывает ограничение: 
        <InlineMath math={`y - x + 8 \\geq 0 \\iff y \\geq x - 8.`} />
        Геометрически это полуплоскость, расположенная не ниже граничной прямой <InlineMath math={`y = x - 8`} />.
      </p>
      
      <p>
        <b>2) Анализ первого уравнения:</b> На ОДЗ первое уравнение равносильно совокупности:
      </p>
      <BlockMath math={`\\left[ \\begin{array}{l} y = x - 8 \\quad \\text{(граничная прямая)}, \\\\ xy - x + 8 = 0 \\implies y = 1 - \\frac{8}{x} \\quad \\text{(гипербола)}. \\end{array} \\right.`} />
      
      <p>
        Найдем точки пересечения гиперболы с границей ОДЗ:
      </p>
      <BlockMath math={`x - 8 = 1 - \\frac{8}{x} \\iff x^2 - 9x + 8 = 0 \\implies x_1 = 1, \\ x_2 = 8.`} />
      <p>Получаем две узловые точки: <InlineMath math={`A(1; -7)`} /> и <InlineMath math={`B(8; 0)`} />.</p>
      
      <p>
        Методом интервалов определяем, что условию ОДЗ <InlineMath math={`1 - \\frac{8}{x} \\geq x - 8`} /> удовлетворяют:
      </p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Левая ветвь гиперболы целиком (<InlineMath math={`x < 0`} />).</li>
        <li>Ограниченная дуга <InlineMath math={`AB`} /> правой ветви при <InlineMath math={`x \\in [1; 8]`} />. Внешние лучи при <InlineMath math={`x \\in (0; 1)`} /> и <InlineMath math={`x > 8`} /> лежат ниже прямой и исключаются.</li>
      </ul>
      
      <p>
        <b>3) Семейство сканирующих прямых:</b> Второе уравнение системы <InlineMath math={`y = 2x + a`} /> задает параллельные прямые с наклоном <InlineMath math={`k = 2`} />. Так как они круче линии ОДЗ (<InlineMath math={`k = 1`} bitumen />), каждая такая прямая всегда пересекает прямую <InlineMath math={`y = x - 8`} /> ровно один раз.
      </p>

            {/* Высокоточный и наглядный SVG-график Задачи 36 (max-w-[460px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 500 500" className="w-full max-w-[460px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Фоновая координатная сетка */}
          <g stroke="#e2e8f0" strokeWidth="0.8" className="dark:stroke-slate-800">
            {[-8, -6, -4, -2, 2, 4, 6, 8, 10].map(i => (
              <g key={i}>
                <line x1={250 + i*20} y1="30" x2={250 + i*20} y2="470" />
                <line x1="30" y1={220 - i*20} x2="470" y2={220 - i*20} />
              </g>
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="30" y1="220" x2="470" y2="220" /> {/* Ox */}
            <line x1="250" y1="30" x2="250" y2="470" />  {/* Oy */}
          </g>
          <path d="M 470,220 L 462,216 M 470,220 L 462,224" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 250,30 L 246,38 M 250,30 L 254,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="482" y="224" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="236" y="22" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="236" y="234" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Серый пунктирный вспомогательный хвост гиперболы ниже точки А */}
          <path d="M 264,410 C 267,390 268.5,375 270,360" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Неподвижный график: Граничная прямая y = x - 8 */}
          <line x1="160" y1="470" x2="450" y2="180" stroke="#000000" strokeWidth="2.5" />
          <text x="425" y="195" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">y = x - 8</text>

          {/* Более округлая левая ветвь гиперболы y = 1 - 8/x (x < 0) */}
          <path d="M 50,230 C 130,228 175,220 210,180 C 228,158 234,120 236,40" fill="none" stroke="#000000" strokeWidth="2.5" />
          <text x="50" y="245" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">y = 1 - 8/x</text>

          {/* Дуга AB правой ветви гиперболы (от A(1;-7) до B(8;0)) */}
          <path d="M 270,360 C 285,280 340,230 410,220" fill="none" stroke="#000000" strokeWidth="2.5" />

          {/* Семейство сканирующих прямых y = 2x + a. Все прямые СТРОГО параллельны друг другу (k = 2) */}
          <g stroke="#2563eb" strokeWidth="1.2" strokeDasharray="4 3">
            {/* (1) Без изменений */}
            <line x1="98" y1="410" x2="278" y2="50" />
            <text x="258" y="45" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">(1)</text>

            {/* (3) Без изменений */}
            <line x1="216" y1="470" x2="426" y2="50" />
            <text x="410" y="45" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">(3)</text>

            {/* (2) Без изменений */}
            <line x1="204" y1="470" x2="414" y2="50" />
            <text x="418" y="65" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">(2)</text>

            {/* (4) Сдвинута ЕЩЁ на 0.1 единицы масштаба вправо (0.1 * 20px = 2px вправо) */}
            {/* Было x1=281 стало 285, было x2=493 стало 495. Координаты идеально выверены */}
            <line x1="285" y1="470" x2="495" y2="50" />
            <text x="488" y="70" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">(4)</text>
          </g>

          {/* Вспомогательный серый горизонтальный пунктир справа от точки B */}
          <line x1="410" y1="220" x2="460" y2="216" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />

          {/* Ключевые маркерные узловые точки и их подписи */}
          <circle cx="270" cy="360" r="3.5" fill="#000000" /> {/* A(1; -7) */}
          <text x="280" y="375" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-normal">A(1; -7)</text>
          
          <circle cx="410" cy="220" r="3.5" fill="#000000" /> {/* B(8; 0) */}
          <text x="418" y="235" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-normal">B(8; 0)</text>
        </svg>
      </div>


      <p>
        Найдем значения параметра <InlineMath math={`a`} /> для критических положений через касание сканирующей прямой и гиперболы:
      </p>
      <BlockMath math={`2x + a = 1 - \\frac{8}{x} \\iff 2x^2 + (a - 1)x + 8 = 0.`} />
      <p>
        Условие касания: <InlineMath math={`D = (a - 1)^2 - 64 = 0 \\implies a = 9`} /> или <InlineMath math={`a = -7`} />.
      </p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>При <InlineMath math={`a = 9`} />: абсцисса <InlineMath math={`x_0 = -2 < 0`} /> (касание на левой ветви) — <b>Положение (1)</b>.</li>
        <li>При <InlineMath math={`a = -7`} />: абсцисса <InlineMath math={`x_0 = 2 \\in [1; 8]`} /> (касание на дуге <InlineMath math={`AB`} />) — <b>Положение (3)</b>.</li>
      </ul>

      <p>Движение сканирующей прямой сверху вниз (с уменьшением <InlineMath math={`a`} />) определяет число корней:</p>
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>При <InlineMath math={`a > 9`} />: 3 решения.</li>
        <li>При <InlineMath math={`a = 9`} />: прямая касается левой ветви (1) и пересекает ОДЗ (1) — <b>ровно 2 решения</b>.</li>
        <li>При <InlineMath math={`a \\in (-7; 9)`} />: пересечений с гиперболой нет, только 1 пересечение с линией ОДЗ — 1 решение.</li>
        <li>При <InlineMath math={`a = -7`} />: прямая касается дуги <InlineMath math={`AB`} /> (1) и пересекает ОДЗ (1) — <b>ровно 2 решения</b>.</li>
        <li>При <InlineMath math={`a \\in (-9; -7)`} />: 3 решения.</li>
        <li>При <InlineMath math={`a = -9`} />: прямая проходит через узел <InlineMath math={`A`} /> (1) и пересекает дугу во второй точке — <b>ровно 2 решения</b>.</li>
        <li>При <InlineMath math={`a \\in (-16; -9)`} />: один корень гиперболы выходит за ОДЗ, а второй остается на дуге <InlineMath math={`AB`} /> (1) + пересечение ОДЗ (1) — <b>ровно 2 решения</b>.</li>
        <li>При <InlineMath math={`a = -16`} />: прямая проходит через точку <InlineMath math={`B`} />. Имеется только 1 уникальное решение в точке <InlineMath math={`B`} />.</li>
        <li>При <InlineMath math={`a < -16`} />: 1 решение.</li>
      </ul>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-16; -9] \\cup \\{-7\\} \\cup \\{9\\}`} />
      </div>
    </div>
  )
},


{
  id: 37,
  title: 'Задача 37 (ЕГЭ 2022, Основная волна)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: 'x^2 + a^2 - 2x - 6a = |6x - 2a|',
  textAfter: <span>имеет ровно два различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Раскроем модуль, рассмотрев два случая в зависимости от знака подмодульного выражения:
      </p>
      
      <p>
        <b>1)</b> При <InlineMath math={`a \\leq 3x`} /> уравнение преобразуется в дугу окружности <InlineMath math={`\\omega_1`} /> с центром <InlineMath math={`C_1(4; 2)`} /> и радиусом <InlineMath math={`R = 2\\sqrt{5}`} />:
      </p>
      <BlockMath math={`(x - 4)^2 + (a - 2)^2 = 20.`} />
      
      <p>
        <b>2)</b> При <InlineMath math={`a > 3x`} /> уравнение преобразуется в дугу окружности <InlineMath math={`\\omega_2`} /> с центром <InlineMath math={`C_2(-2; 4)`} /> и радиусом <InlineMath math={`R = 2\\sqrt{5}`} />:
      </p>
      <BlockMath math={`(x + 2)^2 + (a - 4)^2 = 20.`} />
      
      <p>
        Общие точки окружностей с границей <InlineMath math={`a = 3x`} /> задают узлы стыка: <InlineMath math={`O(0; 0)`} /> и <InlineMath math={`M(2; 6)`} />. В системе координат <InlineMath math={`xOa`} /> график представляет собой замкнутую «восьмерку» из двух внешних дуг.
      </p>

      {/* Высокоточный SVG-график Задачи 37 в осях xOa (max-w-[460px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 540 440" className="w-full max-w-[460px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Координатная сетка */}
          <g stroke="#e2e8f0" strokeWidth="0.8" className="dark:stroke-slate-800">
            {[-6, -4, -2, 2, 4, 6, 8].map(i => (
              <g key={i}>
                <line x1={220 + i*22} y1="20" x2={220 + i*22} y2="400" />
                <line x1="20" y1={310 - i*22} x2="490" y2={310 - i*22} />
              </g>
            ))}
          </g>

          {/* Оси координат (Центр зафиксирован на x=220, y=310. Масштаб: 1 ед = 22px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="310" x2="490" y2="310" />  {/* Ox */}
            <line x1="220" y1="20" x2="220" y2="420" />  {/* Oa */}
          </g>
          <path d="M 490,310 L 482,306 M 490,310 L 482,314" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 220,20 L 216,28 M 220,20 L 224,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="502" y="314" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="206" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="206" y="324" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Разделяющая прямая a = 3x, проходящая СТРОГО через точки (0;0) и (1;3) */}
          <line x1="186.7" y1="410" x2="316.7" y2="20" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="321.7" y="32" fill="#94a3b8" stroke="none" className="font-sans text-xs">a = 3x</text>

          {/* Синяя дуга окружности w2 (выше прямой a = 3x) */}
          <path d="M 220,310 A 98.4,98.4 0 1,1 264,178" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <circle cx="176" cy="222" r="3" fill="#2563eb" />
          <text x="110" y="215" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">C₂(-2; 4)</text>
          <text x="80" y="235" fill="#2563eb" stroke="none" className="font-sans text-[10px] font-normal">(x+2)²+(a-4)² = 20</text>

          {/* Красная дуга окружности w1 (ниже прямой a = 3x) */}
          <path d="M 264,178 A 98.4,98.4 0 1,1 220,310" fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <circle cx="308" cy="266" r="3" fill="#dc2626" />
          <text x="316" y="275" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">C₁(4; 2)</text>
          <text x="310" y="160" fill="#dc2626" stroke="none" className="font-sans text-[10px] font-normal">(x-4)²+(a-2)² = 20</text>

          {/* Горизонтальные сканирующие прямые параметрических уровней (серый тонкий пунктир) */}
          <g stroke="#64748b" strokeWidth="1" strokeDasharray="3 3">
            <line x1="30" y1="123.6" x2="430" y2="123.6" />
            <text x="436" y="127" fill="#64748b" stroke="none" className="font-sans text-[11px] font-normal">a = 4 + 2√5</text>

            <line x1="30" y1="167.6" x2="430" y2="167.6" />
            <text x="436" y="171" fill="#64748b" stroke="none" className="font-sans text-[11px] font-normal">a = 2 + 2√5</text>

            <line x1="30" y1="178" x2="430" y2="178" />
            <text x="436" y="182" fill="#64748b" stroke="none" className="font-sans text-[11px] font-normal">a = 6</text>

            <line x1="30" y1="320.4" x2="430" y2="320.4" />
            <text x="436" y="324" fill="#64748b" stroke="none" className="font-sans text-[11px] font-normal">a = 4 - 2√5</text>

            <line x1="30" y1="364.4" x2="430" y2="364.4" />
            <text x="436" y="368" fill="#64748b" stroke="none" className="font-sans text-[11px] font-normal">a = 2 - 2√5</text>
          </g>

          {/* Маркерные точки стыка */}
          <circle cx="220" cy="310" r="3.5" fill="#000000" />
          <text x="175" y="324" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-normal">O(0; 0)</text>
          
          <circle cx="264" cy="178" r="3.5" fill="#000000" />
          <text x="220" y="172" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-normal">M(2; 6)</text>
        </svg>
      </div>

      <p>
        Количество корней исходного уравнения определяется числом пересечений графика с горизонтальной сканирующей прямой уровня <InlineMath math={`a`} />:
      </p>
      
      <ul className="list-bullet pl-5 space-y-1">
        <li>При <InlineMath math={`a < 2 - 2\\sqrt{5}`} /> или <InlineMath math={`a > 4 + 2\\sqrt{5}`} />: 0 корней.</li>
        <li>При <InlineMath math={`a = 2 - 2\\sqrt{5}`} /> или <InlineMath math={`a = 4 + 2\\sqrt{5}`} />: 1 корень (прямая касается вершины одной из дуг).</li>
        <li>При <b><InlineMath math={`a \\in (2 - 2\\sqrt{5}; 4 - 2\\sqrt{5})`} /></b>: <b>ровно 2 корня</b> (прямая пересекает две ветви дуги <InlineMath math={`\\omega_1`} />).</li>
        <li>При <InlineMath math={`a = 4 - 2\\sqrt{5}`} />: 3 корня (касание снизу дуги <InlineMath math={`\\omega_2`} /> и два пересечения <InlineMath math={`\\omega_1`} />).</li>
        <li>При <InlineMath math={`a \\in (4 - 2\\sqrt{5}; 0)`} />: 4 корня (прямая четырежды пересекает ветви обеих дуг).</li>
        <li>При <InlineMath math={`a = 0`} />: 3 корня (проход через узел стыка <InlineMath math={`O(0;0)`} /> и две внешние ветви).</li>
        <li>При <b><InlineMath math={`a \\in (0; 6)`} /></b>: <b>ровно 2 корня</b> (прямая находится между узлами <InlineMath math={`O`} /> и <InlineMath math={`M`} /> и пересекает 2 внутренние дуги).</li>
        <li>При <InlineMath math={`a = 6`} />: 3 корня (проход через верхний узел стыка <InlineMath math={`M(2;6)`} /> и две внешние ветви).</li>
        <li>При <InlineMath math={`a \\in (6; 2 + 2\\sqrt{5})`} />: 4 корня (прямая четырежды пересекает график).</li>
        <li>При <InlineMath math={`a = 2 + 2\\sqrt{5}`} />: 3 корня (касание вершины <InlineMath math={`\\omega_1`} /> и два пересечения ветвей <InlineMath math={`\\omega_2`} />).</li>
        <li>При <b><InlineMath math={`a \\in (2 + 2\\sqrt{5}; 4 + 2\\sqrt{5})`} /></b>: <b>ровно 2 корня</b> (прямая пересекает только две верхние ветви дуги <InlineMath math={`\\omega_2`} />).</li>
      </ul>

      <p>Объединяя все интервалы, где уравнение имеет ровно два различных решения, получаем итоговый результат.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (2 - 2\\sqrt{5}; 4 - 2\\sqrt{5}) \\cup (0; 6) \\cup (2 + 2\\sqrt{5}; 4 + 2\\sqrt{5})`} />
      </div>
    </div>
  )
},


{
  id: 38,
  title: 'Задача 38 (ЕГЭ 2022, Основная волна)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '|x^2 + a^2 - 7x + 5a| = x - a',
  textAfter: <span>имеет ровно два различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Так как левая часть уравнения содержит модуль и неотрицательна, правая часть обязана подчиняться условию ОДЗ: <InlineMath math={`x - a \\geq 0 \\iff a \\leq x`} />. График исходного уравнения должен располагаться строго не выше прямой <InlineMath math={`a = x`} />.
      </p>
      
      <p>Раскроем модуль по определению, перейдя к совокупности:</p>
      <BlockMath math={`\\left[ \\begin{array}{l} x^2 + a^2 - 7x + 5a = x - a \\\\ x^2 + a^2 - 7x + 5a = -(x - a) \\end{array} \\right. \\iff \\left[ \\begin{array}{l} x^2 - 8x + a^2 + 6a = 0 \\\\ x^2 - 6x + a^2 + 4a = 0 \\end{array} \\right.`} />
      
      <p>Выделим полные квадраты в каждом уравнении:</p>
      <BlockMath math={`\\left[ \\begin{array}{l} (x - 4)^2 + (a + 3)^2 = 25 \\quad \\text{(окружность } \\omega_1\\text{)} \\\\ (x - 3)^2 + (a + 2)^2 = 13 \\quad \\text{(окружность } \\omega_2\\text{)} \\end{array} \\right.`} />
      
      <p>
        Подставив <InlineMath math={`a = x`} /> в оба уравнения, находим общие граничные точки стыка дуг окружностей: <InlineMath math={`O(0; 0)`} /> и <InlineMath math={`A(1; 1)`} />. В этих точках окружности пересекают границу ОДЗ.
      </p>

      {/* Высокоточный и наглядный SVG-график Задачи 38 (max-w-[460px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 540 480" className="w-full max-w-[460px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Координатная сетка */}
          <g stroke="#e2e8f0" strokeWidth="0.8" className="dark:stroke-slate-800">
            {[-4, -2, 2, 4, 6, 8, 10].map(i => (
              <g key={i}>
                <line x1={200 + i*22} y1="20" x2={200 + i*22} y2="440" />
                <line x1="20" y1={120 - i*22} x2="510" y2={120 - i*22} />
              </g>
            ))}
          </g>

          {/* Оси координат (Центр зафиксирован точно на x=200, y=120. Масштаб: 1 ед = 22px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="120" x2="510" y2="120" />  {/* Ox */}
            <line x1="200" y1="20" x2="200" y2="450" />  {/* Oa */}
          </g>
          <path d="M 510,120 L 502,116 M 510,120 L 502,124" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 200,20 L 196,28 M 200,20 L 204,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="522" y="124" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="186" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="186" y="134" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Ограничительная прямая a = x */}
          <line x1="40" y1="280" x2="350" y2="-30" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="290" y="-1" fill="#94a3b8" stroke="none" className="font-sans text-xs">a = x</text>

          {/* Красная дуга окружности w1. Центр C1(4, -3) */}
          <path d="M 222,98 A 110,110 0 1,1 200,120" fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <circle cx="288" cy="186" r="3" fill="#dc2626" />
          <text x="296" y="196" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">C₁(4; -3)</text>
          <text x="320" y="275" fill="#dc2626" stroke="none" className="font-sans text-[10px] font-normal">(x-4)²+(a+3)² = 25</text>

          {/* Синяя дуга окружности w2. Центр C2(3, -2) */}
          <path d="M 200,120 A 79.3,79.3 0 1,0 222,98" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <circle cx="266" cy="164" r="3" fill="#2563eb" />
          <text x="216" y="172" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">C₂(3; -2)</text>
          <text x="220" y="225" fill="#2563eb" stroke="none" className="font-sans text-[10px] font-normal">(x-3)²+(a+2)² = 13</text>

          {/* Горизонтальные сканирующие прямые параметрических уровней (серый тонкий пунктир) */}
          <g stroke="#64748b" strokeWidth="1" strokeDasharray="3 3">
            <line x1="30" y1="98" x2="440" y2="98" />
            <text x="446" y="102" fill="#64748b" stroke="none" className="font-sans text-[11px] font-normal">a = 1</text>
            <line x1="30" y1="243.2" x2="440" y2="243.2" />
            <text x="446" y="247" fill="#64748b" stroke="none" className="font-sans text-[11px] font-normal">a = -2 - √13</text>
            <line x1="30" y1="296" x2="440" y2="296" />
            <text x="446" y="300" fill="#64748b" stroke="none" className="font-sans text-[11px] font-normal">a = -8</text>
          </g>

          {/* Маркерные точки стыка */}
          <circle cx="200" cy="120" r="3.5" fill="#000000" />
          <text x="160" y="116" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-normal">O(0; 0)</text>
          <circle cx="222" cy="98" r="3.5" fill="#000000" />
          <text x="210" y="88" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-normal">A(1; 1)</text>
        </svg>
      </div>

      <p>
        Найдем ординаты нижних точек для обеих дуг окружностей:
      </p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Для <InlineMath math={`\\omega_1`} />: <InlineMath math={`a_{\\min 1} = y_{C_1} - R_1 = -3 - 5 = -8`} />.</li>
        <li>Для <InlineMath math={`\\omega_2`} />: <InlineMath math={`a_{\\min 2} = y_{C_2} - R_2 = -2 - \\sqrt{13}`} />.</li>
      </ul>

      <p>Проведем горизонтальную сканирующую прямую уровня <InlineMath math={`a`} /> снизу вверх и определим количество решений по числу пересечений с графиком:</p>
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>При <InlineMath math={`a < -8`} /> или <InlineMath math={`a > 4`} />: 0 корней.</li>
        <li>При <InlineMath math={`a = -8`} /> или <InlineMath math={`a = 4`} />: 1 корень.</li>
        <li>При <b><InlineMath math={`a \\in (-8; -2 - \\sqrt{13})`} /></b>: прямая пересекает две боковые ветви <InlineMath math={`\\omega_1`} /> — <b>ровно 2 корня</b>.</li>
        <li>При <InlineMath math={`a = -2 - \\sqrt{13}`} />: 3 корня (касание нижней точки <InlineMath math={`\\omega_2`} /> и два пересечения <InlineMath math={`\\omega_1`} />).</li>
        <li>При <InlineMath math={`a \\in (-2 - \\sqrt{13}; 0)`} />: 4 корня.</li>
        <li>При <InlineMath math={`a = 0`} />: 3 корня (проход через излом <InlineMath math={`O(0;0)`} /> и две правые ветви под ОДЗ).</li>
        <li>При <b><InlineMath math={`a \\in (0; 1)`} /></b>: прямая находится выше точки <InlineMath math={`O`} />, но ниже точки <InlineMath math={`A`} />, пересекая правые ветви обеих окружностей — <b>ровно 2 корня</b>.</li>
        <li>При <InlineMath math={`a = 1`} />: 1 корень (проход через узел <InlineMath math={`A(1;1)`} />, пересечений ниже ОДЗ больше нет).</li>
        <li>При <InlineMath math={`a \\in (1; -2 + \\sqrt{13})`} />: 4 корня.</li>
        <li>При <InlineMath math={`a = -2 + \\sqrt{13}`} />: 3 корня.</li>
        <li>При <b><InlineMath math={`a \\in (-2 + \\sqrt{13}; 2)`} /></b>: прямая повторно пересекает ветви верхней части — <b>ровно 2 корня</b>.</li>
      </ul>

      <p>Объединяя все найденные интервалы, получаем итоговый результат.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-8; -2 - \\sqrt{13}) \\cup (0; 1) \\cup (-2 + \\sqrt{13}; 2)`} />
      </div>
    </div>
  )
},


{
  id: 39,
  title: 'Задача 39 (ЕГЭ 2022, Основная волна)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: 'a^2 - 2ax - 3x^2 - 4a - 4x + 8|x| = 0',
  textAfter: <span>имеет ровно четыре различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Раскроем модуль, рассмотрев два случая в зависимости от знака переменной <InlineMath math={`x`} />. Исходное уравнение имеет ровно 4 корня тогда и только тогда, когда совокупность систем имеет в сумме ровно 4 решения.
      </p>
      
      <p>
        <b>1) Случай <InlineMath math={`x \\geq 0`} />:</b> Получаем квадратное уравнение относительно <InlineMath math={`x`} />:
      </p>
      <BlockMath math={`3x^2 + 2(a - 2)x - (a^2 - 4a) = 0.`} />
      <p>Найдем четверть дискриминанта данного уравнения:</p>
      <BlockMath math={`D_1/4 = (a - 2)^2 - 3\\cdot(-(a^2 - 4a)) = 4(a^2 - 4a + 1).`} />
      <p>
        Чтобы уравнение имело два различных неотрицательных корня (<InlineMath math={`x_1 \\geq 0, x_2 \\geq 0`} />), по теореме Виета должны одновременно выполняться условия:
      </p>
      <BlockMath math={`\\begin{cases} D_1 > 0 \\\\ x_1 x_2 \\geq 0 \\\\ x_1 + x_2 \\geq 0 \\end{cases} \\iff \\begin{cases} a^2 - 4a + 1 > 0 \\\\ a(a - 4) \\leq 0 \\\\ a - 2 \\leq 0 \\end{cases} \\iff \\begin{cases} a \\in (-\\infty; 2 - \\sqrt{3}) \\cup (2 + \\sqrt{3}; +\\infty) \\\\ 0 \\leq a \\leq 4 \\\\ a \\leq 2 \\end{cases}`} />
      <p>Пересекая эти интервалы, получаем область для первого случая: <InlineMath math={`a \\in [0; 2 - \\sqrt{3})`} />.</p>
      
      <p>
        <b>2) Случай <InlineMath math={`x < 0`} />:</b> Получаем квадратное уравнение:
      </p>
      <BlockMath math={`3x^2 + 2(a + 6)x - (a^2 - 4a) = 0.`} />
      <p>Четверть дискриминанта этого уравнения всегда положительна:</p>
      <BlockMath math={`D_2/4 = (a + 6)^2 - 3\\cdot(-(a^2 - 4a)) = 4a^2 + 36 > 0.`} />
      <p>
        Чтобы уравнение имело два различных строго отрицательных корня (<InlineMath math={`x_3 < 0, x_4 < 0`} />), по теореме Виета должны выполняться условия:
      </p>
      <BlockMath math={`\\begin{cases} x_3 x_4 > 0 \\\\ x_3 + x_4 < 0 \\end{cases} \\iff \\begin{cases} a(a - 4) < 0 \\\\ a + 6 > 0 \\end{cases} \\iff \\begin{cases} 0 < a < 4 \\\\ a > -6 \\end{cases} \\implies a \\in (0; 4).`} />

            {/* Высокоточный и наглядный геометрический SVG-график отбора интервалов Задачи 39 (max-w-[445px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 460 140" className="w-full max-w-[445px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Паттерн для штриховки области пересечения */}
          <defs>
            <pattern id="hatch-red-39" width="5" height="5" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="5" stroke="#fca5a5" strokeWidth="1" className="dark:stroke-rose-950/40" />
            </pattern>
          </defs>

          {/* Область итогового ответа со штриховкой */}
          <rect x="130" y="80" width="40" height="10" fill="url(#hatch-red-39)" />

          {/* Главная ось параметра a */}
          <line x1="30" y1="90" x2="420" y2="90" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <path d="M 420,90 L 412,86 M 420,90 L 412,94" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="432" y="94" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* Ярус 1: корни из случая 1 (от 0 закрашенной до 2-sqrt(3) выколотой) */}
          <path d="M 130,90 L 130,30 L 170,30 L 170,90" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <text x="105" y="24" fill="#2563eb" stroke="none" className="font-sans text-[10px] font-normal">2 корня при x ≥ 0</text>

          {/* Ярус 2: корни из случая 2 (от 0 выколотой до 4 выколотой) */}
          <path d="M 130,55 L 320,55 L 320,90" fill="none" stroke="#16a34a" strokeWidth="1.5" />
          <text x="195" y="48" fill="#16a34a" stroke="none" className="font-sans text-[10px] font-normal">2 корня при x &lt; 0</text>

          {/* Красная маркерная линия пересечения */}
          <line x1="130" y1="90" x2="170" y2="90" stroke="#dc2626" strokeWidth="2.5" />

          {/* Метки координат на оси */}
          <text x="126" y="112" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">0</text>
          <text x="152" y="112" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-xs">2 - √3</text>
          <text x="316" y="112" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">4</text>

          {/* Граничные точки */}
          <circle cx="130" cy="90" r="3.5" fill="#000000" className="dark:fill-slate-400" />
          <circle cx="170" cy="90" r="3.5" fill="white" stroke="#000000" strokeWidth="1.2" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />
          <circle cx="320" cy="90" r="3.5" fill="white" stroke="#000000" strokeWidth="1.2" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />
        </svg>
      </div>


      <p><b>Объединение условий:</b> Поскольку положительные и отрицательные корни никогда не совпадают между собой, общее число корней равно сумме решений из обоих случаев:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Если <InlineMath math={`a \\in (0; 2 - \\sqrt{3})`} />, то первый случай дает 2 корня и второй случай дает 2 корня. Итого — <b>ровно 4 различных корня</b>.</li>
        <li>Если <InlineMath math={`a = 0`} />, корень <InlineMath math={`x = 0`} /> учитывается один раз, общее число решений равно 3.</li>
        <li>При остальных <InlineMath math={`a`} /> суммарное число решений строго меньше четырёх.</li>
      </ul>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (0; 2 - \\sqrt{3})`} />
      </div>
    </div>
  )
},


{
  id: 40,
  title: 'Задача 40 (ЕГЭ 2022, резервный день)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '\\sqrt{x} + \\sqrt{2a - x} = a',
  textAfter: <span>имеет ровно два различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Запишем условия существования корней (ОДЗ):</p>
      <BlockMath math={`\\begin{cases} x \\geq 0 \\\\ 2a - x \\geq 0 \\iff x \\leq 2a \\end{cases} \\implies 0 \\leq x \\leq 2a.`} />
      <p>
        Левая часть уравнения неотрицательна, поэтому для существования решений должно выполняться условие <InlineMath math={`a \\geq 0`} />. Если <InlineMath math={`a = 0`} />, получаем единственный корень <InlineMath math={`x = 0`} />, что не подходит. Далее считаем <InlineMath math={`a > 0`} />.
      </p>
      
      <p>Перепишем уравнение в виде равенства двух функций:</p>
      <BlockMath math={`\\sqrt{x} = a - \\sqrt{2a - x}.`} />
      <p>
        Рассмотрим функции <InlineMath math={`f(x) = \\sqrt{x}`} /> и <InlineMath math={`g(x) = a - \\sqrt{2a - x}`} /> в координатной плоскости <InlineMath math={`xOy`} />. График функции <InlineMath math={`g(x)`} /> получается отражением и сдвигом стандартного графика корня. Его правая крайняя точка (вершина) имеет координаты <InlineMath math={`(2a; a)`} />, которая движется по траектории <InlineMath math={`y = \\frac{x}{2}`} />.
      </p>

      {/* Высокоточный и наглядный SVG-график Задачи 40 (max-w-[450px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 500 360" className="w-full max-w-[450px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Координатная сетка (Масштаб: 1 ед = 36px. Начало (0,0) зафиксировано на x=100, y=280) */}
          <g stroke="#e2e8f0" strokeWidth="0.8" className="dark:stroke-slate-800">
            {Array.from({ length: 11 }).map((_, i) => (
              <line key={`x-${i}`} x1={100 + i*36} y1="40" x2={100 + i*36} y2="320" />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={`y-${i}`} x1="60" y1={280 - i*36} x2="480" y2={280 - i*36} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="60" y1="280" x2="480" y2="280" /> {/* Ось Ox */}
            <line x1="100" y1="40" x2="100" y2="320" />  {/* Axis Oy */}
          </g>
          {/* Наконечники стрелок для осей */}
          <path d="M 480,280 L 472,276 M 480,280 L 472,284" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 100,40 L 96,48 M 100,40 L 104,48" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="492" y="284" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="86" y="35" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="86" y="294" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>
          
          {/* Единичные штрихи */}
          <line x1="136" y1="276" x2="136" y2="284" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="133" y="296" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px]">1</text>
          
          <line x1="96" y1="244" x2="104" y2="244" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="84" y="248" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px]">1</text>

          {/* Траектория вершин y = x/2 (зеленый пунктир) */}
          <line x1="100" y1="280" x2="480" y2="90" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="490" y="94" fill="#16a34a" stroke="none" className="font-sans text-xs font-normal">y = x/2</text>

          {/* f(x) = sqrt(x) (синяя кривая) */}
          <path d="M 100,280 C 130,225 180,212 244,208 C 320,203 400,195 480,190" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="490" y="194" fill="#2563eb" stroke="none" className="font-serif italic text-sm">f(x)</text>

          {/* Подвижные красные графики g(x) */}
          {/* 1) a = 2: вершина строго в (4;2)->(244,208), падает в (0;0)->(100,280) */}
          <path d="M 244,208 C 242,235 150,280 100,280" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="252" y="222" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">g(x)</text>
          <text x="195" y="270" fill="#2563eb" stroke="none" className="font-sans text-[10px] font-normal">a = 2</text>

          {/* 2) a = 4: вершина строго зафиксирована в точке (8;4)->(388,136). */}
          {/* График сделан более округлым, круче сбегая из вершины строго по касательной траектории к синей линии f(x) */}
          <path d="M 388,136 C 360,165 300,205 244,208 C 210,210 145,214 100,217" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="396" y="150" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-normal">g(x)</text>
          <text x="290" y="250" fill="#dc2626" stroke="none" className="font-sans text-[10px] font-normal">a = 4</text>

          {/* Ключевые маркерные точки */}
          <circle cx="244" cy="208" r="3.5" fill="#2563eb" />
          <text x="235" y="195" fill="#2563eb" stroke="none" className="font-sans text-xs font-normal">(4; 2)</text>

          <circle cx="388" cy="136" r="3.5" fill="#dc2626" />
          <text x="360" y="126" fill="#dc2626" stroke="none" className="font-sans text-xs font-normal">(8; 4)</text>
        </svg>
      </div>



      <p>Рассмотрим граничные положения аналитически:</p>
      
      <p>
        <b>(I) Проход графика <InlineMath math={`g(x)`} /> через начало координат <InlineMath math={`(0; 0)`} />:</b>
      </p>
      <BlockMath math={`g(0) = 0 \\iff a - \\sqrt{2a} = 0 \\iff \\sqrt{2a} = a \\implies 2a = a^2 \\implies a(a - 2) = 0.`} />
      <p>
        Учитывая <InlineMath math={`a > 0`} />, получаем <InlineMath math={`a = 2`} />. При <InlineMath math={`a = 2`} /> графики пересекаются в начале координат и в вершине <InlineMath math={`(4; 2)`} />, которая лежит на кривой <InlineMath math={`f(x)`} />. Значит, уравнение имеет ровно два различных корня. Значение <InlineMath math={`a = 2`} /> <b>включается</b> в ответ.
      </p>
      
      <p>
        <b>(II) Касание графиков функций <InlineMath math={`f(x)`} /> и <InlineMath math={`g(x)`} />:</b>
      </p>
      <p>В точке касания должны совпадать значения их производных:</p>
      <BlockMath math={`f'(x) = \\frac{1}{2\\sqrt{x}}, \\quad g'(x) = \\frac{1}{2\\sqrt{2a - x}} \\implies \\frac{1}{2\\sqrt{x}} = \\frac{1}{2\\sqrt{2a - x}} \\iff x = a.`} />
      <p>Подставим точку предполагаемого касания <InlineMath math={`x = a`} /> в исходное уравнение:</p>
      <BlockMath math={`\\sqrt{a} + \\sqrt{2a - a} = a \\iff 2\\sqrt{a} = a \\implies 4a = a^2 \\implies a(a - 4) = 0.`} />
      <p>
        Получаем критическое значение <InlineMath math={`a = 4`} />. При этом значении графики касаются, что дает единственный корень, поэтому точка <InlineMath math={`a = 4`} /> <b>выкалывается</b>.
      </p>
      
      <p>
        При всех промежуточных значениях параметров <InlineMath math={`a \\in [2; 4)`} /> график <InlineMath math={`g(x)`} /> пересекает ветвь <InlineMath math={`f(x)`} /> ровно в двух различных точках.
      </p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in [2; 4)`} />
      </div>
    </div>
  )
},


{
  id: 41,
  title: 'Задача 41 (ЕГЭ 2022, резервная волна)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '\\sqrt{x^4 - 9x^2 + a^2} = x^2 + 3x - a',
  textAfter: <span>имеет ровно 3 различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
            <p>
        Исходное уравнение равносильно следующей системе:
      </p>
      <BlockMath math={`\\begin{cases} x^2 + 3x - a \\geq 0, \\\\ x^4 - 9x^2 + a^2 = (x^2 + 3x - a)^2. \\end{cases}`} />
      
      <p>
        Ограничение <InlineMath math={`x^2 + 3x - a \\geq 0 \\iff a \\leq x^2 + 3x`} /> задает область допустимых значений (ОДЗ) на плоскости <InlineMath math={`xOa`} />, расположенную ниже параболы.
      </p>
      
      <p>Раскроем квадрат в правой части второго уравнения:</p>
      <BlockMath math={`x^4 - 9x^2 + a^2 = x^4 + 9x^2 + a^2 + 6x^3 - 2ax^2 - 6ax.`} />
      <p>Приведем подобные слагаемые и перенесем всё в одну сторону:</p>
      <BlockMath math={`18x^2 + 6x^3 - 2ax^2 - 6ax = 0 \\iff 2x(3x^2 + 9x - ax - 3a) = 0.`} />
      
      <p>Сгруппируем слагаемые внутри скобки:</p>
      <BlockMath math={`2x(3x(x + 3) - a(x + 3)) = 0 \\iff 2x(x + 3)(3x - a) = 0.`} />
      
      <p>Таким образом, уравнение распадается на три независимые ветви решений:</p>
      <BlockMath math={`x_1 = 0, \\quad x_2 = -3, \\quad x_3 = \\frac{a}{3} \\implies a = 3x.`} />
      
      <p>
        Решим задачу графически в системе координат <InlineMath math={`xOa`} />. График представляет собой две вертикальные прямые <InlineMath math={`x = 0`} />, <InlineMath math={`x = -3`} /> и наклонную прямую <InlineMath math={`a = 3x`} />, рассматриваемые только в области ОДЗ (<InlineMath math={`a \\leq x^2 + 3x`} />).
      </p>
      
      <p>Найдем точки пересечения прямых с границей ОДЗ (параболой <InlineMath math={`y(x) = x^2 + 3x`} />):</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Для <InlineMath math={`x = 0`} />: <InlineMath math={`a = 0^2 + 3 \\cdot 0 = 0`} />. Получаем точку <InlineMath math={`O(0;0)`} />. Соответственно, корень <InlineMath math={`x_1 = 0`} /> существует при <InlineMath math={`a \\leq 0`} />.</li>
        <li>Для <InlineMath math={`x = -3`} />: <InlineMath math={`a = (-3)^2 + 3 \\cdot (-3) = 0`} />. Получаем точку <InlineMath math={`A(-3;0)`} />. Корень <InlineMath math={`x_2 = -3`} /> существует при <InlineMath math={`a \\leq 0`} />.</li>
        <li>Для <InlineMath math={`a = 3x`} />: приравняем к параболе: <InlineMath math={`3x = x^2 + 3x \\iff x^2 = 0 \\implies x = 0`} />. Прямая касается параболы в точке <InlineMath math={`O(0;0)`} />. Неравенство <InlineMath math={`3x \\leq x^2 + 3x \\iff x^2 \\geq 0`} /> выполняется всегда, то есть корень <InlineMath math={`x_3`} /> существует при любых <InlineMath math={`a`} />.</li>
      </ul>
      
      <p>Найдем точки взаимного пересечения корней между собой:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li><InlineMath math={`x_1 = x_2 \\implies 0 = -3`} /> (нет пересечений).</li>
        <li><InlineMath math={`x_1 = x_3 \\implies 0 = \\frac{a}{3} \\implies a = 0`} /> (корни склеиваются в точке <InlineMath math={`O`} bitumen />).</li>
        <li><InlineMath math={`x_2 = x_3 \\implies -3 = \\frac{a}{3} \\implies a = -9`} /> (корни склеиваются в точке <InlineMath math={`B(-3; -9)`} />).</li>
      </ul>

      {/* Высокоточный SVG-график Задачи 41 с точной параболой ОДЗ */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 460 520" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Статическая координатная сетка */}
          <g stroke="#e2e8f0" strokeWidth="0.8" className="dark:stroke-slate-800">
            <line x1="60" y1="148" x2="420" y2="148" />
            <line x1="60" y1="220" x2="420" y2="220" />
            <line x1="60" y1="292" x2="420" y2="292" />
            <line x1="60" y1="364" x2="420" y2="364" />
            <line x1="60" y1="436" x2="420" y2="436" />
            <line x1="156" y1="20" x2="156" y2="480" />
            <line x1="252" y1="20" x2="252" y2="480" />
          </g>

          {/* Оси координат (Центр зафиксирован на x=252, y=148. Масштаб: 1 ед_x = 32px, 1 ед_y = 36px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="148" x2="420" y2="148" />
            <line x1="252" y1="20" x2="252" y2="480" />
          </g>
          <path d="M 420,148 L 412,144 M 420,148 L 412,152" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 252,20 L 248,28 M 252,20 L 256,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="430" y="152" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="238" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="238" y="162" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>
          
          <line x1="284" y1="144" x2="284" y2="152" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="281" y="164" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px]">1</text>

          {/* Сдвинутая серая пунктирная парабола a = x^2 + 3x */}
          {/* Проходит СТРОГО через (-3;0) -> (156,148) и (0;0) -> (252,148). Вершина в x = -1.5 -> 204, y = -2.25 -> 229 */}
          <path d="M 124,40 C 136,110 170,229 204,229 C 238,229 244,170 274,40" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="280" y="44" fill="#94a3b8" stroke="none" className="font-sans text-xs">a = x² + 3x</text>


          {/* Сплошные синие рабочие линии корней под ОДЗ */}
          <line x1="252" y1="148" x2="252" y2="500" stroke="#2563eb" strokeWidth="2.5" />
          <text x="258" y="455" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">x = 0</text>

          <line x1="156" y1="148" x2="156" y2="500" stroke="#2563eb" strokeWidth="2.5" />
          <text x="122" y="425" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">x = -3</text>

          <line x1="146" y1="500" x2="280" y2="52" stroke="#2563eb" strokeWidth="2.5" />
          <text x="284" y="65" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">a = 3x</text>

          {/* Красные горизонтальные пунктирные линии уровней пересечений */}
          <g stroke="#dc2626" strokeWidth="1.1" strokeDasharray="4 3">
            <line x1="40" y1="148" x2="420" y2="148" />
            <line x1="40" y1="472" x2="420" y2="472" />
          </g>
          <text x="236" y="468" fill="#dc2626" stroke="none" className="font-sans text-xs">-9</text>

          {/* Узловые маркерные точки */}
          <circle cx="252" cy="148" r="3.5" fill="#000000" />
          <text x="238" y="142" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">O</text>
          <circle cx="156" cy="148" r="3.5" fill="#000000" />
          <text x="142" y="140" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">A(-3)</text>
          <circle cx="156" cy="472" r="3.5" fill="#000000" />
          <text x="74" y="476" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">B(-3; -9)</text>
        </svg>
      </div>

            <p>Исследуем количество решений с помощью горизонтальной линии:</p>
        <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          1. При <InlineMath math={`a > 0`} />: прямые <InlineMath math={`x = 0`} /> и <InlineMath math={`x = -3`} /> исключены по ОДЗ. Прямая уровня <InlineMath math={`a`} /> пересекает только наклонную прямую <InlineMath math={`a = 3x`} /> — 1 решение.
        </li>
        <li>
          2. При <InlineMath math={`a = 0`} />: прямая проходит через точки <InlineMath math={`O(0;0)`} /> и <InlineMath math={`A(-3;0)`} />. В точке <InlineMath math={`O`} /> совпадают линии <InlineMath math={`x = 0`} /> и <InlineMath math={`a = 3x`} />. Имеем два различных корня: <InlineMath math={`x = 0`} /> и <InlineMath math={`x = -3`} /> — 2 решения.
        </li>
        <li>
          3. При <InlineMath math={`a \\in (-9; 0)`} />: прямая пересекает все три независимые линии графика (<InlineMath math={`x = 0, \\ x = -3, \\ a = 3x`} />), при этом все три точки пересечения различны — <b>ровно 3 решения</b> (подходит).
        </li>
        <li>
          4. При <InlineMath math={`a = -9`} />: прямая проходит через точку <InlineMath math={`B(-3; -9)`} />, где пересекаются линии <InlineMath math={`x = -3`} /> и <InlineMath math={`a = 3x`} bitumen />. Имеем два корня: <InlineMath math={`x = -3`} /> и <InlineMath math={`x = 0`} /> — 2 решения.
        </li>
        <li>
          5. При <InlineMath math={`a < -9`} />: прямая пересекает все три синие линии, давая 3 различных решения — <b>ровно 3 решения</b> (подходит).
        </li>
      </ul>


      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -9) \\cup (-9; 0)`} />
      </div>
    </div>
  )
},


{
  id: 42,
  title: 'Задача 42 (ЕГЭ)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: 'a|x + 1| + (1 - a)|x - 1| + 2 = 0',
  textAfter: <span>имеет ровно два различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Перепишем уравнение в виде равенства двух функций:
      </p>
      <BlockMath math={`a|x + 1| + (1 - a)|x - 1| = -2.`} />
      <p>
        Пусть <InlineMath math={`f(x) = a|x + 1| + (1 - a)|x - 1|`} />, а <InlineMath math={`g(x) = -2`} />. 
        Найдем нули подмодульных выражений: <InlineMath math={`x = \\pm 1`} />. Раскроем модули на каждом из получившихся интервалов в соответствии с расстановкой знаков:
      </p>
      
      <p>
        <b>1)</b> При <InlineMath math={`x \\in (-\\infty; -1)`} />:
      </p>
      <BlockMath math={`f(x) = -a(x + 1) - (1 - a)(x - 1) = -ax - a - x + 1 + ax - a = -x - 2a + 1.`} />
      
      <p>
        <b>2)</b> При <InlineMath math={`x \\in [-1; 1]`} />:
      </p>
      <BlockMath math={`f(x) = a(x + 1) - (1 - a)(x - 1) = ax + a - x + 1 + ax - a = (2a - 1)x + 1.`} />
      
      <p>
        <b>3)</b> При <InlineMath math={`x \\in (1; +\\infty)`} />:
      </p>
      <BlockMath math={`f(x) = a(x + 1) + (1 - a)(x - 1) = ax + a + x - 1 - ax + a = x + 2a - 1.`} />
      
      <p>Вычислим значения функции <InlineMath math={`f(x)`} /> в точках излома ломаной:</p>
      <BlockMath math={`f(-1) = 2 - 2a, \\quad f(1) = 2a.`} />
      
      <p>
        Поведение центрального звена ломаной зависит от знака углового коэффициента <InlineMath math={`k = 2a - 1`} />. Рассмотрим три возможных случая:
      </p>
      
      <p>
        <b>I Случай</b> <InlineMath math={`2a - 1 > 0 \\iff a > \\frac{1}{2}`} />: В этом случае центральное звено ломаной возрастает, поэтому <InlineMath math={`f(-1) < f(1)`} />. Боковые лучи направлены вверх (<InlineMath math={`k_1 = -1, \\ k_3 = 1`} />). График представляет собой ломаную в форме «корыта» со скошенным дном, где наинизшей точкой является левый излом <InlineMath math={`x = -1`} />.
      </p>
      <p>
        Чтобы функции <InlineMath math={`f(x)`} /> и <InlineMath math={`g(x)`} /> имели ровно две общие точки, необходимо и достаточно, чтобы горизонтальная прямая <InlineMath math={`y = -2`} /> проходила строго выше этой наинизшей точки излома:
      </p>
      <BlockMath math={`f(-1) < -2 \\iff 2 - 2a < -2 \\iff 4 < 2a \\iff a > 2.`} />
      <p>С учетом условия <InlineMath math={`a > \\frac{1}{2}`} /> получаем первый интервал: <InlineMath math={`a \\in (2; +\\infty)`} />.</p>

      {/* Высокоточный и наглядный SVG-график для Случая I (max-w-[420px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 400 240" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Оси координат (Начало (0,0) зафиксировано на x=200, y=170. Масштаб: 1 ед = 45px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="60" y1="170" x2="340" y2="170" /> {/* Ox */}
            <line x1="200" y1="30" x2="200" y2="210" />  {/* Oy */}
          </g>
          <path d="M 340,170 L 332,166 M 340,170 L 332,174" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 200,30 L 196,38 M 200,30 L 204,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="350" y="174" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="186" y="25" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="186" y="182" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки -1 и 1 на оси Ox */}
          <line x1="155" y1="166" x2="155" y2="174" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="148" y="192" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">-1</text>
          <line x1="245" y1="166" x2="245" y2="174" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="242" y="192" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Ломаная f(x): Изломы в x=-1 (155, 140) и x=1 (245, 95) */}
          <path d="M 110,60 L 155,140 L 245,95 L 290,30" fill="none" stroke="#000000" strokeWidth="2.5" className="dark:stroke-slate-200" />
          <circle cx="155" cy="140" r="3" fill="#000000" className="dark:fill-slate-200" />
          <circle cx="245" cy="95" r="3" fill="#000000" className="dark:fill-slate-200" />

          {/* Зеленые пунктирные линии уровней ординат изломов */}
          <line x1="155" y1="140" x2="200" y2="140" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 3" />
          <text x="206" y="144" fill="#16a34a" stroke="none" className="font-sans text-[11px]">2 - 2a</text>
          
          <line x1="245" y1="95" x2="200" y2="95" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 3" />
          <text x="175" y="99" fill="#16a34a" stroke="none" className="font-sans text-[11px]">2a</text>
        </svg>
      </div>

      <p>
        <b>II Случай</b> <InlineMath math={`a = \\frac{1}{2}`} />: Подставим <InlineMath math={`a = \\frac{1}{2}`} /> в исходное уравнение:
      </p>
      <BlockMath math={`\\frac{1}{2}|x + 1| + \\frac{1}{2}|x - 1| = -2 \\iff |x + 1| + |x - 1| = -4.`} />
      <p>Так как сумма модулей всегда неотрицательна, данное уравнение не имеет решений (<InlineMath math={`a \\in \\varnothing`} />).</p>
      
      <p>
        <b>III Случай</b> <InlineMath math={`2a - 1 < 0 \\iff a < \\frac{1}{2}`} />: В этом случае центральное звено ломаной убывает, поэтому <InlineMath math={`f(-1) > f(1)`} />. Боковые лучи по-прежнему направлены вверх. Ломаная снова имеет форму «корыта», но её наинизшей точкой является правый излом <InlineMath math={`x = 1`} />.
      </p>
      <p>
        Чтобы функции <InlineMath math={`f(x)`} /> и <InlineMath math={`g(x)`} /> имели ровно две общие точки, прямая <InlineMath math={`y = -2`} /> обязана проходить строго выше второго излома:
      </p>
      <BlockMath math={`f(1) < -2 \\iff 2a < -2 \\iff a < -1.`} />
      <p>С учетом условия <InlineMath math={`a < \\frac{1}{2}`} /> получаем второй интервал: <InlineMath math={`a \\in (-\\infty; -1)`} />.</p>

      {/* Высокоточный и наглядный SVG-график для Случая III (max-w-[420px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 400 240" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Оси координат (Начало (0,0) зафиксировано на x=200, y=170. Масштаб: 1 ед = 45px) */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="60" y1="170" x2="340" y2="170" /> {/* Ox */}
            <line x1="200" y1="30" x2="200" y2="210" />  {/* Oy */}
          </g>
          <path d="M 340,170 L 332,166 M 340,170 L 332,174" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 200,30 L 196,38 M 200,30 L 204,38" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="350" y="174" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="186" y="25" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="186" y="182" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки -1 и 1 на оси Ox */}
          <line x1="155" y1="166" x2="155" y2="174" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="148" y="192" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">-1</text>
          <line x1="245" y1="166" x2="245" y2="174" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="242" y="192" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Ломаная f(x): Изломы в x=-1 (155, 95) и x=1 (245, 140) */}
          <path d="M 110,30 L 155,95 L 245,140 L 290,60" fill="none" stroke="#000000" strokeWidth="2.5" className="dark:stroke-slate-200" />
          <circle cx="155" cy="95" r="3" fill="#000000" className="dark:fill-slate-200" />
          <circle cx="245" cy="140" r="3" fill="#000000" className="dark:fill-slate-200" />

          {/* Зеленые пунктирные линии уровней ординат изломов */}
          <line x1="155" y1="95" x2="200" y2="95" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 3" />
          <text x="206" y="99" fill="#16a34a" stroke="none" className="font-sans text-[11px]">2 - 2a</text>
          
          <line x1="245" y1="140" x2="200" y2="140" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 3" />
          <text x="175" y="144" fill="#16a34a" stroke="none" className="font-sans text-[11px]">2a</text>

         </svg>
      </div>

      <p>Объединяя результаты всех рассмотренных случаев, получаем итоговый ответ.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math="a \in (-\infty; -1) \cup (2; +\infty)" />
      </div>
    </div>
  )
},



{
  id: 43,
  title: 'Задача 43 (ЕГЭ-2021. Досрочная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} 2^{\\ln y} = 4^{|x|}, \\\\ \\log_2(x^4y^2 + 2a^2) = \\log_2(1 - ax^2y^2) + 1 \\end{cases}',
  textAfter: <span>имеет ровно одно решение.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Заметим, что если пара <InlineMath math={`(x_0; y_0)`} /> — решение, то <InlineMath math={`(-x_0; y_0)`} /> — также решение. Для единственности решения необходимо выполнение условия <InlineMath math={`x = 0`} />.
      </p>
      
      <p>Подставим <InlineMath math={`x = 0`} /> в исходную систему для поиска критических значений параметра <InlineMath math={`a`} />:</p>
      <BlockMath math={`\\begin{cases} 2^{\\ln y} = 4^0 \\\\ \\log_2(2a^2) = \\log_2(1) + 1 \\end{cases} \\iff \\begin{cases} \\ln y = 0 \\\\ \\log_2(2a^2) = 1 \\end{cases} \\iff \\begin{cases} y = 1 \\\\ 2a^2 = 2 \\implies a = \\pm 1 \\end{cases}`} />
      
      <p>Проведем проверку найденных значений <InlineMath math={`a`} />, предварительно упростив первое уравнение для любого <InlineMath math={`a`} />:</p>
      <BlockMath math={`2^{\\ln y} = 2^{2|x|} \\iff \\ln y = 2|x| \\iff y = e^{2|x|} \\quad \\text{(причем } y \\geq 1\\text{)}.`} />
      
      <p>
        <b>I Проверка</b> <InlineMath math={`a = -1`} />: Второе уравнение принимает вид:
      </p>
      <BlockMath math={`\\log_2(x^4y^2 + 2) = \\log_2(1 + x^2y^2) + \\log_2 2 \\iff \\log_2(x^4y^2 + 2) = \\log_2(2 + 2x^2y^2).`} />
      
      <p>Потенциируя полученное равенство, имеем:</p>
      <BlockMath math={`x^4y^2 + 2 = 2 + 2x^2y^2 \\iff x^2y^2(x^2 - 2) = 0 \\iff \\left[ \\begin{array}{l} x^2y^2 = 0 \\\\ x^2 = 2 \\end{array} \\right.`} />
      
      <p>Так как <InlineMath math={`y \\geq 1`} bitumen />, получаем корни <InlineMath math={`x = 0`} /> и <InlineMath math={`x = \\pm\\sqrt{2}`} />. Система имеет не менее 3 решений — <InlineMath math={`a = -1`} /> не подходит.</p>

            <p>
        <b>II Проверка</b> <InlineMath math={`a = 1`} />: Второе уравнение принимает вид:
      </p>
      <BlockMath math={`\\log_2(x^4y^2 + 2) = \\log_2(1 - x^2y^2) + \\log_2 2 \\iff \\begin{cases} x^4y^2 + 2 = 2(1 - x^2y^2), \\\\ 1 - x^2y^2 > 0. \\end{cases}`} />
      
      <p>Преобразуем уравнение полученной системы:</p>
      <BlockMath math={`x^4y^2 + 2 = 2 - 2x^2y^2 \\iff x^4y^2 + 2x^2y^2 = 0 \\iff x^2y^2(x^2 + 2) = 0.`} />
      
      <p>Поскольку выражение <InlineMath math={`x^2 + 2 \\geq 2 > 0`} /> при любых действительных значениях переменной, уравнение равносильно:</p>
      <BlockMath math={`x^2y^2 = 0 \\implies x = 0 \\quad \\text{(так как } y \\geq 1\\text{)}.`} />
      
      <p>Подставив найденное значение <InlineMath math={`x = 0`} /> в строгое условие неравенства ОДЗ логарифма <InlineMath math={`1 - x^2y^2 > 0`} />, получаем истинное числовое неравенство <InlineMath math={`1 > 0`} /> (верно). Единственное решение системы — пара чисел <InlineMath math={`(0; 1)`} />. Значение параметра <InlineMath math={`a = 1`} /> <b>подходит</b>.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a = 1`} />
      </div>
    </div>
  )
},


{
  id: 44,
  title: 'Задача 44',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '|x^2 - a^2| + 20 = 4 \\cdot |x - a| + 5 \\cdot |x + a|',
  textAfter: <span>имеет ровно два положительных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Используя свойство модуля <InlineMath math="|x^2 - a^2| = |x - a| \cdot |x + a|" />, преобразуем уравнение методом группировки:
      </p>
      <BlockMath math="|x - a| \cdot |x + a| - 4|x - a| - 5|x + a| + 20 = 0 \iff (|x - a| - 5)(|x + a| - 4) = 0." />
      
      <p>Данное уравнение равносильно совокупности четырех прямых линий в плоскости <InlineMath math="xOa" />:</p>
      <BlockMath math="\left[ \begin{array}{l} |x - a| = 5 \\ |x + a| = 4 \end{array} \right. \iff \left[ \begin{array}{ll} a = x - 5 & (l_1), \\ a = x + 5 & (l_2), \\ a = 4 - x & (l_3), \\ a = -4 - x & (l_4). \end{array} \right." />
      
      <p>
        Изобразим эти прямые линии в системе координат <InlineMath math="xOa" />. По условию задачи нас интересуют только положительные корни <InlineMath math="x > 0" />, поэтому мы рассматриваем исключительно части прямых, лежащие строго в правой полуплоскости.
      </p>
      
      <p>Найдем ординаты точек пересечения (границ и изломов) этих линий с осью <InlineMath math="Oa" /> (при <InlineMath math="x = 0" />) и между собой:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Пересечения с осью <InlineMath math="Oa" />: для <InlineMath math="l_1 \implies a = -5" />; для <InlineMath math="l_2 \implies a = 5" />; для <InlineMath math="l_3 \implies a = 4" />; для <InlineMath math="l_4 \implies a = -4" />.</li>
        <li>Пересечение <InlineMath math="l_1" /> и <InlineMath math="l_3" />: <InlineMath math="x - 5 = 4 - x \iff 2x = 9 \implies x = 4.5" />. Получаем точку пересечения <InlineMath math="M(4.5; -0.5)" />.</li>
        <li>Пересечение <InlineMath math="l_1" /> и <InlineMath math="l_4" />: <InlineMath math="x - 5 = -4 - x \iff 2x = 1 \implies x = 0.5" />. Получаем точку <InlineMath math="N(0.5; -4.5)" />.</li>
        <li>Пересечение <InlineMath math="l_2" /> и <InlineMath math="l_3" />: <InlineMath math="x + 5 = 4 - x \iff 2x = -1 \implies x = -0.5" /> (не лежит в правой полуплоскости).</li>
        <li>Пересечение <InlineMath math="l_2" /> и <InlineMath math="l_4" />: <InlineMath math="x + 5 = -4 - x \iff 2x = -9 \implies x = -4.5" /> (не лежит в правой полуплоскости).</li>
      </ul>


            {/* Высокоточный и наглядный SVG-график Задачи 44 (max-w-[440px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 420 540" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Координатная сетка (Начало (0,0) зафиксировано на x=120, y=240) */}
          <g stroke="#e2e8f0" strokeWidth="0.8" className="dark:stroke-slate-800">
            <line x1="72" y1="20" x2="72" y2="520" />
            <line x1="120" y1="20" x2="120" y2="520" />
            <line x1="168" y1="20" x2="168" y2="520" />
            <line x1="216" y1="20" x2="216" y2="520" />
            <line x1="264" y1="20" x2="264" y2="520" />
            <line x1="312" y1="20" x2="312" y2="520" />
            <line x1="360" y1="20" x2="360" y2="520" />
            <line x1="40" y1="48" x2="380" y2="48" />
            <line x1="40" y1="96" x2="380" y2="96" />
            <line x1="40" y1="144" x2="380" y2="144" />
            <line x1="40" y1="192" x2="380" y2="192" />
            <line x1="40" y1="240" x2="380" y2="240" />
            <line x1="40" y1="288" x2="380" y2="288" />
            <line x1="40" y1="336" x2="380" y2="336" />
            <line x1="40" y1="384" x2="380" y2="384" />
            <line x1="40" y1="432" x2="380" y2="432" />
            <line x1="40" y1="480" x2="380" y2="480" />
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="240" x2="380" y2="240" /> {/* Axis Ox */}
            <line x1="120" y1="20" x2="120" y2="520" />  {/* Axis Oa */}
          </g>
          <path d="M 380,240 L 372,236 M 380,240 L 372,244" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 120,20 L 116,28 M 120,20 L 124,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="392" y="244" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="106" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="106" y="254" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Единичные штрихи */}
          <line x1="144" y1="236" x2="144" y2="244" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="141" y="256" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <line x1="116" y1="216" x2="124" y2="216" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="104" y="220" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Четыре синих луча корней в правой полуплоскости x > 0 */}
          <line x1="120" y1="120" x2="220" y2="20" stroke="#2563eb" strokeWidth="2.5" />
          <text x="225" y="24" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">l₂</text>

          <line x1="120" y1="144" x2="340" y2="364" stroke="#2563eb" strokeWidth="2.5" />
          <text x="344" y="375" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">l₃</text>

          <line x1="120" y1="360" x2="360" y2="120" stroke="#2563eb" strokeWidth="2.5" />
          <text x="364" y="120" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">l₁</text>

          <line x1="120" y1="336" x2="200" y2="416" stroke="#2563eb" strokeWidth="2.5" />
          <text x="204" y="425" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">l₄</text>

          {/* Выколотые граничные точки на оси Oa (x = 0) */}
          <circle cx="120" cy="120" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" />
          <text x="128" y="124" fill="#64748b" stroke="none" className="font-sans text-xs">5</text>
          
          <circle cx="120" cy="144" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" />
          <text x="128" y="148" fill="#64748b" stroke="none" className="font-sans text-xs">4</text>
          
          <circle cx="120" cy="336" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" />
          <text x="128" y="340" fill="#64748b" stroke="none" className="font-sans text-xs">-4</text>
          
          <circle cx="120" cy="360" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" />
          <text x="128" y="364" fill="#64748b" stroke="none" className="font-sans text-xs">-5</text>

          {/* Узловые заполненные точки пересечений */}
          <circle cx="228" cy="252" r="3.5" fill="#000000" />
          <text x="236" y="256" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">M</text>

          <circle cx="132" cy="348" r="3.5" fill="#000000" />
          <text x="138" y="358" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">N</text>

          {/* Горизонтальные сканирующие маркерные линии параметров уровней (красный пунктир) */}
          <g stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3">
            <line x1="40" y1="120" x2="380" y2="120" />
            <text x="384" y="124" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 5</text>

            <line x1="40" y1="144" x2="380" y2="144" />
            <text x="384" y="148" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 4</text>

            <line x1="40" y1="252" x2="380" y2="252" />
            <text x="384" y="256" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -0.5</text>

            <line x1="40" y1="336" x2="380" y2="336" />
            <text x="384" y="340" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -4</text>

            <line x1="40" y1="348" x2="380" y2="348" />
            <text x="384" y="352" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -4.5</text>

            <line x1="40" y1="360" x2="380" y2="360" />
            <text x="384" y="364" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -5</text>
          </g>
        </svg>
      </div>


            <p>
        Количество положительных корней исходного уравнения равно числу точек пересечения синих лучей с горизонтальной сканирующей прямой уровня <InlineMath math="a" />:
      </p>
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          1. При <InlineMath math="a \leq -5" />: прямая пересекает лучи <InlineMath math="l_3" /> и <InlineMath math="l_4" /> — <b>ровно 2 решения</b>.
        </li>
        <li>
          2. При <InlineMath math="a \in (-5; -4.5)" />: прямая пересекает лучи <InlineMath math="l_1, \ l_3" /> и <InlineMath math="l_4" /> — 3 решения.
        </li>
        <li>
          3. При <InlineMath math="a = -4.5" />: прямая проходит через узел пересечения <InlineMath math="N(0.5; -4.5)" /> линий <InlineMath math="l_1" /> и <InlineMath math="l_4" />, а также пересекает <InlineMath math="l_3" /> — <b>ровно 2 решения</b>.
        </li>
        <li>
          4. При <InlineMath math="a \in (-4.5; -4)" />: прямая пересекает лучи <InlineMath math="l_1, \ l_3" /> и <InlineMath math="l_4" /> — 3 решения.
        </li>
        <li>
          5. При <InlineMath math="a \in [-4; 4)" />: на уровне <InlineMath math="a = -0.5" /> прямая проходит через точку <InlineMath math="M" />, где <InlineMath math="l_1 = l_3" />, давая 1 решение. На остальной части интервала <InlineMath math="[-4; 4)" /> прямая пересекает лучи <InlineMath math="l_1" /> и <InlineMath math="l_3" /> — <b>ровно 2 решения</b>.
        </li>
        <li>
          6. При <InlineMath math="a \in [4; 5]" />: луч <InlineMath math="l_3" /> ушел влево, прямая пересекает только луч <InlineMath math="l_1" /> — 1 решение.
        </li>
        <li>
          7. При <InlineMath math="a > 5" />: прямая пересекает уходящие вправо лучи <InlineMath math="l_1" /> и <InlineMath math="l_2" /> — <b>ровно 2 решения</b>.
        </li>
      </ul>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math="a \in (-\infty; -5] \cup \{-4.5\} \cup [-4; -0.5) \cup (-0.5; 4) \cup (5; +\infty)" />
      </div>
    </div>
  )
},


{
  id: 45,
  title: 'Задача 45 (ЕГЭ 2021, Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '|x^2 - a^2| = |x + a| \\cdot \\sqrt{a^2 + 3x - 6a}',
  textAfter: <span>имеет ровно два различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Используя свойство модуля <InlineMath math={`|x^2 - a^2| = |x + a| \\cdot |x - a|`} />, перенесем все слагаемые в левую часть и вынесем общий множитель за скобки:
      </p>
      <BlockMath math={`|x + a| \\cdot \\left(|x - a| - \\sqrt{a^2 + 3x - 6a}\\right) = 0.`} />
      
      <p>Данное уравнение равносильно совокупности:</p>
      <BlockMath math={`\\left[ \\begin{array}{l} |x + a| = 0, \\\\ \\begin{cases} |x - a| = \\sqrt{a^2 + 3x - 6a}, \\\\ a^2 + 3x - 6a \\geq 0 \\end{cases} \\end{array} \\right. \\iff \\left[ \\begin{array}{l} x = -a \\quad (l_1), \\\\ \\begin{cases} (x - a)^2 = a^2 + 3x - 6a, \\\\ a^2 + 3x - 6a \\geq 0 \\end{cases} \\end{array} \\right.`} />
      
      <p>Преобразуем уравнение внутри второй системы:</p>
      <BlockMath math={`x^2 - 2ax + a^2 = a^2 + 3x - 6a \\iff x^2 - (2a + 3)x + 6a = 0.`} />
      
      <p>По теореме Виета корнями этого квадратного уравнения являются:</p>
      <BlockMath math={`x = 2a \\quad (l_2) \\quad \\text{и} \\quad x = 3 \\quad (l_3).`} />
      
      <p>
        Ограничение системы (ОДЗ) перепишем в виде: <InlineMath math={`3x \\geq 6a - a^2 \\iff x \\geq 2a - \\frac{1}{3}a^2`} />. Графически это область, лежащая правее или на параболе <InlineMath math={`x(a) = -\\frac{1}{3}a^2 + 2a`} /> с вершиной в точке <InlineMath math={`V(3; 3)`} />.
      </p>
      
      <p>Определим области существования корней, подставив их в неравенство ОДЗ:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>Для <InlineMath math={`x_1 = -a`} />: <InlineMath math={`-a \\geq 2a - \\frac{1}{3}a^2 \\iff a^2 - 9a \\geq 0 \\implies a \\in (-\\infty; 0] \\cup [9; +\\infty)`} />.</li>
        <li>Для <InlineMath math={`x_2 = 2a`} />: <InlineMath math={`2a \\geq 2a - \\frac{1}{3}a^2 \\iff a^2 \\geq 0`} /> (выполняется всегда).</li>
        <li>Для <InlineMath math={`x_3 = 3`} />: <InlineMath math={`3 \\geq 2a - \\frac{1}{3}a^2 \\iff a^2 - 6a + 9 \\geq 0 \\iff (a - 3)^2 \\geq 0`} /> (выполняется всегда).</li>
      </ul>
      
      <p>Найдем точки взаимного пересечения (склеивания) прямых линий между собой:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li><InlineMath math={`l_1 \\cap l_2 \\implies -a = 2a \\iff a = 0`} /> (точка <InlineMath math={`O(0;0)`} />).</li>
        <li><InlineMath math={`l_1 \\cap l_3 \\implies -a = 3 \\iff a = -3`} /> (точка <InlineMath math={`A(3;-3)`} />).</li>
        <li><InlineMath math={`l_2 \\cap l_3 \\implies 2a = 3 \\iff a = 1.5`} /> (точка <InlineMath math={`B(3;1.5)`} />).</li>
      </ul>

      {/* Высокоточный и наглядный SVG-график Задачи 45 (max-w-[440px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 440" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Координатная сетка */}
          <g stroke="#e2e8f0" strokeWidth="0.8" className="dark:stroke-slate-800">
            <line x1="40" y1="20" x2="40" y2="420" />
            <line x1="76" y1="20" x2="76" y2="420" />
            <line x1="112" y1="20" x2="112" y2="420" />
            <line x1="148" y1="20" x2="148" y2="420" />
            <line x1="184" y1="20" x2="184" y2="420" />
            <line x1="220" y1="20" x2="220" y2="420" />
            <line x1="256" y1="20" x2="256" y2="420" />
            <line x1="292" y1="20" x2="292" y2="420" />
            <line x1="328" y1="20" x2="328" y2="420" />
            <line x1="364" y1="20" x2="364" y2="420" />
            <line x1="400" y1="20" x2="400" y2="420" />
            <line x1="20" y1="80" x2="420" y2="80" />
            <line x1="20" y1="116" x2="420" y2="116" />
            <line x1="20" y1="152" x2="420" y2="152" />
            <line x1="20" y1="188" x2="420" y2="188" />
            <line x1="20" y1="224" x2="420" y2="224" />
            <line x1="20" y1="260" x2="420" y2="260" />
            <line x1="20" y1="296" x2="420" y2="296" />
            <line x1="20" y1="332" x2="420" y2="332" />
            <line x1="20" y1="368" x2="420" y2="368" />
            <line x1="20" y1="404" x2="420" y2="404" />
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="260" x2="420" y2="260" />
            <line x1="220" y1="20" x2="220" y2="420" />
          </g>
          <path d="M 420,260 L 412,256 M 420,260 L 412,264" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 220,20 L 216,28 M 220,20 L 224,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="432" y="264" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="206" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="206" y="274" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>
          

          <line x1="216" y1="242" x2="224" y2="242" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="204" y="246" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Граница ОДЗ: Серая парабола x = -1/3 a^2 + 2a, положенная на бок */}
          {/* Абсолютно гладкие канонические дуги параболы Безье с постоянной выпуклостью вправо */}
          {/* Нижняя ветвь аккуратно приподнята на 0.1 деления (3.6px) без разрушения геометрии круглой вершины V */}
          <g fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-80">
            {/* 1) Верхняя ветвь: выходит из вершины V(3;3)->(274,206) и плавно выгибается ВВЕРХ к точке C(-9;9)->(58,98) */}
            <path d="M 274,206 C 240,165 140,110 58,98 C 45,96 40,92 24,88" />
            
            {/* 2) Нижняя ветвь: округлый купол в вершине сохранен, средняя часть приподнята вверх над l2, точка O(0;0)->(220,260) и продление выверены */}
            <path d="M 274,206 C 274,228 246,244 220,260 C 200,265 170,281 145,291 C 130,297 118,302 100,307" />
          </g>

          {/* Текстовое сопровождение и маркер вершины */}
          <text x="242" y="195" fill="#94a3b8" stroke="none" className="font-sans text-[10px] select-none">ОДЗ</text>
          <circle cx="274" cy="206" r="3" fill="#94a3b8" />
          <text x="284" y="202" fill="#94a3b8" stroke="none" className="font-sans text-xs select-none">V(3;3)</text>



          {/* Сплошные синие рабочие линии корней */}
          <line x1="58" y1="98" x2="30" y2="70" stroke="#2563eb" strokeWidth="2.5" />
          <line x1="220" y1="260" x2="300" y2="340" stroke="#2563eb" strokeWidth="2.5" />
          <text x="285" y="352" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">l₁</text>

          <line x1="130" y1="305" x2="380" y2="180" stroke="#2563eb" strokeWidth="2.5" />
          <text x="384" y="180" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">l₂</text>

          <line x1="274" y1="20" x2="274" y2="420" stroke="#2563eb" strokeWidth="2.5" />
          <text x="268" y="16" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-normal">l₃</text>

          <g stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3">
            <line x1="30" y1="98" x2="410" y2="98" />
            <text x="414" y="102" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 9</text>
            <line x1="30" y1="233" x2="410" y2="233" />
            <text x="414" y="237" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 1.5</text>
            <line x1="30" y1="314" x2="410" y2="314" />
            <text x="464" y="264" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 0</text>
            <line x1="30" y1="260" x2="460" y2="260" />
            <text x="414" y="318" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -3</text>
          </g>

          <circle cx="220" cy="260" r="3.5" fill="#000000" />
          <text x="226" y="272" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">(0;0)</text>
          <circle cx="274" cy="314" r="3.5" fill="#000000" />
          <text x="282" y="326" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">A(3;-3)</text>
          <circle cx="274" cy="233" r="3.5" fill="#000000" />
          <text x="282" y="233" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">B(3;1.5)</text>
          <circle cx="58" cy="98" r="3.5" fill="#000000" />
          <text x="32" y="94" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">C(-9;9)</text>
        </svg>
      </div>

            <p>
        Количество уникальных корней уравнения равно числу точек пересечения построенного графика с горизонтальной сканирующей прямой уровня <InlineMath math={`a`} />:
      </p>
      
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>1. При <InlineMath math={`a < -3`} />: пересечение с лучами <InlineMath math={`l_1, \\ l_2`} /> и <InlineMath math={`l_3`} /> — 3 корня.</li>
        <li>2. При <InlineMath math={`a = -3`} />: проход через узел пересечения <InlineMath math={`A(3;-3)`} /> линий <InlineMath math={`l_1`} /> и <InlineMath math={`l_3`} />, а также пересечение с <InlineMath math={`l_2`} /> — <b>ровно 2 корня</b>.</li>
        <li>3. При <InlineMath math={`a \\in (-3; 0)`} />: пересечение с лучами <InlineMath math={`l_1, \\ l_2`} /> и <InlineMath math={`l_3`} /> — 3 корня.</li>
        <li>4. При <InlineMath math={`a = 0`} />: проход через узел <InlineMath math={`O(0;0)`} /> линий <InlineMath math={`l_1`} /> и <InlineMath math={`l_2`} />, а также пересечение с <InlineMath math={`l_3`} /> — <b>ровно 2 корня</b>.</li>
        <li>5. При <InlineMath math={`a \\in (0; 1.5)`} />: луч <InlineMath math={`l_1`} /> отсутствует по ОДЗ, прямая пересекает только лучи <InlineMath math={`l_2`} /> и <InlineMath math={`l_3`} /> — <b>ровно 2 корня</b>.</li>
        <li>6. При <InlineMath math={`a = 1.5`} />: проход через узел пересечения <InlineMath math={`B(3;1.5)`} /> линий <InlineMath math={`l_2`} /> и <InlineMath math={`l_3`} /> — ровно 1 корень.</li>
        <li>7. При <InlineMath math={`a \\in (1.5; 9)`} />: луч <InlineMath math={`l_1`} /> отсутствует, прямая пересекает лучи <InlineMath math={`l_2`} /> и <InlineMath math={`l_3`} /> — <b>ровно 2 корня</b>.</li>
        <li>8. При <InlineMath math={`a \\geq 9`} />: луч <InlineMath math={`l_1`} /> снова появляется из-за границы ОДЗ параболы, пересечение с тремя лучами — 3 корня.</li>
      </ul>

      <p>Объединяя все подходящие значения и промежутки, получаем итоговый результат.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{-3\\} \\cup [0; 1.5) \\cup (1.5; 9)`} />
      </div>
    </div>
  )
},


{
  id: 46,
  title: 'Задача 46 (ЕГЭ-2021. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: 'a|x^2 - 9| + a|x - 3| - 1 = 0',
  textAfter: <span>имеет ровно два различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Заметим, что если <InlineMath math={`a = 0`} />, то уравнение принимает вид <InlineMath math={`-1 = 0`} />, что не имеет решений. Следовательно, <InlineMath math={`a \\neq 0`} />. Разделим обе части уравнения на <InlineMath math={`a`} /> и разложим разность квадратов под первым модулем:
      </p>
      <BlockMath math={`|x - 3| \\cdot |x + 3| + |x - 3| = \\frac{1}{a} \\iff |x - 3| \\cdot (|x + 3| + 1) = \\frac{1}{a}.`} />
      
      <p>
        Раскроем модули методом интервалов. Корнями подмодульных выражений являются критические точки <InlineMath math={`x = -3`} /> и <InlineMath math={`x = 3`} />. Рассмотрим три получившихся промежутка:
      </p>
      
      <p>
        <b>1) При <InlineMath math={`x > 3`} /> (знаки модулей <InlineMath math={`++`} />):</b>
      </p>
      <BlockMath math={`(x - 3)(x + 3) + x - 3 = \\frac{1}{a} \\iff x^2 - 12 + x = \\frac{1}{a} \\implies a = \\frac{1}{(x - 3)(x + 4)}.`} />
      
      <p>
        <b>2) При <InlineMath math={`-3 \\leq x \\leq 3`} /> (знаки модулей <InlineMath math={`+-`} />):</b>
      </p>
      <BlockMath math={`-(x - 3)(x + 3) - (x - 3) = \\frac{1}{a} \\iff (3 - x)(x + 4) = \\frac{1}{a} \\implies a = \\frac{1}{(3 - x)(x + 4)}.`} />
      <p>
        Заметим, что знаменатель этой функции представляет собой параболу ветвями вниз с вершиной в точке <InlineMath math={`x_0 = -0.5`} />. При этом всей дроби соответствует локальный минимум:
      </p>
      <BlockMath math={`a_{\\min} = \\frac{1}{(3 - (-0.5))(-0.5 + 4)} = \\frac{1}{12.25} = \\frac{4}{49}.`} />
      
      <p>
        <b>3) При <InlineMath math={`x < -3`} /> (знаки модулей <InlineMath math={`--`} />):</b>
      </p>
      <BlockMath math={`-(x - 3)(-(x + 3)) - (x - 3) = \\frac{1}{a} \\iff (x - 3)(x + 2) = \\frac{1}{a} \\implies a = \\frac{1}{(x - 3)(x + 2)}.`} />
      <p>
        При <InlineMath math={`x \\to -3`} /> слева знаменатель стремится к <InlineMath math={`(-3 - 3)(-3 + 2) = 6`} />, то есть график подходит к точке <InlineMath math={`A\\left(-3; \\frac{1}{6}\\right)`} />. Прямые <InlineMath math={`x = -3`} /> и <InlineMath math={`x = 3`} /> являются вертикальными асимптотами для ветвей графика.
      </p>

            <p>Изобразим полученное множество решений в координатной плоскости <InlineMath math={`xOa`} />:</p>

      {/* Высокоточный и наглядный SVG-график Задачи 46 (max-w-[460px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 540 300" className="w-full max-w-[460px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Легкая сетка: Шаг 24px по Ox, Шаг 36px по Oa. Центр (0,0) на x=240, y=200 */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-8, -6, -4, -2, 2, 4, 6, 8, 10, 12].map(i => (
              <line key={`x-${i}`} x1={240 + i*24} y1="20" x2={240 + i*24} y2="260" />
            ))}
            {[-4, -2, 2, 4, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={200 - i*36} x2="520" y2={200 - i*36} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="200" x2="520" y2="200" /> {/* Ox */}
            <line x1="240" y1="20" x2="240" y2="260" />  {/* Oa */}
          </g>
          <path d="M 520,200 L 512,196 M 520,200 L 512,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 240,20 L 236,28 M 240,20 L 244,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="532" y="204" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="226" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="226" y="214" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки на оси Ox */}
          <line x1="168" y1="196" x2="168" y2="204" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="160" y="216" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">-3</text>
          <line x1="312" y1="196" x2="312" y2="204" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="310" y="216" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">3</text>
          <text x="220" y="234" fill="#000000" stroke="none" className="dark:fill-slate-400 font-sans text-[11px]">-1/2</text>

          {/* Вертикальные асимптоты (черный штрихпунктир) */}
          <g stroke="#475569" strokeWidth="1" strokeDasharray="5 3 2 3">
            <line x1="168" y1="20" x2="168" y2="260" /> {/* x = -3 */}
            <line x1="312" y1="20" x2="312" y2="260" /> {/* x = 3 */}
          </g>

          {/* Красные маркерные линии уровней (горизонтальный пунктир) */}
          <g stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3">
            <line x1="20" y1="120" x2="520" y2="120" /> {/* a = 1/6 (y = 200 - 80 = 120) */}
            <text x="475" y="114" fill="#dc2626" stroke="none" className="font-sans text-[11px]">a = 1/6</text>
            
            <line x1="20" y1="160" x2="520" y2="160" /> {/* a = 4/49 (y = 200 - 40 = 160) */}
            <text x="475" y="154" fill="#dc2626" stroke="none" className="font-sans text-[11px]">a = 4/49</text>
          </g>

          {/* Синие ветви графиков функций */}
          {/* 1) Левая ветвь (x < -3): плавно поднимается от оси Ox к точке A(-3; 1/6) */}
          <path d="M 20,185 C 60,180 120,165 168,120" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="40" y="105" fill="#2563eb" stroke="none" className="font-sans text-[10px]">a = 1/((x-3)(x+2))</text>

          {/* 2) Центральное корыто (-3 <= x <= 3): выходит из A, падает к M(-0.5; 4/49), круто улетает вверх к x = 3 */}
          <path d="M 168,120 C 195,145 210,160 228,160 C 255,160 290,120 306,20" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="245" y="105" fill="#2563eb" stroke="none" className="font-sans text-[10px]">a = 1/((3-x)(x+4))</text>

          {/* 3) Правая ветвь (x > 3): падает из бесконечности вдоль x = 3, плавно стремится к оси Ox */}
          <path d="M 318,20 C 324,110 360,175 520,188" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="385" y="105" fill="#2563eb" stroke="none" className="font-sans text-[10px]">a = 1/((x-3)(x+4))</text>

          {/* Маркерные узлы */}
          <circle cx="168" cy="120" r="3.5" fill="#000000" /> {/* Точка A */}
          <text x="156" y="112" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-semibold">A</text>

          <circle cx="228" cy="160" r="3.5" fill="#000000" /> {/* Точка M */}
          <text x="224" y="150" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-semibold">M</text>
        </svg>
      </div>

      <p>
        Количество решений исходного уравнения при каждом фиксированном значении <InlineMath math={`a`} /> равно числу точек пересечения построенного графика с горизонтальной сканирующей прямой уровня <InlineMath math={`a`} />:
      </p>

      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          1. При <InlineMath math={`a \\leq 0`} />: точек пересечения с синим графиком нет — 0 решений.
        </li>
        <li>
          2. При <InlineMath math={`a \\in \\left(0; \\frac{4}{49}\\right)`} />: прямая пересекает уходящую влево ветвь <InlineMath math={`l_3 \\ (x < -3)`} /> и уходящую вправо ветвь <InlineMath math={`l_1 \\ (x > 3)`} /> — <b>ровно 2 решения</b> (подходит).
        </li>
        <li>
          3. При <InlineMath math={`a = \\frac{4}{49}`} />: прямая касается «дна» центральной ветви в вершине <InlineMath math={`M\\left(-0.5; \\frac{4}{49}\\right)`} /> и пересекает две крайние ветви — всего 3 решения.
        </li>
        <li>
          4. При <InlineMath math={`a \\in \\left(\\frac{4}{49}; \\frac{1}{6}\\right)`} />: прямая пересекает левую ветвь, две ветви центрального корыта и крайнюю правую ветвь — всего 4 решения.
        </li>
        <li>
          5. При <InlineMath math={`a = \\frac{1}{6}`} />: прямая проходит через точку стыка <InlineMath math={`A\\left(-3; \\frac{1}{6}\\right)`} />, пересекает правый склон центрального корыта и крайнюю правую ветвь — всего 3 решения.
        </li>
        <li>
          6. При <InlineMath math={`a > \\frac{1}{6}`} />: центральное корыто уходит выше уровня сканирования. Прямая пересекает левую ветвь (которая уходит вдоль асимптоты <InlineMath math={`x = -3`} /> вверх к <InlineMath math={`+\\infty`} />) и крайнюю правую ветвь — <b>ровно 2 решения</b> (подходит).
        </li>
      </ul>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(0; \\frac{4}{49}\\right) \\cup \\left(\\frac{1}{6}; +\\infty\\right)`} />
      </div>
    </div>
  )
},
=======




>>>>>>> 38be11936502c66d2f15e1dba3ba91f6ee15c1c7






];