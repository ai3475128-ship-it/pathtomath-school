'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Даты расписания дневные; при смене суток в Москве обновляем серверную сортировку.
export default function CalendarClock({ serverDate, expiresAt = [] }) {
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
    const now = Date.now();
    const nextExpiry = expiresAt.map((value) => Date.parse(value)).filter((value) => Number.isFinite(value) && value > now).sort((a,b) => a-b)[0];
    const timeout = nextExpiry && nextExpiry - now < 2147483646 ? window.setTimeout(() => router.refresh(), nextExpiry - now + 1000) : null;
    document.addEventListener('visibilitychange', refreshAfterDateChange);
    window.addEventListener('focus', refreshAfterDateChange);
    return () => {
      window.clearInterval(interval);
      if (timeout) window.clearTimeout(timeout);
      document.removeEventListener('visibilitychange', refreshAfterDateChange);
      window.removeEventListener('focus', refreshAfterDateChange);
    };
  }, [router, serverDate, expiresAt]);

  return null;
}
