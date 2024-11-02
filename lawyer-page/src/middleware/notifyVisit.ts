import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function notifyVisitMiddleware(request: NextRequest) {
  // Попытка получить IP из заголовка x-forwarded-for
  const ip = request.headers.get('x-forwarded-for') || 'Неизвестный IP';
  const userAgent = request.headers.get('user-agent') || 'Неизвестный браузер';

  if (request.nextUrl.pathname === '/') {
    const message = `Новый визит на сайт:\nIP: ${ip}\nБраузер: ${userAgent}`;

    // Отправляем запрос на API route для отправки в Telegram
    fetch(new URL('/api/sendTelegramNotification', request.url), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    }).catch((error) => console.error('Ошибка запроса в Telegram API route:', error));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
