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













];