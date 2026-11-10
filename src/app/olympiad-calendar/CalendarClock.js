'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Даты расписания дневные; при смене суток в Москве обновляем серверную сортировку.
export default function CalendarClock({ serverDate }) {
  const router = useRouter();

  useEffect(() => {
    let renderedDate = serverDate;
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Moscow', year: 'numeric', month: '2-digit', day: '2-digit',
    });
    const refreshAfterDateChange = () => {
      const currentDate = formatter.format(new Date());
      if (currentDate !== renderedDate) {
        renderedDate = currentDate;
        router.refresh();
      }
    };
    refreshAfterDateChange();
    const interval = window.setInterval(refreshAfterDateChange, 60_000);
    document.addEventListener('visibilitychange', refreshAfterDateChange);
    window.addEventListener('focus', refreshAfterDateChange);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener('visibilitychange', refreshAfterDateChange);
      window.removeEventListener('focus', refreshAfterDateChange);
    };
  }, [router, serverDate]);

  return null;
}
