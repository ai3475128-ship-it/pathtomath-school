import styles from './OlympiadPreview.module.css';

// Упрощённый значок ОММО остаётся читаемым в небольшой карточке.
export default function CustomCompetitionLogo({ id }) {
  if (id !== 'omo') return null;

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
