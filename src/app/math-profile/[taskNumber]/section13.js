import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TrigCircle from './TrigCircle';

export const section13Tasks = [
  {
        id: 1,
        title: 'Задача 1',
        mathA: '8^x - 3 \\cdot 2^{x+2} + 2^{5-x} = 0',
        mathB: '\\left[ \\log_4 5; \\, \\sqrt{3} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Приведём к степеням двойки:</p>
            <BlockMath math={`2^{3x} - 3 \\cdot 2^{x+2} + 2^{5-x} = 0`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Домножим на</span>
              <InlineMath math={`2^x \\neq 0`} />:
            </div>
            
            <BlockMath math={`2^{4x} - 12 \\cdot 2^{2x} + 32 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Сделаем замену</span>
              <InlineMath math={`t = 2^{2x}`} />
              <span>(где</span>
              <InlineMath math={`t > 0`} />):
            </div>
            
            <BlockMath math={`t^2 - 12t + 32 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 144 - 128 = 16`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{12 \\pm 4}{2} = 4; \\, 8`} />
            
            <p>Обратная замена:</p>
            <BlockMath math={`2^{2x} = 4 \\implies 2x = 2 \\implies x = 1`} />
            <BlockMath math={`2^{2x} = 8 \\implies 2x = 3 \\implies x = \\frac{3}{2}`} />
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения при помощи неравенств. Проверим границы отрезка:</p>
            <BlockMath math={`1 = \\log_4 4 < \\log_4 5 \\quad \\text{и} \\quad \\log_4 5 < \\log_4 8 = \\frac{3}{2} = 1.5`} />
            <BlockMath math={`1.5 = \\sqrt{2.25} < \\sqrt{3}`} />
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 1;`} />
              <span>и</span>
              <InlineMath math={`x = \\frac{3}{2};`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{3}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 2,
        title: 'Задача 2',
        mathA: '16^{\\sin x} + 16^{\\sin(x+\\pi)} = \\frac{17}{4}',
        mathB: '\\left[ \\frac{3\\pi}{2}; \\, 3\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\sin(x + \\pi) = -\\sin x`} />,
              <span>то уравнение примет вид:</span>
            </div>
            <BlockMath math={`16^{\\sin x} + 16^{-\\sin x} = \\frac{17}{4}`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = 16^{\\sin x}`} />
              <span>(где</span>
              <InlineMath math={`t > 0`} />):
            </div>
            <BlockMath math={`t + \\frac{1}{t} = \\frac{17}{4} \\implies 4t^2 - 17t + 4 = 0`} />
            <p>Корни квадратного уравнения: <InlineMath math={`t_1 = 4, \\, t_2 = \\frac{1}{4}`} />.</p>
            
            <p>Обратная замена:</p>
            <BlockMath math={`16^{\\sin x} = 4 \\implies \\sin x = \\frac{1}{2} \\implies x = \\frac{\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{5\\pi}{6} + 2\\pi k`} />
            <BlockMath math={`16^{\\sin x} = \\frac{1}{4} \\implies \\sin x = -\\frac{1}{2} \\implies x = -\\frac{\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad x = -\\frac{5\\pi}{6} + 2\\pi k`} />
            <p>Объединяя серии корней получаем: <InlineMath math={`x = \\frac{\\pi}{6} + \\pi k`} /> и <InlineMath math={`x = -\\frac{\\pi}{6} + \\pi k, \\quad k \\in \\mathbb{Z}`} />.</p>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>На отрезке при помощи тригонометрической окружности лежат точки:</p>
            <BlockMath math={`x = \\frac{11\\pi}{6}; \\quad x = \\frac{13\\pi}{6}; \\quad x = \\frac{17\\pi}{6}`} />
            
            <TrigCircle interval={[9,18]} roots={[11,13,17]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{6} + \\pi k, \\, k \\in \\mathbb{Z};`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{11\\pi}{6}; \\, \\frac{13\\pi}{6}; \\, \\frac{17\\pi}{6}`} />
            </div>
          </div>
        )
      },
  
      {
        id: 3,
        title: 'Задача 3',
        mathA: '8^x - 9 \\cdot 2^{x+1} + 2^{5-x} = 0',
        mathB: '\\left[ \\log_5 2; \\, \\log_5 20 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Перепишем уравнение в виде</span>
              <InlineMath math="2^{3x} - 18 \cdot 2^x + \frac{32}{2^x} = 0" />.
            </div>
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Домножим на</span>
              <InlineMath math="2^x \neq 0" />
              <span>и сделаем замену</span>
              <InlineMath math="t = 2^{2x}" />
              <span>(где</span>
              <InlineMath math="t > 0" />):
            </div>
             <BlockMath math="t^2 - 18t + 32 = 0 \implies t_1 = 16, \quad t_2 = 2" />
            
            <p>Произведём обратную замену:</p>
            <BlockMath math="2^{2x} = 16 \implies 2x = 4 \implies x = 2" />
            <BlockMath math="2^{2x} = 2 \implies 2x = 1 \implies x = 0.5" />
            
            <p>Отсюда получаем корни: <InlineMath math="x = 2" /> и <InlineMath math="x = 0.5" />.</p>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Сравним полученные корни с границами промежутка при помощи логарифмирования:</p>
            
            {/* 👍 ИСПРАВЛЕНО: Логарифмы и корни теперь разделены пробелами \quad и отображаются в одну красивую строку */}
            <BlockMath math="0.5 = \log_5 \sqrt{5} \implies \log_5 2 < \log_5 \sqrt{5} < \log_5 20 \implies x = 0.5 \in \left[\log_5 2; \, \log_5 20\right]" />
            <BlockMath math="2 = \log_5 25 > \log_5 20 \implies x = 2 \notin \left[\log_5 2; \, \log_5 20\right]" />
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2">
              <span>Ответ: а)</span>
              <InlineMath math="0.5;" />
              <span>и</span>
              <InlineMath math="2;" />
              <span className="ml-2">б)</span>
              <InlineMath math="0.5" />
            </div>
          </div>
        )
      },
      // 👇 СЮДА ВЫ МОЖЕТЕ ТАК ЖЕ ПРОСТО ПРИПИСАТЬ ЗАДАЧУ 4, ЗАДАЧУ 5 И Т.Д.
          {
        id: 4,
        title: 'Задача 4',
        mathA: '\\sin 2x - 2\\sqrt{3}\\cos^2 x - 4\\sin x + 4\\sqrt{3}\\cos x = 0',
        mathB: '\\left[ \\pi; \\, \\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Используем формулу двойного угла <InlineMath math="\sin 2x = 2\sin x \cos x" /> и сгруппируем слагаемые:</p>
            <BlockMath math="2\sin x \cos x - 2\sqrt{3}\cos^2 x - 4\sin x + 4\sqrt{3}\cos x = 0" />
            <p>Вынесем общие множители за скобки:</p>
            <BlockMath math="2\cos x(\sin x - \sqrt{3}\cos x) - 4(\sin x - \sqrt{3}\cos x) = 0" />
            <BlockMath math="(2\cos x - 4)(\sin x - \sqrt{3}\cos x) = 0" />
            <p>Разбиваем на два случая:</p>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2">
              <p>1) <InlineMath math="2\cos x - 4 = 0 \implies \cos x = 2" /> — решений нет, так как <InlineMath math="|\cos x| \le 1" />.</p>
              <p>2) <InlineMath math="\sin x - \sqrt{3}\cos x = 0" /> — при <InlineMath math="\cos x = 0" /> имеем <InlineMath math="\sin x=\pm1" />, поэтому эта ветвь не даёт корней при нулевом косинусе. Делим на <InlineMath math="\cos x" />:</p>
              <BlockMath math="\operatorname{tg} x = \sqrt{3} \implies x = \frac{\pi}{3} + \pi k, \quad k \in \mathbb{Z}" />
            </div>
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>С помощью единичной тригонометрической окружности отберём корни на отрезке:</p>
            <BlockMath math="x_1 = \frac{\pi}{3} + \pi = \frac{4\pi}{3}, \quad x_2 = \frac{\pi}{3} + 2\pi = \frac{7\pi}{3}" />
            
            <TrigCircle interval={[6,15]} roots={[8,14]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2">
              <span>Ответ: а)</span>
              <InlineMath math="\frac{\pi}{3} + \pi k, \quad k \in \mathbb{Z}" />
              <span className="ml-2">б)</span>
              <InlineMath math="\frac{4\pi}{3}; \quad \frac{7\pi}{3}" />
            </div>
          </div>
        )
      },
          {
        id: 5,
        title: 'Задача 5',
        mathA: '2\\sin^2 x - 5\\sin x + 2 = 0',
        mathB: '\\left[ -\\pi; \\, \\frac{\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Сделаем замену переменной</span>
              <InlineMath math={`t = \\sin x`} />,
              <span>где</span>
              <InlineMath math={`|t| \\le 1`} />:
            </div>
            
            <BlockMath math={`2t^2 - 5t + 2 = 0`} />
            
                      <div className="flex flex-wrap items-center gap-1.5">
              <span>Найдем корни через дискриминант:</span>
              <InlineMath math={`D = 25 - 16 = 9`} />
              <InlineMath math={`\\implies`} />
              <InlineMath math={`t_1 = 2`} />
              <span>и</span>
              <InlineMath math={`t_2 = \\frac{1}{2}`} />.
            </div>
  
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Корень</span>
              <InlineMath math={`t = 2`} />
              <span>не удовлетворяет условию</span>
              <InlineMath math={`|t| \\le 1`} />.
            </div>
            
            <p>Произведем обратную замену для второго корня:</p>
            <BlockMath math={`\\sin x = \\frac{1}{2}`} />
            
            {/* 👍 ИСПРАВЛЕНО: Двойные серии теперь обёрнуты в шаблонные строки с кавычками ` */}
            <div className="flex flex-wrap items-center gap-2 justify-center bg-slate-900/10 dark:bg-purple-950/20 p-3 rounded-xl my-2">
              <InlineMath math={`x = \\frac{\\pi}{6} + 2\\pi k`} />
              <span className="text-xs font-black uppercase text-slate-400">или</span>
              <InlineMath math={`x = \\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            </div>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберем корни, принадлежащие заданному отрезку, с помощью двойного неравенства:</p>
            
            {/* 👍 ИСПРАВЛЕНО: Каждое неравенство защищено кавычками ` и сдвоенными слэшами */}
            <BlockMath math={`-\\pi \\le \\frac{\\pi}{6} + 2\\pi k \\le \\frac{\\pi}{2}`} />
            <BlockMath math={`-\\frac{7\\pi}{6} \\le 2\\pi k \\le \\frac{\\pi}{3}`} />
            <BlockMath math={`-\\frac{7}{12} \\le k \\le \\frac{1}{6} \\implies k = 0 \\implies x = \\frac{\\pi}{6}`} />
            
            <TrigCircle interval={[-6,3]} roots={[1]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{6} + 2\\pi k,`} />
              <InlineMath math={`\\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{\\pi}{6}`} />
            </div>
          </div>
        )
      },
      {
        id: 6,
        title: 'Задача 6',
        mathA: '2\\cos 2x - 4\\cos x = 1',
        mathB: '\\left[ -3\\pi; \\, -\\frac{3\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Используем формулу косинуса двойного угла</span>
              <InlineMath math={`\\cos 2x = 2\\cos^2 x - 1`} />:
            </div>
            
            <BlockMath math={`2(2\\cos^2 x - 1) - 4\\cos x = 1`} />
            <BlockMath math={`4\\cos^2 x - 4\\cos x - 3 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Сделаем замену переменной</span>
              <InlineMath math={`t = \\cos x`} />,
              <span>где</span>
              <InlineMath math={`|t| \\le 1`} />:
            </div>
            
            <BlockMath math={`4t^2 - 4t - 3 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Вычислим дискриминант:</span>
              <InlineMath math={`D = 16 - 4 \\cdot 4 \\cdot (-3) = 16 + 48 = 64`} />.
            </div>
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Найдём корни квадратного уравнения:</span>
              <InlineMath math={`t_1 = \\frac{4 + 8}{8} = \\frac{3}{2}`} />
              <span>и</span>
              <InlineMath math={`t_2 = \\frac{4 - 8}{8} = -\\frac{1}{2}`} />.
            </div>
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Корень</span>
              <InlineMath math={`t = \\frac{3}{2}`} />
              <span>не удовлетворяет условию</span>
              <InlineMath math={`|t| \\le 1`} />.
            </div>
            
            <p>Выполним обратную замену для второго корня:</p>
            <BlockMath math={`\\cos x = -\\frac{1}{2}`} />
            
            <div className="flex flex-wrap items-center gap-1.5 justify-center bg-slate-900/10 dark:bg-purple-950/20 p-2 rounded-xl my-2">
              <InlineMath math={`x = \\frac{2\\pi}{3} + 2\\pi k`} />
              <span className="text-xs font-bold text-slate-400">или</span>
              <InlineMath math={`x = -\\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            </div>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Подставим обе серии в неравенство <InlineMath math="-3\pi \le x \le -\frac{3\pi}{2}" />.</p>
            <BlockMath math="x=\frac{2\pi}{3}+2\pi k \implies -\frac{11}{6}\le k\le -\frac{13}{12}" />
            <p>В этом промежутке целых чисел нет.</p>
            <BlockMath math="x=-\frac{2\pi}{3}+2\pi k \implies -\frac{7}{6}\le k\le -\frac{5}{12} \implies k=-1" />
            <p>Получаем единственный корень <InlineMath math="x=-\frac{8\pi}{3}" />.</p>

            <TrigCircle interval={[-18,-9]} roots={[-16]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math="-\frac{8\pi}{3}" />
            </div>
          </div>
        )
      },
      {
        id: 7,
        title: 'Задача 7',
        mathA: '2\\sin^2 x - 3\\cos x = 0',
        mathB: '\\left[ -4\\pi; \\, -\\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Заменим синус квадрат через основное тригонометрическое тождество</span>
              <InlineMath math={`\\sin^2 x = 1 - \\cos^2 x`} />:
            </div>
            
            <BlockMath math={`2(1 - \\cos^2 x) - 3\\cos x = 0`} />
            <BlockMath math={`2\\cos^2 x + 3\\cos x - 2 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Сделаем замену</span>
              <InlineMath math={`t = \\cos x`} />,
              <span>где</span>
              <InlineMath math={`|t| \\le 1`} />:
            </div>
            
            <BlockMath math={`2t^2 + 3t - 2 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Дискриминант уравнения:</span>
              <InlineMath math={`D = 9 - 4 \\cdot 2 \\cdot (-2) = 25`} />.
            </div>
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Корни квадратного уравнения:</span>
              <InlineMath math={`t_1 = \\frac{-3 + 5}{4} = \\frac{1}{2}`} />
              <span>и</span>
              <InlineMath math={`t_2 = \\frac{-3 - 5}{4} = -2`} />.
            </div>
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Корень</span>
              <InlineMath math={`t = -2`} />
              <span>не подходит, так как</span>
              <InlineMath math={`|t| \\le 1`} />.
            </div>
            
            <p>Выполним обратную замену:</p>
            <BlockMath math={`\\cos x = \\frac{1}{2}`} />
            
            <div className="flex flex-wrap items-center gap-1.5 justify-center bg-slate-900/10 dark:bg-purple-950/20 p-2 rounded-xl my-2">
              <InlineMath math={`x = \\frac{\\pi}{3} + 2\\pi k`} />
              <span className="text-xs font-bold text-slate-400">или</span>
              <InlineMath math={`x = -\\frac{\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            </div>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Подставим обе серии в неравенство <InlineMath math="-4\pi \le x \le -\frac{5\pi}{2}" />.</p>
            <BlockMath math="x=\frac{\pi}{3}+2\pi k \implies -\frac{13}{6}\le k\le -\frac{17}{12} \implies k=-2" />
            <BlockMath math="x=-\frac{\pi}{3}+2\pi k \implies -\frac{11}{6}\le k\le -\frac{13}{12}" />
            <p>Вторая серия не даёт целых значений <InlineMath math="k" />. Подходит только <InlineMath math="x=-\frac{11\pi}{3}" />.</p>

            <TrigCircle interval={[-24,-15]} roots={[-22]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math="-\frac{11\pi}{3}" />
            </div>
          </div>
        )
      },
      {
        id: 8,
        title: 'Задача 8',
        mathA: '\\sin 2x - 2\\cos x - \\sqrt{3}\\sin x + \\sqrt{3} = 0',
        mathB: '\\left[ -\\frac{\\pi}{2}; \\, \\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Распишем синус двойного угла по формуле</span>
              <InlineMath math={`\\sin 2x = 2\\sin x \\cos x`} />:
            </div>
            
            <BlockMath math={`2\\sin x \\cos x - 2\\cos x - \\sqrt{3}\\sin x + \\sqrt{3} = 0`} />
            
            <p>Сгруппируем слагаемые и вынесем общие множители за скобки:</p>
            <BlockMath math={`2\\cos x(\\sin x - 1) - \\sqrt{3}(\\\sin x - 1) = 0`} />
            <BlockMath math={`(2\\cos x - \\sqrt{3})(\\sin x - 1) = 0`} />
            
            <p>Произведение равно нулю, когда хотя бы один из множителей равен нулю:</p>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span>1)</span>
                <InlineMath math={`2\\cos x - \\sqrt{3} = 0 \\implies \\cos x = \\frac{\\sqrt{3}}{2}`} />
               <InlineMath math={`\\implies`} />
                <InlineMath math={`x = \\pm\\frac{\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />.
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span>2)</span>
                <InlineMath math={`\\sin x - 1 = 0 \\implies \\sin x = 1`} />
                <InlineMath math={`\\implies`} />
                <InlineMath math={`x = \\frac{\\pi}{2} + 2\\pi n, \\quad n \\in \\mathbb{Z}`} />.
              </div>
            </div>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни, принадлежащие заданному отрезку, с помощью двойного неравенства.</p>
            
            <p className="font-medium text-xs text-slate-400">Для серии корней синуса:</p>
            <BlockMath math={`-\\frac{\\pi}{2} \\le \\frac{\\pi}{2} + 2\\pi n \\le \\pi \\implies -\\frac{1}{2} \\le \\frac{1}{2} + 2n \\le 1 \\implies -1 \\le 2n \\le \\frac{1}{2} \\implies n = 0 \\implies x = \\frac{\\pi}{2}`} />
            
            <p className="font-medium text-xs text-slate-400">Для положительной серии косинуса:</p>
            <BlockMath math={`-\\frac{\\pi}{2} \\le \\frac{\\pi}{6} + 2\\pi k \\le \\pi \\implies -\\frac{1}{2} \\le \\frac{1}{6} + 2k \\le 1 \\implies -\\frac{2}{3} \\le 2k \\le \\frac{5}{6} \\implies k = 0 \\implies x = \\frac{\\pi}{6}`} />
            
            <p className="font-medium text-xs text-slate-400">Для отрицательной серии косинуса:</p>
            <BlockMath math={`-\\frac{\\pi}{2} \\le -\\frac{\\pi}{6} + 2\\pi k \\le \\pi \\implies -\\frac{1}{2} \\le -\\frac{1}{6} + 2k \\le 1 \\implies -\\frac{1}{3} \\le 2k \\le \\frac{7}{6} \\implies k = 0 \\implies x = -\\frac{\\pi}{6}`} />
            
            <TrigCircle interval={[-3,6]} roots={[-1,1,3]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{6} + 2\\pi k, \\, \\frac{\\pi}{2} + 2\\pi n, \\, k, n \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{\\pi}{6}; \\, \\frac{\\pi}{6}; \\, \\frac{\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 9,
        title: 'Задача 9',
        mathA: '2\\cos^2 x + 5\\sin x - 4 = 0',
        mathB: '\\left[ -\\frac{7\\pi}{2}; \\, -2\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Выразим косинус через основное тригонометрическое тождество:</span>
              <InlineMath math={`\\cos^2 x = 1 - \\sin^2 x`} />
            </div>
            
            <BlockMath math={`2(1 - \\sin^2 x) + 5\\sin x - 4 = 0`} />
            <BlockMath math={`2\\sin^2 x - 5\\sin x + 2 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Сделаем замену переменной</span>
              <InlineMath math={`t = \\sin x`} />,
              <span>где</span>
              <InlineMath math={`|t| \\le 1`} />:
            </div>
            
            <BlockMath math={`2t^2 - 5t + 2 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Найдём корни через дискриминант:</span>
              <InlineMath math={`D = 25 - 16 = 9`} />
              <InlineMath math={`\\implies`} />
              <InlineMath math={`t_1 = 2`} />
              <span>и</span>
              <InlineMath math={`t_2 = \\frac{1}{2}`} />.
            </div>
            
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Корень</span>
              <InlineMath math={`t = 2`} />
              <span>не удовлетворяет условию</span>
              <InlineMath math={`|t| \\le 1`} />.
            </div>
            
            <p>Выполним обратную замену для оставшегося корня:</p>
            <BlockMath math={`\\sin x = \\frac{1}{2}`} />
            
            <div className="flex flex-wrap items-center gap-2 justify-center bg-slate-900/10 dark:bg-purple-950/20 p-3 rounded-xl my-2">
              <InlineMath math={`x = \\frac{\\pi}{6} + 2\\pi k`} />
              <span className="text-xs font-black uppercase text-slate-400">или</span>
              <InlineMath math={`x = \\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            </div>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Подставим обе серии в неравенство <InlineMath math="-\frac{7\pi}{2} \le x \le -2\pi" />.</p>
            <BlockMath math="x=\frac{\pi}{6}+2\pi k \implies -\frac{11}{6}\le k\le -\frac{13}{12}" />
            <p>Первая серия не даёт целых значений <InlineMath math="k" />.</p>
            <BlockMath math="x=\frac{5\pi}{6}+2\pi k \implies -\frac{13}{6}\le k\le -\frac{17}{12} \implies k=-2" />
            <p>Подходит только <InlineMath math="x=-\frac{19\pi}{6}" />.</p>

            <TrigCircle interval={[-21,-12]} roots={[-19]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{6} + 2\\pi k, \\, \\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math="-\frac{19\pi}{6}" />
            </div>
          </div>
        )
      },
      {
        id: 10,
        title: 'Задача 10',
        mathA: '\\sin\\left(x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}(\\sin x - \\cos x)',
        mathB: '\\left[ -2\\pi; \\, -\\frac{\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Раскроем левую часть по формуле синуса разности:</span>
              <InlineMath math={`\\sin\\left(x - \\frac{\\pi}{4}\\right) = \\sin x \\cos\\frac{\\pi}{4} - \\cos x \\sin\\frac{\\pi}{4}`} />
            </div>
            <BlockMath math={`\\sin x \\cdot \\frac{\\sqrt{2}}{2} - \\cos x \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2}}{2}(\\sin x - \\cos x)`} />
            <BlockMath math={`\\frac{\\sqrt{2}}{2}(\\sin x - \\cos x) = \\frac{\\sqrt{2}}{2}(\\sin x - \\cos x)`} />
            <p>Уравнение верно для всех значений переменной, при которых определены функции. Так как синус и косинус определены на всей числовой прямой, решением является любое действительное число.</p>
            <BlockMath math={`x \\in \\mathbb{R}`} />
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Так как решением уравнения являются все действительные числа, то на заданном отрезке решением будут все числа, принадлежащие этому отрезку.</p>
            <TrigCircle interval={[-4,-1]} denominator={2} allAngles />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x \\in \\mathbb{R}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\left[-2\\pi; \\, -\\frac{\\pi}{2}\\right]`} />
            </div>
          </div>
        )
      },
      {
        id: 11,
        title: 'Задача 11',
        mathA: '\\sqrt{2}\\cos^2 x - \\sin x = 0',
        mathB: '\\left[ -\\frac{5\\pi}{2}; \\, -\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Заменим косинус квадрат через тождество:</span>
              <InlineMath math={`\\cos^2 x = 1 - \\sin^2 x`} />
            </div>
            <BlockMath math={`\\sqrt{2}(1 - \\sin^2 x) - \\sin x = 0`} />
            <BlockMath math={`\\sqrt{2}\\sin^2 x + \\sin x - \\sqrt{2} = 0`} />
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Сделаем замену</span>
              <InlineMath math={`t = \\sin x`} />
              <span>(где</span>
              <InlineMath math={`|t| \\le 1`} />):
            </div>
            <BlockMath math={`\\sqrt{2}t^2 + t - \\sqrt{2} = 0`} />
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Дискриминант:</span>
              <InlineMath math={`D = 1 - 4 \\cdot \\sqrt{2} \\cdot (-\\sqrt{2}) = 1 + 8 = 9`} />
              <InlineMath math={`\\implies`} />
              <InlineMath math={`t_1 = \\frac{-1 + 3}{2\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}`} />
              <span>и</span>
              <InlineMath math={`t_2 = -\\sqrt{2}`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Корень</span>
              <InlineMath math={`t = -\\sqrt{2}`} />
              <span>не подходит по ограничению замены.</span>
            </div>
            <p>Выполним обратную замену:</p>
            <BlockMath math={`\\sin x = \\frac{\\sqrt{2}}{2}`} />
            <div className="flex flex-wrap items-center gap-2 justify-center bg-slate-900/10 dark:bg-purple-950/20 p-3 rounded-xl my-2">
              <InlineMath math={`x = \\frac{\\pi}{4} + 2\\pi k`} />
              <span className="text-xs font-black uppercase text-slate-400">или</span>
              <InlineMath math={`x = \\frac{3\\pi}{4} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            </div>
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>При помощи тригонометрической окружности находим корни на заданном отрезке:</p>
            <BlockMath math={`x = -\\frac{7\\pi}{4}; \\, -\\frac{5\\pi}{4}`} />
            <TrigCircle interval={[-10,-4]} roots={[-7,-5]} denominator={4} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{4} + 2\\pi k, \\, \\frac{3\\pi}{4} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{7\\pi}{4}; \\, -\\frac{5\\pi}{4}`} />
            </div>
          </div>
        )
      },
      {
        id: 12,
        title: 'Задача 12',
        mathA: '2\\sin x \\cos x - \\sqrt{3}\\sin x - 2\\cos x + \\sqrt{3} = 0',
        mathB: '\\left[ \\pi; \\, \\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Сгруппируем слагаемые в левой части уравнения:</p>
            <BlockMath math={`2\\cos x(\\sin x - 1) - \\sqrt{3}(\\sin x - 1) = 0`} />
            <BlockMath math={`(2\\cos x - \\sqrt{3})(\\sin x - 1) = 0`} />
            <p>Разбиваем на два независимых случая:</p>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span>1)</span>
                <InlineMath math={`2\\cos x - \\sqrt{3} = 0 \\implies \\cos x = \\frac{\\sqrt{3}}{2}`} />
                <InlineMath math={`\\implies`} />
                <InlineMath math={`x = \\pm\\frac{\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />.
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span>2)</span>
                <InlineMath math={`\\sin x - 1 = 0 \\implies \\sin x = 1`} />
                <InlineMath math={`\\implies`} />
                <InlineMath math={`x = \\frac{\\pi}{2} + 2\\pi n, \\quad n \\in \\mathbb{Z}`} />.
              </div>
            </div>
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>При помощи тригонометрической окружности отберём корни, принадлежащие отрезку:</p>
            <BlockMath math={`x = \\frac{11\\pi}{6}; \\, \\frac{13\\pi}{6}; \\, \\frac{5\\pi}{2}`} />
            <TrigCircle interval={[6,15]} roots={[11,13,15]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{6} + 2\\pi k, \\, \\frac{\\pi}{2} + 2\\pi n, \\, k, n \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{11\\pi}{6}; \\, \\frac{13\\pi}{6}; \\, \\frac{5\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 13,
        title: 'Задача 13',
        mathA: '2\\cos^2 x + \\sqrt{3}\\sin x + 1 = 0',
        mathB: '\\left[ -3\\pi; \\, -\\frac{3\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Используем основное тригонометрическое тождество:</span>
              <InlineMath math={`\\cos^2 x = 1 - \\sin^2 x`} />
            </div>
            <BlockMath math={`2(1 - \\sin^2 x) + \\sqrt{3}\\sin x + 1 = 0`} />
            <BlockMath math={`2\\sin^2 x - \\sqrt{3}\\sin x - 3 = 0`} />
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Сделаем замену переменной</span>
              <InlineMath math={`t = \\sin x`} />
              <span>(где</span>
              <InlineMath math={`|t| \\le 1`} />):
            </div>
            <BlockMath math={`2t^2 - \\sqrt{3}t - 3 = 0`} />
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Дискриминант:</span>
              <InlineMath math={`D = 3 - 4 \\cdot 2 \\cdot (-3) = 3 + 24 = 27`} />
              <InlineMath math={`\\implies`} />
              <InlineMath math={`t_1 = \\sqrt{3}`} />
              <span>и</span>
              <InlineMath math={`t_2 = -\\frac{\\sqrt{3}}{2}`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Корень</span>
              <InlineMath math={`t = \\sqrt{3}`} />
              <span>не удовлетворяет условию</span>
              <InlineMath math={`|t| \\le 1`} />.
            </div>
            <p>Выполним обратную замену:</p>
            <BlockMath math={`\\sin x = -\\frac{\\sqrt{3}}{2}`} />
            <div className="flex flex-wrap items-center gap-2 justify-center bg-slate-900/10 dark:bg-purple-950/20 p-3 rounded-xl my-2">
              <InlineMath math={`x = -\\frac{\\pi}{3} + 2\\pi k`} />
              <span className="text-xs font-black uppercase text-slate-400">или</span>
              <InlineMath math={`x = -\\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            </div>
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>При помощи тригонометрической окружности отберём корни, принадлежащие отрезку:</p>
            <BlockMath math={`x = -\\frac{7\\pi}{3}; \\, -\\frac{8\\pi}{3}`} />
            <TrigCircle interval={[-18,-9]} roots={[-16,-14]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`-\\frac{\\pi}{3} + 2\\pi k, \\, -\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{7\\pi}{3}; \\, -\\frac{8\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 14,
        title: 'Задача 14',
        mathA: '4^{\\cos x} - 5 \\cdot 2^{\\cos x} + 4 = 0',
        mathB: '\\left[ -2\\pi; \\, -\\frac{\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Приведем уравнение к основанию двойки:</p>
            <BlockMath math={`(2^{\\cos x})^2 - 5 \\cdot 2^{\\cos x} + 4 = 0`} />
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Сделаем замену</span>
              <InlineMath math={`t = 2^{\\cos x}`} />
              <span>(где</span>
              <InlineMath math={`t > 0`} />):
            </div>
            <BlockMath math={`t^2 - 5t + 4 = 0 \\implies t_1 = 1, \\quad t_2 = 4`} />
            <p>Выполним обратную замену:</p>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2">
              <p>1) <InlineMath math={`2^{\\cos x} = 1 \\implies \\cos x = 0 \\implies x = \\frac{\\pi}{2} + \\pi k, \\, k \\in \\mathbb{Z}`} />.</p>
              <p>2) <InlineMath math={`2^{\\cos x} = 4 \\implies \\cos x = 2`} /> — решений нет, так как косинус не превышает единицу.</p>
            </div>
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отбираем точки, попадающие на заданный отрезок, с помощью окружности:</p>
            <BlockMath math={`x = -\\frac{3\\pi}{2}; \\, -\\frac{\\pi}{2}`} />
            <TrigCircle interval={[-4,-1]} roots={[-3,-1]} denominator={2} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + \\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{3\\pi}{2}; \\, -\\frac{\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 15,
        title: 'Задача 15',
        mathA: '\\sqrt{3}\\operatorname{tg}^2 x - 4\\operatorname{tg} x + \\sqrt{3} = 0',
        mathB: '\\left[ -\\pi; \\, \\frac{\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Зададим ограничения (ОДЗ):</span>
              <InlineMath math={`\\cos x \\neq 0 \\implies x \\neq \\frac{\\pi}{2} + \\pi n`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Сделаем замену переменной</span>
              <InlineMath math={`t = \\operatorname{tg} x`} />:
            </div>
            <BlockMath math={`\\sqrt{3}t^2 - 4t + \\sqrt{3} = 0`} />
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Вычислим дискриминант:</span>
              <InlineMath math={`D = 16 - 4 \\cdot \\sqrt{3} \\cdot \\sqrt{3} = 16 - 12 = 4`} />
              <InlineMath math={`\\implies`} />
              <InlineMath math={`t_1 = \\sqrt{3}`} />
              <span>и</span>
              <InlineMath math={`t_2 = \\frac{\\sqrt{3}}{3}`} />.
            </div>
            <p>Выполним обратную замену:</p>
            <BlockMath math={`\\operatorname{tg} x = \\sqrt{3} \\implies x = \\frac{\\pi}{3} + \\pi k, \\, k \\in \\mathbb{Z}`} />
            <BlockMath math={`\\operatorname{tg} x = \\frac{\\sqrt{3}}{3} \\implies x = \\frac{\\pi}{6} + \\pi m, \\, m \\in \\mathbb{Z}`} />
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>При помощи числовой прямой или двойных неравенств находим корни:</p>
            <BlockMath math={`x = -\\frac{2\\pi}{3}; \\, -\\frac{5\\pi}{6}; \\, \\frac{\\pi}{6}; \\, \\frac{\\pi}{3}`} />
            <TrigCircle interval={[-6,3]} roots={[-5,-4,1,2]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{3} + \\pi k, \\, \\frac{\\pi}{6} + \\pi m, \\, k, m \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{2\\pi}{3}; \\, -\\frac{5\\pi}{6}; \\, \\frac{\\pi}{6}; \\, \\frac{\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 16,
        title: 'Задача 16',
        mathA: '\\sin 2x - \\sqrt{3}\\cos x = 0',
        mathB: '\\left[ -3\\pi; \\, -\\frac{3\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Распишем синус двойного угла по формуле:</span>
              <InlineMath math={`2\\sin x \\cos x - \\sqrt{3}\\cos x = 0`} />
            </div>
            <p>Вынесем общий множитель за скобки:</p>
            <BlockMath math={`\\cos x(2\\sin x - \\sqrt{3}) = 0`} />
            <p>Разбиваем уравнение на два случая:</p>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2">
              <p>1) <InlineMath math={`\\cos x = 0 \\implies x = \\frac{\\pi}{2} + \\pi k, \\quad k \\in \\mathbb{Z}`} />.</p>
              <p>2) <InlineMath math={`2\\sin x - \\sqrt{3} = 0 \\implies \\sin x = \\frac{\\sqrt{3}}{2} \\implies x = \\frac{\\pi}{3} + 2\\pi n \\quad \\text{или} \\quad x = \\frac{2\\pi}{3} + 2\\pi n, \\quad n \\in \\mathbb{Z}`} />.</p>
            </div>
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>При помощи тригонометрической окружности находим корни на заданном отрезке:</p>
            <BlockMath math={`x = -\\frac{5\\pi}{2}; \\, -\\frac{5\\pi}{3}; \\, -\\frac{3\\pi}{2}`} />
            <TrigCircle interval={[-18,-9]} roots={[-15,-10,-9]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + \\pi k, \\, \\frac{\\pi}{3} + 2\\pi n, \\, \\frac{2\\pi}{3} + 2\\pi n, \\, k, n \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{5\\pi}{2}; \\, -\\frac{5\\pi}{3}; \\, -\\frac{3\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 17,
        title: 'Задача 17',
        mathA: '4\\sin^3 x - 3\\sin x = 0',
        mathB: '\\left[ \\pi; \\, \\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Вынесем синус за скобки:</p>
            <BlockMath math={`\\sin x(4\\sin^2 x - 3) = 0`} />
            <p>Получаем два случая:</p>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2">
              <p>1) <InlineMath math={`\\sin x = 0 \\implies x = \\pi k, \\quad k \\in \\mathbb{Z}`} />.</p>
              <p>2) <InlineMath math={`4\\sin^2 x = 3 \\implies \\sin^2 x = \\frac{3}{4} \\implies \\sin x = \\pm\\frac{\\sqrt{3}}{2}`} />.</p>
            </div>
            <p>Объединяя все серии, получаем компактный ответ:</p>
            <BlockMath math={`x = \\pi k, \\quad x = \\pm\\frac{\\pi}{3} + \\pi n, \\quad k, n \\in \\mathbb{Z}`} />
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>С помощью окружности отберём корни на отрезке:</p>
            <BlockMath math={`x = \\pi; \\, \\frac{4\\pi}{3}; \\, \\frac{5\\pi}{3}; \\, 2\\pi; \\, \\frac{7\\pi}{3}`} />
            <TrigCircle interval={[6,15]} roots={[6,8,10,12,14]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi k, \\, \\pm\\frac{\\pi}{3} + \\pi n, \\, k, n \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\pi; \\, \\frac{4\\pi}{3}; \\, \\frac{5\\pi}{3}; \\, 2\\pi; \\, \\frac{7\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 18,
        title: 'Задача 18',
        mathA: '\\log_2(\\cos x) = 0',
        mathB: '\\left[ 2\\pi; \\, \\frac{7\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1.5">
              <span>По определению логарифма при условии ОДЗ (</span>
              <InlineMath math={`\\cos x > 0`} />
              <span>):</span>
            </div>
            <BlockMath math={`\\cos x = 2^0 \\implies \\cos x = 1`} />
            <p>Условие ОДЗ выполняется автоматически, так как единица больше нуля.</p>
            <BlockMath math={`x = 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Сравниваем корни с границами промежутка:</p>
            <BlockMath math={`x = 2\\pi`} />
            <TrigCircle interval={[4,7]} roots={[4]} denominator={2} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`2\\pi`} />
            </div>
          </div>
        )
      },
      {
        id: 19,
        title: 'Задача 19',
        mathA: '\\sqrt{3}\\operatorname{ctg} x - 3 = 0',
        mathB: '\\left[ -2\\pi; \\, -\\frac{\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1.5">
              <span>Учтём ОДЗ котангенса:</span>
              <InlineMath math={`\\sin x \\neq 0 \\implies x \\neq \\pi n`} />.
            </div>
            <p>Выразим котангенс из уравнения:</p>
            <BlockMath math={`\\sqrt{3}\\operatorname{ctg} x = 3 \\implies \\operatorname{ctg} x = \\frac{3}{\\sqrt{3}} = \\sqrt{3}`} />
            <BlockMath math={`x = \\frac{\\pi}{6} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём точки, попадающие на заданный отрезок, с помощью двойного неравенства:</p>
            <BlockMath math={`-2\\pi \\le \\frac{\\pi}{6} + \\pi k \\le -\\frac{\\pi}{2} \\implies -2 \\le \\frac{1}{6} + k \\le -\\frac{1}{2}`} />
            <BlockMath math={`-\\frac{13}{6} \\le k \\le -\\frac{7}{6} \\implies k = -2 \\implies x = -\\frac{11\\pi}{6}, \\quad k = -1 \\implies x = -\\frac{5\\pi}{6}`} />
            <TrigCircle interval={[-12,-3]} roots={[-11,-5]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{6} + \\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{11\\pi}{6}; \\, -\\frac{5\\pi}{6}`} />
            </div>
          </div>
        )
      },
      {
        id: 20,
        title: 'Задача 20',
        mathA: '16^{\\sin x} - 6 \\cdot 4^{\\sin x} + 8 = 0',
        mathB: '\\left[ -5\\pi; \\, -\\frac{7\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Приведём к степеням четвёрки:</p>
            <BlockMath math={`4^{2\\sin x} - 6 \\cdot 4^{\\sin x} + 8 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Сделаем замену переменной</span>
              <InlineMath math={`t = 4^{\\sin x}`} />
              <span>(где</span>
              <InlineMath math={`t > 0`} />):
            </div>
            <BlockMath math={`t^2 - 6t + 8 = 0`} />
            <p>Корни квадратного уравнения: <InlineMath math={`t_1 = 4, \\quad t_2 = 2`} />.</p>
            
            <p>Выполним обратную замену:</p>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <InlineMath math={`4^{\\sin x} = 4`} />
                <InlineMath math={`\\implies`} />
                <InlineMath math={`\\sin x = 1`} />
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <InlineMath math={`4^{\\sin x} = 2`} />
                <InlineMath math={`\\implies`} />
                <InlineMath math={`\\sin x = \\frac{1}{2}`} />
              </div>
            </div>
            
            <p>Серии корней уравнения:</p>
            <BlockMath math={`x = \\frac{\\pi}{2} + 2\\pi k, \\quad x = \\frac{\\pi}{6} + 2\\pi k, \\quad x = \\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, при помощи единичной окружности.</p>
            <p>На заданном промежутке лежат точки:</p>
            <BlockMath math={`x = -\\frac{23\\pi}{6}; \\quad x = -\\frac{7\\pi}{2}`} />
            
            <TrigCircle interval={[-30,-21]} roots={[-23,-21]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + 2\\pi k;`} />
              <InlineMath math={`\\frac{\\pi}{6} + 2\\pi k;`} />
              <InlineMath math={`\\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{23\\pi}{6}; \\, -\\frac{7\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 21,
        title: 'Задача 21',
        mathA: '\\log_9\\left(3^{2x} + 5\\sqrt{2}\\sin x - 6\\cos^2 x - 2\\right) = x',
        mathB: '\\left[ -2\\pi; \\, -\\frac{\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>По определению логарифма перейдём к равенству аргументов:</p>
            <BlockMath math={`3^{2x} + 5\\sqrt{2}\\sin x - 6\\cos^2 x - 2 = 9^x`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`9^x = 3^{2x}`} />,
              <span>слагаемые взаимоуничтожаются:</span>
            </div>
            <BlockMath math={`5\\sqrt{2}\\sin x - 6\\cos^2 x - 2 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Используем тождество</span>
              <InlineMath math={`\\cos^2 x = 1 - \\sin^2 x`} />:
            </div>
            <BlockMath math={`5\\sqrt{2}\\sin x - 6(1 - \\sin^2 x) - 2 = 0 \\implies 6\\sin^2 x + 5\\sqrt{2}\\sin x - 8 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена переменной</span>
              <InlineMath math={`t = \\sin x`} />
              <span>(где</span>
              <InlineMath math={`-1 \\le t \\le 1`} />):
            </div>
            <BlockMath math={`6t^2 + 5\\sqrt{2}t - 8 = 0`} />
            <BlockMath math={`D = 50 + 192 = 242 = 121 \\cdot 2 \\implies \\sqrt{D} = 11\\sqrt{2}`} />
            <BlockMath math={`t_{1,2} = \\frac{-5\\sqrt{2} \\pm 11\\sqrt{2}}{12} \\implies t_1 = \\frac{\\sqrt{2}}{2}, \\quad t_2 = -\\frac{4\\sqrt{2}}{3}`} />
            <p>Корень <InlineMath math={`t_2`} /> не подходит, так как <InlineMath math={`|t_2| > 1`} />.</p>
            
            <p>Выполним обратную замену:</p>
            <BlockMath math={`\\sin x = \\frac{\\sqrt{2}}{2} \\implies x = \\frac{\\pi}{4} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{3\\pi}{4} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>При помощи единичной тригонометрической окружности находим точки на заданном отрезке:</p>
            <BlockMath math={`x = -\\frac{7\\pi}{4}; \\quad x = -\\frac{5\\pi}{4}`} />
            
            <TrigCircle interval={[-8,-2]} roots={[-7,-5]} denominator={4} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{4} + 2\\pi k;`} />
              <InlineMath math={`\\frac{3\\pi}{4} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{7\\pi}{4}; \\, -\\frac{5\\pi}{4}`} />
            </div>
          </div>
        )
      },
      {
        id: 22,
        title: 'Задача 22',
        mathA: '27^x - 28 \\cdot 3^{x+1} + 3^{5-x} = 0',
        mathB: '\\left[ \\sqrt{3}; \\, \\log_2 5 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Приведём к степеням тройки:</p>
            <BlockMath math={`3^{3x} - 84 \\cdot 3^x + 243 \\cdot 3^{-x} = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Домножим на</span>
              <InlineMath math={`3^x \\neq 0`} />:
            </div>
            <BlockMath math={`3^{4x} - 84 \\cdot 3^{2x} + 243 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = 3^{2x} \\, (t > 0)`} />:
            </div>
            <BlockMath math={`t^2 - 84t + 243 = 0 \\implies D = 7056 - 972 = 6084 = 78^2`} />
            <BlockMath math={`t_{1,2} = \\frac{84 \\pm 78}{2} \\implies t_1 = 81, \\quad t_2 = 3`} />
            
            <p>Обратная замена:</p>
            <BlockMath math={`3^{2x} = 81 \\implies 2x = 4 \\implies x = 2`} />
            <BlockMath math={`3^{2x} = 3 \\implies 2x = 1 \\implies x = \\frac{1}{2}`} />
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения при помощи числовых неравенств. Проверим границы отрезка:</p>
            <BlockMath math={`\\sqrt{3} < \\sqrt{4} = 2 = \\log_2 4 < \\log_2 5 \\implies x = 2 \\in \\text{отрезку}`} />
            <BlockMath math={`\\frac{1}{2} < \\sqrt{3} \\implies x = \\frac{1}{2} \\notin \\text{отрезку}`} />
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 2;`} />
              <span>и</span>
              <InlineMath math={`x = \\frac{1}{2}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`2`} />
            </div>
          </div>
        )
      },
      {
        id: 23,
        title: 'Задача 23',
        mathA: '16^{\\cos x} + 16^{\\cos(\\pi-x)} = \\frac{17}{4}',
        mathB: '\\left[ \\pi; \\, \\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\cos(\\pi - x) = -\\cos x`} />,
              <span>то уравнение примет вид:</span>
            </div>
            <BlockMath math={`16^{\\cos x} + 16^{-\\cos x} = \\frac{17}{4}`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = 16^{\\cos x}`} />
              <span>(где</span>
              <InlineMath math={`t > 0`} />):
            </div>
            <BlockMath math={`t + \\frac{1}{t} = \\frac{17}{4} \\implies 4t^2 - 17t + 4 = 0`} />
            <p>Корни квадратного уравнения: <InlineMath math={`t_1 = 4, \\quad t_2 = \\frac{1}{4}`} />.</p>
            
            <p>Выполним обратную замену:</p>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2">
              <p><InlineMath math={`16^{\\cos x} = 4 \\implies \\cos x = \\frac{1}{2} \\implies x = \\pm\\frac{\\pi}{3} + 2\\pi k`} /></p>
              <p><InlineMath math={`16^{\\cos x} = \\frac{1}{4} \\implies \\cos x = -\\frac{1}{2} \\implies x = \\pm\\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
            </div>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, при помощи единичной окружности.</p>
            <p>На заданном промежутке лежат точки:</p>
            <BlockMath math={`x = \\frac{4\\pi}{3}; \\quad x = \\frac{5\\pi}{3}; \\quad x = \\frac{7\\pi}{3}`} />
            
            <TrigCircle interval={[6,15]} roots={[8,10,14]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{3} + 2\\pi k; \\quad \\pm\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{4\\pi}{3}; \\, \\frac{5\\pi}{3}; \\, \\frac{7\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 24,
        title: 'Задача 24',
        mathA: '27 \\cdot 81^{\\sin x} - 12 \\cdot 9^{\\sin x} + 1 = 0',
        mathB: '\\left[ \\frac{3\\pi}{2}; \\, 3\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Приведём слагаемые к степеням девятки:</p>
            <BlockMath math={`27 \\cdot 9^{2\\sin x} - 12 \\cdot 9^{\\sin x} + 1 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена переменной</span>
              <InlineMath math={`t = 9^{\\sin x}`} />
              <span>(где</span>
              <InlineMath math={`t > 0`} />):
            </div>
            <BlockMath math={`27t^2 - 12t + 1 = 0 \\implies D = 144 - 108 = 36`} />
            <BlockMath math={`t_{1,2} = \\frac{12 \\pm 6}{54} \\implies t_1 = \\frac{1}{3}, \\quad t_2 = \\frac{1}{9}`} />
            
            <p>Выполним обратную замену:</p>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2">
              <p><InlineMath math={`9^{\\sin x} = \\frac{1}{3} \\implies \\sin x = -\\frac{1}{2} \\implies x = -\\frac{\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{7\\pi}{6} + 2\\pi k`} /></p>
              <p><InlineMath math={`9^{\\sin x} = \\frac{1}{9} \\implies \\sin x = -1 \\implies x = -\\frac{\\pi}{2} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
            </div>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>При помощи единичной тригонометрической окружности отберём корни на заданном отрезке:</p>
            <BlockMath math={`x = \\frac{3\\pi}{2}; \\quad x = \\frac{11\\pi}{6}`} />
            
            <TrigCircle interval={[9,18]} roots={[9,11]} denominator={6} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`-\\frac{\\pi}{6} + 2\\pi k; \\, \\frac{7\\pi}{6} + 2\\pi k; \\, -\\frac{\\pi}{2} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{3\\pi}{2}; \\, \\frac{11\\pi}{6}`} />
            </div>
          </div>
        )
      },
          {
        id: 25,
        title: 'Задача 25',
        mathA: '\\log_5(5x^4 + 30) = 1 + \\log_{\\sqrt{5}}\\sqrt{5x^2 + 2}',
        mathB: '\\left[ -\\frac{5}{3}; \\, \\frac{38}{13} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Преобразуем правую часть по свойствам оснований логарифмов:</p>
            <BlockMath math={`\\log_{\\sqrt{5}}\\sqrt{5x^2 + 2} = \\log_{5^{1/2}}(5x^2 + 2)^{1/2} = \\log_5(5x^2 + 2)`} />
            <p>Перепишем исходное уравнение:</p>
            <BlockMath math={`\\log_5(5x^4 + 30) = \\log_5 5 + \\log_5(5x^2 + 2) = \\log_5(5(5x^2 + 2))`} />
            
            {/* 👍 ИСПРАВЛЕНО: Множество R теперь безопасно выводится через InlineMath */}
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как аргументы логарифмов положительны при любых x (ОДЗ:</span>
              <InlineMath math={`x \\in \\mathbb{R}`} />
              <span>), можем перейти к равенству аргументов:</span>
            </div>
            <BlockMath math={`5x^4 + 30 = 25x^2 + 10 \\implies x^4 - 5x^2 + 4 = 0`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Сделаем замену</span>
              <InlineMath math={`t = x^2`} />
              <span>(где</span>
              <InlineMath math={`t \\ge 0`} />):
            </div>
            <BlockMath math={`t^2 - 5t + 4 = 0 \\implies t_1 = 4, \\quad t_2 = 1`} />
            <p>Обратная замена дает четыре корня: <InlineMath math={`x = \\pm 1, \\quad x = \\pm 2`} />.</p>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Проверим границы отрезка при помощи числовых inequalities:</p>
            <div className="pl-4 space-y-1 text-sm">
              <p>• <InlineMath math={`-2 < -\\frac{5}{3}`} /> — корень \(x = -2\) не подходит.</p>
              <p>• <InlineMath math={`-\\frac{5}{3} < -1`} /> — корень \(x = -1\) подходит.</p>
              <p>• <InlineMath math={`1 < 2 = \\frac{26}{13} < \\frac{38}{13}`} /> — корни \(x = 1\) и \(x = 2\) подходят.</p>
            </div>
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = \\pm 1; \\, x = \\pm 2`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-1; \\, 1; \\, 2`} />
            </div>
          </div>
        )
      },
  
          {
        id: 26,
        title: 'Задача 26',
        mathA: 'x \\cdot \\log_9(15 - 7x) \\cdot \\log_{3-x} 9 = (\\sqrt{x})^2',
        mathB: '\\left[ -1; \\, 3 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Составим область допустимых значений (ОГР):</p>
            <BlockMath math={`\\begin{cases} x \\ge 0 \\\\ 15 - 7x > 0 \\\\ 3 - x > 0 \\\\ 3 - x \\neq 1 \\end{cases} \\implies x \\in [0; \\, 2) \\cup (2; \\, \\frac{15}{7})`} />
            
            {/* 👍 ИСПРАВЛЕНО: Математика изъята из тега p и перенесена в InlineMath */}
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`(\\sqrt{x})^2 = x`} />
              <span>при</span>
              <InlineMath math={`x \\ge 0`} />,
              <span>перепишем уравнение и вынесем общий множитель за скобки:</span>
            </div>
            
            <BlockMath math={`x \\cdot \\log_9(15 - 7x) \\cdot \\log_{3-x} 9 = x \\implies x \\left( \\log_9(15 - 7x) \\cdot \\log_{3-x} 9 - 1 \\right) = 0`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Отсюда получаем два случая:</span>
              <InlineMath math={`x = 0`} />
              <span>или вложенный логарифм равен 1.</span>
            </div>
            
            <p>По формуле перехода к новому основанию преобразуем скобку:</p>
            <BlockMath math={`\\log_{3-x}(15 - 7x) = 1 \\implies 15 - 7x = 3 - x \\implies 6x = 12 \\implies x = 2`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Но корень</span>
              <InlineMath math={`x = 2 \\notin`} />
              <span>ОГР. Единственным решением остаётся</span>
              <InlineMath math={`x = 0`} />.
            </div>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Корень</span>
              <InlineMath math={`x = 0`} />
              <span>удовлетворяет условию отрезка:</span>
              <InlineMath math={`-1 \\le 0 \\le 3`} />
              <span>— подходит.</span>
            </div>
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 0`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`0`} />
            </div>
          </div>
        )
      },
      {
        id: 27,
        title: 'Задача 27',
        mathA: '10^{\\lg(\\lg \\sqrt{x})} - \\lg x + \\lg x^3 - 3 = 0',
        mathB: '\\left[ 1; \\, 2 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Составим область допустимых значений (ОГР):</p>
            <BlockMath math={`\\begin{cases} x > 0 \\\\ \\lg \\sqrt{x} > 0 \\end{cases} \\implies \\begin{cases} x > 0 \\\\ \\sqrt{x} > 1 \\end{cases} \\implies x > 1`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Используем основное логарифмическое тождество</span>
              <InlineMath math={`10^{\\lg a} = a`} />:
            </div>
            <BlockMath math={`10^{\\lg(\\lg \\sqrt{x})} = \\lg \\sqrt{x} = \\frac{1}{2} \\lg x`} />
            
            <p>Перепишем исходное уравнение с учетом вынесения степеней аргументов логарифма:</p>
            <BlockMath math={`\\frac{1}{2}\\lg x - \\lg x + 3\\lg x - 3 = 0 \\implies \\frac{5}{2}\\lg x = 3`} />
            <BlockMath math={`\\lg x = \\frac{6}{5} \\implies x = 10^{6/5}`} />
            <div className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
              <span>Так как</span>
              <InlineMath math={`10^{6/5} > 1`} />,
              <span>корень полностью удовлетворяет условиям ОГР.</span>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Сравним полученный корень с границами отрезка при помощи числовых неравенств:</p>
            <BlockMath math={`10^{6/5} > 10^1 = 10 > 2 \\implies x = 10^{6/5} \\notin [1; \\, 2]`} />
            <p className="text-sm font-semibold text-red-500">Следовательно, на заданном отрезке корней нет.</p>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 10^{6/5}`} />
              <span className="ml-2">б) корней нет</span>
            </div>
          </div>
        )
      },
      {
        id: 28,
        title: 'Задача 28',
        mathA: '\\frac{\\log_2 5}{\\log_2 10} + \\lg(x + 10) = 1 + \\lg(21x - 20) - \\lg(2x - 1)',
        mathB: '\\left[ 0; \\, 1 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>По формуле перехода к новому основанию:</span>
              <InlineMath math={`\\frac{\\log_2 5}{\\log_2 10} = \\lg 5`} />.
            </div>
            <p>Составим область допустимых значений (ОГР):</p>
            <BlockMath math={`\\begin{cases} x + 10 > 0 \\\\ 21x - 20 > 0 \\\\ 2x - 1 > 0 \\end{cases} \\implies x > \\frac{20}{21}`} />
            
            <p>Сгруппируем и соберём логарифмы по их свойствам:</p>
            <BlockMath math={`\\lg 5 + \\lg(x + 10) = \\lg 10 + \\lg(21x - 20) - \\lg(2x - 1)`} />
            <BlockMath math={`\\lg(5(x + 10)) = \\lg\\left( \\frac{10(21x - 20)}{2x - 1} \\right)`} />
            
            <p>По ОГР переходим к равенству подлогарифмических аргументов:</p>
            <BlockMath math={`5(x + 10)(2x - 1) = 10(21x - 20) \\implies 10x^2 + 95x - 50 = 210x - 200`} />
            <BlockMath math={`10x^2 - 115x + 150 = 0 \\implies 2x^2 - 23x + 30 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 529 - 240 = 289 = 17^2`} />.</p>
            <p>Корни уравнения: <InlineMath math={`x_1 = 10, \\quad x_2 = \\frac{3}{2} = 1.5`} />.</p>
            <div className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
              <span>Оба корня больше</span><InlineMath math={`\\frac{20}{21}`} /><span>, ОГР выполнено полностью.</span>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <div className="pl-4 space-y-1 text-sm">
              <p>• Корень <InlineMath math={`x_1 = 10 > 1`} /> — не подходит под границы отрезка.</p>
              <p>• Корень <InlineMath math={`x_2 = 1.5 > 1`} /> — не подходит под границы отрезка.</p>
            </div>
            <p className="text-sm font-semibold text-red-500">Следовательно, на заданном отрезке корней нет.</p>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 10; \\quad x = \\frac{3}{2}`} />
              <span className="ml-2">б) корней нет</span>
            </div>
          </div>
        )
      },
      {
        id: 29,
        title: 'Задача 29',
        mathA: '\\log_{2x+3}(x - 2)^2 = \\log_{\\frac{x}{6} + \\frac{1}{2}}(x - 2)^2',
        mathB: '\\left[ -2; \\, -\\lg 11 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Составим область допустимых значений (ОГР):</p>
            <BlockMath math={`\\begin{cases} 2x + 3 > 0, \\quad 2x + 3 \\neq 1 \\\\ \\frac{x}{6} + \\frac{1}{2} > 0, \\quad \\frac{x}{6} + \\frac{1}{2} \\neq 1 \\\\ (x - 2)^2 > 0 \\end{cases} \\implies \\begin{cases} x > -1.5, \\quad x \\neq -1 \\\\ x > -3, \\quad x \\neq 3 \\\\ x \\neq 2 \\end{cases}`} />
            <p>Равенство возможно, когда аргумент равен 1, либо когда основания логарифмов равны между собой.</p>
            
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2">
              <p>Случай 1 (Аргумент равен 1):</p>
              <BlockMath math={`(x - 2)^2 = 1 \\implies x = 3 \\quad \\text{или} \\quad x = 1`} />
              <div className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
                <span>Точка</span><InlineMath math={`x = 3`} /><span>исключена по ОГР. Точка</span><InlineMath math={`x = 1`} /><span>подходит.</span>
              </div>
              
              <p>Случай 2 (Основания равны):</p>
              <BlockMath math={`2x + 3 = \\frac{x}{6} + \\frac{1}{2} \\implies 12x + 18 = x + 3 \\implies 11x = -15 \\implies x = -\\frac{15}{11}`} />
            </div>
            <div className="flex flex-wrap items-center gap-1 text-xs text-slate-400 mt-2">
              <span>Оба значения</span><InlineMath math={`x = 1`} /><span>и</span><InlineMath math={`x = -\\frac{15}{11}`} /><span>входят в ОГР.</span>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <div className="pl-4 space-y-1 text-sm">
              <p>• Корень <InlineMath math={`x = 1`} /> положителен, а отрезок полностью отрицательный — не подходит.</p>
              <div className="flex flex-wrap items-center gap-1">
                <span>• Корень</span><InlineMath math={`x = -\\frac{15}{11}`} /><span>проверим:</span>
                <InlineMath math={`\\lg 11 \\le \\frac{15}{11} \\le 2 \\implies 11^{11} < 10^{15}`} />
                <span>(оценка верна) — подходит.</span>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 1; \\quad x = -\\frac{15}{11}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{15}{11}`} />
            </div>
          </div>
        )
      },
      {
        id: 30,
        title: 'Задача 30',
        mathA: '\\log_{\\frac{x^2-18x+91}{90}}\\left(5x - \\frac{3}{10}\\right) = 0',
        mathB: '\\left[ \\frac{e}{10}; \\, 1 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Логарифм равен нулю, когда его аргумент равен 1, при условии допустимости основания:</p>
            <BlockMath math={`5x - \\frac{3}{10} = 1 \\implies 5x = \\frac{13}{10} \\implies x = \\frac{13}{50} = 0.26`} />
            <p>Выполним проверку ОГР для найденной точки:</p>
            <BlockMath math={`x^2 - 18x + 91 = 0.0676 - 4.68 + 91 = 86.3876 > 0 \\quad \\text{и} \\quad \\frac{86.3876}{90} \\neq 1`} />
            <p>Основание положительно и не равно 1, аргумент больше нуля. Корень удовлетворяет ОГР.</p>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Сравним корень</span>
              <InlineMath math={`x = \\frac{13}{50}`} />
              <span>с левой границей промежутка</span>
              <InlineMath math={`\\frac{e}{10}`} />:
            </div>
            <BlockMath math={`\\frac{13}{50} < \\frac{e}{10} \\iff \\frac{13}{5} < e \\iff 2.6 < 2.718`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Неравенство выполняется, значит корень</span>
              <InlineMath math={`x = 0.26`} />
              <span>лежит левее отрезка — не подходит.</span>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = \\frac{13}{50}`} />
              <span className="ml-2">б) корней нет</span>
            </div>
          </div>
        )
      },
      {
        id: 31,
        title: 'Задача 31',
        mathA: '\\frac{x^2 - 4}{\\ln(x - 1)} = (x^2 - 6) \\cdot \\log_{x-1} e + 1',
        mathB: '\\left[ e\\pi - 1; \\, \\pi^2 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Учтём условия ОГР:</span>
              <InlineMath math={`x - 1 > 0, \\quad x - 1 \\neq 1 \\implies x > 1, \\quad x \\neq 2`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>По свойству перехода к новому основанию:</span>
              <InlineMath math={`\\log_{x-1} e = \\frac{1}{\\ln(x - 1)}`} />.
            </div>
            <BlockMath math={`\\frac{x^2 - 4}{\\ln(x - 1)} = \\frac{x^2 - 6}{\\ln(x - 1)} + 1`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Умножим на</span>
              <InlineMath math={`\\ln(x - 1) \\neq 0`} />
              <span>(выполняется, так как</span>
              <InlineMath math={`x \\neq 2`} />):
            </div>
            <BlockMath math={`x^2 - 4 = x^2 - 6 + \\ln(x - 1) \\implies \\ln(x - 1) = 2 \\implies x - 1 = e^2 \\implies x = e^2 + 1`} />
            <div className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
              <span>Корень удовлетворяет ОГР, так как он больше 1 и не равен 2.</span>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Воспользуемся оценками <InlineMath math="2{,}7 < e < 2{,}8" /> и <InlineMath math="3 < \pi < \frac{22}{7}" />.</p>
            <BlockMath math="e\pi-1 < 2{,}8\cdot\frac{22}{7}-1 = 7{,}8 < 2{,}7^2+1 < e^2+1" />
            <BlockMath math="e^2+1 < 2{,}8^2+1 = 8{,}84 < 9 < \pi^2" />
            <p>Значит, <InlineMath math="e^2+1" /> принадлежит отрезку.</p>

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = e^2 + 1`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`e^2 + 1`} />
            </div>
          </div>
        )
      },
      {
        id: 32,
        title: 'Задача 32',
        mathA: '\\log_{\\sqrt{x}} 2 + 8 \\log_{16} x^2 + 9 = 0',
        mathB: '\\left[ e^{-2}; \\, e^{-1} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Составим условия ОГР:</span>
              <InlineMath math={`x > 0, \\quad x \\neq 1`} />.
            </div>
            <p>Приведём все слагаемые логарифмов к основанию 2:</p>
            <BlockMath math={`\\log_{\\sqrt{x}} 2 = \\frac{\\log_2 2}{\\log_2 \\sqrt{x}} = \\frac{1}{\\frac{1}{2}\\log_2 x} = \\frac{2}{\\log_2 x}`} />
            <BlockMath math={`8 \\log_{16} x^2 = 8 \\cdot \\frac{\\log_2 x^2}{\\log_2 16} = 8 \\cdot \\frac{2\\log_2 x}{4} = 4 \\log_2 x`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Сделаем замену переменной</span>
              <InlineMath math={`t = \\log_2 x`} />
              <span>(где</span>
              <InlineMath math={`t \\neq 0`} />):
            </div>
            <BlockMath math={`\\frac{2}{t} + 4t + 9 = 0 \\implies 4t^2 + 9t + 2 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 81 - 32 = 49`} />.</p>
            <p>Корни квадратного уравнения: <InlineMath math={`t_1 = -\\frac{1}{4}, \\quad t_2 = -2`} />.</p>
            <p>Выполним обратную замену:</p>
            <BlockMath math={`\\log_2 x = -\\frac{1}{4} \\implies x = 2^{-1/4} \\quad \\text{или} \\quad \\log_2 x = -2 \\implies x = \\frac{1}{4}`} />
            <div className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
              <span>Оба корня положительны и не равны 1 — условия ОГР выполнены полностью.</span>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Проверим корни на принадлежность отрезку с помощью числовых неравенств:</p>
            <div className="pl-4 space-y-1 text-sm">
              <p>1) Для первого корня: <InlineMath math={`2^{-1/4} > e^{-1} \\iff e > 2^{1/4} \\iff e^4 > 2`} /> (верно, так как 54.6 &gt; 2). Точка лежит правее отрезка — не подходит.</p>
              <p>2) Для второго корня: левая граница <InlineMath math={`e^{-2} < \\frac{1}{4} \\iff e^2 > 4`} /> (верно), правая граница <InlineMath math={`\\frac{1}{4} < e^{-1} \\iff e < 4`} /> (верно). Точка подходит.</p>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 2^{-1/4}; \\quad x = \\frac{1}{4}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{1}{4}`} />
            </div>
          </div>
        )
      },
      {
        id: 33,
        title: 'Задача 33',
        mathA: '3 + 2 \\log_{x-1} 3 = 2 \\log_3(x - 1)',
        mathB: '\\left[ \\frac{\\sqrt{3}}{4}; \\, \\frac{4}{\\sqrt{3}} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`x - 1 > 0, \\, x - 1 \\neq 1 \\iff x > 1, \\, x \\neq 2`} />
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\log_3(x - 1)`} />
              <span>(</span>
              <InlineMath math={`t \\neq 0`} />
              <span>по ОГР), тогда</span>
              <InlineMath math={`\\log_{x-1} 3 = \\frac{1}{t}`} />:
            </div>
            <BlockMath math={`3 + \\frac{2}{t} = 2t`} />
            <p>Домножим на t:</p>
            <BlockMath math={`2t^2 - 3t - 2 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 9 + 16 = 25`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{3 \\pm 5}{4} = 2; \\, -\\frac{1}{2}`} />
            <p>Обратная замена:</p>
            <BlockMath math={`\\log_3(x - 1) = 2 \\implies x - 1 = 9 \\implies x = 10`} />
            <BlockMath math={`\\log_3(x - 1) = -\\frac{1}{2} \\implies x - 1 = 3^{-1/2} = \\frac{1}{\\sqrt{3}} \\implies x = 1 + \\frac{\\sqrt{3}}{3} = \\frac{3 + \\sqrt{3}}{3}`} />
            <p>Оба корни удовлетворяют ОГР.</p>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку при помощи неравенств.</p>
            <p>Корень <InlineMath math={`x_1 = 10`} /> значительно больше правой границы <InlineMath math={`\\frac{4}{\\sqrt{3}} \\approx 2,31`} /> — не подходит.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Проверим</span>
              <InlineMath math={`x_2 = \\frac{3 + \\sqrt{3}}{3}`} />:
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>левая граница:</span>
              <InlineMath math={`\\frac{3 + \\sqrt{3}}{3} > \\frac{\\sqrt{3}}{4}`} />
              <span>— очевидно, так как</span>
              <InlineMath math={`\\frac{3 + \\sqrt{3}}{3} > 1 > \\frac{\\sqrt{3}}{4} \\approx 0,43`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>правая граница:</span>
              <InlineMath math={`\\frac{3 + \\sqrt{3}}{3} < \\frac{4}{\\sqrt{3}} \\iff \\sqrt{3}(3 + \\sqrt{3}) < 12 \\iff 3\\sqrt{3} + 3 < 12 \\iff \\sqrt{3} < 3`} />
              <span>— верно.</span>
            </div>
            <p>Следовательно, корень принадлежит отрезку.</p>
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 10; \\, x = \\frac{3 + \\sqrt{3}}{3}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{3 + \\sqrt{3}}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 34,
        title: 'Задача 34',
        mathA: '\\log_{0,5}^2 8x + 4 \\log_{16} \\frac{x^2}{32} = 4',
        mathB: '\\left[ \\frac{1}{512}; \\, \\frac{1}{32} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>ОГР: <InlineMath math={`x > 0`} />.</p>
            <p>Приведём слагаемые к основанию 2. Так как <InlineMath math={`\\log_{0,5} 8x = -\\log_2 8x = -(3 + \\log_2 x)`} />, то:</p>
            <BlockMath math={`\\log_{0,5}^2 8x = (3 + \\log_2 x)^2`} />
            <p>Также:</p>
            <BlockMath math={`\\log_{16} \\frac{x^2}{32} = \\frac{\\log_2(x^2/32)}{\\log_2 16} = \\frac{2\\log_2 x - 5}{4} \\implies 4\\log_{16} \\frac{x^2}{32} = 2\\log_2 x - 5`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`u = \\log_2 x`} />:
            </div>
            <BlockMath math={`(3 + u)^2 + 2u - 5 = 4`} />
            <BlockMath math={`u^2 + 6u + 9 + 2u - 5 = 4`} />
            <BlockMath math={`u^2 + 8u = 0 \\implies u(u + 8) = 0`} />
            <p>Корни: <InlineMath math={`u_1 = 0, \\, u_2 = -8`} />.</p>
            <p>Обратная замена:</p>
            <BlockMath math={`\\log_2 x = 0 \\implies x = 1`} />
            <BlockMath math={`\\log_2 x = -8 \\implies x = \\frac{1}{256}`} />
            <p>Оба корня удовлетворяют ОГР.</p>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <BlockMath math="\frac{1}{512} < \frac{1}{256} < \frac{1}{32} < 1" />
            <p>На отрезок попадает только <InlineMath math="x=\frac{1}{256}" />.</p>

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 1; \\, x = \\frac{1}{256}`} />
              <span className="ml-2">б)</span> <InlineMath math="\frac{1}{256}" />
            </div>
          </div>
        )
      },
      {
        id: 35,
        title: 'Задача 35',
        mathA: '\\frac{(x + 3)^2}{5} + \\frac{20}{(x + 3)^2} = 8 \\left( \\frac{x + 3}{5} - \\frac{2}{x + 3} \\right) + 1',
        mathB: '\\left[ -6; \\, -4 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>ОГР: <InlineMath math={`x \\neq -3`} />.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Обозначим</span>
              <InlineMath math={`y = x + 3`} />
              <span>и введём замену:</span>
              <InlineMath math={`t = \\frac{y}{5} - \\frac{2}{y}`} />
            </div>
            <p>Тогда:</p>
            <BlockMath math={`t^2 = \\frac{y^2}{25} - \\frac{4}{5} + \\frac{4}{y^2} \\implies 5t^2 = \\frac{y^2}{5} - 4 + \\frac{20}{y^2} \\implies \\frac{y^2}{5} + \\frac{20}{y^2} = 5t^2 + 4`} />
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`5t^2 + 4 = 8t + 1 \\implies 5t^2 - 8t + 3 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 64 - 60 = 4`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{8 \\pm 2}{10} = 1; \\, \\frac{3}{5}`} />
            <p>Обратная замена 1: <InlineMath math={`t = 1 \\implies \\frac{y}{5} - \\frac{2}{y} = 1`} />. Домножим на 5y:</p>
            <BlockMath math={`y^2 - 10 = 5y \\implies y^2 - 5y - 10 = 0`} />
            <BlockMath math={`D = 25 + 40 = 65 \\implies y_{3,4} = \\frac{5 \\pm \\sqrt{65}}{2}`} />
            <p>Обратная замена 2: <InlineMath math={`t = \\frac{3}{5} \\implies \\frac{y}{5} - \\frac{2}{y} = \\frac{3}{5}`} />. Домножим на 5y:</p>
            <BlockMath math={`y^2 - 10 = 3y \\implies y^2 - 3y - 10 = 0`} />
            <BlockMath math={`D = 9 + 40 = 49 \\implies y_{1,2} = \\frac{3 \\pm 7}{2} = 5; \\, -2`} />
            <p>Все четыре значения <InlineMath math={`y \\neq 0`} />, ОГР выполнено. Возвращаемся к <InlineMath math={`x = y - 3`} />:</p>
            <BlockMath math={`y = 5 \\implies x = 2`} />
            <BlockMath math={`y = -2 \\implies x = -5`} />
            <BlockMath math={`y = \\frac{5 + \\sqrt{65}}{2} \\implies x = \\frac{\\sqrt{65} - 1}{2}`} />
            <BlockMath math={`y = \\frac{5 - \\sqrt{65}}{2} \\implies x = \\frac{-1 - \\sqrt{65}}{2}`} />
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, при помощи неравенств.</p>
            <p><InlineMath math={`x = 2`} /> — положителен, не подходит.</p>
            <p><InlineMath math={`x = -5`} />: <InlineMath math={`-6 \\le -5 \\le -4`} /> — подходит.</p>
            <p><InlineMath math={`x = \\frac{\\sqrt{65} - 1}{2}`} />: так как <InlineMath math={`\\sqrt{65} > 8`} /> (ведь <InlineMath math={`8^2 = 64 < 65`} />), то <InlineMath math={`x > \\frac{7}{2} > 0`} /> — не подходит.</p>
            <p><InlineMath math={`x = \\frac{-1 - \\sqrt{65}}{2}`} />: оценим <InlineMath math={`\\sqrt{65}`} />. Так как <InlineMath math={`8^2 = 64 < 65 < 64,0164 = 8,01^2`} />, то <InlineMath math={`8 < \\sqrt{65} < 8,01`} />.</p>
            <p>Тогда <InlineMath math={`-9,01 < -1 - \\sqrt{65} < -9`} />, откуда <InlineMath math={`-4,505 < x < -4,5`} />.</p>
            <p>Проверим границы: <InlineMath math={`-6 < -4,505`} /> и <InlineMath math={`-4,5 < -4`} /> — значит корень подходит.</p>
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 2; \\, x = -5; \\, x = \\frac{\\sqrt{65}-1}{2}; \\, x = \\frac{-1-\\sqrt{65}}{2}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-5; \\, \\frac{-1-\\sqrt{65}}{2}`} />
            </div>
          </div>
        )
      },
       {
        id: 36,
        title: 'Задача 36',
        mathA: '\\log_{\\sqrt{2}}\\left(\\left(\\log_{\\sin x + 1}\\left(2 - \\cos^2 x + 2\\sin x\\right)\\right)^{\\cos 4x}\\right) = 2',
        mathB: '\\left[ -2\\pi; \\, 0 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Составим область допустимых значений (ОГР):</p>
            <BlockMath math={`\\begin{cases} \\sin x + 1 > 0 \\\\ \\sin x + 1 \\neq 1 \\\\ 2 - \\cos^2 x + 2\\sin x > 0 \\end{cases} \\iff \\begin{cases} \\sin x \\neq -1 \\\\ \\sin x \\neq 0 \\end{cases}`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Преобразуем подлогарифмическое выражение внутреннего логарифма, используя</span>
              <InlineMath math={`\\cos^2 x = 1 - \\sin^2 x`} />:
            </div>
            <BlockMath math={`2 - \\cos^2 x + 2\\sin x = 2 - (1 - \\sin^2 x) + 2\\sin x = \\sin^2 x + 2\\sin x + 1 = (\\sin x + 1)^2`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как основание</span>
              <InlineMath math={`\\sin x + 1 > 0`} />
              <span>и</span>
              <InlineMath math={`\\sin x + 1 \\neq 1`} />
              <span>(по ОГР), справедливо тождество</span>
              <InlineMath math={`\\log_a a^2 = 2`} />
              <span>при любом допустимом основании:</span>
            </div>
            <BlockMath math={`\\log_{\\sin x + 1}((\\sin x + 1)^2) = 2`} />
            
            <p>Значит, внутренний логарифм тождественно равен 2 на ОГР, и уравнение принимает вид:</p>
            <BlockMath math={`\\log_{\\sqrt{2}}(2^{\\cos 4x}) = 2`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\log_{\\sqrt{2}} 2 = \\frac{\\log_2 2}{\\log_2 \\sqrt{2}} = \\frac{1}{1/2} = 2`} />,
              <span>получаем:</span>
            </div>
            <BlockMath math={`2\\cos 4x = 2 \\implies \\cos 4x = 1 \\implies 4x = 2\\pi k \\implies x = \\frac{\\pi k}{2}, \\quad k \\in \\mathbb{Z}`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Проверим ОГР для серии</span>
              <InlineMath math={`x = \\frac{\\pi k}{2}`} />
              <span>(рассмотрим</span>
              <InlineMath math={`k = 0, 1, 2, 3`} />
              <span>на одном периоде):</span>
            </div>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-1 text-sm text-slate-500">
              <p>• k = 0: x = 0, sin x = 0 — не входит в ОГР.</p>
              <p>• k = 1: x = \pi/2, sin x = 1 — входит в ОГР.</p>
              <p>• k = 2: x = \pi, sin x = 0 — не входит в ОГР.</p>
              <p>• k = 3: x = 3\pi/2, sin x = -1 — не входит в ОГР.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Таким образом, подходят только точки с</span>
              <InlineMath math={`k \\equiv 1 \\pmod 4`} />,
              <span>то есть:</span>
              <InlineMath math={`x = \\frac{\\pi}{2} + 2\\pi n, \\quad n \\in \\mathbb{Z}`} />.
            </div>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, при помощи единичной окружности.</p>
            <p>Отрезок соответствует полному обороту окружности. Из серии в этот отрезок попадает только точка при n = -1:</p>
            <BlockMath math={`x = \\frac{\\pi}{2} - 2\\pi = -\\frac{3\\pi}{2}`} />
            
            <TrigCircle interval={[-4,0]} roots={[-3]} denominator={2} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + 2\\pi n, \\quad n \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{3\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 37,
        title: 'Задача 37',
        mathA: '\\cos(x^2 + x) + \\cos\\left(x + \\frac{2\\pi}{3}\\right) + \\cos\\left(x + \\frac{4\\pi}{3}\\right) = 0',
        mathB: '\\left[ 0; \\, 2 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Преобразуем сумму двух последних слагаемых по формуле суммы косинусов:</span>
            </div>
            <BlockMath math={`\\cos\\left(x + \\frac{2\\pi}{3}\\right) + \\cos\\left(x + \\frac{4\\pi}{3}\\right) = 2\\cos(x + \\pi)\\cos\\left(-\\frac{\\pi}{3}\\right)`} />
            <BlockMath math={`= 2(-\\cos x) \\cdot \\frac{1}{2} = -\\cos x`} />
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`\\cos(x^2 + x) - \\cos x = 0 \\implies \\cos(x^2 + x) = \\cos x`} />
            <p>Отсюда получаем два независимых случая:</p>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2 text-sm">
              <p>1) <InlineMath math={`x^2 + x = x + 2\\pi k \\implies x^2 = 2\\pi k \\implies x = \\pm\\sqrt{2\\pi k}`} />, где <InlineMath math={`k = 0, 1, 2, \\dots`} /> (при k &lt; 0 решений нет).</p>
              <p>2) <InlineMath math={`x^2 + x = -x + 2\\pi k \\implies x^2 + 2x - 2\\pi k = 0`} />. Дискриминант <InlineMath math={`D = 4 + 8\\pi k \\ge 0 \\iff k \\ge 0`} />:</p>
              <BlockMath math={`x = -1 \\pm \\sqrt{1 + 2\\pi k}, \\quad k = 0, 1, 2, \\dots`} />
            </div>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, при помощи неравенств. Переберём значения k:</p>
            <div className="pl-4 space-y-1 text-sm text-slate-500">
              <p>• Случай 1, k = 0: x = 0 — входит в отрезок.</p>
              <p>• Случай 1, k = 1: <InlineMath math={`x = \\sqrt{2\\pi} \\approx 2.507 > 2`} /> — не подходит.</p>
              <p>• Случай 2, k = 0: x = -1 + 1 = 0 (совпадает) или x = -1 - 1 = -2 — не подходит.</p>
              <p>• Случай 2, k = 1: <InlineMath math={`x = -1 + \\sqrt{1 + 2\\pi} \\approx -1 + 2.699 = 1.699 \\in [0; 2]`} /> — подходит.</p>
              <p>• Случай 2, k = 2: <InlineMath math={`x = -1 + \\sqrt{1 + 4\\pi} \\approx 2.683 > 2`} /> — не подходит.</p>
            </div>
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\sqrt{2\\pi k}, \\, -1 \\pm \\sqrt{1 + 2\\pi k}, \\, k \\in \\mathbb{Z}_{\\ge 0}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`0; \\, -1 + \\sqrt{1 + 2\\pi}`} />
            </div>
          </div>
        )
      },
      {
        id: 38,
        title: 'Задача 38',
        mathA: '5^x \\cdot 2^{\\frac{x+2}{x}} = 40',
        mathB: '',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`x \\neq 0`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`40 = 5 \\cdot 2^3`} />,
              <span>перепишем исходное уравнение:</span>
            </div>
            <BlockMath math={`5^x \\cdot 2^{\\frac{x+2}{x}} = 5 \\cdot 2^3 \\implies 5^{x-1} = 2^{3 - \\frac{x+2}{x}}`} />
            <p>Упростим показатель степени в правой части равенства:</p>
            <BlockMath math={`3 - \\frac{x + 2}{x} = \\frac{3x - x - 2}{x} = \\frac{2x - 2}{x} = \\frac{2(x - 1)}{x}`} />
            <p>Уравнение принимает компактный вид:</p>
            <BlockMath math={`5^{x-1} = 2^{\\frac{2(x-1)}{x}}`} />
            <p>Рассмотрим два независимых случая:</p>
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2 text-sm">
              <p>1) Если <InlineMath math={`x - 1 = 0 \\implies x = 1`} /> — обе части уравнения обращаются в 1, этот корень подходит.</p>
              <div className="flex flex-wrap items-center gap-1">
                <span>2) Если</span>
                <InlineMath math={`x \\neq 1`} />,
                <span>разделим показатели степеней на</span>
                <InlineMath math={`x-1`} />:
              </div>
              <BlockMath math={`5 = 2^{2/x} \\implies \\log_2 5 = \\frac{2}{x} \\implies x = \\frac{2}{\\log_2 5} = 2\\log_5 2 = \\log_5 4`} />
            </div>
            <p className="text-xs text-slate-400 mt-2">Оба корня удовлетворяют ОГР.</p>
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ:</span>
              <InlineMath math={`x = 1; \\quad x = \\log_5 4`} />
            </div>
          </div>
        )
      },
      {
        id: 39,
        title: 'Задача 39',
        mathA: '\\log_3(9^{\\sin x} + 9) = \\sin x - \\log_{\\frac{1}{3}}(28 - 2 \\cdot 3^{\\sin x})',
        mathB: '',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Используя свойство</span>
              <InlineMath math={`\\log_{1/3} a = -\\log_3 a`} />,
              <span>перепишем уравнение:</span>
            </div>
            <BlockMath math={`\\log_3(9^{\\sin x} + 9) = \\sin x + \\log_3(28 - 2 \\cdot 3^{\\sin x})`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Введём замену переменной</span>
              <InlineMath math={`t = 3^{\\sin x}`} />.
              <span>Так как</span>
              <InlineMath math={`\\sin x \\in [-1; \\, 1]`} />,
              <span>то</span>
              <InlineMath math={`t \\in \\left[\\frac{1}{3}; \\, 3\\right]`} />.
            </div>
            <p>При этом выразим остальные члены: <InlineMath math={`\\sin x = \\log_3 t`} /> и <InlineMath math={`9^{\\sin x} = t^2`} />.</p>
            <p>Ограничение аргумента <InlineMath math={`28 - 2t > 0`} /> выполняется автоматически на области значений замены.</p>
            <p>Уравнение примет вид:</p>
            <BlockMath math={`\\log_3(t^2 + 9) = \\log_3 t + \\log_3(28 - 2t) = \\log_3(t(28 - 2t))`} />
            <p>Перейдём к равенству подлогарифмических аргументов:</p>
            <BlockMath math={`t^2 + 9 = 28t - 2t^2 \\implies 3t^2 - 28t + 9 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 784 - 108 = 676 = 26^2`} />.</p>
            <BlockMath math={`t_{1,2} = \\frac{28 \\pm 26}{6} \\implies t_1 = 9, \\quad t_2 = \\frac{1}{3}`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Поскольку</span>
              <InlineMath math={`t \\in \\left[\\frac{1}{3}; \\, 3\\right]`} />,
              <span>корень</span>
              <InlineMath math={`t = 9`} />
              <span>не подходит. Остаётся только</span>
              <InlineMath math={`t = \\frac{1}{3}`} />.
            </div>
            <p>Выполним обратную замену:</p>
            <BlockMath math={`3^{\\sin x} = \\frac{1}{3} \\implies \\sin x = -1 \\implies x = -\\frac{\\pi}{2} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ:</span>
              <InlineMath math={`x = -\\frac{\\pi}{2} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            </div>
          </div>
        )
      },
      {
        id: 40,
        title: 'Задача 40',
        mathA: '\\sqrt{13 + \\frac{4}{\\log_x 3}} = 2\\log_3(3\\sqrt{x})',
        mathB: '\\left[ 0; \\, 100\\sin 1 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Составим ОГР: <InlineMath math={`x > 0, \\quad x \\neq 1`} />.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Преобразуем компоненты уравнения. Так как</span>
              <InlineMath math={`\\log_x 3 = \\frac{1}{\\log_3 x}`} />,
              <span>то</span>
              <InlineMath math={`\\frac{4}{\\log_x 3} = 4\\log_3 x`} />.
            </div>
            <p>Правую часть распишем по свойствам произведения и степени логарифма:</p>
            <BlockMath math={`2\\log_3(3\\sqrt{x}) = 2(\\log_3 3 + \\log_3 \\sqrt{x}) = 2\\left(1 + \\frac{1}{2}\\log_3 x\\right) = 2 + \\log_3 x`} />
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`\\sqrt{13 + 4\\log_3 x} = 2 + \\log_3 x`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Сделаем замену переменной</span>
              <InlineMath math={`t = \\log_3 x`} />:
            </div>
            <BlockMath math={`\\sqrt{13 + 4t} = 2 + t \\iff \\begin{cases} 13 + 4t = 4 + 4t + t^2 \\\\ 2 + t \\ge 0 \\end{cases} \\implies \\begin{cases} t^2 = 9 \\\\ t \\ge -2 \\end{cases}`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Система имеет корни</span>
              <InlineMath math={`t = \\pm 3`} />,
              <span>но по ограничению подходит только</span>
              <InlineMath math={`t = 3`} />.
            </div>
            <p>Выполним обратную замену:</p>
            <BlockMath math={`\\log_3 x = 3 \\iff x = 27`} />
            <p>Корень полностью удовлетворяет условиям ОГР.</p>
            
            {/* 👍 ПРИМЕНЕНО ВАШЕ ПРАВИЛО: Лаконичная фраза без лишнего LaTeX-текста */}
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, с помощью неравенств.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Сравним полученный корень</span>
              <InlineMath math={`x = 27`} />
              <span>с правой границей: так как</span>
              <InlineMath math={`1 \\, \\text{радиан} > \\frac{\\pi}{6}`} />,
              <span>а функция синуса возрастает, имеем:</span>
            </div>
            <BlockMath math={`100\\sin 1 > 100 \\cdot \\sin\\frac{\\pi}{6} = 100 \\cdot \\frac{1}{2} = 50 > 27`} />
            <p>Следовательно, найденная точка принадлежит заданному отрезку.</p>
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 27`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`27`} />
            </div>
          </div>
        )
      },
      {
        id: 41,
        title: 'Задача 41',
        mathA: '\\left| \\log_2\\left( \\log_{\\frac{1}{2}}\\left( \\log_{625}(x^2 + x - 1) \\right) \\right) \\right| = 1',
        mathB: '\\left[ -5; \\, 4 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Обозначим внутренние члены для ОГР:</span>
              <InlineMath math={`u = \\log_{625}(x^2 + x - 1)`} />
              <span>и</span>
              <InlineMath math={`v = \\log_{1/2} u`} />.
            </div>
            <p>Составим систему ограничений по шагам логарифмирования:</p>
            <BlockMath math={`\\begin{cases} x^2 + x - 1 > 0 \\\\ u > 0 \\iff x^2 + x - 1 > 1 \\\\ v > 0 \\iff u < 1 \\iff x^2 + x - 1 < 625 \\end{cases} \\implies 1 < x^2 + x - 1 < 625`} />
            <p>Раскроем внешний модуль уравнения: <InlineMath math={`|\\log_2 v| = 1 \\implies v = 2`} /> или <InlineMath math={`v = \\frac{1}{2}`} />.</p>
            
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2">
              <p>Случай 1 (при v = 2):</p>
              <BlockMath math={`\\log_{1/2} u = 2 \\implies u = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}`} />
              <BlockMath math={`\\log_{625}(x^2 + x - 1) = \\frac{1}{4} \\implies x^2 + x - 1 = 625^{1/4} = 5 \\implies x^2 + x - 6 = 0`} />
              <p>Корни этого случая: <InlineMath math={`x = 2`} /> и <InlineMath math={`x = -3`} />. Оба значения подходят под ОГР.</p>
              
              <p>Случай 2 (при v = 1/2):</p>
              <BlockMath math={`\\log_{1/2} u = \\frac{1}{2} \\implies u = \\left(\\frac{1}{2}\\right)^{1/2} = \\frac{1}{\\sqrt{2}}`} />
              <BlockMath math={`\\log_{625}(x^2 + x - 1) = \\frac{1}{\\sqrt{2}} \\implies x^2 + x - 1 = 625^{1/\\sqrt{2}} = 5^{2\\sqrt{2}} \\approx 94.9`} />
              <p>Этот случай даёт громоздкие иррациональные корни, которые также входят в интервал ОГР.</p>
            </div>
            
            {/* 👍 ПРИМЕНЕНО ВАШЕ ПРАВИЛО: Лаконичная фраза без лишнего LaTeX-текста */}
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, с помощью неравенств.</p>
            <p>Точки из первого случая <InlineMath math={`x = 2`} /> и <InlineMath math={`x = -3`} /> очевидно лежат внутри отрезка. Громоздкие корни из второго случая приблизительно равны 9.3 и -10.3 — они полностью выходят за рамки отрезка.</p>
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`2; \\, -3; \\, \\frac{-1 \\pm \\sqrt{5 + 4 \\cdot 5^{2\\sqrt{2}}}}{2}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-3; \\, 2`} />
            </div>
          </div>
        )
      },
          {
        id: 42,
        title: 'Задача 42',
        mathA: '\\log_3\\left(9^{\\sin x} + 9\\right) = \\sin x - \\log_{\\frac{1}{3}}\\left(28 - 2 \\cdot 3^{\\sin x}\\right)',
        mathB: '',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\log_{1/3} a = -\\log_3 a`} />,
              <span>уравнение примет вид:</span>
            </div>
            <BlockMath math={`\\log_3\\left(9^{\\sin x} + 9\\right) = \\sin x + \\log_3\\left(28 - 2 \\cdot 3^{\\sin x}\\right)`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = 3^{\\sin x}`} />.
              <span>Так как</span>
              <InlineMath math={`\\sin x \\in [-1; \\, 1]`} />,
              <span>имеем</span>
              <InlineMath math={`t \\in \\left[\\frac{1}{3}; \\, 3\\right]`} />;
              <span>также</span>
              <InlineMath math={`\\sin x = \\log_3 t`} />
              <span>и</span>
              <InlineMath math={`9^{\\sin x} = t^2`} />.
            </div>
            <p>ОГР <InlineMath math={`(28 - 2t > 0)`} /> выполнено автоматически при любом <InlineMath math={`t \\in \\left[\\frac{1}{3}; \\, 3\\right]`} />, так как <InlineMath math={`2t \\le 6 < 28`} />.</p>
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`\\log_3\\left(t^2 + 9\\right) = \\log_3 t + \\log_3\\left(28 - 2t\\right) = \\log_3\\left(t(28 - 2t)\\right)`} />
            <p>Переходим к равенству аргументов:</p>
            <BlockMath math={`t^2 + 9 = 28t - 2t^2 \\implies 3t^2 - 28t + 9 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 784 - 108 = 676 = 26^2`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{28 \\pm 26}{6} = 9; \\, \\frac{1}{3}`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`t \\in \\left[\\frac{1}{3}; \\, 3\\right]`} />,
              <span>корень</span>
              <InlineMath math={`t = 9`} />
              <span>не подходит. Остаётся</span>
              <InlineMath math={`t = \\frac{1}{3}`} />.
            </div>
            <p>Обратная замена:</p>
            <BlockMath math={`3^{\\sin x} = \\frac{1}{3} \\implies \\sin x = -1 \\implies x = -\\frac{\\pi}{2} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ:</span>
              <InlineMath math={`x = -\\frac{\\pi}{2} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            </div>
          </div>
        )
      },
      {
        id: 43,
        title: 'Задача 43',
        mathA: '\\sqrt{13 + \\frac{4}{\\log_x 3}} = 2\\log_3\\left(3\\sqrt{x}\\right)',
        mathB: '\\left[ 0; \\, 100\\sin 1 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>ОГР: <InlineMath math={`x > 0, \\, x \\neq 1`} />.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Преобразуем уравнение с учётом ОГР. Так как</span>
              <InlineMath math={`\\log_x 3 = \\frac{1}{\\log_3 x}`} />,
              <span>то</span>
              <InlineMath math={`\\frac{4}{\\log_x 3} = 4\\log_3 x`} />.
              <span>Также:</span>
            </div>
            <BlockMath math={`2\\log_3\\left(3\\sqrt{x}\\right) = 2\\left(\\log_3 3 + \\log_3 \\sqrt{x}\\right) = 2 + \\log_3 x`} />
            <p>Уравнение примет вид:</p>
            <BlockMath math={`\\sqrt{13 + 4\\log_3 x} = 2 + \\log_3 x`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Сделаем замену</span>
              <InlineMath math={`t = \\log_3 x`} />:
            </div>
            <BlockMath math={`\\sqrt{13 + 4t} = 2 + t`} />
            <BlockMath math={`\\begin{cases} 13 + 4t = 4 + 4t + t^2 \\\\ 2 + t \\ge 0 \\end{cases} \\implies \\begin{cases} t = \\pm 3 \\\\ t \\ge -2 \\end{cases} \\implies t = 3`} />
            <p>Обратная замена:</p>
            <BlockMath math={`\\log_3 x = 3 \\iff x = 27`} />
            <p>Корень удовлетворяет ОГР.</p>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, с помощью неравенств.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Сравним</span>
              <InlineMath math={`x = 27`} />
              <span>с правой границей: так как</span>
              <InlineMath math={`1 \\, \\text{радиан} > \\frac{\\pi}{6}`} />,
              <span>а синус возрастает на</span>
              <InlineMath math={`\\left(0; \\, \\frac{\\pi}{2}\\right)`} />,
              <span>то:</span>
            </div>
            <BlockMath math={`100\\sin 1 > 100 \\cdot \\sin\\frac{\\pi}{6} = 100 \\cdot \\frac{1}{2} = 50`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Значит,</span>
              <InlineMath math={`100\\sin 1 > 50 > 27`} />,
              <span>и корень принадлежит заданному отрезку.</span>
            </div>
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 27`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`27`} />
            </div>
          </div>
        )
      },
      {
        id: 44,
        title: 'Задача 44',
        mathA: '\\left| \\log_2\\left( \\log_{\\frac{1}{2}}\\left( \\log_{625}\\left(x^2 + x - 1\\right) \\right) \\right) \\right| = 1',
        mathB: '\\left[ -5; \\, 4 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР: обозначим</span>
              <InlineMath math={`u = \\log_{625}\\left(x^2 + x - 1\\right), \\, v = \\log_{1/2} u`} />.
              <span>Тогда требуется:</span>
            </div>
            <BlockMath math={`\\begin{cases} x^2 + x - 1 > 0 \\\\ u > 0 \\\\ v > 0 \\end{cases}`} />
            <p>Условие u &gt; 0 означает <InlineMath math={`x^2 + x - 1 > 1`} />. Условие v &gt; 0 означает <InlineMath math={`u < 1`} />, то есть <InlineMath math={`x^2 + x - 1 < 625`} />.</p>
            <p>Итого ОГР: <InlineMath math={`1 < x^2 + x - 1 < 625`} />.</p>
            <p>Решаем уравнение: <InlineMath math={`|\\log_2 v| = 1 \\implies v = 2 \\quad \\text{или} \\quad v = \\frac{1}{2}`} />.</p>
            
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2 text-sm">
              <p>Случай 1: v = 2, то есть <InlineMath math={`\\log_{1/2} u = 2 \\implies u = \\frac{1}{4}`} />.</p>
              <BlockMath math={`\\log_{625}\\left(x^2 + x - 1\\right) = \\frac{1}{4} \\implies x^2 + x - 1 = 625^{1/4} = 5 \\implies x^2 + x - 6 = 0 \\implies x = 2 \\quad \\text{или} \\quad x = -3`} />
              
              <p>Случай 2: v = 1/2, то есть <InlineMath math={`\\log_{1/2} u = \\frac{1}{2} \\implies u = \\frac{1}{\\sqrt{2}}`} />.</p>
              <BlockMath math={`\\log_{625}\\left(x^2 + x - 1\\right) = \\frac{1}{\\sqrt{2}} \\implies x^2 + x - 1 = 625^{1/\\sqrt{2}} = 5^{2\\sqrt{2}}`} />
              <BlockMath math={`x^2 + x - \\left(1 + 5^{2\\sqrt{2}}\\right) = 0 \\implies x = \\frac{-1 \\pm \\sqrt{5 + 4 \\cdot 5^{2\\sqrt{2}}}}{2}`} />
            </div>
            <p className="mt-2 text-xs text-slate-400">Все корни удовлетворяют интервалу ОГР.</p>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, с помощью неравенств.</p>
            <p>Из Случая 1: корни <InlineMath math={`x = 2`} /> и <InlineMath math={`x = -3`} /> входят в заданный отрезок. Корни из Случая 2 приблизительно равны 9,3 и -10,3 — они выходят за пределы отрезка.</p>
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 2; \\, x = -3; \\, x = \\frac{-1 \\pm \\sqrt{5 + 4 \\cdot 5^{2\\sqrt{2}}}}{2}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-3; \\, 2`} />
            </div>
          </div>
        )
      },
          {
        id: 45,
        title: 'Задача 45',
        mathA: '\\left| \\log_3\\left(13x^2 - 12\\right) \\right| = \\left| -\\frac{1}{2}\\log_{\\frac{1}{3}} x^4 \\right|',
        mathB: '\\left[ -\\frac{\\sqrt{13}}{13}; \\, 1 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`13x^2 - 12 > 0`} />
              <span>и</span>
              <InlineMath math={`x \\neq 0`} />,
              <span>то есть</span>
              <InlineMath math={`|x| > \\sqrt{\\frac{12}{13}}`} />.
            </div>
            
            <p>Упростим правую часть. Так как <InlineMath math={`\\log_{1/3} x^4 = -\\log_3 x^4 = -4\\log_3 |x|`} />:</p>
            <BlockMath math={`-\\frac{1}{2}\\log_{1/3} x^4 = -\\frac{1}{2} \\cdot (-4\\log_3 |x|) = 2\\log_3 |x| = \\log_3 x^2`} />
            
            <p>Уравнение примет вид:</p>
            <BlockMath math={`\\left| \\log_3\\left(13x^2 - 12\\right) \\right| = \\left| \\log_3 x^2 \\right|`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Обозначим</span>
              <InlineMath math={`X = x^2`} />
              <span>(где</span>
              <InlineMath math={`X > \\frac{12}{13}`} />
              <span>по ОГР):</span>
            </div>
            <BlockMath math={`|\\log_3(13X - 12)| = |\\log_3 X|`} />
            
            <p>Отсюда <InlineMath math={`\\log_3(13X - 12) = \\log_3 X`} /> или <InlineMath math={`\\log_3(13X - 12) = -\\log_3 X`} />.</p>
            
            <div className="pl-4 border-l-2 border-slate-200 dark:border-purple-950/40 space-y-2 text-sm">
              <p>Случай 1: <InlineMath math={`13X - 12 = X \\implies 12X = 12 \\implies X = 1`} />.</p>
              <p>Случай 2: <InlineMath math={`\\log_3(13X - 12) = \\log_3 \\frac{1}{X} \\implies 13X - 12 = \\frac{1}{X} \\implies 13X^2 - 12X - 1 = 0`} />.</p>
              <p>Дискриминант: <InlineMath math={`D = 144 + 52 = 196 = 14^2`} /></p>
              <BlockMath math={`X_{1,2} = \\frac{12 \\pm 14}{26} = 1; \\, -\\frac{1}{13}`} />
            </div>
            
            <p className="mt-2 text-xs text-slate-400">
              Корень <InlineMath math={`X = -\\frac{1}{13} < 0`} /> не подходит (так как <InlineMath math={`X = x^2 > 0`} />); <InlineMath math={`X = 1`} /> уже найден в случае 1.
            </p>
            <p>Итак, <InlineMath math={`X = x^2 = 1 \\implies x = \\pm 1`} />. Проверка ОГР: <InlineMath math={`X = 1 > \\frac{12}{13}`} /> — подходит для обоих корней.</p>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, с помощью неравенств.</p>
            <p><InlineMath math={`x = 1`} />: правая граница отрезка равна 1, значит <InlineMath math={`x = 1`} /> включается в отрезок — подходит.</p>
            
            <div className="flex flex-wrap items-center gap-1">
              <span>корень</span>
              <InlineMath math={`x = -1`} />:
              <span>сравним с левой границей</span>
              <InlineMath math={`-\\frac{\\sqrt{13}}{13} = -\\frac{1}{\\sqrt{13}} \\approx -0,277`} />.
              <span>Так как</span>
              <InlineMath math={`-1 < -\\frac{1}{\\sqrt{13}}`} />
              <span>(ведь</span>
              <InlineMath math={`1 > \\frac{1}{\\sqrt{13}}`} />
              <span>), корень лежит левее отрезка — не подходит.</span>
            </div>
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 1; \\, x = -1`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`1`} />
            </div>
          </div>
        )
      },
      {
        id: 46,
        title: 'Задача 46',
        mathA: '\\log_{\\cos x} \\cos^2 x = \\log_{\\cos x - 0,5}\\left(\\cos^2 x - \\cos x + \\sin x \\cos x\\right)',
        mathB: '\\left[ -\\frac{3\\pi}{2}; \\, \\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>ОГР:</p>
            <BlockMath math={`\\begin{cases} \\cos x > 0 \\\\ \\cos x \\neq 1 \\\\ \\cos x - 0,5 > 0 \\\\ \\cos x - 0,5 \\neq 1 \\\\ \\cos^2 x - \\cos x + \\sin x \\cos x > 0 \\end{cases} \\iff \\cos x > \\frac{1}{2}, \\, \\cos x \\neq 1`} />
            <p>Так как основание косинуса положительно и не равно 1, справедливо тождество:</p>
            <BlockMath math={`\\log_{\\cos x} \\cos^2 x = 2`} />
            <p>Правую часть аргумента разложим на множители:</p>
            <BlockMath math={`\\cos^2 x - \\cos x + \\sin x \\cos x = \\cos x(\\cos x - 1 + \\sin x)`} />
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`\\log_{\\cos x - 0,5}\\left(\\cos x(\\sin x + \\cos x - 1)\\right) = 2`} />
            <BlockMath math={`\\cos x(\\sin x + \\cos x - 1) = (\\cos x - 0,5)^2`} />
            <p>Раскроем обе части (обозначим c = cos x, s = sin x):</p>
            <BlockMath math={`cs + c^2 - c = c^2 - c + 0,25 \\implies cs = 0,25 \\implies \\sin x \\cos x = \\frac{1}{4}`} />
            <BlockMath math={`\\frac{1}{2}\\sin 2x = \\frac{1}{4} \\implies \\sin 2x = \\frac{1}{2}`} />
            <p>Отсюда:</p>
            <BlockMath math={`2x = \\frac{\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad 2x = \\frac{5\\pi}{6} + 2\\pi k`} />
            <BlockMath math={`x = \\frac{\\pi}{12} + \\pi k \\quad \\text{или} \\quad x = \\frac{5\\pi}{12} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
            <p>Проверим ОГР чётностью k:</p>
            <p>• Серия корней первой ветви: при чётном k получаем косинус больше 0,5 — подходит. При нечётном k косинус отрицателен — не подходит.</p>
            <p>• Серия корней второй ветви даёт косинус меньше 0,5 при любой чётности k — вся серия не удовлетворяет ОГР.</p>
            <p>Таким образом, остаётся только: <InlineMath math={`x = \\frac{\\pi}{12} + 2\\pi m, \\, m \\in \\mathbb{Z}`} />.</p>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, с помощью неравенств.</p>
            <p>Длина отрезка равна 4\pi (два полных периода серии), воспользуемся прямым перебором значений m:</p>
            <p>• m = 0: <InlineMath math={`x = \\frac{\\pi}{12} \\approx 0,26`} /> — принадлежит отрезку.</p>
            <p>• m = 1: <InlineMath math={`x = \\frac{\\pi}{12} + 2\\pi = \\frac{25\\pi}{12} \\approx 6,55`} /> — принадлежит отрезку.</p>
            <p>• m = 2 или m = -1 — выходят за рамки границ, не подходят.</p>
            <p>Следовательно, на отрезке лежат точки <InlineMath math={`\\frac{\\pi}{12}; \\, \\frac{25\\pi}{12}.`} /></p>
            
            <TrigCircle interval={[-18,30]} roots={[1,25]} denominator={12} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{12} + 2\\pi m, \\, m \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{\\pi}{12}; \\, \\frac{25\\pi}{12}`} />
            </div>
          </div>
        )
      },
      {
        id: 47,
        title: 'Задача 47',
        mathA: '\\log_x(3x - 2) - 2 = \\sqrt{\\log_x^2(3x - 2) + 4\\log_x\\left(\\frac{x}{3x - 2}\\right)}',
        mathB: '\\left[ 0; \\, 0,75 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>ОГР: <InlineMath math={`x > \\frac{2}{3}, \\, x \\neq 1`} />.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Введём замену <InlineMath math={`t = \\log_x(3x - 2)`} />. Так как подкоренной логарифм раскрывается как:</span>
            </div>
            <BlockMath math={`\\log_x\\left(\\frac{x}{3x-2}\\right) = \\log_x x - \\log_x(3x-2) = 1 - t`} />
            <p>Уравнение примет вид:</p>
            <BlockMath math={`t - 2 = \\sqrt{t^2 + 4(1 - t)} \\implies t - 2 = \\sqrt{t^2 - 4t + 4} = \\sqrt{(t - 2)^2} = |t - 2|`} />
            <p>Равенство выполняется тогда и только тогда, когда аргумент модуля неотрицателен. Переходим к неравенству:</p>
            <BlockMath math={`t - 2 \\ge 0 \\iff \\log_x(3x - 2) \\ge 2`} />
            <p>Рассмотрим два случая в зависимости от основания логарифма x:</p>
            <p>• Случай 1: x &gt; 1 (знак сохраняется): <InlineMath math={`3x - 2 \\ge x^2 \\implies 1 < x \\le 2`} />.</p>
            <p>• Случай 2: 2/3 &lt; x &lt; 1 (знак меняется): <InlineMath math={`3x - 2 \\le x^2 \\implies \\frac{2}{3} < x < 1`} />.</p>
            <p>Объединяя оба случая, получаем множество решений: <InlineMath math={`x \\in \\left(\\frac{2}{3}; \\, 1\\right) \\cup (1; \\, 2]`} />.</p>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, с помощью неравенств.</p>
            <p>Пересечём найденное множество решений с заданным отрезком и с ОГР:</p>
            <p>Так как <InlineMath math={`0,75 = \\frac{3}{4} < 1`} />, отрезок пересекается только с первым промежутком. Получаем интервал:</p>
            <BlockMath math={`x \\in \\left(\\frac{2}{3}; \\, 0,75\\right]`} />
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x \\in \\left(\\frac{2}{3}; \\, 1\\right) \\cup (1; \\, 2]`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`x \\in \\left(\\frac{2}{3}; \\, 0,75\\right]`} />
            </div>
          </div>
        )
      },
      {
        id: 48,
        title: 'Задача 48',
        mathA: '\\sin x + \\cos x = 0',
        mathB: '',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как косинус нуля не является корнем этого уравнения (иначе синус тоже равнялся бы нулю, что противоречит основному тригонометрическому тождеству), разделим обе части на</span>
              <InlineMath math={`\\cos x \\neq 0`} />:
            </div>
            <BlockMath math={`\\operatorname{tg} x = -1 \\implies x = -\\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ:</span>
              <InlineMath math={`x = -\\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
            </div>
          </div>
        )
      },
         {
        id: 49,
        title: 'Задача 49',
        mathA: '\\sin \\frac{\\pi x}{2} - \\sqrt{3}\\cos \\frac{\\pi x}{2} = 0',
        mathB: '\\left( 2; \\, 2\\pi \\right)',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\cos \\frac{\\pi x}{2} = 0`} />
              <span>не является решением (аналогично предыдущей задаче), разделим на</span>
              <InlineMath math={`\\cos \\frac{\\pi x}{2} \\neq 0`} />:
            </div>
            
            <BlockMath math={`\\tan \\frac{\\pi x}{2} = \\sqrt{3} \\implies \\frac{\\pi x}{2} = \\frac{\\pi}{3} + \\pi k \\implies x = \\frac{2}{3} + 2k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Подставим общее решение в двойное неравенство.</p>
            <BlockMath math="2 < \frac{2}{3} + 2k < 2\pi \iff \frac{2}{3} < k < \pi - \frac{1}{3}" />
            <p>Так как <InlineMath math="2 < \pi-\frac{1}{3} < 3" />, подходят <InlineMath math="k=1" /> и <InlineMath math="k=2" />.</p>
            <BlockMath math="x_1=\frac{8}{3},\qquad x_2=\frac{14}{3}" />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{2}{3} + 2k, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math="\frac{8}{3}; \, \frac{14}{3}" />
            </div>
          </div>
        )
      },
      {
        id: 50,
        title: 'Задача 50',
        mathA: '10 \\sin x + 3 \\cos x = 0',
        mathB: '\\left[ -\\pi; \\, \\pi \\right)',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\cos x = 0`} />
              <span>не является решением, разделим на</span>
              <InlineMath math={`\\cos x \\neq 0`} />:
            </div>
            <BlockMath math={`\\tan x = -\\frac{3}{10} \\implies x = -\\operatorname{arctan} \\frac{3}{10} + \\pi k, \\, k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие промежутку, с помощью неравенств.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Обозначим</span>
              <InlineMath math={`\\alpha = \\operatorname{arctan} \\frac{3}{10}`} />;
              <span>так как</span>
              <InlineMath math={`0 < \\frac{3}{10} < 1`} />,
              <span>то</span>
              <InlineMath math={`0 < \\alpha < \\frac{\\pi}{4}`} />.
            </div>
            
            <div className="space-y-2 text-sm pl-4 border-l-2 border-slate-200 dark:border-purple-950/40">
              <div className="flex flex-wrap items-center gap-1">
                <span>• при</span>
                <InlineMath math={`k = 0`} />:
                <InlineMath math={`x = -\\alpha`} />;
                <span>так как</span>
                <InlineMath math={`-\\frac{\\pi}{4} < -\\alpha < 0`} />,
                <span>значение принадлежит промежутку — подходит.</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-1">
                <span>• при</span>
                <InlineMath math={`k = 1`} />:
                <InlineMath math={`x = \\pi - \\alpha`} />;
                <span>так как</span>
                <InlineMath math={`\\frac{3\\pi}{4} < \\pi - \\alpha < \\pi`} />,
                <span>значение меньше правой границы — подходит.</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-1">
                <span>• при</span>
                <InlineMath math={`k = -1`} />:
                <InlineMath math={`x = -\\pi - \\alpha`} />;
                <span>это значение меньше</span>
                <InlineMath math={`-\\pi`} />
                <span>— не подходит.</span>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`-\\operatorname{arctan} \\frac{3}{10} + \\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\operatorname{arctan} \\frac{3}{10}; \\, \\pi - \\operatorname{arctan} \\frac{3}{10}`} />
            </div>
          </div>
        )
      },
          {
        id: 51,
        title: 'Задача 51',
        mathA: '4 \\cos^2 x + 6 \\sin^2 x = 5 \\sin 2x',
        mathB: '\\left[ 0; \\, \\frac{5\\pi}{4} \\right)',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Перепишем левую часть, используя</span>
              <InlineMath math={`\\cos^2 x + \\sin^2 x = 1`} />:
            </div>
            <BlockMath math={`4 \\cos^2 x + 6 \\sin^2 x = 4(\\cos^2 x + \\sin^2 x) + 2 \\sin^2 x = 4 + 2 \\sin^2 x`} />
            <p>Уравнение примет вид:</p>
            <BlockMath math={`4 + 2 \\sin^2 x = 5 \\sin 2x`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Проверим</span>
              <InlineMath math={`\\cos x = 0`} />:
              <span>тогда</span>
              <InlineMath math={`\\sin^2 x = 1`} />,
              <span>левая часть = 6, правая = 0 — не подходит, значит</span>
              <InlineMath math={`\\cos x \\neq 0`} />,
              <span>и можно разделить уравнение на</span>
              <InlineMath math={`\\cos^2 x`} />.
              <span>Перепишем уравнение в виде:</span>
            </div>
            <BlockMath math={`4 \\cos^2 x + 6 \\sin^2 x - 10 \\sin x \\cos x = 0`} />
            
            <div className="flex flex-wrap items-center gap-1">
              <span>(так как</span>
              <InlineMath math={`5 \\sin 2x = 10 \\sin x \\cos x`} />).
              <span>Разделим на</span>
              <InlineMath math={`\\cos^2 x \\neq 0`} />:
            </div>
            <BlockMath math={`4 + 6 \\tan^2 x - 10 \\tan x = 0 \\implies 3 \\tan^2 x - 5 \\tan x + 2 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 25 - 24 = 1`} /></p>
            <BlockMath math={`\\tan x = \\frac{5 \\pm 1}{6} = 1; \\, \\frac{2}{3}`} />
            
            <p>Обратная замена:</p>
            <div className="space-y-1 pl-4 border-l-2 border-slate-200 dark:border-purple-950/40">
              <p><InlineMath math={`\\tan x = 1 \\implies x = \\frac{\\pi}{4} + \\pi k`} /></p>
              <p><InlineMath math={`\\tan x = \\frac{2}{3} \\implies x = \\operatorname{arctan} \\frac{2}{3} + \\pi k, \\, k \\in \\mathbb{Z}`} /></p>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие промежутку, с помощью неравенств.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Обозначим</span>
              <InlineMath math={`\\alpha = \\operatorname{arctan} \\frac{2}{3}`} />;
              <span>так как</span>
              <InlineMath math={`\\frac{2}{3} < 1`} />,
              <span>то</span>
              <InlineMath math={`0 < \\alpha < \\frac{\\pi}{4}`} />.
            </div>
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Серия <InlineMath math={`x = \\frac{\\pi}{4} + \\pi k`} />:</p>
            <div className="space-y-2 text-sm pl-4 border-l-2 border-slate-200 dark:border-purple-950/40">
              <div className="flex flex-wrap items-center gap-1">
                <span>• при</span>
                <InlineMath math={`k = 0`} />:
                <InlineMath math={`x = \\frac{\\pi}{4} \\approx 0,785`} />;
                <span>принадлежит промежутку — подходит.</span>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <span>• при</span>
                <InlineMath math={`k = 1`} />:
                <InlineMath math={`x = \\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4}`} />;
                <span>совпадает с правой границей промежутка, но промежуток открыт справа, значит не входит.</span>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <span>• при</span>
                <InlineMath math={`k = -1`} />:
                <InlineMath math={`x = \\frac{\\pi}{4} - \\pi = -\\frac{3\\pi}{4} < 0`} /> — не подходит.
              </div>
            </div>
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Серия <InlineMath math={`x = \\alpha + \\pi k`} />:</p>
            <div className="space-y-2 text-sm pl-4 border-l-2 border-slate-200 dark:border-purple-950/40">
              <div className="flex flex-wrap items-center gap-1">
                <span>• при</span>
                <InlineMath math={`k = 0`} />:
                <InlineMath math={`x = \\alpha`} />;
                <span>так как</span>
                <InlineMath math={`0 < \\alpha < \\frac{\\pi}{4}`} />,
                <span>значение принадлежит промежутку — подходит.</span>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <span>• при</span>
                <InlineMath math={`k = 1`} />:
                <InlineMath math={`x = \\alpha + \\pi`} />;
                <span>так как</span>
                <InlineMath math={`\\pi < \\alpha + \\pi < \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}`} />,
                <span>значение меньше правой границы — подходит.</span>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <span>• при</span>
                <InlineMath math={`k = -1`} />:
                <InlineMath math={`x = \\alpha - \\pi < 0`} /> — не подходит.
              </div>
            </div>
  
            <p className="pt-2">Следовательно, на промежутке лежат точки: <InlineMath math={`\\frac{\\pi}{4}; \\, \\alpha; \\, \\alpha + \\pi`} />.</p>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{4} + \\pi k; \\, \\operatorname{arctan} \\frac{2}{3} + \\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{\\pi}{4}; \\, \\operatorname{arctan} \\frac{2}{3}; \\, \\pi + \\operatorname{arctan} \\frac{2}{3}`} />
            </div>
          </div>
        )
      },
                {
        id: 52,
        title: 'Задача 52',
        mathA: '3\\sin^2 x - \\sqrt{3}(\\sin x \\cos x - 1) = 3\\sin 2x - \\sqrt{3}\\cos 2x',
        mathB: '\\left[ -1; \\, 2 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Раскроем скобки и распишем правую часть через</span>
              <InlineMath math={`\\sin 2x = 2\\sin x \\cos x`} />
              <span>и</span>
              <InlineMath math={`\\cos 2x = \\cos^2 x - \\sin^2 x`} />:
            </div>
            <BlockMath math={`3\\sin^2 x - \\sqrt{3}\\sin x \\cos x + \\sqrt{3} = 6\\sin x \\cos x - \\sqrt{3}\\cos^2 x + \\sqrt{3}\\sin^2 x`} />
            <p>Перенесём всё влево:</p>
            <BlockMath math={`(3 - \\sqrt{3})\\sin^2 x - (6 + \\sqrt{3})\\sin x \\cos x + \\sqrt{3}\\cos^2 x + \\sqrt{3} = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Заменим свободный член</span>
              <InlineMath math={`\\sqrt{3} = \\sqrt{3}(\\sin^2 x + \\cos^2 x)`} />:
            </div>
            <BlockMath math={`3\\sin^2 x - (6 + \\sqrt{3})\\sin x \\cos x + 2\\sqrt{3}\\cos^2 x = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Проверим</span>
              <InlineMath math={`\\cos x = 0`} />:
              <span>тогда</span>
              <InlineMath math={`\\sin^2 x = 1`} />,
              <span>уравнение даёт</span>
              <InlineMath math={`3 \\neq 0`} />
              <span>— не подходит, значит</span>
              <InlineMath math={`\\cos x \\neq 0`} />,
              <span>делим на</span>
              <InlineMath math={`\\cos^2 x`} />:
            </div>
            <BlockMath math={`3\\tan^2 x - (6 + \\sqrt{3})\\tan x + 2\\sqrt{3} = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена</span>
              <InlineMath math={`t = \\tan x`} />.
              <span>Проверим</span>
              <InlineMath math={`t = \\frac{1}{\\sqrt{3}}`} />:
              <InlineMath math={`3 \\cdot \\frac{1}{3} - (6 + \\sqrt{3}) \\cdot \\frac{1}{\\sqrt{3}} + 2\\sqrt{3} = 1 - \\left(\\frac{6}{\\sqrt{3}} + 1\\right) + 2\\sqrt{3} = -2\\sqrt{3} + 2\\sqrt{3} = 0`} />
              <span>— корень подходит.</span>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>По теореме Виета:</span>
              <InlineMath math={`t_1t_2 = \\frac{2\\sqrt{3}}{3} = \\frac{2}{\\sqrt{3}}`} />,
              <span>откуда</span>
              <InlineMath math={`t_2 = 2`} />.
            </div>
            <p>Обратная замена:</p>
            <div className="space-y-1 pl-4 border-l-2 border-slate-200 dark:border-purple-950/40">
              <p><InlineMath math={`\\tan x = \\frac{1}{\\sqrt{3}} \\implies x = \\frac{\\pi}{6} + \\pi k`} /></p>
              <p><InlineMath math={`\\tan x = 2 \\implies x = \\operatorname{arctan} 2 + \\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие промежутку, с помощью неравенств.</p>
            
            <div className="flex flex-wrap items-center gap-1 font-semibold text-sky-600 dark:text-purple-400 mt-2">
              <span>1) Серия</span>
              <InlineMath math={`x = \\frac{\\pi}{6} + \\pi k`} />:
            </div>
            <div className="space-y-2 text-sm pl-4 border-l-2 border-slate-200 dark:border-purple-950/40">
              <div className="flex flex-wrap items-center gap-1">
                <span>Составим двойное неравенство:</span>
                <InlineMath math={`-1 \\le \\frac{\\pi}{6} + \\pi k \\le 2 \\iff -\\frac{6}{\\pi} \\le 1 + 6k \\le \\frac{12}{\\pi}`} />
              </div>
              <p>Так как <InlineMath math={`3 < \\pi < 4`} />, то <InlineMath math={`-2 < -\\frac{6}{\\pi} < -1.5`} /> и <InlineMath math={`3 < \\frac{12}{\\pi} < 4`} />.</p>
              <div className="flex flex-wrap items-center gap-1">
                <span>Получаем целые границы:</span>
                <InlineMath math={`-2 < 1 + 6k < 4 \\iff -3 < 6k < 3 \\iff -0.5 < k < 0.5`} />
                <span>. Единственное целое решение:</span>
                <InlineMath math={`k = 0 \\implies x = \\frac{\\pi}{6}`} />.
              </div>
            </div>
  
            <div className="flex flex-wrap items-center gap-1 font-semibold text-sky-600 dark:text-purple-400 mt-2">
              <span>2) Серия</span>
              <InlineMath math={`x = \\operatorname{arctan} 2 + \\pi k`} />:
            </div>
            <div className="space-y-2 text-sm pl-4 border-l-2 border-slate-200 dark:border-purple-950/40">
              <div className="flex flex-wrap items-center gap-1">
                <span>Оценим базовый угол: так как</span>
                <InlineMath math={`2 > \\sqrt{3}`} />,
                <span>то</span>
                <InlineMath math={`\\frac{\\pi}{3} < \\operatorname{arctan} 2 < \\frac{\\pi}{2}`} />.
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <span>• При</span>
                <InlineMath math={`k = 0`} />:
                <InlineMath math={`x = \\operatorname{arctan} 2`} />.
                <span>Поскольку</span>
                <InlineMath math={`-1 < 0 < \\frac{\\pi}{3} < \\operatorname{arctan} 2 < \\frac{\\pi}{2} < 2`} />,
                <span>корень принадлежит промежутку.</span>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <span>• При</span>
                <InlineMath math={`k = 1`} />:
                <InlineMath math={`x = \\operatorname{arctan} 2 + \\pi`} />.
                <span>Поскольку</span>
                <InlineMath math={`\\operatorname{arctan} 2 + \\pi > \\frac{\\pi}{3} + \\pi = \\frac{4\\pi}{3} > 2`} />
                <span>(так как</span>
                <InlineMath math={`4\\pi > 6`} />
                <span>), корень лежит правее промежутка.</span>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <span>• При</span>
                <InlineMath math={`k = -1`} />:
                <InlineMath math={`x = \\operatorname{arctan} 2 - \\pi`} />.
                <span>Поскольку</span>
                <InlineMath math={`\\operatorname{arctan} 2 - \\pi < \\frac{\\pi}{2} - \\pi = -\\frac{\\pi}{2} < -1`} />
                <span>(так как</span>
                <InlineMath math={`\\pi > 2`} />
                <span>), корень лежит левее промежутка.</span>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{6} + \\pi k; \\, \\operatorname{arctan} 2 + \\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{\\pi}{6}; \\, \\operatorname{arctan} 2`} />
            </div>
          </div>
        )
      },
            {
        id: 53,
        title: 'Задача 53',
        mathA: '\\sin 2x + \\cos 2x = 0',
        mathB: '\\left[ \\frac{5\\pi}{2}; \\, 4\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Проверим</span>
              <InlineMath math={`\\cos 2x = 0`} />:
              <span>тогда</span>
              <InlineMath math={`\\sin 2x = \\pm 1 \\neq 0`} />
              <span>— не подходит, значит</span>
              <InlineMath math={`\\cos 2x \\neq 0`} />,
              <span>делим на</span>
              <InlineMath math={`\\cos 2x`} />:
            </div>
            <BlockMath math={`\\tan 2x = -1 \\implies 2x = -\\frac{\\pi}{4} + \\pi k \\implies x = -\\frac{\\pi}{8} + \\frac{\\pi k}{2}, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Подставим общее решение в границы отрезка.</p>
            <BlockMath math="\frac{5}{2} \le -\frac{1}{8}+\frac{k}{2}\le 4 \iff \frac{21}{4}\le k\le\frac{33}{4}" />
            <p>Подходят <InlineMath math="k=6,\,7,\,8" />.</p>
            <BlockMath math="x_1=\frac{23\pi}{8},\qquad x_2=\frac{27\pi}{8},\qquad x_3=\frac{31\pi}{8}" />

            <TrigCircle interval={[20,32]} roots={[23,27,31]} denominator={8} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`-\\frac{\\pi}{8} + \\frac{\\pi k}{2}, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math="\frac{23\pi}{8}; \, \frac{27\pi}{8}; \, \frac{31\pi}{8}" />
            </div>
          </div>
        )
      },
        {
        id: 54,
        title: 'Задача 54',
        mathA: '6\\cos^2 x + 5\\sin\\left(\\frac{\\pi}{2} + x\\right) - 4 = 0',
        mathB: '\\left[ -\\frac{7\\pi}{2}; \\, -2\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как по формуле приведения</span>
              <InlineMath math={`\\sin\\left(\\frac{\\pi}{2} + x\\right) = \\cos x`} />:
            </div>
            <BlockMath math={`6\\cos^2 x + 5\\cos x - 4 = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\cos x`} />
              <span>(где</span>
              <InlineMath math={`-1 \\le t \\le 1`} />):
            </div>
            <BlockMath math={`6t^2 + 5t - 4 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 25 + 96 = 121`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{-5 \\pm 11}{12} \\implies t_1 = \\frac{1}{2}, \\quad t_2 = -\\frac{4}{3}`} />
            <p>Корень <InlineMath math={`t_2 = -\\frac{4}{3}`} /> не подходит, так как <InlineMath math={`|t_2| > 1`} />.</p>
            <p>Обратная замена:</p>
            <BlockMath math={`\\cos x = \\frac{1}{2} \\implies x = \\pm\\frac{\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-21,-12]} roots={[-14]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим, что на отрезке</span>
              <InlineMath math={`\\left[ -\\frac{7\\pi}{2}; \\, -2\\pi \\right]`} />
              <span>лежит единственный корень</span>
              <InlineMath math={`x = -\\frac{7\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{3} + 2\\pi k, \\, -\\frac{\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{7\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 55,
        title: 'Задача 55',
        mathA: '\\frac{2 - 3\\sin x - \\cos 2x}{\\sqrt{2x - \\pi}} = 0',
        mathB: '\\left[ 0; \\, \\frac{5\\pi}{4} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР (подкоренное выражение в знаменателе должно быть строго положительным):</span>
            </div>
            <BlockMath math={`2x - \\pi > 0 \\iff x > \\frac{\\pi}{2}`} />
            <p>Дробь равна нулю тогда и только тогда, когда числитель равен нулю (при условии, что знаменатель определён и не равен нулю):</p>
            <BlockMath math={`2 - 3\\sin x - \\cos 2x = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Используем</span>
              <InlineMath math={`\\cos 2x = 1 - 2\\sin^2 x`} />:
            </div>
            <BlockMath math={`2 - 3\\sin x - (1 - 2\\sin^2 x) = 0 \\implies 2\\sin^2 x - 3\\sin x + 1 = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\sin x`} />
              <span>(где</span>
              <InlineMath math={`-1 \\le t \\le 1`} />):
            </div>
            <BlockMath math={`2t^2 - 3t + 1 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 9 - 8 = 1`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{3 \\pm 1}{4} \\implies t_1 = 1; \\quad t_2 = \\frac{1}{2}`} />
            <p>Обратная замена:</p>
            <div className="space-y-1 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <p><InlineMath math={`\\sin x = 1 \\implies x = \\frac{\\pi}{2} + 2\\pi k`} /></p>
              <p><InlineMath math={`\\sin x = \\frac{1}{2} \\implies x = \\frac{\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
            </div>
            <p>С учётом ОГР <InlineMath math={`\\left(x > \\frac{\\pi}{2}\\right)`} /> из каждой серии остаются только те значения, которые строго больше <InlineMath math={`\\frac{\\pi}{2}`} />. Это проверяется индивидуально при отборе в пункте б).</p>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а) с учётом ОГР.</p>
            
            <TrigCircle interval={[0,15]} roots={[10]} denominator={12} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Следовательно, с учётом строгого ограничения знаменателя <InlineMath math={`x > \\frac{\\pi}{2}`} />, на отрезке</span>
              <InlineMath math={`\\left[ 0; \\, \\frac{5\\pi}{4} \\right]`} />
              <span>лежит единственный корень</span>
              <InlineMath math={`x = \\frac{5\\pi}{6}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + 2\\pi k, \\, \\frac{\\pi}{6} + 2\\pi k, \\, \\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z} \\; (\\text{с учётом ОГР } x > \\frac{\\pi}{2})`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{5\\pi}{6}`} />
            </div>
          </div>
        )
      },
      {
        id: 56,
        title: 'Задача 56',
        mathA: '3(\\sin^3 x + 1)^2 + 2\\cos^3\\left(\\frac{13\\pi}{2} + x\\right) - 3 = 0',
        mathB: '(0; \\, \\pi]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Упростим аргумент косинуса:</span>
              <InlineMath math={`\\frac{13\\pi}{2} = 6\\pi + \\frac{\\pi}{2}`} />.
              <span>Поэтому:</span>
            </div>
            <BlockMath math={`\\cos\\left(\\frac{13\\pi}{2} + x\\right) = \\cos\\left(\\frac{\\pi}{2} + x\\right) = -\\sin x`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Значит,</span>
              <InlineMath math={`\\cos^3\\left(\\frac{13\\pi}{2} + x\\right) = -\\sin^3 x`} />,
              <span>и уравнение принимает вид:</span>
            </div>
            <BlockMath math={`3(\\sin^3 x + 1)^2 - 2\\sin^3 x - 3 = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`u = \\sin^3 x`} />
              <span>(где</span>
              <InlineMath math={`-1 \\le u \\le 1`} />):
            </div>
            <BlockMath math={`3(u + 1)^2 - 2u - 3 = 0 \\implies 3u^2 + 6u + 3 - 2u - 3 = 0 \\implies 3u^2 + 4u = 0 \\implies u(3u + 4) = 0`} />
            <p>Корни: <InlineMath math={`u_1 = 0, \\quad u_2 = -\\frac{4}{3}`} /></p>
            <p>Корень <InlineMath math={`u_2 = -\\frac{4}{3}`} /> не подходит, так как <InlineMath math={`|u_2| > 1`} />.</p>
            <p>Обратная замена:</p>
            <BlockMath math={`\\sin^3 x = 0 \\implies \\sin x = 0 \\implies x = \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[0,1]} roots={[1]} openStart />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим, что на полуинтервале</span>
              <InlineMath math={`(0; \\, \\pi]`} />
              <span>лежит единственный корень</span>
              <InlineMath math={`x = \\pi`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi k, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\pi`} />
            </div>
          </div>
        )
      },
      {
        id: 57,
        title: 'Задача 57',
        mathA: '\\sin x - \\cos x = 1',
        mathB: '\\left[ \\frac{5\\pi}{2}; \\, 4\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Используем формулу вспомогательного угла:</span>
              <InlineMath math={`\\sin x - \\cos x = \\sqrt{2}\\sin\\left(x - \\frac{\\pi}{4}\\right)`} />:
            </div>
            <BlockMath math={`\\sqrt{2}\\sin\\left(x - \\frac{\\pi}{4}\\right) = 1 \\implies \\sin\\left(x - \\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}}`} />
            <p>Отсюда:</p>
            <BlockMath math={`x - \\frac{\\pi}{4} = \\frac{\\pi}{4} + 2\\pi k \\quad \\text{или} \\quad x - \\frac{\\pi}{4} = \\frac{3\\pi}{4} + 2\\pi k`} />
            <BlockMath math={`x = \\frac{\\pi}{2} + 2\\pi k \\quad \\text{или} \\quad x = \\pi + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[5,8]} roots={[5,6]} denominator={2} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим, что на отрезке</span>
              <InlineMath math={`\\left[ \\frac{5\\pi}{2}; \\, 4\\pi \\right]`} />
              <span>лежат корни</span>
              <InlineMath math={`\\frac{5\\pi}{2}`} />
              <span>и</span>
              <InlineMath math={`3\\pi`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + 2\\pi k, \\, \\pi + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{5\\pi}{2}; \\, 3\\pi`} />
            </div>
          </div>
        )
      },
      {
        id: 58,
        title: 'Задача 58',
        mathA: '\\sin 2x \\sin \\frac{2\\pi}{5} + \\cos 2\\left(\\frac{\\pi}{2} - x\\right) \\cos \\frac{3\\pi}{5} = 1',
        mathB: '\\left( 17\\pi; \\, \\frac{37\\pi}{2} \\right)',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Упростим отдельные слагаемые:</p>
            <div className="space-y-1 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <p><InlineMath math={`\\cos 2\\left(\\frac{\\pi}{2} - x\\right) = \\cos(\\pi - 2x) = -\\cos 2x`} /></p>
              <p><InlineMath math={`\\cos \\frac{3\\pi}{5} = \\cos\\left(\\pi - \\frac{2\\pi}{5}\\right) = -\\cos \\frac{2\\pi}{5}`} /></p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Значит, второе слагаемое равно</span>
              <InlineMath math={`(-\\cos 2x) \\cdot \\left(-\\cos \\frac{2\\pi}{5}\\right) = \\cos 2x \\cos \\frac{2\\pi}{5}`} />,
              <span>и уравнение принимает вид:</span>
            </div>
            <BlockMath math={`\\sin 2x \\sin \\frac{2\\pi}{5} + \\cos 2x \\cos \\frac{2\\pi}{5} = 1`} />
            <p>По формуле косинуса разности:</p>
            <BlockMath math={`\\cos\\left(2x - \\frac{2\\pi}{5}\\right) = 1 \\implies 2x - \\frac{2\\pi}{5} = 2\\pi k \\implies x = \\frac{\\pi}{5} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
                      {/* 🚀 ИСПРАВЛЕНО: Подписи сдвинуты с осей, а верхняя стрелка полностью восстановлена и сделана аккуратной! */}
          <TrigCircle interval={[170,185]} roots={[172,182]} denominator={10} openStart openEnd />


          <div className="flex flex-wrap items-center gap-1">
            <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим, что на интервале</span>
            <InlineMath math={`\\left( 17\\pi; \\, \\frac{37\\pi}{2} \\right)`} />
            <span>лежат два корня:</span>
            <InlineMath math={`\\frac{86\\pi}{5}`} />
            <span>и</span>
            <InlineMath math={`\\frac{91\\pi}{5}`} />.
          </div>

          <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
            <span>Ответ: а)</span>
            <InlineMath math={`\\frac{\\pi}{5} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
            <span className="ml-2">б)</span>
            <InlineMath math={`\\frac{86\\pi}{5}; \\, \\frac{91\\pi}{5}`} />
          </div>
        </div>
      )
    },
      {
        id: 59,
        title: 'Задача 59',
        mathA: '\\sin 2x = 1 + \\sqrt{2}\\cos x + \\cos 2x',
        mathB: '\\left[ \\frac{\\pi}{2}; \\, 2\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`1 + \\cos 2x = 2\\cos^2 x`} />
              <span>и</span>
              <InlineMath math={`\\sin 2x = 2\\sin x \\cos x`} />:
            </div>
            <BlockMath math={`2\\sin x \\cos x = 2\\cos^2 x + \\sqrt{2}\\cos x \\implies \\cos x(2\\sin x - 2\\cos x - \\sqrt{2}) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\cos x = 0 \\implies x = \\frac{\\pi}{2} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`2\\sin x - 2\\cos x = \\sqrt{2} \\implies \\sin x - \\cos x = \\frac{\\sqrt{2}}{2}`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>По формуле вспомогательного угла:</span>
              <InlineMath math={`\\sqrt{2}\\sin\\left(x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2} \\implies \\sin\\left(x - \\frac{\\pi}{4}\\right) = \\frac{1}{2}`} stroke="currentColor" />
            </div>
            <BlockMath math={`x - \\frac{\\pi}{4} = \\frac{\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad x - \\frac{\\pi}{4} = \\frac{5\\pi}{4} + 2\\pi k`} />
            <BlockMath math={`x = \\frac{5\\pi}{12} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{13\\pi}{12} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[6,24]} roots={[6,13,18]} denominator={12} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`\\frac{\\pi}{2}; \\, \\frac{13\\pi}{12}; \\, \\frac{3\\pi}{2}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + \\pi k, \\, \\frac{5\\pi}{12} + 2\\pi k, \\, \\frac{13\\pi}{12} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{\\pi}{2}; \\, \\frac{13\\pi}{12}; \\, \\frac{3\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 60,
        title: 'Задача 60',
        mathA: '2\\sqrt{3}\\sin^2 x - \\sqrt{6}\\sin(2\\pi + x) - \\sin 2x = -\\sqrt{2}\\cos x',
        mathB: '\\left[ -\\frac{\\pi}{2}; \\, \\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\sin(2\\pi + x) = \\sin x`} />
              <span>и</span>
              <InlineMath math={`\\sin 2x = 2\\sin x \\cos x`} />:
            </div>
            <BlockMath math={`2\\sqrt{3}\\sin^2 x - \\sqrt{6}\\sin x - 2\\sin x \\cos x + \\sqrt{2}\\cos x = 0`} />
            <p>Сгруппируем слагаемые попарно:</p>
            <BlockMath math={`2\\sin x(\\sqrt{3}\\sin x - \\cos x) - \\sqrt{2}(\\sqrt{3}\\sin x - \\cos x) = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>(так как</span>
              <InlineMath math={`\\sqrt{6} = \\sqrt{2} \\cdot \\sqrt{3}`} />).
              <span>Выносим общий множитель:</span>
            </div>
            <BlockMath math={`(\\sqrt{3}\\sin x - \\cos x)(2\\sin x - \\sqrt{2}) = 0`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\sqrt{3}\\sin x - \\cos x = 0 \\implies \\tan x = \\frac{1}{\\sqrt{3}} \\implies x = \\frac{\\pi}{6} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`2\\sin x = \\sqrt{2} \\implies \\sin x = \\frac{\\sqrt{2}}{2} \\implies x = \\frac{\\pi}{4} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{3\\pi}{4} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-6,12]} roots={[2,3,9]} denominator={12} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`\\frac{\\pi}{6}; \\, \\frac{\\pi}{4}; \\, \\frac{3\\pi}{4}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{6} + \\pi k, \\, \\frac{\\pi}{4} + 2\\pi k, \\, \\frac{3\\pi}{4} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{\\pi}{6}; \\, \\frac{\\pi}{4}; \\, \\frac{3\\pi}{4}`} />
            </div>
          </div>
        )
      },
      {
        id: 61,
        title: 'Задача 61',
        mathA: '\\sin\\left(\\frac{\\pi}{2} - x\\right) - \\sin 2x = 0',
        mathB: '\\left( 0; \\, \\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как по формуле приведения</span>
              <InlineMath math={`\\sin\\left(\\frac{\\pi}{2} - x\\right) = \\cos x`} />
              <span>и</span>
              <InlineMath math={`\\sin 2x = 2\\sin x \\cos x`} />:
            </div>
            <BlockMath math={`\\cos x - 2\\sin x \\cos x = 0 \\implies \\cos x(1 - 2\\sin x) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\cos x = 0 \\implies x = \\frac{\\pi}{2} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\sin x = \\frac{1}{2} \\implies x = \\frac{\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[0,15]} roots={[1,3,5,9,13,15]} denominator={6} openStart />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`\\frac{\\pi}{6}; \\, \\frac{\\pi}{2}; \\, \\frac{5\\pi}{6}; \\, \\frac{3\\pi}{2}; \\, \\frac{13\\pi}{6}; \\, \\frac{5\\pi}{2}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + \\pi k, \\, \\frac{\\pi}{6} + 2\\pi k, \\, \\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{\\pi}{6}; \\, \\frac{\\pi}{2}; \\, \\frac{5\\pi}{6}; \\, \\frac{3\\pi}{2}; \\, \\frac{13\\pi}{6}; \\, \\frac{5\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 62,
        title: 'Задача 62',
        mathA: '2\\sin x \\cdot \\sin \\frac{\\pi}{2} \\cdot \\sin \\frac{\\pi}{3} + \\sin 2x = 0',
        mathB: '(-7\\pi; \\, -5\\pi)',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\sin \\frac{\\pi}{2} = 1`} />
              <span>и</span>
              <InlineMath math={`\\sin \\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}`} />:
            </div>
            <BlockMath math={`\\sqrt{3}\\sin x + 2\\sin x \\cos x = 0 \\implies \\sin x(\\sqrt{3} + 2\\cos x) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\sin x = 0 \\implies x = \\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\cos x = -\\frac{\\sqrt{3}}{2} \\implies x = \\frac{5\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad x = -\\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-42,-30]} roots={[-41,-36,-31]} denominator={6} openStart openEnd />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим, что на интервале</span>
              <InlineMath math={`(-7\\pi; \\, -5\\pi)`} />
              <span>лежат три корня:</span>
              <InlineMath math={`-\\frac{41\\pi}{6}; \\, -6\\pi; \\, -\\frac{31\\pi}{6}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi k, \\, \\frac{5\\pi}{6} + 2\\pi k, \\, -\\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{41\\pi}{6}; \\, -6\\pi; \\, -\\frac{31\\pi}{6}`} />
            </div>
          </div>
        )
      },
          {
        id: 63,
        title: 'Задача 63',
        mathA: '\\frac{2\\cos^2 x - 1 - \\sin 4x}{2\\sin 3x - \\sqrt{2}} = 0',
        mathB: '\\left[ \\frac{19\\pi}{4}; \\, \\frac{23\\pi}{4} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР (знаменатель не равен нулю):</span>
            </div>
            <BlockMath math={`\\sin 3x \\neq \\frac{\\sqrt{2}}{2} \\iff 3x \\neq \\frac{\\pi}{4} + 2\\pi n, \\quad 3x \\neq \\frac{3\\pi}{4} + 2\\pi n, \\quad n \\in \\mathbb{Z}`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`2\\cos^2 x - 1 = \\cos 2x`} />,
              <span>числитель принимает вид:</span>
            </div>
            <BlockMath math={`\\cos 2x - \\sin 4x = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Используем</span>
              <InlineMath math={`\\sin 4x = 2\\sin 2x \\cos 2x`} />:
            </div>
            <BlockMath math={`\\cos 2x(1 - 2\\sin 2x) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\cos 2x = 0 \\implies x = \\frac{\\pi}{4} + \\frac{\\pi k}{2}, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\sin 2x = \\frac{1}{2} \\implies x = \\frac{\\pi}{12} + \\pi k \\quad \\text{или} \\quad x = \\frac{5\\pi}{12} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
            <p className="text-xs text-slate-400 dark:text-slate-500 italic">Каждый найденный корень необходимо проверять на ОГР — совпадение с исключёнными точками возможно, так как обе серии связаны с углом 3x через общий период.</p>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а) с обязательной проверкой ОГР.</p>
            
            <TrigCircle interval={[57,69]} roots={[61,63,69]} denominator={12} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Следовательно, на отрезке</span>
              <InlineMath math={`\\left[ \\frac{19\\pi}{4}; \\, \\frac{23\\pi}{4} \\right]`} />
              <span>с учётом ОГР лежат три корня:</span>
              <InlineMath math={`\\frac{61\\pi}{12}; \\, \\frac{21\\pi}{4}; \\, \\frac{23\\pi}{4}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{4} + \\frac{\\pi k}{2}, \\, \\frac{\\pi}{12} + \\pi k, \\, \\frac{5\\pi}{12} + \\pi k, \\, k \\in \\mathbb{Z} \\; (\\text{с учётом ОГР } \\sin 3x \\neq \\frac{\\sqrt{2}}{2})`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{61\\pi}{12}; \\, \\frac{21\\pi}{4}; \\, \\frac{23\\pi}{4}`} />
            </div>
          </div>
        )
      },
      {
        id: 64,
        title: 'Задача 64',
        mathA: '3\\sin x + 3\\sqrt{3}\\cos x = \\sqrt{3} + \\tg x',
        mathB: '\\left( -\\frac{\\pi}{2}; \\, \\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`\\cos x \\neq 0`} />.
            </div>
            <p>Перенесём всё влево и сгруппируем слагаемые:</p>
            <BlockMath math={`3\\sin x - \\tg x + \\sqrt{3}(3\\cos x - 1) = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\tan x = \\frac{\\sin x}{\\cos x}`} />:
            </div>
            <BlockMath math={`\\sin x\\left(3 - \\frac{1}{\\cos x}\\right) + \\sqrt{3}(3\\cos x - 1) = 0`} />
            <BlockMath math={`\\sin x \\cdot \\frac{3\\cos x - 1}{\\cos x} + \\sqrt{3}(3\\cos x - 1) = 0`} />
            <p>Выносим общий множитель <InlineMath math={`(3\\cos x - 1)`} />:</p>
            <BlockMath math={`(3\\cos x - 1)\\left(\\frac{\\sin x}{\\cos x} + \\sqrt{3}\\right) = 0 \\implies (3\\cos x - 1)(\\tan x + \\sqrt{3}) = 0`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\cos x = \\frac{1}{3} \\implies x = \\pm \\arccos \\frac{1}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\tan x = -\\sqrt{3} \\implies x = -\\frac{\\pi}{3} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
            <p className="text-xs text-slate-400 dark:text-slate-500 italic">Оба случая удовлетворяют ОГР <InlineMath math={`(\\cos x \\neq 0)`} />.</p>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие промежутку, с помощью неравенств.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Обозначим</span>
              <InlineMath math={`\\alpha = \\arccos \\frac{1}{3}`} />.
              <span>Оценим этот угол: так как</span>
              <InlineMath math={`0 < \\frac{1}{3} < \\frac{1}{2}`} />,
              <span>то</span>
              <InlineMath math={`\\frac{\\pi}{3} < \\alpha < \\frac{\\pi}{2}`} />.
            </div>
  
            <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Серия корней</span>
                <InlineMath math={`x = \\alpha + 2\\pi k`} />:
                <span>при</span>
                <InlineMath math={`k = 0`} />
                <span>получаем</span>
                <InlineMath math={`x = \\alpha`} />.
                <span>Поскольку</span>
                <InlineMath math={`-\\frac{\\pi}{2} < \\frac{\\pi}{3} < \\alpha < \\frac{\\pi}{2} < \\pi`} />,
                <span>корень принадлежит промежутку — подходит.</span>
              </div>
  
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Серия корней</span>
                <InlineMath math={`x = -\\alpha + 2\\pi k`} />:
                <span>при</span>
                <InlineMath math={`k = 0`} />
                <span>получаем</span>
                <InlineMath math={`x = -\\alpha`} />.
                <span>Поскольку</span>
                <InlineMath math={`-\\frac{\\pi}{2} < -\\alpha < -\\frac{\\pi}{3} < \\pi`} />,
                <span>корень принадлежит промежутку — подходит.</span>
              </div>
  
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Серия корней</span>
                <InlineMath math={`x = -\\frac{\\pi}{3} + \\pi k`} />:
              </div>
              <div className="pl-4 space-y-1">
                <p>1) при <InlineMath math={`k = 0 \\implies x = -\\frac{\\pi}{3}`} />. Так как <InlineMath math={`-\\frac{\\pi}{2} < -\\frac{\\pi}{3} < \\pi`} />, подходит.</p>
                <p>2) при <InlineMath math={`k = 1 \\implies x = -\\frac{\\pi}{3} + \\pi = \\frac{2\\pi}{3}`} />. Так как <InlineMath math={`-\\frac{\\pi}{2} < \\frac{2\\pi}{3} \\le \\pi`} />, подходит.</p>
                <p>3) при других целых <InlineMath math={`k`} /> значения выходят за границы заданного промежутка.</p>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm \\arccos \\frac{1}{3} + 2\\pi k, \\, -\\frac{\\pi}{3} + \\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\arccos \\frac{1}{3}; \\, -\\frac{\\pi}{3}; \\, \\arccos \\frac{1}{3}; \\, \\frac{2\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 65,
        title: 'Задача 65',
        mathA: '\\ctg x + \\ctg 2x = 0',
        mathB: '\\left[ -\\frac{\\pi}{2}; \\, \\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`\\sin x \\neq 0, \\, \\sin 2x \\neq 0`} />,
              <span>что равносильно</span>
              <InlineMath math={`\\sin x \\neq 0`} />
              <span>и</span>
              <InlineMath math={`\\cos x \\neq 0`} />.
            </div>
            <p>Приведём к общему знаменателю:</p>
            <BlockMath math={`\\frac{\\cos x}{\\sin x} + \\frac{\\cos 2x}{\\sin 2x} = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\sin 2x = 2\\sin x \\cos x`} />:
            </div>
            <BlockMath math={`\\frac{2\\cos^2 x + \\cos 2x}{2\\sin x \\cos x} = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Используем</span>
              <InlineMath math={`\\cos 2x = 2\\cos^2 x - 1`} />:
            </div>
            <BlockMath math={`\\frac{4\\cos^2 x - 1}{2\\sin x \\cos x} = 0 \\implies 4\\cos^2 x - 1 = 0 \\implies \\cos^2 x = \\frac{1}{4} \\implies \\cos x = \\pm\\frac{1}{2}`} stroke="currentColor" />
            <p>Обе серии автоматически удовлетворяют ОГР, так как при <InlineMath math={`\\cos x = \\pm\\frac{1}{2}`} /> имеем <InlineMath math={`\\sin x = \\pm\\frac{\\sqrt{3}}{2} \\neq 0`} />.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Общее решение можно записать компактно:</span>
              <InlineMath math={`x = \\frac{\\pi n}{3}, \\, n \\in \\mathbb{Z}`} />,
              <span>где</span>
              <InlineMath math={`n`} />
              <span>не кратно 3.</span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 italic">(случаи n, кратные 3, дают cos x = \pm 1, что не удовлетворяет уравнению, и исключаются автоматически).</p>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-3,6]} roots={[-2,2,4]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-\\frac{\\pi}{3}; \\, \\frac{\\pi}{3}; \\, \\frac{2\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi n}{3}, \\, n \\in \\mathbb{Z}, \\, n \\text{ не кратно } 3`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{\\pi}{3}; \\, \\frac{\\pi}{3}; \\, \\frac{2\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 66,
        title: 'Задача 66',
        mathA: '(3\\tg^2 x + 5)\\cos x = -7',
        mathB: '\\left[ 2\\pi; \\, 3\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`\\cos x \\neq 0`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Преобразуем выражение</span>
              <InlineMath math={`3\\tg^2 x + 5`} />,
              <span>используя формулу тождества</span>
              <InlineMath math={`\\tg^2 x = \\frac{1}{\\cos^2 x} - 1`} />:
            </div>
            <BlockMath math={`3\\tg^2 x + 5 = 3\\left(\\frac{1}{\\cos^2 x} - 1\\right) + 5 = \\frac{3}{\\cos^2 x} + 2`} />
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`\\left(\\frac{3}{\\cos^2 x} + 2\\right)\\cos x = -7 \\implies \\frac{3}{\\cos x} + 2\\cos x = -7`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\cos x`} />
              <span>(где</span>
              <InlineMath math={`-1 \\le t \\le 1, \\, t \\neq 0`} />).
              <span>Домножим на</span>
              <InlineMath math={`t`} />:
            </div>
            <BlockMath math={`3 + 2t^2 = -7t \\implies 2t^2 + 7t + 3 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 49 - 24 = 25`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{-7 \\pm 5}{4} \\implies M_1 = -\\frac{1}{2}, \\quad t_2 = -3`} />
            <p>Корень <InlineMath math={`t_2 = -3`} /> не подходит, так как <InlineMath math={`|t_2| > 1`} />.</p>
            <p>Обратная замена:</p>
            <BlockMath math={`\\cos x = -\\frac{1}{2} \\implies x = \\pm\\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[6,9]} roots={[8]} denominator={3} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим единственный корень:</span>
              <InlineMath math={`x = \\frac{8\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{8\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 67,
        title: 'Задача 67',
        mathA: '\\log_2 (2\\sqrt{3}\\sin x + 2\\cos x) + \\log_2 (6 - 2\\sqrt{3}\\sin x - 2\\cos x) = 3',
        mathB: '\\left[ \\pi; \\, \\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Обозначим</span>
              <InlineMath math={`A = 2\\sqrt{3}\\sin x + 2\\cos x`} />.
              <span>ОГР для логарифмов:</span>
              <InlineMath math={`A > 0`} />
              <span>и</span>
              <InlineMath math={`6 - A > 0`} />,
              <span>то есть</span>
              <InlineMath math={`0 < A < 6`} />.
            </div>
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`\\log_2 A + \\log_2(6 - A) = 3 \\implies \\log_2(A(6 - A)) = 3 \\implies A(6 - A) = 8`} />
            <BlockMath math={`A^2 - 6A + 8 = 0 \\implies A_1 = 2, \\quad A_2 = 4`} />
            <p>Оба значения удовлетворяют ОГР <InlineMath math={`(0 < A < 6)`} />.</p>
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Приведём выражение</span>
              <InlineMath math={`A`} />
              <span>к виду</span>
              <InlineMath math={`R\\sin(x + \\varphi)`} />.
              <span>Так как</span>
              <InlineMath math={`\\sqrt{(2\\sqrt{3})^2 + 2^2} = \\sqrt{12 + 4} = 4`} />:
            </div>
            <BlockMath math={`A = 2\\sqrt{3}\\sin x + 2\\cos x = 4\\left(\\frac{\\sqrt{3}}{2}\\sin x + \\frac{1}{2}\\cos x\\right) = 4\\sin\\left(x + \\frac{\\pi}{6}\\right)`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`A = 2 \\implies \\sin\\left(x + \\frac{\\pi}{6}\\right) = \\frac{1}{2}`} />
            <BlockMath math={`x + \\frac{\\pi}{6} = \\frac{\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad x + \\frac{\\pi}{6} = \\frac{5\\pi}{6} + 2\\pi k`} />
            <BlockMath math={`x = 2\\pi k \\quad \\text{или} \\quad x = \\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`A = 4 \\implies \\sin\\left(x + \\frac{\\pi}{6}\\right) = 1`} />
            <BlockMath math={`x + \\frac{\\pi}{6} = \\frac{\\pi}{2} + 2\\pi k \\implies x = \\frac{\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[6,15]} roots={[12,14]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`2\\pi`} />
              <span>и</span>
              <InlineMath math={`\\frac{7\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`2\\pi k, \\, \\frac{2\\pi}{3} + 2\\pi k, \\, \\frac{\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`2\\pi; \\, \\frac{7\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 68,
        title: 'Задача 68',
        mathA: '\\sin^4 x - \\cos^4 x = \\frac{1}{2}',
        mathB: '\\left( -\\frac{\\pi}{4}; \\, \\frac{11\\pi}{4} \\right)',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>Разложим левую часть на множители как разность квадратов:</p>
            <BlockMath math={`\\sin^4 x - \\cos^4 x = (\\sin^2 x - \\cos^2 x)(\\sin^2 x + \\cos^2 x) = \\sin^2 x - \\cos^2 x = -\\cos 2x`} />
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`-\\cos 2x = \\frac{1}{2} \\implies \\cos 2x = -\\frac{1}{2}`} />
            <BlockMath math={`2x = \\pm \\frac{2\\pi}{3} + 2\\pi k \\implies x = \\pm \\frac{\\pi}{3} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую промежутку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            {/* 🌌 ИСПРАВЛЕНО: УДЛИНЕНЫ КООРДИНАТНЫЕ ОСИ И СДВИГНУТЫ СТРЕЛКИ НА КРАЯ */}
            <TrigCircle interval={[-3,33]} roots={[4,8,16,20,28,32]} denominator={12} openStart openEnd />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`\\frac{\\pi}{3}; \\, \\frac{2\\pi}{3}; \\, \\frac{4\\pi}{3}; \\, \\frac{5\\pi}{3}; \\, \\frac{7\\pi}{3}; \\, \\frac{8\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{3} + \\pi k, \\, -\\frac{\\pi}{3} + \\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{\\pi}{3}; \\, \\frac{2\\pi}{3}; \\, \\frac{4\\pi}{3}; \\, \\frac{5\\pi}{3}; \\, \\frac{7\\pi}{3}; \\, \\frac{8\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 69,
        title: 'Задача 69',
        mathA: '\\sin^4 x - \\cos^4 x + \\cos 2x = \\sin x + \\cos x',
        mathB: '\\left( -\\frac{5\\pi}{2}; \\, 0 \\right)',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Как и в предыдущей задаче,</span>
              <InlineMath math={`\\sin^4 x - \\cos^4 x = -\\cos 2x`} />,
              <span>поэтому левая часть тождественно равна нулю:</span>
            </div>
            <BlockMath math={`-\\cos 2x + \\cos 2x = \\sin x + \\cos x \\implies \\sin x + \\cos x = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\cos x = 0`} />
              <span>не является решением (иначе</span>
              <InlineMath math={`\\sin x = 0`} />,
              <span>что противоречит основному тригонометрическому тождеству), делим на</span>
              <InlineMath math={`\\cos x \\neq 0`} />:
            </div>
            <BlockMath math={`\\tan x = -1 \\implies x = -\\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую промежутку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            {/* 🌌 ИСПРАВЛЕНО: ВОЗВРАЩЕНА ПРАВИЛЬНАЯ ДИАГОНАЛЬ КОРНЕЙ ИЗ II В IV ЧЕТВЕРТЬ */}
            <TrigCircle interval={[-10,0]} roots={[-9,-5,-1]} denominator={4} openStart openEnd />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-\\frac{9\\pi}{4}; \\, -\\frac{5\\pi}{4}; \\, -\\frac{\\pi}{4}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`-\\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{9\\pi}{4}; \\, -\\frac{5\\pi}{4}; \\, -\\frac{\\pi}{4}`} />
            </div>
          </div>
        )
      },
      {
        id: 70,
        title: 'Задача 70',
        mathA: '1 - \\cos\\left(2x - \\frac{7\\pi}{2}\\right) - 2\\cos x = 2\\sin x',
        mathB: '\\left[ -3\\pi; \\, 0 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Упростим первый косинус, добавив период</span>
              <InlineMath math={`4\\pi`} />:
              <InlineMath math={`\\cos\\left(2x - \\frac{7\\pi}{2}\\right) = \\cos\\left(2x - \\frac{7\\pi}{2} + 4\\pi\\right) = \\cos\\left(2x + \\frac{\\pi}{2}\\right) = -\\sin 2x`} />.
            </div>
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`1 + \\sin 2x - 2\\cos x - 2\\sin x = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\sin 2x = 2\\sin x \\cos x`} />,
              <span>а</span>
              <InlineMath math={`1 + 2\\sin x \\cos x = (\\sin x + \\cos x)^2`} />:
            </div>
            <BlockMath math={`(\\sin x + \\cos x)^2 - 2(\\sin x + \\cos x) = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`s = \\sin x + \\cos x`} />
              <span>(где</span>
              <InlineMath math={`-\\sqrt{2} \\le s \\le \\sqrt{2}`} />):
            </div>
            <BlockMath math={`s^2 - 2s = 0 \\implies s(s - 2) = 0`} />
            <p>Корень <InlineMath math={`s = 2`} /> не подходит, так как <InlineMath math={`|s| \\le \\sqrt{2} < 2`} />. Остаётся <InlineMath math={`s = 0`} />:</p>
            <BlockMath math={`\\sin x + \\cos x = 0 \\implies \\tan x = -1 \\implies x = -\\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-12,0]} roots={[-9,-5,-1]} denominator={4} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-\\frac{9\\pi}{4}; \\, -\\frac{5\\pi}{4}; \\, -\\frac{\\pi}{4}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`-\\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{9\\pi}{4}; \\, -\\frac{5\\pi}{4}; \\, -\\frac{\\pi}{4}`} />
            </div>
          </div>
        )
      },
      {
        id: 71,
        title: 'Задача 71',
        mathA: '\\sin x \\cdot \\cos\\left(x + \\frac{\\pi}{4}\\right) \\cdot \\cos\\left(x - \\frac{\\pi}{4}\\right) = \\cos 2x',
        mathB: '\\left[ -\\frac{11\\pi}{2}; \\, -4\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>По формуле произведения косинусов:</span>
              <InlineMath math={`\\cos A \\cos B = \\frac{1}{2}[\\cos(A - B) + \\cos(A + B)]`} />,
              <span>где</span>
              <InlineMath math={`A = x + \\frac{\\pi}{4}, \\, B = x - \\frac{\\pi}{4}`} />,
              <span>так что</span>
              <InlineMath math={`A - B = \\frac{\\pi}{2}, \\, A + B = 2x`} />:
            </div>
            <BlockMath math={`\\cos\\left(x + \\frac{\\pi}{4}\\right)\\cos\\left(x - \\frac{\\pi}{4}\\right) = \\frac{1}{2}\\left[\\cos\\frac{\\pi}{2} + \\cos 2x\\right] = \\frac{1}{2}\\cos 2x`} />
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`\\frac{1}{2}\\sin x \\cos 2x = \\cos 2x \\implies \\cos 2x \\left(\\frac{1}{2}\\sin x - 1\\right) = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\sin x \\le 1 < 2`} />,
              <span>второй множитель никогда не равен нулю, значит:</span>
            </div>
            <BlockMath math={`\\cos 2x = 0 \\implies 2x = \\frac{\\pi}{2} + \\pi k \\implies x = \\frac{\\pi}{4} + \\frac{\\pi k}{2}, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-22,-16]} roots={[-21,-19,-17]} denominator={4} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-\\frac{21\\pi}{4}; \\, -\\frac{19\\pi}{4}; \\, -\\frac{17\\pi}{4}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{4} + \\frac{\\pi k}{2}, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{21\\pi}{4}; \\, -\\frac{19\\pi}{4}; \\, -\\frac{17\\pi}{4}`} />
            </div>
          </div>
        )
      },
      {
        id: 72,
        title: 'Задача 72',
        mathA: '(2\\sin x - \\cos x)(1 + \\cos x) = \\sin^2 x',
        mathB: '\\left[ \\frac{17\\pi}{2}; \\, \\frac{19\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\sin^2 x = 1 - \\cos^2 x = (1 - \\cos x)(1 + \\cos x)`} />,
              <span>перенесём всё влево:</span>
            </div>
            <BlockMath math={`(2\\sin x - \\cos x)(1 + \\cos x) - (1 - \\cos x)(1 + \\cos x) = 0`} />
            <p>Выносим общий множитель <InlineMath math={`(1 + \\cos x)`} />:</p>
            <BlockMath math={`(1 + \\cos x)[2\\sin x - \\cos x - (1 - \\cos x)] = 0`} />
            <BlockMath math={`(1 + \\cos x)(2\\sin x - 1) = 0`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\cos x = -1 \\implies x = \\pi + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\sin x = \\frac{1}{2} \\implies x = \\frac{\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[51,57]} roots={[53,54]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`9\\pi`} />
              <span>и</span>
              <InlineMath math={`\\frac{53\\pi}{6}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi + 2\\pi k, \\, \\frac{\\pi}{6} + 2\\pi k, \\, \\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{53\\pi}{6}; \\, 9\\pi`} />
            </div>
          </div>
        )
      },
      {
        id: 73,
        title: 'Задача 73',
        mathA: '2\\cos\\left(x - \\frac{\\pi}{4}\\right) + \\sqrt{2}\\cdot\\cos(\\pi - x) = 1',
        mathB: '\\left[ \\frac{17\\pi}{2}; \\, 10\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>По формуле косинуса разности:</span>
              <InlineMath math={`\\cos\\left(x - \\frac{\\pi}{4}\\right) = \\cos x \\cos \\frac{\\pi}{4} + \\sin x \\sin \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}(\\cos x + \\sin x)`} />,
              <span>поэтому:</span>
            </div>
            <BlockMath math={`2\\cos\\left(x - \\frac{\\pi}{4}\\right) = \\sqrt{2}(\\cos x + \\sin x)`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Также по формуле приведения</span>
              <InlineMath math={`\\cos(\\pi - x) = -\\cos x`} />.
              <span>Уравнение принимает вид:</span>
            </div>
            <BlockMath math={`\\sqrt{2}(\\cos x + \\sin x) - \\sqrt{2}\\cos x = 1 \\implies \\sqrt{2}\\sin x = 1 \\implies \\sin x = \\frac{\\sqrt{2}}{2}`} />
            <BlockMath math={`x = \\frac{\\pi}{4} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{3\\pi}{4} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[34,40]} roots={[35]} denominator={4} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим единственный корень:</span>
              <InlineMath math={`x = \\frac{35\\pi}{4}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{4} + 2\\pi k, \\, \\frac{3\\pi}{4} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{35\\pi}{4}`} />
            </div>
          </div>
        )
      },
      {
        id: 74,
        title: 'Задача 74',
        mathA: '\\sin^2 x + \\cos^2\\left(x + \\frac{\\pi}{4}\\right) = \\frac{1}{2}',
        mathB: '\\left[ \\frac{13\\pi}{2}; \\, \\frac{15\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>По формуле косинуса суммы:</span>
              <InlineMath math={`\\cos\\left(x + \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}(\\cos x - \\sin x)`} />,
              <span>поэтому:</span>
            </div>
            <BlockMath math={`\\cos^2\\left(x + \\frac{\\pi}{4}\\right) = \\frac{1}{2}(\\cos x - \\sin x)^2 = \\frac{1}{2}(1 - 2\\sin x \\cos x) = \\frac{1}{2}(1 - \\sin 2x)`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Также используем формулу понижения степени</span>
              <InlineMath math={`\\sin^2 x = \\frac{1 - \\cos 2x}{2}`} />.
              <span>Уравнение принимает вид:</span>
            </div>
            <BlockMath math={`\\frac{1 - \\cos 2x}{2} + \\frac{1 - \\sin 2x}{2} = \\frac{1}{2} \\implies 2 - \\cos 2x - \\sin 2x = 1 \\implies \\sin 2x + \\cos 2x = 1`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>По формуле вспомогательного угла:</span>
              <InlineMath math={`\\sqrt{2}\\sin\\left(2x + \\frac{\\pi}{4}\\right) = 1 \\implies \\sin\\left(2x + \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}`} />.
            </div>
            <BlockMath math={`2x + \\frac{\\pi}{4} = \\frac{\\pi}{4} + 2\\pi k \\quad \\text{или} \\quad 2x + \\frac{\\pi}{4} = \\frac{3\\pi}{4} + 2\\pi k`} />
            <BlockMath math={`x = \\pi k \\quad \\text{или} \\quad x = \\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[26,30]} roots={[28,29]} denominator={4} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`7\\pi`} />
              <span>и</span>
              <InlineMath math={`\\frac{29\\pi}{4}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi k, \\, \\frac{\\pi}{4} + \\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`7\\pi; \\, \\frac{29\\pi}{4}`} />
            </div>
          </div>
        )
      },
      {
        id: 75,
        title: 'Задача 75',
        mathA: '\\sin x = \\log_{12} (3^{\\sin x} \\cdot 4^{\\cos x})',
        mathB: '\\left[ 2\\pi; \\, \\frac{7\\pi}{2} \\right]',
        solutionBuilder: () => (
      <div className="space-y-4 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300">
        
        {/* а) РЕШЕНИЕ УРАВНЕНИЯ (Ваш элегантный метод логарифмирования) */}
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">a) Решение уравнения:</p>
        <div className="flex flex-wrap items-center gap-1">
          <span>ОГР:</span>
          <InlineMath math={'x \\in \\mathbb{R}'} />
          <span>(аргумент логарифма всегда положителен из-за свойств степеней).</span>
        </div>
        
        <p>По определению логарифма перейдём к показательному уравнению (прологарифмируем левую часть по основанию 12):</p>
        <BlockMath math={'12^{\\sin x} = 3^{\\sin x} \\cdot 4^{\\cos x}'} />
        
        <p>Представим основание 12 как произведение 3 и 4 и разложим степень в левой части уравнения:</p>
        <BlockMath math={'(3 \\cdot 4)^{\\sin x} = 3^{\\sin x} \\cdot 4^{\\cos x} \\implies 3^{\\sin x} \\cdot 4^{\\sin x} = 3^{\\sin x} \\cdot 4^{\\cos x}'} />
        
        <p>Разделим обе части полученного уравнения на строго положительную показательную функцию <InlineMath math={'3^{\\sin x}'} />:</p>
        <BlockMath math={'4^{\\sin x} = 4^{\\cos x} \\implies \\sin x = \\cos x'} />
        
        <p>Разделим обе части на <InlineMath math={'\\cos x \\neq 0'} />, сводя к простейшему тригонометрическому уравнению:</p>
        <BlockMath math={'\\tan x = 1 \\implies x = \\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}'} />

        {/* б) ОТБОР КОРНЕЙ */}
        <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
        <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>

        <TrigCircle interval={[8,14]} roots={[9,13]} denominator={4} />

        <div className="flex flex-wrap items-center gap-1">
          <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
          <InlineMath math={'\\frac{9\\pi}{4}'} />
          <span>и</span>
          <InlineMath math={'\\frac{13\\pi}{4}'} />.
        </div>

        {/* ФИНАЛЬНЫЙ ОТВЕТ */}
        <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
          <span>Ответ: а)</span>
          <InlineMath math={'\\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}'} />
          <span className="ml-2">б)</span>
          <InlineMath math={'\\frac{9\\pi}{4}; \\, \\frac{13\\pi}{4}'} />
        </div>

      </div>
    )
  },
      {
        id: 76,
        title: 'Задача 76',
        mathA: '\\cos 2x + 0{,}75 = \\cos^2 x',
        mathB: '\\left[ -4\\pi; \\, -\\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Используем формулу косинуса двойного угла</span>
              <InlineMath math={`\\cos 2x = 2\\cos^2 x - 1`} />
              <span>и заменим</span>
              <InlineMath math={`0{,}75 = \\frac{3}{4}`} />:
            </div>
            <BlockMath math={`2\\cos^2 x - 1 + \\frac{3}{4} = \\cos^2 x \\implies \\cos^2 x = \\frac{1}{4} \\implies \\cos x = \\pm\\frac{1}{2}`} />
            <p>Обе серии можно записать компактно через формулу двойного угла:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>так как</span>
              <InlineMath math={`\\cos 2x = 2 \\cdot \\frac{1}{4} - 1 = -\\frac{1}{2}`} />,
              <span>получаем:</span>
            </div>
            <BlockMath math={`2x = \\pm\\frac{2\\pi}{3} + 2\\pi k \\implies x = \\pm\\frac{\\pi}{3} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-24,-15]} roots={[-22,-20,-16]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-\\frac{11\\pi}{3}; \\, -\\frac{10\\pi}{3}; \\, -\\frac{8\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{3} + \\pi k, \\, -\\frac{\\pi}{3} + \\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{11\\pi}{3}; \\, -\\frac{10\\pi}{3}; \\, -\\frac{8\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 77,
        title: 'Задача 77',
        mathA: '2 + 2\\cos(\\pi + 2x) - \\sqrt{8}\\sin x = \\sqrt{6} - \\sqrt{12}\\sin x',
        mathB: '\\left[ \\frac{\\pi}{2}; \\, 2\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как по формуле приведения</span>
              <InlineMath math={`\\cos(\\pi + 2x) = -\\cos 2x`} />,
              <span>а радикалы равны</span>
              <InlineMath math={`\\sqrt{8} = 2\\sqrt{2}`} />
              <span>и</span>
              <InlineMath math={`\\sqrt{12} = 2\\sqrt{3}`} />,
              <span>перенесём все слагаемые влево:</span>
            </div>
            <BlockMath math={`2 - \\sqrt{6} - 2\\cos 2x + (2\\sqrt{3} - 2\\sqrt{2})\\sin x = 0`} />
            <p>Используем формулу косинуса двойного угла <InlineMath math={`\\cos 2x = 1 - 2\\sin^2 x`} />, откуда <InlineMath math={`-2\\cos 2x = -2 + 4\\sin^2 x`} />:</p>
            <BlockMath math={`-\\sqrt{6} + 4\\sin^2 x + 2(\\sqrt{3} - \\sqrt{2})\\sin x = 0`} />
            <p>Замена: <InlineMath math={`t = \\sin x`} />. Получаем квадратное уравнение:</p>
            <BlockMath math={`4t^2 + 2(\\sqrt{3} - \\sqrt{2})t - \\sqrt{6} = 0`} />
            <p>Вычислим дискриминант:</p>
            <BlockMath math={`D = 4(\\sqrt{3} - \\sqrt{2})^2 + 16\\sqrt{6} = 4(5 - 2\\sqrt{6}) + 16\\sqrt{6} = 20 + 8\\sqrt{6}`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Заметим, что выражение под корнем сворачивается в полный квадрат:</span>
              <InlineMath math={`20 + 8\\sqrt{6} = (\\sqrt{3} + \\sqrt{2})^2`} />,
              <span>поэтому</span>
              <InlineMath math={`\\sqrt{D} = 2(\\sqrt{3} + \\sqrt{2})`} />.
            </div>
            <BlockMath math={`t_{1,2} = \\frac{-2(\\sqrt{3} - \\sqrt{2}) \\pm 2(\\sqrt{3} + \\sqrt{2})}{8} = \\frac{-(\\sqrt{3} - \\sqrt{2}) \\pm (\\sqrt{3} + \\sqrt{2})}{4}`} />
            <BlockMath math={`t_1 = \\frac{2\\sqrt{2}}{4} = \\frac{\\sqrt{2}}{2}, \\quad t_2 = \\frac{-2\\sqrt{3}}{4} = -\\frac{\\sqrt{3}}{2}`} />
            <p>Выполним обратную замену:</p>
            <div className="space-y-2 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <p>1) <InlineMath math={`\\sin x = \\frac{\\sqrt{2}}{2} \\implies x = \\frac{\\pi}{4} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{3\\pi}{4} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
              <p>2) <InlineMath math={`\\sin x = -\\frac{\\sqrt{3}}{2} \\implies x = -\\frac{\\pi}{3} + 2\\pi k \\quad \\text{или} \\quad x = -\\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[6,24]} roots={[9,16,20]} denominator={12} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`\\frac{3\\pi}{4}; \\, \\frac{4\\pi}{3}; \\, \\frac{5\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{4} + 2\\pi k, \\, \\frac{3\\pi}{4} + 2\\pi k, \\, -\\frac{\\pi}{3} + 2\\pi k, \\, -\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{3\\pi}{4}; \\, \\frac{4\\pi}{3}; \\, \\frac{5\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 78,
        title: 'Задача 78',
        mathA: '6\\log_8^2 x - 5\\log_8 x + 1 = 0',
        mathB: '\\left[ 1; \\, 2{,}5 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`x > 0`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\log_8 x`} />.
              <span>Получаем квадратное уравнение:</span>
            </div>
            <BlockMath math={`6t^2 - 5t + 1 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 25 - 24 = 1`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{5 \\pm 1}{12} \\implies t_1 = \\frac{1}{2}, \\quad t_2 = \\frac{1}{3}`} />
            <p>Выполним обратную замену:</p>
            <div className="space-y-2 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <p>1) <InlineMath math={`\\log_8 x = \\frac{1}{2} \\implies x = 8^{1/2} = 2\\sqrt{2}`} /></p>
              <p>2) <InlineMath math={`\\log_8 x = \\frac{1}{3} \\implies x = 8^{1/3} = 2`} /></p>
            </div>
            <p>Оба корня удовлетворяют ОГР <InlineMath math={`(x > 0)`} />.</p>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку <InlineMath math={`[1; \\, 2{,}5]`} />, при помощи неравенств.</p>
            
            <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корня</span>
                <InlineMath math={`x = 2\\sqrt{2}`} />:
                <span>так как</span>
                <InlineMath math={`2\\sqrt{2} = \\sqrt{8}`} />,
                <span>а</span>
                <InlineMath math={`2{,}5 = \\sqrt{6{,}25}`} />,
                <span>получаем</span>
                <InlineMath math={`2\\sqrt{2} > 2{,}5`} stroke="currentColor" />
                <span></span>
                <InlineMath math={``} /> —
                <span>значение не принадлежит отрезку.</span>
              </div>
  
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корня</span>
                <InlineMath math={`x = 2`} />:
                <span>очевидно, что</span>
                <InlineMath math={`1 \\le 2 \\le 2{,}5`} />,
                <span>корень принадлежит отрезку — подходит.</span>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 2\\sqrt{2}; \\, x = 2`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`2`} />
            </div>
          </div>
        )
      },
      {
        id: 79,
        title: 'Задача 79',
        mathA: '2\\cos(-x) - 2\\sqrt{2}\\cos x - 4\\sin^2 x = \\sqrt{2} - 4',
        mathB: '\\left[ -2\\pi; \\, -\\frac{\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как по свойству чётности</span>
              <InlineMath math={`\\cos(-x) = \\cos x`} />,
              <span>а также</span>
              <InlineMath math={`\\sin^2 x = 1 - \\cos^2 x`} />:
            </div>
            <BlockMath math={`2\\cos x - 2\\sqrt{2}\\cos x - 4(1 - \\cos^2 x) = \\sqrt{2} - 4`} />
            <BlockMath math={`2(1 - \\sqrt{2})\\cos x - 4 + 4\\cos^2 x = \\sqrt{2} - 4 \\implies 4\\cos^2 x + 2(1 - \\sqrt{2})\\cos x - \\sqrt{2} = 0`} />
            <p>Замена: <InlineMath math={`t = \\cos x`} /> (где <InlineMath math={`-1 \\le t \\le 1`} />). Получаем квадратное уравнение:</p>
            <BlockMath math={`4t^2 + 2(1 - \\sqrt{2})t - \\sqrt{2} = 0`} />
            <p>Вычислим дискриминант:</p>
            <BlockMath math={`D = 4(1 - \\sqrt{2})^2 + 16\\sqrt{2} = 4(3 - 2\\sqrt{2}) + 16\\sqrt{2} = 12 + 8\\sqrt{2}`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Заметим, что выражение под корнем сворачивается в полный квадрат:</span>
              <InlineMath math={`12 + 8\\sqrt{2} = (2 + \\sqrt{2})^2`} />,
              <span>поэтому</span>
              <InlineMath math={`\\sqrt{D} = 2 + \\sqrt{2}`} />.
            </div>
            <BlockMath math={`t_{1,2} = \\frac{-2(1 - \\sqrt{2}) \\pm (2 + \\sqrt{2})}{8} = \\frac{(\\sqrt{2} - 1) \\pm (1 + \\sqrt{2})}{4}`} />
            <BlockMath math={`t_1 = \\frac{2\\sqrt{2}}{4} = \\frac{\\sqrt{2}}{2}, \\quad t_2 = \\frac{-2}{4} = -\\frac{1}{2}`} />
            <p>Оба корня удовлетворяют условию <InlineMath math={`|t| \\le 1`} />. Выполним обратную замену:</p>
            <div className="space-y-2 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <p>1) <InlineMath math={`\\cos x = \\frac{\\sqrt{2}}{2} \\implies x = \\pm\\frac{\\pi}{4} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
              <p>2) <InlineMath math={`\\cos x = -\\frac{1}{2} \\implies x = \\pm\\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-24,-6]} roots={[-21,-16,-8]} denominator={12} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-\\frac{7\\pi}{4}; \\, -\\frac{4\\pi}{3}; \\, -\\frac{2\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{4} + 2\\pi k, \\, \\pm\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{7\\pi}{4}; \\, -\\frac{4\\pi}{3}; \\, -\\frac{2\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 80,
        title: 'Задача 80',
        mathA: '\\log_2(x^2 + 2x) = 3',
        mathB: '\\left[ \\log_3 0{,}1; \\, \\log_3 13 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`x^2 + 2x > 0 \\iff x(x + 2) > 0 \\iff x < -2 \\quad \\text{или} \\quad x > 0`} />.
            </div>
            <p>По определению логарифма перейдём к квадратному уравнению:</p>
            <BlockMath math={`x^2 + 2x = 2^3 \\implies x^2 + 2x = 8 \\implies x^2 + 2x - 8 = 0`} />
            <p>Разложим на множители:</p>
            <BlockMath math={`(x + 4)(x - 2) = 0 \\implies x_1 = -4, \\quad x_2 = 2`} />
            <p>Оба корня удовлетворяют ОГР.</p>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, при помощи неравенств.</p>
            
            <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Сравним корень <InlineMath math={`x_1 = -4`} /> с левой границей <InlineMath math={`\\log_3 0{,}1 = \\log_3 \\frac{1}{10}`} />:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Так как</span>
                  <InlineMath math={`\\frac{1}{27} < \\frac{1}{10} < \\frac{1}{9}`} />,
                  <span>то</span>
                  <InlineMath math={`-3 = \\log_3 \\frac{1}{27} < \\log_3 \\frac{1}{10} < \\log_3 \\frac{1}{9} = -2`} />.
                </div>
                <p>Значит, <InlineMath math={`\\log_3 0{,}1 \\in (-3; \\, -2)`} />. Отсюда следует, что <InlineMath math={`-4 < -3 < \\log_3 0{,}1`} />, то есть корень <InlineMath math={`x_1 = -4`} /> лежит левее отрезка и не подходит.</p>
              </div>
  
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Сравним корень <InlineMath math={`x_2 = 2`} /> с обеими границами отрезка:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>1) С правой границей: так как</span>
                  <InlineMath math={`9 < 13`} />,
                  <span>то</span>
                  <InlineMath math={`\\log_3 9 < \\log_3 13 \\implies 2 < \\log_3 13`} />.
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span>2) С левой границей: так как</span>
                  <InlineMath math={`\\log_3 0{,}1 < 0 < 2`} />,
                  <span>получаем:</span>
                  <InlineMath math={`\\log_3 0{,}1 < 2 < \\log_3 13`} />.
                </div>
                <p>Следовательно, корень <InlineMath math={`x_2 = 2`} /> принадлежит отрезку.</p>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = -4; \\, x = 2`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`2`} />
            </div>
          </div>
        )
      },
      {
        id: 81,
        title: 'Задача 81',
        mathA: '\\sin 2x + \\sqrt{2}\\sin(x + \\pi) = 0',
        mathB: '\\left[ \\frac{7\\pi}{2}; \\, 5\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как по формуле приведения</span>
              <InlineMath math={`\\sin(x + \\pi) = -\\sin x`} />:
            </div>
            <BlockMath math={`\\sin 2x - \\sqrt{2}\\sin x = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Используем формулу синуса двойного угла</span>
              <InlineMath math={`\\sin 2x = 2\\sin x \\cos x`} />:
            </div>
            <BlockMath math={`2\\sin x \\cos x - \\sqrt{2}\\sin x = 0 \\implies \\sin x (2\\cos x - \\sqrt{2}) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\sin x = 0 \\implies x = \\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\cos x = \\frac{\\sqrt{2}}{2} \\implies x = \\pm\\frac{\\pi}{4} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[14,20]} roots={[15,16,17,20]} denominator={4} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`\\frac{15\\pi}{4}; \\, 4\\pi; \\, \\frac{17\\pi}{4}; \\, 5\\pi`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi k, \\, \\pm\\frac{\\pi}{4} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{15\\pi}{4}; \\, 4\\pi; \\, \\frac{17\\pi}{4}; \\, 5\\pi`} />
            </div>
          </div>
        )
      },
      {
        id: 82,
        title: 'Задача 82',
        mathA: '2\\cos x + \\sin^2 x = 2\\cos^3 x',
        mathB: '\\left[ -\\frac{7\\pi}{2}; \\, -2\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Используем основное тригонометрическое тождество</span>
              <InlineMath math={`\\sin^2 x = 1 - \\cos^2 x`} />
              <span>и перенесём все члены в одну сторону:</span>
            </div>
            <BlockMath math={`2\\cos x + 1 - \\cos^2 x = 2\\cos^3 x \\implies 2\\cos^3 x + \\cos^2 x - 2\\cos x - 1 = 0`} />
            <p>Разложим левую часть на множители методом группировки:</p>
            <BlockMath math={`\\cos^2 x(2\\cos x + 1) - (2\\cos x + 1) = 0 \\implies (2\\cos x + 1)(\\cos^2 x - 1) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`2\\cos x + 1 = 0 \\implies \\cos x = -\\frac{1}{2} \\implies x = \\pm\\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\cos^2 x - 1 = 0 \\implies \\cos x = 1 \\quad \\text{или} \\quad \\cos x = -1`} />
            <BlockMath math={`x = 2\\pi k \\quad \\text{или} \\quad x = \\pi + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-21,-12]} roots={[-20,-18,-16,-12]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-\\frac{10\\pi}{3}; \\, -3\\pi; \\, -\\frac{8\\pi}{3}; \\, -2\\pi`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`2\\pi k, \\, \\pi + 2\\pi k, \\, \\pm\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{10\\pi}{3}; \\, -3\\pi; \\, -\\frac{8\\pi}{3}; \\, -2\\pi`} />
            </div>
          </div>
        )
      },
      {
        id: 83,
        title: 'Задача 83',
        mathA: '3\\tan^2 x - \\frac{5}{\\cos x} + 1 = 0',
        mathB: '\\left[ -\\frac{7\\pi}{2}; \\, -2\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`\\cos x \\neq 0`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\tan^2 x = \\frac{1}{\\cos^2 x} - 1`} />:
            </div>
            <BlockMath math={`3\\left(\\frac{1}{\\cos^2 x} - 1\\right) - \\frac{5}{\\cos x} + 1 = 0 \\implies \\frac{3}{\\cos^2 x} - \\frac{5}{\\cos x} - 2 = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\frac{1}{\\cos x}`} />
              <span>(где</span>
              <InlineMath math={`|t| \\ge 1`} />).
              <span>Получаем квадратное уравнение:</span>
            </div>
            <BlockMath math={`3t^2 - 5t - 2 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 25 + 24 = 49`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{5 \\pm 7}{6} \\implies t_1 = 2, \\quad t_2 = -\\frac{1}{3}`} />
            <p>Корень <InlineMath math={`t_2 = -\\frac{1}{3}`} /> не подходит, так как <InlineMath math={`|t_2| < 1`} />.</p>
            <p>Обратная замена:</p>
            <BlockMath math={`\\frac{1}{\\cos x} = 2 \\implies \\cos x = \\frac{1}{2} \\implies x = \\pm\\frac{\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-21,-12]} roots={[-14]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим единственный корень:</span>
              <InlineMath math={`x = -\\frac{7\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{7\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 84,
        title: 'Задача 84',
        mathA: '\\log_2(4x^4 + 56) = 2 + \\log_{\\sqrt{2}}\\sqrt{7x^2 + 2}',
        mathB: '\\left[ -1{,}7; \\, 1{,}8 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`4x^4 + 56 > 0`} />
              <span>и</span>
              <InlineMath math={`7x^2 + 2 > 0`} /> —
              <span>выполняются при любом</span>
              <InlineMath math={`x \\in \\mathbb{R}`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Преобразуем правую часть уравнения:</span>
            </div>
            <BlockMath math={`\\log_{\\sqrt{2}}\\sqrt{7x^2 + 2} = \\log_{2^{1/2}}(7x^2 + 2)^{1/2} = \\log_2(7x^2 + 2)`} />
            <p>Тогда исходное уравнение принимает вид:</p>
            <BlockMath math={`\\log_2(4x^4 + 56) = 2 + \\log_2(7x^2 + 2) = \\log_2(4(7x^2 + 2)) = \\log_2(28x^2 + 8)`} />
            <p>Переходим к равенству аргументов под логарифмами:</p>
            <BlockMath math={`4x^4 + 56 = 28x^2 + 8 \\implies 4x^4 - 28x^2 + 48 = 0 \\implies x^4 - 7x^2 + 12 = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`u = x^2`} />
              <span>(где</span>
              <InlineMath math={`u > 0`} />):
            </div>
            <BlockMath math={`u^2 - 7u + 12 = 0 \\implies (u - 3)(u - 4) = 0 \\implies u_1 = 3, \\quad u_2 = 4`} />
            <p>Выполним обратную замену:</p>
            <div className="space-y-2 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <p>1) <InlineMath math={`x^2 = 3 \\implies x = \\pm\\sqrt{3}`} /></p>
              <p>2) <InlineMath math={`x^2 = 4 \\implies x = \\pm2`} /></p>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, при помощи точных квадратичных неравенств.</p>
            
            <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корней <InlineMath math={`x = \\pm\\sqrt{3}`} />:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Так как</span>
                  <InlineMath math={`1{,}7^2 = 2{,}89 < 3`} />,
                  <span>а</span>
                  <InlineMath math={`1{,}8^2 = 3{,}24 > 3`} />,
                  <span>то выполняется точное строгое неравенство</span>
                  <InlineMath math={`1{,}7 < \\sqrt{3} < 1{,}8`} />.
                </div>
                <p>1) Корень <InlineMath math={`x = \\sqrt{3}`} /> принадлежит заданному отрезку.</p>
                {/* 👍 ОПЕЧАТКА ИСПРАВЛЕНА: Inlinebox полностью заменён на валидный InlineMath */}
                <p>2) Для отрицательного корня: из неравенства следует <InlineMath math={`-1{,}8 < -\\sqrt{3} < -1{,}7`} />, то есть значение лежит левее границы <InlineMath math={`-1{,}7`} /> и не подходит.</p>
              </div>
  
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корней <InlineMath math={`x = \\pm2`} />:</span>
                <p>1) Корень <InlineMath math={`x = 2 > 1{,}8`} /> — лежит правее отрезка, не подходит.</p>
                <p>2) Корень <InlineMath math={`x = -2 < -1{,}7`} /> — лежит левее отрезка, не подходит.</p>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = \\pm\\sqrt{3}; \\, x = \\pm2`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\sqrt{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 85,
        title: 'Задача 85',
        mathA: '2\\cos^3 x = \\sqrt{3}\\sin^2 x + 2\\cos x',
        mathB: '\\left[ -3\\pi; \\, -\\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Перенесём все слагаемые влево и используем основное тождество</span>
              <InlineMath math={`\\sin^2 x = 1 - \\cos^2 x`} />:
            </div>
            <BlockMath math={`2\\cos^3 x - 2\\cos x = \\sqrt{3}(1 - \\cos^2 x)`} />
            <BlockMath math={`2\\cos x(\\cos^2 x - 1) = \\sqrt{3}(1 - \\cos^2 x) \\implies -2\\cos x(1 - \\cos^2 x) - \\sqrt{3}(1 - \\cos^2 x) = 0`} />
            <p>Выносим общий множитель <InlineMath math={`(1 - \\cos^2 x) = \\sin^2 x`} />:</p>
            <BlockMath math={`(1 - \\cos^2 x)(-2\\cos x - \\sqrt{3}) = 0 \\implies \\sin^2 x (2\\cos x + \\sqrt{3}) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\sin x = 0 \\implies x = \\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\cos x = -\\frac{\\sqrt{3}}{2} \\implies x = \\pm\\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-18,-15]} roots={[-18,-17]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-3\\pi`} />
              <span>и</span>
              <InlineMath math={`-\\frac{17\\pi}{6}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi k, \\, \\pm\\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-3\\pi; \\, -\\frac{17\\pi}{6}`} />
            </div>
          </div>
        )
      },
      {
        id: 86,
        title: 'Задача 86',
        mathA: '\\cos x \\cdot \\cos 2x = \\sqrt{3}\\sin^2 x + \\cos x',
        mathB: '\\left[ \\pi; \\, \\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Перенесём</span>
              <InlineMath math={`\\cos x`} />
              <span>влево:</span>
            </div>
            <BlockMath math={`\\cos x(\\cos 2x - 1) = \\sqrt{3}\\sin^2 x`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\cos 2x - 1 = -2\\sin^2 x`} />:
            </div>
            <BlockMath math={`-2\\cos x \\sin^2 x = \\sqrt{3}\\sin^2 x \\implies \\sin^2 x(2\\cos x + \\sqrt{3}) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\sin x = 0 \\implies x = \\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\cos x = -\\frac{\\sqrt{3}}{2} \\implies x = \\pm\\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[6,15]} roots={[6,7,12]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`\\pi; \\, \\frac{7\\pi}{6}; \\, 2\\pi`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi k, \\, \\pm\\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\pi; \\, \\frac{7\\pi}{6}; \\, 2\\pi`} />
            </div>
          </div>
        )
      },
      {
        id: 87,
        title: 'Задача 87',
        mathA: '\\log_3 \\left(\\sqrt{2}\\cos\\left(\\frac{\\pi}{2} - x\\right) + \\sin 2x + 81\\right) = 4',
        mathB: '\\left[ \\pi; \\, \\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как по формуле приведения</span>
              <InlineMath math={`\\cos\\left(\\frac{\\pi}{2} - x\\right) = \\sin x`} />,
              <span>по определению логарифма получаем:</span>
            </div>
            <BlockMath math={`\\sqrt{2}\\sin x + \\sin 2x + 81 = 3^4 = 81 \\implies \\sqrt{2}\\sin x + \\sin 2x = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР (аргумент логарифма положителен) выполняется автоматически, так как выражение под логарифмом не может опуститься ниже</span>
              <InlineMath math={`81 - \\sqrt{2} - 1 > 0`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Используем формулу синуса двойного угла</span>
              <InlineMath math={`\\sin 2x = 2\\sin x \\cos x`} />:
            </div>
            <BlockMath math={`\\sin x(\\sqrt{2} + 2\\cos x) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\sin x = 0 \\implies x = \\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\cos x = -\\frac{\\sqrt{2}}{2} \\implies x = \\pm\\frac{3\\pi}{4} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[4,10]} roots={[4,5,8]} denominator={4} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`\\pi; \\, \\frac{5\\pi}{4}; \\, 2\\pi`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi k, \\, \\pm\\frac{3\\pi}{4} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\pi; \\, \\frac{5\\pi}{4}; \\, 2\\pi`} />
            </div>
          </div>
        )
      },
      {
        id: 88,
        title: 'Задача 88',
        mathA: '\\log_4 x \\cdot \\log_4 \\frac{x^2 - 1}{2} = \\log_4 \\frac{x(x^2 - 1)}{8}',
        mathB: '\\left[ \\log_3 4; \\, \\log_3 49 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`x > 0`} />
              <span>и</span>
              <InlineMath math={`x^2 - 1 > 0`} />,
              <span>то есть</span>
              <InlineMath math={`x > 1`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Обозначим</span>
              <InlineMath math={`a = \\log_4 x`} />,
              <InlineMath math={`b = \\log_4(x^2 - 1)`} />.
              <span>Преобразуем компоненты уравнения:</span>
            </div>
            <BlockMath math={`\\log_4 \\frac{x^2 - 1}{2} = \\log_4(x^2 - 1) - \\log_4 2 = b - 0{,}5`} />
            <BlockMath math={`\\log_4 \\frac{x(x^2 - 1)}{8} = \\log_4 x + \\log_4(x^2 - 1) - \\log_4 8 = a + b - 1{,}5`} />
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`a(b - 0{,}5) = a + b - 1{,}5 \\implies ab - 0{,}5a = a + b - 1{,}5 \\implies ab - 1{,}5a - b + 1{,}5 = 0`} />
            <p>Разложим левую часть на множители методом группировки:</p>
            <BlockMath math={`b(a - 1) - 1{,}5(a - 1) = 0 \\implies (a - 1)(b - 1{,}5) = 0`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`a = 1 \\implies \\log_4 x = 1 \\implies x = 4`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`b = 1{,}5 \\implies \\log_4(x^2 - 1) = 1{,}5 \\implies x^2 - 1 = 4^{1{,}5} = 8 \\implies x^2 = 9 \\implies x = \\pm 3`} />
            <p>С учётом ОГР <InlineMath math={`(x > 1)`} /> из второго случая остаётся только <InlineMath math={`x = 3`} />.</p>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, при помощи неравенств.</p>
            
            <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корня <InlineMath math={`x = 3`} />:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Сравним с левой границей: так как</span>
                  <InlineMath math={`3^1 = 3 < 4`} />,
                  <span>то</span>
                  <InlineMath math={`1 < \\log_3 4`} />.
                  <span>Поскольку</span>
                  <InlineMath math={`3^3 = 27 > 4`} />,
                  <span>то</span>
                  <InlineMath math={`\\log_3 4 < 3`} />.
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Сравним с правой границей: так как</span>
                  <InlineMath math={`3^3 = 27 < 49`} />,
                  <span>значит</span>
                  <InlineMath math={`3 < \\log_3 49`} />.
                </div>
                <p>Получаем верное двойное неравенство <InlineMath math={`\\log_3 4 < 3 < \\log_3 49`} />, корень принадлежит заданному отрезку.</p>
              </div>
  
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корня <InlineMath math={`x = 4`} />:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Сравним с правой границей: так как</span>
                  <InlineMath math={`3^4 = 81 > 49`} />,
                  <span>то</span>
                  <InlineMath math={`\\log_3 49 < 4`} />.
                </div>
                <p>Значит, корень <InlineMath math={`x = 4 > \\log_3 49`} /> лежит правее отрезка и не подходит.</p>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 3; \\, x = 4`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`3`} />
            </div>
          </div>
        )
      },
      {
        id: 89,
        title: 'Задача 89',
        mathA: '5^{2\\log_2^2(\\sin x)} = \\frac{5}{5^{\\log_2(\\sin x)}}',
        mathB: '\\left[ \\pi; \\, \\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`\\sin x > 0`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Преобразуем правую часть уравнения:</span>
              <InlineMath math={`\\frac{5}{5^{\\log_2(\\sin x)}} = 5^{1 - \\log_2(\\sin x)}`} />.
            </div>
            <p>Так как основания степеней равны, приравниваем показатели:</p>
            <BlockMath math={`2\\log_2^2(\\sin x) = 1 - \\log_2(\\sin x)`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\log_2(\\sin x)`} />.
              <span>Получаем квадратное уравнение:</span>
            </div>
            <BlockMath math={`2t^2 + t - 1 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 1 + 8 = 9`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{-1 \\pm 3}{4} \\implies t_1 = \\frac{1}{2}, \\quad t_2 = -1`} />
            <p>Выполним обратную замену:</p>
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <div className="flex flex-wrap items-center gap-1">
              <InlineMath math={`\\log_2(\\sin x) = \\frac{1}{2} \\implies \\sin x = \\sqrt{2}`} /> —
              <span>не подходит, так как</span>
              <InlineMath math={`\\sqrt{2} > 1`} />.
            </div>
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\log_2(\\sin x) = -1 \\implies \\sin x = \\frac{1}{2} \\implies x = \\frac{\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[6,15]} roots={[13]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим единственный корень:</span>
              <InlineMath math={`x = \\frac{13\\pi}{6}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{6} + 2\\pi k, \\, \\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{13\\pi}{6}`} />
            </div>
          </div>
        )
      },
      {
        id: 90,
        title: 'Задача 90',
        mathA: '2\\sin^2 x - \\cos(-x) - 1 = 0',
        mathB: '\\left[ -\\pi; \\, \\frac{\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как по свойству чётности</span>
              <InlineMath math={`\\cos(-x) = \\cos x`} />,
              <span>а также</span>
              <InlineMath math={`\\sin^2 x = 1 - \\cos^2 x`} />:
            </div>
            <BlockMath math={`2(1 - \\cos^2 x) - \\cos x - 1 = 0 \\implies 2\\cos^2 x + \\cos x - 1 = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\cos x`} />
              <span>(где</span>
              <InlineMath math={`-1 \\le t \\le 1`} />).
              <span>Получаем квадратное уравнение:</span>
            </div>
            <BlockMath math={`2t^2 + t - 1 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 1 + 8 = 9`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{-1 \\pm 3}{4} \\implies t_1 = \\frac{1}{2}, \\quad t_2 = -1`} />
            <p>Оба корня удовлетворяют условию ограничения переменной занижения. Выполним обратную замену:</p>
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\cos x = \\frac{1}{2} \\implies x = \\pm\\frac{\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\cos x = -1 \\implies x = \\pi + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-6,3]} roots={[-6,-2,2]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-\\pi; \\, -\\frac{\\pi}{3}; \\, \\frac{\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{3} + 2\\pi k, \\, \\pi + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\pi; \\, -\\frac{\\pi}{3}; \\, \\frac{\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 91,
        title: 'Задача 91',
        mathA: '81^{\\cos x} - 12 \\cdot 9^{\\cos x} + 27 = 0',
        mathB: '\\left[ -4\\pi; \\, -\\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`81 = 9^2`} />,
              <span>обозначим</span>
              <InlineMath math={`u = 9^{\\cos x}`} />
              <span>(где</span>
              <InlineMath math={`u > 0`} />):
            </div>
            <BlockMath math={`u^2 - 12u + 27 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 144 - 108 = 36`} /></p>
            <BlockMath math={`u_{1,2} = \\frac{12 \\pm 6}{2} \\implies u_1 = 9, \\quad u_2 = 3`} />
            <p>Выполним обратную замену:</p>
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`9^{\\cos x} = 9 \\implies \\cos x = 1 \\implies x = 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`9^{\\cos x} = 3 \\implies 3^{2\\cos x} = 3^1 \\implies 2\\cos x = 1 \\implies \\cos x = \\frac{1}{2}`} />
            <BlockMath math={`x = \\pm\\frac{\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-24,-15]} roots={[-24,-22]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-4\\pi`} />
              <span>и</span>
              <InlineMath math={`-\\frac{11\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`2\\pi k, \\, \\pm\\frac{\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-4\\pi; \\, -\\frac{11\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 92,
        title: 'Задача 92',
        mathA: '\\log_4(\\sin x + \\sin 2x + 16) = 2',
        mathB: '\\left[ -4\\pi; \\, -\\frac{5\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР (аргумент логарифма положителен) выполняется автоматически, так как</span>
              <InlineMath math={`|\\sin x + \\sin 2x| \\le 2`} />,
              <span>а выражение под логарифмом не может опуститься ниже</span>
              <InlineMath math={`16 - 2 = 14 > 0`} />.
            </div>
            <p>По определению логарифма получаем:</p>
            <BlockMath math={`\\sin x + \\sin 2x + 16 = 4^2 = 16 \\implies \\sin x + \\sin 2x = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Используем формулу синуса двойного угла</span>
              <InlineMath math={`\\sin 2x = 2\\sin x \\cos x`} />:
            </div>
            <BlockMath math={`\\sin x(1 + 2\\cos x) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\sin x = 0 \\implies x = \\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\cos x = -\\frac{1}{2} \\implies x = \\pm\\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-24,-15]} roots={[-24,-20,-18,-16]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-4\\pi; \\, -\\frac{10\\pi}{3}; \\, -3\\pi; \\, -\\frac{8\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi k, \\, \\pm\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-4\\pi; \\, -\\frac{10\\pi}{3}; \\, -3\\pi; \\, -\\frac{8\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 93,
        title: 'Задача 93',
        mathA: '3 \\cdot 9^{x+1} - 5 \\cdot 6^{x+1} + 8 \\cdot 2^{2x} = 0',
        mathB: '\\left[ -\\frac{\\pi}{2}; \\, \\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Приведём уравнение к степеням с одинаковыми показателями</span>
              <InlineMath math={`9^x, \\, 6^x, \\, 4^x`} />:
            </div>
            <BlockMath math={`3 \\cdot 9 \\cdot 9^x - 5 \\cdot 6 \\cdot 6^x + 8 \\cdot 4^x = 0 \\implies 27 \\cdot 9^x - 30 \\cdot 6^x + 8 \\cdot 4^x = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Разделим обе части уравнения на</span>
              <InlineMath math={`4^x \\neq 0`} />:
            </div>
            <BlockMath math={`27 \\cdot \\left(\\frac{9}{4}\\right)^x - 30 \\cdot \\left(\\frac{6}{4}\\right)^x + 8 = 0 \\implies 27 \\cdot \\left(\\frac{3}{2}\\right)^{2x} - 30 \\cdot \\left(\\frac{3}{2}\\right)^x + 8 = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\left(\\frac{3}{2}\\right)^x`} />
              <span>(где</span>
              <InlineMath math={`t > 0`} />).
              <span>Получаем квадратное уравнение:</span>
            </div>
            <BlockMath math={`27t^2 - 30t + 8 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 900 - 864 = 36`} /></p>
            <BlockMath math={`t_{1,2} = \\frac{30 \\pm 6}{54} \\implies t_1 = \\frac{2}{3}, \\quad t_2 = \\frac{4}{9}`} />
            <p>Выполним обратную замену:</p>
            <div className="space-y-2 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <p>1) <InlineMath math={`\\left(\\frac{3}{2}\\right)^x = \\frac{2}{3} = \\left(\\frac{3}{2}\\right)^{-1} \\implies x = -1`} /></p>
              <p>2) <InlineMath math={`\\left(\\frac{3}{2}\\right)^x = \\frac{4}{9} = \\left(\\frac{3}{2}\\right)^{-2} \\implies x = -2`} /></p>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие заданному промежутку, при помощи точных аналитических неравенств.</p>
            
            <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корня <InlineMath math={`x_1 = -1`} />:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Сравним с левой границей промежутка: так как</span>
                  <InlineMath math={`3 > 2`} />,
                  <span>то выполняется строгое неравенство</span>
                  <InlineMath math={`\\frac{3}{2} > 1 \\implies \\frac{\\pi}{2} > 1 \\implies -1 > -\\frac{\\pi}{2}`} />.
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Сравним с правой границей: очевидно, что</span>
                  <InlineMath math={`-1 < \\pi`} />.
                </div>
                <p>Получаем верное точное неравенство <InlineMath math={`-\\frac{\\pi}{2} < -1 < \\pi`} />, следовательно, корень принадлежит промежутку.</p>
              </div>
  
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корня <InlineMath math={`x_2 = -2`} />:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Сравним с левой границей промежутка: так как</span>
                  <InlineMath math={`4 > 3`} />,
                  <span>то выполняется строгое неравенство</span>
                  <InlineMath math={`2 > \\frac{\\pi}{2} \\implies -2 < -\\frac{\\pi}{2}`} />.
                </div>
                <p>Значит, корень <InlineMath math={`x_2 = -2`} /> лежит левее левой границы промежутка и не подходит.</p>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = -1; \\, x = -2`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-1`} />
            </div>
          </div>
        )
      },
      {
        id: 94,
        title: 'Задача 94',
        mathA: '\\log_5(x^2 - 4x) = 1',
        mathB: '\\left[ \\log_3 0{,}1; \\, \\log_3 10 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`x^2 - 4x > 0 \\iff x(x - 4) > 0 \\iff x < 0 \\quad \\text{или} \\quad x > 4`} />.
            </div>
            <p>По определению логарифма перейдём к квадратному уравнению:</p>
            <BlockMath math={`x^2 - 4x = 5^1 \\implies x^2 - 4x - 5 = 0`} />
            <p>Разложим на множители:</p>
            <BlockMath math={`(x - 5)(x + 1) = 0 \\implies x_1 = 5, \\quad x_2 = -1`} />
            <p>Оба корня удовлетворяют ОГР.</p>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, при помощи неравенств.</p>
            
            <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Оценим границы отрезка:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>1) Левая граница: так как</span>
                  <InlineMath math={`\\frac{1}{27} < 0{,}1 < \\frac{1}{9}`} />,
                  <span>то</span>
                  <InlineMath math={`-3 = \\log_3 \\frac{1}{27} < \\log_3 0{,}1 < \\log_3 \\frac{1}{9} = -2`} />.
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span>2) Правая граница: так как</span>
                  <InlineMath math={`9 < 10 < 27`} />,
                  <span>то</span>
                  <InlineMath math={`2 = \\log_3 9 < \\log_3 10 < \\log_3 27 = 3`} />.
                </div>
              </div>
  
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корня <InlineMath math={`x_2 = -1`} />:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Так как</span>
                  <InlineMath math={`-1 > -2 > \\log_3 0{,}1`} />,
                  <span>а также</span>
                  <InlineMath math={`-1 < 2 < \\log_3 10`} />,
                  <span>выполняется двойное неравенство:</span>
                </div>
                <BlockMath math={`\\log_3 0{,}1 < -1 < \\log_3 10`} />
                <p>Следовательно, корень <InlineMath math={`x_2 = -1`} /> принадлежит заданному отрезку.</p>
              </div>
  
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корня <InlineMath math={`x_1 = 5`} />:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Так как</span>
                  <InlineMath math={`5 > 3 > \\log_3 10`} />,
                  <span>получаем:</span>
                  <InlineMath math={`5 > \\log_3 10`} />.
                </div>
                <p>Корень <InlineMath math={`x_1 = 5`} /> лежит правее отрезка и не подходит.</p>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 5; \\, x = -1`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-1`} />
            </div>
          </div>
        )
      },
      {
        id: 95,
        title: 'Задача 95',
        mathA: '\\frac{1}{\\cos^2 x} - \\frac{3}{\\cos x} + 2 = 0',
        mathB: '\\left[ -3\\pi; \\, -\\frac{3\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`\\cos x \\neq 0`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\frac{1}{\\cos x}`} />
              <span>(где</span>
              <InlineMath math={`|t| \\ge 1`} />).
              <span>Получаем квадратное уравнение:</span>
            </div>
            <BlockMath math={`t^2 - 3t + 2 = 0 \\implies (t - 1)(t - 2) = 0`} />
            <p>Корни: <InlineMath math={`t_1 = 1, \\quad t_2 = 2`} />. Оба удовлетворяют условию ограничения переменной.</p>
            <p>Выполним обратную замену:</p>
            <div className="space-y-2 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <p>1) <InlineMath math={`\\frac{1}{\\cos x} = 1 \\implies \\cos x = 1 \\implies x = 2\\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
              <p>2) <InlineMath math={`\\frac{1}{\\cos x} = 2 \\implies \\cos x = \\frac{1}{2} \\implies x = \\pm\\frac{\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-18,-9]} roots={[-14,-12,-10]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-\\frac{7\\pi}{3}; \\, -2\\pi; \\, -\\frac{5\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`2\\pi k, \\, \\pm\\frac{\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{7\\pi}{3}; \\, -2\\pi; \\, -\\frac{5\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 96,
        title: 'Задача 96',
        mathA: '\\frac{\\cos x}{1 + \\sin x} = 1 - \\sin x',
        mathB: '\\left[ 2\\pi; \\, \\frac{7\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`\\sin x \\neq -1`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Домножим обе части на</span>
              <InlineMath math={`(1 + \\sin x) \\neq 0`} />:
            </div>
            <BlockMath math={`\\cos x = (1 - \\sin x)(1 + \\sin x) = 1 - \\sin^2 x = \\cos^2 x`} />
            <BlockMath math={`\\cos x - \\cos^2 x = 0 \\implies \\cos x (1 - \\cos x) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <div className="flex flex-wrap items-center gap-1">
              <InlineMath math={`\\cos x = 1 \\implies x = 2\\pi k, \\quad k \\in \\mathbb{Z}`} />.
              <span>При этом</span>
              <InlineMath math={`\\sin x = 0 \\neq -1`} /> — <span>подходит.</span>
            </div>
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <div className="flex flex-wrap items-center gap-1">
              <InlineMath math={`\\cos x = 0 \\implies x = \\frac{\\pi}{2} + \\pi k, \\quad k \\in \\mathbb{Z}`} />.
              <span>Из этой серии при</span>
              <InlineMath math={`\\sin x = -1`} />
              <span>(то есть при</span>
              <InlineMath math={`x = -\\frac{\\pi}{2} + 2\\pi k`} stroke="currentColor" />)
              <span>нарушается ОГР — эти значения исключаются. Остаётся только:</span>
            </div>
            <BlockMath math={`x = \\frac{\\pi}{2} + 2\\pi k, \\quad k \\in \\mathbb{Z} \\quad (\\text{где } \\sin x = 1)`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[4,7]} roots={[4,5]} denominator={2} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`2\\pi`} />
              <span>и</span>
              <InlineMath math={`\\frac{5\\pi}{2}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`2\\pi k, \\, \\frac{\\pi}{2} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`2\\pi; \\, \\frac{5\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 97,
        title: 'Задача 97',
        mathA: '3 \\cdot 9^{x-0{,}5} - 7 \\cdot 6^x + 3 \\cdot 4^{x+1} = 0',
        mathB: '\\left[ 2; \\, 3 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`9^{x-0{,}5} = \\frac{9^x}{3}`} />
              <span>и</span>
              <InlineMath math={`4^{x+1} = 4 \\cdot 4^x`} />,
              <span>перепишем уравнение:</span>
            </div>
            <BlockMath math={`9^x - 7 \\cdot 6^x + 12 \\cdot 4^x = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Разделим обе части на</span>
              <InlineMath math={`4^x \\neq 0`} />:
            </div>
            <BlockMath math={`\\left(\\frac{9}{4}\\right)^x - 7 \\cdot \\left(\\frac{6}{4}\\right)^x + 12 = 0 \\implies \\left(\\frac{3}{2}\\right)^{2x} - 7 \\cdot \\left(\\frac{3}{2}\\right)^x + 12 = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\left(\\frac{3}{2}\\right)^x`} />
              <span>(где</span>
              <InlineMath math={`t > 0`} />).
              <span>Получаем квадратное уравнение:</span>
            </div>
            <BlockMath math={`t^2 - 7t + 12 = 0 \\implies (t - 3)(t - 4) = 0`} />
            <p>Корни: <InlineMath math={`t_1 = 3, \\quad t_2 = 4`} />. Оба удовлетворяют условию ограничения переменной.</p>
            <p>Выполним обратную замену:</p>
            <div className="space-y-2 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <p>1) <InlineMath math={`\\left(\\frac{3}{2}\\right)^x = 3 \\implies x = \\log_{3/2} 3`} /></p>
              <p>2) <InlineMath math={`\\left(\\frac{3}{2}\\right)^x = 4 \\implies x = \\log_{3/2} 4`} /></p>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку, при помощи строгих аналитических неравенств.</p>
            
            <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корня <InlineMath math={`x_1 = \\log_{3/2} 3`} />:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Сравним с границами: так как</span>
                  <InlineMath math={`\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4} = 2{,}25 < 3`} />,
                  <span>то</span>
                  <InlineMath math={`\\log_{3/2} 3 > 2`} />.
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Так как</span>
                  <InlineMath math={`\\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8} = 3{,}375 > 3`} />,
                  <span>то</span>
                  <InlineMath math={`\\log_{3/2} 3 < 3`} />.
                </div>
                <p>Получаем верное точное неравенство <InlineMath math={`2 < \\log_{3/2} 3 < 3`} />, следовательно, корень принадлежит отрезку.</p>
              </div>
  
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для корня <InlineMath math={`x_2 = \\log_{3/2} 4`} />:</span>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Сравним с правой границей отрезка: так как</span>
                  <InlineMath math={`\\left(\\frac{3}{2}\\right)^3 = 3{,}375 < 4`} />,
                  <span>то выполняется строгое неравенство:</span>
                </div>
                <BlockMath math={`\\log_{3/2} 4 > 3`} />
                <p>Значит, корень лежит правее правой границы отрезка и не подходит.</p>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = \\log_{3/2} 3; \\, x = \\log_{3/2} 4`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\log_{3/2} 3`} />
            </div>
          </div>
        )
      },
      {
        id: 98,
        title: 'Задача 98',
        mathA: '21^{-\\sin x} = 3^{-\\sin x} \\cdot 7^{\\cos x}',
        mathB: '\\left[ -\\frac{3\\pi}{2}; \\, 0 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`21 = 3 \\cdot 7`} stroke="currentColor" />:
            </div>
            <BlockMath math={`3^{-\\sin x} \\cdot 7^{-\\sin x} = 3^{-\\sin x} \\cdot 7^{\\cos x}`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Разделим обе части на</span>
              <InlineMath math={`3^{-\\sin x} \\neq 0`} />:
            </div>
            <BlockMath math={`7^{-\\sin x} = 7^{\\cos x} \\implies -\\sin x = \\cos x \\implies \\tan x = -1`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Деление на</span>
              <InlineMath math={`\\cos x`} />
              <span>корректно: если</span>
              <InlineMath math={`\\cos x = 0`} />,
              <span>то из уравнения следует</span>
              <InlineMath math={`-\\sin x = 0`} />,
              <span>но тогда</span>
              <InlineMath math={`\\sin^2 x + \\cos^2 x = 0 \\neq 1`} />,
              <span>что невозможно. Значит,</span>
              <InlineMath math={`\\cos x \\neq 0`} />
              <span>автоматически.</span>
            </div>
            <BlockMath math={`x = -\\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-6,0]} roots={[-5,-1]} denominator={4} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-\\frac{5\\pi}{4}`} />
              <span>и</span>
              <InlineMath math={`-\\frac{\\pi}{4}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`-\\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{5\\pi}{4}; \\, -\\frac{\\pi}{4}`} />
            </div>
          </div>
        )
      },
      {
        id: 99,
        title: 'Задача 99',
        mathA: '\\left(1 - \\frac{2}{5}\\cos x\\right)^{6\\sin^2 x + 11\\cos x + 1} = 1',
        mathB: '\\left[ \\frac{\\pi}{2}; \\, 2\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Равенство</span>
              <InlineMath math={`a^b = 1`} />
              <span>возможно в следующих случаях: (1)</span>
              <InlineMath math={`a = 1`} />, <span>(2)</span>
              <InlineMath math={`b = 0`} /> <span>при</span> <InlineMath math={`a \\neq 0`} />, <span>(3)</span>
              <InlineMath math={`a = -1`} /> <span>при чётном целом</span> <InlineMath math={`b`} />.
            </div>
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`1 - \\frac{2}{5}\\cos x = 1 \\implies \\cos x = 0 \\implies x = \\frac{\\pi}{2} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`6\\sin^2 x + 11\\cos x + 1 = 0 \\implies 6(1 - \\cos^2 x) + 11\\cos x + 1 = 0`} />
            <BlockMath math={`-6\\cos^2 x + 11\\cos x + 7 = 0 \\implies 6\\cos^2 x - 11\\cos x - 7 = 0`} />
            <p>Дискриминант: <InlineMath math={`D = 121 + 168 = 289 = 17^2`} /></p>
            <BlockMath math={`\\cos x = \\frac{11 \\pm 17}{12} \\implies \\cos x = \\frac{7}{3} \\quad \\text{или} \\quad \\cos x = -\\frac{1}{2}`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Корень</span>
              <InlineMath math={`\\cos x = \\frac{7}{3}`} />
              <span>не подходит, так как больше 1. Остаётся:</span>
            </div>
            <BlockMath math={`\\cos x = -\\frac{1}{2} \\implies x = \\pm\\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Проверим условие</span>
              <InlineMath math={`a \\neq 0`} />
              <span>при</span>
              <InlineMath math={`\\cos x = -\\frac{1}{2}`} />:
              <InlineMath math={`a = 1 - \\frac{2}{5} \\cdot \\left(-\\frac{1}{2}\\right) = 1 + \\frac{1}{5} = \\frac{6}{5} \\neq 0`} /> — <span>подходит.</span>
            </div>
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 3:</p>
            <BlockMath math={`1 - \\frac{2}{5}\\cos x = -1 \\implies \\cos x = 5 \\implies \\text{решений нет.}`} />
            
            <p>Итоговые серии корней: <InlineMath math={`\\frac{\\pi}{2} + \\pi k, \\, \\pm\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />.</p>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[3,12]} roots={[3,4,8,9]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`\\frac{\\pi}{2}; \\, \\frac{2\\pi}{3}; \\, \\frac{4\\pi}{3}; \\, \\frac{3\\pi}{2}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + \\pi k, \\, \\pm\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{\\pi}{2}; \\, \\frac{2\\pi}{3}; \\, \\frac{4\\pi}{3}; \\, \\frac{3\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 100,
        title: 'Задача 100',
        mathA: '\\cos^2 2x - \\left(\\sin x + 2\\cos^2\\left(x + \\frac{\\pi}{4}\\right)\\right)\\cos 2x + 2\\sin x \\cos^2\\left(x + \\frac{\\pi}{4}\\right) = 0',
        mathB: '\\left[ 2\\pi; \\, \\frac{7\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Уравнение имеет вид</span>
              <InlineMath math={`A^2 - (b + c)A + bc = 0`} />,
              <span>где</span>
              <InlineMath math={`A = \\cos 2x, \\, b = \\sin x, \\, c = 2\\cos^2\\left(x + \\frac{\\pi}{4}\\right)`} />.
              <span>Раскладываем на множители:</span>
            </div>
            <BlockMath math={`(A - b)(A - c) = 0 \\implies (\\cos 2x - \\sin x)\\left(\\cos 2x - 2\\cos^2\\left(x + \\frac{\\pi}{4}\\right)\\right) = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Упростим выражение</span>
              <InlineMath math={`c`} />:
              <span>так как</span>
              <InlineMath math={`2\\cos^2 \\theta = 1 + \\cos 2\\theta`} />,
              <span>то</span>
              <InlineMath math={`2\\cos^2\\left(x + \\frac{\\pi}{4}\\right) = 1 + \\cos\\left(2x + \\frac{\\pi}{2}\\right) = 1 - \\sin 2x`} />.
            </div>
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1: <InlineMath math={`\\cos 2x = \\sin x`} /></p>
            <p>Используем <InlineMath math={`\\cos 2x = 1 - 2\\sin^2 x`} />:</p>
            <BlockMath math={`1 - 2\\sin^2 x = \\sin x \\implies 2\\sin^2 x + \\sin x - 1 = 0 \\implies (2\\sin x - 1)(\\sin x + 1) = 0`} />
            <BlockMath math={`\\sin x = \\frac{1}{2} \\implies x = \\frac{\\pi}{6} + 2\\pi k \\quad \\text{или} \\quad x = \\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
            <BlockMath math={`\\sin x = -1 \\implies x = -\\frac{\\pi}{2} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2: <InlineMath math={`\\cos 2x = 1 - \\sin 2x \\implies \\sin 2x + \\cos 2x = 1`} /></p>
            <div className="flex flex-wrap items-center gap-1">
              <span>По формуле вспомогательного угла:</span>
              <InlineMath math={`\\sqrt{2}\\sin\\left(2x + \\frac{\\pi}{4}\\right) = 1 \\implies \\sin\\left(2x + \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}`} />.
            </div>
            <BlockMath math={`2x + \\frac{\\pi}{4} = \\frac{\\pi}{4} + 2\\pi k \\implies x = \\pi k, \\quad k \\in \\mathbb{Z}`} />
            <BlockMath math={`2x + \\frac{\\pi}{4} = \\frac{3\\pi}{4} + 2\\pi k \\implies x = \\frac{\\pi}{4} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p>Итоговые серии корней: <InlineMath math={`\\pi k, \\, \\frac{\\pi}{4} + \\pi k, \\, \\frac{\\pi}{6} + 2\\pi k, \\, \\frac{5\\pi}{6} + 2\\pi k, \\, -\\frac{\\pi}{2} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />.</p>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[24,42]} roots={[24,26,27,34,36,39,42]} denominator={12} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`2\\pi; \\, \\frac{13\\pi}{6}; \\, \\frac{9\\pi}{4}; \\, \\frac{17\\pi}{6}; \\, 3\\pi; \\, \\frac{13\\pi}{4}; \\, \\frac{7\\pi}{2}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi k, \\, \\frac{\\pi}{4} + \\pi k, \\, \\frac{\\pi}{6} + 2\\pi k, \\, \\frac{5\\pi}{6} + 2\\pi k, \\, -\\frac{\\pi}{2} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`2\\pi; \\, \\frac{13\\pi}{6}; \\, \\frac{9\\pi}{4}; \\, \\frac{17\\pi}{6}; \\, 3\\pi; \\, \\frac{13\\pi}{4}; \\, \\frac{7\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 101,
        title: 'Задача 101',
        mathA: '\\sin^3 x + (1 + \\pi)\\sin^2 x + (\\pi - 2)\\sin x - 2\\pi = 0',
        mathB: '\\left( \\frac{\\pi}{3}; \\, 4\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\sin x`} />.
              <span>Получаем кубическое уравнение:</span>
            </div>
            <BlockMath math={`t^3 + (1 + \\pi)t^2 + (\\pi - 2)t - 2\\pi = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Проверим корень</span>
              <InlineMath math={`t = 1`} />:
              <InlineMath math={`1 + (1 + \\pi) + (\\pi - 2) - 2\\pi = 0`} /> — <span>подходит, значит,</span>
              <InlineMath math={`(t - 1)`} /> — <span>множитель.</span>
            </div>
            <p>Разделим многочлен на <InlineMath math={`(t - 1)`} /> по схеме Горнера:</p>
            <BlockMath math={`t^3 + (1 + \\pi)t^2 + (\\pi - 2)t - 2\\pi = (t - 1)(t^2 + (2 + \\pi)t + 2\\pi)`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Разложим квадратный трёхчлен:</span>
              <InlineMath math={`t^2 + (2 + \\pi)t + 2\\pi = (t + 2)(t + \\pi)`} />.
            </div>
            <p>Итоговое уравнение разлагается на множители:</p>
            <BlockMath math={`(t - 1)(t + 2)(t + \\pi) = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Корни:</span>
              <InlineMath math={`t_1 = 1, \\, t_2 = -2, \\, t_3 = -\\pi`} />.
              <span>Так как</span>
              <InlineMath math={`|t| \\le 1`} />
              <span>для</span>
              <InlineMath math={`t = \\sin x`} />,
              <span>корни</span>
              <InlineMath math={`t_2`} />
              <span>и</span>
              <InlineMath math={`t_3`} />
              <span>не подходят.</span>
            </div>
            <p>Обратная замена:</p>
            <BlockMath math={`\\sin x = 1 \\implies x = \\frac{\\pi}{2} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую промежутку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            {/* 🌌 ТЕХНОЛОГИЯ ЗАДАЧИ 61: ЧЕСТНЫЙ КРУГ ТЕГОМ CIRCLE И ЖЁСТКО ПАРАЛЛЕЛЬНЫЙ PATH ДЛЯ ХВОСТИКА */}
            <TrigCircle interval={[2,24]} roots={[3,15]} denominator={6} openStart />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`\\frac{\\pi}{2}`} />
              <span>и</span>
              <InlineMath math={`\\frac{5\\pi}{2}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{\\pi}{2}; \\, \\frac{5\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 102,
        title: 'Задача 102',
        mathA: '2\\cos^3 x - \\cos^2 x + 2\\cos x - 1 = 0',
        mathB: '\\left[ 2\\pi; \\, \\frac{7\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\cos x`} />.
              <span>Сгруппируем слагаемые:</span>
            </div>
            <BlockMath math={`t^2(2t - 1) + (2t - 1) = 0 \\implies (2t - 1)(t^2 + 1) = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`t^2 + 1 > 0`} />
              <span>при любом</span>
              <InlineMath math={`t`} />,
              <span>остаётся:</span>
            </div>
            <BlockMath math={`2t - 1 = 0 \\implies t = \\frac{1}{2} \\implies \\cos x = \\frac{1}{2}`} />
            <BlockMath math={`x = \\pm\\frac{\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезу, при помощи единичной окружности.</p>
            
            <TrigCircle interval={[12,21]} roots={[14]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Следовательно, на отрезке</span>
              <InlineMath math={`\\left[ 2\\pi; \\, \\frac{7\\pi}{2} \\right]`} />
              <span>лежит единственный корень:</span>
              <InlineMath math={`\\frac{7\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{7\\pi}{3}`} />
            </div>
          </div>
        )
      },
          {
        id: 103,
        title: 'Задача 103',
        mathA: '\\cos 2x + \\sqrt{3}\\sin\\left(\\frac{\\pi}{2} + x\\right) + 1 = 0',
        mathB: '\\left[ -3\\pi; \\, -\\frac{3\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как по формуле приведения</span>
              <InlineMath math={`\\sin\\left(\\frac{\\pi}{2} + x\\right) = \\cos x`} />,
              <span>а косинус двойного угла равен</span>
              <InlineMath math={`\\cos 2x = 2\\cos^2 x - 1`} />:
            </div>
            <BlockMath math={`2\\cos^2 x - 1 + \\sqrt{3}\\cos x + 1 = 0 \\implies 2\\cos^2 x + \\sqrt{3}\\cos x = 0`} />
            <p>Разложим левую часть на множители:</p>
            <BlockMath math={`\\cos x (2\\cos x + \\sqrt{3}) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\cos x = 0 \\implies x = \\frac{\\pi}{2} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\cos x = -\\frac{\\sqrt{3}}{2} \\implies x = \\pm\\frac{5\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-18,-9]} roots={[-17,-15,-9]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-\\frac{5\\pi}{2}; \\, -\\frac{17\\pi}{6}; \\, -\\frac{3\\pi}{2}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + \\pi k, \\, \\pm\\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{5\\pi}{2}; \\, -\\frac{17\\pi}{6}; \\, -\\frac{3\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 104,
        title: 'Задача 104',
        mathA: '2\\cos x - 2\\sqrt{3}\\cos(-x) - 4\\sin^2 x = \\sqrt{3} - 4',
        mathB: '\\left[ 2\\pi; \\, \\frac{7\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как по свойству чётности</span>
              <InlineMath math={`\\cos(-x) = \\cos x`} />,
              <span>а также</span>
              <InlineMath math={`\\sin^2 x = 1 - \\cos^2 x`} />:
            </div>
            <BlockMath math={`2\\cos x - 2\\sqrt{3}\\cos x - 4(1 - \\cos^2 x) = \\sqrt{3} - 4`} />
            <BlockMath math={`4\\cos^2 x + 2(1 - \\sqrt{3})\\cos x - \\sqrt{3} = 0`} />
            <p>Замена: <InlineMath math={`t = \\cos x`} /> (где <InlineMath math={`-1 \\le t \\le 1`} />). Получаем квадратное уравнение:</p>
            <BlockMath math={`4t^2 + 2(1 - \\sqrt{3})t - \\sqrt{3} = 0`} />
            <p>Вычислим дискриминант:</p>
            <BlockMath math={`D = 4(1 - \\sqrt{3})^2 + 16\\sqrt{3} = 4(4 - 2\\sqrt{3}) + 16\\sqrt{3} = 16 + 8\\sqrt{3}`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Заметим, что выражение под корнем сворачивается в полный квадрат:</span>
              <InlineMath math={`16 + 8\\sqrt{3} = (2 + \\sqrt{3})^2`} />,
              <span>поэтому</span>
              <InlineMath math={`\\sqrt{D} = 2 + \\sqrt{3}`} />.
            </div>
            <BlockMath math={`t_{1,2} = \\frac{-2(1 - \\sqrt{3}) \\pm (2 + \\sqrt{3})}{8} = \\frac{(2\\sqrt{3} - 2) \\pm (2 + \\sqrt{3})}{8}`} />
            <BlockMath math={`t_1 = \\frac{4\\sqrt{3}}{8} = \\frac{\\sqrt{3}}{2}, \\quad t_2 = \\frac{-4}{8} = -\\frac{1}{2}`} />
            <p>Оба корня удовлетворяют условию ограничения переменной. Выполним обратную замену:</p>
            <div className="space-y-2 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <p>1) <InlineMath math={`\\cos x = \\frac{\\sqrt{3}}{2} \\implies x = \\pm\\frac{\\pi}{6} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
              <p>2) <InlineMath math={`\\cos x = -\\frac{1}{2} \\implies x = \\pm\\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} /></p>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[12,21]} roots={[13,16,20]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`\\frac{13\\pi}{6}; \\, \\frac{8\\pi}{3}; \\, \\frac{10\\pi}{3}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{6} + 2\\pi k, \\, \\pm\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{13\\pi}{6}; \\, \\frac{8\\pi}{3}; \\, \\frac{10\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 105,
        title: 'Задача 105',
        mathA: '2\\cos x - \\sqrt{3}\\sin^2 x = 2\\cos^3 x',
        mathB: '\\left[ -\\frac{7\\pi}{2}; \\, -2\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\sin^2 x = 1 - \\cos^2 x`} stroke="currentColor" />:
            </div>
            <BlockMath math={`2\\cos x - \\sqrt{3}(1 - \\cos^2 x) = 2\\cos^3 x \\implies 2\\cos^3 x - \\sqrt{3}\\cos^2 x - 2\\cos x + \\sqrt{3} = 0`} />
            <p>Замена: <InlineMath math={`t = \\cos x`} />. Сгруппируем слагаемые:</p>
            <BlockMath math={`t^2(2t - \\sqrt{3}) - (2t - \\sqrt{3}) = 0 \\implies (2t - \\sqrt{3})(t^2 - 1) = 0`} />
            <p>Корни уравнения: <InlineMath math={`t_1 = \\frac{\\sqrt{3}}{2}, \\, t_2 = 1, \\, t_3 = -1`} />. Все они подходят по модулю. Обратная замена:</p>
            <div className="space-y-2 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <p>1) <InlineMath math={`\\cos x = \\frac{\\sqrt{3}}{2} \\implies x = \\pm\\frac{\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} /></p>
              <p>2) <InlineMath math={`\\cos x = 1 \\implies x = 2\\pi k, \\, k \\in \\mathbb{Z}`} /></p>
              <p>3) <InlineMath math={`\\cos x = -1 \\implies x = \\pi + 2\\pi k, \\, k \\in \\mathbb{Z}`} /></p>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            <TrigCircle interval={[-21,-12]} roots={[-18,-13,-12]} denominator={6} />
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`-3\\pi; \\, -\\frac{13\\pi}{6}; \\, -2\\pi`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`2\\pi k, \\, \\pi + 2\\pi k, \\, \\pm\\frac{\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-3\\pi; \\, -\\frac{13\\pi}{6}; \\, -2\\pi`} />
            </div>
          </div>
        )
      },
      {
        id: 106,
        title: 'Задача 106',
        mathA: '\\sin x \\cdot \\left(\\frac{\\sin x}{\\cos x} + \\frac{1}{3}\\right) = \\sqrt{3} \\cdot \\left(\\sin x + \\frac{1}{3}\\cos x\\right)',
        mathB: '\\left[ -2\\pi; \\, \\frac{3\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <p>ОДЗ <InlineMath math="\cos x \neq 0" />.</p>
            <p>Раскроем скобки в обеих частях уравнения:</p>
            {/* 👍 ОПЕЧАТКА ИСПРАВЛЕНА: \frac восстановлен полностью */}
            <BlockMath math={`\\frac{\\sin^2 x}{\\cos x} + \\frac{\\sin x}{3} = \\sqrt{3}\\sin x + \\frac{\\sqrt{3}}{3}\\cos x`} />
            <p>Перенесём всё влево и сгруппируем слагаемые:</p>
            <BlockMath math={`\\sin x \\left(\\frac{\\sin x}{\\cos x} - \\sqrt{3}\\right) + \\frac{1}{3}(\\sin x - \\sqrt{3}\\cos x) = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\frac{\\sin x}{\\cos x} - \\sqrt{3} = \\frac{\\sin x - \\sqrt{3}\\cos x}{\\cos x}`} />,
              <span>вынесем общий числитель:</span>
            </div>
            <BlockMath math={`(\\sin x - \\sqrt{3}\\cos x)\\left(\\frac{\\sin x}{\\cos x} + \\frac{1}{3}\\right) = 0 \\implies (\\sin x - \\sqrt{3}\\cos x)\\left(\\operatorname{tg} x + \\frac{1}{3}\\right) = 0`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\sin x = \\sqrt{3}\\cos x \\implies \\operatorname{tg} x = \\sqrt{3} \\implies x = \\frac{\\pi}{3} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\operatorname{tg} x = -\\frac{1}{3} \\implies x = -\\operatorname{arctg} \\frac{1}{3} + \\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку <InlineMath math={`\\left[ -2\\pi; \\, \\frac{3\\pi}{2} \\right]`} />, при помощи точных числовых неравенств.</p>
            <p>Для удобства при оценке вспомним, что для острого угла выполняется: <InlineMath math={`0 < \\operatorname{arctg} \\frac{1}{3} < \\frac{\\pi}{4}`} />.</p>
  
            <div className="space-y-4 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для серии решений <InlineMath math={`x = \\frac{\\pi}{3} + \\pi k`} />:</span>
                <p>Составим двойное неравенство: <InlineMath math={`-2\\pi \\le \\frac{\\pi}{3} + \\pi k \\le \\frac{3\\pi}{2}`} /></p>
                <p>Разделим на <InlineMath math={`\\pi`} /> и вычтем <InlineMath math={`\\frac{1}{3}`} />: <InlineMath math={`-2 - \\frac{1}{3} \\le k \\le \\frac{3}{2} - \\frac{1}{3} \\implies -\\frac{7}{3} \\le k \\le \\frac{7}{6}`} /></p>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Целые значения</span>
                  <InlineMath math={`k \\in \\{-2; \\, -1; \\, 0; \\, 1\\}`} />.
                  <span>Получаем корни:</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-1 font-mono text-xs text-slate-600 dark:text-slate-400">
                  <div>при k = -2: x = -5π/3</div>
                  <div>при k = -1: x = -2π/3</div>
                  <div>при k = 0: x = π/3</div>
                  <div>при k = 1: x = 4π/3</div>
                </div>
              </div>
  
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для серии решений <InlineMath math={`x = -\\operatorname{arctg} \\frac{1}{3} + \\pi k`} />:</span>
                <p>Составим двойное неравенство: <InlineMath math={`-2\\pi \\le -\\operatorname{arctg} \\frac{1}{3} + \\pi k \\le \\frac{3\\pi}{2}`} /></p>
                <p>Разделим на <InlineMath math={`\\pi`} /> и прибавим <InlineMath math={`\\frac{\\operatorname{arctg} \\frac{1}{3}}{\\pi}`} />: <InlineMath math={`-2 + \\frac{\\operatorname{arctg} \\frac{1}{3}}{\\pi} \\le k \\le \\frac{3}{2} + \\frac{\\operatorname{arctg} \\frac{1}{3}}{\\pi}`} /></p>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Так как дробь с арктангенсом положительна и строго меньше</span>
                  <InlineMath math={`\\frac{1}{4}`} />,
                  <span>левая граница строго больше</span>
                  <InlineMath math={`-2`} />,
                  <span>а правая строго меньше</span>
                  <InlineMath math={`1{,}75`} />.
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Целые значения</span>
                  <InlineMath math={`k \\in \\{-1; \\, 0; \\, 1\\}`} />.
                  <span>Получаем корни:</span>
                </div>
                <div className="grid grid-cols-1 gap-1 mt-1 font-mono text-xs text-slate-600 dark:text-slate-400">
                  <div>при k = -1: x = -π - arctan(1/3)</div>
                  <div>при k = 0: x = -arctan(1/3)</div>
                  <div>при k = 1: x = π - arctan(1/3)</div>
                </div>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{3} + \\pi k, \\, -\\operatorname{arctg} \\frac{1}{3} + \\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{5\\pi}{3}; \\, -\\pi - \\operatorname{arctg} \\frac{1}{3}; \\, -\\frac{2\\pi}{3}; \\, -\\operatorname{arctg} \\frac{1}{3}; \\, \\frac{\\pi}{3}; \\, \\pi - \\operatorname{arctg} \\frac{1}{3}; \\, \\frac{4\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 107,
        title: 'Задача 107',
        mathA: '\\cos 6x \\cdot \\sin \\frac{5x}{6} = 1',
        mathB: '\\left[ 7; \\, 50 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`|\\cos 6x| \\le 1`} />
              <span>и</span>
              <InlineMath math={`\\left|\\sin \\frac{5x}{6}\\right| \\le 1`} />,
              <span>произведение равно 1 только тогда, когда оба множителя равны 1 одновременно, либо оба равны -1 одновременно.</span>
            </div>
  
            {/* 👍 ИСПРАВЛЕНО: Закрыты все JSX-теги InlineMath */}
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">
              Случай А: <InlineMath math={`\\cos 6x = 1`} /> и <InlineMath math={`\\sin \\frac{5x}{6} = 1`} />
            </p>
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Из первого условия:</span>
              <InlineMath math={`6x = 2\\pi n \\implies x = \\frac{\\pi n}{3}, \\, n \\in \\mathbb{Z}`} />.
              <span>Из второго:</span>
              <InlineMath math={`\\frac{5x}{6} = \\frac{\\pi}{2} + 2\\pi m \\implies x = \\frac{3\\pi}{5} + \\frac{12\\pi m}{5}, \\, m \\in \\mathbb{Z}`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Приравнивая, получаем диофантово уравнение:</span>
              <InlineMath math={`\\frac{n}{3} = \\frac{3 + 12m}{5} \\implies 5n - 36m = 9`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Его общее решение в целых числах:</span>
              <InlineMath math={`n = 9 + 36t, \\, t \\in \\mathbb{Z}`} />,
              <span>откуда выразим единый корень:</span>
            </div>
            <BlockMath math={`x = \\frac{\\pi n}{3} = \\frac{\\pi(9 + 36t)}{3} = 3\\pi + 12\\pi t, \\quad t \\in \\mathbb{Z}`} />
  
            {/* 👍 ИСПРАВЛЕНО: Закрыты все JSX-теги InlineMath */}
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">
              Случай Б: <InlineMath math={`\\cos 6x = -1`} /> и <InlineMath math={`\\sin \\frac{5x}{6} = -1`} />
            </p>
            <BlockMath math="x=\frac{(2n+1)\pi}{6}=\frac{(-3+12m)\pi}{5} \implies 5(2n+1)=6(-3+12m)" />
            <p>Левая часть нечётная, правая чётная. Решений в этом случае нет.</p>
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Итого общее решение:</span>
              <InlineMath math={`x = 3\\pi + 12\\pi t, \\, t \\in \\mathbb{Z}`} />
              <span>(проверка: при</span>
              <InlineMath math={`t = 0 \\implies x = 3\\pi`} />
              <span>имеем</span>
              <InlineMath math={`\\cos 18\\pi = 1, \\, \\sin \\frac{15\\pi}{6} = \\sin \\frac{5\\pi}{2} = 1`} /> — <span>верно).</span>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <BlockMath math="7\le 3\pi+12\pi t\le 50" />
            <p>При <InlineMath math="t\le -1" /> получаем <InlineMath math="x\le -9\pi<7" />. При <InlineMath math="t\ge 2" /> имеем <InlineMath math="x\ge 27\pi>50" />.</p>
            <p>Из <InlineMath math="3<\pi<\frac{22}{7}" /> следует <InlineMath math="7<3\pi<15\pi<50" />. Подходят <InlineMath math="t=0" /> и <InlineMath math="t=1" />.</p>

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`3\\pi + 12\\pi t, \\, t \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`3\\pi; \\, 15\\pi`} />
            </div>
          </div>
        )
      },
      {
        id: 108,
        title: 'Задача 108',
        mathA: '\\sin x = \\cos^2 x + \\frac{1}{2}\\log_{\\sqrt{2}}\\left(\\frac{1}{\\sin(\\pi/6)}\\right)',
        mathB: '\\left[ -\\frac{\\pi}{2}; \\, \\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Так как</span>
              <InlineMath math={`\\sin\\frac{\\pi}{6} = \\frac{1}{2}`} />,
              <span>то</span>
              <InlineMath math={`\\frac{1}{\\sin(\\pi/6)} = 2`} stroke="currentColor" />.
              <span>Упростим логарифмическую часть:</span>
              <InlineMath math={`\\frac{1}{2}\\log_{\\sqrt{2}} 2 = \\frac{1}{2} \\cdot 2 = 1`} />.
            </div>
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`\\sin x = \\cos^2 x + 1 = (1 - \\sin^2 x) + 1 = 2 - \\sin^2 x`} />
            <BlockMath math={`\\sin^2 x + \\sin x - 2 = 0`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Замена:</span>
              <InlineMath math={`t = \\sin x`} />
              <span>(где</span>
              <InlineMath math={`-1 \\le t \\le 1`} />).
              <span>Получаем квадратное уравнение:</span>
            </div>
            <BlockMath math={`t^2 + t - 2 = 0 \\implies (t + 2)(t - 1) = 0`} />
            <p>Корень <InlineMath math={`t = -2`} /> не подходит, так как <InlineMath math={`|t| > 1`} />. Остаётся <InlineMath math={`t = 1`} />:</p>
            <BlockMath math={`\\sin x = 1 \\implies x = \\frac{\\pi}{2} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку <InlineMath math={`\\left[ -\\frac{\\pi}{2}; \\, \\pi \\right]`} />, при помощи неравенств.</p>
            <p>Составим неравенство для серии корней: <InlineMath math={`-\\frac{\\pi}{2} \\le \\frac{\\pi}{2} + 2\\pi k \\le \\pi`} /></p>
  
            <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• При k = 0:</span>
                <InlineMath math={`x = \\frac{\\pi}{2}`} /> — <span>принадлежит отрезку, подходит.</span>
              </div>
  
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• При k = -1:</span>
                <InlineMath math={`x = \\frac{\\pi}{2} - 2\\pi = -\\frac{3\\pi}{2}`} />.
                <span>Так как</span>
                <InlineMath math={`-\\frac{3\\pi}{2} < -\\frac{\\pi}{2}`} />,
                <span>значение меньше левой границы — не подходит.</span>
              </div>
  
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• При k = 1:</span>
                <InlineMath math={`x = \\frac{\\pi}{2} + 2\\pi = \\frac{5\\pi}{2}`} />.
                <span>Так как</span>
                <InlineMath math={`\\frac{5\\pi}{2} > \\pi`} />,
                <span>значение больше правой границы — не подходит.</span>
              </div>
            </div>
  
            <TrigCircle interval={[-1,2]} roots={[1]} denominator={2} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{\\pi}{2}`} />
            </div>
          </div>
        )
      },
      {
        id: 109,
        title: 'Задача 109',
        mathA: '\\cos 9x - \\cos 7x = \\sqrt{2}\\sin x',
        mathB: '\\left[ -\\frac{3\\pi}{2}; \\, -\\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>По формуле разности косинусов:</span>
              <InlineMath math={`\\cos 9x - \\cos 7x = -2\\sin\\left(\\frac{9x + 7x}{2}\\right)\\sin\\left(\\frac{9x - 7x}{2}\\right) = -2\\sin 8x \\sin x`} />.
            </div>
            <p>Уравнение принимает вид:</p>
            <BlockMath math={`-2\\sin 8x \\sin x = \\sqrt{2}\\sin x \\implies \\sin x (2\\sin 8x + \\sqrt{2}) = 0`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 1:</p>
            <BlockMath math={`\\sin x = 0 \\implies x = \\pi n, \\quad n \\in \\mathbb{Z}`} />
            
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай 2:</p>
            <BlockMath math={`\\sin 8x = -\\frac{\\sqrt{2}}{2}`} />
            <BlockMath math={`8x = -\\frac{\\pi}{4} + 2\\pi n \\quad \\text{или} \\quad 8x = -\\frac{3\\pi}{4} + 2\\pi n \\quad \\left(\\text{что эквивалентно } \\frac{5\\pi}{4} + 2\\pi n\\right)`} />
            <BlockMath math={`x = -\\frac{\\pi}{32} + \\frac{\\pi n}{4} \\quad \\text{или} \\quad x = -\\frac{3\\pi}{32} + \\frac{\\pi n}{4}, \\quad n \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку <InlineMath math={`\\left[ -\\frac{3\\pi}{2}; \\, -\\pi \\right]`} />, при помощи неравенств (прямым перебором целых значений <InlineMath math={`n`} />).</p>
  
            <div className="space-y-4 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для серии <InlineMath math={`x = \\pi n`} />:</span>
                <p>При <InlineMath math={`n = -1`} /> получаем корень <InlineMath math={`x = -\\pi`} /> — совпадает с правой границей отрезка, подходит.</p>
              </div>
  
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для серии <InlineMath math={`x = -\\frac{\\pi}{32} + \\frac{\\pi n}{4}`} />:</span>
                <p>Составим неравенство: <InlineMath math={`-\\frac{3\\pi}{2} \\le -\\frac{\\pi}{32} + \\frac{\\pi n}{4} \\le -\\pi \\implies -\\frac{3}{2} \\le -\\frac{1}{32} + \\frac{n}{4} \\le -1`} /></p>
                <p>Умножим на 32: <InlineMath math={`-48 \\le -1 + 8n \\le -32 \\implies -47 \\le 8n \\le -31 \\implies -5.875 \\le n \\le -3.875`} /></p>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Целые значения:</span>
                  <InlineMath math={`n = -5, \\, -4`} />.
                  <span>Корни:</span>
                  <InlineMath math={`x = -\\frac{41\\pi}{32}`} />
                  <span>и</span>
                  <InlineMath math={`x = -\\frac{33\\pi}{32}`} />.
                </div>
              </div>
  
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для серии <InlineMath math={`x = -\\frac{3\\pi}{32} + \\frac{\\pi n}{4}`} />:</span>
                <p>Составим неравенство: <InlineMath math={`-\\frac{3\\pi}{2} \\le -\\frac{3\\pi}{32} + \\frac{\\pi n}{4} \\le -\\pi \\implies -\\frac{3}{2} \\le -\\frac{3}{32} + \\frac{n}{4} \\le -1`} /></p>
                <p>Умножим на 32: <InlineMath math={`-48 \\le -3 + 8n \\le -32 \\implies -45 \\le 8n \\le -29 \\implies -5.625 \\le n \\le -3.625`} /></p>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Целые значения:</span>
                  <InlineMath math={`n = -5, \\, -4`} />.
                  <span>Корни:</span>
                  <InlineMath math={`x = -\\frac{43\\pi}{32}`} />
                  <span>и</span>
                  <InlineMath math={`x = -\\frac{35\\pi}{32}`} />.
                </div>
              </div>
            </div>
  
            <TrigCircle interval={[-48,-32]} roots={[-43,-41,-35,-33,-32]} denominator={32} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi n, \\, -\\frac{\\pi}{32} + \\frac{\\pi n}{4}, \\, -\\frac{3\\pi}{32} + \\frac{\\pi n}{4}, \\, n \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{43\\pi}{32}; \\, -\\frac{41\\pi}{32}; \\, -\\frac{35\\pi}{32}; \\, -\\frac{33\\pi}{32}; \\, -\\pi`} />
            </div>
          </div>
        )
      },
      {
        id: 110,
        title: 'Задача 110',
        mathA: '\\sqrt{3 - \\operatorname{tg}^2\\left(\\frac{3x}{2}\\right)} \\cdot \\sin x - \\cos x = 2',
        mathB: '\\left[ -17; \\, 2 \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Обозначим коэффициент</span>
              <InlineMath math={`A = \\sqrt{3 - \\operatorname{tg}^2\\left(\\frac{3x}{2}\\right)} \\ge 0`} />.
              <span>Из условия неотрицательности подкоренного выражения имеем</span>
              <InlineMath math={`A^2 \\le 3`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Применим неравенство Коши-Буняковского для векторов</span>
              <InlineMath math={`(A; \\, -1)`} />
              <span>и</span>
              <InlineMath math={`(\\sin x; \\, \\cos x)`} />:
            </div>
            <BlockMath math={`(A \\sin x - \\cos x)^2 \\le (A^2 + 1)(\\sin^2 x + \\cos^2 x) = A^2 + 1 \\le 3 + 1 = 4`} />
            <div className="flex flex-wrap items-center gap-1">
              <span>Значит, максимальное значение левой части равно 2, причём равенство достигается только тогда, когда одновременно выполнены два условия:</span>
              <InlineMath math={`A^2 = 3`} />
              <span>(иначе</span>
              <InlineMath math={`A^2 + 1 < 4`} />)
              <span>и векторы сонаправлены.</span>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Из равенства</span>
              <InlineMath math={`A^2 = 3`} />
              <span>следует:</span>
              <InlineMath math={`\\operatorname{tg}^2\\left(\\frac{3x}{2}\\right) = 0 \\implies \\frac{3x}{2} = \\pi n \\implies x = \\frac{2\\pi n}{3}, \\, n \\in \\mathbb{Z}`} />.
              <span>Тогда коэффициент</span>
              <InlineMath math={`A = \\sqrt{3}`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Условие сонаправленности векторов при</span>
              <InlineMath math={`A = \\sqrt{3}`} />
              <span>задаёт систему:</span>
              <InlineMath math={`\\sin x = \\frac{\\sqrt{3}}{2}`} />
              <span>и</span>
              <InlineMath math={`\\cos x = -\\frac{1}{2}`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Отсюда получаем базовое решение</span>
              <InlineMath math={`x = \\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />.
              <span>Проверим совместимость: при</span>
              <InlineMath math={`n = 3k + 1`} />
              <span>получаем</span>
              <InlineMath math={`x = \\frac{2\\pi(3k + 1)}{3} = 2\\pi k + \\frac{2\\pi}{3}`} /> —
              <span>условия согласованы автоматически.</span>
            </div>
            <BlockMath math={`x = \\frac{2\\pi}{3} + 2\\pi k, \\quad k \\in \\mathbb{Z}`} />
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <BlockMath math="-17\le \frac{2\pi}{3}+2\pi k\le 2" />
            <p>При <InlineMath math="k\ge 0" /> имеем <InlineMath math="x\ge \frac{2\pi}{3}>2" />. При <InlineMath math="k\le -4" /> получаем <InlineMath math="x\le -\frac{22\pi}{3}<-17" />.</p>
            <p>Так как <InlineMath math="\pi<\frac{22}{7}" />, получаем:</p>
            <BlockMath math="-17< -\frac{352}{21}< -\frac{16\pi}{3}< -\frac{10\pi}{3}< -\frac{4\pi}{3}<2" />
            <p>Подходят <InlineMath math="k=-3,-2,-1" />.</p>

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{16\\pi}{3}; \\, -\\frac{10\\pi}{3}; \\, -\\frac{4\\pi}{3}`} />
            </div>
          </div>
        )
      },
      {
        id: 111,
        title: 'Задача 111',
        mathA: '\\left|\\operatorname{ctg}^2 2x + 8\\sqrt{-\\operatorname{ctg} 2x} - 3\\right| = \\left|\\operatorname{ctg}^2 2x - 8\\sqrt{-\\operatorname{ctg} 2x} - 3\\right|',
        mathB: '\\left[ -\\frac{3\\pi}{4}; \\, \\pi \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>ОГР:</span>
              <InlineMath math={`\\sin 2x \\neq 0`} />
              <span>и</span>
              <InlineMath math={`\\operatorname{ctg} 2x \\le 0`} />.
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>Обозначим</span>
              <InlineMath math={`s = \\sqrt{-\\operatorname{ctg} 2x} \\ge 0`} />,
              <span>тогда</span>
              <InlineMath math={`\\operatorname{ctg} 2x = -s^2`} />.
              <span>Уравнение принимает вид:</span>
            </div>
            <BlockMath math={`|s^4 + 8s - 3| = |s^4 - 8s - 3|`} />
            <p>Равенство модулей означает, что подмодульные выражения равны или противоположны.</p>
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай А:</p>
            <BlockMath math={`s^4 + 8s - 3 = s^4 - 8s - 3 \\implies 16s = 0 \\implies s = 0`} />
  
            <p className="font-semibold text-sky-600 dark:text-purple-400 mt-2">Случай B:</p>
            <BlockMath math={`s^4 + 8s - 3 = -(s^4 - 8s - 3) \\implies 2s^4 = 6 \\implies s^4 = 3 \\implies s = \\sqrt[4]{3}`} />
            <span>(так как <InlineMath math={`s \\ge 0`} />).</span>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">Выполним обратную замену:</p>
            <div className="space-y-2 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для случая А:</span>
                <InlineMath math={`s = 0 \\implies \\operatorname{ctg} 2x = 0 \\implies 2x = \\frac{\\pi}{2} + \\pi n \\implies x = \\frac{\\pi}{4} + \\frac{\\pi n}{2}, \\, n \\in \\mathbb{Z}`} />.
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для случая B:</span>
                <InlineMath math={`s = \\sqrt[4]{3} \\implies \\operatorname{ctg} 2x = -\\sqrt{3} \\implies 2x = -\\frac{\\pi}{6} + \\pi n \\implies x = -\\frac{\\pi}{12} + \\frac{\\pi n}{2}, \\, n \\in \\mathbb{Z}`} />.
              </div>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку <InlineMath math={`\\left[ -\\frac{3\\pi}{4}; \\, \\pi \\right]`} />, при помощи строгих алгебраических неравенств.</p>
  
            <div className="space-y-4 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для серии <InlineMath math={`x = \\frac{\\pi}{4} + \\frac{\\pi n}{2}`} />:</span>
                <p>Составим неравенство: <InlineMath math={`-\\frac{3\\pi}{4} \\le \\frac{\\pi}{4} + \\frac{\\pi n}{2} \\le \\pi \\implies -\\frac{3}{4} \\le \\frac{1}{4} + \\frac{n}{2} \\le 1`} /></p>
                <p>Вычтем <InlineMath math={`\\frac{1}{4}`} /> и умножим на 2: <InlineMath math={`-1 \\le \\frac{n}{2} \\le \\frac{3}{4} \\implies -2 \\le n \\le 1{,}5`} />.</p>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Целые значения</span>
                  <InlineMath math={`n \\in \\{-2; \\, -1; \\, 0; \\, 1\\}`} />.
                  <span>Корни:</span>
                  <InlineMath math={`-\\frac{3\\pi}{4}; \\, -\\frac{\\pi}{4}; \\, \\frac{\\pi}{4}; \\, \\frac{3\\pi}{4}`} />.
                </div>
              </div>
  
              <div className="space-y-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для серии <InlineMath math={`x = -\\frac{\\pi}{12} + \\frac{\\pi n}{2}`} />:</span>
                <p>Составим неравенство: <InlineMath math={`-\\frac{3\\pi}{4} \\le -\\frac{\\pi}{12} + \\frac{\\pi n}{2} \\le \\pi \\implies -\\frac{9}{12} \\le -\\frac{1}{12} + \\frac{n}{2} \\le \\frac{12}{12}`} /></p>
                <p>Прибавим <InlineMath math={`\\frac{1}{12}`} /> и умножим на 2: <InlineMath math={`-\\frac{8}{12} \\le \\frac{n}{2} \\le \\frac{13}{12} \\implies -\\frac{4}{3} \\le n \\le \\frac{13}{6}`} />.</p>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Целые значения</span>
                  <InlineMath math={`n \\in \\{-1; \\, 0; \\, 1; \\, 2\\}`} />.
                  <span>Корни:</span>
                  <InlineMath math={`-\\frac{7\\pi}{12}; \\, -\\frac{\\pi}{12}; \\, \\frac{5\\pi}{12}; \\, \\frac{11\\pi}{12}`} />.
                </div>
              </div>
            </div>
  
            <TrigCircle interval={[-9,12]} roots={[-9,-7,-3,-1,3,5,9,11]} denominator={12} />

            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{4} + \\frac{\\pi n}{2}, \\, -\\frac{\\pi}{12} + \\frac{\\pi n}{2}, \\, n \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{3\\pi}{4}; \\, -\\frac{7\\pi}{12}; \\, -\\frac{\\pi}{4}; \\, -\\frac{\\pi}{12}; \\, \\frac{\\pi}{4}; \\, \\frac{5\\pi}{12}; \\, \\frac{3\\pi}{4}; \\, \\frac{11\\pi}{12}`} />
            </div>
          </div>
        )
      },
];
