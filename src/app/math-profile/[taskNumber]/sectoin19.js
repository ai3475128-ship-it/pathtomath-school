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
            <span className="font-semibold text-amber-600">Ответ пункта а): нет.</span>
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
            <span className="font-semibold text-amber-600">Ответ пункта б): 388.</span>
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
            <span className="font-semibold text-amber-600">Ответ пункта в): 187.</span>
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
            <span className="font-semibold text-amber-600">Ответ пункта а): нет.</span>
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
            <span className="font-semibold text-amber-600">Ответ пункта б): нет.</span>
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
            <span className="font-semibold text-amber-600">Ответ пункта в): 182.</span>
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



   {
    id: 3,
    title: 'Задача 3 (Банк ФИПИ)',
    textBefore: 'Есть четыре коробки: в первой коробке 101 камень, во второй — 102, в третьей — 103, а в четвёртой коробке камней нет. За один ход берут по одному камню из любых трёх коробок и кладут в оставшуюся.',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Могло ли в первой коробке оказаться 97 камней, во второй — 102, в третьей — 103, а в четвёртой — 4?
        <br />
        <b>б)</b> Могло ли в четвёртой коробке оказаться 306 камней?
        <br />
        <b>в)</b> Какое наибольшее число камней могло оказаться в первой коробке?
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
                <div className="space-y-2 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200/60 dark:border-slate-800/60 text-xs md:text-sm">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Определение сравнимости:</p>
          <p>
            Два целых числа <InlineMath math={`a`} /> и <InlineMath math={`b`} /> называют сравнимыми по модулю натурального числа <InlineMath math={`m`} /> (обозначается как <InlineMath math={`a \\equiv b \\pmod m`} />), если их разность <InlineMath math={`a - b`} /> делится на <InlineMath math={`m`} /> без остатка.
          </p>
        </div>

        <div className="space-y-2">
          <p>
            Введём базовый инвариант для этой игры. Исходное количество камней в коробках равно:
            <InlineMath math={`(101; 102; 103; 0)`} />. Общая сумма камней всегда неизменна: 
            <InlineMath math={`101 + 102 + 103 + 0 = 306`} />.
          </p>
          <p>
            Рассмотрим, как меняется количество камней в любой коробке за один ход. 
            Если из этой коробки берут камень, её содержимое уменьшается на <InlineMath math={`1`} />. 
            Если в неё кладут камни, её содержимое увеличивается на <InlineMath math={`3`} />. 
            В обоих случаях изменение количества камней составляет либо <InlineMath math={`-1`} />, либо <InlineMath math={`+3`} />.
          </p>
          <p>
            Следовательно, разность между количествами камней в любых двух коробках изменяется на величину, кратную 4.
            <b>Pазность остатков любых двух коробок по модулю 4 остаётся постоянной на протяжении всей игры.</b>
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>
            Проверим предложенное состояние: в первой 97, во второй 102, в третьей 103, в четвёртой 4.
            Посчитаем остатки исходного состояния по модулю 4:
          </p>
          <BlockMath math={`101 \\equiv 1, \\quad 102 \\equiv 2, \\quad 103 \\equiv 3, \\quad 0 \\equiv 0 \\pmod 4`} />
          <p>Посчитаем остатки предложенного в пункте а) состояния:</p>
          <BlockMath math={`97 \\equiv 1, \\quad 102 \\equiv 2, \\quad 103 \\equiv 3, \\quad 4 \\equiv 0 \\pmod 4`} />
          <p>
            Остатки полностью совпадают. Покажем, что такое распределение можно получить:
            <br />
          </p>
          <BlockMath math={`(101 - 1; \\ 102 - 1; \\ 103 - 1; \\ 0 + 3) = (100; 101; 102; 3)`} />
          <BlockMath math={`(100 - 1; \\ 101 - 1; \\ 102 - 1; \\ 3 + 3) = (99; 100; 101; 6)`} />
          <BlockMath math={`(101 - 4; \\ 102 - 4; \\ 103 - 4; \\ 0 + 4 \\cdot 1) = (97; 102; 103; 4)`} />
          <p className="font-semibold text-amber-600">Ответ пункта а): да.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>
            Предположим, что в четвёртой коробке оказались все <InlineMath math={`306`} /> камней. Это значит, что финальное состояние имеет вид: <InlineMath math={`(0; 0; 0; 306)`} />.
          </p>
          <p>
            Поскольку разность между количеством камней во второй и первой коробках изначально составляла <InlineMath math={`102 - 101 = 1`} />, в любой момент игры разность количества камней в этих коробках должна давать остаток 1 при делении на 4:
          </p>
          <BlockMath math={`x_2 - x_1 \\equiv 1 \\pmod 4`} />
          <p>
            Однако в предполагаемом финальном состоянии <InlineMath math={`x_2 - x_1 = 0 - 0 = 0`} />, что не даёт остаток 1 по модулю 4. Следовательно, собрать все камни в четвёртой коробке математически невозможно.
            <br />
            <span className="font-semibold text-amber-600">Ответ пункта б): нет.</span>
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>
            Нам нужно максимизировать количество камней в первой коробке (<InlineMath math={`x_1`} />). Всего камней 306.
          </p>
          <p>
            Используя инвариант разности остатков по модулю 4, запишем требования для финального состояния:
          </p>
          <BlockMath math={`x_2 - x_1 \\equiv 1 \\pmod 4 \\implies x_2 \\equiv x_1 + 1 \\pmod 4`} />
          <BlockMath math={`x_3 - x_1 \\equiv 2 \\pmod 4 \\implies x_3 \\equiv x_1 + 2 \\pmod 4`} />
          <BlockMath math={`x_4 - x_1 \\equiv 3 \\pmod 4 \\implies x_4 \\equiv x_1 + 3 \\pmod 4`} />
          
          <p className="mt-2">
            Минимизируем сумму <InlineMath math={`x_2 + x_3 + x_4`} />, подбирая минимальные неотрицательные целые числа, удовлетворяющие шагам остатков.
            Если <InlineMath math={`x_2 = 0`} />, то <InlineMath math={`x_1 \\equiv 3 \\pmod 4`} />. Тогда:
          </p>
          <BlockMath math={`x_3 \\equiv 3 + 2 = 5 \\equiv 1 \\pmod 4 \\implies \\min x_3 = 1`} />
          <BlockMath math={`x_4 \\equiv 3 + 3 = 6 \\equiv 2 \\pmod 4 \\implies \\min x_4 = 2`} />
          <p>
            В таком случае минимальная сумма камней в трёх других коробках составит <InlineMath math={`0 + 1 + 2 = 3`} /> камня.
            Следовательно, максимальное количество камней в первой коробке не может превышать:
          </p>
          <BlockMath math={`x_1 \\leq 306 - 3 = 303`} />
          
          <p className="mt-2">
            Проверим остаток полученного числа: <InlineMath math={`303 = 4 \\cdot 75 + 3 \\equiv 3 \\pmod 4`} />. Условие полностью выполняется.
          </p>
          <p className="mt-2 font-medium">
            Построим пример:
          </p>
          <ul className="list-bullet pl-5 space-y-2 text-sm">
            <li>
              <b>Этап 1: Снижение стартовых значений.</b> 
              Выполним подряд <InlineMath math={`26`} /> ходов, забирая по одному камню из первых трёх коробок и отправляя их в четвёртую. Динамика изменения распределения:
              <BlockMath math={`(101; 102; 103; 0) \\to (100; 101; 102; 3) \\to (99; 100; 101; 6) \\to \\dots \\to (75; 76; 77; 78)`} />
            </li>
            <li>
              <b>Этап 2: Аккумуляция в первой коробке.</b> 
              Сейчас начнём целенаправленно опустошать вторую, третью и четвёртую коробки, перекладывая камни в первую. 
              Совершим <InlineMath math={`76`} /> таких ходов подряд. Каждый ход увеличивает первую коробку на 3 и уменьшает остальные на 1:
              <BlockMath math={`(75; 76; 77; 78) \\to (78; 75; 76; 77) \\to (81; 74; 75; 76) \\to \\dots \\to (303; 0; 1; 2)`} />
            </li>
          </ul>
          <p className="mt-2">
            <span className="font-semibold text-amber-600">Ответ пункта в): 303.</span>
          </p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) да;</p>
            <p>б) нет;</p>
            <p>в) 303.</p>
          </div>
        </div>
      </div>
    )
  },


    {
    id: 4,
    title: 'Задача 4 (Банк ФИПИ)',
    textBefore: 'Маша и Наташа делали фотографии в течение некоторого количества подряд идущих дней. В первый день Маша сделала m фотографий, а Наташа — n фотографий. В каждый следующий день каждая из девочек делала на одну фотографию больше, чем в предыдущий. Известно, что в общей сложности Наташа сделала суммарно на 1001 фотографию больше, чем Маша, и что фотографировали они больше одного дня.',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Могли ли они фотографировать в течение 7 дней?
        <br />
        <b>б)</b> Могли ли они фотографировать в течение 8 дней?
        <br />
        <b>в)</b> Какое наибольшее суммарное число фотографий могла сделать Наташа за все дни фотографирования, если известно, что в последний день Маша сделала меньше 40 фотографий?
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Пусть процесс фотографирования длился <InlineMath math={`k`} /> дней (<InlineMath math={`k > 1`} cascade />).
            <br />
            В первый день Маша сделала <InlineMath math={`m`} /> фотографий, а в каждый следующий — на одну больше. Количество фотографий, сделанных Машей по дням, представляет собой арифметическую прогрессию:
          </p>
          <BlockMath math={`m, \\ m+1, \\ m+2, \\ \\dots, \\ m+k-1`} />
          <p>Суммарное число фотографий Маши равно:</p>
          <BlockMath math={`S_M = \\dfrac{2m + k - 1}{2} \\cdot k`} />
          
          <p className="mt-2">
            Аналогично, количество фотографий Наташи по дням составляет прогрессию с первым членом <InlineMath math={`n`} />:
          </p>
          <BlockMath math={`n, \\ n+1, \\ n+2, \\ \\dots, \\ n+k-1`} />
          <p>Суммарное число фотографий Наташи равно:</p>
          <BlockMath math={`S_H = \\dfrac{2n + k - 1}{2} \\cdot k`} />
          
          <p className="mt-2">
            По условию задачи, Наташа сделала суммарно на <InlineMath math={`1001`} /> фотографию больше, чем Маша. Составим разность:
          </p>
          <BlockMath math={`S_H - S_M = 1001 \\iff \\left(\\dfrac{2n + k - 1}{2} \\cdot k\\right) - \\left(\\dfrac{2m + k - 1}{2} \\cdot k\\right) = 1001`} />
          <BlockMath math={`\\dfrac{2n - 2m}{2} \\cdot k = 1001 \\iff (n - m) \\cdot k = 1001`} />
          <p>
            Мы получили ключевое уравнение задачи. Разложим число <InlineMath math={`1001`} /> на простые множители: 
            <br />
            <InlineMath math={`1001 = 7 \\cdot 11 \\cdot 13`} />.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>
            Проверим, может ли число дней <InlineMath math={`k`} /> быть равным <InlineMath math={`7`} />. Подставим <InlineMath math={`k = 7`} /> в наше уравнение:
          </p>
          <BlockMath math={`(n - m) \\cdot 7 = 1001 \\iff n - m = 143`} />
          <p>
            Поскольку числа <InlineMath math={`m`} /> и <InlineMath math={`n`} /> — натуральные, мы можем легко подобрать пример. 
            Пусть в первый день Маша сделала <InlineMath math={`m = 1`} /> фотографию, тогда Наташа сделала <InlineMath math={`n = 1 + 143 = 144`} /> фотографии. 
            Условие выполняется, такое развитие событий возможно.
            <br />
            <span className="font-semibold text-amber-600">Ответ пункта а): да.</span>
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>
            Проверим, может ли число дней <InlineMath math={`k`} /> быть равным <InlineMath math={`8`} />. Подставим <InlineMath math={`k = 8`} /> в уравнение:
          </p>
          <BlockMath math={`(n - m) \\cdot 8 = 1001 \\iff n - m = \\dfrac{1001}{8}`} />
          <p>
            Число <InlineMath math={`1001`} /> не делится нацело на <InlineMath math={`8`} /> (поскольку оно нечётное). Так как количество фотографий в первый день <InlineMath math={`m`} /> и <InlineMath math={`n`} /> обязаны быть целыми числами, их разность <InlineMath math={`(n - m)`} /> тоже должна быть целым числом. Получили противоречие.
            <br />
            <span className="font-semibold text-amber-600">Ответ пункта б): нет.</span>
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>
            Нам необходимо максимизировать <InlineMath math={`S_H`} /> при условии, что в последний день Маша сделала меньше 40 фотографий:
          </p>
          <BlockMath math={`m + k - 1 < 40 \\iff m + k \\leq 40`} />
          <p>
            Из уравнения <InlineMath math={`(n - m) \\cdot k = 1001`} /> следует, что <InlineMath math={`k`} /> является натуральным делителем числа <InlineMath math={`1001`} />. 
            Поскольку по условию <InlineMath math={`k > 1`} />, а из ограничения выше <InlineMath math={`k < 40`} /> (так как <InlineMath math={`m \\geq 1 \\implies k \\leq 39`} />), выпишем все возможные делители <InlineMath math={`1001`} /> на этом интервале:
          </p>
          <BlockMath math={`k \\in \\{7; \\ 11; \\ 13; \\ 7 \\cdot 11 = 77 \\dots \\} \\implies k \\in \\{7; \\ 11; \\ 13\\}`} />
          
          <p className="mt-2">
            Выразим <InlineMath math={`n`} /> из уравнения разности: <InlineMath math={`n = m + \\dfrac{1001}{k}`} />. Подставим это значение в формулу суммы Наташи:
          </p>
          <BlockMath math={`S_H = \\dfrac{2\\left(m + \\dfrac{1001}{k}\\right) + k - 1}{2} \\cdot k = m\\cdot k + 1001 + \\dfrac{k(k - 1)}{2}`} />
          <p>
            Чтобы максимизировать <InlineMath math={`S_H`} />, мы должны взять максимально возможные значения для <InlineMath math={`m`} /> и <InlineMath math={`k`} />. 
            Используем ограничение <InlineMath math={`m \\leq 40 - k`} />:
          </p>
          <BlockMath math={`S_H \\leq (40 - k)\\cdot k + 1001 + \\dfrac{k^2 - k}{2} = 40k - k^2 + 1001 + \\dfrac{k^2}{2} - \\dfrac{k}{2} = 1001 + 39,5k - 0,5k^2`} />
          
          <p className="mt-2">Проверим три доступных кандидата на роль <InlineMath math={`k`} />:</p>
          <ul className="list-bullet pl-5 space-y-2">
            <li>
              При <InlineMath math={`k = 7`} />: <InlineMath math={`m_{\\text{max}} = 40 - 7 = 33`} />.
              <br />
              <InlineMath math={`S_H = 33 \\cdot 7 + 1001 + \\dfrac{7 \\cdot 6}{2} = 231 + 1001 + 21 = 1253`} />.
            </li>
            <li>
              При <InlineMath math={`k = 11`} />: <InlineMath math={`m_{\\text{max}} = 40 - 11 = 29`} />.
              <br />
              <InlineMath math={`S_H = 29 \\cdot 11 + 1001 + \\dfrac{11 \\cdot 10}{2} = 319 + 1001 + 55 = 1375`} />.
            </li>
            <li>
              При <InlineMath math={`k = 13`} />: <InlineMath math={`m_{\\text{max}} = 40 - 13 = 27`} />.
              <br />
              <InlineMath math={`S_H = 27 \\cdot 13 + 1001 + \\dfrac{13 \\cdot 12}{2} = 351 + 1001 + 78 = 1430`} />.
            </li>
          </ul>
          
          <p className="mt-2">
            Максимальное суммарное число фотографий Наташи равно <InlineMath math={`1430`} /> при количестве дней <InlineMath math={`k = 13`} />, стартовом числе Маши <InlineMath math={`m = 27`} /> (в последний день у неё <InlineMath math={`27 + 13 - 1 = 39 < 40`} />) и стартовом числе Наташи <InlineMath math={`n = 27 + 1001/13 = 104`} />.
            <br />
            <span className="font-semibold text-amber-600">Ответ пункта в): 1430.</span>
          </p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) да;</p>
            <p>б) нет;</p>
            <p>в) 1430.</p>
          </div>
        </div>
      </div>
    )
  },


  {
    id: 5,
    title: 'Задача 5 (Банк ФИПИ)',
    textBefore: 'Тройку различных натуральных чисел назвём удачной, если любое число в ней хотя бы на 5 больше, чем треть суммы двух других чисел. Например, 40, 45, 50 — удачная тройка.',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Сколько существует удачных троек, содержащих числа 50, 60 и ещё одно число, большее 60?
        <br />
        <b>б)</b> Найдётся ли удачная тройка, одно из чисел которой равно 15?
        <br />
        <b>в)</b> Какое наибольшее количество чисел от 1 до 100 включительно можно расставить по кругу так, чтобы каждое число встречалось не более одного раза и любые три подряд идущих числа образовывали удачную тройку?
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Переведём определение «удачной тройки» различных натуральных чисел <InlineMath math={`(a; b; c)`} /> в строгую систему линейных неравенств. 
            Условие «каждое число хотя бы на 5 больше трети суммы двух других» означает:
          </p>
          <BlockMath math={`3a \\geq b + c + 15, \\quad 3b \\geq a + c + 15, \\quad 3c \\geq a + b + 15`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>
            Пусть искомая тройка имеет вид <InlineMath math={`(50; 60; x)`} />, где по условию <InlineMath math={`x > 60`} /> — натуральное число. 
            Записав систему неравенств, получаем:
          </p>
          <BlockMath math={`\\begin{cases} 3 \\cdot 50 \\geq 60 + x + 15 \\implies x \\leq 75 \\\\ 3 \\cdot 60 \\geq 50 + x + 15 \\implies x \\leq 115 \\\\ 3x \\geq 50 + 60 + 15 \\implies x \\geq 41\\dfrac{2}{3} \\end{cases}`} />
          <p>
            Объединяя полученные ограничения с условием <InlineMath math={`x > 60`} />, получаем строгий диапазон: <InlineMath math={`60 < x \\leq 75`} />.
            <br />
            Количество целых чисел от 61 до 75 включительно равно: <InlineMath math={`75 - 61 + 1 = 15`} />.
          </p>
          <p className="font-semibold text-amber-600">Ответ пункта а): 15.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>
            Выясним, найдётся ли удачная тройка различных натуральных чисел <InlineMath math={`(a; b; c)`} />, одно из которых равно <InlineMath math={`15`} />. Пусть для определённости <InlineMath math={`a = 15`} />. 
            Запишем систему неравенств, отражающую требования удачной тройки для каждого из её элементов:
          </p>
          <BlockMath math={`\\begin{cases} 3 \\cdot 15 \\geq b + c + 15 \\implies b + c \\leq 30 \\\\[0.3em] 3b \\geq 15 + c + 15 \\implies 3b - c \\geq 30 \\\\[0.3em] 3c \\geq 15 + b + 15 \\implies 3c - b \\geq 30 \\end{cases}`} />
          <p>Сложим второе и третье неравенства системы:</p>
          <BlockMath math={`(3b - c) + (3c - b) \\geq 30 + 30 \\iff 2(b + c) \\geq 60 \\iff b + c \\geq 30`} />
          <p>
            Из условий <InlineMath math={`b + c \\leq 30`} /> и <InlineMath math={`b + c \\geq 30`} /> следует единственно возможное равенство:
          </p>
          <BlockMath math={`b + c = 30`} />
          <p>Подставив <InlineMath math={`c = 30 - b`} /> во второе неравенство исходной системы, получим:</p>
          <BlockMath math={`3b - (30 - b) \\geq 30 \\iff 4b \\geq 60 \\iff b \\geq 15`} />
          <p>
            Из симметрии выражений аналогично следует, что <InlineMath math={`c \\geq 15`} />. Так как сумма <InlineMath math={`b + c = 30`} />, единственным решением системы в натуральных числах является пара:
          </p>
          <BlockMath math={`b = 15, \\quad c = 15`} />
          <p>
            Однако по условию задачи все три числа в удачной тройке должны быть <b>различными</b>. Полученная тройка <InlineMath math={`(15; 15; 15)`} /> этому требованию не удовлетворяет.
            <br />
            <span className="font-semibold text-amber-600">Ответ пункта б): нет.</span>
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>
            Обозначим за <InlineMath math={`m`} /> наименьшее число среди всех элементов в круге, а за <InlineMath math={`b`} /> и <InlineMath math={`c`} /> — его непосредственных соседей в одной из удачных троек. 
            Поскольку все числа в круге различны, справедлива оценка:
          </p>
          <BlockMath math={`b \\geq m + 1, \\ c \\geq m + 2 \\implies b + c \\geq 2m + 3`} />
          <p>Из условия удачной тройки для минимального элемента <InlineMath math={`m`} /> получаем (см. пунтк б):</p>
          <BlockMath math={`3m \\geq b + c + 15 \\implies 3m \\geq (2m + 3) + 15 \\implies m \\geq 18`} />
          <BlockMath math={`3m \\geq b + c + 15 \\implies b + c \\leq 3m - 15`} />
          
          <p className="mt-2">
            Каждое число входит минимум в 3 тройки подряд. Проверим последовательным перебором граничные значения для минимума <InlineMath math={`m`} />:
          </p>
          <ul className="list-bullet pl-5 space-y-1 text-sm">
            <li>Если <InlineMath math={`m = 18 \\implies b + c \\leq 39`} />. Единственная доступная тройка различных чисел: <InlineMath math={`(18, 19, 20)`} /> (круг построить нельзя).</li>
            <li>Если <InlineMath math={`m = 19 \\implies b + c \\leq 42`} />. Недостаточно элементов для замыкания круга более чем из 3 чисел.</li>
            <li>Если <InlineMath math={`m = 20 \\implies b + c \\leq 45`} />. Существует всего четыре подходящих тройки (в круг можно поставить не более 5 чисел).</li>
          </ul>
          <p className="mt-2">
            Следовательно, минимальное число в круге должно быть не меньше <b><InlineMath math={`21`} /></b>. Максимальный объём круга на отрезке элементов <InlineMath math={`[21; 100]`} /> составляет:
          </p>
          <BlockMath math={`100 - 21 + 1 = 80 \\text{ чисел}.`} />

          {/* Высокоточный SVG-рисунок круговой змейки */}
          <div className="my-4 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <svg viewBox="0 0 240 240" className="w-full max-w-[220px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
              <circle cx="120" cy="120" r="80" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 4" />
              <text x="114" y="28" fill="#000000" className="dark:fill-slate-300 font-bold">21</text>
              <text x="84" y="38" fill="#000000" className="dark:fill-slate-400">22</text>
              <text x="144" y="38" fill="#000000" className="dark:fill-slate-400">23</text>
              <text x="56" y="56" fill="#000000" className="dark:fill-slate-400">24</text>
              <text x="172" y="56" fill="#000000" className="dark:fill-slate-400">25</text>
              <circle cx="34" cy="100" r="1.5" fill="#475569" />
              <circle cx="32" cy="120" r="1.5" fill="#475569" />
              <circle cx="34" cy="140" r="1.5" fill="#475569" />
              <circle cx="206" cy="100" r="1.5" fill="#475569" />
              <circle cx="208" cy="120" r="1.5" fill="#475569" />
              <circle cx="206" cy="140" r="1.5" fill="#475569" />
              <text x="114" y="218" fill="#000000" className="dark:fill-slate-300 font-bold">80</text>
              <text x="84" y="210" fill="#000000" className="dark:fill-slate-400">78</text>
              <text x="144" y="210" fill="#000000" className="dark:fill-slate-400">79</text>
              <text x="56" y="192" fill="#000000" className="dark:fill-slate-400">76</text>
              <text x="172" y="192" fill="#000000" className="dark:fill-slate-400">77</text>
              <text x="194" y="172" fill="#000000" className="dark:fill-slate-400">75</text>
            </svg>
            <span className="text-[11px] text-slate-400 mt-1 italic text-center">Схема расстановки чисел по кругу методом «змейки»</span>
          </div>

          <p>
            Пример расстановки для <InlineMath math={`N = 80`} /> («змейка»): 
            <br />
            <InlineMath math={`24, 22, 21, 23, 25, \\dots, 76, 78, 80, 79, 77, 75`} />. 
            Проверка стандартной тройки <InlineMath math={`(a, a+2, a+4)`} />:
          </p>
          <BlockMath math={`3a \\geq (a + 2) + (a + 4) + 15 \\iff 3a \\geq 2a + 21 \\iff a \\geq 21 \\quad (\\text{выполнено для } a=21)`} />
          <p>Проверка пограничных троек в точке смыкания <InlineMath math={`(78, 80, 79)`} /> и <InlineMath math={`(77, 80, 79)`} />:</p>
          <BlockMath math={`3 \\cdot 78 \\geq 80 + 79 + 15 \\iff 234 \\geq 174 \\quad (\\text{верно})`} />
          <BlockMath math={`3 \\cdot 77 \\geq 80 + 79 + 15 \\iff 231 \\geq 174 \\quad (\\text{верно})`} />
          <p className="font-semibold text-amber-600">Ответ пункта в): 80.</p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) 15;</p>
            <p>б) нет;</p>
            <p>в) 80.</p>
          </div>
        </div>
      </div>
    )
  },


    {
    id: 6,
    title: 'Задача 6',
    textBefore: 'Трёхзначное число, меньшее 700, поделили на сумму его цифр и получили натуральное число n.',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Может ли n равняться 64?
        <br />
        <b>б)</b> Может ли n равняться 78?
        <br />
        <b>в)</b> Какое наибольшее значение может принимать n, если все цифры ненулевые?
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Пусть искомое трёхзначное число равно <InlineMath math={`\\overline{abc} = 100a + 10b + c`} />, где <InlineMath math={`1 \\leq a \\leq 6`} /> (так как число меньше 700), а <InlineMath math={`0 \\leq b, c \\leq 9`} />.
            По условию задачи:
          </p>
          <BlockMath math={`\\dfrac{100a + 10b + c}{a + b + c} = n \\iff 100a + 10b + c = n(a + b + c)`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>Положим <InlineMath math={`n = 64`} /> и преобразуем равенство:</p>
          <BlockMath math={`100a + 10b + c = 64(a + b + c) \\iff 36a = 54b + 63c`} />
          <p>Разделим обе части уравнения на 9:</p>
          <BlockMath math={`4a = 6b + 7c`} />
          <p>Подберём подходящие натуральные цифры. Пусть <InlineMath math={`c = 0`} />, тогда:</p>
          <BlockMath math={`4a = 6b \\iff 2a = 3b \\implies a = 3, \\ b = 2`} />
          <p>Получаем число <InlineMath math={`320`} />. Проверим его: <InlineMath math={`320 < 700`} />, сумма цифр <InlineMath math={`3+2+0=5`} />, а <InlineMath math={`320 / 5 = 64`} />.</p>
          <p className="font-semibold text-amber-600">Ответ пункта а): да.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>Положим <InlineMath math={`n = 78`} /> и преобразуем исходное равенство:</p>
          <BlockMath math={`100a + 10b + c = 78(a + b + c) \\iff 22a = 68b + 77c`} />
          <p>Оценим левую часть уравнения с учётом ограничения <InlineMath math={`a \\leq 6`} />:</p>
          <BlockMath math={`22a \\leq 22 \\cdot 6 = 132`} />
          <p>Рассмотрим возможные значения переменной <InlineMath math={`b`} /> на правой стороне уравнения:</p>
          <ul className="list-bullet pl-5 space-y-1 text-sm">
            <li>Если <InlineMath math={`b \\geq 2 \\implies 68b \\geq 136 > 132`} /> (левая часть меньше, равенство невозможно).</li>
            <li>
              Если <InlineMath math={`b = 0 \\implies 22a = 77c \\iff 2a = 7c`} />. Разберём варианты для цифры <InlineMath math={`c`} />:
              <br />
              — При <InlineMath math={`c = 1 \\implies 2a = 7`} /> (нет целых решений);
              <br />
              — При <InlineMath math={`c \\geq 2 \\implies a \\geq 7`} />, что противоречит условию <InlineMath math={`a \\leq 6`} />.
            </li>
            <li>Если <InlineMath math={`b = 1 \\implies 22a = 68 + 77c`} />. При <InlineMath math={`c = 0 \\implies 22a = 68`} /> (нет целых решений); при <InlineMath math={`c \\geq 1 \\implies 68 + 77c \\geq 145 > 132`} />.</li>
          </ul>
          <p>Следовательно, уравнение не имеет решений в целых цифрах.</p>
          <p className="font-semibold text-amber-600">Ответ пункта б): нет.</p>
        </div>


        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>
            По условию все цифры ненулевые, то есть <InlineMath math={`1 \\leq a \\leq 6`} /> и <InlineMath math={`1 \\leq b, c \\leq 9`} />. 
            Преобразуем выражение для <InlineMath math={`n`} />:
          </p>
          <BlockMath math={`n = \\dfrac{100a + 10b + c}{a + b + c} = \\dfrac{99a + 9b + (a + b + c)}{a + b + c} = 1 + \\dfrac{99a + 9b}{a + b + c}`} />
          <p>Для максимизации дроби выберем минимально возможное значение переменной <InlineMath math={`c = 1`} />:</p>
          <BlockMath math={`n = 1 + \\dfrac{99a + 9b}{a + b + 1} = 1 + 9 \\cdot \\dfrac{11a + b}{a + b + 1} = 1 + 9 \\left( 11 - \\dfrac{10b + 11}{a + b + 1} \\right) = 100 - \\dfrac{90b + 99}{a + b + 1}`} />
          <p>Чтобы значение <InlineMath math={`n`} /> было максимальным, вычитаемая дробь должна быть минимальной, для чего положим <InlineMath math={`b = 1`} />:</p>
          <BlockMath math={`n = 100 - \\dfrac{90 \\cdot 1 + 99}{a + 1 + 1} = 100 - \\dfrac{189}{a + 2}`} />
          <p>
            Поскольку число <InlineMath math={`n`} /> натуральное, знаменатель <InlineMath math={`(a + 2)`} /> обязан быть делителем числа <InlineMath math={`189`} />. 
            Учитывая ограничение <InlineMath math={`a \\leq 6 \\implies a + 2 \\leq 8`} />, выпишем подходящие делители числа 189:
          </p>
          <BlockMath math={`(a + 2) \\in \\{3; \\ 7\\}`} />
          <p>Максимальное значение выражения достигается при наибольшем знаменателе, то есть при <InlineMath math={`a + 2 = 7`} />:</p>
          <BlockMath math={`a = 5 \\implies n_{\\text{max}} = 100 - \\dfrac{189}{7} = 100 - 27 = 73`} />
          <p>Примером служит число <InlineMath math={`511`} /> (все цифры ненулевые, <InlineMath math={`511 < 700`} />), где <InlineMath math={`511 / (5 + 1 + 1) = 73`} />.</p>
          <p className="font-semibold text-amber-600">Ответ пункта в): 73.</p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) да;</p>
            <p>б) нет;</p>
            <p>в) 73.</p>
          </div>
        </div>
      </div>
    )
  },


    {
    id: 7,
    title: 'Задача 7',
    textBefore: 'Трёхзначное число, все цифры которого ненулевые, разделили на произведение его цифр.',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Могло ли в результате деления получиться частное, равное 8?
        <br />
        <b>б)</b> Могло ли в результате деления получиться частное, равное 222?
        <br />
        <b>в)</b> Какое наибольшее частное можно было получить в результате деления?
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Пусть искомое трёхзначное число имеет вид <InlineMath math={`\\overline{abc} = 100a + 10b + c`} />, где цифры удовлетворяют ограничениям: <InlineMath math={`1 \\leq a, b, c \\leq 9`} />.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>Положим частное равным 8. Уравнение имеет вид:</p>
          <BlockMath math={`100a + 10b + c = 8abc`} />
          <p>Подберём подходящие цифры. Пусть <InlineMath math={`a = 1, \\ b = 2, \\ c = 8`} />. Проверим данную тройку:</p>
          <BlockMath math={`100 \\cdot 1 + 10 \\cdot 2 + 8 = 128 \\quad \\text{и} \\quad 8 \\cdot 1 \\cdot 2 \\cdot 8 = 128`} />
          <p>Равенство <InlineMath math={`128 = 128`} cascade /> выполняется, условия задачи полностью соблюдены для числа <InlineMath math={`128`} />.</p>
          <p className="font-semibold text-amber-600">Ответ пункта а): да.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>Положим частное равным 222. Уравнение принимает вид:</p>
          <BlockMath math={`100a + 10b + c = 222abc`} />
          <p>Оценим левую и правую части неравенствами, учитывая, что <InlineMath math={`1 \\leq a, b, c \\leq 9`} />:</p>
          <ul className="list-bullet pl-5 space-y-1 text-sm">
            <li>Оценка правой части снизу при <InlineMath math={`b \\geq 1, \\ c \\geq 1`} />: <BlockMath math={`222abc \\geq 222a \\cdot 1 \\cdot 1 = 222a`} /></li>
            <li>Оценка левой части сверху при <InlineMath math={`b \\leq 9, \\ c \\leq 9`} />: <BlockMath math={`100a + 10b + c \\leq 100a + 10 \\cdot 9 + 9 = 100a + 99`} /></li>
          </ul>
          <p className="pt-1">Составим разность полученных граничных выражений:</p>
          <BlockMath math={`222a - (100a + 99) = 122a - 99`} />
          <p>Поскольку <InlineMath math={`a \\geq 1`} />, минимальное значение разности составляет:</p>
          <BlockMath math={`122 \\cdot 1 - 99 = 23 > 0 \\implies 222a > 100a + 99`} />
          <p>Следовательно, для любых наборов ненулевых цифр справедливо строгое неравенство:</p>
          <BlockMath math={`222abc \\geq 222a > 100a + 99 \\geq 100a + 10b + c`} />
          <p>Равенство сторон невозможно, уравнение не имеет решений.</p>
          <p className="font-semibold text-amber-600">Ответ пункта б): нет.</p>
        </div>


        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>Выразим искомое частное <InlineMath math={`n`} /> из исходного уравнения деления:</p>
          <BlockMath math={`n = \\dfrac{100a + 10b + c}{abc} = \\dfrac{100}{bc} + \\dfrac{10}{ac} + \\dfrac{1}{ab}`} />
          <p>Чтобы максимизировать значение суммы, необходимо минимизировать каждый из знаменателей дробей. Положим <InlineMath math={`a = 1, \\ b = 1, \\ c = 1`} />:</p>
          <BlockMath math={`n_{\\text{max}} = \\dfrac{100}{1 \\cdot 1} + \\dfrac{10}{1 \\cdot 1} + \\dfrac{1}{1 \\cdot 1} = 100 + 10 + 1 = 111`} />
          <p>Примером служит число <InlineMath math={`111`} />, произведение цифр которого равно <InlineMath math={`1 \\cdot 1 \\cdot 1 = 1`} />, а частное составляет: <InlineMath math={`111 / 1 = 111`} />.</p>
          <p className="font-semibold text-amber-600">Ответ пункта в): 111.</p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) да;</p>
            <p>б) нет;</p>
            <p>в) 111.</p>
          </div>
        </div>
      </div>
    )
  },


    {
    id: 8,
    title: 'Задача 8 (ЕГЭ 2025, досрочная волна)',
    textBefore: 'В группе поровну юношей и девушек. Юноши отправляли электронные письма девушкам. Каждый юноша отправил или 4 письма, или 21 письмо, причём и тех и других юношей было не менее двух. Возможно, что какой-то юноша отправил какой-то девушке несколько писем.',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Могло ли оказаться так, что каждая девушка получила ровно 7 писем?
        <br />
        <b>б)</b> Какое наименьшее количество девушек могло быть в группе, если известно, что все они получили писем поровну?
        <br />
        <b>в)</b> Пусть все девушки получили различное количество писем (возможно, какая-то девушка не получила писем вообще). Какое наибольшее количество девушек в такой группе?
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Пусть в группе <InlineMath math={`x`} /> юношей и <InlineMath math={`x`} /> девушек. 
            Обозначим через <InlineMath math={`k`} /> количество юношей, отправивших по 4 письма, а через <InlineMath math={`m`} /> — отправивших по 21 письму. 
            По условию: <InlineMath math={`k \\geq 2, \\ m \\geq 2, \\ k + m = x`} />. 
            Общее количество отправленных писем равно:
          </p>
          <BlockMath math={`S = 4k + 21m`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>Если каждая девушка получила ровно 7 писем, то общее количество писем составляет <InlineMath math={`S = 7x`} />. Запишем равенство:</p>
          <BlockMath math={`4k + 21m = 7(k + m) \\iff 14m = 3k \\iff k = \\dfrac{14m}{3}`} />
          <p>Так как <InlineMath math={`k`} /> — целое число, а 14 не делится на 3, переменная <InlineMath math={`m`} /> должна быть кратна 3. Пусть <InlineMath math={`m = 3`} />:</p>
          <BlockMath math={`k = \\dfrac{14 \\cdot 3}{3} = 14 \\implies x = 14 + 3 = 17`} />
          <p>Ограничения <InlineMath math={`k \\geq 2`} /> и <InlineMath math={`m \\geq 2`} /> выполнены. Ситуация возможна при 17 девушках.</p>
          <p className="font-semibold text-amber-600">Ответ пункта а): да.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>Пусть все <InlineMath math={`x`} /> девушек получили поровну — по <InlineMath math={`y`} /> писем. Тогда общее число писем <InlineMath math={`S = x \\cdot y`} />:</p>
          <BlockMath math={`4k + 21m = y(k + m) \\iff 4(k + m) + 17m = y(k + m) \\iff 17m = (y - 4)x`} />
          <p>Выразим количество девушек <InlineMath math={`x`} /> из полученного уравнения:</p>
          <BlockMath math={`x = \\dfrac{17m}{y - 4}`} />
          <p>
            Так как 17 — простое число, а из условий задачи <InlineMath math={`x > m`} />, то число <InlineMath math={`x`} /> должно нацело делиться на 17:
          </p>
          <BlockMath math={`x \\ \\vdots \\ 17 \\implies x_{\\text{min}} = 17`} />
          <p>Пример для <InlineMath math={`x = 17`} /> реализован и проверен в пункте а).</p>
          <p className="font-semibold text-amber-600">Ответ пункта б): 17.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>Если все <InlineMath math={`x`} /> девушек получили различное неотрицательное число писем, то их сумма оценивается снизу как:</p>
          <BlockMath math={`S \\geq 0 + 1 + 2 + \\dots + (x - 1) = \\dfrac{x(x - 1)}{2}`} />
          <p>Выразим общее число писем через <InlineMath math={`x`} />, учитывая, что <InlineMath math={`k = x - m`} /> :</p>
          <BlockMath math={`S = 4(x - m) + 21m = 4x + 17m`} />
          <p>Так как <InlineMath math={`k \\geq 2`} /> , то <InlineMath math={`m \\leq x - 2`} />. Оценим значение <InlineMath math={`S`} /> сверху, подставив максимальное <InlineMath math={`m`} /> :</p>
          <BlockMath math={`S \\leq 4x + 17(x - 2) = 21x - 34`} />
          <p>Объединив границы для общего числа писем, получим квадратное неравенство:</p>
          <BlockMath math={`\\dfrac{x(x - 1)}{2} \\leq 21x - 34 \\iff x^2 - 43x + 68 \\leq 0`} />
          <p>Найдём корни соответствующего квадратного уравнения:</p>
          <BlockMath math={`D = (-43)^2 - 4 \\cdot 68 = 1577`} />
          <p>Оценим значение корня из дискриминанта с помощью строгих неравенств через точные квадраты целых чисел:</p>
          <BlockMath math={`39^2 = 1521 < 1577 < 1600 = 40^2 \\implies 39 < \\sqrt{1577} < 40`} />
          <p>Используя верхнюю границу для корня, получаем строгое неравенство для наибольшего решения:</p>
          <BlockMath math={`x \\leq \\dfrac{43 + \\sqrt{1577}}{2} < \\dfrac{43 + 40}{2} = 41,5 \\implies x \\leq 41`} />
          
          <p>Приведём пример. При <InlineMath math={`x = 41`} /> выберем <InlineMath math={`m = 39`} /> и <InlineMath math={`k = 2`} /> :</p>
          <BlockMath math={`S = 4 \\cdot 2 + 21 \\cdot 39 = 827`} />
          <p>
            Нам необходимо распределить <InlineMath math={`827`} /> писем среди 41 девушки так, чтобы каждая получила уникальное неотрицательное количество. 
            Минимальный базовый набор из 41 различного числа имеет вид: <InlineMath math={`0, 1, 2, \\dots, 39, 40`} />. Их сумма равна:
          </p>
          <BlockMath math={`S_{\\text{min}} = \\dfrac{41 \\cdot 40}{2} = 820`} />
          <p>
            Запас по письмам составляет <InlineMath math={`827 - 820 = 7`} /> писем. Распределим этот остаток, прибавив по 1 письму к результатам последних 7 девушек базового набора. 
            Финальное распределение писем по девушкам примет вид:
          </p>
          <BlockMath math={`0, \\ 1, \\ 2, \\ \\dots, \\ 33, \\ 35, \\ 36, \\ 37, \\ 38, \\ 39, \\ 40, \\ 41`} />
          <p>Все 41 число в данном ряду являются целыми, неотрицательными и строго различными, а их сумма в точности равна 827.</p>
          <p className="font-semibold text-amber-600">Ответ пункта в): 41.</p>
        </div>


        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) да;</p>
            <p>б) 17;</p>
            <p>в) 41.</p>
          </div>
        </div>
      </div>
    )
  },



    {
    id: 9,
    title: 'Задача 9 (ЕГЭ 2021, резервный день)',
    textBefore: 'Первый член конечной геометрической прогрессии, состоящей из трёхзначных натуральных чисел, равен 128. Известно, что в прогрессии не меньше трёх чисел.',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Может ли число 686 являться членом такой прогрессии?
        <br />
        <b>б)</b> Может ли число 496 являться членом такой прогрессии?
        <br />
        <b>в)</b> Какое наибольшее число может являться членом такой прогрессии?
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Пусть знаменатель геометрической прогрессии равен рациональной несократимой дроби <InlineMath math={`q = \\dfrac{m}{k}`}/>. 
            Тогда любой <InlineMath math={`n`} />-й член прогрессии с первым членом <InlineMath math={`b_1 = 128 = 2^7`} /> выражается формулой:
          </p>
          <BlockMath math={`b_n = 128 \\cdot q^{n-1} = \\dfrac{2^7 \\cdot m^{n-1}}{k^{n-1}}`} />
          <p>
            Поскольку все члены прогрессии являются натуральными числами, знаменатель <InlineMath math={`k^{n-1}`} /> обязан нацело делить <InlineMath math={`2^7`} />, откуда следует, что <InlineMath math={`k`} /> может быть только степенью двойки: <InlineMath math={`k = 2^a`} />.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>Предположим, что число 686 является <InlineMath math={`n`} />-м членом прогрессии. Разложим его на множители: <InlineMath math={`686 = 2 \\cdot 7^3`} />. Запишем уравнение:</p>
          <BlockMath math={`2^7 \\cdot \\left(\\dfrac{m}{k}\\right)^{n-1} = 2 \\cdot 7^3 \\iff \\left(\\dfrac{m}{k}\\right)^{n-1} = \\dfrac{7^3}{2^6} = \\left(\\dfrac{7}{4}\\right)^3`} />
          <p>Данное уравнение имеет очевидное решение в целых числах при:</p>
          <BlockMath math={`n - 1 = 3 \\implies n = 4, \\quad m = 7, \\quad k = 4`} />
          <p>
            Знаменатель прогрессии равен <InlineMath math={`q = \\dfrac{7}{4}`} />. Члены прогрессии: <InlineMath math={`128, \\ 224, \\ 392, \\ 686`} />. Все они натуральные и трёхзначные.
          </p>
          <p className="font-semibold text-amber-600">Ответ пункта а): да.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>Предположим, что число 496 является членом прогрессии. Разложим его на множители: <InlineMath math={`496 = 2^4 \\cdot 31`} />. Запишем уравнение:</p>
          <BlockMath math={`2^7 \\cdot \\left(\\dfrac{m}{k}\\right)^{n-1} = 2^4 \\cdot 31 \\iff \\left(\\dfrac{m}{k}\\right)^{n-1} = \\dfrac{31}{2^3}`} />
          <p>
            Так как число 31 — простое, его невозможно представить в виде степени <InlineMath math={`m^{n-1}`} />. 
            Единственным возможным показателем является:
          </p>
          <BlockMath math={`n - 1 = 1 \\implies n = 2 \\implies q = \\dfrac{31}{8}`} />
          <p>Однако по условию в прогрессии содержится не менее 3 членов (<InlineMath math={`n \\geq 3`} />). Найдём третий член:</p>
          <BlockMath math={`b_3 = b_2 \\cdot q = 496 \\cdot \\dfrac{31}{8} = 1922`} />
          <p>Число 1922 четырёхзначное, что противоречит условию задачи. Следовательно, число 496 не может быть членом прогрессии.</p>
          <p className="font-semibold text-amber-600">Ответ пункта б): нет.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>
            Для нахождения наибольшего члена прогрессии при условии <InlineMath math={`b_n \\leq 999`} /> проанализируем выражение <InlineMath math={`b_n = \\dfrac{2^7 \\cdot m^{n-1}}{k^{n-1}}`} />. 
            Поскольку дробь несократима (<InlineMath math={`\\text{НОД}(m, k) = 1`} />), знаменатель <InlineMath math={`k^{n-1}`} /> должен являться делителем числа <InlineMath math={`2^7 = 128`} />. 
            Проведём полный перебор по значениям показателя степени <InlineMath math={`n - 1`} /> :
          </p>
          <ul className="list-bullet pl-5 space-y-2 text-sm">
            <li>
              <b>1. При</b> <InlineMath math={`n - 1 = 2 \\implies k^2 \\text{ делит } 128`} />. Возможные целые значения для <InlineMath math={`k`} /> — это 2, 4 или 8:
              <br />
              — Если <InlineMath math={`k = 2 \\implies b_3 = 32m^2 \\leq 999 \\implies m^2 \\leq 31 \\implies m_{\\text{max}} = 5 \\implies b_3 = 32 \\cdot 25 = 800`} />.
              <br />
              — Если <InlineMath math={`k = 4 \\implies b_3 = 8m^2 \\leq 999 \\implies m^2 \\leq 124 \\implies m_{\\text{max}} = 11 \\implies b_3 = 8 \\cdot 121 = 968`} />.
              <br />
              — Если <InlineMath math={`k = 8 \\implies b_3 = 2m^2 \\leq 999 \\implies m^2 \\leq 499 \\implies m_{\\text{max}} = 21 \\implies b_3 = 2 \\cdot 441 = 882`} />.
            </li>
            <li>
              <b>2. При</b> <InlineMath math={`n - 1 = 3 \\implies k^3 \\text{ делит } 128`} />. Единственное целое решение — <InlineMath math={`k = 2`} /> :
              <br />
              <InlineMath math={`b_4 = 16m^3 \\leq 999 \\implies m^3 \\leq 62 \\implies m_{\\text{max}} = 3 \\implies b_4 = 16 \\cdot 27 = 432`} />.
            </li>
            <li>
              <b>3. При</b> <InlineMath math={`n - 1 = 4 \\implies k^4 \\text{ делит } 128`} />. Единственное целое решение — <InlineMath math={`k = 2`} /> :
              <br />
              <InlineMath math={`b_5 = 8m^4 \\leq 999 \\implies m^4 \\leq 124 \\implies m_{\\text{max}} = 3 \\implies b_5 = 8 \\cdot 81 = 648`} />.
            </li>
            <li>
              <b>4. При</b> <InlineMath math={`n - 1 = 5 \\implies k^5 \\text{ делит } 128`} />. Единственное целое решение — <InlineMath math={`k = 2`} /> :
              <br />
              <InlineMath math={`b_6 = 4m^5 \\leq 999 \\implies m^5 \\leq 249 \\implies m_{\\text{max}} = 3 \\implies b_6 = 4 \\cdot 243 = 972`} />.
            </li>
            <li>
              <b>5. При</b> <InlineMath math={`n - 1 = 6 \\implies k^6 \\text{ делит } 128`} />. Единственное целое решение — <InlineMath math={`k = 2`} /> :
              <br />
              <InlineMath math={`b_7 = 2m^6 \\leq 999 \\implies m^6 \\leq 499 \\implies m_{\\text{max}} = 2 \\implies b_7 = 2 \\cdot 64 = 128`} />.
            </li>
          </ul>
          <p className="pt-1">
            Для любых более высоких степеней (<InlineMath math={`n - 1 \\geq 7`} />) при <InlineMath math={`m \\geq 3`} /> члены прогрессии становятся четырёхзначными (<InlineMath math={`b_n \\geq 2187`} cascade />), а при <InlineMath math={`m = 1`} /> прогрессия становится убывающей и все её члены строго меньше стартового числа 128. Сравнение всех вариантов показывает, что наибольшим возможным трёхзначным числом является 972.
          </p>
          <p>
            Примером служит геометрическая прогрессия из 6 членов со знаменателем <InlineMath math={`q = \\dfrac{3}{2}`} /> : 
            <br />
            <InlineMath math={`128, \\ 192, \\ 288, \\ 432, \\ 648, \\ 972`} />. Все элементы являются трёхзначными натуральными числами.
          </p>
          <p className="font-semibold text-amber-600">Ответ пункта в): 972.</p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) да;</p>
            <p>б) нет;</p>
            <p>в) 972.</p>
          </div>
        </div>
      </div>
    )
  },


    {
    id: 10,
    title: 'Задача 10',
    textBefore: 'В классе больше 10, но не больше 28 учащихся, а доля девочек не превышает 22%.',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Может ли в этом классе быть 4 девочки?
        <br />
        <b>б)</b> Может ли доля девочек составить 30%, если в этот класс придёт новая девочка?
        <br />
        <b>в)</b> В этот класс пришла новая девочка. Доля девочек в классе составила целое число процентов. Какое наибольшее число процентов может составить доля девочек в классе?
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Пусть общее количество учащихся в классе равно <InlineMath math={`x`} /> , где <InlineMath math={`11 \\leq x \\leq 28`} /> , а количество девочек равно <InlineMath math={`d`} />. 
            По условию задачи выполняется базовое ограничение:
          </p>
          <BlockMath math={`\\dfrac{d}{x} \\leq 0,22 \\iff d \\leq 0,22x`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>Положим количество девочек <InlineMath math={`d = 4`} />. Подставим в исходное неравенство:</p>
          <BlockMath math={`4 \\leq 0,22x \\iff x \\geq \\dfrac{400}{22} \\implies x \\geq 19`} />
          <p>
            Поскольку нижняя граница <InlineMath math={`x = 19`} /> удовлетворяет условию <InlineMath math={`x \\leq 28`} /> , ситуация возможна. 
            При <InlineMath math={`19`} /> учащихся и 4 девочках их доля составляет <InlineMath math={`\\dfrac{4}{19} \\leq 22\\%`} />.
          </p>
          <p className="font-semibold text-amber-600">Ответ пункта а): да.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>При добавлении одной девочки новая доля должна составить ровно 30%:</p>
          <BlockMath math={`\\dfrac{d + 1}{x + 1} = 0,3 \\iff d + 1 = 0,3x + 0,3 \\iff d = 0,3x - 0,7`} />
          <p>Подставим полученное выражение для переменной <InlineMath math={`d`} /> в исходное ограничение:</p>
          <BlockMath math={`0,3x - 0,7 \\leq 0,22x \\iff 0,08x \\leq 0,7 \\iff x \\leq \\dfrac{70}{8} \\implies x \\leq 8`} />
          <p>Полученное ограничение <InlineMath math={`x \\leq 8`} /> противоречит условию задачи, согласно которому <InlineMath math={`x \\geq 11`} />. Решений нет.</p>
          <p className="font-semibold text-amber-600">Ответ пункта б): нет.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>Пусть новая доля девочек равна целому числу процентов <InlineMath math={`p`} />. Выразим отношение:</p>
          <BlockMath math={`p = \\dfrac{100(d + 1)}{x + 1}`} />
          <p>Оценим числитель дроби сверху, используя исходное ограничение <InlineMath math={`d \\leq 0,22x`} /> :</p>
          <BlockMath math={`\\dfrac{d + 1}{x + 1} \\leq \\dfrac{0,22x + 1}{x + 1} = 0,22 + \\dfrac{0,78}{x + 1}`} />
          <p>Для максимизации полученной величины минимизируем знаменатель, положив <InlineMath math={`x = 11`} /> :</p>
          <BlockMath math={`p \\leq 100 \\cdot \\left( 0,22 + \\dfrac{0,78}{11 + 1} \\right) = 22 + 6,5 = 28,5 \\implies p \\leq 28`} />
          <p>
            Для получения целого значения <InlineMath math={`p`} /> число <InlineMath math={`100(d+1)`} /> должно нацело делиться на <InlineMath math={`x+1`} />. 
            Проведём полный перебор возможных конфигураций по диапазонам значений переменной <InlineMath math={`x`} /> :
          </p>
          <ul className="list-bullet pl-5 space-y-2 text-sm">
            <li>
              Если <InlineMath math={`11 \\leq x \\leq 13 \\implies d \\leq 0,22 \\cdot 13 = 2,86 \\implies d_{\\text{max}} = 2`} />. 
              Максимальный числитель равен <InlineMath math={`100(2+1)=300`} />. Единственный делящий знаменатель на интервале <InlineMath math={`[12; 14]`} /> — это <InlineMath math={`x+1 = 12 \\implies p = 300/12 = 25\\%`} />.
            </li>
            <li>
              Если <InlineMath math={`14 \\leq x \\leq 18 \\implies d \\leq 0,22 \\cdot 18 = 3,96 \\implies d_{\\text{max}} = 3`} />. 
              Максимальный числитель равен <InlineMath math={`100(3+1)=400`} />. Единственный делящий знаменатель на интервале <InlineMath math={`[15; 19]`} /> — это <InlineMath math={`x+1 = 16 \\implies p = 400/16 = 25\\%`} />.
            </li>
            <li>
              Если <InlineMath math={`19 \\leq x \\leq 22 \\implies d \\leq 0,22 \\cdot 22 = 4,84 \\implies d_{\\text{max}} = 4`} />. 
              Максимальный числитель равен <InlineMath math={`100(4+1)=500`} />. Единственный делящий знаменатель на интервале <InlineMath math={`[20; 23]`} /> — это <InlineMath math={`x+1 = 20 \\implies p = 500/20 = 25\\%`} />.
            </li>
            <li>
              Если <InlineMath math={`23 \\leq x \\leq 27 \\implies d \\leq 0,22 \\cdot 27 = 5,94 \\implies d_{\\text{max}} = 5`} />. 
              Максимальный числитель равен <InlineMath math={`100(5+1)=600`} />. Знаменатель <InlineMath math={`x+1 = 24 \\implies p = 600/24 = 25\\%`} />.
            </li>
            <li>
              Если <InlineMath math={`x = 28 \\implies d \\leq 0,22 \\cdot 28 = 6,16 \\implies d_{\\text{max}} = 6`} />. 
              Числитель <InlineMath math={`100(6+1)=700`} /> на знаменатель <InlineMath math={`x+1 = 29`} /> нацело не делится.
            </li>
          </ul>
          <p className="pt-1">
            Полный перебор всех допустимых значений показывает, что получить целое число процентов выше 25 без нарушения исходного условия невозможно.
          </p>
          <p>
            Примером достижения максимума служит класс из <InlineMath math={`11`} /> учащихся, в котором изначально было <InlineMath math={`2`} /> девочки (их доля <InlineMath math={`2/11 \\leq 22\\%`} />). После прихода новой девочки доля составила ровно 25%.
          </p>
          <p className="font-semibold text-amber-600">Ответ пункта в): 25.</p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) да;</p>
            <p>б) нет;</p>
            <p>в) 25.</p>
          </div>
        </div>
      </div>
    )
  },


    {
    id: 11,
    title: 'Задача 11 (ЕГЭ 2023, основная волна)',
    textBefore: 'Из пары натуральных чисел (a; b), где a > b, за один ход получают пару (a + b; a - b).',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Можно ли за несколько таких ходов получить из пары (150; 7) пару, большее число в которой равно 600?
        <br />
        <b>б)</b> Можно ли за несколько таких ходов получить из пары (150; 7) пару (1224; 1190)?
        <br />
        <b>в)</b> Какое наименьшее a может быть в паре (a; b), из которой за несколько ходов можно получить пару (1224; 1190)?
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Проследим за последовательными изменениями начальной пары чисел <InlineMath math={`(150; 7)`} /> по правилу игры:
          </p>
          <BlockMath math={`\\text{Ход 1: } (150 + 7; \\ 150 - 7) = (157; \\ 143)`} />
          <BlockMath math={`\\text{Ход 2: } (157 + 143; \\ 157 - 143) = (300; \\ 14) = 2 \\cdot (150; \\ 7)`} />
          <p>
            Вывод: за каждые два хода элементы пары просто увеличиваются ровно в 2 раза. Запишем общий вид получаемых пар:
          </p>
          <BlockMath math={`\\text{На чётных ходах: } 2^k \\cdot (150; \\ 7), \\quad \\text{на нечётных ходах: } 2^k \\cdot (157; \\ 143)`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>Применим общую формулу чётных ходов при значении показателя <InlineMath math={`k = 2`} /> :</p>
          <BlockMath math={`2^2 \\cdot (150; \\ 7) = 4 \\cdot (150; \\ 7) = (600; \\ 28)`} />
          <p>Большее число в полученной паре равно 600, что полностью удовлетворяет условию.</p>
          <p className="font-semibold text-amber-600">Ответ пункта а): да.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>Составим отношение чисел для пары <InlineMath math={`(1224; 1190)`} /> :</p>
          <BlockMath math={`\\dfrac{1224}{1190} = \\dfrac{36}{35}`} />
          <p>Однако для любых пар, полученных из начальной, отношение элементов обязано быть строго неизменным:</p>
          <BlockMath math={`\\dfrac{150}{7} \\neq \\dfrac{36}{35} \\quad \\text{и} \\quad \\dfrac{157}{143} \\neq \\dfrac{36}{35}`} />
          <p>Следовательно, получить пару (1224; 1190) из исходной невозможно.</p>
          <p className="font-semibold text-amber-600">Ответ пункта б): нет.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>
            Запустим инвертированный (обратный) процесс восстановления предыдущих пар. Из пары <InlineMath math={`(X; Y)`} /> шаг назад однозначно определяется формулами:
          </p>
          <BlockMath math={`a = \\dfrac{X + Y}{2}, \\quad b = \\dfrac{X - Y}{2}`} />
          <p>Данная операция выполнима в натуральных целых числах тогда и только тогда, когда элементы <InlineMath math={`X`} /> и <InlineMath math={`Y`} /> имеют одинаковую чётность. Восстановим предысторию:</p>
          <ul className="list-bullet pl-5 space-y-2 text-sm">
            <li>
              Шаг 1 назад от <InlineMath math={`(1224; 1190)`} /> (оба чётные) :
              <BlockMath math={`a_1 = \\dfrac{1224 + 1190}{2} = 1207, \\quad b_1 = \\dfrac{1224 - 1190}{2} = 17 \\implies (1207; \\ 17)`} />
            </li>
            <li>
              Шаг 2 назад от <InlineMath math={`(1207; 17)`} /> (оба нечётные) :
              <BlockMath math={`a_2 = \\dfrac{1207 + 17}{2} = 612, \\quad b_2 = \\dfrac{1207 - 17}{2} = 595 \\implies (612; \\ 595)`} />
            </li>
          </ul>
          <p className="pt-1">
            В паре <InlineMath math={`(612; 595)`} /> числа имеют разную чётность (612 — чётное, 595 — нечётное), следовательно, дальнейшее движение назад невозможно, цепочка обрывается.
          </p>
          <p>
            Поскольку при прямом ходе значение большего элемента в паре всегда строго увеличивается (<InlineMath math={`a + b > a`} />), минимальное стартовое значение <InlineMath math={`a`} /> , способное породить искомую пару, равно первому числу тупиковой начальной пары предыстории — числу 612.
          </p>
          <p className="font-semibold text-amber-600">Ответ пункта в): 612.</p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) да;</p>
            <p>б) нет;</p>
            <p>в) 612.</p>
          </div>
        </div>
      </div>
    )
  },


    {
    id: 12,
    title: 'Задача 12 (ЕГЭ 2023, досрочная волна)',
    textBefore: 'Егор делит линейку на части. За одно действие он может отрезать от любого количества линеек равные части, имеющие целую длину.',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Может ли Егор за 4 хода разделить линейку длиной в 16 см на части по 1 см?
        <br />
        <b>б)</b> Может ли Егор за 5 ходов разделить линейку длиной в 100 см на части по 1 см?
        <br />
        <b>в)</b> За какое наименьшее количество ходов Егор может разделить линейку длиной в 300 см на части по 1 см?
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Заметим базовое ограничение процесса: за один ход количество имеющихся кусков может увеличиться максимум в 2 раза (если сделать разрез на каждом из них). 
            Следовательно, после <InlineMath math={`n`} /> ходов из одной начальной линейки можно получить не более чем <InlineMath math={`2^n`} /> частей.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>Нам необходимо получить 16 частей за 4 хода. Так как <InlineMath math={`2^4 = 16`} /> , это возможно, если на каждом шаге делить все куски строго пополам:</p>
          <ul className="list-bullet pl-5 space-y-1 text-sm">
            <li>Ход 1: Разрез 8 см от линейки 16 см <InlineMath math={`\\implies`} /> получаем 2 куска по 8 см.</li>
            <li>Ход 2: Совмещаем куски, разрез 4 см <InlineMath math={`\\implies`} /> получаем 4 куска по 4 см.</li>
            <li>Ход 3: Совмещаем куски, разрез 2 см <InlineMath math={`\\implies`} /> получаем 8 кусков по 2 см.</li>
            <li>Ход 4: Совмещаем куски, разрез 1 см <InlineMath math={`\\implies`} /> получаем 16 кусков по 1 см.</li>
          </ul>
          <p className="pt-1">Все отрезаемые части имели целую длину, условия полностью выполнены.</p>
          <p className="font-semibold text-amber-600">Ответ пункта а): да.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>Оценим максимальное число частей, которое можно получить за 5 ходов:</p>
          <BlockMath math={`N \\leq 2^5 = 32 \\text{ части}`} />
          <p>По условию требуется получить 100 частей по 1 см. Поскольку <InlineMath math={`100 > 32`} /> , разделить линейку на такое число элементов за 5 ходов невозможно.</p>
          <p className="font-semibold text-amber-600">Ответ пункта б): нет.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>Оценим снизу число ходов <InlineMath math={`n`} /> , необходимых для получения 300 частей:</p>
          <BlockMath math={`2^n \\geq 300 \\implies n \\geq 9 \\quad (\\text{так как } 2^8 = 256 < 300)`} />
          <p>
            Докажем достижимость нижней границы <InlineMath math={`n = 9`} />. Поскольку Егор может выбирать для каждого действия произвольное количество линеек, он может последовательно выделять куски, равные степеням двойки, параллельно уменьшая остаток.
          </p>
          <p className="mt-2 font-medium">Реализуем алгоритм разделения за 9 ходов:</p>
          <ul className="list-bullet pl-5 space-y-1 text-sm">
            <li>Ход 1: Отрезаем 44 см от начальной линейки 300 см <InlineMath math={`\\implies`} /> получаем части: 256 см и 44 см.</li>
            <li>Ход 2: Отрезаем 128 см от части в 256 см <InlineMath math={`\\implies`} /> получаем части: две по 128 см и одну 44 см.</li>
            <li>Ход 3: Отрезаем 64 см от двух частей по 128 см <InlineMath math={`\\implies`} /> получаемBase части: четыре по 64 см и одну 44 см.</li>
            <li>Ход 4: Отрезаем 32 см от <b>всех</b> пяти имеющихся частей <InlineMath math={`\\implies`} /> получаем части: девять по 32 см и одну 12 см.</li>
            <li>Ход 5: Отрезаем 16 см от девяти частей по 32 см <InlineMath math={`\\implies`} /> получаем части: 18 по 16 см и одну 12 см.</li>
            <li>Ход 6: Отрезаем 8 см от <b>всех</b> 19 имеющихся частей <InlineMath math={`\\implies`} /> получаем части: 37 по 8 см и одну 4 см.</li>
            <li>Ход 7: Отрезаем 4 см от 37 частей по 8 см <InlineMath math={`\\implies`} /> получаем ровно 75 частей по 4 см.</li>
            <li>Ход 8: Отрезаем 2 см от всех 75 частей по 4 см (делим пополам) <InlineMath math={`\\implies`} /> получаем 150 частей по 2 см.</li>
            <li>Ход 9: Отрезаем 1 см от всех 150 частей по 2 см (делим пополам) <InlineMath math={`\\implies`} /> получаем 300 частей по 1 см.</li>
          </ul>
          <p className="pt-1">Все отрезаемые части на каждом шаге имели равную целую длину. Наименьшее необходимое число ходов равно 9.</p>
          <p className="font-semibold text-amber-600">Ответ пункта в): 9.</p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) да;</p>
            <p>б) нет;</p>
            <p>в) 9.</p>
          </div>
        </div>
      </div>
    )
  },



    {
    id: 13,
    title: 'Задача 13 (ЕГЭ 2021, досрочная волна)',
    textBefore: 'В последовательности из 80 целых чисел каждое число (кроме первого и последнего) больше среднего арифметического соседних чисел. Первый и последний члены последовательности равны 0.',
    mathA: '',
    textAfter: (
      <span>
        <br />
        <b>а)</b> Может ли второй член такой последовательности быть отрицательным?
        <br />
        <b>б)</b> Может ли второй член такой последовательности быть равным 20?
        <br />
        <b>в)</b> Найдите наименьшее значение второго члена такой последовательности.
      </span>
    ),
    mathB: '',
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100">Решение.</p>
        
        <div className="space-y-2">
          <p>
            Пусть элементы последовательности равны <InlineMath math={`x_1, \\ x_2, \\ x_3, \\ \\dots, \\ x_{80}`} /> , где <InlineMath math={`x_1 = 0`} /> и <InlineMath math={`x_{80} = 0`} />. 
            Обозначим целые разности между соседними членами как:
          </p>
          <BlockMath math={`d_1 = x_2 - x_1, \\ \\ d_2 = x_3 - x_2, \\ \\ d_3 = x_4 - x_3, \\ \\ \\dots, \\ \\ d_{79} = x_{80} - x_{79}`} />
          <p>Исходное условие задачи «каждое число больше среднего арифметического соседей» преобразуется к виду:</p>
          <BlockMath math={`x_i > \\dfrac{x_{i-1} + x_{i+1}}{2} \\iff 2x_i > x_{i-1} + x_{i+1} \\iff x_i - x_{i-1} > x_{i+1} - x_i \\iff d_{i-1} > d_i`} />
          <p>
            Так как все разности являются целыми числами, из строгого убывания <InlineMath math={`d_{i-1} > d_i`} /> следует, что каждая следующая разность меньше предыдущей минимум на 1:
          </p>
          <BlockMath math={`d_2 \\leq d_1 - 1, \\ \\ d_3 \\leq d_1 - 2, \\ \\ d_4 \\leq d_1 - 3, \\ \\ \\dots, \\ \\ d_{79} \\leq d_1 - 78`} />
          <p>
            Заметим, что второй член последовательности равен первой разности: <InlineMath math={`x_2 = x_1 + d_1 = d_1`} />. 
            Выразим финальный элемент <InlineMath math={`x_{80}`} /> через цепочку всех разностей и оценим его сверху:
          </p>
          <BlockMath math={`x_{80} = d_1 + d_2 + d_3 + \\dots + d_{79}`} />
          <BlockMath math={`x_{80} \\leq d_1 + (d_1 - 1) + (d_1 - 2) + \\dots + (d_1 - 78)`} />
          <p>Вынесем <InlineMath math={`d_1`} /> и сложим натуральные числа от 1 до 78 по формуле арифметической прогрессии:</p>
          <BlockMath math={`x_{80} \\leq 79d_1 - (1 + 2 + 3 + \\dots + 78) = 79d_1 - \\dfrac{1 + 78}{2} \\cdot 78 = 79d_1 - 39 \\cdot 79`} />
          <p>Подставим граничное условие задачи <InlineMath math={`x_{80} = 0`} /> :</p>
          <BlockMath math={`0 \\leq 79d_1 - 39 \\cdot 79 \\iff 79d_1 \\geq 39 \\cdot 79 \\iff d_1 \\geq 39 \\implies x_2 \\geq 39`} />
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт а)</p>
          <p>
            В ходе общего анализа была получена нижняя граница для второго члена последовательности: <InlineMath math={`x_2 \\geq 39`} />. 
            Следовательно, второй член последовательности не может принимать отрицательные значения.
          </p>
          <p className="font-semibold text-amber-600">Ответ пункта а): нет.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт б)</p>
          <p>
            Поскольку для второго элемента последовательности доказано неравенство <InlineMath math={`x_2 \\geq 39`} /> , значение <InlineMath math={`x_2 = 20`} /> является математически невозможным.
          </p>
          <p className="font-semibold text-amber-600">Ответ пункта б): нет.</p>
        </div>

        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <p className="font-semibold text-slate-800 dark:text-slate-200">Пункт в)</p>
          <p>
            Минимальное теоретически возможное значение второго члена равно <InlineMath math={`x_2 = 39`} />. 
            Докажем его реализуемость, сконструировав пример, в котором разности уменьшаются ровно на 1 на каждом шаге:
          </p>
          <BlockMath math={`d_1 = 39, \\ d_2 = 38, \\ d_3 = 37, \\ \\dots, \\ d_{79} = 39 - 78 = -39`} />
          <p>Проверим значение финального элемента для такой симметричной цепочки целых разностей:</p>
          <BlockMath math={`x_{80} = 39 + 38 + 37 + \\dots + 0 + \\dots + (-37) + (-38) + (-39) = 0`} />
          <p>
            Условие <InlineMath math={`x_{80} = 0`} /> выполняется идеально, все элементы последовательности являются целыми числами, а разности строго убывают. Наименьшее значение второго члена равно 39.
          </p>
          <p className="font-semibold text-amber-600">Ответ пункта в): 39.</p>
        </div>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-col gap-1 pt-2 border-t border-slate-200/40">
          <div>Ответ:</div>
          <div className="text-sm font-normal text-slate-700 dark:text-slate-300 space-y-0.5">
            <p>а) нет;</p>
            <p>б) нет;</p>
            <p>в) 39.</p>
          </div>
        </div>
      </div>
    )
  },







];