import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN1;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log("Получено сообщение:", message);
    console.log("Токен и чат ID:", { botToken, chatId });

    if (!botToken || !chatId) {
      console.error("Ошибка: TELEGRAM_BOT_TOKEN1 или TELEGRAM_CHAT_ID отсутствуют");
      return res.status(500).json({ error: 'Телеграм токен или ID чата отсутствуют' });
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Ошибка ответа от Telegram API:", errorText);
        return res.status(500).json({ error: 'Ошибка отправки сообщения в Telegram' });
      }

      console.log("Сообщение успешно отправлено в Telegram");
      res.status(200).json({ success: 'Сообщение отправлено в Telegram' });
    } catch (error) {
      console.error("Ошибка при отправке сообщения в Telegram:", error);
      res.status(500).json({ error: 'Ошибка отправки сообщения в Telegram' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Метод ${req.method} не разрешен`);
  }
}
