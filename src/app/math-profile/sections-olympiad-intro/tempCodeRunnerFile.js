        <div className="space-y-2 border-t border-slate-200/40 pt-2">
          <div>
            Оценим границы суммарной погрешности округления. Поскольку каждая из трёх величин строго зажата в интервале <InlineMath math={`(-0.5; \\ 0.5)`} />, их сумма удовлетворяет неравенству:
          </div>
          <BlockMath math={`-1.5 < \\varepsilon_1 + \\varepsilon_2 + \\varepsilon_3 < 1.5`} />
          <div>
            Выразим значение <InlineMath math={`11x`} /> и подставим в полученные границы:
          </div>
          <BlockMath math={`11x = 120 - (\\varepsilon_1 + \\varepsilon_2 + \\varepsilon_3) \\implies 120 - 1.5 < 11x < 120 + 1.5`} />
          <BlockMath math={`118.5 < 11x < 121.5 \\iff 10 \\dfrac{17}{22} < x < 11 \\dfrac{1}{22}`} />
          <div>
            Внутри этого узкого диапазона лежит единственное целое число 11. Следовательно, искомая дробь находится в интервале <InlineMath math={`(10 \\dfrac{17}{22}; \\ 11)`} />. Представим <InlineMath math={`x`} /> через его отклонение от целого числа:
          </div>
          <BlockMath math={`x = 11 - \\dfrac{r}{n}`} />
          <div>
            Где <InlineMath math={`n`} /> — однозначный знаменатель (<InlineMath math={`1 \\le n \\le 9`} />), а <InlineMath math={`r`} /> — натуральный остаток.
          </div>
        </div>