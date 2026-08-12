'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

async function connectDB() {
  return open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('userSession');
  if (!sessionCookie) return null;
  try {
    return JSON.parse(Buffer.from(sessionCookie.value, 'base64').toString('utf8'));
  } catch (e) {
    return null;
  }
}

export async function loginUser(formData) {
  const email = formData.get('email');
  const password = formData.get('password');
  // Получаем выбранную пользователем вкладку на фронтенде ('student' или 'teacher')
  const selectedTab = formData.get('selectedTab') || 'student';

  if (!email || !password) {
    redirect('/login?error=fields');
  }

  let db;
  let targetRoute = '/profile';

  try {
    db = await connectDB();

    const user = await db.get(
      'SELECT * FROM User WHERE email = ?',
      [email.toLowerCase().trim()]
    );

    if (!user) {
      redirect('/login?error=wrong');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      redirect('/login?error=wrong');
    }

    const userRole = user.role || 'STUDENT';

    // 🔒 ИСПРАВЛЕНА ЗАЩИТА РОЛИ:
    // Теперь через вкладку куратора мы пускаем и преподавателей (TEACHER), и руководителей (ADMIN).
    // Доступ на этой вкладке закрыт только обычным ученикам (STUDENT).
    if (selectedTab === 'teacher' && userRole === 'STUDENT') {
      redirect('/login?error=not_a_teacher&tab=teacher');
    }

    const sessionData = {
      id: user.id,
      email: user.email,
      role: userRole
    };

    const encryptedSession = Buffer.from(JSON.stringify(sessionData)).toString('base64');

    const cookieStore = await cookies();
    cookieStore.set('userSession', encryptedSession, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    // Фиксируем активность посещения сайта при каждом успешном входе
    const logId = Math.random().toString(36).substring(2, 15);
    await db.run(
      'INSERT INTO ActivityLog (id, userId, email, actionType, timestamp) VALUES (?, ?, ?, ?, ?)',
      [logId, user.id, user.email, 'LOGIN', new Date().toISOString()]
    );

    // Умное распределение по маршрутам личных кабинетов после авторизации
    if (userRole === 'ADMIN') {
      targetRoute = '/admin-panel';       // Руководители всегда летят в главный пункт управления
    } else if (userRole === 'TEACHER') {
      targetRoute = '/teacher-dashboard'; // Преподаватели летят во внутренний бэк-офис куратора
    } else {
      targetRoute = '/profile';           // Ученики летят в свой личный профиль
    }

  } catch (err) {
    // Если redirect вызван внутри try, Next.js прокидывает специальную ошибку. Не глушим её.
    if (err.digest?.startsWith('NEXT_REDIRECT')) {
      throw err;
    }
    console.error('Ошибка бэкенда при входе:', err);
    redirect('/login?error=server');
  } finally {
    if (db) await db.close();
  }

  redirect(targetRoute);
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete('userSession');
  redirect('/');
}
