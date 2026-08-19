      {/* Высокоточный и крупный центрированный SVG-график Задачи 75 */}
      <div className="my-6 flex flex-col items-center bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <svg viewBox="0 0 380 390" className="w-full max-w-[380px] h-auto overflow-visible font-sans text-xs select-none mx-auto">
          {/* Легкая сетка (Шаг: 1 деление = 24px. Центр (0,0) зафиксирован на x=160, y=180) */}
          <g stroke="#f1f5f9" strokeWidth="0.8" className="dark:stroke-slate-900">
            {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <line key={`x-${i}`} x1={160 + i*24} y1="20" x2={160 + i*24} y2="360" />
            ))}
            {[-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map(i => (
              <line key={`y-${i}`} x1="20" y1={180 - i*24} x2="360" y2={180 - i*24} />
            ))}
          </g>

          {/* Вертикальная выколотая серая граница ОДЗ x = -2 (пунктир) */}
          <line x1="112" y1="20" x2="112" y2="360" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="100" y="16" fill="#94a3b8" stroke="none" className="font-sans text-[10px]">x = -2</text>

          {/* Оси координат */}
          <g stroke="#000000" strokeWidth="1.2" className="dark:stroke-slate-400">
            <line x1="20" y1="180" x2="360" y2="180" /> {/* Ось Ox */}
            <line x1="160" y1="20" x2="160" y2="360" />  {/* Ось Oy */}
          </g>
          <path d="M 360,180 L 352,176 M 360,180 L 352,184" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <path d="M 160,20 L 156,28 M 160,20 L 164,28" stroke="#000000" strokeWidth="1.2" fill="none" className="dark:stroke-slate-400" />
          <text x="370" y="184" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">x</text>
          <text x="146" y="15" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif italic text-base">y</text>
          <text x="146" y="194" fill="#000000" stroke="none" className="dark:fill-slate-300 font-serif text-sm">0</text>

          {/* Числовые метки делений */}
          {[-4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
            <g key={`lbl-x-${i}`}>
              <line x1={160 + i*24} y1="176" x2={160 + i*24} y2="184" stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x={160 + i*24 - 4} y="196" fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[9px]">{i}</text>
            </g>
          ))}
          {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map(i => (
            <g key={`lbl-y-${i}`}>
              <line x1="156" y1={180 - i*24} x2="164" y2={180 - i*24} stroke="#000000" strokeWidth="1" className="dark:stroke-slate-400" />
              <text x="144" y={180 - i*24 + 4} fill="#000000" stroke="none" className="dark:fill-slate-300 font-sans text-[9px]">{i}</text>
            </g>
          ))}

          {/* Неподвижная синяя прямая решения y = 1 */}
          <line x1="112" y1="156" x2="360" y2="156" stroke="#2563eb" strokeWidth="2.5" />
          <line x1="20" y1="156" x2="112" y2="156" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />

          {/* КАНОНИЧЕСКАЯ ГЛАДКАЯ И ОКРУГЛАЯ ГИПЕРБОЛА y = 4/x */}
          {/* Правая ветвь (I четверть): чистая дуга Безье, проходящая строго через (1;4) и (4;1) */}
          <path d="M 166.4,20 C 166.5,120 190,150 208,156 C 235,162 270,172 360,174" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          
          {/* Левая ветвь (III четверть, внутри ОДЗ): строго симметричная дуга Безье, проходящая через выколотую точку (-2;-2) */}
          <path d="M 112,228 C 130,240 140,265 144,340" fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Семейство сканирующих наклонных прямых y = x + a (красный цвет, k = 1) */}
          <line x1="20" y1="320" x2="340" y2="0" stroke="#dc2626" strokeWidth="1.5" /> {/* a = 3 */}
          <line x1="20" y1="392" x2="360" y2="52" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" /> {/* a = 0 */}
          <line x1="20" y1="464" x2="360" y2="124" stroke="#dc2626" strokeWidth="1.5" /> {/* a = -3 */}

          {/* Ключевые точки пересечений на осях и графиках */}
          <circle cx="256" cy="156" r="3.5" fill="#000000" /> {/* Точка пересечения (4; 1) */}
          <circle cx="184" cy="156" r="3.5" fill="#000000" /> {/* Точка (1; 1) */}
          <circle cx="184" cy="84" r="3.5" fill="#000000" />  {/* Точка (1; 4) строго НА гиперболе */}
          <circle cx="136" cy="276" r="3.5" fill="#000000" /> {/* Точка (-1; -4) строго НА гиперболе */}
          
          {/* Выколотые граничные точки на серой линии ОДЗ x = -2 */}
          <circle cx="112" cy="156" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* Выколотая (-2; 1) */}
          <circle cx="112" cy="228" r="3" fill="white" stroke="#2563eb" strokeWidth="1.5" className="fill-white dark:fill-slate-950" /> {/* Выколотая (-2; -2) */}

          {/* Текстовые подписи к кривым и критическим уровням */}
          <text x="312" y="146" fill="#2563eb" className="font-serif italic font-semibold text-[10px]">y = 1</text>
          <text x="336" y="166" fill="#2563eb" className="font-serif italic font-semibold text-[10px]">y = 4/x</text>
          <text x="310" y="24" fill="#dc2626" className="font-sans text-[9px]">a = 3</text>
          <text x="325" y="76" fill="#dc2626" className="font-sans text-[9px]">a = 0</text>
          <text x="340" y="128" fill="#dc2626" className="font-sans text-[9px]">a = -3</text>
        </svg>
      </div>