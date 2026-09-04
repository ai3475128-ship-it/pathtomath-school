import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
export const olympiadIntro02Tasks = [

      {
    id: 1,
    title: 'Задача 1 (Делимость)',
    textBefore: 'Найдите последнюю цифру числа 2⁵⁰.',
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Последняя цифра натурального числа определяется его остатком при делении на 10. Исследуем поведение последних цифр последовательных степеней двойки:
          </p>
          <BlockMath math={`2^1 = 2 \\implies \\text{заканчивается на } 2`} />
          <BlockMath math={`2^2 = 4 \\implies \\text{заканчивается на } 4`} />
          <BlockMath math={`2^3 = 8 \\implies \\text{заканчивается на } 8`} />
          <BlockMath math={`2^4 = 16 \\implies \\text{заканчивается на } 6`} />
          <BlockMath math={`2^5 = 32 \\implies \\text{заканчивается на } 2`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p>
            Заметим инвариант периодичности: начиная с пятой степени, последние цифры полностью повторяются с периодом длины 4. Таким образом, последовательность крайних цифр имеет вид:
          </p>
          <BlockMath math={`2, \\ 4, \\ 8, \\ 6, \\ 2, \\ 4, \\ 8, \\ 6, \\ \\dots`} />
          <p>
            Чтобы определить последнюю цифру для показателя 50, найдём остаток от деления числа 50 на длину периода (4):
          </p>
          <BlockMath math={`50 = 4 \\cdot 12 + 2`} />
          <p>
            Остаток 2 означает, что число <InlineMath math={`2^{50}`} /> будет иметь такую же последнюю цифру, как и число <InlineMath math={`2^2`} />. Следовательно, последней цифрой является 4.
          </p>
          <p className="font-semibold text-amber-600">Ответ: 4.</p>
        </div>
      </div>
    )
  },

    {
    id: 2,
    title: 'Задача 2 (Делимость)',
    textBefore: 'Докажите для любого нечетного n, число 5ⁿ + 4ⁿ делится на 9.',
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Воспользуемся классическим алгебраическим тождеством для разложения суммы одинаковых нечётных степеней на множители. Для любого нечётного натурального числа <InlineMath math={`n`} /> справедливо равенство:
          </p>
          <BlockMath math={`a^n + b^n = (a + b)(a^{n-1} - a^{n-2}b + a^{n-3}b^2 - \\dots - ab^{n-2} + b^{n-1})`} />
          <p>
            Подставим в данную формулу значения оснований из условия задачи (<InlineMath math={`a = 5`} /> и <InlineMath math={`b = 4`} />):
          </p>
          <BlockMath math={`5^n + 4^n = (5 + 4)(5^{n-1} - 5^{n-2} \\cdot 4 + \\dots + 4^{n-1})`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p>
            Вычислим значение в первой скобке полученного произведения:
          </p>
          <BlockMath math={`5 + 4 = 9`} />
          <p>
            Перепишем выражение, выделив этот числовой множитель:
          </p>
          <BlockMath math={`5^n + 4^n = 9 \\cdot (5^{n-1} - 5^{n-2} \\cdot 4 + \\dots + 4^{n-1})`} />
          <p>
            Поскольку второй сомножитель состоит из суммы и произведения целых чисел, его значение также является целым числом. Наличие множителя 9 перед скобкой строго доказывает, что результирующее число нацело делится на 9 для любого нечётного <InlineMath math={`n`} />. Что и требовалось доказать.
          </p>
        </div>
      </div>
    )
  },


  {
    id: 3,
    title: 'Задача 3 (Разложение на множители)',
    textBefore: (
      <span>
        Найдите все натуральные n такие, что:
        <br />
        <b>(а)</b> числа n + 3 и 4n + 1 являются квадратами натуральных чисел;
        <br />
        <b>(b)</b> числа 12n + 1 и 75n + 49 являются квадратами натуральных чисел.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        {/* Часть (а) */}
        <div className="space-y-2">
          <p>
            <b>(а)</b> Пусть <InlineMath math={`n + 3 = x^2`} /> и <InlineMath math={`4n + 1 = y^2`} />, где <InlineMath math={`x, y \\in \\mathbb{N}`} />. Выразим <InlineMath math={`4n`} /> из обоих уравнений:
          </p>
          <BlockMath math={`4n = 4x^2 - 12, \\quad 4n = y^2 - 1`} />
          <p>Приравняем полученные выражения и применим формулу разности квадратов:</p>
          <BlockMath math={`4x^2 - 12 = y^2 - 1 \\iff 4x^2 - y^2 = 11 \\iff (2x - y)(2x + y) = 11`} />
          <p>
            Поскольку <InlineMath math={`x`} /> и <InlineMath math={`y`} /> натуральные, сомножитель <InlineMath math={`2x + y`} /> строго положителен, значит, <InlineMath math={`2x - y`} /> также положителен. Число 11 простое, поэтому система имеет единственный вариант разложения:
          </p>
          <BlockMath math={`\\begin{cases} 2x - y = 1 \\\\ 2x + y = 11 \\end{cases} \\implies 4x = 12 \\implies x = 3`} />
          <p>Найдем искомое значение переменной:</p>
          <BlockMath math={`n = x^2 - 3 = 3^2 - 3 = 6`} />
        </div>

        {/* Часть (b) */}
        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p>
            <b>(b)</b> Пусть <InlineMath math={`12n + 1 = a^2`} /> и <InlineMath math={`75n + 49 = b^2`} />, где <InlineMath math={`a, b \\in \\mathbb{N}`} />. Исключим переменную <InlineMath math={`n`} />, найдя наименьшее общее кратное для коэффициентов 12 и 75, равное 300:
          </p>
          <BlockMath math={`25 \\cdot (12n + 1) = 25a^2 \\iff 300n + 25 = 25a^2`} />
          <p>Второе уравнение умножим на 4:</p>
          <BlockMath math={`4 \\cdot (75n + 49) = 4b^2 \\iff 300n + 196 = 4b^2`} />
          <p>Вычтем первое уравнение из второго и разложим разность квадратов:</p>
          <BlockMath math={`4b^2 - 25a^2 = 196 - 25 \\iff (2b - 5a)(2b + 5a) = 171`} />
          <p>
            Выпишем все возможные разложения числа 171 на два натуральных множителя <InlineMath math={`(2b - 5a) < (2b + 5a)`} /> :
          </p>
          <ul className="list-bullet pl-5 space-y-2 text-sm">
            <li>
              <InlineMath math={`\\begin{cases} 2b - 5a = 1 \\\\ 2b + 5a = 171 \\end{cases} \\implies 4b = 172 \\implies b = 43, \\ a = 17`} />. Тогда <InlineMath math={`12n + 1 = 17^2 = 289 \\implies n = 24`} />.
            </li>
            <li>
              <InlineMath math={`\\begin{cases} 2b - 5a = 3 \\\\ 2b + 5a = 57 \\end{cases} \\implies 4b = 60 \\implies b = 15, \\ a = 5.4 \\notin \\mathbb{N}`} />.
            </li>
            <li>
              <InlineMath math={`\\begin{cases} 2b - 5a = 9 \\\\ 2b + 5a = 19 \\end{cases} \\implies 4b = 28 \\implies b = 7, \\ a = 1`} />. Тогда <InlineMath math={`12n + 1 = 1^2 = 1 \\implies n = 0 \\notin \\mathbb{N}`} />.
            </li>
          </ul>
          <p className="font-semibold text-amber-600">Ответ: (а) n = 6; (b) n = 24.</p>
        </div>
      </div>
    )
  },




    {
    id: 4,
    title: (
      <span>
        Задача 4 (ОТА) <span className="text-sm font-normal text-slate-400 ml-1.5">(Математический праздник, 2008, 7.1)</span>
      </span>
    ),
    textBefore: 'Число умножили на сумму его цифр и получили 2008. Найдите это число.',
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Пусть исходное число равно <InlineMath math={`A`} />, а сумма его цифр равна <InlineMath math={`S(A)`} />. Разложим результат на простые множители:
          </p>
          <BlockMath math={`A \\cdot S(A) = 2008 = 8 \\cdot 251`} />
          <p>
            Число 251 является простым, поэтому сомножитель <InlineMath math={`A`} /> обязан быть кратен 251. 
          </p>
          <p>
            Проверим наименьший возможный вариант <InlineMath math={`A = 251`} />. Сумма его цифр равна:
          </p>
          <BlockMath math={`S(251) = 2 + 5 + 1 = 8`} />
          <p>
            Подставим полученные значения в исходное уравнение: <InlineMath math={`251 \\cdot 8 = 2008`} />. 
            Равенство выполняется, следовательно, число 251 является искомым.
          </p>
          <p className="font-semibold text-amber-600">Ответ: 251.</p>
        </div>
      </div>
    )
  },

    {
    id: 5,
    title: 'Задача 5 (НОК, НОД)',
    textBefore: 'Для поездки за город работникам завода было выделено несколько автобусов, с одинаковым числом мест в каждом автобусе. 424 человека поехали в лес, а 477 человек — на озеро. Все места в автобусах были заняты, и ни одного человека не осталось без места. Сколько автобусов было выделено и сколько пассажиров было в каждом автобусе?',
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Пусть в каждом автобусе было ровно <InlineMath math={`x`} /> пассажирских мест, а количество автобусов для поездки в лес и на озеро равно <InlineMath math={`k_1`} /> и <InlineMath math={`k_2`} /> соответственно. Из условий задачи составим систему уравнений:
          </p>
          <BlockMath math={`424 = k_1 \\cdot x, \\quad 477 = k_2 \\cdot x`} />
          <p>
            Поскольку количество мест <InlineMath math={`x`} /> должно быть целым числом, оно является общим делителем чисел 424 и 477. Найдём их наибольший общий делитель <InlineMath math={`\\text{НОД}(424, \\ 477)`} /> с помощью алгоритма Евклида:
          </p>
          <BlockMath math={`\\text{НОД}(424, \\ 477) = \\text{НОД}(424, \\ 477 - 424) = \\text{НОД}(424, \\ 53)`} />
          <p>
            Число 53 является простым. Проверим делимость числа 424 на 53:
          </p>
          <BlockMath math={`424 / 53 = 8 \\implies \\text{НОД}(424, \\ 477) = 53`} />
          <p>
            Таким образом, вместимость одного автобуса составляет строго <InlineMath math={`x = 53`} /> пассажира (так как при меньших делителях, например <InlineMath math={`x = 1`} />, задача теряет практический смысл реальной поездки).
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p>Вычислим общее количество выделенных автобусов:</p>
          <BlockMath math={`k_1 = \\dfrac{424}{53} = 8 \\text{ (автобусов в лес)}`} />
          <BlockMath math={`k_2 = \\dfrac{477}{53} = 9 \\text{ (автобусов на озеро)}`} />
          <BlockMath math={`K_{\\text{всего}} = 8 + 9 = 17 \\text{ (автобусов)}`} />
          <p className="font-semibold text-amber-600">Ответ: было выделено 17 автобусов, по 53 пассажира в каждом.</p>
        </div>
      </div>
    )
  },


  {
    id: 6,
    title: 'Задача 6 (Диофантовы уравнения)',
    textBefore: (
      <span>
        Фирма продавала чай в центре города по 7 рублей, а кофе по 10 рублей стакан, на вокзале по 4 рубля и 9 рублей соответственно. Всего было продано за час 20 стаканов чая и 20 стаканов кофе, при этом выручка в центре и на вокзале оказалась одинаковой. Сколько стаканов кофе было продано в центре?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Пусть в центре продано <InlineMath math={`x`} /> стаканов чая и <InlineMath math={`y`} /> стаканов кофе. 
            Тогда на вокзале продано <InlineMath math={`20 - x`} /> стаканов чая и <InlineMath math={`20 - y`} /> стаканов кофе.
            Составим уравнение равенства выручки:
          </p>
          <BlockMath math={`7x + 10y = 4(20 - x) + 9(20 - y)`} />
          <BlockMath math={`7x + 10y = 80 - 4x + 180 - 9y \\iff 11x + 19y = 260`} />
          <p>
            Где <InlineMath math={`x, y \\in \\mathbb{Z}`} /> и <InlineMath math={`0 \\leq x, y \\leq 20`} />. Извлечём остатки по модулю 11:
          </p>
          <BlockMath math={`19y \\equiv 260 \\pmod{11} \\iff 8y \\equiv 7 \\pmod{11}`} />
          <BlockMath math={`7 \\cdot 8y \\equiv 7 \\cdot 7 \\pmod{11} \\iff 56y \\equiv 49 \\pmod{11}`} />
          <BlockMath math={`y \\equiv 5 \\pmod{11}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p>
            В заданных границах <InlineMath math={`0 \\leq y \\leq 20`} /> проверим единственное подходящее целое значение <InlineMath math={`y = 5`} />:
          </p>
          <BlockMath math={`11x + 19 \\cdot 5 = 260 \\iff 11x + 95 = 260`} />
          <BlockMath math={`11x = 165 \\implies x = 15`} />
          <p>
            Пара решений <InlineMath math={`x = 15, \\ y = 5`} /> полностью удовлетворяет ограничениям системы. Второй возможный остаток <InlineMath math={`y = 16`} /> даёт отрицательный <InlineMath math={`x = -4`} />.
          </p>
          <p className="font-semibold text-amber-600">Ответ: 5 стаканов кофе.</p>
        </div>
      </div>
    )
  },


    {
    id: 7,
    title: 'Задача 7 (Теорема Безу)',
    textBefore: (
      <span>
        Найдите остаток от деления многочлена <InlineMath math={`x^{216} + x^{36} + x^6 - 6`} /> на многочлен <InlineMath math={`x + 1`} />.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Обозначим исходный многочлен как <InlineMath math={`P(x)`} /> :
          </p>
          <BlockMath math={`P(x) = x^{216} + x^{36} + x^6 - 6`} />
          <p>
            По <b>теореме Безу</b>, остаток от деления многочлена <InlineMath math={`P(x)`} /> на двучлен вида <InlineMath math={`x - a`} /> равен значению этого многочлена в точке <InlineMath math={`x = a`} />. 
          </p>
          <p>
            В нашем случае делителем является <InlineMath math={`x + 1 = x - (-1)`} />, откуда получаем значение <InlineMath math={`a = -1`} />.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p>
            Вычислим значение многочлена <InlineMath math={`P(-1)`} /> :
          </p>
          <BlockMath math={`P(-1) = (-1)^{216} + (-1)^{36} + (-1)^6 - 6`} />
          <BlockMath math={`(-1)^{216} = 1, \\quad (-1)^{36} = 1, \\quad (-1)^6 = 1`} />
          <p>Подставим эти значения в выражение для остатка:</p>
          <BlockMath math={`R = P(-1) = 1 + 1 + 1 - 6 = 3 - 6 = -3`} />
          <p className="font-semibold text-amber-600">Ответ: -3.</p>
        </div>
      </div>
    )
  },


    {
    id: 8,
    title: 'Задача 8 (Десятичная запись числа)',
    textBefore: (
      <span>
        Записали некоторое трехзначное число, приписали к нему такое же. Разделили получившееся шестизначное число на 11, затем на 13, а потом на 7. Какое число получили?
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Пусть исходное трёхзначное число равно <InlineMath math={`X`} />. Запишем структуру получившегося шестизначного числа, используя разложение по разрядам:
          </p>
          <BlockMath math={`\\overline{XX} = X \\cdot 1000 + X = X \\cdot (1000 + 1) = X \\cdot 1001`} />
          <p>
            Таким образом, приписывание к трёхзначному числу такого же числа математически эквивалентно его умножению на число 1001.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p>
            По условию задачи, получившееся шестизначное число последовательно разделили на 11, 13, а затем на 7. Это означает, что число разделили на произведение этих делителей:
          </p>
          <BlockMath math={`11 \\cdot 13 \\cdot 7 = 143 \\cdot 7 = 1001`} />
          <p>
            Запишем цепочку делений в виде единого итогового выражения:
          </p>
          <BlockMath math={`\\dfrac{X \\cdot 1001}{11 \\cdot 13 \\cdot 7} = \\dfrac{X \\cdot 1001}{1001} = X`} />
          <p>
            В результате всех делений получили то же самое трёхзначное число, которое было записано изначально.
          </p>
          <p className="font-semibold text-amber-600">Ответ: получили исходное трёхзначное число.</p>
        </div>
      </div>
    )
  },


    {
    id: 9,
    title: 'Задача 9 (Малая теорема Ферма)',
    textBefore: (
      <span>
        Сумма трёх чисел <InlineMath math={`a, b`} /> и <InlineMath math={`c`} /> делится на 30. Докажите, что <InlineMath math={`a^5 + b^5 + c^5`} /> также делится на 30.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            По условию задачи, сумма трёх целых чисел делится на 30:
          </p>
          <BlockMath math={`a + b + c \\equiv 0 \\pmod{30}`} />
          <p>
            Разложим модуль 30 на простые взаимно простые множители: <InlineMath math={`30 = 2 \\cdot 3 \\cdot 5`} />. 
            Рассмотрим разность между искомой суммой пятых степеней и исходной суммой чисел:
          </p>
          <BlockMath math={`\\Delta = (a^5 + b^5 + c^5) - (a + b + c) = (a^5 - a) + (b^5 - b) + (c^5 - c)`} />
          <p>
            Докажем, что выражение вида <InlineMath math={`x^5 - x`} /> делится на 2, 3 и 5 для любого целого <InlineMath math={`x`} />.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p>
            <b>1) Делимость на 5:</b> По Малой теореме Ферма, для любого простого числа <InlineMath math={`p`} /> и целого <InlineMath math={`x`} /> справедливо сравнение <InlineMath math={`x^p \\equiv x \\pmod{p}`} />. При <InlineMath math={`p = 5`} /> получаем:
          </p>
          <BlockMath math={`x^5 \\equiv x \\pmod{5} \\implies x^5 - x \\equiv 0 \\pmod{5}`} />
          
          <p>
            <b>2) Делимость на 3:</b> При <InlineMath math={`p = 3`} /> по Малой теореме Ферма выполняется <InlineMath math={`x^3 \\equiv x \\pmod{3}`} />. Разложим исследуемое выражение на множители:
          </p>
          <BlockMath math={`x^5 - x = x(x^4 - 1) = x(x^2 - 1)(x^2 + 1) = (x^3 - x)(x^2 + 1)`} />
          <p>Поскольку сомножитель <InlineMath math={`x^3 - x`} /> делится на 3, то и все произведение <InlineMath math={`x^5 - x`} /> нацело делится на 3.</p>

          <p>
            <b>3) Делимость на 2:</b> Разложим исследуемое выражение на элементарные множители:
          </p>
          <BlockMath math={`x^5 - x = x(x^4 - 1) = x(x^2 - 1)(x^2 + 1) = (x - 1)x(x + 1)(x^2 + 1)`} />
          <p>
            Полученное произведение содержит два последовательных целых числа <InlineMath math={`x - 1`} /> и <InlineMath math={`x`} />. Одно из двух последовательных чисел обязательно является чётным, поэтому всё выражение гарантированно делится на 2.
          </p>

        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p>
            Поскольку числа 2, 3 и 4 взаимно простые, каждое слагаемое разности <InlineMath math={`\\Delta`} /> нацело делится на их произведение:
          </p>
          <BlockMath math={`x^5 - x \\equiv 0 \\pmod{30} \\implies \\Delta = (a^5 - a) + (b^5 - b) + (c^5 - c) \\equiv 0 \\pmod{30}`} />
          <p>Выразим искомую сумму пятых степеней через доказанный инвариант:</p>
          <BlockMath math={`a^5 + b^5 + c^5 = (a + b + c) + \\Delta`} />
          <p>
            Так как оба слагаемых в правой части равенства делятся на 30, их сумма <InlineMath math={`a^5 + b^5 + c^5`} /> также гарантированно делится на 30. Что и требовалось доказать.
          </p>
        </div>
      </div>
    )
  },

  
    {
    id: 10,
    title: 'Задача 10 (Десятичная запись числа)',
    textBefore: (
      <span>
        Последнюю цифру шестизначного числа переставили в начало (например, из числа 123456 получится 612345), и полученное шестизначное число вычли из исходного числа. Какие числа из промежутка [618222; 618252] могли получиться в результате вычитания?
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
            Пусть исходное шестизначное число равно <InlineMath math={`A = 10x + y`} /> , где <InlineMath math={`x`} /> — пятизначное число, а <InlineMath math={`y`} /> — последняя цифра. Полученное перестановкой число равно <InlineMath math={`B = 100000y + x`} /> (где <InlineMath math={`y \\neq 0`} />).
          </div>
          <div>Запишем их разность <InlineMath math={`D`} /> :</div>
          <BlockMath math={`D = A - B = (10x + y) - (100000y + x) = 9x - 99999y = 9(x - 11111y)`} />
          <div>
            Из полученного уравнения следует, что результат вычитания <InlineMath math={`D`} /> обязан строго нацело делиться на 9. 
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Найдём все целые числа из промежутка <InlineMath math={`[618222; \\ 618252]`} /> , делящиеся на 9 (по признаку делимости через сумму цифр):
          </div>
          <BlockMath math={`D_1 = 618228, \\quad D_2 = 618237, \\quad D_3 = 618246`} />
          <div>Проверим существование натуральных решений для каждого из трёх кандидатов:</div>
          
          <ul className="list-bullet pl-5 space-y-3 text-sm">
            <li>
              <b>Для 618228:</b> <InlineMath math={`x - 11111y = 68692 \\implies x = 11111y + 68692`} />. 
              При <InlineMath math={`y = 1 \\implies x = 79803`} /> (числа 798031 и 179803).
            </li>
            <li>
              <b>Для 618237:</b> <InlineMath math={`x - 11111y = 68701 \\implies x = 11111y + 68701`} />. 
              При <InlineMath math={`y = 1 \\implies x = 79812`} /> (числа 798121 и 179812).
            </li>
            <li>
              <b>Для 618246:</b> <InlineMath math={`x - 11111y = 68710 \\implies x = 11111y + 68710`} />. 
              При <InlineMath math={`y = 1 \\implies x = 79821`} /> (числа 798211 и 179821).
            </li>
          </ul>
          <div className="pt-1">
            Для каждого из трёх значений существуют корректные пятизначные остатки <InlineMath math={`x`} /> , удовлетворяющие условию разрядности.
          </div>
          <div className="font-semibold text-amber-600">Ответ: 618228, 618237, 618246.</div>
        </div>
      </div>
    )
  },



    {
    id: 11,
    title: 'Задача 11 (Алгоритм Евклида)',
    textBefore: (
      <span>
        Известно, что <InlineMath math={`(m, n) = 1`} />. Каково наибольшее возможное значение <InlineMath math={`(m + 2017n, n + 2017m)`} />?
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
            Пусть <InlineMath math={`g = \\text{НОД}(m + 2017n, \\ n + 2017m)`} />. Составим две линейные комбинации по алгоритму Евклида для исключения переменных:
          </div>
          <BlockMath math={`2017 \\cdot (m + 2017n) - (n + 2017m) = (2017^2 - 1)n \\implies g \\mid (2017^2 - 1)n`} />
          <BlockMath math={`2017 \\cdot (n + 2017m) - (m + 2017n) = (2017^2 - 1)m \\implies g \\mid (2017^2 - 1)m`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Поскольку делитель <InlineMath math={`g`} /> общий, он делит наибольший общий делитель полученных выражений:
          </div>
          <BlockMath math={`g \\mid \\text{НОД}\\bigl((2017^2 - 1)n, \\ (2017^2 - 1)m\\bigr) = (2017^2 - 1) \\cdot \\text{НОД}(m, n)`} />
          <div>
            По условию задачи <InlineMath math={`\\text{НОД}(m, n) = 1`} />. Подставим это значение для нахождения максимума:
          </div>
          <BlockMath math={`g \\mid (2017^2 - 1) \\cdot 1 \\implies g_{\\text{max}} = 2017^2 - 1`} />
          <div className="font-semibold text-amber-600">Ответ: 2017² − 1.</div>
        </div>
      </div>
    )
  },


    {
    id: 12,
    title: (
      <span>
        Задача 12 (Уравнения в целых числах) <span className="text-sm font-normal text-slate-400 ml-1.5">(ММО, 1998, 8.1)</span>
      </span>
    ),
    textBefore: (
      <span>
        Найдутся ли натуральные числа <InlineMath math={`x, y`} /> и <InlineMath math={`z`} />, удовлетворяющие условию:
        <br />
        <InlineMath math={`28x + 30y + 31z = 365`} />?
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
            <b></b> Заметим календарный смысл коэффициентов уравнения: 365 — число дней в обычном году, а 28, 30 и 31 — количества дней в месяцах.
          </div>
          <div>
            Пусть в году ровно 12 месяцев (<InlineMath math={`x + y + z = 12`} />), среди которых ровно один февраль (<InlineMath math={`x = 1`} />), четыре месяца по 30 дней (<InlineMath math={`y = 4`} />) и семь месяцев по 31 дню (<InlineMath math={`z = 7`} />).
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>Подставим этот натуральный набор значений <InlineMath math={`(x=1, \\ y=4, \\ z=7)`} /> в исходное уравнение для проверки равенства:</div>
          <BlockMath math={`28 \\cdot 1 + 30 \\cdot 4 + 31 \\cdot 7 = 28 + 120 + 217`} />
          <BlockMath math={`28 + 120 + 217 = 148 + 217 = 365`} />
          <div>Равенство выполняется тождественно, следовательно, искомые натуральные числа существуют.</div>
          <div className="font-semibold text-amber-600">Ответ: да, найдутся (например, x = 1, y = 4, z = 7).</div>
        </div>
      </div>
    )
  },


    {
    id: 13,
    title: 'Задача 13 (Десятичная запись числа)',
    textBefore: (
      <span>
        Существует ли число, в десятичной записи квадрата которого имеется последовательность цифр «2018»?
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
            <b>Да, существует.</b> Покажем, что последовательность цифр «2018» может стоять в самом начале десятичной записи квадрата некоторого натурального числа.
          </div>
          <div>
            Для этого найдём такое число <InlineMath math={`N`} />, квадрат которого начинается на 2018. Проверим квадрат круглого числа 450:
          </div>
          <BlockMath math={`450^2 = 202500`} />
          <div>
            Число 202500 начинается на 2025, что очень близко к 2018. Попробуем рассмотреть число на единицу меньше:
          </div>
          <BlockMath math={`449^2 = (450 - 1)^2 = 201601`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Мы получили, что <InlineMath math={`449^2`} /> начинается на 2016. Увеличим разрядность этих чисел в 10 раз, чтобы зазор между соседними квадратами стал меньше:
          </div>
          <BlockMath math={`4500^2 = 20250000`} />
          <div>
            Вычислим значения полных квадратов для первых двух последовательных шагов вниз, используя формулу квадрата разности:
          </div>
          <BlockMath math={`4499^2 = (4500 - 1)^2 = 20250000 - 9000 + 1 = 20241001`} />
          <BlockMath math={`4498^2 = (4499 - 1)^2 = 20241001 - 8998 + 1 = 20232004`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>Закономерность изменения разрядов:</b> Из полученных вычислений видно, что при уменьшении основания на 1 результат уменьшается каждый раз примерно на 9000 (то есть округлённо на 10000). 
          </div>
          <div>
            На основе этого мы можем <b>предположить</b>, что каждый следующий шаг вниз будет стабильно уменьшать получившееся число ровно на <b>1 в четвёртом разряде</b> (в разряде десятков тысяч).
          </div>
          <div>
            Чтобы спустить старшие цифры числа с 2025... до нужных нам 2018..., нам необходимо уменьшить значение квадрата примерно на 7 десятков тысяч.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Следовательно нужно проверить число:
          </div>
          <BlockMath math={`N = 4500 - 7 = 4493`} />
          <div>
            Проверим полученное число <InlineMath math={`N = 4493`} /> прямым умножением в столбик на бумаге:
          </div>
          <BlockMath math={`4493^2 = 20187049`} />
          <div>
            В десятичной записи полученного полного квадрата <InlineMath math={`20187049`} /> на первых позициях действительно содержится непрерывная последовательность цифр «2018».
          </div>
          <div className="font-semibold text-amber-600">Ответ: да, существует. <InlineMath math={`20187049`} /></div>
        </div>
      </div>
    )
  },


      {
    id: 14,
    title: (
      <span>
        Задача 14 (Наибольший общий делитель) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Бельчонок», 2023, 8.1)</span>
      </span>
    ),
    textBefore: (
      <span>
        Сумма 14 натуральных чисел равна 2023. Найдите, какое максимальное значение может принимать наибольший общий делитель слагаемых, и приведите пример таких чисел.
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
            Пусть выписаны 14 натуральных чисел <InlineMath math={`a_1, \\ a_2, \\ \\dots, \\ a_{14}`} />. Обозначим их наибольший общий делитель как <InlineMath math={`g`} />.
          </div>
          <div>
            По определению НОД, каждое из этих чисел можно представить в виде <InlineMath math={`a_i = g \\cdot b_i`} />, где <InlineMath math={`b_i`} /> — натуральные числа (<InlineMath math={`b_i \\geq 1`} />). Запишем их сумму:
          </div>
          <BlockMath math={`g \\cdot b_1 + g \\cdot b_2 + \\dots + g \\cdot b_{14} = 2023`} />
          <BlockMath math={`g \\cdot (b_1 + b_2 + \\dots + b_{14}) = 2023`} />
          <div>
            Из полученного разложения следует, что искомый делитель <InlineMath math={`g`} /> обязан быть натуральным делителем числа 2023.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>1) Оценка:</b> Поскольку каждое число <InlineMath math={`b_i`} /> не меньше единицы, сумма четырнадцати таких натуральных слагаемых в скобках ограничена снизу:
          </div>
          <BlockMath math={`b_1 + b_2 + \\dots + b_{14} \\geq 14`} />
          <div>Выразим из разряда суммы значение делителя и ограничим его сверху:</div>
          <BlockMath math={`g = \\dfrac{2023}{b_1 + b_2 + \\dots + b_{14}} \\leq \\dfrac{2023}{14} = 144.5`} />
          <div>
            Разложим число 2023 на простые множители, чтобы найти все его делители:
          </div>
          <BlockMath math={`2023 = 7 \\cdot 17^2 = 7 \\cdot 289`} />
          <div>
            Полный список натуральных делителей числа 2023 имеет вид: 1, 7, 17, 119, 289, 2023. Наибольшим делителем, удовлетворяющим полученной оценке <InlineMath math={`g \\leq 144.5`} />, является число 119.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>2) Пример:</b> Докажем, что значение <InlineMath math={`g = 119`} /> полностью достижимо. При этом значении сумма коэффициентов в скобках должна быть равна:
          </div>
          <BlockMath math={`b_1 + b_2 + \\dots + b_{14} = \\dfrac{2023}{119} = 17`} />
          <div>
            Выберем тринадцать коэффициентов, равных 1, и один коэффициент, равный 4 (их сумма: <InlineMath math={`13 \\cdot 1 + 4 = 17`} />).
          </div>
          <div>
            Тогда искомый набор из 14 натуральных чисел имеет вид: тринадцать чисел 119 и одно число 476 (<InlineMath math={`119 \\cdot 4`} />).
          </div>
          <BlockMath math={`119 + 119 + \\dots + 119 + 476 = 119 \\cdot 13 + 476 = 1547 + 476 = 2023`} />
          <div>
            Наибольший общий делитель тринадцати чисел 119 и одного числа 476 равен в точности 119, так как <InlineMath math={`\\text{НОД}(119, 476) = 119`} />. Оценка и пример полностью согласованы.
          </div>
          <div className="font-semibold text-amber-600">Ответ: 119; пример чисел: тринадцать чисел 119 и одно число 476.</div>
        </div>
      </div>
    )
  },


    {
    id: 15,
    title: (
      <span>
        Задача 15 (Наименьшее общее кратное) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Ломоносов», 2007.6)</span>
      </span>
    ),
    textBefore: (
      <span>
        Натуральные числа <InlineMath math={`a, \\ b`} /> и <InlineMath math={`c`} /> таковы, что <InlineMath math={`\\text{НОК}(a, b) = 60`} /> и <InlineMath math={`\\text{НОК}(a, c) = 270`} />. Найдите <InlineMath math={`\\text{НОК}(b, c)`} />.
      </span>
    ),
    mathA: '',
    textAfter: '',
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <div className="font-bold text-slate-800 dark:text-slate-100">Решение.</div>
        
        <div className="space-y-2">
          <div>Разложим значения НОК на простые множители:</div>
          <BlockMath math={`\\text{НОК}(a, b) = 60 = 2^2 \\cdot 3^1 \\cdot 5^1`} />
          <BlockMath math={`\\text{НОК}(a, c) = 270 = 2^1 \\cdot 3^3 \\cdot 5^1`} />
          <div>Пусть <InlineMath math={`v_p(x)`} /> — показатель степени простого числа <InlineMath math={`p`} /> в разложении числа <InlineMath math={`x`} />.</div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div><b>Степень двойки:</b></div>
          <BlockMath math={`\\max(v_2(a), v_2(b)) = 2, \\quad \\max(v_2(a), v_2(c)) = 1 \\implies v_2(a) \\leq 1 \\implies v_2(b) = 2`} />
          <BlockMath math={`v_2(c) \\leq 1 \\implies \\max(v_2(b), v_2(c)) = 2`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div><b>Степень тройки:</b></div>
          <BlockMath math={`\\max(v_3(a), v_3(b)) = 1, \\quad \\max(v_3(a), v_3(c)) = 3 \\implies v_3(a) \\leq 1 \\implies v_3(c) = 3`} />
          <BlockMath math={`v_3(b) \\leq 1 \\implies \\max(v_3(b), v_3(c)) = 3`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div><b>Степень пятёрки:</b></div>
          <BlockMath math={`\\max(v_5(a), v_5(b)) = 1, \\quad \\max(v_5(a), v_5(c)) = 1`} />
          <div>Из условий однозначности ответа для независимых переменных следует:</div>
          <BlockMath math={`\\max(v_5(b), v_5(c)) = 1`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>Вычислим итоговое значение наименьшего общего кратного:</div>
          <BlockMath math={`\\text{НОК}(b, c) = 2^{\\max(v_2(b), v_2(c))} \\cdot 3^{\\max(v_3(b), v_3(c))} \\cdot 5^{\\max(v_5(b), v_5(c))}`} />
          <BlockMath math={`\\text{НОК}(b, c) = 2^2 \\cdot 3^3 \\cdot 5^1 = 4 \\cdot 27 \\cdot 5 = 540`} />
          <div className="font-semibold text-amber-600">Ответ: 540.</div>
        </div>
      </div>
    )
  },



    {
    id: 16,
    title: (
      <span>
        Задача 16 (Десятичная запись числа) <span className="text-sm font-normal text-slate-400 ml-1.5">(Всеросс., 2001, ОЭ, 8.6)</span>
      </span>
    ),
    textBefore: (
      <span>
        Натуральное число <InlineMath math={`n`} /> названо хорошим, если каждое из чисел <InlineMath math={`n, \\ n+1, \\ n+2`} /> и <InlineMath math={`n+3`} /> делится на сумму своих цифр. Обязательно ли предпоследней цифрой хорошего числа, оканчивающегося восьмёркой, будет девятка?
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
            <b>Да, обязательно.</b> Докажем это методом от противного. 
          </div>
          <div>
            Предположим, что нашлось хорошее число <InlineMath math={`n`} />, оканчивающееся на цифру 8, у которого предпоследняя цифра <InlineMath math={`d`} /> отлична от 9 (<InlineMath math={`d \\neq 9`} />). Запишем структуру трёх последовательных чисел ряда:
          </div>
          <BlockMath math={`n = \\overline{\\dots d8}, \\quad n + 1 = \\overline{\\dots d9}, \\quad n + 3 = \\overline{\\dots (d+1)1}`} />
          <div>
            Так как цифра <InlineMath math={`d`} /> не равна 9, то при переходе от числа <InlineMath math={`n+1`} /> к числу <InlineMath math={`n+3`} /> не происходит переноса через разряд сотен — цифра десятков просто увеличивается на единицу.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Очевидно, что оба числа <InlineMath math={`n + 1`} /> и <InlineMath math={`n + 3`} /> являются <b>нечётными числами</b>, поскольку оканчиваются на нечётные цифры 9 и 1.
          </div>
          <div>
            Пусть сумма всех остальных старших цифр числа (начиная с сотен) равна <InlineMath math={`S`} />. Распишем суммы цифр для этих двух нечётных чисел:
          </div>
          <BlockMath math={`S(n + 1) = S + d + 9`} />
          <BlockMath math={`S(n + 3) = S + (d + 1) + 1 = S + d + 2`} />
          <div>Найдем разность между полученными суммами цифр:</div>
          <BlockMath math={`S(n + 1) - S(n + 3) = (S + d + 9) - (S + d + 2) = 7`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Поскольку разность двух целых чисел равна нечётному числу 7, эти суммы цифр имеют разную чётность. Это означает, что <b>одна из этих сумм обязательно является чётным числом</b>.
          </div>
          <div>
            Однако чётное число чисто физически не может быть делителем нечётного числа (<InlineMath math={`n+1`} /> или <InlineMath math={`n+3`} />). Мы пришли к строгому математическому противоречию с определением хорошего числа.
          </div>
          <div>
            Следовательно, наше предположение неверно, и предпоследняя цифра обязана быть девяткой.
          </div>
          <div className="font-semibold text-amber-600">Ответ: да, обязательно.</div>
        </div>
      </div>
    )
  },


    {
    id: 17,
    title: (
      <span>
        Задача 17 (Чётность) <span className="text-sm font-normal text-slate-400 ml-1.5">(ММО, 2018, 8.2)</span>
      </span>
    ),
    textBefore: (
      <span>
        В строку выписано 39 чисел, не равных нулю. Сумма любых двух соседних чисел положительна, а сумма всех чисел отрицательна. Каким может быть знак произведения всех чисел?
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
            Пусть выписана последовательность чисел <InlineMath math={`a_1, \\ a_2, \\ a_3, \\ \\dots, \\ a_{39}`} />. 
            Разобьем последние 38 чисел нашей строки на 19 пар стоящих рядом элементов:
          </div>
          <BlockMath math={`(a_2 + a_3) + (a_4 + a_5) + \\dots + (a_{38} + a_{39})`} />
          <div>
            По условию, сумма элементов внутри любой соседней пары строго положительна. Следовательно, сумма всех этих 19 пар также положительна.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Запишем общую сумму всех 39 чисел ряда, выделив это разбиение на пары и первый изолированный элемент <InlineMath math={`a_1`} />:
          </div>
          <BlockMath math={`S_{\\text{всего}} = a_1 + (a_2 + a_3) + (a_4 + a_5) + \\dots + (a_{38} + a_{39}) < 0`} />
          <div>
            Поскольку общая сумма отрицательна, а сумма всех скобок положительна, получаем строгий знак для первого элемента:
          </div>
          <BlockMath math={`a_1 < 0`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Сгруппируем теперь в пары первые 38 элементов строки, оставив изолированным последний элемент <InlineMath math={`a_{39}`} />:
          </div>
          <BlockMath math={`S_{\\text{всего}} = (a_1 + a_2) + (a_3 + a_4) + \\dots + (a_{37} + a_{38}) + a_{39} < 0`} />
          <div>
            В силу положительности каждой скобки, этот инвариант даёт знак для последнего элемента строки:
          </div>
          <BlockMath math={`a_{39} < 0`} />
          <div>
            Повторяя данное рассуждение со сдвигом пар, получаем, что все элементы на нечётных позициях обязаны быть отрицательными:
          </div>
          <BlockMath math={`a_1 < 0, \\ \\ a_3 < 0, \\ \\ a_5 < 0, \\ \\ \\dots, \\ \\ a_{39} < 0`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            В строке из 39 чисел содержится ровно 20 нечётных позиций и 19 чётных позиций. Все 20 чисел на нечётных местах — отрицательные.
          </div>
          <div>
            Чтобы сумма любых двух соседей оставалась положительной (например, <InlineMath math={`a_1 + a_2 > 0`} />), каждое число на чётной позиции должно быть строго положительным. Таким образом, в строке находится ровно 20 отрицательных чисел и 19 положительных чисел.
          </div>
          <div>
            Определим знак общего произведения. Поскольку количество отрицательных сомножителей чётно (20), их знаки минус при перемножении дают плюс:
          </div>
          <BlockMath math={`(-1)^{20} \\cdot (+1)^{19} = +1`} />
          <div>
            Знак произведения всех чисел ряда всегда будет положительным.
          </div>
          <div className="font-semibold text-amber-600">Ответ: положительный (знак плюс).</div>
        </div>
      </div>
    )
  },



  {
    id: 18,
    title: (
      <span>
        Задача 18 <span className="text-sm font-normal text-slate-400 ml-1.5">(Всеросс., округ, 2005, 8–9)</span>
      </span>
    ),
    textBefore: (
      <span>
        Известно, что сумма цифр натурального числа <InlineMath math={`N`} /> равна 100, а сумма цифр числа <InlineMath math={`5N`} /> равна 50. Докажите, что <InlineMath math={`N`} /> чётно.
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
            Рассмотрим число <InlineMath math={`10N = 5N + 5N`} />. При умножении на 10 к десятичной записи числа просто приписывается ноль на конце, поэтому сумма цифр не меняется:
          </div>
          <BlockMath math={`S(10N) = S(N) = 100`} />
          <div>
            Вспомним инвариант сложения: каждая перенесённая единица в старший разряд уменьшает итоговую сумму цифр на <InlineMath math={`10 - 1 = 9`} />. 
            Связь сумм цифр при сложении двух одинаковых чисел <InlineMath math={`5N`} /> имеет вид:
          </div>
          <BlockMath math={`S(10N) = S(5N) + S(5N) - 9k`} />
          <div>Где <InlineMath math={`k`} /> — количество переносов через разряд. Подставим числовые значения из условия:</div>
          <BlockMath math={`100 = 50 + 50 - 9k \\iff 100 = 100 - 9k \\implies 9k = 0 \\implies k = 0`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Поскольку количество переносов строго равно 0, при сложении <InlineMath math={`5N + 5N`} /> в столбик <b>не произошло ни одного переноса единицы через разряд</b>.
          </div>
          <div>
            Это означает, что сумма цифр в каждом разряде не превысила 9. В частности, для самого младшего разряда это означает, что удвоенная последняя цифра числа <InlineMath math={`5N`} /> строго меньше 10.
          </div>
          <div>
            Последняя цифра любого числа при умножении на 5 зависит исключительно от чётности исходного числа: нечётные числа дают на конце цифру 5, а чётные — цифру 0.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Если бы число <InlineMath math={`N`} /> было нечётным, число <InlineMath math={`5N`} /> оканчивалось бы на 5. Тогда в младшем разряде при сложении мы получили бы <InlineMath math={`5 + 5 = 10`} />, что создало бы перенос в следующий разряд, нарушая условие <InlineMath math={`k = 0`} />.
          </div>
          <div>
            Следовательно, число <InlineMath math={`5N`} /> обязано оканчиваться на цифру 0, что напрямую доказывает, что исходное натуральное число <InlineMath math={`N`} /> является <b>чётным</b>. Что и требовалось доказать.
          </div>
          <div className="font-semibold text-amber-600">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


    {
    id: 19,
    title: (
      <span>
        Задача 19 (Алгоритм Евклида) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Высшая проба», 2020, 7.3, 8.2)</span>
      </span>
    ),
    textBefore: (
      <span>
        Имеется дробь <InlineMath math={`\\dfrac{1}{n}`} />. Семиклассник Семёнов каждую минуту прибавляет к её числителю и знаменателю по 1 и смотрит, можно ли сократить полученную дробь. Семёнов утверждает, что первый раз сократимая дробь получилась после 1000 шагов. Стоит ли ему верить?
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
            <b>Нет, Семёнову верить не стоит.</b> Через 1000 шагов числитель дроби станет равен <InlineMath math={`1 + 1000 = 1001`} />, а знаменатель станет равен <InlineMath math={`n + 1000`} />.
          </div>
          <div>
            По алгоритму Евклида, если полученная дробь сократима на некоторое целое число <InlineMath math={`p`} />, то на это же число <InlineMath math={`p`} /> обязана делиться и разность её знаменателя и числителя:
          </div>
          <BlockMath math={`(n + 1000) - (1 + 1000) = n - 1`} />
          <div>
            Разность <InlineMath math={`n - 1`} /> неизменна на каждом шаге. Чтобы дробь сократилась <b>впервые</b> именно на 1000-м шаге, её числитель 1001 должен делиться на общий делитель <InlineMath math={`p`} />, а все предыдущие числители (от 1 до 1000) на него делиться не должны.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Это означает, что у числа 1001 не должно быть ни одного простого делителя, который меньше или равен 1000. Разложим 1001 на простые множители:
          </div>
          <BlockMath math={`1001 = 7 \\cdot 11 \\cdot 13`} />
          <div>
            Все простые делители числа 1001 (<InlineMath math={`7, 11, 13`} />) строго меньше 1000. 
          </div>
          <div>
            Если бы разность <InlineMath math={`n - 1`} /> делилась, например, на 7, то дробь сократилась бы гораздо раньше — уже на 6-м шаге, когда числитель стал бы равен 7. Если на 11 — то на 10-м шаге, если на 13 — то на 12-м шаге. 
          </div>
          <div className="font-semibold text-amber-600">Ответ: нет, верить не стоит.</div>
        </div>
      </div>
    )
  },


    {
    id: 20,
    title: (
      <span>
        Задача 20 (Признаки делимости) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Ломоносов», 2011, 11)</span>
      </span>
    ),
    textBefore: (
      <span>
        Найдите все двузначные числа вида <InlineMath math={`\\overline{xy}`} />, если число, имеющее шестизначную десятичную запись <InlineMath math={`\\overline{64x72y}`} />, кратно 72.
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
            Разложим делитель на простые взаимно простые множители: <InlineMath math={`72 = 8 \\cdot 9`} />. 
            Число делится на 72 тогда и только тогда, когда оно одновременно делится на 8 и на 9.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>1) Признак делимости на 8:</b> Число делится на 8, если три его последние цифры образуют число, делящееся на 8. Рассмотрим трёхзначное число:
          </div>
          <BlockMath math={`\\overline{72y} = 720 + y`} />
          <div>
            Так как 720 нацело делится на 8 (<InlineMath math={`720 = 8 \\cdot 90`} />), то и последняя цифра обязана делиться на 8. Среди цифр этому условию удовлетворяют только два значения:
          </div>
          <BlockMath math={`y = 0 \\quad \\text{или} \\quad y = 8`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>2) Признак делимости на 9:</b> Число делится на 9, если сумма его цифр делится на 9. 
            Запишем сумму цифр исходного числа:
          </div>
          <BlockMath math={`6 + 4 + x + 7 + 2 + y = 19 + x + y`} />
          <p>Рассмотрим оба возможных случая значения переменной <InlineMath math={`y`} />:</p>
          
          <ul className="list-bullet pl-5 space-y-2 text-sm">
            <li>
              Если <InlineMath math={`y = 0`} />, сумма цифр равна <InlineMath math={`19 + x`} />. Ближайшее число, делящееся на 9, это 27:
              <BlockMath math={`19 + x = 27 \\implies x = 8`} />
              Получаем первое двузначное число: <InlineMath math={`\\overline{xy} = 80`} />.
            </li>
            <li>
              Если <InlineMath math={`y = 8`} />, сумма цифр равна <InlineMath math={`19 + x + 8 = 27 + x`} />. 
              Чтобы выражение делилось на 9, цифра <InlineMath math={`x`} /> может принимать значения:
              <BlockMath math={`x = 0 \\quad \\text{или} \\quad x = 9`} />
              Получаем ещё два двузначных числа: <InlineMath math={`\\overline{xy} = 08 = 8`} /> (не является двузначным по правилам десятичной записи) и <InlineMath math={`\\overline{xy} = 98`} />.
            </li>
          </ul>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Исключая число 08, так как двузначное число не может начинаться с нуля, получаем ровно два подходящих значения для <InlineMath math={`\\overline{xy}`} />.
          </div>
          <div className="font-semibold text-amber-600">Ответ: 80, 98.</div>
        </div>
      </div>
    )
  },


  {
    id: 21,
    title: (
      <span>
        Задача 21 (Простые числа) <span className="text-sm font-normal text-slate-400 ml-1.5">(Всеросс., 1997, ОЭ, 8.7)</span>
      </span>
    ),
    textBefore: (
      <span>
        Найдите все такие пары простых чисел <InlineMath math={`p`} /> и <InlineMath math={`q`} />, что <InlineMath math={`p^3 - q^5 = (p + q)^2`} />.
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
            Преобразуем исходное уравнение к эквивалентному виду:
          </div>
          <BlockMath math={`p^3 - q^5 = p^2 + 2pq + q^2 \\iff p(p^2 - p - 2q) = q^2(q^3 + 1)`} />
          <div>
            <b>1. Разбор случая равенства оснований:</b> Пусть <InlineMath math={`p = q`} />. Подставим это условие в преобразованное выражение:
          </div>
          <BlockMath math={`p(p^2 - p - 2p) = p^2(p^3 + 1) \\iff p^3 - 3p^2 = p^4 + p^2`} />
          <BlockMath math={`p^3(1 - p) = 4p^2 \\iff p(1 - p) = 4`} />
          <div>
            Поскольку для любого простого числа <InlineMath math={`p \\geq 2`} /> левая часть полученного уравнения <InlineMath math={`p(1-p)`} /> всегда строго отрицательна, оно не имеет натуральных корней. Следовательно, <InlineMath math={`p \\neq q`} />.
          </div>
          <div>
            Так как простые числа <InlineMath math={`p`} /> и <InlineMath math={`q`} /> различны, они взаимно просты. Из структуры разложения следует, что на <InlineMath math={`q^2`} /> обязан нацело делиться второй сомножитель левой части:
          </div>
          <BlockMath math={`(p^2 - p - 2q) \\ \\vdots \\ q^2`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>2. Разбор случая <InlineMath math={`q = 2`} />:</b> Подставим значение <InlineMath math={`q = 2`} /> напрямую в исходное уравнение задачи:
          </div>
          <BlockMath math={`p^3 - 32 = (p + 2)^2 \\iff p^3 - p^2 - 4p - 36 = 0`} />
          <div>
            Оценим знак полученной кубической функции <InlineMath math={`f(p) = p^3 - p^2 - 4p - 36`} />:
          </div>
          <ul className="list-bullet pl-5 space-y-1 text-sm">
            <li>При <InlineMath math={`p \\leq 4`} />: максимальное значение <InlineMath math={`f(4) = 64 - 16 - 16 - 36 = -4 < 0`} />.</li>
            <li>При <InlineMath math={`p \\geq 5`} />: минимальное значение <InlineMath math={`f(5) = 125 - 25 - 20 - 36 = 44 > 0`} />.</li>
          </ul>
          <div className="pt-1">
            В силу строгой монотонности функции при <InlineMath math={`p \\geq 2`} />, целых корней уравнение не имеет. Следовательно, при <InlineMath math={`q = 2`} /> решений нет.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>3. Разбор случая <InlineMath math={`q = 3`} />:</b> Подставим значение <InlineMath math={`q = 3`} /> напрямую в исходное уравнение задачи:
          </div>
          <BlockMath math={`p^3 - 243 = (p + 3)^2 \\iff p^3 - p^2 - 6p - 252 = 0`} />
          <div>
            Оценим знак полученной кубической функции <InlineMath math={`f(p) = p^3 - p^2 - 6p - 252`} /> при <InlineMath math={`p > q`} />:
          </div>
          <ul className="list-bullet pl-5 space-y-1 text-sm">
            <li>При <InlineMath math={`p = 5`} />: получаем значение <InlineMath math={`f(5) = 125 - 25 - 30 - 252 = -182 < 0`} />.</li>
            <li>При <InlineMath math={`p = 7`} />: получаем значение <InlineMath math={`f(7) = 343 - 49 - 42 - 252 = 0`} />. Пара <InlineMath math={`(7, 3)`} /> — точный корень.</li>
            <li>При <InlineMath math={`p \\geq 11`} />: в силу строгой монотонности и возрастания функции <InlineMath math={`f(p)`} /> при <InlineMath math={`p \\geq 5`} />, все последующие значения строго больше нуля (<InlineMath math={`f(11) = 892 > 0`} />).</li>
          </ul>
          <div className="pt-1">
            Следовательно, на промежутке натуральных чисел существует единственный корень. Пара <InlineMath math={`(7, 3)`} /> — единственное решение в данном случае.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>4. Доказательство отсутствия решений при <InlineMath math={`q > 3`} />:</b> Все простые числа, большие 3, являются нечётными. Для них выполняется строгое ограничение <InlineMath math={`p \\geq q + 2`} />. Оценим исследуемое выражение снизу:
          </div>
          <BlockMath math={`p^2 - p - 2q \\geq (q + 2)^2 - (q + 2) - 2q = q^2 + q + 2 > q^2`} />
          <div>
            Поскольку выражение строго больше <InlineMath math={`q^2`} /> и нацело делится на <InlineMath math={`q^2`} />, оно обязано быть не меньше следующего кратного значения <InlineMath math={`2q^2`} />:
          </div>
          <BlockMath math={`p^2 - p - 2q \\geq 2q^2 \\implies p^2 > 2q^2 \\implies p > q \\sqrt{2}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Из преобразованного уравнения следует, что простой сомножитель <InlineMath math={`p`} /> делит правую часть <InlineMath math={`q^2(q^3 + 1)`} />. В силу простоты чисел, возможны два случая делимости:
          </div>
          <ul className="list-bullet pl-5 space-y-2 text-sm">
            <li>
              Если <InlineMath math={`p \\mid q^2`} />, то из простоты <InlineMath math={`p`} /> и <InlineMath math={`q`} /> следует равенство <InlineMath math={`p = q`} />, которое было полностью опровергнуто в пункте 1.
            </li>
            <li>
              Если <InlineMath math={`p \\nmid q^2`} />, то в силу взаимной простоты <InlineMath math={`p`} /> обязан нацело делить второй множитель <InlineMath math={`q^3 + 1 = (q+1)(q^2-q+1)`} />.
            </li>
          </ul>
          <div className="pt-2">
            Поскольку <InlineMath math={`p \\geq q + 2`} />, число <InlineMath math={`p`} /> не может делить выражение <InlineMath math={`(q + 1)`} />. Следовательно, оно обязано быть делителем второй скобки, откуда получаем строгое ограничение сверху:
          </div>
          <BlockMath math={`(q^2 - q + 1) \\ \\vdots \\ p \\implies p \\leq q^2 - q + 1`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Подставим полученную верхнюю границу для <InlineMath math={`p`} /> в доказанное ранее функциональное неравенство <InlineMath math={`p^2 - p - 2q \\geq 2q^2`} />:
          </div>
          <BlockMath math={`(q^2 - q + 1)^2 - (q^2 - q + 1) - 2q \\geq 2q^2`} />
          <div>
            Раскроем скобки в левой части равенства и приведём подобные слагаемые:
          </div>
          <BlockMath math={`q^4 - 2q^3 + 3q^2 - 2q + 1 - q^2 + q - 1 - 2q \\geq 2q^2`} />
          <BlockMath math={`q^4 - 2q^3 - 3q \\geq 0 \\iff q(q^3 - 2q^2 - 3) \\geq 0`} />
          <div>
            Для любого простого числа <InlineMath math={`q > 3`} /> (то есть начиная с <InlineMath math={`q = 5`} />) оценим знак выражения в скобках:
          </div>
          <BlockMath math={`q^3 - 2q^2 - 3 \\geq 5^3 - 2 \\cdot 5^2 - 3 = 72 > 0`} />
          <div>
            Мы доказали, что при <InlineMath math={`q > 3`} /> левая часть неравенства строго больше правой. Следовательно, верхняя граница <InlineMath math={`p \\leq q^2 - q + 1`} /> несовместима с условием кратности <InlineMath math={`p^2 - p - 2q \\geq 2q^2`} />, что полностью исключает существование других решений.
          </div>
          <div className="font-semibold text-amber-600">Ответ: p = 7, q = 3.</div>

        </div>

      </div>
    )
  },


    {
    id: 22,
    title: (
      <span>
        Задача 22 (ОТА) <span className="text-sm font-normal text-slate-400 ml-1.5">(Матпраздник в Матвертикали, 2021, 7.2)</span>
      </span>
    ),
    textBefore: (
      <span>
        Фокусник задумал два натуральных числа и сообщил Симе их сумму, а Прову — их произведение. Зная, что произведение равно 2280, Пров смог отгадать задуманные числа только после того, как Сима сообщила, что сумма у неё нечётна и двузначна. Так какие числа задумал фокусник?
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
            Пусть задуманы числа <InlineMath math={`a`} /> и <InlineMath math={`b`} />. Разложим их произведение на простые множители по основной теореме арифметики:
          </div>
          <BlockMath math={`a \\cdot b = 2280 = 2^3 \\cdot 3 \\cdot 5 \\cdot 19`} />
          <div>
            Поскольку сумма чисел <InlineMath math={`a + b`} /> нечётна, одно из них чётное, а второе — нечётное.
          </div>
          <div>
            Все три двойки из разложения (<InlineMath math={`2^3 = 8`} />) обязаны находиться внутри чётного сомножителя, поэтому нечётное число состоит исключительно из произведений сомножителей 3, 5 и 19.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Выпишем все возможные варианты нечётного сомножителя <InlineMath math={`a`} />, парного ему чётного <InlineMath math={`b = 2280 / a`} /> и их сумму <InlineMath math={`S`} />:
          </div>
          <ul className="list-bullet pl-5 space-y-1 text-sm">
            <li>Если <InlineMath math={`a = 1 \\implies b = 2280 \\implies S = 2281`} /></li>
            <li>Если <InlineMath math={`a = 3 \\implies b = 760 \\implies S = 763`} /></li>
            <li>Если <InlineMath math={`a = 5 \\implies b = 456 \\implies S = 461`} /></li>
            <li>Если <InlineMath math={`a = 15 \\implies b = 152 \\implies S = 167`} /></li>
            <li>Если <InlineMath math={`a = 19 \\implies b = 120 \\implies S = 139`} /></li>
            <li>Если <InlineMath math={`a = 57 \\implies b = 40 \\implies S = 97`} /> (сумма нечётна и двузначна)</li>
            <li>Если <InlineMath math={`a = 95 \\implies b = 24 \\implies S = 119`} /></li>
            <li>Если <InlineMath math={`a = 285 \\implies b = 8 \\implies S = 293`} /></li>
          </ul>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Среди всех делителей числа 2280 существует единственная пара чисел, сумма которых является одновременно нечётной и двузначной: это 40 и 57 (сумма 97). 
          </div>
          <div>
            На основе этого Пров однозначно определил задуманные числа.
          </div>
          <div className="font-semibold text-amber-600">Ответ: 40 и 57.</div>
        </div>
      </div>
    )
  },


    {
    id: 23,
    title: (
      <span>
        Задача 23 <span className="text-sm font-normal text-slate-400 ml-1.5">(Турнир Ломоносова, 1983)</span>
      </span>
    ),
    textBefore: (
      <span>
        Сколько двоек будет в разложении на простые множители числа 1984!?
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
            Показатель степени, с которым простое число 2 входит в разложение факториала <InlineMath math={`1984!`} />, находится по <b>формуле Лежандра</b> через поразрядный подсчет количества делителей каждой степени двойки в заданном диапазоне:
          </div>
          <BlockMath math={`E_2(1984!) = \\left\\lfloor\\dfrac{1984}{2}\\right\\rfloor + \\left\\lfloor\\dfrac{1984}{4}\\right\\rfloor + \\left\\lfloor\\dfrac{1984}{8}\\right\\rfloor + \\dots + \\left\\lfloor\\dfrac{1984}{1024}\\right\\rfloor`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>Вычислим поочередно количество целых делителей для каждой степени двойки:</div>
          <ul className="list-bullet pl-5 space-y-1 text-sm">
            <li>Числа, кратные <InlineMath math={`2^1 = 2`} />: <InlineMath math={`1984 / 2 = 992`} /></li>
            <li>Числа, кратные <InlineMath math={`2^2 = 4`} />: <InlineMath math={`1984 / 4 = 496`} /></li>
            <li>Числа, кратные <InlineMath math={`2^3 = 8`} />: <InlineMath math={`1984 / 8 = 248`} /></li>
            <li>Числа, кратные <InlineMath math={`2^4 = 16`} />: <InlineMath math={`1984 / 16 = 124`} /></li>
            <li>Числа, кратные <InlineMath math={`2^5 = 32`} />: <InlineMath math={`1984 / 32 = 62`} /></li>
            <li>Числа, кратные <InlineMath math={`2^6 = 64`} />: <InlineMath math={`1984 / 64 = 31`} /></li>
            <li>Числа, кратные <InlineMath math={`2^7 = 128`} />: <InlineMath math={`\\lfloor 1984 / 128 \\rfloor = 15`} /></li>
            <li>Числа, кратные <InlineMath math={`2^8 = 256`} />: <InlineMath math={`\\lfloor 1984 / 256 \\rfloor = 7`} /></li>
            <li>Числа, кратные <InlineMath math={`2^9 = 512`} />: <InlineMath math={`\\lfloor 1984 / 512 \\rfloor = 3`} /></li>
            <li>Числа, кратные <InlineMath math={`2^{10} = 1024`} />: <InlineMath math={`\\lfloor 1984 / 1024 \\rfloor = 1`} /></li>
          </ul>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>Просуммируем полученные результаты для нахождения общего количества множителей:</div>
          <BlockMath math={`992 + 496 + 248 + 124 + 62 + 31 + 15 + 7 + 3 + 1 = 1979`} />
          <div className="font-semibold text-amber-600">Ответ: 1979 двоек.</div>
        </div>
      </div>
    )
  },


  {
    id: 24,
    title: (
      <span>
        Задача 24 (Постулат Бертрана) <span className="text-sm font-normal text-slate-400 ml-1.5">(Турнир городов, 1992, 10–11.1)</span>
      </span>
    ),
    textBefore: (
      <span>
        Докажите, что произведение всех целых чисел от <InlineMath math={`2^{1917} + 1`} /> до <InlineMath math={`2^{1991} - 1`} /> включительно не есть квадрат целого числа.
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
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Постулат Бертрана</span>
          <span>
            Между любым целым числом <InlineMath math={`x > 1`} /> и его удвоением <InlineMath math={`2x`} /> всегда гарантированно найдётся хотя бы одно простое число.
          </span>
          <span className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs mt-1.5 block">
            💡 На олимпиадах помогает доказать, что в ряду чисел есть «одинокое» простое число в первой степени, которое мешает извлечь полный корень.
          </span>
        </div>

        <div className="space-y-2 pt-1">
          <div>
            Обозначим заданное произведение чисел как <InlineMath math={`P`} />. По условию, сомножителями являются все последовательные целые числа из интервала:
          </div>
          <BlockMath math={`(2^{1917}; \\ 2^{1991})`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Выберем в качестве границы значение <InlineMath math={`x = 2^{1990}`} />. Поскольку <InlineMath math={`2^{1990} > 2^{1917}`} />, данный интервал полностью лежит внутри нашего произведения. 
          </div>
          <div>
            Тогда между <InlineMath math={`2^{1990}`} /> и <InlineMath math={`2 \\cdot 2^{1990} = 2^{1991}`} /> гарантированно существует простое число <InlineMath math={`p`} />:
          </div>
          <BlockMath math={`2^{1990} < p < 2^{1991}`} />
          <div>
            Данное простое число <InlineMath math={`p`} /> является одним из сомножителей произведения <InlineMath math={`P`} />.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Оценим величину следующего числа, кратного <InlineMath math={`p`} />. Наименьшим кратным является число <InlineMath math={`2p`} />:
          </div>
          <BlockMath math={`2p > 2 \\cdot 2^{1990} = 2^{1991}`} />
          <div>
            Следовательно, число <InlineMath math={`2p`} /> строго превосходит верхнюю границу нашего промежутка и не входит в произведение <InlineMath math={`P`} />.
          </div>
          <div>
            Таким образом, простое число <InlineMath math={`p`} /> входит в разложение произведения <InlineMath math={`P`} /> на простые множители ровно в первой степени.
          </div>
          <div>
            По основной теореме арифметики, для того чтобы число являлось полным квадратом, все простые множители в его разложении обязаны иметь чётные степени. Наличие множителя <InlineMath math={`p^1`} /> полностью исключает эту возможность. Что и требовалось доказать.
          </div>
          <div className="font-semibold text-amber-600">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


  {
    id: 25,
    title: (
      <span>
        Задача 25 (Уравнение Пелля) <span className="text-sm font-normal text-slate-400 ml-1.5">(Турнир городов, 1984, 7–8.5)</span>
      </span>
    ),
    textBefore: (
      <span>
        Докажите, что существует бесконечное число пар таких соседних натуральных чисел, что разложение каждого из них содержит любой простой сомножитель не менее чем во второй степени. Примеры таких пар чисел: (8, 9); (288, 289).
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
          <span className="font-bold text-sky-800 dark:text-sky-400 block mb-1">📘 Уравнение Пелля</span>
          <div>
            Диофантово уравнение вида <InlineMath math={`x^2 - d \\cdot y^2 = 1`} />, где <InlineMath math={`d`} /> — целое число (не полный квадрат).
          </div>
          <div className="mt-1.5 pt-1.5 border-t border-sky-100/50 dark:border-sky-950/40">
            <b>Что оно даёт на олимпиадах:</b> Если найти хотя бы одно базовое натуральное решение <InlineMath math={`(x_1, y_1)`} />, то из него по цепочке можно автоматически получить <b>бесконечно много</b> новых решений.
          </div>
          <span className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs mt-1.5 block">
            ⚙️ Каждая следующая пара чисел вычисляется простым линейным пересчётом на основе предыдущей. Например, для <InlineMath math={`z^2 - 2y^2 = 1`} /> новые решения создаются по правилу: <InlineMath math={`z_{\\text{новое}} = 3z + 4y`} /> и <InlineMath math={`y_{\\text{новое}} = 2z + 3y`} />.
          </span>
        </div>

        <div className="space-y-2 pt-1">
          <div>
            Заметим структуру примеров из условия задачи: <InlineMath math={`8 = 2^3, \\ 9 = 3^2`} />, а также <InlineMath math={`288 = 2 \\cdot 12^2, \\ 289 = 17^2`} />. 
            Будем искать пары соседних чисел в аналогичном общем виде:
          </div>
          <BlockMath math={`x = 2y^2, \\quad x + 1 = z^2`} />
          <div>
            В таком случае разложение числа <InlineMath math={`x`} /> содержит двойку в нечётной степени (минимум в кубе), а все остальные простые делители <InlineMath math={`y`} /> входят минимум во второй степени. Число <InlineMath math={`x+1`} /> является полным квадратом <InlineMath math={`z^2`} />, поэтому все его простые делители гарантированно имеют чётные степени (не меньше 2).
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Приравняем выражения через единицу и составим классическое уравнение Пелля:
          </div>
          <BlockMath math={`z^2 - 2y^2 = 1`} />
          <div>
            Данное уравнение имеет очевидное наименьшее натуральное решение:
          </div>
          <BlockMath math={`z_1 = 3, \\quad y_1 = 2 \\implies 3^2 - 2 \\cdot 2^2 = 9 - 8 = 1`} />
          <div>Это решение в точности соответствует первой паре чисел <InlineMath math={`(8, 9)`} /> из условия.</div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Применим формулу пересчёта для уравнения Пелля (<InlineMath math={`z_2 = 3z_1 + 4y_1`} /> и <InlineMath math={`y_2 = 2z_1 + 3y_1`} />), чтобы найти вторую пару:
          </div>
          <BlockMath math={`z_2 = 3 \\cdot 3 + 4 \\cdot 2 = 17`} />
          <BlockMath math={`y_2 = 2 \\cdot 3 + 3 \\cdot 2 = 12`} />
          <div>
            Это даёт нам пару чисел <InlineMath math={`x = 2 \\cdot 12^2 = 288`} /> и <InlineMath math={`x + 1 = 17^2 = 289`} />, что идеально совпадает со вторым примером из условия.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Поскольку этот процесс линейного пересчёта можно продолжать бесконечно, последовательность генерируемых пар чисел <InlineMath math={`(2y_n^2, \\ z_n^2)`} /> никогда не прервётся. 
          </div>
          <div>
            Так как в каждой такой паре абсолютно все простые сомножители по построению входят минимум во второй степени, существование бесконечного числа таких пар полностью доказано.
          </div>
          <div className="font-semibold text-amber-600">Ответ: доказано.</div>
        </div>
      </div>
    )
  },


    {
    id: 26,
    title: (
      <span>
        Задача 26 (Остатки и степени) <span className="text-sm font-normal text-slate-400 ml-1.5">(МФТИ, 2002)</span>
      </span>
    ),
    textBefore: (
      <span>
        Дано число <InlineMath math={`a = 3^{2002} + 7^{2002}`} />. Найти последнюю цифру числа <InlineMath math={`a`} /> и остаток от деления числа <InlineMath math={`a`} /> на 11.
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
            <b>1) Поиск последней цифры (остаток по модулю 10):</b>
          </div>
          <div>
            Последние цифры степеней тройки и семёрки циклически повторяются с периодом 4. Разделим показатель степени 2002 на длину периода:
          </div>
          <BlockMath math={`2002 = 4 \\cdot 500 + 2`} />
          <div>Следовательно, остатки степеней совпадают с остатками вторых степеней этих чисел:</div>
          <BlockMath math={`3^{2002} \\equiv 3^2 = 9 \\pmod{10}`} />
          <BlockMath math={`7^{2002} \\equiv 7^2 = 49 \\equiv 9 \\pmod{10}`} />
          <div>Сложим полученные остатки:</div>
          <BlockMath math={`a = 3^{2002} + 7^{2002} \\equiv 9 + 9 = 18 \\equiv 8 \\pmod{10}`} />
          <div>Последняя цифра числа равна 8.</div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            <b>2) Поиск остатка от деления на 11 (по модулю 11):</b>
          </div>
          <div>
            Применим малую теорему Ферма, согласно которой для простого числа 11 и любого взаимно простого с ним основания выполняется <InlineMath math={`x^{10} \\equiv 1 \\pmod{11}`} />. 
          </div>
          <div>Разложим показатель степени 2002 через период 10:</div>
          <BlockMath math={`2002 = 10 \\cdot 200 + 2`} />
          <div>Вычислим остатки для каждого слагаемого:</div>
          <BlockMath math={`3^{2002} = (3^{10})^{200} \\cdot 3^2 \\equiv 1^{200} \\cdot 9 = 9 \\pmod{11}`} />
          <BlockMath math={`7^{2002} = (7^{10})^{200} \\cdot 7^2 \\equiv 1^{200} \\cdot 49 \\equiv 5 \\pmod{11}`} />
          <div>Сложим полученные остатки по модулю 11:</div>
          <BlockMath math={`a \\equiv 9 + 5 = 14 \\equiv 3 \\pmod{11}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div className="font-semibold text-amber-600">Ответ: последняя цифра — 8, остаток от деления на 11 — 3.</div>
        </div>
      </div>
    )
  },


  {
    id: 27,
    title: (
      <span>
        Задача 27 (Делители и произведения) <span className="text-sm font-normal text-slate-400 ml-1.5">(Турнир городов, 2015, 8–9.3)</span>
      </span>
    ),
    textBefore: (
      <span>
        Можно ли все натуральные делители числа 100! (включая 1 и само число) разбить на две группы так, чтобы в обеих группах было одинаковое количество чисел и произведение чисел первой группы равнялось произведению чисел второй группы?
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
            <b>Да, можно.</b> Пусть <InlineMath math={`N = 100!`} />. Все его натуральные делители разбиваются на непересекающиеся пары вида <InlineMath math={`(d, \\ N/d)`} />, произведение элементов в каждой из которых равно <InlineMath math={`N`} /> (число <InlineMath math={`N`} /> не является квадратом).
          </div>
          <div>
            Пусть общее количество делителей равно <InlineMath math={`2m`} />, тогда количество пар равно <InlineMath math={`m`} />. Запишем каноническое разложение числа <InlineMath math={`N`} />:
          </div>
          <BlockMath math={`N = p_1^{\\alpha_1} \\cdot p_2^{\\alpha_2} \\dots p_s^{\\alpha_s}`} />
          <div>Формула для общего количества делителей имеет вид:</div>
          <BlockMath math={`2m = (\\alpha_1 + 1)(\\alpha_2 + 1)\\dots(\\alpha_s + 1)`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            По формуле Лежандра найдём показатели степеней для простых делителей 97 и 89 в разложении <InlineMath math={`100!`} />:
          </div>
          <BlockMath math={`\\alpha_{97} = \\lfloor 100/97 \\rfloor = 1, \\quad \\alpha_{89} = \\lfloor 100/89 \\rfloor = 1`} />
          <div>Подставим эти значения в формулу количества делителей:</div>
          <BlockMath math={`2m = (1 + 1)(1 + 1) \\cdot K = 4K \\implies m = 2K`} />
          <div>
            Поскольку <InlineMath math={`m = 2K`} />, число пар <InlineMath math={`m`} /> гарантированно является <b>чётным</b>.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Разделим <InlineMath math={`m`} /> пар делителей поровну между двумя группами: в каждую группу отправим ровно по <InlineMath math={`m/2 = K`} /> целых пар.
          </div>
          <div>
            Тогда в обеих группах будет одинаковое количество чисел (<InlineMath math={`2K`} /> элементов), а произведение чисел в каждой группе будет тождественно равно <InlineMath math={`N^K`} />. Условия задачи полностью выполнены.
          </div>
          <div className="font-semibold text-amber-600">Ответ: да, можно.</div>
        </div>
      </div>
    )
  },


    {
    id: 28,
    title: (
      <span>
        Задача 28 (Диофантовы уравнения) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Надежда энергетики», 2018, 10.2)</span>
      </span>
    ),
    textBefore: (
      <span>
        В стране Лимонии лишь два денежных знака, достоинством в 7 лимонов и в 9 лимонов. Найдите все способы представления такими знаками суммы в 997 лимонов и укажите их количество.
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
            Пусть количество денежных знаков достоинством 7 лимонов равно <InlineMath math={`x`} />, а достоинством 9 лимонов — <InlineMath math={`y`} /> (где <InlineMath math={`x, y \\ge 0`} />). Составим диофантово уравнение:
          </div>
          <BlockMath math={`7x + 9y = 997`} />
          <div>
            Исследуем полученное выражение по модулю 7 для исключения переменной <InlineMath math={`x`} />:
          </div>
          <BlockMath math={`9y \\equiv 997 \\pmod{7} \\iff 2y \\equiv 3 \\pmod{7}`} />
          <BlockMath math={`2y \\equiv 10 \\pmod{7} \\implies y \\equiv 5 \\pmod{7}`} />
          <div>
            Отсюда получаем общую параметрическую форму для переменной <InlineMath math={`y`} />, где <InlineMath math={`k`} /> — целое число:
          </div>
          <BlockMath math={`y = 7k + 5`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Подставим найденную зависимость для <InlineMath math={`y`} /> обратно в исходное уравнение, чтобы выразить переменную <InlineMath math={`x`} />:
          </div>
          <BlockMath math={`7x + 9(7k + 5) = 997 \\iff 7x + 63k + 45 = 997`} />
          <BlockMath math={`7x + 63k = 952 \\implies x = 136 - 9k`} />
          <div>
            Таким образом, формулы всех возможных решений системы имеют вид:
          </div>
          <BlockMath math={`\\begin{cases} x = 136 - 9k \\\\ y = 5 + 7k \\end{cases}`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Учтём естественное ограничение на неотрицательность количества денежных знаков (<InlineMath math={`x \\ge 0`} /> и <InlineMath math={`y \\ge 0`} />):
          </div>
          <BlockMath math={`5 + 7k \\ge 0 \\implies k \\ge 0`} />
          <BlockMath math={`136 - 9k \\ge 0 \\implies 9k \\le 136 \\implies k \\le \\lfloor 136 / 9 \\rfloor = 15`} />
          <div>
            Следовательно, целый параметр <InlineMath math={`k`} /> может принимать любые значения из диапазона:
          </div>
          <BlockMath math={`k \\in \\{0, \\ 1, \\ 2, \\ \\dots, \\ 15\\}`} />
          <div>
            Что даёт ровно 16 различных способов представления суммы.
          </div>
          <div className="font-semibold text-amber-600">Ответ: 16 способов; все варианты задаются формулами x = 136 - 9k, y = 5 + 7k для целых k от 0 до 15.</div>
        </div>
      </div>
    )
  },


    {
    id: 29,
    title: (
      <span>
        Задача 29 (Уравнения в целых числах) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Бельчонок», 2020, 8.5)</span>
      </span>
    ),
    textBefore: (
      <span>
        Решите в натуральных числах уравнение:
        <BlockMath math={`n! - 4n^2 + 18 = m^2 + 4nm - 20m`} />
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
            Перепишем исходное уравнение как квадратное относительно переменной <InlineMath math={`m`} />:
          </div>
          <BlockMath math={`m^2 + 2(2n - 10)m + (4n^2 - 18 - n!) = 0`} />
          <div>
            Для существования натуральных корней дискриминант <InlineMath math={`D_1`} /> (четверть классического дискриминанта) обязан быть полным квадратом целого числа <InlineMath math={`k`} />:
          </div>
          <BlockMath math={`k^2 = (2n - 10)^2 - (4n^2 - 18 - n!)`} />
          <BlockMath math={`k^2 = 4n^2 - 40n + 100 - 4n^2 + 18 + n!`} />
          <BlockMath math={`k^2 = n! - 40n + 118`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Исследуем последнюю цифру полученного выражения. При <InlineMath math={`n \\ge 5`} /> значение факториала <InlineMath math={`n!`} /> нацело делится на 10 и оканчивается на 0. Слагаемое <InlineMath math={`40n`} /> также всегда оканчивается на 0.
          </div>
          <div>
            Следовательно, при всех <InlineMath math={`n \\ge 5`} /> правая часть уравнения <InlineMath math={`n! - 40n + 118`} /> гарантированно оканчивается на цифру <b>8</b>.
          </div>
          <div>
            Поскольку ни один точный квадрат целого числа не может оканчиваться на цифры 2, 3, 7 или 8, исходное уравнение не имеет решений при всех <InlineMath math={`n \\ge 5`} />.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Переберём оставшиеся значения для малой переменной <InlineMath math={`n`} /> от 1 до 4:
          </div>
          <ul className="list-bullet pl-5 space-y-1 text-sm">
            <li>Если <InlineMath math={`n = 1 \\implies k^2 = 1 - 40 + 118 = 79`} /> (не полный квадрат).</li>
            <li>Если <InlineMath math={`n = 2 \\implies k^2 = 2 - 80 + 118 = 40`} /> (не полный квадрат).</li>
            <li>Если <InlineMath math={`n = 3 \\implies k^2 = 6 - 120 + 118 = 4 = 2^2`} /> (подходит, <InlineMath math={`k = 2`} />).</li>
            <li>Если <InlineMath math={`n = 4 \\implies k^2 = 24 - 160 + 118 = -18`} /> (отрицательное значение).</li>
          </ul>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            При найденном значении <InlineMath math={`n = 3`} /> и <InlineMath math={`k = 2`} /> вычислим корни квадратного уравнения для <InlineMath math={`m`} />:
          </div>
          <BlockMath math={`m = -(2n - 10) \\pm k = -(6 - 10) \\pm 2 = 4 \\pm 2`} />
          <BlockMath math={`m_1 = 6, \\quad m_2 = 2`} />
          <div>
            Оба корня являются натуральными числами, что даёт ровно две пары искомых решений.
          </div>
          <div className="font-semibold text-amber-600">Ответ: (3, 2), (3, 6).</div>
        </div>
      </div>
    )
  },


  {
    id: 30,
    title: (
      <span>
        Задача 30 (Уравнения в целых числах) <span className="text-sm font-normal text-slate-400 ml-1.5">(Турнир городов, 1997, 10–11)</span>
      </span>
    ),
    textBefore: (
      <span>
        Куб разрезали на 99 кубиков, из которых ровно у одного ребро имеет длину, отличную от 1 (у каждого из остальных ребро равно 1). Найдите объём исходного куба.
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
            Пусть ребро исходного большого куба равно <InlineMath math={`x`} />, а ребро единственного кубика с отличным размером равно <InlineMath math={`y`} /> (где <InlineMath math={`y \\neq 1`} />).
          </div>
          <div>
            Поскольку всего кубиков 99, из них ровно <InlineMath math={`99 - 1 = 98`} /> штук имеют ребро длины 1 и, соответственно, объём <InlineMath math={`1^3 = 1`} />. 
            Составим уравнение баланса общего объёма до и после разрезания:
          </div>
          <BlockMath math={`x^3 = 98 \\cdot 1^3 + y^3 \\iff x^3 - y^3 = 98`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Разложим левую часть уравнения по формуле разности кубов:
          </div>
          <BlockMath math={`(x - y)(x^2 + xy + y^2) = 98`} />
          <div>
            Поскольку исходный куб разрезался на кубики с единичными ребрами, длина ребра <InlineMath math={`x`} /> обязана складываться из целого числа единиц и ребра <InlineMath math={`y`} />. 
            Следовательно, разность длин <InlineMath math={`x - y`} /> является строго <b>натуральным числом</b>.
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Разложим число 98 на натуральные множители: <InlineMath math={`98 = 1 \\cdot 98 = 2 \\cdot 49`} />. 
            Поскольку вторая скобка <InlineMath math={`x^2 + xy + y^2`} /> при любых геометрических размерах строго больше первой, рассмотрим два возможных случая:
          </div>
          <ul className="list-bullet pl-5 space-y-2 text-sm">
            <li>
              Рассмотрим первую возможную систему уравнений:
              <BlockMath math={`\\begin{cases} x - y = 2 \\\\ x^2 + xy + y^2 = 49 \\end{cases}`} />
              Выразим <InlineMath math={`x = y + 2`} /> и подставим во второе уравнение системы:
              <BlockMath math={`(y + 2)^2 + (y + 2)y + y^2 = 49 \\iff 3y^2 + 6y + 4 = 49`} />
              <BlockMath math={`3y^2 + 6y - 45 = 0 \\iff y^2 + 2y - 15 = 0 \\implies (y - 3)(y + 5) = 0`} />
              Поскольку длина ребра положительна, получаем <InlineMath math={`y = 3`} />. Тогда ребро исходного куба равно <InlineMath math={`x = 3 + 2 = 5`} />.
            </li>
            <li>
              Рассмотрим вторую возможную систему уравнений:
              <BlockMath math={`\\begin{cases} x - y = 1 \\\\ x^2 + xy + y^2 = 98 \\end{cases}`} />
              Выразим <InlineMath math={`x = y + 1`} /> и подставим во второе уравнение системы:
              <BlockMath math={`(y + 1)^2 + (y + 1)y + y^2 = 98 \\iff 3y^2 + 3y + 1 = 98 \\iff 3y^2 + 3y - 97 = 0`} />
              Дискриминант полученного квадратного уравнения <InlineMath math={`D = 1173`} /> не является полным квадратом, следовательно, целых геометрических решений в этом случае нет.
            </li>
          </ul>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Таким образом, единственным геометрически реализуемым решением является <InlineMath math={`x = 5`} />. 
            Вычислим итоговый объём исходного большого куба:
          </div>
          <BlockMath math={`V = x^3 = 5^3 = 125`} />
          <div className="font-semibold text-amber-600">Ответ: 125.</div>
        </div>
      </div>
    )
  },


  {
    id: 31,
    title: (
      <span>
        Задача 31 (Оценки в уравнениях) <span className="text-sm font-normal text-slate-400 ml-1.5">(«Надежда энергетики», 2019, 8.5, 9.5)</span>
      </span>
    ),
    textBefore: (
      <span>
        Имеет ли уравнение
        <BlockMath math={`\\dfrac{1}{x} + \\dfrac{1}{x + 1} + \\dfrac{1}{x + 2} + \\dots + \\dfrac{1}{x^2 - 1} + \\dfrac{1}{x^2} = 1`} />
        решение в натуральных числах, больших единицы?
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
            <b>Нет, не имеет.</b> Пусть левая часть уравнения равна сумме <InlineMath math={`S`} />. 
            Всего в этом ряду от <InlineMath math={`x`} /> до <InlineMath math={`x^2`} /> содержится ровно <InlineMath math={`x^2 - x + 1`} /> слагаемых.
          </div>
          <div>
            Выделим из общей суммы первое слагаемое <InlineMath math={`\\dfrac{1}{x}`} />. Каждое из оставшихся <InlineMath math={`x^2 - x`} /> слагаемых строго больше самого последнего и наименьшего элемента ряда — дроби <InlineMath math={`\\dfrac{1}{x^2}`} />:
          </div>
          <BlockMath math={`S > \\dfrac{1}{x} + (x^2 - x) \\cdot \\dfrac{1}{x^2}`} />
          <div>Раскроем скобки в полученном неравенстве и приведем подобные члены:</div>
          <BlockMath math={`S > \\dfrac{1}{x} + \\dfrac{x^2}{x^2} - \\dfrac{x}{x^2} = \\dfrac{1}{x} + 1 - \\dfrac{1}{x} = 1`} />
          <BlockMath math={`S > 1`} />
          <div>
            Поскольку при любом натуральном <InlineMath math={`x \\geq 2`} /> левая часть уравнения всегда строго больше 1, равенство единице невозможно.
          </div>
          <div className="font-semibold text-amber-600">Ответ: нет, не имеет.</div>
        </div>
      </div>
    )
  },

  


  
];