'use server';

import { redirect } from 'next/navigation';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

async function connectDB() {
  return open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
}

export async function verifyCode(formData) {
  const email = formData.get('email');
  const code = formData.get('code');

  if (!email || !code) {
    redirect(`/verify-email?email=${encodeURIComponent(email)}&error=fields`);
  }

  let db;
  try {
    db = await connectDB();

    // 1. Ищем временного пользователя в PendingUsers
    const pendingUser = await db.get(
      'SELECT * FROM PendingUsers WHERE email = ?',
      [email.toLowerCase().trim()]
    );

    // Если записи нет или код из письма не совпадает с введённым
    if (!pendingUser || pendingUser.code !== code.trim()) {
      redirect(`/verify-email?email=${encodeURIComponent(email)}&error=wrong`);
    }

    // 2. Код верный! Переносим пользователя в основную таблицу User с ролью STUDENT
    const userId = Math.random().toString(36).substring(2, 15);
    const createdAt = new Date().toISOString();

    await db.run(
      'INSERT INTO User (id, email, name, password, role, createdAt) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, pendingUser.email, pendingUser.name, pendingUser.password, 'STUDENT', createdAt]
    );

    // 3. Удаляем временную запись из PendingUsers, чтобы очистить базу
    await db.run('DELETE FROM PendingUsers WHERE email = ?', [email.toLowerCase().trim()]);

  } catch (err) {
    if (err.digest?.startsWith('NEXT_REDIRECT')) {
      throw err;
    }
    console.error('Ошибка верификации кода:', err);
    redirect(`/verify-email?email=${encodeURIComponent(email)}&error=server`);
  } finally {
    if (db) await db.close();
  }

  // После успешной активации отправляем на форму входа
  redirect('/login?success=verified');
}
