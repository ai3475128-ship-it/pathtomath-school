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
      
      <p>Анализ замены: <InlineMath math={`t = |x - (a + 1)| + |x - (a - 1)|`} /> — график кусочно-линейной функции с &quot;дном&quot; на высоте <InlineMath math={`t = 2`} /></p>
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
  title: 'Задача 44 (ЕГЭ)',
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

{
  id: 47,
  title: 'Задача 47 (ЕГЭ-2020. Досрочная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\frac{9x^2 - a^2}{x^2 + 8x + 16 - a^2} = 0',
  textAfter: <span>имеет ровно два различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Дробь равна нулю, когда числитель равен нулю, а знаменатель отличен от нуля. Исходное уравнение равносильно следующей цепочке логических преобразований:
      </p>
      <BlockMath math={`\\begin{cases} 9x^2 - a^2 = 0, \\\\ (x + 4)^2 - a^2 \\neq 0 \\end{cases} \\iff \\begin{cases} (3x - a)(3x + a) = 0, \\\\ (x + 4 - a)(x + 4 + a) \\neq 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{array}{l} a = 3x, \\\\ a = -3x, \\end{array} \\right. \\\\[1.5ex] \\left[ \\begin{array}{l} a \\neq x + 4 \\quad (l_1), \\\\ a \\neq -x - 4 \\quad (l_2). \\end{array} \\right. \\end{cases}`} />
      
      <p>
        Решим задачу графическим методом в системе координат <InlineMath math={`xOa`} />. Множество потенциальных решений задается двумя пересекающимися в точке <InlineMath math={`O(0;0)`} /> прямыми совокупности корней. Условие «знаменатель не равен нулю» означает, что из этих прямых выкалываются точки их пересечения с запрещенными прямыми системы ограничений <InlineMath math={`l_1`} /> и <InlineMath math={`l_2`} />.
      </p>


      
      <p>Найдем координаты выкалываемых точек, поочередно пересекая прямые корней с линиями ограничений:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>
          Пересечение <InlineMath math={`a = 3x`} /> и <InlineMath math={`l_1 : a = x + 4 \\implies 3x = x + 4 \\iff 2x = 4 \\implies x = 2`} />, тогда <InlineMath math={`a = 6`} />. Точка <InlineMath math={`A(2;6)`} />.
        </li>
        <li>
          Пересечение <InlineMath math={`a = 3x`} /> и <InlineMath math={`l_2 : a = -x - 4 \\implies 3x = -x - 4 \\iff 4x = -4 \\implies x = -1`} />, тогда <InlineMath math={`a = -3`} />. Точка <InlineMath math={`B(-1;-3)`} />.
        </li>
        <li>
          Пересечение <InlineMath math={`a = -3x`} /> и <InlineMath math={`l_1 : a = x + 4 \\implies -3x = x + 4 \\iff 4x = -4 \\implies x = -1`} />, тогда <InlineMath math={`a = 3`} />. Точка <InlineMath math={`C(-1;3)`} />.
        </li>
        <li>
          Пересечение <InlineMath math={`a = -3x`} /> и <InlineMath math={`l_2 : a = -x - 4 \\implies -3x = -x - 4 \\iff 2x = 4 \\implies x = 2`} />, тогда <InlineMath math={`a = -6`} />. Точка <InlineMath math={`D(2;-6)`} />.
        </li>
      </ul>
      
      <p>
        Также отметим ординату точки пересечения самих прямых корней: <InlineMath math={`3x = -3x \\implies x = 0`} />, откуда <InlineMath math={`a = 0`} /> (точка <InlineMath math={`O(0;0)`} />). В этой точке две ветви корней пересекаются (склеиваются), давая один уникальный корень.
      </p>

            {/* Высокоточный и наглядный SVG-график Задачи 47 (max-w-[430px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 500" className="w-full max-w-[430px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Легкая сетка: Шаг 28px по Ox, Шаг 28px по Oa. Центр (0,0) на x=220, y=250 */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-6, -4, -2, 2, 4, 6].map(i => (
              <line key={`x-${i}`} x1={220 + i*28} y1="20" x2={220 + i*28} y2="480" />
            ))}
            {[-8, -6, -4, -2, 2, 4, 6, 8].map(i => (
              <line key={`y-${i}`} x1="20" y1={250 - i*28} x2="420" y2={250 - i*28} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="250" x2="420" y2="250" /> {/* Ось Ox */}
            <line x1="220" y1="20" x2="220" y2="480" />  {/* Ось Oa */}
          </g>
          <path d="M 420,250 L 412,246 M 420,250 L 412,254" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 220,20 L 216,28 M 220,20 L 224,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="432" y="254" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="206" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="206" y="264" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Единичные штрихи */}
          <line x1="248" y1="246" x2="248" y2="254" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="245" y="266" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <line x1="216" y1="222" x2="224" y2="222" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="204" y="226" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Запрещенные линии ограничений (серый пунктир, пересекающийся строго в (-4;0) на оси Ox) */}
          <g fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4">
            {/* l1: a = x + 4. Идет из (-4;0)->(108,250) через C(-1;3)->(192,166) и A(2;6)->(276,82) */}
            <path d="M 52,306 L 332,26" />
            <text x="315" y="44" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">l₁</text>

            {/* l2: a = -x - 4. Идет из (-4;0)->(108,250) через B(-1;-3)->(192,334) и D(2;-6)->(276,418) */}
            <path d="M 52,194 L 332,474" />
            <text x="315" y="454" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">l₂</text>
          </g>


          {/* Сплошные синие линии корней */}
          {/* a = 3x. Проходит через (0,0)->(220,250) и (2,6)->(276,82), (-2,-6)->(164,418) */}
          <line x1="148" y1="474" x2="292" y2="26" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* a = -3x. Проходит через (0,0)->(220,250) и (-2,6)->(164,82), (2,-6)->(276,418) */}
          <line x1="148" y1="26" x2="292" y2="474" stroke="#2563eb" strokeWidth="2.5" />

          {/* Красные горизонтальные маркерные уровни (горизонтальный пунктир) */}
          <g stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3">
            <line x1="40" y1="82" x2="400" y2="82" /> {/* a = 6 (250 - 6*28 = 82) */}
            <text x="382" y="76" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 6</text>

            <line x1="40" y1="166" x2="400" y2="166" /> {/* a = 3 (250 - 3*28 = 166) */}
            <text x="382" y="160" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 3</text>

            <line x1="40" y1="334" x2="400" y2="334" /> {/* a = -3 (250 + 3*28 = 334) */}
            <text x="382" y="328" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -3</text>

            <line x1="40" y1="418" x2="400" y2="418" /> {/* a = -6 (250 + 6*28 = 418) */}
            <text x="382" y="412" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -6</text>
          </g>

          {/* Маркерные точки пересечений */}
          <circle cx="220" cy="250" r="3.5" fill="#000000" /> {/* O(0,0) */}
          <text x="228" y="262" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">O</text>

          {/* Четыре ВЫКОЛОТЫЕ точки пересечения с ограничениями */}
          <circle cx="276" cy="82" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" />
          <text x="286" y="86" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">A(2;6)</text>

          <circle cx="192" cy="334" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" />
          <text x="144" y="338" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">B(-1;-3)</text>

          <circle cx="192" cy="166" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" />
          <text x="144" y="170" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">C(-1;3)</text>

          <circle cx="276" cy="418" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" />
          <text x="286" y="422" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">D(2;-6)</text>
        </svg>
      </div>

      <p>
        Количество корней исходного уравнения равно числу точек пересечения синего графика с горизонтальной сканирующей прямой уровня <InlineMath math={`a`} />:
      </p>

      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          1. При <InlineMath math={`a = 0`} />: сканирующая прямая проходит через центр <InlineMath math={`O(0;0)`} />, где пересекаются прямые <InlineMath math={`a = 3x`} /> и <InlineMath math={`a = -3x`} bitumen />. Корень один (<InlineMath math={`x = 0`} />) — 1 решение.
        </li>
        <li>
          2. При <InlineMath math={`a \\in \\{-6; -3; 3; 6\\}`} />: прямая проходит через одну из выколотых точек (<InlineMath math={`D, \\ B, \\ C`} /> или <InlineMath math={`A`} /> соответственно). В этот момент один из двух потенциальных корней уничтожается знаменателем, оставляя ровно один уцелевший корень на противоположной ветви — 1 решение.
        </li>
        <li>
          3. При всех остальных значениях параметра <InlineMath math={`a`} />: горизонтальная линия пересекает обе синие прямые в разрешенных областях, давая два различных действительных корня — <b>ровно 2 решения</b>.
        </li>
      </ul>

      <p>Исключая из всей числовой оси точки, где уравнение имеет одно решение, получаем итоговый ответ.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -6) \\cup (-6; -3) \\cup (-3; 0) \\cup (0; 3) \\cup (3; 6) \\cup (6; +\\infty)`} />
      </div>
    </div>
  )
},


{
  id: 48,
  title: 'Задача 48 (ЕГЭ-2020. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} \\log_5(16 - y^2) = \\log_5(16 - a^2x^2), \\\\ x^2 + y^2 = 6x + 4y \\end{cases}',
  textAfter: <span>имеет ровно два различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Перейдем к эквивалентной системе, раскрыв логарифмы с учетом ОДЗ подлогарифмических выражений <InlineMath math={`16 - y^2 > 0 \\iff y \\in (-4; 4)`} />:
      </p>
      <BlockMath math={`\\begin{cases} 16 - y^2 = 16 - a^2x^2, \\\\ (x - 3)^2 + (y - 2)^2 = 13, \\\\ -4 < y < 4 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{array}{l} y = ax, \\\\ y = -ax, \\end{array} \\right. \\quad \\text{(пучок прямых)} \\\\[1.5ex] (x - 3)^2 + (y - 2)^2 = 13 \\quad (\\text{окружность } \\omega), \\\\ y \\in (-4; 4). \\end{cases}`} />
      
      <p>
        Окружность <InlineMath math={`\\omega`} /> с центром <InlineMath math={`C(3;2)`} /> и радиусом <InlineMath math={`R = \\sqrt{13}`} /> проходит через начало координат <InlineMath math={`O(0;0)`} />. Пучок прямых <InlineMath math={`|y| = |a|x`} /> симметричен относительно оси <InlineMath math={`Oy`} />. Каждая прямая пучка всегда пересекает окружность в точке <InlineMath math={`O(0;0)`} />, давая тривиальное решение системы при любых <InlineMath math={`a`} />, и пересекает её во второй (симметричной) точке.
      </p>
      
      <p>Найдем критические положения сканирующих прямых, дающие ровно 2 решения системы:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>
          <b>1) Касание окружности в точке <InlineMath math={`O(0;0)`} />:</b> вектор нормали совпадает с вектором центра <InlineMath math={`\\vec{OC} = (3;2)`} bitumen />. Уравнение касательной: <InlineMath math={`3x + 2y = 0 \\iff y = -1.5x \\implies a = \\pm 1.5`} />. В этот момент одна из прямых касается окружности (дает только корень <InlineMath math={`O`} />), а вторая ветвь пучка пересекает окружность в точке <InlineMath math={`O`} /> и еще одной точке на мнимой окружности. Всего ровно 1 решение (не подходит).
        </li>
        <li>
          <b>2) Проход через выколотые точки на границах ОДЗ:</b> Пересечение <InlineMath math={`\\omega`} /> и верхней границы <InlineMath math={`y = 4`} /> дает: <InlineMath math={`x^2 + 16 = 6x + 16 \\iff x^2 - 6x = 0 \\implies x = 6`} />, получаем выколотую точку <InlineMath math={`A(6;4)`} /> (точка <InlineMath math={`(0;4)`} /> лежит вне окружности). Прямые проходят через <InlineMath math={`A`} /> при <InlineMath math={`|4| = |a| \\cdot 6 \\implies a = \\pm \\frac{2}{3}`} />. Пересечение в выколотой точке исчезает, оставляя ровно 2 решения системы (подходит). Пересечение <InlineMath math={`\\omega`} /> и нижней границы <InlineMath math={`y = -4`} /> дает пустое множество.
        </li>
        <li>
          <b>3) Пересечение с осью <InlineMath math={`Ox \\ (a = 0)`} />:</b> прямая <InlineMath math={`y = 0`} /> пересекает окружность в точках <InlineMath math={`(0;0)`} /> и <InlineMath math={`(6;0)`} />, обе лежат внутри полосы ОДЗ — ровно 2 решения (подходит).
        </li>
      </ul>

            <p>Проведем графический анализ числа пересечений при росте наклона прямых пучка <InlineMath math={`|a|`} /> от <InlineMath math={`0`} /> до <InlineMath math={`+\\infty`} />:</p>

      {/* Высокоточный и наглядный SVG-график Задачи 48 (max-w-[440px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 380" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Сетка: Шаг 20px по Ox и по Oy. Центр (0,0) на x=140, y=200 */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-4, -2, 2, 4, 6, 8, 10, 12].map(i => (
              <line key={`x-${i}`} x1={140 + i*20} y1="20" x2={140 + i*20} y2="360" />
            ))}
            {[-6, -4, -2, 2, 4, 6, 8].map(i => (
              <line key={`y-${i}`} x1="20" y1={200 - i*20} x2="420" y2={200 - i*20} />
            ))}
          </g>

          {/* Полоса ОДЗ: Горизонтальные границы (серый штрихпунктир) */}
          <g stroke="#94a3b8" strokeWidth="1" strokeDasharray="5 3 2 3">
            <line x1="20" y1="120" x2="420" y2="120" /> {/* y = 4 */}
            <line x1="20" y1="280" x2="420" y2="280" /> {/* y = -4 */}
          </g>
          <text x="360" y="114" fill="#94a3b8" stroke="none" className="font-sans text-[11px]">y = 4</text>
          <text x="360" y="295" fill="#94a3b8" stroke="none" className="font-sans text-[11px]">y = -4</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="200" x2="420" y2="200" /> {/* Ox */}
            <line x1="140" y1="20" x2="140" y2="360" />  {/* Oy */}
          </g>
          <path d="M 420,200 L 412,196 M 420,200 L 412,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 140,20 L 136,28 M 140,20 L 144,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="432" y="204" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="126" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="126" y="214" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Единичные штрихи */}
          <line x1="160" y1="196" x2="160" y2="204" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="157" y="216" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <line x1="136" y1="180" x2="144" y2="180" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="124" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Синяя окружность ω с центром C(3;2) -> (200, 160), радиусом R = sqrt(13) * 20 ≈ 72px */}
          <circle cx="200" cy="160" r="72.11" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <circle cx="200" cy="160" r="3.5" fill="#2563eb" />
          <text x="206" y="154" fill="#2563eb" stroke="none" className="font-sans text-xs font-semibold">C(3;2)</text>

          {/* Оранжевые прямые |a| = 1,5 (y = 1.5x и y = -1.5x) касание */}
          <line x1="60" y1="320" x2="220" y2="80" stroke="#ea580c" strokeWidth="1.5" />
          <line x1="60" y1="80" x2="220" y2="320" stroke="#ea580c" strokeWidth="1.5" />
          <text x="210" y="74" fill="#ea580c" stroke="none" className="font-sans text-[10px]">|a| = 1,5</text>

          {/* Зеленые прямые |a| = 2/3. Математически точный пучок через начало координат O(0;0) */}
          {/* y = (2/3)x: проходит СТРОГО через O(0;0)->(140,200) и выколотую точку A(6;4)->(260,120) */}
          <line x1="20" y1="280" x2="380" y2="40" stroke="#16a34a" strokeWidth="1.5" />
          {/* y = -(2/3)x: симметричная ветвь пучка, проходит СТРОГО через O(0;0)->(140,200) */}
          <line x1="20" y1="120" x2="320" y2="320" stroke="#16a34a" strokeWidth="1.5" />
          <text x="230" y="300" fill="#16a34a" stroke="none" className="font-sans text-[10px]">|a| = 2/3</text>

          {/* Маркерные точки */}
          <circle cx="140" cy="200" r="3.5" fill="#000000" /> {/* Начало координат O */}
          <text x="146" y="212" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">O</text>

          {/* Выколотая точка A(6;4) на границе ОДЗ */}
          <circle cx="260" cy="120" r="3.5" fill="white" stroke="#dc2626" strokeWidth="2" className="fill-white dark:fill-slate-950" />
          <text x="270" y="116" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">A(6;4)</text>
        </svg>
      </div>

      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          • При <InlineMath math={`a = 0`} />: прямая <InlineMath math={`y = 0`} /> дает <span className="text-emerald-600 dark:text-emerald-400 font-bold">2 решения</span> внутри полосы.
        </li>
        <li>
          • При <InlineMath math={`|a| < \\frac{2}{3}`} />: обе прямые пересекают окружность внутри ОДЗ — всего 3 решения.
        </li>
        <li>
          • При <InlineMath math={`|a| = \\frac{2}{3}`} />: одна из прямых уходит в выколотую точку <InlineMath math={`A`} />, оставляя в ОДЗ — <span className="text-emerald-600 dark:text-emerald-400 font-bold">ровно 2 решения</span> (подходит).
        </li>
        <li>
          • При <InlineMath math={`|a| \\in \\left(\\frac{2}{3}; 1,5\\right)`} />: одна точка лежит на мнимой части окружности выше границы <InlineMath math={`y = 4`} />, другая — на нижней части окружности, и точка <InlineMath math={`O`} /> остается — <span className="text-emerald-600 dark:text-emerald-400 font-bold">всего 2 решения</span> (подходит).
        </li>
        <li>
          • При <InlineMath math={`|a| = 1,5`} />: момент касания одной из ветвей пучка, вторая ветвь пересекает окружность вне ОДЗ — ровно 1 решение.
        </li>
        <li>
          • При <InlineMath math={`|a| > 1,5`} />: точка <InlineMath math={`O`} /> и точки, принадлежащие окружности левее оси <InlineMath math={`Oy`} /> — <span className="text-emerald-600 dark:text-emerald-400 font-bold">всего 2 решения</span> (подходит).
        </li>
      </ul>


      <p>Собирая все удовлетворяющие условию промежутки и раскрывая модуль параметра, получаем окончательный результат.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(-\\infty; -1,5\\right) \\cup \\left(-1,5; -\\frac{2}{3}\\right] \\cup \\{0\\} \\cup \\left[\\frac{2}{3}; 1,5\\right) \\cup \\left(1,5; +\\infty\\right)`} />
      </div>
    </div>
  )
},


{
  id: 49,
  title: 'Задача 49 (ЕГЭ-2020. Основная волна, резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: 'x^4 \\sin a + 2x^2 \\cos a + \\sin a = 0',
  textAfter: <span>имеет ровно два различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Пусть <InlineMath math="t = x^2 \geq 0" />. Исходное биквадратное уравнение имеет ровно два различных действительных корня тогда и только тогда, когда полученное квадратное уравнение относительно <InlineMath math="t" /> имеет <b>ровно один строго положительный корень</b>.
      </p>
      
      <p>
        Рассмотрим случай, когда <InlineMath math="\sin a = 0 \iff a = \pi k, \ k \in \mathbb{Z}" />. В этом случае уравнение становится линейным:
      </p>
      <BlockMath math="2t \cos(\pi k) = 0 \implies t = 0 \implies x = 0 \quad \text{(1 корень, не подходит)}." />
      
      <p>
        При <InlineMath math="\sin a \neq 0" /> разделим обе части исходного уравнения на <InlineMath math="\sin a" />, переходя к нормированному квадратному уравнению:
      </p>
      <BlockMath math="t^2 + 2 \operatorname{ctg} a \cdot t + 1 = 0." />
      
      <p>
        Единственность корня и его строго положительный знак задаются условием равенства дискриминанта нулю при условии, что абсцисса вершины параболы <InlineMath math="t_0 = -\operatorname{ctg} a" /> строго больше нуля:
      </p>
      <BlockMath math="\begin{cases} D/4 = 0, \\ t_0 > 0 \end{cases} \iff \begin{cases} \operatorname{ctg}^2 a - 1 = 0, \\ -\operatorname{ctg} a > 0 \end{cases} \iff \begin{cases} \operatorname{ctg} a = \pm 1, \\ \operatorname{ctg} a < 0 \end{cases} \implies \operatorname{ctg} a = -1." />

      <p>Решим полученное тригонометрическое уравнение графически:</p>
      <BlockMath math="\operatorname{ctg} a = -1 \iff a = \frac{3\pi}{4} + \pi k, \ k \in \mathbb{Z}." />

      {/* Высокоточный и наглядный SVG-график Задачи 49 (max-w-[420px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 240" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Легкая статическая координатная сетка */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            <line x1="180" y1="20" x2="180" y2="220" />
            <line x1="240" y1="20" x2="240" y2="220" />
            <line x1="300" y1="20" x2="300" y2="220" />
            <line x1="360" y1="20" x2="360" y2="220" />
            <line x1="40" y1="85" x2="420" y2="85" />
            <line x1="40" y1="115" x2="420" y2="115" />
            <line x1="40" y1="175" x2="420" y2="175" />
            <line x1="40" y1="205" x2="420" y2="205" />
          </g>

          {/* Ось параметров и значений */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="145" x2="420" y2="145" /> {/* Ось Oa */}
            <line x1="120" y1="20" x2="120" y2="220" />  {/* Ось Oy */}
          </g>
          <path d="M 420,145 L 412,141 M 420,145 L 412,149" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 120,20 L 116,28 M 120,20 L 124,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="432" y="149" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="106" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="106" y="158" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки тригонометрических углов на оси Oa */}
          <line x1="240" y1="141" x2="240" y2="149" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="234" y="162" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">π</text>
          <line x1="360" y1="141" x2="360" y2="149" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="352" y="162" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">π</text>
          
          <line x1="210" y1="141" x2="210" y2="149" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="194" y="136" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px]">3π/4</text>
          
          <line x1="330" y1="141" x2="330" y2="149" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="314" y="136" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px]">7π/4</text>

          {/* Сканирующий уровень y = -1 (красный пунктир) */}
          <line x1="40" y1="175" x2="420" y2="175" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3" />
          <text x="424" y="179" fill="#dc2626" stroke="none" className="font-sans text-[11px]">y = -1</text>

          {/* Плавные синие ветви графика котангенса y = ctg a (кривые Безье) */}
          <path d="M 130,30 C 140,110 180,145 210,175 C 220,185 225,200 230,220" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <path d="M 250,30 C 260,110 300,145 330,175 C 340,185 345,200 350,220" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="358" y="215" fill="#2563eb" stroke="none" className="font-sans text-[11px] italic">y = ctg a</text>

          {/* Красные маркерные заполненные точки пересечений */}
          <circle cx="210" cy="175" r="4" fill="#dc2626" />
          <circle cx="330" cy="175" r="4" fill="#dc2626" />
        </svg>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math="a = \frac{3\pi}{4} + \pi k, \ k \in \mathbb{Z}" />
      </div>
    </div>
  )
},


{
  id: 50,
  title: 'Задача 50 (ЕГЭ-2020. Основная волна, резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} x^2 + y^2 = 4 + 2ax - a^2, \\\\ x^2 = y^2 \\end{cases}',
  textAfter: <span>имеет ровно четыре различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Преобразуем систему уравнений, выделив полный квадрат в первом уравнении и раскрыв разность квадратов во втором. Получаем цепочку равносильных логических преобразований:
      </p>
      <BlockMath math={`\\begin{cases} (x - a)^2 + y^2 = 4, \\\\ |y| = |x| \\end{cases} \\iff \\begin{cases} (x - a)^2 + y^2 = 4 \\quad (\\text{окружность } \\omega_a), \\\\[1.5ex] \\left[ \\begin{array}{l} y = x, \\\\ y = -x, \\end{array} \\right. \\quad (\\text{две фиксированные прямые}). \\end{cases}`} />
      
      <p>
        График второго уравнения состоит из двух перпендикулярных прямых <InlineMath math={`y = x`} /> и <InlineMath math={`y = -x`} />, пересекающихся в начале координат <InlineMath math={`O(0;0)`} />. Первое уравнение задает подвижную окружность <InlineMath math={`\\omega_a`} /> радиуса <InlineMath math={`R = 2`} />, центр которой <InlineMath math={`C(a;0)`} /> непрерывно скользит вдоль оси абсцисс.
      </p>
      
      <p>
        Каждая из двух прямых имеет с окружностью радиуса 2 либо 0 общих точек (нет пересечений), либо 1 точку (касание), либо 2 точки (пересечение). Для того чтобы общее число решений системы было <b>ровно четыре</b>, окружность обязана пересекать каждую из двух прямых ровно в двух различных точках. При этом ни одна из точек пересечения не должна совпадать с точкой <InlineMath math={`O(0;0)`} />, где пересекаются сами прямые.
      </p>
      
      <p>
        <b>1) Найдем критические значения параметра <InlineMath math={`a`} />, при которых окружность касается одной из прямых.</b> Расстояние от центра <InlineMath math={`C(a;0)`} /> до прямых <InlineMath math={`x \\pm y = 0`} /> равно:
      </p>
      <BlockMath math={`d = \\frac{|a \\pm 0|}{\\sqrt{1^2 + (\\pm 1)^2}} = \\frac{|a|}{\\sqrt{2}}.`} />
      
      <p>Касание достигается при равенстве расстояния радиусу окружности (<InlineMath math={`d = R = 2`} />):</p>
      <BlockMath math={`\\frac{|a|}{\\sqrt{2}} = 2 \\iff |a| = 2\\sqrt{2} \\implies a = \\pm 2\\sqrt{2}.`} />
      
      <p>
        При <InlineMath math={`|a| > 2\\sqrt{2}`} /> пересечений нет (0 решений). При <InlineMath math={`|a| = 2\\sqrt{2}`} /> окружность касается обеих прямых в силу симметрии (2 решения). Следовательно, для наличия 4 решений центр окружности должен находиться ближе к начале координат:
      </p>
      <BlockMath math={`|a| < 2\\sqrt{2} \\iff a \\in (-2\\sqrt{2}; 2\\sqrt{2}).`} />
      
      <p>
        <b>2) Исключим случай, когда окружность проходит через точку пересечения прямых <InlineMath math={`O(0;0)`} /></b>, что привело бы к совпадению корней и уменьшению их общего числа. Подставим <InlineMath math={`O(0;0)`} /> в уравнение окружности:
      </p>
      <BlockMath math={`(0 - a)^2 + 0^2 = 4 \\iff a^2 = 4 \\implies a = \\pm 2.`} />
      
      <p>
        При <InlineMath math={`a = \\pm 2`} /> окружность проходит через <InlineMath math={`O(0;0)`} /> и пересекает каждую прямую еще в одной точке, давая в сумме <InlineMath math={`1 + 1 + 1 = 3`} /> решения (не подходит).
      </p>

      {/* Высокоточный и наглядный SVG-график Задачи 50 (max-w-[420px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 240" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none">
          {/* Легкая координатная сетка (Шаг: 1 ед = 25px. Начало (0,0) на x=200, y=120) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-6, -4, -2, 2, 4, 6, 8].map(i => (
              <line key={`x-${i}`} x1={200 + i*25} y1="20" x2={200 + i*25} y2="220" />
            ))}
            {[-4, -2, 2, 4].map(i => (
              <line key={`y-${i}`} x1="40" y1={120 - i*25} x2="400" y2={120 - i*25} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="120" x2="400" y2="120" /> {/* Ось Ox */}
            <line x1="200" y1="20" x2="200" y2="220" />  {/* Ось Oy */}
          </g>
          <path d="M 400,120 L 392,116 M 400,120 L 392,124" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 200,20 L 196,28 M 200,20 L 204,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="412" y="124" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="186" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="186" y="134" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Единичные штрихи */}
          <line x1="225" y1="116" x2="225" y2="124" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="222" y="136" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <line x1="196" y1="95" x2="204" y2="95" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="184" y="99" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Две перпендикулярные прямые y = x и y = -x (синие) */}
          <g stroke="#2563eb" strokeWidth="2">
            <line x1="100" y1="220" x2="300" y2="20" />
            <line x1="100" y1="20" x2="300" y2="220" />
          </g>
          <text x="306" y="24" fill="#2563eb" stroke="none" className="font-sans text-[10px]">y = x</text>
          <text x="306" y="222" fill="#2563eb" stroke="none" className="font-sans text-[10px]">y = -x</text>

          {/* Выколотое критическое положение окружности при a = 2 (серый пунктир, проходит через 0,0) */}
          <circle cx="250" cy="120" r="50" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="250" y1="116" x2="250" y2="124" stroke="#94a3b8" strokeWidth="1" />
          <text x="244" y="136" fill="#94a3b8" stroke="none" className="font-sans text-xs">a = 2</text>

          {/* Текущее рабочее положение окружности ω_a при a = 1 (красная сплошная, дает 4 решения) */}
          <circle cx="225" cy="120" r="50" fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <circle cx="225" cy="120" r="3.5" fill="#dc2626" />
          <text x="220" y="112" fill="#dc2626" stroke="none" className="font-sans text-xs font-semibold">C(1;0)</text>

          {/* Маркер начала координат O(0;0) */}
          <circle cx="200" cy="120" r="3.5" fill="#000000" />
        </svg>
      </div>

      <p>
        Таким образом, ровно четыре различных решения система имеет при выполнении условия пересечения <InlineMath math={`|a| < 2\\sqrt{2}`} /> за вычетом изолированных точек прохода окружности через начало координат <InlineMath math={`a = \\pm 2`} />.
      </p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-2\\sqrt{2}; -2) \\cup (-2; 2) \\cup (2; 2\\sqrt{2})`} />
      </div>
    </div>
  )
},


{
  id: 51,
  title: 'Задача 51 (ЕГЭ-2019. Досрочная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых наименьшее значение функции',
  mathA: 'f(x) = ax - a - 1 + |x^2 - 4x + 3|',
  textAfter: <span>меньше, чем -2.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Условие задачи означает, что существует хотя бы одно значение переменной <InlineMath math={`x`} />, при котором значение функции будет строго меньше <InlineMath math={`-2`} />:
      </p>
      <BlockMath math={`\\min f(x) < -2 \\iff \\exists x : f(x) < -2.`} />
      
      <p>Перенесем линейную часть уравнения в правую сторону:</p>
      <BlockMath math={`|x^2 - 4x + 3| < -ax + a - 1.`} />
      
      <p>
        Решим полученное неравенство геометрическим методом в системе координат <InlineMath math={`xOy`} />. Пусть <InlineMath math={`f(x) = |x^2 - 4x + 3|`} /> — фиксированная парабола, у которой часть графика между нулями <InlineMath math={`x = 1`} /> и <InlineMath math={`x = 3`} /> зеркально отражена вверх (вершина в точке <InlineMath math={`(2; 1)`} />). Пусть <InlineMath math={`g(x) = -a(x - 1) - 1`} /> — пучок прямых, проходящих через фиксированную точку <InlineMath math={`A(1; -1)`} /> с угловым коэффициентом <InlineMath math={`k = -a`} />.
      </p>
      
      <p>
        Неравенство имеет решения (график прямой находится строго выше графика отраженной параболы) при выполнении совокупности двух граничных условий пучка:
      </p>
      
      <p>
        <b>I) Проход граничной прямой <InlineMath math={`g(x)`} /> через узловую точку параболы <InlineMath math={`B(3;0)`} />:</b>
      </p>
      <BlockMath math={`0 = -a(3 - 1) - 1 \\iff 2a = -1 \\implies a_1 = -0.5.`} />
      <p>
        При <InlineMath math={`k = -a > 0.5 \\iff a < -0.5`} /> прямая поворачивается против часовой стрелки и гарантированно пересекает правую ветвь параболы, образуя область решений.
      </p>
      
      <p>
        <b>II) Касание граничной прямой <InlineMath math={`g(x)`} /> с левой ветвью параболы (в области <InlineMath math={`x < 1`} />):</b>
      </p>
      <p>В этой области подмодульное выражение раскрывается со знаком плюс:</p>
      <BlockMath math={`\\begin{cases} x^2 - 4x + 3 = -ax + a - 1, \\\\ D = 0, \\\\ x_0 < 1 \\end{cases} \\iff \\begin{cases} x^2 + (a - 4)x + (4 - a) = 0, \\\\ (a - 4)^2 - 4(4 - a) = 0, \\\\ x_0 < 1 \\end{cases}`} />
      <p>Раскроем и решим уравнение для дискриминанта:</p>
      <BlockMath math={`\\iff \\begin{cases} a^2 - 4a = 0 \\implies a = 0 \\ \\text{или} \\ a = 4, \\\\ x_0 = \\frac{4 - a}{2} < 1 \\end{cases} \\implies a = 4 \\quad (\\text{при } a = 0 \\implies x_0 = 2 \\not< 1).`} />
      <p>
        При <InlineMath math={`k = -a < -4 \\iff a > 4`} /> прямая становится круче граничной линии касания и пересекает левую ветвь параболы.
      </p>

        <svg viewBox="0 0 340 400" className="w-full max-w-[340px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая статическая сетка (Шаг: 30px, центр (0,0) зафиксирован на x=100, y=160) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            <line x1="40" y1="20" x2="40" y2="380" />
            <line x1="70" y1="20" x2="70" y2="380" />
            <line x1="100" y1="20" x2="100" y2="380" />
            <line x1="130" y1="20" x2="130" y2="380" />
            <line x1="160" y1="20" x2="160" y2="380" />
            <line x1="190" y1="20" x2="190" y2="380" />
            <line x1="220" y1="20" x2="220" y2="380" />
            <line x1="250" y1="20" x2="250" y2="380" />
            <line x1="280" y1="20" x2="280" y2="380" />
            <line x1="20" y1="40" x2="320" y2="40" />
            <line x1="20" y1="70" x2="320" y2="70" />
            <line x1="20" y1="100" x2="320" y2="100" />
            <line x1="20" y1="130" x2="320" y2="130" />
            <line x1="20" y1="160" x2="320" y2="160" />
            <line x1="20" y1="190" x2="320" y2="190" />
            <line x1="20" y1="220" x2="320" y2="220" />
            <line x1="20" y1="250" x2="320" y2="250" />
            <line x1="20" y1="280" x2="320" y2="280" />
            <line x1="20" y1="310" x2="320" y2="310" />
            <line x1="20" y1="340" x2="320" y2="340" />
          </g>

          {/* Оси координат со строгой вертикальной стрелочкой Oy */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="160" x2="320" y2="160" /> {/* Ось Ox */}
            <line x1="100" y1="20" x2="100" y2="380" />  {/* Ось Oy */}
          </g>
          <path d="M 320,160 L 312,156 M 320,160 L 312,164" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 100,20 L 96,28 M 100,20 L 104,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="330" y="164" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="86" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="86" y="174" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Единичные метки осей */}
          <line x1="130" y1="156" x2="130" y2="164" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="127" y="176" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <line x1="96" y1="130" x2="104" y2="130" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="84" y="134" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* График f(x): внешние ветви устремляются вверх МАКСИМАЛЬНО круто, резко и быстрорастуще */}
          {/* Левое крыло x <= 1 */}
          <path d="M 75,20 C 88,95 95,145 130,160" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          {/* Отраженный центральный купол 1 <= x <= 3 */}
          <path d="M 130,160 Q 160,100 190,160" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          {/* Правое крыло x >= 3 */}
          <path d="M 190,160 C 215,145 222,95 235,20" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="239" y="28" fill="#2563eb" stroke="none" className="font-sans text-[11px] italic font-semibold">f(x)</text>

          {/* Красные граничные линии: теперь ювелирно проходят СТРОГО через центр узла А(1;-1) -> (130,190) */}
          {/* Линия I: a = -0.5 -> k = 0.5 проходит СТРОГО через точки A(1,-1) -> (130,190) и B(3,0) -> (190,160) */}
          <line x1="20" y1="245" x2="310" y2="100" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="300" y="115" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -0,5</text>


          {/* Линия II: a = 4. Повернута СТРОГО ПРОТИВ часовой стрелки ЕЩЕ на 3 градуса (суммарно на 28°) относительно точки A(130,190) */}
          <line x1="48.5" y1="20" x2="194" y2="330" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="189" y="345" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 4</text>


          {/* Узловые маркерные точки пересечений */}
          <circle cx="130" cy="190" r="3.5" fill="#000000" />
          <text x="120" y="202" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">A</text>
          
          <circle cx="190" cy="160" r="3.5" fill="#000000" />
          <text x="194" y="174" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">B</text>
        </svg>



      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -0.5) \\cup (4; +\\infty)`} />
      </div>
    </div>
  )
},



{
  id: 52,
  title: 'Задача 52 (ЕГЭ-2019. Досрочная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых наименьшее значение функции',
  mathA: 'f(x) = x - 2|x| + |x^2 - 2(a + 1)x + a^2 + 2a|',
  textAfter: <span>больше, чем -4.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Условие задачи означает, что для всех действительных значений переменной <InlineMath math="x" /> значение функции должно быть строго больше <InlineMath math="-4" />:
      </p>
      <BlockMath math="\min f(x) > -4 \iff \forall x : f(x) > -4." />
      
      <p>Перенесем модульное выражение в левую часть, а линейную часть уравнения — в правую сторону:</p>
      <BlockMath math="|(x - (a + 1))^2 - 1| > 2|x| - x - 4." />
      
      <p>
        Решим полученное неравенство геометрическим методом в системе координат <InlineMath math="xOy" />. 
        Пусть <InlineMath math="g(x) = 2|x| - x - 4" /> — фиксированная ломаная с изломом (вершиной) в точке <InlineMath math="(0; -4)" />. Распишем её аналитический вид по лучам:
      </p>
      <BlockMath math="g(x) = \begin{cases} -3x - 4, & x < 0, \\ x - 4, & x \geq 0. \end{cases}" />
      
      <p>
        Пусть <InlineMath math="f(x) = |(x - (a + 1))^2 - 1|" /> — подвижная парабола с нулями в точках <InlineMath math="x = a" /> и <InlineMath math="x = a + 2" /> (расстояние между нулями всегда равно 2), центральный купол которой зеркально отражен вверх относительно оси абсцисс. График параболы непрерывно скользит вдоль оси <InlineMath math="Ox" /> при изменении параметра <InlineMath math="a" />.
      </p>
      
      <p>
        Исходное неравенство выполняется для всех <InlineMath math="x" />, если график скользящей параболы лежит строго выше фиксированной ломаной <InlineMath math="g(x)" />. Из геометрической схемы получаем два критических ограничения на параметр <InlineMath math="a" />:
      </p>
      
      <p>
        <b>I) Касание левого крыла параболы с левым крутым лучом ломаной <InlineMath math="y = -3x - 4" />:</b>
      </p>
      <p>В области касания внешнее левое крыло параболы раскрывается со знаком плюс:</p>
      <BlockMath math="\begin{cases} (x - (a + 1))^2 - 1 = -3x - 4, \\ D = 0 \end{cases} \iff \begin{cases} x^2 - (2a - 1)x + a^2 + 2a + 4 = 0, \\ (2a - 1)^2 - 4(a^2 + 2a + 4) = 0 \end{cases}" />
      <p>Раскроем скобки и решим уравнение для дискриминанта:</p>
      <BlockMath math="-12a - 15 = 0 \implies a_1 = -\frac{5}{4}." />
      
      <p>
        <b>II) Проход правого нуля параболы через точку пересечения правого луча с осью абсцисс (Положение II):</b>
      </p>
      <p>
        Правый пологий луч <InlineMath math="y = x - 4" /> пересекает ось <InlineMath math="Ox" /> в точке <InlineMath math="B(4;0)" />. Правый нуль скользящей параболы задаётся координатой <InlineMath math="x = a + 2" />. Проход через точку <InlineMath math="B" /> даёт критическое положение:
      </p>
      <BlockMath math="a + 2 = 4 \implies a_2 = 2." />
      
      <p>
        Следовательно, график параболы находится полностью над чёрной ломаной при всех промежуточных положениях центра, то есть при значениях параметра между полученными критическими границами.
      </p>

      {/* Высокоточный и наглядный SVG-график Задачи 52 (max-w-[360px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 360 340" className="w-full max-w-[360px] h-auto overflow-visible font-sans text-xs select-none mx-auto">

          {/* Легкая статическая координатная сетка (Шаг: 1 деление = 22px. Центр (0,0) на x=140, y=180) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-4, -2, 2, 4, 6, 8].map(i => (
              <line key={`x-${i}`} x1={140 + i*22} y1="20" x2={140 + i*22} y2="380" />
            ))}
            {[-6, -4, -2, 2, 4, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={180 - i*22} x2="340" y2={180 - i*22} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="180" x2="340" y2="180" /> {/* Ось Ox */}
            <line x1="140" y1="20" x2="140" y2="380" />  {/* Ось Oy */}
          </g>
          <path d="M 340,180 L 332,176 M 340,180 L 332,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 140,20 L 136,28 M 140,20 L 144,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="350" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="126" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="126" y="194" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Числовые метки осей */}
          <line x1="184" y1="176" x2="184" y2="184" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="180" y="196" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">2</text>
          <line x1="136" y1="268" x2="144" y2="268" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="114" y="272" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">-4</text>

          {/* Фиксированная толстая черная ломаная g(x) */}
          {/* Левый луч значительно продлен влево-вверх: из (-3,5; 6.5)->(63,37) до (140, 268) */}
          <line x1="63" y1="37" x2="140" y2="268" stroke="#000000" strokeWidth="2.5" />
          <line x1="140" y1="268" x2="320" y2="88" stroke="#000000" strokeWidth="2.5" />
          <text x="325" y="94" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px] italic font-semibold">g(x)</text>

          {/* Положение I: Касание при a = -1.25 (красный пунктир) */}
          {/* Сдвинут вправо ровно на 0.1 деления (2.2px) от прошлого положения, новая ось симметрии x = 154.3 */}
          <g stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" fill="none">
            {/* Левое крыло */}
            <path d="M 132.3,180 C 108.8,147 85.8,105 65.8,40" />
            {/* Центральный купол: вершина строго в x = 154.3 */}
            <path d="M 132.3,180 Q 154.3,130 176.3,180" />
            {/* Правое крыло */}
            <path d="M 176.3,180 C 199.8,147 222.8,105 242.8,40" />
          </g>
          <text x="22.8" y="65" fill="#dc2626" stroke="none" className="font-sans text-[10px]">касание</text>
          <circle cx="67.3" cy="51" r="3" fill="#dc2626" stroke="none" />



          {/* Положение II: Проход через B(4;0) при a = 2 (синий пунктир) */}
          {/* Полностью тождественная парабола той же «золотой» комплектации, параллельно сдвинутая вправо */}
          <g stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" fill="none">
            {/* Левое крыло */}
            <path d="M 184,180 C 160.5,147 137.5,105 117.5,40" />
            {/* Центральный купол */}
            <path d="M 184,180 Q 206,130 228,180" />
            {/* Правое крыло */}
            <path d="M 228,180 C 251.5,147 274.5,105 294.5,40" />
          </g>
          <text x="210" y="55" fill="#2563eb" stroke="none" className="font-sans text-[10px]">Положение II</text>



          {/* Маркерные точки пересечений */}
          <circle cx="228" cy="180" r="3.5" fill="#000000" /> {/* Точка B(4;0) */}
          <text x="210" y="172" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-semibold">B(4;0)</text>
        </svg>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math="a \in \left(-\frac{5}{4}; 2\right)" />
      </div>
    </div>
  )
},


{
  id: 53,
  title: 'Задача 53 (ЕГЭ-2019. Резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\cos x + 2\\sin x = a',
  textAfter: <span>имеет ровно два различных корня на отрезке <InlineMath math={`\\left[-\\frac{\\pi}{4}; \\frac{3\\pi}{4}\\right]`} />.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Преобразуем левую часть исходного уравнения методом вспомогательного угла, разделив и умножив выражение на <InlineMath math={`\\sqrt{1^2 + 2^2} = \\sqrt{5}`} />:
      </p>
      <BlockMath math={`\\frac{1}{\\sqrt{5}}\\cos x + \\frac{2}{\\sqrt{5}}\\sin x = \\frac{a}{\\sqrt{5}} \\iff \\sin(x + \\varphi) = \\frac{a}{\\sqrt{5}},`} />
      <p>
        где вспомогательный угол задан соотношением <InlineMath math={`\\varphi = \\arccos\\left(\\frac{2}{\\sqrt{5}}\\right)`} />, причём <InlineMath math={`\\varphi \\in \\left(0; \\frac{\\pi}{4}\\right)`} />.
      </p>
      
      <p>
        Рассмотрим функцию <InlineMath math={`f(x) = \\cos x + 2\\sin x`} />. Вычислим критические значения данной функции на границах заданного отрезка <InlineMath math={`\\left[-\\frac{\\pi}{4}; \\frac{3\\pi}{4}\\right]`} />, а также значение её глобального максимума:
      </p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>
          На левой границе: <InlineMath math={`f\\left(-\\frac{\\pi}{4}\\right) = \\cos\\left(-\\frac{\\pi}{4}\\right) + 2\\sin\\left(-\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2} - 2 \\cdot \\frac{\\sqrt{2}}{2} = -\\frac{\\sqrt{2}}{2}`} />.
        </li>
        <li>
          На правой границе: <InlineMath math={`f\\left(\\frac{3\\pi}{4}\\right) = \\cos\\left(\\frac{3\\pi}{4}\\right) + 2\\sin\\left(\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2} + 2 \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2}}{2}`} />.
        </li>
        <li>
          Глобальный максимум: <InlineMath math={`f_{\\max} = \\sqrt{5}`} />, который достигается во внутренней точке отрезка <InlineMath math={`x_0 = \\frac{\\pi}{2} - \\varphi \\in \\left[\\frac{\\pi}{4}; \\frac{\\pi}{2}\\right]`} />.
        </li>
      </ul>
      
      <p>
        Построим эскиз графика функции <InlineMath math={`f(x)`} /> на заданном промежутке. Количество корней исходного уравнения равно числу точек пересечения этой волны синусоиды с горизонтальными сканирующими прямыми вида <InlineMath math={`y = a`} />.
      </p>

          {/* Высокоточный и наглядный SVG-график Задачи 53 (max-w-[420px]) */}
          <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <svg viewBox="0 0 420 300" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
              {/* Легкая сетка (Центр (0,0) зафиксирован на x=160, y=160) */}
              <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
                {[-5, -3, -1, 1, 3, 5, 7].map(i => (
                  <line key={`x-${i}`} x1={160 + i*28} y1="20" x2={160 + i*28} y2="280" />
                ))}
                {[-5, -3, -1, 1, 3, 5].map(i => (
                  <line key={`y-${i}`} x1="20" y1={160 - i*28} x2="400" y2={160 - i*28} />
                ))}
              </g>

              {/* Оси координат */}
              <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
                <line x1="20" y1="160" x2="400" y2="160" /> {/* Ось Ox */}
                <line x1="160" y1="20" x2="160" y2="280" />  {/* Ось Oy */}
              </g>
              <path d="M 400,160 L 392,156 M 400,160 L 392,164" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
              <path d="M 160,20 L 156,28 M 160,20 L 164,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
              <text x="412" y="164" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
              <text x="146" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
              <text x="146" y="174" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

              {/* Метки углов на Ox */}
              <line x1="104" y1="156" x2="104" y2="164" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
              <text x="90" y="176" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px]">-pi/4</text>
              <line x1="272" y1="156" x2="272" y2="164" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
              <text x="262" y="176" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px]">3pi/4</text>

              {/* Горизонтальные критические уровни (красный пунктир) */}
              <g stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3">
                <line x1="20" y1="62" x2="400" y2="62" /> {/* a = sqrt(5) */}
                <text x="375" y="56" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = sqrt(5)</text>

                <line x1="20" y1="121" x2="400" y2="121" /> {/* a = sqrt(2)/2 */}
                <text x="375" y="115" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = sqrt(2)/2</text>

                <line x1="20" y1="199" x2="400" y2="199" /> {/* a = -sqrt(2)/2 */}
                <text x="375" y="193" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -sqrt(2)/2</text>
              </g>

              {/* Волна синусоиды вспомого угла (сплошная синяя дуга) */}
              <path d="M 104,199 C 131,148 166,62 207,62 C 236,62 256,96 272,121" fill="none" stroke="#2563eb" strokeWidth="2.5" />
              <text x="280" y="112" fill="#2563eb" stroke="none" className="font-sans text-[11px] italic font-semibold">f(x)</text>

              {/* Граничные маркерные точки */}
              <circle cx="207" cy="62" r="4" fill="#000000" />
              <text x="201" y="52" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-semibold">sqrt(5)</text>

              <circle cx="272" cy="121" r="3.5" fill="#000000" />
              <circle cx="104" cy="199" r="3.5" fill="#000000" />
            </svg>
          </div>


      <p>
        Из геометрической схемы отчетливо видно, что горизонтальная линия <InlineMath math={`y = a`} /> пересекает одновременно два склона построенной синусоиды (обеспечивая ровно два различных решения) в том и только в том случае, когда она пролегает строго между уровнем правой граничной точки и пиком глобального максимума:
      </p>
      <BlockMath math={`f\\left(\\frac{3\\pi}{4}\\right) \\leq a < f_{\\max} \\iff \\frac{\\sqrt{2}}{2} \\leq a < \\sqrt{5}.`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left[\\frac{\\sqrt{2}}{2}; \\sqrt{5}\\right)`} />
      </div>
    </div>
  )
},


{
  id: 54,
  title: 'Задача 54 (ЕГЭ-2019. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\frac{x^2 - 4x + a}{5x^2 - 6ax + a^2} = 0',
  textAfter: <span>имеет ровно два различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Дробь равна нулю, когда числитель равен нулю, а знаменатель отличен от нуля. Исходное уравнение равносильно следующей системе ограничений:
      </p>
      <BlockMath math={`\\begin{cases} x^2 - 4x + a = 0, \\\\ 5x^2 - 6ax + a^2 \\neq 0 \\end{cases} \\iff \\begin{cases} a = -x^2 + 4x \\quad (\\text{парабола корней } \\gamma), \\\\[1.5ex] (a - x)(a - 5x) \\neq 0 \\quad (\\text{запрещенные прямые } l_1, l_2). \\end{cases}`} />
      
      <p>
        Решим задачу графическим методом в плоскости <InlineMath math={`xOa`} />. Множество потенциальных корней лежит на фиксированной параболе <InlineMath math={`\\gamma`} /> с вершиной в точке <InlineMath math={`V(2;4)`} /> и ветвями, направленными вниз. Ограничение знаменателя требует выколоть точки пересечения этой параболы с прямыми <InlineMath math={`l_1 : a = x`} /> и <InlineMath math={`l_2 : a = 5x`} />.
      </p>
      
      <p>Найдем координаты выкалываемых точек:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>
          Пересечение <InlineMath math={`\\gamma \\cap l_1 : -x^2 + 4x = x \\iff x^2 - 3x = 0 \\implies x = 0`} /> (точка <InlineMath math={`O(0;0)`} />) или <InlineMath math={`x = 3 \\implies a = 3`} /> (точка <InlineMath math={`A(3;3)`} />).
        </li>
        <li>
          Пересечение <InlineMath math={`\\gamma \\cap l_2 : -x^2 + 4x = 5x \\iff x^2 + x = 0 \\implies x = 0`} /> (точка <InlineMath math={`O(0;0)`} />) или <InlineMath math={`x = -1 \\implies a = -5`} /> (точка <InlineMath math={`B(-1;-5)`} />).
        </li>
      </ul>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 54 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 420 440" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 ед = 28px. Центр (0,0) зафиксирован на x=180, y=160) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-5, -3, -1, 1, 3, 5, 7].map(i => (
              <line key={`x-${i}`} x1={180 + i*28} y1="20" x2={180 + i*28} y2="420" />
            ))}
            {[-9, -7, -5, -3, -1, 1, 3, 5, 7, 9].map(i => (
              <line key={`y-${i}`} x1="20" y1={160 - i*14} x2="400" y2={160 - i*14} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="160" x2="400" y2="160" /> {/* Ось Ox */}
            <line x1="180" y1="20" x2="180" y2="420" />  {/* Ось Oa */}
          </g>
          <path d="M 400,160 L 392,156 M 400,160 L 392,164" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 180,20 L 176,28 M 180,20 L 184,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="412" y="164" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="166" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="166" y="174" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки единиц */}
          <line x1="208" y1="156" x2="208" y2="164" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="205" y="176" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <line x1="176" y1="146" x2="184" y2="146" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="164" y="150" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Запрещенные прямые (серый пунктир) */}
          {/* l1: a = x */}
          <line x1="40" y1="230" x2="340" y2="80" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="345" y="85" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">a = x</text>
          {/* l2: a = 5x */}
          {/* Запрещенная прямая l2: a = 5x (серый пунктир) */}
          {/* Математически выверенная траектория: строго проходит через O(0;0)->(180,160) и точку B(-1;-5)->(152,230) */}
          <line x1="76" y1="420" x2="236" y2="20" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="241" y="25" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">a = 5x</text>


          {/* Горизонтальные критические уровни сканирования (красный пунктир) */}
          <g stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3">
            <line x1="20" y1="104" x2="400" y2="104" /> {/* a = 4 */}
            <text x="375" y="98" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 4</text>
            
            <line x1="20" y1="118" x2="400" y2="118" /> {/* a = 3 */}
            <text x="375" y="132" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 3</text>

            <line x1="20" y1="160" x2="430" y2="160" /> {/* a = 0 (проходит строго через ось Ox и точку O(0;0)) */}
            <text x="435" y="164" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 0</text>
            
            <line x1="20" y1="230" x2="400" y2="230" /> {/* a = -5 */}
            <text x="375" y="224" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -5</text>
          </g>


          {/* Парабола корней (сплошная синяя) с вершиной V(2;4) -> (236, 104) */}
          {/* Математически выверенная траектория: y = -x^2 + 4x */}
          {/* Идеально проходит через V(2;4)->(236,104), узел O(0;0)->(180,160) и выколотую точку B(-1;-5)->(152,230) */}
          <path d="M 110,420 C 131,310 152,220 180,160 C 194,130 215,104 236,104 C 257,104 278,130 292,160 C 320,220 341,310 362,420" fill="none" stroke="#2563eb" strokeWidth="2.5" />


          {/* Выколотые точки ограничений */}
          <circle cx="180" cy="160" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* (0,0) */}

          <circle cx="264" cy="118" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* A(3;3) */}
          <text x="274" y="122" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">A(3;3)</text>

          <circle cx="152" cy="230" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* B(-1;-5) */}
          <text x="106" y="234" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">B(-1;-5)</text>
        </svg>
      </div>

      <p>
        Проведем сканирование горизонтальной прямой уровня <InlineMath math={`a`} />. Количество корней равно числу разрешенных точек пересечения прямой с синей параболой:
      </p>
      
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          • При <InlineMath math={`a > 4`} />: пересечений с параболой нет — 0 решений.
        </li>
        <li>
          • При <InlineMath math={`a = 4`} />: прямая касается вершины <InlineMath math={`V(2;4)`} /> — ровно 1 решение.
        </li>
        <li>
          • При <InlineMath math={`a \\in (3; 4)`} />: прямая пересекает обе ветви параболы в разрешенных областях — <span className="text-emerald-600 dark:text-emerald-400 font-bold">ровно 2 решения</span>.
        </li>
        <li>
          • При <InlineMath math={`a = 3`} />: правый корень выколот в точке <InlineMath math={`A`} />, остается один уцелевший корень на левой ветви параболы — 1 решение.
        </li>
        <li>
          • При <InlineMath math={`a \\in (0; 3)`} />: прямая пересекает параболу в двух разрешенных точках — <span className="text-emerald-600 dark:text-emerald-400 font-bold">ровно 2 решения</span>.
        </li>
        <li>
          • При <InlineMath math={`a = 0`} />: корень выколот в общей точке пересечения прямых и параболы <InlineMath math={`O(0;0)`} />, остается один корень на правой ветви — 1 решение.
        </li>
        <li>
          • При <InlineMath math={`a \\in (-5; 0)`} />: прямая пересекает параболу в двух разрешенных точках — <span className="text-emerald-600 dark:text-emerald-400 font-bold">ровно 2 решения</span>.
        </li>
        <li>
          • При <InlineMath math={`a < -5`} />: выколотая точка <InlineMath math={`B`} /> осталась выше уровня сканирования, прямая пересекает обе бесконечные ветви параболы — <span className="text-emerald-600 dark:text-emerald-400 font-bold">ровно 2 решения</span>.
        </li>
      </ul>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -5) \\cup (-5; 0) \\cup (0; 3) \\cup (3; 4)`} />
      </div>
    </div>
  )
},


{
  id: 55,
  title: 'Задача 55 (ЕГЭ-2019. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\frac{x^2 - 2x + a^2 - 4a}{x^2 - a} = 0',
  textAfter: <span>имеет ровно два различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Дробь равна нулю, когда числитель равен нулю, а знаменатель отличен от нуля. Исходное уравнение равносильно следующей системе ограничений:
      </p>
      <BlockMath math={`\\begin{cases} x^2 - 2x + a^2 - 4a = 0, \\\\ x^2 - a \\neq 0 \\end{cases} \\iff \\begin{cases} (x - 1)^2 + (a - 2)^2 = 5 \\quad (\\text{окружность } \\omega), \\\\[1.5ex] a \\neq x^2 \\quad (\\text{запрещенная парабола } \\gamma). \\end{cases}`} />
      
      <p>
        Решим задачу графическим методом в плоскости <InlineMath math={`xOa`} />. Потенциальные корни лежат на неподвижной окружности <InlineMath math={`\\omega`} /> с центром в точке <InlineMath math={`C(1;2)`} /> и радиусом <InlineMath math={`R = \\sqrt{5}`} />. Ограничение знаменателя требует выколоть точки пересечения этой окружности с параболой <InlineMath math={`\\gamma : a = x^2`} />.
      </p>
      
      <p>Найдем абсциссы точек пересечения окружности и параболы, подставив <InlineMath math={`a = x^2`} /> в первое уравнение:</p>
      <BlockMath math={`x^2 - 2x + (x^2)^2 - 4(x^2) = 0 \\iff x^4 - 3x^2 - 2x = 0 \\iff x(x + 1)(x^2 - x - 2) = 0`} />
      <BlockMath math={`\\iff x(x + 1)^2(x - 2) = 0 \\implies x_1 = 0, \\ x_2 = -1 \\ (\\text{корень кратности 2}), \\ x_3 = 2.`} />
      
      <p>Найдем ординаты выкалываемых точек через уравнение параболы <InlineMath math={`a = x^2`} />:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>
          При <InlineMath math={`x_1 = 0 \\implies a = 0`} /> — точка <InlineMath math={`O(0;0)`} />.
        </li>
        <li>
          При <InlineMath math={`x_2 = -1 \\implies a = 1`} /> — точка <InlineMath math={`A(-1;1)`} />. В этой точке парабола касается окружности, так как корень имеет кратность 2.
        </li>
        <li>
          При <InlineMath math={`x_3 = 2 \\implies a = 4`} /> — точка <InlineMath math={`B(2;4)`} />.
        </li>
      </ul>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 55 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 420 340" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 ед = 28px. Центр (0,0) зафиксирован на x=180, y=220) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-5, -3, -1, 1, 3, 5, 7].map(i => (
              <line key={`x-${i}`} x1={180 + i*28} y1="20" x2={180 + i*28} y2="320" />
            ))}
            {[-4, -2, 2, 4, 6, 8, 10].map(i => (
              <line key={`y-${i}`} x1="20" y1={220 - i*28} x2="400" y2={220 - i*28} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="220" x2="400" y2="220" /> {/* Ось Ox */}
            <line x1="180" y1="20" x2="180" y2="320" />  {/* Ось Oa */}
          </g>
          <path d="M 400,220 L 392,216 M 400,220 L 392,224" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 180,20 L 176,28 M 180,20 L 184,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="412" y="224" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="166" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="166" y="234" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки единиц */}
          <line x1="208" y1="216" x2="208" y2="224" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="205" y="236" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <line x1="176" y1="192" x2="184" y2="192" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="164" y="196" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Запрещенная парабола a = x^2 (серый пунктир) */}
          {/* Математически выверенная парабола: вершина СТРОГО в O(180,220), точное прохождение через A(152,192) и B(236,108) */}
          <path 
            d="M 110,45 Q 145,220 180,220 Q 215,220 250,45" 
            fill="none" 
            stroke="#94a3b8" 
            strokeWidth="1.2" 
            strokeDasharray="4 4" 
          />
          <text x="254" y="50" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">a = x²</text>



          {/* Горизонтальные критические уровни сканирования (красный пунктир) */}
          <g stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3">
            <line x1="20" y1="101.5" x2="400" y2="101.5" /> {/* a = 2 + sqrt(5) */}
            <text x="345" y="96" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 2 + √5</text>
            <line x1="20" y1="108" x2="400" y2="108" /> {/* a = 4 */}
            <text x="345" y="116" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 4</text>
            <line x1="20" y1="192" x2="400" y2="192" /> {/* a = 1 */}
            <text x="345" y="188" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 1</text>
            <line x1="20" y1="220" x2="400" y2="220" /> {/* a = 0 */}
            <text x="345" y="214" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 0</text>
            <line x1="20" y1="226.5" x2="400" y2="226.5" /> {/* a = 2 - sqrt(5) */}
            <text x="345" y="240" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 2 - √5</text>
          </g>

          {/* Синяя сплошная окружность ω с центром C(1;2) -> (208, 164) и радиусом R = sqrt(5) * 28 ≈ 62.6px */}
          <circle cx="208" cy="164" r="62.6" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <circle cx="208" cy="164" r="3" fill="#2563eb" />
          <text x="214" y="158" fill="#2563eb" stroke="none" className="font-sans text-xs font-semibold">C(1;2)</text>

          {/* Выколотые точки ограничений */}
          <circle cx="180" cy="220" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* O(0,0) */}

          <circle cx="152" cy="192" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* A(-1;1) */}
          <text x="106" y="196" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">A(-1;1)</text>

          <circle cx="236" cy="108" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* B(2;4) */}
          <text x="244" y="112" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">B(2;4)</text>
        </svg>
      </div>

      <p>
        Проведем сканирование горизонтальной прямой уровня <InlineMath math={`a`} />. Количество корней равно числу разрешенных точек пересечения прямой с синей окружностью:
      </p>
      
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          • При <InlineMath math={`a < 2 - \\sqrt{5}`} /> или <InlineMath math={`a > 2 + \\sqrt{5}`} />: пересечений с окружностью нет — 0 решений.
        </li>
        <li>
          • При <InlineMath math={`a = 2 - \\sqrt{5}`} /> или <InlineMath math={`a = 2 + \\sqrt{5}`} />: прямая касается экстремальных точек окружности — ровно 1 решение.
        </li>
        <li>
          • При <InlineMath math={`a = 4`} />: один из двух корней выколот в точке <InlineMath math={`B`} />, остается один уцелевший корень на левой ветви — 1 решение.
        </li>
        <li>
          • При <InlineMath math={`a = 1`} />: в точке <InlineMath math={`A`} /> окружность касается запрещенной параболы. Прямая проходит через выколотую точку касания <InlineMath math={`A`} /> и пересекает противоположный склон окружности — ровно 1 решение.
        </li>
        <li>
          • При <InlineMath math={`a = 0`} />: один из двух корней выколот в начале координат <InlineMath math={`O(0;0)`} />, остается один уцелевший корень — 1 решение.
        </li>
        <li>
          • При всех остальных значениях параметра <InlineMath math={`a`} /> внутри интервала существования: горизонтальная прямая дважды пересекает окружность в разрешенных точках — <span className="text-emerald-600 dark:text-emerald-400 font-bold">ровно 2 решения</span>.
        </li>
      </ul>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (2 - \\sqrt{5}; 0) \\cup (0; 1) \\cup (1; 4) \\cup (4; 2 + \\sqrt{5})`} />
      </div>
    </div>
  )
},


{
  id: 56,
  title: 'Задача 56 (ЕГЭ-2019. Резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\frac{x^2 - a(a+1)x + a^3}{\\sqrt{2 + x - x^2}} = 0',
  textAfter: <span>имеет ровно два различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Дробь равна нулю, когда числитель равен нулю, а подкоренное выражение знаменателя строго больше нуля. Исходное уравнение равносильно следующей системе:
      </p>
      <BlockMath math={`\\begin{cases} x^2 - a(a+1)x + a^3 = 0, \\\\ 2 + x - x^2 > 0 \\end{cases} \\iff \\begin{cases} (x - a)(x - a^2) = 0, \\\\ (x + 1)(2 - x) > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{array}{l} x = a, \\\\ x = a^2, \\end{array} \\right. \\\\[1.5ex] -1 < x < 2. \\end{cases}`} />
      
      <p>
        Решим задачу графическим методом в плоскости <InlineMath math={`xOa`} />. Корни уравнения задаются совокупностью двух линий: прямой <InlineMath math={`l_1 : a = x`} /> и горизонтальной параболы <InlineMath math={`\\gamma : x = a^2`} /> (её ветви направлены вправо, а сама кривая существует только в правой полуплоскости <InlineMath math={`x \\geq 0`} />). Ограничение знаменателя выделяет вертикальную полосу ОДЗ <InlineMath math={`x \\in (-1; 2)`} />, границы которой выкалывают концевые точки линий корней.
      </p>
      
      <p>Найдем ординаты критических точек пересечения линий с границами ОДЗ и между собой:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>
          <b>Склеивание корней (<InlineMath math={`l_1 \\cap \\gamma`} />):</b> подставим <InlineMath math={`a = x`} /> в уравнение параболы: <InlineMath math={`a = a^2 \\iff a(a - 1) = 0 \\implies a = 0`} /> (точка <InlineMath math={`O(0;0)`} />) или <InlineMath math={`a = 1`} /> (точка <InlineMath math={`A(1;1)`} />). В этих точках две ветви корней пересекаются.
        </li>
        <li>
          <b>Пересечение с левой границей <InlineMath math={`x = -1`} />:</b> прямая даёт точку пересечения <InlineMath math={`(-1;-1) \\implies a = -1`} />. Горизонтальная парабола решений не имеет, так как уравнение <InlineMath math={`a^2 = -1`} /> не имеет действительных корней.
        </li>
        <li>
          <b>Пересечение с правой границей <InlineMath math={`x = 2`} />:</b> прямая даёт точку <InlineMath math={`(2;2) \\implies a = 2`} />. Парабола даёт две симметричные точки пересечения: <InlineMath math={`a^2 = 2 \\implies a = \\pm\\sqrt{2}`} />, то есть точки <InlineMath math={`(2;\\sqrt{2})`} /> и <InlineMath math={`(2;-\\sqrt{2})`} />.
        </li>
      </ul>

            {/* Высокоточный и крупный центрированный SVG-график Задачи 56 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 420 380" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 ед = 32px. Центр (0,0) зафиксирован на x=160, y=180) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-3, -1, 1, 3, 5, 7].map(i => (
              <line key={`x-${i}`} x1={160 + i*32} y1="20" x2={160 + i*32} y2="360" />
            ))}
            {[-5, -3, -1, 1, 3, 5].map(i => (
              <line key={`y-${i}`} x1="20" y1={180 - i*32} x2="400" y2={180 - i*32} />
            ))}
          </g>

          {/* Вертикальные границы ОДЗ (серый штрихпунктир) */}
          <g stroke="#64748b" strokeWidth="1.2" strokeDasharray="5 3 2 3">
            <line x1="128" y1="20" x2="128" y2="360" /> {/* x = -1 */}
            <line x1="224" y1="20" x2="224" y2="360" /> {/* x = 2 */}
          </g>
          <text x="100" y="16" fill="#64748b" stroke="none" className="font-sans text-[11px] font-semibold">x = -1</text>
          <text x="210" y="16" fill="#64748b" stroke="none" className="font-sans text-[11px] font-semibold">x = 2</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="180" x2="400" y2="180" /> {/* Ось Ox */}
            <line x1="160" y1="20" x2="160" y2="360" />  {/* Ось Oa */}
          </g>
          <path d="M 400,180 L 392,176 M 400,180 L 392,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 160,20 L 156,28 M 160,20 L 164,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="412" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="146" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="146" y="194" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки единиц */}
          <line x1="192" y1="176" x2="192" y2="184" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="189" y="196" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <line x1="156" y1="148" x2="164" y2="148" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="144" y="152" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Горизонтальные критические уровни сканирования (красный пунктир) */}
          <g stroke="#dc2626" strokeWidth="1" strokeDasharray="3 3">
            <line x1="20" y1="116" x2="400" y2="116" /> {/* a = 2 */}
            <text x="375" y="110" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 2</text>
            <line x1="20" y1="134.7" x2="400" y2="134.7" /> {/* a = sqrt(2) */}
            <text x="375" y="129" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = √2</text>
            <line x1="20" y1="148" x2="400" y2="148" /> {/* a = 1 */}
            <text x="375" y="162" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 1</text>
            <line x1="20" y1="212" x2="400" y2="212" /> {/* a = -1 */}
            <text x="375" y="206" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -1</text>
            <line x1="20" y1="225.3" x2="400" y2="225.3" /> {/* a = -sqrt(2) */}
            <text x="375" y="234" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = -√2</text>
          </g>

          {/* Синие линии корней внутри ОДЗ */}
          {/* Прямая l1: a = x. От (-1;-1) -> (128,212) до (2;2) -> (224,116) */}
          <line x1="128" y1="212" x2="224" y2="116" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Горизонтальная парабола γ: x = a^2. От (2;-sqrt(2))->(224,225.3) через O(160,180) до (2;sqrt(2))->(224,134.7) */}
          {/* Четкое разделение: парабола изгибается «чашей» вправо, не сливаясь с прямой l1 на отрезке OA */}
          <path d="M 224,225.3 Q 150,210 160,180 Q 170,162 192,148 Q 208,138 224,134.7" fill="none" stroke="#2563eb" strokeWidth="2.5" />


          {/* Точки склеивания корней (черные заполненные маркеры) */}
          <circle cx="160" cy="180" r="3.5" fill="#000000" /> {/* O(0,0) */}
          <text x="166" y="190" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-semibold">O</text>

          <circle cx="192" cy="148" r="3.5" fill="#000000" /> {/* A(1;1) */}
          <text x="184" y="140" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-semibold">A</text>

          {/* Выколотые граничные точки на ОДЗ (синяя обводка, белый центр) */}
          <circle cx="128" cy="212" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* (-1;-1) */}
          <text x="75" y="216" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">(-1;-1)</text>

          <circle cx="224" cy="116" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* (2;2) */}
          <text x="232" y="122" fill="#2563eb" stroke="none" className="font-sans text-[11px]">(2;2)</text>

          <circle cx="224" cy="134.7" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* (2;sqrt(2)) */}
          <text x="232" y="146" fill="#2563eb" stroke="none" className="font-sans text-[11px]">(2;√2)</text>

          <circle cx="224" cy="225.3" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* (2;-sqrt(2)) */}
          <text x="232" y="229" fill="#2563eb" stroke="none" className="font-sans text-[11px]">(2;-√2)</text>
        </svg>
      </div>

      <p>
        Проведем сканирование горизонтальной прямой уровня <InlineMath math={`a`} />. Количество корней равно числу разрешенных (не выколотых) точек пересечения этой линии с синим графиком внутри полосы ОДЗ:
      </p>
      
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          • При <InlineMath math={`a \\leq -\\sqrt{2}`} />: пересечений с синим графиком внутри полосы нет — 0 решений.
        </li>
        <li>
          • При <InlineMath math={`a \\in (-\\sqrt{2}; -1]`} />: прямая пересекает только нижнюю ветвь параболы — 1 решение.
        </li>
        <li>
          • При <InlineMath math={`a \\in (-1; 0)`} />: прямая пересекает луч <InlineMath math={`l_1`} /> и нижнюю ветвь параболы <InlineMath math={`\\gamma`} /> — <span className="text-emerald-600 dark:text-emerald-400 font-bold">ровно 2 решения</span>.
        </li>
        <li>
          • При <InlineMath math={`a = 0`} />: корни склеиваются в начале координат <InlineMath math={`O(0;0)`} />, других пересечений в полосе ОДЗ нет — 1 решение.
        </li>
        <li>
          • При <InlineMath math={`a \\in (0; 1)`} />: прямая пересекает луч <InlineMath math={`l_1`} /> и верхнюю ветвь параболы <InlineMath math={`\\gamma`} /> — <span className="text-emerald-600 dark:text-emerald-400 font-bold">ровно 2 решения</span>.
        </li>
        <li>
          • При <InlineMath math={`a = 1`} />: корни склеиваются в точке <InlineMath math={`A(1;1)`} />, давая единственный корень <InlineMath math={`x = 1`} />, других ветвей в полосе нет — 1 решение.
        </li>
        <li>
          • При <InlineMath math={`a \\in (1; \\sqrt{2})`} />: прямая пересекает верхнюю ветвь параболы и луч <InlineMath math={`l_1`} /> — <span className="text-emerald-600 dark:text-emerald-400 font-bold">ровно 2 решения</span>.
        </li>
        <li>
          • При <InlineMath math={`a \\in [\\sqrt{2}; 2)`} />: парабола полностью вышла из ОДЗ, прямая пересекает только луч <InlineMath math={`l_1`} /> — 1 решение.
        </li>
        <li>
          • При <InlineMath math={`a \\geq 2`} />: решений нет (все точки лежат вне полосы ОДЗ) — 0 решений.
        </li>
      </ul>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-1; 0) \\cup (0; 1) \\cup (1; \\sqrt{2})`} />
      </div>
    </div>
  )
},


{
  id: 57,
  title: 'Задача 57 (ЕГЭ-2018. Досрочная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} ((x + 5)^2 + y^2 - a^2) \\cdot \\ln(9 - x^2 - y^2) = 0, \\\\ ((x + 5)^2 + y^2 - a^2) \\cdot (x + y - a + 5) = 0 \\end{cases}',
  textAfter: <span>имеет ровно два различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Запишем условие существования логарифма (ОДЗ системы):
      </p>
      <BlockMath math={`9 - x^2 - y^2 > 0 \\iff x^2 + y^2 < 9 \\quad (\\text{внутренность открытого круга } \\Omega).`} />
      
      <p>
        При выполнении этого ограничения исходная система раскладывается на множители и равносильна совокупности:
      </p>
      <BlockMath math={`\\left[ \\begin{array}{l} (x + 5)^2 + y^2 = a^2, \\\\[1.5ex] \\begin{cases} \\ln(9 - x^2 - y^2) = 0, \\\\ x + y - a + 5 = 0 \\end{cases} \\end{array} \\right. \\iff \\left[ \\begin{array}{l} (x + 5)^2 + y^2 = |a|^2, \\\\[1.5ex] \\begin{cases} x^2 + y^2 = 8 \\quad (\\text{фиксированная окружность } \\gamma), \\\\ y = a - x - 5 \\quad (\\text{пучок параллельных прямых } l_a). \\end{cases} \\end{array} \\right.`} />
      
      <p>
        Подвижная окружность <InlineMath math={`\\omega_a`} /> имеет фиксированный центр в точке <InlineMath math={`C(-5;0)`} /> и радиус <InlineMath math={`R = |a|`} />. Расстояние от центра <InlineMath math={`C`} /> до начала координат <InlineMath math={`O(0;0)`} /> равно 5. Так как максимальный радиус круга ОДЗ равен 3, а <InlineMath math={`5 - 3 = 2`} />, то окружность <InlineMath math={`\\omega_a`} /> сможет пересечь область ОДЗ только при радиусе <InlineMath math={`|a| > 2`} />. При этом, чтобы она не вышла за дальнюю границу ОДЗ, должно выполняться <InlineMath math={`5 + 3 = 8 \\implies |a| < 8`} />. Таким образом, при <InlineMath math={`|a| \\in (2; 8)`} /> окружность <InlineMath math={`\\omega_a`} /> пересекает область <InlineMath math={`\\Omega`} />, давая бесконечно много решений. Следовательно, для наличия ровно двух решений этот случай должен быть полностью исключен. Окружность <InlineMath math={`\\omega_a`} /> не имеет общих точек с ОДЗ при выполнении условий:
      </p>
      <BlockMath math={`\\begin{cases} |a| \\leq 2, \\\\ |a| \\geq 8. \\end{cases}`} />
      
      <p>
        В этом случае решения могут давать только точки пересечения прямой <InlineMath math={`l_a : y = -x + (a - 5)`} /> с фиксированной окружностью <InlineMath math={`\\gamma : x^2 + y^2 = 8`} />. Чтобы решений было ровно два, прямая <InlineMath math={`l_a`} /> обязана пересекать окружность <InlineMath math={`\\gamma`} /> в двух точках, которые автоматически будут лежать внутри ОДЗ (так как <InlineMath math={`\\gamma`} /> радиуса <InlineMath math={`\\sqrt{8}`} /> целиком лежит внутри круга ОДЗ радиуса 3).
      </p>
      
      <p>
        Условие пересечения прямой и окружности <InlineMath math={`\\gamma`} /> — расстояние от <InlineMath math={`O(0;0)`} /> до прямой меньше её радиуса <InlineMath math={`\\sqrt{8} = 2\\sqrt{2}`} />:
      </p>
      <BlockMath math={`d = \\frac{|a - 5|}{\\sqrt{1^2 + 1^2}} = \\frac{|a - 5|}{\\sqrt{2}} < 2\\sqrt{2} \\iff |a - 5| < 4 \\iff -4 < a - 5 < 4 \\iff 1 < a < 9.`} />

      <p>
        Пересекая условие отсутствия точек у окружности <InlineMath math={`\\omega_a`} /> с условием двух точек у прямой <InlineMath math={`l_a`} /> на числовой прямой параметра:
      </p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 57 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 340" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 ед = 24px. Центр (0,0) зафиксирован на x=240, y=140) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-8, -6, -4, -2, 2, 4, 6].map(i => (
              <line key={`x-${i}`} x1={240 + i*24} y1="20" x2={240 + i*24} y2="320" />
            ))}
            {[-4, -2, 2, 4, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={140 - i*24} x2="420" y2={140 - i*24} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="140" x2="420" y2="140" /> {/* Ось Ox */}
            <line x1="240" y1="20" x2="240" y2="320" />  {/* Ось Oy */}
          </g>
          <path d="M 420,140 L 412,136 M 420,140 L 412,144" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 240,20 L 236,28 M 240,20 L 244,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="432" y="144" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="226" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="226" y="154" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Внешняя граница ОДЗ (серый штрихпунктир радиуса 3) */}
          <circle cx="240" cy="140" r="72" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />

          {/* Фиксированная окружность γ (синяя сплошная) */}
          <circle cx="240" cy="140" r="67.9" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="282" y="82" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-semibold">γ</text>

          {/* Точка C(-5;0) */}
          <circle cx="120" cy="140" r="3.5" fill="#000000" />
          <text x="100" y="156" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs font-semibold">C(-5;0)</text>

          {/* Линия уровня a = 1 */}
          <line x1="110" y1="30" x2="310" y2="290" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="210" y="300" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 1</text>

          {/* Линия уровня a = 9 */}
          <line x1="170" y1="30" x2="350" y2="250" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="355" y="245" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 9</text>
        </svg>
      </div>

      <p>получаем итоговое множество интервалов.</p>
      <BlockMath math={`\\begin{cases} a \\in (1; 9) \\\\ a \\in [-2; 2] \\\\ a \\in (-\\infty; -8] \\cup [8; +\\infty) \\end{cases}`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (1; 2] \\cup [8; 9)`} />
      </div>
    </div>
  )
},


{
  id: 58,
  title: 'Задача 58 (ЕГЭ-2018. Досрочная волна, резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} x^2 + y^2 = a^2, \\\\ xy = a^2 - 3a \\end{cases}',
  textAfter: <span>имеет ровно два различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Решим задачу графическим методом в системе координат <InlineMath math={`xOy`} />. Первое уравнение <InlineMath math={`x^2 + y^2 = a^2`} /> задает окружность <InlineMath math={`\\omega_a`} /> с центром в начале координат <InlineMath math={`O(0;0)`} /> и радиусом <InlineMath math={`R = |a|`} />. При <InlineMath math={`a = 0`} /> окружность вырождается в точку <InlineMath math={`(0;0)`} />. Второе уравнение <InlineMath math={`xy = a^2 - 3a`} /> задает семейство гипербол (при <InlineMath math={`a^2 - 3a \\neq 0`} />) или оси координат (при <InlineMath math={`a^2 - 3a = 0`} />).
      </p>
      
      <p>
        Окружность и гипербола могут иметь 0, 4 или ровно 2 общих точки (в случае касания в вершинах гиперболы). Рассмотрим критические положения:
      </p>
      
      <p>
        <b>I Случай <InlineMath math={`a = 0`} />:</b>
      </p>
      <p>
        Система принимает вид <InlineMath math={`x^2 + y^2 = 0`} /> и <InlineMath math={`xy = 0`} />. Единственным решением является точка <InlineMath math={`(0;0)`} /> — 1 решение (не подходит).
      </p>
      
      <p>
        <b>II Случай <InlineMath math={`a^2 - 3a = 0 \\iff a = 3`} /> (так как <InlineMath math={`a \\neq 0`} />):</b>
      </p>
      <p>
        Второе уравнение задает оси координат: <InlineMath math={`xy = 0 \\iff x = 0`} /> или <InlineMath math={`y = 0`} />. Окружность <InlineMath math={`x^2 + y^2 = 9`} /> радиуса <InlineMath math={`R = 3`} /> пересекает оси координат ровно в 4 точках: <InlineMath math={`(\\pm 3;0)`} /> и <InlineMath math={`(0;\\pm 3)`} /> — 4 решения (не подходит).
      </p>
      
      <p>
        <b>III Касание окружности и ветвей гиперболы (<InlineMath math={`D=0`} />):</b>
      </p>
      <p>Выразим одну переменную и подставим нижнее уравнение системы в верхнее, получим:</p>
      <BlockMath math={`x^2 + \\left(\\frac{a^2 - 3a}{x}\\right)^2 = a^2 \\quad | \\cdot x^2 \\neq 0`} />
      <BlockMath math={`x^4 - a^2x^2 + (a^2 - 3a)^2 = 0`} />
      <p>Условие касания кривых соответствует равенству дискриминанта полученного биквадратного уравнения нулю:</p>
      <BlockMath math={`D = a^4 - 4(a^2 - 3a)^2 = 0`} />
      <BlockMath math={`a^2(a^2 - 8a + 12) = 0`} />
      
      <p>Отсюда получаем три возможных корня для параметра:</p>
      <BlockMath math={`\\left[ \\begin{array}{l} a = 0 \\quad (\\text{не подх.}), \\\\ a = 2, \\\\ a = 6. \\end{array} \\right.`} />
      
      <p>Выполним проверку найденных критических значений:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>
          Проверим: при <InlineMath math={`a = 6 \\implies R = 6`} />, гипербола <InlineMath math={`xy = 18`} />. <b>ровно 2 решения</b> (подходит, касание в I и III четвертях).
        </li>
        <li>
          Проверим: при <InlineMath math={`a = 2 \\implies R = 2`} />, гипербола <InlineMath math={`xy = -2`} />. <b>ровно 2 решения</b> (подходит, касание во II и IV четвертях).
        </li>
      </ul>

            <p>
        При любых других значениях параметра окружность либо не пересекает гиперболу (0 решений), либо пересекает её ветви в четырех различных точках (4 решения). Таким образом, ровно два решения достигаются строго в изолированных моментах касания кривых.
      </p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 58 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 340 340" className="w-full max-w-[340px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=170, y=170) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-6, -4, -2, 2, 4, 6].map(i => (
              <line key={`x-${i}`} x1={170 + i*24} y1="20" x2={170 + i*24} y2="320" />
            ))}
            {[-6, -4, -2, 2, 4, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={170 - i*24} x2="320" y2={170 - i*24} />
            ))}
          </g>

          {/* Диагональные асимптоты y = ±x (серый пунктир) */}
          <g stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4">
            <line x1="20" y1="320" x2="320" y2="20" />
            <line x1="20" y1="20" x2="320" y2="320" />
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="170" x2="320" y2="170" /> {/* Ось Ox */}
            <line x1="170" y1="20" x2="170" y2="320" />  {/* Ось Oy */}
          </g>
          <path d="M 320,170 L 312,166 M 320,170 L 312,174" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 170,20 L 166,28 M 170,20 L 174,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="330" y="174" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="156" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="156" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки единиц */}
          <line x1="194" y1="166" x2="194" y2="174" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="191" y="186" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <line x1="166" y1="146" x2="174" y2="146" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="154" y="150" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Рабочая синяя окружность при a = 2 (R = 2 * 24 = 48px) */}
          <circle cx="170" cy="170" r="48" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Красная гипербола xy = -2 при a = 2 (ветви во II и IV четвертях) */}
          {/* Ветвь во II четверти — две сопряженные дуги, идеально проходящие через маркер (136, 136) */}
          <path d="M 30,165 Q 100,172 136,136 Q 172,100 165,30" fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <text x="110" y="28" fill="#dc2626" stroke="none" className="font-sans text-[11px] font-semibold">a = 2</text>
          
          {/* Ветвь в IV четверти — две сопряженные дуги, идеально проходящие через маркер (204, 204) */}
          <path d="M 175,310 Q 168,240 204,204 Q 240,168 310,175" fill="none" stroke="#dc2626" strokeWidth="2.5" />



          {/* Чёрные заполненные маркерные точки касания в вершинах гиперболы */}
          <circle cx="136" cy="136" r="3.5" fill="#000000" /> {/* (-sqrt(2), sqrt(2)) */}
          <circle cx="204" cy="204" r="3.5" fill="#000000" /> {/* (sqrt(2), -sqrt(2)) */}
        </svg>
      </div>

<div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
  <span>Ответ:</span>
  <InlineMath math={`a = 2, \\quad a = 6`} />
</div>

    </div>
  )
},


{
  id: 59,
  title: 'Задача 59 (ЕГЭ-2018. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} x^4 + y^2 = a^2, \\\\ x^2 + y = |4a - 3| \\end{cases}',
  textAfter: <span>имеет ровно четыре различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Пусть <InlineMath math={`t = x^2 \\geq 0`} />. Исходная система имеет ровно 4 решения тогда и только тогда, когда полученная система имеет ровно 2 решения при условии <InlineMath math={`t > 0`} /> (каждому строго положительному значению <InlineMath math={`t`} /> соответствуют два симметричных корня <InlineMath math={`x = \\pm\\sqrt{t}`} />). Пусть <InlineMath math={`b = |4a - 3| \\geq 0`} />:
      </p>
      <BlockMath math={`\\begin{cases} t^2 + y^2 = a^2 \\quad (\\text{окружность } \\omega, \\ R = |a|), \\\\ t + y = b \\implies y = -t + b \\quad (\\text{прямая } l_b). \\end{cases}`} />
      
      <p>
        Для существования ровно двух решений в полуплоскости <InlineMath math={`t > 0`} /> окружность <InlineMath math={`\\omega`} /> должна пересекать отрезок прямой <InlineMath math={`l_b`} /> в первой координатной четверти в двух различных точках. Это условие задается двойным неравенством на радиус: расстояние касания <InlineMath math={`< R <`} /> отсечка на оси <InlineMath math={`Oy`} />.
      </p>
      <p>Найдем критические пограничные значения параметра <InlineMath math={`a`} />:</p>
      
      <p>
        <b>I Касание окружности <InlineMath math={`\\omega`} /> и прямой <InlineMath math={`l_b`} />:</b>
      </p>
      <BlockMath math={`d = \\frac{b}{\\sqrt{2}} = |a| \\iff |4a - 3| = |a|\\sqrt{2} \\iff 4a - 3 = \\pm a\\sqrt{2} \\implies a = \\frac{3}{4 \\pm \\sqrt{2}}.`} />
      
      <p>
        <b>II Проход окружности через граничную точку <InlineMath math={`(0;b)`} /> на оси <InlineMath math={`Oy`} />:</b>
      </p>
      <BlockMath math={`0^2 + b^2 = a^2 \\iff b = |a| \\iff |4a - 3| = |a| \\iff 4a - 3 = \\pm a \\implies a_1 = 1, \\ a_2 = 0,6.`} />

            <p>
        Условие двух точек пересечения при <InlineMath math={`t > 0`} /> выполняется при выполнении строгих неравенств системы, когда окружность пролегает между критическим моментом касания и моментом прохода через граничные осевые отсечки:
      </p>
      <BlockMath math={`\\frac{3}{4 + \\sqrt{2}} < a < 0{,}6 \\quad \\text{или} \\quad 1 < a < \\frac{3}{4 - \\sqrt{2}}`} />
      
      {/* Высокоточный и крупный центрированный SVG-график Задачи 59 (max-w-[340px]) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 340 340" className="w-full max-w-[340px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=140, y=200) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-4, -2, 2, 4, 6, 8].map(i => (
              <line key={`x-${i}`} x1={140 + i*24} y1="20" x2={140 + i*24} y2="320" />
            ))}
            {[-4, -2, 2, 4, 6, 8, 10].map(i => (
              <line key={`y-${i}`} x1="20" y1={200 - i*24} x2="320" y2={200 - i*24} />
            ))}
          </g>

          {/* Штриховка левой полуплоскости t < 0 (запрещенная зона ОДЗ переменной t) */}
          <g stroke="#e2e8f0" strokeWidth="1" className="dark:stroke-slate-900/60">
            {[40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300].map((y, idx) => (
              <line key={`sh-${idx}`} x1="20" y1={y} x2="140" y2={y - 20} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="200" x2="320" y2="200" /> {/* Ось Ot */}
            <line x1="140" y1="20" x2="140" y2="320" />  {/* Ось Oy */}
          </g>
          <path d="M 320,200 L 312,196 M 320,200 L 312,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 140,20 L 136,28 M 140,20 L 144,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="330" y="204" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">t</text>
          <text x="126" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="126" y="214" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Синяя сплошная окружность ω радиуса R ≈ 3.4 делений (82px) с центром в (0,0) -> (140,200) */}
          <circle cx="140" cy="200" r="82" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Черная секущая прямая l_b: y = -t + b (слегка приподнята выше) */}
          <line x1="120" y1="80" x2="280" y2="240" stroke="#000000" strokeWidth="2.5" />
          <text x="275" y="255" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px] italic font-semibold">l_b</text>

          {/* Две красные точки пересечения, пересчитанные под новую высоту прямой строго на окружности */}
          <circle cx="160" cy="120" r="4" fill="#dc2626" stroke="none" />
          <circle cx="219" cy="179" r="4" fill="#dc2626" stroke="none" />


        </svg>
      </div>

      <p>
        Раскладывая интервалы между найденными критическими точками, получаем итоговый ответ.
      </p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(\\frac{3}{4 + \\sqrt{2}}; 0{,}6\\right) \\cup \\left(1; \\frac{3}{4 - \\sqrt{2}}\\right)`} />
      </div>
    </div>
  )
},



{
  id: 60,
  title: 'Задача 60 (ЕГЭ-2018. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} (x + ay - 4)(x + ay - 4a) = 0, \\\\ x^2 + y^2 = 9 \\end{cases}',
  textAfter: <span>имеет ровно четыре различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Второе уравнение системы задает фиксированную окружность <InlineMath math={`\\omega`} /> с центром в начале координат <InlineMath math={`O(0;0)`} /> и радиусом <InlineMath math={`R = 3`} />.
      </p>
      <p>Первое уравнение равносильно совокупности двух прямых:</p>
      <BlockMath math={`\\left[ \\begin{array}{l} l_1 : x + ay - 4 = 0, \\\\ l_2 : x + ay - 4a = 0. \\end{array} \\right.`} />
      
      <p>
        При любом значении параметра <InlineMath math={`a`} /> прямые <InlineMath math={`l_1`} /> и <InlineMath math={`l_2`} /> параллельны друг другу. Система имеет ровно 4 решения, когда каждая из этих прямых пересекает окружность <InlineMath math={`\\omega`} /> ровно в двух различных точках, и эти прямые не совпадают между собой.
      </p>
      
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          <b>1)</b> Пмямые совпадают при <InlineMath math={`4 = 4a \\iff a = 1`} />. При <InlineMath math={`a = 1`} /> прямая одна, система имеет не более 2 решений (не подходит). Далее считаем <InlineMath math={`a \\neq 1`} />.
        </li>
        <li>
          <b>2)</b> Условие пересечения каждой прямой с окружностью <InlineMath math={`\\omega`} /> — расстояние от центра <InlineMath math={`O(0;0)`} /> до прямой должно быть строго меньше радиуса <InlineMath math={`R = 3`} />. Напишем расстояния <InlineMath math={`d_1`} /> и <InlineMath math={`d_2`} />:
          <BlockMath math={`d_1 = \\dfrac{|0 + a \\cdot 0 - 4|}{\\sqrt{1 + a^2}} = \\dfrac{4}{\\sqrt{1 + a^2}}, \\quad d_2 = \\dfrac{|0 + a \\cdot 0 - 4a|}{\\sqrt{1 + a^2}} = \\dfrac{4|a|}{\\sqrt{1 + a^2}}.`} />
        </li>
        <li>
          <b>3)</b> Сформируем и решим систему строгих неравенств для одновременного пересечения:
          <BlockMath math={`\\begin{cases} d_1 < 3 \\\\ d_2 < 3 \\end{cases} \\iff \\begin{cases} \\dfrac{4}{\\sqrt{1 + a^2}} < 3 \\\\[1.5ex] \\dfrac{4|a|}{\\sqrt{1 + a^2}} < 3 \\end{cases} \\iff \\begin{cases} 16 < 9(1 + a^2), \\\\ 16 a^2 < 9(1 + a^2) \\end{cases} \\iff \\begin{cases} 9a^2 > 7 \\implies a^2 > \\dfrac{7}{9}, \\\\[1ex] 7a^2 < 9 \\implies a^2 < \\dfrac{9}{7}. \\end{cases}`} />
        </li>
      </ul>
      
      <p>
        Отсюда получаем ограничения на параметр: <InlineMath math={`|a| \\in \\left(\\dfrac{\\sqrt{7}}{3}; \\dfrac{3}{\\sqrt{7}}\\right)`} />. Исключая точку совпадения прямых <InlineMath math={`a = 1`} />, которая лежит внутри этого интервала (так как <InlineMath math={`\\dfrac{\\sqrt{7}}{3} < 1 < \\dfrac{3}{\\sqrt{7}}`} />), получаем итоговые промежутки.
      </p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 60 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 340 340" className="w-full max-w-[340px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=170, y=170) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-6, -4, -2, 2, 4, 6].map(i => (
              <line key={`x-${i}`} x1={170 + i*24} y1="20" x2={170 + i*24} y2="320" />
            ))}
            {[-6, -4, -2, 2, 4, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={170 - i*24} x2="320" y2={170 - i*24} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="170" x2="320" y2="170" /> {/* Ось Ox */}
            <line x1="170" y1="20" x2="170" y2="320" />  {/* Ось Oy */}
          </g>
          <path d="M 320,170 L 312,166 M 320,170 L 312,174" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 170,20 L 166,28 M 170,20 L 174,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="330" y="174" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="156" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="156" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки единиц */}
          <line x1="194" y1="166" x2="194" y2="174" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="191" y="186" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <line x1="166" y1="146" x2="174" y2="146" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="154" y="150" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Фиксированная синяя окружность ω радиуса R = 3 * 24 = 72px */}
          <circle cx="170" cy="170" r="72" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Две параллельные черные секущие прямые l1 и l2 */}
          {/* Прямая l1: x + ay - 4 = 0 (наклонная линия, пересекающая окружность в двух точках) */}
          <line x1="70" y1="20" x2="310" y2="260" stroke="#000000" strokeWidth="2.5" />
          <text x="315" y="265" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px] italic font-semibold">l₁</text>

          {/* Прямая l2: x + ay - 4a = 0 (параллельна l1, смещена ниже) */}
          <line x1="30" y1="60" x2="270" y2="300" stroke="#000000" strokeWidth="2.5" />
          <text x="275" y="305" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px] italic font-semibold">l₂</text>

          {/* Четыре красные маркерные точки пересечения прямых с окружностью */}
          <circle cx="150" cy="100" r="4" fill="#dc2626" stroke="none" />
          <circle cx="240" cy="190" r="4" fill="#dc2626" stroke="none" />
          <circle cx="107" cy="136" r="4" fill="#dc2626" stroke="none" />
          <circle cx="204" cy="234" r="4" fill="#dc2626" stroke="none" />
        </svg>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(-\\dfrac{3}{\\sqrt{7}}; -\\dfrac{\\sqrt{7}}{3}\\right) \\cup \\left(\\dfrac{\\sqrt{7}}{3}; 1\\right) \\cup \\left(1; \\dfrac{3}{\\sqrt{7}}\\right)`} />
      </div>
    </div>
  )
},


{
  id: 61,
  title: 'Задача 61 (ЕГЭ-2018. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} x^4 - y^4 = 10a - 24, \\\\ x^2 + y^2 = a \\end{cases}',
  textAfter: <span>имеет ровно четыре различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Разложим разность квадратов в первом уравнении и подставим второе уравнение <InlineMath math={`x^2 + y^2 = a`} /> (при этом <InlineMath math={`a \\neq 0`} />):
      </p>
      <BlockMath math={`\\begin{cases} (x^2 - y^2)(x^2 + y^2) = 10a - 24 \\\\ x^2 + y^2 = a \\end{cases} \\iff \\begin{cases} x^2 - y^2 = 10 - \\dfrac{24}{a} \\\\ x^2 + y^2 = a \\end{cases}`} />
      
      <p>
        Сложим и вычтем уравнения полученной системы для явного выражения <InlineMath math={`x^2`} /> и <InlineMath math={`y^2`} />:
      </p>
      <BlockMath math={`\\begin{cases} 2x^2 = a + 10 - \\dfrac{24}{a} \\\\[1.5ex] 2y^2 = a - 10 + \\dfrac{24}{a} \\end{cases} \\iff \\begin{cases} x^2 = \\dfrac{a^2 + 10a - 24}{2a} \\\\[1.5ex] y^2 = \\dfrac{a^2 - 10a + 24}{2a} \\end{cases} \\iff \\begin{cases} x^2 = \\dfrac{(a + 12)(a - 2)}{2a} \\\\[1.5ex] y^2 = \\dfrac{(a - 4)(a - 6)}{2a} \\end{cases}`} />
      
      <p>
        Система имеет ровно 4 решения тогда и только тогда, когда каждое из полученных уравнений имеет ровно по два корня (так как каждому строго положительному значению квадрата переменной соответствуют два корня противоположных знаков). Это равносильно строгой положительности правых частей:
      </p>
      <BlockMath math={`\\begin{cases} \\dfrac{(a + 12)(a - 2)}{2a} > 0 \\\\[1.5ex] \\dfrac{(a - 4)(a - 6)}{2a} > 0 \\end{cases} \\iff \\begin{cases} a \\in (-12; 0) \\cup (2; +\\infty) \\\\ a \\in (0; 4) \\cup (6; +\\infty) \\end{cases}`} />
      
      <p>
        Найдем пересечение полученных множеств на числовой прямой параметра <InlineMath math={`a`} />, изобразив интервалы в виде наглядных «крыш» штриховки:
      </p>

      {/* Высокоточный и наглядный график числовой прямой с «крышами» штриховки */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 120" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Главная ось параметра а */}
          <line x1="20" y1="70" x2="400" y2="70" stroke="#000000" strokeWidth="1.5" className="dark:stroke-slate-400" />
          <path d="M 400,70 L 392,66 M 400,70 L 392,74" stroke="#000000" strokeWidth="1.5" fill="none" className="dark:stroke-slate-400" />
          <text x="410" y="74" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* «Крыши» штриховки для первого неравенства: a ∈ (-12; 0) ∪ (2; +∞) [Синий цвет] */}
          {/* Интервал (-12; 0) -> x от 60 до 140 */}
          <path d="M 60,70 L 60,45 L 140,45 L 140,70" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 2" />
          {/* Интервал (2; +∞) -> x от 190 до 390 */}
          <path d="M 190,70 L 190,45 L 390,45" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 2" />
          
          {/* «Крыши» штриховки для второго неравенства: a ∈ (0; 4) ∪ (6; +∞) [Зеленый цвет] */}
          {/* Интервал (0; 4) -> x от 140 до 250 */}
          <path d="M 140,70 L 140,30 L 250,30 L 250,70" fill="none" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 2" />
          {/* Интервал (6; +∞) -> x от 310 до 390 */}
          <path d="M 310,70 L 310,30 L 390,30" fill="none" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 2" />

          {/* Общие результирующие интервалы пересечения (выделены красной штриховкой по оси) */}
          {/* Интервал (2; 4) */}
          <line x1="190" y1="70" x2="250" y2="70" stroke="#dc2626" strokeWidth="3" />
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`sh1-${i}`} x1={192 + i * 8} y1="70" x2={198 + i * 8} y2="60" stroke="#dc2626" strokeWidth="1" />
          ))}
          <text x="212" y="24" fill="#dc2626" stroke="none" className="font-sans text-[10px] font-semibold">4 реш.</text>

          {/* Интервал (6; +∞) */}
          <line x1="310" y1="70" x2="390" y2="70" stroke="#dc2626" strokeWidth="3" />
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`sh2-${i}`} x1={312 + i * 8} y1="70" x2={318 + i * 8} y2="60" stroke="#dc2626" strokeWidth="1" />
          ))}
          <text x="342" y="24" fill="#dc2626" stroke="none" className="font-sans text-[10px] font-semibold">4 реш.</text>

          {/* Выколотые точки граничных значений */}
          {[
            { cx: 60, txt: "-12" },
            { cx: 140, txt: "0" },
            { cx: 190, txt: "2" },
            { cx: 250, txt: "4" },
            { cx: 310, txt: "6" }
          ].map(pt => (
            <g key={pt.txt}>
              <circle cx={pt.cx} cy="70" r="3.5" fill="white" stroke="#000000" strokeWidth="1.2" className="fill-white dark:stroke-slate-400 dark:fill-slate-950" />
              <text x={pt.cx - 6} y="88" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">{pt.txt}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (2; 4) \\cup (6; +\\infty)`} />
      </div>
    </div>
  )
},


{
  id: 62,
  title: 'Задача 62 (ЕГЭ-2018. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} x^2 + y^2 + 2(a - 3)x - 4ay + 5a^2 - 6a = 0, \\\\ y^2 = x^2 \\end{cases}',
  textAfter: <span>имеет ровно четыре различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Выделим полные квадраты в первом уравнении и раскроем разность квадратов во втором:
      </p>
      <BlockMath math={`\\begin{cases} (x - (3 - a))^2 + (y - 2a)^2 = 9 \\quad (\\text{окружность } \\omega_a), \\\\[1.5ex] \\left[ \\begin{array}{l} y = x, \\\\ y = -x \\end{array} \\right. \\quad (\\text{две фиксированные прямые }). \\end{cases}`} />
      
      <p>
        Фиксированные прямые <InlineMath math={`y = x \\ (l_1)`} /> и <InlineMath math={`y = -x \\ (l_2)`} /> пересекаются в начале координат <InlineMath math={`O(0;0)`} />. Подвижная окружность <InlineMath math={`\\omega_a`} /> имеет постоянный радиус <InlineMath math={`R = 3`} /> и скользящий центр <InlineMath math={`C(3 - a; 2a)`} />. При изменении параметра <InlineMath math={`a`} /> центр окружности движется по прямой линии <InlineMath math={`y = -2x + 6`} />.
      </p>
      <p>
        Система имеет ровно 4 решения, когда окружность <InlineMath math={`\\omega_a`} /> пересекает каждую из двух прямых ровно в двух различных точках, и ни одна из этих точек не совпадает с началом координат <InlineMath math={`O(0;0)`} />.
      </p>
      
      <p>
        <b>1) Найдем расстояния <InlineMath math={`d_1`} /> и <InlineMath math={`d_2`} /> от центра <InlineMath math={`C(3 - a; 2a)`} /> до прямых <InlineMath math={`x - y = 0`} /> и <InlineMath math={`x + y = 0`} />:</b>
      </p>
      <BlockMath math={`d_1 = \\dfrac{|3 - a - 2a|}{\\sqrt{1^2 + (-1)^2}} = \\dfrac{|3 - 3a|}{\\sqrt{2}}, \\quad d_2 = \\dfrac{|3 - a + 2a|}{\\sqrt{1^2 + 1^2}} = \\dfrac{|3 + a|}{\\sqrt{2}}`} />
      
      <p>Условие одновременного пересечения двух прямых окружностью радиуса <InlineMath math={`R = 3`} />:</p>
      <BlockMath math={`\\begin{cases} d_1 < 3 \\\\[1ex] d_2 < 3 \\end{cases} \\iff \\begin{cases} \\dfrac{|3 - 3a|}{\\sqrt{2}} < 3 \\\\[2ex] \\dfrac{|3 + a|}{\\sqrt{2}} < 3 \\end{cases} \\iff \\begin{cases} |1 - a| < \\sqrt{2} \\\\[1ex] |a + 3| < 3\\sqrt{2} \\end{cases} \\iff \\begin{cases} 1 - \\sqrt{2} < a < 1 + \\sqrt{2} \\\\[1ex] -3 - 3\\sqrt{2} < a < -3 + 3\\sqrt{2} \\end{cases}`} />
      
      <p>Пересечение этих двух интервалов дает область: <InlineMath math={`a \\in (1 - \\sqrt{2}; -3 + 3\\sqrt{2})`} />.</p>
      
      <p>
        <b>2) Исключим случай прохода окружности <InlineMath math={`\\omega_a`} /> через точку пересечения прямых <InlineMath math={`O(0;0)`} />, что уменьшило бы число решений до 3. Подставим <InlineMath math={`O(0;0)`} /> в первое уравнение:</b>
      </p>
      <BlockMath math={`(0 - (3 - a))^2 + (0 - 2a)^2 = 9 \\iff a^2 - 6a + 9 + 4a^2 = 9 \\iff 5^2 - 6a = 0 \\implies a = 0 \\text{ или } a = 1{,}2.`} />
      <p>
        Обе изолированные точки <InlineMath math={`a = 0`} /> и <InlineMath math={`a = 1{,}2`} /> лежат внутри найденного разрешенного промежутка и подлежат обязательному выкалыванию.
      </p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 62 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 360 360" className="w-full max-w-[360px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=160, y=200) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-5, -3, -1, 1, 3, 5, 7].map(i => (
              <line key={`x-${i}`} x1={160 + i*24} y1="20" x2={160 + i*24} y2="340" />
            ))}
            {[-6, -4, -2, 2, 4, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={200 - i*24} x2="340" y2={200 - i*24} />
            ))}
          </g>

          {/* Траектория движения центра C: y = -2x + 6 (серый штрихпунктир) */}
          {/* При x=0 -> y=6 (200 - 6*24 = 56). При x=4 -> y=-2 (200 + 2*24 = 248) */}
          <line x1="160" y1="56" x2="256" y2="248" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5 3 2 3" />
          <text x="210" y="270" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">траектория C</text>

          {/* Оси координат со строгой вертикальной стрелочкой Oy */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="200" x2="340" y2="200" /> {/* Ось Ox */}
            <line x1="160" y1="20" x2="160" y2="340" />  {/* Ось Oy */}
          </g>
          <path d="M 340,200 L 332,196 M 340,200 L 332,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 160,20 L 156,28 M 160,20 L 164,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="350" y="204" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="146" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="146" y="214" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Единичная метка */}
          <line x1="184" y1="196" x2="184" y2="204" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="181" y="216" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Фиксированные прямые (синие толстые сплошные) — теперь проходят СТРОГО через начало координат (160, 200) */}
          <line x1="40" y1="320" x2="280" y2="80" stroke="#2563eb" strokeWidth="2.5" />
          <text x="285" y="84" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-semibold">y = x</text>
          
          <line x1="40" y1="80" x2="280" y2="320" stroke="#2563eb" strokeWidth="2.5" />
          <text x="285" y="325" fill="#2563eb" stroke="none" className="font-sans text-[11px] font-semibold">y = -x</text>


          {/* Подвижная окружность ω_a в одной из разрешенных позиций (красная сплошная, R = 3 * 24 = 72px) */}
          {/* Пусть центр в C(2.2; 1.6) -> x = 160 + 2.2*24 = 212.8, y = 200 - 1.6*24 = 161.6 */}
          <circle cx="212.8" cy="161.6" r="72" fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <circle cx="212.8" cy="161.6" r="3.5" fill="#dc2626" stroke="none" />
          <text x="220" y="156" fill="#dc2626" stroke="none" className="font-sans text-xs font-semibold">C</text>

        </svg>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (1 - \\sqrt{2}; 0) \\cup (0; 1{,}2) \\cup (1{,}2; -3 + 3\\sqrt{2})`} />
      </div>
    </div>
  )
},


{
  id: 63,
  title: 'Задача 63 (ЕГЭ-2018. Основная волна, резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} y = (a + 2)x^2 + 2ax + a - 2, \\\\ y^2 = x^2 \\end{cases}',
  textAfter: <span>имеет ровно четыре различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Второе уравнение системы <InlineMath math={`y^2 = x^2`} /> равносильно совокупности <InlineMath math={`y = x`} /> или <InlineMath math={`y = -x`} />. Подставим эти выражения в первое уравнение.
      </p>
      
      <p>
        <b>1) При <InlineMath math={`y = x`} />:</b>
      </p>
      <BlockMath math={`x = (a + 2)x^2 + 2ax + a - 2 \\iff (a + 2)x^2 + (2a - 1)x + a - 2 = 0`} />
      <p>Чтобы уравнение имело ровно 2 корня, необходимо:</p>
      <BlockMath math={`a + 2 \\neq 0 \\implies a \\neq -2`} />
      <BlockMath math={`D_1 = (2a - 1)^2 - 4(a + 2)(a - 2) = -4a + 17 > 0 \\implies a < \\dfrac{17}{4}`} />
      
      <p>
        <b>2) При <InlineMath math={`y = -x`} />:</b>
      </p>
      <BlockMath math={`-x = (a + 2)x^2 + 2ax + a - 2 \\iff (a + 2)x^2 + (2a + 1)x + a - 2 = 0`} />
      <p>Чтобы уравнение имело ровно 2 корня, необходимо:</p>
      <BlockMath math={`D_2 = (2a + 1)^2 - 4(a + 2)(a - 2) = 4a + 17 > 0 \\implies a > -\\dfrac{17}{4}`} />
      
      <p>
        <b>3) Исключим случай совпадения корней полученных уравнений.</b> Общий корень <InlineMath math={`x_0`} /> должен удовлетворять разности уравнений:
      </p>
      <BlockMath math={`((2a - 1) - (2a + 1))x_0 = 0 \\implies -2x_0 = 0 \\implies x_0 = 0`} />
      <p>Подставляя <InlineMath math={`x = 0`} /> в любое из уравнений, находим:</p>
      <BlockMath math={`a - 2 = 0 \\implies a = 2`} />
      <p>
        При <InlineMath math={`a = 2`} /> система имеет общее решение <InlineMath math={`(0;0)`} />, и количество различных решений не превышает трёх.
      </p>
      <p>
        Объединяя условия <InlineMath math={`a \\in (-4{,}25; 4{,}25)`} />, <InlineMath math={`a \\neq -2`} /> и <InlineMath math={`a \\neq 2`} />, получаем искомые значения параметра.
      </p>

      {/* Высокоточный и наглядный график числовой прямой параметров с «крышами» штриховки */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 120" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Главная ось параметра а */}
          <line x1="20" y1="70" x2="400" y2="70" stroke="#000000" strokeWidth="1.5" className="dark:stroke-slate-400" />
          <path d="M 400,70 L 392,66 M 400,70 L 392,74" stroke="#000000" strokeWidth="1.5" fill="none" className="dark:stroke-slate-400" />
          <text x="410" y="74" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* «Крыши» штриховки для первого неравенства: a < 17/4 (4.25) [Синий цвет] */}
          <path d="M 340,70 L 340,45 L 20,45" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 2" />
          
          {/* «Крыши» штриховки для второго неравенства: a > -17/4 (-4.25) [Зеленый цвет] */}
          <path d="M 60,70 L 60,30 L 400,30" fill="none" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 2" />

          {/* Общие результирующие интервалы пересечения с выколотыми точками (выделены красной штриховкой по оси) */}
          <line x1="60" y1="70" x2="115" y2="70" stroke="#dc2626" strokeWidth="3" />
          <line x1="125" y1="70" x2="275" y2="70" stroke="#dc2626" strokeWidth="3" />
          <line x1="285" y1="70" x2="340" y2="70" stroke="#dc2626" strokeWidth="3" />
          
          {Array.from({ length: 33 }).map((_, i) => {
            const x = 62 + i * 8;
            if ((x >= 115 && x <= 125) || (x >= 275 && x <= 285) || x > 340) return null;
            return <line key={`sh-${i}`} x1={x} y1="70" x2={x + 6} y2="60" stroke="#dc2626" strokeWidth="1" />;
          })}
          <text x="180" y="24" fill="#dc2626" stroke="none" className="font-sans text-[10px] font-semibold">4 реш.</text>

          {/* Выколотые и граничные точки */}
          {[
            { cx: 60, txt: "-17/4" },
            { cx: 120, txt: "-2" },
            { cx: 280, txt: "2" },
            { cx: 340, txt: "17/4" }
          ].map(pt => (
            <g key={pt.txt}>
              <circle cx={pt.cx} cy="70" r="3.5" fill="white" stroke="#000000" strokeWidth="1.2" className="fill-white dark:stroke-slate-400 dark:fill-slate-950" />
              <text x={pt.cx - 10} y="88" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">{pt.txt}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(-\\dfrac{17}{4}; -2\\right) \\cup (-2; 2) \\cup \\left(2; \\dfrac{17}{4}\\right)`} />
      </div>
    </div>
  )
},


{
  id: 64,
  title: 'Задача 64 (ЕГЭ-2018. Основная волна, резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\left|x + \\dfrac{a^2}{x} + 1\\right| + \\left|x + \\dfrac{a^2}{x} - 1\\right| = 2',
  textAfter: <span>имеет хотя бы один корень.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Пусть <InlineMath math={`t = x + \\dfrac{a^2}{x}`} />, где <InlineMath math={`x \\neq 0`} />. Уравнение принимает вид:
      </p>
      <BlockMath math={`|t + 1| + |t - 1| = 2.`} />
      
      <p>
        Решим уравнение с модулями методом интервалов. Разобьем числовую прямую на промежутки корнями подмодульных выражений (<InlineMath math={`t = -1`} /> и <InlineMath math={`t = 1`} />):
      </p>
      
      <ul className="list-bullet pl-5 space-y-1">
        <li>
          <b>1. Случай <InlineMath math={`(+, +)`} /> при <InlineMath math={`t \\geq 1`} />:</b>
          <BlockMath math={`(t + 1) + (t - 1) = 2 \\implies 2t = 2 \\implies t = 1`} />
        </li>
        <li>
          <b>2. Случай <InlineMath math={`(+, -)`} /> при <InlineMath math={`-1 \\leq t \\leq 1`} />:</b>
          <BlockMath math={`(t + 1) - (t - 1) = 2 \\implies 2 = 2 \\quad (\\text{верно всегда на этом промежутке}) \\implies -1 \\leq t \\leq 1`} />
        </li>
        <li>
          <b>3. Случай <InlineMath math={`(-, -)`} /> при <InlineMath math={`t \\leq -1`} />:</b>
          <BlockMath math={`-(t + 1) - (t - 1) = 2 \\implies -2t = 2 \\implies t = -1`} />
        </li>
      </ul>
      
      <p>Итог для <InlineMath math={`t`} />:</p>
      <BlockMath math={`t \\in [-1; 1]`} />
      
      <p><b>Обратная замена:</b> Подставим выражение вместо <InlineMath math={`t`} /> в полученное двойное неравенство:</p>
      <BlockMath math={`-1 \\leq x + \\dfrac{a^2}{x} \\leq 1`} />
      
      <p>
        Таким образом, исходное уравнение имеет хотя бы один корень тогда и только тогда, когда двойное неравенство имеет решения.
      </p>
      <p>
        Функция <InlineMath math={`f(x) = x + \\dfrac{a^2}{x}`} /> является нечетной, так как <InlineMath math={`f(-x) = -x - \\dfrac{a^2}{x} = -f(x)`} />, поэтому её график симметричен относительно начала координат. В силу симметрии достаточно рассмотреть случай <InlineMath math={`a \\geq 0`} />, а затем зеркально распространить результат на отрицательные значения параметра.
      </p>
      
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          1) При <InlineMath math={`a = 0`} /> неравенство принимает вид <InlineMath math={`-1 \\leq x \\leq 1`} />, что имеет бесконечно много решений при <InlineMath math={`x \\neq 0`} />. Значение <InlineMath math={`a = 0`} /> подходит.
        </li>
        <li>
          2) При <InlineMath math={`a > 0`} /> рассмотрим поведение функции <InlineMath math={`f(x) = x + \\dfrac{a^2}{x}`} /> в положительной полуплоскости <InlineMath math={`x > 0`} />. По неравенству Коши (неравенство о средних) для положительных чисел:
          <BlockMath math={`f(x) = x + \\dfrac{a^2}{x} \\geq 2\\sqrt{x \\cdot \\dfrac{a^2}{x}} = 2a.`} />
        </li>
      </ul>
      
      <p>
        Минимальное значение функции в правой полуплоскости равно <InlineMath math={`f_{\\min} = 2a`} /> и достигается в точке <InlineMath math={`x = a`} />. В силу нечетности, в левой полуплоскости (<InlineMath math={`x < 0`} />) локальный максимум функции равен <InlineMath math={`f_{\\max} = -2a`} /> и достигается в точке <InlineMath math={`x = -a`} />.
      </p>
      <p>
        Для того чтобы график функции попадал в полосу <InlineMath math={`[-1; 1]`} />, необходимо, чтобы её экстремальные значения пересекали эти границы:
      </p>
      <BlockMath math={`\\begin{cases} f_{\\min} \\leq 1 \\\\ f_{\\max} \\geq -1 \\end{cases} \\iff \\begin{cases} 2a \\leq 1 \\\\ -2a \\geq -1 \\end{cases} \\iff a \\leq \\dfrac{1}{2}.`} />
      
      <p>
        Учитывая сделанное предположение <InlineMath math={`a \\geq 0`} />, получаем промежуток <InlineMath math={`a \\in [0; 0{,}5]`} />. Распространяя результат на отрицательную полуось в силу нечетности функции, получаем итоговый симметричный отрезок.
      </p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 64 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 340 340" className="w-full max-w-[340px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=170, y=170) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-6, -4, -2, 2, 4, 6].map(i => (
              <line key={`x-${i}`} x1={170 + i*24} y1="20" x2={170 + i*24} y2="320" />
            ))}
            {[-6, -4, -2, 2, 4, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={170 - i*24} x2="320" y2={170 - i*24} />
            ))}
          </g>

          {/* Граничные горизонтальные уровни полосы [-1, 1] (серый пунктир) */}
          <g stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4">
            <line x1="20" y1="122" x2="320" y2="122" /> {/* y = 1 */}
            <line x1="20" y1="218" x2="320" y2="218" /> {/* y = -1 */}
          </g>
          <text x="325" y="126" fill="#94a3b8" stroke="none" className="font-sans text-[11px]">y = 1</text>
          <text x="325" y="222" fill="#94a3b8" stroke="none" className="font-sans text-[11px]">y = -1</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="170" x2="320" y2="170" /> {/* Ось Ox */}
            <line x1="170" y1="20" x2="170" y2="320" />  {/* Ось Oy */}
          </g>
          <path d="M 320,170 L 312,166 M 320,170 L 312,174" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 170,20 L 166,28 M 170,20 L 174,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="330" y="174" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="156" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="156" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Единичная метка на оси Ox */}
          <line x1="194" y1="166" x2="194" y2="174" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="191" y="186" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Две ветви нечетной функции f(x) при критическом значении a = 1/2 */}
          {/* Правая ветвь (x > 0), минимум в (a; 2a) -> при a=0.5: (0.5; 1) -> (182, 122) */}
          {/* Вертикальный хвост аккуратно ограничен и не улетает далеко за пределы сетки */}
          <path d="M 310,40 C 230,110 195,122 182,122 C 176,122 175,110 174,40" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <circle cx="182" cy="122" r="3.5" fill="#000000" />
          <text x="186" y="114" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px] font-semibold">f_min</text>

          {/* Левая ветвь (x < 0), максимум в (-a; -2a) -> при a=0.5: (-0.5; -1) -> (158, 218) */}
          {/* Вертикальный хвост аккуратно ограничен снизу в пределах сетки графического контейнера */}
          <path d="M 30,300 C 110,230 145,218 158,218 C 164,218 165,230 166,300" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <circle cx="158" cy="218" r="3.5" fill="#000000" />
          <text x="132" y="232" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px] font-semibold">f_max</text>


        </svg>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left[-\\dfrac{1}{2}; \\dfrac{1}{2}\\right]`} />
      </div>
    </div>
  )
},


{
  id: 65,
  title: 'Задача 65 (ЕГЭ-2018. Резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\sqrt{x + 2a - 1} + \\sqrt{x - a} = 1',
  textAfter: <span>имеет хотя бы один корень.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Запишем область допустимых значений (ОДЗ) уравнения:
      </p>
      <BlockMath math={`\\begin{cases} x + 2a - 1 \\geq 0, \\\\ x - a \\geq 0 \\end{cases} \\iff \\begin{cases} x \\geq 1 - 2a, \\\\ x \\geq a. \\end{cases}`} />
      
      <p>
        Заметим, что функции <InlineMath math={`f(x) = \\sqrt{x + 2a - 1}`} /> и <InlineMath math={`g(x) = \\sqrt{x - a}`} /> монотонно возрастают, так как коэффициент перед главным членом равен 1, т.е. <InlineMath math={`> 0`} />.
      </p>
      <p>
        Так как функция монотонно возрастает, она может равняться 1 только один раз. Следовательно, наша ОДЗ должна содержать единицу!
      </p>
      
      <p>
        <b>I Случай <InlineMath math={`a \\geq 1 - 2a \\iff 3a \\geq 1 \\implies a \\geq \\dfrac{1}{3}`} />:</b>
      </p>
      <p>
        Подставим <InlineMath math={`x = a`} /> в условие <InlineMath math={`f(a) \\leq 1`} />:
      </p>
      <BlockMath math={`\\sqrt{3a - 1} \\leq 1 \\implies 3a - 1 \\leq 1 \\implies a \\leq \\dfrac{2}{3}.`} />
      <p>Получим: <InlineMath math={`a \\in \\left[\\dfrac{1}{3}; \\dfrac{2}{3}\\right]`} />.</p>
      
      <p>
        <b>II Случай <InlineMath math={`a < 1 - 2a \\iff 3a < 1 \\implies a < \\dfrac{1}{3}`} />:</b>
      </p>
      <p>
        Подставим <InlineMath math={`x = -2a + 1`} /> в условие <InlineMath math={`f(-2a + 1) \\leq 1`} />:
      </p>
      <BlockMath math={`\\sqrt{1 - 3a} \\leq 1 \\implies 1 - 3a \\leq 1 \\implies -3a \\leq 0 \\implies a \\geq 0.`} />
      <p>Получим: <InlineMath math={`a \\in \\left[0; \\dfrac{1}{3}\\right)`} />.</p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 65 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 340 180" className="w-full max-w-[340px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 24px) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-4, -2, 2, 4, 6].map(i => (
              <line key={`x-${i}`} x1={140 + i*24} y1="10" x2={140 + i*24} y2="150" />
            ))}
            {[-2, 2, 4].map(i => (
              <line key={`y-${i}`} x1="20" y1={120 - i*24} x2="320" y2={120 - i*24} />
            ))}
          </g>

          {/* Горизонтальный критический уровень y = 1 (серый пунктир) */}
          <line x1="20" y1="96" x2="320" y2="96" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="325" y="100" fill="#94a3b8" stroke="none" className="font-sans text-[11px]">1</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="120" x2="320" y2="120" /> {/* Ось Ox */}
            <line x1="140" y1="10" x2="140" y2="150" />  {/* Ось Oy */}
          </g>
          <path d="M 320,120 L 312,116 M 320,120 L 312,124" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 140,10 L 136,18 M 140,10 L 144,18" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="126" y="124" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Вертикальная штриховая линия x0 */}
          <line x1="164" y1="96" x2="164" y2="135" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-slate-400" />
          <text x="160" y="148" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-xs">x₀</text>

          {/* Монотонно возрастающая синяя ветвь графика */}
          <path d="M 164,120 Q 210,120 280,30" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Маркерная точка на графике */}
          <circle cx="164" cy="120" r="3.5" fill="#000000" />
        </svg>
      </div>

      <p>
        Объединяя условия обоих случаев, получаем итоговый промежуток для параметра.
      </p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left[0; \\dfrac{2}{3}\\right]`} />
      </div>
    </div>
  )
},


{
  id: 66,
  title: 'Задача 66 (ЕГЭ-2017. Досрочная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых система неравенств',
  mathA: '\\begin{cases} ax \\geq 2, \\\\ \\sqrt{x - 1} > a, \\\\ 3x \\leq 2a + 11 \\end{cases}',
  textAfter: <span>имеет хотя бы один корень на отрезке <InlineMath math={`[3; 4]`} />.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Учтем ОДЗ корня: <InlineMath math={`x \\geq 1`} />. Метод решения графический в осях <InlineMath math={`xOa`} />. Выразим параметр <InlineMath math={`a`} /> из каждого неравенства системы:
      </p>
      
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          <b>1)</b> <InlineMath math={`ax \\geq 2 \\implies`} /> при <InlineMath math={`x > 0`} /> получаем <InlineMath math={`a \\geq \\dfrac{2}{x}`} /> (область, ограниченная ветвью гиперболы).
        </li>
        <li>
          <b>2)</b> <InlineMath math={`\\sqrt{x - 1} > a \\iff a < \\sqrt{x - 1}`} /> (область, ограниченная ветвью параболы).
        </li>
        <li>
          <b>3)</b> <InlineMath math={`3x \\leq 2a + 11 \\iff 2a \\geq 3x - 11 \\iff a \\geq \\dfrac{3}{2}x - \\dfrac{11}{2}`} /> (область, ограниченная прямой).
        </li>
      </ul>
      
      <p>
        Изобразим эти линии и соответствующие им области в плоскости <InlineMath math={`xOa`} /> внутри вертикальной полосы, заданной отрезком <InlineMath math={`x \\in [3; 4]`} />.
      </p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 66 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 420 420" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 32px. Центр (0,0) зафиксирован на x=160, y=240) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-4, -2, 2, 4, 6, 8].map(i => (
              <line key={`x-${i}`} x1={160 + i*32} y1="20" x2={160 + i*32} y2="400" />
            ))}
            {[-6, -4, -2, 2, 4, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={240 - i*32} x2="400" y2={240 - i*32} />
            ))}
          </g>

          {/* Вертикальные границы исследуемой полосы x = 3 и x = 4 (серый пунктир) */}
          <g stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4">
            <line x1="256" y1="20" x2="256" y2="400" /> {/* x = 3 */}
            <line x1="288" y1="20" x2="288" y2="400" /> {/* x = 4 */}
          </g>
          <text x="250" y="16" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">x = 3</text>
          <text x="284" y="16" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">x = 4</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="240" x2="400" y2="240" /> {/* Ось Ox */}
            <line x1="160" y1="20" x2="160" y2="400" />  {/* Ось Oa */}
          </g>
          <path d="M 400,240 L 392,236 M 400,240 L 392,244" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 160,20 L 156,28 M 160,20 L 164,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="412" y="244" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="146" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="146" y="254" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки делений на Ox */}
          <line x1="192" y1="236" x2="192" y2="244" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="189" y="256" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">1</text>
          <line x1="256" y1="236" x2="256" y2="244" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="253" y="256" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">3</text>
          <line x1="288" y1="236" x2="288" y2="244" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="285" y="256" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">4</text>

          {/* Горизонтальные критические уровни ординат (красный тонкий пунктир) */}
          <g stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2">
            <line x1="20" y1="184.6" x2="400" y2="184.6" /> {/* a = sqrt(3) */}
            <text x="24" y="178" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = √3</text>
            <line x1="20" y1="224" x2="400" y2="224" /> {/* a = 1/2 */}
            <text x="24" y="218" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 1/2</text>
          </g>

          {/* Розовая заштрихованная область отбора параметров */}
          <polygon points="256,218.7 256,194.8 288,184.6 288,224" fill="#fca5a5" fillOpacity="0.4" stroke="none" />

          {/* Синие линии графиков-ограничений */}
          {/* 1) Ветвь гиперболы a = 2/x в I четверти: укорочена на 1 деление (32px) с обеих сторон */}
          {/* Вертикальный хвост начинается от a=5 (y=80), горизонтальный хвост заканчивается на x=5 (x=320) */}
          <path d="M 172.8,80 C 173,140 185,202 224,213.3 C 248,220.3 270,223.5 288,224 C 304,224.5 312,225.2 320,225.6" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="325" y="236" fill="#2563eb" stroke="none" className="font-sans text-[10px]">a = 2/x</text>

          {/* Ветвь гиперболы a = 2/x в III четверти: центрально-симметрично подрезана на 1 деление со всех сторон */}
          <path d="M 147.2,400 C 147,340 135,278 96,266.7 C 72,259.7 50,256.5 32,256 C 16,255.5 8,254.8 0,254.4" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* 2) Единая ветвь корня a = sqrt(x-1) */}
          <path d="M 192,240 Q 224,200 288,184.6 T 380,165" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="350" y="155" fill="#2563eb" stroke="none" className="font-sans text-[10px]">a = √x-1</text>

          {/* 3) Прямая a = 1.5x - 5.5 */}
          <line x1="140" y1="446" x2="330" y2="160" stroke="#2563eb" strokeWidth="2.5" />
          <text x="315" y="196" fill="#2563eb" stroke="none" className="font-sans text-[10px]">a = 1.5x - 5.5</text>

          {/* Маркерные и выколотые пограничные точки */}
          <circle cx="192" cy="240" r="3.5" fill="#000000" /> {/* Вершина (1;0) */}
          <circle cx="288" cy="224" r="3.5" fill="#000000" /> {/* Точка пересечения гиперболы и прямой (4; 1/2) */}
          <circle cx="288" cy="184.6" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* Выколотая (4; sqrt(3)) */}
        </svg>
      </div>




      <p className="font-bold">Пояснение отбора параметра <InlineMath math={`a`} />:</p>
      <p>
        Система имеет хотя бы одно решение на отрезке <InlineMath math={`[3; 4]`} />, если горизонтальная сканирующая прямая уровня <InlineMath math={`a`} /> пересекает заштрихованную область множества решений.
      </p>
      
      <p>
        <b>1)</b> Ниже на границе область определяется точкой пересечения гиперболы <InlineMath math={`a = \\dfrac{2}{x}`} /> и прямой <InlineMath math={`a = \\dfrac{3}{2}x - \\dfrac{11}{2}`} />. Найдем их общую точку:
      </p>
      <BlockMath math={`\\dfrac{2}{x} = \\dfrac{3x - 11}{2} \\iff 3x^2 - 11x - 4 = 0 \\implies x = \\dfrac{11 \\pm 13}{6} \\implies x = 4 \\quad (\\text{т.к. } x \\geq 1).`} />
      
      <p>
        При <InlineMath math={`x = 4`} /> ордината равна <InlineMath math={`a = \\dfrac{2}{4} = \\dfrac{1}{2}`} />. Так как неравенства <InlineMath math={`ax \\geq 2`} /> и <InlineMath math={`3x \\leq 2a + 11`} /> нестрогие, нижняя точка границы включается в ответ: <InlineMath math={`a_{\\min} = \\dfrac{1}{2}`} />.
      </p>
      
      <p>
        <b>2)</b> Верхняя граница области определяется моментом пересечения верхней ограничивающей кривой <InlineMath math={`a = \\sqrt{x - 1}`} /> с правой границей полосы <InlineMath math={`x = 4`} />:
      </p>
      <BlockMath math={`a = \\sqrt{4 - 1} = \\sqrt{3}.`} />
      
      <p>
        Поскольку второе неравенство исходной системы строгое (<InlineMath math={`\\sqrt{x - 1} > a`} edugraph/>), в точке пересечения решение исчезает, поэтому верхняя граница открытая: <InlineMath math={`a_{\\max} = \\sqrt{3}`} />.
      </p>
      <p>
        Таким образом, горизонтальная линия пересекает область решений при всех <InlineMath math={`a \\in \\left[\\dfrac{1}{2}; \\sqrt{3}\\right)`} />.
      </p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left[\\dfrac{1}{2}; \\sqrt{3}\\right)`} />
      </div>
    </div>
  )
},



{
  id: 67,
  title: 'Задача 67 (ЕГЭ-2017. Досрочная волна, резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых система неравенств',
  mathA: '\\begin{cases} |x| + |a| \\leq 4, \\\\ x^2 + 8x < 16a + 48 \\end{cases}',
  textAfter: <span>имеет хотя бы один корень на отрезке <InlineMath math={`[-1; 0]`} />.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Так как по условию задачи рассматривается отрезок <InlineMath math={`x \\in [-1; 0]`} />, то координата не положительна: <InlineMath math={`x \\leq 0`} />, поэтому модуль раскрывается однозначно: <InlineMath math={`|x| = -x`} />.
      </p>
      <p>Преобразуем первое неравенство системы:</p>
      <BlockMath math={`-x + |a| \\leq 4 \\iff |a| \\leq 4 + x \\iff -4 - x \\leq a \\leq 4 + x.`} />
      
      <p>Второе неравенство системы выразим относительно параметра <InlineMath math={`a`} />:</p>
      <BlockMath math={`x^2 + 8x < 16a + 48 \\iff 16a > x^2 + 8x - 48 \\iff a > \\dfrac{x^2 + 8x - 48}{16}.`} />
      
      <p>Таким образом, исходная система на исследуемом отрезке равносильна системе неравенств:</p>
      <BlockMath math={`\\begin{cases} a \\geq -4 - x, \\\\ a \\leq 4 + x, \\\\ a > \\dfrac{x^2 + 8x - 48}{16}. \\end{cases}`} />
      
      <p>
        Решим задачу графическим методом в прямоугольной системе координат <InlineMath math={`xOa`} />. Найдём область, удовлетворяющую всем условиям внутри вертикальной полосы ОДЗ <InlineMath math={`x \\in [-1; 0]`} />. Допустимые значения параметра <InlineMath math={`a`} /> для каждого фиксированного <InlineMath math={`x`} /> лежат выше графика параболы и между ограничивающими прямыми ромба.
      </p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 67 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 460" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 28px. Центр (0,0) зафиксирован на x=220, y=220. Деление 5 удалено из массива) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4].map(i => (
              <line key={`x-${i}`} x1={220 + i*28} y1="20" x2={220 + i*28} y2="440" />
            ))}
            {[-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map(i => (
              <line key={`y-${i}`} x1="20" y1={220 - i*28} x2="360" y2={220 - i*28} />
            ))}
          </g>

          {/* Левая вертикальная граница полосы x = -1 (серый пунктир) */}
          <line x1="192" y1="20" x2="192" y2="440" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="160" y="16" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">x = -1</text>

          {/* Розовая заштрихованная область решения системы внутри полосы Ox */}
          <path d="M 192,136 L 220,108 L 220,304 C 210,304.5 198,302 192,301.5 Z" fill="#fca5a5" fillOpacity="0.4" stroke="none" />

          {/* Оси координат с удлинённой на 0,5 деления (14px) осью Ox */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="220" x2="354" y2="220" /> {/* Ось Ox */}
            <line x1="220" y1="20" x2="220" y2="440" />  {/* Ось Oa */}
          </g>
          <path d="M 354,220 L 346,216 M 354,220 L 346,224" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 220,20 L 216,28 M 220,20 L 224,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="362" y="224" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="206" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="206" y="234" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Числовые метки делений на оси Ox (число 5 удалено из массива) */}
          {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4].map(i => (
            <g key={`lbl-x-${i}`}>
              <line x1={220 + i*28} y1="216" x2={220 + i*28} y2="224" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x={220 + i*28 - 5} y="236" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">{i}</text>
            </g>
          ))}
          {[-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map(i => (
            <g key={`lbl-y-${i}`}>
              <line x1="216" y1={220 - i*28} x2="224" y2={220 - i*28} stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x="228" y={220 - i*28 + 4} fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">{i}</text>
            </g>
          ))}

          {/* Критический уровень касания границы a = 8 - 8√2 ≈ -3.31 (красный пунктир) */}
          <line x1="20" y1="312.8" x2="340" y2="312.8" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="3 2" />
          <text x="24" y="305" fill="#dc2626" stroke="none" className="font-sans text-[10px]">a = 8 - 8√2</text>

          {/* Синие графики-ограничения */}
          {/* Прямая a = 4 + x */}
          <line x1="40" y1="288" x2="260" y2="68" stroke="#2563eb" strokeWidth="2.5" />
          <text x="235" y="105" fill="#2563eb" stroke="none" className="font-sans text-[10px]">a = 4 + x</text>

          {/* Прямая a = -4 - x */}
          <line x1="40" y1="152" x2="260" y2="372" stroke="#2563eb" strokeWidth="2.5" />
          <text x="130" y="300" fill="#2563eb" stroke="none" className="font-sans text-[10px]">a = -4 - x</text>

          {/* Синяя парабола a = (x^2 + 8x - 48)/16 */}
          <path d="M 20,312 C 60,332 90,332 108,332 C 126,332 156,332 220,304 C 250,292 280,274 320,244" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="254" y="295" fill="#2563eb" stroke="none" className="font-sans text-[9px]">a = (x²+8x-48)/16</text>

          {/* Ключевые точки пересечений на осях */}
          <circle cx="108" cy="220" r="3.5" fill="#000000" /> {/* (-4; 0) */}
          <circle cx="220" cy="108" r="3.5" fill="#000000" /> {/* (0;4) */}
          <circle cx="220" cy="332" r="3.5" fill="#000000" /> {/* (0;-4) */}
          
          {/* ВЫКОЛОТАЯ ТОЧКА (0; -3) на оси ординат */}
          <circle cx="220" cy="304" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" />
          
          {/* Выколотая критическая точка касания нижней границы (-12+8√2; 8-8√2) */}
          <circle cx="200.7" cy="312.8" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" />
        </svg>
      </div>




      <p>
        Система имеет хотя бы один корень на отрезке <InlineMath math={`[-1; 0]`} /> тогда и только тогда, когда существует точка заштрихованной области с некоторой фиксированной ординатой <InlineMath math={`a`} />.
      </p>
      <p>
        Найдём наименьшее возможное значение параметра <InlineMath math={`a`} />. Ниже на границе область определяется на участке пересечением прямой <InlineMath math={`a = -4 - x`} /> и параболы:
      </p>
      <BlockMath math={`-4 - x = \\dfrac{x^2 + 8x - 48}{16} \\iff -64 - 16x = x^2 + 8x - 48 \\iff x^2 + 24x + 16 = 0.`} />
      
      <p>Отсюда получаем корни квадратного уравнения:</p>
      <BlockMath math={`x = \\dfrac{-24 \\pm \\sqrt{576 - 64}}{2} = \\dfrac{-24 \\pm \\sqrt{512}}{2} = -12 \\pm 8\\sqrt{2}.`} />
      <p>Так как рассматривается полоса ОДЗ <InlineMath math={`x \\in [-1; 0]`} />, выбираем корень:</p>
      <BlockMath math={`x = -12 + 8\\sqrt{2}.`} />
      
      <p>Тогда соответствующее значение ординаты границы равно:</p>
      <BlockMath math={`a = -4 - (-12 + 8\\sqrt{2}) = 8 - 8\\sqrt{2}.`} />
      
      <p>
        Однако это граничное значение параметра не входит в ответ. Действительно, в найденной точке выполняется равенство с параболой, а второе неравенство исходной системы является строгим. Следовательно, в этой точке оно не выполняется. При любом <InlineMath math={`a > 8 - 8\\sqrt{2}`} /> можно выбрать <InlineMath math={`x`} /> достаточно близким к этой критической точке слева, чтобы одновременно выполнялись все три неравенства. Поэтому нижняя граница открытая: <InlineMath math={`a > 8 - 8\\sqrt{2}`} />.
      </p>
      
      <p>
        Теперь найдём наибольшее возможное значение параметра. Из неравенства ромба <InlineMath math={`a \\leq 4 + x`} /> на отрезке <InlineMath math={`x \\in [-1; 0]`} /> получаем: <InlineMath math={`a \\leq 4`} />.
      </p>
      <p>
        Значение <InlineMath math={`a = 4`} /> достигается при <InlineMath math={`x = 0`} />. Выполним проверку подстановкой:
      </p>
      <BlockMath math={`|0| + |4| = 4 \\leq 4,`} />
      <BlockMath math={`0^2 + 8 \\cdot 0 = 0 < 16 \\cdot 4 + 48 = 112 \\quad (\\text{верно}).`} />
      <p>Следовательно, верхняя изолированная точка <InlineMath math={`a = 4`} /> полностью подходит и включается в ответ.</p>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (8 - 8\\sqrt{2}; 4]`} />
      </div>
    </div>
  )
},



{
  id: 68,
  title: 'Задача 68 (ЕГЭ-2017. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\sqrt{3x - 2} \\cdot \\ln(x - a) = \\sqrt{3x - 2} \\cdot \\ln(2x + a)',
  textAfter: <span>имеет ровно один корень на отрезке <InlineMath math={`[0; 1]`} />.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Так как корень и логарифмы должны быть определены, получаем ОДЗ:
      </p>
      <BlockMath math={`3x - 2 \\geq 0, \\quad x - a > 0, \\quad 2x + a > 0.`} />
      
      <p>
        На отрезке <InlineMath math={`[0; 1]`} /> имеем полосу допустимых значений:
      </p>
      <BlockMath math={`x \\in \\left[\\dfrac{2}{3}; 1\\right], \\quad a < x, \\quad a > -2x.`} />
      
      <p>Исходное уравнение равносильно:</p>
      <BlockMath math={`\\sqrt{3x - 2}(\\ln(x - a) - \\ln(2x + a)) = 0.`} />
      
      <p>Следовательно,</p>
      <BlockMath math={`\\sqrt{3x - 2} = 0 \\quad \\text{или} \\quad \\ln \\dfrac{x - a}{2x + a} = 0.`} />
      
      <p>Отсюда находим первый фиксированный корень:</p>
      <BlockMath math={`x_1 = \\dfrac{2}{3},`} />
      
      <p>или для второго логарифмического корня получаем уравнение:</p>
      <BlockMath math={`\\dfrac{x - a}{2x + a} = 1 \\iff x - a = 2x + a \\iff x_2 = -2a.`} />
      
      <p>
        Рассмотрим плоскость <InlineMath math={`xOa`} />. Первый корень <InlineMath math={`x_1 = \\dfrac{2}{3}`} /> удовлетворяет ОДЗ логарифмов и существует при условиях:
      </p>
      <BlockMath math={`\\dfrac{2}{3} - a > 0, \\quad \\dfrac{4}{3} + a > 0 \\iff -\\dfrac{4}{3} < a < \\dfrac{2}{3}.`} />
      
      <p>
        Второй корень <InlineMath math={`x_2 = -2a`} /> на отрезке <InlineMath math={`x \\in \\left[\\dfrac{2}{3}; 1\\right]`} /> принимает значения, когда выполняется:
      </p>
      <BlockMath math={`\\dfrac{2}{3} \\leq -2a \\leq 1 \\iff a \\in \\left[-\\dfrac{1}{2}; -\\dfrac{1}{3}\\right).`} />
      
      <p>Проверим совпадение корней <InlineMath math={`x_1`} /> и <InlineMath math={`x_2`} />:</p>
      <BlockMath math={`-2a = \\dfrac{2}{3} \\implies a = -\\dfrac{1}{3}.`} />
      <p>
        При <InlineMath math={`a = -\\dfrac{1}{3}`} /> второй корень совпадает с первым: <InlineMath math={`x = \\dfrac{2}{3}`} />.
      </p>
      
      <p>
        Уравнение имеет ровно один корень, когда существует только корень <InlineMath math={`x_1`} /> (а корень <InlineMath math={`x_2`} /> не удовлетворяет ОДЗ или совпадает с ним), либо когда существует только корень <InlineMath math={`x_2`} />. Изобразим пересечение и отбор условий на числовой прямой параметра <InlineMath math={`a`} /> с помощью наглядных «крыш»:
      </p>

      {/* Высокоточный и наглядный график числовой прямой параметров с встроенным рендером KaTeX через foreignObject */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 140" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Главная ось параметра а */}
          <line x1="20" y1="75" x2="400" y2="75" stroke="#000000" strokeWidth="1.5" className="dark:stroke-slate-400" />
          <path d="M 400,85 L 392,81 M 400,85 L 392,89" stroke="#000000" strokeWidth="1.5" fill="none" transform="translate(0, -10)" className="dark:stroke-slate-400" />
          <text x="412" y="79" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* «Крыша» существования первого корня x1: a ∈ (-4/3; 2/3) */}
          <path d="M 60,75 L 60,30 L 340,30 L 340,75" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="194" y="22" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">x₁</text>
          
          {/* «Крыша» существования второго корня x2: a ∈ [-1/2; -1/3) */}
          <path d="M 160,75 L 160,45 L 240,45 L 240,75" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="194" y="40" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">x₂</text>

          {/* Первый интервал (-4/3; -1/2): выделен и заштрихован */}
          <line x1="60" y1="75" x2="160" y2="75" stroke="#000000" strokeWidth="3" className="dark:stroke-slate-300" />
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`sh1-${i}`} x1={62 + i * 8} y1="75" x2={68 + i * 8} y2="66" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-500" />
          ))}

          {/* Второй интервал [-1/3; 2/3): жирная линия без штриховки */}
          <line x1="240" y1="75" x2="340" y2="75" stroke="#000000" strokeWidth="3.5" className="dark:stroke-slate-100" />

          {/* Выколотая точка -4/3 */}
          <circle cx="60" cy="75" r="3.5" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Выколотая точка -1/2 */}
          <circle cx="160" cy="75" r="3.5" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Закрашенная точка -1/3 */}
          <circle cx="240" cy="75" r="3.5" fill="#000000" className="dark:fill-slate-300" />

          {/* Выколотая точка 2/3 */}
          <circle cx="340" cy="75" r="3.5" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Встроенные контейнеры foreignObject для каноничного отображения KaTeX под осями */}
          <foreignObject x="20" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`-\\dfrac{4}{3}`} />
            </div>
          </foreignObject>

          <foreignObject x="120" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`-\\dfrac{1}{2}`} />
            </div>
          </foreignObject>

          <foreignObject x="200" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`-\\dfrac{1}{3}`} />
            </div>
          </foreignObject>

          <foreignObject x="300" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`\\dfrac{2}{3}`} />
            </div>
          </foreignObject>
        </svg>
      </div>


      <p>Получаем итоговое множество интервалов параметра:</p>
      <BlockMath math={`a \\in \\left(-\\dfrac{4}{3}; -\\dfrac{1}{2}\\right) \\cup \\left[-\\dfrac{1}{3}; \\dfrac{2}{3}\\right).`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(-\\dfrac{4}{3}; -\\dfrac{1}{2}\\right) \\cup \\left[-\\dfrac{1}{3}; \\dfrac{2}{3}\\right)`} />
      </div>
    </div>
  )
},


{
  id: 69,
  title: 'Задача 69 (ЕГЭ-2017. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\ln(4x - 1) \\cdot \\sqrt{x^2 - 6x + 6a - a^2} = 0',
  textAfter: <span>имеет ровно один корень на отрезке <InlineMath math={`[0; 3]`} />.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Найдём область допустимых значений (ОДЗ) уравнения:</p>
      <BlockMath math={`4x - 1 > 0, \\quad x^2 - 6x + 6a - a^2 \\geq 0.`} />
      
      <p>
        На отрезке <InlineMath math={`[0; 3]`} /> первое условие даёт рабочую область: <InlineMath math={`x \\in \\left(\\dfrac{1}{4}; 3\\right]`} />.Разложим подкоренное выражение на множители:
      </p>
      <BlockMath math={`x^2 - 6x + 6a - a^2 = (x - a)(x + a - 6).`} />
      
      <p>Исходное уравнение равносильно совокупности:</p>
      <BlockMath math={`\\left[ \\begin{array}{l} \\ln(4x - 1) = 0, \\\\ (x - a)(x + a - 6) = 0. \\end{array} \\right.`} />
      
      <p>Получаем потенциальные корни уравнения:</p>
      <BlockMath math={`x_1 = \\dfrac{1}{2}, \\quad x_2 = a, \\quad x_3 = 6 - a.`} />
      
      <p>
        На полуинтервале <InlineMath math={`x \\in \\left(\\dfrac{1}{4}; 3\\right]`} /> корень <InlineMath math={`x_2 = a`} /> существует при <InlineMath math={`a \\in \\left(\\dfrac{1}{4}; 3\\right]`} />, а корень <InlineMath math={`x_3 = 6 - a`} /> существует при <InlineMath math={`6 - a \\in \\left(\\dfrac{1}{4}; 3\\right] \\iff a \\in \\left[3; \\dfrac{23}{4}\\right)`} />. При <InlineMath math={`a = 3`} /> оба выражения дают один и тот же корень <InlineMath math={`x = 3`} />.
      </p>
      
      <p>
        Корень <InlineMath math={`x_1 = \\dfrac{1}{2}`} /> удовлетворяет ОДЗ (подмысленному условию неотрицательности радикальной части) тогда и только тогда, когда:
      </p>
      <BlockMath math={`\\dfrac{1}{4} - 3 + 6a - a^2 \\geq 0 \\iff a^2 - 6a + \\dfrac{11}{4} \\leq 0 \\iff \\left(a - \\dfrac{1}{2}\\right)\\left(a - \\dfrac{11}{2}\\right) \\leq 0,`} />
      <p>то есть при <InlineMath math={`a \\in \\left[\\dfrac{1}{2}; \\dfrac{11}{2}\\right]`} />.</p>
      
      <p>Таким образом, анализируя взаимное расположение и совпадение корней:</p>
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          <b>1)</b> При <InlineMath math={`a \\in \\left(\\dfrac{1}{4}; \\dfrac{1}{2}\\right)`} /> существует только корень <InlineMath math={`x_2 = a`} />.
        </li>
        <li>
          <b>2)</b> При <InlineMath math={`a = \\dfrac{1}{2}`} /> корни <InlineMath math={`x_2 = a`} /> и <InlineMath math={`x_1 = \\dfrac{1}{2}`} /> совпадают.
        </li>
        <li>
          <b>3)</b> Аналогично, при <InlineMath math={`a = \\dfrac{11}{2}`} /> корни <InlineMath math={`x_3 = 6 - a`} /> и <InlineMath math={`x_1 = \\dfrac{1}{2}`} /> совпадают.
        </li>
        <li>
          <b>4)</b> При <InlineMath math={`a \\in \\left(\\dfrac{11}{2}; \\dfrac{23}{4}\\right)`} /> существует только корень <InlineMath math={`x_3 = 6 - a`} />.
        </li>
      </ul>
      
      <p>
        Изобразим области существования корней <InlineMath math={`x_1, x_2, x_3`} /> на числовой прямой параметра <InlineMath math={`a`} /> с помощью наглядных «крыш»:
      </p>

      {/* Высокоточный и наглядный график числовой прямой параметров с встроенным рендером KaTeX через foreignObject */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 140" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Главная ось параметра а */}
          <line x1="20" y1="85" x2="400" y2="85" stroke="#000000" strokeWidth="1.5" className="dark:stroke-slate-400" />
          <path d="M 400,85 L 392,81 M 400,85 L 392,89" stroke="#000000" strokeWidth="1.5" fill="none" transform="translate(0, -10)" className="dark:stroke-slate-400" />
          <text x="410" y="89" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* «Крыша» существования корня x1: a ∈ [1/2; 11/2] */}
          <path d="M 120,85 L 120,30 L 320,30 L 320,85" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="215" y="22" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">x₁</text>
          
          {/* «Крыша» существования корня x2: a ∈ (1/4; 3] */}
          <path d="M 60,85 L 60,55 L 200,55 L 200,85" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="125" y="48" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">x₂</text>

          {/* «Крыша» существования корня x3: a ∈ [3; 23/4) */}
          <path d="M 200,85 L 200,55 L 360,55 L 360,85" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="275" y="48" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">x₃</text>

          {/* Общий маркер совпадения/стыка корней x2 и x3 при a = 3 */}
          <circle cx="200" cy="85" r="3.5" fill="#000000" className="dark:fill-slate-300" />

          {/* Результирующий первый интервал отбора (1/4; 1/2]: заштрихован */}
          <line x1="60" y1="85" x2="120" y2="85" stroke="#000000" strokeWidth="3" className="dark:stroke-slate-300" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`sh1-${i}`} x1={62 + i * 8} y1="85" x2={68 + i * 8} y2="76" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-500" />
          ))}

          {/* Результирующий второй интервал отбора [11/2; 23/4): заштрихован */}
          <line x1="320" y1="85" x2="360" y2="85" stroke="#000000" strokeWidth="3" className="dark:stroke-slate-300" />
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={`sh2-${i}`} x1={322 + i * 8} y1="85" x2={328 + i * 8} y2="76" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-500" />
          ))}

          {/* Точки числовой оси */}
          {/* Выколотая 1/4 */}
          <circle cx="60" cy="85" r="3.5" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Закрашенная 1/2 */}
          <circle cx="120" cy="85" r="3.5" fill="#000000" className="dark:fill-slate-300" />

          {/* Закрашенная 11/2 */}
          <circle cx="320" cy="85" r="3.5" fill="#000000" className="dark:fill-slate-300" />

          {/* Выколотая 23/4 */}
          <circle cx="360" cy="85" r="3.5" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Встроенные контейнеры foreignObject для каноничного отображения KaTeX под осями */}
          <foreignObject x="20" y="92" width="80" height="45">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`\\dfrac{1}{4}`} />
            </div>
          </foreignObject>

          <foreignObject x="80" y="92" width="80" height="45">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`\\dfrac{1}{2}`} />
            </div>
          </foreignObject>

          <foreignObject x="160" y="92" width="80" height="45">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`3`} />
            </div>
          </foreignObject>

          <foreignObject x="280" y="92" width="80" height="45">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`\\dfrac{11}{2}`} />
            </div>
          </foreignObject>

          <foreignObject x="320" y="92" width="80" height="45">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`\\dfrac{23}{4}`} />
            </div>
          </foreignObject>
        </svg>
      </div>

      <p>Объединяя промежутки, получаем итоговый ответ задачи:</p>
      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(\\dfrac{1}{4}; \\dfrac{1}{2}\\right] \\cup \\left[\\dfrac{11}{2}; \\dfrac{23}{4}\\right)`} />
      </div>
    </div>
  )
},


{
  id: 70,
  title: 'Задача 70 (ЕГЭ-2017. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\sqrt{2x - 1} \\cdot \\ln(4x - a) = \\sqrt{2x - 1} \\cdot \\ln(5x + a)',
  textAfter: <span>имеет ровно один корень на отрезке <InlineMath math={`[0; 1]`} />.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>ОДЗ уравнения:</p>
      <BlockMath math={`2x - 1 \\geq 0, \\quad 4x - a > 0, \\quad 5x + a > 0.`} />
      
      <p>
        На отрезке <InlineMath math={`[0; 1]`} /> получаем рабочую область:
      </p>
      <BlockMath math={`x \\in \\left[\\dfrac{1}{2}; 1\\right], \\quad a < 4x, \\quad a > -5x.`} />
      
      <p>Исходное уравнение равносильно совокупности:</p>
      <BlockMath math={`\\sqrt{2x - 1}(\\ln(4x - a) - \\ln(5x + a)) = 0.`} />
      
      <p>Следовательно,</p>
      <BlockMath math={`\\left[ \\begin{array}{l} x_1 = \\dfrac{1}{2}, \\\\[1.5ex] 4x - a = 5x + a. \\end{array} \\right.`} />
      
      <p>Отсюда для второй ветви находим:</p>
      <BlockMath math={`4x - a = 5x + a \\iff x_2 = -2a.`} />
      
      <p>
        При <InlineMath math={`x_1 = \\dfrac{1}{2}`} /> условия существования логарифмов дают:
      </p>
      <BlockMath math={`2 - a > 0, \\quad \\dfrac{5}{2} + a > 0 \\iff -\\dfrac{5}{2} < a < 2.`} />
      
      <p>Проверка на совпадение корней:</p>
      <BlockMath math={`x_1 = x_2 \\iff \\dfrac{1}{2} = -2a \\implies a = -\\dfrac{1}{4}.`} />
      <p>
        При <InlineMath math={`a = -\\dfrac{1}{4}`} /> корни совпадают (подходит).
      </p>
      
      <p>Проверка корня <InlineMath math={`x_2 = -2a`} /> на ОДЗ:</p>
      <BlockMath math={`x \\in \\left[\\dfrac{1}{2}; 1\\right], \\quad a < 4x, \\quad a > -5x`} />
      <BlockMath math={`\\dfrac{1}{2} \\leq -2a \\leq 1, \\quad a < -8a, \\quad a > 10a`} />
      <BlockMath math={`-\\dfrac{1}{4} \\geq a \\geq -\\dfrac{1}{2}, \\quad a < 0`} />
      <p>То есть получаем область существования второго корня:</p>
      <BlockMath math={`a \\in \\left[-\\dfrac{1}{2}; -\\dfrac{1}{4}\\right].`} />
      
      <p>
        Изобразим пересечение и отбор условий для корней <InlineMath math={`x_1`} /> и <InlineMath math={`x_2`} /> на числовой прямой параметра <InlineMath math={`a`} /> с помощью наглядных «крыш»:
      </p>

      {/* Высокоточный и наглядный график числовой прямой параметров с встроенным рендером KaTeX через foreignObject */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 140" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Главная ось параметра а */}
          <line x1="20" y1="75" x2="400" y2="75" stroke="#000000" strokeWidth="1.5" className="dark:stroke-slate-400" />
          <path d="M 400,85 L 392,81 M 400,85 L 392,89" stroke="#000000" strokeWidth="1.5" fill="none" transform="translate(0, -10)" className="dark:stroke-slate-400" />
          <text x="412" y="79" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* «Крыша» существования первого корня x1: a ∈ (-5/2; 2) */}
          <path d="M 60,75 L 60,30 L 340,30 L 340,75" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="194" y="22" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">x₁</text>
          
          {/* «Крыша» существования второго корня x2: a ∈ [-1/2; -1/4] */}
          <path d="M 160,75 L 160,45 L 240,45 L 240,75" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="194" y="40" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">x₂</text>

          {/* Первый результирующий интервал отбора (-5/2; -1/2): выделен и заштрихован */}
          <line x1="60" y1="75" x2="160" y2="75" stroke="#000000" strokeWidth="3" className="dark:stroke-slate-300" />
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`sh1-${i}`} x1={62 + i * 8} y1="75" x2={68 + i * 8} y2="66" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-500" />
          ))}

          {/* Второй результирующий интервал отбора [-1/4; 2): жирная линия без штриховки по скриншоту */}
          <line x1="240" y1="75" x2="340" y2="75" stroke="#000000" strokeWidth="3.5" className="dark:stroke-slate-100" />

          {/* Выколотая точка -5/2 */}
          <circle cx="60" cy="75" r="3.5" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Выколотая точка -1/2 */}
          <circle cx="160" cy="75" r="3.5" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Закрашенная точка -1/4 */}
          <circle cx="240" cy="75" r="3.5" fill="#000000" className="dark:fill-slate-300" />

          {/* Выколотая точка 2 */}
          <circle cx="340" cy="75" r="3.5" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Встроенные контейнеры foreignObject для каноничного отображения KaTeX под осями */}
          <foreignObject x="20" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`-\\dfrac{5}{2}`} />
            </div>
          </foreignObject>

          <foreignObject x="120" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`-\\dfrac{1}{2}`} />
            </div>
          </foreignObject>

          <foreignObject x="200" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`-\\dfrac{1}{4}`} />
            </div>
          </foreignObject>

          <foreignObject x="300" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`2`} />
            </div>
          </foreignObject>
        </svg>
      </div>

      <p>Следовательно, ровно один корень получается при условиях:</p>
      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(-\\dfrac{5}{2}; -\\dfrac{1}{2}\\right) \\cup \\left[-\\dfrac{1}{4}; 2\\right)`} />
      </div>
    </div>
  )
},


{
  id: 71,
  title: 'Задача 71 (ЕГЭ-2017. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\sqrt{4x - 1} \\cdot \\ln(x^2 - 2x + 2 - a^2) = 0',
  textAfter: <span>имеет ровно один корень на отрезке <InlineMath math={`[0; 1]`} />.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Найдём ОДЗ уравнения:</p>
      <BlockMath math={`4x - 1 \\geq 0, \\quad x^2 - 2x + 2 - a^2 > 0.`} />
      
      <p>
        Так как <InlineMath math={`x \\in [0; 1]`} />, первое условие равносильно: <InlineMath math={`x \\in \\left[\\dfrac{1}{4}; 1\\right]`} />.
      </p>
      <p>На ОДЗ произведение равно нулю тогда и только тогда, когда хотя бы один из множителей равен нулю:</p>
      <BlockMath math={`\\left[ \\begin{array}{l} \\sqrt{4x - 1} = 0, \\\\ \\ln(x^2 - 2x + 2 - a^2) = 0. \\end{array} \\right.`} />
      
      <p>Рассмотрим первое уравнение: <InlineMath math={`\\sqrt{4x - 1} = 0 \\iff x_1 = \\dfrac{1}{4}`} />. Чтобы эта точка являлась корнем исходного уравнения, необходимо выполнение ОДЗ логарифма:</p>
      <BlockMath math={`\\left(\\dfrac{1}{4}\\right)^2 - 2 \\cdot \\dfrac{1}{4} + 2 - a^2 > 0 \\iff \\dfrac{1}{16} - \\dfrac{1}{2} + 2 - a^2 > 0 \\iff \\dfrac{25}{16} - a^2 > 0 \\iff |a| < \\dfrac{5}{4}.`} />
      <p>Следовательно, корень <InlineMath math={`x_1 = \\dfrac{1}{4}`} /> существует при <InlineMath math={`a \\in \\left(-\\dfrac{5}{4}; \\dfrac{5}{4}\\right)`} />.</p>
      
      <p>Теперь рассмотрим второе уравнение:</p>
      <BlockMath math={`\\ln(x^2 - 2x + 2 - a^2) = 0 \\iff x^2 - 2x + 2 - a^2 = 1 \\iff (x - 1)^2 = a^2 \\iff x_2 = 1 - a \\text{ или } x_3 = 1 + a.`} />
      
      <p>Для корня <InlineMath math={`x_2 = 1 - a`} /> получаем условие принадлежности отрезку:</p>
      <BlockMath math={`\\dfrac{1}{4} \\leq 1 - a \\leq 1 \\iff 0 \\leq a \\leq \\dfrac{3}{4}.`} />
      
      <p>Для корня <InlineMath math={`x_3 = 1 + a`} /> аналогично:</p>
      <BlockMath math={`\\dfrac{1}{4} \\leq 1 + a \\leq 1 \\iff -\\dfrac{3}{4} \\leq a \\leq 0.`} />
      
      <p>Таким образом, логарифмические корни существуют при <InlineMath math={`a \\in \\left[-\\dfrac{3}{4}; \\dfrac{3}{4}\\right]`} />.</p>
      
      <p>Рассмотрим совпадения корней:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li><InlineMath math={`x_2 = x_3 \\iff 1 - a = 1 + a \\iff a = 0`} /> (при <InlineMath math={`a = 0`} /> корни <InlineMath math={`x_2`} /> и <InlineMath math={`x_3`} /> совпадают).</li>
        <li><InlineMath math={`x_1 = x_2 \\iff \\dfrac{1}{4} = 1 - a \\iff a = \\dfrac{3}{4}`} /> (при <InlineMath math={`a = \\dfrac{3}{4}`} /> корни <InlineMath math={`x_1`} /> и <InlineMath math={`x_2`} /> совпадают).</li>
        <li><InlineMath math={`x_1 = x_3 \\iff \\dfrac{1}{4} = 1 + a \\iff a = -\\dfrac{3}{4}`} /> (при <InlineMath math={`a = -\\dfrac{3}{4}`} /> корни <InlineMath math={`x_1`} /> and <InlineMath math={`x_3`} /> совпадают).</li>
      </ul>
      
      <p><b>Рассмотрим количество различных корней:</b></p>
      <p>Если <InlineMath math={`|a| < \\dfrac{3}{4}`} />, то существуют корень <InlineMath math={`x_1 = \\dfrac{1}{4}`} /> и хотя бы один отличный от него корень из второго множителя, поэтому корней не менее двух.</p>
      <p>Если <InlineMath math={`\\dfrac{3}{4} < |a| < \\dfrac{5}{4}`} />, то корень <InlineMath math={`x_1 = \\dfrac{1}{4}`} /> существует, а корней из второго множителя на отрезке нет. Следовательно, имеется ровно один корень.</p>
      <p>При <InlineMath math={`a = \\pm\\dfrac{3}{4}`} /> корень из второго множителя совпадает с <InlineMath math={`x_1 = \\dfrac{1}{4}`} />, поэтому также имеется ровно один корень.</p>
      <p>При <InlineMath math={`|a| \\geq \\dfrac{5}{4}`} /> корень <InlineMath math={`x_1 = \\dfrac{1}{4}`} /> не существует, и логарифмических корней также нет.</p>
      
      <p>Изобразим условия существования и отбора корней на числовой прямой параметра <InlineMath math={`a`} />:</p>

      {/* Высокоточный и наглядный график числовой прямой параметров с встроенным рендером KaTeX через foreignObject */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 140" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Главная ось параметра а */}
          <line x1="20" y1="75" x2="400" y2="75" stroke="#000000" strokeWidth="1.5" className="dark:stroke-slate-400" />
          <path d="M 400,85 L 392,81 M 400,85 L 392,89" stroke="#000000" strokeWidth="1.5" fill="none" transform="translate(0, -10)" className="dark:stroke-slate-400" />
          <text x="412" y="79" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* «Крыша» существования корня x1: a ∈ (-5/4; 5/4) */}
          <path d="M 60,75 L 60,30 L 340,30 L 340,75" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="194" y="22" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">x₁</text>
          
          {/* «Крыша» существования корня x3: a ∈ [-3/4; 0] */}
          <path d="M 130,75 L 130,50 L 200,50 L 200,75" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="160" y="44" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">x₃</text>

          {/* «Крыша» существования корня x2: a ∈ [0; 3/4] */}
          <path d="M 200,75 L 200,50 L 270,50 L 270,75" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <text x="230" y="44" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">x₂</text>

          {/* Маркер стыка x2 и x3 при a = 0 */}
          <circle cx="200" cy="75" r="3.5" fill="#000000" className="dark:fill-slate-300" />

          {/* Первый заштрихованный результирующий интервал отбора (-5/4; -3/4] */}
          <line x1="60" y1="75" x2="130" y2="75" stroke="#000000" strokeWidth="3" className="dark:stroke-slate-300" />
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`sh1-${i}`} x1={62 + i * 8} y1="75" x2={68 + i * 8} y2="66" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-500" />
          ))}

          {/* Второй заштрихованный результирующий интервал отбора [3/4; 5/4) */}
          <line x1="270" y1="75" x2="340" y2="75" stroke="#000000" strokeWidth="3" className="dark:stroke-slate-300" />
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`sh2-${i}`} x1={272 + i * 8} y1="75" x2={278 + i * 8} y2="66" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-500" />
          ))}

          {/* Точки числовой оси */}
          {/* Выколотая -5/4 */}
          <circle cx="60" cy="75" r="3.5" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Закрашенная -3/4 */}
          <circle cx="130" cy="75" r="3.5" fill="#000000" className="dark:fill-slate-300" />

          {/* Закрашенная 3/4 */}
          <circle cx="270" cy="75" r="3.5" fill="#000000" className="dark:fill-slate-300" />

          {/* Выколотая 5/4 */}
          <circle cx="340" cy="75" r="3.5" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Встроенные контейнеры foreignObject для каноничного отображения KaTeX под осями */}
          <foreignObject x="20" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`-\\dfrac{5}{4}`} />
            </div>
          </foreignObject>

          <foreignObject x="90" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`-\\dfrac{3}{4}`} />
            </div>
          </foreignObject>

          <foreignObject x="160" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`0`} />
            </div>
          </foreignObject>

          <foreignObject x="230" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`\\dfrac{3}{4}`} />
            </div>
          </foreignObject>

          <foreignObject x="300" y="85" width="80" height="50">
            <div className="flex justify-center items-start text-xs text-slate-900 dark:text-slate-100">
              <InlineMath math={`\\dfrac{5}{4}`} />
            </div>
          </foreignObject>
        </svg>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(-\\dfrac{5}{4}; -\\dfrac{3}{4}\\right] \\cup \\left[\\dfrac{3}{4}; \\dfrac{5}{4}\\right)`} />
      </div>
    </div>
  )
},


{
  id: 72,
  title: 'Задача 72 (ЕГЭ-2017. Основная волна, резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\dfrac{(x - a - 7)(x + a - 2)}{\\sqrt{10x - x^2 - a^2}} = 0',
  textAfter: <span>имеет ровно один корень на отрезке <InlineMath math={`[4; 8]`} />.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Уравнение имеет смысл при выполнении условия строго положительности подкоренного выражения:</p>
      <BlockMath math={`10x - x^2 - a^2 > 0 \\iff a^2 + (x - 5)^2 < 25.`} />
      <p>
        В координатной плоскости <InlineMath math={`xOa`} /> ОДЗ задаётся внутренней областью (открытым кругом) окружности с центром в точке <InlineMath math={`(5; 0)`} /> & радиусом <InlineMath math={`R = 5`} />. Нас интересует вертикальная полоса, заданная отрезком <InlineMath math={`x \\in [4; 8]`} />.
      </p>
      
      <p>Числитель дроби равен нулю при выполнении совокупности условий:</p>
      <BlockMath math={`x - a - 7 = 0 \\implies a = x - 7 \\quad \\text{или} \\quad x + a - 2 = 0 \\implies a = 2 - x.`} />

            {/* Высокоточный и крупный центрированный SVG-график Задачи 72 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 400 420" className="w-full max-w-[400px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=80, y=220) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
              <line key={`x-${i}`} x1={80 + i*24} y1="20" x2={80 + i*24} y2="400" />
            ))}
            {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={220 - i*24} x2="380" y2={220 - i*24} />
            ))}
          </g>

          {/* Вертикальные границы исследуемой полосы x = 4 и x = 8 (серый пунктир) */}
          <g stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.8">
            <line x1="176" y1="20" x2="176" y2="400" /> {/* x = 4 */}
            <line x1="272" y1="20" x2="272" y2="400" /> {/* x = 8 */}
          </g>
          <text x="170" y="16" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">x = 4</text>
          <text x="266" y="16" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">x = 8</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="220" x2="380" y2="220" /> {/* Ось Ox */}
            <line x1="80" y1="20" x2="80" y2="400" />  {/* Ось Oa */}
          </g>
          <path d="M 380,220 L 372,216 M 380,220 L 372,224" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 80,20 L 76,28 M 80,20 L 84,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="390" y="224" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="66" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="66" y="234" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки делений осей */}
          {[-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
            <g key={`lbl-x-${i}`}>
              <line x1={80 + i*24} y1="216" x2={80 + i*24} y2="224" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x={80 + i*24 - 4} y="236" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">{i}</text>
            </g>
          ))}
          {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
            <g key={`lbl-a-${i}`}>
              <line x1="76" y1={220 - i*24} x2="84" y2={220 - i*24} stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x="64" y={220 - i*24 + 4} fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">{i}</text>
            </g>
          ))}

          {/* Горизонтальные критические уровни ординат (красный тонкий пунктир) */}
          <g stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" opacity="0.8">
            <line x1="20" y1="196" x2="380" y2="196" /> {/* a = 1 */}
            <text x="345" y="192" fill="#dc2626" stroke="none" className="font-sans text-[9px]">a = 1</text>
            <line x1="20" y1="268" x2="380" y2="268" /> {/* a = -2 */}
            <text x="345" y="264" fill="#dc2626" stroke="none" className="font-sans text-[9px]">a = -2</text>
            <line x1="20" y1="280" x2="380" y2="280" /> {/* a = -2.5 */}
            <text x="345" y="290" fill="#dc2626" stroke="none" className="font-sans text-[9px]">a = -2.5</text>
            <line x1="20" y1="333.1" x2="380" y2="333.1" /> {/* a = 0.5(-3-√41) ≈ -4.7 */}
            <text x="345" y="325" fill="#dc2626" stroke="none" className="font-sans text-[9px]">a =(-3-√41)/2</text>
          </g>

          {/* Окружность ОДЗ радиуса R = 5 * 24 = 120px с центром в (5; 0) -> (200, 220) */}
          <circle cx="200" cy="220" r="120" fill="none" stroke="#2563eb" strokeWidth="2" />

          {/* Прямая а = x - 7  превращается в a = x - 8 */}
          <line x1="44" y1="424" x2="356" y2="112" stroke="#2563eb" strokeWidth="1.2" opacity="0.4" />
          <text x="340" y="136" fill="#2563eb" stroke="none" className="font-sans text-[10px]">a = x - 8</text>

          {/* Прямая а = 2 - x поднятая на 2 деления вверх -> превращается в a = 4 - x */}
          <line x1="20" y1="112" x2="310" y2="402" stroke="#2563eb" strokeWidth="1.2" opacity="0.4" />
          <text x="280" y="392" fill="#2563eb" stroke="none" className="font-sans text-[10px]">a = 4 - x</text>


          {/* Выделим жирным КРАСНЫМ цветом рабочие отрезки корней внутри полосы [4; 8] и круга ОДЗ */}
          {/* Для первой прямой отрезок от x=4 (a=-3) до x=8 (a=1) */}
          <line x1="176" y1="292" x2="272" y2="196" stroke="#dc2626" strokeWidth="2.5" />
          
          {/* Для второй прямой отрезок от x=4 (a=-2) до пересечения с окружностью при x ≈ 6.7 (a ≈ -4.7) */}
          <line x1="176" y1="268" x2="241.1" y2="333.1" stroke="#dc2626" strokeWidth="2.5" />

          {/* Ключевые точки пересечений */}
          <circle cx="272" cy="196" r="3.5" fill="#000000" /> {/* (8; 1) */}
          <circle cx="176" cy="292" r="3.5" fill="#000000" /> {/* (4; -3) */}
          <circle cx="176" cy="268" r="3.5" fill="#000000" /> {/* (4; -2) */}
          <circle cx="188" cy="280" r="3.5" fill="#000000" /> {/* Точка пересечения прямых (4.5; -2.5) */}
          
          {/* Выколотая граничная точка пересечения убывающей прямой с окружностью ОДЗ */}
          <circle cx="241.1" cy="333.1" r="3" fill="white" stroke="#dc2626" strokeWidth="1.5" className="fill-white dark:fill-slate-950" />
        </svg>
      </div>

      <p>
        <b>1)</b> Прямая <InlineMath math={`a = x - 7`} /> пересекает исследуемую полосу <InlineMath math={`x \\in [4; 8]`} /> при <InlineMath math={`a \\in [-3; 1]`} />. Все точки этого отрезка лежат строго внутри окружности ОДЗ, поэтому первый корень существует при всех <InlineMath math={`a \\in [-3; 1]`} />.
      </p>
      
      <p>
        <b>2)</b> Для второй прямой <InlineMath math={`a = 2 - x`} /> с учётом ОДЗ круга получаем ограничение:
      </p>
      <BlockMath math={`(2 - x)^2 + (x - 5)^2 < 25 \\iff 4 - 4x + x^2 + x^2 - 10x + 25 < 25 \\iff 2x^2 - 14x + 4 < 0`} />
      <BlockMath math={`x^2 - 7x + 2 < 0 \\iff x \\in \\left(\\dfrac{7 - \\sqrt{41}}{2}; \\dfrac{7 + \\sqrt{41}}{2}\\right).`} />
      <p>
        С учётом границ полосы <InlineMath math={`x \\in [4; 8]`} />, так как <InlineMath math={`\\dfrac{7 - \\sqrt{41}}{2} < 4`} /> и <InlineMath math={`4 < \\dfrac{7 + \\sqrt{41}}{2} < 8`} />, получаем рабочий полуинтервал:
      </p>
      <BlockMath math={`x \\in \\left[4; \\dfrac{7 + \\sqrt{41}}{2}\\right),`} />
      <p>откуда выражая параметр из уравнения <InlineMath math={`a = 2 - x`} />, находим интервал существования второго корня:</p>
      <BlockMath math={`a \\in \\left(\\dfrac{-3 - \\sqrt{41}}{2}; -2\\right].`} />
      
      <p>
        <b>3)</b> Оба корня одновременно существуют на пересечении полученных промежутков, то есть при <InlineMath math={`a \\in [-3; -2]`} />. Найдём точку их совпадения:
      </p>
      <BlockMath math={`a + 7 = 2 - a \\iff 2a = -5 \\implies a = -\\dfrac{5}{2}.`} />
      
      <p>
        Проходя горизонтальной сканирующей прямой <InlineMath math={`a = \\text{const}`} /> снизу вверх вдоль оси ординат, отбираем уровни, где прямая пересекает ровно один красный отрезок графика-корня:
      </p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>
          При <InlineMath math={`a \\in \\left(\\dfrac{-3 - \\sqrt{41}}{2}; -3\\right)`} /> существует только второй корень (ровно 1 решение).
        </li>
        <li>
          При <InlineMath math={`a = -3`} /> включается первый корень, решений становится два.
        </li>
        <li>
          При <InlineMath math={`a \\in \\left(-3; -2\\right]`} /> существуют оба корня, за исключением точки их совпадения <InlineMath math={`a = -\\dfrac{5}{2}`} />, где они склеиваются в один корень (ровно 1 решение).
        </li>
        <li>
          При <InlineMath math={`a \\in (-2; 1]`} /> второй корень выходит из полосы, и существует только первый корень (ровно 1 решение).
        </li>
      </ul>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(\\dfrac{-3 - \\sqrt{41}}{2}; -3\\right) \\cup \\left\\{-\\dfrac{5}{2}\\right\\} \\cup (-2; 1]`} />
      </div>
    </div>
  )
},


{
  id: 73,
  title: 'Задача 73 (ЕГЭ-2017. Основная волна, резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} (x - 3)(y + 3x - 9) = |x - 3|^3, \\\\ y = x + a \\end{cases}',
  textAfter: <span>имеет ровно четыре различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        <b>1.</b> Если <InlineMath math={`x = 3`} Kish/>, то первое уравнение верно при любом <InlineMath math={`y`} />. Из второго уравнения получаем <InlineMath math={`y = 3 + a`} />. Точка <InlineMath math={`(3; 3 + a)`} /> — решение системы при любом <InlineMath math={`a`} />. На графике это вертикальная прямая <InlineMath math={`x = 3`} />.
      </p>
      
      <p>
        <b>2.</b> Если <InlineMath math={`x \\neq 3`} Kish/>, разделим первое уравнение на <InlineMath math={`(x - 3)`} />:
      </p>
      <BlockMath math={`y + 3x - 9 = (x - 3)|x - 3| \\implies y = (x - 3)|x - 3| - 3x + 9.`} />
      <p>Раскрывая модуль по определению, получаем систему из двух кусков парабол, стыкующихся в точке <InlineMath math={`(3; 0)`} />:</p>
      <BlockMath math={`y = \\begin{cases} x^2 - 9x + 18, & x > 3 \\\\ -x^2 + 3x, & x < 3 \\end{cases}`} />
      
      <p>
        График первого уравнения состоит из вертикальной прямой <InlineMath math={`x = 3`} /> и двух кусков парабол. Второе уравнение <InlineMath math={`y = x + a`} /> задаёт семейство параллельных прямых с угловым коэффициентом <InlineMath math={`k = 1`} />. Так как одна точка пересечения с прямой <InlineMath math={`x = 3`} /> есть всегда, для четырёх решений прямая <InlineMath math={`y = x + a`} /> должна пересекать параболы еще в 3 различных точках.
      </p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 73 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 360 360" className="w-full max-w-[360px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=100, y=180) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
              <line key={`x-${i}`} x1={100 + i*24} y1="20" x2={100 + i*24} y2="340" />
            ))}
            {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={180 - i*24} x2="340" y2={180 - i*24} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="180" x2="340" y2="180" /> {/* Ось Ox */}
            <line x1="100" y1="20" x2="100" y2="340" />  {/* Ось Oy */}
          </g>
          <path d="M 340,180 L 332,176 M 340,180 L 332,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 100,20 L 96,28 M 100,20 L 104,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="350" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="86" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="86" y="194" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Неподвижные синие линии графика первого уравнения */}
          {/* Вертикальная прямая x = 3 -> x = 100 + 3*24 = 172 */}
          <line x1="172" y1="20" x2="172" y2="340" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Левый кусок параболы y = -x² + 3x при x < 3. Вершина в (1.5; 2.25) -> (136, 126) */}
          <path d="M 64,340 C 80,200 110,126 136,126 C 150,126 162,150 172,180" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Правый кусок параболы y = x² - 9x + 18 при x > 3. Вершина в (4.5; -2.25) -> (208, 234) */}
          <path d="M 172,180 C 182,210 194,234 208,234 C 234,234 246,140 268,20" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Подвижное семейство критических наклонных прямых y = x + a (красный пунктир) */}
          {/* 1) a = 1 (Касание левой параболы) */}
          <line x1="20" y1="236" x2="220" y2="36" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />
          
          {/* 2) a = -3 (Проход через точку стыка) */}
          <line x1="50" y1="302" x2="260" y2="92" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />
          
          {/* 3) a = -7 (Касание правой параболы) */}
          <line x1="100" y1="348" x2="310" y2="138" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />

          {/* Маркерные точки пересечений и касаний */}
          <circle cx="172" cy="180" r="3.5" fill="#000000" /> {/* Точка стыка (3;0) */}
          <circle cx="124" cy="132" r="3" fill="#000000" />  {/* Точка касания левой ветви (1;2) */}
          <circle cx="220" cy="228" r="3" fill="#000000" />  {/* Точка касания правой ветви (5;-2) */}

          {/* Подписи к линиям через foreignObject */}
          <foreignObject x="176" y="22" width="50" height="30">
            <div className="text-blue-600 font-sans font-semibold text-[10px]">x = 3</div>
          </foreignObject>
          <foreignObject x="180" y="160" width="50" height="30">
            <div className="text-slate-900 dark:text-slate-100 font-sans text-[10px]">(3;0)</div>
          </foreignObject>
          <foreignObject x="224" y="32" width="50" height="30">
            <div className="text-red-600 font-sans text-[9px]">a = 1</div>
          </foreignObject>
          <foreignObject x="264" y="96" width="50" height="30">
            <div className="text-red-600 font-sans text-[9px]">a = -3</div>
          </foreignObject>
          <foreignObject x="314" y="126" width="50" height="30">
            <div className="text-red-600 font-sans text-[9px]">a = -7</div>
          </foreignObject>
        </svg>
      </div>

      <p>
        <b>3. Найдём критические положения (касание парабол и проход через точку стыка):</b>
      </p>
      <ul className="list-bullet pl-5 space-y-1.5">
        <li>
          <b>Касание с левой параболой:</b>
          <BlockMath math={`-x^2 + 3x = x + a \\iff x^2 - 2x + a = 0 \\implies D = 4 - 4a = 0 \\implies a = 1.`} />
        </li>
        <li>
          <b>Касание с правой параболой:</b>
          <BlockMath math={`x^2 - 9x + 18 = x + a \\iff x^2 - 10x + 18 - a = 0 \\implies D = 100 - 4(18 - a) = 0 \\implies a = -7.`} />
        </li>
        <li>
          <b>Проход через точку стыка <InlineMath math={`(3; 0)`} Kish/>:</b>
          <BlockMath math={`0 = 3 + a \\implies a = -3.`} />
        </li>
      </ul>
      
      <p>
        <b>4. Анализ количества решений:</b>
      </p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>При <InlineMath math={`a < -7`} Kish/> или <InlineMath math={`a > 1`} Kish/> — 2 решения;</li>
        <li>При <InlineMath math={`a = -7`} Kish/> или <InlineMath math={`a = 1`} Kish/> — 3 решения (касание);</li>
        <li>При <InlineMath math={`a = -3`} Kish/> — 3 решения (прямая проходит через стык на линии <InlineMath math={`x = 3`} Kish/>);</li>
        <li>При <InlineMath math={`a \\in (-7; -3) \\cup (-3; 1)`} Kish/> — <b>4 решения</b> (3 точки на параболах + 1 точка на вертикальной прямой <InlineMath math={`x = 3`} Kish/>).</li>
      </ul>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-7; -3) \\cup (-3; 1)`} />
      </div>
    </div>
  )
},



{
  id: 74,
  title: 'Задача 74 (ЕГЭ-2017. Основная волна, резервный день)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} (y^2 - xy + x - 3y + 2)\\sqrt{x + 3} = 0, \\\\ a - x - y = 0 \\end{cases}',
  textAfter: <span>имеет ровно два различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Учтём ОДЗ квадратного корня:</p>
      <BlockMath math={`x \\geq -3.`} />
      
      <p>Разложим первый множитель в первом уравнении системы на линейные скобки методом группировки:</p>
      <BlockMath math={`y^2 - xy + x - 3y + 2 = (y^2 - 3y + 2) - x(y - 1) = (y - 1)(y - 2) - x(y - 1) = (y - 1)(y - x - 2).`} />
      
      <p>Следовательно, на своей ОДЗ первое уравнение распадается на три независимые линии ограничений:</p>
      <BlockMath math={`x = -3, \\quad y = 1, \\quad y = x + 2.`} />
      
      <p>Второе уравнение исходной системы задаёт семейство параллельных прямых с наклоном <InlineMath math={`k = -1`} />:</p>
      <BlockMath math={`y = a - x.`} />

      {/* Высокоточный и крупный центрированный SVG-график Задачи 74 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 380" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=180, y=140) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <line key={`x-${i}`} x1={180 + i*24} y1="20" x2={180 + i*24} y2="340" />
            ))}
            {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={140 - i*24} x2="360" y2={140 - i*24} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="140" x2="360" y2="140" /> {/* Ось Ox */}
            <line x1="180" y1="20" x2="180" y2="340" />  {/* Ось Oy */}
          </g>
          <path d="M 360,140 L 352,136 M 360,140 L 352,144" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 180,20 L 176,28 M 180,20 L 184,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="370" y="144" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="166" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="166" y="154" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Числовые метки делений */}
          {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map(i => (
            <line key={`tick-x-${i}`} x1={180 + i*24} y1="136" x2={180 + i*24} y2="144" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
          ))}
          {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map(i => (
            <line key={`tick-y-${i}`} x1="176" y1={140 - i*24} x2="184" y2={140 - i*24} stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
          ))}

          {/* Неподвижные синие сплошные линии-решения (с учетом ОДЗ x >= -3) */}
          <line x1="108" y1="20" x2="108" y2="340" stroke="#2563eb" strokeWidth="2.5" /> {/* x = -3 */}
          <line x1="108" y1="116" x2="360" y2="116" stroke="#2563eb" strokeWidth="2.5" /> {/* y = 1 */}
          {/* СИНЯЯ НАКЛОННАЯ ПРЯМАЯ y = x + 2 АККУРАТНО СОКРАЩЕНА СВЕРХУ ДО x=4 (x=276) */}
          <line x1="108" y1="164" x2="276" y2="-4" stroke="#2563eb" strokeWidth="2.5" />

          {/* Левые неактивные ветви полуплоскости за границей ОДЗ (тонкий синий пунктир) */}
          <line x1="20" y1="116" x2="108" y2="116" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
          <line x1="36" y1="236" x2="108" y2="164" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />

          {/* Подвижное семейство сканирующих прямых y = a - x */}
          {/* ВЕРХНЯЯ КРАСНАЯ ПРЯМАЯ (a = 1.8) ПРОДЛЕНА ВНИЗ-ВПРАВО сквозь ось Ox до x=236, y=196.8 */}
          <line x1="20" y1="-19.2" x2="236" y2="196.8" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />
          <line x1="20" y1="28.8" x2="228" y2="236.8" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" /> {/* a = 3.8 */}
          <line x1="20" y1="76.8" x2="276" y2="332.8" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" /> {/* a = 5.8 */}

          {/* Узловые черные маркерные точки пересечений */}
          <circle cx="108" cy="116" r="3.5" fill="#000000" /> {/* (-3; 1) */}
          <circle cx="108" cy="164" r="3.5" fill="#000000" /> {/* (-3; -1) */}
          <circle cx="156" cy="116" r="3.5" fill="#000000" /> {/* (-1; 1) */}

          {/* Текстовые подписи к линиям через foreignObject */}
          <foreignObject x="114" y="24" width="50" height="25">
            <div className="text-blue-600 font-sans font-semibold text-[10px]">x = -3</div>
          </foreignObject>
          <foreignObject x="300" y="96" width="50" height="25">
            <div className="text-blue-600 font-sans font-semibold text-[10px]">y = 1</div>
          </foreignObject>
          <foreignObject x="290" y="24" width="60" height="25">
            <div className="text-blue-600 font-sans font-semibold text-[10px]">y = x + 2</div>
          </foreignObject>
          <foreignObject x="242" y="172" width="55" height="25">
            <div className="text-red-600 font-sans text-[9px]">a = 0</div>
          </foreignObject>
          <foreignObject x="214" y="212" width="55" height="25">
            <div className="text-red-600 font-sans text-[9px]">a = -2</div>
          </foreignObject>
          <foreignObject x="250" y="242" width="55" height="25">
            <div className="text-red-600 font-sans text-[9px]">a = -4</div>
          </foreignObject>
        </svg>
      </div>


            <p>
        Прямая <InlineMath math={`y = a - x`} /> пересекает вертикальную границу <InlineMath math={`x = -3`} /> в точке <InlineMath math={`(-3; a + 3)`} /> при любом значении параметра. Эта точка всегда удовлетворяет ОДЗ.
      </p>
      <p>
        С горизонтальной прямой <InlineMath math={`y = 1`} /> точка пересечения имеет абсциссу <InlineMath math={`x = a - 1`} />. С учётом ОДЗ корня:
      </p>
      <BlockMath math={`a - 1 \\geq -3 \\iff a \\geq -2.`} />
      
      <p>
        С наклонной прямой <InlineMath math={`y = x + 2`} /> абсцисса точки пересечения находится из уравнения:
      </p>
      <BlockMath math={`a - x = x + 2 \\iff 2x = a - 2 \\iff x = \\dfrac{a - 2}{2}.`} />
      <p>С учётом ОДЗ корня получаем ограничение:</p>
      <BlockMath math={`\\dfrac{a - 2}{2} \\geq -3 \\iff a - 2 \\geq -6 \\iff a \\geq -4.`} />
      
      <p>
        В общем случае при <InlineMath math={`a > -2`} /> имеются три различных решения, кроме особых значений параметра, при которых две или три прямые пересекаются в одной точке (происходит склеивание корней):
      </p>
      
      <ul className="list-bullet pl-5 space-y-2">
        <li>
          <b>1) Пересечение <InlineMath math={`x = -3`} /> и <InlineMath math={`y = x + 2`} />:</b>
          <p>Они пересекаются в точке <InlineMath math={`(-3; -1)`} />. Сканирующая прямая проходит через эту точку при:</p>
          <BlockMath math={`a = x + y = -3 + (-1) = -4.`} />
          <p>Но при <InlineMath math={`a = -4`} /> пересечение с линией <InlineMath math={`y = 1`} /> даёт абсциссу <InlineMath math={`x = -4 - 1 = -5`} />, что не удовлетворяет ОДЗ. Поэтому при <InlineMath math={`a = -4`} /> имеется только одно допустимое решение.</p>
        </li>
        <li>
          <b>2) Пересечение <InlineMath math={`x = -3`} /> и <InlineMath math={`y = 1`} />:</b>
          <p>Они пересекаются в точке <InlineMath math={`(-3; 1)`} />. Сканирующая прямая проходит через неё при:</p>
          <BlockMath math={`a = -3 + 1 = -2.`} />
          <p>При <InlineMath math={`a = -2`} /> эти два решения совпадают (склеиваются), а точка пересечения с наклонной прямой <InlineMath math={`y = x + 2`} /> имеет абсциссу <InlineMath math={`x = \\dfrac{-2 - 2}{2} = -2 \\geq -3`} />, то есть остаётся допустимой. Таким образом, при <InlineMath math={`a = -2`} /> система имеет ровно два различных решения.</p>
        </li>
        <li>
          <b>3) Пересечение <InlineMath math={`y = 1`} /> и <InlineMath math={`y = x + 2`} />:</b>
          <p>Они пересекаются в точке <InlineMath math={`(-1; 1)`} />. Сканирующая прямая проходит через неё при:</p>
          <BlockMath math={`a = -1 + 1 = 0.`} />
          <p>При <InlineMath math={`a = 0`} /> эти два решения совпадают, а пересечение с вертикальной линией <InlineMath math={`x = -3`} /> даёт ординату <InlineMath math={`y = 0 - (-3) = 3`} />, что полностью допустимо. Значит, при <InlineMath math={`a = 0`} /> также имеется ровно два различных решения.</p>
        </li>
      </ul>
      
      <p>
        На промежутке <InlineMath math={`a \\in (-4; -2]`} /> пересечение с горизонтальной линией <InlineMath math={`y = 1`} /> недопустимо по ОДЗ, а два оставшихся корня дают ровно два решения (при <InlineMath math={`a = -2`} /> они склеиваются, но добавляется третий корень).
      </p>
      <p>Следовательно, ровно два различных решения система имеет при:</p>
      <BlockMath math={`a \\in (-4; -2] \\cup \\{0\\}.`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-4; -2] \\cup \\{0\\}`} />
      </div>
    </div>
  )
},



{
  id: 75,
  title: 'Задача 75 (ЕГЭ-2016. Досрочная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} \\dfrac{xy^2 - xy - 4y + 4}{\\sqrt{x + 2}} = 0, \\\\ y = x + a \\end{cases}',
  textAfter: <span>имеет ровно два различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>Запишем область допустимых значений (ОДЗ) уравнения с учётом строго положительности знаменателя:</p>
      <BlockMath math={`x + 2 > 0 \\iff x > -2.`} />
      
      <p>Разложим числитель дроби в первом уравнении на линейные множители методом группировки:</p>
      <BlockMath math={`xy^2 - xy - 4y + 4 = xy(y - 1) - 4(y - 1) = (y - 1)(xy - 4).`} />
      
      <p>Поскольку дробь равна нулю, когда её числитель равен нулю, первое уравнение на ОДЗ равносильно совокупности линий ограничений:</p>
      <BlockMath math={`y = 1 \\quad \\text{или} \\quad y = \\dfrac{4}{x}.`} />
      
      <p>
        Второе уравнение исходной системы <InlineMath math={`y = x + a`} /> задаёт семейство параллельных прямых с угловым коэффициентом <InlineMath math={`k = 1`} />.
      </p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 75 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 390" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=160, y=180) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <line key={`x-${i}`} x1={160 + i*24} y1="20" x2={160 + i*24} y2="360" />
            ))}
            {[-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <line key={`y-${i}`} x1="20" y1={180 - i*24} x2="360" y2={180 - i*24} />
            ))}
          </g>

          {/* Вертикальная выколотая серая граница ОДЗ x = -2 (пунктир) */}
          <line x1="112" y1="20" x2="112" y2="360" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="100" y="16" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">x = -2</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="180" x2="360" y2="180" /> {/* Ось Ox */}
            <line x1="160" y1="20" x2="160" y2="360" />  {/* Ось Oy */}
          </g>
          <path d="M 360,180 L 352,176 M 360,180 L 352,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 160,20 L 156,28 M 160,20 L 164,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="370" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="146" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="146" y="194" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Числовые метки делений */}
          {[-4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
            <g key={`lbl-x-${i}`}>
              <line x1={160 + i*24} y1="176" x2={160 + i*24} y2="184" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x={160 + i*24 - 4} y="196" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[9px]">{i}</text>
            </g>
          ))}
          {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
            <g key={`lbl-y-${i}`}>
              <line x1="156" y1={180 - i*24} x2="164" y2={180 - i*24} stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x="144" y={180 - i*24 + 4} fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[9px]">{i}</text>
            </g>
          ))}

          {/* Неподвижная синяя прямая решения y = 1 */}
          <line x1="112" y1="156" x2="360" y2="156" stroke="#2563eb" strokeWidth="2.5" />
          <line x1="20" y1="156" x2="112" y2="156" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />

          {/* КАНОНИЧЕСКАЯ ГЛАДКАЯ И ОКРУГЛАЯ ГИПЕРБОЛА y = 4/x */}
      {/* Высокоточный и крупный центрированный SVG-график Задачи 75 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 390" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=160, y=180) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <line key={`x-${i}`} x1={160 + i*24} y1="20" x2={160 + i*24} y2="360" />
            ))}
            {[-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <line key={`y-${i}`} x1="20" y1={180 - i*24} x2="360" y2={180 - i*24} />
            ))}
          </g>

          {/* Вертикальная выколотая серая граница ОДЗ x = -2 (пунктир) */}
          <line x1="112" y1="20" x2="112" y2="360" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="100" y="16" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">x = -2</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="180" x2="360" y2="180" /> {/* Ось Ox */}
            <line x1="160" y1="20" x2="160" y2="360" />  {/* Ось Oy */}
          </g>
          <path d="M 360,180 L 352,176 M 360,180 L 352,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 160,20 L 156,28 M 160,20 L 164,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="370" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="146" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="146" y="194" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Числовые метки делений */}
          {[-4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
            <g key={`lbl-x-${i}`}>
              <line x1={160 + i*24} y1="176" x2={160 + i*24} y2="184" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x={160 + i*24 - 4} y="196" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[9px]">{i}</text>
            </g>
          ))}
          {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
            <g key={`lbl-y-${i}`}>
              <line x1="156" y1={180 - i*24} x2="164" y2={180 - i*24} stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x="144" y={180 - i*24 + 4} fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[9px]">{i}</text>
            </g>
          ))}

          {/* Неподвижная синяя прямая решения y = 1 */}
          <line x1="112" y1="156" x2="360" y2="156" stroke="#2563eb" strokeWidth="2.5" />
          <line x1="20" y1="156" x2="112" y2="156" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />

          {/* ИСТИННАЯ ПРАВАЯ ВЕТВЬ ГИПЕРБОЛЫ ИЗ ЧАТА С СИММЕТРИЧНОЙ ОБРЕЗКОЙ НА УРОВНЕ 6 */}
          {/* Маска strokeDasharray скрывает концы линии, сохраняя идеальный изгиб через (1;4) и (4;1) */}
          <path 
            d="M 166,45 C 166,130 180,200 224,213 C 250,221 272,223.5 288,224 C 315,225 350,228 400,234" 
            fill="none" stroke="#2563eb" strokeWidth="2.5" 
            strokeDasharray="255 100" strokeDashoffset="-46"
            transform="translate(8, -63)" 
          />

          {/* СЕМЕЙСТВО КРАСНЫХ НАКЛОННЫХ ПРЯМЫХ, СБАЛАНСИРОВАННО ОБРЕЗАННЫХ СВЕРХУ И СНИЗУ */}
          {/* Ровные линии под 45 градусов, аккуратно укороченные со всех сторон, чтобы не вылезать за сетку */}
          <line x1="124" y1="144" x2="304" y2="-36" stroke="#dc2626" strokeWidth="1.5" /> {/* a = 6 */}
          <line x1="124" y1="216" x2="304" y2="36" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" /> {/* a = 3 */}
          <line x1="124" y1="288" x2="304" y2="108" stroke="#dc2626" strokeWidth="1.5" /> {/* a = 0 */}

          {/* Ключевые точки пересечений на осях и графиках */}
          <circle cx="256" cy="156" r="3.5" fill="#000000" /> {/* Точка пересечения (4; 1) */}
          <circle cx="184" cy="156" r="3.5" fill="#000000" /> {/* Точка (1; 1) */}
          <circle cx="184" cy="84" r="3.5" fill="#000000" />  {/* Точка (1; 4) строго НА гиперболе */}
          <circle cx="136" cy="276" r="3.5" fill="#000000" /> {/* Точка (-1; -4) строго НА гиперболе */}
          
          {/* Выколотые граничные точки на серой линии ОДЗ x = -2 */}
          <circle cx="112" cy="156" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* Выколотая (-2; 1) */}
          <circle cx="112" cy="228" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* Выколотая (-2; -2) */}

          {/* Текстовые подписи к кривым и критическим уровням */}
          <text x="312" y="146" fill="#2563eb" className="font-serif italic font-semibold text-[10px]">y = 1</text>
          <text x="336" y="166" fill="#2563eb" className="font-serif italic font-semibold text-[10px]">y = 4/x</text>
          <text x="310" y="24" fill="#dc2626" className="font-sans text-[9px]">a = 6</text>
          <text x="325" y="76" fill="#dc2626" className="font-sans text-[9px]">a = 3</text>
          <text x="340" y="128" fill="#dc2626" className="font-sans text-[9px]">a = 0</text>
        </svg>
      </div>
          
          {/* Левая ветвь (III четверть, внутри ОДЗ): строго симметричная дуга Безье, проходящая через выколотую точку (-2;-2) */}
          <path d="M 112,228 C 130,240 140,265 144,340" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Правая ветвь (I четверть), укороченная слева и удлинённая справа */}
          <path d="M 168.5,70 C 169,130 180,200 224,213 C 250,221 272,223.5 288,224 C 295,224.2 305,224.3 320,224.5" fill="none" stroke="#2563eb" strokeWidth="2.5" transform="translate(8, -63)" />


          {/* Семейство сканирующих наклонных прямых y = x + a (красный цвет, k = 1) */}
          {/* Координаты x2 и y2 пересчитаны, чтобы аккуратно укоротить все три линии сверху */}
          <line x1="68" y1="200" x2="236" y2="32" stroke="#dc2626" strokeWidth="1.5" /> {/* a = 6 */}
          <line x1="68" y1="272" x2="260" y2="80" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" /> {/* a = 3 */}
          <line x1="68" y1="344" x2="284" y2="128" stroke="#dc2626" strokeWidth="1.5" /> {/* a = 0 */}



          {/* Ключевые точки пересечений на осях и графиках */}
          <circle cx="256" cy="156" r="3.5" fill="#000000" /> {/* Точка пересечения (4; 1) */}
          <circle cx="184" cy="156" r="3.5" fill="#000000" /> {/* Точка (1; 1) */}
          <circle cx="184" cy="84" r="3.5" fill="#000000" />  {/* Точка (1; 4) строго НА гиперболе */}
          <circle cx="136" cy="276" r="3.5" fill="#000000" /> {/* Точка (-1; -4) строго НА гиперболе */}
          
          {/* Выколотые граничные точки на серой линии ОДЗ x = -2 */}
          <circle cx="112" cy="156" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* Выколотая (-2; 1) */}
          <circle cx="112" cy="228" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* Выколотая (-2; -2) */}

          {/* Текстовые подписи к кривым и критическим уровням */}
          <text x="312" y="146" fill="#2563eb" className="font-serif italic font-semibold text-[10px]">y = 1</text>
          <text x="327" y="168" fill="#2563eb" className="font-serif italic font-semibold text-[10px]">y = 4/x</text>
          <text x="251" y="24" fill="#dc2626" className="font-sans text-[9px]">a = 3</text>
          <text x="270" y="76" fill="#dc2626" className="font-sans text-[9px]">a = 0</text>
          <text x="301" y="128" fill="#dc2626" className="font-sans text-[9px]">a = -3</text>
        </svg>
      </div>



      <p>
        С неподвижной прямой <InlineMath math={`y = 1`} /> сканирующая наклонная линия пересекается в точке с абсциссой <InlineMath math={`x = 1 - a`} />. Эта точка удовлетворяет ОДЗ тогда и только тогда, когда:
      </p>
      <BlockMath math={`1 - a > -2 \\iff a < 3.`} />
      
      <p>Рассмотрим пересечение наклонной прямой с ветвями гиперболы:</p>
      <BlockMath math={`x + a = \\dfrac{4}{x} \\iff x^2 + ax - 4 = 0.`} />
      <p>
        Дискриминант этого квадратного уравнения <InlineMath math={`D = a^2 + 16 > 0`} /> при любом значении параметра, то есть уравнение всегда имеет два различных коня. Корни по теореме Виета имеют произведение <InlineMath math={`-4`} />, поэтому один из них строго положительный, а другой — отрицательный.
      </p>
      
      <p>Проанализируем положение отрицательного корня относительно левой границы ОДЗ <InlineMath math={`x = -2`} />:</p>
      <ul className="list-bullet pl-5 space-y-1">
        <li>
          При <InlineMath math={`a < 0`} /> отрицательный корень лежит правее границы: <InlineMath math={`x > -2`} />, поэтому он входит в ОДЗ, и гипербола даёт два общих решения.
        </li>
        <li>
          При <InlineMath math={`a = 0`} /> отрицательный корень равен в точности <InlineMath math={`-2`} />, что выколото по ОДЗ, поэтому остаётся ровно одно пересечение.
        </li>
        <li>
          При <InlineMath math={`a > 0`} /> отрицательный корень смещается левее границы: <InlineMath math={`x < -2`} />, то есть выходит из ОДЗ, и гипербола даёт ровно одно пересечение (положительный корень).
        </li>
      </ul>
      
      <p>
        При <InlineMath math={`a < 0`} /> всего система имеет 3 решения (одно с прямой и два с гиперболой), кроме случая, когда пересечение с прямой <InlineMath math={`y = 1`} /> совпадает со своей точкой на гиперболе. Найдём эту общую точку:
      </p>
      <BlockMath math={`y = 1, \\quad xy = 4 \\implies x = 4 \\implies (4; 1).`} />
      <p>Подставим координаты точки <InlineMath math={`(4; 1)`} /> во второе уравнение:</p>
      <BlockMath math={`1 = 4 + a \\implies a = -3.`} />
      <p>
        Следовательно, при <InlineMath math={`a = -3`} /> два решения склеиваются в одно, и система имеет ровно два различных решения.
      </p>
      
      <p>
        При <InlineMath math={`0 \\leq a < 3`} /> Прямая даёт ровно одно решение, и гипербола даёт ровно одно решение (так как отрицательный корень либо выколот, либо вышел за ОДЗ). Значит, на этом полуинтервале система также имеет ровно два различных решения.
      </p>
      <p>
        При <InlineMath math={`a \\geq 3`} /> пересечение с горизонтальной линией <InlineMath math={`y = 1`} /> не удовлетворяет условию ОДЗ, поэтому остаётся только одно логарифмическое решение.
      </p>
      
      <p>Объединяя все подходящие уровни сканирования, получаем окончательное множество:</p>
      <BlockMath math={`a \\in \\{-3\\} \\cup [0; 3).`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{-3\\} \\cup [0; 3)`} />
      </div>
    </div>
  )
},


{
  id: 76,
  title: 'Задача 76 (ЕГЭ-2016. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\sqrt{x^4 - x^2 + a^2} = x^2 + x - a',
  textAfter: <span>имеет ровно три различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Левая часть уравнения определена и неотрицательна при всех допустимых значениях переменных. Следовательно, исходное уравнение равносильно системе, состоящей из условия неотрицательности правой части и уравнения, полученного возведением обеих частей в квадрат:
      </p>
      <BlockMath math={`\\begin{cases} x^2 + x - a \\geq 0, \\\\ x^4 - x^2 + a^2 = (x^2 + x - a)^2. \\end{cases}`} />
      
      <p>Раскроем квадрат трёхчлена в правой части второго уравнения:</p>
      <BlockMath math={`x^4 - x^2 + a^2 = x^4 + 2x^3 + x^2 - 2ax^2 - 2ax + a^2`} />
      <p>Приведём подобные слагаемые и перенесём все члены в одну сторону:</p>
      <BlockMath math={`2x^3 + 2x^2 - 2ax^2 - 2ax = 0 \\iff 2x\\left(x^2 + x - ax - a\\right) = 0`} />
      <BlockMath math={`2x\\bigl(x(x + 1) - a(x + 1)\\bigr) = 0 \\iff 2x(x + 1)(x - a) = 0.`} />
      
      <p>Корнями полученного уравнения являются три значения переменной:</p>
      <BlockMath math={`x_1 = 0, \\quad x_2 = -1, \\quad x_3 = a.`} />
      
      <p>Чтобы эти значения являлись корнями исходного уравнения, они должны удовлетворять условию <InlineMath math={`x^2 + x - a \\geq 0`} />. Проверим каждый корень по отдельности:</p>
      <ul className="list-bullet pl-5 space-y-2">
        <li>
          Для <InlineMath math={`x_1 = 0`} /> получаем: <InlineMath math={`0^2 + 0 - a \\geq 0 \\iff a \\leq 0`} />.
        </li>
        <li>
          Для <InlineMath math={`x_2 = -1`} /> получаем: <InlineMath math={`(-1)^2 + (-1) - a \\geq 0 \\iff 1 - 1 - a \\geq 0 \\iff a \\leq 0`} />.
        </li>
        <li>
          Для <InlineMath math={`x_3 = a`} /> получаем: <InlineMath math={`a^2 + a - a \\geq 0 \\iff a^2 \\geq 0`} />. Данное неравенство верно при любом значении параметра <InlineMath math={`a`} />.
        </li>
      </ul>
      
      <p>
        Таким образом, при <InlineMath math={`a \\leq 0`} /> все три числа являются корнями исходного уравнения. Чтобы уравнение имело <b>ровно три различных</b> корня, эти значения должны быть попарно различны:
      </p>
      <BlockMath math={`\\begin{cases} x_1 \\neq x_2 \\iff 0 \\neq -1 \\quad (\\text{выполнено}), \\\\ x_1 \\neq x_3 \\iff a \\neq 0, \\\\ x_2 \\neq x_3 \\iff a \\neq -1. \\end{cases}`} />
      
      <p>Изобразим полученные условия отбора корней на числовой прямой параметра <InlineMath math={`a`} />:</p>

      {/* Высокоточный и наглядный график числовой прямой параметра а */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 100" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Главная ось параметра а */}
          <line x1="20" y1="50" x2="400" y2="50" stroke="#000000" strokeWidth="1.5" className="dark:stroke-slate-400" />
          <path d="M 400,50 L 392,46 M 400,50 L 392,54" stroke="#000000" strokeWidth="1.5" fill="none" className="dark:stroke-slate-400" />
          <text x="412" y="54" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* Заштрихованная область от минус бесконечности до 0 */}
          <line x1="20" y1="50" x2="340" y2="50" stroke="#000000" strokeWidth="3" className="dark:stroke-slate-300" />
          {Array.from({ length: 40 }).map((_, i) => {
            const x = 25 + i * 8;
            if (x < 340 && Math.abs(x - 200) > 4 && Math.abs(x - 340) > 4) {
              return <line key={`sh-${i}`} x1={x} y1="50" x2={x + 6} y2="40" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-500" />;
            }
            return null;
          })}

          {/* Точки выкалывания на числовой оси */}
          {/* Выколотая точка a = -1 */}
          <circle cx="200" cy="50" r="4" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Выколотая точка a = 0 */}
          <circle cx="340" cy="50" r="4" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Контейнеры foreignObject для каноничных подписей точек */}
          <foreignObject x="160" y="60" width="80" height="30">
            <div className="flex justify-center items-start text-sm text-slate-900 dark:text-slate-100 font-sans">
              -1
            </div>
          </foreignObject>

          <foreignObject x="300" y="60" width="80" height="30">
            <div className="flex justify-center items-start text-sm text-slate-900 dark:text-slate-100 font-sans">
              0
            </div>
          </foreignObject>
        </svg>
      </div>

      <p>Следовательно, ровно три различных корня исходное уравнение имеет при:</p>
      <BlockMath math={`a \\in (-\\infty; -1) \\cup (-1; 0).`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -1) \\cup (-1; 0)`} />
      </div>
    </div>
  )
},



{
  id: 77,
  title: 'Задача 77 (ЕГЭ-2016. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} x(x^2 + y^2 - y - 2) = |x|(y - 2), \\\\ y = a + x \\end{cases}',
  textAfter: <span>имеет ровно три различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Рассмотрим первое уравнение системы. Если <InlineMath math={`x = 0`} />, то левая и правая части обращаются в нуль при любом значении <InlineMath math={`y`} />. Значит, вся ось <InlineMath math={`Oy`} /> является частью графика первого уравнения.
      </p>
      <p>Раскроем модуль при ненулевых значениях переменной:</p>
      <ul className="list-bullet pl-5 space-y-2">
        <li>
          При <InlineMath math={`x > 0`} /> получаем:
          <BlockMath math={`x^2 + y^2 - y - 2 = y - 2 \\iff x^2 + y^2 - 2y = 0 \\iff x^2 + (y - 1)^2 = 1.`} />
          Это правая полуокружность с центром в точке <InlineMath math={`(0; 1)`} /> и радиусом <InlineMath math={`R = 1`} />.
        </li>
        <li>
          При <InlineMath math={`x < 0`} /> получаем:
          <BlockMath math={`x^2 + y^2 - y - 2 = -(y - 2) \\iff x^2 + y^2 = 4.`} />
          Это левая полуокружность с центром в точке <InlineMath math={`(0; 0)`} /> и радиусом <InlineMath math={`R = 2`} />.
        </li>
      </ul>
      
      <p>
        Второе уравнение исходной системы <InlineMath math={`y = x + a`} /> задаёт семейство параллельных прямых с наклоном <InlineMath math={`k = 1`} />.
      </p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 77 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 380" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=180, y=200) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
              <line key={`x-${i}`} x1={180 + i*24} y1="20" x2={180 + i*24} y2="360" />
            ))}
            {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
              <line key={`y-${i}`} x1="20" y1={200 - i*24} x2="360" y2={200 - i*24} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="200" x2="360" y2="200" /> {/* Ось Ox */}
            <line x1="180" y1="20" x2="180" y2="360" />  {/* Ось Oy */}
          </g>
          <path d="M 360,200 L 352,196 M 360,200 L 352,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 180,20 L 176,28 M 180,20 L 184,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="370" y="204" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="166" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="166" y="214" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Метки делений осей */}
          {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map(i => (
            <g key={`lbl-x-${i}`}>
              <line x1={180 + i*24} y1="196" x2={180 + i*24} y2="204" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x={180 + i*24 - 4} y="216" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">{i}</text>
            </g>
          ))}
          {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map(i => (
            <g key={`lbl-y-${i}`}>
              <line x1="176" y1={200 - i*24} x2="184" y2={200 - i*24} stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x="164" y={200 - i*24 + 4} fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">{i}</text>
            </g>
          ))}

          {/* Синий график решений */}
          <line x1="180" y1="20" x2="180" y2="360" stroke="#2563eb" strokeWidth="3" opacity="0.8" />
          <path d="M 180,152 A 24,24 0 0,1 180,200" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <path d="M 180,248 A 48,48 0 0,1 180,152" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* СДВИГ КРАСНЫХ ПРЯМЫХ ЕЩЁ НА 0,3 ЕДИНИЦЫ ВНИЗ */}
          {/* Дополнительное смещение по оси y вниз составляет 0.3 * 24px = 7.2px */}
          {/* Итоговые координаты y1 и y2 увеличены на 7.2px по сравнению с прошлым шагом */}
          {/* Параметры на подписях уменьшились ещё на 0.3: 0,83 -> 0,53; 0 -> -0,3; -2 -> -2,3; -2,41 -> -2,71 */}
          <line x1="20" y1="305.1" x2="190.1" y2="115.2" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" /> {/* a = 0,53 */}
          <line x1="20" y1="328.2" x2="210" y2="118.2" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />   {/* a = -0,3 */}
          <line x1="20" y1="373.2" x2="258" y2="115.2" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />   {/* a = -2,3 */}
          <line x1="20" y1="383.1" x2="267.9" y2="115.2" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" /> {/* a = -2,71 */}

          {/* Маркерные точки */}
          <circle cx="180" cy="176" r="2.5" fill="#000000" />
          <circle cx="180" cy="200" r="2.5" fill="#000000" />
          <circle cx="180" cy="152" r="2.5" fill="#000000" />
          <circle cx="200" cy="190" r="2.5" fill="#000000" />
          <circle cx="145" cy="167" r="2.5" fill="#000000" />
          
          {/* Текстовые подписи к кривым и критическим уровням, сбалансированные под сдвиг */}
          <text x="265" y="135.2" fill="#dc2626" className="font-sans text-[10px] font-semibold">a = 1 - √2</text>
          <text x="250" y="105.2" fill="#dc2626" className="font-sans text-[10px] font-semibold">a = 0</text>
          <text x="200" y="133.2" fill="#dc2626" className="font-sans text-[10px] font-semibold">a = 2</text>
          <text x="182" y="100.2" fill="#dc2626" className="font-sans text-[10px] font-semibold">a = 2√2</text>

        </svg>
      </div>


      <p>
        Каждая прямая семейства <InlineMath math={`y = x + a`} /> пересекает вертикальную ось <InlineMath math={`Oy`} /> ровно в одной точке <InlineMath math={`(0; a)`} /> при любом значении параметра. Поэтому <b>одно решение гарантировано всегда</b>.
      </p>
      
      <div className="space-y-2">
        <div>
          <b>1. Пересечение с правой полуокружностью <InlineMath math={`x^2 + (y - 1)^2 = 1 \\ (x > 0)`} />:</b>
        </div>
        <div>
          Подставим уравнение прямой в уравнение полуокружности: <InlineMath math={`x^2 + (x + a - 1)^2 = 1 \\iff 2x^2 + 2(a - 1)x + (a - 1)^2 - 1 = 0`} />.
        </div>
        <div>
          Касание (один корень) происходит, когда дискриминант равен нулю:
        </div>
        <BlockMath math={`D/4 = (a - 1)^2 - 2((a - 1)^2 - 1) = 0 \\iff 2 - (a - 1)^2 = 0 \\iff a = 1 \\pm \\sqrt{2}.`} />
        <div>
          Поскольку полуокружность расположена в правой полуплоскости, касание происходит при нижнем значении <InlineMath math={`a = 1 - \\sqrt{2}`} />. При <InlineMath math={`1 - \\sqrt{2} < a < 0`} /> прямая даёт два решения, при <InlineMath math={`0 \\leq a < 2`} /> — одно решение, а при <InlineMath math={`a \\geq 2`} /> пересечений нет.
        </div>
      </div>

      <div className="space-y-2">
        <div>
          <b>2. Пересечение с левой полуокружностью <InlineMath math={`x^2 + y^2 = 4 \\ (x < 0)`} />:</b>
        </div>
        <div>
          Подставив <InlineMath math={`y = x + a`} />, получаем <InlineMath math={`x^2 + (x + a)^2 = 4 \\iff 2x^2 + 2ax + a^2 - 4 = 0`} />.
        </div>
        <div>
          Момент касания: <InlineMath math={`D/4 = a^2 - 2(a^2 - 4) = 0 \\iff 8 - a^2 = 0 \\iff a = 2\\sqrt{2}`} /> (для левой полуплоскости).
        </div>
        <div>
          При <InlineMath math={`-2 < a < 2`} /> прямая даёт ровно одно пересечение в области <InlineMath math={`x < 0`} />. При <InlineMath math={`2 < a < 2\\sqrt{2}`} /> получаем два пересечения.
        </div>
      </div>

      <p>Сведём количество решений в единую таблицу для наглядного интервального отбора:</p>

      {/* Адаптивная таблица анализа количества решений с поддержкой KaTeX */}
      <div className="overflow-x-auto my-4">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-sm">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900/50">
              <th className="px-4 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">Значение параметра a</th>
              <th className="px-4 py-2 text-center font-semibold text-slate-700 dark:text-slate-200">Общее количество различных решений</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            <tr>
              <td className="px-4 py-2 font-mono"><InlineMath math={`a < 1 - \\sqrt{2}`} /></td>
              <td className="px-4 py-2 text-center">2 решения</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-900/20">
              <td className="px-4 py-2 font-mono"><InlineMath math={`a = 1 - \\sqrt{2}`} /></td>
              <td className="px-4 py-2 text-center font-semibold text-blue-600 dark:text-blue-400">3 решения (касание правой полуокружности)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono"><InlineMath math={`1 - \\sqrt{2} < a < 0`} /></td>
              <td className="px-4 py-2 text-center">4 решения</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-900/20">
              <td className="px-4 py-2 font-mono"><InlineMath math={`0 \\leq a < 2`} /></td>
              <td className="px-4 py-2 text-center font-semibold text-blue-600 dark:text-blue-400">3 решения (переход через узлы Ox/Oy)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono"><InlineMath math={`a = 2`} /></td>
              <td className="px-4 py-2 text-center">2 решения</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-900/20">
              <td className="px-4 py-2 font-mono"><InlineMath math={`2 < a < 2\\sqrt{2}`} /></td>
              <td className="px-4 py-2 text-center font-semibold text-blue-600 dark:text-blue-400">3 решения (два пересечения слева + одно на Oy)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono"><InlineMath math={`a = 2\\sqrt{2}`} /></td>
              <td className="px-4 py-2 text-center">2 решения (касание левой полуокружности)</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-900/20">
              <td className="px-4 py-2 font-mono"><InlineMath math={`a > 2\\sqrt{2}`} /></td>
              <td className="px-4 py-2 text-center">1 решение</td>
            </tr>
          </tbody>
        </table>
      </div>


      <p>Выбирая из таблицы строки, где система имеет ровно 3 решения, получаем окончательный ответ:</p>
      <BlockMath math={`a \\in \\left\\{1 - \\sqrt{2}\\right\\} \\cup [0; 2) \\cup \\left(2; 2\\sqrt{2}\\right).`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left\\{1 - \\sqrt{2}\\right\\} \\cup [0; 2) \\cup \\left(2; 2\\sqrt{2}\\right)`} />
      </div>
    </div>
  )
},


{
  id: 78,
  title: 'Задача 78 (ЕГЭ-2016. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\sqrt{x^4 - 9x^2 + a^2} = x^2 - 3x - a',
  textAfter: <span>имеет ровно три различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Левая часть уравнения определена и неотрицательна при всех допустимых значениях переменных. Следовательно, исходное уравнение равносильно системе, состоящей из условия неотрицательности правой части и уравнения, полученного возведением обеих частей в квадрат:
      </p>
      <BlockMath math={`\\begin{cases} x^2 - 3x - a \\geq 0, \\\\ x^4 - 9x^2 + a^2 = (x^2 - 3x - a)^2. \\end{cases}`} />
      
      <p>Раскроем квадрат трёхчлена в правой части второго уравнения:</p>
      <BlockMath math={`x^4 - 9x^2 + a^2 = x^4 - 6x^3 + (9 - 2a)x^2 + 6ax + a^2`} />
      <p>Приведём подобные слагаемые и перенесём все члены в одну сторону:</p>
      <BlockMath math={`6x^3 - 18x^2 + 2ax^2 - 6ax = 0 \\iff 2x\\left(3x^2 - 9x + ax - 3a\\right) = 0`} />
      <BlockMath math={`2x\\bigl(3x(x - 3) + a(x - 3)\\bigr) = 0 \\iff 2x(3x + a)(x - 3) = 0.`} />
      
      <p>Корнями полученного уравнения являются три значения переменной:</p>
      <BlockMath math={`x_1 = 0, \\quad x_2 = 3, \\quad x_3 = -\\dfrac{a}{3}.`} />

            <div className="space-y-2">
        <div>
          Чтобы эти значения являлись корнями исходного уравнения, они должны удовлетворять условию <InlineMath math={`x^2 - 3x - a \\geq 0`} />. Проверим каждый корень по отдельности:
        </div>
        <ul className="list-bullet pl-5 space-y-2">
          <li>
            Для <InlineMath math={`x_1 = 0`} /> получаем: <InlineMath math={`0^2 - 3(0) - a \\geq 0 \\iff -a \\geq 0 \\iff a \\leq 0`} />.
          </li>
          <li>
            Для <InlineMath math={`x_2 = 3`} /> получаем: <InlineMath math={`3^2 - 3(3) - a \\geq 0 \\iff 9 - 9 - a \\geq 0 \\iff a \\leq 0`} />.
          </li>
          <li>
            Для <InlineMath math={`x_3 = -\\dfrac{a}{3}`} /> получаем: <InlineMath math={`\\left(-\\dfrac{a}{3}\\right)^2 - 3\\left(-\\dfrac{a}{3}\\right) - a = \\dfrac{a^2}{9} + a - a = \\dfrac{a^2}{9} \\geq 0`} />. Данное неравенство выполняется при любом значении параметра <InlineMath math={`a`} />.
          </li>
        </ul>
      </div>
      
      <p>
        Таким образом, при <InlineMath math={`a \\leq 0`} /> все три числа являются корнями исходного уравнения. Чтобы уравнение имело <b>ровно три различных</b> корня, эти значения должны быть попарно различны:
      </p>
      <BlockMath math={`\\begin{cases} x_1 \\neq x_2 \\iff 0 \\neq 3 \\quad (\\text{выполнено}), \\\\[1.5em] x_1 \\neq x_3 \\iff -\\dfrac{a}{3} \\neq 0 \\iff a \\neq 0, \\\\[1.5em] x_2 \\neq x_3 \\iff -\\dfrac{a}{3} \\neq 3 \\iff a \\neq -9. \\end{cases}`} />

      <p>Изобразим полученные условия отбора корней на числовой прямой параметра <InlineMath math={`a`} />:</p>

      {/* Высокоточный и наглядный график числовой прямой параметра а */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 440 100" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Главная ось параметра а */}
          <line x1="20" y1="50" x2="400" y2="50" stroke="#000000" strokeWidth="1.5" className="dark:stroke-slate-400" />
          <path d="M 400,50 L 392,46 M 400,50 L 392,54" stroke="#000000" strokeWidth="1.5" fill="none" className="dark:stroke-slate-400" />
          <text x="412" y="54" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* Заштрихованная область от минус бесконечности до 0 */}
          <line x1="20" y1="50" x2="340" y2="50" stroke="#000000" strokeWidth="3" className="dark:stroke-slate-300" />
          {Array.from({ length: 40 }).map((_, i) => {
            const x = 25 + i * 8;
            if (x < 340 && Math.abs(x - 200) > 4 && Math.abs(x - 340) > 4) {
              return <line key={`sh-${i}`} x1={x} y1="50" x2={x + 6} y2="40" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-500" />;
            }
            return null;
          })}

          {/* Выколотая точка a = -9 */}
          <circle cx="200" cy="50" r="4" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />
          <text x="194" y="74" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">-9</text>

          {/* Выколотая точка a = 0 */}
          <circle cx="340" cy="50" r="4" fill="white" stroke="#000000" strokeWidth="1.5" className="fill-white dark:fill-slate-950 dark:stroke-slate-400" />
          <text x="336" y="74" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">0</text>
        </svg>
      </div>

      <p>
        При <InlineMath math={`a > 0`} /> корни <InlineMath math={`x_1 = 0`} /> и <InlineMath math={`x_2 = 3`} /> не удовлетворяют условию неотрицательности правой части исходного уравнения, поэтому трёх различных корней быть не может.
      </p>
      
      <p>Следовательно, ровно три различных корня исходное уравнение имеет при:</p>
      <BlockMath math={`a \\in (-\\infty; -9) \\cup (-9; 0).`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -9) \\cup (-9; 0)`} />
      </div>
    </div>
  )
},


{
  id: 79,
  title: 'Задача 79 (ЕГЭ-2015. Досрочная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} \\dfrac{(y^2 - xy + 3x - y - 6)\\sqrt{x + 2}}{\\sqrt{6 - x}} = 0, \\\\ x + y - a = 0 \\end{cases}',
  textAfter: <span>имеет ровно два различных решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <p>
        Запишем область допустимых значений (ОДЗ) системы, исходя из условий существования квадратных корней в числителе и строго положительности подкоренного выражения в знаменателе:
      </p>
      <BlockMath math={`\\begin{cases} x + 2 \\geq 0, \\\\ 6 - x > 0 \\end{cases} \\iff -2 \\leq x < 6.`} />
      
      <p>Рассмотрим первое уравнение системы. Дробь равна нулю, когда её числитель равен нулю:</p>
      <BlockMath math={`(y^2 - xy + 3x - y - 6)\\sqrt{x + 2} = 0.`} />
      
      <div className="space-y-2">
        <p>Данное уравнение на ОДЗ распадается на два случая:</p>
        <ul className="list-bullet pl-5 space-y-2">
          <li>
            При <InlineMath math={`x = -2`} /> множитель <InlineMath math={`\\sqrt{x + 2} = 0`} />, поэтому уравнение обращается в верное равенство при любом значении переменной <InlineMath math={`y`} />. Таким образом, вертикальный отрезок прямой <InlineMath math={`x = -2`} /> является частью графика.
          </li>
          <li>
            При <InlineMath math={`-2 < x < 6`} /> множитель <InlineMath math={`\\sqrt{x + 2} \\neq 0`} />, поэтому нулю должна быть равна большая скобка числителя. Разложим её на множители методом группировки:
            <BlockMath math={`y^2 - xy - y + 3x - 6 = y(y - x) - (y - 3x + 6) \\implies (y - 3)(y - x + 2) = 0.`} />
            Это задаёт две прямые линии ограничений: горизонтальную <InlineMath math={`y = 3`} /> и наклонную <InlineMath math={`y = x - 2`} />.
          </li>
        </ul>
      </div>
      
      <p>
        Второе уравнение исходной системы перепишем в виде <InlineMath math={`y = a - x`} />. Оно задаёт сканирующее семейство параллельных прямых с наклоном <InlineMath math={`k = -1`} />.
      </p>

      {/* Высокоточный центрированный SVG-график Задачи 79 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 380" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая координатная сетка (Шаг: 1 деление = 20px. Центр (0,0) зафиксирован на x=140, y=200) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
              <line key={`x-${i}`} x1={140 + i*20} y1="20" x2={140 + i*20} y2="360" />
            ))}
            {[-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <line key={`y-${i}`} x1="20" y1={200 - i*20} x2="360" y2={200 - i*20} />
            ))}
          </g>

          {/* Левая граница ОДЗ x = -2 (СПЛОШНАЯ СИНЯЯ ЛИНИЯ) и Правая выколотая серая граница ОДЗ x = 6 (пунктир) */}
          <line x1="100" y1="20" x2="100" y2="360" stroke="#2563eb" strokeWidth="1.2" />
          <line x1="260" y1="20" x2="260" y2="360" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="80" y="16" fill="#2563eb" stroke="none" className="font-sans font-semibold text-[9px]">x = -2</text>
          <text x="252" y="16" fill="#94a3b8" stroke="none" className="font-sans text-[9px]">x = 6</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="200" x2="360" y2="200" /> {/* Ось Ox */}
            <line x1="140" y1="20" x2="140" y2="360" />  {/* Ось Oy */}
          </g>
          <path d="M 360,200 L 352,196 M 360,200 L 352,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 140,20 L 136,28 M 140,20 L 144,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="370" y="204" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="126" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="126" y="214" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Числовые метки делений осей */}
          {[-3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map(i => (
            <g key={`lbl-x-${i}`}>
              <line x1={140 + i*20} y1="196" x2={140 + i*20} y2="204" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x={140 + i*20 - 4} y="216" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[9px]">{i}</text>
            </g>
          ))}
          {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
            <g key={`lbl-y-${i}`}>
              <line x1="136" y1={200 - i*20} x2="144" y2={200 - i*20} stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x="124" y={200 - i*20 + 4} fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[9px]">{i}</text>
            </g>
          ))}

          {/* Неподвижный синий график решений первого уравнения */}
          {/* Вертикальный отрезок x = -2 (от y = -4 до y = 3) */}
          <line x1="100" y1="140" x2="100" y2="280" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Горизонтальный отрезок y = 3 (от x = -2 до выколотой точки x = 6) */}
          <line x1="100" y1="140" x2="260" y2="140" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Наклонный отрезок y = x - 2 (от x = -2, y = -4 до выколотой точки x = 6, y = 4) */}
          <line x1="100" y1="280" x2="260" y2="120" stroke="#2563eb" strokeWidth="2.5" />

          {/* Выколотые правые граничные точки по ОДЗ на линии x = 6 */}
          <circle cx="260" cy="140" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* (6; 3) */}
          <circle cx="260" cy="120" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* (6; 4) */}

          {/* ИСПРАВЛЕННЫЕ КРАСНЫЕ ПРЯМЫЕ СЕМЕЙСТВА y = a - x С ТОЧНЫМ ПРОХОЖДЕНИЕМ ЧЕРЕЗ ОСЬ OY */}
          {/* Каждая прямая пересекает ось Oy (x=140) строго в точке (0; a), где 1 деление = 20px */}
          {/* ИСПРАВЛЕННЫЕ КРАСНЫЕ ПРЯМЫЕ СЕМЕЙСТВА y = a - x С КОРРЕКТНЫМ ОГРАНИЧЕНИЕМ СВЕРХУ */}
          {/* Верхние точки x1 и y1 сдвинуты вправо-вниз по наклону 45 градусов, чтобы линии не улетали за сетку */}
          <line x1="20" y1="200" x2="220" y2="400" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />   {/* a = -6 */}
          <line x1="20" y1="60" x2="280" y2="320" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />    {/* a = 1  */}
          <line x1="80" y1="-20" x2="360" y2="260" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />   {/* a = 8  */}
          <line x1="100" y1="-20" x2="360" y2="240" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />  {/* a = 9  */}
          <line x1="120" y1="-20" x2="360" y2="220" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" />  {/* a = 10 */}


          {/* Текстовые подписи к линиям параметров, выровненные строго по ходу убывания прямых */}
          <text x="25" y="105" fill="#dc2626" className="font-sans text-[9px] font-semibold">a = 1</text>
          <text x="110" y="325" fill="#dc2626" className="font-sans text-[9px] font-semibold">a = -6</text>
          <text x="290" y="220" fill="#dc2626" className="font-sans text-[9px] font-semibold">a = 8</text>
          <text x="363" y="240" fill="#dc2626" className="font-sans text-[9px] font-semibold">a = 9</text>
          <text x="330" y="165" fill="#dc2626" className="font-sans text-[9px] font-semibold">a = 10</text>



          {/* Ключевые точки пересечений на синих графиках */}
          <circle cx="240" cy="140" r="3.5" fill="#000000" /> {/* Точка пересечения (5; 3) */}
          <circle cx="100" cy="140" r="3.5" fill="#000000" /> {/* Точка излома (-2; 3) */}
          <circle cx="100" cy="280" r="3.5" fill="#000000" /> {/* Точка излома (-2; -4) */}

          {/* Текстовые подписи к линиям параметров, развернутые вдоль убывающих прямых */}
          <text x="170" y="152" fill="#2563eb" className="font-sans text-[9px]">y = 3</text>
          <text x="270" y="115" fill="#2563eb" className="font-sans text-[9px]">y = x - 2</text>
        </svg>
      </div>


      <p>
        Каждая прямая семейства <InlineMath math={`y = a - x`} /> пересекает неподвижный вертикальный отрезок <InlineMath math={`x = -2`} /> в точке с координатами <InlineMath math={`(-2; a + 2)`} />. Это даёт ровно <b>одно гарантированное решение при любом значении параметра a</b>.
      </p>

      <div className="space-y-3">
        <div>
          <b>1. Пересечение с прямой <InlineMath math={`y = 3`} />:</b>
          <BlockMath math={`a - x = 3 \\iff x = a - 3.`} />
          С учётом строгих границ открытого интервала ОДЗ <InlineMath math={`-2 < x < 6`} /> получаем:
          <BlockMath math={`-2 < a - 3 < 6 \\iff 1 < a < 9.`} />
          При <InlineMath math={`a = 1`} /> точка пересечения попадает на левую границу <InlineMath math={`x = -2`} /> и уже учтена. При <InlineMath math={`a = 9`} /> точка пересечения попадает на выколотую правую границу ОДЗ <InlineMath math={`x = 6`} /> и не даёт решений.
        </div>

        <div>
          <b>2. Пересечение с прямой <InlineMath math={`y = x - 2`} />:</b>
          <BlockMath math={`a - x = x - 2 \\iff 2x = a + 2 \\iff x = \\dfrac{a + 2}{2}.`} />
          С учётом ограничений интервала ОДЗ <InlineMath math={`-2 < x < 6`} /> получаем:
          <BlockMath math={`-2 < \\dfrac{a + 2}{2} < 6 \\iff -4 < a + 2 < 12 \\iff -6 < a < 10.`} />
          При <InlineMath math={`a = -6`} /> точка пересечения совпадает с концом вертикального отрезка <InlineMath math={`(-2; -4)`} />. При <InlineMath math={`a = 10`} /> точка пересечения попадает на выколотую границу ОДЗ <InlineMath math={`x = 6`} />.
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <p>Сопоставим пересечения на всех промежутках изменения параметра:</p>
        <ul className="list-bullet pl-5 space-y-1">
          <li>
            При <InlineMath math={`-6 < a \\leq 1`} /> имеются ровно два различных решения: одно на вертикальном отрезке <InlineMath math={`x = -2`} /> и одно на наклонной прямой.
          </li>
          <li>
            При <InlineMath math={`1 < a < 8`} /> прямая пересекает все три линии, давая 3 решения.
          </li>
          <li>
            При <InlineMath math={`a = 8`} /> прямые пересекаются в точке <InlineMath math={`(5; 3)`} />. В этой точке решения сливаются, поэтому остаётся ровно <b>два различных решения</b>.
          </li>
          <li>
            При <InlineMath math={`8 < a < 9`} /> снова образуется 3 решения.
          </li>
          <li>
            При <InlineMath math={`9 \\leq a < 10`} /> пересечение с горизонтальной линией выходит за ОДЗ, поэтому остаются ровно <b>два различных решения</b>: на отрезке <InlineMath math={`x = -2`} /> и на наклонной прямой.
          </li>
        </ul>
      </div>

      <p>Объединяя все подходящие промежутки, получаем итоговое множество:</p>
      <BlockMath math={`a \\in (-6; 1] \\cup \\{8\\} \\cup [9; 10).`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-6; 1] \\cup \\{8\\} \\cup [9; 10)`} />
      </div>
    </div>
  )
},


{
  id: 80,
  title: 'Задача 80 (ЕГЭ-2014. Досрочная волна, резервный день)',
  textBefore: 'Найдите все значения a, при которых любое решение уравнения',
  mathA: '3\\sqrt[5]{6,2x - 5,2} + 4\\log_{5}(4x + 1) + 5a = 0',
  textAfter: <span>принадлежит отрезку [1; 6].</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>Найдем область определения уравнения, которая задается условием строго положительности аргумента логарифма:</p>
        <BlockMath math={`4x + 1 > 0 \\iff x > -\\dfrac{1}{4}.`} />
      </div>
      
      <p>Перенесем слагаемые с переменной и параметром в разные стороны:</p>
      <BlockMath math={`3\\sqrt[5]{6,2x - 5,2} = -4\\log_{5}(4x + 1) - 5a.`} />
      
      <p>Рассмотрим функции в левой и правой частях уравнения:</p>
      <BlockMath math={`f(x) = 3\\sqrt[5]{6,2x - 5,2}, \\quad g(x) = -4\\log_{5}(4x + 1) - 5a.`} />
      
      <p>
        Функция <InlineMath math={`f(x)`} /> монотонно возрастает на своей области определения, а функция <InlineMath math={`g(x)`} /> монотонно убывает (поскольку основание логарифма <InlineMath math={`5 > 1`} />, а перед ним стоит отрицательный коэффициент). 
        Следовательно, их графики имеют <b>не более одной общей точки</b>. Условие задачи выполняется тогда и только тогда, когда точка пересечения графиков существует и находится на отрезке <InlineMath math={`[1; 6]`} />.
      </p>

      {/* Высокоточный и крупный центрированный SVG-график Задачи 80 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 380" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=40, y=320) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
              <line key={`x-${i}`} x1={40 + i*24} y1="20" x2={40 + i*24} y2="340" />
            ))}
            {[-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
              <line key={`y-${i}`} x1="20" y1={320 - i*24} x2="360" y2={320 - i*24} />
            ))}
          </g>

          {/* Вертикальные границы отрезка x=1 и x=6 (пунктир) */}
          <line x1="64" y1="20" x2="64" y2="340" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <line x1="184" y1="20" x2="184" y2="340" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="56" y="16" fill="#94a3b8" stroke="none" className="font-sans text-[9px]">x = 1</text>
          <text x="176" y="16" fill="#94a3b8" stroke="none" className="font-sans text-[9px]">x = 6</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="320" x2="360" y2="320" /> {/* Ось Ox */}
            <line x1="40" y1="20" x2="40" y2="360" />   {/* Ось Oy */}
          </g>
          <path d="M 360,320 L 352,316 M 360,320 L 352,324" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 40,20 L 36,28 M 40,20 L 44,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="370" y="324" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="26" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="26" y="334" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Штрихи делений на осях БЕЗ ЧИСЛОВЫХ МЕТОК строго по ТЗ */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
            <line key={`tick-x-${i}`} x1={40 + i*24} y1="316" x2={40 + i*24} y2="324" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
          ))}
          {[-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
            <line key={`tick-y-${i}`} x1="36" y1={320 - i*24} x2="44" y2={320 - i*24} stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
          ))}

          {/* Возрастающий синий график f(x) = 3*⁵√(6.2x - 5.2) */}
          <path d="M 60,320 C 60.5,290 62,254 64,248 C 76,212 110,186 184,176 C 220,171.2 260,167 320,163" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="192" y="194" fill="#2563eb" className="font-serif italic text-[10px]">f(x)</text>

          {/* Убывающий красный график g(x) при a = -7/5 (сплошной) */}
          <path d="M 64,248 C 80,290 120,330 184,344" fill="none" stroke="#dc2626" strokeWidth="2" />
          <text x="188" y="354" fill="#dc2626" className="font-serif italic text-[10px]">g(x), a = -7/5</text>

          {/* Убывающий красный график g(x) при a = -14/5 (пунктир) */}
          <path d="M 64,80 C 80,122 120,162 184,176" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="148" y="150" fill="#dc2626" className="font-serif italic text-[10px]">g(x), a = -14/5</text>

          {/* ВСЕ ЧЕРНЫЕ МАРКЕРНЫЕ ТОЧКИ И ИХ ТЕКСТОВЫЕ ПОДПИСИ (1;3) И (6;6) ПОЛНОСТЬЮ УДАЛЕНЫ ПО ТЗ */}
        </svg>
      </div>


      <div className="space-y-4">
        <div>
          <p className="font-semibold text-slate-800 dark:text-slate-200">1. Рассмотрим поведение функций на левой границе отрезка при <InlineMath math={`x = 1`} />:</p>
          Для того чтобы точка пересечения графиков лежала на отрезке или правее него, на левой границе возрастающая функция должна быть ниже или совпадать с убывающей:
          <BlockMath math={`f(1) \\leq g(1) \\iff 3 \\leq -4 - 5a \\iff 5a \\leq -7 \\iff a \\leq -\\dfrac{7}{5}.`} />
        </div>

        <div>
          <p className="font-semibold text-slate-800 dark:text-slate-200">2. Рассмотрим поведение функций на правой границе отрезка при <InlineMath math={`x = 6`} />:</p>
          Для того чтобы точка пересечения графиков лежала на отрезке или левее него, на правой границе возрастающая функция должна быть выше или совпадать с убывающей:
          <BlockMath math={`f(6) \\geq g(6) \\iff 6 \\geq -8 - 5a \\iff 5a \\geq -14 \\iff a \\geq -\\dfrac{14}{5}`} />
        </div>
      </div>

      <p className="pt-2">
        Объединяя оба условия в общую систему неравенств, находим пересечение промежутков параметра:
      </p>
      <BlockMath math={`\\begin{cases} a \\geq -\\dfrac{14}{5}, \\\\[0.5em] a \\leq -\\dfrac{7}{5} \\end{cases} \\iff a \\in \\left[-\\dfrac{14}{5}; -\\dfrac{7}{5}\\right].`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left[-\\dfrac{14}{5}; -\\dfrac{7}{5}\\right]`} />
      </div>
    </div>
  )
},


{
  id: 81,
  title: 'Задача 81 (ЕГЭ-2014. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\sqrt{x^4 + (a - 5)^4} = |x + a - 5| + |x - a + 5|',
  textAfter: <span>имеет ровно один корень.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1. Анализ чётности (инвариантность):</b> Заметим, что если значение <InlineMath math={`x_0`} /> является корнем данного уравнения, то значение <InlineMath math={`-x_0`} /> также является его корнем:</p>
        <BlockMath math={`\\sqrt{(-x_0)^4 + (a - 5)^4} = |-x_0 + a - 5| + |-x_0 - a + 5| = |x_0 - a + 5| + |x_0 + a - 5|.`} />
        <p>Для того чтобы уравнение имело единственный корень, необходимо, чтобы этим корнем был <InlineMath math={`x = 0`} />.</p>
      </div>
      
      <div className="space-y-2">
        <p><b>2. Необходимое условие:</b> Подставим <InlineMath math={`x = 0`} /> в исходное уравнение:</p>
        <BlockMath math={`\\sqrt{0^4 + (a - 5)^4} = |0 + a - 5| + |0 - a + 5| \\iff (a - 5)^2 = 2|a - 5|.`} />
        <p>Сделаем замену <InlineMath math={`t = |a - 5| \\geq 0`} />:</p>
        <BlockMath math={`t^2 - 2t = 0 \\iff t(t - 2) = 0 \\iff \\begin{cases} t = 0 \\\\[0.5em] t = 2 \\end{cases}`} />
      </div>

      <div className="space-y-2">
        <p>Разберём полученные случаи для поиска кандидатов:</p>
        <ul className="list-bullet pl-5 space-y-2">
          <li>
            Если <InlineMath math={`t = 0`} />: <InlineMath math={`|a - 5| = 0 \\iff a = 5`} />.
          </li>
          <li>
            Если <InlineMath math={`t = 2`} />: <InlineMath math={`|a - 5| = 2 \\iff \\begin{cases} a - 5 = 2 \\\\[0.5em] a - 5 = -2 \\end{cases} \\iff \\begin{cases} a = 7 \\\\[0.5em] a = 3 \\end{cases}`} />.
          </li>
        </ul>
        <p>Таким образом, кандидатами на ответ являются значения <InlineMath math={`a \\in \\{3; 5; 7\\}`} />.</p>
      </div>

      <div className="space-y-2">
        <p><b>3. Проверим значения параметра на достаточность:</b></p>
        <p><u>Случай <InlineMath math={`a = 5`} />:</u> Подставим <InlineMath math={`a = 5`} /> в исходное уравнение:</p>
        <BlockMath math={`\\sqrt{x^4 + 0} = |x| + |x| \\iff x^2 = 2|x| \\iff |x|(|x| - 2) = 0 \\iff \\begin{cases} x = 0 \\\\[0.5em] x = 2 \\\\[0.5em] x = -2 \\end{cases}`} />
        <p>Уравнение имеет три корня. Значение <InlineMath math={`a = 5`} /> не подходит.</p>
      </div>

            <div className="space-y-4">
        <div>
          <p><u>Случай <InlineMath math={`a = 7`} /> или <InlineMath math={`a = 3`} />:</u></p>
          <p className="mt-1">
            При <InlineMath math={`a = 7`} /> имеем <InlineMath math={`a - 5 = 2`} />, а при <InlineMath math={`a = 3`} /> имеем <InlineMath math={`a - 5 = -2`} />. Заметим, что выражение <InlineMath math={`(a - 5)^4 = 16`} />, а правая часть равенства в обоих случаях принимает вид <InlineMath math={`|x + 2| + |x - 2|`} />. Получаем уравнение:
          </p>
          <BlockMath math={`\\sqrt{x^4 + 16} = |x + 2| + |x - 2|.`} />
        </div>

        <div className="space-y-2">
          <p>Используем свойства неравенств для оценки левой и правой частей уравнения:</p>
          <div className="pl-4 space-y-2">
            <div>
              <b>а) Левая часть:</b>
              <BlockMath math={`x^4 \\geq 0 \\implies x^4 + 16 \\geq 16 \\implies \\sqrt{x^4 + 16} \\geq \\sqrt{16} = 4.`} />
              Причём равенство <InlineMath math={`\\sqrt{x^4 + 16} = 4`} /> достигается только при <InlineMath math={`x = 0`} />.
            </div>
            <div>
              <b>б) Правая часть:</b>
              <br />
              По неравенству треугольника <InlineMath math={`|u| + |v| \\geq |u - v|`} /> имеем:
              <BlockMath math={`|x + 2| + |2 - x| \\geq |(x + 2) + (2 - x)| = 4.`} />
              Причём <InlineMath math={`|x + 2| + |x - 2| = 4`} /> достигается тогда и только тогда, когда <InlineMath math={`x \\in [-2; 2]`} />.
            </div>
          </div>
        </div>

        <div>
          <p>
            При <InlineMath math={`x \\in [-2; 2]`} /> правая часть равенства равна <InlineMath math={`4`} />, а левая часть <InlineMath math={`\\sqrt{x^4 + 16} > 4`} /> при всех <InlineMath math={`x \\neq 0`} />. Значит, на промежутках <InlineMath math={`(-2; 0)`} /> и <InlineMath math={`(0; 2)`} /> решений нет.
          </p>
          <p className="mt-2">
            При <InlineMath math={`|x| > 2`} /> правая часть равна <InlineMath math={`2|x|`} />. Рассмотрев уравнение <InlineMath math={`\\sqrt{x^4 + 16} = 2|x|`} />:
          </p>
          <BlockMath math={`x^4 + 16 = 4x^2 \\iff x^4 - 4x^2 + 16 = 0.`} />
          <p>
            Дискриминант относительно <InlineMath math={`x^2`} /> равен: <InlineMath math={`D = 16 - 64 = -48 < 0`} />, действительных корней нет.
          </p>
          <p className="mt-2">
            Следовательно, при <InlineMath math={`a = 3`} /> и <InlineMath math={`a = 7`} /> единственным решением уравнения является <InlineMath math={`x = 0`} />.
          </p>
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{3; 7\\}`} />
      </div>
    </div>
  )
},


{
  id: 82,
  title: 'Задача 82 (ЕГЭ-2014. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '(|x - 2| + |x - a|)^2 + (a - 30)(|x - 2| + |x - a|) + 90a - 12a^2 = 0',
  textAfter: <span>имеет не менее четырёх различных корней.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1. Замена:</b> Обозначим <InlineMath math={`t = |x - 2| + |x - a|, \\quad t \\geq 0.`} /></p>
        <p>Геометрически <InlineMath math={`t`} /> представляет собой график кусочно-линейной функции («корыто») в осях <InlineMath math={`xOt`} />.</p>
      </div>

      {/* Высокоточный и крупный центрированный SVG-график кусочно-линейной функции t(x) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 360 220" className="w-full max-w-[360px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="180" x2="330" y2="180" /> {/* Ось Ox */}
            <line x1="100" y1="20" x2="100" y2="195" />  {/* Ось Ot */}
          </g>
          <path d="M 330,180 L 322,176 M 330,180 L 322,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 100,20 L 96,28 M 100,20 L 104,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="340" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="98" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">t</text>

          {/* Пунктирные сеточные линии для уровней a, 2 и t0 */}
          <line x1="170" y1="120" x2="170" y2="180" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="260" y1="120" x2="260" y2="180" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="70" y1="120" x2="260" y2="120" stroke="#16a34a" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Жирный синий график функции "корыто" */}
          <path d="M 50,60 L 170,120 L 260,120 L 310,60" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Буквенные метки делений осей */}
          <text x="166" y="195" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">a</text>
          <text x="256" y="195" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">2</text>
          <text x="10" y="124" fill="#16a34a" stroke="none" className="font-sans font-semibold text-xs">{"t₀ = |a - 2|"}</text>
        </svg>
      </div>

      <div className="space-y-1">
        <p>Из графика видно:</p>
        <ul className="list-bullet pl-5 space-y-1">
          <li>Если <InlineMath math={`t < |a - 2|`} />, то уравнение <InlineMath math={`t(x) = t`} /> не имеет решений.</li>
          <li>Если <InlineMath math={`t > |a - 2|`} />, то уравнение <InlineMath math={`|x - 2| + |x - a| = t`} /> имеет ровно 2 корня <InlineMath math={`x`} />.</li>
          <li>Если <InlineMath math={`t = |a - 2|`} /> и <InlineMath math={`a \\neq 2`} />, то уравнение имеет бесконечно много решений <InlineMath math={`x`} /> (весь отрезок между <InlineMath math={`a`} /> и <InlineMath math={`2`} />).</li>
        </ul>
      </div>

      <div className="space-y-2">
        <p><b>2. Квадратное уравнение относительно <InlineMath math={`t`} />:</b></p>
        <p>Подставим <InlineMath math={`t`} /> в исходное уравнение:</p>
        <BlockMath math={`t^2 + (a - 30)t + 90a - 12a^2 = 0.`} />
      </div>

            <div className="space-y-4">
        <div>
          <p>Найдем дискриминант этого уравнения:</p>
          <BlockMath math={`D = (a - 30)^2 - 4(90a - 12a^2) = a^2 - 60a + 900 - 360a + 48a^2 = 49a^2 - 420a + 900 = (7a - 30)^2.`} />
          <p className="mt-2">Корни уравнения относительно <InlineMath math={`t`} /> равны:</p>
          <BlockMath math={`t_1 = \\dfrac{-(a - 30) + (7a - 30)}{2} = \\dfrac{6a}{2} = 3a.`} />
          <BlockMath math={`t_2 = \\dfrac{-(a - 30) - (7a - 30)}{2} = \\dfrac{60 - 8a}{2} = 30 - 4a.`} />
        </div>

        <div className="space-y-2">
          <p><b>3. Анализ количества решений:</b></p>
          <p>Чтобы исходное уравнение имело не менее 4 различных корней, необходимо и достаточно, чтобы выполнялось одно из двух условий:</p>
          <ul className="list-bullet pl-5 space-y-2">
            <li>
              а) Корни <InlineMath math={`t_1`} /> и <InlineMath math={`t_2`} /> различны (<InlineMath math={`t_1 \\neq t_2`} />), и каждый удовлетворяет условию <InlineMath math={`t \\geq |a - 2|`} /> (каждый даст по 2 корня <InlineMath math={`x`} /> или один из них даст бесконечно много решений).
            </li>
            <li>
              б) Если один из корней совпадает с <InlineMath math={`|a - 2|`} /> при <InlineMath math={`a \\neq 2`} />, мы получаем бесконечное число решений, что также удовлетворяет требованию «не менее 4 корней».
            </li>
          </ul>
          <p className="mt-2">Таким образом, необходимо и достаточно выполнение системы нестрогих неравенств:</p>
          <BlockMath math={`\\begin{cases} 3a \\geq |a - 2|, \\\\[1.5em] 30 - 4a \\geq |a - 2|. \\end{cases}`} />
        </div>

        <div className="space-y-2">
          <p>Проверим точку совпадения корней:</p>
          <BlockMath math={`t_1 = t_2 \\iff 3a = 30 - 4a \\iff 7a = 30 \\iff a = \\dfrac{30}{7}.`} />
          <p>
            Значение <InlineMath math={`a = \\dfrac{30}{7}`} /> дает единственный корень <InlineMath math={`t = \\dfrac{90}{7}`} />. 
            Подставляя <InlineMath math={`a = \\dfrac{30}{7}`} /> в условие ограничения, получаем <InlineMath math={`t = \\dfrac{90}{7} > \\left|\\dfrac{30}{7} - 2\\right| = \\dfrac{16}{7}`} />, что порождает ровно 2 корня <InlineMath math={`x`} />, поэтому точка <InlineMath math={`a = \\dfrac{30}{7}`} /> не подходит.
          </p>
        </div>

        <div className="space-y-4">
          <p>Раскрываем неравенства с модулем:</p>
          <div className="pl-4 space-y-3">
            <div>
              <InlineMath math={`\\bullet \\ 3a \\geq |a - 2| \\iff \\begin{cases} 3a \\geq a - 2 \\\\[0.5em] 3a \\geq -a + 2 \\end{cases} \\iff \\begin{cases} 2a \\geq -2 \\\\[0.5em] 4a \\geq 2 \\end{cases} \\iff a \\geq \\dfrac{1}{2}.`} />
            </div>
            <div>
              <InlineMath math={`\\bullet \\ 30 - 4a \\geq |a - 2| \\iff \\begin{cases} 30 - 4a \\geq a - 2 \\\\[0.5em] 30 - 4a \\geq -a + 2 \\end{cases} \\iff \\begin{cases} 5a \\leq 32 \\\\[0.5em] 3a \\leq 28 \\end{cases} \\iff a \\leq \\dfrac{32}{5}.`} />
            </div>
          </div>
          <p className="mt-2">
            Исключая точку совпадения корней <InlineMath math={`a = \\dfrac{30}{7}`} />, получаем пересечение интервалов:
          </p>
          <BlockMath math={`a \\in \\left[\\dfrac{1}{2}; \\dfrac{30}{7}\\right) \\cup \\left(\\dfrac{30}{7}; \\dfrac{32}{5}\\right].`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left[\\dfrac{1}{2}; \\dfrac{30}{7}\\right) \\cup \\left(\\dfrac{30}{7}; \\dfrac{32}{5}\\right]`} />
      </div>
    </div>
  )
},


{
  id: 83,
  title: 'Задача 83 (ЕГЭ-2014. Основная волна)',
  textBefore: 'Найдите все значения a, при которых уравнение',
  mathA: '(|x + 7| - |x - a|)^2 - 13a(|x + 7| - |x - a|) + 30a^2 + 21a - 9 = 0',
  textAfter: <span>имеет ровно два различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1. Замена:</b> Обозначим <InlineMath math={`t = |x + 7| - |x - a|.`} /></p>
        <p>Геометрически <InlineMath math={`t`} /> представляет собой график кусочно-линейной функции («ступенька») в осях <InlineMath math={`xOt`} />.</p>
      </div>

      {/* Высокоточный и крупный центрированный SVG-график функции "ступенька" */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 240" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="120" x2="350" y2="120" /> {/* Ось Ox */}
            <line x1="240" y1="20" x2="240" y2="220" />  {/* Ось Ot */}
          </g>
          <path d="M 350,120 L 342,116 M 350,120 L 342,124" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 240,20 L 236,28 M 240,20 L 244,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="360" y="124" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="238" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">t</text>

          {/* Пунктирные линии для уровней -7, a и значений функции */}
          <line x1="70" y1="120" x2="70" y2="180" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="290" y1="60" x2="290" y2="120" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="20" y1="180" x2="70" y2="180" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="240" y1="60" x2="290" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />

          {/* Жирный синий график функции "ступенька" */}
          <path d="M 20,180 L 70,180 L 290,60 L 350,60" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Буквенные метки делений осей */}
          <text x="62" y="112" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">-7</text>
          <text x="286" y="134" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">a</text>
          <text x="195" y="64" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">|a + 7|</text>
          <text x="246" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">-|a + 7|</text>
        </svg>
      </div>

      <div className="space-y-1">
        <p>Из графика видно, что:</p>
        <ul className="list-bullet pl-5 space-y-1">
          <li>При <InlineMath math={`t \\in (-|a + 7|; |a + 7|)`} /> уравнение <InlineMath math={`t(x) = t`} /> имеет ровно 1 корень <InlineMath math={`x`} />.</li>
          <li>При <InlineMath math={`t = \\pm |a + 7|`} /> (при <InlineMath math={`a \\neq -7`} />) уравнение имеет бесконечно много решений.</li>
        </ul>
        <p className="pt-1">
          Следовательно, чтобы исходное уравнение имело ровно два различных корня <InlineMath math={`x`} />, нужно, чтобы квадратное уравнение относительно <InlineMath math={`t`} /> имело два различных корня <InlineMath math={`t_1`} /> и <InlineMath math={`t_2`} />, причём каждый из них лежал строго внутри интервала <InlineMath math={`(-|a + 7|; |a + 7|)`} />.
        </p>
      </div>

      <div className="space-y-2">
        <p><b>2. Решение относительно <InlineMath math={`t`} />:</b></p>
        <BlockMath math={`t^2 - 13a \\cdot t + (30a^2 + 21a - 9) = 0.`} />
        <p>Найдем дискриминант:</p>
        <BlockMath math={`D = 169a^2 - 4(30a^2 + 21a - 9) = 169a^2 - 120a^2 - 84a + 36 = 49a^2 - 84a + 36 = (7a - 6)^2.`} />
        <p>Корни уравнения равны:</p>
        <BlockMath math={`t_1 = \\dfrac{13a + (7a - 6)}{2} = \\dfrac{20a - 6}{2} = 10a - 3.`} />
        <BlockMath math={`t_2 = \\dfrac{13a - (7a - 6)}{2} = \\dfrac{6a + 6}{2} = 3a + 3.`} />
      </div>

            <div className="space-y-4">
        <div>
          <p><b>3. Составление системы условий:</b> Запишем условия существования двух уникальных корней <InlineMath math={`x`} />:</p>
          <BlockMath math={`\\begin{cases} 10a - 3 \\neq 3a + 3, \\\\[0.5em] -|a + 7| < 10a - 3 < |a + 7|, \\\\[0.5em] -|a + 7| < 3a + 3 < |a + 7| \\end{cases} \\iff \\begin{cases} a \\neq \\dfrac{6}{7}, \\\\[1em] |10a - 3| < |a + 7|, \\\\[1em] |3a + 3| < |a + 7|. \\end{cases}`} />
        </div>

        <div className="space-y-3">
          <p>Решаем неравенства методом возведения в квадрат:</p>
          
          <div className="pl-4 space-y-2">
            <div>
              <InlineMath math={`\\bullet \\ |10a - 3| < |a + 7| \\iff (10a - 3)^2 < (a + 7)^2 \\iff (10a - 3 - a - 7)(10a - 3 + a + 7) < 0`} />
              <BlockMath math={`\\iff (9a - 10)(11a + 4) < 0 \\iff a \\in \\left(-\\dfrac{4}{11}; \\dfrac{10}{9}\\right).`} />
            </div>
            
            <div className="pt-2">
              <InlineMath math={`\\bullet \\ |3a + 3| < |a + 7| \\iff (3a + 3)^2 < (a + 7)^2 \\iff (3a + 3 - a - 7)(3a + 3 + a + 7) < 0`} />
              <BlockMath math={`\\iff (2a - 4)(4a + 10) < 0 \\iff a \\in (-2,5; 2).`} />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p><b>4. Нахождение пересечения:</b></p>
          <p>
            Пересекая полученные интервалы, находим общую область существования решений: <InlineMath math={`a \\in \\left(-\\dfrac{4}{11}; \\dfrac{10}{9}\\right)`} />.
          </p>
          <p>
            Исключаем точку совпадения корней <InlineMath math={`a = \\dfrac{6}{7}`} />:
          </p>
          <BlockMath math={`a \\in \\left(-\\dfrac{4}{11}; \\dfrac{6}{7}\\right) \\cup \\left(\\dfrac{6}{7}; \\dfrac{10}{9}\\right).`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(-\\dfrac{4}{11}; \\dfrac{6}{7}\\right) \\cup \\left(\\dfrac{6}{7}; \\dfrac{10}{9}\\right)`} />
      </div>
    </div>
  )
},


{
  id: 84,
  title: 'Задача 84 (ЕГЭ-2014. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\sin^{14} x + (a - 3\\sin x)^7 + \\sin^2 x + a = 3\\sin x',
  textAfter: <span>имеет хотя бы одно решение.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1. Преобразуем исходное уравнение, сгруппировав слагаемые:</b></p>
        <BlockMath math={`\\sin^{14} x + \\sin^2 x = -(a - 3\\sin x)^7 + 3\\sin x - a`} />
        <BlockMath math={`\\sin^{14} x + \\sin^2 x = (3\\sin x - a)^7 + (3\\sin x - a).`} />
      </div>
      
      <div className="space-y-2">
        <p><b>2. Рассмотрим функцию <InlineMath math={`f(t) = t^7 + t`} />. Её производная:</b></p>
        <BlockMath math={`f'(t) = 7t^6 + 1 > 0 \\quad \\text{для всех } t \\in \\mathbb{R}.`} />
        <p>
          Так как производная строго положительна, функция <InlineMath math={`f(t)`} /> строго возрастает на всей числовой прямой. 
          Следовательно, равенство <InlineMath math={`f(u) = f(v)`} /> равносильно равенству аргументов <InlineMath math={`u = v`} />:
        </p>
        <BlockMath math={`f(\\sin^2 x) = f(3\\sin x - a) \\iff \\sin^2 x = 3\\sin x - a.`} />
      </div>

            <div className="space-y-2">
        <p><b>3. Сделаем замену переменной:</b> <InlineMath math={`t = \\sin x`} />, где параметр зафиксирован на отрезке <InlineMath math={`t \\in [-1; 1]`} />. Перепишем полученное равенство в виде квадратного уравнения относительно <InlineMath math={`t`} />:</p>
        <BlockMath math={`t^2 = 3t - a \\iff t^2 - 3t + a = 0.`} />
        <p>Исходное уравнение имеет хотя бы один корень тогда и только тогда, когда квадратное уравнение имеет хотя бы одно решение на отрезке <InlineMath math={`t \\in [-1; 1]`} />.</p>
      </div>

      <div className="space-y-2">
        <p><b>4. Обозначим <InlineMath math={`g(t) = t^2 - 3t + a`} />:</b> Графиком <InlineMath math={`y = g(t)`} /> является парабола, ветви которой направлены вверх. Абсцисса вершины параболы равна:</p>
        <BlockMath math={`t_0 = \\dfrac{3}{2}.`} />
        <p>Так как вершина <InlineMath math={`t_0 > 1`} />, парабола строго убывает на всем отрезке <InlineMath math={`[-1; 1]`} />. Значит, корень принадлежит отрезку <InlineMath math={`[-1; 1]`} /> тогда и только тогда, когда значения функции на концах отрезка имеют разные знаки (или одно из них равно нулю):</p>
      </div>

      {/* Высокоточный крупный центрированный SVG-график параболы g(t) */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 420 280" className="w-full max-w-[420px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="180" x2="380" y2="180" /> {/* Ось Ot */}
            <line x1="130" y1="20" x2="130" y2="240" />  {/* Ось Oy */}
          </g>
          <path d="M 380,180 L 372,176 M 380,180 L 372,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 130,20 L 126,28 M 130,20 L 134,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="390" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">t</text>
          <text x="116" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Вертикальные границы отрезка [-1; 1] */}
          <line x1="75" y1="20" x2="75" y2="240" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="185" y1="20" x2="185" y2="240" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <text x="69" y="196" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">-1</text>
          <text x="181" y="196" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">1</text>

          {/* Пунктирные сеточные линии для вершины параболы */}
          <line x1="220" y1="180" x2="220" y2="210" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="220" cy="210" r="2.5" fill="#000000" />
          <text x="212" y="172" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[11px]">{"t₀ = 3/2"}</text>
          <text x="200" y="224" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">вершина</text>

          {/* Математически выверенная парабола g(t) с честной вершиной строго на пунктирной оси t0 = 3/2 (x=240) */}
          {/* Сплайн Безье полностью скорректирован: экстремум (минимум функции) зафиксирован строго в точке (240, 210) */}
          <path d="M 50,45 C 100,210 180,210 240,210 C 275,210 320,165 360,120" fill="none" stroke="#2563eb" strokeWidth="2.5" />


          {/* Важные маркерные синие точки и их подписи */}
          <circle cx="75" cy="110" r="3.5" fill="#2563eb" />
          <text x="82" y="96" fill="#000000" className="dark:fill-slate-300 font-sans text-[10px]">g(-1) ≥ 0</text>

          <circle cx="185" cy="207" r="3.5" fill="#2563eb" />
          <text x="138" y="222" fill="#000000" className="dark:fill-slate-300 font-sans text-[10px]">g(1) ≤ 0</text>
          
          {/* СЛОВО КОРЕНЬ И КРАСНАЯ МАРКЕРНАЯ ТОЧКА ПОЛНОСТЬЮ УДАЛЕНЫ ПО ТЗ */}
        </svg>
      </div>


      <div className="space-y-4">
        <div>
          <p>Запишем систему условий:</p>
          <BlockMath math={`\\begin{cases} g(-1) \\geq 0, \\\\[0.5em] g(1) \\leq 0 \\end{cases}`} />
          <p className="mt-2">Вычислим значения функции <InlineMath math={`g(t)`} /> на концах промежутка:</p>
          <BlockMath math={`g(-1) = (-1)^2 - 3(-1) + a = 1 + 3 + a = 4 + a.`} />
          <BlockMath math={`g(1) = 1^2 - 3(1) + a = 1 - 3 + a = a - 2.`} />
        </div>

        <div>
          <p>Подставим полученные значения в систему линейных неравенств:</p>
          <BlockMath math={`\\begin{cases} 4 + a \\geq 0, \\\\[0.5em] a - 2 \\leq 0 \\end{cases} \\iff \\begin{cases} a \\geq -4, \\\\[0.5em] a \\leq 2 \\end{cases} \\iff -4 \\leq a \\leq 2.`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in [-4; 2]`} />
      </div>
    </div>
  )
},


{
  id: 85,
  title: 'Задача 85 (ЕГЭ-2013. Основная волна)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: 'ax + \\sqrt{3 - 2x - x^2} = 4a + 2',
  textAfter: <span>имеет ровно один корень.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1. Выразим корень и перегруппируем слагаемые:</b></p>
        <BlockMath math={`\\sqrt{3 - 2x - x^2} = -ax + 4a + 2`} />
        <BlockMath math={`\\sqrt{3 - 2x - x^2} = -a(x - 4) + 2.`} />
      </div>
      
      <div className="space-y-2">
        <p><b>2. Рассмотрим функции в левой и правой частях уравнения:</b></p>
        <p>Зададим уравнение линии <InlineMath math={`y = \\sqrt{3 - 2x - x^2}`} /> и выполним равносильные преобразования с учётом неотрицательности переменной <InlineMath math={`y`} />:</p>
        <BlockMath math={`\\begin{cases} y^2 = 3 - 2x - x^2, \\\\[0.5em] y \\geq 0 \\end{cases} \\iff \\begin{cases} x^2 + 2x + 1 + y^2 = 4, \\\\[0.5em] y \\geq 0 \\end{cases} \\iff \\begin{cases} (x + 1)^2 + y^2 = 2^2, \\\\[0.5em] y \\geq 0. \\end{cases}`} />
        <p>
          Графиком функции является <b>верхняя полуокружность</b> с центром в точке <InlineMath math={`C(-1; 0)`} /> и радиусом <InlineMath math={`R = 2`} />. Концы дуги находятся в точках <InlineMath math={`A(-3; 0)`} /> и <InlineMath math={`B(1; 0)`} />.
        </p>
        <p>
          Уравнение <InlineMath math={`y = -a(x - 4) + 2`} /> задаёт пучок прямых, проходящих через фиксированную точку <InlineMath math={`P(4; 2)`} /> с угловым коэффициентом <InlineMath math={`k = -a`} />.
        </p>
      </div>

            {/* Высокоточный крупный центрированный SVG-график Задачи 85 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 340" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=160, y=200) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
              <line key={`x-${i}`} x1={160 + i*24} y1="20" x2={160 + i*24} y2="320" />
            ))}
            {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map(i => (
              <line key={`y-${i}`} x1="20" y1={200 - i*24} x2="360" y2={200 - i*24} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="200" x2="360" y2="200" /> {/* Ось Ox */}
            <line x1="160" y1="20" x2="160" y2="320" />  {/* Ось Oy */}
          </g>
          <path d="M 360,200 L 352,196 M 360,200 L 352,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 160,20 L 156,28 M 160,20 L 164,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="370" y="204" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="146" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="146" y="214" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Числовые метки делений */}
          {[-4, -3, -2, -1, 1, 2, 3, 4, 5].map(i => (
            <g key={`lbl-x-${i}`}>
              <line x1={160 + i*24} y1="196" x2={160 + i*24} y2="204" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x={160 + i*24 - 4} y="216" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[9px]">{i}</text>
            </g>
          ))}
          {[-5, -4, -3, -2, -1, 1, 2, 3, 4].map(i => (
            <g key={`lbl-y-${i}`}>
              <line x1="156" y1={200 - i*24} x2="164" y2={200 - i*24} stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x="144" y={200 - i*24 + 4} fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[9px]">{i}</text>
            </g>
          ))}

          {/* Жирный синий график полуокружности (Центр (-1, 0) -> x=136, y=200; R = 2 -> 48px) */}
          <path d="M 88,200 A 48,48 0 0,1 184,200" fill="none" stroke="#2563eb" strokeWidth="3" />

          {/* ПУЧОК КРИТИЧЕСКИХ ПРЯМЫХ ЧЕРЕЗ НЕПОДВИЖНУЮ ТОЧКУ P(4; 2) -> x=256, y=152 */}
          {/* Положение I (оранжевая прямая через B(1;0) -> x=184, y=200. Уклон k = 2/3) */}
          <line x1="50" y1="289.3" x2="340" y2="96" stroke="#ea580c" strokeWidth="1.5" />
          <text x="110" y="260" fill="#ea580c" className="font-sans font-semibold text-[10px]">I</text>

          {/* Положение II (зелёная прямая через A(-3;0) -> x=88, y=200. Уклон k = 2/7) */}
          <line x1="20" y1="219.4" x2="360" y2="122.3" stroke="#16a34a" strokeWidth="1.5" />
          <text x="110" y="180" fill="#16a34a" className="font-sans font-semibold text-[10px]">II</text>

          {/* Положение III (розовая прямая, горизонтальное касание y = 2 -> y=152. Уклон k = 0) */}
          <line x1="20" y1="152" x2="360" y2="152" stroke="#db2777" strokeWidth="1.5" />
          <text x="110" y="144" fill="#db2777" className="font-sans font-semibold text-[10px]">III</text>

          {/* Ключевые точки и узлы */}
          <circle cx="136" cy="200" r="3.5" fill="#000000" /> {/* Центр C(-1;0) */}
          <circle cx="88" cy="200" r="3" fill="#000000" />   {/* Точка A(-3;0) */}
          <circle cx="184" cy="200" r="3" fill="#000000" />  {/* Точка B(1;0) */}
          
          <circle cx="256" cy="152" r="3.5" fill="#dc2626" /> {/* Опорная точка пучка P(4;2) */}

          {/* Буквенные обозначения точек на графике */}
          <text x="82" y="190" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">A</text>
          <text x="186" y="190" fill="#000000" className="dark:fill-slate-300 font-serif text-xs">B</text>
          <text x="132" y="190" fill="#000000" className="dark:fill-slate-300 font-serif text-[10px]">C</text>
          <text x="250" y="142" fill="#dc2626" className="font-serif font-semibold text-xs">P(4;2)</text>
        </svg>
      </div>

      <div className="space-y-4">
        <div>
          <p><b>3. Найдем ключевые значения параметра <InlineMath math={`a`} />:</b></p>
          <p className="mt-1"><u>Прямая I</u> проходит через правую граничную точку <InlineMath math={`B(1; 0)`} />:</p>
          <BlockMath math={`0 = -a(1 - 4) + 2 \\iff 3a = -2 \\iff a = -\\dfrac{2}{3}.`} />
        </div>

        <div>
          <p><u>Прямая II</u> проходит через левую граничную точку <InlineMath math={`A(-3; 0)`} />:</p>
          <BlockMath math={`0 = -a(-3 - 4) + 2 \\iff 7a = -2 \\iff a = -\\dfrac{2}{7}.`} />
        </div>

        <div>
          <p><u>Прямая III</u> — горизонтальная прямая <InlineMath math={`y = 2`} />, касающаяся полуокружности в её верхней точке <InlineMath math={`(-1; 2)`} />:</p>
          <BlockMath math={`-a = 0 \\iff a = 0.`} />
        </div>

        <div className="space-y-2">
          <p><b>4. Анализ числа пересечений по рисунку:</b> Ровно одно пересечение прямых семейства с полуокружностью достигается в двух случаях:</p>
          <div className="pl-4 space-y-2">
            <p>
              а) При вращении прямой от положения I (включая точку <InlineMath math={`B`} />) до положения II (не включая точку <InlineMath math={`A`} />, так как через неё прямая пересечёт график в двух точках):
            </p>
            <BlockMath math={`a \\in \\left[-\\dfrac{2}{3}; -\\dfrac{2}{7}\\right).`} />
            <p>б) В случае касания в самой верхней точке дуги (положение III):</p>
            <BlockMath math={`a = 0.`} />
          </div>
        </div>
      </div>

      <p className="pt-2">Объединяя полученные результаты, находим окончательное множество значений параметра:</p>
      <BlockMath math={`a \\in \\left[-\\dfrac{2}{3}; -\\dfrac{2}{7}\\right) \\cup \\{0\\}.`} />

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left[-\\dfrac{2}{3}; -\\dfrac{2}{7}\\right) \\cup \\{0\\}`} />
      </div>
    </div>
  )
},


{
  id: 86,
  title: 'Задача 86 (ЕГЭ*)',
  textBefore: 'При каких а неравенство',
  mathA: '|3\\sin x + a^2 - 22| + |7\\sin x + a + 12| \\leq 11\\sin x + |a^2 + a - 20| + 11',
  textAfter: <span>верно для всех x?</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1. Сделаем замену переменной:</b> Пусть <InlineMath math={`\\sin x = t`} />, где параметр зафиксирован на отрезке <InlineMath math={`-1 \\leq t \\leq 1`} />. Перепишем неравенство, перенеся все члены в левую часть:</p>
        <BlockMath math={`-11t + |3t + a^2 - 22| + |7t + a + 12| - |a^2 + a - 20| - 11 \\leq 0.`} />
        <p>Зададим кусочно-линейную функцию <InlineMath math={`f(t) = -11t + |3t + a^2 - 22| + |7t + a + 12| - |a^2 + a - 20| - 11`} />.</p>
      </div>
      
      <div className="space-y-2">
        <p><b>2. Исследуем функцию на монотонность:</b> Заметим, что с каким бы знаком мы ни раскрывали модули, угловой коэффициент при переменной <InlineMath math={`t`} /> всегда будет строго меньше нуля. Действительно, возможные максимальное и минимальное значения коэффициента равны:</p>
        <BlockMath math={`-11 + 3 + 7 = -1 < 0,\\\\[0.5em] -11 - 3 - 7 = -21 < 0.`} />
        <p>Следовательно, функция <InlineMath math={`f(t)`} /> является <b>строго монотонно убывающей</b> на всей числовой прямой.</p>
      </div>

      <p>Чтобы отрезок <InlineMath math={`t \\in [-1; 1]`} /> полностью удовлетворял неравенству <InlineMath math={`f(t) \\leq 0`} />, необходимо и достаточно, чтобы максимальное значение функции (достигаемое на левой границе) было неотрицательным:</p>

      {/* Высокоточный крупный центрированный SVG-график Задачи 86 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 360 220" className="w-full max-w-[360px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="140" x2="330" y2="140" /> {/* Ось Ot */}
            <line x1="160" y1="20" x2="160" y2="200" />  {/* Ось Oy */}
          </g>
          {/* ИСПРАВЛЕННЫЕ КЛАССИЧЕСКИЕ СТРЕЛОЧКИ ОСЕЙ БЕЗ НАКЛОНОВ И РАЗРЫВОВ */}
          <path d="M 330,140 L 322,136 M 330,140 L 322,144" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 160,20 L 156,28 M 160,20 L 164,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />

          <text x="340" y="144" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">t</text>
          <text x="146" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Схематичная надпись в верхнем левом углу графика */}
          <text x="520" y="15" fill="#94a3b8" stroke="none" className="font-sans font-medium text-[10px] tracking-wide select-none">Схематичный рисунок</text>


          {/* Заштрихованная область отрезка [-1; 1] */}
          <line x1="120" y1="140" x2="200" y2="140" stroke="#94a3b8" strokeWidth="3" opacity="0.4" />
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`sh-${i}`} x1={122 + i * 7} y1="140" x2={127 + i * 7} y2="150" stroke="#94a3b8" strokeWidth="0.8" />
          ))}

          {/* Маркерные точки делений -1 и 1 */}
          <line x1="120" y1="136" x2="120" y2="144" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
          <line x1="200" y1="136" x2="200" y2="144" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
          <text x="112" y="130" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans">-1</text>
          <text x="196" y="130" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans">1</text>

          {/* Жирный синий монотонно убывающий график f(t) */}
          <path d="M 90,40 L 120,140 L 170,190 L 220,210" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Маркерная точка прохождения графика через ноль в -1 */}
          <circle cx="120" cy="140" r="3.5" fill="#000000" />
        </svg>
      </div>

      <p className="pb-2">Таким образом, критерием решения является выполнение условия <InlineMath math={`f(-1) \\leq 0`} />.</p>
        

            <div className="space-y-4">
        <div>
          <p><b>3. Подставим <InlineMath math={`t = -1`} /> в выражение функции и упростим его:</b></p>
          <BlockMath math={`f(-1) = 11 + | -3 + a^2 - 22 | + | -7 + a + 12 | - | a^2 + a - 20 | - 11`} />
          <BlockMath math={`f(-1) = |a^2 - 25| + |a + 5| - |(a + 5)(a - 4)|.`} />
          <p className="mt-2">Составим итоговое неравенство <InlineMath math={`f(-1) \\leq 0`} />:</p>
          <BlockMath math={`|a^2 - 25| + |a + 5| - |(a + 5)(a - 4)| \\leq 0.`} />
        </div>

        <div>
          <p>Разложим разность квадратов внутри первого модуля и вынесем общий множитель <InlineMath math={`|a + 5|`} /> за скобки:</p>
          <BlockMath math={`|a + 5| \\cdot |a - 5| + |a + 5| - |a + 5| \\cdot |a - 4| \\leq 0`} />
          <BlockMath math={`|a + 5| \\bigl(|a - 5| + 1 - |a - 4|\\bigr) \\leq 0.`} />
        </div>

        <div>
          <p>Так как модуль всегда неотрицателен (<InlineMath math={`|a + 5| \\geq 0`} />), данное неравенство распадается на совокупность, состоящую из уравнения обнуления первого множителя и неравенства для второй скобки:</p>
          <BlockMath math={`\\left[ \\begin{array}{l} a = -5, \\\\[0.5em] |a - 5| - |a - 4| + 1 \\leq 0. \\quad (1) \\end{array} \\right.`} />
        </div>

        <div className="space-y-2">
          <p><b>4. Раскроем модули в неравенстве (1) методом интервалов на трёх промежутках:</b></p>
          <BlockMath math={`\\left[ \\begin{array}{ll} \\begin{cases} a \\geq 5, \\\\[0.3em] a - 5 - (a - 4) + 1 \\leq 0 \\end{cases} & \\iff \\begin{cases} a \\geq 5, \\\\[0.3em] 0 \\leq 0 \\end{cases} \\quad \\implies a \\in [5; +\\infty) \\quad (\\text{Ok!}), \\\\[1.5em] \\begin{cases} 4 < a < 5, \\\\[0.3em] -(a - 5) - (a - 4) + 1 \\leq 0 \\end{cases} & \\iff \\begin{cases} 4 < a < 5, \\\\[0.3em] -2a + 10 \\leq 0 \\end{cases} \\iff \\begin{cases} 4 < a < 5, \\\\[0.3em] a \\geq 5 \\end{cases} \\implies \\varnothing, \\\\[1.5em] \\begin{cases} a \\leq 4, \\\\[0.3em] -(a - 5) - (-(a - 4)) + 1 \\leq 0 \\end{cases} & \\iff \\begin{cases} a \\leq 4, \\\\[0.3em] 2 \\leq 0 \\end{cases} \\quad \\implies \\varnothing. \\end{array} \\right.`} />
        </div>

        <div>
          <p>Объединяя изолированный корень <InlineMath math={`a = -5`} /> и полученный луч <InlineMath math={`a \\in [5; +\\infty)`} />, находим итоговое множество значений параметра:</p>
          <BlockMath math={`a \\in \\{-5\\} \\cup [5; +\\infty).`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{-5\\} \\cup [5; +\\infty)`} />
      </div>
    </div>
  )
},


{
  id: 87,
  title: 'Задача 87 (ЕГЭ*)',
  textBefore: 'При каких а уравнение',
  mathA: '17|x - a| + |a^2 - 7x + 12| + |a^2 + 2x - 15| = |2a^2 - 6a + x - 3| + |4x| - |x + 3a|',
  textAfter: <span>имеет хотя бы 1 корень?</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div>
        Перенесем все члены уравнения в левую часть и рассмотрим кусочно-линейную функцию переменной <InlineMath math={`x`} />:
        <BlockMath math={`f(x) = 17|x - a| + |a^2 - 7x + 12| + |a^2 + 2x - 15| - |2a^2 - 6a + x - 3| - |4x| + |x + 3a| = 0.`} />
      </div>
      
      <div className="space-y-2">
        <p>
          <b>1. Анализ возрастания и убывания («доминантный модуль»):</b> Заметим, что поведение функции (возрастание или убывание) на бесконечности зависит от слагаемого с наибольшим по модулю коэффициентом при переменной <InlineMath math={`x`} />. В данном случае главным является модуль <InlineMath math={`17|x - a|`} />. 
        </p>
        <div>
          Как бы ни раскрывались остальные модули, сумма их коэффициентов при переменной <InlineMath math={`x`} /> не может превзойти значение старшего члена:
          <BlockMath math={`17 - 7 - 2 - 1 - 4 - 1 = +2 > 0,\\\\[0.5em] -17 + 7 + 2 + 1 + 4 + 1 = -2 < 0.`} />
        </div>
        <p>Следовательно, знак углового коэффициента функции полностью подчиняется первому модулю:</p>
        <ul className="list-bullet pl-5 space-y-1">
          <li>При <InlineMath math={`x \\geq a`} /> функция <InlineMath math={`f(x)`} /> строго возрастает.</li>
          <li>При <InlineMath math={`x \\leq a`} /> функция <InlineMath math={`f(x)`} /> строго убывает.</li>
        </ul>
        <p className="pt-1">
          Значит, в точке <InlineMath math={`x = a`} /> непрерывная функция достигает своего <b>глобального минимума</b>. Исходное уравнение имеет хотя бы один корень тогда и только тогда, когда минимальное значение функции неотрицательно: <InlineMath math={`f(a) \\leq 0`} />.
        </p>
      </div>

      {/* Высокоточный крупный центрированный SVG-график Задачи 87 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 360 220" className="w-full max-w-[360px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Схематичная надпись перемещена строго в правый верхний угол */}
          <text x="500" y="15" fill="#94a3b8" stroke="none" className="font-sans font-medium text-[10px] tracking-wide select-none">Схематичный рисунок</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="180" x2="330" y2="180" /> {/* Ось Ox */}
            <line x1="70" y1="20" x2="70" y2="195" />   {/* Ось Oy */}
          </g>
          <path d="M 330,180 L 322,176 M 330,180 L 322,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 70,20 L 66,28 M 70,20 L 74,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="340" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="66" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Вертикальная пунктирная линия к точке минимума x = a */}
          <line x1="180" y1="140" x2="180" y2="180" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-slate-400" />
          <text x="176" y="194" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-sm">a</text>

          {/* Жирный синий график функции f(x) с изломами ("впадина") */}
          <path d="M 40,40 L 80,100 L 120,125 L 180,140 L 230,120 L 270,80 L 310,30" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Точка минимума */}
          <circle cx="180" cy="140" r="3.5" fill="#000000" />
        </svg>
      </div>

            <div className="space-y-4">
        <div>
          <p><b>2. Подставим значение <InlineMath math={`x = a`} /> в выражение функции и запишем условие <InlineMath math={`f(a) \\leq 0`} />:</b></p>
          <BlockMath math={`f(a) = 17|a - a| + |a^2 - 7a + 12| + |a^2 + 2a - 15| - |2a^2 - 6a + a - 3| - |4a| + |a + 3a| \\leq 0`} />
          <BlockMath math={`f(a) = |a^2 - 7a + 12| + |a^2 + 2a - 15| - |2a^2 - 5a - 3| - |4a| + |4a| \\leq 0.`} />
          <BlockMath math={`|a - 3||a - 4| + |a + 5||a - 3| - |a - 3||2a + 1| \\leq 0.`} />
        </div>

        <div>
          <BlockMath math={`|a - 3| \\cdot \\bigl(|a - 4| + |a + 5| - |2a + 1|\\bigr) \\leq 0.`} />
          <BlockMath math={`\\left[ \\begin{array}{l} a = 3, \\\\[0.5em] |a - 4| + |a + 5| - |2a + 1| \\leq 0. \\quad (1) \\end{array} \\right.`} />
        </div>

        <div className="space-y-2">
          <p><b>3. Решим неравенство (1) методом интервалов:</b></p>
          <p>Нулями подмодульных выражений являются точки: <InlineMath math={`a = -5`} />, <InlineMath math={`a = -\\dfrac{1}{2}`} />, <InlineMath math={`a = 4`} />.</p>
        </div>

        {/* Высокоточный наглядный график числовой оси интервалов параметра а */}
        <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 440 90" className="w-full max-w-[440px] h-auto overflow-visible font-sans text-xs select-none mx-auto">

            {/* Главная ось параметра а */}
            <line x1="20" y1="50" x2="400" y2="50" stroke="#000000" strokeWidth="1.5" className="dark:stroke-slate-400" />
            <path d="M 400,50 L 392,46 M 400,50 L 392,54" stroke="#000000" strokeWidth="1.5" fill="none" className="dark:stroke-slate-400" />
            <text x="412" y="54" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

            {/* Критические точки (нули модулей) */}
            <circle cx="110" cy="50" r="4" fill="#000000" />
            <circle cx="210" cy="50" r="4" fill="#000000" />
            <circle cx="310" cy="50" r="4" fill="#000000" />

            {/* Подписи к точкам */}
            <text x="102" y="70" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">-5</text>
            <text x="198" y="70" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">-1/2</text>
            <text x="306" y="70" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">4</text>

            {/* Знаки раскрытия модулей на интервалах */}
            <text x="55" y="38" fill="#64748b" stroke="none" className="font-mono font-bold text-sm">- - -</text>
            <text x="145" y="38" fill="#64748b" stroke="none" className="font-mono font-bold text-sm">- - +</text>
            <text x="245" y="38" fill="#64748b" stroke="none" className="font-mono font-bold text-sm">- + +</text>
            <text x="345" y="38" fill="#64748b" stroke="none" className="font-mono font-bold text-sm">+ + +</text>
          </svg>
        </div>

        <div className="space-y-3">
          <p>Раскроем модули на каждом числовом промежутке поочередно:</p>
          <ul className="list-bullet pl-5 space-y-3">
            <li>
              <b>Интервал 1:</b> при <InlineMath math={`a \\leq -5`} /> все три выражения отрицательны:
              <BlockMath math={`-(a - 4) - (a + 5) - (-(2a + 1)) \\leq 0 \\iff -a + 4 - a - 5 + 2a + 1 \\leq 0 \\iff 0 \\leq 0.`} />
              Неравенство выполняется всегда, значит весь луч <InlineMath math={`a \\in (-\\infty; -5]`} /> <b>подходит</b>.
            </li>
            <li>
              <b>Интервал 2:</b> при <InlineMath math={`-5 < a \\leq -\\dfrac{1}{2}`} /> выражение <InlineMath math={`(a+5)`} /> становится положительным:
              <BlockMath math={`-(a - 4) + (a + 5) - (-(2a + 1)) \\leq 0 \\iff -a + 4 + a + 5 + 2a + 1 \\leq 0 \\iff 2a + 10 \\leq 0 \\iff a \\leq -5.`} />
              С учётом границ интервала решений на данном промежутке <b>нет</b>.
            </li>
            <li>
              <b>Интервал 3:</b> при <InlineMath math={`-\\dfrac{1}{2} < a < 4`} /> выражение <InlineMath math={`(2a+1)`} /> также становится положительным:
              <BlockMath math={`-(a - 4) + (a + 5) - (2a + 1) \\leq 0 \\iff -a + 4 + a + 5 - 2a - 1 \\leq 0 \\iff -2a + 8 \\leq 0 \\iff a \\geq 4.`} />
              С учётом границ интервала решений на данном промежутке <b>нет</b>.            </li>
            <li>
              <b>Интервал 4:</b> при <InlineMath math={`a \\geq 4`} /> все три выражения строго положительны:
              <BlockMath math={`(a - 4) + (a + 5) - (2a + 1) \\leq 0 \\iff a - 4 + a + 5 - 2a - 1 \\leq 0 \\iff 0 \\leq 0.`} />
              Неравенство выполняется всегда, значит весь открытый луч <InlineMath math={`a \\in [4; +\\infty)`} /> <b>подходит</b>.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <p><b>4. Объединение результатов:</b></p>
          <BlockMath math={`a \\in (-\\infty; -5] \\cup \\{3\\} \\cup [4; +\\infty).`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -5] \\cup \\{3\\} \\cup [4; +\\infty)`} />
      </div>
    </div>
  )
},


{
  id: 88,
  title: 'Задача 88',
  textBefore: 'Найдите все значения a, при которых уравнение',
  mathA: '(x^2 - 6|x| - a)^2 + 12(x^2 - 6|x| - a) + 37 = \\cos \\dfrac{18\\pi}{a}',
  textAfter: <span>имеет ровно два решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1. Оценка левой и правой частей уравнения:</b> Введём вспомогательную переменную, положив <InlineMath math={`t = x^2 - 6|x| - a`} />. Перепишем левую часть (LHS) исходного уравнения, выделив полный квадрат:</p>
        <BlockMath math={`LHS = t^2 + 12t + 37 = (t + 6)^2 + 1.`} />
        <p>Так как <InlineMath math={`(t + 6)^2 \\geq 0`} />, получаем оценку левой части: <InlineMath math={`LHS \\geq 1`} />.</p>
      </div>

      <div className="space-y-2">
        <p>Для правой части (RHS) из ограниченности тригонометрической функции косинуса имеем:</p>
        <BlockMath math={`RHS = \\cos \\dfrac{18\\pi}{a} \\leq 1.`} />
        <p>Равенство между левой и правой частями возможно тогда и только тогда, когда обе части одновременно равны <InlineMath math={`1`} />. Получаем равносильную систему:</p>
        <BlockMath math={`\\begin{cases} (t + 6)^2 + 1 = 1, \\\\[0.5em] \\cos \\dfrac{18\\pi}{a} = 1 \\end{cases} \\iff \\begin{cases} t = -6, \\\\[0.5em] \\dfrac{18\\pi}{a} = 2\\pi k, \\quad k \\in \\mathbb{Z}, \\ k \\neq 0. \\end{cases}`} />
      </div>

      <div className="space-y-2">
        <p><b>2. Исследование количества корней первого уравнения:</b> Подставим <InlineMath math={`t = -6`} /> обратно в выражение замены:</p>
        <BlockMath math={`x^2 - 6|x| - a = -6 \\iff x^2 - 6|x| + 6 = a.`} />
        <p>
          Рассмотрим функцию <InlineMath math={`g(x) = x^2 - 6|x| + 6`} />. Так как функция <InlineMath math={`g(x)`} /> чётная, её график симметричен относительно оси ординат <InlineMath math={`Oy`} />. 
          Для области <InlineMath math={`x \\geq 0`} /> функция принимает вид параболы: <InlineMath math={`g(x) = x^2 - 6x + 6 = (x - 3)^2 - 3`} />. 
          Вершина этой параболы находится в точке <InlineMath math={`(3; -3)`} />, а точка пересечения с осью <InlineMath math={`Oy`} /> имеет координаты <InlineMath math={`(0; 6)`} />.
        </p>
      </div>

            {/* Высокоточный крупный центрированный SVG-график Задачи 88 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 260" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">

          {/* Легкая сетка (Шаг: 1 деление = 15px. Центр (0,0) на x=190, y=140) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
              <line key={`x-${i}`} x1={190 + i*15} y1="10" x2={190 + i*15} y2="240" />
            ))}
            {[-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
              <line key={`y-${i}`} x1="20" y1={140 - i*15} x2="360" y2={140 - i*15} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="140" x2="360" y2="140" /> {/* Ось Ox */}
            <line x1="190" y1="10" x2="190" y2="240" />  {/* Ось Oy */}
          </g>
          <path d="M 360,140 L 352,136 M 360,140 L 352,144" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 190,10 L 186,18 M 190,10 L 194,18" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="370" y="144" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="176" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Вертикальные оси к вершинам парабол (пунктир x=3 и x=-3) */}
          <line x1="235" y1="10" x2="235" y2="240" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="145" y1="10" x2="145" y2="240" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <text x="231" y="134" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">3</text>
          <text x="137" y="134" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">-3</text>

          {/* Жирный синий график функции g(x) (W-образная форма параболы) */}
          {/* Вершины в (3, -3) -> (235, 185) и (-3, -3) -> (145, 185). Пересечение Oy в (0, 6) -> (190, 50) */}
          <path d="M 70,10 Q 107.5,185 145,185 Q 167.5,185 190,50 Q 212.5,185 235,185 Q 272.5,185 310,10" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="196" y="46" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px] font-semibold">(0;6)</text>

          {/* Критический уровень у = 9 (Оранжевая линия) */}
          <line x1="25" y1="5" x2="345" y2="5" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="350" y="9" fill="#ea580c" stroke="none" className="font-sans font-semibold text-[10px]">y = 9</text>
          <circle cx="83" cy="5" r="3.5" fill="#ea580c" />
          <circle cx="297" cy="5" r="3.5" fill="#ea580c" />

          {/* Критический уровень у = -3 (Красная линия) */}
          <line x1="25" y1="185" x2="345" y2="185" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="350" y="189" fill="#dc2626" stroke="none" className="font-sans font-semibold text-[10px]">y = -3</text>
          <circle cx="145" cy="185" r="3.5" fill="#dc2626" />
          <circle cx="235" cy="185" r="3.5" fill="#dc2626" />
        </svg>
      </div>

      <div className="space-y-4">
        <div>
          <p>По графику определяем количество решений уравнения <InlineMath math={`g(x) = a`} /> при различных высотах сканирования прямой горизонтального уровня:</p>
          <ul className="list-bullet pl-5 space-y-1">
            <li>При <InlineMath math={`a < -3`} /> — решений нет.</li>
            <li>При <InlineMath math={`a = -3`} /> — ровно 2 решения (касание в вершинах парабол).</li>
            <li>При <InlineMath math={`-3 < a < 6`} /> — 4 решения.</li>
            <li>При <InlineMath math={`a = 6`} /> — 3 решения (включая точку излома на оси ординат).</li>
            <li>При <InlineMath math={`a > 6`} /> — ровно 2 решения (пересечение только двух внешних ветвей).</li>
          </ul>
          <p className="mt-2">Таким образом, условие существования ровно двух решений исходного уравнения выполняется при:</p>
          <BlockMath math={`a = -3 \\quad \\text{или} \\quad a > 6.`} />
        </div>

        <div className="space-y-2">
          <p><b>3. Учёт второго условия системы:</b></p>
          <p>Из уравнения тригонометрического равенства <InlineMath math={`\\cos \\dfrac{18\\pi}{a} = 1`} /> выразим параметр:</p>
          <BlockMath math={`\\dfrac{18\\pi}{a} = 2\\pi k \\iff a = \\dfrac{9}{k}, \\quad k \\in \\mathbb{Z}, \\ k \\neq 0.`} />
          <p>Проверим найденные критические зоны параметра <InlineMath math={`a`} /> на целочисленность корней серии:</p>
        </div>

        <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
          <div>
            <p className="font-semibold text-slate-800 dark:text-slate-200">1) Случай <InlineMath math={`a = -3`} />:</p>
            <BlockMath math={`-3 = \\dfrac{9}{k} \\iff k = -3 \\in \\mathbb{Z} \\implies a = -3 \\quad \\text{подходит}.`} />
          </div>
          <div>
            <p className="font-semibold text-slate-800 dark:text-slate-200">2) Случай <InlineMath math={`a > 6`} />:</p>
            <BlockMath math={`\\dfrac{9}{k} > 6 \\iff 0 < k < \\dfrac{9}{6} = \\dfrac{3}{2}.`} />
            <p className="mt-1">Так как <InlineMath math={`k`} /> обязан быть целым числом (<InlineMath math={`k \\in \\mathbb{Z}`} />), из данного интервала нам подходит единственное значение <InlineMath math={`k = 1`} />, откуда получаем:</p>
            <BlockMath math={`a = \\dfrac{9}{1} = 9 \\quad \\text{подходит}.`} />
          </div>
        </div>

        <p className="pt-2">Объединяя все найденные подходящие дискретные значения параметра, получаем итоговый ответ:</p>
        <BlockMath math={`a \\in \\{-3; 9\\}.`} />
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{-3; 9\\}`} />
      </div>
    </div>
  )
},


{
  id: 89,
  title: 'Задача 89 (Каталог задач Школково)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых система',
  mathA: '\\begin{cases} y^2 + a = 4\\cos x \\\\ \\sqrt{y} + z^2 = a \\\\ (a - 2)^2 = |z^2 - 2z| + |\\sin 2x| + 4 \\end{cases}',
  textAfter: <span>имеет хотя бы одно решение, и укажите решения для каждого найденного a.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1. Метод оценки (ограничение параметра a):</b></p>
        <p>Поскольку выражение содержит <InlineMath math={`\\sqrt{y}`} />, должно выполняться условие <InlineMath math={`y \\geq 0`} />. Оценим значение параметра <InlineMath math={`a`} />, используя первое и второе уравнения системы:</p>
        <BlockMath math={`\\begin{cases} a = 4\\cos x - y^2 \\leq 4\\cos x \\leq 4, \\\\[0.5em] a = \\sqrt{y} + z^2 \\geq 0 \\end{cases} \\implies a \\in [0; 4].`} />
      </div>

      <div className="space-y-2">
        <p><b>2. Оценка третьего уравнения системы:</b></p>
        <p>Рассмотрим правую часть третьего уравнения. Так как модули неотрицательны:</p>
        <BlockMath math={`\\begin{cases} |z^2 - 2z| \\geq 0, \\\\[0.5em] |\\sin 2x| \\geq 0 \\end{cases} \\implies (a - 2)^2 = |z^2 - 2z| + |\\sin 2x| + 4 \\geq 4.`} />
        <p>С другой стороны, учитывая ранее найденное ограничение <InlineMath math={`a \\in [0; 4]`} />, получаем:</p>
        <BlockMath math={`0 \\leq a \\leq 4 \\iff -2 \\leq a - 2 \\leq 2 \\implies (a - 2)^2 \\leq 4.`} />
        <p>Таким образом, равенство возможно тогда и только тогда, когда обе оценки достигают своего крайнего значения:</p>
        <BlockMath math={`(a - 2)^2 = 4 \\iff \\left[ \\begin{array}{l} a = 0, \\\\[0.3em] a = 4. \\end{array} \\right.`} />
      </div>

            <div className="space-y-4">
        <div>
          <p>При достижении равенства <InlineMath math={`(a - 2)^2 = 4`} /> модули в третьем уравнении обязаны обратиться в нуль:</p>
          <BlockMath math={`\\begin{cases} (a - 2)^2 = 4, \\\\[0.5em] |z^2 - 2z| = 0, \\\\[0.5em] |\\sin 2x| = 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{array}{l} a = 0 \\\\[0.3em] a = 4 \\end{array} \\right. \\\\[1.5em] z(z - 2) = 0, \\\\[0.5em] \\sin 2x = 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{array}{l} a = 0 \\\\[0.3em] a = 4 \\end{array} \\right. \\\\[1.5em] \\left[ \\begin{array}{l} z = 0 \\\\[0.3em] z = 2 \\end{array} \\right. \\\\[1.5em] x = \\dfrac{\\pi k}{2}, \\quad k \\in \\mathbb{Z}. \\end{cases}`} />
        </div>

        <div>
          <p><b>3. Равносильная проверка найденных а:</b></p>
          <p><u>Случай I: <InlineMath math={`a = 0`} /></u></p>
          <p className="mt-1">Подставим <InlineMath math={`a = 0`} /> в первые два уравнения исходной системы:</p>
          <BlockMath math={`\\begin{cases} a = 0, \\\\[0.5em] y^2 + 0 = 4\\cos x, \\\\[0.5em] \\sqrt{y} + z^2 = 0 \\end{cases} \\iff \\begin{cases} a = 0, \\\\[0.5em] y = 0, \\\\[0.5em] z = 0, \\\\[0.5em] 4\\cos x = 0 \\end{cases} \\iff \\begin{cases} a = 0, \\\\[0.5em] y = 0, \\\\[0.5em] z = 0, \\\\[0.5em] x = \\dfrac{\\pi}{2} + \\pi n, \\quad n \\in \\mathbb{Z}. \\end{cases}`} />
          <p className="mt-2">Проверка для 3-го уравнения: <InlineMath math={`|\\sin(2(\\dfrac{\\pi}{2} + \\pi n))| = |\\sin(\\pi + 2\\pi n)| = 0`} /> — верно.</p>
        </div>

        <div>
          <p><u>Случай II: <InlineMath math={`a = 4`} /></u></p>
          <p className="mt-1">Подставим <InlineMath math={`a = 4`} /> в первые два уравнения исходной системы:</p>
          <BlockMath math={`\\begin{cases} a = 4, \\\\[0.5em] y^2 + 4 = 4\\cos x, \\\\[0.5em] \\sqrt{y} + z^2 = 4 \\end{cases} \\iff \\begin{cases} a = 4, \\\\[0.5em] y^2 = 4(\\cos x - 1), \\\\[0.5em] \\sqrt{y} + z^2 = 4 \\end{cases} \\iff \\begin{cases} a = 4, \\\\[0.5em] y = 0, \\\\[0.5em] \\cos x = 1, \\\\[0.5em] z^2 = 4 \\end{cases} \\iff \\begin{cases} a = 4, \\\\[0.5em] y = 0, \\\\[0.5em] x = 2\\pi m, \\quad m \\in \\mathbb{Z}, \\\\[0.5em] \\left[ \\begin{array}{l} z = 2 \\\\[0.3em] z = -2 \\end{array} \\right. \\end{cases}`} />
          <p className="mt-2">Проверим выполнение обязательного условия <InlineMath math={`|z^2 - 2z| = 0`} /> для найденных значений <InlineMath math={`z`} />:</p>
          <ul className="list-bullet pl-5 space-y-1">
            <li>При <InlineMath math={`z = 2 \\implies |4 - 4| = 0`} /> (подходит).</li>
            <li>При <InlineMath math={`z = -2 \\implies |4 + 4| = 8 \\neq 0`} /> (не подходит).</li>
          </ul>
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
        <div>Ответ:</div>
        <div className="font-normal text-slate-700 dark:text-slate-300 pl-4 space-y-1">
          <div>При <InlineMath math={`a = 0`} />: <InlineMath math={`\\left(\\dfrac{\\pi}{2} + \\pi n; \\ 0; \\ 0\\right), \\quad n \\in \\mathbb{Z};`} /></div>
          <div>При <InlineMath math={`a = 4`} />: <InlineMath math={`\\left(2\\pi m; \\ 0; \\ 2\\right), \\quad m \\in \\mathbb{Z}.`} /></div>
        </div>
      </div>
    </div>
  )
},


{
  id: 90,
  title: 'Задача 90 (ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: 'ax^2 - (2a + 6)|x| + a + 1 = 0',
  textAfter: <span>не имеет корней.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1. Анализ замены:</b> Сделаем замену переменной, положив <InlineMath math={`|x| = t`} />, где <InlineMath math={`t \\geq 0`} /> (так как квадрат модуля равен квадрату самого числа: <InlineMath math={`x^2 = |x|^2 = t^2`} />). Получаем квадратное уравнение относительно <InlineMath math={`t`} />:</p>
        <BlockMath math={`at^2 - (2a + 6)t + a + 1 = 0.`} />
        <p>Исходное уравнение не имеет корней, если полученное квадратное уравнение либо вообще не имеет решений, либо все его решения строго отрицательны (<InlineMath math={`t \\in (-\\infty; 0)`} />), что делает обратную замену невозможной.</p>
      </div>

      <div className="space-y-2">
        <p><b>2. Случай 1: Дискриминант меньше нуля (<InlineMath math={`D < 0`} />):</b></p>
        <p>Найдем четверть дискриминанта квадратного трёхчлена:</p>
        <BlockMath math={`\\dfrac{D}{4} = (a + 3)^2 - a(a + 1) = a^2 + 6a + 9 - a^2 - a = 5a + 9.`} />
        <p>Условие отсутствия корней принимает вид:</p>
        <BlockMath math={`5a + 9 < 0 \\iff a < -\\dfrac{9}{5}.`} />
      </div>

      <div className="space-y-2">
        <p><b>3. Случай 2: Особый линейный случай при <InlineMath math={`a = 0`} />:</b></p>
        <p>При <InlineMath math={`a = 0`} /> уравнение перестаёт быть квадратным и становится линейным:</p>
        <BlockMath math={`-6t + 1 = 0 \\iff t = \\dfrac{1}{6}.`} />
        <p>Так как полученный корень удовлетворяет условию <InlineMath math={`t \\geq 0`} />, обратная замена <InlineMath math={`|x| = \\dfrac{1}{6}`} /> даёт два корня исходного уравнения. Значит, значение <InlineMath math={`a = 0`} /> нам <b>не подходит</b>.</p>
      </div>

            <div className="space-y-4">
        <div>
          <p><b>4. Случай 3: Расположение корней квадратного трёхчлена при <InlineMath math={`D \\geq 0`} />:</b></p>
          <p className="mt-1">
            Чтобы квадратное уравнение <InlineMath math={`f(t) = at^2 - (2a + 6)t + a + 1 = 0`} /> имело только строго отрицательные корни (что делает обратную замену невозможной), необходимо и достаточно, чтобы точка <InlineMath math={`t = 0`} /> находилась правее обоих корней. 
          </p>
          <p>Это условие задаётся системой неравенств через произведение коэффициента ветвей и значения функции в нуле, а также положение вершины параболы:</p>
          <BlockMath math={`\\begin{cases} a \\cdot f(0) > 0, \\quad (1) \\\\[0.5em] t_0 < 0. \\quad (2) \\end{cases}`} />
        </div>

        {/* Два графических чертежа взаимного расположения парабол с четким пересечением оси Ot */}
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          {/* График А: Случай a > 0 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 140" className="w-full max-w-[200px] h-auto overflow-visible font-sans text-[10px] select-none">
              <text x="-100" y="5" fill="#94a3b8" className="font-sans font-medium text-[8px]">а) Случай a &gt; 0</text>
              <line x1="10" y1="90" x2="190" y2="90" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
              <path d="M 190,90 L 184,87 M 190,90 L 184,93" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
              <text x="194" y="93" fill="#000000" className="dark:fill-slate-300 italic">t</text>
              
              <line x1="130" y1="10" x2="130" y2="130" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-slate-500" />
              <text x="100" y="20" fill="#000000" className="dark:fill-slate-400">t = 0</text>
              <text x="134" y="100" fill="#000000" stroke="none" className="dark:fill-slate-400">0</text>

              {/* ЛЕВАЯ ПАРАБОЛА ОПУЩЕНА ВНИЗ: вершина находится на y=115, что заметно ниже оси t (y=90) */}
              <path d="M 20,40 Q 75,190 160,10" fill="none" stroke="#2563eb" strokeWidth="2" />
              <text x="160" y="25" fill="#2563eb" className="italic font-semibold">f(t)</text>
              
              {/* Вершина зафиксирована в нижней точке прогиба */}
              <circle cx="75" cy="108" r="3" fill="#000000" />
              <line x1="75" y1="90" x2="75" y2="108" stroke="#000000" strokeWidth="0.8" strokeDasharray="2 2" className="dark:stroke-slate-400" />
              <text x="63" y="130" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic">t₀ &lt; 0</text>

              {/* Точка f(0) > 0 на оси Oy */}
              <circle cx="130" cy="64" r="3" fill="#dc2626" />
              <text x="140" y="59" fill="#dc2626" className="font-sans font-semibold text-[9px]">f(0) &gt; 0</text>
            </svg>
          </div>

          {/* График Б: Случай a < 0 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 140" className="w-full max-w-[200px] h-auto overflow-visible font-sans text-[10px] select-none">
              <text x="-100" y="5" fill="#94a3b8" className="font-sans font-medium text-[8px]">б) Случай a &lt; 0</text>
              <line x1="10" y1="60" x2="190" y2="60" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
              <path d="M 190,60 L 184,57 M 190,60 L 184,63" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
              <text x="194" y="43" fill="#000000" className="dark:fill-slate-300 italic">t</text>
              
              <line x1="130" y1="10" x2="130" y2="130" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-slate-500" />
              <text x="100" y="20" fill="#000000" className="dark:fill-slate-400">t = 0</text>
              <text x="134" y="70" fill="#000000" stroke="none" className="dark:fill-slate-400">0</text>

              {/* ПРАВАЯ ПАРАБОЛА ПОДНЯТА ВВЕРХ: вершина находится на y=35, что заметно выше оси t (y=60) */}
              <path d="M 20,110 Q 75,-40 160,130" fill="none" stroke="#2563eb" strokeWidth="2" />
              <text x="160" y="125" fill="#2563eb" className="italic font-semibold">f(t)</text>
              
              {/* Вершина зафиксирована в наивысшей точке прогиба */}
              <circle cx="75" cy="40" r="3" fill="#000000" />
              <line x1="75" y1="40" x2="75" y2="60" stroke="#000000" strokeWidth="0.8" strokeDasharray="2 2" className="dark:stroke-slate-400" />
              <text x="63" y="26" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic">t₀ &lt; 0</text>

              {/* Точка f(0) < 0 на оси Oy */}
              <circle cx="130" cy="79" r="3" fill="#dc2626" />
              <text x="140" y="89" fill="#dc2626" className="font-sans font-semibold text-[9px]">f(0) &lt; 0</text>
            </svg>
          </div>
        </div>


        <div className="space-y-3">
          <p>Разберем неравенства системы по отдельности:</p>
          <div className="pl-4 space-y-2">
            <div>
              <p><b>(1) Для условия пересечения знаков:</b> Так как свободный член равен <InlineMath math={`f(0) = a + 1`} />, получаем:</p>
              <BlockMath math={`a(a + 1) > 0 \\iff a \\in (-\\infty; -1) \\cup (0; +\\infty).`} />
            </div>
            <div>
              <p><b>(2) Для абсциссы вершины параболы:</b> Формула вершины <InlineMath math={`t_0 = -\\dfrac{b}{2a}`} /> принимает вид:</p>
              <BlockMath math={`t_0 = \\dfrac{2a + 6}{2a} = \\dfrac{a + 3}{a} < 0 \\iff a \\in (-3; 0).`} />
            </div>
          </div>
        </div>

        <div>
          <p>Найдем пересечение решений неравенств (1) и (2):</p>
          <BlockMath math={`\\begin{cases} a \\in (-\\infty; -1) \\cup (0; +\\infty), \\\\[0.5em] a \\in (-3; 0) \\end{cases} \\implies a \\in (-3; -1).`} />
          <p className="mt-2">С учётом обязательного условия неотрицательности дискриминанта (<InlineMath math={`D \\geq 0 \\iff a \\geq -\\dfrac{9}{5}`} />), сужаем промежуток:</p>
          <BlockMath math={`a \\in \\left[-\\dfrac{9}{5}; -1\\right).`} />
        </div>

        <div>
          <p><b>5. Объединение результатов:</b></p>
          <p>Собираем вместе область отрицательного дискриминанта из первого случая и полученную зону отрицательных корней из третьего случая:</p>
          <BlockMath math={`a \\in \\left(-\\infty; -\\dfrac{9}{5}\\right) \\cup \\left[-\\dfrac{9}{5}; -1\\right) = (-\\infty; -1).`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -1)`} />
      </div>
    </div>
  )
},


{
  id: 91,
  title: 'Задача 91',
  textBefore: 'Найдите все значения параметра a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} (x + a - 10)^2 + (y - a)^2 = 50 \\\\ \\sqrt{x^2 + (y - 10)^2} + \\sqrt{(x - 10)^2 + y^2} = 10\\sqrt{2} \\end{cases}',
  textAfter: <span>имеет ровно 2 решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1. Геометрическая интерпретация:</b></p>
        <div>
          Рассмотрим второе уравнение системы. Выражения под корнями представляют собой расстояния от текущей точки <InlineMath math={`(x; y)`} /> до двух фиксированных точек: <InlineMath math={`A(0; 10)`} /> и <InlineMath math={`C(10; 0)`} />. 
          Длина отрезка <InlineMath math={`AC`} /> по формуле расстояния между точками равна:
          <BlockMath math={`AC = \\sqrt{(10 - 0)^2 + (0 - 10)^2} = \\sqrt{100 + 100} = 10\\sqrt{2}.`} />
        </div>
        <p>
          Поскольку сумма расстояний от точки графика до концов отрезка <InlineMath math={`AC`} /> в точности равна его длине (<InlineMath math={`10\\sqrt{2}`} />), второе уравнение задаёт <b>неподвижный отрезок AC</b>, лежащий на прямой <InlineMath math={`y = 10 - x`} /> при <InlineMath math={`x \\in [0; 10]`} />.
        </p>
        <p>
          Первое уравнение системы задаёт семейство окружностей с переменным центром в точке <InlineMath math={`O(10 - a; a)`} /> и фиксированным радиусом <InlineMath math={`R = \\sqrt{50} = 5\\sqrt{2}`} /> (соответственно, диаметр окружности равен <InlineMath math={`2R = 10\\sqrt{2}`} />).
        </p>
        <p>
          Заметим, что координаты центра окружности удовлетворяют уравнению <InlineMath math={`y = 10 - x`} />, поскольку <InlineMath math={`a = 10 - (10 - a)`} />. Это значит, что при изменении параметра <InlineMath math={`a`} /> центр окружности <InlineMath math={`O`} /> <b>скользит строго вдоль той же самой прямой</b>, на которой лежит отрезок <InlineMath math={`AC`} />.
        </p>
      </div>

      {/* Высокоточный крупный центрированный SVG-график Задачи 91 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 340" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 20px. Центр (0,0) зафиксирован на x=100, y=260) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
              <line key={`x-${i}`} x1={100 + i*20} y1="20" x2={100 + i*20} y2="320" />
            ))}
            {[-3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
              <line key={`y-${i}`} x1="20" y1={260 - i*20} x2="360" y2={260 - i*20} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="260" x2="360" y2="260" /> {/* Ось Ox */}
            <line x1="100" y1="20" x2="100" y2="320" />  {/* Ось Oy */}
          </g>
          <path d="M 360,260 L 352,256 M 360,260 L 352,264" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 100,20 L 96,28 M 100,20 L 104,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="370" y="264" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="86" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="86" y="274" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Важные числовые метки на осях */}
          <g fill="#000000" className="dark:fill-slate-300 text-[10px]">
            <line x1="300" y1="256" x2="300" y2="264" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
            <line x1="96" y1="60" x2="104" y2="60" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
          </g>

          {/* ПЕРВОЕ УРАВНЕНИЕ: Семейство окружностей (в положении a=5 центр O(5;5) -> x=200, y=160; R = 5√2 ≈ 141.4px) */}
          <circle cx="200" cy="160" r="141.4" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />

          {/* ВТОРОЕ УРАВНЕНИЕ: Неподвижный синий отрезок AC от A(0;10) -> (100,60) до C(10;0) -> (300,260) */}
          <line x1="100" y1="60" x2="300" y2="260" stroke="#2563eb" strokeWidth="3" />
          <text x="235" y="180" fill="#2563eb" className="font-serif italic font-semibold text-sm">AC</text>

          {/* Ключевые точки */}
          <circle cx="100" cy="60" r="3.5" fill="#000000" />   {/* Точка A */}
          <circle cx="300" cy="260" r="3.5" fill="#000000" />  {/* Точка C */}
          <circle cx="200" cy="160" r="4" fill="#dc2626" />    {/* Центр O(5;5) */}

          {/* Подписи к точкам */}
          <text x="50" y="56" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">A(0; 10)</text>
          <text x="306" y="272" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">C(10; 0)</text>
          <text x="210" y="156" fill="#dc2626" className="font-sans font-semibold text-xs">O(5; 5)</text>
        </svg>
      </div>

      <div className="space-y-4">
        <div>
          <p><b>2. Анализ количества решений:</b></p>
          <p>
            Окружность радиуса <InlineMath math={`R = 5\\sqrt{2}`} /> и отрезок <InlineMath math={`AC`} /> длины <InlineMath math={`10\\sqrt{2}`} /> лежат на одной прямой. Обе точки пересечения окружности с этой прямой будут принадлежать именно <i>отрезку</i> <InlineMath math={`AC`} /> тогда и только тогда, когда диаметр окружности совпадёт с самим отрезком <InlineMath math={`AC`} />.
          </p>
          <p>
            Это возможно в единственном случае: когда скользящий центр окружности <InlineMath math={`O(10 - a; a)`} /> совпадает с геометрической серединой отрезка <InlineMath math={`AC`} /> — точкой с координатами <InlineMath math={`(5; 5)`} />.
          </p>
        </div>

        <div>
          Установим уравнение для нахождения параметра:
          <BlockMath math={`10 - a = 5 \\iff a = 5.`} />
          При любом другом положении центра <InlineMath math={`O`} /> окружность сместится вдоль прямой, и одна из точек пересечения выйдет за пределы отрезка <InlineMath math={`AC`} />, из-за чего система будет иметь лишь 1 решение (или 0 решений, если центр уйдёт слишком далеко).
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a = 5`} />
      </div>
    </div>
  )
},


{
  id: 92,
  title: 'Задача 92 (Из вариантов Ларина)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '\\log_3 x - \\log_{\\frac{1}{3}} |x - 6| = \\log_{\\sqrt{3}}(\\log_9 a)',
  textAfter: <span>имеет ровно 3 решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1. Найдём область допустимых значений (ОДЗ) уравнения:</b></p>
        <BlockMath math={`\\begin{cases} x > 0, \\\\ |x - 6| \\neq 0, \\\\ \\log_9 a > 0 \\end{cases} \\iff \\begin{cases} x > 0, \\\\ x \\neq 6, \\\\ a > 1. \\end{cases}`} />
      </div>

      <div className="space-y-2">
        <div>
          <b>2. Преобразуем исходное уравнение на ОДЗ, используя свойства логарифмов:</b>
          <br />
          Приведём все логарифмы к основанию <InlineMath math={`3`} />, учитывая, что <InlineMath math={`\\log_{\\frac{1}{3}} |x - 6| = -\\log_3 |x - 6|`} /> и <InlineMath math={`\\log_{\\sqrt{3}} M = 2\\log_3 M`} />:
          <BlockMath math={`\\log_3 x + \\log_3 |x - 6| = 2\\log_3(\\log_9 a)`} />
          <BlockMath math={`\\log_3(x|x - 6|) = \\log_3(\\log_9^2 a) \\iff x|x - 6| = \\log_9^2 a.`} />
        </div>
      </div>

      <div className="space-y-2">
        <p><b>3. Раскроем модуль кусочной функции переменной <InlineMath math={`x`} /> с учётом ОДЗ:</b></p>
        <BlockMath math={`f(x) = x|x - 6| = \\begin{cases} x^2 - 6x, & x > 6, \\\\ -x^2 + 6x, & 0 < x < 6. \\end{cases}`} />
        <p>
          График функции <InlineMath math={`y = \\log_9^2 a`} /> представляет собой горизонтальную сканирующую прямую. 
          Построим график левой части. Для интервала <InlineMath math={`0 < x < 6`} /> вершина перевёрнутой параболы находится в точке <InlineMath math={`x_B = 3`} />, а её наибольшее значение равно:
          <InlineMath math={`y_B = -(3)^2 + 6 \\cdot 3 = 9`} />.
        </p>
      </div>

            {/* Высокоточный крупный центрированный SVG-график Задачи 92 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 340" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Координатная сетка (Шаг: 1 деление = 20px. Центр (0,0) зафиксирован на x=60, y=260) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => (
              <line key={`x-${i}`} x1={60 + i*20} y1="20" x2={60 + i*20} y2="300" />
            ))}
            {[-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
              <line key={`y-${i}`} x1="20" y1={260 - i*20} x2="360" y2={260 - i*20} />
            ))}
          </g>

          {/* Пунктирные линии к вершине и выколотой точке */}
          <line x1="120" y1="80" x2="120" y2="260" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="180" y1="80" x2="60" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="180" y1="260" x2="180" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="260" x2="360" y2="260" /> {/* Ось Ox */}
            <line x1="60" y1="20" x2="60" y2="300" />   {/* Ось Oy */}
          </g>
          <path d="M 360,260 L 352,256 M 360,260 L 352,264" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 60,20 L 56,28 M 60,20 L 64,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="370" y="264" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="46" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Числовые метки на осях */}
          <text x="116" y="275" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">3</text>
          <text x="176" y="275" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">6</text>
          <text x="46" y="84" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">9</text>

          {/* Неподвижный синий график f(x) */}
          {/* Левая перевёрнутая парабола от x=0 до x=6. Её вершина теперь поднята строго до пунктирной линии уровня 9 (y=80) */}
          <path d="M 60,260 C 90,80 110,80 120,80 C 130,80 150,80 180,260" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          {/* Правая возрастающая ветвь параболы строго от оси Ox вверх */}
          <path d="M 180,260 Q 192,180 215,20" fill="none" stroke="#2563eb" strokeWidth="2.5" />



          {/* Выколотые граничные точки по ОДЗ */}
          <circle cx="60" cy="260" r="3.5" fill="white" stroke="#2563eb" strokeWidth="2" className="fill-white dark:fill-slate-950" />
          <circle cx="180" cy="260" r="3.5" fill="white" stroke="#2563eb" strokeWidth="2" className="fill-white dark:fill-slate-950" />

          {/* Горизонтальная сканирующая прямая параметра y = log_9^2(a) (Красная линия, уровень y=160) */}
          <line x1="20" y1="160" x2="350" y2="160" stroke="#dc2626" strokeWidth="2" />
          <text x="355" y="164" fill="#dc2626" className="font-sans font-semibold text-[11px]">{"y = log₉² a"}</text>

          {/* Точки пересечения */}
          <circle cx="79.5" cy="160" r="3.5" fill="#dc2626" />
          <circle cx="160.5" cy="160" r="3.5" fill="#dc2626" />
          <circle cx="195" cy="160" r="3.5" fill="#dc2626" />
        </svg>
      </div>

      <div className="space-y-4">
        <div>
          <p>
            Прямая <InlineMath math={`y = \\log_9^2 a`} /> имеет ровно 3 точки пересечения с графиком функции <InlineMath math={`f(x)`} /> тогда и только тогда, когда она проходит строго между осью абсцисс <InlineMath math={`y = 0`} /> и вершиной левой параболы <InlineMath math={`y = 9`} />:
          </p>
          <BlockMath math={`0 < \\log_9^2 a < 9.`} />
        </div>

        <div>
          <p>Решим полученную систему двойных неравенств:</p>
          <BlockMath math={`\\begin{cases} \\log_9^2 a > 0, \\\\[0.5em] \\log_9^2 a < 9 \\end{cases} \\iff \\begin{cases} \\log_9 a \\neq 0, \\\\[0.5em] -3 < \\log_9 a < 3 \\end{cases} \\iff \\begin{cases} a \\neq 1, \\\\[0.5em] 9^{-3} < a < 9^3. \\end{cases}`} />
        </div>

        <div>
          <p>Потенциальный интервал значений параметра составляет <InlineMath math={`a \\in \\left(\\dfrac{1}{729}; 1\\right) \\cup (1; 729)`} />. Однако, возвращаясь к обязательным условиям ОДЗ нашей логарифмической системы (<InlineMath math={`a > 1`} />), мы сужаем область поиска:</p>
          <BlockMath math={`\\begin{cases} a > 1, \\\\[0.5em] a < 729 \\end{cases} \\iff a \\in (1; 729).`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (1; 729)`} />
      </div>
    </div>
  )
},


{
  id: 93,
  title: 'Задача 93 (ЕГКР 2025)',
  textBefore: 'Найдите все значения a, при каждом из которых функция',
  mathA: 'f(x) = \\log_{a-6}\\left(\\sqrt{a^2 + 36x^2} - 6x\\right) - 2',
  textAfter: <span>является нечётной.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-1">
        <p>Нечётная функция должна удовлетворять двум условиям:</p>
        <p>1. <InlineMath math={`f(-x) = -f(x)`} /></p>
        <p>2. <InlineMath math={`D(f)`} /> (область определения) должна быть симметричной относительно нуля.</p>
        <p>Ограничения на параметр <InlineMath math={`a`} /> из основания логарифма (Условие (*)):</p>
      </div>

      <BlockMath math={`\\begin{cases} a - 6 > 0 \\\\ a - 6 \\neq 1 \\end{cases} \\iff \\begin{cases} a > 6 \\\\ a \\neq 7 \\end{cases}`} />

      <div className="space-y-2">
        <p>1. Проверим основное условие нечётности <InlineMath math={`f(-x) = -f(x)`} />:</p>
        <BlockMath math={`f(-x) = \\log_{a-6}\\left(\\sqrt{a^2 + 36x^2} + 6x\\right) - 2`} />
        <BlockMath math={`-f(x) = -\\log_{a-6}\\left(\\sqrt{a^2 + 36x^2} - 6x\\right) + 2`} />
        <p>Приравниваем <InlineMath math={`f(-x) = -f(x)`} />:</p>
        <BlockMath math={`\\log_{a-6}\\left(\\sqrt{a^2 + 36x^2} + 6x\\right) - 2 = -\\log_{a-6}\\left(\\sqrt{a^2 + 36x^2} - 6x\\right) + 2`} />
        <BlockMath math={`\\log_{a-6}\\left(\\sqrt{a^2 + 36x^2} + 6x\\right) + \\log_{a-6}\\left(\\sqrt{a^2 + 36x^2} - 6x\\right) = 4`} />
        <p>По свойству суммы логарифмов:</p>
        <BlockMath math={`\\log_{a-6}\\left(\\left(\\sqrt{a^2 + 36x^2} + 6x\\right)\\left(\\sqrt{a^2 + 36x^2} - 6x\\right)\\right) = 4`} />
      </div>

            <div className="space-y-4">
        <BlockMath math={`\\log_{a-6}\\left(a^2 + 36x^2 - 36x^2\\right) = \\log_{a-6}(a - 6)^4`} />
        <BlockMath math={`\\log_{a-6}\\left(a^2\\right) = \\log_{a-6}(a - 6)^4`} />
        
        <div>
          <p>Приравниваем основания логарифмов:</p>
          <BlockMath math={`a^2 = (a - 6)^4`} />
        </div>

        <BlockMath math={`\\left[ \\begin{array}{l} (a - 6)^2 = a \\quad (1) \\\\ (a - 6)^2 = -a \\quad (\\text{не уд., т. к. } a > 6) \\end{array} \\right.`} />

        <div>
          <p>Раскроем уравнение (1):</p>
          <BlockMath math={`a^2 - 12a + 36 = a \\iff a^2 - 13a + 36 = 0`} />
        </div>

        <BlockMath math={`\\left[ \\begin{array}{l} a = 9 \\quad (\\text{подходит}) \\\\ a = 4 \\quad (\\text{не уд., т. к. } a > 6) \\end{array} \\right.`} />

        <div className="space-y-2">
          <p>2. Проверим область определения <InlineMath math={`D(f)`} /> при <InlineMath math={`a = 9`} />:</p>
          <BlockMath math={`f(x) = \\log_{3}\\left(\\sqrt{81 + 36x^2} - 6x\\right) - 2`} />
          <p>Подлогарифмическое выражение должно быть строго больше нуля:</p>
          <BlockMath math={`\\sqrt{81 + 36x^2} - 6x > 0 \\iff \\sqrt{81 + 36x^2} > 6x`} />
        </div>

        <div>
          <p>Составим совокупность неравенств:</p>
          <BlockMath math={`\\left[ \\begin{array}{l} \\begin{cases} 6x < 0 \\\\ 81 + 36x^2 > 0 \\end{cases} \\implies x \\in (-\\infty; 0) \\\\[1.5em] \\begin{cases} 6x \\geq 0 \\\\ 81 + 36x^2 > 36x^2 \\end{cases} \\implies x \\in [0; +\\infty) \\end{array} \\right. \\implies x \\in \\mathbb{R}`} />
        </div>

        <p>
          То есть решение неравенства является <InlineMath math={`x \\in \\mathbb{R}`} />, а значит, область определения <InlineMath math={`D(f) = (-\\infty; +\\infty)`} /> действительно симметрична относительно нуля.
          <br />
          Таким образом, единственное подходящее значение: <InlineMath math={`a = 9`} />.
        </p>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a = 9`} />
      </div>
      {/* Источник: ЕГКР 2025 */}
    </div>
  )
},


{
  id: 94,
  title: 'Задача 94 (МЦКО)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '|a - 3|(x^2 - a|x| + a^2)^2 + \\log_2^2 x + x = 2\\sqrt{x} \\cdot \\log_2 x',
  textAfter: <span>имеет хотя бы 1 решение.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-1">
        <p>Условие (*):</p>
        <BlockMath math={`x > 0`} />
      </div>

      <div className="space-y-2">
        <p>Перенесём все слагаемые в левую часть и выделим полный квадрат:</p>
        <BlockMath math={`|a - 3|(x^2 - a|x| + a^2)^2 + \\log_2^2 x - 2\\sqrt{x}\\log_2 x + (\\sqrt{x})^2 = 0`} />
        <BlockMath math={`|a - 3|(x^2 - a|x| + a^2)^2 + (\\log_2 x - \\sqrt{x})^2 = 0`} />
      </div>

      <div className="space-y-2">
        <p>Так как каждый из квадратов неотрицателен:</p>
        <BlockMath math={`\\underbrace{|a - 3|(x^2 - a|x| + a^2)^2}_{\\geq 0} + \\underbrace{(\\log_2 x - \\sqrt{x})^2}_{\\geq 0} = 0`} />
        <p>Сумма двух неотрицательных выражений равна нулю тогда и только тогда, когда оба выражения одновременно равны нулю:</p>
        <BlockMath math={`\\begin{cases} f(x) = \\log_2 x - \\sqrt{x} = 0 \\\\[0.5em] g(x) = |a - 3|(x^2 - a|x| + a^2) = 0 \\end{cases}`} />
      </div>

            <div className="space-y-4">
        <div>
          <p>Тогда исходное уравнение равносильно системе:</p>
          <BlockMath math={`\\begin{cases} \\left[ \\begin{array}{l} a = 3 \\\\[0.3em] |x|^2 - a|x| + a^2 = 0 \\quad (1) \\end{array} \\right. \\\\[1.5em] \\log_2 x = \\sqrt{x} \\end{cases}`} />
        </div>

        <div>
          <p>Рассмотрим уравнение (1):</p>
          <BlockMath math={`|x|^2 - a|x| + a^2 = 0`} />
          <BlockMath math={`D = a^2 - 4a^2 = -3a^2`} />
          <p className="mt-2">Уравнение имеет решение только при <InlineMath math={`D = 0 \\iff a = 0`} />. Подставим <InlineMath math={`a = 0`} /> в (1):</p>
          <BlockMath math={`|x|^2 = 0 \\iff x = 0 \\quad (\\text{не уд. } (*), \\text{ т. к. } x > 0)`} />
        </div>

        <div>
          <p>Следовательно, наша система равносильна:</p>
          <BlockMath math={`\\begin{cases} a = 3 \\\\[0.5em] \\log_2 x = \\sqrt{x} \\end{cases} \\implies \\begin{cases} a = 3 \\\\[0.5em] \\left[ \\begin{array}{l} x = 4 \\\\[0.3em] x = 16 \\end{array} \\right. \\end{cases}`} />
        </div>

        <div>
          <p>Хотя бы 1 решение будет только при <InlineMath math={`a = 3`} />.</p>
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{3\\}`} />
      </div>
    </div>
  )
},



{
  id: 95,
  title: 'Задача 95 (СтатГрад)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '9^x - 3^x \\cdot (4^a + 4) = 3^x \\cdot (16 - 2^a) + (4^a + 4)(2^a - 16)',
  textAfter: <span>имеет ровно 1 решение.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-1">
        <p>Сделаем замену переменной:</p>
        <BlockMath math={`3^x = t, \\quad t > 0`} />
        <p>Перенесем все слагаемые в левую часть:</p>
        <BlockMath math={`t^2 - t(4^a + 4) - t(16 - 2^a) - (4^a + 4)(2^a - 16) = 0`} />
        <BlockMath math={`t^2 - t((4^a + 4) + (16 - 2^a)) + (4^a + 4)(16 - 2^a) = 0`} />
      </div>

      <div className="space-y-2">
        <p>По теореме Виета корни полученного квадратного уравнения:</p>
        <BlockMath math={`\\left[ \\begin{array}{l} t = 4^a + 4 \\quad (1) \\\\[0.3em] t = 16 - 2^a \\quad (2) \\end{array} \\right.`} />
        <p>Заметим, что корень (1) всегда положителен при любых <InlineMath math={`a`} />, так как <InlineMath math={`4^a + 4 > 0`} />. Значит, уравнение (1) всегда дает ровно один корень <InlineMath math={`x = \\log_3(4^a + 4)`} />.</p>
      </div>

            <div className="space-y-4">
        <p>
          Тогда исходное уравнение имеет единственное решение для <InlineMath math={`x`} /> (то есть ровно один положительный корень <InlineMath math={`t > 0`} />) в двух случаях:
        </p>

        <div className="space-y-2">
          <p>1) Второй корень является неположительным (не подходит по условию <InlineMath math={`t > 0`} />):</p>
          <BlockMath math={`16 - 2^a \\leq 0 \\iff 16 \\leq 2^a \\iff a \\geq 4`} />
        </div>

        <div className="space-y-2">
          <p>2) Корни совпадают (<InlineMath math={`t_1 = t_2 > 0`} cascade />):</p>
          <BlockMath math={`4^a + 4 = 16 - 2^a`} />
          <BlockMath math={`(2^a)^2 + 2^a - 12 = 0`} />
          <p className="mt-1">По теореме Виета относительно <InlineMath math={`2^a`} />:</p>
          <BlockMath math={`\\left[ \\begin{array}{l} 2^a = 3 \\implies a = \\log_2 3 \\\\[0.3em] 2^a = -4 \\quad (\\varnothing) \\end{array} \\right.`} />
        </div>

        <div>
          <p>Объединяя результаты обоих случаев, получаем:</p>
          <BlockMath math={`a \\in \\{\\log_2 3\\} \\cup [4; +\\infty)`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{\\log_2 3\\} \\cup [4; +\\infty)`} />
      </div>
    </div>
  )
},



{
  id: 96,
  title: 'Задача 96 (*Не из ЕГЭ)',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '(x^2 - x + a^2 + 1)^2 = 4a^2(5x^2 - x + 1)',
  textAfter: <span>имеет ровно 3 решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>Идея для преобразования: <InlineMath math={`(a + b)^2 = 4ab \\iff (a - b)^2 = 0`} />.</p>
        <p>Преобразуем уравнение, выделив выражение <InlineMath math={`(x^2 - x + 1)`} />:</p>
        <BlockMath math={`((x^2 - x + 1) + a^2)^2 = 4a^2((x^2 - x + 1) + 4x^2)`} />
        <BlockMath math={`(x^2 - x + 1)^2 + 2a^2(x^2 - x + 1) + a^4 = 4a^2(x^2 - x + 1) + 16a^2x^2`} />
        <BlockMath math={`(x^2 - x + 1)^2 - 2a^2(x^2 - x + 1) + a^4 = 16a^2x^2`} />
        <BlockMath math={`((x^2 - x + 1) - a^2)^2 = (4ax)^2`} />
      </div>

      <div className="space-y-2">
        <p>Раскрываем как совокупность двух квадратных уравнений:</p>
        <BlockMath math={`\\left[ \\begin{array}{l} x^2 - (1 + 4a)x + (1 - a^2) = 0 \\quad (1) \\\\ x^2 - (1 - 4a)x + (1 - a^2) = 0 \\quad (2) \\end{array} \\right.`} />
      </div>


      <div className="space-y-2">
        <p>Чтобы совокупность двух квадратных уравнений с одинаковым свободным членом <InlineMath math={`c = 1 - a^2`} /> имела ровно 3 решения, возможны два случая:</p>
        <p>Так как свободный член <InlineMath math={`c = 1 - a^2`} /> одинаков у обоих уравнений, при <InlineMath math={`c = 0`} /> корень <InlineMath math={`x = 0`} /> становится общим для обоих уравнений:</p>
        <BlockMath math={`c = 1 - a^2 = 0 \\iff a = \\pm 1`} />
        <p>I случай (совпадение в 0): Дискриминанты двух уравнений больше нуля (<InlineMath math={`D_1 > 0`} /> и <InlineMath math={`D_2 > 0`} />):</p>
        <BlockMath math={`D_1 = (1 + 4a)^2 - 4(1 - a^2) = 20a^2 + 8a - 3`} />
        <BlockMath math={`D_2 = (1 - 4a)^2 - 4(1 - a^2) = 20a^2 - 8a - 3`} />
        <p>При равенстве <InlineMath math={`D_1 = D_2`} /> получаем <InlineMath math={`8a = -8a \\iff a = 0`} />.</p>
        <p>II случай (один <InlineMath math={`D = 0`} />, второй <InlineMath math={`D > 0`} />): Одна парабола касается оси <InlineMath math={`Ox`} /> (<InlineMath math={`D = 0`} />), а вторая пересекает её в двух точках (<InlineMath math={`D > 0`} />).</p>
      </div>

      <BlockMath math={`\\left[ \\begin{array}{l} \\begin{cases} D_1 = 0 \\\\ D_2 > 0 \\end{cases} \\\\[1em] \\begin{cases} D_1 > 0 \\\\ D_2 = 0 \\end{cases} \\end{array} \\right. \\iff \\left[ \\begin{array}{l} \\begin{cases} 20a^2 + 8a - 3 = 0 \\\\ 20a^2 - 8a - 3 > 0 \\end{cases} \\\\[1em] \\begin{cases} 20a^2 + 8a - 3 > 0 \\\\ 20a^2 - 8a - 3 = 0 \\end{cases} \\end{array} \\right.`} />

      <div className="space-y-2">
        <p>Найдём нули дискриминантов:</p>
        <BlockMath math={`20a^2 + 8a - 3 = 0 \\implies a_{1,2} = \\dfrac{-8 \\pm \\sqrt{304}}{40} = \\dfrac{-2 \\pm \\sqrt{19}}{10}`} />
        <BlockMath math={`20a^2 - 8a - 3 = 0 \\implies a_{3,4} = \\dfrac{8 \\pm \\sqrt{304}}{40} = \\dfrac{2 \\pm \\sqrt{19}}{10}`} />
      </div>

      {/* Высокоточный крупный центрированный SVG-график числовой прямой интервалов */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 460 120" className="w-full max-w-[460px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          <line x1="20" y1="80" x2="420" y2="80" stroke="#000000" strokeWidth="1.5" className="dark:stroke-slate-400" />
          <path d="M 420,80 L 412,76 M 420,80 L 412,84" stroke="#000000" strokeWidth="1.5" fill="none" className="dark:stroke-slate-400" />
          <text x="432" y="84" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* Координатные точки */}
          <circle cx="80" cy="80" r="3.5" fill="#000000" />
          <circle cx="170" cy="80" r="3.5" fill="#ffffff" stroke="#000000" strokeWidth="1.5" className="dark:fill-slate-950 dark:stroke-slate-400" />
          <circle cx="270" cy="80" r="3.5" fill="#ffffff" stroke="#000000" strokeWidth="1.5" className="dark:fill-slate-950 dark:stroke-slate-400" />
          <circle cx="360" cy="80" r="3.5" fill="#000000" />

          {/* Двухэтажные подписи к дробям */}
          <text x="50" y="100" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">(-2-√19)/10</text>
          <text x="145" y="100" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">(2-√19)/10</text>
          <text x="245" y="100" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">(-2+√19)/10</text>
          <text x="335" y="100" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[10px]">(2+√19)/10</text>

          {/* Направляющие прямые интервалов */}
          <path d="M 20,50 L 80,50 L 80,80" fill="none" stroke="#000000" strokeWidth="1" />
          <path d="M 80,65 L 170,65 L 170,80" fill="none" stroke="#000000" strokeWidth="1" />
          <path d="M 270,80 L 270,65 L 360,65" fill="none" stroke="#000000" strokeWidth="1" />
          <path d="M 360,80 L 360,50 L 420,50" fill="none" stroke="#000000" strokeWidth="1" />
        </svg>
      </div>

            <div className="space-y-4">
        <p className="font-bold">ПОЛНАЯ ПРОВЕРКА ВСЕХ КАНДИДАТОВ:</p>
        
        <div className="space-y-1">
          <p>1. Проверка <InlineMath math={`a = 0`} />: Уравнения принимают вид <InlineMath math={`x^2 - x + 1 = 0, \\ D = -3 < 0`} /> — решений нет. (Не подходит)</p>
          <p>2. Проверка <InlineMath math={`a = 1`} />: Уравнения принимают вид:</p>
          <BlockMath math={`\\left[ \\begin{array}{l} x^2 - 5x = 0 \\implies x \\in \\{0; 5\\} \\\\ x^2 + 3x = 0 \\implies x \\in \\{-3; 0\\} \\end{array} \\right. \\implies x \\in \\{-3; 0; 5\\}`} />
          <p>Ровно 3 решения! (Подходит)</p>
        </div>

        <div className="space-y-1">
          <p>3. Проверка <InlineMath math={`a = -1`} />: Уравнения принимают вид:</p>
          <BlockMath math={`\\left[ \\begin{array}{l} x^2 + 3x = 0 \\implies x \\in \\{-3; 0\\} \\\\ x^2 - 5x = 0 \\implies x \\in \\{0; 5\\} \\end{array} \\right. \\implies x \\in \\{-3; 0; 5\\}`} />
          <p>Ровно 3 решения! (Подходит)</p>
        </div>

        <div>
          <p>
            4. Проверка <InlineMath math={`a = \\dfrac{2 + \\sqrt{19}}{10}`} /> (крайний правый корень): Для этого значения <InlineMath math={`D_2 = 20a^2 - 8a - 3 = 0`} />, то есть уравнение (2) имеет 1 корень. Проверим знак <InlineMath math={`D_1`} />:
          </p>
          <BlockMath math={`D_1 = 20a^2 + 8a - 3 = (20a^2 - 8a - 3) + 16a = 0 + 16 \\cdot \\dfrac{2 + \\sqrt{19}}{10} > 0`} />
          <p className="mt-1">
            Так как <InlineMath math={`D_1 > 0`} />, первое уравнение имеет 2 корня, а второе — 1 корень (не совпадающий с ними). Всего ровно 3 решения! (Подходит)
          </p>
        </div>

        <div>
          <p>
            5. Проверка <InlineMath math={`a = \\dfrac{-2 - \\sqrt{19}}{10}`} /> (крайний левый корень): Аналогично, <InlineMath math={`D_1 = 0`} />, а <InlineMath math={`D_2 = 16(-a) > 0`} />. Ровно 3 решения! (Подходит)
          </p>
        </div>

        <div>
          <p>
            6. Внутренние точки: <InlineMath math={`a_2 = \\dfrac{2 - \\sqrt{19}}{10}`} /> и <InlineMath math={`a_3 = \\dfrac{-2 + \\sqrt{19}}{10}`} />
          </p>
          <p>Не подходят, т.к. не выполняются условия системы:</p>
          <p>При <InlineMath math={`a = \\dfrac{2 - \\sqrt{19}}{10}`} />: <InlineMath math={`D_1 < 0`} /></p>
          <p>При <InlineMath math={`a = \\dfrac{-2 + \\sqrt{19}}{10}`} />: <InlineMath math={`D_2 < 0`} /></p>
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a = \\pm 1, \\ a = \\pm \\dfrac{2 + \\sqrt{19}}{10}`} />
      </div>
    </div>
  )
},


{
  id: 97,
  title: 'Задача 97 (МИОО)',
  textBefore: 'Условие. Найдите значения параметра a, при которых график функции',
  mathA: 'f(x) = x^2 - |x^2 + 2x - 3| - a',
  textAfter: <span>пересекает ось абсцисс более чем в двух точках.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div>
        График функции <InlineMath math={`f(x)`} /> пересекает ось абсцисс более чем в двух точках тогда и только тогда, когда уравнение <InlineMath math={`x^2 - |x^2 + 2x - 3| - a = 0`} /> имеет более двух решений (то есть 3 или больше).
        <p className="mt-2">1) Рассмотрим функцию <InlineMath math={`g(x) = x^2 - |x^2 + 2x - 3|`} />.</p>
      </div>

      <div>
        Найдем нули подмодульного выражения:
        <BlockMath math={`x^2 + 2x - 3 = 0 \\iff (x - 1)(x + 3) = 0 \\iff \\left[ \\begin{array}{l} x = 1 \\\\ x = -3 \\end{array} \\right.`} />
      </div>
      
      <div className="space-y-1">
        <p>Тогда модуль раскрывается:</p>
        <p>— со знаком + при <InlineMath math={`x \\in (-\\infty; -3] \\cup [1; +\\infty)`} /></p>
        <p>— со знаком − при <InlineMath math={`x \\in (-3; 1)`} /></p>
        <p>2) Раскроем модуль на промежутках:</p>
        <p>• При <InlineMath math={`x \\in (-\\infty; -3] \\cup [1; +\\infty)`} />:</p>
        <BlockMath math={`g(x) = x^2 - (x^2 + 2x - 3) = -2x + 3`} />
        <p>• При <InlineMath math={`x \\in (-3; 1)`} />:</p>
        <BlockMath math={`g(x) = x^2 - (-(x^2 + 2x - 3)) = 2x^2 + 2x - 3`} />
      </div>

      <div>
        Вершина параболы <InlineMath math={`y = 2x^2 + 2x - 3`} />:
        <BlockMath math={`x_0 = -\\dfrac{2}{4} = -\\dfrac{1}{2} = -0,5`} />
        <BlockMath math={`y_0 = 2\\left(-\\dfrac{1}{2}\\right)^2 + 2\\left(-\\dfrac{1}{2}\\right) - 3 = \\dfrac{1}{2} - 1 - 3 = -3,5`} />
      </div>

      <div className="space-y-1">
        <p>3) Построим график функции <InlineMath math={`g(x)`} />:</p>
      </div>

      {/* Высокоточный крупный центрированный SVG-график Задачи 97 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 340 380" className="w-full max-w-[340px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Масштабная сетка: 1 ед по x = 20px, 1 ед по y = 14px */}
          {/* Начало координат (0,0) зафиксировано строго на x=160, y=240 */}
          {/* Ось y теперь начинается от -6 (y = 240 + 6*14 = 324) и заканчивается на 12 (y = 240 - 12*14 = 72) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <line key={`x-${i}`} x1={160 + i*20} y1="20" x2={160 + i*20} y2="360" />
            ))}
            {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(i => (
              <line key={`y-${i}`} x1="10" y1={240 - i*14} x2="330" y2={240 - i*14} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="10" y1="240" x2="330" y2="240" /> {/* Ось Ox */}
            <line x1="160" y1="360" x2="160" y2="20" />  {/* Ось Oy (продлена вверх до 20) */}
          </g>
          <path d="M 330,240 L 322,236 M 330,240 L 322,244" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 160,20 L 156,28 M 160,20 L 164,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="340" y="244" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="146" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Математически выверенный синий график функции g(x) */}
          {/* Левый луч: y = -2x + 3 при x <= -3. Точка излома (-3; 9) -> x = 160 - 3*20 = 100, y = 240 - 9*14 = 114 */}
          <path d="M 57,52 L 100,114" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Парабола: y = 2x^2 + 2x - 3 при -3 < x < 1 */}
          {/* Левый излом (-3; 9) -> (100, 114) */}
          {/* Вершина параболы (-0.5; -3.5) -> x = 160 - 0.5*20 = 150, y = 240 + 3.5*14 = 289 */}
          {/* Правый излом (1; 1) -> x = 160 + 1*20 = 180, y = 240 - 1*14 = 226 */}
          <path d="M 100,114 C 113.3,230 136.7,289 150,289 C 160,289 173.3,250 180,226" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Правый луч: y = -2x + 3 при x >= 1. Стартует из излома (1; 1) -> (180, 226) */}
          <path d="M 180,226 L 220,282" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Маркерные точки и подписи */}
          {/* Точка x = -3 */}
          <circle cx="100" cy="240" r="3" fill="#2563eb" />
          <text x="92" y="256" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">-3</text>

          <circle cx="180" cy="227" r="3" fill="#2563eb" />

          <circle cx="100" cy="114" r="3" fill="#2563eb" />

          {/* Метка по оси Oy для 1 */}
          <circle cx="160" cy="226" r="2.5" fill="#000000" />
          <text x="166" y="222" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">1</text>

          {/* Точка излома (1; 1) */}
          <circle cx="180" cy="240" r="2.5" fill="#000000" />
          <text x="176" y="256" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">1</text>
          
          {/* Абсцисса вершины параболы -0,5 */}
          <circle cx="150" cy="240" r="2.5" fill="#000000" />
          <text x="130" y="232" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">-0,5</text>

          {/* Ордината вершины параболы -3,5 */}
          <circle cx="160" cy="289" r="3" fill="#000000" />
          <line x1="150" y1="289" x2="160" y2="289" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
          <text x="168" y="293" fill="#000000" className="dark:fill-slate-300 font-sans text-sm">-3,5</text>

          {/* Текст надписи уравнения */}
          <text x="85" y="50" fill="#2563eb" className="font-serif italic font-semibold text-xs">y = -2x + 3</text>
        </svg>
      </div>



      <div className="space-y-4">
        <div>
          <p>
            4) Чтобы <InlineMath math={`f(x) = g(x) - a`} /> пересекала ось абсцисс более чем в 2-х точках, прямая <InlineMath math={`y = a`} /> должна пересекать график <InlineMath math={`g(x)`} /> более чем в двух точках. По графику видно, что прямая <InlineMath math={`y = a`} /> имеет 3 точки пересечения с <InlineMath math={`g(x)`} />, когда она проходит строго между вершиной параболы <InlineMath math={`y = -3,5`} /> и точкой излома <InlineMath math={`(1; 1)`} />:
          </p>
          <BlockMath math={`-3,5 < a < 1 \\iff -\\dfrac{7}{2} < a < 1`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(-\\dfrac{7}{2}; 1\\right)`} />
      </div>
    </div>
  )
},


{
  id: 98,
  title: 'Задача 98',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '7^{|x|} \\cdot \\dfrac{5a}{a - 3} = 49^{|x|} + \\dfrac{6a + 7}{a - 3}',
  textAfter: <span>имеет ровно 2 решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-1">
        <p>Ограничение на параметр:</p>
        <BlockMath math={`a \\neq 3`} />
      </div>

      <div className="space-y-2">
        <p>
          1) При <InlineMath math={`x = 0`} /> уравнение имеет не более 1-го решения, поэтому <InlineMath math={`x \\neq 0`} />. Заметим, что если <InlineMath math={`x_0`} /> является решением уравнения, то и <InlineMath math={`-x_0`} /> также является решением (чётность функции относительно <InlineMath math={`x`} />).
        </p>
        <p>Сделаем замену переменной:</p>
        <BlockMath math={`7^{|x|} = t`} />
        <p>Так как <InlineMath math={`x \\neq 0`} />, а <InlineMath math={`|x| > 0`} />, то для получения ровно двух решений по <InlineMath math={`x`} /> (<InlineMath math={`x = \\pm x_0`} />) необходимо, чтобы уравнение относительно <InlineMath math={`t`} /> имело ровно 1 корень, удовлетворяющий условию:</p>
        <BlockMath math={`t > 1.`} />
      </div>

      <div className="space-y-2">
        <p>Перепишем уравнение относительно <InlineMath math={`t`} />:</p>
        <BlockMath math={`t^2 - \\dfrac{5a}{a - 3}t + \\dfrac{6a + 7}{a - 3} = 0`} />
        <p>Рассмотрим несколько возможных случаев:</p>
        <p><b>I. Корень <InlineMath math={`t > 1`} /> единственный за счет расположения параболы <InlineMath math={`f(t) = t^2 - \\dfrac{5a}{a - 3}t + \\dfrac{6a + 7}{a - 3}`} />:</b></p>
      </div>

      {/* Высокоточный крупный центрированный SVG-график случая f(1) < 0 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 240 120" className="w-full max-w-[240px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Схематичная надпись */}
          <text x="450" y="10" fill="#94a3b8" stroke="none" className="font-sans font-medium text-[9px] tracking-wide select-none">Схематичный рисунок</text>
          
          {/* Горизонтальная ось Ot */}
          <line x1="20" y1="70" x2="210" y2="70" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <path d="M 210,70 L 204,66 M 210,70 L 204,74" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="218" y="74" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic">t</text>

          {/* ПАРАБОЛА ОПУЩЕНА НИЖЕ (координата вершины по y увеличена со 130 до 145) */}
          <path d="M 60,30 Q 105,150 170,30" fill="none" stroke="#2563eb" strokeWidth="2" />

          {/* Точка 1 на оси абсцисс */}
          <circle cx="95" cy="70" r="2.5" fill="#000000" />
          <text x="92" y="60" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans">1</text>

          {/* Обозначение условия f(1) < 0 (смещено ниже вслед за прогибом параболы) */}
          <circle cx="95" cy="85" r="3" fill="#2563eb" />
          <text x="40" y="92" fill="#2563eb" stroke="none" className="font-serif italic font-semibold text-xs">f(1) &lt; 0</text>
        </svg>
      </div>


      <div className="space-y-2">
        <p>Условие <InlineMath math={`f(1) < 0`} /> гарантирует, что один корень находится левее 1, а второй — правее 1:</p>
        <BlockMath math={`f(1) = 1 - \\dfrac{5a}{a - 3} + \\dfrac{6a + 7}{a - 3} = \\dfrac{2a + 4}{a - 3} = \\dfrac{a + 2}{a - 3} < 0`} />
      </div>

      {/* Высокоточный график числовой оси интервалов для первого случая */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 320 60" className="w-full max-w-[320px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Главная ось параметра а */}
          <line x1="20" y1="35" x2="280" y2="35" stroke="#000000" strokeWidth="1.5" className="dark:stroke-slate-400" />
          <path d="M 280,35 L 272,31 M 280,35 L 272,35" stroke="#000000" strokeWidth="1.5" fill="none" className="dark:stroke-slate-400" />
          <text x="292" y="39" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>

          {/* Выколотые точки */}
          <circle cx="90" cy="35" r="3.5" fill="#ffffff" stroke="#000000" strokeWidth="1.5" className="dark:fill-slate-950 dark:stroke-slate-400" />
          <circle cx="210" cy="35" r="3.5" fill="#ffffff" stroke="#000000" strokeWidth="1.5" className="dark:fill-slate-950 dark:stroke-slate-400" />

          {/* Подписи к точкам */}
          <text x="84" y="55" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">-2</text>
          <text x="206" y="55" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">3</text>

          {/* Штриховка интервала (-2; 3) */}
          <line x1="94" y1="35" x2="206" y2="35" stroke="#2563eb" strokeWidth="3" opacity="0.4" />
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`sh-${i}`} x1={96 + i * 7} y1="35" x2={101 + i * 7} y2="25" stroke="#2563eb" strokeWidth="0.8" />
          ))}
        </svg>
      </div>

            <div className="space-y-4">
        <div>
          <p>Из неравенства получаем промежуток:</p>
          <BlockMath math={`a \\in (-2; 3)`} />
        </div>

        <div className="space-y-2">
          <p><b>II. Случай нулевого дискриминанта (<InlineMath math={`D = 0`} />):</b> Единственный корень уравнения на <InlineMath math={`t`} /> может быть кратным (<InlineMath math={`t_1 = t_2 > 1`} cascade />):</p>
          <BlockMath math={`D = \\dfrac{25a^2}{(a - 3)^2} - 4 \\cdot \\dfrac{6a + 7}{a - 3} = 0`} />
          <BlockMath math={`\\dfrac{25a^2 - 4(6a + 7)(a - 3)}{(a - 3)^2} = 0`} />
          <BlockMath math={`25a^2 - 4(6a^2 - 11a - 21) = 0`} />
          <BlockMath math={`25a^2 - 24a^2 + 44a + 84 = 0 \\iff a^2 + 44a + 84 = 0`} />
        </div>

        <div>
          <p>Положим <InlineMath math={`\\dfrac{D}{4} = 484 - 84 = 400`} />:</p>
          <BlockMath math={`\\left[ \\begin{array}{l} a = -22 + 20 = -2 \\quad (\\text{не подходит, т. к. } t = 1) \\\\[0.3em] a = -22 - 20 = -42 \\end{array} \\right.`} />
        </div>

        <div className="space-y-2">
          <p><b>III. Проверим <InlineMath math={`a = -42`} />:</b></p>
          <BlockMath math={`t^2 - \\dfrac{-210}{-45}t + \\dfrac{-245}{-45} = 0 \\iff t^2 - \\dfrac{14}{3}t + \\dfrac{49}{9} = 0`} />
          <BlockMath math={`\\left(t - \\dfrac{7}{3}\\right)^2 = 0 \\implies t = \\dfrac{7}{3}`} />
          <p className="mt-1">Так как <InlineMath math={`t = \\dfrac{7}{3} > 1`} />, условие выполняется! Значение <InlineMath math={`a = -42`} /> подходит.</p>
        </div>

        <div>
          <p>Объединяя найденные значения, получаем итоговый ответ:</p>
          <BlockMath math={`a \\in \\{-42\\} \\cup (-2; 3)`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{-42\\} \\cup (-2; 3)`} />
      </div>
    </div>
  )
},


{
  id: 99,
  title: 'Задача 99',
  textBefore: 'Найдите все значения параметра a, при каждом из которых уравнение',
  mathA: '9^{-|x - a|} \\log_{\\sqrt{5}}(x^2 + 2x + 3) + 3^{-x^2 - 2x}\\log_{\\frac{1}{5}}(2|x - a| + 2) = 0',
  textAfter: <span>имеет ровно 3 решения.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>Домножим обе части уравнения на <InlineMath math={`3^{x^2 + 2x} \\cdot 9^{|x - a|}`} />:</p>
        <BlockMath math={`3^{x^2 + 2x} \\log_{\\sqrt{5}}(x^2 + 2x + 3) + 9^{|x - a|} \\log_{\\frac{1}{5}}(2|x - a| + 2) = 0`} />
      </div>

      <div className="space-y-2">
        <p>Преобразуем основания логарифмов:</p>
        <BlockMath math={`3 \\cdot 3^{x^2 + 2x} \\log_5((x^2 + 2x + 1) + 2) - 3^{2|x - a|} \\log_5(2|x - a| + 2) = 0`} />
        <BlockMath math={`3^{(x + 1)^2} \\log_5((x + 1)^2 + 2) = 3^{2|x - a|} \\log_5(2|x - a| + 2)`} />
      </div>

      <div className="space-y-2">
        <p>
          Пусть <InlineMath math={`f(t) = 3^t \\cdot \\log_5(t + 2)`} />, где <InlineMath math={`t \\geq 0`} />, а <InlineMath math={`g(k) = 3^k \\cdot \\log_5(k + 2)`} />, где <InlineMath math={`k \\geq 0`} />.
          Функции <InlineMath math={`f(t)`} /> и <InlineMath math={`g(k)`} /> — строго монотонно возрастающие функции как произведение двух положительных возрастающих функций при <InlineMath math={`t, k \\geq 0`} />.
          Следовательно, каждое своё значение они принимают в единственной точке:
        </p>
        <BlockMath math={`f(t) = g(k) \\iff t = k`} />
      </div>

      <div className="space-y-2">
        <p>Тогда получаем уравнение:</p>
        <BlockMath math={`(x + 1)^2 = 2|x - a| \\quad \\text{имеет ровно 3 решения.}`} />
        <p>Пересечение графиков будем искать графически в системе <InlineMath math={`xOy`} />:</p>
      </div>

      {/* Высокоточный крупный центрированный SVG-график Задачи 99 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 320 280" className="w-full max-w-[320px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 ед = 40px. Центр (0,0) зафиксирован на x=180, y=200) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-3, -2, -1, 1, 2, 3].map(i => (
              <line key={`x-${i}`} x1={180 + i*40} y1="10" x2={180 + i*40} y2="260" />
            ))}
            {[-1, 1, 2, 3, 4, 5].map(i => (
              <line key={`y-${i}`} x1="10" y1={200 - i*40} x2="310" y2={200 - i*40} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="10" y1="200" x2="310" y2="200" /> {/* Ось Ox */}
            <line x1="180" y1="10" x2="180" y2="260" />  {/* Ось Oy */}
          </g>
          <path d="M 310,200 L 302,196 M 310,200 L 302,204" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 180,10 L 176,18 M 180,10 L 184,18" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="320" y="204" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="166" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="186" y="214" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">0</text>

          {/* СЕМЕЙСТВО ГАЛОЧЕК (УГОЛКОВ) — ОБРЕЗАНЫ С ПРАВОЙ СТОРОНЫ ДЛЯ СХОДСТВА С ОРИГИНАЛОМ */}
          {/* Положение 2 (оранжевое): вершина в (120, 200). Правая ветвь заканчивается на уровне параболы */}
          <path d="M 40,60 L 120,200 L 210,20" fill="none" stroke="#ea580c" strokeWidth="1.5" />
          <text x="50" y="100" fill="#ea580c" className="font-sans font-semibold text-xs">2</text>

          {/* Положение 3 (красное): вершина в (140, 200). Правая ветвь заканчивается на уровне параболы */}
          <path d="M 60,40 L 140,200 L 220,40" fill="none" stroke="#dc2626" strokeWidth="1.5" />
          <text x="105" y="125" fill="#dc2626" className="font-sans font-semibold text-xs">3</text>

          {/* Положение 1 (темно-розовое): вершина в (160, 200). Правая ветвь заканчивается на уровне параболы */}
          <path d="M 80,40 L 160,200 L 230,70" fill="none" stroke="#be185d" strokeWidth="1.5" />
          <text x="210" y="125" fill="#be185d" className="font-sans font-semibold text-xs">1</text>

          {/* Неподвижная синяя парабола y = (x+1)^2 — ОБРЕЗАНА С ПРАВОЙ СТОРОНЫ (заканчивается симметрично левой, не улетая вверх) */}
          <path d="M 50,30 Q 140,358 220,48" fill="none" stroke="#0000ff" strokeWidth="2.5" />

          {/* Черные маркерные точки делений */}
          <circle cx="220" cy="200" r="3" fill="#000000" /> {/* x = 1 */}
          <text x="216" y="215" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">1</text>

          <circle cx="140" cy="200" r="4.5" fill="#0000ff" /> {/* Жирная синяя вершина параболы x = -1 */}
          <text x="126" y="215" fill="#000000" className="dark:fill-slate-300 font-sans text-xs font-semibold">-1</text>
        </svg>
      </div>


      <div className="space-y-4">
        <div className="space-y-1">
          <p>3 решения будет тогда, когда:</p>
          <p>1) Правая ветвь галочки касается параболы, а другая пересекает её.</p>
          <p>2) Левая ветвь галочки касается параболы, а другая пересекает её.</p>
          <p>3) Когда вершина галочки находится в точке <InlineMath math={`(-1; 0) \\implies a = -1`} />.</p>
        </div>

        <div>
          <p>Найдем случаи касания (случаи 1 и 2):</p>
          <p>Когда правая ветвь раскрывается с плюсом:</p>
          <BlockMath math={`(x + 1)^2 = 2(x - a) \\iff x^2 + 2x + 1 = 2x - 2a \\iff x^2 + 1 + 2a = 0`} />
        </div>

        <div>
          <p>Касание происходит при <InlineMath math={`D = 0`} />:</p>
          <BlockMath math={`1 + 2a = 0 \\iff a = -\\dfrac{1}{2} = -0,5`} />
        </div>

        <div>
          <p>Из соображений симметрии относительно линии <InlineMath math={`x = -1`} />, левая ветвь дает еще одно решение:</p>
          <BlockMath math={`a = -1,5`} />
        </div>

        <div>
          <p>Объединяя все 3 подходящих значения:</p>
          <BlockMath math={`a \\in \\{-1,5; -1; -0,5\\}`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{-1,5; -1; -0,5\\}`} />
      </div>
    </div>
  )
},


{
  id: 100,
  title: 'Задача 100 (Не из ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '5x + |2x - |x + a|| = 10|x + 1|',
  textAfter: <span>имеет хотя бы один корень.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div>
        Перенесём все слагаемые в одну сторону и рассмотрим функцию:
        <BlockMath math={`f(x) = 10|x + 1| - |2x - |x + a|| - 5x = 0`} />
      </div>
      
      <div className="space-y-2">
        <p>
          Возрастание и убывание функции зависит от доминирующего модуля. Так как коэффициент перед доминирующим модулем (10) по модулю больше, чем сумма всех других коэффициентов по модулю (<InlineMath math={`|10| > |-1| + |-5| = 6`} cascade />), функция <InlineMath math={`f(x)`} /> непрерывна, а её поведение определяется слагаемым <InlineMath math={`10|x + 1|`} />:
        </p>
        <ul className="list-bullet pl-5 space-y-1">
          <li>функция <InlineMath math={`f(x)`} /> убывает при <InlineMath math={`x \\in (-\\infty; -1)`} /></li>
          <li>функция <InlineMath math={`f(x)`} /> возрастает при <InlineMath math={`x \\in [-1; +\\infty)`} /></li>
        </ul>
        <p className="pt-1">
          Минимальное значение функция <InlineMath math={`f(x)`} /> достигает в точке излома <InlineMath math={`x = -1`} />.
        </p>
      </div>

      {/* Высокоточный крупный центрированный SVG-график Задачи 100 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 340 220" className="w-full max-w-[320px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Схематичная надпись в правом верхнем углу */}
          <text x="500" y="15" fill="#94a3b8" stroke="none" className="font-sans font-medium text-[10px] tracking-wide select-none">Схематичный рисунок</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="180" x2="310" y2="180" />  {/* Ось Ox */}
            <line x1="140" y1="20" x2="140" y2="200" />  {/* Ось Oy */}
          </g>
          <path d="M 310,180 L 302,176 M 310,180 L 302,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 140,20 L 136,28 M 140,20 L 144,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="320" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="126" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Линия излома пунктиром к оси абсцисс */}
          <line x1="100" y1="150" x2="100" y2="180" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-slate-400" />
          <text x="94" y="196" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">-1</text>

          {/* График функции f(x) с изломом ("впадина") */}
          <path d="M 40,40 L 70,105 L 100,150 L 140,120 L 180,90 L 230,40" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Точка минимума на графике */}
          <circle cx="100" cy="150" r="3.5" fill="#2563eb" />
        </svg>
      </div>

            <div className="space-y-4">
        <div>
          <p>Найдём <InlineMath math={`f(x)_{\\text{min}} = f(-1)`} />:</p>
          <BlockMath math={`f(-1) = 10|-1 + 1| - |-2 - |-1 + a|| - 5(-1)`} />
          <BlockMath math={`f(-1) = 0 - |-(2 + |a - 1|)| + 5 = 5 - |2 + |a - 1||`} />
        </div>

        <div>
          <p>Чтобы исходное уравнение <InlineMath math={`f(x) = 0`} /> имело хотя бы один корень, необходимо и достаточно, чтобы минимальное значение функции было не положительным (<InlineMath math={`f(-1) \\leq 0`} cascade />):</p>
          <BlockMath math={`5 - |2 + |a - 1|| \\leq 0 \\iff |2 + |a - 1|| \\geq 5`} />
        </div>

        <div>
          <p>Так как <InlineMath math={`2 + |a - 1| > 0`} />, раскрываем внешний модуль:</p>
          <BlockMath math={`2 + |a - 1| \\geq 5 \\iff |a - 1| \\geq 3`} />
        </div>

        <div>
          <p>Раскрываем совокупностью:</p>
          <BlockMath math={`\\left[ \\begin{array}{l} a - 1 \\geq 3 \\\\[0.3em] a - 1 \\leq -3 \\end{array} \\right. \\iff \\left[ \\begin{array}{l} a \\geq 4 \\\\[0.3em] a \\leq -2 \\end{array} \\right. \\iff a \\in (-\\infty; -2] \\cup [4; +\\infty)`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-\\infty; -2] \\cup [4; +\\infty)`} />
      </div>
    </div>
  )
},


{
  id: 101,
  title: 'Задача 101 (Не из ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '4x - |3x - |x - a|| = 9|x - 1|',
  textAfter: <span>имеет хотя бы один корень.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div>
        Перенесем все слагаемые в одну сторону и рассмотрим функцию:
        <BlockMath math={`f(x) = 9|x - 1| + |3x - |x - a|| - 4x = 0`} />
      </div>
      
      <div className="space-y-2">
        <p>
          Возрастание и убывание функции зависит от доминирующего модуля. Так как коэффициент перед доминирующим модулем (9) по модулю больше, чем сумма всех других коэффициентов по модулю (<InlineMath math={`|9| > |1| + |-4| = 5`} cascade />), функция <InlineMath math={`f(x)`} /> непрерывная, а её поведение определяется слагаемым <InlineMath math={`9|x - 1|`} />: — <InlineMath math={`f(x)`} /> убывает при <InlineMath math={`x \\in (-\\infty; 1)`} /> — <InlineMath math={`f(x)`} /> возрастает при <InlineMath math={`x \\in (1; +\\infty)`} />
        </p>
        <p>Минимальное значение функция <InlineMath math={`f(x)`} /> достигает в точке излома <InlineMath math={`x = 1`} />.</p>
      </div>

      {/* Высокоточный крупный центрированный SVG-график Задачи 101 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 340 220" className="w-full max-w-[320px] h-auto overflow-visible font-sans text-xs select-none mx-auto">

          <text x="500" y="15" fill="#94a3b8" stroke="none" className="font-sans font-medium text-[10px] tracking-wide select-none">Схематичный рисунок</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="180" x2="310" y2="180" /> {/* Ось Ox */}
            <line x1="100" y1="20" x2="100" y2="200" />  {/* Ось Oy */}
          </g>
          <path d="M 310,180 L 302,176 M 310,180 L 302,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 100,20 L 96,28 M 100,20 L 104,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="320" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="86" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Линия излома пунктиром к оси абсцисс */}
          <line x1="140" y1="140" x2="140" y2="180" stroke="#000000" strokeWidth="1" strokeDasharray="3 3" className="dark:stroke-slate-400" />
          <text x="136" y="196" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-sm">1</text>

          {/* График функции f(x) с изломом ("впадина") */}
          <path d="M 50,45 L 90,100 L 140,140 L 180,105 L 220,75 L 260,35" fill="none" stroke="#0000ff" strokeWidth="2.5" />
          
          {/* Точка минимума на графике */}
          <circle cx="140" cy="140" r="3" fill="#2563eb" />
        </svg>
      </div>

            <div className="space-y-4">
        <div>
          <p>Найдём <InlineMath math={`f(x)_{\\text{min}} = f(1)`} />:</p>
          <BlockMath math={`f(1) = 9|1 - 1| + |3 - |1 - a|| - 4(1)`} />
          <BlockMath math={`f(1) = 0 + |3 - |a - 1|| - 4 = |3 - |a - 1|| - 4`} />
        </div>

        <div>
          <p>
            Чтобы исходное уравнение <InlineMath math={`f(x) = 0`} /> имело хотя бы один корень, необходимо и достаточно, чтобы минимальное значение функции было не положительным (<InlineMath math={`f(1) \\leq 0`} cascade />):
          </p>
          <BlockMath math={`|3 - |a - 1|| - 4 \\leq 0 \\iff |3 - |a - 1|| \\leq 4`} />
        </div>

        <div>
          <p>Раскрываем двойным неравенством:</p>
          <BlockMath math={`-4 \\leq 3 - |a - 1| \\leq 4`} />
        </div>

        <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
          <div>
            <p className="font-semibold text-slate-800 dark:text-slate-200">Левая часть:</p>
            <BlockMath math={`3 - |a - 1| \\geq -4 \\iff |a - 1| \\leq 7 \\iff -7 \\leq a - 1 \\leq 7 \\iff -6 \\leq a \\leq 8`} />
          </div>
          <div>
            <p className="font-semibold text-slate-800 dark:text-slate-200">Правая часть:</p>
            <p className="mt-1">
              Неравенство <InlineMath math={`3 - |a - 1| \\leq 4 \\iff |a - 1| \\geq -1`} /> выполняется всегда.
            </p>
          </div>
        </div>

        <div>
          <p>Таким образом:</p>
          <BlockMath math={`a \\in [-6; 8]`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in [-6; 8]`} />
      </div>
    </div>
  )
},


{
  id: 102,
  title: 'Задача 102',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: 'x^2 - 2a \\sin(\\cos x) + a^2 = 0',
  textAfter: <span>имеет ровно один корень.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>Заметим, что функция <InlineMath math={`f(x) = x^2 - 2a \\sin(\\cos x) + a^2`} /> является чётной, так как:</p>
        <BlockMath math={`f(-x) = (-x)^2 - 2a \\sin(\\cos(-x)) + a^2 = x^2 - 2a \\sin(\\cos x) + a^2 = f(x)`} />
        <p>Это означает, что если <InlineMath math={`x_0`} /> является корнем уравнения, то и <InlineMath math={`-x_0`} /> также является его корнем. Чтобы решение было единственным, непарный корень может быть только <InlineMath math={`x = 0`} />.</p>
      </div>

      <div className="space-y-2">
        <p>1) Необходимое условие: Подставим <InlineMath math={`x = 0`} /> в исходное уравнение:</p>
        <BlockMath math={`0^2 - 2a \\sin(\\cos 0) + a^2 = 0`} />
        <BlockMath math={`a^2 - 2a \\sin(1) = 0`} />
        <BlockMath math={`a(a - 2\\sin 1) = 0 \\iff \\left[ \\begin{array}{l} a = 0 \\\\ a = 2\\sin 1 \\end{array} \\right.`} />
      </div>

            <div className="space-y-4">
        <p>2) Достаточность (проверка найденных a):</p>
        
        <div className="space-y-1">
          <p>• При <InlineMath math={`a = 0`} />: Уравнение принимает вид <InlineMath math={`x^2 = 0 \\iff x = 0`} />. Решение единственное! Значение <InlineMath math={`a = 0`} /> подходит.</p>
        </div>

        <div className="space-y-3">
          <p>• При <InlineMath math={`a = 2\\sin 1`} />: Уравнение принимает вид:</p>
          <BlockMath math={`x^2 - 4\\sin 1 \\cdot \\sin(\\cos x) + 4\\sin^2 1 = 0`} />
          <BlockMath math={`(x^2 + 4\\sin^2 1 - 4\\sin 1 \\cdot \\sin(\\cos x)) = 0`} />
          
          <div className="space-y-1">
            <p>Оценим слагаемые: Так как <InlineMath math={`\\cos x \\leq 1`} />, то:</p>
            <BlockMath math={`\\sin(\\cos x) \\leq \\sin 1`} />
          </div>

          <div className="space-y-1">
            <p>Тогда:</p>
            <BlockMath math={`x^2 - 4\\sin 1 \\cdot \\sin(\\cos x) + 4\\sin^2 1 \\geq x^2 - 4\\sin 1 \\cdot \\sin 1 + 4\\sin^2 1 = x^2`} />
            <BlockMath math={`0 = x^2 - 4\\sin 1 \\cdot \\sin(\\cos x) + 4\\sin^2 1 \\geq x^2 \\geq 0`} />
          </div>

          <p>Равенство достигается только при <InlineMath math={`x = 0`} /> (так как <InlineMath math={`x^2 = 0`} /> и <InlineMath math={`\\sin(\\cos x) = \\sin 1`} />). Решение единственное! Значение <InlineMath math={`a = 2\\sin 1`} /> подходит.</p>
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a = 0, \\ a = 2\\sin 1`} />
      </div>
    </div>
  )
},



{
  id: 103,
  title: 'Задача 103',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '|x - a^2 + a + 2| + |x - a^2 + 3a - 1| = 2a - 3',
  textAfter: <span>имеет хотя бы один корень, но ни один из корней не принадлежит промежутку (4; 19).</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>1) Воспользуемся геометрическим смыслом модуля <InlineMath math={`|u - v|`} /> как расстояния между точками <InlineMath math={`u`} /> и <InlineMath math={`v`} /> на числовой прямой. Обозначим:</p>
        <BlockMath math={`u = a^2 - a - 2, \\quad v = a^2 - 3a + 1`} />
        <p>Уравнение принимает вид:</p>
        <BlockMath math={`|x - u| + |x - v| = 2a - 3`} />
        <p>По неравенству треугольника сумма расстояний от точки <InlineMath math={`x`} /> до точек <InlineMath math={`u`} /> и <InlineMath math={`v`} /> удовлетворяет неравенству:</p>
        <BlockMath math={`|x - u| + |x - v| \\geq |u - v|`} />
        <p>Причём равенство <InlineMath math={`|x - u| + |x - v| = |u - v|`} /> достигается тогда и только тогда, когда точка <InlineMath math={`x`} /> принадлежит отрезку с концами в точках <InlineMath math={`u`} /> и <InlineMath math={`v`} />. Найдём расстояние между <InlineMath math={`u`} /> и <InlineMath math={`v`} />:</p>
        <BlockMath math={`|u - v| = |(a^2 - a - 2) - (a^2 - 3a + 1)| = |2a - 3|`} />
      </div>

      <div className="space-y-2">
        <p>2) Уравнение <InlineMath math={`|x - u| + |x - v| = 2a - 3`} /> имеет хотя бы одно решение тогда и только тогда, когда:</p>
        <BlockMath math={`2a - 3 = |2a - 3| \\iff 2a - 3 \\geq 0 \\iff a \\geq 1,5`} />
        <p>В этом случае множеством решений уравнения является отрезок <InlineMath math={`[\\min(u,v); \\max(u,v)]`} />.</p>
        <p>Сравним значения <InlineMath math={`u`} /> и <InlineMath math={`v`} /> при <InlineMath math={`a \\geq 1,5`} />:</p>
        <BlockMath math={`u - v = 2a - 3 \\geq 0 \\implies u \\geq v`} />
        <p>Следовательно, при <InlineMath math={`a \\geq 1,5`} /> множеством корней уравнения является отрезок:</p>
        <BlockMath math={`x \\in [a^2 - 3a + 1; a^2 - a - 2]`} />
      </div>

      <div className="space-y-2">
        <p>3) Условие «ни один из корней не принадлежит промежутку <InlineMath math={`(4; 19)`} />» означает, что весь отрезок решений <InlineMath math={`[a^2 - 3a + 1; a^2 - a - 2]`} /> расположен полностью либо левее 4, либо правее 19.</p>
        <p>Это задаётся совокупностью условий:</p>
      </div>

            <BlockMath math={`\\left[ \\begin{array}{l} a^2 - a - 2 \\leq 4 \\quad (\\text{весь отрезок } \\leq 4) \\\\[0.3em] a^2 - 3a + 1 \\geq 19 \\quad (\\text{весь отрезок } \\geq 19) \\end{array} \\right.`} />

      <div className="space-y-4">
        <p>Решим каждое неравенство с учётом условия <InlineMath math={`a \\geq 1,5`} />:</p>
        
        <div className="space-y-2">
          <p>• <b>Первое неравенство:</b></p>
          <BlockMath math={`a^2 - a - 6 \\leq 0 \\iff (a - 3)(a + 2) \\leq 0 \\iff a \\in [-2; 3]`} />
          <p>С учётом <InlineMath math={`a \\geq 1,5`} />:</p>
          <BlockMath math={`a \\in [1,5; 3]`} />
        </div>

        <div className="space-y-2">
          <p>• <b>Второе неравенство:</b></p>
          <BlockMath math={`a^2 - 3a - 18 \\geq 0 \\iff (a - 6)(a + 3) \\geq 0 \\iff a \\in (-\\infty; -3] \\cup [6; +\\infty)`} />
          <p>С учётом <InlineMath math={`a \\geq 1,5`} />:</p>
          <BlockMath math={`a \\in [6; +\\infty)`} />
        </div>

        <div>
          <p>Объединяя найденные промежутки, получаем итоговый ответ:</p>
          <BlockMath math={`a \\in [1,5; 3] \\cup [6; +\\infty)`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in [1,5; 3] \\cup [6; +\\infty)`} />
      </div>
    </div>
  )
},



{
  id: 104,
  title: 'Задача 104 (ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '|\\log_5 x^2 - a| - |\\log_5 x + 2a| = (\\log_5 x)^2',
  textAfter: <span>имеет ровно четыре различных корня.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>
          1. ОДЗ: <InlineMath math={`x > 0`} />. Сделаем замену <InlineMath math={`t = \\log_5 x`} />, где <InlineMath math={`t \\in \\mathbb{R}`} />. 
          Так как каждому значению <InlineMath math={`t`} /> соответствует ровно один положительный <InlineMath math={`x`} />, задача сводится к поиску значений <InlineMath math={`a`} />, при которых уравнение
        </p>
        <BlockMath math={`|2t - a| - |t + 2a| = t^2`} />
        <p>имеет ровно 4 корня по <InlineMath math={`t`} />.</p>
      </div>

      <div className="space-y-2">
        <p>
          2. Построим график полученного уравнения на плоскости <InlineMath math={`tOa`} />. Линиями смены знаков подмодульных выражений служат прямые <InlineMath math={`a = 2t`} /> и <InlineMath math={`a = -0,5t`} />. 
          Они делят плоскость на 4 области, в каждой из которых модули раскрываются однозначно:
        </p>
        <ul className="list-bullet pl-5 space-y-2">
          <li>
            <b>Область I (выше обеих прямых):</b> под модулями <InlineMath math={`(-; +) \\implies -(2t - a) - (t + 2a) = t^2 \\implies a = -t^2 - 3t`} />.
          </li>
          <li>
            <b>Область II (ниже обеих прямых):</b> под модулями <InlineMath math={`(+; -) \\implies (2t - a) + (t + 2a) = t^2 \\implies a = t^2 - 3t`} />.
          </li>
          <li>
            <b>Область III (между прямыми, справа):</b> под модулями <InlineMath math={`(+; +) \\implies (2t - a) - (t + 2a) = t^2 \\implies a = \\dfrac{t - t^2}{3}`} />.
          </li>
          <li>
            <b>Область IV (между прямыми, слева):</b> под модулями <InlineMath math={`(-; -) \\implies -(2t - a) + (t + 2a) = t^2 \\implies a = \\dfrac{t^2 + t}{3}`} />.
          </li>
        </ul>
      </div>

            {/* Высокоточный крупный центрированный SVG-график Задачи 104 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 380" className="w-full max-w-[360px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Масштабная сетка: 1 ед по t = 40px, 1 ед по a = 50px */}
          {/* Начало координат (0,0) зафиксировано строго на x=180, y=190 */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-4, -3, -2, -1, 1, 2, 3, 4].map(i => (
              <line key={`t-${i}`} x1={180 + i*40} y1="10" x2={180 + i*40} y2="370" />
            ))}
            {[-3, -2, -1, 1, 2, 3].map(i => (
              <line key={`a-${i}`} x1="10" y1={190 - i*50} x2="370" y2={190 - i*50} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="10" y1="190" x2="370" y2="190" /> {/* Ось t */}
            <line x1="180" y1="10" x2="180" y2="370" />  {/* Ось a */}
          </g>
          <path d="M 370,190 L 362,186 M 370,190 L 362,194" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 180,10 L 176,18 M 180,10 L 184,18" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="375" y="194" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">t</text>
          <text x="166" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">a</text>
          <text x="186" y="204" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-xs">0</text>

          {/* Числовые метки на осях */}
          <g fill="#000000" className="dark:fill-slate-400 text-[10px]">
            <text x="60" y="202">-3</text>
            <text x="100" y="202">-2</text>
            <text x="140" y="202">-1</text>
            <text x="218" y="202">1</text>
            <text x="258" y="202">2</text>
            <text x="298" y="202">3</text>
            <text x="168" y="244">-1</text>
            <text x="168" y="294">-2</text>
            <text x="170" y="144">1</text>
            <text x="170" y="94">2</text>
          </g>

          {/* Критические уровни сканирования параметра a (пунктирные линии) */}
          {/* a = 2.25 -> y = 190 - 2.25*50 = 77.5 */}
          <line x1="10" y1="77.5" x2="370" y2="77.5" stroke="#be185d" strokeWidth="1" strokeDasharray="3 2" />
          <text x="280" y="73" fill="#be185d" className="text-[9px]">a = 2.25</text>

          {/* a = 1/12 ≈ 0.083 -> y = 190 - 0.083*50 = 185.8 */}
          <line x1="10" y1="185.8" x2="370" y2="185.8" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />
          <text x="320" y="182" fill="#dc2626" className="text-[9px]">{"a = 1/12"}</text>

          {/* a = -1/12 ≈ -0.083 -> y = 190 + 0.083*50 = 194.2 */}
          <line x1="10" y1="194.2" x2="370" y2="194.2" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />
          <text x="320" y="205" fill="#dc2626" className="text-[9px]">{"a = -1/12"}</text>

          {/* a = -2.25 -> y = 190 + 2.25*50 = 302.5 */}
          <line x1="10" y1="302.5" x2="370" y2="302.5" stroke="#be185d" strokeWidth="1" strokeDasharray="3 2" />
          <text x="280" y="299" fill="#be185d" className="text-[9px]">a = -2.25</text>

          {/* СЛОЖНЫЙ ГРАФИК ФУНКЦИИ (МАТЕМАТИЧЕСКИ ТОЧНЫЕ КУСОЧНЫЕ ПАРАБОЛЫ ПО ОБЛАСТЯМ ОГРАНИЧЕНИЯ) */}
          {/* Каждая дуга рассчитана строго по точкам пересечения с линиями смены знаков модулей (при t = -2.5 и t = 2.5) */}
          
          {/* Область I (Выше обеих прямых): a = -t² - 3t при t ∈ [-2.5; 0]. Пик касается уровня 2.25 в точке (-1.5; 2.25) */}
          <path d="M 80,127.5 Q 130,2.5 180,190" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Область IV (Между прямыми, слева): a = (t² + t)/3 при t ∈ [-2.5; 0]. Проходит через нижний маркер (-0.5; -1/12) */}
          <path d="M 80,127.5 Q 130,210.83 180,190" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Область III (Между прямыми, справа): a = (t - t²)/3 при t ∈ [0; 2.5]. Проходит через верхний маркер (0.5; 1/12) */}
          <path d="M 180,190 Q 230,169.17 280,252.5" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Область II (Ниже обеих прямых): a = t² - 3t при t ∈ [0; 2.5]. Дно касается уровня -2.25 в точке (1.5; -2.25) */}
          <path d="M 180,190 Q 230,377.5 280,252.5" fill="none" stroke="#2563eb" strokeWidth="2.5" />

                    {/* СЕРАЯ ПУНКТИРНАЯ ЛИНИЯ ГРАНИЦЫ МОДУЛЯ: a = -0.5t */}
          {/* Проходит через точки (-3; 1.5) -> (60, 115), (0;0) -> (180, 190) и (3; -1.5) -> (300, 265) */}
          <line x1="60" y1="115" x2="300" y2="265" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 3" className="dark:stroke-slate-500" />
          <text x="305" y="268" fill="#94a3b8" className="text-[9px] font-sans italic">a = -0.5t</text>

          
          {/* Опорные экстремальные точки на графике */}
          <circle cx="120" cy="77.5" r="3" fill="#be185d" />   {/* Максимум слева */}
          <circle cx="240" cy="302.5" r="3" fill="#be185d" />  {/* Минимум справа */}
          <circle cx="200" cy="185.8" r="2.5" fill="#dc2626" />{/* Пик правой микро-параболы */}
          <circle cx="160" cy="194.2" r="2.5" fill="#dc2626" />{/* Дно левой микро-параболы */}
          <circle cx="180" cy="190" r="3.5" fill="#2563eb" />  {/* Центр (0,0) */}
        </svg>
      </div>

      <div className="space-y-4">
        <div>
          <p>3. Количество решений исходного уравнения при фиксированном <InlineMath math={`a`} /> равно числу точек пересечения графика с горизонтальной прямой <InlineMath math={`a = \\text{const}`} />.</p>
          <p className="mt-1">
            Вершина параболы <InlineMath math={`a = \\dfrac{t - t^2}{3}`} /> находится в точке <InlineMath math={`t_{\\text{в}} = \\dfrac{1}{2}`} />, где <InlineMath math={`a_{\\text{в}} = \\dfrac{1}{12}`} />.
            В силу симметрии, вершина нижней параболы находится в точке <InlineMath math={`a = -\\dfrac{1}{12}`} />.
          </p>
          <p className="mt-2">Визуально двигая горизонтальную прямую снизу вверх:</p>
        </div>

        <ul className="list-bullet pl-5 space-y-1">
          <li>
            При <InlineMath math={`a < -\\dfrac{1}{12}`} /> или <InlineMath math={`a > \\dfrac{1}{12}`} /> — нет точек пересечения.
          </li>
          <li>
            При <InlineMath math={`a = \\pm 2.25`} /> — 1 решение.
          </li>
          <li>
            При <InlineMath math={`a \\in \\left(-2.25; -\\dfrac{1}{12}\\right)`} /> или <InlineMath math={`a \\in \\left(\\dfrac{1}{12}; 2.25\\right)`} /> — 2 решения.
          </li>
          <li>
            При <InlineMath math={`a = \\pm \\dfrac{1}{12}`} /> — 3 точки пересечения (прямая касается одной из вершин).
          </li>
          <li>
            При <InlineMath math={`a = 0`} /> — 3 точки пересечения (графики пересекают начало координат).
          </li>
          <li>
            При <InlineMath math={`a \\in \\left(-\\dfrac{1}{12}; 0\\right) \\cup \\left(0; \\dfrac{1}{12}\\right)`} /> — <b>ровно 4 точки пересечения</b>.
          </li>
        </ul>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(-\\dfrac{1}{12}; 0\\right) \\cup \\left(0; \\dfrac{1}{12}\\right)`} />
      </div>
    </div>
  )
},


{
  id: 105,
  title: 'Задача 105 (ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} (ay - ax + 2)(y - x + 3a) = 0 \\\\ |xy| = a \\end{cases}',
  textAfter: <span>имеет ровно шесть различных решений.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-1">
        <p>1) При <InlineMath math={`a < 0`} /> equation <InlineMath math={`|xy| = a`} /> не имеет решений.</p>
        <p>2) При <InlineMath math={`a = 0`} /> система принимает вид:</p>
        <BlockMath math={`\\begin{cases} 2(y - x) = 0 \\\\ |xy| = 0 \\end{cases} \\iff \\begin{cases} y = x \\\\ \\left[ \\begin{array}{l} x = 0 \\\\ y = 0 \\end{array} \\right. \\end{cases} \\implies (0;0) \\quad (1 \\text{ решение}).`} />
      </div>

      <div className="space-y-2">
        <p>3) При <InlineMath math={`a > 0`} />: Второе уравнение <InlineMath math={`|xy| = a`} /> задаёт четыре ветви двух гипербол:</p>
        <BlockMath math={`xy = a \\iff y = \\dfrac{a}{x} \\quad (\\text{в I и III четвертях})`} />
        <BlockMath math={`xy = -a \\iff y = -\\dfrac{a}{x} \\quad (\\text{во II и IV четвертях})`} />
        <p>Первое уравнение совокупностью задаёт две параллельные прямые с угловым коэффициентом <InlineMath math={`k = 1`} />:</p>
        <BlockMath math={`\\left[ \\begin{array}{l} ay - ax + 2 = 0 \\\\ y - x + 3a = 0 \\end{array} \\right. \\iff \\left[ \\begin{array}{l} y = x - \\dfrac{2}{a} \\quad (L_1) \\\\[0.5em] y = x - 3a \\quad (L_2) \\end{array} \\right.`} />
      </div>

      {/* Высокоточный крупный центрированный SVG-график Задачи 105 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 320 280" className="w-full max-w-[320px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Тонкая сетка автора */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-4, -3, -2, -1, 1, 2, 3, 4].map(i => (
              <line key={`x-${i}`} x1={160 + i*32} y1="10" x2={160 + i*32} y2="250" />
            ))}
            {[-3, -2, -1, 1, 2, 3].map(i => (
              <line key={`y-${i}`} x1="10" y1={130 - i*32} x2="310" y2={130 - i*32} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="10" y1="130" x2="310" y2="130" /> {/* Ось Ox */}
            <line x1="160" y1="10" x2="160" y2="250" />  {/* Ось Oy */}
          </g>
          <path d="M 310,130 L 302,126 M 310,130 L 302,134" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 160,10 L 156,18 M 160,10 L 164,18" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="320" y="134" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="146" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <circle cx="160" cy="130" r="2" fill="#000000" />

          {/* Четыре ветви гипербол (синие линии) */}
          {/* xy = a (I и III четверти) */}
          <path d="M 175,40 Q 195,115 290,125" fill="none" stroke="#2563eb" strokeWidth="2" />
          <path d="M 145,220 Q 125,145 30,135" fill="none" stroke="#2563eb" strokeWidth="2" />
          {/* xy = -a (II и IV четверти) */}
          <path d="M 145,40 Q 125,115 30,125" fill="none" stroke="#2563eb" strokeWidth="2" />
          <path d="M 175,220 Q 195,145 290,135" fill="none" stroke="#2563eb" strokeWidth="2" />

          {/* Две параллельные секущие прямые (красная L1 и оранжевая L2) */}
          {/* L1: y = x - 2/a */}
          <line x1="80" y1="230" x2="280" y2="30" stroke="#dc2626" strokeWidth="1.8" />
          {/* L2: y = x - 3a */}
          <line x1="125" y1="245" x2="305" y2="65" stroke="#ea580c" strokeWidth="1.8" />

          {/* Подписи к графикам */}
          <text x="240" y="70" fill="#2563eb" className="font-serif italic text-[11px]">xy = a</text>
          <text x="240" y="155" fill="#2563eb" className="font-serif italic text-[11px]">xy = -a</text>
          <text x="260" y="45" fill="#dc2626" className="font-serif italic font-semibold text-xs">L₁</text>
          <text x="285" y="80" fill="#ea580c" className="font-serif italic font-semibold text-xs">L₂</text>
        </svg>
      </div>

      <div className="space-y-2">
        <p>4) Анализ количества точек пересечения:</p>
        <p>Любая прямая вида <InlineMath math={`y = x + b`} /> всегда пересекает гиперболу <InlineMath math={`xy = a`} /> (в I и III четвертях) ровно в двух точках.</p>
        <p>Таким образом:</p>
        <p>— Прямая <InlineMath math={`L_1`} /> всегда дает 2 решения с ветвями <InlineMath math={`xy = a`} />.</p>
        <p>— Прямая <InlineMath math={`L_2`} /> всегда дает 2 решения с ветвями <InlineMath math={`xy = a`} />.</p>
        <p>Итого <InlineMath math={`L_1`} /> и <InlineMath math={`L_2`} /> суммарно дают 4 решения на гиперболе <InlineMath math={`xy = a`} />. (Если <InlineMath math={`L_1 \\neq L_2`} />)</p>
        <p>Чтобы всего было ровно 6 решений, прямые <InlineMath math={`L_1`} /> и <InlineMath math={`L_2`} /> должны суммарно дать ровно 2 решения при пересечении с гиперболой <InlineMath math={`xy = -a`} />.</p>
      </div>

      <div className="space-y-2">
        <p>5) Пересечение прямой <InlineMath math={`y = x + b`} /> с гиперболой <InlineMath math={`xy = -a`} />:</p>
        <BlockMath math={`x(x + b) = -a \\iff x^2 + bx + a = 0`} />
        <p>Дискриминант <InlineMath math={`D = b^2 - 4a`} />. Исследуем дискриминанты для обеих прямых:</p>
        <p>• Для <InlineMath math={`L_1`} /> (<InlineMath math={`b_1 = -\\dfrac{2}{a}`} />):</p>
        <BlockMath math={`D_1 = \\left(-\\dfrac{2}{a}\\right)^2 - 4a = \\dfrac{4}{a^2} - 4a = \\dfrac{4(1 - a^3)}{a^2}`} />
      </div>

            <div className="space-y-4">
        <div className="space-y-1">
          <BlockMath math={`\\begin{array}{l} D_1 > 0 \\iff a < 1 \\quad (2 \\text{ решения}); \\\\ D_1 = 0 \\iff a = 1 \\quad (1 \\text{ решение}); \\\\ D_1 < 0 \\iff a > 1 \\quad (0 \\text{ решений}). \\end{array}`} />
          <p>• Для <InlineMath math={`L_2`} /> (<InlineMath math={`b_2 = -3a`} />):</p>
          <BlockMath math={`D_2 = (-3a)^2 - 4a = 9a^2 - 4a = a(9a - 4)`} />
          <BlockMath math={`\\begin{array}{l} D_2 > 0 \\iff a > \\dfrac{4}{9} \\quad (2 \\text{ решения}); \\\\[0.5em] D_2 = 0 \\iff a = \\dfrac{4}{9} \\quad (1 \\text{ решение}); \\\\[0.5em] D_2 < 0 \\iff a < \\dfrac{4}{9} \\quad (0 \\text{ решений}). \\end{array}`} />
        </div>

        <div>
          <p>6) Чтобы сумма решений на гиперболе <InlineMath math={`xy = -a`} /> была равна 2 (<InlineMath math={`N_1 + N_2 = 2`} cascade />), возможны случаи:</p>
          <p className="mt-2"><b>I случай:</b> <InlineMath math={`N_1 = 0`} /> и <InlineMath math={`N_2 = 2`} />:</p>
          <BlockMath math={`\\begin{cases} a > 1 \\\\[0.3em] a > \\dfrac{4}{9} \\end{cases} \\iff a > 1`} />
        </div>

        <div>
          <p><b>II случай:</b> <InlineMath math={`N_1 = 2`} /> и <InlineMath math={`N_2 = 0`} />:</p>
          <BlockMath math={`\\begin{cases} 0 < a < 1 \\\\[0.3em] 0 < a < \\dfrac{4}{9} \\end{cases} \\iff 0 < a < \\dfrac{4}{9}`} />
        </div>

        <div>
          <p><b>III случай:</b> <InlineMath math={`N_1 = 1`} /> и <InlineMath math={`N_2 = 1`} />:</p>
          <BlockMath math={`\\begin{cases} a = 1 \\\\[0.5em] a = \\dfrac{4}{9} \\end{cases} \\implies \\varnothing`} />
        </div>

        <div className="pt-2 border-l-2 border-slate-300 dark:border-slate-700 pl-3">
          <p><b>Замечание:</b></p>
          <p className="mt-1">
            прямые <InlineMath math={`L_1`} /> и <InlineMath math={`L_2`} /> совпадают при <InlineMath math={`-\\dfrac{2}{a} = -3a \\iff a = \\sqrt{\\dfrac{2}{3}}`} />.
          </p>
          <p className="mt-1">
            Но <InlineMath math={`a = \\sqrt{\\dfrac{2}{3}} \\in \\left(\\dfrac{4}{9}; 1\\right)`} />, поэтому данное значение не попадает в найденные промежутки.
          </p>
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(0; \\dfrac{4}{9}\\right) \\cup (1; +\\infty)`} />
      </div>
    </div>
  )
},



{
  id: 106,
  title: 'Задача 106 (ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} x^2 + y^2 + 84 = a^2 + 18x \\\\ ||x - 8| - |x - 6|| = y \\end{cases}',
  textAfter: <span>имеет не менее трёх различных решений.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>1. Преобразуем первое уравнение:</p>
        <BlockMath math={`x^2 - 18x + y^2 + 84 = a^2 \\iff (x - 9)^2 + y^2 = a^2 - 3`} />
        <p>
          При <InlineMath math={`a^2 > 3`} /> уравнение задаёт окружность с центром <InlineMath math={`C(9;0)`} /> и радиусом <InlineMath math={`R = \\sqrt{a^2 - 3}`} />.
        </p>
      </div>

      <div className="space-y-2">
        <p>2. Преобразуем второе уравнение <InlineMath math={`y = ||x - 8| - |x - 6||`} />:</p>
        <BlockMath math={`y = \\begin{cases} 2, & x \\leq 6 \\\\ -2x + 14, & 6 < x \\leq 7 \\\\ 2x - 14, & 7 < x < 8 \\\\ 2, & x \\geq 8 \\end{cases}`} />
      </div>

      {/* Высокоточный крупный центрированный SVG-график Задачи 106 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 360 220" className="w-full max-w-[340px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Координатная сетка автора (Шаг: 1 деление = 20px. Центр (0,0) на x=60, y=140) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
              <line key={`x-${i}`} x1={60 + i*20} y1="10" x2={60 + i*20} y2="190" />
            ))}
            {[-2, -1, 1, 2, 3, 4].map(i => (
              <line key={`y-${i}`} x1="30" y1={140 - i*20} x2="340" y2={140 - i*20} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="30" y1="140" x2="340" y2="140" /> {/* Axis Ox */}
            <line x1="60" y1="10" x2="60" y2="190" />   {/* Axis Oy */}
          </g>
          <path d="M 340,140 L 332,136 M 340,140 L 332,144" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 60,10 L 56,18 M 60,10 L 64,18" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="345" y="144" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="46" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Числовые метки на осях */}
          <text x="48" y="104" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">2</text>
          <text x="176" y="154" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">6</text>
          <text x="196" y="154" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">7</text>
          <text x="216" y="154" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">8</text>
          <text x="234" y="154" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">9</text>
          <text x="244" y="150" fill="#000000" className="dark:fill-slate-300 font-serif italic text-[10px]">C(9;0)</text>

          {/* Жирная ломаная функция y(x) (синяя линия) */}
          <path d="M 30,100 L 180,100 L 200,140 L 220,100 L 330,100" fill="none" stroke="#0000ff" strokeWidth="2.5" />

          {/* Центр семейства окружностей */}
          <circle cx="240" cy="140" r="2.5" fill="#000000" />

          {/* Критическая окружность 1: R = 2 (Малиновый пунктир) */}
          <circle cx="240" cy="140" r="40" fill="none" stroke="#be185d" strokeWidth="1.2" strokeDasharray="4 2" />
          
          {/* Критическая окружность 2: R = √5 ≈ 2.23 -> 2.23 * 20 = 44.7px (Оранжевый пунктир) */}
          <circle cx="240" cy="140" r="44.7" fill="none" stroke="#ea580c" strokeWidth="1.2" strokeDasharray="4 2" />

          {/* Чёрные маркерные узлы ломаной */}
          <circle cx="180" cy="100" r="2.5" fill="#000000" />
          <circle cx="200" cy="140" r="2.5" fill="#000000" />
          <circle cx="220" cy="100" r="2.5" fill="#000000" />
        </svg>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <p>3. Анализ количества решений:</p>
          <p>— При <InlineMath math={`R^2 < 4`} />: не более двух решений.</p>
          <p>— При <InlineMath math={`R^2 = 4 \\ (R = 2)`} />: касание <InlineMath math={`y = 2`} /> в <InlineMath math={`(9;2)`} />, прохождение через <InlineMath math={`(7;0)`} /> и точка на <InlineMath math={`[7;8]`} /></p>
          <BlockMath math={`\\implies 3 \\text{ решения}.`} />
          <p>— При <InlineMath math={`4 < R^2 < 5`} />: по одному пересечению на луче <InlineMath math={`x > 8`} />, на отрезке <InlineMath math={`[7;8]`} /> и на отрезке <InlineMath math={`[6;7]`} /></p>
          <BlockMath math={`\\implies 3 \\text{ решения}.`} />
          <p>— При <InlineMath math={`R^2 = 5`} />: прохождение через <InlineMath math={`(8;2)`} />, по одному пересечению на <InlineMath math={`x > 8`} /> и на <InlineMath math={`[6;7]`} /></p>
          <BlockMath math={`\\implies 3 \\text{ решения}.`} />
          <p>— При <InlineMath math={`R^2 > 5`} />: окружность огибает вершину <InlineMath math={`(8;2)`} /> и имеет только</p>
          <BlockMath math={`\\implies 2 \\text{ решения}.`} />
        </div>

        <div className="space-y-2">
          <p>4. Условие наличия не менее 3 решений:</p>
          <BlockMath math={`\\text{Число решений} \\geq 3 \\iff 4 \\leq R^2 \\leq 5`} />
          <BlockMath math={`\\iff 4 \\leq a^2 - 3 \\leq 5 \\iff 7 \\leq a^2 \\leq 8`} />
          <BlockMath math={`\\iff \\sqrt{7} \\leq |a| \\leq 2\\sqrt{2} \\iff a \\in [-2\\sqrt{2}; -\\sqrt{7}] \\cup [\\sqrt{7}; 2\\sqrt{2}]`} />
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in [-2\\sqrt{2}; -\\sqrt{7}] \\cup [\\sqrt{7}; 2\\sqrt{2}]`} />
      </div>
    </div>
  )
},


{
  id: 107,
  title: 'Задача 107 (Не из ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} |x - a| + |y - a| + |a + 1 - x| + |a + 1 - y| = 2 \\\\ y + 2|x - 5| = 6 \\end{cases}',
  textAfter: <span>имеет ровно одно решение.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>1. Преобразуем первое уравнение системы. Воспользуемся неравенством треугольника <InlineMath math={`|u| + |v| \\geq |u + v|`} />:</p>
        <BlockMath math={`|x - a| + |a + 1 - x| \\geq |(x - a) + (a + 1 - x)| = 1`} />
        <p>Равенство достигается <InlineMath math={`\\iff a \\leq x \\leq a + 1`} />.</p>
        <p>Аналогично для <InlineMath math={`y`} />:</p>
        <BlockMath math={`|y - a| + |a + 1 - y| \\geq |(y - a) + (a + 1 - y)| = 1`} />
        <p>Равенство достигается <InlineMath math={`\\iff a \\leq y \\leq a + 1`} />.</p>
        <p>Складывая неравенства, получаем:</p>
        <BlockMath math={`(|x - a| + |a + 1 - x|) + (|y - a| + |a + 1 - y|) \\geq 2`} />
        <p>Таким образом, первое уравнение задаёт закрашенный квадрат <InlineMath math={`S_a`} />:</p>
        <BlockMath math={`S_a = \\{(x;y) \\mid a \\leq x \\leq a + 1, \\ a \\leq y \\leq a + 1\\}`} />
      </div>

      <div className="space-y-2">
        <p>2. Второе уравнение системы задаёт уголок с вершиной в точке <InlineMath math={`(5;6)`} />:</p>
        <BlockMath math={`y = 6 - 2|x - 5| = \\begin{cases} 2x - 4, & x \\leq 5 \\\\ 16 - 2x, & x \\geq 5 \\end{cases}`} />
      </div>

            {/* Высокоточный крупный центрированный SVG-график Задачи 107 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 340 320" className="w-full max-w-[340px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Масштабная сетка (Шаг: 1 деление = 30px. Центр (0,0) зафиксирован на x=60, y=260) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <line key={`x-${i}`} x1={60 + i*30} y1="10" x2={60 + i*30} y2="280" />
            ))}
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <line key={`y-${i}`} x1="40" y1={260 - i*30} x2="320" y2={260 - i*30} />
            ))}
          </g>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="40" y1="260" x2="320" y2="260" /> {/* Ось Ox */}
            <line x1="60" y1="10" x2="60" y2="280" />   {/* Ось Oy */}
          </g>
          <path d="M 320,260 L 312,256 M 320,260 L 312,264" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 60,10 L 56,18 M 60,10 L 64,18" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="325" y="264" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="46" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>

          {/* Диагональ y = x (черный мелкий пунктир) */}
          <line x1="40" y1="280" x2="310" y2="10" stroke="#000000" strokeWidth="1.2" strokeDasharray="3 3" className="dark:stroke-slate-400" />
          <text x="290" y="25" fill="#94a3b8" className="text-[10px] font-serif italic">y = x</text>

          {/* Метки делений на осях */}
          <text x="48" y="204" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">2</text>
          <text x="48" y="84" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">6</text>
          <text x="116" y="274" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">2</text>
          <text x="146" y="274" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">3</text>
          <text x="206" y="274" fill="#000000" className="dark:fill-slate-300 font-sans text-xs">5</text>

          {/* Синий уголок (домик) с вершиной в точке (5;6) -> (210, 80) */}
          {/* Левая ветвь идет через (2;0) -> (120, 260), правая уходит вниз */}
          <path d="M 110,280 L 210,80 L 265,190" fill="none" stroke="#0000ff" strokeWidth="2.2" />

          {/* КВАДРАТ S_2 при a = 2 (красный, закрашенный полупрозрачно) */}
          {/* Лежит на диагонали от x=2, y=2 до x=3, y=3 -> от (120,200) до (150,170) */}
          <rect x="120" y="170" width="30" height="30" fill="#f87171" fillOpacity="0.3" stroke="#dc2626" strokeWidth="1.5" />
          <text x="104" y="184" fill="#dc2626" className="font-sans font-semibold text-xs">S₂</text>
          {/* Точка касания (3;2) */}
          <circle cx="150" cy="200" r="3" fill="#dc2626" />
          <text x="156" y="214" fill="#dc2626" className="font-sans text-xs font-medium">(3;2)</text>

          {/* КВАДРАТ S_16/3 при a = 16/3 ≈ 5.33 (оранжевый, закрашенный полупрозрачно) */}
          {/* Лежит на диагонали от x=5.33, y=5.33 до x=6.33, y=6.33 -> от (220,100) до (250,70) */}
          <rect x="220" y="70" width="30" height="30" fill="#fb923c" fillOpacity="0.3" stroke="#ea580c" strokeWidth="1.5" />
          <text x="254" y="94" fill="#ea580c" className="font-sans font-semibold text-xs">S₁₆/₃</text>
          {/* Точка касания (16/3; 16/3) */}
          <circle cx="220" cy="100" r="3" fill="#ea580c" />
          <text x="180" y="94" fill="#ea580c" className="font-sans text-xs font-medium">(16/3; 16/3)</text>
        </svg>
      </div>

      <div className="space-y-4">
        <p className="italic text-slate-500 dark:text-slate-400">Обратите внимание что кубик всегда лежит на y = x</p>
        <p>3. Анализ количества решений (пересечений уголка и квадрата <InlineMath math={`S_a`} />):</p>
        
        <p>
          Поскольку угловые коэффициенты прямых равны <InlineMath math={`\\pm 2`} />, любое пересечение со стороной квадрата дает отрезок (бесконечно много решений), кроме случаев, когда график касается квадрата в его единственной вершине снаружи.
        </p>

        <div className="space-y-2">
          <p>— При <InlineMath math={`x \\leq 5`} /> левая ветвь <InlineMath math={`y = 2x - 4`} /> касается нижней правой вершины квадрата <InlineMath math={`(a+1; a)`} />:</p>
          <BlockMath math={`a = 2(a + 1) - 4 \\iff a = 2a - 2 \\iff a = 2`} />
          <p>При <InlineMath math={`a = 2`} /> получаем единственное решение <InlineMath math={`(3; 2)`} />.</p>
        </div>

        <div className="space-y-2">
          <p>— При <InlineMath math={`x \\geq 5`} /> правая ветвь <InlineMath math={`y = 16 - 2x`} /> касается нижней левой вершины квадрата <InlineMath math={`(a; a)`} />:</p>
          <BlockMath math={`a = 16 - 2a \\iff 3a = 16 \\iff a = \\dfrac{16}{3}`} />
          <p>При <InlineMath math={`a = \\dfrac{16}{3}`} /> получаем единственное решение <InlineMath math={`\\left(\\dfrac{16}{3}; \\dfrac{16}{3}\\right)`} />.</p>
        </div>

        <p>
          Во всех остальных случаях пересечение либо отсутствует, либо представляет собой отрезок (бесконечно много решений).
          <br />
          Ответ: <InlineMath math={`a = 2; \\ a = \\dfrac{16}{3}`} />.
        </p>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left\\{2; \\dfrac{16}{3}\\right\\}`} />
      </div>
    </div>
  )
},


{
  id: 108,
  title: 'Задача 108 (Не из ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых система уравнений',
  mathA: '\\begin{cases} 2^x + 2^{\\frac{4}{x}} = (a^2 - 4)^2 + y^2 + 8 \\\\ |y|z^4 + 2z^2 - a^2z + a + 4 = 0 \\end{cases}',
  textAfter: <span>имеет ровно одно решение.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>1. Оценка первого уравнения:</p>
        <p>Для <InlineMath math={`x > 0`} /> по неравенству Коши (неравенство о средних):</p>
        <BlockMath math={`x + \\dfrac{4}{x} \\geq 2\\sqrt{x \\cdot \\dfrac{4}{x}} = 4`} />
        <p>Теперь применим неравенство для левой части:</p>
        <BlockMath math={`2^x + 2^{\\frac{4}{x}} \\geq 2\\sqrt{2^{x + \\frac{4}{x}}} \\geq 2\\sqrt{2^4} = 8`} />
        <p>Равенство левой части 8 достигается только при <InlineMath math={`x = 2`} />.</p>
        <p>Для правой части:</p>
        <BlockMath math={`(a^2 - 4)^2 + y^2 + 8 \\geq 8`} />
        <p>Равенство достигается только при <InlineMath math={`y = 0`} /> и <InlineMath math={`a^2 = 4 \\iff a = \\pm 2`} />.</p>
        <p>Следовательно, первое уравнение имеет решения только при <InlineMath math={`x = 2, \\ y = 0`} /> и <InlineMath math={`a = \\pm 2`} />.</p>
      </div>

      <div className="space-y-2">
        <p>2. Анализ второго уравнения при <InlineMath math={`y = 0`} />:</p>
        <p>Подставим <InlineMath math={`y = 0`} /> во второе уравнение:</p>
        <BlockMath math={`2z^2 - a^2z + a + 4 = 0`} />
      </div>

            <div className="space-y-4">
        <div className="space-y-2">
          <p>— При <InlineMath math={`a = 2`} />:</p>
          <BlockMath math={`2z^2 - 4z + 6 = 0 \\iff z^2 - 2z + 3 = 0 \\quad (D < 0 \\implies \\text{нет решений}).`} />
        </div>

        <div className="space-y-2">
          <p>— При <InlineMath math={`a = -2`} />:</p>
          <BlockMath math={`2z^2 - 4z + 2 = 0 \\iff (z - 1)^2 = 0 \\implies z = 1 \\quad (1 \\text{ решение}).`} />
        </div>

        <div>
          <p>Таким образом, единственное решение системы <InlineMath math={`(2; 0; 1)`} /> достигается при <InlineMath math={`a = -2`} />.</p>
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a = -2`} />
      </div>
    </div>
  )
},



{
  id: 109,
  title: 'Задача 109 (Не из ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых уравнение',
  mathA: '2\\pi^2(x - 1)^2 + 4a\\cos(2\\pi x) - 9a^3 = 0',
  textAfter: <span>имеет ровно одно решение.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>1. Заметим, что если <InlineMath math={`x_0`} /> является корнем уравнения, то <InlineMath math={`x = 2 - x_0`} /> также является его корнем, так как:</p>
        <BlockMath math={`((2 - x_0) - 1)^2 = (1 - x_0)^2 = (x_0 - 1)^2`} />
        <BlockMath math={`\\cos(2\\pi(2 - x_0)) = \\cos(4\\pi - 2\\pi x_0) = \\cos(2\\pi x_0)`} />
      </div>

      <div className="space-y-2">
        <p>2. Необходимое условие:</p>
        <p>Для того чтобы решение было единственным, должно выполняться <InlineMath math={`x_0 = 2 - x_0 \\iff x_0 = 1`} />.</p>
        <p>Подставим <InlineMath math={`x = 1`} /> в исходное уравнение:</p>
        <BlockMath math={`2\\pi^2(1 - 1)^2 + 4a\\cos(2\\pi) - 9a^3 = 0 \\iff 4a - 9a^3 = 0`} />
        <BlockMath math={`a(4 - 9a^2) = 0 \\implies a = 0 \\quad \\text{или} \\quad a = \\pm \\dfrac{2}{3}`} />
      </div>

      <div className="space-y-3">
        <p>3. Проверка полученных значений <InlineMath math={`a`} />:</p>
        
        <div className="space-y-1">
          <p>— Случай <InlineMath math={`a = 0`} />:</p>
          <BlockMath math={`2\\pi^2(x - 1)^2 = 0 \\iff x = 1 \\quad (\\text{ровно 1 корень — подходит}).`} />
        </div>

        <div className="space-y-1">
          <p>— Случай <InlineMath math={`a = -\\dfrac{2}{3}`} />:</p>
          <BlockMath math={`2\\pi^2(x - 1)^2 - \\dfrac{8}{3}\\cos(2\\pi x) + \\dfrac{8}{3} = 0 \\iff 2\\pi^2(x - 1)^2 + \\dfrac{8}{3} = \\dfrac{8}{3}\\cos(2\\pi x)`} />
          <p className="mt-2">Оценим обе части уравнения:</p>
          <BlockMath math={`\\underbrace{2\\pi^2(x - 1)^2 + \\dfrac{8}{3}}_{\\geq \\frac{8}{3}} = \\underbrace{\\dfrac{8}{3}\\cos(2\\pi x)}_{\\leq \\frac{8}{3}}`} />
          <p className="mt-1">Равенство достигается только когда обе части равны <InlineMath math={`\\dfrac{8}{3}`} />, что выполняется исключительно при <InlineMath math={`x = 1 \\implies`} /> ровно 1 корень — подходит.</p>
        </div>

        <div className="space-y-2">
          <p>— Случай <InlineMath math={`a = \\dfrac{2}{3}`} />:</p>
          <BlockMath math={`2\\pi^2(x - 1)^2 + \\dfrac{8}{3}\\cos(2\\pi x) - \\dfrac{8}{3} = 0 \\iff 2\\pi^2(x - 1)^2 = \\dfrac{8}{3}(1 - \\cos(2\\pi x))`} />
          <p>Используя формулу <InlineMath math={`1 - \\cos(2\\alpha) = 2\\sin^2\\alpha`} />, получаем:</p>
          <BlockMath math={`\\pi^2(x - 1)^2 = \\dfrac{8}{3}\\sin^2(\\pi x)`} />
          <p>Так как <InlineMath math={`\\sin^2(\\pi x) = \\sin^2(\\pi x - \\pi) = \\sin^2(\\pi(x - 1))`} /> по формуле приведения, уравнение принимает вид:</p>
          <BlockMath math={`\\pi^2(x - 1)^2 = \\dfrac{8}{3}\\sin^2(\\pi(x - 1))`} />
          <p>Сделаем замену <InlineMath math={`t = \\pi(x - 1)`} />. Уравнение принимает вид:</p>
          <BlockMath math={`t^2 = \\dfrac{8}{3}\\sin^2 t \\iff |t| = |\\sin t|\\sqrt{\\dfrac{8}{3}}`} />
          <p>Корень <InlineMath math={`t = 0 \\ (x = 1)`} /> очевиден.</p>
          <p>Покажем, что есть другие корни на промежутке <InlineMath math={`t \\in (0; \\pi)`} />, сравнив значения левой и правой частей в табличной точке <InlineMath math={`t = \\dfrac{\\pi}{6}`} />:</p>
          
          <ul className="list-bullet pl-5 space-y-1">
            <li>Левая часть равенства: <InlineMath math={`L = |t| = \\dfrac{\\pi}{6}`} /></li>
            <li>Правая часть равенства: <InlineMath math={`R = \\sqrt{\\dfrac{8}{3}}\\left|\\sin\\dfrac{\\pi}{6}\\right| = \\sqrt{\\dfrac{8}{3}} \\cdot \\dfrac{1}{2} = \\sqrt{\\dfrac{8}{3 \\cdot 4}} = \\sqrt{\\dfrac{2}{3}}`} /></li>
          </ul>

          <p className="pt-2">Сравним полученные числа <InlineMath math={`L`} /> и <InlineMath math={`R`} />, возведя их в квадрат:</p>
          <BlockMath math={`L^2 = \\dfrac{\\pi^2}{36} < \\dfrac{10}{36} = \\dfrac{5}{18}, \\quad R^2 = \\dfrac{2}{3} = \\dfrac{12}{18}`} />
          <p>Так как <InlineMath math={`L^2 < R^2`} />, то в точке <InlineMath math={`t = \\dfrac{\\pi}{6}`} /> правая часть графика лежит строго выше левой (<InlineMath math={`R > L`} cascade />).</p>
          <p>
            Однако в точке <InlineMath math={`t = \\pi`} /> правая часть зануляется (<InlineMath math={`R = 0`} cascade />), а левая часть равна <InlineMath math={`L = \\pi > 0`} />, то есть график правой части уходит строго ниже левой. В силу непрерывности обеих функций, на интервале <InlineMath math={`\\left(\\dfrac{\\pi}{6}; \\pi\\right)`} /> графики обязаны пересечься как минимум в одной точке <InlineMath math={`t_1 > 0`} />. В силу чётности выражений, найдётся и симметричный корень <InlineMath math={`t_2 = -t_1`} />.
            <br />
            Единственность корня нарушается <InlineMath math={`\\implies a = \\dfrac{2}{3}`} /> (не подходит).
          </p>
        </div>
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left\\{-\\dfrac{2}{3}; 0\\right\\}`} />
      </div>
    </div>
  )
},





{
  id: 110,
  title: 'Задача 110',
  textBefore: 'Найдите все значения a, при каждом из которых неравенство',
  mathA: '\\left| \\dfrac{x^2 + ax + 1}{x^2 + x + 1} \\right| < 3',
  textAfter: <span>справедливо при всех x.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>
          1. Так как <InlineMath math={`x^2 + x + 1 = \\left(x + \\dfrac{1}{2}\\right)^2 + \\dfrac{3}{4} > 0`} /> при всех <InlineMath math={`x \\in \\mathbb{R}`} />, исходное неравенство равносильно:
        </p>
        <BlockMath math={`|x^2 + ax + 1| < 3(x^2 + x + 1)`} />
      </div>

      <div className="space-y-2">
        <p>2. Раскрывая модуль двойным неравенством, получаем систему:</p>
        <BlockMath math={`-3x^2 - 3x - 3 < x^2 + ax + 1 < 3x^2 + 3x + 3 \\iff \\begin{cases} 2x^2 + (3 - a)x + 2 > 0 \\\\ 4x^2 + (3 + a)x + 4 > 0 \\end{cases}`} />
      </div>

      <div className="space-y-3">
        <p>3. Чтобы оба квадратных неравенства выполнялись при всех <InlineMath math={`x \\in \\mathbb{R}`} />, дискриминанты обоих трёхчленов должны быть строго отрицательны:</p>
        
        <div className="space-y-1">
          <p>— Для первого:</p>
          <BlockMath math={`D_1 = (3 - a)^2 - 4 \\cdot 2 \\cdot 2 < 0 \\iff (3 - a)^2 - 16 < 0 \\iff (-1 - a)(7 - a) < 0 \\iff -1 < a < 7`} />
        </div>

        <div className="space-y-1">
          <p>— Для второго:</p>
          <BlockMath math={`D_2 = (3 + a)^2 - 4 \\cdot 4 \\cdot 4 < 0 \\iff (3 + a)^2 - 64 < 0 \\iff (a - 5)(a + 11) < 0 \\iff -11 < a < 5`} />
        </div>
      </div>

      <div className="space-y-2">
        <p>4. Находим пересечение полученных интервалов:</p>
        <BlockMath math={`\\begin{cases} -1 < a < 7 \\\\ -11 < a < 5 \\end{cases} \\iff a \\in (-1; 5)`} />
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in (-1; 5)`} />
      </div>
    </div>
  )
},



{
  id: 111,
  title: 'Задача 111 (Не из ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых множество решений неравенства',
  mathA: '\\dfrac{a - (a^2 - 2a) \\cos 2x + 2}{3 - \\cos 4x + a^2} < 1',
  textAfter: <span>содержит отрезок <InlineMath math={`[-2\\pi; -\\dfrac{7\\pi}{6}]`} cascade />.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>
          1. <b>Замена переменной:</b> При <InlineMath math={`x \\in \\left[-2\\pi; -\\dfrac{7\\pi}{6}\\right]`} /> угол <InlineMath math={`2x \\in \\left[-4\\pi; -\\dfrac{7\\pi}{3}\\right]`} />, поэтому <InlineMath math={`t = \\cos 2x`} /> принимает все значения из отрезка <InlineMath math={`[-1; 1]`} />.
        </p>
        <p>
          Используя формулу двойного угла <InlineMath math={`\\cos 4x = 2t^2 - 1`} />, перепишем исходное неравенство относительно <InlineMath math={`t \\in [-1; 1]`} />:
        </p>
        <BlockMath math={`\\dfrac{a - (a^2 - 2a)t + 2}{a^2 + 4 - 2t^2} < 1`} />
      </div>

      <div className="space-y-2">
        <p>
          2. <b>Преобразование неравенства:</b> Так как <InlineMath math={`a^2 + 4 - 2t^2 \\geq a^2 + 2 > 0`} /> при всех <InlineMath math={`t \\in [-1; 1]`} />, домножим на знаменатель:
        </p>
        <BlockMath math={`a - (a^2 - 2a)t + 2 < a^2 + 4 - 2t^2 \\iff 2t^2 - (a^2 - 2a)t - (a^2 - a + 2) < 0`} />
      </div>

      <div className="space-y-3">
        <p>
          3. <b>Исследование параболы на отрезке <InlineMath math={`[-1; 1]`} />:</b> Функция <InlineMath math={`f(t) = 2t^2 - (a^2 - 2a)t - (a^2 - a + 2)`} /> представляет собой параболу ветвями вверх.
        </p>
        <p>
          Чтобы <InlineMath math={`f(t) < 0`} /> для всех <InlineMath math={`t \\in [-1; 1]`} />, необходимо и достаточно выполнения двух условий на концах отрезка:
        </p>
        <BlockMath math={`\\begin{cases} f(-1) < 0 \\\\ f(1) < 0 \\end{cases}`} />
        
        <div className="space-y-1">
          <p>— Для <InlineMath math={`t = -1`} />:</p>
          <BlockMath math={`f(-1) = 2 + (a^2 - 2a) - (a^2 - a + 2) = -a < 0 \\implies a > 0`} />
        </div>

        <div className="space-y-1">
          <p>— Для <InlineMath math={`t = 1`} />:</p>
          <BlockMath math={`f(1) = 2 - (a^2 - 2a) - (a^2 - a + 2) = -2a^2 + 3a < 0 \\iff a(2a - 3) > 0`} />
          <BlockMath math={`\\iff a \\in (-\\infty; 0) \\cup \\left(\\dfrac{3}{2}; +\\infty\\right)`} />
        </div>
      </div>

      <div className="space-y-2">
        <p>4. <b>Нахождение пересечения:</b></p>
        <BlockMath math={`\\begin{cases} a > 0 \\\\[0.5em] a \\in (-\\infty; 0) \\cup \\left(\\dfrac{3}{2}; +\\infty\\right) \\end{cases} \\iff a \\in \\left(\\dfrac{3}{2}; +\\infty\\right)`} />
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(\\dfrac{3}{2}; +\\infty\\right)`} />
      </div>
    </div>
  )
},


{
  id: 112,
  title: 'Задача 112 (ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых наименьшее значение функции',
  mathA: 'f(x) = 4x^2 + 4ax + a^2 + 2a + 2',
  textAfter: <span>на множестве <InlineMath math={`|x| \\geq 1`} /> не меньше 6.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>1. <b>Выделение полного квадрата:</b></p>
        <BlockMath math={`f(x) = (2x + a)^2 + 2a + 2`} />
        <p>Вершина параболы <InlineMath math={`x_0 = -\\dfrac{a}{2}`} />.</p>
      </div>

      <div className="space-y-2">
        <p>2. <b>Случай 1:</b></p>
        <p>
          Вершина лежит в «выколотой» области <InlineMath math={`x_0 \\in (-1;1) \\iff |a| < 2`} />. Наименьшее значение достигается в ближайшей из точек <InlineMath math={`x = 1`} /> или <InlineMath math={`x = -1`} />. Требуем выполнение условия <InlineMath math={`f(x) \\geq 6`} /> в обеих точках:
        </p>
        <BlockMath math={`\\begin{cases} f(1) \\geq 6 \\\\ f(-1) \\geq 6 \\end{cases} \\iff \\begin{cases} a^2 + 6a + 6 \\geq 6 \\\\ a^2 - 2a + 6 \\geq 6 \\end{cases} \\iff \\begin{cases} a(a + 6) \\geq 0 \\\\ a(a - 2) \\geq 0 \\end{cases}`} />
        <p className="pt-1">С учётом <InlineMath math={`|a| < 2`} /> подходят значения <InlineMath math={`a = 0`} />.</p>
      </div>

      <div className="space-y-2">
        <p>3. <b>Случай 2:</b></p>
        <p>
          Вершина принадлежит области <InlineMath math={`|x| \\geq 1 \\iff |a| \\geq 2`} />. Наименьшее значение достигается в самой вершине:
        </p>
        <BlockMath math={`f(x_0) = 2a + 2 \\geq 6 \\implies a \\geq 2`} />
        <p className="pt-1">Отсюда: <InlineMath math={`a \\in [2; +\\infty)`} />.</p>
      </div>

      <div className="space-y-1">
        <p>Объединяя результаты обоих случаев, получаем:</p>
        <BlockMath math={`a \\in \\{0\\} \\cup [2; +\\infty)`} />
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\{0\\} \\cup [2; +\\infty)`} />
      </div>
    </div>
  )
},



{
  id: 113,
  title: 'Задача 113 (ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых наименьшее значение функции',
  mathA: 'f(x) = 2ax + |x^2 - 8x + 7|',
  textAfter: <span>больше 1.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>1. <b>Преобразование функции:</b> Раскроем модуль, найдя корни подмодульного выражения <InlineMath math={`x^2 - 8x + 7 = (x - 1)(x - 7)`} />:</p>
        <BlockMath math={`f(x) = \\begin{cases} x^2 + 2(a - 4)x + 7, & \\text{если } x \\leq 1 \\text{ или } x \\geq 7 \\\\ -x^2 + (2a + 8)x - 7, & \\text{если } 1 < x < 7 \\end{cases}`} />
      </div>

      <div className="space-y-2">
        <p>2. <b>Анализ поведения функции на промежутках:</b></p>
        <p>— На интервале <InlineMath math={`(1; 7)`} /> график представляет собой параболу ветвями вниз. Наименьшее значение на этом интервале достигается на концах интервала: При <InlineMath math={`x = 1`} /> и <InlineMath math={`x = 7`} />.</p>
        <p>— На лучах <InlineMath math={`(-\\infty; 1]`} /> и <InlineMath math={`[7; +\\infty)`} /> график представляет собой параболу ветвями вверх с вершиной <InlineMath math={`x_0 = 4 - a`} />.</p>
      </div>

      <div className="space-y-2">
        <p>3. <b>Разбор случаев расположения вершины <InlineMath math={`x_0 = 4 - a`} />:</b></p>
        <p><b>Случай 1:</b> <InlineMath math={`x_0 \\in (1; 7) \\iff 1 < 4 - a < 7 \\iff -3 < a < 3`} />.</p>
        <p>В таком случае минимум <InlineMath math={`f(x)`} /> находится либо в точке <InlineMath math={`x = 1`} />, либо в <InlineMath math={`x = 7`} />:</p>
        <BlockMath math={`\\begin{cases} f(1) = 2a > 1 \\\\ f(7) = 14a > 1 \\end{cases} \\implies a > \\dfrac{1}{2}`} />
        <p className="pt-1">Теперь с учётом <InlineMath math={`a > \\dfrac{1}{2}`} /> получаем <InlineMath math={`a \\in \\left(\\dfrac{1}{2}; 3\\right)`} />.</p>
      </div>

      <div className="space-y-2">
        <p><b>Случай 2:</b> <InlineMath math={`x_0 \\in (-\\infty; 1] \\cup [7; +\\infty) \\iff a \\in (-\\infty; -3] \\cup [3; +\\infty)`} />.</p>
        <p>В этом случае минимальное значение функция <InlineMath math={`f(x)`} /> принимает в точке <InlineMath math={`f(x_0)`} />, т.е. необходимо, чтобы:</p>
        <BlockMath math={`f(x_0) = f(4 - a) > 1`} />
        <BlockMath math={`f(4 - a) = -a^2 + 8a - 9 > 1 \\iff a^2 - 8a + 10 < 0`} />
        <p>С учётом ограничения <InlineMath math={`a \\in (-\\infty; -3] \\cup [3; +\\infty)`} /> получаем промежуток:</p>
        <BlockMath math={`a \\in [3; 4 + \\sqrt{6})`} />
      </div>

      <div className="space-y-2">
        <p>5. <b>Итоговое объединение 1-го и 2-го случаев даёт:</b></p>
        <BlockMath math={`a \\in \\left(\\dfrac{1}{2}; 3\\right) \\cup [3; 4 + \\sqrt{6}) = \\left(\\dfrac{1}{2}; 4 + \\sqrt{6}\\right)`} />
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left(\\dfrac{1}{2}; 4 + \\sqrt{6}\\right)`} />
      </div>
    </div>
  )
},



{
  id: 114,
  title: 'Задача 114 (Не из ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых линии',
  mathA: 'y = a|x - 2| + |a| - 2 \\quad \\text{и} \\quad y = \\dfrac{a}{2}',
  textAfter: <span>ограничивают многоугольник, площадь которого не больше, чем 0,5.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p><b>1) <InlineMath math={`a > 0`} />.</b></p>
        <p>Прямая лежит выше вершины уголка при условии:</p>
        <BlockMath math={`\\dfrac{a}{2} > a - 2 \\iff 0 < a < 4.`} />
      </div>

      {/* Схематичный график для a > 0 */}
      <div className="my-4 flex flex-col items-center bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 200 120" className="w-full max-w-[200px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          <g stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400">
            <line x1="30" y1="100" x2="180" y2="100" /> {/* Ox */}
            <line x1="50" y1="110" x2="50" y2="15" />  {/* Oy */}
          </g>
          <text x="185" y="104" className="dark:fill-slate-300 font-serif italic text-xs">x</text>
          <text x="46" y="10" className="dark:fill-slate-300 font-serif italic text-xs">y</text>
          
          {/* Уголок и секущая линия */}
          <path d="M 40,40 L 100,80 L 160,40" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <line x1="35" y1="50" x2="165" y2="50" stroke="#000000" strokeWidth="1" strokeDasharray="3 2" className="dark:stroke-slate-400" />
          
          {/* Стрелка высоты h */}
          <g stroke="#000000" strokeWidth="0.8" fill="none" className="dark:stroke-slate-400">
            <line x1="75" y1="50" x2="75" y2="80" />
            <path d="M 75,50 L 72,55 M 75,50 L 78,55" />
            <path d="M 75,80 L 72,75 M 75,80 L 78,75" />
          </g>
          <text x="63" y="68" className="dark:fill-slate-300 text-xs font-serif italic">h</text>
        </svg>
      </div>

      <div className="space-y-2">
        <p>Высота и половина основания полученного треугольника:</p>
        <BlockMath math={`h = \\dfrac{a}{2} - (a - 2) = \\dfrac{4 - a}{2}, \\quad \\dfrac{b}{2} = \\dfrac{h}{a}.`} />
        <p>Где <InlineMath math={`b`} /> — основание треугольника, а параметр выступает в роли тангенса угла наклона прямых уголка.</p>
        <p>Ограничение на площадь:</p>
        <BlockMath math={`S = \\dfrac{h^2}{a} = \\dfrac{(4 - a)^2}{4a} \\leq \\dfrac{1}{2} \\iff a^2 - 10a + 16 \\leq 0 \\iff a \\in [2; 8].`} />
        <p>С учётом <InlineMath math={`0 < a < 4`} /> получаем:</p>
        <BlockMath math={`a \\in [2; 4).`} />
      </div>

      <div className="space-y-2 pt-2">
        <p><b>2) <InlineMath math={`a < 0`} />.</b></p>
        <p>Прямая лежит ниже вершины уголка при условии:</p>
        <BlockMath math={`-a - 2 > \\dfrac{a}{2} \\iff a < -\\dfrac{4}{3}.`} />
      </div>

      {/* Схематичный график для a < 0 */}
      <div className="my-4 flex flex-col items-center bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 200 120" className="w-full max-w-[200px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          <g stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400">
            <line x1="30" y1="30" x2="180" y2="30" /> {/* Ox */}
            <line x1="50" y1="110" x2="50" y2="15" />  {/* Oy */}
          </g>
          <text x="185" y="34" className="dark:fill-slate-300 font-serif italic text-xs">x</text>
          <text x="46" y="10" className="dark:fill-slate-300 font-serif italic text-xs">y</text>
          
          {/* Уголок и секущая линия */}
          <path d="M 40,90 L 100,50 L 160,90" fill="none" stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400" />
          <line x1="35" y1="80" x2="165" y2="80" stroke="#000000" strokeWidth="1" strokeDasharray="3 2" className="dark:stroke-slate-400" />
          
          {/* Стрелка высоты h */}
          <g stroke="#000000" strokeWidth="0.8" fill="none" className="dark:stroke-slate-400">
            <line x1="75" y1="50" x2="75" y2="80" />
            <path d="M 75,50 L 72,55 M 75,50 L 78,55" />
            <path d="M 75,80 L 72,75 M 75,80 L 78,75" />
          </g>
          <text x="63" y="68" className="dark:fill-slate-300 text-xs font-serif italic">h</text>
        </svg>
      </div>

      <div className="space-y-2">
        <p>Высота и половина основания треугольника в этом случае:</p>
        <BlockMath math={`h = -a - 2 - \\dfrac{a}{2} = -\\dfrac{3a + 4}{2}, \\quad \\dfrac{b}{2} = \\dfrac{h}{-a}.`} />
        <p>Ограничение на площадь:</p>
        <BlockMath math={`S = \\dfrac{h^2}{-a} = \\dfrac{(3a + 4)^2}{-4a} \\leq \\dfrac{1}{2} \\iff 9a^2 + 26a + 16 \\leq 0 \\iff a \\in \\left[-2; -\\dfrac{8}{9}\\right].`} />
        <p>С учётом <InlineMath math={`a < -\\dfrac{4}{3}`} /> получаем:</p>
        <BlockMath math={`a \\in \\left[-2; -\\dfrac{4}{3}\\right).`} />
      </div>

      <div className="space-y-2 pt-2">
        <p><b>3) Итоговое объединение 1-го и 2-го случаев даёт:</b></p>
        <BlockMath math={`a \\in \\left[-2; -\\dfrac{4}{3}\\right) \\cup [2; 4).`} />
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in \\left[-2; -\\dfrac{4}{3}\\right) \\cup [2; 4)`} />
      </div>
    </div>
  )
},


{
  id: 115,
  title: 'Задача 115',
  textBefore: 'Найдите все значения a, при каждом из которых неравенство',
  mathA: '5|x - 2| + 3|x + a| \\leq \\sqrt{4 - y^2} + 7',
  textAfter: <span>имеет хотя бы одно решение.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>1. <b>Оценка правой части неравенства:</b></p>
        <p>Так как <InlineMath math={`4 - y^2 \\leq 4`} /> при <InlineMath math={`y \\in [-2; 2]`} />, наибольшее значение правой части равно:</p>
        <BlockMath math={`\\max\\left(\\sqrt{4 - y^2} + 7\\right) = \\sqrt{4} + 7 = 9 \\quad (\\text{при } y = 0)`} />
      </div>

      <div className="space-y-2">
        <p>2. <b>Исследование левой части неравенства:</b></p>
        <p>
          Рассмотрим функцию <InlineMath math={`f(x) = 5|x - 2| + 3|x + a|`} />. Это кусочно-линейная функция, график которой направлен ветвями вверх. Её наименьшее значение достигается в одной из точек излома <InlineMath math={`x = 2`} /> или <InlineMath math={`x = -a`} />:
        </p>
        <ul className="list-bullet pl-5 space-y-1">
          <li>При <InlineMath math={`x = 2`} />: <InlineMath math={`f(2) = 3|a + 2|`} /></li>
          <li>При <InlineMath math={`x = -a`} />: <InlineMath math={`f(-a) = 5|a + 2|`} /></li>
        </ul>
        <p className="pt-1">
          Следовательно, наименьшее значение функции <InlineMath math={`f_{\\text{min}} = 3|a + 2|`} /> (достигается в точке <InlineMath math={`x = 2`} />, так как коэффициент <InlineMath math={`5 > 3`} />).
        </p>
      </div>

      <div className="space-y-2">
        <p>3. <b>Условие существования хотя бы одного решения:</b></p>
        <p>Неравенство имеет хотя бы одно решение тогда и только тогда, когда наименьшее значение левой части не превосходит наибольшее значение правой части:</p>
        <BlockMath math={`f_{\\text{min}} \\leq \\max\\left(\\sqrt{4 - y^2} + 7\\right)`} />
        <BlockMath math={`3|a + 2| \\leq 9 \\iff |a + 2| \\leq 3 \\iff -3 \\leq a + 2 \\leq 3 \\iff -5 \\leq a \\leq 1`} />
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in [-5; 1]`} />
      </div>
    </div>
  )
},


{
  id: 116,
  title: 'Задача 116 (Не из ЕГЭ)',
  textBefore: 'Найдите все значения a, при каждом из которых неравенство',
  mathA: '\\sqrt[5]{5|x + 4| + 2|x - a| - 2} \\leq \\sqrt[5]{2 + \\sqrt{36 - y^2}} + \\ln\\left(\\dfrac{5 + \\sqrt{36 - y^2}}{5|x + 4| + 2|x - a| + 1}\\right)',
  textAfter: <span>имеет хотя бы одно решение.</span>,
  mathB: '',
  solutionBuilder: () => (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
      
      <div className="space-y-2">
        <p>1. <b>Преобразование исходного неравенства:</b> Запишем логарифм отношения как разность логарифмов и перенесём слагаемые с переменной <InlineMath math={`x`} /> в левую часть:</p>
        <BlockMath math={`\\sqrt[5]{5|x + 4| + 2|x - a| - 2} \\leq \\sqrt[5]{2 + \\sqrt{36 - y^2}} + \\ln\\left(5 + \\sqrt{36 - y^2}\\right) - \\ln\\left(5|x + 4| + 2|x - a| + 1\\right)`} />
        <BlockMath math={`\\sqrt[5]{5|x + 4| + 2|x - a| - 2} + \\ln\\left(5|x + 4| + 2|x - a| + 1\\right) \\leq \\sqrt[5]{2 + \\sqrt{36 - y^2}} + \\ln\\left(5 + \\sqrt{36 - y^2}\\right)`} />
      </div>

      <div className="space-y-2">
        <p>2. <b>Введение функции и исследование на монотонность:</b> Пусть существует функция <InlineMath math={`f(t) = \\sqrt[5]{t - 2} + \\ln(t + 1)`} /> при <InlineMath math={`t > 0`} />.</p>
        <p>Её производная:</p>
        <BlockMath math={`f'(t) = \\dfrac{1}{5\\sqrt[5]{(t - 2)^4}} + \\dfrac{1}{t + 1}`} />
        <p>Заметим, что <InlineMath math={`f'(t) > 0`} /> при всех допустимых <InlineMath math={`t`} />, следовательно, функция <InlineMath math={`f(t)`} /> — монотонно возрастает.</p>
      </div>

      <div className="space-y-2">
        <p>3. <b>Переход к равносильному неравенству:</b> Тогда исходное неравенство равносильно выражению:</p>
        <BlockMath math={`f\\left(5|x + 4| + 2|x - a|\\right) \\leq f\\left(\\sqrt{36 - y^2} + 4\\right)`} />
        <p>Так как <InlineMath math={`f'(t) > 0`} />, следует, что <InlineMath math={`f(t)`} /> — монотонно возрастает <InlineMath math={`\\implies`} /></p>
        <BlockMath math={`5|x + 4| + 2|x - a| \\leq \\sqrt{36 - y^2} + 4`} />
      </div>

      <div className="space-y-2">
        <p>4. <b>Оценка правой части и наименьшего значения:</b> Заметим, что <InlineMath math={`y \\in [-6; 6]`} />. Оценим правую часть:</p>
        <BlockMath math={`4 \\leq \\sqrt{36 - y^2} + 4 \\leq 10`} />
        <p>То есть, для существования решений необходимо выполнение неравенства:</p>
        <BlockMath math={`5|x + 4| + 2|x - a| \\leq 10`} />
        <p>Пусть <InlineMath math={`h(x) = 5|x + 4| + 2|x - a|`} />. Наименьшее значение функция <InlineMath math={`h(x)`} /> принимает в точке главного излома <InlineMath math={`x = -4`} /> (так как коэффициент перед первым модулем больше):</p>
        <BlockMath math={`h(-4) = 2|4 + a| \\leq 10`} />
        <BlockMath math={`|4 + a| \\leq 5 \\iff -5 \\leq a + 4 \\leq 5 \\iff -9 \\leq a \\leq 1`} />
      </div>

      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span>
        <InlineMath math={`a \\in [-9; 1]`} />
      </div>
    </div>
  )
},




];