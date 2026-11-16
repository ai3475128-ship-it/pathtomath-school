import React from 'react';
import Image from 'next/image';
import { InlineMath, BlockMath } from 'react-katex';

const MathText = ({ children }) => <InlineMath math={children} />;
const Formula = ({ children }) => <div className="my-3 overflow-x-auto"><BlockMath math={children} /></div>;
function Figure({ name, caption }) {
  return <figure className="my-5 mx-auto max-w-[520px] rounded-xl bg-white px-3 py-4 text-center">
    <Image src={`/diagrams/stereo-prep/${name}.svg`} alt={caption} width={520} height={440} unoptimized className="mx-auto h-auto w-full" />
    <figcaption className="mt-2 text-sm text-slate-600">{caption}</figcaption>
  </figure>;
}
const Box = ({ children }) => <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-200"><p className="font-bold text-slate-900 dark:text-white">Решение</p>{children}</div>;
const Answer = ({ children }) => <p className="border-t border-slate-200 pt-4 font-semibold text-emerald-700 dark:text-emerald-300">Ответ: <MathText>{children}</MathText>.</p>;

function Solution1() { return <Box>
  <p>Так как <MathText>{String.raw`AA_1\parallel BB_1`}</MathText>, перенесём первую прямую в точку <MathText>B</MathText>. Искомый угол равен <MathText>{String.raw`\angle B_1BD_1`}</MathText>.</p>
  <Figure name="1-construction" caption="Переносим направление AA₁ в точку B и проводим диагональ B₁D₁" />
  <p>Верхнее основание — квадрат со стороной 2. По теореме Пифагора <MathText>{String.raw`B_1D_1=\sqrt{2^2+2^2}=2\sqrt2`}</MathText>. Ребро <MathText>{String.raw`BB_1`}</MathText> перпендикулярно основанию, поэтому треугольник <MathText>{String.raw`BB_1D_1`}</MathText> прямоугольный.</p>
  <Figure name="1-plane" caption="Прямоугольный треугольник BB₁D₁" />
  <Formula>{String.raw`\tan\angle B_1BD_1=\frac{B_1D_1}{BB_1}=2\sqrt2`}</Formula>
  <Answer>{String.raw`\arctan(2\sqrt2)`}</Answer>
</Box>; }
function Solution2() { return <Box>
  <p>Верхнее и нижнее основания призмы параллельны, поэтому <MathText>{String.raw`AC\parallel A_1C_1`}</MathText>. Искомый угол равен <MathText>{String.raw`\angle BA_1C_1`}</MathText>. Проведём отрезок <MathText>{String.raw`BC_1`}</MathText>.</p>
  <Figure name="2-construction" caption="Отрезок A₁C₁ параллелен AC; построен треугольник A₁BC₁" />
  <p>По теореме Пифагора в боковых гранях <MathText>{String.raw`A_1B=BC_1=\sqrt{3^2+4^2}=5`}</MathText>, а <MathText>{String.raw`A_1C_1=3`}</MathText>.</p>
  <Figure name="2-plane" caption="Треугольник A₁BC₁ и длины его сторон" />
  <p>Применим теорему косинусов к углу <MathText>{String.raw`\angle BA_1C_1=\varphi`}</MathText>:</p>
  <Formula>{String.raw`5^2=5^2+3^2-2\cdot5\cdot3\cos\varphi,\qquad \cos\varphi=\frac3{10}`}</Formula>
  <Answer>{String.raw`\arccos\frac3{10}`}</Answer>
</Box>; }
function Solution3() { return <Box>
  <p>В правильном шестиугольнике <MathText>{String.raw`FE\parallel BC`}</MathText>. Диагонали соответствующих боковых граней прямой призмы параллельны, значит <MathText>{String.raw`F_1E\parallel B_1C`}</MathText>. Проведём <MathText>{String.raw`F_1E`}</MathText> и <MathText>AE</MathText>; искомый угол равен углу <MathText>{String.raw`AF_1E`}</MathText>.</p>
  <Figure name="3-construction" caption="Строим F₁E параллельно B₁C и соединяем A с E" />
  <p>Обе боковые грани — прямоугольники со сторонами <MathText>{String.raw`\sqrt2`}</MathText> и 1. Поэтому <MathText>{String.raw`AF_1=F_1E=\sqrt3`}</MathText>. Короткая диагональ правильного шестиугольника равна <MathText>{String.raw`AE=\sqrt2\cdot\sqrt3=\sqrt6`}</MathText>.</p>
  <Figure name="3-plane" caption="Треугольник AF₁E" />
  <p>Поскольку <MathText>{String.raw`AE^2=6=AF_1^2+F_1E^2`}</MathText>, по обратной теореме Пифагора угол <MathText>{String.raw`AF_1E`}</MathText> прямой.</p>
  <Answer>{String.raw`90^\circ`}</Answer>
</Box>; }
function Solution4() { return <Box>
  <p>Пусть <MathText>O</MathText> — центр квадратного основания. Он является серединой <MathText>AC</MathText>, а <MathText>M</MathText> — середина <MathText>SC</MathText>. В треугольнике <MathText>ASC</MathText> отрезок <MathText>OM</MathText> — средняя линия:</p>
  <Formula>{String.raw`OM\parallel AS,\qquad OM=\frac{AS}{2}=1.`}</Formula>
  <Figure name="4-construction" caption="Центр O основания и средняя линия OM параллельна AS" />
  <p>Следовательно, искомый угол равен <MathText>{String.raw`\angle BMO`}</MathText>. В квадрате <MathText>{String.raw`BO=\frac{BD}{2}=\frac{\sqrt6\cdot\sqrt2}{2}=\sqrt3`}</MathText>.</p>
  <p>Диагональ <MathText>BD</MathText> перпендикулярна <MathText>AC</MathText>, а также высоте <MathText>SO</MathText>. Значит, она перпендикулярна плоскости <MathText>ASC</MathText> и, в частности, <MathText>OM</MathText>.</p>
  <Figure name="4-plane" caption="Прямоугольный треугольник BOM" />
  <Formula>{String.raw`\tan\angle BMO=\frac{BO}{OM}=\sqrt3`}</Formula>
  <Answer>{String.raw`60^\circ`}</Answer>
</Box>; }
function Solution5() { return <Box>
  <p>Пусть <MathText>N</MathText> — середина ребра <MathText>SE</MathText>. В треугольнике <MathText>SCE</MathText> отрезок <MathText>MN</MathText> — средняя линия, поэтому <MathText>{String.raw`MN\parallel CE`}</MathText>. В правильном шестиугольнике <MathText>{String.raw`CE\parallel BF`}</MathText>, откуда <MathText>{String.raw`MN\parallel BF`}</MathText>. Искомый угол — <MathText>{String.raw`\angle AMN`}</MathText>.</p>
  <Figure name="5-construction" caption="Проводим среднюю линию MN параллельно BF" />
  <p>Короткие диагонали основания <MathText>AC</MathText>, <MathText>AE</MathText> и <MathText>CE</MathText> равны <MathText>{String.raw`\sqrt3`}</MathText>. Поскольку <MathText>{String.raw`SA=SC=SE=\sqrt3`}</MathText>, треугольники <MathText>ASC</MathText> и <MathText>ASE</MathText> равносторонние.</p>
  <Figure name="5-face" caption="Равносторонний треугольник ASC: AM — медиана и высота" />
  <p>Их медианы равны <MathText>{String.raw`AM=AN=\frac{\sqrt3\cdot\sqrt3}{2}=\frac32`}</MathText>, а <MathText>{String.raw`MN=\frac{CE}{2}=\frac{\sqrt3}{2}`}</MathText>.</p>
  <Figure name="5-plane" caption="Треугольник AMN" />
  <p>По теореме косинусов для угла <MathText>{String.raw`\varphi=\angle AMN`}</MathText>:</p>
  <Formula>{String.raw`\left(\frac32\right)^2=\left(\frac32\right)^2+\left(\frac{\sqrt3}{2}\right)^2-2\cdot\frac32\cdot\frac{\sqrt3}{2}\cos\varphi`}</Formula>
  <Formula>{String.raw`\cos\varphi=\frac{\sqrt3}{6}`}</Formula>
  <Answer>{String.raw`\arccos\frac{\sqrt3}{6}`}</Answer>
</Box>; }
function Solution6() { return <Box>
  <p>Продлим ребро <MathText>{String.raw`D_1D`}</MathText> за основание до точки <MathText>M</MathText>, для которой <MathText>{String.raw`DM=AA_1=3`}</MathText>. Поскольку <MathText>{String.raw`AD\parallel BC`}</MathText>, а <MathText>{String.raw`DM\parallel B_1B`}</MathText> и соответствующие стороны равны, получаем <MathText>{String.raw`AM\parallel B_1C`}</MathText>. Искомый угол равен углу <MathText>{String.raw`C_1AM`}</MathText>.</p>
  <Figure name="6-construction" caption="Продлеваем D₁D до M и проводим AM параллельно B₁C" />
  <p>По теореме Пифагора <MathText>{String.raw`AM=\sqrt{4^2+3^2}=5`}</MathText>, а пространственная диагональ <MathText>{String.raw`AC_1=\sqrt{6^2+4^2+3^2}=\sqrt{61}`}</MathText>. Отрезок <MathText>{String.raw`MC_1`}</MathText> — диагональ прямоугольника со сторонами 6 и 6, поэтому <MathText>{String.raw`MC_1=6\sqrt2`}</MathText>.</p>
  <Figure name="6-plane" caption="Треугольник AMC₁" />
  <p>По теореме косинусов при <MathText>{String.raw`\varphi=\angle C_1AM`}</MathText> получаем</p>
  <Formula>{String.raw`72=25+61-2\cdot5\sqrt{61}\cos\varphi,\qquad \cos\varphi=\frac7{5\sqrt{61}}`}</Formula>
  <Answer>{String.raw`\arccos\frac7{5\sqrt{61}}`}</Answer>
</Box>; }
function Solution7() { return <Box>
  <p>Обозначим <MathText>{String.raw`KB_1=x`}</MathText>. Тогда <MathText>{String.raw`BK=3x`}</MathText>, а ребро куба равно <MathText>4x</MathText>. На диагонали <MathText>{String.raw`B_1D_1`}</MathText> отметим точку <MathText>M</MathText> так, чтобы <MathText>{String.raw`B_1M:B_1D_1=1:4`}</MathText>. В треугольнике <MathText>{String.raw`BB_1D_1`}</MathText> получаем <MathText>{String.raw`KM\parallel BD_1`}</MathText>. Искомый угол равен <MathText>{String.raw`\angle AKM`}</MathText>.</p>
  <Figure name="7-construction" caption="Точка M делит B₁D₁ в отношении 1 : 3, KM параллелен BD₁" />
  <p>По теореме Пифагора в грани <MathText>{String.raw`ABB_1A_1`}</MathText>: <MathText>{String.raw`AK=\sqrt{(4x)^2+(3x)^2}=5x`}</MathText>. Диагональ верхнего основания <MathText>{String.raw`B_1D_1=4x\sqrt2`}</MathText>, значит <MathText>{String.raw`B_1M=x\sqrt2`}</MathText>.</p>
  <Figure name="7-small" caption="Прямоугольный треугольник B₁KM" />
  <Formula>{String.raw`KM=\sqrt{x^2+2x^2}=x\sqrt3.`}</Formula>
  <p>В верхнем квадрате угол <MathText>{String.raw`A_1B_1M=45^\circ`}</MathText>. По теореме косинусов</p>
  <Formula>{String.raw`A_1M^2=(4x)^2+(x\sqrt2)^2-2\cdot4x\cdot x\sqrt2\cdot\frac{\sqrt2}{2}=10x^2.`}</Formula>
  <p>Так как <MathText>{String.raw`AA_1`}</MathText> перпендикулярно верхнему основанию, <MathText>{String.raw`AM^2=AA_1^2+A_1M^2=26x^2`}</MathText>, то есть <MathText>{String.raw`AM=x\sqrt{26}`}</MathText>.</p>
  <Figure name="7-plane" caption="Треугольник AKM" />
  <p>По теореме косинусов для <MathText>{String.raw`\varphi=\angle AKM`}</MathText>:</p>
  <Formula>{String.raw`26x^2=25x^2+3x^2-2\cdot5x\cdot x\sqrt3\cos\varphi`}</Formula>
  <Formula>{String.raw`\cos\varphi=\frac{\sqrt3}{15}`}</Formula>
  <Answer>{String.raw`\arccos\frac{\sqrt3}{15}`}</Answer>
</Box>; }

