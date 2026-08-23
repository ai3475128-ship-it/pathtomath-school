import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export const section19Tasks = [
  {
    id: 1,
    title: 'Задача 1 (Банк ФИПИ)',
    textBefore: 'Из пары натуральных чисел (a; b) за один ход можно получить пару (a + 2; b - 1) или (a - 1; b + 2) при условии, что оба числа в новой паре положительны. Сначала есть пара (5; 7).',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Можно ли за 50 таких ходов получить пару, в которой одно из чисел равно 100?
        <br />
        <b>б)</b> За какое число ходов получится пара, сумма чисел в которой равна 400?
        <br />
        <b>в)</b> Какое наибольшее число ходов можно сделать так, чтобы после каждого хода оба числа в паре не превосходили 100?
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Заметим важный инвариант задачи: при любом типе хода сумма чисел в паре увеличивается ровно на <InlineMath math={`1`} />. 
            <br />
            Действительно, <InlineMath math={`(a + 2) + (b - 1) = a + b + 1`} /> и <InlineMath math={`(a - 1) + (b + 2) = a + b + 1`} />.
            <br />
            Первоначальная сумма чисел в паре равна <InlineMath math={`5 + 7 = 12`} />. Следовательно, после <InlineMath math={`n`} /> ходов сумма чисел в паре будет строго равна:
          </p>
          <BlockMath math={`S_n = 12 + n`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>
            Предположим, что через <InlineMath math={`n = 50`} /> ходов мы получили пару, где одно из чисел равно <InlineMath math={`100`} />.
            Тогда общая сумма чисел в паре должна составлять:
          </p>
          <BlockMath math={`S_{50} = 12 + 50 = 62`} />
          <p>
            Если одно из чисел пары равно <InlineMath math={`100`} />, то второе число должно быть равно <InlineMath math={`62 - 100 = -38`} />. 
            Однако по условию задачи все получаемые числа должны быть натуральными (положительными), следовательно, получить такую пару невозможно.
            <br />
            <span className="font-semibold text-amber-600">Ответ по пункту а): нет.</span>
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>
            Нам необходимо найти число ходов <InlineMath math={`n`} />, при котором общая сумма чисел станет равной <InlineMath math={`400`} />.
            Используя выведенный инвариант суммы, составляем уравнение:
          </p>
          <BlockMath math={`12 + n = 400 \\iff n = 388`} />
          <p>
            Поскольку на каждом шаге мы можем совершать ходы, не выходя за рамки положительных чисел, такое число ходов гарантированно достижимо.
            <br />
            <span className="font-semibold text-amber-600">Ответ по пункту б): 388.</span>
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>
            Введём строгую оценку. Пусть сделано <InlineMath math={`n`} /> ходов. Тогда сумма чисел равна <InlineMath math={`12 + n`} />. 
            По условию, после каждого хода оба числа не превосходят <InlineMath math={`100`} />. 
            Максимально возможная сумма двух чисел, каждое из которых не превышает <InlineMath math={`100`} />, равна <InlineMath math={`100 + 100 = 200`} />. 
          </p>
          <p>
            Однако, пара <InlineMath math={`(100; 100)`} /> недостижима без нарушения правил на предыдущем шаге. Чтобы попасть в неё, предыдущая пара должна быть либо <InlineMath math={`(101; 98)`} />, либо <InlineMath math={`(98; 101)`} />, что запрещено условием. 
            Таким образом, максимальная сумма пары не превосходит <InlineMath math={`100 + 99 = 199`} />.
          </p>
          <BlockMath math={`12 + n \\leq 199 \\iff n \\leq 187`} />
          
          <p className="mt-2">
            Приведём пример реализации стратегии для <InlineMath math={`n = 187`} /> ходов, при которой числа будут максимально близки друг к другу:
            <br />
            Будем поочередно чередовать ходы первого и второго типа. За каждые два хода пара увеличивается на <InlineMath math={`(1; 1)`} />. 
            Сделаем <InlineMath math={`93`} /> хода первого типа и <InlineMath math={`93`} /> хода второго типа (всего <InlineMath math={`186`} /> ходов). 
            Получим пару:
          </p>
          <BlockMath math={`(5 + 93; 7 + 93) = (98; 100)`} />
          <p>На этом этапе все промежуточные числа не превышали 100. Последним, <InlineMath math={`187`} />-м ходом сделаем ход первого типа:</p>
          <BlockMath math={`(98 + 2; 100 - 1) = (100; 99)`} />
          <p>
            Оба числа полученной пары <InlineMath math={`(100; 99)`} /> не превосходят <InlineMath math={`100`} />. Условие выполнено.
            <br />
            <span className="font-semibold text-amber-600">Ответ по пункту в): 187.</span>
          </p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) нет;</p>
            <p>б) 388;</p>
            <p>в) 187.</p>
          </div>
        </div>
      </div>
    )
  },


  {
    id: 2,
    title: 'Задача 2 (Банк ФИПИ)',
    textBefore: 'По кругу расставлено N различных натуральных чисел, каждое из которых не превосходит 365. Сумма любых четырёх идущих подряд чисел делится на 4, а сумма любых трёх идущих подряд чисел нечётна.',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Может ли N быть равным 200?
        <br />
        <b>б)</b> Может ли N быть равным 109?
        <br />
        <b>в)</b> Найдите наибольшее значение N.
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Прежде всего определим структуру чётности элементов. Возьмём произвольную четвёрку стоящих рядом чисел: <InlineMath math={`(x_1; x_2; x_3; x_4)`} />. 
            По условию, их общая сумма кратна 4, а значит, заведомо является чётным числом.
          </p>
          <p>
            С другой стороны, первые три элемента этой группы <InlineMath math={`(x_1 + x_2 + x_3)`} /> в сумме дают нечётное число. 
            Тогда чётность последнего, четвёртого элемента <InlineMath math={`x_4`} /> легко вычисляется через разность:
          </p>
          <BlockMath math={`x_4 = (x_1 + x_2 + x_3 + x_4) - (x_1 + x_2 + x_3) = \\text{чётное} - \\text{нечётное} = \\text{нечётное}.`} />
          <p>
            Поскольку круг можно циклически сдвигать на любую позицию, данное рассуждение применимо к абсолютно любому числу в расстановке. 
            Таким образом, <b>все без исключения числа на круге обязаны быть нечётными</b>.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>
            Подсчитаем, сколько вообще существует нечётных чисел в разрешённом диапазоне от 1 до 365 включительно:
          </p>
          <BlockMath math={`1, 3, 5, \\dots, 365 \\implies \\dfrac{365 - 1}{2} + 1 = 183 \\text{ числа}.`} />
          <p>
            Условие требует, чтобы все <InlineMath math={`N`} /> элементов круга были <b>уникальными</b>. 
            Поскольку в наличии имеется всего 183 различных нечётных числа, составить из них круг объёмом <InlineMath math={`N = 200`} /> невозможно из-за нехватки уникальных значений.
            <br />
            <span className="font-semibold text-amber-600">Ответ по пункту а): нет.</span>
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>
            Рассмотрим две соседние четвёрки чисел, налегающие друг на друга: <InlineMath math={`(x_1 + x_2 + x_3 + x_4)`} /> и <InlineMath math={`(x_2 + x_3 + x_4 + x_5)`} />. 
            Так как обе эти суммы кратны 4, их разность также обязана делиться на 4:
          </p>
          <BlockMath math={`(x_2 + x_3 + x_4 + x_5) - (x_1 + x_2 + x_3 + x_4) = x_5 - x_1 \\implies (x_5 - x_1) \\ \\vdots \\ 4.`} />
          <p>
            Это доказывает, что остатки от деления на 4 строго циклически повторяются с шагом 4 вдоль всего круга.
          </p>
          <p>
            Если мы закольцуем цепочку из <InlineMath math={`N = 109`} /> чисел, то для бесконечного сохранения этого шага необходимо, чтобы длина периода делила общее число элементов круга. 
            Поскольку число 109 нечётное и взаимно простое с 4, единственный возможный период равен 1. Это означает, что <b>все числа в кругу должны иметь один и тот же остаток при делении на 4</b>.
          </p>
          <p>Выясним объём групп с фиксированным нечётным остатком на отрезке <InlineMath math={`[1; 365]`} />:</p>
          <ul className="list-bullet pl-5 space-y-1">
            <li>Числа вида <InlineMath math={`4k + 1`} />: <InlineMath math={`1, 5, \\dots, 365 \\implies 92 \\text{ элемента}.`} /></li>
            <li>Числа вида <InlineMath math={`4k + 3`} />: <InlineMath math={`3, 7, \\dots, 363 \\implies 91 \\text{ элемент}.`} /></li>
          </ul>
          <p className="mt-1">
            Максимальный запас уникальных чисел в одной группе составляет всего 92. Сформировать из них расстановку из <InlineMath math={`N = 109`} /> не повторяющихся чисел математически невозможно.
            <br />
            <span className="font-semibold text-amber-600">Ответ по пункту б): нет.</span>
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>
            Так как всего доступно 183 нечётных числа, то <InlineMath math={`N \\leq 183`} />. 
            Чтобы задействовать остатки обоих видов (<InlineMath math={`4k+1`} /> и <InlineMath math={`4k+3`} />), структура круга обязана быть чётной для корректного чередования остатков. Ближайшее чётное число сверху — это <InlineMath math={`N = 182`} />.
          </p>
          <p>
            Докажем реализуемость для <InlineMath math={`N = 182`} />. Возьмём 91 число с остатком 1 и 91 число с остатком 3, разместив их поочерёдно:
          </p>
          <BlockMath math={`(4k+1), \\ (4k+3), \\ (4k+1), \\ (4k+3), \\ \\dots`} />
          <p>Убедимся в выполнении всех условий:</p>
          <ul className="list-bullet pl-5 space-y-1">
            <li>В любой тройке подряд окажутся либо два числа вида <InlineMath math={`4k+1`} /> и одно <InlineMath math={`4k+3`} />, либо наоборот. Сумма трёх нечётных чисел всегда нечётна.</li>
            <li>Любая четвёрка подряд гарантированно содержит ровно два числа одного типа и два другого. Их суммарный остаток равен: <InlineMath math={`1 + 3 + 1 + 3 = 8`} />, что нацело делится на 4.</li>
          </ul>
          <p className="mt-2">
            Поскольку имеющегося запаса чисел (92 и 91 соответственно) достаточно для построения такой последовательности без повторений, максимальное значение <InlineMath math={`N`} /> равно 182.
            <br />
            <span className="font-semibold text-amber-600">Ответ по пункту в): 182.</span>
          </p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) нет;</p>
            <p>б) нет;</p>
            <p>в) 182.</p>
          </div>
        </div>
      </div>
    )
  },





];
