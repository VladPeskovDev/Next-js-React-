import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import blockedIps from '../../blockedIps.json';

export function blockIpMiddleware(request: NextRequest) {
  // Получаем IP-адрес из заголовка x-forwarded-for
  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim();

  // Удаляем префикс ::ffff: для корректного сравнения IPv4-адресов
  const normalizedIp = ip.startsWith('::ffff:') ? ip.slice(7) : ip;

  // Проверка, если IP-адрес есть в списке заблокированных
  if (blockedIps.blockedIps.includes(normalizedIp)) {
    return NextResponse.rewrite(new URL('/blocked.png', request.url), {
      status: 403,
    });
  }

  return NextResponse.next(); 
}
