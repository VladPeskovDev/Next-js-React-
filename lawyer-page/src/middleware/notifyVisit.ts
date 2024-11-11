import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function notifyVisitMiddleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'Неизвестный IP';
  const userAgent = request.headers.get('user-agent') || 'Неизвестный браузер';

  console.log("IP адрес:", ip);
  console.log("User-Agent:", userAgent);
  console.log("Путь запроса:", request.nextUrl.pathname);

  if (request.nextUrl.pathname === '/') {
    const message = `Новый визит на сайт:\nIP: ${ip}\nБраузер: ${userAgent}`;

    //https://next-js-react-94tt.vercel.app

    fetch('https://advokatpeskov.com/api/sendTelegramNotification', {  // Замените на URL вашего Vercel приложения
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
    .then((response) => {
      if (!response.ok) {
        return response.text().then((errorText) => {
          console.error('Ошибка от Telegram API route:', errorText);
        });
      }
      console.log('Уведомление успешно отправлено.');
    })
    .catch((error) => console.error('Ошибка запроса в Telegram API route:', error));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
