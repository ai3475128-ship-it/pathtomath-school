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







];
