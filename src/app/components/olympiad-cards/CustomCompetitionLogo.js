import styles from './OlympiadPreview.module.css';

// Упрощённые эмблемы: мелкие детали оригиналов плохо читаются в карточке.
export default function CustomCompetitionLogo({ id }) {
  if (id === 'lomonosov') {
    return <svg className={styles.logoSurface} color="white" viewBox="0 0 240 130" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M44 86h152M53 86V61h19v25M168 86V61h19v25M72 86V49h19v37M149 86V49h19v37M91 86V38h58v48" />
        <path d="M97 38V28h46v10M104 28V20h32v8M111 20V14h18v6M120 14V7M117 9h6" />
        <path d="M59 70v8m7-8v8m12-19v8m7-8v8m17-16v8m9-8v8m9-8v8m9-8v8m9-8v8m14-8v8m7-8v8m14 3v8m7-8v8" />
        <path d="M103 68v18m11-18v18m12-18v18m11-18v18" />
      </g>
      <text x="120" y="111" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="17" letterSpacing="1.1">ЛОМОНОСОВ</text>
    </svg>;
  }

  if (id === 'siberia') {
    return <svg className={styles.logoSurface} color="white" viewBox="0 0 240 130" focusable="false">
      <circle cx="120" cy="49" r="37" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M106 27h29v6h-19l15 16-15 16h19v6h-29v-5l16-17-16-17z" />
      <path d="M77 82c12-7 23-7 34 0s22 7 33 0 22-7 34 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <text x="120" y="114" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="19" letterSpacing="2">ВСЕСИБ</text>
    </svg>;
  }

  if (id === 'omo') {
    return <svg className={styles.logoSurface} color="white" viewBox="0 0 240 130" focusable="false">
      <circle cx="120" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="m101 31 38 38m0-38-38 38" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <g textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14">
        <text x="120" y="30">М</text><text x="120" y="79">М</text>
        <text x="95" y="55">О</text><text x="145" y="55">О</text>
      </g>
      <text x="120" y="112" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="19" letterSpacing="2">ОММО</text>
    </svg>;
  }

  return null;
}
