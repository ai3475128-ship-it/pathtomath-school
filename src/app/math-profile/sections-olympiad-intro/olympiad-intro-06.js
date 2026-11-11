import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

// Dollar signs delimit short inline formulae; displayed formulae are separate steps.
function Explanation({ steps, answer }) {
  return <div className="space-y-4 pt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base">
    <p className="font-bold text-slate-800 dark:text-slate-100">Решение</p>
    {steps.map((step, index) => step.math
      ? <div key={index} className="overflow-x-auto py-1"><BlockMath math={step.math} /></div>
      : <p key={index} className={step.heading ? 'font-bold text-black dark:text-white' : undefined}>{step.text.split(/\$(.*?)\$/g).map((part, i) => i % 2 ? <InlineMath key={i} math={part} /> : part)}</p>)}
    <div className="flex flex-wrap items-baseline gap-2 overflow-x-auto border-t border-slate-100 pt-3 font-bold text-emerald-700 dark:border-purple-950/30 dark:text-emerald-400">
      <span>Ответ:</span> <InlineMath math={answer} />
    </div>
  </div>;
}
const p = (text) => ({ text });
const m = (math) => ({ math });
const heading = (text) => ({ text, heading: true });
const solution = (steps, answer) => function buildSolution() {
  return <Explanation steps={steps} answer={answer} />;
};

