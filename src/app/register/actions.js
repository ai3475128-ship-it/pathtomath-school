'use server';

import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import nodemailer from 'nodemailer';
// 🚀 ИСПРАВЛЕНО: Импортируем функцию инициализации базы данных
import { initProgressTable } from '../profile/init-db';

// Функция для быстрого подключения к файлу базы данных
async function connectDB() {
  return open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
}

export async function registerNewUser(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  if (!name || !email || !password) {
    redirect('/register?error=fields');
  }

  let db;

  try {
    // 🚀 ИСПРАВЛЕНО: Принудительно создаем таблицу PendingUsers в базе перед любыми запросами
    await initProgressTable();

    db = await connectDB();

    // 1. Проверяем, нет ли уже активированного пользователя с таким Email
    const existingUser = await db.get(
      'SELECT * FROM User WHERE email = ?',
      [email.toLowerCase().trim()]
    );

    if (existingUser) {
      redirect('/register?error=exists');
    }

    // 2. Генерируем случайный 6-значный цифровой код подтверждения
    const verificationCode = String(Math.floor(100000 + Math.random() * 900000));

    // Безопасно шифруем пароль
    const hashedPassword = await bcrypt.hash(password, 10);
    const pendingId = Math.random().toString(36).substring(2, 15);
    const createdAt = new Date().toISOString();

    // 3. Сохраняем данные во временную таблицу PendingUsers
    await db.run('DELETE FROM PendingUsers WHERE email = ?', [email.toLowerCase().trim()]);
    await db.run(
      'INSERT INTO PendingUsers (id, email, name, password, code, createdAt) VALUES (?, ?, ?, ?, ?, ?)',
      [pendingId, email.toLowerCase().trim(), name.trim(), hashedPassword, verificationCode, createdAt]
    );

        // 4. НАСТРОЙКА ОТПРАВКИ ПИСЬМА ЧЕРЕЗ GOOGLE SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // 🚀 Подключаемся напрямую к серверам Google
      port: 465,
      secure: true, // Использование SSL для порта 465
      auth: {
        user: 'mathcode111@gmail.com', // 👈 СЮДА впишите вашу новую почту Gmail
        pass: 'pspwhjkkdbclecjf'   // 👈 СЮДА вставьте 16 букв пароля из блокнота (строго БЕЗ ПРОБЕЛОВ)
      }
    });

    // Текст самого письма (Облегчённый формат, который Google доставит за 1 секунду)
    const mailOptions = {
      from: '"PATHtoMATH" <mathcode111@gmail.com>', // 👈 СЮДА также впишите вашу почту Gmail
      to: email.toLowerCase().trim(), 
      subject: 'Код активации профиля',
      text: `Привет! Твой проверочный код для активации аккаунта на платформе PATHtoMATH: ${verificationCode}`
    };

    // Отправляем письмо
    await transporter.sendMail(mailOptions);


  } catch (err) {
    if (err.digest?.startsWith('NEXT_REDIRECT')) {
      throw err;
    }
    console.error('Ошибка при отправке кода подтверждения:', err);
    redirect('/register?error=server');
  } finally {
    if (db) await db.close();
  }

  // Перенаправляем на страницу ввода кода
  redirect(`/verify-email?email=${encodeURIComponent(email.toLowerCase().trim())}`);
}
