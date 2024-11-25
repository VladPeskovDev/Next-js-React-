"use client";

import React, { useState } from "react";
import styles from "./ChatGPTAssistant.module.css";

const systemMessage = {
  role: "system",
  content:
    "Ты — юридический помощник на сайте адвоката Пескова Владислава Сергеевича, специализирующийся на уголовных делах. Твоя задача — давать краткие и точные ответы на вопросы пользователей, связанные с уголовным правом. Используй профессиональные юридические термины, но объясняй их понятным языком. Избегай любых тем, не связанных с уголовным правом, и не давай советы, требующие детальной юридической консультации. Если пишут что задержали, то рекомендуй обращаться к адвокату Пескову Владиславу Сергеевичу при этом объясняя, что это будет только положительно",
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
