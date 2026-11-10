'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './OlympiadPreview.module.css';

// Источники изображений указаны рядом с адресами; не для каждой олимпиады
// удалось найти именно её эмблему. Для остальных остаётся название.
const logos = {
  hse: 'https://olymp.hse.ru/data/2013/12/12/1340044099/%D0%9C%D0%9E%D0%A8-%D0%92%D0%9F%20circ%20%D0%BF%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87%D0%BD%D1%8B%D0%B9.png',
  moscow: 'https://strategy48.ru/sites/default/files/news/%D0%91%D0%B5%D0%B7%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1_0.jpg',
  lomonosov: 'https://internat.msu.ru/media/uploads/2015/09/olimp-lomonosov.png',
  pvg: 'https://olimpiada.ru/files/m_activity/115/vorgor.png',
  fizteh: 'https://ucarecdn.stepik.net/ed9efb11-113e-4837-9005-12be21db9aad/',
  spbu: 'https://storage.mooc.ru/source/origin/photos/companies/3491/large.png',
  spb: 'https://static.tildacdn.com/tild3761-6132-4232-a235-626365396631/image.png',
  turgor: 'https://olimpiada.ru/files/m_activity/5/turnir-gorodov.jpg',
  siberia: 'https://strategy48.ru/sites/default/files/news/cq7Mdug7LzA.jpg',
  innopolis: 'https://static.tildacdn.com/tild3730-6533-4338-b562-373038383833/photo_2025-10-21_15-.jpg',
  omo: 'https://www.abiturient.ru/upload/medialibrary/57b/1280x800-mezhvuz_math.4d8.jpg',
  rosatom: 'https://www.1511.ru/storage/file/9498/1280x800-ros_atom.4d81.jpg',
  turlom: 'https://www.laplandiya.org/uploads/pages/5082/img/news-20200904-1599221028-kfd8x9.png',
  bibn: 'https://olimpiada.ru/files/m_activity/193/361.jpg',
  shag: 'https://olymp.bmstu.ru/sites/default/files/common.png',
  open: 'https://static.tildacdn.com/tild3734-3532-4861-b665-356330396163/LOGO.png',
  belchonok: 'https://olimpiada.ru/files/m_activity/5159/%D0%B1%D0%B5%D0%BB%D1%8C%D1%87%D0%BE%D0%BD%D0%BE%D0%BA.jpg',
};

// У этих оригиналов светлый знак расположен на тёмной подложке.
const lightOnDark = new Set(['moscow', 'shag']);

export default function CompetitionCard({ olympiad }) {
  const [activated, setActivated] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const logo = logos[olympiad.id];
  const previewAvailable = Boolean(logo) && !failed;

  return <Link href={`/olympiads/tasks/${olympiad.id}`}
    onMouseEnter={() => setActivated(true)} onFocus={() => setActivated(true)}
    className={`group flex min-h-[150px] flex-col rounded-[24px] border border-blue-100/60 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:shadow-xl dark:border-purple-500/20 dark:bg-purple-950/10 dark:hover:border-sky-500 dark:hover:bg-sky-500 ${styles.card} ${previewAvailable && loaded ? styles.hasLogo : ''}`}>
    <div className={styles.competitionLabel}>
      <span className="text-xs font-black uppercase tracking-wide text-sky-600 group-hover:text-white dark:text-purple-300 dark:group-hover:text-white">{olympiad.level} уровень</span>
      <h2 className="mt-3 text-lg font-black leading-snug text-slate-800 group-hover:text-white dark:text-white">{olympiad.name}</h2>
    </div>
    {previewAvailable && <span className={styles.logoPreview} aria-hidden="true">
      {activated && <span className={`${styles.logoSurface} ${lightOnDark.has(olympiad.id) ? styles.lightOnDark : ''}`}>
        {/* Изображение загружается только при наведении или фокусе; при ошибке остаётся название. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt="" referrerPolicy="no-referrer" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />
      </span>}
    </span>}
  </Link>;
}
