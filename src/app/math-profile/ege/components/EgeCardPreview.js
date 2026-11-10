import styles from './EgeCardPreview.module.css';

const Line = ({ d, className = '' }) => <path d={d} pathLength="1" className={`${styles.line} ${styles.draw} ${className}`} />;
const Text = ({ x = 100, y = 80, size = 20, children, className = '' }) => <text x={x} y={y} textAnchor="middle" fontSize={size} className={`${styles.text} ${className}`}>{children}</text>;
const Dot = ({ cx, cy, className = '' }) => <circle cx={cx} cy={cy} r="4" className={`${styles.dot} ${className}`} />;
const Axes = () => <><Line d="M28 120H180 M42 130V20" /><path d="M174 116l6 4-6 4 M38 26l4-6 4 6" className={styles.line} /></>;

function Illustration({ number, intro }) {
  if (intro) {
    switch (number) {
      case 15: return <>
        <path d="M20 78 97 50 178 88 101 116Z" className={styles.dashed} />
        <Line d="M75.3 25.5V81.5 M75.3 25.5 122.28 103.54" />
        <g className={styles.reveal}>
          <path d="M75.3 81.5 122.28 103.54 M83.78 117.54 160.78 89.54" className={styles.line} />
          <path d="M75.3 74.5l7.24 3.4v7 M115.04 100.14l7.52-2.74 7.24 3.4" className={styles.line} />
          <Text x={65} y={23} size={14}>A</Text><Text x={65} y={96} size={14}>H</Text>
          <Text x={130} y={119} size={14}>B</Text><Text x={168} y={77} size={14}>ℓ</Text><Text x={49} y={84} size={13}>α</Text>
          <Text y={143} size={11}>AH ⟂ α,  HB ⟂ ℓ  ⇒  AB ⟂ ℓ</Text>
        </g>
      </>;
      case 18: return <>
        <Line d="M50 110 90 35 150 110Z M150 110h45" />
        <g className={styles.reveal}>
          <path d="M74 65 190 110" className={styles.line} />
          <Text x={44} y={124} size={13}>A</Text><Text x={90} y={27} size={13}>B</Text><Text x={149} y={124} size={13}>C</Text>
          <Text x={66} y={63} size={13}>D</Text><Text x={135} y={82} size={13}>E</Text><Text x={190} y={124} size={13}>F</Text>
          <Text y={145} size={11}>AD/DB · BE/EC · CF/FA = 1</Text>
        </g>
      </>;
      case 19: return <>
        <Text y={25} size={14}>f(x; a) = 0,  x₁ ≠ x₂</Text>
        <Line d="M59 42c-8 0-8 6-8 11v7c0 6-3 8-8 9 5 1 8 3 8 9v7c0 5 0 11 8 11" />
        <g className={styles.reveal}>
          <Text x={119} y={62} size={17}>x₁ ∈ [0; 1]</Text>
          <Text x={119} y={92} size={17}>x₂ ∉ [0; 1]</Text>
          <Text y={128} size={14}>или наоборот</Text>
        </g>
      </>;
      case 20: return <>
        <defs><clipPath id="ege-intro-sets-overlap"><circle cx="78" cy="72" r="40" /></clipPath></defs>
        <circle cx="78" cy="72" r="40" pathLength="1" className={`${styles.line} ${styles.draw}`} />
        <circle cx="122" cy="72" r="40" pathLength="1" className={`${styles.line} ${styles.draw}`} />
        <g className={styles.reveal}>
          <circle cx="122" cy="72" r="40" clipPath="url(#ege-intro-sets-overlap)" fill="white" opacity=".24" />
          <Text x={60} y={26} size={16}>A</Text><Text x={140} y={26} size={16}>B</Text>
          <Text x={65} y={78} size={13}>1, 2</Text><Text x={100} y={78} size={15}>3</Text><Text x={135} y={78} size={13}>4, 5</Text>
          <Text y={137} size={16}>A ∩ B = {'{3}'}</Text>
        </g>
      </>;
      default: return null;
    }
  }
  switch (number) {
    case 1: return <><Line d="M30 118 L100 34 L170 118 Z" /><path d="M54 118 A24 24 0 0 0 46 99" className={`${styles.line} ${styles.reveal}`} /><Text x={60} y={105} size={19} className={styles.reveal}>α</Text></>;
    case 2: return <>
      <Line d="M43 110H129 M43 110 70 41" />
      <path d="M120 105l9 5-9 5 M63 49l7-8 2 11" className={styles.line} />
      <Text x={88} y={130} size={15}>a</Text><Text x={42} y={70} size={15}>b</Text>
      <g className={styles.reveal}>
        <path d="M129 110 156 41 70 41" className={styles.dashed} />
        <path d="M43 110 156 41 M144 43l12-2-6 11" className={styles.line} />
        <Text x={111} y={24} size={14}>a + b</Text>
      </g>
    </>;
    case 3: return <>
      <g className={styles.reveal}><path d="M92 24v55 M36 105l56-26 64 26" className={styles.dashed} /></g>
      <Line d="M36 50 92 24 156 50 156 105 100 131 36 105Z M36 50 100 76 156 50 M100 76v55" />
    </>;
    case 4: return <><g className={styles.dice}><rect x="68" y="29" width="64" height="64" rx="11" className={styles.line} />{[[82,44],[82,61],[82,78],[118,44],[118,61],[118,78]].map(([x,y])=><Dot key={`${x}-${y}`} cx={x} cy={y}/>)}</g><Text y={126} size={22} className={styles.reveal}>P = 1/6</Text></>;
    case 5: return <><Text y={51} size={18} className={styles.early}>P(A | B) = ?</Text><g className={styles.reveal}><Text x={100} y={46} size={17}>P(A | B) =</Text><Text x={100} y={75} size={17}>P(B | A) · P(A)</Text><path d="M40 84h120" className={styles.line} /><Text x={100} y={108} size={17}>P(B)</Text></g></>;
    case 6: return <><path d="M37 119h132 M37 119V32" className={styles.line}/>{[40,69,95,61].map((h,i)=><rect key={i} x={49+i*28} y={119-h} width="18" height={h} rx="2" className={`${styles.bar} ${styles[`delay${i}`] || ''}`} />)}<Text y={143} size={18} className={styles.reveal}>E(X)</Text></>;
    case 7: return <><Text y={78} size={25} className={styles.early}>2x + 4 = 10</Text><Text y={87} size={29} className={styles.reveal}>x = 3</Text></>;
    case 8: return <>
      <Text y={77} size={26} className={styles.early}>(a + b)²</Text>
      <Text y={85} size={23} className={styles.reveal}>a² + 2ab + b²</Text>
    </>;
    case 9: return <>
      <Axes /><path d="M40 105 Q100 -15 160 105" className={styles.line} />
      <g className={styles.tangentCurve}><path d="M-26 0H26" className={styles.line} /><Dot cx={0} cy={0} /></g>
      <Text x={157} y={30} size={18} className={styles.reveal}>f′(x)</Text>
    </>;
    case 10: return <><path d="M84 37a15 15 0 0 1 30 0v57a23 23 0 1 1-30 0z" className={styles.line} /><path d="M99 104V52" className={`${styles.thermometer} ${styles.line}`} /><Dot cx={99} cy={110}/><path d="M120 50h12M120 65h9M120 80h12" className={styles.line}/><Text x={152} y={61} size={18} className={styles.reveal}>T</Text></>;
    case 11: return <><path d="M24 105h152 M30 92l6 13-6 13 M170 92l-6 13 6 13" className={styles.line}/><g className={styles.moveRight}><circle cx="42" cy="87" r="8" className={styles.line}/></g><g className={styles.moveLeft}><circle cx="158" cy="87" r="8" className={styles.line}/></g><Text y={57} size={18} className={styles.reveal}>S</Text></>;
    case 12: return <><Axes /><Line d="M49 30 Q101 202 174 28" /></>;
    case 13: return <><path d="M28 116h145" className={styles.line}/>{[32,56,80].map((h,i)=><rect key={i} x={44+i*39} y={116-h} width="25" height={h} className={`${styles.bar} ${styles[`delay${i}`] || ''}`} />)}<Text y={143} size={15} className={styles.reveal}>S = S₀(1+r)ⁿ</Text></>;
    case 14: return <>
      <path d="M40 75h120 M100 18v114 M155 71l5 4-5 4 M96 23l4-5 4 5" className={styles.line} />
      <circle cx="100" cy="75" r="45" pathLength="1" className={`${styles.line} ${styles.draw}`} />
      <g className={styles.trigRay}><path d="M100 75h45" className={styles.line} /><Dot cx={145} cy={75} /></g>
      <g className={styles.reveal}><path d="M117 75a17 17 0 0 0-8.5-14.7" className={styles.line} /><Text x={159} y={36} size={13}>π/3</Text></g>
    </>;
    case 15: return <>
      <defs><clipPath id="ege-pyramid-section"><polygon points="56.8,69.4 100,52 143.2,69.4 100,86.2" /></clipPath></defs>
      <g className={styles.reveal}><path d="M28 101 100 72 172 101 M100 22v50" className={styles.dashed} /></g>
      <Line d="M28 101 100 22 172 101 100 129Z M100 22v107" />
      <g className={styles.reveal}>
        <polygon points="56.8,69.4 100,52 143.2,69.4 100,86.2" fill="white" opacity=".16" />
        <g clipPath="url(#ege-pyramid-section)"><path d="M48 49l-20 30 M62 49 42 79 M76 49 56 79 M90 49 70 79 M104 49 84 79 M118 49 98 79 M132 49 112 79 M146 49 126 79 M160 49 140 79 M174 49 154 79 M188 49 168 79 M202 49 182 79 M216 49 196 79 M48 79 28 109 M62 79 42 109 M76 79 56 109 M90 79 70 109 M104 79 84 109 M118 79 98 109 M132 79 112 109 M146 79 126 109 M160 79 140 109" className={styles.hatch} /></g>
        <path d="M56.8 69.4 100 52 143.2 69.4" className={styles.dashed} /><path d="M56.8 69.4 100 86.2 143.2 69.4" className={styles.line} />
      </g>
    </>;
    case 16: return <>
      <Text y={31} size={16}>(x + 1)(x − 2) &gt; 0</Text>
      <path d="M24 85h152 M169 80l7 5-7 5" className={styles.line} />
      <g className={styles.reveal}>
        <circle cx="76" cy="85" r="5" className={styles.cutout} /><circle cx="124" cy="85" r="5" className={styles.cutout} />
        <Text x={76} y={109} size={15}>−1</Text><Text x={124} y={109} size={15}>2</Text>
        <Text x={48} y={72} size={19}>+</Text><Text x={100} y={72} size={19}>−</Text><Text x={151} y={72} size={19}>+</Text>
        <path d="M30 124h38 M132 124h38" className={styles.line} />
      </g>
    </>;
    case 17: return <>
      <Axes /><path d="M40 120 Q100 -20 160 120" className={styles.line} />
      <g className={styles.maximumCurve}><Dot cx={0} cy={0} /></g>
      <Text x={112} y={36} size={17} className={styles.reveal}>max</Text>
    </>;
    case 18: return <><circle cx="100" cy="78" r="55" pathLength="1" className={`${styles.line} ${styles.draw}`} /><g className={styles.reveal}><path d="M50 101 86 25 153 91Z M50 101 100 78 153 91 M79 40 Q86 43 97 36 M84 85 Q100 104 117 82" className={styles.line} /><Text x={87} y={53} size={14}>α</Text><Text x={101} y={109} size={14}>2α</Text></g></>;
    case 19: return <>
      <Text y={22} size={15}>f(x) = x³ + x</Text>
      <path d="M35 121H170 M42 128V29" className={styles.line} />
      <Line d="M42 115 C68 110 76 85 100 75 S132 40 165 35" />
      <g className={styles.parameterLine}><path d="M34 75h137" className={styles.line} /><Text x={176} y={70} size={14}>a</Text></g>
      <g className={styles.reveal}><Dot cx={100} cy={75} /><Text y={145} size={13}>f′(x) = 3x² + 1 &gt; 0</Text></g>
    </>;
    case 20: return <>
      <Text y={74} size={23} className={styles.early}>17 = 5 · 3 + 2</Text>
      <g className={styles.reveal}><Text y={75} size={20}>17 ≡ 2 (mod 5)</Text><Text y={105} size={19}>5 ∤ 17</Text></g>
    </>;
    default: return null;
  }
}

export default function EgeCardPreview({ number, intro = false }) {
  return <span aria-hidden="true" className={`${styles.preview} ${intro ? styles.introPreview : ''}`}>
    <svg viewBox="0 0 200 150" className={styles.diagram}>
      <Illustration number={number} intro={intro} />
    </svg>
  </span>;
}
