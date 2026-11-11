import styles from '../olympiad-cards/OlympiadPreview.module.css';

// Each illustration pairs a diagram with the physical idea behind that task number.
// All coordinates stay inside the same viewBox and share the existing single-play animation.
const illustrations = {
  1: { lines: ['M30 95H174 M43 105V18', 'M43 88L153 35', 'M149 40l4-5-7-1'], text: [['x', 37, 19], ['t', 174, 110], ['v = Δx/Δt', 108, 105]] },
  2: { lines: ['M61 60h66v35H61z', 'M127 77h42m-8-6 8 6-8 6', 'M49 100h96'], text: [['F', 151, 65], ['F = ma', 101, 37]] },
  3: { lines: ['M30 80h140', 'M48 62h32v18H48z M120 62h32v18h-32z', 'M81 71h27m-7-5 7 5-7 5'], text: [['p = mv', 100, 38], ['p₁ + p₂ = const', 100, 110]] },
  4: { lines: ['M29 57h142 M100 57 85 90h30z M47 57v17m106-17v17', 'M40 74h14m92 0h14'], text: [['ΣM = 0', 100, 27]] },
  5: { lines: ['M35 105h130', 'M70 19v58m-6-7 6 7 6-7', 'M64 19a6 6 0 1 0 12 0 6 6 0 0 0-12 0'], text: [['g', 83, 57], ['h = gt²/2', 130, 96]] },
  6: { lines: ['M30 101h140 M49 29h102 M99 29v9l-10 6 20 8-20 8 20 8-10 6v4', 'M81 78h36v23H81z'], text: [['F = −kx', 100, 19]] },
  7: { lines: ['M43 24h114v72H43z M43 49h114'], points: [[65,38],[87,68],[119,80],[140,58],[74,88],[128,35]], text: [['pV = νRT', 100, 114]] },
  8: { lines: ['M55 98h90 M62 98V57h76v41', 'M66 48c0-9 7-9 7-18m18 18c0-9 7-9 7-18m18 18c0-9 7-9 7-18'], text: [['ΔU = Q − A', 100, 114]] },
  9: { lines: ['M32 102h140 M44 109V18', 'M52 30C65 70 86 87 155 95'], text: [['p', 36, 19], ['V', 171, 115], ['pV = const', 119, 44]] },
  10: { lines: ['M50 25v75h100V25 M50 56h100', 'M100 20v30m-6-7 6 7 6-7'], points: [[69,78],[95,86],[130,74]], text: [['V ↓', 124, 43]] },
  11: { lines: ['M45 35h42l6-6 7 12 7-12 6 6h42v55H45z', 'M80 90v-8m8 16V82'], text: [['U = IR', 100, 20], ['I', 158, 69]] },
  12: { lines: ['M37 38h40v42H37z M123 38h40v42h-40z', 'M77 48h46m-8-5 8 5-8 5 M77 70h46m-8-5 8 5-8 5'], text: [['N', 57, 65], ['S', 143, 65], ['B', 100, 98]] },
  13: { lines: ['M25 62h150 M100 19c-18 23-18 63 0 86 M100 19c18 23 18 63 0 86', 'M31 35h69l58 43 M31 89l69-27 58-27'], text: [['F', 143, 77]] },
  14: { lines: ['M42 61h42 M84 35v52 M112 35v52 M112 61h46', 'M91 26h14 M98 20v12 M95 99h10'], text: [['C = q/U', 100, 115]] },
  15: { lines: ['M35 84c10-23 20-23 30 0s20 23 30 0 20-23 30 0 20 23 30 0', 'M93 20v34m-6-8 6 8 6-8'], text: [['B', 108, 37], ['ε = −ΔΦ/Δt', 100, 112]] },
  16: { lines: ['M28 60c7-12 14-12 21 0s14 12 21 0 14-12 21 0 14 12 21 0 14-12 21 0 14 12 21 0', 'M154 60h18m-7-6 7 6-7 6'], text: [['E = hν', 100, 30]] },
  17: { lines: ['M48 25h100 M48 55h100 M48 93h100', 'M98 30v20m-6-7 6 7 6-7'], text: [['E₃', 32, 29], ['E₂', 32, 59], ['E₁', 32, 97], ['hν', 117, 45]] },
  18: { lines: ['M35 37h130 M35 84h130'], text: [['F = ma', 100, 28], ['[F] = Н', 100, 69], ['1 Н = 1 кг·м/с²', 100, 109]] },
  19: { lines: ['M48 96a52 52 0 0 1 104 0 M100 96l27-37 M55 83l8 2 M72 53l5 7 M100 44v9 M128 53l-5 7 M145 83l-8 2', 'M45 96h110'], text: [['V', 100, 108]] },
  20: { lines: ['M30 100h142 M43 108V20', 'M53 88 78 75 103 60 128 47 155 31'], points: [[53,88],[78,75],[103,60],[128,47],[155,31]], text: [['y', 35, 20], ['x', 174, 113]] },
  21: { lines: ['M60 31h80v65H60z M60 56h80', 'M89 66h22v17H89z M100 66V22m-6 7 6-7 6 7'], text: [['Fₐ', 122, 44], ['ρ = m/V', 100, 113]] },
  22: { lines: ['M30 100h145 M43 100V25', 'M43 94Q100 8 158 94', 'M43 94l26-39m-1 10 1-10-9 5'], text: [['v₀', 59, 55]] },
  23: { lines: ['M55 23v76h90V23 M55 49h90', 'M69 78l12-10m-5 0 5 0-1 5 M123 83l-11-8m1 5-1-5 5 0'], text: [['pV = νRT', 100, 116]] },
  24: { lines: ['M55 55h90v43H55z M61 55l5-23h68l5 23 M100 24v22m-6-6 6 6 6-6'], text: [['Q = cmΔT', 100, 115]] },
  25: { lines: ['M65 80h72m-8-6 8 6-8 6 M65 80V34m-6 7 6-7 6 7', 'M145 27a8 8 0 1 0 0 16 8 8 0 1 0 0-16 M141 31l8 8m0-8-8 8'], points: [[65,80]], text: [['v', 147, 83], ['F', 56, 31], ['B', 164, 39], ['q > 0', 48, 95], ['F = qvB', 100, 111]] },
  // The block's lower edge lies on the slope; the surface is interrupted beneath it.
  26: { lines: ['M32 100 91.12 74.85 M116.88 63.89 166 43v57H32', 'M91.12 74.85 116.88 63.89 107.10 40.89 81.34 51.85Z', 'M99.11 57.87v34m-6-7 6 7 6-7'], text: [['mg', 115, 90], ['F = ma', 60, 29]] },
};

export default function PhysicsPreview({ number }) {
  const item = illustrations[number];
  if (!item) return null;
  return <span className={styles.preview} aria-hidden="true"><svg className={styles.diagram} viewBox="0 0 200 120" focusable="false">
    {item.lines.map((d, index) => <path key={index} d={d} pathLength="1" className={styles.draw} style={{ animationDelay: `${index * 150}ms` }} />)}
    {item.points?.map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="2.7" />)}
    {item.text?.map(([value, x, y], index) => <text key={index} x={x} y={y} textAnchor="middle" className={styles.small} style={{ animationDelay: `${350 + index * 90}ms` }}>{value}</text>)}
  </svg></span>;
}
