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

        {/* Компактный математический SVG Рисунок 1. Случай a < 8 */}
        <div className="my-4 flex flex-col items-center bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 400 200" className="w-full max-w-[320px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси координат */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="60" y1="130" x2="340" y2="130" />
              <line x1="200" y1="20" x2="200" y2="180" />
            </g>
            <path d="M 340,130 L 334,126 M 340,130 L 334,134" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 200,20 L 196,28 M 200,20 L 204,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            
            <text x="350" y="134" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
            <text x="195" y="14" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">t</text>

            {/* Пунктирные линии сетки */}
            <g stroke="#000000" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" className="dark:stroke-slate-500">
              <line x1="140" y1="70" x2="140" y2="130" />
              <line x1="260" y1="130" x2="260" y2="170" />
              <line x1="140" y1="70" x2="200" y2="70" />
              <line x1="200" y1="170" x2="260" y2="170" />
            </g>

            {/* Зелёный график f(x) при a < 8 */}
            <path 
              d="M 70,70 L 140,70 L 260,170 L 330,170" 
              fill="none" 
              stroke="#22c55e" 
              strokeWidth="2.2" 
              strokeLinejoin="round"
            />

            {/* Опорные точки */}
            <circle cx="140" cy="130" r="3" fill="#000000" />
            <circle cx="260" cy="130" r="3" fill="#000000" />
            <circle cx="200" cy="70" r="2" fill="#000000" />
            <circle cx="200" cy="170" r="2" fill="#000000" />

            {/* Подписи значений */}
            <text x="136" y="145" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">a</text>
            <text x="256" y="122" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">8</text>
            <text x="162" y="74" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">8 - a</text>
            <text x="162" y="174" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">a - 8</text>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">Рис. 1. Случай a &lt; 8</span>
        </div>

        <p>При раскрытии модулей получаем, что при <InlineMath math={`x \\leq a`} /> функция <InlineMath math={`f(x) = 8 - a`} />, а при <InlineMath math={`x \\geq 8`} /> функция <InlineMath math={`f(x) = a - 8`} />. Область значений функции: <InlineMath math={`E(f) = [a - 8; 8 - a]`} />.</p>
        <p>Каждое из уравнений совокупности имеет ровно один корень тогда и только тогда, когда значения <InlineMath math={`t_1`} /> и <InlineMath math={`t_2`} /> лежат строго между полками графика. Чтобы совокупность суммарно имела ровно два различных решения, оба корня должны попасть внутрь интервала <InlineMath math={`(a - 8; 8 - a)`} /> и не совпадать:</p>

        <BlockMath math={`\\begin{cases} a - 8 < 5a - 2 < 8 - a \\\\ a - 8 < 2a + 2 < 8 - a \\\\ 5a - 2 \\neq 2a + 2 \\end{cases} \\iff \\begin{cases} a > -\\frac{3}{2} \\text{ и } a < \\frac{5}{3} \\\\ a > -10 \\text{ и } a < 2 \\\\ a \\neq \\frac{4}{3} \\end{cases}`} />
        
        <p>С учетом условия <InlineMath math={`a < 8`} />, получаем интервал: <InlineMath math={`a \\in \\left(-\\frac{3}{2}; \\frac{4}{3}\\right) \\cup \\left(\\frac{4}{3}; \\frac{5}{3}\\right).`} /></p>

        <p><b>3) Случай</b> <InlineMath math={`a > 8`} />:</p>

        {/* Компактный математический SVG Рисунок 2. Случай a > 8 */}
        <div className="my-4 flex flex-col items-center bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
          <svg viewBox="0 0 400 200" className="w-full max-w-[320px] h-auto overflow-visible font-sans text-xs select-none">
            {/* Оси координат */}
            <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
              <line x1="60" y1="130" x2="340" y2="130" />
              <line x1="200" y1="20" x2="200" y2="180" />
            </g>
            <path d="M 340,130 L 334,126 M 340,130 L 334,134" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            <path d="M 200,20 L 196,28 M 200,20 L 204,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
            
            {/* Подписи осей */}
            <text x="350" y="134" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">x</text>
            <text x="195" y="14" fill="#000000" className="dark:fill-slate-300 font-serif italic text-base">t</text>

            {/* Пунктирные линии сетки */}
            <g stroke="#000000" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" className="dark:stroke-slate-500">
              <line x1="140" y1="130" x2="140" y2="170" />
              <line x1="260" y1="70" x2="260" y2="130" />
              <line x1="140" y1="170" x2="200" y2="170" />
              <line x1="200" y1="70" x2="260" y2="70" />
            </g>

            {/* Зелёный график f(x) при a > 8 */}
            <path 
              d="M 70,170 L 140,170 L 260,70 L 330,70" 
              fill="none" 
              stroke="#22c55e" 
              strokeWidth="2.2" 
              strokeLinejoin="round"
            />

            {/* Опорные точки */}
            <circle cx="140" cy="130" r="3" fill="#000000" />
            <circle cx="260" cy="130" r="3" fill="#000000" />
            <circle cx="200" cy="70" r="2" fill="#000000" />
            <circle cx="200" cy="170" r="2" fill="#000000" />

            {/* Подписи значений */}
            <text x="136" y="122" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">8</text>
            <text x="256" y="145" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">a</text>
            <text x="162" y="74" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">a - 8</text>
            <text x="162" y="174" fill="#000000" className="dark:fill-slate-300 font-serif text-sm">8 - a</text>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">Рис. 2. Случай a &lt; 8</span>
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
}