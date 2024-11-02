import type { NextRequest } from 'next/server';
import { blockIpMiddleware } from './middleware/blockIp';
import { notifyVisitMiddleware } from './middleware/notifyVisit';

export function middleware(request: NextRequest) {
  // Сначала проверяем блокировку IP
  const blockResponse = blockIpMiddleware(request);
  if (blockResponse.status === 403) {
    return blockResponse; // Если IP заблокирован, завершаем выполнение
  }

  // Затем отправляем уведомление о новом визите
  return notifyVisitMiddleware(request);
}

export const config = {
  matcher: ['/'],
};
