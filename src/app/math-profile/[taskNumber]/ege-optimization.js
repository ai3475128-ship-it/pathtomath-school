import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import DerivativeAxis from './DerivativeAxis';

function Solution({ children, axis, conclusion, answer }) {
  return (
    <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
      <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Подробный разбор и ход решения:</p>
      {children}
      <DerivativeAxis {...axis} />
      <p>{conclusion}</p>
      <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
        <span>Ответ:</span> {answer}
      </div>
    </div>
  );
}

function Formula({ children }) {
  return <div className="overflow-x-auto"><BlockMath math={children} /></div>;
}

export const egeOptimizationTasks = [
  {
    id: 1,
    title: 'Задача 1',
    textBefore: (
      <>
        К блоку солнечных панелей с электродвижущей силой <InlineMath math={'\\varepsilon = 60'} /> В и внутренним сопротивлением <InlineMath math={'r = 0{,}8'} /> Ом подключена зарядная станция. Сила тока в цепи при этом подключении определяется законом Ома:
      </>
    ),
    mathA: 'I = \\frac{\\varepsilon}{r + R}',
    textAfter: (
      <>
        где <InlineMath math="R" /> — сопротивление зарядной станции (в омах). Тепловая мощность в ваттах, выделяемая на зарядной станции, по закону Джоуля–Ленца равна <InlineMath math="P = I^2 R" />. При каком сопротивлении <InlineMath math="R" /> зарядной станции выделяемая на ней тепловая мощность <InlineMath math="P" /> будет наибольшей?
      </>
    ),
    solutionBuilder: () => (
      <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-4 border-t border-slate-200/40">Подробный разбор и ход решения:</p>
        <p>
          Подставим выражение для силы тока в формулу мощности. Сопротивление зарядной станции неотрицательно: <InlineMath math={'R \\geqslant 0'} />.
        </p>
        <div className="overflow-x-auto"><BlockMath math={'P(R) = I^2R = \\frac{\\varepsilon^2 R}{(r + R)^2} = \\frac{3600R}{(0{,}8 + R)^2}'} /></div>
        <p>Найдём производную мощности по сопротивлению:</p>
        <div className="overflow-x-auto"><BlockMath math={"P'(R) = \\frac{3600(0{,}8 - R)}{(0{,}8 + R)^3}"} /></div>
        <DerivativeAxis variable="R" left="0" point="0{,}8" right={String.raw`+\infty`} leftClosed />
        <p>
          Знаменатель положителен при <InlineMath math={'R \\geqslant 0'} />. Поэтому производная положительна при <InlineMath math={'0 \\leqslant R < 0{,}8'} />, равна нулю при <InlineMath math={'R = 0{,}8'} /> и отрицательна при <InlineMath math={'R > 0{,}8'} />. Значит, мощность сначала возрастает, а затем убывает и достигает наибольшего значения при <InlineMath math={'R = 0{,}8'} /> Ом.
        </p>
        <p>Максимальная мощность: <InlineMath math={'P(0{,}8) = 1125'} /> Вт.</p>
        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ:</span>
          <InlineMath math={'0{,}8 \\text{ Ом}'} />
        </div>
      </div>
    ),
  },

  {
    id: 2,
    title: 'Задача 2',
    textBefore: <>Распределение скорости молекулы кислорода при тепловом движении имеет функцию плотности</>,
    mathA: String.raw`f(v)=4\pi v^2\left(\frac{M}{2\pi RT}\right)^{3/2}\cdot e^{-\frac{Mv^2}{2RT}}`,
    textAfter: <>(распределение Максвелла). В этой формуле <InlineMath math="v" /> — скорость молекулы в м/с, <InlineMath math="R" /> — универсальная газовая постоянная, <InlineMath math="M = 0{,}032" /> кг/моль — молярная масса кислорода, <InlineMath math="T" /> — температура газа в кельвинах. При каком значении скорости <InlineMath math="v" /> функция плотности принимает наибольшее значение, если <InlineMath math="T = 500" /> К?</>,
    solutionBuilder: () => (
      <Solution axis={{variable:'v',left:'0',point:String.raw`\sqrt{2RT/M}`,right:String.raw`+\infty`,leftClosed:true}}
        conclusion={<>При <InlineMath math={String.raw`0<v<\sqrt{2RT/M}`} /> плотность возрастает, а при <InlineMath math={String.raw`v>\sqrt{2RT/M}`} /> убывает. Значит, найденная точка даёт максимум на <InlineMath math={String.raw`v\geqslant 0`} />.</>}
        answer={<InlineMath math={String.raw`125\sqrt{2R}\ \text{м/с}`} />}>
        <p>Скорость неотрицательна, а все постоянные в условии положительны. Обозначим положительный множитель перед <InlineMath math={String.raw`v^2e^{-Mv^2/(2RT)}`} /> через <InlineMath math="K" />.</p>
        <Formula>{String.raw`f(v)=Kv^2e^{-Mv^2/(2RT)},\qquad f'(v)=Kv e^{-Mv^2/(2RT)}\left(2-\frac{Mv^2}{RT}\right)`}</Formula>
        <p>При <InlineMath math="v>0" /> знак производной определяется скобкой. Отсюда единственная внутренняя критическая точка:</p>
        <Formula>{String.raw`2-\frac{Mv^2}{RT}=0\quad\Rightarrow\quad v_*=\sqrt{\frac{2RT}{M}}=\sqrt{\frac{2R\cdot500}{0{,}032}}=125\sqrt{2R}`}</Formula>
        <p>При <InlineMath math="v=0" /> плотность равна нулю. Максимальное значение плотности равно</p>
        <Formula>{String.raw`f(v_*)=4\pi\frac{2RT}{M}\left(\frac{M}{2\pi RT}\right)^{3/2}e^{-1}`}</Formula>
      </Solution>
    ),
  },
  {
    id: 3,
    title: 'Задача 3',
    textBefore: <>При подключении источника переменного тока к цепи, состоящей из конденсатора, резистора и катушки индуктивности, амплитуда напряжения на катушке (в вольтах) подчиняется закону</>,
    mathA: String.raw`U_L(\omega)=\frac{UL\omega}{\sqrt{R^2+\left(\omega L-\frac{1}{\omega C}\right)^2}}`,
    textAfter: <>где <InlineMath math="U" /> — амплитуда напряжения на источнике тока, <InlineMath math="L" /> — индуктивность катушки, <InlineMath math={String.raw`\omega`} /> — частота переменного тока (в с⁻¹), <InlineMath math="R" /> — сопротивление резистора, <InlineMath math="C" /> — ёмкость конденсатора. При какой частоте <InlineMath math={String.raw`\omega`} /> амплитуда напряжения на катушке будет наибольшей, если <InlineMath math="U=180" /> В, <InlineMath math="L=0{,}045" /> Гн, <InlineMath math={String.raw`C=2{,}5\cdot10^{-5}`} /> Ф и <InlineMath math="R=20" /> Ом?</>,
    solutionBuilder: () => (
      <Solution axis={{variable:String.raw`\omega`,left:'0',point:'1000',right:String.raw`+\infty`}}
        conclusion={<>На <InlineMath math="(0;1000)" /> напряжение возрастает, а на <InlineMath math={String.raw`(1000;+\infty)`} /> убывает, поэтому при частоте 1000 достигается максимум.</>}
        answer={<InlineMath math={String.raw`1000\ \text{с}^{-1}`} />}>
        <p>Рассматриваем положительные частоты. Введём положительное выражение <InlineMath math={String.raw`D=R^2+(\omega L-1/(\omega C))^2`} /> и продифференцируем:</p>
        <Formula>{String.raw`U_L'(\omega)=\frac{UL\,[2-C(2L-R^2C)\omega^2]}{C^2\omega^2D^{3/2}}`}</Formula>
        <p>Знаменатель и <InlineMath math="UL" /> положительны. Подставляя данные, получаем:</p>
        <Formula>{String.raw`2L-R^2C=0{,}08,\quad 2-0{,}000002\omega^2=0\quad\Rightarrow\quad\omega_*=1000`}</Formula>
        <p>До этой точки числитель положителен, после неё отрицателен. Подстановка даёт максимальное напряжение:</p>
        <Formula>{String.raw`U_L(1000)=\frac{180\cdot45}{\sqrt{20^2+(45-40)^2}}=\frac{1620}{\sqrt{17}}\ \text{В}`}</Formula>
      </Solution>
    ),
  },
  {
    id: 4,
    title: 'Задача 4',
    textBefore: <>На противоположных берегах прямого участка реки друг напротив друга на расстоянии <InlineMath math="h" /> расположены пристани А и Б. Путник переправляется на лодке от пристани А на противоположный берег. Зная, что собственная скорость лодки <InlineMath math="v" /> меньше скорости течения реки <InlineMath math="u" /> (лодку будет сносить течением), путник направляет лодку под углом <InlineMath math={String.raw`\alpha`} /> к направлению течения. В итоге лодку сносит течением и путник прибывает к противоположному берегу реки в точку В, находящуюся от пристани Б на расстоянии <InlineMath math="l" />, которое выражается формулой</>,
    mathA: String.raw`l=h\cdot\frac{u+v\cos\alpha}{v\sin\alpha}`,
    textAfter: <>Найдите наименьшее возможное расстояние <InlineMath math="l" />, если <InlineMath math="h=85" /> м, <InlineMath math="u=1{,}3" /> м/с, <InlineMath math="v=0{,}5" /> м/с.</>,
    solutionBuilder: () => (
      <Solution axis={{variable:String.raw`\alpha`,left:'0',point:String.raw`\arccos(-5/13)`,right:String.raw`\pi`,leftSign:'−',rightSign:'+',rightInfinite:false}}
        conclusion={<>На <InlineMath math={String.raw`(0;\alpha_*)`} /> расстояние убывает, а на <InlineMath math={String.raw`(\alpha_*;\pi)`} /> возрастает. Следовательно, в точке <InlineMath math={String.raw`\alpha_*`} /> достигается минимум.</>}
        answer={<InlineMath math={String.raw`204\ \text{м}`} />}>
        <p>Для переправы на противоположный берег требуется <InlineMath math={String.raw`0<\alpha<\pi`} />. Производная по углу равна</p>
        <Formula>{String.raw`l'(\alpha)=-\frac{h(u\cos\alpha+v)}{v\sin^2\alpha}`}</Formula>
        <p>Знаменатель положителен; производная равна нулю только при</p>
        <Formula>{String.raw`\cos\alpha_*=-\frac{v}{u}=-\frac{5}{13},\qquad \sin\alpha_*=\frac{12}{13}`}</Formula>
        <p>Подставим в формулу расстояния:</p>
        <Formula>{String.raw`l_{\min}=85\cdot\frac{1{,}3+0{,}5\cdot(-5/13)}{0{,}5\cdot12/13}=204\ \text{м}`}</Formula>
      </Solution>
    ),
  },
  {
    id: 5,
    title: 'Задача 5',
    textBefore: <>Распределение кинетической энергии молекул гелия при тепловом движении имеет функцию плотности</>,
    mathA: String.raw`f(\varepsilon)=2\sqrt{\frac{\varepsilon}{\pi}}\left(\frac{1}{kT}\right)^{3/2}\cdot e^{-\frac{\varepsilon}{kT}}`,
    textAfter: <>где <InlineMath math={String.raw`k=1{,}38\cdot10^{-23}`} /> Дж/К — постоянная Больцмана, <InlineMath math={String.raw`\varepsilon`} /> — кинетическая энергия молекулы в джоулях, <InlineMath math="T" /> — температура газа в кельвинах. Найдите значение кинетической энергии <InlineMath math={String.raw`\varepsilon`} />, при котором функция плотности <InlineMath math={String.raw`f(\varepsilon)`} /> принимает наибольшее значение, если <InlineMath math="T=450" /> К?</>,
    solutionBuilder: () => (
      <Solution axis={{variable:String.raw`\varepsilon`,left:'0',point:String.raw`\frac{kT}{2}`,right:String.raw`+\infty`,leftClosed:true}}
        conclusion={<>Плотность возрастает на <InlineMath math={String.raw`(0;kT/2)`} /> и убывает на <InlineMath math={String.raw`(kT/2;+\infty)`} />. Поэтому при <InlineMath math={String.raw`\varepsilon=kT/2`} /> достигается максимум.</>}
        answer={<InlineMath math={String.raw`310{,}5\cdot10^{-23}\ \text{Дж}`} />}>
        <p>Энергия неотрицательна. Обозначим положительный постоянный множитель через <InlineMath math="K" />; для <InlineMath math={String.raw`\varepsilon>0`} /> получаем:</p>
        <Formula>{String.raw`f(\varepsilon)=K\sqrt{\varepsilon}e^{-\varepsilon/(kT)},\qquad f'(\varepsilon)=\frac{Ke^{-\varepsilon/(kT)}}{2\sqrt{\varepsilon}}\left(1-\frac{2\varepsilon}{kT}\right)`}</Formula>
        <p>Все множители, кроме последней скобки, положительны. При нулевой производной</p>
        <Formula>{String.raw`\varepsilon_*=\frac{kT}{2}=\frac{1{,}38\cdot10^{-23}\cdot450}{2}=310{,}5\cdot10^{-23}\ \text{Дж}`}</Formula>
        <p>Максимальное значение самой плотности равно <InlineMath math={String.raw`\sqrt{2/(\pi e)}/(kT)`} />.</p>
      </Solution>
    ),
  },
  {
    id: 6,
    title: 'Задача 6',
    textBefore: <>При подключении последовательного контура к источнику переменного тока амплитуда силы тока <InlineMath math="I" /> (в амперах) в цепи зависит от циклической частоты <InlineMath math={String.raw`\omega`} /> (в рад/с) и выражается формулой:</>,
    mathA: String.raw`I=\frac{U}{\sqrt{R^2+\left(\omega L-\frac{1}{\omega C}\right)^2}}`,
    textAfter: <>где <InlineMath math="U=220" /> В — амплитуда напряжения источника, <InlineMath math="R=44" /> Ом — активное сопротивление цепи, <InlineMath math="L=0{,}2" /> Гн — индуктивность катушки, а <InlineMath math={String.raw`C=20\ \text{мкФ}=20\cdot10^{-6}\ \text{Ф}`} /> — ёмкость конденсатора. Найдите наибольшую возможную силу тока (в амперах) в этой цепи.</>,
    solutionBuilder: () => (
      <Solution axis={{variable:String.raw`\omega`,left:'0',point:'500',right:String.raw`+\infty`}}
        conclusion={<>Сила тока возрастает на <InlineMath math="(0;500)" /> и убывает на <InlineMath math={String.raw`(500;+\infty)`} />. При <InlineMath math={String.raw`\omega=500`} /> рад/с достигается максимум.</>}
        answer={<InlineMath math={String.raw`5\ \text{А}`} />}>
        <p>Пусть <InlineMath math={String.raw`D=R^2+(\omega L-1/(\omega C))^2`} />. При положительной частоте</p>
        <Formula>{String.raw`I'(\omega)=-\frac{U\left(\omega L-\frac1{\omega C}\right)\left(L+\frac1{\omega^2C}\right)}{D^{3/2}}`}</Formula>
        <p>Все множители, кроме первой скобки в числителе и знака минус, положительны. Нулевая производная соответствует резонансу:</p>
        <Formula>{String.raw`\omega L=\frac1{\omega C}\quad\Rightarrow\quad\omega_*=\frac1{\sqrt{LC}}=500\ \text{рад/с}`}</Formula>
        <p>В этой точке вторая часть под корнем равна нулю, поэтому</p>
        <Formula>{String.raw`I_{\max}=\frac{U}{R}=\frac{220}{44}=5\ \text{А}`}</Formula>
      </Solution>
    ),
  },
  {
    id: 7,
    title: 'Задача 7',
    textBefore: <>Скорость прохождения скальной породы <InlineMath math="v" /> (в метрах в час) напрямую зависит от пиковой температуры плазменного факела <InlineMath math="T" /> (в кельвинах):</>,
    mathA: String.raw`v(T)=v_0\sqrt{\left(\frac{T}{1000}\right)^3-3\left(\frac{T}{1000}\right)+4}`,
    textAfter: <>где <InlineMath math="v_0=2" /> м/ч — базовый коэффициент установки. В свою очередь, температура факела регулируется углом наклона магнитных линз <InlineMath math={String.raw`\alpha`} /> (в радианах, <InlineMath math={String.raw`\alpha\in[0;\pi/2]`} />) по формуле циклического теплообмена: <span className="inline-block max-w-full overflow-x-auto align-middle"><InlineMath math={String.raw`T(\alpha)=1000\left(1+\frac3{6-2\cos(4\alpha)}\right)`} /></span>. Инженерам необходимо выставить такой угол наклона линз <InlineMath math={String.raw`\alpha`} />, при котором скорость бурения <InlineMath math="v" /> будет минимальной (чтобы безопасно пройти слой нестабильного гранита), но при этом плазма не должна гаснуть (для этого температура <InlineMath math="T" /> должна строго превышать 1000 К). Найдите этот угол <InlineMath math={String.raw`\alpha`} />. Ответ дайте в градусах.</>,
    solutionBuilder: () => (
      <Solution axis={{variable:String.raw`\alpha`,left:'0',point:String.raw`\pi/4`,right:String.raw`\pi/2`,leftSign:'−',rightSign:'+',leftClosed:true,rightInfinite:false,rightClosed:true}}
        conclusion={<>Скорость убывает на <InlineMath math={String.raw`(0;\pi/4)`} /> и возрастает на <InlineMath math={String.raw`(\pi/4;\pi/2)`} />. Значит, минимум достигается при <InlineMath math={String.raw`\alpha=\pi/4=45^\circ`} />.</>}
        answer={<InlineMath math={String.raw`45^\circ`} />}>
        <p>Положим <InlineMath math="x=T/1000" />. Так как <InlineMath math={String.raw`-1\leqslant\cos(4\alpha)\leqslant1`} />, имеем <InlineMath math={String.raw`11/8\leqslant x\leqslant7/4`} />: условие <InlineMath math="T>1000" /> выполнено на всём заданном отрезке.</p>
        <Formula>{String.raw`\frac{dv}{dx}=\frac{3v_0(x^2-1)}{2\sqrt{x^3-3x+4}}>0,\qquad \frac{dx}{d\alpha}=\frac{-24\sin(4\alpha)}{(6-2\cos(4\alpha))^2}`}</Formula>
        <p>По правилу производной сложной функции знак <InlineMath math={String.raw`dv/d\alpha`} /> совпадает со знаком <InlineMath math={String.raw`dx/d\alpha`} />: он отрицателен до <InlineMath math={String.raw`\pi/4`} /> и положителен после.</p>
        <p>В точке минимума <InlineMath math="x=11/8" />, поэтому минимальная скорость равна <InlineMath math={String.raw`v_{\min}=2\sqrt{1267/512}`} /> м/ч.</p>
      </Solution>
    ),
  },
  {
    id: 8,
    title: 'Задача 8',
    textBefore: <>Эффективность пространственной сшивки ДНК-белковых комплексов при пробоподготовке для Hi-C секвенирования зависит от времени инкубации <InlineMath math="t" /> (в минутах). Зависимость интенсивности образования правильных сшивок описывается функцией:</>,
    mathA: String.raw`E(t)=E_0\cdot\frac{t^2}{t^4+256}`,
    textAfter: <>где <InlineMath math="E_0" /> — эмпирическая константа протокола, зависящая от концентрации формальдегида. При каком времени инкубации <InlineMath math="t" /> эффективность сшивки хроматина достигает наибольшего значения?</>,
    solutionBuilder: () => (
      <Solution axis={{variable:'t',left:'0',point:'4',right:String.raw`+\infty`,leftClosed:true}}
        conclusion={<>При <InlineMath math="E_0>0" /> эффективность возрастает на <InlineMath math="(0;4)" /> и убывает на <InlineMath math={String.raw`(4;+\infty)`} />. Следовательно, максимум достигается при <InlineMath math="t=4" /> мин.</>}
        answer={<InlineMath math={String.raw`4\ \text{мин}`} />}>
        <p>Время <InlineMath math={String.raw`t\geqslant0`} />. Для физического смысла эффективности считаем <InlineMath math="E_0>0" />; знак этой константы в условии явно не указан.</p>
        <Formula>{String.raw`E'(t)=\frac{2E_0t(256-t^4)}{(t^4+256)^2}`}</Formula>
        <p>При <InlineMath math="t>0" /> знак производной определяется выражением <InlineMath math="256-t^4" />. Внутренняя критическая точка: <InlineMath math={String.raw`t^4=256\Rightarrow t=4`} />. На границе <InlineMath math="t=0" /> эффективность равна нулю.</p>
        <Formula>{String.raw`E_{\max}=E(4)=E_0\cdot\frac{16}{512}=\frac{E_0}{32}`}</Formula>
        <p>Если <InlineMath math="E_0=0" />, функция постоянна; при <InlineMath math="E_0<0" /> точка <InlineMath math="t=4" /> является минимумом, а не максимумом.</p>
      </Solution>
    ),
  },
  {
    id: 9,
    title: 'Задача 9',
    textBefore: <>Для защиты некастодиального аппаратного кошелька от электромагнитных атак по сторонним каналам (side-channel attacks) применяется специальный колебательный контур. Амплитуда наведённого напряжения на конденсаторе защиты при воздействии внешнего поля зависит от частоты этого поля <InlineMath math={String.raw`\omega`} /> (в МГц) по закону:</>,
    mathA: String.raw`U(\omega)=\frac{U_0\cdot\omega}{\sqrt{(\omega_0^2-\omega^2)^2+\gamma^2\omega^2}}`,
    textAfter: <>Известно, что базовая резонансная частота контура <InlineMath math={String.raw`\omega_0=5`} /> МГц, а коэффициент затухания <InlineMath math={String.raw`\gamma=2`} /> МГц. При какой частоте внешнего поля <InlineMath math={String.raw`\omega`} /> амплитуда напряжения на конденсаторе будет максимальной?</>,
    solutionBuilder: () => (
      <Solution axis={{variable:String.raw`\omega`,left:'0',point:'5',right:String.raw`+\infty`,leftClosed:true}}
        conclusion={<>При положительной амплитуде <InlineMath math="U_0" /> функция возрастает на <InlineMath math="(0;5)" /> и убывает на <InlineMath math={String.raw`(5;+\infty)`} />. Максимум достигается при частоте 5 МГц.</>}
        answer={<InlineMath math={String.raw`5\ \text{МГц}`} />}>
        <p>Рассматриваем <InlineMath math={String.raw`\omega\geqslant0`} /> и положительный масштаб амплитуды <InlineMath math="U_0>0" />. Положим <InlineMath math={String.raw`D=(25-\omega^2)^2+4\omega^2`} />. Производная при положительной частоте:</p>
        <Formula>{String.raw`U'(\omega)=\frac{U_0(625-\omega^4)}{D^{3/2}}`}</Formula>
        <p>Знаменатель положителен. Приравнивая числитель к нулю, получаем единственную положительную критическую точку <InlineMath math={String.raw`\omega^4=625\Rightarrow\omega_*=5`} />. Тогда</p>
        <Formula>{String.raw`U_{\max}=U(5)=\frac{5U_0}{\sqrt{4\cdot25}}=\frac{U_0}{2}`}</Formula>
      </Solution>
    ),
  },
  {
    id: 10,
    title: 'Задача 10',
    textBefore: <>Для калибровки чувствительности модуля бесконтактной оплаты (NFC) исследуется магнитное поле круговой антенны. Модуль градиента магнитной индукции <InlineMath math="G" /> (в условных единицах) на оси антенны радиуса <InlineMath math="R=12" /> мм на расстоянии <InlineMath math="x" /> (в миллиметрах) от её плоскости задаётся формулой, математически идентичной профилю калибровки магнитного датчика круговым витком:</>,
    mathA: String.raw`G(x)=\frac{C\cdot x}{(R^2+x^2)^{5/2}},\qquad x>0`,
    textAfter: <>где <InlineMath math="C>0" /> — аппаратурная константа. На каком расстоянии <InlineMath math="x" /> модуль градиента будет максимальным?</>,
    solutionBuilder: () => (
      <Solution axis={{variable:'x',left:'0',point:'6',right:String.raw`+\infty`}}
        conclusion={<>Градиент возрастает на <InlineMath math="(0;6)" /> и убывает на <InlineMath math={String.raw`(6;+\infty)`} />; наибольшее значение достигается при <InlineMath math="x=6" /> мм.</>}
        answer={<InlineMath math={String.raw`6\ \text{мм}`} />}>
        <p>Подставим <InlineMath math="R=12" /> и найдём производную:</p>
        <Formula>{String.raw`G(x)=\frac{Cx}{(144+x^2)^{5/2}},\qquad G'(x)=\frac{C(144-4x^2)}{(144+x^2)^{7/2}}`}</Formula>
        <p>При <InlineMath math="x>0" /> и <InlineMath math="C>0" /> знак определяется числителем. Уравнение <InlineMath math="144-4x^2=0" /> даёт единственную допустимую точку <InlineMath math="x=6" />.</p>
        <Formula>{String.raw`G_{\max}=G(6)=\frac{6C}{180^{5/2}}`}</Formula>
      </Solution>
    ),
  },
  {
    id: 11,
    title: 'Задача 11',
    textBefore: <>При тестировании кастомной системы жидкостного охлаждения для криптофермы амплитуда вибрации помпы <InlineMath math="A" /> (в мкм) при угловой скорости вращения ротора <InlineMath math={String.raw`\omega`} /> (в рад/с) описывается формулой, аналогичной модели вынужденных колебаний платформы вибростенда:</>,
    mathA: String.raw`A(\omega)=\frac{12000}{\sqrt{(\omega^2-34)^2+36\omega^2}}`,
    textAfter: <>где <InlineMath math={String.raw`\omega>0`} />. При какой угловой скорости <InlineMath math={String.raw`\omega`} /> амплитуда вибрации помпы будет максимальной? Найдите эту максимальную амплитуду.</>,
    solutionBuilder: () => (
      <Solution axis={{variable:String.raw`\omega`,left:'0',point:'4',right:String.raw`+\infty`}}
        conclusion={<>Амплитуда возрастает на <InlineMath math="(0;4)" /> и убывает на <InlineMath math={String.raw`(4;+\infty)`} />. Поэтому при <InlineMath math={String.raw`\omega=4`} /> достигается максимум.</>}
        answer={<><InlineMath math={String.raw`4\ \text{рад/с}`} />; <InlineMath math={String.raw`400\ \text{мкм}`} /></>}>
        <p>Обозначим <InlineMath math={String.raw`D=(\omega^2-34)^2+36\omega^2=\omega^4-32\omega^2+1156`} />. При <InlineMath math={String.raw`\omega>0`} /> имеем:</p>
        <Formula>{String.raw`A'(\omega)=-\frac{24000\omega(\omega^2-16)}{D^{3/2}}`}</Formula>
        <p>Знаменатель положителен; единственный положительный нуль производной — <InlineMath math={String.raw`\omega=4`} />. Подставляем его в исходную формулу:</p>
        <Formula>{String.raw`A_{\max}=A(4)=\frac{12000}{\sqrt{(16-34)^2+36\cdot16}}=\frac{12000}{30}=400\ \text{мкм}`}</Formula>
      </Solution>
    ),
  },
  {
    id: 12,
    title: 'Задача 12',
    textBefore: <>Испытывается электродвигатель постоянного тока. Напряжение источника <InlineMath math="U=48" /> В, суммарное сопротивление цепи <InlineMath math="r=2" /> Ом. При угловой скорости ротора <InlineMath math={String.raw`\omega`} /> (в рад/с) противо-ЭДС двигателя равна <InlineMath math={String.raw`\varepsilon=k\omega`} />, где <InlineMath math="k=0{,}4" /> В·с/рад. Ток <InlineMath math="I" /> (в амперах) и электромагнитная механическая мощность <InlineMath math="P" /> (в ваттах) задаются формулами</>,
    mathA: String.raw`I=\frac{U-k\omega}{r},\qquad P=\varepsilon I`,
    textAfter: <>причём <InlineMath math={String.raw`0\leqslant\omega\leqslant U/k`} />. При какой угловой скорости мощность двигателя максимальна? Найдите максимальную мощность.</>,
    solutionBuilder: () => (
      <Solution axis={{variable:String.raw`\omega`,left:'0',point:'60',right:'120',leftClosed:true,rightInfinite:false,rightClosed:true}}
        conclusion={<>Мощность возрастает на <InlineMath math="(0;60)" /> и убывает на <InlineMath math="(60;120)" />. Следовательно, при <InlineMath math={String.raw`\omega=60`} /> достигается максимум на всём отрезке.</>}
        answer={<><InlineMath math={String.raw`60\ \text{рад/с}`} />; <InlineMath math={String.raw`288\ \text{Вт}`} /></>}>
        <p>Допустимый отрезок: <InlineMath math={String.raw`0\leqslant\omega\leqslant48/0{,}4=120`} />. Подставим ток и противо-ЭДС в выражение мощности:</p>
        <Formula>{String.raw`P(\omega)=\frac{0{,}4\omega(48-0{,}4\omega)}{2}=9{,}6\omega-0{,}08\omega^2`}</Formula>
        <Formula>{String.raw`P'(\omega)=9{,}6-0{,}16\omega=0\quad\Rightarrow\quad\omega_*=60`}</Formula>
        <p>Критическая точка лежит внутри отрезка; производная меняет знак с плюса на минус.</p>
        <Formula>{String.raw`P_{\max}=P(60)=9{,}6\cdot60-0{,}08\cdot60^2=288\ \text{Вт}`}</Formula>
      </Solution>
    ),
  },
  {
    id: 13,
    title: 'Задача 13',
    textBefore: <>Круизный лайнер стоит в океане бортом к волне. Под действием волн он испытывает вынужденные поперечные колебания. Зависимость амплитуды этих колебаний (в градусах) от периода волны <InlineMath math={String.raw`\tau`} /> (в секундах) выражается формулой:</>,
    mathA: String.raw`A(\tau)=k\theta_0\frac{\tau^2}{\sqrt{(T^2-\tau^2)^2+n\tau^2T^2}}`,
    textAfter: <>Коэффициент <InlineMath math="k" /> определяется отношением ширины лайнера к длине волны, <InlineMath math={String.raw`\theta_0`} /> — угол наибольшего волнового склона, <InlineMath math="T" /> — период свободных поперечных колебаний лайнера на тихой воде, <InlineMath math="n" /> — числовой коэффициент (<InlineMath math="0<n<0{,}5" />). При каком периоде волны <InlineMath math={String.raw`\tau`} /> амплитуда вынужденных колебаний лайнера будет наибольшей, если <InlineMath math="T=14{,}4" /> с?</>,
    solutionBuilder: () => (
      <Solution axis={{variable:String.raw`\tau`,left:'0',point:String.raw`14{,}4\sqrt{\frac{2}{2-n}}`,right:String.raw`+\infty`}}
        conclusion={<>Амплитуда возрастает на <InlineMath math={String.raw`(0;\tau_*)`} /> и убывает на <InlineMath math={String.raw`(\tau_*;+\infty)`} />. В точке <InlineMath math={String.raw`\tau_*`} /> достигается максимум.</>}
        answer={<InlineMath math={String.raw`14{,}4\sqrt{\frac{2}{2-n}}\ \text{с}`} />}>
        <p>Период положителен; полагаем положительными масштаб амплитуды <InlineMath math={String.raw`k\theta_0`} /> и период <InlineMath math="T" />. Обозначим <InlineMath math={String.raw`D=(T^2-\tau^2)^2+n\tau^2T^2`} />. Так как <InlineMath math="n>0" />, <InlineMath math="D>0" /> при <InlineMath math={String.raw`\tau>0`} />.</p>
        <Formula>{String.raw`A'(\tau)=\frac{k\theta_0\tau T^2[2T^2-(2-n)\tau^2]}{D^{3/2}}`}</Formula>
        <p>Знак производной определяется скобкой. Единственная положительная критическая точка:</p>
        <Formula>{String.raw`\tau_*=T\sqrt{\frac2{2-n}}=14{,}4\sqrt{\frac2{2-n}}\ \text{с}`}</Formula>
        <p>Максимальное значение амплитуды равно <InlineMath math={String.raw`A_{\max}=\frac{2k\theta_0}{\sqrt{n(4-n)}}`} />.</p>
      </Solution>
    ),
  },
  {
    id: 14,
    title: 'Задача 14',
    textBefore: <>На маленький магнит действует сила кругового электрического тока, при этом центр круга лежит на оси магнита, а плоскость круга перпендикулярна этой оси. Тогда сила действия тока задаётся формулой</>,
    mathA: String.raw`F=\frac{cl}{(l^2+r^2)^{2{,}5}}`,
    textAfter: <>где <InlineMath math="c" /> — некоторая константа, <InlineMath math="l" /> — расстояние от магнита до центра круга, а <InlineMath math="r=2" /> — радиус круга. При каком значении <InlineMath math="l" /> сила <InlineMath math="F" /> принимает наибольшее значение?</>,
    solutionBuilder: () => (
      <Solution axis={{variable:'l',left:'0',point:'1',right:String.raw`+\infty`,leftClosed:true}}
        conclusion={<>При <InlineMath math="c>0" /> сила возрастает на <InlineMath math="(0;1)" /> и убывает на <InlineMath math={String.raw`(1;+\infty)`} />. Максимум достигается при <InlineMath math="l=1" />.</>}
        answer={<InlineMath math="1" />}>
        <p>Расстояние <InlineMath math={String.raw`l\geqslant0`} />. В соответствии с физическим смыслом положим <InlineMath math="c>0" />; в условии знак константы явно не указан. При <InlineMath math="r=2" />:</p>
        <Formula>{String.raw`F(l)=\frac{cl}{(l^2+4)^{5/2}},\qquad F'(l)=\frac{4c(1-l^2)}{(l^2+4)^{7/2}}`}</Formula>
        <p>Знаменатель положителен; при <InlineMath math="c>0" /> единственная положительная критическая точка — <InlineMath math="l=1" />. Ей соответствует</p>
        <Formula>{String.raw`F_{\max}=F(1)=\frac{c}{5^{5/2}}`}</Formula>
        <p>Если <InlineMath math="c=0" />, сила постоянна; если <InlineMath math="c<0" />, точка <InlineMath math="l=1" /> — минимум, а не максимум.</p>
      </Solution>
    ),
  },
];
