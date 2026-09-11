import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
export const olympiadIntro03Tasks = [


        {
    id: 1,
    title: (
      <span>
        Задача 1 (Телескопическое суммирование)
      </span>
    ),
    textBefore: (
      <span>
        Вычислите сумму:
        <span className="block text-center my-2">
          <InlineMath math={`\\dfrac{1}{1 \\cdot 2} + \\dfrac{1}{2 \\cdot 3} + \\dfrac{1}{3 \\cdot 4} + \\dots + \\dfrac{1}{99 \\cdot 100}`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Телескопический метод</span>
          <div>
            Базовый олимпиадный приём для быстрого суммирования рядов дробей. Его суть заключается в представлении каждого слагаемого в виде разности двух соседних дробей по тождеству:
          </div>
          <BlockMath math={`\\dfrac{1}{n(n+1)} = \\dfrac{1}{n} - \\dfrac{1}{n+1}`} />
          <span className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs mt-1 block">
            💡 При сложении таких разностей абсолютно все промежуточные слагаемые взаимно уничтожаются, оставляя в живых только самый первый и самый последний элементы ряда.
          </span>
        </div>

        <div className="space-y-2 pt-1">
          <div>
            Применим доказанное тождество последовательно к каждому слагаемому нашей суммы:
          </div>
          <BlockMath math={`\\dfrac{1}{1 \\cdot 2} = 1 - \\dfrac{1}{2}`} />
          <BlockMath math={`\\dfrac{1}{2 \\cdot 3} = \\dfrac{1}{2} - \\dfrac{1}{3}`} />
          <BlockMath math={`\\dfrac{1}{3 \\cdot 4} = \\dfrac{1}{3} - \\dfrac{1}{4}`} />
          <div className="text-center font-semibold text-slate-400"> . . .</div>
          <BlockMath math={`\\dfrac{1}{99 \\cdot 100} = \\dfrac{1}{99} - \\dfrac{1}{100}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Запишем всю исходную сумму целиком, подставив вместо каждой дроби полученные разности:
          </div>
          <BlockMath math={`S = \\left(1 - \\dfrac{1}{2}\\right) + \\left(\\dfrac{1}{2} - \\dfrac{1}{3}\\right) + \\left(\\dfrac{1}{3} - \\dfrac{1}{4}\\right) + \\dots + \\left(\\dfrac{1}{99} - \\dfrac{1}{100}\\right)`} />
          <div>
            Раскроем скобки. Заметим, что все промежуточные дроби со знаками минус и плюс взаимно уничтожаются:
          </div>
          <BlockMath math={`S = 1 - \\cancel{\\dfrac{1}{2}} + \\cancel{\\dfrac{1}{2}} - \\cancel{\\dfrac{1}{3}} + \\cancel{\\dfrac{1}{3}} - \\dots - \\cancel{\\dfrac{1}{99}} + \\cancel{\\dfrac{1}{99}} - \\dfrac{1}{100}`} />
          <div>
            В живых остаются только первое и последнее числа ряда. Вычислим итоговую разность:
          </div>
          <BlockMath math={`S = 1 - \\dfrac{1}{100} = \\dfrac{99}{100} = 0.99`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">
            Ответ: 99/100 (или 0.99).
          </div>
        </div>
      </div>
    )
  },


    {
    id: 2,
    title: (
      <span>
        Задача 2 (Телескопическое суммирование)
      </span>
    ),
    textBefore: (
      <span>
        Упростите и вычислите:
        <span className="block text-center my-2">
          <InlineMath math={`\\dfrac{1}{1 + \\sqrt{2}} + \\dfrac{1}{\\sqrt{2} + \\sqrt{3}} + \\dfrac{1}{\\sqrt{3} + \\sqrt{4}} + \\dots + \\dfrac{1}{\\sqrt{99} + \\sqrt{100}}`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2">
          <div>
            Избавимся от иррациональности в знаменателе каждого слагаемого. Для этого домножим числитель и знаменатель каждой дроби на сопряжённое выражение:
          </div>
          <BlockMath math={`\\dfrac{1}{\\sqrt{n} + \\sqrt{n+1}} = \\dfrac{\\sqrt{n+1} - \\sqrt{n}}{(\\sqrt{n+1} + \\sqrt{n})(\\sqrt{n+1} - \\sqrt{n})} = \\dfrac{\\sqrt{n+1} - \\sqrt{n}}{(n+1) - n} = \\sqrt{n+1} - \\sqrt{n}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Применим полученное тождество последовательно к каждому слагаемому нашей суммы:
          </div>
          <BlockMath math={`\\dfrac{1}{1 + \\sqrt{2}} = \\sqrt{2} - 1`} />
          <BlockMath math={`\\dfrac{1}{\\sqrt{2} + \\sqrt{3}} = \\sqrt{3} - \\sqrt{2}`} />
          <BlockMath math={`\\dfrac{1}{\\sqrt{3} + \\sqrt{4}} = \\sqrt{4} - \\sqrt{3}`} />
          <div className="text-center font-semibold text-slate-400">. . .</div>
          <BlockMath math={`\\dfrac{1}{\\sqrt{99} + \\sqrt{100}} = \\sqrt{100} - \\sqrt{99}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Запишем всю исходную сумму целиком, подставив вместо каждой дроби полученные разности корней:
          </div>
          <BlockMath math={`S = (\\sqrt{2} - 1) + (\\sqrt{3} - \\sqrt{2}) + (\\sqrt{4} - \\sqrt{3}) + \\dots + (\\sqrt{100} - \\sqrt{99})`} />
          <div>
            Раскроем скобки. Заметим, что все промежуточные корни со знаками плюс и минус взаимно уничтожаются:
          </div>
          <BlockMath math={`S = -1 + \\cancel{\\sqrt{2}} - \\cancel{\\sqrt{2}} + \\cancel{\\sqrt{3}} - \\cancel{\\sqrt{3}} + \\dots - \\cancel{\\sqrt{99}} + \\sqrt{100}`} />
          <div>
            В живых остаются только первое число и последний корень ряда. Вычислим итоговое значение:
          </div>
          <BlockMath math={`S = \\sqrt{100} - 1 = 10 - 1 = 9`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">
            Ответ: 9.
          </div>
        </div>
      </div>
    )
  },


      {
    id: 3,
    title: (
      <span>
        Задача 3
      </span>
    ),
    textBefore: (
      <span>
        Упростите выражение:
        <span className="block text-center my-2">
          <InlineMath math={`(x + a)(x^2 + a^2)(x^4 + a^4)(x^8 + a^8) \\dots (x^{2^n} + a^{2^n})`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2">
          <div>
            Пусть исходное выражение равно <InlineMath math={`P`} />. Разберём случай, когда <InlineMath math={`x \\neq a`} />. Умножим и разделим выражение на <InlineMath math={`(x - a)`} />:
          </div>
          <BlockMath math={`P = \\dfrac{(x - a)(x + a)(x^2 + a^2)(x^4 + a^4) \\dots (x^{2^n} + a^{2^n})}{x - a}`} />
          <div>
            Применим формулу разности квадратов к первым двум множителям в числителе:
          </div>
          <BlockMath math={`(x - a)(x + a) = x^2 - a^2`} />
          <div>
            Последовательно сворачиваем получающиеся разности квадратов со следующими скобками:
          </div>
          <BlockMath math={`(x^2 - a^2)(x^2 + a^2) = x^4 - a^4`} />
          <BlockMath math={`(x^4 - a^4)(x^4 + a^4) = x^8 - a^8`} />
          <div className="text-center font-semibold"> . . .</div>
          <BlockMath math={`(x^{2^n} - a^{2^n})(x^{2^n} + a^{2^n}) = x^{2^{n+1}} - a^{2^{n+1}}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Разберём случай, когда <InlineMath math={`x = a`} />. Подставим это равенство напрямую в исходное выражение:
          </div>
          <BlockMath math={`P = (2a)(2a^2)(2a^4)(2a^8) \\dots (2a^{2^n})`} />
          <div>
            Количество сомножителей в данном произведении равно степеням двойки от <InlineMath math={`2^0`} /> до <InlineMath math={`2^n`} />, то есть ровно <InlineMath math={`n + 1`} /> штук. Перемножим коэффициенты и сложим показатели степеней:
          </div>
          <BlockMath math={`P = 2^{n+1} \\cdot a^{1 + 2 + 4 + 8 + \\dots + 2^n} = 2^{n+1} \\cdot a^{2^{n+1} - 1}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">
            Ответ: <InlineMath math={`\\dfrac{x^{2^{n+1}} - a^{2^{n+1}}}{x - a}`} /> при <InlineMath math={`x \\neq a`} />; и <InlineMath math={`2^{n+1} a^{2^{n+1} - 1}`} /> при <InlineMath math={`x = a`} />.
          </div>
        </div>
      </div>
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
        Упростите выражение:
        <span className="block text-center my-2">
          <InlineMath math={`(x^2 - ax + a^2)(x^4 - a^2x^2 + a^4) \\dots (x^{2^n} - a^{2^{n-1}}x^{2^{n-1}} + a^{2^n})`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2">
          <div>
            Пусть исходное выражение равно <InlineMath math={`P`} />. Домножим и разделим его на выражение <InlineMath math={`(x^2 + ax + a^2)`} />:
          </div>
          <BlockMath math={`P = \\dfrac{(x^2 + ax + a^2)(x^2 - ax + a^2)(x^4 - a^2x^2 + a^4) \\dots (x^{2^n} - a^{2^{n-1}}x^{2^{n-1}} + a^{2^n})}{x^2 + ax + a^2}`} />
          <div>
            Заметим, что первые два множителя в числителе по формуле разности квадратов (где разность раскладывается как неполные квадраты кубов) дают:
          </div>
          <BlockMath math={`(x^2 + ax + a^2)(x^2 - ax + a^2) = (x^2 + a^2)^2 - (ax)^2 = x^4 + a^2x^2 + a^4`} />
          <div>
            Полученное выражение является неполным квадратом разности для следующей скобки. Применим формулу суммы кубов:
          </div>
          <BlockMath math={`(x^4 + a^2x^2 + a^4)(x^4 - a^2x^2 + a^4) = (x^4 + a^4)^2 - (a^2x^2)^2 = x^8 + a^4x^4 + a^8`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Продолжая последовательное перемножение по цепочке, перед последним сомножителем мы получим выражение:
          </div>
          <BlockMath math={`x^{2^n} + a^{2^{n-1}}x^{2^{n-1}} + a^{2^n}`} />
          <div>
            Перемножим его с последней скобкой исходного выражения:
          </div>
          <BlockMath math={`(x^{2^n} + a^{2^{n-1}}x^{2^{n-1}} + a^{2^n})(x^{2^n} - a^{2^{n-1}}x^{2^{n-1}} + a^{2^n}) = x^{2^{n+1}} + a^{2^n}x^{2^n} + a^{2^{n+1}}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Следовательно, числитель полностью свернулся. Запишем итоговый вид дроби:
          </div>
          <BlockMath math={`P = \\dfrac{x^{2^{n+1}} + a^{2^n}x^{2^n} + a^{2^{n+1}}}{x^2 + ax + a^2}`} />
          <div className="font-semibold text-amber-600">
            Ответ: <InlineMath math={`\\dfrac{x^{2^{n+1}} + a^{2^n}x^{2^n} + a^{2^{n+1}}}{x^2 + ax + a^2}`} />.
          </div>
        </div>
      </div>
    )
  },


    {
    id: 5,
    title: (
      <span>
        Задача 5
      </span>
    ),
    textBefore: (
      <span>
        Вычислите значение выражения:
        <span className="block text-center my-2">
          <InlineMath math={`\\dfrac{(1 + \\sqrt{a})^5 + (1 - \\sqrt{a})^5 - 2(a\\sqrt{5} - 1)^2}{4a^2}`} />
        </span>
        при <InlineMath math={`a = 5 - \\sqrt{5}`} />.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2">
          <div>
            Упростим числитель дроби. Для этого сначала раскроем сумму пятых степеней по формуле бинома Ньютона:
          </div>
          <BlockMath math={`(1 + \\sqrt{a})^5 = 1 + 5\\sqrt{a} + 10a + 10a\\sqrt{a} + 5a^2 + a^2\\sqrt{a}`} />
          <BlockMath math={`(1 - \\sqrt{a})^5 = 1 - 5\\sqrt{a} + 10a - 10a\\sqrt{a} + 5a^2 - a^2\\sqrt{a}`} />
          <div>
            Сложим эти два выражения. Члены с нечётными степенями корня <InlineMath math={`\\sqrt{a}`} /> взаимно уничтожатся:
          </div>
          <BlockMath math={`(1 + \\sqrt{a})^5 + (1 - \\sqrt{a})^5 = 2(1 + 10a + 5a^2) = 2 + 20a + 10a^2`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Теперь раскроем квадрат двучлена во вычитаемом слагаемом числителя:
          </div>
          <BlockMath math={`-2(a\\sqrt{5} - 1)^2 = -2(5a^2 - 2a\\sqrt{5} + 1) = -10a^2 + 4a\\sqrt{5} - 2`} />
          <div>
            Соберем все преобразованные части числителя вместе:
          </div>
          <BlockMath math={`(2 + 20a + 10a^2) + (-10a^2 + 4a\\sqrt{5} - 2) = 20a + 4a\\sqrt{5} = 4a(5 + \\sqrt{5})`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Подставим полученное упрощённое выражение для числителя обратно в исходную дробь:
          </div>
          <BlockMath math={`\\dfrac{4a(5 + \\sqrt{5})}{4a^2} = \\dfrac{5 + \\sqrt{5}}{a}`} />
          <div>
            Подставим заданное по условию значение переменной <InlineMath math={`a = 5 - \\sqrt{5}`} />:
          </div>
          <BlockMath math={`\\dfrac{5 + \\sqrt{5}}{5 - \\sqrt{5}}`} />
          <div>
            Освободимся от иррациональности в знаменателе дроби, домножив числитель и знаменатель на сопряжённое выражение <InlineMath math={`(5 + \\sqrt{5})`} />:
          </div>
          <BlockMath math={`\\dfrac{(5 + \\sqrt{5})^2}{(5 - \\sqrt{5})(5 + \\sqrt{5})} = \\dfrac{25 + 10\\sqrt{5} + 5}{25 - 5} = \\dfrac{30 + 10\\sqrt{5}}{20} = \\dfrac{3 + \\sqrt{5}}{2}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">
            Ответ: <InlineMath math={`\\dfrac{3 + \\sqrt{5}}{2}`} />.
          </div>
        </div>
      </div>
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
        Упростите выражение:
        <span className="block text-center my-2">
          <InlineMath math={`(a + a^2 + \\dots + a^m) : \\left(\\dfrac{1}{a} + \\dfrac{1}{a^2} + \\dots + \\dfrac{1}{a^m}\\right)`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2">
          <div>
            Пусть исходное выражение равно <InlineMath math={`P`} />. Обозначим многочлен в первой скобке за <InlineMath math={`S`} />:
          </div>
          <BlockMath math={`S = a + a^2 + \\dots + a^m`} />
          <div>
            Преобразуем вторую скобку выражения, приведя все содержащиеся в ней дроби к общему знаменателю <InlineMath math={`a^m`} />:
          </div>
          <BlockMath math={`\\dfrac{1}{a} + \\dfrac{1}{a^2} + \\dots + \\dfrac{1}{a^m} = \\dfrac{a^{m-1} + a^{m-2} + \\dots + 1}{a^m}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Вынесем общий множитель <InlineMath math={`a`} /> за скобки в выражении <InlineMath math={`S`} />:
          </div>
          <BlockMath math={`S = a(1 + a + \\dots + a^{m-2} + a^{m-1})`} />
          <div>
            Заметим, что многочлен в числителе преобразованной второй скобки в точности совпадает со скобкой в разложении <InlineMath math={`S`} />. 
            Перепишем вторую скобку через переменную <InlineMath math={`S`} />:
          </div>
          <BlockMath math={`\\dfrac{a^{m-1} + a^{m-2} + \\dots + 1}{a^m} = \\dfrac{S/a}{a^m} = \\dfrac{S}{a^{m+1}}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Заменим операцию деления на умножение на обратную дробь для нахождения итогового упрощённого вида:
          </div>
          <BlockMath math={`P = S : \\dfrac{S}{a^{m+1}} = S \\cdot \\dfrac{a^{m+1}}{S} = a^{m+1}`} />
          <div>
            Поскольку при выполнении преобразований производилось деление на многочлен <InlineMath math={`S`} />, полученный результат верен при условиях, что выражения в знаменателях отличны от нуля.
          </div>
          <div className="font-semibold text-amber-600">
            Ответ: <InlineMath math={`a^{m+1}`} /> при <InlineMath math={`a \\neq 0`} /> и <InlineMath math={`a + a^2 + \\dots + a^m \\neq 0`} />.
          </div>
        </div>
      </div>
    )
  },


    {
    id: 7,
    title: (
      <span>
        Задача 7 <span className="text-sm font-normal text-slate-400 ml-1.5">(Вступительные в Академию ФСБ, 2022)</span>
      </span>
    ),
    textBefore: (
      <span>
        Упростите выражение:
        <span className="block text-center my-2">
          <InlineMath math={`\\dfrac{\\sqrt{6 + 2\\sqrt{5}} - \\sqrt{4 + 2\\sqrt{3}}}{\\sqrt{5} + \\sqrt{3}} + \\sqrt{15}`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2">
          <div>
            Выделим полные квадраты двучленов под знаками подкоренных выражений в числителе дроби:
          </div>
          <BlockMath math={`6 + 2\\sqrt{5} = 5 + 2\\sqrt{5} + 1 = (\\sqrt{5} + 1)^2`} />
          <BlockMath math={`4 + 2\\sqrt{3} = 3 + 2\\sqrt{3} + 1 = (\\sqrt{3} + 1)^2`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Извлечем квадратные корни, учитывая, что подкоренные основания строго положительны (<InlineMath math={`\\sqrt{a^2} = |a|`} />):
          </div>
          <BlockMath math={`\\sqrt{6 + 2\\sqrt{5}} = \\sqrt{(\\sqrt{5} + 1)^2} = \\sqrt{5} + 1`} />
          <BlockMath math={`\\sqrt{4 + 2\\sqrt{3}} = \\sqrt{(\\sqrt{3} + 1)^2} = \\sqrt{3} + 1`} />
          <div>
            Подставим полученные значения обратно в числитель исходного выражения и приведем подобные слагаемые:
          </div>
          <BlockMath math={`(\\sqrt{5} + 1) - (\\sqrt{3} + 1) = \\sqrt{5} - \\sqrt{3}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Запишем все выражение целиком с учетом преобразованного числителя:
          </div>
          <BlockMath math={`\\dfrac{\\sqrt{5} - \\sqrt{3}}{\\sqrt{5} + \\sqrt{3}} + \\sqrt{15}`} />
          <div>
            Освободимся от иррациональности в знаменателе первой дроби, домножив её числитель и знаменатель на сопряжённое выражение <InlineMath math={`(\\sqrt{5} - \\sqrt{3})`} />:
          </div>
          <BlockMath math={`\\dfrac{(\\sqrt{5} - \\sqrt{3})^2}{(\\sqrt{5} + \\sqrt{3})(\\sqrt{5} - \\sqrt{3})} + \\sqrt{15} = \\dfrac{5 - 2\\sqrt{15} + 3}{5 - 3} + \\sqrt{15}`} />
          <BlockMath math={`\\dfrac{8 - 2\\sqrt{15}}{2} + \\sqrt{15} = 4 - \\sqrt{15} + \\sqrt{15} = 4`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">
            Ответ: 4.
          </div>
        </div>
      </div>
    )
  },


    {
    id: 8,
    title: (
      <span>
        Задача 8 (Неравенство Коши)
      </span>
    ),
    textBefore: (
      <span>
        Периметр прямоугольника равен 4. Чему максимум может быть равна его площадь?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Неравенство Коши (о среднем арифметическом и среднем геометрическом)</span>
          <div>
            Для любых неотрицательных чисел <InlineMath math={`a`} /> и <InlineMath math={`b`} /> среднее арифметическое всегда не меньше их среднего геометрического:
          </div>
          <BlockMath math={`\\dfrac{a + b}{2} \\geq \\sqrt{ab}`} />
          <span className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs mt-1 block">
            💡 Равенство достигается тогда и только тогда, когда сами числа равны между собой (<InlineMath math={`a = b`} />). На олимпиадах этот метод часто применяется для мгновенного нахождения экстремумов функций без использования производной.
          </span>
        </div>

        <div className="space-y-2 pt-1">
          <div>
            Пусть стороны прямоугольника равны <InlineMath math={`a`} /> и <InlineMath math={`b`} /> (где <InlineMath math={`a > 0, \\ b > 0`} />). 
            Запишем формулу его периметра согласно условию задачи:
          </div>
          <BlockMath math={`P = 2(a + b) = 4 \\implies a + b = 2`} />
          <div>
            Площадь прямоугольника вычисляется как произведение его смежных сторон:
          </div>
          <BlockMath math={`S = a \\cdot b`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Применим классическое неравенство Коши к положительным длинам сторон <InlineMath math={`a`} /> и <InlineMath math={`b`} />:
          </div>
          <BlockMath math={`\\sqrt{ab} \\leq \\dfrac{a + b}{2}`} />
          <div>
            Возведём обе части полученного неравенства в квадрат и подставим известное значение полупериметра <InlineMath math={`a + b = 2`} />:
          </div>
          <BlockMath math={`ab \\leq \\left(\\dfrac{a + b}{2}\\right)^2 \\implies S \\leq \\left(\\dfrac{2}{2}\\right)^2 = 1^2 = 1`} />
          <div>
            Таким образом, площадь прямоугольника строго ограничена сверху числом 1.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Максимальное значение <InlineMath math={`S = 1`} /> достигается при равенстве сторон в неравенстве Коши, то есть когда прямоугольник является квадратом:
          </div>
          <BlockMath math={`a = b = 1 \\implies S = 1 \\cdot 1 = 1`} />
          <div>
            Геометрические условия полностью согласованы с алгебраической оценкой.
          </div>
          <div className="font-semibold text-amber-600">
            Ответ: 1.
          </div>
        </div>
      </div>
    )
  },


  {
    id: 9,
    title: (
      <span>
        Задача 9 (Неравенство треугольника)
      </span>
    ),
    textBefore: (
      <span>
        Докажите, что медиана <InlineMath math={`AM`} /> в треугольнике <InlineMath math={`\\Delta ABC`} /> по длине меньше, чем <InlineMath math={`(AB + AC)/2`} />.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Метод удвоения медианы</span>
          <div>
            Дополнительное построение, при котором отрезок медианы продлевается за противоположную сторону на свою собственную длину.
          </div>
          <div className="mt-1.5 pt-1.5 border-t border-sky-100/50 dark:border-sky-950/40">
            <b>Что это даёт:</b> Полученная четырёхугольная фигура всегда является <b>параллелограммом</b>, поскольку её диагонали точкой пересечения делятся пополам. Это позволяет переносить стороны треугольника и использовать неравенство треугольника.
          </div>
        </div>

        {/* Точный геометрический рисунок по референсу (SVG) */}
        <div className="flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60">
          <svg width="300" height="200" viewBox="0 0 300 200" className="text-slate-800 dark:text-slate-200 stroke-current fill-none font-medium text-sm">
            {/* Наружный контур параллелограмма ABDC */}
            <path d="M 150,20 L 70,120 L 150,180 L 230,80 Z" strokeWidth="2" />
            
            {/* Диагональ AD (удвоенная медиана) — строго вертикальный пунктир */}
            <line x1="150" y1="20" x2="150" y2="180" strokeWidth="2" strokeDasharray="5 4" />
            
            {/* Диагональ BC (сторона треугольника) — сплошная линия */}
            <line x1="70" y1="120" x2="230" y2="80" strokeWidth="1.5" />
            
            {/* Буквенные обозначения вершин */}
            <text x="145" y="14" className="fill-current stroke-none font-semibold">A</text>
            <text x="50" y="125" className="fill-current stroke-none font-semibold">B</text>
            <text x="238" y="82" className="fill-current stroke-none font-semibold">C</text>
            <text x="145" y="196" className="fill-current stroke-none font-semibold">D</text>
            <text x="156" y="104" className="fill-current stroke-none font-semibold">M</text>
            
            {/* Засечки равенства отрезков BM = MC (наклонные штрихи) */}
            <line x1="106" y1="106" x2="114" y2="114" strokeWidth="1.5" />
            <line x1="186" y1="86" x2="194" y2="94" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="space-y-2 pt-1">
          <div>
            Применим метод удвоения медианы. Продлим отрезок медианы <InlineMath math={`AM`} /> за сторону <InlineMath math={`BC`} /> на его собственную длину так, что:
          </div>
          <BlockMath math={`MD = AM \\implies AD = 2AM`} />
          <div>
            Соединим полученную точку <InlineMath math={`D`} /> с вершинами треугольника <InlineMath math={`B`} /> и <InlineMath math={`C`} />.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Рассмотрим получившийся четырёхугольник <InlineMath math={`ABDC`} />. По построению, его диагонали <InlineMath math={`AD`} /> и <InlineMath math={`BC`} /> пересекаются в точке <InlineMath math={`M`} /> и делятся ею пополам:
          </div>
          <BlockMath math={`AM = MD, \\quad BM = MC`} />
          <div>
            Следовательно, четырёхугольник <InlineMath math={`ABDC`} /> является <b>параллелограммом</b> по признаку делимости диагоналей. Из свойств параллелограмма получаем равенство его противоположных сторон:
          </div>
          <BlockMath math={`CD = AB`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Рассмотрим вспомогательный треугольник <InlineMath math={`\\Delta ACD`} />. Запишем для него геометрическое неравенство треугольника (длина любой стороны строго меньше суммы двух других сторон):
          </div>
          <BlockMath math={`AD < AC + CD`} />
          <div>
            Подставим в это неравенство известные эквивалентные значения сторон <InlineMath math={`AD = 2AM`} /> и <InlineMath math={`CD = AB`} />:
          </div>
          <BlockMath math={`2AM < AC + AB`} />
          <div>Разделим обе части полученного неравенства на 2:</div>
          <BlockMath math={`AM < \\dfrac{AB + AC}{2}`} />
          <div>Требуемое соотношение длин элементов полностью доказано.</div>
          <div className="font-semibold text-amber-600">Ответ: доказано.</div>
        </div>
      </div>
    )
  },

    {
    id: 10,
    title: (
      <span>
        Задача 10 (Неравенство Бернулли)
      </span>
    ),
    textBefore: (
      <span>
        Докажите, что для любого натурального числа <InlineMath math={`n \\geq 2`} /> справедливо неравенство <InlineMath math={`(1.05)^n + (0.95)^n > 2`} />.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Неравенство Бернулли</span>
          <div>
            Для любого вещественного числа <InlineMath math={`x > -1`} /> и натурального числа <InlineMath math={`n \\geq 1`} /> справедливо классическое степенное зажатие:
          </div>
          <BlockMath math={`(1 + x)^n \\geq 1 + nx`} />
          <div className="mt-1.5 pt-1.5 border-t border-sky-100/50 dark:border-sky-950/40">
            💡 Если <InlineMath math={`n \\geq 2`} /> и <InlineMath math={`x \\neq 0`} />, то неравенство становится строго <b>строгим</b>: <InlineMath math={`(1 + x)^n > 1 + nx`} />. На олимпиадах этот метод позволяет эффективно оценивать степенные функции через линейные выражения.
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <div>
            Запишем доказываемое неравенство в развернутом виде:
          </div>
          <BlockMath math={`(1.05)^n + (0.95)^n > 2`} />
          <div>
            Исследуемая сумма принимает вид:
          </div>
          <BlockMath math={`S = (1 + 0.05)^n + (1 - 0.05)^n`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Применим строгое неравенство Бернулли отдельно к каждому слагаемому, учитывая, что по условию задачи <InlineMath math={`n \\geq 2`} />:
          </div>
          <ul className="list-bullet pl-5 space-y-2 text-sm md:text-base">
            <li>
              Для первого слагаемого при <InlineMath math={`x = 0.05`} />:
              <BlockMath math={`(1 + 0.05)^n > 1 + 0.05n`} />
            </li>
            <li>
              Для второго слагаемого при <InlineMath math={`x = -0.05`} /> (условие <InlineMath math={`x > -1`} /> выполняется):
              <BlockMath math={`(1 - 0.05)^n > 1 - 0.05n`} />
            </li>
          </ul>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Сложим почленно два полученных строгих неравенства одинакового знака:
          </div>
          <BlockMath math={`(1 + 0.05)^n + (1 - 0.05)^n > (1 + 0.05n) + (1 - 0.05n)`} />
          <div>
            Раскроем скобки в правой части и приведем подобные слагаемые:
          </div>
          <BlockMath math={`S > 1 + 0.05n + 1 - 0.05n = 2`} />
          <div>
            Следовательно, <InlineMath math={`(1.05)^n + (0.95)^n > 2`} /> для всех натуральных <InlineMath math={`n \\geq 2`} />. Неравенство полностью доказано.
          </div>
          <div className="font-semibold text-amber-600">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


  {
    id: 11,
    title: (
      <span>
        Задача 11 (Лемма Титу) <span className="text-sm font-normal text-slate-400 ml-1.5">(Вступительные экзамены МГУ, 2025)</span>
      </span>
    ),
    textBefore: (
      <span>
        Положительные действительные числа удовлетворяют равенству <InlineMath math={`a_1 + a_2 + a_3 = b_1 + b_2 + b_3 = 3`} />.
        <br />
        Найдите наименьшее возможное значение выражения:
        <span className="flex justify-center my-3">
          <InlineMath math={`\\dfrac{a_1^2}{a_1 + b_1} + \\dfrac{a_2^2}{a_2 + b_2} + \\dfrac{a_3^2}{a_3 + b_3}.`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Лемма Титу (неравенство Андрееску)</span>
          <div>
            Для любых вещественных чисел <InlineMath math={`x_1, \\ x_2, \\ x_3`} /> и положительных знаменателей <InlineMath math={`y_1, \\ y_2, \\ y_3 > 0`} /> справедливо алгебраическое неравенство:
          </div>
          <BlockMath math={`\\dfrac{x_1^2}{y_1} + \\dfrac{x_2^2}{y_2} + \\dfrac{x_3^2}{y_3} \\geq \\dfrac{(x_1 + x_2 + x_3)^2}{y_1 + y_2 + y_3}`} />
        </div>

        <div className="space-y-2 pt-1">
          <div>
            Обозначим исследуемое выражение за <InlineMath math={`S`} />. Применим лемму Титу, сопоставив числители и знаменатели:
          </div>
          <BlockMath math={`S \\geq \\dfrac{(a_1 + a_2 + a_3)^2}{(a_1 + b_1) + (a_2 + b_2) + (a_3 + b_3)}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Сгруппируем слагаемые в знаменателе полученной дроби:
          </div>
          <BlockMath math={`(a_1 + b_1) + (a_2 + b_2) + (a_3 + b_3) = (a_1 + a_2 + a_3) + (b_1 + b_2 + b_3)`} />
          <div>
            Подставим известные из условия задачи численные значения сумм (<InlineMath math={`3`} /> и <InlineMath math={`3`} />):
          </div>
          <BlockMath math={`S \\geq \\dfrac{3^2}{3 + 3} = \\dfrac{9}{6} = \\dfrac{3}{2} = 1.5`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Проверка достижения минимума:</b>
          </div>
          <div>
            Равенство реализуется при полной симметрии всех переменных, когда выполнены условия:
          </div>
          <BlockMath math={`a_1 = a_2 = a_3 = 1, \\quad b_1 = b_2 = b_3 = 1`} />
          <div>
            Подставим эти значения в исходную сумму:
          </div>
          <BlockMath math={`S = \\dfrac{1^2}{1 + 1} + \\dfrac{1^2}{1 + 1} + \\dfrac{1^2}{1 + 1} = \\dfrac{1}{2} + \\dfrac{1}{2} + \\dfrac{1}{2} = 1.5`} />
          <div className="pt-1">
            Оценка и пример полностью согласованы, наименьшее возможное значение выражения равно 1.5.
          </div>
          <div className="font-semibold text-amber-600 pt-1">Ответ: 1.5.</div>
        </div>
      </div>
    )
  },



    {
    id: 12,
    title: (
      <span>
        Задача 12 (Неравенство Йенсена)
      </span>
    ),
    textBefore: (
      <div className="space-y-2">
        <div>
          Докажите, что для любых положительных чисел <InlineMath math={`a, \\ b`} /> и <InlineMath math={`c`} />, сумма которых равна 3 (<InlineMath math={`a + b + c = 3`} />), справедливо неравенство:
        </div>
        <BlockMath math={`\\sqrt{3a + 1} + \\sqrt{3b + 1} + \\sqrt{3c + 1} \\leq 6`} />
      </div>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Неравенство Йенсена для вогнутых функций</span>
          <div>
            Если функция <InlineMath math={`f(x)`} /> является выпуклой вверх на некотором промежутке, то для любых точек этого промежутка выполняется неравенство:
          </div>
          <BlockMath math={`\\dfrac{f(x_1) + f(x_2) + f(x_3)}{3} \\leq f\\left(\\dfrac{x_1 + x_2 + x_3}{3}\\right)`} />
          <div className="mt-1.5 pt-1.5 border-t border-sky-100/50 dark:border-sky-950/40">
            💡 Функция является вогнутой, если её вторая производная строго отрицательна (<InlineMath math={`f''(x) < 0`} />). Равенство достигается при <InlineMath math={`x_1 = x_2 = x_3`} />.
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <div>
            Рассмотрим функцию <InlineMath math={`f(x) = \\sqrt{3x + 1}`} /> при <InlineMath math={`x > 0`} />. Найдем её первую и вторую производные для проверки типа выпуклости:
          </div>
          <BlockMath math={`f'(x) = \\dfrac{3}{2\\sqrt{3x + 1}}, \\quad f''(x) = -\\dfrac{9}{4(3x + 1)^{3/2}}`} />
          <div>
            Поскольку вторая производная <InlineMath math={`f''(x) < 0`} /> для всех положительных <InlineMath math={`x`} />, непрерывная функция <InlineMath math={`f(x)`} /> является строго <b>выпуклой вверх</b>.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Применим классическое неравенство Йенсена для вогнутой функции к трем точкам <InlineMath math={`a, \\ b, \\ c`} />:
          </div>
          <BlockMath math={`\\dfrac{\\sqrt{3a + 1} + \\sqrt{3b + 1} + \\sqrt{3c + 1}}{3} \\leq \\sqrt{3 \\cdot \\left(\\dfrac{a + b + c}{3}\\right) + 1}`} />
          <div>
            Подставим известное из условия задачи значение суммы переменных <InlineMath math={`a + b + c = 3`} /> в правую часть неравенства:
          </div>
          <BlockMath math={`\\dfrac{\\sqrt{3a + 1} + \\sqrt{3b + 1} + \\sqrt{3c + 1}}{3} \\leq \\sqrt{3 \\cdot \\left(\\dfrac{3}{3}\\right) + 1} = \\sqrt{3 \\cdot 1 + 1} = \\sqrt{4} = 2`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Умножим обе части полученного неравенства на 3:
          </div>
          <BlockMath math={`\\sqrt{3a + 1} + \\sqrt{3b + 1} + \\sqrt{3c + 1} \\leq 6`} />
          <div>
            Равенство достигается в точке симметрии, когда все переменные равны между собой:
          </div>
          <BlockMath math={`a = b = c = 1 \\implies \\sqrt{4} + \\sqrt{4} + \\sqrt{4} = 2 + 2 + 2 = 6`} />
          <div>
            Неравенство полностью доказано.
          </div>
          <div className="font-semibold text-amber-600 pt-1">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


  {
    id: 13,
    title: (
      <span>
        Задача 13 (Неравенство КБШ)
      </span>
    ),
    textBefore: (
      <span>
        Даны три положительных числа <InlineMath math={`a, \\ b, \\ c`} /> такие, что <InlineMath math={`a^2 + b^2 + c^2 = 1`} />. Какое наибольшее значение может принимать выражение <InlineMath math={`a + 2b + 3c`} />?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Неравенство Коши — Буняковского — Шварца (КБШ)</span>
          <div>
            Для любых вещественных чисел справедливо соотношение квадратов сумм векторов:
          </div>
          <BlockMath math={`(x_1 y_1 + x_2 y_2 + x_3 y_3)^2 \\leq (x_1^2 + x_2^2 + x_3^2)(y_1^2 + y_2^2 + y_3^2)`} />
        </div>

        <div className="space-y-2 pt-1">
          <div>
            <b>Шаг 1. Применение неравенства КБШ:</b>
          </div>
          <div>
            Зададим два набора чисел: <InlineMath math={`(a, b, c)`} /> и <InlineMath math={`(1, 2, 3)`} />. Подставим их в формулу КБШ:
          </div>
          <BlockMath math={`(a \\cdot 1 + b \\cdot 2 + c \\cdot 3)^2 \\leq (a^2 + b^2 + c^2)(1^2 + 2^2 + 3^2)`} />
          <BlockMath math={`(a + 2b + 3c)^2 \\leq 1 \\cdot (1 + 4 + 9) = 14 \\implies a + 2b + 3c \\leq \\sqrt{14}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 2. Проверка достижимости максимума:</b>
          </div>
          <div>
            Равенство выполняется при условии пропорциональности координат:
          </div>
          <BlockMath math={`a = \\dfrac{b}{2} = \\dfrac{c}{3} = k \\implies b = 2k, \\ c = 3k`} />
          <BlockMath math={`k^2 + (2k)^2 + (3k)^2 = 1 \\implies 14k^2 = 1 \\implies k = \\dfrac{1}{\\sqrt{14}}`} />
          <div>
            Так как <InlineMath math={`k > 0`} />, все переменные <InlineMath math={`a = \\dfrac{1}{\\sqrt{14}}, \\ b = \\dfrac{2}{\\sqrt{14}}, \\ c = \\dfrac{3}{\\sqrt{14}}`} /> строго положительны. Наибольшее значение выражения равно <InlineMath math={`\\sqrt{14}`} />.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: √14.</div>
        </div>
      </div>
    )
  },


    {
    id: 14,
    title: (
      <span>
        Задача 14 (Метод вспомогательного угла)
      </span>
    ),
    textBefore: (
      <span>
        Докажите, что для любого угла <InlineMath math={`x`} /> справедливо неравенство:
        <span className="flex justify-center my-3">
          <InlineMath math={`|3 \\sin x - 4 \\cos x| \\leq 5`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Оценка тригонометрической линейной комбинации</span>
          <div>
            Для любого вещественного выражения вида <InlineMath math={`a \\sin x + b \\cos x`} /> максимальное и минимальное значения жестко ограничены радикалом:
          </div>
          <BlockMath math={`-\\sqrt{a^2 + b^2} \\leq a \\sin x + b \\cos x \\leq \\sqrt{a^2 + b^2}`} />
          <div className="mt-1.5 pt-1.5 border-t border-sky-100/50 dark:border-sky-950/40">
            💡 Этот факт доказывается введением вспомогательного угла <InlineMath math={`\\varphi`} />, сжимающего выражение в одну синусоиду <InlineMath math={`\\sqrt{a^2 + b^2} \\sin(x + \\varphi)`} />.
             <br />
               Или при помощи неравенства КБШ
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <div>
            Рассмотрим подмодульное тригонометрическое выражение. Вынесем за скобки амплитудный множитель ряда:
          </div>
          <BlockMath math={`A = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5`} />
          <div>
            Преобразуем исходное выражение, разделив и умножив его на этот коэффициент:
          </div>
          <BlockMath math={`3 \\sin x - 4 \\cos x = 5 \\left( \\dfrac{3}{5} \\sin x - \\dfrac{4}{5} \\cos x \\right)`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Поскольку сумма квадратов полученных долей равна единице <InlineMath math={`\\left(\\dfrac{3}{5}\\right)^2 + \\left(\\dfrac{4}{5}\\right)^2 = 1`} />, мы имеем право ввести вспомогательный угол <InlineMath math={`\\varphi`} /> такой, что:
          </div>
          <BlockMath math={`\\cos \\varphi = \\dfrac{3}{5}, \\quad \\sin \\varphi = \\dfrac{4}{5}`} />
          <div>
            Используем тригонометрическую формулу синуса разности аргументов для сворачивания скобки:
          </div>
          <BlockMath math={`3 \\sin x - 4 \\cos x = 5 (\\sin x \\cos \\varphi - \\cos x \\sin \\varphi) = 5 \\sin(x - \\varphi)`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Подставим преобразованную функцию обратно под знак модуля:
          </div>
          <BlockMath math={`|3 \\sin x - 4 \\cos x| = |5 \\sin(x - \\varphi)| = 5 |\\sin(x - \\varphi)|`} />
          <div>
            Так как для любого действительного аргумента область значений функции синуса ограничена отрезком <InlineMath math={`[-1; \\ 1]`} />, модуль синуса никогда не превосходит единицу:
          </div>
          <BlockMath math={`|\\sin(x - \\varphi)| \\leq 1 \\implies 5 |\\sin(x - \\varphi)| \\leq 5`} />
          <div>
            Следовательно, неравенство <InlineMath math={`|3 \\sin x - 4 \\cos x| \\leq 5`} /> выполняется тождественно для любого угла <InlineMath math={`x`} />. Что и требовалось доказать.
          </div>
          <div className="font-semibold text-amber-600 pt-1">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


    {
    id: 15,
    title: (
      <span>
        Задача 15 (Метод вспомогательного угла)
      </span>
    ),
    textBefore: (
      <span>
        Решите уравнение:
        <span className="flex justify-center my-3">
          <InlineMath math={`\\sqrt{3} \\left( \\dfrac{\\sin x}{\\sin x - \\cos x} + \\operatorname{tg} 2x \\right) = \\dfrac{\\cos x}{\\sin x + \\cos x}.`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>

        <div className="space-y-2 pt-1">
          <div>
            <b>1. Область допустимых значений (ОДЗ):</b>
          </div>
          <div>
            Знаменатели дробей и тангенс не должны обращаться в ноль:
          </div>
          <BlockMath math={`\\sin x - \\cos x \\neq 0, \\quad \\sin x + \\cos x \\neq 0, \\quad \\cos 2x \\neq 0`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>2. Алгебраические преобразования:</b>
          </div>
          <div>
            Распишем <InlineMath math={`\\operatorname{tg} 2x`} /> по формуле двойного аргумента через синус и косинус:
          </div>
          <BlockMath math={`\\sqrt{3} \\left( \\dfrac{\\sin x}{\\sin x - \\cos x} + \\dfrac{2\\sin x \\cos x}{\\cos^2 x - \\sin^2 x} \\right) = \\dfrac{\\cos x}{\\sin x + \\cos x}`} />
          <div>
            Домножим обе части уравнения на разность квадратов <InlineMath math={`(\\cos^2 x - \\sin^2 x)`} />, учитывая смену знаков в знаменателе первой дроби:
          </div>
          <BlockMath math={`\\sqrt{3} \\bigl( -\\sin x(\\sin x + \\cos x) + 2\\sin x \\cos x \\bigr) = \\cos x(\\cos x - \\sin x)`} />
          <div>
            Раскроем скобки внутри левой части уравнения и приведем подобные члены:
          </div>
          <BlockMath math={`\\sqrt{3} \\bigl( -\\sin^2 x + \\sin x \\cos x \\bigr) = \\cos x(\\cos x - \\sin x)`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>3. Разложение на множители:</b>
          </div>
          <BlockMath math={`\\sqrt{3}\\sin x (\\cos x - \\sin x) = \\cos x(\\cos x - \\sin x)`} />
          <div>
            Поскольку на ОДЗ задано строгое ограничение <InlineMath math={`\\cos x - \\sin x \\neq 0`} />, мы имеем полное право разделить обе части уравнения на эту общую скобку:
          </div>
          <BlockMath math={`\\sqrt{3}\\sin x = \\cos x`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
         <b>4. Метод вспомогательного угла:</b>
          </div>
          <div>
            Перенесем все слагаемые в левую часть:
          </div>
          <BlockMath math={`\\sqrt{3}\\sin x - \\cos x = 0`} />
          <div>
            Разделим обе части полученного линейного уравнения на <InlineMath math={`2`} /> (так как <InlineMath math={`\\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3 + 1} = 2`} />):
          </div>
          <BlockMath math={`\\dfrac{\\sqrt{3}}{2}\\sin x - \\dfrac{1}{2}\\cos x = 0`} />
          <div>
            Заметим табличные значения <InlineMath math={`\\cos \\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}`} /> и <InlineMath math={`\\sin \\dfrac{\\pi}{6} = \\dfrac{1}{2}`} />. Свернем левую часть по формуле синуса разности:
          </div>
          <BlockMath math={`\\sin x \\cos \\dfrac{\\pi}{6} - \\cos x \\sin \\dfrac{\\pi}{6} = 0 \\iff \\sin\\left(x - \\dfrac{\\pi}{6}\\right) = 0`} />
          <div>
            Решим простейшее тригонометрическое уравнение:
          </div>
          <BlockMath math={`x - \\dfrac{\\pi}{6} = \\pi k \\iff x = \\dfrac{\\pi}{6} + \\pi k, \\ k \\in \\mathbb{Z}`} />
          <div className="pt-1">
          </div>
          <div className="font-semibold text-amber-600 pt-1">Ответ: π/6 + πk, k ∈ ℤ.</div>
        </div>
      </div>
    )
  },


    {
    id: 16,
    title: (
      <span>
        Задача 16 (Универсальная тригонометрическая подстановка) <span className="text-sm font-normal text-slate-400 ml-1.5">(ОММО, 2025, №6)</span>
      </span>
    ),
    textBefore: (
      <span>
        Решите уравнение:
        <span className="flex justify-center my-3">
          <InlineMath math={`(\\sin x + 1)(\\cos x + 1) = \\dfrac{9}{8}`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Универсальная тригонометрическая подстановка (УТП)</span>
          <div>
            Выражение тригонометрических функций через тангенс половинного угла <InlineMath math={`t = \\operatorname{tg}\\dfrac{x}{2}`} />:
          </div>
          <BlockMath math={`\\sin x = \\dfrac{2t}{1 + t^2}, \\quad \\cos x = \\dfrac{1 - t^2}{1 + t^2}`} />
        </div>

        <div className="space-y-2 pt-1">
          <div>
            Применим подстановку <InlineMath math={`t = \\operatorname{tg}\\dfrac{x}{2}`} /> и приведём к общему знаменателю выражения внутри каждой скобки:
          </div>
          <BlockMath math={`\\left(\\dfrac{2t}{1 + t^2} + 1\\right)\\left(\\dfrac{1 - t^2}{1 + t^2} + 1\\right) = \\dfrac{9}{8}`} />
          <BlockMath math={`\\left(\\dfrac{t^2 + 2t + 1}{1 + t^2}\\right)\\left(\\dfrac{2}{1 + t^2}\\right) = \\dfrac{9}{8} \\iff \\dfrac{2(t + 1)^2}{(1 + t^2)^2} = \\dfrac{9}{8}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Извлечём квадратный корень из обеих частей уравнения (учитывая, что <InlineMath math={`1 + t^2 > 0`} />):
          </div>
          <BlockMath math={`\\dfrac{t + 1}{1 + t^2} = \\pm \\dfrac{3}{4} \\iff 4t + 4 = \\pm (3 + 3t^2)`} />
          <div>
            Это равенство распадается на два квадратных уравнения:
          </div>
          <ul className="list-bullet pl-5 space-y-2 text-sm">
            <li>
              <InlineMath math={`3t^2 - 4t - 1 = 0 \\implies D = 16 + 12 = 28 \\implies t = \\dfrac{2 \\pm \\sqrt{7}}{3}`} />
            </li>
            <li>
              <InlineMath math={`3t^2 + 4t + 7 = 0 \\implies D = 16 - 84 < 0`} /> (действительных корней нет)
            </li>
          </ul>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Сделаем обратную подстановку и выразим искомый аргумент <InlineMath math={`x`} />:
          </div>
          <BlockMath math={`\\operatorname{tg}\\dfrac{x}{2} = \\dfrac{2 \\pm \\sqrt{7}}{3} \\iff x = 2\\operatorname{arctg}\\left(\\dfrac{2 \\pm \\sqrt{7}}{3}\\right) + 2\\pi n, \\ n \\in \\mathbb{Z}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: 2 arctg((2 ± √7)/3) + 2πn, n ∈ ℤ.</div>
        </div>
      </div>
    )
  },


   {
    id: 17,
    title: (
      <span>
        Задача 17 (Приём прибавить/отнять) <span className="text-sm font-normal text-slate-400 ml-1.5">(Авторская задача)</span>
      </span>
    ),
    textBefore: (
      <span>
        Даны две функции: парабола четвертой степени <InlineMath math={`f(x) = x^4 - 2x^2`} /> и прямая <InlineMath math={`g(x) = 8x + 3`} />. Найдите координаты всех точек пересечения графиков этих функций. Абсциссы точек пересечения укажите в ответе.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2 pt-1">
          <div>
            <b>1. Составление исходного уравнения:</b>
          </div>
          <BlockMath math={`x^4 - 2x^2 = 8x + 3 \\iff x^4 - 2x^2 - 8x - 3 = 0`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>2. Применение приёма «прибавить/отнять»:</b>
          </div>
          <BlockMath math={`x^4 + 2x^3 - 2x^3 - 2x^2 - 8x - 3 = 0`} />
          <BlockMath math={`(x^4 - 2x^3 - x^2) + (2x^3 - 4x^2 - 2x) + (3x^2 - 6x - 3) = 0`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>3. Пошаговая группировка:</b>
          </div>
          <BlockMath math={`x^2(x^2 - 2x - 1) + 2x(x^2 - 2x - 1) + 3(x^2 - 2x - 1) = 0`} />
          <BlockMath math={`(x^2 - 2x - 1)(x^2 + 2x + 3) = 0`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>4. Нахождение корней:</b>
          </div>
          <ul className="list-bullet pl-5 space-y-2 text-sm">
            <li>
              <InlineMath math={`x^2 + 2x + 3 = 0 \\implies D = 4 - 12 = -8 < 0`} /> (действительных корней нет).
            </li>
            <li>
              <InlineMath math={`x^2 - 2x - 1 = 0 \\implies D = 4 - 4 \\cdot 1 \\cdot (-1) = 8`} />
              <br />
              <InlineMath math={`x_{1,2} = \\dfrac{2 \\pm 2\\sqrt{2}}{2} = 1 \\pm \\sqrt{2}`} />
            </li>
          </ul>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: 1 - √2; 1 + √2.</div>
        </div>
      </div>
    )
  },


  {
    id: 18,
    title: (
      <span>
        Задача 18 (Разность квадратов)
      </span>
    ),
    textBefore: (
      <span>
        Два различных числа <InlineMath math={`x`} /> и <InlineMath math={`y`} /> (не обязательно целых) таковы, что
        <span className="flex justify-center my-3">
          <InlineMath math={`x^2 - 2000x = y^2 - 2000y.`} />
        </span>
        Найдите сумму чисел <InlineMath math={`x`} /> и <InlineMath math={`y`} />.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Разность квадратов</span>
          <div>
            Классическая формула сокращённого умножения, позволяющая разложить выражение на линейные сомножители:
          </div>
          <BlockMath math={`A^2 - B^2 = (A - B)(A + B)`} />
        </div>

        <div className="space-y-2 pt-1">
          <div>
            <b>1. Группировка однородных членов:</b>
          </div>
          <div>
            Когда квадраты переменных с одинаковыми знаками располагаются в разных частях уравнения, полезно перенести их в одну сторону. Это позволяет избежать раскрытия сложных выражений и сразу применить формулу разности квадратов. Перенесём все слагаемые влево:
          </div>
          <BlockMath math={`x^2 - 2000x - y^2 + 2000y = 0`} />
          <div>
            Сгруппируем квадраты и линейные члены отдельно:
          </div>
          <BlockMath math={`(x^2 - y^2) - (2000x - 2000y) = 0`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>2. Разложение на множители:</b>
          </div>
          <div>
            Раскроем первую скобку по формуле разности квадратов, а из второй вынесем общий числовой множитель 2000:
          </div>
          <BlockMath math={`(x - y)(x + y) - 2000(x - y) = 0`} />
          <div>
            Вынесем общий многочлен <InlineMath math={`(x - y)`} /> за скобки:
          </div>
          <BlockMath math={`(x - y)\\bigl((x + y) - 2000\\bigr) = 0`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>3. Использование условия на различие чисел:</b>
          </div>
          <div>
            Произведение равно нулю, когда <InlineMath math={`x - y = 0`} /> или <InlineMath math={`x + y - 2000 = 0`} />.
          </div>
          <div className="pt-1">
            По условию задачи, числа <InlineMath math={`x`} /> и <InlineMath math={`y`} /> являются <b>различными</b> (<InlineMath math={`x \\neq y`} />), следовательно, разность <InlineMath math={`x - y \\neq 0`} />. Мы имеем полное право разделить на неё обе части уравнения. Получаем:
          </div>
          <BlockMath math={`x + y - 2000 = 0 \\implies x + y = 2000`} />
        </div>

        {/* Серый блок-совет */}
        <div className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-xs md:text-sm">
          <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">💡 Олимпиадный лайфхак</span>
          <div>
            Условие «числа различны» в олимпиадных задачах иногда указывает на то, что в процессе решения возникнет скобка <InlineMath math={`(x - y)`} />, на которую можно будет законно сократить уравнение, мгновенно избавившись от высших степеней.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: 2000.</div>
        </div>
      </div>
    )
  },


    {
    id: 19,
    title: (
      <span>
        Задача 19 (Алгебраические преобразования)
      </span>
    ),
    textBefore: (
      <span>
        Сумма четырех целых чисел равна 0. Числа расставили по кругу и каждое умножили на сумму двух его соседей. Докажите, что сумма этих четырех произведений, умноженная на <InlineMath math={`-1`} />, равна удвоенному квадрату целого числа.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2 pt-1">
          <div>
            <b>1. Введение переменных и запись условий:</b>
          </div>
          <div>
            Обозначим четыре целых числа, расставленных по кругу в последовательном порядке, как <InlineMath math={`a, \\ b, \\ c`} /> и <InlineMath math={`d`} />. 
            По условию задачи, их общая сумма равна нулю:
          </div>
          <BlockMath math={`a + b + c + d = 0 \\implies a + c = -(b + d)`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>2. Составление выражения для суммы произведений:</b>
          </div>
          <div>
            Каждое число умножается на сумму двух его соседей. Запишем сумму получившихся четырех произведений и раскроем скобки:
          </div>
          <BlockMath math={`S = a(b + d) + b(a + c) + c(b + d) + d(a + c)`} />
          <BlockMath math={`S = ab + ad + ab + bc + bc + cd + ad + cd`} />
          <div>
            Приведем подобные слагаемые:
          </div>
          <BlockMath math={`S = 2ab + 2bc + 2cd + 2ad`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>3. Разложение выражения на множители:</b>
          </div>
          <div>
            Вынесем общий коэффициент 2 за скобки, а оставшиеся члены сгруппируем попарно:
          </div>
          <BlockMath math={`S = 2\\bigl(b(a + c) + d(a + c)\\bigr) = 2(a + c)(b + d)`} />
          <div>
            По условию задачи, умноженную на <InlineMath math={`-1`} /> сумму произведений необходимо исследовать. Умножим обе части равенства на <InlineMath math={`-1`} />:
          </div>
          <BlockMath math={`-1 \\cdot S = -2(a + c)(b + d)`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>4. Выделение удвоенного квадрата:</b>
          </div>
          <div>
            Используем ранее полученную из начального условия связь между парами чисел <InlineMath math={`b + d = -(a + c)`} />. Подставим это выражение вместо второй скобки:
          </div>
          <BlockMath math={`-S = -2(a + c)\\bigl(-(a + c)\\bigr) = 2(a + c)^2`} />
          <div>
            Поскольку числа <InlineMath math={`a`} /> и <InlineMath math={`c`} /> являются целыми по условию, их сумма <InlineMath math={`(a + c)`} /> также представляет собой целое число. 
            Следовательно, выражение <InlineMath math={`2(a + c)^2`} /> тождественно равно удвоенному квадрату целого числа.
          </div>
          <div className="pt-1">
            ЧТД.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


  {
    id: 20,
    title: (
      <span>
        Задача 20 (Встречные преобразования)
      </span>
    ),
    textBefore: (
      <span>
        Докажите, что если <InlineMath math={`\\dfrac{1}{a} + \\dfrac{1}{b} + \\dfrac{1}{c} = \\dfrac{1}{a + b + c}`} />, то сумма каких-то двух из них равна нулю.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Метод встречных преобразований</span>
          <div>
            <b>Метод встречных преобразований</b> — это логический приём доказательства равенств или тождеств, при котором исходное математическое условие и доказываемое утверждение преобразуются <b>независимо друг от друга</b>. 
          </div>
          <div className="mt-1.5 pt-1.5 border-t border-sky-100/50 dark:border-sky-950/40">
            💡 Вместо выполнения сложной искусственной группировки, оба выражения параллельными шагами сводятся к <b>одному и тому же промежуточному виду</b>. Как только эти «встречные» пути пересекаются в общей точке, утверждение считается строго доказанным.
          </div>
        </div>


        <div className="space-y-2 pt-1">
          <div>
            <b>Шаг 1. Полное раскрытие доказываемого утверждения:</b>
          </div>
          <div>
            Утверждение «сумма каких-то двух из чисел равна нулю» означает, что <InlineMath math={`a+b=0`} />, <InlineMath math={`b+c=0`} /> или <InlineMath math={`c+a=0`} />. Это равносильно тому, что их произведение равно нулю:
          </div>
          <BlockMath math={`(a + b)(b + c)(c + a) = 0`} />
          <div>
            Перемножим скобки последовательно «в лоб» без сложных группировок:
          </div>
          <BlockMath math={`\\bigl(ab + ac + b^2 + bc\\bigr)(c + a) = 0`} />
          <BlockMath math={`abc + a^2b + ac^2 + a^2c + b^2c + ab^2 + bc^2 + abc = 0`} />
          <div>
            Приведем подобные слагаемые и запишем получившуюся сумму произведений:
          </div>
          <BlockMath math={`a^2b + ab^2 + b^2c + bc^2 + c^2a + ca^2 + 2abc = 0 \\quad \\text{(Вид №1)}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 2. Раскрытие уравнения из условия задачи:</b>
          </div>
          <div>
            Возьмём исходное уравнение и приведём дроби в левой части к общему знаменателю:
          </div>
          <BlockMath math={`\\dfrac{ab + bc + ca}{abc} = \\dfrac{1}{a + b + c}`} />
          <div>
            Используя основное свойство пропорции (умножение «крест-накрест»), избавимся от дробей:
          </div>
          <BlockMath math={`(a + b + c)(ab + bc + ca) = abc`} />
          <div>
            Честно умножим каждую переменную из первой скобки на каждое слагаемое из второй скобки:
          </div>
          <BlockMath math={`a^2b + abc + ca^2 + ab^2 + b^2c + abc + abc + bc^2 + c^2a = abc`} />
          <div>
            Приведем подобные члены:
          </div>
          <BlockMath math={`a^2b + ab^2 + b^2c + bc^2 + c^2a + ca^2 + 2abc = 0 \\quad \\text{(Вид №2)}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 3. Сопоставление результатов:</b>
          </div>
          <div>
            В результате простого раскрытия скобок обе части пришли к <b>абсолютно одинаковому многочлену</b>:
          </div>
          <BlockMath math={`\\text{Вид №1} \\equiv \\text{Вид №2}`} />
          <div>
            Так как структуры полностью совпали, утверждение задачи успешно доказано методом встречных преобразований.
          </div>
          <div className="font-semibold text-amber-600 pt-1">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


  {
    id: 21,
    title: (
      <span>
        Задача 21 (Встречные преобразования)
      </span>
    ),
    textBefore: (
      <span>
        Пусть <InlineMath math={`a, \\ b, \\ c`} /> — попарно различные числа. Докажите, что выражение
        <span className="flex justify-center my-3">
          <InlineMath math={`a^2(c - b) + b^2(a - c) + c^2(b - a)`} />
        </span>
        не равно нулю.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2 pt-1">
          <div>
            <b>Шаг 1. Раскрытие исходного циклического выражения:</b>
          </div>
          <div>
            Предположим от противного, что исследуемое выражение равно нулю. Обозначим его за <InlineMath math={`P`} /> и полностью раскроем скобки:
          </div>
          <BlockMath math={`P = a^2c - a^2b + ab^2 - b^2c + bc^2 - c^2a = 0 \\quad \\text{(Вид №1)}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 2. Логическое обоснование и раскрытие олимпиадной структуры:</b>
          </div>
          <div>
            Докажем утверждение методом контрапозиции: если выражение <InlineMath math={`P = 0`} />, то среди чисел <InlineMath math={`a, \\ b, \\ c`} /> обязаны найтись хотя бы два равных. 
          </div>
          <div className="pt-1">
            Условие «хотя бы два числа равны» (<InlineMath math={`a = b`} />, <InlineMath math={`b = c`} /> или <InlineMath math={`c = a`} />) математически задается равенством нулю произведения их разностей:
          </div>
          <BlockMath math={`(a - b)(b - c)(c - a) = 0`} />
          <div className="pt-1">
          </div>
          <BlockMath math={`-(a - b)(b - c)(c - a) = (a - b)(b - c)(a - c)`} />
          <BlockMath math={`\\bigl(ab - ac - b^2 + bc\\bigr)(a - c) = a^2b - abc - a^2c + ac^2 - ab^2 + b^2c + abc - bc^2`} />
          <div>
            Приведем подобные члены:
          </div>
          <BlockMath math={`a^2c - a^2b + ab^2 - b^2c + bc^2 - c^2a = 0 \\quad \\text{(Вид №2)}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 3. Сопоставление результатов и противоречие:</b>
          </div>
          <div>
            Встречные преобразования показали, что Вид №1 и Вид №2 тождественно равны, символ в символ:
          </div>
          <BlockMath math={`\\text{Вид №1} \\equiv \\text{Вид №2}`} />
          <div>
            Следовательно, наше уравнение из Шага 1 эквивалентно равенству:
          </div>
          <BlockMath math={`-(a - b)(b - c)(c - a) = 0 \\implies a = b \\quad \\text{или} \\quad b = c \\quad \\text{или} \\quad c = a`} />
          <div className="pt-1">
            Это напрямую противоречит условию о том, что числа являются **попарно различными** (<InlineMath math={`a \\neq b, \\ b \\neq c, \\ c \\neq a`} />). Предположение неверно, выражение не равно нулю.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: доказано.</div>
        </div>
      </div>
    )
  },




  {
    id: 22,
    title: (
      <span>
        Задача 22 (Встречные преобразования)
      </span>
    ),
    textBefore: (
      <span>
        Даны ненулевые действительные числа <InlineMath math={`a, \\ b, \\ c`} />, удовлетворяющие условию <InlineMath math={`a + b + c = \\dfrac{1}{a} + \\dfrac{1}{b} + \\dfrac{1}{c}`} />. Докажите, что если <InlineMath math={`abc = 1`} />, то хотя бы одно из них равно 1.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2 pt-1">
          <div>
            <b>Шаг 1. Раскрытие доказываемого утверждения:</b>
          </div>
          <div>
            Утверждение «хотя бы одно из чисел равно 1» эквивалентно тому, что произведение следующих скобок даёт ноль:
          </div>
          <BlockMath math={`(a - 1)(b - 1)(c - 1) = 0`} />
          <BlockMath math={`\\bigl(ab - a - b + 1\\bigr)(c - 1) = abc - ab - ac + a - bc + b + c - 1 = 0`} />
          <div>
            Подставим заданное в условии значение произведения <InlineMath math={`abc = 1`} />:
          </div>
          <BlockMath math={`1 + a + b + c - ab - ac - bc - 1 = 0 \\iff a + b + c = ab + bc + ca \\quad \\text{(Вид №1)}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 2. Раскрытие уравнения из условия задачи:</b>
          </div>
          <div>
            Возьмём исходное уравнение и приведём правую часть к общему знаменателю:
          </div>
          <BlockMath math={`a + b + c = \\dfrac{ab + bc + ca}{abc}`} />
          <div>
            Подставим известное значение <InlineMath math={`abc = 1`} /> прямо в знаменатель дроби:
          </div>
          <BlockMath math={`a + b + c = \\dfrac{ab + bc + ca}{1} \\iff a + b + c = ab + bc + ca \\quad \\text{(Вид №2)}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 3. Сопоставление результатов:</b>
          </div>
          <div>
            Оба выражения независимо друг от друга пришлись к **абсолютно одинаковому виду**:
          </div>
          <BlockMath math={`\\text{Вид №1} \\equiv \\text{Вид №2}`} />
          <div>
            Следовательно, произведение <InlineMath math={`(a - 1)(b - 1)(c - 1) = 0`} />, что гарантирует равенство единице хотя бы одного из чисел. Утверждение доказано.
          </div>
          <div className="font-semibold text-amber-600 pt-1">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


     {
    id: 23,
    title: (
      <span>
        Задача 23 (Приём прибавить/отнять)
      </span>
    ),
    textBefore: (
      <span>
        При каких целых <InlineMath math={`m`} /> число <InlineMath math={`m^4 + 4`} /> является составным (то есть имеет хотя бы 3 натуральных делителя)?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Определение составного числа</span>
          <div>
            Натуральное число называется составным, если его можно разложить на произведение двух натуральных множителей, каждый из которых <b>строго больше 1</b>.
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <div>
            <b>Шаг 1. Применение приёма «прибавить/отнять»:</b>
          </div>
          <div>
            Прибавим и сразу же вычтем выражение <InlineMath math={`4m^2`} />, чтобы искусственно выделить полный квадрат:
          </div>
          <BlockMath math={`m^4 + 4 = (m^4 + 4m^2 + 4) - 4m^2`} />
          <div>
            Свернём первую скобку по формуле квадрата суммы и применим разность квадратов:
          </div>
          <BlockMath math={`(m^2 + 2)^2 - (2m)^2 = (m^2 - 2m + 2)(m^2 + 2m + 2)`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 2. Анализ множителей:</b>
          </div>
          <div>
            Оценим минимально возможные значения каждого сомножителя через выделение полных квадратов:
          </div>
          <BlockMath math={`m^2 - 2m + 2 = (m - 1)^2 + 1 \\geq 1`} />
          <BlockMath math={`m^2 + 2m + 2 = (m + 1)^2 + 1 \\geq 1`} />
          <div>
            Выясним, при каких условиях один из множителей становится равен тривиальной единице:
          </div>
          <ul className="list-bullet pl-5 space-y-1 text-sm">
            <li>При <InlineMath math={`m = 1`} /> получаем: <InlineMath math={`1^4 + 4 = 5`} /> (простое число).</li>
            <li>При <InlineMath math={`m = -1`} /> получаем: <InlineMath math={`(-1)^4 + 4 = 5`} /> (простое число).</li>
          </ul>
          <div className="pt-1">
            Для всех остальных целых значений <InlineMath math={`m`} /> оба сомножителя строго больше единицы, что доказывает составную структуру числа.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: при всех целых m, кроме m = 1 и m = -1.</div>
        </div>
      </div>
    )
  },


    {
    id: 24,
    title: (
      <span>
        Задача 24
      </span>
    ),
    textBefore: (
      <span>
        Упростите выражение (в ответе не должно быть многоточия и знаков суммирования):
        <span className="flex justify-center my-3">
          <InlineMath math={`(1 + 3 + 3^2)(1 + 3^3 + 3^6)(1 + 3^9 + 3^{18}) \\dots (1 + 3^{3^n} + 3^{2 \\cdot 3^n}).`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Свёртывание через разность кубов</span>
          <div>
            Для каждого сомножителя вида <InlineMath math={`(1 + x + x^2)`} /> можно применить приём искусственного домножения и деления на разность <InlineMath math={`(x - 1)`} />, что позволяет свернуть его в разность кубов:
          </div>
          <BlockMath math={`(x - 1)(1 + x + x^2) = x^3 - 1 \\implies 1 + x + x^2 = \\dfrac{x^3 - 1}{x - 1}`} />
        </div>

        <div className="space-y-2 pt-1">
          <div>
            <b>Шаг 1. Преобразование первого сомножителя:</b>
          </div>
          <div>
            Домножим и разделим первую скобку выражения на <InlineMath math={`(3 - 1) = 2`} />:
          </div>
          <BlockMath math={`1 + 3 + 3^2 = \\dfrac{(3 - 1)(1 + 3 + 3^2)}{3 - 1} = \\dfrac{3^3 - 1}{3 - 1}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 2. Развёртывание произведения («эффект телескопа»):</b>
          </div>
          <div>
            Применим аналогичную формулу к каждой последующей скобке, последовательно подставляя аргументы <InlineMath math={`x = 3^3`} />, <InlineMath math={`x = 3^9`} /> и так далее:
          </div>
          <ul className="list-bullet pl-5 space-y-2 text-sm">
            <li>Вторая скобка: <InlineMath math={`1 + 3^3 + 3^6 = \\dfrac{(3^3)^3 - 1}{3^3 - 1} = \\dfrac{3^9 - 1}{3^3 - 1}`} /></li>
            <li>Третья скобка: <InlineMath math={`1 + 3^9 + 3^{18} = \\dfrac{(3^9)^3 - 1}{3^9 - 1} = \\dfrac{3^{27} - 1}{3^9 - 1}`} /></li>
            <li>Последняя скобка: <InlineMath math={`1 + 3^{3^n} + 3^{2 \\cdot 3^n} = \\dfrac{(3^{3^n})^3 - 1}{3^{3^n} - 1} = \\dfrac{3^{3^{n+1}} - 1}{3^{3^n} - 1}`} /></li>
          </ul>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 3. Сокращение дробей:</b>
          </div>
          <div>
            Перемножим все преобразованные дроби. Мы видим, что числитель каждой предыдущей дроби идеально уничтожает знаменатель следующей:
          </div>
          <BlockMath math={`S = \\dfrac{3^3 - 1}{3 - 1} \\cdot \\dfrac{3^9 - 1}{3^3 - 1} \\cdot \\dfrac{3^{27} - 1}{3^9 - 1} \\dots \\dfrac{3^{3^{n+1}} - 1}{3^{3^n} - 1}`} />
          <div>
            После полного каскадного сокращения всех промежуточных членов остаются только знаменатель самой первой дроби и числитель самой последней:
          </div>
          <BlockMath math={`S = \\dfrac{3^{3^{n+1}} - 1}{3 - 1} = \\dfrac{3^{3^{n+1}} - 1}{2}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: (3^(3^(n+1)) - 1) / 2.</div>
        </div>
      </div>
    )
  },


  {
    id: 25,
    title: (
      <span>
        Задача 25 (Неравенство о средних) <span className="text-sm font-normal text-slate-400 ml-1.5">(Олимпиада ИТМО, 2023)</span>
      </span>
    ),
    textBefore: (
      <span>
        Для произвольных вещественных чисел <InlineMath math={`x, \\ y, \\ z, \\ t`} />, больших <InlineMath math={`7`} />, докажите неравенство:
        <span className="flex justify-center my-3">
          <InlineMath math={`4 \\cdot \\sqrt{(x - 3)(y - 4)(z - 5)(t - 6)} < (x - 2)^2 + (y - 5)^2 + (z - 7)^2 + (t - 4)^2.`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Классическое неравенство о средних (Коши)</span>
          <div>
            Для любых положительных чисел справедливо строгое зажатие между их средним квадратическим, средним арифметическим и средним геометрическим:
          </div>
          <BlockMath math={`\\sqrt{\\dfrac{X_1^2 + X_2^2 + X_3^2 + X_4^2}{4}} \\geq \\dfrac{X_1 + X_2 + X_3 + X_4}{4} \\geq \\sqrt{X_1 X_2 X_3 X_4}`} />
        </div>

        <div className="space-y-2 pt-1">
          <div>
            <b>1. Введение положительных переменных:</b>
          </div>
          <div>
            Поскольку по условию все исходные числа строго больше <InlineMath math={`7`} />, сделаем замену для перехода к строго положительным элементам <InlineMath math={`a, \\ b, \\ c, \\ d > 0`} />:
          </div>
          <BlockMath math={`x = 7 + a, \\quad y = 7 + b, \\quad z = 7 + c, \\quad t = 7 + d`} />
          <div>
            Подставим эти выражения в левую и правую части доказываемого неравенства:
          </div>
          <BlockMath math={`4 \\cdot \\sqrt{(a + 4)(b + 3)(c + 2)(d + 1)} < (a + 5)^2 + (b + 2)^2 + c^2 + (d + 3)^2`} />
          <div>
            Разделим обе части неравенства на 4:
          </div>
          <BlockMath math={`\\sqrt{(a + 4)(b + 3)(c + 2)(d + 1)} < \\dfrac{(a + 5)^2 + (b + 2)^2 + c^2 + (d + 3)^2}{4}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>2. Применение неравенства между средним квадратическим и арифметическим:</b>
          </div>
          <div>
            Рассмотрим среднее квадратическое для набора подквадратных выражений <InlineMath math={`(a + 5), \\ (b + 2), \\ c, \\ (d + 3)`} />:
          </div>
          <BlockMath math={`\\sqrt{\\dfrac{(a + 5)^2 + (b + 2)^2 + c^2 + (d + 3)^2}{4}} \\geq \\dfrac{(a + 5) + (b + 2) + c + (d + 3)}{4}`} />
          <div>
            Перегруппируем слагаемые в числителе правой части, распределив свободные числа:
          </div>
          <BlockMath math={`\\dfrac{(a + 4) + (b + 3) + (c + 2) + (d + 1)}{4}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>3. Переход к среднему геометрическому:</b>
          </div>
          <div>
            Применим ко второму звену неравенство между средним арифметическим и средним геометрическим для четырёх элементов:
          </div>
          <BlockMath math={`\\dfrac{(a + 4) + (b + 3) + (c + 2) + (d + 1)}{4} \\geq \\sqrt{(a + 4)(b + 3)(c + 2)(d + 1)}`} />
          <div>
            Объединяя шаги 2 и 3 в сквозную цепочку зажатий, получаем:
          </div>
          <BlockMath math={`\\sqrt{\\dfrac{(a + 5)^2 + (b + 2)^2 + c^2 + (d + 3)^2}{4}} \\geq \\sqrt{(a + 4)(b + 3)(c + 2)(d + 1)}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>4. Финальное возведение в квадрат:</b>
          </div>
          <div>
            Так как обе части полученного соотношения строго положительны, возведём их в квадрат:
          </div>
          <BlockMath math={`\\dfrac{(a + 5)^2 + (b + 2)^2 + c^2 + (d + 3)^2}{4} \\geq (a + 4)(b + 3)(c + 2)(d + 1)`} />
          <div>
            Заметим, что знак равенства мог бы достичься только при одновременном совпадении всех элементов. Однако системы уравнений <InlineMath math={`a+5=b+2=c=d+3`} /> и <InlineMath math={`a+4=b+3=c+2=d+1`} /> не имеют совместных решений. 
            Следовательно, неравенство является <b>строгим</b>. Умножая на 4, мы возвращаемся к исходному виду задачи. Неравенство доказано.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


  {
    id: 26,
    title: (
      <span>
        Задача 26 (Неравенство КБШ)
      </span>
    ),
    textBefore: (
      <span>
        Для положительных чисел <InlineMath math={`a, \\ b, \\ c, \\ x, \\ y, \\ z`} /> докажите неравенство:
        <span className="flex justify-center my-3">
          <InlineMath math={`ax + by + cz + 2\\sqrt{(a^2 + b^2 + c^2)(x^2 + y^2 + z^2)} \\geq (a + b + c)(x + y + z).`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2 pt-1">
          <div>
            Запишем неравенства Коши — Буняковского — Шварца для различных перестановок переменных:
          </div>
          <BlockMath math={`\\sqrt{(a^2 + b^2 + c^2)(x^2 + y^2 + z^2)} \\geq ay + bz + cx`} />
          <BlockMath math={`\\sqrt{(a^2 + b^2 + c^2)(x^2 + y^2 + z^2)} \\geq az + bx + cy`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Сложим почленно неравенства:
          </div>
          <BlockMath math={`2\\sqrt{(a^2 + b^2 + c^2)(x^2 + y^2 + z^2)} \\geq (ay + bz + cx) + (az + bx + cy)`} />
          <div>
            Прибавим к обеим частям выражение <InlineMath math={`ax + by + cz`} />:
          </div>
          <BlockMath math={`ax + by + cz + 2\\sqrt{(a^2 + b^2 + c^2)(x^2 + y^2 + z^2)} \\geq ax + by + cz + ay + bz + cx + az + bx + cy`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Разложим правую часть полученного неравенства на множители через группировку:
          </div>
          <BlockMath math={`ax + ay + az + bx + by + bz + cx + cy + cz = (a + b + c)(x + y + z)`} />
          <div>
            Следовательно, искомое неравенство выполняется:
          </div>
          <BlockMath math={`ax + by + cz + 2\\sqrt{(a^2 + b^2 + c^2)(x^2 + y^2 + z^2)} \\geq (a + b + c)(x + y + z).`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


      {
    id: 27,
    title: (
      <span>
        Задача 27 (Лемма Титу)
      </span>
    ),
    textBefore: (
      <span>
        Обозначим через <InlineMath math={`h_a, \\ h_b, \\ h_c`} /> длины высот, проведенных к сторонам <InlineMath math={`BC, \\ AC, \\ AB`} /> соответственно. Докажите, что
        <span className="flex justify-center my-3">
          <InlineMath math={`h_a + h_b + h_c \\geq 9r.`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией (строго общая справка) */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Лемма Титу</span>
          <div>
            Для любых вещественных чисел <InlineMath math={`a_1, \\ a_2, \\ \\dots, \\ a_n`} /> и положительных знаменателей <InlineMath math={`b_1, \\ b_2, \\ \\dots, \\ b_n > 0`} /> справедливо алгебраическое неравенство:
          </div>
          <BlockMath math={`\\dfrac{a_1^2}{b_1} + \\dfrac{a_2^2}{b_2} + \\dots + \\dfrac{a_n^2}{b_n} \\geq \\dfrac{(a_1 + a_2 + \\dots + a_n)^2}{b_1 + b_2 + \\dots + b_n}`} />
        </div>

        <div className="space-y-2 pt-1">
          <div>
            <b>Шаг 1. Геометрическое тождество:</b>
          </div>
          <div>
            Выразим площади треугольника через его стороны и высоты (<InlineMath math={`S = \\dfrac{1}{2}a h_a`} />), а также через полупериметр и радиус вписанной окружности (<InlineMath math={`S = pr`} />):
          </div>
          <BlockMath math={`\\dfrac{1}{h_a} + \\dfrac{1}{h_b} + \\dfrac{1}{h_c} = \\dfrac{a}{2S} + \\dfrac{b}{2S} + \\dfrac{c}{2S} = \\dfrac{a+b+c}{2S} = \\dfrac{1}{r}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 2. Оценка суммы высот:</b>
          </div>
          <div>
            Применим лемму Титу для частного случая трех элементов при <InlineMath math={`a_1 = a_2 = a_3 = 1`} />:
          </div>
          <BlockMath math={`\\dfrac{1}{h_a} + \\dfrac{1}{h_b} + \\dfrac{1}{h_c} \\geq \\dfrac{(1 + 1 + 1)^2}{h_a + h_b + h_c} = \\dfrac{9}{h_a + h_b + h_c}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 3. Сопоставление и вывод:</b>
          </div>
          <div>
            Подставим полученное геометрическое тождество в левую часть неравенства:
          </div>
          <BlockMath math={`\\dfrac{1}{r} \\geq \\dfrac{9}{h_a + h_b + h_c} \\implies h_a + h_b + h_c \\geq 9r.`} />
          <div className="pt-1">
            Неравенство полностью доказано. Равенство достигается исключительно в правильном треугольнике.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


    {
    id: 28,
    title: (
      <span>
        Задача 28 (Домножение на сопряжённое) <span className="text-sm font-normal text-slate-400 ml-1.5">(МГУ, ДВИ)</span>
      </span>
    ),
    textBefore: (
      <span>
        Чему равна сумма выражений <InlineMath math={`\\sqrt{2023 + t^2}`} /> и <InlineMath math={`\\sqrt{999 + t^2}`} />, если их разность равна <InlineMath math={`8`} />?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        {/* Голубая карточка с теорией (строго общая справка) */}
        <div className="p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Домножение на сопряжённое выражение</span>
          <div>
            <b>Сопряжёнными</b> называют иррациональные выражения, знаки между слагаемыми которых противоположны. Их перемножение позволяет избавиться от радикалов по формуле разности квадратов:
          </div>
          <BlockMath math={`(\\sqrt{A} - \\sqrt{B})(\\sqrt{A} + \\sqrt{B}) = A - B`} />
        </div>

        <div className="space-y-2 pt-1">
          <div>
            <b>Шаг 1. Запись исходного условия:</b>
          </div>
          <div>
            Обозначим искомую сумму выражений за <InlineMath math={`S`} />, а их разность по условию запишем как известное равенство:
          </div>
          <BlockMath math={`\\sqrt{2023 + t^2} - \\sqrt{999 + t^2} = 8`} />
          <BlockMath math={`\\sqrt{2023 + t^2} + \\sqrt{999 + t^2} = S`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 2. Перемножение сопряжённых выражений:</b>
          </div>
          <div>
            Почленно перемножим левые и правые части двух составленных уравнений:
          </div>
          <BlockMath math={`\\bigl(\\sqrt{2023 + t^2} - \\sqrt{999 + t^2}\\bigr)\\bigl(\\sqrt{2023 + t^2} + \\sqrt{999 + t^2}\\bigr) = 8 \\cdot S`} />
          <div>
            Применим формулу разности квадратов в левой части (иррациональность и переменная <InlineMath math={`t^2`} /> полностью уничтожаются):
          </div>
          <BlockMath math={`(2023 + t^2) - (999 + t^2) = 8S`} />
          <BlockMath math={`2023 - 999 = 8S \\implies 1024 = 8S`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 3. Нахождение искомой величины:</b>
          </div>
          <div>
            Выразим значение суммы <InlineMath math={`S`} />:
          </div>
          <BlockMath math={`S = \\dfrac{1024}{8} = 128`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: 128.</div>
        </div>
      </div>
    )
  },


    {
    id: 29,
    title: (
      <span>
        Задача 29 (Выделение полного квадрата под корнем) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Ломоносов», 2021)</span>
      </span>
    ),
    textBefore: (
      <span>
        Число <InlineMath math={`x = 2^1 + 2^0 + 2^{-1} + 2^{-2} + \\dots + 2^{-2021}`} />. Найдите значение выражения:
        <span className="flex justify-center my-3">
          <InlineMath math={`\\sqrt{2x + 4\\sqrt{2x-4}} + \\sqrt{2x - 4\\sqrt{2x-4}}.`} />
        </span>
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>

        <div className="space-y-2 pt-1">
          <div>
            <b>Шаг 1. Оценка диапазона значения переменной x:</b>
          </div>
          <div>
            Выражение для <InlineMath math={`x`} />, начиная со второго слагаемого, представляет собой сумму геометрической прогрессии. Запишем её значение:
          </div>
          <BlockMath math={`x = 2 + \\left(1 + \\dfrac{1}{2} + \\dfrac{1}{4} + \\dots + \\dfrac{1}{2^{2021}}\\right) = 2 + \\left(2 - \\dfrac{1}{2^{2021}}\\right) = 4 - \\dfrac{1}{2^{2021}}`} />
          <div>
            Из полученного равенства очевидно, что число <InlineMath math={`x`} /> строго ограничено рамками:
          </div>
          <BlockMath math={`3 < x < 4 \\implies 6 < 2x < 8`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 2. Выделение полных квадратов под радикалами:</b>
          </div>
          <div>
            Заметим, что число <InlineMath math={`2x`} /> можно искусственно расписать как сумму <InlineMath math={`(2x - 4) + 4`} />. Преобразуем подкоренные выражения:
          </div>
          <BlockMath math={`2x \\pm 4\\sqrt{2x-4} = (2x - 4) \\pm 2 \\cdot 2 \\cdot \\sqrt{2x-4} + 2^2 = \\bigl(\\sqrt{2x-4} \\pm 2\\bigr)^2`} />
          <div>
            Извлечем квадратные корни, заменяя их знаками абсолютной величины:
          </div>
          <BlockMath math={`A = \\left|\\sqrt{2x-4} + 2\\right| + \\left|\\sqrt{2x-4} - 2\\right|`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Шаг 3. Раскрытие модулей:</b>
          </div>
          <div>
            Первое подмодульное выражение всегда строго положительно. Для раскрытия второго модуля используем ранее найденное ограничение <InlineMath math={`2x < 8`} />:
          </div>
          <BlockMath math={`2x < 8 \\implies 2x - 4 < 4 \\implies \\sqrt{2x-4} < 2`} />
          <div>
            Так как <InlineMath math={`\\sqrt{2x-4} - 2 < 0`} />, второй модуль раскрывается со сменой знаков на противоположные:
          </div>
          <BlockMath math={`A = \\bigl(\\sqrt{2x-4} + 2\\bigr) + \\bigl(2 - \\sqrt{2x-4}\\bigr) = 4`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: 4.</div>
        </div>
      </div>
    )
  },

  {
    id: 30,
    title: (
      <span>
        Задача 30 (Группировка слагаемых)
      </span>
    ),
    textBefore: (
      <span>
        Про вещественные числа <InlineMath math={`a, \\ b`} /> и <InlineMath math={`c`} /> известно, что <InlineMath math={`abc + a + b + c = 10`} /> и <InlineMath math={`ab + bc + ac = 9`} />. Чему равно значение выражения <InlineMath math={`(a + 1)(b + 1)(c + 1)`} />?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <span className="block space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <span className="font-bold text-slate-800 dark:text-slate-100 block">Решение.</span>
        
        <span className="block">
          Сложим почленно два уравнения, заданных по условию задачи:
          <span className="flex justify-center my-3">
            <InlineMath math={`(abc + a + b + c) + (ab + bc + ac) = 10 + 9`} />
          </span>
          <span className="flex justify-center my-3">
            <InlineMath math={`abc + ab + bc + ac + a + b + c = 19`} />
          </span>
          Прибавим к обеим частям полученного равенства единицу:
          <span className="flex justify-center my-3">
            <InlineMath math={`abc + ab + bc + ac + a + b + c + 1 = 20`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          Выполним последовательную группировку слагаемых в левой части уравнения:
          <span className="flex justify-center my-3">
            <InlineMath math={`ab(c + 1) + b(c + 1) + a(c + 1) + 1(c + 1) = 20`} />
          </span>
          Вынесем общий многочлен <InlineMath math={`(c + 1)`} /> за скобки:
          <span className="flex justify-center my-3">
            <InlineMath math={`(c + 1)(ab + b + a + 1) = 20`} />
          </span>
          Разложим вторую скобку по аналогичному принципу:
          <span className="flex justify-center my-3">
            <InlineMath math={`(c + 1)\\bigl(b(a + 1) + 1(a + 1)\\bigr) = 20`} />
          </span>
          В результате получаем искомое выражение:
          <span className="flex justify-center my-3">
            <InlineMath math={`(a + 1)(b + 1)(c + 1) = 20`} />
          </span>
        </span>

        <span className="block border-t border-slate-200/40 pt-2">
          <span className="font-semibold text-amber-600 block">Ответ: 20.</span>
        </span>

        {/* Голубая карточка-заметка в самом конце разбора */}
        <span className="block p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20 text-slate-700 dark:text-slate-300 text-xs md:text-sm mt-4">
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">💡 Олимпиадный маркер</span>
          Полезно запомнить базовое тождество:
          <span className="flex justify-center my-2 font-medium">
            <InlineMath math={`(a + 1)(b + 1)(c + 1) = abc + (ab + bc + ca) + (a + b + c) + 1`} />
          </span>
          Если в условии задачи одновременно даны сумма чисел, их попарные произведения и общее произведение — это явный маркер на использование этой структуры через искусственное добавление или вычитание единицы.
        </span>
      </span>
    )
  },



  


];