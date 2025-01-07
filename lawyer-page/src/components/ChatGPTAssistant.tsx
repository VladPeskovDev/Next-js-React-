"use client";

import React, { useState } from "react";
import styles from "./ChatGPTAssistant.module.css";

const systemMessage = {
  role: "system",
  content:
    "Ты — помощник на сайте адвоката Пескова Владислава Сергеевича, специализирующийся на уголовных делах. Твоя задача — давать краткие и точные ответы на вопросы, связанные с уголовным правом. Используй юридические термины, но объясняй их понятным языком. Избегай любых тем, не связанных с уголовным правом, и не давай советы, требующие детальной юридической консультации. Всегда старайся выяснить у пользователя его проблему, предлагай помощь адвоката Пескова В.С. также напоминай номер адвоката Пескова 8 916 578 09 36 и сообщай, что на зайте можно заказать обратный звонок перейти в телеграмм для переписки с адвокатом если это уместно",
};

const ChatGPTAssistant = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    systemMessage, // Добавляем systemMessage как первый элемент
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Состояние видимости чата

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages); // Обновляем сообщения в чате
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();
      const assistantMessage = { role: "assistant", content: data.reply };

      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "Закрыть чат" : "Чат с адвокатом"}
      </button>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>Юридическая консультация</span>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>
          <div className={styles.chatMessages}>
            {messages
              .filter((msg) => msg.role !== "system") 
              .map((msg, index) => (
                <div
                  key={index}
                  className={
                    msg.role === "user"
                      ? styles.userMessage
                      : styles.assistantMessage
                  }
                >
                  {msg.content}
                </div>
              ))}
          </div>
          <div className={styles.chatInputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={styles.chatInput}
              placeholder="Введите ваш вопрос..."
            />
            <button onClick={handleSendMessage} className={styles.sendButton}>
              Отправить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatGPTAssistant;