// Новые ID не совпадают с ID удалённой задачи: старая отметка не относится к этим условиям.
export const egeIntro14Tasks = [
  {
    id: 101, title: 'Задача 1', stereometryPrompt: String.raw`В правильной четырёхугольной призме $ABCDA_1B_1C_1D_1$ сторона основания равна 2, а боковое ребро равно 1. Найдите угол между прямыми $AA_1$ и $BD_1$.`, stereometryDiagram: '/diagrams/stereo-prep/1-condition.svg', stereometryDiagramAlt: 'Пространственный чертёж к задаче 1', solutionBuilder: () => <Solution1 /> },
  {
    id: 102, title: 'Задача 2', stereometryPrompt: String.raw`В правильной треугольной призме $ABCA_1B_1C_1$ сторона основания равна 3, а боковое ребро равно 4. Найдите угол между прямыми $A_1B$ и $AC$.`, stereometryDiagram: '/diagrams/stereo-prep/2-condition.svg', stereometryDiagramAlt: 'Пространственный чертёж к задаче 2', solutionBuilder: () => <Solution2 /> },
  {
    id: 103, title: 'Задача 3', stereometryPrompt: String.raw`В правильной шестиугольной призме $ABCDEFA_1B_1C_1D_1E_1F_1$ сторона основания равна $\sqrt2$, а боковое ребро равно 1. Найдите угол между прямыми $AF_1$ и $B_1C$.`, stereometryDiagram: '/diagrams/stereo-prep/3-condition.svg', stereometryDiagramAlt: 'Пространственный чертёж к задаче 3', solutionBuilder: () => <Solution3 /> },
  {
    id: 104, title: 'Задача 4', stereometryPrompt: String.raw`В правильной четырёхугольной пирамиде $SABCD$ с вершиной $S$ сторона основания равна $\sqrt6$, а боковое ребро равно 2. Точка $M$ — середина ребра $SC$. Найдите угол между прямыми $BM$ и $AS$.`, stereometryDiagram: '/diagrams/stereo-prep/4-condition.svg', stereometryDiagramAlt: 'Пространственный чертёж к задаче 4', solutionBuilder: () => <Solution4 /> },
  {
    id: 105, title: 'Задача 5', stereometryPrompt: String.raw`В правильной шестиугольной пирамиде $SABCDEF$ с вершиной $S$ сторона основания равна 1, а боковое ребро равно $\sqrt3$. Точка $M$ — середина ребра $SC$. Найдите угол между прямыми $AM$ и $BF$.`, stereometryDiagram: '/diagrams/stereo-prep/5-condition.svg', stereometryDiagramAlt: 'Пространственный чертёж к задаче 5', solutionBuilder: () => <Solution5 /> },
  {
    id: 106, title: 'Задача 6', stereometryPrompt: String.raw`В прямоугольном параллелепипеде $ABCDA_1B_1C_1D_1$ даны длины рёбер: $AB=6$, $BC=4$, $AA_1=3$. Найдите угол между прямыми $AC_1$ и $B_1C$.`, stereometryDiagram: '/diagrams/stereo-prep/6-condition.svg', stereometryDiagramAlt: 'Пространственный чертёж к задаче 6', solutionBuilder: () => <Solution6 /> },
  {
    id: 107, title: 'Задача 7', stereometryPrompt: String.raw`На ребре $BB_1$ куба $ABCDA_1B_1C_1D_1$ взята точка $K$ так, что $BK:KB_1=3:1$. Найдите угол между прямыми $AK$ и $BD_1$.`, stereometryDiagram: '/diagrams/stereo-prep/7-condition.svg', stereometryDiagramAlt: 'Пространственный чертёж к задаче 7', solutionBuilder: () => <Solution7 /> },
];
