import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

// Dollar signs delimit short inline formulae; displayed formulae are separate steps.
function Explanation({ steps, answer }) {
  return <div className="space-y-4 pt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base">
    <p className="font-bold text-slate-800 dark:text-slate-100">Решение</p>
    {steps.map((step, index) => step.math
      ? <div key={index} className="overflow-x-auto py-1"><BlockMath math={step.math} /></div>
      : <p key={index}>{step.text.split(/\$(.*?)\$/g).map((part, i) => i % 2 ? <InlineMath key={i} math={part} /> : part)}</p>)}
    <div className="flex flex-wrap items-baseline gap-2 overflow-x-auto border-t border-slate-100 pt-3 font-bold text-emerald-700 dark:border-purple-950/30 dark:text-emerald-400">
      <span>Ответ:</span> <InlineMath math={answer} />
    </div>
  </div>;
}
const p = (text) => ({ text });
const m = (math) => ({ math });
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
      p(String.raw`При $x\ge 2$ имеем $|x-2|=x-2$, поэтому $|3x+5|=16$. Из двух полученных корней условию $x\ge 2$ удовлетворяет только $x=11/3$.`),
      p(String.raw`При $x<2$ имеем $|x-2|=2-x$, поэтому $|5x+1|=16$. Из двух корней условию $x<2$ удовлетворяет только $x=-17/5$.`),
      m(String.raw`x=\frac{11}{3}\quad\text{или}\quad x=-\frac{17}{5}.`),
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
    id: 3,
    title: 'Задача 3',
    conditionText: 'Решите уравнение.',
    mathA: String.raw`\sqrt{x^2+1}+\sqrt{x^2+4x+8}=\sqrt{13}`,
    solutionBuilder: solution([
      p(String.raw`Обозначим $M=(x,0)$, $A=(0,1)$ и $B=(-2,-2)$. Левая часть — сумма расстояний $AM+MB$, а расстояние $AB=\sqrt{(-2)^2+(-3)^2}=\sqrt{13}$.`),
      p(String.raw`По неравенству треугольника $AM+MB\ge AB$; равенство достигается ровно тогда, когда точка $M$ лежит на отрезке $AB$. Прямая $AB$ пересекает ось абсцисс на трети пути от $A$ к $B$, поэтому $x=-2/3$.`),
      p(String.raw`При $x=-2/3$ действительно получаем $AM=\sqrt{13}/3$, $MB=2\sqrt{13}/3$.`),
    ], String.raw`x=-\frac23`),
  },
  {
    id: 4,
    title: 'Задача 4',
    conditionText: 'Разложите на множители.',
    mathA: String.raw`x^4+4y^4`,
    solutionBuilder: solution([
      p(String.raw`Добавим и вычтем $4x^2y^2$, чтобы получить разность квадратов:`),
      m(String.raw`x^4+4y^4=(x^2+2y^2)^2-(2xy)^2`),
      m(String.raw`=(x^2-2xy+2y^2)(x^2+2xy+2y^2).`),
    ], String.raw`(x^2-2xy+2y^2)(x^2+2xy+2y^2)`),
  },
  {
    id: 5,
    title: 'Задача 5',
    conditionText: 'Решите неравенство.',
    mathA: String.raw`\sqrt{x-2\sqrt{x-1}}+\sqrt{x+8-6\sqrt{x-1}}\le 20`,
    solutionBuilder: solution([
      p(String.raw`Область определения внутреннего корня: $x\ge1$. Положим $t=\sqrt{x-1}\ge0$, тогда $x=t^2+1$. Оба подкоренных выражения являются квадратами:`),
      m(String.raw`\sqrt{(t-1)^2}+\sqrt{(t-3)^2}=|t-1|+|t-3|\le20.`),
      p(String.raw`При $0\le t\le1$ левая часть равна $4-2t$; при $1\le t\le3$ она равна $2$; при $t\ge3$ — $2t-4$. Первые два промежутка подходят целиком, а в третьем получаем $t\le12$.`),
      m(String.raw`0\le t\le12\quad\Longleftrightarrow\quad1\le x\le145.`),
    ], String.raw`x\in[1;145]`),
  },
  {
    id: 6,
    title: 'Задача 6',
    conditionText: 'Разложите на множители.',
    mathA: String.raw`(x+y+z)^3-x^3-y^3-z^3`,
    solutionBuilder: solution([
      p(String.raw`Выражение обращается в ноль при $x=-y$, $x=-z$ и $y=-z$, поэтому оно делится на $x+y$, $x+z$ и $y+z$. Это однородный многочлен третьей степени, значит после выделения этих трёх множителей остаётся числовой коэффициент.`),
      p(String.raw`При $x=y=z=1$ исходное выражение равно $24$, а произведение трёх множителей равно $8$. Коэффициент равен $3$.`),
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
      p(String.raw`Левая часть неотрицательна, поэтому правая тоже должна быть неотрицательной: $x\ge1$. При $x=1$ получаем верное равенство. Далее положим $t=x-1>0$:`),
      m(String.raw`\sqrt{t(t+4)}+\sqrt{t(t+5)}\le5t\quad\Longleftrightarrow\quad\sqrt{t+4}+\sqrt{t+5}\le5\sqrt t.`),
      p(String.raw`Для $t>0$ разделим на $\sqrt t$: функция $\sqrt{1+4/t}+\sqrt{1+5/t}$ строго убывает. Поэтому достаточно найти единственную границу, где она равна $5$.`),
      p(String.raw`При возведении равенства $\sqrt{t+4}+\sqrt{t+5}=5\sqrt t$ в квадрат получаем $2\sqrt{(t+4)(t+5)}=23t-9$, откуда обязательно $t\ge9/23$. После второго возведения в квадрат:`),
      m(String.raw`4(t+4)(t+5)=(23t-9)^2\quad\Longleftrightarrow\quad525t^2-450t+1=0.`),
      p(String.raw`Меньший корень $(45-2\sqrt{501})/105$ не удовлетворяет условию $t\ge9/23$, а больший ему удовлетворяет. На указанной области оба возведения в квадрат обратимы. По убыванию функции подходят все $t$ не меньше большего корня.`),
      m(String.raw`x=1\quad\text{или}\quad x\ge 1+\frac{45+2\sqrt{501}}{105}.`),
    ], String.raw`\{1\}\cup\left[\frac{150+2\sqrt{501}}{105};+\infty\right)`),
  },
  {
    id: 10,
    title: 'Задача 10',
    conditionText: 'Разложите на множители.',
    mathA: String.raw`2x^2+5xy+2y^2`,
    solutionBuilder: solution([
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
      p(String.raw`Число $t=0$ не является корнем. Разделим на $t^2$ и сгруппируем выражения так, чтобы появилась замена $u=t-1/t$:`),
      m(String.raw`t^2+\frac1{t^2}+8\left(t-\frac1t\right)+6=0\quad\Longleftrightarrow\quad u^2+8u+8=0.`),
      m(String.raw`u=-4\pm2\sqrt2,\qquad t^2-ut-1=0.`),
      p(String.raw`Каждому из двух значений $u$ соответствуют два действительных корня квадратного уравнения.`),
      m(String.raw`t=\sqrt2-2\pm\sqrt{7-4\sqrt2}\quad\text{или}\quad t=-2-\sqrt2\pm\sqrt{7+4\sqrt2}.`),
    ], String.raw`\sqrt2-2\pm\sqrt{7-4\sqrt2};\quad -2-\sqrt2\pm\sqrt{7+4\sqrt2}`),
  },
  {
    id: 12,
    title: 'Задача 12',
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
    title: 'Задача 13',
    conditionText: 'Решите уравнение.',
    mathA: String.raw`\sqrt[3]{15x+1-x^2}+\sqrt[3]{x^2-15x+27}=4`,
    solutionBuilder: solution([
      p(String.raw`Обозначим два кубических корня через $u$ и $v$. Тогда $u+v=4$, а сумма их кубов равна $28$. По формуле куба суммы:`),
      m(String.raw`64=u^3+v^3+3uv(u+v)=28+12uv,\qquad uv=3.`),
      p(String.raw`Следовательно, $u$ и $v$ — корни уравнения $z^2-4z+3=0$, то есть они равны $1$ и $3$ в некотором порядке. Первый подкоренной многочлен равен либо $1$, либо $27$.`),
      m(String.raw`15x+1-x^2=1\ \Longrightarrow\ x=0,15;\qquad 15x+1-x^2=27\ \Longrightarrow\ x=2,13.`),
      p(String.raw`Во всех четырёх случаях второй куб равен соответственно $27$ или $1$, поэтому каждое найденное значение подходит.`),
    ], String.raw`x\in\{0;2;13;15\}`),
  },
  {
    id: 14,
    title: 'Задача 14',
    textBefore: <>Докажите неравенство при всех положительных <InlineMath math="x" />.</>,
    mathA: String.raw`(1+x+x^2)(1+x+x^2+x^3+x^4)\le(1+x+x^2+x^3)^2`,
    solutionBuilder: solution([
      p(String.raw`Вычтем левую часть из правой и раскроем скобки:`),
      m(String.raw`(1+x+x^2+x^3)^2-(1+x+x^2)(1+x+x^2+x^3+x^4)=x^3.`),
      p(String.raw`При $x>0$ имеем $x^3>0$. Следовательно, правая часть исходного неравенства строго больше левой; утверждение доказано.`),
    ], String.raw`\text{неравенство верно при всех }x>0`),
  },
  {
    id: 15,
    title: 'Задача 15',
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
    title: 'Задача 16',
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
    title: 'Задача 17',
    conditionText: 'Решите неравенство.',
    mathA: String.raw`x\ge\sqrt{2+\sqrt{2+x}}`,
    solutionBuilder: solution([
      p(String.raw`Правая часть неотрицательна, поэтому необходимо $x\ge0$. Сравним $x$ с числом $2$.`),
      p(String.raw`Если $0\le x<2$, то $x^2<x+2$, значит $\sqrt{x+2}>x$. Поэтому $2+\sqrt{x+2}>x+2>x^2$, и исходное неравенство не выполняется.`),
      p(String.raw`Если $x\ge2$, то $x^2\ge x+2$ и $\sqrt{x+2}\le x$. Отсюда $2+\sqrt{x+2}\le x+2\le x^2$, поэтому исходное неравенство выполняется. При $x=2$ достигается равенство.`),
    ], String.raw`x\in[2;+\infty)`),
  },
  {
    id: 18,
    title: 'Задача 18',
    textBefore: <>Для действительных чисел <InlineMath math="a" /> и <InlineMath math="b" /> выполнены равенства. Какие значения может принимать выражение <InlineMath math={String.raw`a^2+b^2`} />?</>,
    mathA: String.raw`\begin{cases}a^3-3ab^2=11,\\b^3-3a^2b=2.\end{cases}`,
    solutionBuilder: solution([
      p(String.raw`Способ 1. Согласование степеней.`),
      p(String.raw`Искомое выражение имеет степень $2$, а в уравнениях стоят выражения степени $3$. Чтобы получить одинаковую степень $6$, берём наименьшее общее кратное: $\operatorname{НОК}(2,3)=6$. Поэтому естественно возвести $a^2+b^2$ в третью степень, а обе части каждого уравнения — в квадрат, после чего сложить.`),
      m(String.raw`(a^3-3ab^2)^2+(b^3-3a^2b)^2=(a^2+b^2)^3=11^2+2^2=125.`),
      p(String.raw`Таким образом, $a^2+b^2=5$. Чтобы подтвердить существование подходящей пары, подставим $a=-1$, $b=2$: оба исходных равенства выполняются.`),
      p(String.raw`Способ 2. Сложение и вычитание уравнений, затем замена отношения.`),
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
