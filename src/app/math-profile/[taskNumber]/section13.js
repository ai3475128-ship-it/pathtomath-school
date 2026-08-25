import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

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
              <p>2) <InlineMath math="\sin x - \sqrt{3}\cos x = 0" /> — разделим на <InlineMath math="\cos x \neq 0" />:</p>
              <BlockMath math="\operatorname{tg} x = \sqrt{3} \implies x = \frac{\pi}{3} + \pi k, \quad k \in \mathbb{Z}" />
            </div>
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>С помощью единичной тригонометрической окружности отберём корни на отрезке:</p>
            <BlockMath math="x_1 = \frac{\pi}{3} + \pi = \frac{4\pi}{3}, \quad x_2 = \frac{\pi}{3} + 2\pi = \frac{7\pi}{3}" />
            
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
            <p>Отберём корни, принадлежащие заданному отрезку, с помощью двойного неравенства.</p>
            
            <p className="font-medium text-xs text-slate-400">Для первой серии корней:</p>
            <BlockMath math={`-3\\pi \\le \\frac{2\\pi}{3} + 2\\pi k \\le -\\frac{3\\pi}{2} \\implies -3 \\le \\frac{2}{3} + 2k \\le -\\frac{3}{2}`} />
            <BlockMath math={`-\\frac{11}{3} \\le 2k \\le -\\frac{13}{6} \\implies -\\frac{11}{6} \\le k \\le -\\frac{13}{12} \\implies k = -1 \\implies x = -\\frac{4\\pi}{3}`} />
            
            <p className="font-medium text-xs text-slate-400">Для второй серии корней:</p>
            <BlockMath math={`-3\\pi \\le -\\frac{2\\pi}{3} + 2\\pi k \\le -\\frac{3\\pi}{2} \\implies -3 \\le -\\frac{2}{3} + 2k \\le -\\frac{3}{2}`} />
            <BlockMath math={`-\\frac{7}{3} \\le 2k \\le -\\frac{5}{6} \\implies -\\frac{7}{6} \\le k \\le -\\frac{5}{12} \\implies k = -1 \\implies x = -\\frac{8\\pi}{3}`} />
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{2\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{8\\pi}{3}; \\, -\\frac{4\\pi}{3}`} />
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
            <p>Отберём корни на отрезке с помощью двойного неравенства.</p>
            
            <p className="font-medium text-xs text-slate-400">Для первой серии корней:</p>
            <BlockMath math={`-4\\pi \\le \\frac{\\pi}{3} + 2\\pi k \\le -\\frac{5\\pi}{2} \\implies -4 \\le \\frac{1}{3} + 2k \\le -\\frac{5}{2}`} />
            <BlockMath math={`-\\frac{13}{3} \\le 2k \\le -\\frac{17}{6} \\implies -\\frac{13}{6} \\le k \\le -\\frac{17}{12} \\implies k = -2 \\implies x = -\\frac{11\\pi}{3}`} />
            
            <p className="font-medium text-xs text-slate-400">Для второй серии корней:</p>
            <BlockMath math={`-4\\pi \\le -\\frac{\\pi}{3} + 2\\pi k \\le -\\frac{5\\pi}{2} \\implies -4 \\le -\\frac{1}{3} + 2k \\le -\\frac{5}{2}`} />
            <BlockMath math={`-\\frac{11}{3} \\le 2k \\le -\\frac{13}{6} \\implies -\\frac{11}{6} \\le k \\le -\\frac{13}{12} \\implies k = -1 \\implies x = -\\frac{7\\pi}{3}`} />
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{3} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{11\\pi}{3}; \\, -\\frac{7\\pi}{3}`} />
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
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\sqrt{3}}{2} \\text{ для } \\cos x \\text{ даёт } \\pm\\frac{\\pi}{6} + 2\\pi k, \\, \\frac{\\pi}{2} + 2\\pi n, \\, k, n \\in \\mathbb{Z}`} />
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
            <p>Отберём корни, принадлежащие заданному отрезку, с помощью двойного неравенства.</p>
            
            <p className="font-medium text-xs text-slate-400">Для первой серии корней:</p>
            <BlockMath math={`-\\frac{7\\pi}{2} \\le \\frac{\\pi}{6} + 2\\pi k \\le -2\\pi \\implies -\\frac{7}{2} \\le \\frac{1}{6} + 2k \\le -2`} />
            <BlockMath math={`-\\frac{11}{3} \\le 2k \\le -\\frac{13}{6} \\implies -\\frac{11}{6} \\le k \\le -\\frac{13}{12} \\implies k = -1 \\implies x = -\\frac{11\\pi}{6}`} />
            
            <p className="font-medium text-xs text-slate-400">Для второй серии корней:</p>
            <BlockMath math={`-\\frac{7\\pi}{2} \\le \\frac{5\\pi}{6} + 2\\pi k \\le -2\\pi \\implies -\\frac{7}{2} \\le \\frac{5}{6} + 2k \\le -2`} />
            <BlockMath math={`-\\frac{13}{3} \\le 2k \\le -\\frac{17}{6} \\implies -\\frac{13}{6} \\le k \\le -\\frac{17}{12} \\implies k = -1 \\implies x = -\\frac{7\\pi}{6}`} />
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{6} + 2\\pi k, \\, \\frac{5\\pi}{6} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{11\\pi}{6}; \\, -\\frac{7\\pi}{6}`} />
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
            <BlockMath math={`x = \\frac{13\\pi}{6}; \\, \\frac{5\\pi}{2}`} />
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pm\\frac{\\pi}{6} + 2\\pi k, \\, \\frac{\\pi}{2} + 2\\pi n, \\, k, n \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{13\\pi}{6}; \\, \\frac{5\\pi}{2}`} />
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
            <BlockMath math={`x = -\\frac{5\\pi}{2}; \\, -\\frac{3\\pi}{2}; \\, -\\frac{7\\pi}{3}`} />
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{\\pi}{2} + \\pi k, \\, \\frac{\\pi}{3} + 2\\pi n, \\, \\frac{2\\pi}{3} + 2\\pi n, \\, k, n \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`-\\frac{5\\pi}{2}; \\, -\\frac{3\\pi}{2}; \\, -\\frac{7\\pi}{3}`} />
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
        mathB: '\\left[ e^{\\pi} - 1; \\, \\pi^2 \\right]',
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
            <div className="flex flex-wrap items-center gap-1">
              <span>Сравним полученный корень</span>
              <InlineMath math={`x = e^2 + 1`} />
              <span>с границами отрезка при помощи числовых оценок:</span>
            </div>
            <div className="pl-4 space-y-1 text-sm">
              <p>1) С левой границей: <InlineMath math={`e^2 + 1 > e^{\\pi} - 1 \\iff e^2 + 2 > e^{\\pi} \\iff e + \\frac{2}{e} > \\pi`} /> (верно, так как 3.454 &gt; 3.1416).</p>
              <p>2) С правой границей: <InlineMath math={`e^2 + 1 < \\pi^2 \\iff \\pi^2 - e^2 > 1`} /> (верно, так как 2.481 &gt; 1).</p>
            </div>
            <div className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
              <span>Следовательно, точка входит в заданный промежуток.</span>
            </div>
  
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
            <BlockMath math={`u^2 + 8u + 9 + 2u - 5 = 4`} />
            <BlockMath math={`u^2 + 10u = 0 \\implies u(u + 10) = 0`} />
            <p>Корни: <InlineMath math={`u_1 = 0, \\, u_2 = -10`} />.</p>
            <p>Обратная замена:</p>
            <BlockMath math={`\\log_2 x = 0 \\implies x = 1`} />
            <BlockMath math={`\\log_2 x = -10 \\implies x = \\frac{1}{1024}`} />
            <p>Оба корня удовлетворяют ОГР.</p>
            
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие отрезку при помощи неравенств.</p>
            <p><InlineMath math={`x_1 = 1`} />: явно больше правой границы <InlineMath math={`\\frac{1}{32}`} /> — не подходит.</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Проверим</span>
              <InlineMath math={`x_2 = \\frac{1}{1024}`} />:
              <span>сравним с границами:</span>
              <InlineMath math={`\\frac{1}{1024} < \\frac{1}{512}`} />
              <span>, так как 1024 &gt; 512. Корень не принадлежит отрезку.</span>
            </div>
            
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`x = 1; \\, x = \\frac{1}{1024}`} />
              <span className="ml-2">б) корней нет</span>
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
        mathB: '\\text{Отбор отсутствует}',
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
        mathB: '\\text{Отбор отсутствует}',
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
        mathB: '\\text{Отбор отсутствует}',
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
        mathB: '\\text{Отбор отсутствует}',
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
            <p>Отберём корни уравнения, принадлежащие промежутку, с помощью неравенств.</p>
            
            <div className="space-y-2 text-sm pl-4 border-l-2 border-slate-200 dark:border-purple-950/40">
              <div className="flex flex-wrap items-center gap-1">
                <span>• при</span>
                <InlineMath math={`k = 0`} />:
                <InlineMath math={`x = \\frac{2}{3} \\approx 0,667`} />,
                <span>меньше левой границы 2 — не подходит.</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-1">
                <span>• при</span>
                <InlineMath math={`k = 1`} />:
                <InlineMath math={`x = \\frac{2}{3} + 2 = \\frac{8}{3} \\approx 2,667`} />;
                <span>так как</span>
                <InlineMath math={`2 < \\frac{8}{3} < 2\\pi \\approx 6,283`} />
                <span>— подходит.</span>
              </div>
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\frac{2}{3} + 2k, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`\\frac{8}{3}`} />
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
            <p>Отберём корни на тригонометрической окружности. Для этого отметим на ней дугу, соответствующую отрезку, концы этой дуги и лежащие на ней точки серий решений из пункта а).</p>
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ТОЧНЫЙ SVG ЧЕРТЁЖ ОДИН В ОДИН С РЕФЕРЕНСОМ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
                
                {/* 🔥 ВЫДЕЛЕННАЯ ДУГА ПО КОНТУРУ ОКРУЖНОСТИ (От 5pi/2 до 4pi против часовой стрелки) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Вертикальный пунктир к выколотой точке и корню */}
                <line x1="193.64" y1="66.36" x2="193.64" y2="193.64" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400 dark:text-slate-600" />
                
                {/* Выколотая точка (пустой круг на окружности) */}
                <circle cx="193.64" cy="66.36" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Граничные точки промежутка (Закрашенные сферы) */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Точки отобранных корней на синей дуге */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="193.64" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи граничных и промежуточных точек */}
                <text x="142" y="36" fill="#328ce6" className="text-[13px] text-sky-500 font-black">5π/2</text>
                <text x="24" y="122" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">3π</text>
                <text x="228" y="125" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">4π</text>
                <text x="202" y="210" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">15π/4</text>
              </svg>
            </div>
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Следовательно, на отрезке</span>
              <InlineMath math={`\\left[ \\frac{5\\pi}{2}; \\, 4\\pi \\right]`} />
              <span>лежат точки</span>
              <InlineMath math={`3\\pi; \\, \\frac{15\\pi}{4}; \\, 4\\pi`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`-\\frac{\\pi}{8} + \\frac{\\pi k}{2}, \\quad k \\in \\mathbb{Z}`} />
              <span className="ml-2">б)</span>
              <InlineMath math={`3\\pi; \\, \\frac{15\\pi}{4}; \\, 4\\pi`} />
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
            
            {/* 🌌 МАТЕМАТИЧЕСКИ ЭТАЛОННЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От 12 часов против часовой стрелки до 3 часов — ровно 270 градусов) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Вертикальный пунктир косинуса x = 1/2 */}
                <line x1="175" y1="52.06" x2="175" y2="207.94" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400 dark:text-slate-600" />
                
                {/* Выколотая точка в I четверти (-11pi/3 не вошла в промежуток) */}
                <circle cx="175" cy="52.06" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Граничные точки промежутка (Закрашенные сферы) */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Точка единственного отобранного корня на синей дуге в IV четверти */}
                <circle cx="175" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи граничных и промежуточных точек */}
                <text x="110" y="32" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-7π/2</text>
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-2π</text>
                <text x="185" y="222" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">-7π/3</text>
              </svg>
            </div>
  
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ИДЕАЛЬНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ПО НАШЕМУ СТАНДАРТУ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
                
                {/* 🔥 ИСПРАВЛЕНО: ДУГА ЛЕЖИТ ИДЕАЛЬНО ПОВЕРХ ОКРУЖНОСТИ (Параметры 1 0 для больших углов против часовой стрелки) */}
                <path d="M 220 130 A 90 90 0 1 0 66.36 193.64" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Горизонтальный пунктир синуса y = 1/2 */}
                <line x1="40" y1="85" x2="220" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400 dark:text-slate-600" />
                
                {/* Выколотая точка x = pi/2 (сверху) */}
                <circle cx="130" cy="40" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Выколотая точка x = pi/6 в I четверти (не проходит ОГР) */}
                <circle cx="207.94" cy="85" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Граничные точки промежутка (Закрашенные сферы) */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="66.36" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Точка единственного отобранного корня на синей дуге во II четверти */}
                <circle cx="52.06" cy="85" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи граничных и промежуточных точек */}
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">0</text>
                <text x="120" y="32" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">Mπ/2</text>
                <text x="36" y="206" fill="#328ce6" className="text-[13px] text-sky-500 font-black">5π/4</text>
                <text x="24" y="80" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">5π/6</text>
                <text x="216" y="80" fill="currentColor" className="text-slate-400 dark:text-slate-500 text-xs font-semibold">π/6</text>
              </svg>
            </div>
  
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ТОЧНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ПО НАШЕМУ СТАНДАРТУ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От 0 до \pi против часовой стрелки — верхняя полуокружность) */}
                <path d="M 220 130 A 90 90 0 0 0 40 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Выколотая точка 0 справа (так как промежуток открыт слева) */}
                <circle cx="220" cy="130" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Точка закрашенного корня x = \pi слева (так как промежуток замкнут справа) */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи граничных и промежуточных точек */}
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">0</text>
                <text x="24" y="125" fill="currentColor" className="text-slate-900 dark:text-slate-100 text-[13px] font-black">π</text>
              </svg>
            </div>
  
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ТОЧНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ПО ЭТАЛОНУ ПЛАТФОРМЫ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО КОНТУРУ ОКРУЖНОСТИ (От 5pi/2 до 4pi против часовой стрелки) */}
                {/* На окружности это дуга от верхней точки (12 часов) через левую и нижнюю до крайней правой (3 часа) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Граничные точки промежутка (Закрашенные сферы, которые также являются корнями!) */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Точка второго отобранного корня x = 3\pi на синей дуге слева */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи граничных и промежуточных точек строго по нашему стандарту */}
                <text x="142" y="36" fill="#328ce6" className="text-[13px] text-sky-500 font-black">5π/2</text>
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">4π</text>
                <text x="24" y="125" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">3π</text>
              </svg>
            </div>
  
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
          <div className="my-6 flex justify-center w-full select-none">
            <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
              {/* Сетка и оси координат (оси слегка удлинены для стрелочек) */}
              <line x1="15" y1="130" x2="245" y2="130" stroke="currentColor" strokeWidth="1" className="text-slate-400 dark:text-slate-600" />
              <line x1="130" y1="15" x2="130" y2="245" stroke="currentColor" strokeWidth="1" className="text-slate-400 dark:text-slate-600" />
              
              {/* Аккуратные тонкие стрелочки осей */}
              <path d="M240 126 L246 130 L240 134" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-400 dark:text-slate-600" />
              <path d="M126 20 L130 14 L134 20" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-400 dark:text-slate-600" />
              
              {/* Главная тонкая окружность */}
              <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-purple-950/40" />
              
              {/* 🔵 Жирная синяя дуга окружности */}
              <path d="M 40 130 A 90 90 0 1 0 130 40" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
              
              {/* Выколотая точка 17π слева */}
              <circle cx="40" cy="130" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#03000a' : '#ffffff'} stroke="#328ce6" strokeWidth="2.5" />
              
              {/* Выколотая точка 37π/2 сверху */}
              <circle cx="130" cy="40" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#03000a' : '#ffffff'} stroke="#328ce6" strokeWidth="2.5" />
              
              {/* 🟢 Точка закрашенного корня 86π/5 в III четверти */}
              <circle cx="57.19" cy="182.90" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
              
              {/* 🟢 Точка закрашенного корня 91π/5 в I четверти */}
              <circle cx="202.81" cy="77.10" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
              
              {/* Пунктирные линии лучей к корням через центр */}
              <line x1="130" y1="130" x2="57.19" y2="182.90" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-300 dark:text-purple-500/20" />
              <line x1="130" y1="130" x2="202.81" y2="77.10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-300 dark:text-purple-500/20" />
              
              {/* 📐 ИСПРАВЛЕНО: Координаты подписей изменены, чтобы они стояли идеально свободно от осей */}
              <text x="6" y="122" fill="#328ce6" className="text-[13px] text-sky-500 font-black">17π</text>
              <text x="142" y="28" fill="#328ce6" className="text-[13px] text-sky-500 font-black">37π/2</text>
              <text x="8" y="204" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">86π/5</text>
              <text x="214" y="74" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">91π/5</text>
            </svg>
          </div>


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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ТОЧНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ПО НАШЕМУ ЭТАЛОНУ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От pi/2 сверху против часовой стрелки до 2pi справа — ровно 270 градусов, II, III и IV четверти) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Выколотая точка ложной серии 5\pi/12 в I четверти (БЕЗ ТЕКСТОВОЙ ПОДПИСИ) */}
                <circle cx="216.94" cy="106.70" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                <line x1="130" y1="130" x2="216.94" y2="106.70" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-400 dark:text-slate-600" />
                
                {/* Закрашенные точки корней, попавшие на синюю дугу */}
                {/* \pi/2 (сверху) */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                {/* 3\pi/2 (снизу) */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                {/* 13\pi/12 (в III четверти, чуть ниже горизонтальной оси) */}
                <circle cx="43.06" cy="153.30" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Конец отрезка 2\pi (справа) */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Пунктирный луч к корню 13\pi/12 из центра под углом 15 градусов ниже горизонтали */}
                <line x1="130" y1="130" x2="43.06" y2="153.30" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-400 dark:text-slate-600" />
                
                {/* Подписи только нужных граничных и истинных точек */}
                <text x="142" y="36" fill="#328ce6" className="text-[13px] text-sky-500 font-black">π/2</text>
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">2π</text>
                <text x="142" y="226" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">3π/2</text>
                <text x="16" y="165" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">13π/12</text>
              </svg>
            </div>
  
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ТОЧНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ПО НАШЕМУ ЭТАЛОНУ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От -pi/2 снизу против часовой стрелки до \pi слева — ровно 270 градусов, IV, I и II четверти) */}
                <path d="M 130 220 A 90 90 0 1 0 40 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Выколотая точка ложного корня серии \pi/6 в III четверти (ВНЕ СИНЕЙ ДУГИ, БЕЗ ПОДПИСИ) */}
                <circle cx="52.06" cy="175" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                <line x1="130" y1="130" x2="52.06" y2="175" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-400 dark:text-slate-600" />
                
                {/* Пунктирные направляющие лучи для истинных корней */}
                <line x1="130" y1="130" x2="207.94" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-400 dark:text-slate-600" />
                <line x1="130" y1="130" x2="193.64" y2="66.36" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-400 dark:text-slate-600" />
                <line x1="130" y1="130" x2="66.36" y2="66.36" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-400 dark:text-slate-600" />
                
                {/* Закрашенные сферы истинных корней на синей дуге */}
                {/* \pi/6 (30 градусов в I четверти) */}
                <circle cx="207.94" cy="85" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                {/* \pi/4 (45 градусов в I четверти) */}
                <circle cx="193.64" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                {/* 3\pi/4 (45 градусов во II четверти) */}
                <circle cx="66.36" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Закрашенные концы интервалов */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Текстовые подписи только нужных граничных и истинных точек */}
                <text x="110" y="236" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-π/2</text>
                <text x="24" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">π</text>
                <text x="216" y="90" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">π/6</text>
                <text x="202" y="60" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">π/4</text>
                <text x="44" y="60" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">3π/4</text>
              </svg>
            </div>
  
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ТОЧНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ С ВНЕШНЕЙ ДУГОЙ-ХВОСТИКОМ ПО ВАШЕМУ РИСУНКУ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и axes координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Тонкая базовая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
                
                {/* 🔥 1. ВНУТРЕННИЙ ПОЛНЫЙ КРУГ ДУГИ (От 0 до 2pi по контуру) */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="#328ce6" strokeWidth="4.5" />
                
                {/* 🔥 2. ВНЕШНИЙ СИН canВЫЙ «ХВОСТИК» ДУГИ (Дополнительная четверть от 0 до 5pi/2 наружу) */}
                <path d="M 235 130 A 105 105 0 0 0 130 25" fill="none" stroke="#328ce6" strokeWidth="3.5" strokeLinecap="round" />
                
                {/* Горизонтальный пунктир синуса y = 1/2 */}
                <line x1="40" y1="85" x2="220" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400 dark:text-slate-600" />
                
                {/* Выколотая точка начала 0 справа (на внутреннем контуре) */}
                <circle cx="220" cy="130" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="#328ce6" strokeWidth="2" />
                
                {/* Закрашенные точки корней и границ */}
                {/* 3\pi/2 (снизу) */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                {/* 5\pi/6 (во II четверти) */}
                <circle cx="52.06" cy="85" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Слоёные корни первого витка (на внутреннем контуре r=90) */}
                <circle cx="207.94" cy="85" r="4" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* \pi/6 */}
                <circle cx="130" cy="40" r="4" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* \pi/2 */}
                
                {/* Слоёные корни второго витка (на внешнем хвостике) */}
                <circle cx="220.93" cy="77.50" r="4" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 13\pi/6 */}
                <circle cx="130" cy="25" r="4" fill="currentColor" className="text-slate-900 dark:text-slate-100" />       {/* 5\pi/2 */}
                
                {/* Подписи граничных и истинных точек */}
                <text x="242" y="145" fill="#328ce6" className="text-[13px] text-sky-500 font-black">0</text>
                <text x="142" y="44" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">π/2</text>
                <text x="142" y="18" fill="#328ce6" className="text-[12px] text-sky-500 font-black">5π/2</text>
                <text x="142" y="234" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">3π/2</text>
                <text x="212" y="102" fill="currentColor" className="text-slate-400 dark:text-slate-500 text-xs font-medium">π/6</text>
                <text x="228" y="72" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">13π/6</text>
                <text x="12" y="85" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">5π/6</text>
              </svg>
            </div>
  
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ТОЧНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ПО ЭТАЛОНУ ПЛАТФОРМЫ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ВСЕМУ КОНТУРУ (Занимает полный круг, так как длина интервала ровно 2pi) */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="#328ce6" strokeWidth="4.5" />
                
                {/* Выколотая точка -7\pi и -5\pi слева (интервал открытый) */}
                <circle cx="40" cy="130" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="#328ce6" strokeWidth="2" />
                
                {/* Вертикальная линия косинуса x = -sqrt(3)/2 */}
                <line x1="52.06" y1="20" x2="52.06" y2="240" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400 dark:text-slate-600" />
                
                {/* Ложный корень во II четверти (ВНЕ СИНЕЙ ДУГИ, ТАК КАК ВЫКОЛОТ ИЗ-ЗА ГРАНИЦЫ ИНТЕРВАЛА - БЕЗ ПОДПИСИ) */}
                <circle cx="52.06" cy="85" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                {/* -6\pi (чётное число \pi, строго справа) */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                {/* -41\pi/6 (в III четверти, под углом 30 градусов к горизонтали) */}
                <circle cx="52.06" cy="175" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                {/* -31\pi/6 (в II четверти, под углом 30 градусов к горизонтали) */}
                <circle cx="52.06" cy="85" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи нужных граничных и истинных точек */}
                <text x="14" y="145" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-7π; -5π</text>
                <text x="228" y="125" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">-6π</text>
                <text x="16" y="194" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">-41π/6</text>
                <text x="16" y="78" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">-31π/6</text>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ С ОПУЩЕННОЙ ПОДПИСЬЮ ДРОБИ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (Нижняя левая половина от 19pi/4 до 23pi/4) */}
                <path d="M 66.36 66.36 A 90 90 0 0 0 193.64 193.64" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Диагональные лучи из центра под 45 градусов */}
                <line x1="66.36" y1="66.36" x2="193.64" y2="193.64" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
                <line x1="66.36" y1="193.64" x2="193.64" y2="66.36" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
                
                {/* Пунктирный луч к корню 61\pi/12 из центра под углом 15 градусов */}
                <line x1="130" y1="130" x2="43.07" y2="153.29" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
                
                {/* Закрашенные точки истинных корней и границ на дуге */}
                <circle cx="66.36" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 19\pi/4 */}
                <circle cx="66.36" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 21\pi/4 */}
                <circle cx="193.64" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 23\pi/4 */}
                <circle cx="43.07" cy="153.29" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 61\pi/12 */}
                
                {/* Подписи точек */}
                <text x="24" y="58" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">19π/4</text>
                <text x="202" y="212" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">23π/4</text>
                <text x="22" y="212" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">21π/4</text>
                
                {/* 👍 ИСПРАВЛЕНО: Сместили всю группу с дробью вниз на 22 пикселя (translate y=136 вместо 114) */}
                <g transform="translate(6, 136)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">61π</text>
                  <line x1="0" y1="15" x2="28" y2="15" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="27" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">12</text>
                </g>
              </svg>
            </div>
  
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
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Серия коней</span>
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ТОЧНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ДЛЯ ШКОЛКОВО С КРАСИВЫМИ ДРОБЯМИ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От -pi/2 снизу против часовой стрелки до \pi слева — ровно 270 градусов, IV, I и II четверти) */}
                <path d="M 130 220 A 90 90 0 1 0 40 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Вертикальные линии косинуса x = 1/2 и x = -1/2 */}
                <line x1="175" y1="40" x2="175" y2="220" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400 dark:text-slate-600" />
                <line x1="85" y1="40" x2="85" y2="220" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400 dark:text-slate-600" />
                
                {/* Выколотая точка серии в III четверти (ВНЕ СИНЕЙ ДУГИ, БЕЗ ПОДПИСИ) */}
                <circle cx="85" cy="207.94" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Закрашенные точки истинных корней на синей дуге под 60 градусов */}
                <circle cx="175" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -\pi/3 */}
                <circle cx="175" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* \pi/3 */}
                <circle cx="85" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 2\pi/3 */}
                
                {/* Закрашенные концы интервалов */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи концов промежутка */}
                <text x="110" y="236" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-π/2</text>
                <text x="24" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">π</text>
                
                {/* Идеально отцентрированные многоэтажные дроби для корней */}
                {/* Дробь для -\pi/3 */}
                <g transform="translate(178, 206)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-π</text>
                  <line x1="2" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="26" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для \pi/3 */}
                <g transform="translate(178, 22)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">π</text>
                  <line x1="5" y1="14" x2="23" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="26" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для 2\pi/3 */}
                <g transform="translate(54, 22)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">2π</text>
                  <line x1="2" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="26" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ТОЧНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ПО НАШЕМУ СТАНДАРТУ ПЛАТФОРМЫ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От 2pi справа против часовой до 3pi слева — ровно верхняя половина круга) */}
                <path d="M 220 130 A 90 90 0 0 0 40 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Вертикальная линия косинуса x = -1/2 */}
                <line x1="85" y1="40" x2="85" y2="220" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400 dark:text-slate-600" />
                
                {/* Выколотая точка ложной серии в III четверти (ВНЕ СИНЕЙ ДУГИ, БЕЗ ПОДПИСИ) */}
                <circle cx="85" cy="207.94" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Закрашенная точка единственного истинного корня 8\pi/3 на синей дуге во II четверти (под 60 градусов) */}
                <circle cx="85" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Закрашенные концы интервалов */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи концов промежутка */}
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">2π</text>
                <text x="24" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">3π</text>
                
                {/* Идеально отцентрированная многоэтажная дробь для корня 8\pi/3 */}
                <g transform="translate(54, 22)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">8π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="26" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ТОЧНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ПО НАШЕМУ СТАНДАРТУ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="20" y1="130" x2="240" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="20" x2="130" y2="240" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M240 130 l-6 -3 M240 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 20 l-3 6 M130 20 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От \pi слева против часовой стрелки до 5\pi/2 сверху — ровно 270 градусов, III, IV и I четверти) */}
                <path d="M 40 130 A 90 90 0 1 0 130 40" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Пунктирные лучи к отобранным корням */}
                <line x1="130" y1="130" x2="220" y2="130" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-400 dark:text-slate-600" />
                <line x1="130" y1="130" x2="175" y2="52.06" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-400 dark:text-slate-600" />
                
                {/* Выколотые ложные точки серий (ВНЕ СИНЕЙ ДУГИ во II четверти, оставлены анонимными по вашему правилу) */}
                <circle cx="85" cy="52.06" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                <line x1="130" y1="130" x2="85" y2="52.06" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-400 dark:text-slate-600" />
                
                {/* Закрашенные черные точки истинных корней и концов на синей дуге */}
                {/* Начало отрезка \pi (строго слева) */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                {/* Конец отрезка 5\pi/2 (строго сверху) */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                {/* Корень 2\pi (строго справа) */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                {/* Корень 7\pi/3 (в I четверти, под 60 градусов к горизонтали) */}
                <circle cx="175" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи граничных и промежуточных точек */}
                <text x="24" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">π</text>
                <text x="142" y="36" fill="#328ce6" className="text-[13px] text-sky-500 font-black">5π/2</text>
                <text x="228" y="125" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-semibold">2π</text>
                
                {/* Идеально отцентрированная многоэтажная дробь для корня 7\pi/3 */}
                <g transform="translate(178, 22)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">7π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="26" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат (удлинены до 10 и 250) */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей на новых позициях */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Тонкая базовая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 1. ПОЛНЫЙ ВНУТРЕННИЙ ОБОРОТ ДУГИ (Радиус 90) */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="#328ce6" strokeWidth="4.5" />
                
                {/* 🔥 2. СТАБИЛЬНЫЙ ВНЕШНИЙ ХВОСТИК ДУГИ (Радиус 104) */}
                <path 
                  d="M 203.54 203.54 
                     A 104 104 0 0 0 234 130 
                     A 104 104 0 0 0 130 26 
                     A 104 104 0 0 0 56.46 56.46" 
                  fill="none" 
                  stroke="#328ce6" 
                  strokeWidth="4.5" 
                  strokeLinecap="round" 
                />
                
                {/* Выколотые точки границ интервала */}
                <circle cx="193.64" cy="193.64" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="#328ce6" strokeWidth="2.5" />
                <circle cx="56.46" cy="56.46" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="#328ce6" strokeWidth="2.5" />
                
                {/* Точки на внутреннем радиусе 90 */}
                <circle cx="85.00" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 4π/3 */}
                <circle cx="175.00" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 5π/3 */}
                <circle cx="175.00" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* π/3 */}
                <circle cx="85.00" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 2π/3 */}
                
                {/* Точки на внешнем радиусе 104 */}
                <circle cx="182.04" cy="39.96" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 7π/3 */}
                <circle cx="77.96" cy="39.96" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 8π/3 */}
                
                {/* Подписи концов промежутка */}
                <g transform="translate(200, 196)">
                  <text x="14" y="10" fill="#328ce6" textAnchor="middle" className="text-[13px] text-sky-500 font-black">-π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="#328ce6" strokeWidth="1.2" />
                  <text x="14" y="26" fill="#328ce6" textAnchor="middle" className="text-[13px] text-sky-500 font-black">4</text>
                </g>
  
                <g transform="translate(14, 52)">
                  <text x="14" y="10" fill="#328ce6" textAnchor="middle" className="text-[13px] text-sky-500 font-black">11π</text>
                  <line x1="1" y1="14" x2="27" y2="14" stroke="#328ce6" strokeWidth="1.2" />
                  <text x="14" y="26" fill="#328ce6" textAnchor="middle" className="text-[13px] text-sky-500 font-black">4</text>
                </g>
                
                {/* Подписи нижних корней */}
                <g transform="translate(162, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">5π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">3</text>
                </g>
  
                <g transform="translate(68, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">4π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">3</text>
                </g>
  
                {/* Наружные подписи для внешнего витка */}
                <text x="194" y="28" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">7π/3</text>
                <text x="66" y="28" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">8π/3</text>
  
                {/* Внутренние подписи для внутреннего витка */}
                <text x="164" y="74" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">π/3</text>
                <text x="96" y="74" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">2π/3</text>
              </svg>
            </div>
  
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
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Тонкая базовая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 1. ВНУТРЕННИЙ ПОЛНЫЙ ОБОРОТ ДУГИ (Радиус 90) */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="#328ce6" strokeWidth="4.5" />
                
                {/* 🔥 2. ВНЕШНИЙ ХВОСТИК ДУГИ (Строго в IV четверти) */}
                <path d="M 130 234 A 104 104 0 0 0 234 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* 👍 ИСПРАВЛЕНО: Вернули верную пунктирную линию под 45 градусов (из II во IV четверть) */}
                <line x1="66.36" y1="66.36" x2="193.64" y2="193.64" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
                
                {/* Выколотые точки границ интервала */}
                <circle cx="130" cy="220" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="#328ce6" strokeWidth="2.5" />
                <circle cx="234" cy="130" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="#328ce6" strokeWidth="2.5" />
                
                {/* Точки корней на окружностях */}
                <circle cx="66.36" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="193.64" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="203.54" cy="203.54" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи границ интервала */}
                <text x="92" y="244" fill="#328ce6" className="text-[12px] text-sky-500 font-black">-5π/2</text>
                <text x="234" y="118" fill="#328ce6" className="text-[13px] text-sky-500 font-black">0</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей */}
                <g transform="translate(206, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">-9π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">4</text>
                </g>
  
                <g transform="translate(74, 76)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">-5π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">4</text>
                </g>
  
                <g transform="translate(142, 166)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">-π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">4</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ: ПОДПИСЬ -3pi ОПУЩЕНА ЛЕВЕЕ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Тонкая базовая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 1. ВНУТРЕННИЙ ПОЛНЫЙ ОБОРОТ ДУГИ (Радиус 90) */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="#328ce6" strokeWidth="4.5" />
                
                {/* 🔥 2. ВНЕШНИЙ ХВОСТИК ДУГИ (Строго в IV четверти) */}
                <path d="M 26 130 A 104 104 0 0 0 130 234 A 104 104 0 0 0 234 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Пунктирная диагональ под 45 градусов (из II во IV четверть) */}
                <line x1="66.36" y1="66.36" x2="193.64" y2="193.64" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
                
                {/* Закрашенные точки границ промежутка */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="234" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Точки корней на окружностях */}
                <circle cx="66.36" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="193.64" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                <circle cx="203.54" cy="203.54" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи границ интервала */}
                {/* 👍 ИСПРАВЛЕНО: Сместили подпись -3π левее горизонтальной оси (x="6" вместо 14) */}
                <text x="6" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-3π</text>
                <text x="234" y="118" fill="#328ce6" className="text-[13px] text-sky-500 font-black">0</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей */}
                <g transform="translate(206, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">-9π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">4</text>
                </g>
  
                <g transform="translate(74, 76)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">-5π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">4</text>
                </g>
  
                <g transform="translate(142, 166)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">-π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">4</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ТОЧНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ДЛЯ СТАТГРАДА 2026 */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От верхней точки -11pi/2 против часовой стрелки до правой точки -4pi — ровно 270 градусов) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Пунктирные диагональные лучи под 45 градусов, на которых лежат все корни */}
                <line x1="66.36" y1="66.36" x2="193.64" y2="193.64" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
                <line x1="66.36" y1="193.64" x2="193.64" y2="66.36" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-300 dark:text-slate-700" />
                
                {/* Выколотая точка серии в I четверти (ВНЕ СИНЕЙ ДУГИ, ОСТАВЛЕНА АНОНИМНОЙ ПО НАШЕМУ ПРАВИЛУ) */}
                <circle cx="193.64" cy="66.36" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Закрашенные точки границ отрезка (квадратные скобки) */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -11\pi/2 */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -4\pi */}
                
                {/* Закрашенные точки трёх истинных корней на синей дуге */}
                <circle cx="66.36" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -21\pi/4 */}
                <circle cx="66.36" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -19\pi/4 */}
                <circle cx="193.64" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -17\pi/4 */}
                
                {/* Подписи концов промежутка (смещены от осей, чтобы не накладываться) */}
                <text x="110" y="32" fill="#328ce6" className="text-[12px] text-sky-500 font-black">-11π/2</text>
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-4π</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей */}
                {/* Дробь для -21\pi/4 (во II четверти, смещена влево-вверх) */}
                <g transform="translate(18, 44)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">-21π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">4</text>
                </g>
  
                {/* Дробь для -19\pi/4 (в III четверти, смещена влево-вниз) */}
                <g transform="translate(18, 202)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">-19π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">4</text>
                </g>
  
                {/* Дробь для -17\pi/4 (в IV четверти, смещена вправо-вниз) */}
                <g transform="translate(202, 202)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">-17π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">4</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ИДЕАЛЬНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ПО ЗАДАННОМУ МАКЕТУ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (Левая половина круга) */}
                <path d="M 130 220 A 90 90 0 0 1 130 40" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Горизонтальная линия синуса y = 1/2 */}
                <line x1="40" y1="85" x2="220" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400 dark:text-slate-600" />
                
                {/* Выколотая точка ложной серии 1/2 в I четверти */}
                <circle cx="207.94" cy="85" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 19\pi/2 */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 17\pi/2 */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 9\pi */}
                <circle cx="52.06" cy="85" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 53\pi/6 */}
                
                {/* 👍 ИСПРАВЛЕНО: Смещено влево и вправо от оси ординат */}
                <text x="112" y="32" fill="#328ce6" textAnchor="end" className="text-[13px] text-sky-500 font-black">17π/2</text>
                <text x="148" y="232" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">19π/2</text>
                
                {/* Исправленная подпись 9π под ось абсцисс */}
                <text x="16" y="148" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">9π</text>
                
                {/* Дробь 53π/6 */}
                <g transform="translate(-2, 58)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">53π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">6</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 ГЕОМЕТРИЧЕСКИ ИДЕАЛЬНЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ НАЛОЖЕНИЙ И БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От верхней точки против часовой стрелки до правой — ровно 270 градусов, II, III и IV четверти) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* 👍 ВСЕ ПУНКТИРНЫЕ ЛИНИИ УСПЕШНО УБРАНЫ С ЧЕРТЕЖА */}
                
                {/* Выколотая ложная точка серии pi/4 в I четверти (ВНЕ СИНЕЙ ДУГИ, БЕЗ ТЕКСТОВОЙ ПОДПИСИ) */}
                <circle cx="193.64" cy="66.36" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 17\pi/2 */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 10\pi */}
                
                {/* Закрашенная точка единственного истинного корня 35\pi/4 на синей дуге во II четверти */}
                <circle cx="66.36" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи границ, аккуратно смещённые во избежание наложений */}
                <text x="112" y="32" fill="#328ce6" textAnchor="end" className="text-[13px] text-sky-500 font-black">17π/2</text>
                <text x="228" y="122" fill="#328ce6" className="text-[13px] text-sky-500 font-black">10π</text>
                
                {/* Многоэтажная аккуратная дробь для корня 35\pi/4, смещённая влево и вверх */}
                <g transform="translate(24, 26)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">35π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">4</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (Левая половина круга от нижней до верхней точки) */}
                <path d="M 130 220 A 90 90 0 0 1 130 40" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 15\pi/2 внизу */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 13\pi/2 вверху */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 7\pi */}
                <circle cx="66.36" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 29\pi/4 */}
                
                {/* Подписи границ отрезка, смещённые влево и вправо во избежание наложений */}
                <text x="112" y="32" fill="#328ce6" textAnchor="end" className="text-[13px] text-sky-500 font-black">13π/2</text>
                <text x="148" y="232" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">15π/2</text>
                
                {/* Подпись для 7\pi под осью абсцисс */}
                <text x="16" y="148" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">7π</text>
                
                {/* Многоэтажная аккуратная дробь для корня 29\pi/4 */}
                <g transform="translate(18, 202)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">29π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">4</text>
                </g>
              </svg>
            </div>
  
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

        {/* 🎨 ИСПРАВЛЕНО: Чертеж перерисован, оси аккуратные, стрелки возвращены, подписи выровнены через KaTeX */}
        <div className="my-6 flex justify-center w-full select-none">
          <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
            {/* Сетка и оси координат */}
            <line x1="15" y1="130" x2="245" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <line x1="130" y1="15" x2="130" y2="245" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            
            {/* Тонкие аккуратные стрелочки осей */}
            <path d="M242 126 L248 130 L242 134" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            <path d="M126 22 L130 15 L134 22" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-slate-400 dark:text-slate-600" />
            
            {/* Главная тонкая окружность */}
            <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-purple-950/40" />
            
            {/* 🔵 Жирная синяя дуга от 2π до 7π/2 (на 270 градусов против часовой через верх) */}
            <path d="M 220 130 A 90 90 0 1 0 130 220" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
            
            {/* Закрашенные точки границ отрезка */}
            <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            
            {/* Истинные закрашенные корни на дуге */}
            <circle cx="193.64" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            <circle cx="66.36" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
            
            {/* Пунктирные радиусы-лучи */}
            <line x1="130" y1="130" x2="193.64" y2="66.36" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-300 dark:text-purple-500/20" />
            <line x1="130" y1="130" x2="66.36" y2="193.64" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-300 dark:text-purple-500/20" />
            
            {/* Текстовые подписи концов отрезка со сдвигом от осей */}
            <text x="226" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">2π</text>
            <text x="138" y="234" fill="#328ce6" className="text-[13px] text-sky-500 font-black">7π/2</text>
            
            {/* Красивый и неубиваемый вывод дробей KaTeX внутри самого SVG-холста! */}
            <foreignObject x="198" y="44" width="60" height="30">
              <div className="text-slate-800 dark:text-slate-200 text-xs font-semibold"><InlineMath math={'\\frac{9\\pi}{4}'} /></div>
            </foreignObject>
            
            <foreignObject x="22" y="180" width="60" height="30">
              <div className="text-slate-800 dark:text-slate-200 text-xs font-semibold"><InlineMath math={'\\frac{13\\pi}{4}'} /></div>
            </foreignObject>
          </svg>
        </div>

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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ДЛЯ ТРЁХ КОРНЕЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От -4pi справа против часовой стрелки до -5pi/2 снизу — ровно 270 градусов, I, II и III четверти) */}
                <path d="M 220 130 A 90 90 0 1 0 130 220" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Выколотая ложная точка серии в IV четверти (ВНЕ СИНЕЙ ДУГИ, БЕЗ ПОДПИСИ) */}
                <circle cx="175" cy="207.94" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -4\pi */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -5\pi/2 */}
                
                {/* Закрашенные точки трёх истинных корней на синей дуге под 60 градусов */}
                <circle cx="175" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -11\pi/3 */}
                <circle cx="85" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -10\pi/3 */}
                <circle cx="85" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -8\pi/3 */}
                
                {/* Подписи концов промежутка */}
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-4π</text>
                <text x="130" y="244" fill="#328ce6" textAnchor="middle" className="text-[13px] text-sky-500 font-black">-5π/2</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей */}
                {/* Дробь для -11\pi/3 (в I четверти, вверху справа) */}
                <g transform="translate(178, 20)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-11π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для -10\pi/3 (во II четверти, вверху слева) */}
                <g transform="translate(54, 20)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-10π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для -8\pi/3 (в III четверти, внизу слева) */}
                <g transform="translate(54, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-8π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ НАЛОЖЕНИЙ И БЕЗ ПУНКТИРНЫХ ДИАГОНАЛЕЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От верхней точки pi/2 против часовой стрелки до правой 2pi — ровно 270 градусов, II, III и IV четверти) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Выколотая ложная точка серии pi/4 в I четверти (ВНЕ СИНЕЙ ДУГИ, БЕЗ ПОДПИСИ) */}
                <circle cx="193.64" cy="66.36" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* \pi/2 */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 2\pi */}
                
                {/* Закрашенные точки трёх истинных корней на синей дуге */}
                <circle cx="66.36" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 3\pi/4 */}
                <circle cx="85" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 4\pi/3 */}
                <circle cx="175" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 5\pi/3 */}
                
                {/* Подписи концов промежутка */}
                <text x="110" y="32" fill="#328ce6" textAnchor="end" className="text-[13px] text-sky-500 font-black">π/2</text>
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">2π</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей */}
                {/* Дробь для 3\pi/4 (во II четверти, вверху слева) */}
                <g transform="translate(24, 44)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">4</text>
                </g>
  
                {/* Дробь для 4\pi/3 (в III четверти, внизу слева) */}
                <g transform="translate(54, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">4π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для 5\pi/3 (в IV четверти, внизу справа) */}
                <g transform="translate(178, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">5π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ НАЛОЖЕНИЙ И БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От -2pi справа против часовой стрелки до -pi/2 снизу — ровно 270 градусов, I, II и III четверти) */}
                <path d="M 220 130 A 90 90 0 1 0 130 220" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Выколотые ложные точки серий (ВНЕ СИНЕЙ ДУГИ в IV четверти, без подписей) */}
                <circle cx="193.64" cy="193.64" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                <circle cx="175" cy="207.94" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -2\pi */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -\pi/2 */}
                
                {/* Закрашенные точки трёх истинных корней на синей дуге */}
                <circle cx="193.64" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -7\pi/4 */}
                <circle cx="85" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />     {/* -4\pi/3 */}
                <circle cx="85" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />    {/* -2\pi/3 */}
                
                {/* Подписи концов промежутка */}
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-2π</text>
                <text x="130" y="244" fill="#328ce6" textAnchor="middle" className="text-[13px] text-sky-500 font-black">-π/2</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей */}
                {/* Дробь для -7\pi/4 (в I четверти, вверху справа) */}
                <g transform="translate(196, 36)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-7π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">4</text>
                </g>
  
                {/* Дробь для -4\pi/3 (во II четверти, вверху слева) */}
                <g transform="translate(54, 20)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-4π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для -2\pi/3 (в III четверти, внизу слева) */}
                <g transform="translate(54, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-2π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ ВЫКОЛОТОЙ ТОЧКИ И БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (IV, I и II четверти) */}
                <path d="M 130 220 A 90 90 0 1 0 40 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* 👍 ВЫКОЛОТАЯ ТОЧКА УБРАНА */}
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 7\pi/2 */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 5\pi */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="193.64" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 15\pi/4 */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />    {/* 4\pi */}
                <circle cx="193.64" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 17\pi/4 */}
                
                {/* Подписи концов промежутка */}
                <text x="130" y="244" fill="#328ce6" textAnchor="middle" className="text-[13px] text-sky-500 font-black">7π/2</text>
                <text x="16" y="146" fill="#328ce6" className="text-[13px] text-sky-500 font-black">5π</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей и чисел */}
                <text x="228" y="125" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-black">4π</text>
                
                {/* Дробь для 17\pi/4 (в I четверти, вверху справа) */}
                <g transform="translate(196, 36)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">17π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">4</text>
                </g>
  
                {/* Дробь для 15\pi/4 (в IV четверти, внизу справа) */}
                <g transform="translate(196, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">15π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">4</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ: -10pi/3 СДВИГНУТО БЛИЖЕ К ТОЧКЕ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (Левая половина и низ круга) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -7\pi/2 */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -2\pi */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="85" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -10\pi/3 */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />    {/* -3\pi */}
                <circle cx="85" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -8\pi/3 */}
                
                {/* Граничные подписи */}
                <text x="148" y="32" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">-7π/2</text>
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-2π</text>
                
                {/* Корень на оси */}
                <text x="14" y="146" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-3π</text>
                
                {/* 👍 ИСПРАВЛЕНО: Дробь -10π/3 сдвинута правее, ближе к точке (translate x="42" вместо 18) */}
                <g transform="translate(42, 32)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-10π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для -8\pi/3 */}
                <g transform="translate(54, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-8π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ ВЫКОЛОТОЙ ТОЧКИ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (II, III и IV четверти) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* 👍 ВЫКОЛОТАЯ ТОЧКА ИЗ I ЧЕТВЕРТИ ПОЛНОСТЬЮ УБРАНА ПОВАШЕЙ ПРОСЬБЕ */}
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -7\pi/2 */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -2\pi */}
                
                {/* Закрашенная точка единственного истинного корня -7\pi/3 на синей дуге в IV четверти */}
                <circle cx="175" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Граничные подписи */}
                <text x="148" y="32" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">-7π/2</text>
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-2π</text>
                
                {/* Подпись корня в виде красивой многоэтажной дроби */}
                <g transform="translate(178, 212)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-7π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ С КОРРЕКТНЫМИ ПОЗИЦИЯМИ ГРАНИЦ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (III четверть круга) */}
                <path d="M 40 130 A 90 90 0 0 0 130 220" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -3\pi */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -5\pi/2 */}
                
                {/* Закрашенная точка истинного корня -17\pi/6 на синей дуге в III четверти */}
                <circle cx="52.06" cy="175" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* 👍 ИСПРАВЛЕНО: Смещено ещё левее от горизонтальной оси */}
                <text x="4" y="146" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-3π</text>
                {/* 👍 ИСПРАВЛЕНО: Смещено чуть левее, ближе к вертикальной оси */}
                <text x="142" y="244" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">-5π/2</text>
                
                {/* Подпись корня в виде красивой многоэтажной дроби */}
                <g transform="translate(6, 178)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-17π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">6</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ПО НАШЕМУ СТАНДАРТУ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От левой точки \pi против часовой стрелки до верхней 5\pi/2 — ровно три четверти, III, IV и I четверти) */}
                <path d="M 40 130 A 90 90 0 1 0 130 40" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* \pi */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 5\pi/2 */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="52.06" cy="175" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 7\pi/6 */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 2\pi */}
                
                {/* Подписи концов промежутка, аккуратно смещённые во избежание наложений */}
                <text x="14" y="146" fill="#328ce6" className="text-[13px] text-sky-500 font-black">π</text>
                <text x="148" y="32" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">5π/2</text>
                
                {/* Подпись корня на оси */}
                <text x="228" y="125" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-black">2π</text>
                
                {/* Подпись корня в виде красивой многоэтажной дроби */}
                <g transform="translate(6, 178)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">7π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">6</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ С ВЫВЕРЕННЫМИ ОТСТУПАМИ ПОДПИСЕЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (III, IV и I четверти) */}
                <path d="M 40 130 A 90 90 0 1 0 130 40" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* \pi */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 5\pi/2 */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="66.36" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 5\pi/4 */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 2\pi */}
                
                {/* Подписи концов промежутка, отодвинутые от осей */}
                <text x="14" y="146" fill="#328ce6" className="text-[13px] text-sky-500 font-black">π</text>
                <text x="148" y="32" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">5π/2</text>
                
                {/* Подпись корня на оси */}
                <text x="228" y="125" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-black">2π</text>
                
                {/* Подпись корня в виде красивой многоэтажной дроби */}
                <g transform="translate(18, 202)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">5π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">4</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ НАЛОЖЕНИЙ И БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От левой точки pi против часовой стрелки до верхней 5pi/2 — ровно три четверти, III, IV и I четверти) */}
                <path d="M 40 130 A 90 90 0 1 0 130 40" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Выколотая ложная точка серии во II четверти (ВНЕ СИНЕЙ ДУГИ, БЕЗ ПОДПИСИ) */}
                <circle cx="52.06" cy="85" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* \pi */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 5\pi/2 */}
                
                {/* Закрашенная точка единственного истинного корня 13\pi/6 на синей дуге в I четверти (под 30 градусов) */}
                <circle cx="207.94" cy="85" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи концов промежутка, аккуратно смещённые во избежание наложений */}
                <text x="14" y="146" fill="#328ce6" className="text-[13px] text-sky-500 font-black">π</text>
                <text x="148" y="32" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">5π/2</text>
                
                {/* Подпись корня в виде красивой многоэтажной дроби, смещённая вправо и вверх */}
                <g transform="translate(204, 52)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">13π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">6</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ НАЛОЖЕНИЙ И БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От левой точки -pi против часовой стрелки до верхней pi/2 — ровно три четверти, III, IV и I четверти) */}
                <path d="M 40 130 A 90 90 0 1 0 130 40" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -\pi */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* \pi/2 */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="175" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* \pi/3 */}
                <circle cx="175" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -\pi/3 */}
                
                {/* Подписи концов промежутка, аккуратно смещённые во избежание наложений */}
                <text x="14" y="146" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-π</text>
                <text x="148" y="32" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">π/2</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей */}
                {/* Дробь для \pi/3 (в I четверти, вверху справа) */}
                <g transform="translate(178, 20)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для -\pi/3 (в IV четверти, внизу справа) */}
                <g transform="translate(178, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ НАЛОЖЕНИЙ, БЕЗ ПУНКТИРНЫХ ЛИНИЙ И БЕЗ ВЫКОЛОТЫХ ТОЧЕК */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От правой точки -4pi против часовой стрелки до нижней -5pi/2 — ровно три четверти, I, II и III четверти) */}
                <path d="M 220 130 A 90 90 0 1 0 130 220" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* 👍 ВЫКОЛОТАЯ ТОЧКА ПОЛНОСТЬЮ УБРАНА */}
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -4\pi */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -5\pi/2 */}
                
                {/* Закрашенная точка истинного корня -11\pi/3 на синей дуге в I четверти (под 60 градусов) */}
                <circle cx="175" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи концов промежутка, аккуратно смещённые во избежание наложений */}
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-4π</text>
                <text x="142" y="244" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">-5π/2</text>
                
                {/* Подпись корня в виде красивой многоэтажной дроби, смещённая вправо и вверх */}
                <g transform="translate(178, 20)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-11π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ ВЫКОЛОТЫХ ТОЧЕК И БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От правой точки -4pi против часовой стрелки до нижней -5pi/2 — ровно три четверти, I, II и III четверти) */}
                <path d="M 220 130 A 90 90 0 1 0 130 220" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -4\pi */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -5\pi/2 */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />    {/* -3\pi */}
                <circle cx="85" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -10\pi/3 */}
                <circle cx="85" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -8\pi/3 */}
                
                {/* Подписи концов промежутка, аккуратно смещённые во избежание наложений */}
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-4π</text>
                <text x="142" y="244" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">-5π/2</text>
                
                {/* Подпись корня на оси */}
                <text x="14" y="146" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-3π</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей */}
                {/* Дробь для -10\pi/3 (во II четверти, вверху слева) */}
                <g transform="translate(42, 32)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-10π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для -8\pi/3 (в III четверти, внизу слева) */}
                <g transform="translate(54, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-8π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ НАЛОЖЕНИЙ, БЕЗ ПУНКТИРНЫХ ЛИНИЙ И БЕЗ ВЫКОЛОТЫХ ТОЧЕК */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и axes координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От левой точки -3pi против часовой стрелки до верхней -3pi/2 — ровно три четверти, III, IV и I четверти) */}
                <path d="M 40 130 A 90 90 0 1 0 130 40" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* 👍 ВЫКОЛОТАЯ ТОЧКА ПОЛНОСТЬЮ УБРАНА */}
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -3\pi */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -3\pi/2 */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="175" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -7\pi/3 */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />    {/* -2\pi */}
                <circle cx="175" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -5\pi/3 */}
                
                {/* Подписи концов промежутка */}
                <text x="4" y="146" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-3π</text>
                {/* 👍 ИСПРАВЛЕНО: Смещено влево от оси ординат (textAnchor="end" x="114" вместо x="130") */}
                <text x="114" y="32" fill="#328ce6" textAnchor="end" className="text-[13px] text-sky-500 font-black">-3π/2</text>
                
                {/* Подпись корня на оси */}
                <text x="228" y="125" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-xs font-black">-2π</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей */}
                {/* Дробь для -5\pi/3 */}
                <g transform="translate(182, 20)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-5π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для -7\pi/3 */}
                <g transform="translate(182, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-7π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ ВЫКОЛОТЫХ ТОЧЕК И БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От правой точки 2pi против часовой стрелки до нижней 7pi/2 — ровно три четверти, I, II и III четверти) */}
                <path d="M 220 130 A 90 90 0 1 0 130 220" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 2\pi (Корень и граница совпадают) */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 7\pi/2 */}
                
                {/* Закрашенная точка истинного корня 5\pi/2 строго на оси вверху (на внутреннем контуре дуги) */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи концов промежутка, аккуратно смещённые во избежание наложений */}
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">2π</text>
                <text x="148" y="244" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">7π/2</text>
                
                {/* Подпись корня на верхней оси, смещённая влево */}
                <text x="114" y="32" fill="currentColor" textAnchor="end" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">5π/2</text>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ НАЛОЖЕНИЙ И БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От верхней точки против часовой стрелки до правой — ровно три четверти, II, III и IV четверти) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -3\pi/2 */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 0 */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="66.36" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -5\pi/4 */}
                <circle cx="193.64" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -\pi/4 */}
                
                {/* Граничные подписи, смещённые от осей */}
                <text x="114" y="32" fill="#328ce6" textAnchor="end" className="text-[13px] text-sky-500 font-black">-3π/2</text>
                <text x="234" y="118" fill="#328ce6" className="text-[13px] text-sky-500 font-black">0</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей */}
                {/* Дробь для -5\pi/4 (во II четверти, смещена влево) */}
                <g transform="translate(18, 44)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-5π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">4</text>
                </g>
  
                {/* Дробь для -\pi/4 (в IV четверти, смещена вправо-вниз) */}
                <g transform="translate(204, 202)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">4</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ НАЛОЖЕНИЙ И БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От верхней точки pi/2 против часовой стрелки до правой 2pi — ровно три четверти, II, III и IV четверти) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* \pi/2 (Корень и граница) */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 2\pi */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="85" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 2\pi/3 */}
                <circle cx="85" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 4\pi/3 */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 3\pi/2 */}
                
                {/* Подписи концов промежутка, аккуратно смещённые во избежание наложений */}
                <text x="148" y="32" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">π/2</text>
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">2π</text>
                
                {/* Подпись корня на нижней оси */}
                <text x="148" y="244" fill="currentColor" textAnchor="start" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3π/2</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей */}
                {/* Дробь для 2\pi/3 (во II четверти, вверху слева) */}
                <g transform="translate(42, 32)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">2π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для 4\pi/3 (в III четверти, внизу слева) */}
                <g transform="translate(54, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">4π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ПОД ВАШИ ТРЕБОВАНИЯ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От 2pi справа против часовой стрелки до 7pi/2 снизу — ровно три четверти) */}
                <path d="M 220 130 A 90 90 0 1 0 130 220" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ и корней на осях и дуге */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 2π */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 5π/2 */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />    {/* 3π */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 7π/2 */}
                
                {/* Закрашенные точки радиальных корней на синей дуге */}
                <circle cx="207.94" cy="85" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 13π/6 */}
                <circle cx="193.64" cy="66.36" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 9π/4 */}
                <circle cx="52.06" cy="85" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />    {/* 17π/6 */}
                <circle cx="66.36" cy="193.64" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 13π/4 */}
                
                {/* Базовые подписи осей */}
                <text x="228" y="122" fill="#328ce6" className="text-[13px] text-sky-500 font-black">2π</text>
                <text x="146" y="234" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">7π/2</text>
                <text x="22" y="146" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3π</text>
                <text x="114" y="32" fill="currentColor" textAnchor="end" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">5π/2</text>
                
                {/* Подписи в первой четверти */}
                <text x="194" y="112" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">13π/6</text>
                <text x="172" y="82" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">9π/4</text>
                
                {/* 👍 ИСПРАВЛЕНО: 17π/6 перенесена внутрь окружности, ниже и правее (под точку) */}
                <text x="76" y="104" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">17π/6</text>
                
                {/* 👍 ИСПРАВЛЕНО: 13π/4 перенесена внутрь окружности, правее (под точку) */}
                <text x="96" y="184" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-xs font-black">13π/4</text>
              </svg>
            </div>
  
            <div className="flex flex-wrap items-center gap-1">
              <span>Отмечая на тригонометрической окружности дугу промежутка и лежащие на ней точки серий решений, находим корни:</span>
              <InlineMath math={`2\\pi; \\, \\frac{13\\pi}{6}; \\, \\frac{9\\pi}{4}; \\, \\frac{17\\pi}{6}; \\, 3\\pi; \\, \\frac{13\\pi}{4}; \\, \\frac{7\\pi}{2}`} />.
            </div>
  
            <div className="font-bold text-emerald-600 dark:text-emerald-400 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/40">
              <span>Ответ: а)</span>
              <InlineMath math={`\\pi k, \\, \\frac{\\pi}{4} + \\pi k, \\, \\pm\\frac{2\\pi}{3} + 2\\pi k, \\, -\\frac{\\pi}{2} + 2\\pi k, \\, k \\in \\mathbb{Z}`} />
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
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Тонкая базовая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 1. ВНУТРЕННИЙ ПОЛНЫЙ ОБОРОТ ДУГИ (Честный круг радиуса 90) */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="#328ce6" strokeWidth="4.5" />
                
                {/* 🔥 2. ИДЕАЛЬНО ПАРАЛЛЕЛЬНЫЙ ВНЕШНИЙ ХВОСТИК (Радиус 104, идёт от pi/3 через верх, лево, низ до 4pi строго справа) */}
                <path 
                  d="M 182.00 39.96 
                     A 104 104 0 0 0 130 26 
                     A 104 104 0 0 0 26 130 
                     A 104 104 0 0 0 130 234 
                     A 104 104 0 0 0 234 130" 
                  fill="none" 
                  stroke="#328ce6" 
                  strokeWidth="4.5" 
                  strokeLinecap="round" 
                />
                
                {/* Выколотая точка старта pi/3 (на внутреннем круге радиуса 90) */}
                <circle cx="175.00" cy="52.06" r="4.5" fill={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#140e24' : '#ffffff'} stroke="#328ce6" strokeWidth="2.5" />
                
                {/* Закрашенная точка финиша 4pi (на внешнем хвостике радиуса 104) */}
                <circle cx="234" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Закрашенные сферы корней по своим виткам */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* \pi/2 на внутреннем */}
                <circle cx="130" cy="26" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* 5\pi/2 на внешнем */}
                
                {/* Подписи промежутков */}
                <text x="184" y="46" fill="#328ce6" className="text-[13px] text-sky-500 font-black">π/3</text>
                <text x="242" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">4π</text>
                
                {/* Подписи корней аккуратно внутри окружности */}
                <text x="118" y="58" fill="currentColor" textAnchor="end" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">π/2</text>
                <text x="142" y="18" fill="currentColor" textAnchor="start" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">5π/2</text>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ НАЛОЖЕНИЙ И БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От 2pi справа против часовой стрелки до 7pi/2 снизу — ровно три четверти, I, II и III четверти) */}
                <path d="M 220 130 A 90 90 0 1 0 130 220" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 2\pi */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 7\pi/2 */}
                
                {/* Закрашенная точка единственного истинного корня 7\pi/3 на синей дуге в I четверти (под 60 градусов) */}
                <circle cx="175" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />
                
                {/* Подписи концов промежутка, аккуратно смещённые во избежание наложений */}
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">2π</text>
                <text x="148" y="244" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">7π/2</text>
                
                {/* Подпись корня в виде красивой многоэтажной дроби, смещённая вправо и вверх */}
                <g transform="translate(178, 20)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">7π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ — ПОДПИСЬ -17pi/6 ВЫНЕСЕНА СНАРУЖИ СЛЕВА */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От левой точки -3pi против часовой стрелки до верхней -3pi/2 — ровно три четверти) */}
                <path d="M 40 130 A 90 90 0 1 0 130 40" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -3\pi */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* -3\pi/2 */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -5\pi/2 */}
                <circle cx="52.06" cy="175" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -17\pi/6 */}
                
                {/* Подписи концов промежутка */}
                <text x="4" y="146" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-3π</text>
                <text x="114" y="32" fill="#328ce6" textAnchor="end" className="text-[13px] text-sky-500 font-black">-3π/2</text>
                
                {/* Подпись корня на нижней оси ординат */}
                <text x="146" y="234" fill="currentColor" textAnchor="start" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-5π/2</text>
                
                {/* 👍 ИСПРАВЛЕНО: Дробь полностью вынесена наружу влево (translate x="14" y="168" вместо 42, 178) */}
                <g transform="translate(14, 168)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-17π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">6</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ ДЛЯ ТРЁХ КОРНЕЙ БЕЗ НАЛОЖЕНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От 2pi справа против часовой стрелки до 7pi/2 снизу — ровно три четверти, I, II и III четверти) */}
                <path d="M 220 130 A 90 90 0 1 0 130 220" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 2\pi */}
                <circle cx="130" cy="220" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* 7\pi/2 */}
                
                {/* Закрашенные точки трёх истинных корней на синей дуге */}
                <circle cx="207.94" cy="85" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />   {/* 13\pi/6 */}
                <circle cx="85" cy="52.06" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />     {/* 8\pi/3 */}
                <circle cx="85" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />    {/* 10\pi/3 */}
                
                {/* Подписи концов промежутка, аккуратно смещённые во избежание наложений */}
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">2π</text>
                <text x="148" y="244" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">7π/2</text>
                
                {/* Подписи корней в виде красивых многоэтажных дробей, вынесенные наружу */}
                {/* Дробь для 13\pi/6 (в I четверти, вверху справа) */}
                <g transform="translate(204, 52)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">13π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">6</text>
                </g>
  
                {/* Дробь для 8\pi/3 (во II четверти, вверху слева) */}
                <g transform="translate(54, 20)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">8π</text>
                  <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
  
                {/* Дробь для 10\pi/3 (в III четверти, внизу слева) */}
                <g transform="translate(54, 214)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">10π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">3</text>
                </g>
              </svg>
            </div>
  
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
            
            {/* 🌌 КРИСТАЛЬНО ЧИСТЫЙ SVG ЧЕРТЁЖ ОКРУЖНОСТИ БЕЗ НАЛОЖЕНИЙ И БЕЗ ПУНКТИРНЫХ ЛИНИЙ */}
            <div className="my-6 flex justify-center w-full select-none">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible font-sans font-bold text-xs">
                {/* Сетка и оси координат */}
                <line x1="10" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <line x1="130" y1="10" x2="130" y2="250" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Стрелочки осей */}
                <path d="M250 130 l-6 -3 M250 130 l-6 3" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                <path d="M130 10 l-3 6 M130 10 l 3 6" stroke="currentColor" strokeWidth="1.2" className="text-slate-900 dark:text-slate-400" />
                
                {/* Главная тонкая окружность радиуса 90 */}
                <circle cx="130" cy="130" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
                
                {/* 🔥 ЖИРНАЯ СИНЯЯ ДУГА ПО ОКРУЖНОСТИ (От верхней точки -7pi/2 против часовой стрелки до правой -2pi — ровно три четверти, II, III и IV четверти) */}
                <path d="M 130 40 A 90 90 0 1 0 220 130" fill="none" stroke="#328ce6" strokeWidth="4.5" strokeLinecap="round" />
                
                {/* Закрашенные точки границ отрезка */}
                <circle cx="130" cy="40" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />  {/* -7\pi/2 */}
                <circle cx="220" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -2\pi (Корень и граница) */}
                
                {/* Закрашенные точки истинных корней на синей дуге */}
                <circle cx="40" cy="130" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" />    {/* -3\pi */}
                <circle cx="175" cy="207.94" r="4.5" fill="currentColor" className="text-slate-900 dark:text-slate-100" /> {/* -13\pi/6 */}
                
                {/* Подписи концов промежутка, аккуратно смещённые во избежание наложений */}
                <text x="148" y="32" fill="#328ce6" textAnchor="start" className="text-[13px] text-sky-500 font-black">-7π/2</text>
                <text x="228" y="125" fill="#328ce6" className="text-[13px] text-sky-500 font-black">-2π</text>
                
                {/* Подпись корня на левой горизонтальной оси */}
                <text x="14" y="146" fill="currentColor" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-3π</text>
                
                {/* Подпись корня в виде красивой многоэтажной дроби снаружи в IV четверти */}
                <g transform="translate(178, 212)">
                  <text x="14" y="10" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">-13π</text>
                  <line x1="0" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="1.2" />
                  <text x="14" y="25" fill="currentColor" textAnchor="middle" className="text-slate-800 dark:text-slate-200 text-[13px] font-black">6</text>
                </g>
              </svg>
            </div>
  
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
        mathA: '\\sin x \\cdot \\left(\\sin x \\cdot \\cos^{-1} x + \\frac{1}{3}\\right) = \\sqrt{3} \\cdot \\left(\\sin x + \\frac{1}{3}\\cos x\\right)',
        mathB: '\\left[ -2\\pi; \\, \\frac{3\\pi}{2} \\right]',
        solutionBuilder: () => (
          <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <p className="font-bold text-slate-800 dark:text-slate-100">а) Решение уравнения:</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>Здесь</span>
              <InlineMath math={`\\cos^{-1} x = \\frac{1}{\\cos x}`} />.
              <span>ОГР:</span>
              <InlineMath math={`\\cos x \\neq 0`} />.
            </div>
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
            <p>Аналогичное диофантово уравнение приводит к требованию, чтобы чётное число равнялось нечётному — в этом случае решений нет.</p>
            
            <div className="flex flex-wrap items-center gap-1">
              <span>Итого общее решение:</span>
              <InlineMath math={`x = 3\\pi + 12\\pi t, \\, t \\in \\mathbb{Z}`} />
              <span>(проверка: при</span>
              <InlineMath math={`t = 0 \\implies x = 3\\pi`} />
              <span>имеем</span>
              <InlineMath math={`\\cos 18\\pi = 1, \\, \\sin \\frac{15\\pi}{6} = \\sin \\frac{5\\pi}{2} = 1`} /> — <span>верно).</span>
            </div>
  
            <p className="font-bold text-slate-800 dark:text-slate-100 pt-2 border-t border-slate-200/40">б) Отбор корней:</p>
            <p>Отберём корни уравнения, принадлежащие числовому отрезку <InlineMath math={`[7; \\, 50]`} />, при помощи строгих алгебраических неравенств.</p>
            <p>Составим неравенство для серии корней: <InlineMath math={`7 \\le 3\\pi + 12\\pi t \\le 50`} /></p>
  
            <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для t = 0:</span>
                <InlineMath math={`x = 3\\pi`} />.
                <span>Так как</span>
                <InlineMath math={`3 \\cdot 3{,}14 = 9{,}42`} />,
                <span>выполняется точное строгое неравенство</span>
                <InlineMath math={`7 < 3\\pi < 50`} /> — <span>корень подходит.</span>
              </div>
  
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для t = 1:</span>
                <InlineMath math={`x = 3\\pi + 12\\pi = 15\\pi`} />.
                <span>Так как</span>
                <InlineMath math={`15 \\cdot 3{,}14 = 47{,}1`} />,
                <span>выполняется точное строгое неравенство</span>
                <InlineMath math={`7 < 15\\pi < 50`} /> — <span>корень подходит.</span>
              </div>
  
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для t = 2:</span>
                <InlineMath math={`x = 3\\pi + 24\\pi = 27\\pi`} />.
                <span>Так как</span>
                <InlineMath math={`27 \\cdot 3{,}14 = 84{,}78 > 50`} />,
                <span>то</span>
                <InlineMath math={`27\\pi > 50`} /> — <span>значение лежит правее отрезка, не подходит.</span>
              </div>
  
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• Для t = -1:</span>
                <InlineMath math={`x = 3\\pi - 12\\pi = -9\\pi`} />.
                <span>Так как это значение отрицательно, то</span>
                <InlineMath math={`-9\\pi < 7`} /> — <span>значение лежит левее отрезка, не подходит.</span>
              </div>
            </div>
  
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
            <p>Отберём корни уравнения, принадлежащие отрезку <InlineMath math={`\\left[ -\\frac{3\\pi}{2}; \\, -\\pi \\right]`} />, при помощи неравенств (прямым перебором целых значений <InlineMath math={`font-mono n`} />).</p>
  
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
            <p>Отберём корни уравнения, принадлежащие отрезку <InlineMath math={`[-17; \\, 2]`} />, при помощи строгих аналитических неравенств.</p>
            <p>Составим двойное неравенство для серии корней: <InlineMath math={`-17 \\le \\frac{2\\pi}{3} + 2\\pi k \\le 2`} /></p>
  
            <div className="space-y-3 pl-4 border-l-2 border-slate-200 dark:border-purple-500/20 text-sm">
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• При k = -3:</span>
                <InlineMath math={`x = \\frac{2\\pi}{3} - 6\\pi = -\\frac{16\\pi}{3}`} />.
                <span>Так как</span>
                <InlineMath math={`-\\frac{16 \\cdot 3{,}14}{3} = -16{,}746 > -17`} />,
                <span>выполняется точное строгое неравенство</span>
                <InlineMath math={`-17 \\le -\\frac{16\\pi}{3} \\le 2`} /> — <span>корень подходит.</span>
              </div>
  
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• При k = -2:</span>
                <InlineMath math={`x = \\frac{2\\pi}{3} - 4\\pi = -\\frac{10\\pi}{3}`} />.
                <span>Так как</span>
                <InlineMath math={`-\\frac{10 \\cdot 3{,}14}{3} = -10{,}46 > -17`} />,
                <span>выполняется точное строгое неравенство</span>
                <InlineMath math={`-17 \\le -\\frac{10\\pi}{3} \\le 2`} /> — <span>корень подходит.</span>
              </div>
  
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• При k = -1:</span>
                <InlineMath math={`x = \\frac{2\\pi}{3} - 2\\pi = -\\frac{4\\pi}{3}`} />.
                <span>Так как</span>
                <InlineMath math={`-\\frac{4 \\cdot 3{,}14}{3} = -4{,}18 > -17`} />,
                <span>выполняется точное строгое неравенство</span>
                <InlineMath math={`-17 \\le -\\frac{4\\pi}{3} \\le 2`} /> — <span>корень подходит.</span>
              </div>
  
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-semibold text-sky-600 dark:text-purple-400">• При k = 0:</span>
                <InlineMath math={`x = \\frac{2\\pi}{3}`} />.
                <span>Так как</span>
                <InlineMath math={`\\frac{2 \\cdot 3{,}14}{3} = 2{,}09 > 2`} />,
                <span>то</span>
                <InlineMath math={`\\frac{2\\pi}{3} > 2`} /> — <span>значение лежит правее отрезка, не подходит.</span>
              </div>
            </div>
  
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
                <p>Составим inequality: <InlineMath math={`-\\frac{3\\pi}{4} \\le -\\frac{\\pi}{12} + \\frac{\\pi n}{2} \\le \\pi \\implies -\\frac{9}{12} \\le -\\frac{1}{12} + \\frac{n}{2} \\le \\frac{12}{12}`} /></p>
                <p>Прибавим <InlineMath math={`\\frac{1}{12}`} /> и умножим на 2: <InlineMath math={`-\\frac{8}{12} \\le \\frac{n}{2} \\le \\frac{13}{12} \\implies -\\frac{4}{3} \\le n \\le \\frac{13}{6}`} />.</p>
                <div className="flex flex-wrap items-center gap-1">
                  <span>Целые значения</span>
                  <InlineMath math={`n \\in \\{-1; \\, 0; \\, 1; \\, 2\\}`} />.
                  <span>Корни:</span>
                  <InlineMath math={`-\\frac{7\\pi}{12}; \\, -\\frac{\\pi}{12}; \\, \\frac{5\\pi}{12}; \\, \\frac{11\\pi}{12}`} />.
                </div>
              </div>
            </div>
  
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
