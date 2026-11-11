import styles from './OlympiadPreview.module.css';

const figures = {
  logic: <><circle className={styles.draw} pathLength="1" cx="81" cy="57" r="30" /><circle className={styles.draw} pathLength="1" cx="119" cy="57" r="30" /><text x="100" y="108" textAnchor="middle">A ∩ B</text></>,
  numbers: <><path className={styles.draw} pathLength="1" d="M24 76h152" /><text x="100" y="61" textAnchor="middle">2 · 3 · 5 · 7</text><text x="100" y="100" textAnchor="middle" className={styles.small}>простые числа</text></>,
  identity: <>
    <text x="100" y="33" textAnchor="middle" style={{ animationDelay: '80ms' }}>(a + b)ⁿ =</text>
    <text x="42" y="80" textAnchor="middle" style={{ fontSize: '30px', animationDelay: '300ms' }}>∑</text>
    <text x="44" y="54" textAnchor="middle" style={{ fontSize: '10px', animationDelay: '300ms' }}>n</text>
    <text x="44" y="96" textAnchor="middle" style={{ fontSize: '10px', animationDelay: '300ms' }}>k=0</text>
    <text x="76" y="78" style={{ fontSize: '18px', animationDelay: '550ms' }}>
      C<tspan dy="4" fontSize="11">n</tspan><tspan dy="-11" fontSize="11">k</tspan><tspan dy="7" dx="3">a</tspan><tspan dy="-7" fontSize="11">n−k</tspan><tspan dy="7" dx="4">b</tspan><tspan dy="-7" fontSize="11">k</tspan>
    </text>
  </>,
  combinatorics: <><path className={styles.draw} pathLength="1" d="M45 60h28m0 0 38-35m-38 35 38 35m0-70 35-13m-35 13 35 14m-35 56 35-14m-35 14 35 13" /><circle cx="45" cy="60" r="5" /><circle cx="111" cy="25" r="5" /><circle cx="111" cy="95" r="5" /><circle cx="146" cy="12" r="4" /><circle cx="146" cy="39" r="4" /><circle cx="146" cy="81" r="4" /><circle cx="146" cy="108" r="4" /></>,
  equations: <><path className={styles.draw} pathLength="1" d="M65 22q-9 0-9 10v17q0 10-8 10 8 0 8 10v17q0 10 9 10" /><text x="112" y="50" textAnchor="middle">x + y = 5</text><text x="112" y="83" textAnchor="middle">xy = 6</text></>,
  words: <><path className={styles.draw} pathLength="1" d="M28 39h54 M28 70h108 M28 31v16m54-16v16 M28 62v16m108-16v16" /><text x="55" y="28" textAnchor="middle">x</text><text x="82" y="98" textAnchor="middle">2x</text></>,
  algebra: <>
    <text x="100" y="30" textAnchor="middle" style={{ fontSize: '17px', animationDelay: '80ms' }}>aⁿ − bⁿ =</text>
    <text x="100" y="62" textAnchor="middle" style={{ fontSize: '15px', animationDelay: '400ms' }}>(a − b)(aⁿ⁻¹ +</text>
    <text x="100" y="91" textAnchor="middle" style={{ fontSize: '15px', animationDelay: '700ms' }}>aⁿ⁻²b + ⋯ + bⁿ⁻¹)</text>
  </>,
  sequences: <><path className={styles.draw} pathLength="1" d="M28 86h144m-134-5v10m30-10v10m30-10v10m30-10v10m30-10v10" /><text x="100" y="58" textAnchor="middle">1, 1, 2, 3, 5, 8…</text></>,
  trigonometry: <><circle className={styles.draw} pathLength="1" cx="92" cy="59" r="40" /><path className={styles.draw} pathLength="1" d="M45 59h96M92 106V12 M92 59l29-28 M121 31v28" /><circle cx="121" cy="31" r="3" /><text x="151" y="65" className={styles.small}>x</text><text x="97" y="17" className={styles.small}>y</text></>,
  logarithms: <><text x="100" y="49" textAnchor="middle">2ˣ = y</text><text x="100" y="93" textAnchor="middle">log₂ y = x</text><path className={styles.draw} pathLength="1" d="M88 60h24m-5-5 5 5-5 5m-2 4H81m5-5-5 5 5 5" /></>,
  parameters: <><path className={styles.draw} pathLength="1" d="M35 102h135M100 110V12 M52 98Q100-51 148 98 M42 52h115" /><text x="159" y="47" className={styles.small}>a</text></>,
  functions: <><path className={styles.draw} pathLength="1" d="M30 99h145M50 110V12 M54 87C79 93 81 21 108 42s30 45 61 11" /><circle cx="108" cy="42" r="3" /><text x="152" y="35" className={styles.small}>f(x)</text></>,
  // M — середина дуги BC, не содержащей A; I — центр вписанной окружности.
  planimetry: <>
    <circle className={styles.draw} pathLength="1" cx="75" cy="53" r="41" strokeWidth="1.5" />
    <path className={styles.draw} pathLength="1" d="M64.39 13.4 35.4 63.61 112.16 70.33 64.39 13.4 71.43 93.84" style={{ animationDelay: '180ms' }} />
    <path className={styles.draw} pathLength="1" d="M35.4 63.61 71.43 93.84 112.16 70.33" style={{ animationDelay: '440ms' }} />
    <circle cx="67.33" cy="46.99" r="2.2" /><circle cx="71.43" cy="93.84" r="2.2" />
    <text x="53" y="13" className={styles.small}>A</text><text x="22" y="69" className={styles.small}>B</text>
    <text x="116" y="76" className={styles.small}>C</text><text x="73" y="110" className={styles.small}>M</text>
    <text x="72" y="46" className={styles.small}>I</text>
    <text x="126" y="49" className={styles.small} style={{ fontSize: '11px', animationDelay: '700ms' }}>MB = MC</text>
    <text x="126" y="68" className={styles.small} style={{ fontSize: '11px', animationDelay: '700ms' }}>= MI</text>
  </>,
  stereometry: <><path className={styles.draw} pathLength="1" d="M56 43 98 20l51 16v58L108 113 56 96z M56 43l52 17 41-24 M108 60v53" /><path className={styles.hidden} d="M98 20v55l51 19 M56 96l42-21" /></>,
};

export default function OlympiadPreview({ topic }) {
  return <span className={styles.preview} aria-hidden="true"><svg className={styles.diagram} viewBox={topic === 'identity' ? '20 8 160 96' : '0 0 200 120'}>{figures[topic]}</svg></span>;
}
