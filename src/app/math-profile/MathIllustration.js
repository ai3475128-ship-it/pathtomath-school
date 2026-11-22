'use client';

import { useState } from 'react';
import styles from './MathIllustration.module.css';

export default function MathIllustration() {
  const [expanded, setExpanded] = useState(false);

  return <button
    type="button"
    onClick={() => setExpanded((value) => !value)}
    aria-pressed={expanded}
    aria-label={expanded ? 'Свернуть сумму' : 'Показать развёрнутую сумму'}
    className={`${styles.button} ${expanded ? styles.expanded : ''} relative z-10 rounded-xl text-sky-500 transition-colors duration-300 group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:text-purple-300 dark:focus-visible:outline-purple-400`}
  >
    <span className={styles.formula} aria-hidden="true">
      <span className={styles.sumBlock}>
        <span className={styles.upper}>n</span>
        <span className={styles.sum}>∑</span>
        <span className={styles.lower}>i = 1</span>
      </span>
      <span className={styles.term}>a<sub>i</sub></span>
      <span className={styles.expansion}>= a<sub>1</sub> + ··· + a<sub>n</sub></span>
    </span>
  </button>;
}