export const olympiadIntro06Tasks = [
  {
    id: 1,
    title: 'Задача 1',
    conditionText: 'Решите уравнение.',
    mathA: String.raw`\left|4x-|x-2|+3\right|=16`,
    solutionBuilder: solution([
      p(String.raw`Раскроем внешний модуль через совокупность, затем разделим случаи по знаку выражения $x-2$. Все переходы равносильны.`),
      m(String.raw`\left|4x-|x-2|+3\right|=16\quad\Longleftrightarrow\quad\left[\begin{array}{l}4x-|x-2|+3=16,\\4x-|x-2|+3=-16.\end{array}\right.`),
      m(String.raw`\Longleftrightarrow\quad\left[\begin{array}{l}\begin{cases}x\ge2,\\3x+5=16;\end{cases}\\[5pt]\begin{cases}x\ge2,\\3x+5=-16;\end{cases}\\[5pt]\begin{cases}x<2,\\5x+1=16;\end{cases}\\[5pt]\begin{cases}x<2,\\5x+1=-16.\end{cases}\end{array}\right.`),
      p(String.raw`Во второй системе корень $x=-7$ не удовлетворяет условию $x\ge2$, а в третьей корень $x=3$ не удовлетворяет условию $x<2$. Оставшиеся значения удовлетворяют условиям своих систем, поэтому все переходы обратимы.`),
      m(String.raw`\Longleftrightarrow\quad\left[\begin{array}{l}x=\frac{11}{3},\\x=-\frac{17}{5}.\end{array}\right.`),
    ], String.raw`-\frac{17}{5};\ \frac{11}{3}`),
  },
  {
    id: 2,
    title: 'Задача 2',
    textBefore: <>Найдите остаток от деления многочлена на <InlineMath math="x-1" />.</>,
    mathA: String.raw`P(x)=x^{2023}+2023x^{2022}+2022`,
    solutionBuilder: solution([
      p(String.raw`По теореме об остатке при делении на $x-1$ остаток равен значению многочлена в точке $x=1$. Действительно, если $P(x)=(x-1)Q(x)+r$, то $P(1)=r$.`),
      m(String.raw`r=P(1)=1+2023+2022=4046.`),
    ], String.raw`4046`),
  },
  {
    id: 4,
    title: 'Задача 3',
    conditionText: 'Разложите на множители.',
    mathA: String.raw`x^4+4y^4`,
    solutionBuilder: solution([
      p(String.raw`Добавим и вычтем $4x^2y^2$, чтобы получить разность квадратов:`),
      m(String.raw`x^4+4y^4=(x^2+2y^2)^2-(2xy)^2`),
      m(String.raw`=(x^2-2xy+2y^2)(x^2+2xy+2y^2).`),
    ], String.raw`(x^2-2xy+2y^2)(x^2+2xy+2y^2)`),
  },
  {
    id: 19,
    title: 'Задача 4',
    textBefore: <>Все коэффициенты многочлена <InlineMath math="P(x)" /> — целые числа. Известно, что <InlineMath math="P(1)=1" /> и <InlineMath math="P(n)=0" /> при некотором натуральном <InlineMath math="n" />. Найдите <InlineMath math="n" />.</>,
    solutionBuilder: solution([
      p(String.raw`Для любого целочисленного многочлена разность $P(1)-P(n)$ делится на $1-n$: каждое слагаемое $1-n^k$ делится на $1-n$. Поэтому существует целое число $Q$, для которого`),
      m(String.raw`1=P(1)-P(n)=(1-n)Q.`),
      p(String.raw`Из равенства $1=(1-n)Q$ следует, что целое число $1-n$ — делитель единицы. У $1$ только два целых делителя: $1$ и $-1$. Поскольку $n$ натуральное, $n=1$ невозможно из-за противоречия $P(1)=1$ и $P(n)=0$, а значит $n\ge2$ и $1-n<0$. Поэтому $1-n=-1$, откуда $n=2$.`),
      p(String.raw`Такое значение действительно возможно: например, $P(x)=2-x$ имеет целые коэффициенты и удовлетворяет обоим условиям.`),
    ], String.raw`n=2`),
  },
  {
    id: 5,
    title: 'Задача 5',
    conditionText: 'Решите неравенство.',
    mathA: String.raw`\sqrt{x-2\sqrt{x-1}}+\sqrt{x+8-6\sqrt{x-1}}\le 20`,
    solutionBuilder: solution([
      p(String.raw`Область определения внутреннего корня: $x\ge1$. Выделим полные квадраты: в первом подкоренном выражении представим $x$ как $(x-1)+1$, а во втором — $x+8$ как $(x-1)+9$.`),
      m(String.raw`x-2\sqrt{x-1}=\bigl(\sqrt{x-1}-1\bigr)^2,\qquad x+8-6\sqrt{x-1}=\bigl(\sqrt{x-1}-3\bigr)^2.`),
      m(String.raw`\bigl|\sqrt{x-1}-1\bigr|+\bigl|\sqrt{x-1}-3\bigr|\le20.`),
      p(String.raw`При $1\le x\le2$ левая часть равна $4-2\sqrt{x-1}$, а при $2\le x\le10$ равна $2$: оба промежутка подходят. При $x\ge10$ получаем $2\sqrt{x-1}-4\le20$, откуда $\sqrt{x-1}\le12$ и $x\le145$.`),
      m(String.raw`x\in[1;145].`),
    ], String.raw`x\in[1;145]`),
  },
  {
    id: 6,
    title: 'Задача 6',
    conditionText: 'Разложите на множители.',
    mathA: String.raw`(x+y+z)^3-x^3-y^3-z^3`,
    solutionBuilder: solution([
      p(String.raw`Обозначим исходный многочлен через $F(x,y,z)$. Он симметрический: при перестановке любых двух переменных его значение не меняется. При $x=-y$, $x=-z$ и $y=-z$ он обращается в ноль, поэтому содержит множители $x+y$, $x+z$ и $y+z$.`),
      p(String.raw`Их произведение уже имеет третью степень — ту же, что и однородный многочлен $F$. Поэтому других множителей с переменными остаться не может: отличие состоит только в постоянном коэффициенте $C$. Сначала запишем`),
      m(String.raw`F(x,y,z)=C(x+y)(x+z)(y+z).`),
      p(String.raw`Теперь подставим $x=y=z=1$: слева получаем $24$, справа $8C$. Значит, $C=3$.`),
      m(String.raw`(x+y+z)^3-x^3-y^3-z^3=3(x+y)(x+z)(y+z).`),
    ], String.raw`3(x+y)(x+z)(y+z)`),
  },
  {
    id: 7,
    title: 'Задача 7',
    conditionText: 'Решите уравнение в действительных числах.',
    mathA: String.raw`|1-x-y-xy|+|2x^2y^2-2x^2y-2xy^2+2xy-9|+\frac{|xy|}{xy}=-1`,
    solutionBuilder: solution([
      p(String.raw`По области определения $xy\ne0$. Первые два слагаемых неотрицательны, а дробь равна $1$ или $-1$. Поэтому сумма равна $-1$ только при $xy<0$ и одновременном обращении обоих модулей в ноль.`),
      p(String.raw`Обозначим $s=x+y$, $q=xy$. Первый модуль даёт $s=1-q$. Выражение во втором модуле равно $2q(q-s+1)-9$, поэтому`),
      m(String.raw`2q(q-s+1)=9\quad\Longrightarrow\quad4q^2=9.`),
      p(String.raw`Так как $q<0$, получаем $q=-3/2$, $s=5/2$. Числа $x$ и $y$ — корни квадратного уравнения`),
      m(String.raw`z^2-\frac52z-\frac32=0,\qquad z=3\ \text{или}\ z=-\frac12.`),
      p(String.raw`Обе перестановки удовлетворяют исходному уравнению: произведение отрицательно, а оба выражения под модулем равны нулю.`),
    ], String.raw`(x,y)=\left(3,-\frac12\right),\ \left(-\frac12,3\right)`),
  },
  {
    id: 8,
    title: 'Задача 8',
    conditionText: 'Найдите значение дроби.',
    mathA: String.raw`\frac{2\cdot2020}{1+\frac1{1+2}+\frac1{1+2+3}+\ldots+\frac1{1+2+3+\ldots+2020}}`,
    solutionBuilder: solution([
      p(String.raw`Для суммы первых $k$ натуральных чисел используем формулу $1+2+\ldots+k=k(k+1)/2$. Слагаемые знаменателя при $k\ge2$ раскладываются в телескопическую сумму:`),
      m(String.raw`\frac{1}{1+2+\ldots+k}=\frac{2}{k(k+1)}=2\left(\frac1k-\frac1{k+1}\right).`),
      m(String.raw`1+2\sum_{k=2}^{2020}\left(\frac1k-\frac1{k+1}\right)=1+2\left(\frac12-\frac1{2021}\right)=\frac{4040}{2021}.`),
      p(String.raw`Числитель равен $4040$, следовательно, вся дробь равна $2021$.`),
    ], String.raw`2021`),
  },
  {
    id: 9,
    title: 'Задача 9',
    conditionText: 'Решите неравенство.',
    mathA: String.raw`\sqrt{x^2+2x-3}+\sqrt{x^2+3x-4}\le5(x-1)`,
    solutionBuilder: solution([
      p(String.raw`Разложим оба подкоренных выражения на множители:`),
      m(String.raw`\sqrt{(x-1)(x+3)}+\sqrt{(x-1)(x+4)}\le5(x-1).`),
      p(String.raw`При раскрытии корня из произведения знак каждого множителя имеет значение:`),
      m(String.raw`\sqrt{ab}=\begin{cases}\sqrt a\,\sqrt b,&a\ge0,\ b\ge0,\\\sqrt{-a}\,\sqrt{-b},&a\le0,\ b\le0.\end{cases}`),
      p(String.raw`Совместная область определения корней: $x\le-4$ или $x\ge1$. В первом случае множители под каждым корнем неположительны, но правая часть неравенства отрицательна, а левая неотрицательна. Следовательно, решений там нет. При $x=1$ получаем равенство $0=0$.`),
      p(String.raw`Пусть $x>1$. Теперь все множители под корнями положительны, и используем $\sqrt{ab}=\sqrt a\sqrt b$ для неотрицательных $a,b$. Правую часть представим как $5(\sqrt{x-1})^2$:`),
      m(String.raw`\sqrt{x-1}\bigl(\sqrt{x+3}+\sqrt{x+4}\bigr)\le5\bigl(\sqrt{x-1}\bigr)^2.`),
      p(String.raw`Делим обе части на общий положительный множитель $\sqrt{x-1}$. Обе части полученного неравенства неотрицательны, поэтому возведение в квадрат равносильно:`),
      m(String.raw`\sqrt{x+3}+\sqrt{x+4}\le5\sqrt{x-1}\quad\Longleftrightarrow\quad2\sqrt{(x+3)(x+4)}\le23x-32.`),
      p(String.raw`Левая часть положительна, поэтому дополнительно необходимо $23x-32\ge0$. На этом ограничении второе возведение в квадрат также равносильно:`),
      m(String.raw`\begin{cases}x\ge\frac{32}{23},\\4(x+3)(x+4)\le(23x-32)^2\end{cases}\quad\Longleftrightarrow\quad\begin{cases}x\ge\frac{32}{23},\\525x^2-1500x+976\ge0.\end{cases}`),
      p(String.raw`Корни квадратного трёхчлена равны $(150-2\sqrt{501})/105$ и $(150+2\sqrt{501})/105$. Его коэффициент при $x^2$ положителен; с учётом ограничения $x\ge32/23$ остаётся только промежуток справа от большего корня. Добавляем ранее проверенное значение $x=1$.`),
      m(String.raw`x\in\{1\}\cup\left[\frac{150+2\sqrt{501}}{105};+\infty\right).`),
    ], String.raw`\{1\}\cup\left[\frac{150+2\sqrt{501}}{105};+\infty\right)`),
  },
  {
    id: 10,
    title: 'Задача 10',
    conditionText: 'Разложите на множители.',
    mathA: String.raw`2x^2+5xy+2y^2`,
    solutionBuilder: solution([
      heading('1 способ решения. Через дискриминант.'),
      p(String.raw`Рассмотрим многочлен как квадратный относительно $x$, считая $y$ параметром. Дискриминант и корни уравнения $2x^2+5xy+2y^2=0$ равны`),
      m(String.raw`D=(5y)^2-4\cdot2\cdot2y^2=9y^2,\qquad x_{1,2}=\frac{-5y\pm3|y|}{4}.`),
      p(String.raw`Независимо от знака $y$ пара корней — $-2y$ и $-y/2$; при $y=0$ оба корня равны нулю. Учитывая старший коэффициент $2$, получаем`),
      m(String.raw`2x^2+5xy+2y^2=2(x+2y)\left(x+\frac y2\right)=(x+2y)(2x+y).`),
      heading('2 способ решения. Группировка.'),
      p(String.raw`Разобьём среднее слагаемое на $4xy+xy$ и сгруппируем:`),
      m(String.raw`2x^2+5xy+2y^2=2x(x+2y)+y(x+2y)=(2x+y)(x+2y).`),
      p(String.raw`Равенство верно при любых действительных $x$ и $y$, включая $y=0$.`),
    ], String.raw`(2x+y)(x+2y)`),
  },
  {
    id: 11,
    title: 'Задача 11',
    conditionText: 'Решите уравнение.',
    mathA: String.raw`t^4+8t^3+6t^2-8t+1=0`,
    solutionBuilder: solution([
      p(String.raw`Это обобщённое возвратное уравнение: для его многочлена $P(t)$ выполняется $P(t)=t^4P(-1/t)$ при $t\ne0$. Поэтому здесь удобно объединять $t$ и $-1/t$.`),
      p(String.raw`Число $t=0$ не является корнем. Разделим на $t^2$ и сгруппируем выражения так, чтобы появилась замена $u=t-1/t$:`),
      m(String.raw`t^2+\frac1{t^2}+8\left(t-\frac1t\right)+6=0\quad\Longleftrightarrow\quad u^2+8u+8=0.`),
      m(String.raw`u=-4\pm2\sqrt2,\qquad t^2-ut-1=0.`),
      p(String.raw`Каждому из двух значений $u$ соответствуют два действительных корня квадратного уравнения.`),
      m(String.raw`t=\sqrt2-2\pm\sqrt{7-4\sqrt2}\quad\text{или}\quad t=-2-\sqrt2\pm\sqrt{7+4\sqrt2}.`),
    ], String.raw`\sqrt2-2\pm\sqrt{7-4\sqrt2};\quad -2-\sqrt2\pm\sqrt{7+4\sqrt2}`),
  },
  {
    id: 20,
    title: 'Задача 12',
    textBefore: <>Пусть <InlineMath math="a,b,c" /> — действительные числа. Известно, что <InlineMath math="abc=1" />. Докажите: если выполнено равенство ниже, то одно из чисел равно единице.</>,
    mathA: String.raw`a+b+c=\frac1a+\frac1b+\frac1c`,
    solutionBuilder: solution([
      p(String.raw`Из $abc=1$ следует, что ни одно из чисел не равно нулю и $1/a=bc$, $1/b=ac$, $1/c=ab$. Поэтому условие равносильно равенству`),
      m(String.raw`a+b+c=ab+ac+bc.`),
      p(String.raw`Раскроем скобки в произведении и используем оба условия:`),
      m(String.raw`(a-1)(b-1)(c-1)=abc-(ab+ac+bc)+(a+b+c)-1=0.`),
      p(String.raw`Произведение действительных чисел равно нулю только тогда, когда хотя бы один множитель равен нулю. Следовательно, хотя бы одно из чисел $a$, $b$, $c$ равно $1$.`),
    ], String.raw`a=1\ \text{или}\ b=1\ \text{или}\ c=1`),
  },
  {
    id: 12,
    title: 'Задача 13',
    textBefore: <>Найдите значение выражения, если <InlineMath math={String.raw`x\ne y`} /> и сумма первых двух слагаемых равна третьему.</>,
    mathA: String.raw`\frac1{x^2+1}+\frac1{y^2+1}+\frac2{xy+1}`,
    solutionBuilder: solution([
      p(String.raw`Область определения требует $xy+1\ne0$. По условию разность суммы первых двух слагаемых и третьего равна нулю. Приведём её к общему знаменателю:`),
      m(String.raw`\frac1{x^2+1}+\frac1{y^2+1}-\frac2{xy+1}=\frac{(x-y)^2(xy-1)}{(x^2+1)(y^2+1)(xy+1)}=0.`),
      p(String.raw`Так как $x\ne y$ и знаменатель не равен нулю, получаем $xy=1$. Тогда третье слагаемое равно $1$, а сумма первых двух по условию тоже равна $1$. Значение всего выражения равно $2$.`),
    ], String.raw`2`),
  },
  {
    id: 13,
    title: 'Задача 14',
    conditionText: 'Решите уравнение.',
    mathA: String.raw`\sqrt[3]{15x+1-x^2}+\sqrt[3]{x^2-15x+27}=4`,
    solutionBuilder: solution([
      p(String.raw`Обозначим первый кубический корень через $a$, а второй через $b$. Исходное уравнение даёт $a+b=4$, а сумма подкоренных выражений равна $28$, поэтому получаем систему`),
      m(String.raw`a=\sqrt[3]{15x+1-x^2},\qquad b=\sqrt[3]{x^2-15x+27},\qquad \begin{cases}a+b=4,\\a^3+b^3=28.\end{cases}`),
      p(String.raw`Возведём первое равенство системы в куб и воспользуемся вторым:`),
      m(String.raw`64=(a+b)^3=a^3+b^3+3ab(a+b)=28+12ab,\qquad ab=3.`),
      p(String.raw`Следовательно, $a$ и $b$ — корни уравнения $z^2-4z+3=0$, то есть $(a,b)=(1,3)$ или $(3,1)$. Первый подкоренной многочлен равен соответственно $1$ или $27$.`),
      m(String.raw`15x+1-x^2=1\ \Longrightarrow\ x=0,15;\qquad 15x+1-x^2=27\ \Longrightarrow\ x=2,13.`),
      p(String.raw`Во всех четырёх случаях второй куб равен соответственно $27$ или $1$, поэтому каждое найденное значение подходит.`),
    ], String.raw`x\in\{0;2;13;15\}`),
  },
  {
    id: 14,
    title: 'Задача 15',
    textBefore: <>Докажите неравенство при всех положительных <InlineMath math="x" />.</>,
    mathA: String.raw`(1+x+x^2)(1+x+x^2+x^3+x^4)\le(1+x+x^2+x^3)^2`,
    solutionBuilder: solution([
      p(String.raw`При $x=1$ проверяем исходное неравенство непосредственно: $3\cdot5\le4^2$. Далее пусть $x>0$ и $x\ne1$; тогда $(x-1)^2>0$, поэтому умножение на него сохраняет знак неравенства и является равносильным переходом.`),
      p(String.raw`Используем формулу суммы геометрической прогрессии: $1+x+\ldots+x^k=(x^{k+1}-1)/(x-1)$. После умножения на $(x-1)^2$ знаменатели сокращаются:`),
      m(String.raw`(x^3-1)(x^5-1)\le(x^4-1)^2.`),
      p(String.raw`Теперь раскроем скобки и найдём разность правой и левой частей:`),
      m(String.raw`(x^4-1)^2-(x^3-1)(x^5-1)=x^5-2x^4+x^3=x^3(x-1)^2\ge0.`),
      p(String.raw`При $x>0$, $x\ne1$ эта разность положительна; случай $x=1$ уже проверен. Следовательно, исходное неравенство верно для всех положительных $x$.`),
    ], String.raw`\text{неравенство верно при всех }x>0`),
  },
  {
    id: 15,
    title: 'Задача 16',
    conditionText: 'Решите уравнение.',
    mathA: String.raw`\sqrt{x^2+2x+3}-\sqrt{x^2+1}=\sqrt{x^2-2x-3}-\sqrt{x^2-1}`,
    solutionBuilder: solution([
      p(String.raw`Из условия $x^2-2x-3\ge0$ получаем $x\le-1$ или $x\ge3$; на этих промежутках и $x^2-1\ge0$. При $x=-1$ обе части равны нулю.`),
      p(String.raw`Пусть теперь $x\ne-1$. Умножим каждую разность корней на сопряжённое выражение. Все знаменатели ниже положительны:`),
      m(String.raw`\frac{2(x+1)}{\sqrt{x^2+2x+3}+\sqrt{x^2+1}}=\frac{-2(x+1)}{\sqrt{x^2-2x-3}+\sqrt{x^2-1}}.`),
      p(String.raw`При $x\ne-1$ числители имеют противоположные знаки, а знаменатели положительны. Равенство невозможно. Следовательно, остаётся только проверенное значение $x=-1$.`),
    ], String.raw`x=-1`),
  },
  {
    id: 16,
    title: 'Задача 17',
    conditionText: 'Вместо многоточий вставьте числа так, чтобы равенство стало тождеством.',
    mathA: String.raw`(x^2+\ldots\,x+2)(x+3)=(x+\ldots)(x^2+\ldots\,x+6)`,
    solutionBuilder: solution([
      p(String.raw`Обозначим пропущенные числа слева направо через $A$, $B$, $C$ и сравним коэффициенты одинаковых степеней $x$.`),
      m(String.raw`x^3+(A+3)x^2+(3A+2)x+6=x^3+(B+C)x^2+(6+BC)x+6B.`),
      p(String.raw`Из свободного члена получаем $B=1$. Сравнение коэффициентов при $x^2$ даёт $C=A+2$, а при $x$ — $3A+2=6+C$. Отсюда $A=3$, $C=5$.`),
      m(String.raw`(x^2+3x+2)(x+3)=(x+1)(x^2+5x+6).`),
    ], String.raw`3;\ 1;\ 5`),
  },
  {
    id: 17,
    title: 'Задача 18',
    conditionText: 'Решите неравенство.',
    mathA: String.raw`x\ge\sqrt{2+\sqrt{2+x}}`,
    solutionBuilder: solution([
      p(String.raw`Правая часть неотрицательна, поэтому необходимо $x\ge0$. Введём $t=\sqrt{2+x}$; тогда $t\ge\sqrt2$, $x=t^2-2$, а исходное неравенство равносильно $t^2-2\ge\sqrt{2+t}$.`),
      p(String.raw`Найдём границу, где выполняется равенство. Для неё имеем систему`),
      m(String.raw`\begin{cases}t=\sqrt{2+x},\\x=\sqrt{2+t},\end{cases}\qquad x\ge0,\quad t\ge0.`),
      p(String.raw`Возводим оба равенства в квадрат и вычитаем одно из другого:`),
      m(String.raw`t^2-x=2,\quad x^2-t=2\quad\Longrightarrow\quad(t-x)(t+x+1)=0.`),
      p(String.raw`Так как $t+x+1>0$, получаем $t=x$. Тогда $x^2-x-2=0$, и с учётом $x\ge0$ единственный кандидат — $x=t=2$. Подстановка подтверждает равенство.`),
      p(String.raw`Чтобы определить сторону от границы, рассмотрим функцию $f(t)=t^2-2-\sqrt{t+2}$. На $t\ge\sqrt2$ она строго возрастает, поскольку $f'(t)=2t-1/(2\sqrt{t+2})>0$. Поэтому $f(t)\ge0$ равносильно $t\ge2$, а значит $x=t^2-2\ge2$.`),
    ], String.raw`x\in[2;+\infty)`),
  },
  {
    id: 3,
    title: 'Задача 19',
    conditionText: 'Решите уравнение.',
    mathA: String.raw`\sqrt{x^2+1}+\sqrt{x^2+4x+8}=\sqrt{13}`,
    solutionBuilder: solution([
      p(String.raw`Представим каждый корень как длину вектора. Заметим, что $x^2+4x+8=(x+2)^2+2^2$. Длина не меняется при смене знака координаты: $(-x)^2=x^2$. Поэтому выберем $\vec u=(-x,1)$ и $\vec v=(x+2,2)$: переменные части в их сумме сократятся, а длины останутся равными исходным корням.`),
      m(String.raw`|\vec u|=\sqrt{x^2+1},\qquad |\vec v|=\sqrt{x^2+4x+8},\qquad \vec u+\vec v=(2,3),\quad |\vec u+\vec v|=\sqrt{13}.`),
      p(String.raw`Исходное уравнение имеет вид $|\vec u|+|\vec v|=|\vec u+\vec v|$. По неравенству треугольника равенство достигается тогда и только тогда, когда ненулевые векторы сонаправлены. Их вторые координаты равны $1$ и $2$, поэтому обязательно $\vec v=2\vec u$.`),
      m(String.raw`x+2=-2x\quad\Longleftrightarrow\quad x=-\frac23.`),
      p(String.raw`При этом значении действительно $\vec v=2\vec u$, поэтому равенство выполняется.`),
    ], String.raw`x=-\frac23`),
  },
  {
    id: 18,
    title: 'Задача 20',
    textBefore: <>Для действительных чисел <InlineMath math="a" /> и <InlineMath math="b" /> выполнены равенства. Какие значения может принимать выражение <InlineMath math={String.raw`a^2+b^2`} />?</>,
    mathA: String.raw`\begin{cases}a^3-3ab^2=11,\\b^3-3a^2b=2.\end{cases}`,
    solutionBuilder: solution([
      heading('1 способ решения. Согласование степеней.'),
      p(String.raw`Хотим получить выражение только через $a^2+b^2$, но в исходных равенствах все одночлены имеют третью степень, а в искомой сумме — вторую. Будем приводить их к общей степени: наименьшая подходящая степень равна $\operatorname{НОК}(2,3)=6$. К ней можно прийти, возведя каждое кубическое выражение в квадрат, а сумму квадратов — в куб.`),
      p(String.raw`Это подсказывает сложить квадраты левых частей двух равенств: при раскрытии скобок смешанные слагаемые складываются именно в коэффициенты куба суммы.`),
      m(String.raw`(a^3-3ab^2)^2+(b^3-3a^2b)^2=a^6+3a^4b^2+3a^2b^4+b^6=(a^2+b^2)^3.`),
      m(String.raw`(a^2+b^2)^3=11^2+2^2=125.`),
      p(String.raw`Таким образом, $a^2+b^2=5$. Чтобы подтвердить существование подходящей пары, подставим $a=-1$, $b=2$: оба исходных равенства выполняются.`),
      heading('2 способ решения. Сложение и вычитание уравнений.'),
      p(String.raw`Сложим уравнения и вычтем второе из первого:`),
      m(String.raw`(a+b)(a^2-4ab+b^2)=13,\qquad (a-b)(a^2+4ab+b^2)=9.`),
      p(String.raw`Из второго исходного уравнения $b\ne0$. Кроме того, $a\ne b$, поскольку в противном случае разность была бы равна нулю, а не $9$. Введём $t=a/b$ и поделим первое из полученных равенств на второе:`),
      m(String.raw`\frac{13}{9}=\frac{(t+1)(t^2-4t+1)}{(t-1)(t^2+4t+1)}.`),
      p(String.raw`Знаменатель не равен нулю из второго равенства. После перекрёстного умножения и разложения получаем`),
      m(String.raw`2t^3+33t^2-6t-11=(2t+1)(t^2+16t-11)=0,`),
      m(String.raw`t=-\frac12\quad\text{или}\quad t=-8\pm5\sqrt3.`),
      p(String.raw`Из второго исходного уравнения $b^3(1-3t^2)=2$. Для $t=-1/2$ получаем $(a,b)=(-1,2)$. Для двух остальных значений, подставляя их в это равенство и используя действительный кубический корень, получаем соответственно пары`),
      m(String.raw`(a,b)=\left(\frac12+\sqrt3,-1+\frac{\sqrt3}{2}\right),\qquad \left(\frac12-\sqrt3,-1-\frac{\sqrt3}{2}\right).`),
      p(String.raw`Прямая подстановка подтверждает обе пары. Для каждой из трёх найденных пар $a^2+b^2=5$; других значений отношения $a/b$ нет.`),
    ], String.raw`5`),
  },
];
