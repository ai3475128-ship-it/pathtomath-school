import styles from './EgeCardPreview.module.css';

const Line = ({ d, className = '' }) => <path d={d} pathLength="1" className={`${styles.line} ${styles.draw} ${className}`} />;
const Text = ({ x = 100, y = 80, size = 20, children, className = '' }) => <text x={x} y={y} textAnchor="middle" fontSize={size} className={`${styles.text} ${className}`}>{children}</text>;
const Dot = ({ cx, cy, className = '' }) => <circle cx={cx} cy={cy} r="4" className={`${styles.dot} ${className}`} />;
const Axes = () => <><Line d="M28 120H180 M42 130V20" /><path d="M174 116l6 4-6 4 M38 26l4-6 4 6" className={styles.line} /></>;

function Illustration({ number, intro }) {
  if (intro) {
    switch (number) {
      case 15: return <>
        <g className={styles.early}><path d="M76 36h29v29h29v29h-29v29H76V94H47V65h29z M76 65h29v29H76z" className={styles.line} /></g>
        <g className={styles.reveal}><path d="M56 57 100 34l44 23v49l-44 25-44-25z M56 57l44 24 44-24 M100 81v50" className={styles.line} /></g>
      </>;
      case 18: return <><Line d="M31 117 100 30 169 117Z" /><Text x={65} y={70} size={19} className={styles.reveal}>c</Text><Text x={138} y={70} size={19} className={styles.reveal}>a</Text><Text y={138} size={19} className={styles.reveal}>b</Text></>;
      case 19: return <><Axes /><Line d="M48 112Q100 10 172 112" /><g className={styles.slideUp}><path d="M30 92H178" className={styles.line} /><Text x={172} y={86} size={16}>a</Text></g></>;
      case 20: return <><Text y={68} size={26} className={styles.early}>12</Text><Text y={88} size={25} className={styles.reveal}>12 = 2² · 3</Text></>;
      default: return null;
    }
  }
  switch (number) {
    case 1: return <><Line d="M30 118 L100 34 L170 118 Z" /><path d="M54 118 A24 24 0 0 0 46 99" className={`${styles.line} ${styles.reveal}`} /><Text x={60} y={105} size={19} className={styles.reveal}>α</Text></>;
    case 2: return <><path d="M22 101h55m-8-5 8 5-8 5" className={`${styles.line} ${styles.moveRight}`} /><path d="M153 53h-52m8-5-8 5 8 5" className={`${styles.line} ${styles.moveLeft}`} /><g className={styles.reveal}><path d="M58 120h74m-8-6 8 6-8 6" className={styles.line} /><Text y={46} size={18}>a⃗ + b⃗</Text></g></>;
    case 3: return <><Line d="M50 56 98 32 150 56v51l-52 24-48-24z M50 56l48 25 52-25 M98 81v50" /><path d="M50 56l100 51" className={`${styles.line} ${styles.reveal}`} /></>;
    case 4: return <><g className={styles.dice}><rect x="68" y="29" width="64" height="64" rx="11" className={styles.line} />{[[82,44],[82,61],[82,78],[118,44],[118,61],[118,78]].map(([x,y])=><Dot key={`${x}-${y}`} cx={x} cy={y}/>)}</g><Text y={126} size={22} className={styles.reveal}>P = 1/6</Text></>;
    case 5: return <><Text y={51} size={18} className={styles.early}>P(A | B) = ?</Text><g className={styles.reveal}><Text x={100} y={46} size={17}>P(A | B) =</Text><Text x={100} y={75} size={17}>P(B | A) · P(A)</Text><path d="M40 84h120" className={styles.line} /><Text x={100} y={108} size={17}>P(B)</Text></g></>;
    case 6: return <><path d="M37 119h132 M37 119V32" className={styles.line}/>{[40,69,95,61].map((h,i)=><rect key={i} x={49+i*28} y={119-h} width="18" height={h} rx="2" className={`${styles.bar} ${styles[`delay${i}`] || ''}`} />)}<Text y={143} size={18} className={styles.reveal}>E(X)</Text></>;
    case 7: return <><Text y={78} size={25} className={styles.early}>2x + 4 = 10</Text><Text y={87} size={29} className={styles.reveal}>x = 3</Text></>;
    case 8: return <><Text y={78} size={29} className={styles.early}>√25</Text><Text y={87} size={31} className={styles.reveal}>5</Text></>;
    case 9: return <><Axes /><Line d="M45 108 C75 110 86 40 120 60 S153 102 177 49" /><g className={styles.tangentMove}><path d="M72 100l52-52" className={styles.line} /><Dot cx={98} cy={74} /></g><Text x={159} y={35} size={18} className={styles.reveal}>f′(x)</Text></>;
    case 10: return <><path d="M84 37a15 15 0 0 1 30 0v57a23 23 0 1 1-30 0z" className={styles.line} /><path d="M99 104V52" className={`${styles.thermometer} ${styles.line}`} /><Dot cx={99} cy={110}/><path d="M120 50h12M120 65h9M120 80h12" className={styles.line}/><Text x={152} y={61} size={18} className={styles.reveal}>T</Text></>;
    case 11: return <><path d="M24 105h152 M30 92l6 13-6 13 M170 92l-6 13 6 13" className={styles.line}/><g className={styles.moveRight}><circle cx="42" cy="87" r="8" className={styles.line}/></g><g className={styles.moveLeft}><circle cx="158" cy="87" r="8" className={styles.line}/></g><Text y={57} size={18} className={styles.reveal}>S</Text></>;
    case 12: return <><Axes /><Line d="M49 30 Q101 202 174 28" /></>;
    case 13: return <><path d="M28 116h145" className={styles.line}/>{[32,56,80].map((h,i)=><rect key={i} x={44+i*39} y={116-h} width="25" height={h} className={`${styles.bar} ${styles[`delay${i}`] || ''}`} />)}<Text y={143} size={15} className={styles.reveal}>S = S₀(1+r)ⁿ</Text></>;
    case 14: return <><Text y={75} size={24} className={styles.early}>x² − 4 = 0</Text><Text y={85} size={23} className={styles.reveal}>x = −2;  x = 2</Text></>;
    case 15: return <><Line d="M32 112 100 27l68 85-68 22z M100 27v107 M32 112l68-22 68 22" /><path d="M65 71 100 59l35 12-35 13z" className={`${styles.line} ${styles.reveal}`} /></>;
    case 16: return <><path d="M24 88h155 M171 83l8 5-8 5" className={styles.line}/><circle cx="97" cy="88" r="6" className={styles.cutout} /><path d="M104 88h55" pathLength="1" className={`${styles.line} ${styles.draw}`} strokeWidth="4"/><Text x={97} y={116} size={17}>2</Text><Text y={54} size={21} className={styles.reveal}>x &gt; 2</Text></>;
    case 17: return <><Axes /><Line d="M42 116 Q102 -22 171 116" /><g className={styles.toMaximum}><Dot cx={66} cy={76} /></g><Text x={111} y={38} size={17} className={styles.reveal}>max</Text></>;
    case 18: return <><circle cx="100" cy="78" r="55" pathLength="1" className={`${styles.line} ${styles.draw}`} /><g className={styles.reveal}><path d="M50 101 86 25 153 91Z M50 101 100 78 153 91 M79 40 Q86 43 97 36 M84 85 Q100 104 117 82" className={styles.line} /><Text x={87} y={53} size={14}>α</Text><Text x={101} y={109} size={14}>2α</Text></g></>;
    case 19: return <><Axes /><Line d="M49 45 Q103 175 169 45" /><g className={styles.slideUp}><path d="M33 104h143" className={styles.line}/><Text x={169} y={98} size={17}>a</Text></g><g className={styles.reveal}><Dot cx={63} cy={72}/><Dot cx={155} cy={72}/></g></>;
    case 20: return <><Text y={66} size={21} className={styles.early}>1  2  3  4  5  6  7</Text><Text y={91} size={26} className={styles.reveal}>2 · 3 · 5 · 7</Text></>;
    default: return null;
  }
}

export default function EgeCardPreview({ number, intro = false }) {
  return <span aria-hidden="true" className={styles.preview}>
    <svg viewBox="0 0 200 150" className={styles.diagram}>
      <Illustration number={number} intro={intro} />
    </svg>
  </span>;
}
