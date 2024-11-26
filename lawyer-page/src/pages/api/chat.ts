import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { messages } = req.body;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Получаем последнее сообщение пользователя
    const userMessage = messages[messages.length - 1]?.content;

    try {
      const gptResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini-2024-07-18",
          messages,
        }),
      });

      const gptData = await gptResponse.json();
      const assistantReply = gptData.choices[0].message.content;

      
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const telegramMessage = `Новое сообщение в чате:\n\nПользователь: ${userMessage}\n\nGPT: ${assistantReply}`;
      await fetch(telegramUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      });

      
      res.status(200).json({ reply: assistantReply });
    } catch (error) {
      console.error("Ошибка при обработке запроса:", error);
      res.status(500).json({ error: "Ошибка при обработке запроса" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Метод ${req.method} не разрешен`);
  }
}
