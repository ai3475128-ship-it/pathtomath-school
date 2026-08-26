import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // 1. Извлекаем данные, которые преподаватель заполнил в форме админки
    const formData = await request.formData();
    const title = formData.get('title');
    const url = formData.get('url');
    const sectionNumRaw = formData.get('sectionNum');
    const isPremiumRaw = formData.get('isPremium'); // чекбокс присылает 'on', если активен

    // 2. Базовая валидация: проверяем, что обязательные поля заполнены
    if (!title || !url || !sectionNumRaw) {
      return NextResponse.json({ error: 'Пожалуйста, заполните все обязательные поля!' }, { status: 400 });
    }

    // 3. Преобразуем типы данных под строгий формат нашей базы данных SQLite
    const sectionNum = parseInt(sectionNumRaw, 10);
    const isPremium = isPremiumRaw === 'on'; // если галочка стоит — true, иначе false

    // 4. Записываем новый видеоурок напрямую в таблицу Video нашей базы данных
    await prisma.video.create({
      data: {
        title,
        url,
        sectionNum,
        isPremium,
      },
    });

    // 5. После успешной публикации перенаправляем преподавателя обратно на страницу видеоуроков
    return NextResponse.redirect(new URL('/videos', request.url), 303);

  } catch (error) {
    console.error('▲ [AZIMUT] Ошибка при сохранении видео в базу данных:', error);
    return NextResponse.json({ error: 'Внутренняя ошибка сервера при публикации видео' }, { status: 500 });
  }
}
