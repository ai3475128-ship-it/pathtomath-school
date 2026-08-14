import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export const section16Tasks = [
      {
    id: 1,
    title: "Задача 1",
    mathA: "\\begin{array}{l} \\text{В июле 2020 года планируется брать кредит в банке на некоторую сумму. Условия его возврата таковы:} \\\\ \\quad \\text{– каждый январь долг возрастает на 30\\% по сравнению с концом предыдущего года;} \\\\ \\quad \\text{– с февраля по июнь каждого года необходимо выплачивать одним платежом часть долга.} \\\\ \\text{Сколько рублей было взято в банке, если известно, что кредит был полностью погашен тремя равными} \\\\ \\text{платежами (то есть за 3 года) и сумма платежей превосходит взятую в банке сумму на 156 060 рублей?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Подробный разбор и ход решения:</p>
        <p>
          Пусть <InlineMath>{"S"}</InlineMath> — сумма кредита (рублей), <InlineMath>{"x"}</InlineMath> — величина каждого из трёх равных ежегодных платежей (рублей), <InlineMath>{"p = 1 + \\frac{30}{100} = 1.3"}</InlineMath> — во сколько раз увеличивается долг при начислении процентов.
        </p>
        
        <p>Составим пошаговую таблицу движения долга по годам:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-3 font-bold text-center">Год</th>
                <th className="p-3 font-bold text-center">Долг до начисления %, руб.</th>
                <th className="p-3 font-bold text-center">Платёж, руб.</th>
                <th className="p-3 font-bold text-center">Долг после платежа, руб.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 text-center">
                <td className="p-3">1</td>
                <td className="p-3"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-3"><InlineMath>{"x"}</InlineMath></td>
                <td className="p-3"><InlineMath>{"pS - x"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 text-center">
                <td className="p-3">2</td>
                <td className="p-3"><InlineMath>{"pS - x"}</InlineMath></td>
                <td className="p-3"><InlineMath>{"x"}</InlineMath></td>
                <td className="p-3"><InlineMath>{"p(pS - x) - x"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 text-center">
                <td className="p-3">3</td>
                <td className="p-3"><InlineMath>{"p^2S - px - x"}</InlineMath></td>
                <td className="p-3"><InlineMath>{"x"}</InlineMath></td>
                <td className="p-3"><InlineMath>{"p(p^2S - px - x) - x"}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Составим систему уравнений исходя из данных таблицы. По условию третий платёж полностью гасит кредит, то есть остаток долга после третьего года равен нулю:
        </p>
        <BlockMath>{"p^3S - p^2x - px - x = 0 \\quad (1)"}</BlockMath>

        <p>
          Также известно, что суммарные выплаты за 3 года превышают тело кредита на 156 060 рублей:
        </p>
        <BlockMath>{"3x = S + 156\\,060 \\quad (2)"}</BlockMath>

        <p>Подставим числовое значение коэффициента процентов <InlineMath>{"p = 1.3"}</InlineMath> в уравнение (1):</p>
        <BlockMath>{"2.197S - 1.69x - 1.3x - x = 0"}</BlockMath>
        <BlockMath>{"2.197S = 3.99x \\quad (1')"}</BlockMath>

        <p>
          Из второго уравнения выразим величину аннуитетного платежа: <InlineMath>{"x = \\frac{S + 156\\,060}{3}"}</InlineMath>. Подставим это выражение в преобразованное уравнение <InlineMath>{"(1')"}</InlineMath>:
        </p>
        <BlockMath>{"2.197S = 3.99 \\cdot \\frac{S + 156\\,060}{3}"}</BlockMath>
        <BlockMath>{"2.197S = 1.33 \\cdot S + 1.33 \\cdot 156\\,060"}</BlockMath>
        <BlockMath>{"0.867S = 1.33 \\cdot 156\\,060"}</BlockMath>

        <p>Для удобства расчёта избавимся от десятичных дробей, умножив обе части уравнения на 1000:</p>
        <BlockMath>{"867S = 133 \\cdot 156\\,060"}</BlockMath>
        <BlockMath>{"S = \\frac{133 \\cdot 156\\,060}{867} = 133 \\cdot 1800 = 239\\,400"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"239\\,400 \\text{ рублей}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Задача 2",
    mathA: "\\begin{array}{l} \\text{В июле планируется взять кредит в банке на сумму 7 млн рублей на некоторых срок (целое число лет).} \\\\ \\text{Условия его возврата таковы:} \\\\ \\quad \\bullet \\text{ каждый январь долг возрастает на 20\\% по сравнению с концом предыдущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплачивать одним платежом часть долга;} \\\\ \\quad \\bullet \\text{ в июле каждого года долг должен быть на одну и ту же сумму меньше долга на июль предыдущего года.} \\\\ \\text{На сколько лет взят кредит, если известно, что общая сумма выплат после его погашения равнялась 17,5 млн рублей?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Подробный разбор и ход решения:</p>
        <p>
          Пусть <InlineMath>{"n"}</InlineMath> — число лет, на которое взят кредит, <InlineMath>{"A = 17{,}5"}</InlineMath> млн рублей — общая сумма выплат, а <InlineMath>{"S = 7"}</InlineMath> млн рублей — сумма кредита. По условию задачи долг уменьшался каждый год на одну и ту же сумму. Это значит, что каждый год после выплаты размер долга по кредиту становился меньше на <InlineMath>{"\\frac{S}{n}"}</InlineMath> по сравнению с предыдущим годом.
        </p>
        
        <p>Составим таблицу для дифференцированных платежей:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг до %, млн руб.</th>
                <th className="p-2 font-bold text-center">Долг после %, млн руб.</th>
                <th className="p-2 font-bold text-center">Выплата, млн руб.</th>
                <th className="p-2 font-bold text-center">Долг после выплаты, млн руб.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}2S + \\frac{S}{n}"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S - \\frac{S}{n}"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"S - \\frac{S}{n}"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2\\left(S - \\frac{S}{n}\\right)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}2\\left(S - \\frac{S}{n}\\right) + \\frac{S}{n}"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S - 2\\cdot\\frac{S}{n}"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3</td>
                <td className="p-2"><InlineMath>{"S - 2\\cdot\\frac{S}{n}"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2\\left(S - 2\\cdot\\frac{S}{n}\\right)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}2\\left(S - 2\\cdot\\frac{S}{n}\\right) + \\frac{S}{n}"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S - 3\\cdot\\frac{S}{n}"}</InlineMath></td>
              </tr>
              <tr className="text-slate-400">
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">n</td>
                <td className="p-2"><InlineMath>{"\\frac{S}{n}"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2\\cdot\\frac{S}{n}"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}2\\cdot\\frac{S}{n} + \\frac{S}{n}"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Составим уравнение исходя из данных таблицы и условий задачи. Заметим, что долг с каждым годом уменьшается на одну и ту же сумму, следовательно, начисленные проценты (и сами полные платежи) образуют убывающую арифметическую прогрессию. Общая сумма выплат равна:
        </p>
        <BlockMath>{"A = \\left(0{,}2S + \\frac{S}{n}\\right) + \\left(0{,}2\\left(S - \\frac{S}{n}\\right) + \\frac{S}{n}\\right) + \\dots + \\left(0{,}2\\cdot\\frac{S}{n} + \\frac{S}{n}\\right)"}</BlockMath>
        <BlockMath>{"= S + 0{,}2 \\cdot \\left(S + \\left(S - \\frac{S}{n}\\right) + \\left(S - 2\\cdot\\frac{S}{n}\\right) + \\dots + \\frac{S}{n}\\right)"}</BlockMath>

        <p>По формуле суммы арифметической прогрессии для внутренних скобок начисленных процентов получим:</p>
        <BlockMath>{"A = S + 0{,}2 \\cdot \\left(\\frac{S + \\frac{S}{n}}{2} \\cdot n\\right) = S + 0{,}2 \\cdot \\left(\\frac{S(n + 1)}{2}\\right) = S + 0.1S(n + 1)"}</BlockMath>

        <p>По условию задачи общая сумма выплат <InlineMath>{"A = 17{,}5"}</InlineMath> млн рублей, а тело кредита <InlineMath>{"S = 7"}</InlineMath> млн рублей. Подставим эти значения в итоговую формулу для нахождения количества лет:</p>
        <BlockMath>{"7 + 0{,}1 \\cdot 7 \\cdot (n + 1) = 17{,}5"}</BlockMath>
        <BlockMath>{"0{,}7(n + 1) = 10{,}5"}</BlockMath>
        <BlockMath>{"n + 1 = \\frac{10{,}5}{0{,}7} = 15 \\implies n = 14"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"14 \\text{ лет}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Задача 3",
    mathA: "\\begin{array}{l} \\text{15 января планируется взять кредит в банке на некоторую сумму на 31 месяц. Условия возврата:} \\\\ \\quad \\bullet \\text{ 1-го числа каждого месяца долг возрастает на 1\\% по сравнению с концом предыдущего месяца;} \\\\ \\quad \\bullet \\text{ со 2-го по 14-е число каждого месяца необходимо выплатить часть долга одной суммой;} \\\\ \\quad \\bullet \\text{ 15-го числа каждого месяца долг должен быть на 20 тыс. рублей меньше долга на 15-е число} \\\\ \\quad \\quad \\text{предыдущего месяца (это выполняется для месяцев с 1-го по 30-й);} \\\\ \\quad \\bullet \\text{ к 15-му числу 31-го месяца долг должен быть погашен полностью.} \\\\ \\text{Сколько тысяч рублей составляет долг на 15 число 30-го месяца, если банку всего выплачено 1348 тыс. рублей?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Подробный разбор и ход решения:</p>
        <p>
          Пусть <InlineMath>{"S"}</InlineMath> (тыс. рублей) — первоначальная сумма кредита, а <InlineMath>{"A = 1348"}</InlineMath> (тыс. рублей) — общая сумма всех выплат банку. По условию, в течение первых 30 месяцев долг каждого 15-го числа уменьшается равномерно на фиксированную сумму 20 тыс. рублей. 
        </p>
        
        <p>Составим таблицу платежей и остатка долга:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Платёж</th>
                <th className="p-2 font-bold text-center">Долг до %, тыс. руб.</th>
                <th className="p-2 font-bold text-center">Долг после %, тыс. руб.</th>
                <th className="p-2 font-bold text-center">Сумма платежа, тыс. руб.</th>
                <th className="p-2 font-bold text-center">Долг после платежа, тыс. руб.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01S + 20"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S - 20"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"S - 20"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - 20)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01(S - 20) + 20"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S - 40"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3</td>
                <td className="p-2"><InlineMath>{"S - 40"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - 40)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01(S - 40) + 20"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S - 60"}</InlineMath></td>
              </tr>
              <tr className="text-slate-400">
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">29</td>
                <td className="p-2"><InlineMath>{"S - 560"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - 560)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01(S - 560) + 20"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S - 580"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">30</td>
                <td className="p-2"><InlineMath>{"S - 580"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - 580)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01(S - 580) + 20"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S - 600"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">31</td>
                <td className="p-2"><InlineMath>{"S - 600"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - 600)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - 600)"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Найдем сумму первых 30 платежей, которая складывается из 30 фиксированных выплат по 20 тыс. рублей и начисленных процентов, образующих арифметическую прогрессию:
        </p>
        <BlockMath>{"(0{,}01S + 20) + (0{,}01(S - 20) + 20) + \\dots + (0{,}01(S - 580) + 20)"}</BlockMath>
        <BlockMath>{"= 20 \\cdot 30 + 0{,}01 \\cdot (S + (S - 20) + \\dots + (S - 580))"}</BlockMath>

        <p>Применим формулу суммы арифметической прогрессии для внутренних скобок:</p>
        <BlockMath>{"S + (S - 20) + \\dots + (S - 580) = \\frac{S + (S - 580)}{2} \\cdot 30 = 30S - 8700"}</BlockMath>
        <p>Тогда совокупная величина первых 30 платежей составит:</p>
        <BlockMath>{"600 + 0{,}01 \\cdot (30S - 8700) = 0{,}3S + 513"}</BlockMath>

        <p>Добавим к этой величине последний, 31-й платёж, который полностью закрывает остаток долга с процентами:</p>
        <BlockMath>{"1{,}01(S - 600) = 1{,}01S - 606"}</BlockMath>

        <p>Суммируем все выплаты для получения уравнения общей стоимости кредита:</p>
        <BlockMath>{"A = (0{,}3S + 513) + (1{,}01S - 606) = 1{,}31S - 93"}</BlockMath>

        <p>По условию общая сумма выплат равна <InlineMath>{"1348"}</InlineMath> тыс. рублей. Решим полученное линейное уравнение:</p>
        <BlockMath>{"1{,}31S - 93 = 1348 \\iff 1{,}31S = 1441 \\iff S = \\frac{1441}{1{,}31} = 1100"}</BlockMath>

        <p>Найдём искомый долг на 15-е число 30-го месяца, который по нашей таблице равен <InlineMath>{"S - 580"}</InlineMath>:</p>
        <BlockMath>{"S - 580 = 1100 - 600 = 500"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"500 \\text{ тыс. рублей}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Задача 4",
    mathA: "\\begin{array}{l} \\text{15-го апреля планируется взять кредит в банке на 700 тысяч рублей на } (n + 1) \\text{ месяц. Условия возврата:} \\\\ \\quad \\bullet \\text{ 1-го числа каждого месяца долг увеличивается на 1\\% по сравнению с концом предыдущего месяца;} \\\\ \\quad \\bullet \\text{ со 2-го по 14-е число каждого месяца необходимо выплатить одним платежом часть долга;} \\\\ \\quad \\bullet \\text{ 15-го числа каждого месяца с первого по } n \\text{-й долг должен быть на одну и ту же сумму меньше} \\\\ \\quad \\quad \\text{долга на 15-е число предыдущего месяца;} \\\\ \\quad \\bullet \\text{ 15-го числа } n \\text{-го месяца долг составлял 300 тысяч рублей;} \\\\ \\quad \\bullet \\text{ к 15-му числу } (n + 1) \\text{-го месяца долг должен быть погашен полностью.} \\\\ \\text{Найдите } n \\text{, если банку всего было выплачено 755 тысяч рублей.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Подробный разбор и ход решения:</p>
        <p>
          Пусть <InlineMath>{"S = 700"}</InlineMath> (тыс. рублей) — сумма кредита, <InlineMath>{"A = 755"}</InlineMath> (тыс. рублей) — общая сумма выплат, а <InlineMath>{"d"}</InlineMath> — сумма, на которую ежемесячно уменьшается долг с 1-го по <InlineMath>{"n"}</InlineMath>-й месяц. Тогда долг на 15-е число месяца <InlineMath>{"k"}</InlineMath> равен <InlineMath>{"D_k = S - kd"}</InlineMath> (для <InlineMath>{"k = 0, 1, \\dots, n"}</InlineMath>, где <InlineMath>{"D_0 = S"}</InlineMath>).
        </p>
        <p>
          По условию <InlineMath>{"D_n = 300"}</InlineMath> тыс. рублей, то есть:
        </p>
        <BlockMath>{"700 - nd = 300 \\implies nd = 400 \\quad (1)"}</BlockMath>

        <p>Составим таблицу для всех периодов платежей:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Месяц</th>
                <th className="p-2 font-bold text-center">Долг до %, тыс. руб.</th>
                <th className="p-2 font-bold text-center">Долг после %, тыс. руб.</th>
                <th className="p-2 font-bold text-center">Платёж, тыс. руб.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01S + d"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"S - d"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - d)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01(S - d) + d"}</InlineMath></td>
              </tr>
              <tr className="text-slate-400">
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">n</td>
                <td className="p-2"><InlineMath>{"S - (n-1)d"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - (n-1)d)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01(S - (n-1)d) + d"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">n + 1</td>
                <td className="p-2">300</td>
                <td className="p-2">303</td>
                <td className="p-2">303</td>
              </tr>
            </tbody>
          </table>
        </div>
                <p>
          В <InlineMath>{"(n + 1)"}</InlineMath>-й месяц остаток долга в 300 тыс. рублей увеличивается на 1% и сразу полностью погашается одним платежом:
        </p>
        <BlockMath>{"X_{n+1} = 1{,}01 \\cdot 300 = 303 \\text{ тыс. рублей}"}</BlockMath>
        
        <p>
          Найдем сумму платежей с 1-го по <InlineMath>{"n"}</InlineMath>-й месяц, используя формулу арифметической прогрессии:
        </p>

        
        <p>Найдем сумму платежей с 1-го по <InlineMath>{"n"}</InlineMath>-й месяц, используя формулу арифметической прогрессии:</p>
        <BlockMath>{"\\sum_{k=1}^{n} X_k = 0{,}01 \\cdot (S + (S - d) + \\dots + (S - (n-1)d)) + nd"}</BlockMath>
        <BlockMath>{"S + (S - d) + \\dots + (S - (n-1)d) = \\frac{S + (S - (n-1)d)}{2} \\cdot n = nS - \\frac{d \\cdot n(n - 1)}{2}"}</BlockMath>

        <p>Тогда совокупная сумма выплат за первые <InlineMath>{"n"}</InlineMath> месяцев составит:</p>
        <BlockMath>{"0{,}01 \\cdot \\left(nS - \\frac{d \\cdot n(n - 1)}{2}\\right) + nd = 0{,}01nS - 0{,}005dn(n - 1) + nd"}</BlockMath>

        <p>Подставим известные значения <InlineMath>{"S = 700"}</InlineMath> и <InlineMath>{"nd = 400"}</InlineMath> из уравнения (1):</p>
        <BlockMath>{"0{,}01n \\cdot 700 - 0{,}005 \\cdot 400 \\cdot (n - 1) + 400 = 7n - 2(n - 1) + 400 = 5n + 402"}</BlockMath>

        <p>Сложим этот результат с последним платежом для получения общей суммы выплат за весь срок кредитования:</p>
        <BlockMath>{"A = (5n + 402) + 303 = 5n + 705"}</BlockMath>

        <p>По условию задачи общая сумма выплат равна 755 тыс. рублей. Составим и решим итоговое линейное уравнение:</p>
        <BlockMath>{"5n + 705 = 755 \\iff 5n = 50 \\implies n = 10"}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"n = 10"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
    {
    id: 5,
    title: "Задача 5",
    mathA: "\\begin{array}{l} \\text{В июле некоторого года планируется взять кредит в банке на сумму 3} \\\\ \\text{млн рублей на некоторый срок (целое число лет). Условия его возврата таковы:} \\\\ \\quad \\bullet \\text{ каждый январь долг возрастает на 20\\% по сравнению с концом предыдущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить часть долга;} \\\\ \\quad \\bullet \\text{ в июле каждого года долг должен быть на одну и ту же сумму меньше долга на июль предыдущего года.} \\\\ \\text{Чему будет равна общая сумма выплат после полного погашения кредита, если наи-} \\\\ \\text{меньший годовой платёж составит 0,24 млн рублей? Считайте, что округления при} \\\\ \\text{вычислении платежей не производятся.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>
          Пусть <InlineMath>{"S = 3"}</InlineMath> (млн. рублей) — сумма кредита, <InlineMath>{"A"}</InlineMath> — общая сумма выплат(млн. рублей), <InlineMath>{"n"}</InlineMath> — число лет, на которое взят кредит, <InlineMath>{"d = \\frac{S}{n}"}</InlineMath> — сумма, на которую ежегодно уменьшается долг (млн. рублей). <InlineMath>{"D_{k-1}"}</InlineMath> — долг на июль предыдущего года, <InlineMath>{"X_k"}</InlineMath> — платёж за <InlineMath>{"k"}</InlineMath>-й год.
        </p>
        <p>Составим таблицу для k-го года:</p>

        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг до начисления % <InlineMath>{"(D_{k-1})"}</InlineMath></th>
                <th className="p-2 font-bold text-center">Долг после начисления %</th>
                <th className="p-2 font-bold text-center">Платёж, млн. рублей <InlineMath>{"(X_k)"}</InlineMath></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">k</td>
                <td className="p-2"><InlineMath>{"S - (k-1)d"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2(S - (k-1)d)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}2(S - (k-1)d) + d"}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>
          Так как <InlineMath>{"D_{k-1} = S - (k-1)d"}</InlineMath> убывает с ростом <InlineMath>{"k"}</InlineMath>, платёж <InlineMath>{"X_k"}</InlineMath> также убывает <InlineMath>{"\\implies"}</InlineMath> наименьшим является последний платёж при <InlineMath>{"k = n"}</InlineMath>:
        </p>
        <BlockMath>{"X_n = 0{,}2D_{n-1} + d."}</BlockMath>
        
        <p>
          Так как <InlineMath>{"D_n = 0"}</InlineMath>, то <InlineMath>{"D_{n-1} = d"}</InlineMath>. Тогда:
        </p>
        <BlockMath>{"X_n = 0{,}2d + d = 1{,}2d."}</BlockMath>

        <p>По условию <InlineMath>{"X_n = 0{,}24"}</InlineMath>, откуда:</p>
        <BlockMath>{"1{,}2d = 0{,}24 \\implies d = 0{,}2."}</BlockMath>

        <p>
          Так как <InlineMath>{"nd = S = 3"}</InlineMath>, найдём число лет:
        </p>
        <BlockMath>{"n = \\frac{S}{d} = \\frac{3}{0{,}2} = 15."}</BlockMath>
        <p>Общая сумма всех выплат:</p>
        <BlockMath>{"A = \\sum_{k=1}^{n} X_k = 0{,}2(D_0 + D_1 + \\dots + D_{n-1}) + nd."}</BlockMath>

        <p>По формуле арифметической прогрессии:</p>
        <BlockMath>{"D_0 + D_1 + \\dots + D_{n-1} = \\frac{D_0 + D_{n-1}}{2} \\cdot n = \\frac{S + d}{2} \\cdot n = \\frac{3 + 0{,}2}{2} \\cdot 15 = \\frac{3{,}2}{2} \\cdot 15 = 1{,}6 \\cdot 15 = 24."}</BlockMath>

        <p>Тогда:</p>
        <BlockMath>{"A = 0{,}2 \\cdot 24 + 3 = 4{,}8 + 3 = 7{,}8."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"7{,}8 \\text{ млн рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
        {
     
    id: 6,
    title: "Задача 6",
    mathA: "\\begin{aligned} & \\text{В июле 2019 года планируется взять кредит в банке на три года в размере } S \\text{ млн рублей, где } S \\text{ — целое число.} \\\\ & \\text{Условия его возврата таковы:} \\\\ & \\bullet \\text{ каждый январь долг увеличивается на 30\\% по сравнению с концом предыдущего года;} \\\\ & \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить одним платежом часть долга;} \\\\ & \\bullet \\text{ в июле каждого года долг должен составлять часть кредита в соответствии с таблицей:} \\\\ & \\begin{array}{|c|c|c|c|c|} \\hline \\text{Месяц и год} & \\text{Июль 2019} & \\text{Июль 2020} & \\text{Июль 2021} & \\text{Июль 2022} \\\\ \\hline \\text{Долг (млн. руб.)} & S & 0{,}7S & 0{,}3S & 0 \\\\ \\hline \\end{array} \\\\ & \\text{Найдите наименьшее } S \\text{, при котором каждая из выплат будет больше 3 млн руб.} \\end{aligned}",
    mathB: "",




    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита, млн. рублей;</p>
          <p>• <InlineMath>{"X_1, X_2, X_3"}</InlineMath> — платежи в 1-й, 2-й и 3-й год соответственно, млн. рублей.</p>
        </div>
        <p>

        </p>
        <p>Платёж 1-го года (с июля 2019 по июль 2020):</p>
        <BlockMath>{"X_1 = 1{,}3S - 0{,}7S = 0{,}6S."}</BlockMath>

        <p>Платёж 2-го года (с июля 2020 по июль 2021):</p>
        <BlockMath>{"X_2 = 1{,}3 \\cdot 0{,}7S - 0{,}3S = 0{,}91S - 0{,}3S = 0{,}61S."}</BlockMath>

        <p>Платёж 3-го года (с июля 2021 по июль 2022):</p>
        <BlockMath>{"X_3 = 1{,}3 \\cdot 0{,}3S - 0 = 0{,}39S."}</BlockMath>
        <p>По условию каждый платёж должен быть больше 3 млн рублей:</p>
        <BlockMath>{"\\begin{aligned} 0{,}6S > 3 &\\implies S > 5, \\\\ 0{,}61S > 3 &\\implies S > 4{,}92, \\\\ 0{,}39S > 3 &\\implies S > 7{,}69. \\end{aligned}"}</BlockMath>

        <p>
          Наиболее строгое ограничение — последнее, значит <InlineMath>{"S > 7{,}69"}</InlineMath>. Так как <InlineMath>{"S"}</InlineMath> — целое число, наименьшее подходящее значение:
        </p>
        <BlockMath>{"S = 8."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"8."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Задача 7",
    mathA: "\\begin{array}{l} \\text{В июле планируется взять кредит в банке на сумму 6 млн рублей на срок 15 лет. Условия его возврата таковы:} \\\\ \\quad \\bullet \\text{ каждый январь долг возрастает на } r\\% \\text{ по сравнению с концом предыдущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить часть долга;} \\\\ \\quad \\bullet \\text{ в июле каждого года долг должен быть на одну и ту же сумму меньше долга на июль предыдущего года.} \\\\ \\text{Найдите } r \\text{, если известно, что наибольший платёж по кредиту составит не более 1,9} \\\\ \\text{млн рублей, а наименьший — не менее 0,5 млн рублей.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S = 6"}</InlineMath> — сумма кредита, млн. рублей;</p>
          <p>• <InlineMath>{"n = 15"}</InlineMath> — число лет;</p>
          <p>• <InlineMath>{"r\\%"}</InlineMath> — искомая годовая процентная ставка.</p>
        </div>
        <p>
          Так как долг ежегодно уменьшается на одну и ту же сумму, за 15 лет он уменьшается с 6 до 0, то есть каждый год долг на июль уменьшается на <InlineMath>{"\\frac{6}{15} = 0{,}4"}</InlineMath> млн рублей.
        </p>
        <p>Составим таблицу:</p>

        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг до начисления %</th>
                <th className="p-2 font-bold text-center">Долг после начисления %</th>
                <th className="p-2 font-bold text-center">Платёж</th>
                <th className="p-2 font-bold text-center">Долг после платежа</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2">6</td>
                <td className="p-2"><InlineMath>{"6\\left(1 + \\frac{r}{100}\\right)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}4 + 0{,}06r"}</InlineMath></td>
                <td className="p-2">5,6</td>
              </tr>
              <tr className="text-slate-400">
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">15</td>
                <td className="p-2">0,4</td>
                <td className="p-2"><InlineMath>{"0{,}4\\left(1 + \\frac{r}{100}\\right)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}4\\left(1 + \\frac{r}{100}\\right)"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Составим уравнения исходя из данных таблицы и условий задачи.</p>
        <p>
          Так как долг на июль убывает с каждым годом, наибольший долг перед начислением процентов — в первый год, поэтому наибольший платёж:
        </p>
        <BlockMath>{"0{,}4 + 0{,}06x"}</BlockMath>

        <p>Наименьший долг перед начислением процентов — в последний, 15-й год, поэтому наименьший платёж:</p>
        <BlockMath>{"0{,}4 + 0{,}004x."}</BlockMath>

        <p>По условию:</p>
        <BlockMath>{"0{,}4 + 0{,}06x \\le 1{,}9 \\implies 0{,}06x \\le 1{,}5 \\implies x \\le 25."}</BlockMath>
        <BlockMath>{"0{,}4 + 0{,}004x \\ge 0{,}5 \\implies 0{,}004x \\ge 0{,}1 \\implies x \\ge 25."}</BlockMath>

        <p>Из двух неравенств получаем:</p>
        <BlockMath>{"x = 25."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"r = 25."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Задача 8",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года планируется взять кредит в банке на пять лет в размере } S \\text{ тыс. рублей.} \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\text{Условия его возврата таковы:} \\\\ \\quad \\bullet \\text{ каждый январь долг возрастает на 20\\% по сравнению с концом предыдущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить часть долга;} \\\\ \\quad \\bullet \\text{ в июле 2027, 2028 и 2029 годов долг остаётся равным } S \\text{ тысяч рублей;} \\\\ \\quad \\bullet \\text{ выплаты в 2030 и 2031 годах равны по 360 тысяч рублей;} \\\\ \\quad \\bullet \\text{ к июлю 2031 года долг будет выплачен полностью.} \\\\ \\text{Найдите общую сумму выплат за пять лет.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита, тыс. рублей;</p>
          <p>• <InlineMath>{"x_{2027}, x_{2028}, x_{2029}"}</InlineMath> — платежи в 2027, 2028 и 2029 годах, тыс. рублей;</p>
          <p>• <InlineMath>{"A"}</InlineMath> — общая сумма всех выплат за пять лет, тыс. рублей.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг на июль пред. года</th>
                <th className="p-2 font-bold text-center">Долг после роста</th>
                <th className="p-2 font-bold text-center">Долг на июль этого года</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2027</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2028</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2030</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2S - 360"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2031</td>
                <td className="p-2"><InlineMath>{"1{,}2S - 360"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2(1{,}2S - 360)"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>
          Так как в 2027, 2028, 2029 годах долг остаётся равным <InlineMath>{"S"}</InlineMath>, платёж в эти годы равен разности между «Долг после роста» и «Долг на июль этого года»:
        </p>
        <BlockMath>{"x_{2027} = x_{2028} = x_{2029} = 1{,}2S - S = 0{,}2S."}</BlockMath>
        <p>В 2031 году долг полностью гасится, поэтому:</p>
        <BlockMath>{"1{,}2(1{,}2S - 360) = 360."}</BlockMath>

        <p>Решим уравнение:</p>
        <BlockMath>{"1{,}44S - 432 = 360,"}</BlockMath>
        <BlockMath>{"1{,}44S = 792,"}</BlockMath>
        <BlockMath>{"S = \\frac{792}{1{,}44} = 550."}</BlockMath>

        <p>Общая сумма всех выплат за пять лет:</p>
        <BlockMath>{"A = x_{2027} + x_{2028} + x_{2029} + 360 + 360 = 3 \\cdot 0{,}2S + 720 = 0{,}6 \\cdot 550 + 720 = 330 + 720 = 1050."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"A = 1050 \\text{ тыс. рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "Задача 9",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года планируется взять кредит в банке на пять лет в размере 220} \\\\ \\text{тысяч рублей. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг возрастает на } r\\% \\text{ по сравнению с концом предыдущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить одним платежом часть долга;} \\\\ \\quad \\bullet \\text{ в июле 2027, 2028 и 2029 годов долг остаётся равным 220 тысяч рублей;} \\\\ \\quad \\bullet \\text{ выплаты в 2030 и 2031 годах равны;} \\\\ \\quad \\bullet \\text{ к июлю 2031 года долг будет выплачен полностью.} \\\\ \\text{Найдите } r\\text{, если известно, что долг будет выплачен полностью и общий размер вы-} \\\\ \\text{плат составит 420 тысяч рублей.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"p = 1 + \\frac{r}{100}"}</InlineMath> — во сколько раз увеличивается долг при начислении процентов;</p>
          <p>• <InlineMath>{"X"}</InlineMath> — равные между собой платежи в 2030 и 2031 годах, тыс. рублей.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг на июль пред. года</th>
                <th className="p-2 font-bold text-center">Долг после роста</th>
                <th className="p-2 font-bold text-center">Долг на июль этого года (после платежа)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2027</td>
                <td className="p-2">220</td>
                <td className="p-2"><InlineMath>{"220p"}</InlineMath></td>
                <td className="p-2">220</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2028</td>
                <td className="p-2">220</td>
                <td className="p-2"><InlineMath>{"220p"}</InlineMath></td>
                <td className="p-2">220</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2">220</td>
                <td className="p-2"><InlineMath>{"220p"}</InlineMath></td>
                <td className="p-2">220</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2030</td>
                <td className="p-2">220</td>
                <td className="p-2"><InlineMath>{"220p"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"220p - X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2031</td>
                <td className="p-2"><InlineMath>{"220p - X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"p(220p - X)"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Так как в 2027, 2028, 2029 годах долг остаётся равным 220, платёж в эти годы покрывает только проценты:
        </p>
        <BlockMath>{"220p - 220 = 220(p - 1)."}</BlockMath>

        <p>Так как в 2031 году долг полностью гасится последним платежом X:</p>
        <BlockMath>{"p(220p - X) = X."}</BlockMath>
        <p>Составим уравнения исходя из данных таблицы и условий задачи.</p>
        <p>Из последнего равенства:</p>
        <BlockMath>{"220p^2 - pX = X \\implies X = \\frac{220p^2}{p + 1}."}</BlockMath>

        <p>Сумма всех выплат:</p>
        <BlockMath>{"3 \\cdot 220(p - 1) + 2X = 420."}</BlockMath>

        <p>Подставим X:</p>
        <BlockMath>{"660(p - 1) + \\frac{440p^2}{p + 1} = 420."}</BlockMath>

        <p>Умножим обе части на (p + 1):</p>
        <BlockMath>{"660(p^2 - 1) + 440p^2 = 420(p + 1),"}</BlockMath>
        <BlockMath>{"1100p^2 - 420p - 1080 = 0."}</BlockMath>

        <p>Разделим на 20:</p>
        <BlockMath>{"55p^2 - 21p - 54 = 0."}</BlockMath>

        <p>Дискриминант:</p>
        <BlockMath>{"D = 21^2 + 4 \\cdot 55 \\cdot 54 = 441 + 11\\,880 = 12\\,321 = 111^2."}</BlockMath>
        <BlockMath>{"p = \\frac{21 + 111}{110} = \\frac{132}{110} = 1{,}2."}</BlockMath>

        <p>Так как <InlineMath>{"p = 1{,}2 = 1 + \\frac{r}{100}"}</InlineMath>:</p>
        <BlockMath>{"r = 20."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"r = 20."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "Задача 10",
    mathA: "\\begin{array}{l} \\text{В июле 2025 года планируется взять кредит на 600 тыс. рублей. Условия} \\\\ \\text{его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ в январе 2026, 2027 и 2028 годов долг возрастает на } r\\% \\text{ по сравнению с концом} \\\\ \\quad \\quad \\text{предыдущего года;} \\\\ \\quad \\bullet \\text{ в январе 2029, 2030 и 2031 годов долг возрастает на 15\\% по сравнению с концом} \\\\ \\quad \\quad \\text{предыдущего года;} \\\\ \\quad \\bullet \\text{ в июле каждого года долг должен быть на одну и ту же величину меньше долга} \\\\ \\quad \\quad \\text{на июль предыдущего года;} \\\\ \\quad \\bullet \\text{ к июлю 2031 года долг должен быть полностью погашен.} \\\\ \\text{Чему равно } r\\text{, если общая сумма выплат составит 930 тыс. рублей?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"p_1 = 1 + \\frac{r}{100}"}</InlineMath> — множитель роста долга в январе 2026–2028 годов;</p>
          <p>• <InlineMath>{"p_2 = 1{,}15"}</InlineMath> — множитель роста долга в январе 2029–2031 годов.</p>
        </div>
        
        <p>
          Заметим, что долг на июль уменьшается с каждым годом на одну и ту же сумму <InlineMath>{"\\frac{600}{6} = 100"}</InlineMath>, следовательно значения долга образуют арифметическую прогрессию.
        </p>
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг до %</th>
                <th className="p-2 font-bold text-center">Долг после %</th>
                <th className="p-2 font-bold text-center">Долг на июль этого года</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2026</td>
                <td className="p-2">600</td>
                <td className="p-2"><InlineMath>{"600p_1"}</InlineMath></td>
                <td className="p-2">500</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2027</td>
                <td className="p-2">500</td>
                <td className="p-2"><InlineMath>{"500p_1"}</InlineMath></td>
                <td className="p-2">400</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2028</td>
                <td className="p-2">400</td>
                <td className="p-2"><InlineMath>{"400p_1"}</InlineMath></td>
                <td className="p-2">300</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2">300</td>
                <td className="p-2">345</td>
                <td className="p-2">200</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2030</td>
                <td className="p-2">200</td>
                <td className="p-2">230</td>
                <td className="p-2">100</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2031</td>
                <td className="p-2">100</td>
                <td className="p-2">115</td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Платежи 2029–2031 годов:</p>
        <BlockMath>{"(345 - 200) + (230 - 100) + (115 - 0) = 145 + 130 + 115 = 390."}</BlockMath>
        <p>Тогда сумма платежей 2026–2028 годов:</p>
        <BlockMath>{"930 - 390 = 540."}</BlockMath>

        <p>С другой стороны, эта сумма равна:</p>
        <BlockMath>{"(600p_1 - 500) + (500p_1 - 400) + (400p_1 - 300) = 1500p_1 - 1200."}</BlockMath>

        <p>Получаем уравнение:</p>
        <BlockMath>{"1500p_1 - 1200 = 540,"}</BlockMath>
        <BlockMath>{"1500p_1 = 1740,"}</BlockMath>
        <BlockMath>{"p_1 = 1{,}16."}</BlockMath>

        <p>Так как <InlineMath>{"p_1 = 1 + \\frac{r}{100}"}</InlineMath>:</p>
        <BlockMath>{"r = 16."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"r = 16."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "Задача 11",
    mathA: "\\begin{array}{l} \\text{В июле 2025 года планируется взять кредит на 8 лет. Условия его} \\\\ \\text{возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ в январе 2026, 2027, 2028 и 2029 годов долг возрастает на 15\\% по сравнению с} \\\\ \\quad \\quad \\text{концом предыдущего года;} \\\\ \\quad \\bullet \\text{ в январе 2030, 2031, 2032 и 2033 годов долг возрастает на 11\\% по сравнению с концом} \\\\ \\quad \\quad \\text{предыдущего года;} \\\\ \\quad \\bullet \\text{ в июле каждого года долг должен быть на одну и ту же величину меньше долга} \\\\ \\quad \\quad \\text{на июль предыдущего года;} \\\\ \\quad \\bullet \\text{ к июлю 2033 года долг должен быть полностью погашен.} \\\\ \\text{Какую сумму планируется взять в кредит, если общая сумма выплат составит 650} \\\\ \\text{тыс. рублей?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита, тыс. рублей;</p>
          <p>• <InlineMath>{"p_1 = 1{,}15"}</InlineMath> — множитель роста долга в январе 2026–2029 годов;</p>
          <p>• <InlineMath>{"p_2 = 1{,}11"}</InlineMath> — множитель роста долга в январе 2030–2033 годов.</p>
        </div>
        
        <p>
          Заметим, что долг на июль уменьшается с каждым годом на одну и ту же сумму <InlineMath>{"\\frac{S}{8}"}</InlineMath>, следовательно значения долга образуют арифметическую прогрессию. Составим таблицу:
        </p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг на июль пред. года</th>
                <th className="p-2 font-bold text-center">Ставка</th>
                <th className="p-2 font-bold text-center">Долг на июль этого года</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2026</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2">15%</td>
                <td className="p-2"><InlineMath>{"\\frac{7S}{8}"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2027</td>
                <td className="p-2"><InlineMath>{"\\frac{7S}{8}"}</InlineMath></td>
                <td className="p-2">15%</td>
                <td className="p-2"><InlineMath>{"\\frac{6S}{8}"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2028</td>
                <td className="p-2"><InlineMath>{"\\frac{6S}{8}"}</InlineMath></td>
                <td className="p-2">15%</td>
                <td className="p-2"><InlineMath>{"\\frac{5S}{8}"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2"><InlineMath>{"\\frac{5S}{8}"}</InlineMath></td>
                <td className="p-2">15%</td>
                <td className="p-2"><InlineMath>{"\\frac{4S}{8}"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2030</td>
                <td className="p-2"><InlineMath>{"\\frac{4S}{8}"}</InlineMath></td>
                <td className="p-2">11%</td>
                <td className="p-2"><InlineMath>{"\\frac{3S}{8}"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2031</td>
                <td className="p-2"><InlineMath>{"\\frac{3S}{8}"}</InlineMath></td>
                <td className="p-2">11%</td>
                <td className="p-2"><InlineMath>{"\\frac{2S}{8}"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2032</td>
                <td className="p-2"><InlineMath>{"\\frac{2S}{8}"}</InlineMath></td>
                <td className="p-2">11%</td>
                <td className="p-2"><InlineMath>{"\\frac{S}{8}"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2033</td>
                <td className="p-2"><InlineMath>{"\\frac{S}{8}"}</InlineMath></td>
                <td className="p-2">11%</td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Каждый платёж равен разности между долгом после роста (по соответствующей ставке) и долгом на июль этого года:</p>
        <BlockMath>{"\\text{Платёж 2026--2029} = p_1 \\left(S + \\frac{7S}{8} + \\frac{6S}{8} + \\frac{5S}{8}\\right) - \\left(\\frac{7S}{8} + \\frac{6S}{8} + \\frac{5S}{8} + \\frac{4S}{8}\\right) = p_1 \\cdot 3{,}25S - 2{,}75S."}</BlockMath>
        
        <p>Подставим <InlineMath>{"p_1 = 1{,}15"}</InlineMath>:</p>
        <BlockMath>{"1{,}15 \\cdot 3{,}25S - 2{,}75S = 3{,}7375S - 2{,}75S = 0{,}9875S."}</BlockMath>

        <BlockMath>{"\\text{Платёж 2030--2033} = p_2 \\left(\\frac{4S}{8} + \\frac{3S}{8} + \\frac{2S}{8} + \\frac{S}{8}\\right) - \\left(\\frac{3S}{8} + \\frac{2S}{8} + \\frac{S}{8} + 0\\right) = p_2 \\cdot 1{,}25S - 0{,}75S."}</BlockMath>

        <p>Подставим <InlineMath>{"p_2 = 1{,}11"}</InlineMath>:</p>
        <BlockMath>{"1{,}11 \\cdot 1{,}25S - 0{,}75S = 1{,}3875S - 0{,}75S = 0{,}6375S."}</BlockMath>

        <p>Общая сумма всех выплат:</p>
        <BlockMath>{"0{,}9875S + 0{,}6375S = 1{,}625S."}</BlockMath>

        <p>По условию задачи:</p>
        <BlockMath>{"1{,}625S = 650,"}</BlockMath>
        <BlockMath>{"S = \\frac{650}{1{,}625} = 400."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"400 \\text{ тыс. рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: "Задача 12",
    mathA: "\\begin{array}{l} \\text{В июле 2016 года планируется взять кредит в банке на пять лет на сумму 1100} \\\\ \\text{тыс. рублей. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг будет возрастать на 20\\% по сравнению с концом преды-} \\\\ \\quad \\quad \\text{дущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить одним платежом часть} \\\\ \\quad \\quad \\text{долга;} \\\\ \\quad \\bullet \\text{ в 2017, 2018 и 2019 годах сумма долга не изменяется;} \\\\ \\quad \\bullet \\text{ платежи в 2020 и в 2021 годах должны быть равны;} \\\\ \\quad \\bullet \\text{ к июлю 2021 года долг должен быть выплачен полностью.} \\\\ \\text{На сколько рублей будут отличаться первый и последний платежи?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"p = 1{,}2"}</InlineMath> — множитель роста долга при начислении процентов;</p>
          <p>• <InlineMath>{"X"}</InlineMath> — равные между собой платежи в 2020 и 2021 годах, тыс. рублей.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг на июль пред. года</th>
                <th className="p-2 font-bold text-center">Долг после роста</th>
                <th className="p-2 font-bold text-center">Долг на июль этого года</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2017</td>
                <td className="p-2">1100</td>
                <td className="p-2">1320</td>
                <td className="p-2">1100</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2018</td>
                <td className="p-2">1100</td>
                <td className="p-2">1320</td>
                <td className="p-2">1100</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2019</td>
                <td className="p-2">1100</td>
                <td className="p-2">1320</td>
                <td className="p-2">1100</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2020</td>
                <td className="p-2">1100</td>
                <td className="p-2">1320</td>
                <td className="p-2"><InlineMath>{"1320 - X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2021</td>
                <td className="p-2"><InlineMath>{"1320 - X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2(1320 - X)"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>
          Так как в 2017–2019 годах долг остаётся неизменным, платёж в эти годы равен только начисленным процентам:
        </p>
        <BlockMath>{"X_{1,2,3} = 1320 - 1100 = 220."}</BlockMath>
        <p>В 2021 году долг полностью гасится последним платежом X:</p>
        <BlockMath>{"1{,}2(1320 - X) = X."}</BlockMath>

        <p>Решим уравнение:</p>
        <BlockMath>{"1584 - 1{,}2X = X,"}</BlockMath>
        <BlockMath>{"1584 = 2{,}2X,"}</BlockMath>
        <BlockMath>{"X = \\frac{1584}{2{,}2} = 720."}</BlockMath>

        <p>Найдём разность между первым платежом (220 тыс. рублей) и последним платежом (720 тыс. рублей):</p>
        <BlockMath>{"720 - 220 = 500."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"500\\,000 \\text{ рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: "Задача 13",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года планируется взять кредит на три года. Условия его} \\\\ \\text{возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг будет возрастать на 30\\% по сравнению с концом преды-} \\\\ \\quad \\quad \\text{дущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить одним платежом часть} \\\\ \\quad \\quad \\text{долга;} \\\\ \\quad \\bullet \\text{ платежи в 2027 и в 2028 годах должны быть по 300 тыс. рублей;} \\\\ \\quad \\bullet \\text{ к июлю 2029 года долг должен быть выплачен полностью.} \\\\ \\text{Известно, что платёж в 2029 году будет равен 860,6 тыс. рублей. Какую сумму пла-} \\\\ \\text{нируется взять в кредит?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита, тыс. рублей;</p>
          <p>• <InlineMath>{"p = 1{,}3"}</InlineMath> — множитель роста долга при начислении процентов.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг на июль пред. года</th>
                <th className="p-2 font-bold text-center">Долг после роста</th>
                <th className="p-2 font-bold text-center">Платёж</th>
                <th className="p-2 font-bold text-center">Долг на июль этого года</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2027</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}3S"}</InlineMath></td>
                <td className="p-2">300</td>
                <td className="p-2"><InlineMath>{"1{,}3S - 300"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2028</td>
                <td className="p-2"><InlineMath>{"1{,}3S - 300"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}3(1{,}3S - 300)"}</InlineMath></td>
                <td className="p-2">300</td>
                <td className="p-2"><InlineMath>{"1{,}69S - 390 - 300"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2"><InlineMath>{"1{,}69S - 690"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1.3(1{,}69S - 690)"}</InlineMath></td>
                <td className="p-2">860,6</td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Так как в 2029 году долг полностью гасится последним платежом:</p>
        <BlockMath>{"1.3(1{,}69S - 690) = 860{,}6."}</BlockMath>

        <p>Решим уравнение:</p>
        <BlockMath>{"1{,}69S - 690 = \\frac{860{,}6}{1{,}3} = 662,"}</BlockMath>
        <BlockMath>{"1{,}69S = 1352,"}</BlockMath>
        <BlockMath>{"S = \\frac{1352}{1{,}69} = 800."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"800 \\text{ тыс. рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 14,
    title: "Задача 14 (ЕГЭ 2023 года)",
    mathA: "\\begin{array}{l} \\text{В июле 2023 года планируется взять кредит в банке на некоторую} \\\\ \\text{сумму. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг увеличивается на 25\\% по сравнению с концом предыду-} \\\\ \\quad \\quad \\text{щего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить одним платежом часть} \\\\ \\quad \\quad \\text{долга.} \\\\ \\text{Сколько рублей будет выплачено банку, если известно, что кредит был полностью} \\\\ \\text{погашен тремя равными платежами и общая сумма выплат на 104 800 рублей больше} \\\\ \\text{суммы, взятой в кредит?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита, рублей;</p>
          <p>• <InlineMath>{"x"}</InlineMath> — величина каждого из трёх равных платежей, рублей;</p>
          <p>• <InlineMath>{"p = 1 + \\frac{25}{100} = \\frac{5}{4}"}</InlineMath> — множитель роста долга при начислении процентов.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг до начисления %</th>
                <th className="p-2 font-bold text-center">Долг после начисления %</th>
                <th className="p-2 font-bold text-center">Платёж</th>
                <th className="p-2 font-bold text-center">Долг после платежа</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"\\frac{5}{4}S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"x"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"\\frac{5}{4}S - x"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"\\frac{5}{4}S - x"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"\\frac{5}{4}\\left(\\frac{5}{4}S - x\\right)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"x"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"\\frac{25}{16}S - \\frac{5}{4}x - x"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3</td>
                <td className="p-2"><InlineMath>{"\\frac{25}{16}S - \\frac{9}{4}x"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"\\frac{5}{4}\\left(\\frac{25}{16}S - \\frac{9}{4}x\\right)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"x"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнения исходя из данных таблицы и условий задачи.</p>
        <p>Долг после третьего платежа равен нулю:</p>
        <BlockMath>{"\\frac{5}{4}\\left(\\frac{25}{16}S - \\frac{9}{4}x\\right) = x,"}</BlockMath>
        <BlockMath>{"\\frac{125}{64}S - \\frac{45}{16}x = x,"}</BlockMath>
        <BlockMath>{"\\frac{125}{64}S = x + \\frac{45}{16}x = \\frac{16x + 45x}{16} = \\frac{61x}{16}."}</BlockMath>
        
        <p>Отсюда:</p>
        <BlockMath>{"x = \\frac{125}{64}S \\cdot \\frac{16}{61} = \\frac{125S}{4 \\cdot 61} = \\frac{125S}{244}. \\quad (1)"}</BlockMath>
        <p>По условию сумма всех трёх выплат превосходит сумму кредита на 104 800 рублей:</p>
        <BlockMath>{"3x = S + 104\\,800. \\quad (2)"}</BlockMath>

        <p>Подставим (1) в (2):</p>
        <BlockMath>{"3 \\cdot \\frac{125S}{244} = S + 104\\,800,"}</BlockMath>
        <BlockMath>{"\\frac{375S}{244} = S + 104\\,800."}</BlockMath>

        <p>Умножим обе части на 244:</p>
        <BlockMath>{"375S = 244S + 244 \\cdot 104\\,800,"}</BlockMath>
        <BlockMath>{"131S = 244 \\cdot 104\\,800."}</BlockMath>

        <p>Тогда:</p>
        <BlockMath>{"S = \\frac{244 \\cdot 104\\,800}{131} = 244 \\cdot 800 = 195\\,200 \\quad (131 \\text{ --- простое число})"}</BlockMath>

        <p>Найдём общую сумму выплат:</p>
        <BlockMath>{"S + 104\\,800 = 195\\,200 + 104\\,800 = 300\\,000."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"300\\,000 \\text{ рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 15,
    title: "Задача 15",
    mathA: "\\begin{array}{l} \\text{Клиент вложил некоторую сумму под 10\\% годовых, начисляемых на} \\\\ \\text{вклад раз в год. Известно, что в конце первого года (после начисления процентов)} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\text{он снял со своего счета 10\\% от имеющейся на тот момент суммы, а в конце второго} \\\\ \\text{года (также после начисления процентов) он доложил на счет 10\\% от имеющейся} \\\\ \\text{суммы. Определите, в конце третьего года (после начисления процентов) увеличи- } \\\\ \\text{лась или уменьшилась сумма на счете после таких манипуляций по сравнению с} \\\\ \\text{первоначальным вкладом и на сколько процентов.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"A"}</InlineMath> — первоначальная сумма вклада;</p>
          <p>• <InlineMath>{"p = 1{,}1"}</InlineMath> — множитель роста вклада при начислении процентов.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Сумма до начисления %</th>
                <th className="p-2 font-bold text-center">Сумма после начисления %</th>
                <th className="p-2 font-bold text-center">Операция</th>
                <th className="p-2 font-bold text-center">Сумма после операции</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}1A"}</InlineMath></td>
                <td className="p-2">снятие 10%</td>
                <td className="p-2"><InlineMath>{"1{,}1A - 0.1 \\cdot 1{,}1A = 0{,}99A"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"0{,}99A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}1 \\cdot 0{,}99A = 1{,}089A"}</InlineMath></td>
                <td className="p-2">пополнение 10%</td>
                <td className="p-2"><InlineMath>{"1{,}089A + 0{,}1 \\cdot 1{,}089A = 1{,}1979A"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3</td>
                <td className="p-2"><InlineMath>{"1{,}1979A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}1 \\cdot 1{,}1979A = 1{,}31769A"}</InlineMath></td>
                <td className="p-2">нет</td>
                <td className="p-2"><InlineMath>{"1{,}31769A"}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим выражение исходя из данных таблицы и условий задачи.</p>
        <p>Сравним итоговую сумму (конец третьего года) с первоначальным вкладом A:</p>
        <BlockMath>{"1{,}31769A > A,"}</BlockMath>
        <p>то есть сумма увеличилась. Найдём, на сколько процентов:</p>
        <BlockMath>{"(1{,}31769 - 1) \\cdot 100\\% = 31{,}769\\%."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\text{сумма на счете увеличилась на } 31{,}769\\%."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 16,
    title: "Задача 16",
    mathA: "\\begin{array}{l} \\text{Владелец автосалона решил разделить свой капитал на 3 части и вло-} \\\\ \\text{жить их в 3 различных банка, причем годовые процентные ставки в этих банках} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\text{относятся как } 2 : 3 : 5\\text{. В каком отношении он должен разделить свой капитал, чтобы} \\\\ \\text{через год чистая прибыль от вкладов во всех трех банках была одинакова?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
                <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"2k, \\, 3k, \\, 5k"}</InlineMath> — годовые процентные ставки в первом, втором и третьем банках соответственно (в процентах), где <InlineMath>{"k"}</InlineMath> — некоторый коэффициент пропорциональности;</p>
          <p>Т.е.</p>
          <BlockMath>{"r_1 = 2k, \\quad r_2 = 3k, \\quad r_3 = 5k."}</BlockMath>
          <p>• <InlineMath>{"x_1, x_2, x_3"}</InlineMath> — суммы, вложенные в первый, второй и третий банки соответственно.</p>
        </div>

        
        <p>Прибыль от вклада в каждом банке равна произведению вложенной суммы на процентную ставку (в долях):</p>
        <BlockMath>{"\\text{Прибыль}_1 = x_1 \\cdot \\frac{2k}{100}, \\quad \\text{Прибыль}_2 = x_2 \\cdot \\frac{3k}{100}, \\quad \\text{Прибыль}_3 = x_3 \\cdot \\frac{5k}{100}."}</BlockMath>

        <p>Составим уравнения исходя из условий задачи.</p>
        <p>Так как прибыли равны:</p>
        <BlockMath>{"x_1 \\cdot 2k = x_2 \\cdot 3k = x_3 \\cdot 5k."}</BlockMath>
        
        <p>Сократим на k (так как <InlineMath>{"k \\neq 0"}</InlineMath>):</p>
        <BlockMath>{"2x_1 = 3x_2 = 5x_3."}</BlockMath>

        <p>Обозначим общее значение через t:</p>
        <p>Т.е.</p>
        <BlockMath>{"2x_1 = 3x_2 = 5x_3 = t"}</BlockMath>
        <BlockMath>{"x_1 = \\frac{t}{2}, \\quad x_2 = \\frac{t}{3}, \\quad x_3 = \\frac{t}{5}"}</BlockMath>

        <p>Приведём к общему знаменателю:</p>
        <BlockMath>{"x_1 = \\frac{15t}{30}, \\quad x_2 = \\frac{10t}{30}, \\quad x_3 = \\frac{6t}{30}."}</BlockMath>

        <p>Тогда отношение сумм:</p>
        <BlockMath>{"x_1 : x_2 : x_3 = 15 : 10 : 6."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"15 : 10 : 6."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 17,
    title: "Задача 17",
    mathA: "\\begin{array}{l} \\text{15-го декабря планируется взять кредит в банке на } S \\text{ тысяч рублей на} \\\\ \\text{(2n + 1) месяцев. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ 1-го числа каждого месяца долг возрастает на 1\\% по сравнению с концом преды-} \\\\ \\quad \\quad \\text{дущего;} \\\\ \\quad \\bullet \\text{ со 2-го по 14-е число каждого месяца необходимо выплатить часть долга;} \\\\ \\quad \\bullet \\text{ 15-го числа каждого месяца (с 1-го по } n \\text{-й) долг должен быть на 20 тысяч} \\\\ \\quad \\quad \\text{рублей меньше долга на 15-е число предыдущего месяца;} \\\\ \\quad \\bullet \\text{ 15-го числа каждого месяца (с } (n+1) \\text{-го по 2n-й) долг должен быть на 10 тысяч} \\\\ \\quad \\quad \\text{рублей меньше долга на 15-е число предыдущего месяца;} \\\\ \\quad \\bullet \\text{ 15-го числа 2n-го месяца долг составит 50 тысяч рублей;} \\\\ \\quad \\bullet \\text{ к 15-му числу } (2n + 1) \\text{-го месяца кредит должен быть полностью погашен.} \\\\ \\text{Найдите срок } (2n + 1) \\text{, на который был взят кредит, если известно, что общая сумма} \\\\ \\text{выплат после полного погашения кредита составит 212,5 тысяч рублей.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита, тыс. рублей;</p>
          <p>• <InlineMath>{"n"}</InlineMath> — число месяцев.</p>
        </div>

        <p className="font-semibold">Шаг 1. Найдём связь между S и n.</p>
        <p>
          С 1-го по <InlineMath>{"n"}</InlineMath>-й месяц долг уменьшается на 20 тыс. рублей за каждый месяц, то есть за <InlineMath>{"n"}</InlineMath> месяцев долг уменьшается на <InlineMath>{"20n"}</InlineMath>. Далее, с <InlineMath>{"(n+1)"}</InlineMath>-го по <InlineMath>{"2n"}</InlineMath>-й месяц долг уменьшается на 10 тыс. рублей за каждый месяц, то есть ещё на <InlineMath>{"10n"}</InlineMath>. По условию итоговый долг на 15-е число <InlineMath>{"2n"}</InlineMath>-го месяца равен 50:
        </p>
        <BlockMath>{"S - 20n - 10n = 50 \\implies S = 50 + 30n. \\quad (1)"}</BlockMath>

        <p className="font-semibold">Шаг 2. Составим таблицу для первого участка (месяцы 1,...,n).</p>
        <p>
          Заметим, что на этом участке долг убывает на постоянную величину 20, следовательно значения долга образуют арифметическую прогрессию.
        </p>
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Месяц</th>
                <th className="p-2 font-bold text-center">Долг до начисления %</th>
                <th className="p-2 font-bold text-center">Долг после начисления %</th>
                <th className="p-2 font-bold text-center">Платёж</th>
                <th className="p-2 font-bold text-center">Долг после платежа</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01S + 20"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S - 20"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"S - 20"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - 20)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01(S - 20) + 20"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S - 40"}</InlineMath></td>
              </tr>
              <tr className="text-slate-400">
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">n</td>
                <td className="p-2"><InlineMath>{"S - 20(n - 1)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - 20(n - 1))"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01(S - 20(n - 1)) + 20"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"S - 20n"}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="font-semibold">Шаг 3. Составим таблицу для второго участка (месяцы n+1,...,2n).</p>
        <p>
          Обозначим долг в начале второго участка <InlineMath>{"S - 20n"}</InlineMath> (значение из последнего столбца предыдущей таблицы, месяц <InlineMath>{"n"}</InlineMath>). На этом участке долг убывает на постоянную величину 10, следовательно значения долга снова образуют арифметическую прогрессию.
        </p>
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Месяц</th>
                <th className="p-2 font-bold text-center">Долг до начисления %</th>
                <th className="p-2 font-bold text-center">Долг после начисления %</th>
                <th className="p-2 font-bold text-center">Платёж</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">n + 1</td>
                <td className="p-2"><InlineMath>{"S - 20n"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - 20n)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01(S - 20n) + 10"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">n + 2</td>
                <td className="p-2"><InlineMath>{"S - 20n - 10"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01(S - 20n - 10)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01(S - 20n - 10) + 10"}</InlineMath></td>
              </tr>
              <tr className="text-slate-400">
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2n</td>
                <td className="p-2"><InlineMath>{"(S - 20n) - 10(n - 1)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01((S - 20n) - 10(n - 1))"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}01((S - 20n) - 10(n - 1)) + 10"}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Проверим последнюю строку: <InlineMath>{"(S - 20n) - 10n = S - 30n"}</InlineMath>, и по (1) <InlineMath>{"S - 30n = 50"}</InlineMath> — совпадает с условием, значит таблица построена верно.
        </p>

        <p className="font-semibold">Шаг 4. Последний, (2n + 1)-й месяц.</p>
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Месяц</th>
                <th className="p-2 font-bold text-center">Долг до начисления %</th>
                <th className="p-2 font-bold text-center">Долг после начисления %</th>
                <th className="p-2 font-bold text-center">Платёж</th>
                <th className="p-2 font-bold text-center">Долг после платежа</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2n + 1</td>
                <td className="p-2">50</td>
                <td className="p-2"><InlineMath>{"1{,}01 \\cdot 50"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}01 \\cdot 50 = 50{,}5"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          В этом месяце долг 50 тыс. рублей увеличивается на 1% и сразу полностью гасится единственным платежом.
        </p>

        <p className="font-semibold">Шаг 5. Составим уравнение исходя из данных таблиц и условий задачи.</p>
        <p>Сумма платежей первого участка (арифметическая прогрессия из n членов):</p>
        <BlockMath>{"(0{,}01S + 20) + (0{,}01(S - 20) + 20) + \\dots + (0{,}01(S - 20(n - 1)) + 20) ="}</BlockMath>
        <BlockMath>{"= 0{,}01 \\cdot \\frac{S + (S - 20(n - 1))}{2} \\cdot n + 20n = 0{,}01nS - 0{,}1n(n - 1) + 20n. \\quad (2)"}</BlockMath>

        <p>Сумма платежей второго участка:</p>
        <BlockMath>{"0{,}01 \\cdot \\frac{(S - 20n) + ((S - 20n) - 10(n - 1))}{2} \\cdot n + 10n = 0{,}01n(S - 20n) - 0{,}05n(n - 1) + 10n. \\quad (3)"}</BlockMath>

        <p>Последний платёж:</p>
        <BlockMath>{"X_{2n+1} = 50{,}5. \\quad (4)"}</BlockMath>

        <p>Раскроем скобки в (2):</p>
        <BlockMath>{"0{,}01nS - 0{,}1n(n - 1) + 20n = 0{,}01nS - 0{,}1n^2 + 20{,}1n."}</BlockMath>

        <p>Раскроем скобки в (3):</p>
        <BlockMath>{"0{,}01n(S - 20n) - 0{,}05n(n - 1) + 10n = 0{,}01nS - 0{,}25n^2 + 10{,}05n."}</BlockMath>
        <p>Сложим (2), (3) и (4), обозначив общую сумму выплат через A:</p>
        <BlockMath>{"A = 0{,}02nS - 0{,}35n^2 + 30{,}15n + 50{,}5."}</BlockMath>

        <p>Подставим S = 50 + 30n из (1):</p>
        <BlockMath>{"0{,}02n \\cdot (50 + 30n) = n + 0{,}6n^2."}</BlockMath>
        <p>Тогда:</p>
        <BlockMath>{"A = (n + 0{,}6n^2) - 0{,}35n^2 + 30{,}15n + 50{,}5 = 0{,}25n^2 + 31{,}15n + 50{,}5."}</BlockMath>

        <p>По условию A = 212,5:</p>
        <BlockMath>{"0{,}25n^2 + 31{,}15n + 50{,}5 = 212{,}5 \\implies 5n^2 + 623n - 3240 = 0."}</BlockMath>

        <p className="font-semibold">Шаг 6. Найдём дискриминант.</p>
        <BlockMath>{"D = 623^2 + 4 \\cdot 5 \\cdot 3240 = 388\\,129 + 64\\,800 = 452\\,929."}</BlockMath>

        <p className="font-semibold"></p>
        <p>Так как <InlineMath>{"670^2 = 448\\,900"}</InlineMath>, а <InlineMath>{"680^2 = 462\\,400"}</InlineMath>, проверим 673:</p>
        <BlockMath>{"673^2 = 448\\,900 + 4020 + 9 = 452\\,929 \\implies \\sqrt{D} = 673."}</BlockMath>

        <p className="font-semibold">Шаг 8. Найдём корни.</p>
        <BlockMath>{"n = \\frac{-623 \\pm 673}{10} \\implies n_1 = 5, \\quad n_2 = -129{,}6."}</BlockMath>
        <p>Отрицательный корень не подходит. Найдём срок кредита:</p>
        <BlockMath>{"2n + 1 = 2 \\cdot 5 + 1 = 11."}</BlockMath>

        <p className="font-semibold">Проверка.</p>
        <p>При n = 5: <InlineMath>{"S = 200"}</InlineMath>.</p>
        <p>Сумма выплат: <InlineMath>{"108 + 54 + 50{,}5 = 212{,}5"}</InlineMath> — совпадает с условием.</p>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"11 \\text{ месяцев.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 18,
    title: "Задача 18",
    mathA: "\\begin{array}{l} \\text{В июле 2028 года планируется взять кредит в банке на 16 млн рублей} \\\\ \\text{на 3 года. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг увеличивается на } r\\% \\text{ по сравнению с концом предыдущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить часть долга;} \\\\ \\quad \\bullet \\text{ в июле 2029 и 2030 годов долг должен быть на 30\\% меньше долга на июль} \\\\ \\quad \\quad \\text{предыдущего года;} \\\\ \\quad \\bullet \\text{ в июле 2031 года долг должен быть полностью погашен.} \\\\ \\text{Известно, что общая сумма выплат по кредиту составила 21,256 млн рублей. Найдите } r. \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"p = 1 + \\frac{r}{100}"}</InlineMath> — множитель роста долга при начислении процентов.</p>
        </div>
        <p>
          Здесь долг уменьшается не на постоянную величину, а на постоянную долю (30%), поэтому арифметическая прогрессия не применяется — посчитаем каждый год отдельно.
        </p>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг на июль пред. года</th>
                <th className="p-2 font-bold text-center">Долг на июль этого года</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2">16</td>
                <td className="p-2"><InlineMath>{"0{,}7 \\cdot 16 = 11{,}2"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2030</td>
                <td className="p-2">11,2</td>
                <td className="p-2"><InlineMath>{"0{,}7 \\cdot 11{,}2 = 7{,}84"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2031</td>
                <td className="p-2">7,84</td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Каждый платёж равен разности между долгом после роста в январе и долгом на июль этого года:</p>
        <BlockMath>{"\\text{Total} = (p \\cdot 16 - 11{,}2) + (p \\cdot 11{,}2 - 7{,}84) + (p \\cdot 7{,}84 - 0)."}</BlockMath>

        <p>Упростим:</p>
        <BlockMath>{"\\text{Total} = p(16 + 11{,}2 + 7{,}84) - (11{,}2 + 7{,}84) = 35{,}04p - 19{,}04."}</BlockMath>

        <p>По условию Total = 21,256:</p>
        <BlockMath>{"35{,}04p - 19{,}04 = 21{,}256,"}</BlockMath>
        <BlockMath>{"35{,}04p = 40{,}296,"}</BlockMath>
        <BlockMath>{"p = \\frac{40{,}296}{35{,}04} = 1{,}15."}</BlockMath>

        <p>Так как <InlineMath>{"p = 1{,}15 = 1 + \\frac{r}{100}"}</InlineMath>:</p>
        <BlockMath>{"r = 15."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"r = 15."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
    {
    id: 19,
    title: "Задача 19",
    mathA: "\\begin{array}{l} \\text{15 января 2027 года планируется взять кредит в банке на 5 лет. Условия} \\\\ \\text{его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ 1 января каждого года долг увеличивается на 12\\% по сравнению с концом} \\\\ \\quad \\quad \\text{предыдущего года;} \\\\ \\quad \\bullet \\text{ со 2 по 14 января каждого года необходимо внести один платёж;} \\\\ \\quad \\bullet \\text{ 15 января 2028, 2029, 2031 и 2032 годов долг должен уменьшаться на одну и ту} \\\\ \\quad \\quad \\text{же сумму по сравнению с долгом на 15 января предыдущего года;} \\\\ \\quad \\bullet \\text{ 15 января 2030 года, то есть после третьего платежа, долг должен стать на 50\\%} \\\\ \\quad \\quad \\text{меньше, чем 15 января 2029 года;} \\\\ \\quad \\bullet \\text{ к 15 января 2032 года кредит должен быть полностью поранен.} \\\\ \\text{Известно, что общая сумма всех выплат составила 4,08 млн рублей. Найдите перво-} \\\\ \\text{начальную сумму кредита.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита (долг на 15 января 2027 года), млн. рублей;</p>
          <p>• <InlineMath>{"d"}</InlineMath> — величина, на которую уменьшается долг в переходах 2027 \(\to\) 2028, 2028 \(\to\) 2029, 2030 \(\to\) 2031, 2031 \(\to\) 2032;</p>
          <p>• <InlineMath>{"p = 1{,}12"}</InlineMath> — множитель роста долга при начислении процентов.</p>
        </div>
        <p>
          Так как переход 2029 \(\to\) 2030 особый (уменьшение на 50%), а не на постоянную величину <InlineMath>{"d"}</InlineMath>, арифметическая прогрессия здесь применима лишь частично — составим таблицу и выразим все значения через <InlineMath>{"S"}</InlineMath> и <InlineMath>{"d"}</InlineMath>:
        </p>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг на 15 января</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2027</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2028</td>
                <td className="p-2"><InlineMath>{"S - d"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2"><InlineMath>{"S - 2d"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2030</td>
                <td className="p-2"><InlineMath>{"0{,}5(S - 2d)"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2031</td>
                <td className="p-2"><InlineMath>{"0{,}5(S - 2d) - d"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2032</td>
                <td className="p-2"><InlineMath>{"0{,}5(S - 2d) - 2d = 0"}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнения исходя из данных таблицы и условий задачи.</p>
        <p>Из условия <InlineMath>{"D_{2032} = 0"}</InlineMath>:</p>
        <BlockMath>{"0{,}5(S - 2d) = 2d \\implies S - 2d = 4d \\implies S = 6d. \\quad (1)"}</BlockMath>

        <p>Обозначим <InlineMath>{"D_{2030} = 0{,}5(S - 2d) = 2d"}</InlineMath> (из (1)), тогда <InlineMath>{"D_{2031} = 2d - d = d"}</InlineMath>.</p>

        <p>Вычислим каждый платёж (платёж года = <InlineMath>{"p \\cdot \\text{долг пред. года} - \\text{долг этого года}"}</InlineMath>):</p>
        <BlockMath>{"X_{2028} = pS - (S - d) = 0{,}12S + d,"}</BlockMath>
        <BlockMath>{"X_{2029} = p(S - d) - (S - 2d) = 0{,}12S - 0{,}12d + 2d - d = 0{,}12S + 0{,}88d,"}</BlockMath>
        <BlockMath>{"X_{2030} = p(S - 2d) - 2d = 1{,}12S - 4{,}24d."}</BlockMath>
        <p>Аккуратно: <InlineMath>{"p(S - 2d) - 2d = 1{,}12S - 2{,}24d - 2d = 1{,}12S - 4{,}24d"}</InlineMath>,</p>
        <BlockMath>{"X_{2031} = p \\cdot 2d - d = 2{,}24d - d = 1{,}24d,"}</BlockMath>
        <BlockMath>{"X_{2032} = p \\cdot d - 0 = 1{,}12d."}</BlockMath>

        <p>Сумма всех платежей:</p>
        <BlockMath>{"\\text{Total} = (0{,}12S + d) + (0{,}12S + 0{,}88d) + (1{,}12S - 4{,}24d) + 1{,}24d + 1{,}12d."}</BlockMath>

        <p>Соберём коэффициенты при S и при d отдельно:</p>
        <BlockMath>{"S: \\quad 0{,}12 + 0{,}12 + 1{,}12 = 1{,}36,"}</BlockMath>
        <BlockMath>{"d: \\quad 1 + 0{,}88 - 4{,}24 + 1{,}24 + 1{,}12 = 0."}</BlockMath>

        <p>Таким образом:</p>
        <BlockMath>{"\\text{Total} = 1{,}36S."}</BlockMath>

        <p>По условию задачи Total = 4,08:</p>
        <BlockMath>{"1{,}36S = 4{,}08,"}</BlockMath>
        <BlockMath>{"S = \\frac{4{,}08}{1{,}36} = 3."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"3 \\text{ млн рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
    {
    id: 20,
    title: "Задача 20",
    mathA: "\\begin{array}{l} \\text{В июле 2028 года планируется взять кредит в банке на 40 млн рублей} \\\\ \\text{на 4 года. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг увеличивается на } r\\% \\text{ по сравнению с концом предыдущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить часть долга;} \\\\ \\quad \\bullet \\text{ в июле 2029, 2030 и 2031 годов долг должен быть на 25\\% меньше долга на июль} \\\\ \\quad \\quad \\text{предыдущего года;} \\\\ \\quad \\bullet \\text{ в июле 2032 года долг должен быть полностью погашен.} \\\\ \\text{Известно, что общая сумма выплат по кредиту составила 61,875 млн рублей. Найдите } r. \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"p = 1 + \\frac{r}{100}"}</InlineMath> — множитель роста долга при начислении процентов.</p>
        </div>
        <p>
          Долг уменьшается на постоянную долю (25%), а не на постоянную величину, поэтому арифметическая прогрессия не применяется — составим таблицу:
        </p>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг на июль пред. года</th>
                <th className="p-2 font-bold text-center">Долг на июль этого года</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2">40</td>
                <td className="p-2"><InlineMath>{"0{,}75 \\cdot 40 = 30"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2030</td>
                <td className="p-2">30</td>
                <td className="p-2"><InlineMath>{"0{,}75 \\cdot 30 = 22{,}5"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2031</td>
                <td className="p-2">22,5</td>
                <td className="p-2"><InlineMath>{"0{,}75 \\cdot 22{,}5 = 16{,}875"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2032</td>
                <td className="p-2">16,875</td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Каждый платёж равен разности между долгом после роста в январе и долгом на июль этого года:</p>
        <BlockMath>{"\\text{Total} = p(40 + 30 + 22{,}5 + 16{,}875) - (30 + 22{,}5 + 16{,}875) = 109{,}375p - 69{,}375."}</BlockMath>

        <p>По условию Total = 61,875:</p>
        <BlockMath>{"109{,}375p - 69{,}375 = 61{,}875,"}</BlockMath>
        <BlockMath>{"109{,}375p = 131{,}25,"}</BlockMath>
        <BlockMath>{"p = \\frac{131{,}25}{109{,}375} = 1{,}2."}</BlockMath>

        <p>Так как <InlineMath>{"p = 1{,}2 = 1 + \\frac{r}{100}"}</InlineMath>:</p>
        <BlockMath>{"r = 20."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"r = 20."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 21,
    title: "Задача 21",
    mathA: "\\begin{array}{l} \\text{В июле 2028 года планируется взять кредит в банке в размере 16000} \\\\ \\text{тыс. рублей на 4 года. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг увеличивается на 4\\% по сравнению с концом предыдущего} \\\\ \\quad \\quad \\text{года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить часть долга;} \\\\ \\quad \\bullet \\text{ в июле 2029, 2030 и 2031 годов долг должен быть на 25\\% меньше долга на июль} \\\\ \\quad \\quad \\text{предыдущего года;} \\\\ \\quad \\bullet \\text{ в июле 2032 года долг должен быть полностью погашен.} \\\\ \\text{Найдите общую сумму всех выплат (в тыс. рублей) после полного погашения креди- } \\\\ \\text{та.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"p = 1{,}04"}</InlineMath> — множитель роста долга при начислении процентов.</p>
        </div>
        <p>
          Долг уменьшается на постоянную долю (25%), поэтому арифметическая прогрессия не применяется — составим таблицу:
        </p>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг на июль пред. года</th>
                <th className="p-2 font-bold text-center">Долг на июль этого года</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2">16000</td>
                <td className="p-2"><InlineMath>{"0{,}75 \\cdot 16000 = 12000"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2030</td>
                <td className="p-2">12000</td>
                <td className="p-2"><InlineMath>{"0{,}75 \\cdot 12000 = 9000"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2031</td>
                <td className="p-2">9000</td>
                <td className="p-2"><InlineMath>{"0{,}75 \\cdot 9000 = 6750"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2032</td>
                <td className="p-2">6750</td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим выражение исходя из данных таблицы и условий задачи.</p>
        <p>Каждый платёж равен разности между долгом после роста в январе и долгом на июль этого года:</p>
        <BlockMath>{"\\text{Total} = p(16000 + 12000 + 9000 + 6750) - (12000 + 9000 + 6750)."}</BlockMath>

        <p>Вычислим:</p>
        <BlockMath>{"16000 + 12000 + 9000 + 6750 = 43750, \\quad 12000 + 9000 + 6750 = 27750."}</BlockMath>
        <BlockMath>{"\\text{Total} = 1{,}04 \\cdot 43750 - 27750 = 45500 - 27750 = 17750."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"17750 \\text{ тыс. рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 22,
    title: "Задача 22",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года планируется взять кредит в банке на сумму 250\\,000} \\\\ \\text{рублей. Условия возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг увеличивается на } r\\% \\text{ по сравнению с концом предыдущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить одним платежом часть долга.} \\\\ \\text{Найдите } r \\text{, если известно, что кредит будет полностью погашен за два года, причем} \\\\ \\text{в первый год будет выплачено 150\\,000 рублей, а во второй год --- 180\\,000 рублей.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S = 250\\,000"}</InlineMath> — сумма кредита, рублей;</p>
          <p>• <InlineMath>{"p = 1 + \\frac{r}{100}"}</InlineMath> — множитель роста долга при начислении процентов.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг до роста</th>
                <th className="p-2 font-bold text-center">Долг после роста</th>
                <th className="p-2 font-bold text-center">Платёж</th>
                <th className="p-2 font-bold text-center">Долг после платежа</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"pS"}</InlineMath></td>
                <td className="p-2">150 000</td>
                <td className="p-2"><InlineMath>{"pS - 150\\,000"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"pS - 150\\,000"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"p(pS - 150\\,000)"}</InlineMath></td>
                <td className="p-2">180 000</td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Так как во второй год долг полностью гасится:</p>
        <BlockMath>{"p(pS - 150\\,000) = 180\\,000,"}</BlockMath>
        <BlockMath>{"p^2S - 150\\,000p - 180\\,000 = 0."}</BlockMath>

        <p>Подставим <InlineMath>{"S = 250\\,000"}</InlineMath>:</p>
        <BlockMath>{"250\\,000p^2 - 150\\,000p - 180\\,000 = 0."}</BlockMath>

        <p>Разделим на 10 000:</p>
        <BlockMath>{"255p^2 - 15p - 18 = 0."}</BlockMath>

        <p>Дискриминант:</p>
        <BlockMath>{"D = 15^2 + 4 \\cdot 25 \\cdot 18 = 225 + 1800 = 2025 = 45^2."}</BlockMath>
        <BlockMath>{"p = \\frac{15 + 45}{50} = \\frac{60}{50} = 1{,}2."}</BlockMath>

        <p>Так как <InlineMath>{"p = 1{,}2 = 1 + \\frac{r}{100}"}</InlineMath>:</p>
        <BlockMath>{"r = 20."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"r = 20."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 23,
    title: "Задача 23",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года Николай планирует открыть накопительный счёт на} \\\\ \\text{три года. Условия по этому счёту таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ 1 июля 2026 года Николай помещает на счёт некоторую сумму денег;} \\\\ \\quad \\bullet \\text{ 30 июня каждого года сумма на счёте увеличивается на 20\\% по сравнению с} \\\\ \\quad \\quad \\text{суммой, находящейся на счёте 29 июня;} \\\\ \\quad \\bullet \\text{ 1 июля 2027, 2028 и 2029 годов Николай снимет со счёта одну и ту же фикси-} \\\\ \\quad \\quad \\text{рованную сумму;} \\\\ \\quad \\bullet \\text{ после 1 июля 2029 года на счёте не должно остаться денег.} \\\\ \\text{Известно, что общая сумма снятых со счёта денег окажется на 154 400 рублей больше} \\\\ \\text{суммы, помещённой на счёт. Найдите общую сумму снятых со счёта денег.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"A"}</InlineMath> — сумма, помещённая на счёт в 2026 году, рублей;</p>
          <p>• <InlineMath>{"X"}</InlineMath> — фиксированная сумма, снимаемая каждый год, рублей;</p>
          <p>• <InlineMath>{"p = 1{,}2"}</InlineMath> — множитель роста суммы на счёте при начислении процентов.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Сумма до роста</th>
                <th className="p-2 font-bold text-center">Сумма после роста</th>
                <th className="p-2 font-bold text-center">Снятие</th>
                <th className="p-2 font-bold text-center">Сумма после снятия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1 (2027)</td>
                <td className="p-2"><InlineMath>{"A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2A - X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2 (2028)</td>
                <td className="p-2"><InlineMath>{"1{,}2A - X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2(1{,}2A - X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}44A - 2{,}2X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3 (2029)</td>
                <td className="p-2"><InlineMath>{"1{,}44A - 2{,}2X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2(1{,}44A - 2{,}2X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнения исходя из данных таблицы и условий задачи.</p>
        <p>Так как в третий год счёт полностью обнуляется:</p>
        <BlockMath>{"1{,}2(1{,}44A - 2{,}2X) = X,"}</BlockMath>
        <BlockMath>{"1{,}728A - 2{,}64X = X,"}</BlockMath>
        <BlockMath>{"1{,}728A = 3{,}64X. \\quad (1)"}</BlockMath>

        <p>По условию общая сумма снятых денег превосходит сумму, помещённую на счёт, на 154 400 рублей:</p>
        <BlockMath>{"3X - A = 154\\,400. \\quad (2)"}</BlockMath>

        <p>Из (1): <InlineMath>{"X = \\frac{1{,}728A}{3{,}64}"}</InlineMath>. Подставим в (2):</p>
        <BlockMath>{"3 \\cdot \\frac{1{,}728A}{3{,}64} - A = 154\\,400,"}</BlockMath>
        <BlockMath>{"\\frac{5{,}184A}{3{,}64} - A = 154\\,400."}</BlockMath>

        <p>Умножим обе части на 3,64:</p>
        <BlockMath>{"5{,}184A - 3{,}64A = 154\\,400 \\cdot 3{,}64,"}</BlockMath>
        <BlockMath>{"1{,}544A = 562\\,016,"}</BlockMath>
        <BlockMath>{"A = \\frac{562\\,016}{1{,}544} = 364\\,000."}</BlockMath>

        <p>Найдём <InlineMath>{"X"}</InlineMath> из (1):</p>
        <BlockMath>{"X = \\frac{1{,}728 \\cdot 364\\,000}{3{,}64} = 172\\,800."}</BlockMath>

        <p>Общая сумма снятых денег:</p>
        <BlockMath>{"3X = 3 \\cdot 172\\,800 = 518\\,400."}</BlockMath>

        <p>Проверка: <InlineMath>{"3X - A = 518\\,400 - 364\\,000 = 154\\,400"}</InlineMath> — соответствует условию.</p>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"518\\,400 \\text{ рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
    {
    id: 24,
    title: "Задача 24",
    mathA: "\\begin{array}{l} \\text{Планируется взять кредит на некоторое целое число месяцев. Условия} \\\\ \\text{его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ 1-го числа долг по кредиту возрастает на 1\\% по сравнению с концом предыду-} \\\\ \\quad \\quad \\text{щего месяца;} \\\\ \\quad \\bullet \\text{ со 2-го по 14-ое число необходимо выплатить одним платежом часть долга;} \\\\ \\quad \\bullet \\text{ 15-го числа каждого месяца долг по кредиту должен быть на одну и ту же} \\\\ \\quad \\quad \\text{величину меньше долга на 15-ое число предыдущего месяца.} \\\\ \\text{На сколько месяцев планируется взять кредит, если общая сумма выплат по кредиту} \\\\ \\text{больше начальной суммы кредита на 20\\%?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита;</p>
          <p>• <InlineMath>{"n"}</InlineMath> — число месяцев, на которое взят кредит;</p>
          <p>• <InlineMath>{"d = \\frac{S}{n}"}</InlineMath> — сумма, на которую ежемесячно уменьшается долг;</p>
          <p>• <InlineMath>{"A"}</InlineMath> — общая сумма всех выплат.</p>
        </div>
        <p>
          Заметим, что долг уменьшается каждый месяц на одну и ту же сумму <InlineMath>{"d"}</InlineMath>, следовательно значения долга на 15-е число образуют арифметическую прогрессию. Долг перед месяцем <InlineMath>{"k"}</InlineMath>: <InlineMath>{"S - (k-1)d"}</InlineMath>. Платёж в месяце <InlineMath>{"k"}</InlineMath>:
        </p>
        <BlockMath>{"X_k = 0{,}01(S - (k-1)d) + d."}</BlockMath>

        <p>Составим уравнение исходя из условий задачи.</p>
        <p>Сумма всех <InlineMath>{"n"}</InlineMath> платежей:</p>
        <BlockMath>{"A = 0{,}01 \\sum_{k=1}^{n} (S - (k-1)d) + nd."}</BlockMath>

        <p>По формуле арифметической прогрессии:</p>
        <BlockMath>{"\\sum_{k=1}^{n} (S - (k-1)d) = nS - d \\cdot \\frac{n(n-1)}{2}."}</BlockMath>

        <p>Так как <InlineMath>{"nd = S"}</InlineMath>:</p>
        <BlockMath>{"A = 0{,}01 \\left(nS - d \\cdot \\frac{n(n-1)}{2}\\right) + S = 0{,}01nS - 0{,}005 \\cdot S(n-1) + S = S[0{,}005n + 1{,}005]."}</BlockMath>

        <p>По условию <InlineMath>{"A = 1{,}2S"}</InlineMath>:</p>
        <BlockMath>{"S(0{,}005n + 1{,}005) = 1{,}2S,"}</BlockMath>
        <BlockMath>{"0{,}005n + 1{,}005 = 1{,}2,"}</BlockMath>
        <BlockMath>{"0{,}005n = 0{,}195,"}</BlockMath>
        <BlockMath>{"n = 39."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"39 \\text{ месяцев.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 25,
    title: "Задача 25",
    mathA: "\\begin{array}{l} \\text{Пенсионный фонд владеет ценными бумагами, которые стоят } 10t \\text{ тыс.} \\\\ \\text{рублей в конце года } t \\ (t = 1; 2; \\dots). \\text{ В конце любого года пенсионный фонд может} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\text{продать ценные бумаги и положить деньги на счёт в банке, при этом в конце каждого} \\\\ \\text{следующего года сумма на счёте будет увеличиваться в } 1 + r \\text{ раз. Pensionный фонд} \\\\ \\text{хочет продать ценные бумаги в конце такого года, чтобы в конце двадцатого года} \\\\ \\text{сумма на его счёте была наибольшей. Расчёты показали, что для этого ценные бумаги} \\\\ \\text{нужно продавать строго в конце пятого года (продать их в конце любого другого года} \\\\ \\text{будет менее выгодно). При каких положительных значениях } r \\text{ это возможно?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"t"}</InlineMath> — год продажи ценных бумаг;</p>
          <p>• <InlineMath>{"f(t) = 10t \\cdot (1 + r)^{20-t}"}</InlineMath> — сумма на счёте в конце 20-го года, если бумаги проданы в конце года <InlineMath>{"t"}</InlineMath>.</p>
        </div>

        <p>Составим уравнение исходя из условий задачи.</p>
        <p>
          Для того чтобы максимум достигался ровно при <InlineMath>{"t = 5"}</InlineMath>, необходимо, чтобы:
        </p>
        <BlockMath>{"f(5) > f(4) \\quad \\text{и} \\quad f(5) > f(6)."}</BlockMath>

        <p>Рассмотрим отношение соседних значений:</p>
        <BlockMath>{"\\frac{f(t+1)}{f(t)} = \\frac{10(t+1)(1+r)^{19-t}}{10t(1+r)^{20-t}} = \\frac{t+1}{t} \\cdot \\frac{1}{1+r}."}</BlockMath>

        <p>
          Условие <InlineMath>{"f(5) > f(4)"}</InlineMath> равносильно <InlineMath>{"\\frac{f(5)}{f(4)} > 1"}</InlineMath>, то есть при <InlineMath>{"t = 4"}</InlineMath>:
        </p>
        <BlockMath>{"\\frac{5}{4} \\cdot \\frac{1}{1+r} > 1 \\implies 5 > 4(1+r) \\implies 1+r < \\frac{5}{4} \\implies r < 0{,}25."}</BlockMath>

        <p>
          Условие <InlineMath>{"f(6) < f(5)"}</InlineMath> равносильно <InlineMath>{"\\frac{f(6)}{f(5)} < 1"}</InlineMath>, то есть при <InlineMath>{"t = 5"}</InlineMath>:
        </p>
        <BlockMath>{"\\frac{6}{5} \\cdot \\frac{1}{1+r} < 1 \\implies 6 < 5(1+r) \\implies 1+r > \\frac{6}{5} \\implies r > 0{,}2."}</BlockMath>

        <p>
          Так как отношение <InlineMath>{"\\frac{f(t+1)}{f(t)}"}</InlineMath> монотонно убывает по <InlineMath>{"t"}</InlineMath>, последовательность <InlineMath>{"f(t)"}</InlineMath> имеет единственный максимум, и полученных двух условий достаточно.
        </p>
        <p>Объединяя, получаем:</p>
        <BlockMath>{"0{,}2 < r < 0{,}25."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"\\frac{1}{5} < r < \\frac{1}{4}."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 26,
    title: "Задача 26",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года Николай планирует открыть накопительный счёт на} \\\\ \\text{три года. Условия по этому счёту таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ 1 июля 2026 года Николай помещает на счёт некоторую сумму денег;} \\\\ \\quad \\bullet \\text{ 30 июня каждого года сумма на счёте увеличивается на 25\\% по сравнению с} \\\\ \\quad \\quad \\text{суммой, находящейся на счёте 29 июня;} \\\\ \\quad \\bullet \\text{ 1 июля 2027, 2028 и 2029 годов Николай снимет со счёта одну и ту же фикси-} \\\\ \\quad \\quad \\text{рованную сумму;} \\\\ \\quad \\bullet \\text{ после 1 июля 2029 года на счёте не должно остаться денег.} \\\\ \\text{Известно, что общая сумма снятых со счёта денег окажется равной 375 000 рублям.} \\\\ \\text{Найдите сумму, которую должен будет поместить на счёт Николай в 2026 году.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"A"}</InlineMath> — сумма, помещённая на счёт в 2026 году;</p>
          <p>• <InlineMath>{"X"}</InlineMath> — фиксированная сумма, снимаемая каждый год;</p>
          <p>• <InlineMath>{"p = 1{,}25"}</InlineMath> — множитель роста суммы на счёте при начислении процентов.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Сумма до роста</th>
                <th className="p-2 font-bold text-center">Сумма после роста</th>
                <th className="p-2 font-bold text-center">Снятие</th>
                <th className="p-2 font-bold text-center">Сумма после снятия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1 (2027)</td>
                <td className="p-2"><InlineMath>{"A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25A - X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2 (2028)</td>
                <td className="p-2"><InlineMath>{"1{,}25A - X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25(1{,}25A - X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}5625A - 2{,}25X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3 (2029)</td>
                <td className="p-2"><InlineMath>{"1{,}5625A - 2{,}25X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25(1{,}5625A - 2{,}25X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнения исходя из данных таблицы и условий задачи.</p>
        <p>Так как в третий год счёт полностью обнуляется:</p>
        <BlockMath>{"1{,}25(1{,}5625A - 2{,}25X) = X,"}</BlockMath>
        <BlockMath>{"1{,}953125A - 2{,}8125X = X,"}</BlockMath>
        <BlockMath>{"1{,}953125A = 3{,}8125X. \\quad (1)"}</BlockMath>

        <p>По условию общая сумма снятых денег равна 375 000 рублям, причём снятия равны:</p>
        <BlockMath>{"3X = 375\\,000 \\implies X = 125\\,000. \\quad (2)"}</BlockMath>

        <p>Из (1) и (2):</p>
        <BlockMath>{"A = \\frac{3{,}8125 \\cdot 125\\,000}{1{,}953125} = 244\\,000."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"244\\,000 \\text{ рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 27,
    title: "Задача 27",
    mathA: "\\begin{array}{l} \\text{15 января планируется взять кредит в банке на 4 месяца в размере } S \\\\ \\text{рублей (где } S \\text{ — целое число). Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ 1-го числа каждого месяца долг возрастает на целое число } r \\text{ процентов по срав- } \\\\ \\quad \\quad \\text{нению с концом предыдущего месяца;} \\\\ \\quad \\bullet \\text{ со 2-го по 14-е число каждого месяца необходимо выплатить одним платежом} \\\\ \\quad \\quad \\text{часть долга;} \\\\ \\quad \\bullet \\text{ 15-го числа каждого месяца долг должен составлять часть суммы кредита в} \\\\ \\quad \\quad \\text{соответствии со следующей таблицей:} \\\\ \\quad \\quad \\begin{array}{|c|c|c|c|c|c|} \\hline \\text{Дата} & 15.01 & 15.02 & 15.03 & 15.04 & 15.05 \\\\ \\hline \\text{Долг (в \\% от кредита)} & 100\\% & 60\\% & 30\\% & 10\\% & 0\\% \\\\ \\hline \\end{array} \\\\ \\text{Найдите наибольшее значение } r \\text{, при котором сумма всех платежей будет превышать} \\\\ \\text{сумму кредита меньше чем на 25\\%.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита;</p>
          <p>• <InlineMath>{"p = 1 + \\frac{r}{100}"}</InlineMath> — множитель роста долга при начислении процентов;</p>
          <p>• <InlineMath>{"A"}</InlineMath> — общая сумма всех платежей.</p>
        </div>
        
        <p>
          Здесь долг задан не постоянным уменьшением, а конкретными долями от <InlineMath>{"S"}</InlineMath>, поэтому арифметическая прогрессия не применяется — посчитаем каждый платёж отдельно.
        </p>
        <p>Составим таблицу платежей <InlineMath>{"(X_k = p \\cdot D_{k-1} - D_k)"}</InlineMath>:</p>
        
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Месяц</th>
                <th className="p-2 font-bold text-center">Долг до</th>
                <th className="p-2 font-bold text-center">Долг на 15-е число</th>
                <th className="p-2 font-bold text-center">Платёж</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2">0,6S</td>
                <td className="p-2"><InlineMath>{"pS - 0{,}6S = S(p - 0{,}6)"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2">0,6S</td>
                <td className="p-2">0,3S</td>
                <td className="p-2"><InlineMath>{"0{,}6pS - 0{,}3S = S(0{,}6p - 0{,}3)"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3</td>
                <td className="p-2">0,3S</td>
                <td className="p-2">0,1S</td>
                <td className="p-2"><InlineMath>{"0{,}3pS - 0{,}1S = S(0{,}3p - 0{,}1)"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">4</td>
                <td className="p-2">0,1S</td>
                <td className="p-2">0</td>
                <td className="p-2"><InlineMath>{"0{,}1pS"}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <BlockMath>{"A = S[(p - 0{,}6) + (0{,}6p - 0{,}3) + (0{,}3p - 0{,}1) + 0{,}1p] = S[2p - 1]."}</BlockMath>
        
        <p>По условию <InlineMath>{"A < 1{,}25S"}</InlineMath>:</p>
        <BlockMath>{"S[2p - 1] < 1{,}25S,"}</BlockMath>
        <BlockMath>{"2p - 1 < 1{,}25,"}</BlockMath>
        <BlockMath>{"p < 1{,}125."}</BlockMath>
        
        <p>Так как <InlineMath>{"p = 1 + \\frac{r}{100}"}</InlineMath>:</p>
        <BlockMath>{"1 + \\frac{r}{100} < 1{,}125 \\implies r < 12{,}5."}</BlockMath>
        
        <p>Так как <InlineMath>{"r"}</InlineMath> — целое число, наибольшее подходящее значение:</p>
        <BlockMath>{"r = 12."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"r = 12."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 28,
    title: "Задача 28",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года планируется взять кредит в банке на сумму 6 млн} \\\\ \\text{рублей на 24 месяца. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ 1-го числа каждого месяца долг возрастает на 3\\% по сравнению с концом преды-} \\\\ \\quad \\quad \\text{дущего месяца;} \\\\ \\quad \\bullet \\text{ со 2-го по 14-е число каждого месяца необходимо одним платежом оплатить} \\\\ \\quad \\quad \\text{часть долга;} \\\\ \\quad \\bullet \\text{ 15-го числа каждого месяца долг должен быть на одну и ту же величину меньше} \\\\ \\quad \\quad \\text{долга на 15-е число предыдущего месяца;} \\\\ \\quad \\bullet \\text{ к 15 декабря 2028 года кредит должен быть полностью погашен.} \\\\ \\text{Чему равна общая сумма платежей в 2027 году?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S = 6"}</InlineMath> — сумма кредита, млн. рублей;</p>
          <p>• <InlineMath>{"n = 24"}</InlineMath> — число месяцев;</p>
          <p>• <InlineMath>{"d = \\frac{S}{n} = 0{,}25"}</InlineMath> — сумма, на которую ежемесячно уменьшается долг, млн. рублей;</p>
          <p>• <InlineMath>{"A"}</InlineMath> — сумма всех платежей в 2027 году (месяцы с 1-го по 12-й), млн. рублей.</p>
        </div>
        
        <p>
          Заметим, что долг уменьшается каждый месяц на одну и ту же сумму <InlineMath>{"d"}</InlineMath>, следовательно платежи образуют арифметическую прогрессию. Составим таблицу:
        </p>
        
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Месяц</th>
                <th className="p-2 font-bold text-center">Долг до начисления %</th>
                <th className="p-2 font-bold text-center">Долг после начисления %</th>
                <th className="p-2 font-bold text-center">Платёж</th>
                <th className="p-2 font-bold text-center">Долг после платежа</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2">6</td>
                <td className="p-2">6,18</td>
                <td className="p-2"><InlineMath>{"0{,}03 \\cdot 6 + 0{,}25 = 0{,}43"}</InlineMath></td>
                <td className="p-2">5,75</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2">5,75</td>
                <td className="p-2">5,9225</td>
                <td className="p-2"><InlineMath>{"0{,}03 \\cdot 5{,}75 + 0{,}25 = 0{,}4225"}</InlineMath></td>
                <td className="p-2">5,5</td>
              </tr>
              <tr className="text-slate-400">
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">k</td>
                <td className="p-2"><InlineMath>{"6 - 0{,}25(k - 1)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}03(6 - 0{,}25(k - 1))"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}03(6 - 0{,}25(k - 1)) + 0{,}25"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"6 - 0{,}25k"}</InlineMath></td>
              </tr>
              <tr className="text-slate-400">
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">12</td>
                <td className="p-2">3,25</td>
                <td className="p-2">3,3475</td>
                <td className="p-2"><InlineMath>{"0{,}03 \\cdot 3{,}25 + 0{,}25 = 0{,}3475"}</InlineMath></td>
                <td className="p-2">3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Сумма платежей за месяцы <InlineMath>{"k = 1, \\dots, 12"}</InlineMath>:</p>
        <BlockMath>{"A = 0{,}03 \\sum_{k=1}^{12} (6 - 0{,}25(k - 1)) + 12 \\cdot 0{,}25."}</BlockMath>
        
        <p>По формуле арифметической прогрессии:</p>
        <BlockMath>{"\\sum_{k=1}^{12} (6 - 0{,}25(k - 1)) = 12 \\cdot 6 - 0{,}25 \\cdot (0 + 1 + \\dots + 11) = 72 - 0{,}25 \\cdot 66 = 72 - 16{,}5 = 55{,}5."}</BlockMath>
        
        <p>Тогда:</p>
        <BlockMath>{"A = 0{,}03 \\cdot 55{,}5 + 3 = 1{,}665 + 3 = 4{,}665."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"4665 \\text{ тыс. рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 29,
    title: "Задача 29",
    mathA: "\\begin{array}{l} \\text{15 декабря 2026 года планируется взять кредит в банке на сумму 18} \\\\ \\text{млн рублей на 60 месяцев. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ 1-го числа каждого месяца долг возрастает на } r\\% \\text{ по сравнению с концом преды-} \\\\ \\quad \\quad \\text{дущего месяца;} \\\\ \\quad \\bullet \\text{ со 2-го по 14-е число каждого месяца необходимо одним платежом оплатить} \\\\ \\quad \\quad \\text{часть долга;} \\\\ \\quad \\bullet \\text{ 15-го числа каждого месяца долг должен быть на одну и ту же величину меньше} \\\\ \\quad \\quad \\text{долга на 15-е число предыдущего месяца;} \\\\ \\quad \\bullet \\text{ к 15 декабря 2031 года кредит должен быть полностью погашен.} \\\\ \\text{Чему равно } r \\text{, если общая сумма платежей в 2031 году составила 3951 тыс. рублей?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S = 18"}</InlineMath> — сумма кредита, млн. рублей;</p>
          <p>• <InlineMath>{"n = 60"}</InlineMath> — число месяцев;</p>
          <p>• <InlineMath>{"d = \\frac{S}{n} = 0{,}3"}</InlineMath> — сумма, на которую ежемесячно уменьшается долг, млн. рублей;</p>
          <p>• <InlineMath>{"p = 1 + \\frac{r}{100}"}</InlineMath> — множитель роста долга при начислении процентов.</p>
        </div>
        
        <p>
          Так как месяц 1 соответствует январю 2027 года, месяц 60 — декабрю 2031 года, то 2031 год соответствует месяцам с 49-го по 60-й.
        </p>
        <p>
          Заметим, что долг уменьшается каждый месяц на одну и ту же сумму <InlineMath>{"d"}</InlineMath>, следовательно платежи образуют арифметическую прогрессию. Составим таблицу:
        </p>
        
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Месяц</th>
                <th className="p-2 font-bold text-center">Долг до начисления %</th>
                <th className="p-2 font-bold text-center">Долг после начисления %</th>
                <th className="p-2 font-bold text-center">Платёж</th>
                <th className="p-2 font-bold text-center">Долг после платежа</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">49</td>
                <td className="p-2"><InlineMath>{"18 - 0{,}3 \\cdot 48 = 3{,}6"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"p \\cdot 3{,}6"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"(p - 1) \\cdot 3{,}6 + 0{,}3"}</InlineMath></td>
                <td className="p-2">3,3</td>
              </tr>
              <tr className="text-slate-400">
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">60</td>
                <td className="p-2">0,3</td>
                <td className="p-2"><InlineMath>{"p \\cdot 0{,}3"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"(p - 1) \\cdot 0{,}3 + 0{,}3"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>
          Сумма платежей за месяцы с 49-го по 60-й (обозначим <InlineMath>{"j = k - 49 = 0, \\dots, 11"}</InlineMath>, тогда долг до начисления в месяце <InlineMath>{"j"}</InlineMath>-й по счёту равен <InlineMath>{"3{,}6 - 0{,}3j"}</InlineMath>):
        </p>
        <BlockMath>{"A = (p - 1) \\sum_{j=0}^{11} (3{,}6 - 0{,}3j) + 12 \\cdot 0{,}3."}</BlockMath>
        
        <p>По формуле арифметической прогрессии:</p>
        <BlockMath>{"\\sum_{j=0}^{11} (3{,}6 - 0{,}3j) = 12 \\cdot 3{,}6 - 0{,}3 \\cdot (0 + 1 + \\dots + 11) = 43{,}2 - 0{,}3 \\cdot 66 = 43{,}2 - 19{,}8 = 23{,}4."}</BlockMath>
        
        <p>Тогда:</p>
        <BlockMath>{"A = (p - 1) \\cdot 23{,}4 + 3{,}6."}</BlockMath>
        
        <p>По условию <InlineMath>{"A = 3{,}951"}</InlineMath> (млн. рублей):</p>
        <BlockMath>{"23{,}4(p - 1) + 3{,}6 = 3{,}951,"}</BlockMath>
        <BlockMath>{"23{,}4(p - 1) = 0{,}351,"}</BlockMath>
        <BlockMath>{"p - 1 = 0{,}015."}</BlockMath>
        
        <p>Так как <InlineMath>{"p - 1 = \\frac{r}{100}"}</InlineMath>:</p>
        <BlockMath>{"r = 1{,}5."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"r = 1{,}5."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 30,
    title: "Задача 30",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года планируется взять кредит размером } A \\text{ млн рублей} \\\\ \\text{на срок 29 месяцев. Условия возврата кредита таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ 1-го числа каждого месяца сумма долга возрастает на 4\\% по сравнению с кон-} \\\\ \\quad \\quad \\text{цом предыдущего месяца;} \\\\ \\quad \\bullet \\text{ со 2-го по 14-е число каждого месяца необходимо выплатить одним платежом} \\\\ \\quad \\quad \\text{часть долга;} \\\\ \\quad \\bullet \\text{ 15-го числа каждого месяца долг должен быть на одну и ту же величину меньше} \\\\ \\quad \\quad \\text{долга на 15-е число предыдущего месяца;} \\\\ \\quad \\bullet \\text{ к 15 декабря 2028 года долг должен быть полностью погашен.} \\\\ \\text{Чему равно } A \\text{, если общая сумма платежей в 2027 году составит 2610 тыс. рублей?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"A"}</InlineMath> — сумма кредита, млн. рублей (искомая величина);</p>
          <p>• <InlineMath>{"n = 24"}</InlineMath> — число месяцев;</p>
          <p>• <InlineMath>{"d = \\frac{A}{24}"}</InlineMath> — сумма, на которую ежемесячно уменьшается долг, млн. рублей.</p>
        </div>
        
        <p>
          Месяцы 1–12 соответствуют 2027 году. Заметим, что долг уменьшается каждый месяц на одну и ту же сумму <InlineMath>{"d"}</InlineMath>, следовательно платежи образуют арифметическую прогрессию. Составим таблицу:
        </p>
        
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Месяц</th>
                <th className="p-2 font-bold text-center">Долг до начисления %</th>
                <th className="p-2 font-bold text-center">Долг после начисления %</th>
                <th className="p-2 font-bold text-center">Платёж</th>
                <th className="p-2 font-bold text-center">Долг после платежа</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}04A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}04A + d"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"A - d"}</InlineMath></td>
              </tr>
              <tr className="text-slate-400">
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">k</td>
                <td className="p-2"><InlineMath>{"A - (k - 1)d"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}04(A - (k - 1)d)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}04(A - (k - 1)d) + d"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"A - kd"}</InlineMath></td>
              </tr>
              <tr className="text-slate-400">
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">12</td>
                <td className="p-2"><InlineMath>{"A - 11d"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}04(A - 11d)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}04(A - 11d) + d"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"A - 12d"}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Сумма платежей за месяцы <InlineMath>{"k = 1, \\dots, 12"}</InlineMath>:</p>
        <BlockMath>{"S_{2027} = 0{,}04 \\sum_{k=1}^{12} (A - (k - 1)d) + 12d."}</BlockMath>
        
        <p>По формуле арифметической прогрессии:</p>
        <BlockMath>{"\\sum_{k=1}^{12} (A - (k - 1)d) = 12A - 66d."}</BlockMath>
        
        <p>Подставим <InlineMath>{"d = \\frac{A}{24}"}</InlineMath>, тогда <InlineMath>{"66d = \\frac{66A}{24} = 2{,}75A"}</InlineMath>:</p>
        <BlockMath>{"\\sum = 12A - 2{,}75A = 9{,}25A."}</BlockMath>
        
        <BlockMath>{"S_{2027} = 0{,}04 \\cdot 9{,}25A + 12 \\cdot \\frac{A}{24} = 0{,}37A + 0{,}5A = 0{,}87A."}</BlockMath>
        
        <p>По условию <InlineMath>{"S_{2027} = 2{,}61"}</InlineMath> (млн. рублей):</p>
        <BlockMath>{"0{,}87A = 2{,}61,"}</BlockMath>
        <BlockMath>{"A = 3."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"A = 3 \\text{ млн рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 31,
    title: "Задача 31",
    mathA: "\\begin{array}{l} \\text{Строительство нового завода стоит 100 млн рублей. Затраты на про-} \\\\ \\text{изводство } x \\text{ тысяч единиц продукции на таком заводе равны } Z = 0{,}5x^2 + x + 7 \\text{ млн} \\quad \\quad \\quad \\quad \\quad \\\\ \\text{рублей в год. Если продукцию завода продать по цене } q \\text{ тысяч рублей за единицу, то} \\\\ \\text{прибыль в млн рублей за один год составит } qx - Z. \\text{ Когда завод будет построен, плани-} \\\\ \\text{руется выпускать продукции в таком количестве, чтобы прибыль была наибольшей.} \\\\ \\text{При каком наименьшем значении } q \\text{ строительство завода окупится не более чем за 4} \\\\ \\text{года?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"x"}</InlineMath> — количество продукции, тыс. единиц;</p>
          <p>• <InlineMath>{"q"}</InlineMath> — цена единицы продукции, тыс. рублей;</p>
          <p>• <InlineMath>{"\\Pi(x)"}</InlineMath> — прибыль за год, млн рублей.</p>
        </div>
        
        <p>Прибыль:</p>
        <BlockMath>{"\\Pi(x) = qx - 0{,}5x^2 - x - 7."}</BlockMath>
        
        <p>
          Найдём максимум прибыли по <InlineMath>{"x"}</InlineMath>. Это квадратичная функция с отрицательным коэффициентом при <InlineMath>{"x^2"}</InlineMath>, максимум достигается в вершине параболы:
        </p>
        <BlockMath>{"\\Pi'(x) = q - x - 1 = 0 \\implies x = q - 1."}</BlockMath>
        
        <p>Составим уравнение исходя из условий задачи.</p>
        <p>Найдём максимальную прибыль, подставив <InlineMath>{"x = q - 1"}</InlineMath>:</p>
        <BlockMath>{"\\Pi_{\\text{max}} = q(q - 1) - 0{,}5(q - 1)^2 - (q - 1) - 7."}</BlockMath>
        
        <p>Вынесем <InlineMath>{"(q - 1)"}</InlineMath> за скобку в первых трёх слагаемых:</p>
        <BlockMath>{"\\Pi_{\\text{max}} = (q - 1)[q - 0{,}5(q - 1) - 1] - 7 = (q - 1) \\cdot 0{,}5(q - 1) - 7 = 0{,}5(q - 1)^2 - 7."}</BlockMath>
        
        <p>Завод окупится не более чем за 4 года, если суммарная прибыль за 4 года не меньше стоимости строительства:</p>
        <BlockMath>{"4\\Pi_{\\text{max}} \\ge 100."}</BlockMath>
        
        <BlockMath>{"4(0{,}05(q - 1)^2 - 7) \\ge 100,"}</BlockMath>
        <BlockMath>{"2(q - 1)^2 - 28 \\ge 100,"}</BlockMath>
        <BlockMath>{"(q - 1)^2 \\ge 64,"}</BlockMath>
        <BlockMath>{"q - 1 \\ge 8 \\quad \\text{(берём положительный корень, так как } q > 0 \\text{)},"}</BlockMath>
        <BlockMath>{"q \\ge 9."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"q = 9."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 32,
    title: "Задача 32",
    mathA: "\\begin{array}{l} \\text{Вклад планируется открыть на четыре года. Первоначальный вклад} \\\\ \\text{составляет целое число миллионов рублей. В конце каждого года банк увеличивает} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\text{вклад на 10\\% по сравнению с его размером в начале года. Кроме этого, в начале} \\\\ \\text{третьего и четвертого годов вкладчик пополняет вклад на 3 млн рублей.} \\\\ \\text{Найдите наименьший размер первоначального вклада, при котором банк за че-} \\\\ \\text{тыре года начислит на вклад больше 5 млн рублей.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — первоначальный вклад, млн. рублей (целое число);</p>
          <p>• <InlineMath>{"p = 1{,}1"}</InlineMath> — во сколько раз увеличивается вклад при начислении процентов.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Сумма до начисления %</th>
                <th className="p-2 font-bold text-center">Доп. взнос</th>
                <th className="p-2 font-bold text-center">Сумма после начисления %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2">0</td>
                <td className="p-2"><InlineMath>{"pS"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"pS"}</InlineMath></td>
                <td className="p-2">0</td>
                <td className="p-2"><InlineMath>{"p^2S"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3</td>
                <td className="p-2"><InlineMath>{"p^2S"}</InlineMath></td>
                <td className="p-2">3</td>
                <td className="p-2"><InlineMath>{"(p^2S + 3)p"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">4</td>
                <td className="p-2"><InlineMath>{"(p^2S + 3)p"}</InlineMath></td>
                <td className="p-2">3</td>
                <td className="p-2"><InlineMath>{"((p^2S + 3)p + 3)p"}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим неравенство исходя из данных таблицы и условий задачи.</p>
        <p>Сумма начисленных банком процентов за 4 года равна конечной сумме вклада за вычетом S и двух дополнительных взносов по 3 млн рублей:</p>
        <BlockMath>{"((p^2S + 3)p + 3)p - S - 6 > 5."}</BlockMath>
        
        <p>Раскроем скобки:</p>
        <BlockMath>{"p^4S + 3p^2 + 3p - S - 6 > 5,"}</BlockMath>
        <BlockMath>{"S(p^4 - 1) > 11 - 3p^2 - 3p."}</BlockMath>
        
        <p>Подставим <InlineMath>{"p = 1{,}1; \\, p^2 = 1{,}21, \\, p^4 = 1{,}4641"}</InlineMath>:</p>
        <BlockMath>{"11 - 3 \\cdot 1{,}21 - 3 \\cdot 1{,}1 = 11 - 3{,}63 - 3{,}3 = 4{,}07."}</BlockMath>
        
        <BlockMath>{"S > \\frac{4{,}07}{0{,}4641} \\approx 8{,}77."}</BlockMath>
        
        <p>Так как <InlineMath>{"S"}</InlineMath> — целое число, наименьшее подходящее значение:</p>
        <BlockMath>{"S = 9."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"9 \\text{ млн рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 33,
    title: "Задача 33",
    mathA: "\\begin{array}{l} \\text{В июле 2025 года планируется взять кредит на 5 лет в размере 9 млн} \\\\ \\text{рублей. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг возрастает на 25\\% по сравнению с концом предыдущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить часть долга;} \\\\ \\quad \\bullet \\text{ в июле 2026, 2027 и 2028 годов долг остаётся равным 9 млн рублей;} \\\\ \\quad \\bullet \\text{ выплаты в 2029 и 2030 годах равны;} \\\\ \\quad \\bullet \\text{ к июля 2030 года долг будет выплачен полностью.} \\\\ \\text{Найдите общую сумму выплат по кредиту.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S = 9"}</InlineMath> — сумма кредита, млн. рублей;</p>
          <p>• <InlineMath>{"p = 1{,}25"}</InlineMath> — множитель роста долга при начислении процентов;</p>
          <p>• <InlineMath>{"X"}</InlineMath> — равные между собой платежи в 2029 и 2030 годах, млн. рублей;</p>
          <p>• <InlineMath>{"A"}</InlineMath> — общая сумма всех выплат, млн. рублей.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг на июль пред. года</th>
                <th className="p-2 font-bold text-center">Долг после роста</th>
                <th className="p-2 font-bold text-center">Долг на июль этого года</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2026</td>
                <td className="p-2">9</td>
                <td className="p-2">11,25</td>
                <td className="p-2">9</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2027</td>
                <td className="p-2">9</td>
                <td className="p-2">11,25</td>
                <td className="p-2">9</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2028</td>
                <td className="p-2">9</td>
                <td className="p-2">11,25</td>
                <td className="p-2">9</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2">9</td>
                <td className="p-2">11,25</td>
                <td className="p-2"><InlineMath>{"11{,}25 - X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2030</td>
                <td className="p-2"><InlineMath>{"11{,}25 - X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25(11{,}25 - X)"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Так как в 2030 году долг полностью гасится последним платежом:</p>
        <BlockMath>{"1{,}25(11{,}25 - X) = X,"}</BlockMath>
        <BlockMath>{"14{,}0625 - 1{,}25X = X,"}</BlockMath>
        <BlockMath>{"14{,}0625 = 2{,}25X,"}</BlockMath>
        <BlockMath>{"X = 6{,}25."}</BlockMath>
        
        <p>Платежи в 2026, 2027, 2028 годах равны только начисленным процентам (долг не меняется):</p>
        <BlockMath>{"11{,}25 - 9 = 2{,}25."}</BlockMath>
        
        <p>Общая сумма всех выплат:</p>
        <BlockMath>{"A = 3 \\cdot 2{,}25 + 2 \\cdot 6{,}25 = 6{,}75 + 12{,}5 = 19{,}25."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"19{,}25 \\text{ млн рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 34,
    title: "Задача 34",
    mathA: "\\begin{array}{l} \\text{1 июля 2026 года планируется открыть вклад в банке на 3 года. 30} \\\\ \\text{июня каждого года сумма на счете увеличивается на 25\\% по сравнению с суммой,} \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\text{находящейся на вкладе 29 июня. 1 июля 2027, 2028 и 2029 годов со вклада снимают} \\\\ \\text{одну и ту же сумму. Найдите исходную сумму вклада, если после третьего снятия} \\\\ \\text{на вкладе осталось 0 рублей, а всего было снято 375 000 рублей.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"A"}</InlineMath> — исходная сумма вклада, рублей;</p>
          <p>• <InlineMath>{"X"}</InlineMath> — сумма ежегодного снятия, рублей;</p>
          <p>• <InlineMath>{"p = 1{,}25"}</InlineMath> — множитель роста суммы на счёте при начислении процентов.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Сумма до роста</th>
                <th className="p-2 font-bold text-center">Сумма после роста</th>
                <th className="p-2 font-bold text-center">Снятие</th>
                <th className="p-2 font-bold text-center">Сумма после снятия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1 (2027)</td>
                <td className="p-2"><InlineMath>{"A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25A - X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2 (2028)</td>
                <td className="p-2"><InlineMath>{"1{,}25A - X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25(1{,}25A - X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}5625A - 2{,}25X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3 (2029)</td>
                <td className="p-2"><InlineMath>{"1{,}5625A - 2{,}25X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25(1{,}5625A - 2{,}25X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнения исходя из данных таблицы и условий задачи.</p>
        <p>Так как в третий год счёт полностью обнуляется:</p>
        <BlockMath>{"1{,}25(1{,}5625A - 2{,}25X) = X,"}</BlockMath>
        <BlockMath>{"1{,}953125A - 2{,}8125X = X,"}</BlockMath>
        <BlockMath>{"1{,}953125A = 3{,}8125X. \\quad (1)"}</BlockMath>

        <p>По условию общая сумма снятых денег равна 375 000 рублям:</p>
        <BlockMath>{"3X = 375\\,000 \\implies X = 125\\,000. \\quad (2)"}</BlockMath>

        <p>Подставим (2) в (1):</p>
        <BlockMath>{"1{,}953125A = 3{,}8125 \\cdot 125\\,000 = 476\\,562{,}5,"}</BlockMath>
        <BlockMath>{"A = \\frac{476\\,562{,}5}{1{,}953125} = 244\\,000."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"244\\,000 \\text{ рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 35,
    title: "Задача 35",
    mathA: "\\begin{array}{l} \\text{1 июля 2026 года планируется открыть вклад в банке на 3 года. 30} \\\\ \\text{июня каждого года сумма на счете увеличивается на 20\\% по сравнению с суммой,} \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\text{находящейся на вкладе 29 июня. 1 июля 2027, 2028 и 2029 годов со вклада снимают} \\\\ \\text{одну и ту же сумму. Найдите исходную сумму вклада, если после третьего снятия} \\\\ \\text{на вкладе осталось 0 рублей, а всего было снято 518 400 рублей.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"A"}</InlineMath> — исходная сумма вклада, рублей;</p>
          <p>• <InlineMath>{"X"}</InlineMath> — сумма ежегодного снятия, рублей;</p>
          <p>• <InlineMath>{"p = 1{,}2"}</InlineMath> — множитель роста суммы на счёте при начислении процентов.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Сумма до роста</th>
                <th className="p-2 font-bold text-center">Сумма после роста</th>
                <th className="p-2 font-bold text-center">Снятие</th>
                <th className="p-2 font-bold text-center">Сумма после снятия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1 (2027)</td>
                <td className="p-2"><InlineMath>{"A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2A"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2A - X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2 (2028)</td>
                <td className="p-2"><InlineMath>{"1{,}2A - X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2(1{,}2A - X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}44A - 2{,}2X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3 (2029)</td>
                <td className="p-2"><InlineMath>{"1{,}44A - 2{,}2X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2(1{,}44A - 2{,}2X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнения исходя из данных таблицы и условий задачи.</p>
        <p>Так как в третий год счёт полностью обнуляется:</p>
        <BlockMath>{"1{,}2(1{,}44A - 2{,}2X) = X,"}</BlockMath>
        <BlockMath>{"1{,}728A - 2{,}64X = X,"}</BlockMath>
        <BlockMath>{"1{,}728A = 3{,}64X. \\quad (1)"}</BlockMath>

        <p>По условию:</p>
        <BlockMath>{"3X = 518\\,400 \\implies X = 172\\,800. \\quad (2)"}</BlockMath>

        <p>Подставим (2) в (1):</p>
        <BlockMath>{"1{,}728A = 3{,}64 \\cdot 172\\,800 = 628\\,992,"}</BlockMath>
        <BlockMath>{"A = \\frac{628\\,992}{1{,}728} = 364\\,000."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"364\\,000 \\text{ рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 36,
    title: "Задача 36",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года Николай планирует открыть накопительный счет на} \\\\ \\text{три года. Его условия таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ 1 июля 2026 года Николай помещает на счет 819\\,000 рублей;} \\\\ \\quad \\bullet \\text{ 30 июня каждого года сумма на счете увеличивается на 20\\% по сравнению с} \\\\ \\quad \\quad \\text{суммой, находящейся на счете 29 июня;} \\\\ \\quad \\bullet \\text{ 1 июля 2027, 2028 и 2029 годов Николай снимет со счета некоторую одну и ту} \\\\ \\quad \\quad \\text{же сумму денег;} \\\\ \\quad \\bullet \\text{ 1 июля 2029 года остаток на счете должен оказаться равным 0.} \\\\ \\text{Найдите сумму, которую Николай должен снимать со счета каждый год.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"A = 819\\,000"}</InlineMath> — сумма, помещённая на счёт в 2026 году, рублей;</p>
          <p>• <InlineMath>{"X"}</InlineMath> — искомая сумма ежегодного снятия, рублей;</p>
          <p>• <InlineMath>{"p = 1{,}2"}</InlineMath> — множитель роста суммы на счёте при начислении процентов.</p>
        </div>
        
        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Сумма до роста</th>
                <th className="p-2 font-bold text-center">Сумма после роста</th>
                <th className="p-2 font-bold text-center">Снятие</th>
                <th className="p-2 font-bold text-center">Сумма после снятия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2">819 000</td>
                <td className="p-2">982 800</td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"982\\,800 - X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"982\\,800 - X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2(982\\,800 - X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1\\,179\\,360 - 2{,}2X"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3</td>
                <td className="p-2"><InlineMath>{"1\\,179\\,360 - 2{,}2X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}2(1\\,179\\,360 - 2{,}2X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"X"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>(здесь числа в тыс. рублей записаны для наглядности как есть в рублях)</p>
        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Так как в третий год счёт полностью обнуляется:</p>
        <BlockMath>{"1{,}2(1{,}17936 \\text{ млн} - 2{,}2X) = X."}</BlockMath>

        <p>Удобнее выразить сразу через степени <InlineMath>{"p"}</InlineMath>:</p>
        <BlockMath>{"p^3 \\cdot 819\\,000 = X(p^2 + p + 1)."}</BlockMath>

        <p>Вычислим:</p>
        <BlockMath>{"p^3 = 1{,}728, \\quad p^2 + p + 1 = 1{,}44 + 1{,}2 + 1 = 3{,}64."}</BlockMath>
        <BlockMath>{"1{,}728 \\cdot 819\\,000 = X \\cdot 3{,}64."}</BlockMath>
        <BlockMath>{"1{,}728 \\cdot 819\\,000 = 1\\,415\\,232."}</BlockMath>
        <BlockMath>{"X = \\frac{1\\,415\\,232}{3{,}64} = 388\\,800."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"388\\,800 \\text{ рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 37,
    title: "Задача 37",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года планируется взять кредит на 3 года в размере 800\\,000} \\\\ \\text{рублей. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ в январе 2027 и 2028 годов долг будет возрастать на 10\\% по сравнению с концом} \\\\ \\quad \\quad \\text{предыдущего года;} \\\\ \\quad \\bullet \\text{ в январе 2029 года долг будет возрастать на 20\\% по сравнению с концом преды-} \\\\ \\quad \\quad \\text{дущего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить часть долга.} \\\\ \\text{Сколько рублей будет выплачено банку, если известно, что кредит будет полностью} \\\\ \\text{погашен тремя равными платежами (то есть за три года)?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S = 800\\,000"}</InlineMath> — сумма кредита, рублей;</p>
          <p>• <InlineMath>{"x"}</InlineMath> — величина каждого из трёх равных платежей, рублей;</p>
          <p>• <InlineMath>{"p_1 = 1{,}1"}</InlineMath> — множитель роста долга в 2027 и 2028 годах;</p>
          <p>• <InlineMath>{"p_2 = 1{,}2"}</InlineMath> — множитель роста долга в 2029 году.</p>
        </div>

        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг до роста</th>
                <th className="p-2 font-bold text-center">Ставка</th>
                <th className="p-2 font-bold text-center">Долг после роста</th>
                <th className="p-2 font-bold text-center">Долг после платежа</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2027</td>
                <td className="p-2">800 000</td>
                <td className="p-2">10%</td>
                <td className="p-2">880 000</td>
                <td className="p-2"><InlineMath>{"880\\,000 - x"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2028</td>
                <td className="p-2"><InlineMath>{"880\\,000 - x"}</InlineMath></td>
                <td className="p-2">10%</td>
                <td className="p-2"><InlineMath>{"1{,}1(880\\,000 - x)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"968\\,000 - 1{,}1x - x"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2"><InlineMath>{"968\\,000 - 2{,}1x"}</InlineMath></td>
                <td className="p-2">20%</td>
                <td className="p-2"><InlineMath>{"1{,}2(968\\,000 - 2{,}1x)"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Так как в 2029 году долг полностью гасится третьим платежом:</p>
        <BlockMath>{"1{,}2(968\\,000 - 2{,}1x) = x,"}</BlockMath>
        <BlockMath>{"1\\,161\\,600 - 2{,}52x = x,"}</BlockMath>
        <BlockMath>{"1\\,161\\,600 = 3{,}52x,"}</BlockMath>
        <BlockMath>{"x = \\frac{1\\,161\\,600}{3{,}52} = 330\\,000."}</BlockMath>

        <p>Общая сумма всех выплат:</p>
        <BlockMath>{"3x = 3 \\cdot 330\\,000 = 990\\,000."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"990\\,000 \\text{ рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 38,
    title: "Задача 38",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года планируется взять кредит в банке на некоторую} \\\\ \\text{сумму. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг увеличивается на 25\\% по сравнению с концом предыду-} \\\\ \\quad \\quad \\text{щего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить одним платежом часть} \\\\ \\quad \\quad \\text{долга.} \\\\ \\text{Сколько рублей планируется взять в банке, если известно, что кредит будет пол-} \\\\ \\text{ностью погашен тремя равными платежами (то есть за три года) и общая сумма} \\\\ \\text{платежей после полного погашения кредита должна быть на 65\\,500 рублей больше} \\\\ \\text{суммы, взятой в кредит?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита, рублей;</p>
          <p>• <InlineMath>{"x"}</InlineMath> — величина каждого из трёх равных платежей, рублей;</p>
          <p>• <InlineMath>{"p = 1{,}25"}</InlineMath> — множитель роста долга при начислении процентов.</p>
        </div>

        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг до роста</th>
                <th className="p-2 font-bold text-center">Долг после роста</th>
                <th className="p-2 font-bold text-center">Долг после платежа</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25S - x"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"1{,}25S - x"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25(1{,}25S - x)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}5625S - 2{,}25x"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">3</td>
                <td className="p-2"><InlineMath>{"1{,}5625S - 2{,}25x"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25(1{,}5625S - 2{,}25x)"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим уравнение исходя из данных таблицы и условий задачи.</p>
        <p>Долг после третьего платежа равен нулю:</p>
        <BlockMath>{"1{,}25(1{,}5625S - 2{,}25x) = x,"}</BlockMath>
        <BlockMath>{"1{,}953125S - 2{,}8125x = x,"}</BlockMath>
        <BlockMath>{"1{,}953125S = 3{,}8125x. \\quad (1)"}</BlockMath>

        <p>По условию сумма всех трёх выплат превосходит сумму кредита на 65 500 рублей:</p>
        <BlockMath>{"3x = S + 65\\,500. \\quad (2)"}</BlockMath>

        <p>
          Из (2): <InlineMath>{"x = \\frac{S + 65\\,500}{3}"}</InlineMath>. Подставим в (1):
        </p>
        <BlockMath>{"1{,}953125S = 3{,}8125 \\cdot \\frac{S + 65\\,500}{3}."}</BlockMath>

        <p>Умножим обе части на 3:</p>
        <BlockMath>{"5{,}859375S = 3{,}8125S + 3{,}8125 \\cdot 65\\,500,"}</BlockMath>
        <BlockMath>{"2{,}046875S = 249\\,718{,}75,"}</BlockMath>
        <BlockMath>{"S = \\frac{249\\,718{,}75}{2{,}046875} = 122\\,000."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"122\\,000 \\text{ рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 39,
    title: "Задача 39",
    mathA: "\\begin{array}{l} \\text{15-го июля планируется взять кредит в банке на некоторую сумму на} \\\\ \\text{срок 29 месяцев. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ 1-го числа каждого месяца долг возрастает на 4\\% по сравнению с концом преды-} \\\\ \\quad \\quad \\text{дущего месяца;} \\\\ \\quad \\bullet \\text{ со 2-го по 14-е число каждого месяца необходимо выплатить часть долга;} \\\\ \\quad \\bullet \\text{ 15-го числа каждого месяца долг должен быть на одну и ту же величину меньше} \\\\ \\quad \\quad \\text{долга на 15-е число предыдущего месяца.} \\\\ \\text{Какую сумму планируется взять в кредит, если общая сумма выплат после полного} \\\\ \\text{погашения кредита составит 2,32 млн рублей?} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита, млн. рублей;</p>
          <p>• <InlineMath>{"n = 29"}</InlineMath> — число месяцев;</p>
          <p>• <InlineMath>{"d = \\frac{S}{n}"}</InlineMath> — сумма, на которую ежемесячно уменьшается долг;</p>
          <p>• <InlineMath>{"A"}</InlineMath> — общая сумма всех выплат.</p>
        </div>

        <p>
          Заметим, что долг уменьшается каждый месяц на одну и ту же сумму <InlineMath>{"d"}</InlineMath>, следовательно значения долга образуют арифметическую прогрессию. Долг перед месяцем <InlineMath>{"k"}</InlineMath> равен <InlineMath>{"S - (k - 1)d"}</InlineMath>, а платёж в этом месяце:
        </p>
        <BlockMath>{"X_k = 0{,}04(S - (k - 1)d) + d."}</BlockMath>

        <p>Составим уравнение исходя из условий задачи.</p>
        <p>Сумма всех <InlineMath>{"n"}</InlineMath> платежей:</p>
        <BlockMath>{"A = 0{,}04 \\sum_{k=1}^{n} (S - (k - 1)d) + nd."}</BlockMath>

        <p>По формуле арифметической прогрессии:</p>
        <BlockMath>{"\\sum_{k=1}^{n} (S - (k - 1)d) = nS - d \\cdot \\frac{n(n - 1)}{2}."}</BlockMath>

        <p>Так как <InlineMath>{"nd = S"}</InlineMath>:</p>
        <BlockMath>{"A = 0{,}04 \\left(nS - \\frac{S(n - 1)}{2}\\right) + S = S \\left[0{,}04 \\cdot \\frac{n + 1}{2} + 1\\right] = S[0{,}02(n + 1) + 1]."}</BlockMath>

        <p>Подставим <InlineMath>{"n = 29"}</InlineMath>:</p>
        <BlockMath>{"A = S[0{,}02 \\cdot 30 + 1] = S \\cdot 1{,}6."}</BlockMath>

        <p>По условию <InlineMath>{"A = 2{,}32"}</InlineMath>:</p>
        <BlockMath>{"1{,}6S = 2{,}32,"}</BlockMath>
        <BlockMath>{"S = \\frac{2{,}32}{1{,}6} = 1{,}45."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"1{,}45 \\text{ млн рублей.}"}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 40,
    title: "Задача 40",
    mathA: "\\begin{array}{l} \\text{В июле 2026 года планируется взять кредит на четыре года в банке в} \\\\ \\text{размере } S \\text{ млн рублей, где } S \\text{ --- целое число. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг увеличивается на 25\\% по сравнению с концом предыду-} \\\\ \\quad \\quad \\text{щего года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить одним платежом часть} \\\\ \\quad \\quad \\text{долга;} \\\\ \\quad \\bullet \\text{ в июле каждого года долг должен составлять часть кредита в соответствии со} \\\\ \\quad \\quad \\text{следующей таблицей:} \\\\ \\quad \\quad \\begin{array}{|c|c|c|c|c|c|} \\hline \\text{Месяц и год} & \\text{Июль 2026} & \\text{Июль 2027} & \\text{Июль 2028} & \\text{Июль 2029} & \\text{Июль 2030} \\\\ \\hline \\text{Долг} & S & 0{,}8S & 0{,}6S & 0{,}4S & 0 \\\\ \\hline \\end{array} \\\\ \\text{Найдите наибольшее значение } S \\text{, при котором сумма всех платежей будет меньше 50} \\\\ \\text{млн рублей.} \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита, млн. рублей;</p>
          <p>• <InlineMath>{"p = 1{,}25"}</InlineMath> — множитель роста долга при начислении процентов;</p>
          <p>• <InlineMath>{"A"}</InlineMath> — общая сумма всех выплат, млн. рублей.</p>
        </div>

        <p>
          Долг задан не постоянными абсолютными уменьшениями, а конкретными долями от <InlineMath>{"S"}</InlineMath>, поэтому арифметическая прогрессия не применяется — рассмотрим каждый год отдельно.
        </p>

        <p>Составим таблицу:</p>
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="p-2 font-bold text-center">Год</th>
                <th className="p-2 font-bold text-center">Долг до роста</th>
                <th className="p-2 font-bold text-center">Долг после платежа</th>
                <th className="p-2 font-bold text-center">Платёж</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-center">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2027</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}8S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25S - 0{,}8S = 0{,}45S"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2028</td>
                <td className="p-2"><InlineMath>{"0{,}8S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}6S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25 \\cdot 0{,}8S - 0{,}6S = 0{,}4S"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2029</td>
                <td className="p-2"><InlineMath>{"0{,}6S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"0{,}4S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"1{,}25 \\cdot 0{,}6S - 0{,}4S = 0{,}35S"}</InlineMath></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20">
                <td className="p-2">2030</td>
                <td className="p-2"><InlineMath>{"0{,}4S"}</InlineMath></td>
                <td className="p-2">0</td>
                <td className="p-2"><InlineMath>{"1{,}25 \\cdot 0{,}4S = 0{,}5S"}</InlineMath></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Составим неравенство исходя из данных таблицы и условий задачи.</p>
        <BlockMath>{"A = 0{,}45S + 0{,}4S + 0{,}35S + 0{,}5S = 1{,}7S."}</BlockMath>

        <p>По условию <InlineMath>{"A < 50"}</InlineMath>:</p>
        <BlockMath>{"1{,}7S < 50,"}</BlockMath>
        <BlockMath>{"S < \\frac{50}{1{,}7} \\implies S < \\frac{500}{17} \\implies S < 29\\frac{7}{17}."}</BlockMath>

        <p>Так как <InlineMath>{"S"}</InlineMath> — целое число, наибольшее подходящее значение:</p>
        <BlockMath>{"S = 29."}</BlockMath>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"29."}</InlineMath>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 41,
    title: "Задача 41",
    mathA: "\\begin{array}{l} \\text{Условие. В июле 2024 года планируется взять кредит в банке на некоторую} \\\\ \\text{сумму. Условия его возврата таковы:} \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\\\ \\quad \\bullet \\text{ каждый январь долг возрастает на } r\\% \\text{ по сравнению с концом предыдущего} \\\\ \\quad \\quad \\text{года;} \\\\ \\quad \\bullet \\text{ с февраля по июнь каждого года необходимо выплатить одним платежом часть} \\\\ \\quad \\quad \\text{долга.} \\\\ \\text{Известно, что если ежегодно выплачивать по 65 610 рублей, то кредит будет полно-} \\\\ \\text{стью погашен за 4 года, а если ежегодно выплачивать по 117 450 рублей, то кредит} \\\\ \\text{будет полностью погашен за 2 года. Найдите число } r. \\end{array}",
    mathB: "",
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Решение.</p>
        <p>Обозначения:</p>
        <div className="pl-4 space-y-1">
          <p>• <InlineMath>{"S"}</InlineMath> — сумма кредита, рублей;</p>
          <p>• <InlineMath>{"p = 1 + \\frac{r}{100}"}</InlineMath> — множитель роста долга при начислении процентов;</p>
          <p>• <InlineMath>{"X = 65\\,610"}</InlineMath> — ежегодный платёж при 4-летнем сроке, рублей;</p>
          <p>• <InlineMath>{"Y = 117\\,450"}</InlineMath> — ежегодный платёж при 2-летнем сроке, рублей.</p>
        </div>

        <p>Составим таблицы для обоих вариантов погашения кредита.</p>
        <p>Вариант 1 (срок 4 года, платёж <InlineMath>{"X"}</InlineMath>):</p>

        <div className="overflow-x-auto my-2">
          <table className="min-w-full border-collapse border border-slate-200 dark:border-purple-950/40 text-center text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-purple-950/10">
                <th className="border border-slate-200 dark:border-purple-950/30 p-2 font-bold">Год</th>
                <th className="border border-slate-200 dark:border-purple-950/30 p-2 font-bold">Долг до роста</th>
                <th className="border border-slate-200 dark:border-purple-950/30 p-2 font-bold">Долг после роста</th>
                <th className="border border-slate-200 dark:border-purple-950/30 p-2 font-bold">Долг после платежа</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 dark:border-purple-950/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"pS"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"pS - X"}</InlineMath></td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-purple-950/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"pS - X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"p(pS - X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"p^2S - pX - X"}</InlineMath></td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-purple-950/20">
                <td className="p-2">3</td>
                <td className="p-2"><InlineMath>{"p^2S - pX - X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"p(p^2S - pX - X)"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"p^3S - p^2X - pX - X"}</InlineMath></td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-purple-950/20">
                <td className="p-2">4</td>
                <td className="p-2"><InlineMath>{"p^3S - p^2X - pX - X"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"p(p^3S - p^2X - pX - X)"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Так как на 4-й год кредит полностью погашается, получаем уравнение:</p>
        <BlockMath>{"p^4S - X(p^3 + p^2 + p + 1) = 0 \\implies S = \\frac{X(p^3 + p^2 + p + 1)}{p^4} \\qquad (1)"}</BlockMath>

        <p>Вариант 2 (срок 2 года, платёж <InlineMath>{"Y"}</InlineMath>):</p>

        <div className="overflow-x-auto my-2">
          <table className="min-w-full border-collapse border border-slate-200 dark:border-purple-950/40 text-center text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-purple-950/10">
                <th className="border border-slate-200 dark:border-purple-950/30 p-2 font-bold">Год</th>
                <th className="border border-slate-200 dark:border-purple-950/30 p-2 font-bold">Долг до роста</th>
                <th className="border border-slate-200 dark:border-purple-950/30 p-2 font-bold">Долг после роста</th>
                <th className="border border-slate-200 dark:border-purple-950/30 p-2 font-bold">Долг после платежа</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 dark:border-purple-950/20">
                <td className="p-2">1</td>
                <td className="p-2"><InlineMath>{"S"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"pS"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"pS - Y"}</InlineMath></td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-purple-950/20">
                <td className="p-2">2</td>
                <td className="p-2"><InlineMath>{"pS - Y"}</InlineMath></td>
                <td className="p-2"><InlineMath>{"p(pS - Y)"}</InlineMath></td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Так как на 2-й год кредит полностью погашается, получаем уравнение:</p>
        <BlockMath>{"p^2S - Y(p + 1) = 0 \\implies S = \\frac{Y(p + 1)}{p^2} \\qquad (2)"}</BlockMath>

        <p>Приравняем выражения для <InlineMath>{"S"}</InlineMath> из уравнений (1) и (2):</p>
        <BlockMath>{"\\frac{X(p^3 + p^2 + p + 1)}{p^4} = \\frac{Y(p + 1)}{p^2}"}</BlockMath>

        <p>
          Заметим, что <InlineMath>{"p^3 + p^2 + p + 1 = p^2(p + 1) + (p + 1) = (p + 1)(p^2 + 1)"}</InlineMath>. Подставим это и сократим обе части на <InlineMath>{"\\frac{p + 1}{p^2}"}</InlineMath> (так как <InlineMath>{"p > 1"}</InlineMath>):
        </p>

        <BlockMath>{"\\frac{X(p^2 + 1)}{p^2} = Y \\implies X(p^2 + 1) = Yp^2 \\implies Xp^2 + X = Yp^2"}</BlockMath>
        <BlockMath>{"p^2(Y - X) = X \\implies p^2 = \\frac{X}{Y - X}"}</BlockMath>

        <p>Подставим числовые значения <InlineMath>{"X = 65\\,610"}</InlineMath> и <InlineMath>{"Y = 117\\,450"}</InlineMath>:</p>
        <BlockMath>{"Y - X = 117\\,450 - 65\\,610 = 51\\,840"}</BlockMath>
        <BlockMath>{"p^2 = \\frac{65\\,610}{51\\,840} = \\frac{6561}{5184} = \\frac{81^2}{72^2} = \\left(\\frac{9}{8}\\right)^2 = 1,125^2"}</BlockMath>

        <p>
          Отсюда <InlineMath>{"p = 1,125"}</InlineMath>. Так как <InlineMath>{"p = 1 + \\frac{r}{100} = 1,125"}</InlineMath>, получаем <InlineMath>{"r = 12,5"}</InlineMath>.
        </p>

        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <div style={{ whiteSpace: "nowrap" }}>
            <InlineMath>{"12,5."}</InlineMath>
          </div>
        </div>
      </div>
    )
  }



];






