import json
from fractions import Fraction as F
from pathlib import Path

root=Path(__file__).resolve().parents[2]
schedules_path=root/'src/lib/ege16-financial-schedules.json'
old=json.loads(schedules_path.read_text(encoding='utf-8'))
schedules={k:v for k,v in old.items() if int(k)<1000}
tasks=[]

def fmt(x):
    x=F(x)
    if x.denominator==1:return str(x.numerator)
    v=x.denominator
    for a in (2,5):
        while v%a==0:v//=a
    if v!=1:return r'\frac{%s}{%s}'%(x.numerator,x.denominator)
    negative=x<0;x=abs(x);k=0;z=x.denominator
    while z>1:
        z//=2 if z%2==0 else 5;k+=1
    k=max(k,1)
    while (10**k)%x.denominator:k+=1
    n=x.numerator*(10**k//x.denominator);a,b=divmod(n,10**k)
    return ('-' if negative else '')+str(a)+'{,}'+str(b).zfill(k).rstrip('0')
def num(x):
    t=fmt(x)
    assert not t.startswith('\\frac'),(x,t)
    return t.replace('{,}',',')
def formula(label,expr):return label+': $'+expr+'$.'
def add(kind,prompt,steps,answer,rows=None,intro='',columns=None,model=None):
    i=3001+len(tasks)
    tasks.append({'id':i,'title':f'Задача {42+len(tasks)}','wordProblemPrompt':prompt,'steps':steps,'solutionAnswer':num(answer),'kind':kind,'model':model or {}})
    if rows:
        schedules[str(i)]={'intro':intro,'columns':columns or ['Период','Долг до начисления %','Долг после начисления %','Выплата','Долг после выплаты'], 'rows':[[str(v) for v in row] for row in rows]}

def signed(x):return ('+'+fmt(x)) if x>=0 else ('-'+fmt(-x))
# 1–12. 9-month two-stage scheme, with four different questions.
for mode in range(4):
 for j in range(3):
    a=F(14+2*j+mode);b=F(21+2*j+2*mode);S=4*a+5*b;r=F(11+2*j+mode,100);u=F(19+2*j+mode,100)
    debts=[];bal=S;reductions=[a]*4+[b]*5
    for d in reductions:debts.append(bal);bal-=d
    A=sum(debts[:4],F(0));B=sum(debts[4:],F(0));over=r*A+u*B;total=S+over
    payments=[d+D*(r if i<4 else u) for i,(D,d) in enumerate(zip(debts,reductions))]
    min1=payments[3];min2=payments[-1];first=payments[0];last=payments[-1];first4=sum(payments[:4],F(0))
    answer=[min(min1,min2),100*r,first4,first-last][mode]
    question=['Найдите наименьший платёж в тысячах рублей.','Найдите процентную ставку $r$ первых четырёх месяцев.','Найдите общую сумму первых четырёх платежей в тысячах рублей.','На сколько тысяч рублей первый платёж больше последнего?'][mode]
    prompt=(f'Кредит {num(S)} тыс. рублей взят на девять месяцев. Перед платежом каждого из первых четырёх месяцев долг увеличивается на $r\\%$, а каждого из следующих пяти месяцев — на {num(100*u)}%. После каждого из первых четырёх платежей основной долг уменьшается на {num(a)} тыс. рублей. После каждого из последующих пяти платежей основной долг уменьшается на одну и ту же сумму, а после девятого платежа равен нулю. Общая сумма выплат составляет {num(total)} тыс. рублей. '+question)
    rows=[]
    for i,(D,d) in enumerate(zip(debts,reductions)):
        rate='r/100' if i<4 else fmt(u)
        rows.append([i+1,fmt(D),fmt(D)+'(1+'+rate+')',fmt(d)+'+'+fmt(D)+'\\cdot '+rate,fmt(D-d)])
    steps=[f'Будем считать суммы в тысячах рублей. Пусть $y$ — уменьшение основного долга в каждом из последних пяти месяцев; $r$ — ставка первых четырёх месяцев в процентах.',formula('За первые четыре месяца основной долг уменьшился на',f'4\\cdot {fmt(a)}={fmt(4*a)}'),formula('Поэтому к началу пятого месяца долг равен',f'{fmt(S)}-{fmt(4*a)}={fmt(5*b)}'),formula('За последние пять месяцев этот остаток погашается равными частями',f'5y={fmt(5*b)}\\quad\\Longrightarrow\\quad y={fmt(b)}'),f'В таблице показаны долг до и после начисления процентов, выплата и остаток для каждого месяца.',formula('Сумма долгов, на которые начисляются проценты за первые четыре месяца','+'.join(fmt(x) for x in debts[:4])+'='+fmt(A)),formula('Сумма долгов для последующих пяти месяцев','+'.join(fmt(x) for x in debts[4:])+'='+fmt(B)),formula('Переплата равна сумме выплат за вычетом первоначального кредита',f'{fmt(total)}-{fmt(S)}={fmt(over)}'),formula('Составим уравнение по сумме начисленных процентов',f'{fmt(over)}={fmt(A)}\\cdot r/100+{fmt(u)}\\cdot {fmt(B)}'),formula('Вычислим известную процентную часть',f'{fmt(u)}\\cdot {fmt(B)}={fmt(u*B)}'),formula('Выразим неизвестную ставку',f'{fmt(A)}r/100={fmt(over-u*B)}\\quad\\Longrightarrow\\quad r={fmt(100*r)}') ]
    if mode==0:steps += [f'При положительных ставках и одинаковом уменьшении долга внутри каждой группы платежи убывают. Поэтому достаточно сравнить четвёртый и девятый платежи.',formula('Наименьший платёж среди первых четырёх',f'V_4={fmt(a)}+{fmt(r)}\\cdot {fmt(debts[3])}={fmt(min1)}'),formula('Наименьший платёж среди последних пяти',f'V_9={fmt(b)}+{fmt(u)}\\cdot {fmt(debts[-1])}={fmt(min2)}'),formula('Сравним эти платежи',f'\\min({fmt(min1)};{fmt(min2)})={fmt(answer)}')]
    if mode==1:steps += [formula('Проверим сумму начисленных процентов',f'{fmt(r)}\\cdot{fmt(A)}+{fmt(u)}\\cdot{fmt(B)}={fmt(over)}'),f'Следовательно, ставка в первых четырёх месяцах равна ${fmt(100*r)}\\%$.']
    if mode==2:
      steps += [formula('Выплата за месяц '+str(i+1),f'V_{i+1}={fmt(a)}+{fmt(r)}\\cdot{fmt(debts[i])}={fmt(payments[i])}') for i in range(4)]
      steps += [formula('Сумма первых четырёх платежей','+'.join(fmt(payments[i]) for i in range(4))+'='+fmt(first4))]
    if mode==3:steps += [formula('Первый платёж',f'V_1={fmt(a)}+{fmt(r)}\\cdot{fmt(S)}={fmt(first)}'),formula('Последний платёж',f'V_9={fmt(b)}+{fmt(u)}\\cdot{fmt(debts[-1])}={fmt(last)}'),formula('Разность первого и последнего платежей',f'V_1-V_9={fmt(first)}-{fmt(last)}={fmt(answer)}')]
    add(['двухэтапный кредит: минимум платежа','двухэтапный кредит: поиск ставки','двухэтапный кредит: сумма части платежей','двухэтапный кредит: сравнение платежей'][mode],prompt,steps,answer,rows,'В таблице $r$ — ставка первых четырёх месяцев в процентах; все суммы указаны в тысячах рублей.',model={'family':'two_phase_nine','S':str(S),'a':str(a),'b':str(b),'r':str(r),'u':str(u),'total':str(total),'answer_mode':mode})
# 13–24. Varying interest rates; derive the weighted sum explicitly.
for mode in range(4):
 for j in range(3):
    S=F(1000+500*j+250*mode); r=F(18+2*j+mode); offsets=([0,-2,-4,-6,-8] if mode in (0,2) else [0,2,4,6,8]); reductions=([F(1,5)]*5 if mode<2 else [F(1,10),F(1,5),F(3,10),F(1,5),F(1,5)])
    bal=S;debts=[]
    for f in reductions:debts.append(bal);bal-=S*f
    assert bal==0
    A=sum(debts,F(0));C=sum((D*o for D,o in zip(debts,offsets)),F(0));interest=(r*A+C)/100;total=S+interest
    payments=[S*f+D*(r+o)/100 for f,D,o in zip(reductions,debts,offsets)]
    answer=(r if mode<2 else min(payments)); label='Найдите начальную ставку $r$.' if mode<2 else 'Найдите наименьший из пяти платежей в тысячах рублей.'
    direction='меньше' if offsets[-1]<0 else 'больше';step=abs(offsets[1])
    if mode<2: repayment='После каждого платежа основной долг уменьшается на одну пятую первоначальной суммы; последний платёж полностью погашает кредит.'
    else: repayment='После первого, второго, третьего, четвёртого и пятого платежей основной долг уменьшается соответственно на 10%, 20%, 30%, 20% и 20% первоначальной суммы кредита.'
    prompt=f'Кредит {num(S)} тыс. рублей взят на пять лет. Перед первым платежом банк увеличивает долг на $r\\%$, перед каждым следующим платежом процентная ставка на {step} процентных пункта {direction}, чем в предыдущем году. {repayment} Сумма всех выплат составляет {num(total)} тыс. рублей. '+label
    rows=[]
    for i,(D,f,o) in enumerate(zip(debts,reductions,offsets)):
      rate='r'+signed(F(o)) if o else 'r';down=S*f
      rows.append([i+1,fmt(D),fmt(D)+'(1+('+rate+')/100)',fmt(down)+'+'+fmt(D)+'('+rate+')/100',fmt(D-down)])
    pol=' + '.join(fmt(D)+'('+('r'+signed(F(o)) if o else 'r')+')' for D,o in zip(debts,offsets))
    steps=[f'Обозначим ставку первого года через $r$ процентов. Во всех вычислениях используем тысячи рублей.',f'В каждом году выплата состоит из начисленных процентов и части первоначального долга, которая погашается в этом году.',formula('Последовательно найдём долги перед начислением процентов',','.join(fmt(D) for D in debts)),formula('Погашенные части основного долга в пяти выплатах',','.join(fmt(S*f) for f in reductions)),f'Сумма погашенных частей равна ${fmt(S)}$ — первоначальному кредиту.',formula('Поэтому суммарные проценты составляют',f'{fmt(total)}-{fmt(S)}={fmt(interest)}'),formula('По таблице сумма процентных частей',f'({pol})/100'),formula('Соберём слагаемые с $r$ и числовые слагаемые',f'({fmt(A)}r{signed(C)})/100'),formula('Составим уравнение по сумме процентов',f'({fmt(A)}r{signed(C)})/100={fmt(interest)}'),formula('Умножим на 100',f'{fmt(A)}r{signed(C)}={fmt(100*interest)}'),formula('Перенесём известное слагаемое',f'{fmt(A)}r={fmt(100*interest-C)}'),formula('Найдём начальную ставку',f'r={fmt(r)}')]
    steps[3:3] = [formula('Остаток после платежа за год '+str(i+1),fmt(debts[i])+'-'+fmt(S*reductions[i])+'='+fmt(debts[i]-S*reductions[i])) for i in range(5)]
    if mode>=2:
      steps += [f'Подставим найденную ставку в каждую из пяти выплат и сравним результаты.']
      steps += [formula('Выплата за год '+str(i+1),fmt(S*reductions[i])+'+'+fmt(debts[i])+'\\cdot'+fmt((r+offsets[i])/100)+'='+fmt(payments[i])) for i in range(5)]
      steps += [formula('Наименьшая выплата',f'\\min({";".join(fmt(v) for v in payments)})={fmt(answer)}')]
    else: steps += [f'При найденном $r$ все указанные в условии годовые ставки положительны.']
    add(['ставка ежегодно уменьшается','ставка ежегодно увеличивается','разные доли кредита и убывающая ставка','разные доли кредита и возрастающая ставка'][mode],prompt,steps,answer,rows,'В таблице $r$ — начальная ставка в процентах; суммы указаны в тысячах рублей.',model={'family':'varying_rate','S':str(S),'r':str(r),'offsets':offsets,'reductions':[str(x) for x in reductions],'total':str(total),'answer_mode':mode})
# 25–36. Equal and unequal annual payments; equations are derived year by year.
for mode in range(4):
 for j,p in enumerate([F(11,10),F(6,5),F(5,4)]):
    k=F(20000+4000*j+6000*mode);n=2 if mode==1 else (4 if mode==3 else 3)
    if mode==1:
      S=k*(p+1);x=k*p*p; over=2*x-S;payments=[x,x]
      prompt=(f'Кредит {num(S)} тыс. рублей планируется погасить за два года двумя равными платежами. Перед каждым платежом банк увеличивает оставшийся долг на один и тот же положительный процент. Общая сумма выплат на {num(over)} тыс. рублей больше первоначальной суммы кредита. Найдите годовую процентную ставку.')
      disc=x*x+4*S*x;sq=2*S*p-x
      rows=[[1,fmt(S),fmt(S)+'p','x',fmt(S)+'p-x'],[2,fmt(S)+'p-x','p('+fmt(S)+'p-x)','x','0']]
      steps=[f'Обозначим равный ежегодный платёж через $x$ тыс. рублей, годовой коэффициент увеличения долга — через $p=1+r/100$. Поскольку ставка положительна, $p>1$.',formula('По условию сумма платежей','2x='+fmt(S)+'+'+fmt(over)),formula('Отсюда платёж равен','x='+fmt(x)),formula('После первого начисления долг составляет',fmt(S)+'p'),formula('После первого платежа долг равен',fmt(S)+'p-'+fmt(x)),formula('В начале второго года долг увеличивается до','p('+fmt(S)+'p-'+fmt(x)+')'),formula('Второй платёж полностью гасит кредит','p('+fmt(S)+'p-'+fmt(x)+')='+fmt(x)),formula('Раскроем скобки и перенесём все слагаемые',fmt(S)+'p^2-'+fmt(x)+'p-'+fmt(x)+'=0'),formula('Найдём дискриминант','D='+fmt(x)+'^2+4\\cdot'+fmt(S)+'\\cdot'+fmt(x)+'='+fmt(disc)),formula('Выделим полный квадрат','D='+fmt(sq)+'^2'),formula('По формуле корней','p=('+fmt(x)+'\\pm'+fmt(sq)+')/(2\\cdot'+fmt(S)+')'),formula('Положительный корень',f'p={fmt(p)}'),f'Второй корень отрицателен: числитель при знаке минус меньше нуля. Он не подходит, поскольку $p>1$.',formula('Найдём процентную ставку','r=100(p-1)=100('+fmt(p)+'-1)='+fmt((p-1)*100))]
      answer=(p-1)*100;model={'family':'annuity_rate','S':str(S),'p':str(p),'x':str(x),'over':str(over)};kind='два равных платежа: ставка и дискриминант'
    elif mode==2:
      x=k*p**3;d=x/2;S=(x*(p*p+p+1)+d*(p+2))/p**3;total=3*x+3*d
      payments=['x','x+'+fmt(d),'x+'+fmt(2*d)]
      prompt=(f'Кредит {num(S)} тыс. рублей выдан на три года под {num((p-1)*100)}% годовых. Проценты начисляются перед ежегодным платежом. Второй платёж на {num(d)} тыс. рублей больше первого, а третий на {num(d)} тыс. рублей больше второго. После третьего платежа долг погашен. Найдите общую сумму трёх платежей в тысячах рублей.')
      rows=[[1,fmt(S),fmt(S)+'p','x','D_1'],[2,'D_1','pD_1','x+'+fmt(d),'D_2'],[3,'D_2','pD_2','x+'+fmt(2*d),'0']]
      P=p*p+p+1;constant=d*(p+2); lhs=S*p**3
      steps=[f'Пусть первый платёж равен $x$ тыс. рублей, тогда второй — $x+{fmt(d)}$, третий — $x+{fmt(2*d)}$. Коэффициент роста долга $p={fmt(p)}$.',f'В таблице $D_1$ и $D_2$ обозначают остатки после первого и второго платежей.',formula('После первого года','D_1='+fmt(S)+'p-x'),formula('После второго года','D_2=pD_1-(x+'+fmt(d)+')'),formula('Подставим выражение для первого остатка','D_2=p('+fmt(S)+'p-x)-x-'+fmt(d)),formula('После раскрытия скобок','D_2='+fmt(S)+'p^2-(p+1)x-'+fmt(d)),formula('Третий платёж полностью закрывает долг','pD_2=x+'+fmt(2*d)),formula('Подставим найденный остаток',fmt(S)+'p^3-p(p+1)x-'+fmt(d)+'p=x+'+fmt(2*d)),formula('Перенесём слагаемые с платежами вправо',fmt(S)+'p^3=(p^2+p+1)x+'+fmt(d)+'(p+2)'),formula('Подставим значение коэффициента процентов',fmt(lhs)+'='+fmt(P)+'x+'+fmt(constant)),formula('Вычтем известное слагаемое',fmt(P)+'x='+fmt(lhs-constant)),formula('Отсюда первый платёж','x='+fmt(x)),formula('Сумма всех трёх платежей','x+(x+'+fmt(d)+')+(x+'+fmt(2*d)+')='+fmt(total))]
      answer=total;model={'family':'annuity_arithmetic','S':str(S),'p':str(p),'x':str(x),'d':str(d),'total':str(total)};kind='три платежа: арифметическая прогрессия'
    else:
      P=sum((p**z for z in range(n)),F(0));x=k*p**n;S=k*P;over=n*x-S
      prompt=(f'Кредит берут на {n} года и возвращают равными ежегодными платежами. Перед каждым платежом долг увеличивается на {num((p-1)*100)}%. После последнего платежа долг равен нулю. Общая сумма выплат на {num(over)} тыс. рублей больше суммы кредита. Найдите первоначальную сумму кредита в тысячах рублей.')
      rows=[]
      for i in range(1,n+1):
        pre='S' if i==1 else 'D_{'+str(i-1)+'}';post='p'+pre
        rows.append([i,pre,post,'x','0' if i==n else 'D_{'+str(i)+'}'])
      coef=n*p**n-P
      steps=[f'Обозначим сумму кредита через $S$ тыс. рублей, равный ежегодный платёж — через $x$, коэффициент начисления процентов — через $p={fmt(p)}$.',f'В таблице $D_i$ — долг сразу после $i$-го платежа. Запишем остатки последовательно.',formula('После первого года','D_1=pS-x'),formula('После второго года','D_2=p(pS-x)-x=p^2S-(p+1)x'),formula('После третьего года','D_3=p^3S-(p^2+p+1)x')]
      if n==3:steps += [formula('Третий платёж полностью погасил долг','D_3=0'),formula('Следовательно','p^3S=(p^2+p+1)x')]
      else:steps += [formula('После четвёртого года','D_4=p^4S-(p^3+p^2+p+1)x'),formula('Последний платёж погасил долг','D_4=0'),formula('Следовательно','p^4S=(p^3+p^2+p+1)x')]
      steps += [formula('Подставим значение коэффициента процентов',fmt(p**n)+'S='+fmt(P)+'x'),formula('Общая переплата равна',str(n)+'x-S='+fmt(over)),formula('Из последнего равенства выразим платёж','x=(S+'+fmt(over)+')/'+str(n)),formula('Подставим это выражение в первое уравнение',fmt(p**n)+'S='+fmt(P)+'(S+'+fmt(over)+')/'+str(n)),formula('Умножим обе части на число платежей',fmt(n*p**n)+'S='+fmt(P)+'S+'+fmt(P*over)),formula('Перенесём слагаемые с неизвестным влево',fmt(coef)+'S='+fmt(P*over)),formula('Найдём первоначальную сумму','S='+fmt(S)),formula('Проверим равный платёж','x=('+fmt(S)+'+'+fmt(over)+')/'+str(n)+'='+fmt(x)),formula('Проверим общую переплату',str(n)+'\\cdot'+fmt(x)+'-'+fmt(S)+'='+fmt(over))]
      answer=S;model={'family':'annuity_equal','S':str(S),'p':str(p),'x':str(x),'over':str(over),'n':n};kind=['три равных платежа: сумма кредита','','','четыре равных платежа: сумма кредита'][mode]
    add(kind,prompt,steps,answer,rows,'В таблице все суммы указаны в тысячах рублей; $p$ — коэффициент начисления процентов.',model=model)
# 37–48. Deposit models with full numerical derivation.
for mode in range(4):
 for j,p in enumerate([F(11,10),F(6,5),F(5,4)]):
    k=F(34000+4000*j+6000*mode)
    if mode==0:
      S=k*(p*p+p+1);x=k*p**3;over=3*x-S;P=p*p+p+1;coef=3*p**3-P
      prompt=f'Клиент открыл вклад на три года под {num((p-1)*100)}% годовых. В конце каждого года банк начисляет проценты, после чего клиент снимает одну и ту же сумму. После третьего снятия на счёте ничего не остаётся. Общая сумма снятий на {num(over)} тыс. рублей больше первоначального вклада. Найдите первоначальный вклад в тысячах рублей.'
      rows=[[1,'S','pS','-x','D_1'],[2,'D_1','pD_1','-x','D_2'],[3,'D_2','pD_2','-x','0']]
      steps=[f'Пусть $S$ — первоначальный вклад, $x$ — ежегодная сумма снятия, $p={fmt(p)}$ — коэффициент ежегодного увеличения. Все суммы выражены в тысячах рублей.',f'Обозначим остатки после снятий через $D_1$, $D_2$.',formula('После первого начисления и снятия','D_1=pS-x'),formula('После второго начисления и снятия','D_2=pD_1-x'),formula('Подставим выражение для $D_1$','D_2=p(pS-x)-x=p^2S-(p+1)x'),formula('Третье снятие обнуляет счёт','pD_2-x=0'),formula('После подстановки и раскрытия скобок','p^3S=(p^2+p+1)x'),formula('Подставим числовое значение $p$',fmt(p**3)+'S='+fmt(P)+'x'),formula('Общая сумма снятий больше первоначального вклада на указанную величину','3x-S='+fmt(over)),formula('Выразим ежегодное снятие','x=(S+'+fmt(over)+')/3'),formula('Подставим его в уравнение по таблице',fmt(p**3)+'S='+fmt(P)+'(S+'+fmt(over)+')/3'),formula('Умножим на 3 и перенесём слагаемые с $S$',fmt(coef)+'S='+fmt(P*over)),formula('Найдём первоначальный вклад','S='+fmt(S)),formula('Проверим величину ежегодного снятия','x=('+fmt(S)+'+'+fmt(over)+')/3='+fmt(x)),formula('Проверим разность суммы снятий и вклада','3\\cdot'+fmt(x)+'-'+fmt(S)+'='+fmt(over))]
      answer=S;model={'family':'deposit_equal','S':str(S),'p':str(p),'x':str(x),'over':str(over)};kind='вклад с тремя равными снятиями'
    elif mode==1:
      S=k*(p*p+2*p+3);x=k*p**3;total=6*x
      prompt=f'На счёт положили {num(S)} тыс. рублей на три года под {num((p-1)*100)}% годовых. В конце каждого года после начисления процентов клиент снимает деньги. Второе снятие в два раза, а третье — в три раза больше первого. После третьего снятия счёт пуст. Найдите общую сумму снятий в тысячах рублей.'
      rows=[[1,fmt(S),fmt(S)+'p','-x','D_1'],[2,'D_1','pD_1','-2x','D_2'],[3,'D_2','pD_2','-3x','0']]
      P=p*p+2*p+3;lhs=S*p**3
      steps=[f'Пусть первое снятие равно $x$ тыс. рублей. Тогда второе равно $2x$, третье — $3x$. Коэффициент начисления $p={fmt(p)}$.',f'Обозначим остатки после первых двух снятий через $D_1$ и $D_2$.',formula('Первый год','D_1='+fmt(S)+'p-x'),formula('Второй год','D_2=pD_1-2x'),formula('Подставим первый остаток','D_2=p('+fmt(S)+'p-x)-2x'),formula('Раскроем скобки','D_2='+fmt(S)+'p^2-(p+2)x'),formula('После третьего начисления снимаются все деньги','pD_2-3x=0'),formula('Подставим $D_2$',fmt(S)+'p^3-p(p+2)x-3x=0'),formula('Соберём слагаемые с $x$',fmt(S)+'p^3=(p^2+2p+3)x'),formula('Подставим значение $p$',fmt(lhs)+'='+fmt(P)+'x'),formula('Найдём первое снятие','x='+fmt(x)),formula('Второе снятие','2x='+fmt(2*x)),formula('Третье снятие','3x='+fmt(3*x)),formula('Сложим все три суммы','x+2x+3x=6\\cdot'+fmt(x)+'='+fmt(total))]
      answer=total;model={'family':'deposit_123','S':str(S),'p':str(p),'x':str(x),'total':str(total)};kind='вклад: снятия в отношении 1:2:3'
    elif mode==2:
      p1=F(11,10);p2=F(6,5);p3=F(5,4);S=F(1200+400*j);c=F(300+100*j);w=F(180+60*j);v1=S*p1+c;v2=v1*p2-w;end=v2*p3;coef=p1*p2*p3;const=c*p2*p3-w*p3
      prompt=f'Вклад открыт на три года. В конце первого года банк начисляет 10%, после чего счёт пополняют на {num(c)} тыс. рублей. В конце второго года банк начисляет 20%, после чего со счёта снимают {num(w)} тыс. рублей. В конце третьего года банк начисляет 25% на оставшуюся сумму. После третьего начисления на счёте оказалось {num(end)} тыс. рублей. Найдите первоначальную сумму вклада в тысячах рублей.'
      rows=[[1,'S',fmt(p1)+'S','+'+fmt(c),'D_1'],[2,'D_1',fmt(p2)+'D_1','-'+fmt(w),'D_2'],[3,'D_2',fmt(p3)+'D_2','0',fmt(end)]]
      steps=[f'Пусть $S$ — первоначальный вклад в тысячах рублей. Обозначим остатки после операций первого и второго года через $D_1$ и $D_2$.',formula('После начисления 10% за первый год на счёте',fmt(p1)+'S'),formula('После пополнения первого года','D_1='+fmt(p1)+'S+'+fmt(c)),formula('После начисления 20% за второй год на счёте',fmt(p2)+'D_1'),formula('После снятия во втором году','D_2='+fmt(p2)+'D_1-'+fmt(w)),formula('Подставим первый остаток','D_2='+fmt(p2)+'('+fmt(p1)+'S+'+fmt(c)+')-'+fmt(w)),formula('Начисление процентов за третий год приводит к условию',fmt(p3)+'D_2='+fmt(end)),formula('Подставим выражение для $D_2$',fmt(p3)+'['+fmt(p2)+'('+fmt(p1)+'S+'+fmt(c)+')-'+fmt(w)+']='+fmt(end)),formula('Раскроем внутренние скобки',fmt(p3)+'('+fmt(p1*p2)+'S+'+fmt(p2*c-w)+')='+fmt(end)),formula('Раскроем оставшиеся скобки',fmt(coef)+'S'+signed(const)+'='+fmt(end)),formula('Перенесём известное слагаемое',fmt(coef)+'S='+fmt(end-const)),formula('Найдём первоначальный вклад','S='+fmt(S)),formula('Проверка первого года',fmt(S)+'\\cdot'+fmt(p1)+'+'+fmt(c)+'='+fmt(v1)),formula('Проверка второго года',fmt(v1)+'\\cdot'+fmt(p2)+'-'+fmt(w)+'='+fmt(v2)),formula('Проверка третьего года',fmt(v2)+'\\cdot'+fmt(p3)+'='+fmt(end))]
      answer=S;model={'family':'deposit_variable','S':str(S),'p1':str(p1),'p2':str(p2),'p3':str(p3),'c':str(c),'w':str(w),'end':str(end)};kind='вклад: переменные ставки и операции'
    else:
      total0=F(2000+1000*j);x=F(800+400*j);c=F(200+100*j);p=F(11,10);z=F(6,5);finish=(x*p+c)*p*p+(total0-x)*z**3
      rows=[['1','x','x\\cdot'+fmt(p)+'+'+fmt(c),'('+fmt(p)+'x+'+fmt(c)+')\\cdot '+fmt(p),'('+fmt(p)+'x+'+fmt(c)+')\\cdot '+fmt(p*p)],['2',fmt(total0)+'-x','('+fmt(total0)+'-x)'+fmt(z),'('+fmt(total0)+'-x)'+fmt(z*z),'('+fmt(total0)+'-x)'+fmt(z**3)]]
      prompt=f'Клиент распределил {num(total0)} тыс. рублей между двумя вкладами на три года. Первый банк начисляет 10% годовых, второй — 20% годовых; проценты присоединяются в конце каждого года. Сразу после первого начисления первый вклад дополнительно пополнили на {num(c)} тыс. рублей. После третьего начисления сумма на обоих счетах составила {num(finish)} тыс. рублей. Сколько тысяч рублей первоначально внесли в первый банк?'
      coef=p**3-z**3;const=c*p*p+total0*z**3
      steps=[f'Пусть в первый банк первоначально внесли $x$ тыс. рублей. Тогда во второй банк внесли ${fmt(total0)}-x$ тыс. рублей.',formula('После первого начисления и пополнения первого вклада на нём находится',fmt(p)+'x+'+fmt(c)),formula('После второго начисления на первом вкладе',fmt(p)+'('+fmt(p)+'x+'+fmt(c)+')'),formula('После третьего начисления на первом вкладе',fmt(p*p)+'('+fmt(p)+'x+'+fmt(c)+')'),formula('Раскроем скобки',fmt(p**3)+'x+'+fmt(c*p*p)),formula('Во втором банке проценты начисляются три раза подряд','('+fmt(total0)+'-x)\\cdot'+fmt(z)+'^3'),formula('Вычислим третий множитель',fmt(z)+'^3='+fmt(z**3)),formula('В конце третьего года на втором вкладе',fmt(z**3)+'('+fmt(total0)+'-x)'),formula('Сумма на двух счетах по условию',fmt(p**3)+'x+'+fmt(c*p*p)+'+'+fmt(z**3)+'('+fmt(total0)+'-x)='+fmt(finish)),formula('Раскроем скобки и приведём подобные слагаемые',fmt(coef)+'x+'+fmt(const)+'='+fmt(finish)),formula('Перенесём постоянную величину',fmt(coef)+'x='+fmt(finish-const)),formula('Найдём первый вклад','x='+fmt(x)),formula('Найдём второй вклад',fmt(total0)+'-'+fmt(x)+'='+fmt(total0-x)),f'Обе суммы положительны, а их сумма равна первоначальному капиталу, следовательно, найденное распределение допустимо.']
      answer=x;model={'family':'deposit_split','S':str(total0),'x':str(x),'p':str(p),'z':str(z),'c':str(c),'finish':str(finish)};kind='два вклада с капитализацией и пополнением'
    cols=['Банк','Первоначальный вклад','После первого года','После второго года','После третьего года'] if mode==3 else ['Год','Сумма до начисления %','После начисления %','Пополнение / снятие','Остаток']
    add(kind,prompt,steps,answer,rows,'В таблице суммы приведены в тысячах рублей.',cols,model)
# 49–60. Optimization with costs, constraints and explicit comparisons.
for mode in range(4):
 for j in range(3):
    if mode==0:
      a=F(1+j);b=F(4+2*j);c=F(100+50*j);h=F(20+5*j);annual=a*h*h-c;cost=4*annual;minimum=b+2*a*h
      prompt=f'Строительство завода стоит {num(cost)} млн рублей. Ежегодные затраты на выпуск $x$ тысяч изделий равны ${fmt(a)}x^2+{fmt(b)}x+{fmt(c)}$ млн рублей. Всю продукцию продают по цене $q$ тыс. рублей за изделие. Известно, что $q\\ge {fmt(b)}$, а выпуск может быть любым неотрицательным числом. Найдите наименьшую цену $q$, при которой за четыре года суммарная прибыль сможет покрыть стоимость строительства.'
      steps=[f'За год при выпуске $x$ тысяч изделий выручка равна $qx$ млн рублей.',formula('Вычтем производственные затраты','P(x)=qx-('+fmt(a)+'x^2+'+fmt(b)+'x+'+fmt(c)+')'),formula('Приведём подобные слагаемые','P(x)=-'+fmt(a)+'x^2+(q-'+fmt(b)+')x-'+fmt(c)),f'Поскольку $q\\ge{fmt(b)}$, вершина этой параболы расположена при неотрицательном выпуске.',formula('Координата вершины','x_0=(q-'+fmt(b)+')/(2\\cdot'+fmt(a)+')'),formula('Подставим её в функцию прибыли','P_{\\max}=(q-'+fmt(b)+')^2/(4\\cdot'+fmt(a)+')-'+fmt(c)),formula('За четыре года нужно покрыть строительство','4P_{\\max}\\ge'+fmt(cost)),formula('Подставим выражение максимальной прибыли','4[(q-'+fmt(b)+')^2/(4\\cdot'+fmt(a)+')-'+fmt(c)+']\\ge'+fmt(cost)),formula('Разделим на четыре и перенесём постоянные расходы','(q-'+fmt(b)+')^2/(4\\cdot'+fmt(a)+')\\ge'+fmt(cost/4+c)),formula('Умножим на положительное число','(q-'+fmt(b)+')^2\\ge'+fmt(4*a*(cost/4+c))),formula('Учитывая $q\\ge '+fmt(b)+'$, извлечём неотрицательный корень','q-'+fmt(b)+'\\ge'+fmt(2*a*h)),formula('Получим ограничение на цену','q\\ge'+fmt(minimum)),formula('Проверим выпуск при граничном значении','x_0=('+fmt(minimum)+'-'+fmt(b)+')/(2\\cdot'+fmt(a)+')='+fmt(h)),formula('При таком выпуске прибыль за четыре года равна стоимости строительства','4\\cdot'+fmt(annual)+'='+fmt(cost)),f'Следовательно, граничное значение цены достижимо и является наименьшим.']
      answer=minimum;model={'family':'factory_price','a':str(a),'b':str(b),'c':str(c),'h':str(h),'cost':str(cost)};kind='завод: минимальная цена и окупаемость'
    elif mode==1:
      A=F(80+10*j);b=F(10);c=F(100);cap=F(25);T=3+j; x0=(A-b)/2;P=cap*(A-cap)-b*cap-c;cost=T*P-1
      prompt=f'Строительство предприятия стоит {num(cost)} млн рублей. Ежегодно можно выпускать не более {num(cap)} тысяч изделий. При выпуске $x$ тысяч изделий каждое продаётся за ${fmt(A)}-x$ тыс. рублей, а затраты на производство равны ${fmt(b)}x+{fmt(c)}$ млн рублей в год. Все изделия продаются, выпуск можно выбирать ежегодно. Найдите наименьшее целое число полных лет, за которое суммарная прибыль может покрыть стоимость строительства.'
      steps=[f'Пусть $x$ — годовой выпуск в тысячах изделий. По ограничению мощности $0\\le x\\le{fmt(cap)}$.',formula('Годовая выручка','R(x)=x('+fmt(A)+'-x)'),formula('Годовая прибыль после вычета затрат','P(x)=x('+fmt(A)+'-x)-('+fmt(b)+'x+'+fmt(c)+')'),formula('Раскроем скобки','P(x)=-x^2+'+fmt(A-b)+'x-'+fmt(c)),formula('Найдём абсциссу вершины параболы','x_0='+fmt(A-b)+'/2='+fmt(x0)),f'Так как ${fmt(x0)}>{fmt(cap)}$, вершина расположена правее допустимого промежутка. До вершины функция возрастает.',formula('Поэтому максимальная годовая прибыль достигается на границе','x='+fmt(cap)),formula('Подставим этот выпуск','P('+fmt(cap)+')=-'+fmt(cap**2)+'+'+fmt(A-b)+'\\cdot'+fmt(cap)+'-'+fmt(c)),formula('Вычислим максимум','P_{\\max}='+fmt(P)),formula('Даже при максимальной прибыли за '+str(T-1)+' года получится',str(T-1)+'\\cdot'+fmt(P)+'='+fmt((T-1)*P)),f'Эта сумма меньше стоимости строительства ${fmt(cost)}$ млн рублей.',formula('При оптимальном выпуске за '+str(T)+' года получится',str(T)+'\\cdot'+fmt(P)+'='+fmt(T*P)),f'Этого достаточно для покрытия стоимости строительства, поэтому меньшее целое число лет не подходит.']
      answer=T;model={'family':'capacity_payback','A':str(A),'b':str(b),'c':str(c),'cap':str(cap),'cost':str(cost),'T':T};kind='мощность предприятия и срок окупаемости'
    elif mode==2:
      A=F(80+10*j);M=F(20);c1=F(10);c2=F(20);K=F(100);v1=M-1;v2=(A-c2)/2;P1=v1*(A-v1)-c1*v1-K;P2=v2*(A-v2)-c2*v2-K;best=max(P1,P2)
      prompt=f'Компания выпускает целое число тысяч изделий $x$, причём $0\\le x\\le {fmt(A)}$. Все изделия продаются по цене ${fmt(A)}-x$ тыс. рублей за изделие. При выпуске менее {fmt(M)} тысяч изделий затраты равны ${fmt(c1)}x+{fmt(K)}$ млн рублей, при выпуске от {fmt(M)} тысяч включительно — ${fmt(c2)}x+{fmt(K)}$ млн рублей. Найдите наибольшую возможную прибыль в миллионах рублей.'
      steps=[formula('Выручка при любом допустимом выпуске','R(x)=x('+fmt(A)+'-x)'),f'Рассмотрим два случая, поскольку производственные затраты заданы разными формулами.',formula('При $0\\le x<{fmt(M)}$ прибыль равна','P_1(x)=-x^2+'+fmt(A-c1)+'x-'+fmt(K)),formula('Абсцисса вершины первой параболы','x_1='+fmt(A-c1)+'/2='+fmt((A-c1)/2)),f'Вершина правее промежутка $0\\le x<{fmt(M)}$. Поскольку $x$ — целое, наибольшее допустимое значение в этом случае равно ${fmt(v1)}$.',formula('Вычислим прибыль в первом случае','P_1('+fmt(v1)+')=-'+fmt(v1**2)+'+'+fmt(A-c1)+'\\cdot'+fmt(v1)+'-'+fmt(K)+'='+fmt(P1)),formula('При $x\\ge '+fmt(M)+'$ прибыль равна','P_2(x)=-x^2+'+fmt(A-c2)+'x-'+fmt(K)),formula('Найдём вершину второй параболы','x_2='+fmt(A-c2)+'/2='+fmt(v2)),f'Полученное значение целое и принадлежит второму промежутку, поэтому на нём достигается максимум второй функции.',formula('Вычислим прибыль во втором случае','P_2('+fmt(v2)+')=-'+fmt(v2**2)+'+'+fmt(A-c2)+'\\cdot'+fmt(v2)+'-'+fmt(K)+'='+fmt(P2)),formula('Сравним результаты двух случаев','\\max('+fmt(P1)+';'+fmt(P2)+')='+fmt(best)),f'Следовательно, найденная сумма является наибольшей среди всех допустимых выпусков.']
      answer=best;model={'family':'piecewise_profit','A':str(A),'M':str(M),'c1':str(c1),'c2':str(c2),'K':str(K),'v1':str(v1),'v2':str(v2),'best':str(best)};kind='прибыль при разных производственных затратах'
    else:
      T=F(20+10*j);alpha=2*T+20;beta=2*T+4;fixed=F(100+50*j);x0=(2*T+alpha-beta)/4;y0=T-x0
      v=x0*(alpha-x0)+y0*(beta-y0)-fixed
      prompt=f'Компания распределяет {num(T)} млн рублей между двумя проектами. Если в первый проект вложить $x$ млн рублей, его годовой доход составит $x({fmt(alpha)}-x)$ млн рублей. Если во второй вложить $y$ млн рублей, его доход составит $y({fmt(beta)}-y)$ млн рублей. Постоянные годовые расходы компании равны {num(fixed)} млн рублей. Весь капитал распределён между проектами. Найдите наибольшую годовую прибыль компании в миллионах рублей.'
      B=alpha-beta+2*T;C=beta*T-T*T-fixed
      steps=[f'Обозначим вклад в первый проект через $x$ млн рублей. Тогда во второй вкладывают $y={fmt(T)}-x$, а $0\\le x\\le{fmt(T)}$.',formula('Суммарная прибыль равна доходам двух проектов за вычетом расходов','P(x)=x('+fmt(alpha)+'-x)+('+fmt(T)+'-x)['+fmt(beta)+'-('+fmt(T)+'-x)]-'+fmt(fixed)),formula('Упростим последнюю скобку',fmt(beta)+'-('+fmt(T)+'-x)='+fmt(beta-T)+'+x'),formula('Раскроем произведения','P(x)='+fmt(alpha)+'x-x^2+'+fmt(T*(beta-T))+signed(T-(beta-T))+'x-x^2-'+fmt(fixed)),formula('Приведём подобные слагаемые','P(x)=-2x^2+'+fmt(B)+'x'+signed(C)),formula('Найдём вершину параболы','x_0='+fmt(B)+'/(2\\cdot2)='+fmt(x0)),formula('Во второй проект при этом поступит','y_0='+fmt(T)+'-'+fmt(x0)+'='+fmt(y0)),f'Оба вложения неотрицательны, значит, вершина принадлежит допустимому промежутку.',formula('Доход первого проекта','R_1='+fmt(x0)+'('+fmt(alpha)+'-'+fmt(x0)+')='+fmt(x0*(alpha-x0))),formula('Доход второго проекта','R_2='+fmt(y0)+'('+fmt(beta)+'-'+fmt(y0)+')='+fmt(y0*(beta-y0))),formula('Вычтем постоянные расходы','P_{\\max}='+fmt(x0*(alpha-x0))+'+'+fmt(y0*(beta-y0))+'-'+fmt(fixed)+'='+fmt(v)),f'Коэффициент при $x^2$ отрицателен, поэтому это значение прибыли наибольшее.']
      answer=v;model={'family':'allocation','T':str(T),'alpha':str(alpha),'beta':str(beta),'fixed':str(fixed),'x0':str(x0),'value':str(v)};kind='распределение капитала между проектами'
    add(kind,prompt,steps,answer,model=model)
# Different credit structures broaden the collection: growing repayment and two unknowns.
for j,idx in enumerate(range(6,9)):
    a=F(10+2*j);b=F(30+3*j);S=10*a+5*b;r=F(10+2*j,100);u=F(20+2*j,100)
    reductions=[a,2*a,3*a,4*a]+[b]*5;debts=[];bal=S
    for d in reductions:debts.append(bal);bal-=d
    A=sum(debts[:4],F(0));B=sum(debts[4:],F(0));over=r*A+u*B;total=S+over
    payments=[d+D*(r if i<4 else u) for i,(D,d) in enumerate(zip(debts,reductions))];answer=min(payments)
    prompt=f'Кредит {num(S)} тыс. рублей взят на девять месяцев. Перед каждым из первых четырёх платежей долг увеличивается на $r\\%$, а перед каждым из следующих пяти — на {num(100*u)}%. После первых четырёх платежей основной долг уменьшается соответственно на {num(a)}, {num(2*a)}, {num(3*a)} и {num(4*a)} тыс. рублей. После каждого из следующих пяти платежей основной долг уменьшается на одну и ту же сумму; последний платёж полностью гасит кредит. Общая сумма выплат составляет {num(total)} тыс. рублей. Найдите наименьший платёж в тысячах рублей.'
    rows=[]
    for i,(D,d) in enumerate(zip(debts,reductions)):
        rate='r/100' if i<4 else fmt(u)
        rows.append([i+1,fmt(D),fmt(D)+'(1+'+rate+')',fmt(d)+'+'+fmt(D)+'\\cdot '+rate,fmt(D-d)])
    steps=[f'Обозначим через $r$ процентную ставку первых четырёх месяцев, а через $y$ — уменьшение долга в каждый из последних пяти месяцев. Все суммы указываем в тысячах рублей.',formula('Уменьшение основного долга за первые четыре месяца','+'.join(fmt(x) for x in reductions[:4])+'='+fmt(10*a)),formula('Остаток к началу пятого месяца',fmt(S)+'-'+fmt(10*a)+'='+fmt(5*b)),formula('Последние пять уменьшений равны','5y='+fmt(5*b)),formula('Отсюда размер каждого уменьшения','y='+fmt(b)),formula('Сумма долгов перед начислением процентов в первые четыре месяца','+'.join(fmt(x) for x in debts[:4])+'='+fmt(A)),formula('Сумма долгов перед начислением процентов в последние пять месяцев','+'.join(fmt(x) for x in debts[4:])+'='+fmt(B)),formula('Общая переплата',fmt(total)+'-'+fmt(S)+'='+fmt(over)),formula('Составим уравнение по сумме начисленных процентов',fmt(A)+'r/100+'+fmt(u)+'\\cdot'+fmt(B)+'='+fmt(over)),formula('Вычислим известную часть процентов',fmt(u)+'\\cdot'+fmt(B)+'='+fmt(u*B)),formula('Перенесём известное слагаемое',fmt(A)+'r/100='+fmt(over-u*B)),formula('Найдём первую процентную ставку','r='+fmt(r*100)),f'В первых четырёх платежах одновременно изменяются и погашаемая часть, и процентная часть, поэтому нельзя заранее считать их убывающими. Вычислим каждый платёж.']
    steps += [formula('Выплата за месяц '+str(i+1),'V_'+str(i+1)+'='+fmt(d)+'+'+fmt(D)+'\\cdot'+fmt(r if i<4 else u)+'='+fmt(v)) for i,(D,d,v) in enumerate(zip(debts,reductions,payments))]
    steps += [formula('Сравним все девять результатов','\\min('+(';'.join(fmt(v) for v in payments))+')='+fmt(answer))]
    tasks[idx].update(kind='двухэтапный кредит с возрастающим погашением',wordProblemPrompt=prompt,steps=steps,solutionAnswer=num(answer),model={'family':'growing_repayment','S':str(S),'a':str(a),'b':str(b),'r':str(r),'u':str(u),'total':str(total)})
    schedules[str(tasks[idx]['id'])]={'intro':'В таблице $r$ — процентная ставка первых четырёх месяцев; суммы указаны в тысячах рублей.','columns':['Месяц','Долг до начисления %','Долг после начисления %','Выплата','Долг после выплаты'],'rows':[[str(v) for v in row] for row in rows]}
for j,idx in enumerate(range(9,12)):
    n=5+j;S=F(8400);r=F(1+j,10);d=S/n;delta=r*(S-d);over=r*S*F(n+1,2);total=S+over;ratio=over/delta;other=F(n+1,n-1);coef=2*ratio-1;constant=2*ratio;rootdiff=F(n)-other
    prompt=f'Кредит {num(S)} тыс. рублей берут на целое число месяцев $n>3$. Перед каждым ежемесячным платежом долг увеличивается на один и тот же положительный процент. После каждого платежа основной долг уменьшается на одну и ту же сумму; после последнего платежа он равен нулю. Первый платёж на {num(delta)} тыс. рублей больше последнего. Общая сумма всех выплат равна {num(total)} тыс. рублей. Найдите срок кредита.'
    rows=[[1,'S','S(1+r)','S/n+Sr','S-S/n'],[2,'S-S/n','(S-S/n)(1+r)','S/n+(S-S/n)r','S-2S/n'],['n','S/n','(S/n)(1+r)','S/n+(S/n)r','0']]
    steps=[f'Пусть $S={fmt(S)}$ тыс. рублей, $n>3$ — число месяцев, а $r$ — месячная процентная ставка в долях единицы.',f'Так как долг уменьшается одинаково и полностью погашается, ежемесячно возвращается $S/n$ основного долга.',formula('Первый платёж','V_1=S/n+rS'),formula('Перед последним начислением остаётся одна доля основного долга','D_{n-1}=S/n'),formula('Последний платёж','V_n=S/n+rS/n'),formula('Из разности первого и последнего платежей','rS(1-1/n)='+fmt(delta)),f'Перед начислением процентов остатки образуют арифметическую прогрессию от $S$ до $S/n$.',formula('Сумма этих остатков','S+(S-S/n)+\\ldots+S/n=S(n+1)/2'),formula('Все проценты вместе равны переплате',fmt(total)+'-'+fmt(S)+'='+fmt(over)),formula('Получим второе уравнение','rS(n+1)/2='+fmt(over)),f'Поскольку процентная ставка положительна и $n>3$, обе части первого уравнения положительны. Разделим второе уравнение на первое.',formula('После сокращения $rS$','n(n+1)/[2(n-1)]='+fmt(ratio)),formula('Умножим на положительное число $2(n-1)$','n(n+1)='+fmt(2*ratio)+'(n-1)'),formula('Перенесём все слагаемые влево','n^2-'+fmt(coef)+'n+'+fmt(constant)+'=0'),formula('Дискриминант квадратного уравнения','D='+fmt(coef)+'^2-4\\cdot'+fmt(constant)+'='+fmt(rootdiff)+'^2'),formula('Найдём оба корня','n_1='+fmt(n)+';\\quad n_2='+fmt(other)),f'По условию $n$ — целое число больше трёх. Второй корень меньше двух, поэтому он не подходит.',formula('Подставим подходящее значение в первое уравнение','r\\cdot'+fmt(S)+'(1-1/'+fmt(n)+')='+fmt(delta)),formula('Найдём ставку для проверки','r='+fmt(r)),formula('Проверим общую сумму выплат',fmt(S)+'+'+fmt(r)+'\\cdot'+fmt(S)+'\\cdot('+fmt(n)+'+1)/2='+fmt(total))]
    tasks[idx].update(kind='кредит с неизвестными сроком и ставкой',wordProblemPrompt=prompt,steps=steps,solutionAnswer=num(n),model={'family':'unknown_term_rate','S':str(S),'r':str(r),'n':n,'delta':str(delta),'total':str(total)})
    schedules[str(tasks[idx]['id'])]={'intro':'Здесь $S$ — сумма кредита, $r$ — ставка в долях единицы; суммы указаны в тысячах рублей.','columns':['Месяц','Долг до начисления %','Долг после начисления %','Выплата','Долг после выплаты'],'rows':[[str(v) for v in row] for row in rows]}

assert len(tasks)==60
assert len(set(t['kind'] for t in tasks))==20
assert len(set(t['wordProblemPrompt'] for t in tasks))==60
assert all(len(t['steps'])>=10 for t in tasks)
assert len(schedules)==53
(root/'src/lib/ege16-new-tasks.json').write_text(json.dumps(tasks,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
schedules_path.write_text(json.dumps(schedules,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
