"use client";

import { FormEvent, useState } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({
  isOpen,
  onClose,
}: ModalProps): JSX.Element | null {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    { /* const phoneRegex = /^(\+7|8)9\d{9}$/;

    // Проверка соответствия формату и длине номера
    if (
      !phoneRegex.test(phone) ||
      (phone.startsWith("+7") && phone.length !== 12) ||
      (phone.startsWith("8") && phone.length !== 11)
    ) {
      setError(
        "Введите корректный номер телефона: +7xxxxxxxxxx (12 символов) или 89xxxxxxxxx (11 символов)."
      );
      return;
    } */}

    if (name.length < 2) {
      setError("Имя должно содержать хотя бы 2 символа.");
      return;
    }

    if (problem.length < 10) {
      setError("Описание проблемы должно содержать хотя бы 10 символов.");
      return;
    }

    try {
      await fetch("/api/sendToTelegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, problem }),
      });
      setError("");
      onClose();
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3 className={styles.modalTitle}>Заказать обратный звонок</h3>
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <input
            type="text"
            placeholder="Ваше имя"
            className={styles.modalInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Ваш номер телефона"
            className={styles.modalInput}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <textarea
            placeholder="Опишите проблему"
            rows={4}
            className={styles.modalTextarea}
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          ></textarea>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={onClose}
              className={styles.modalButtonCancel}
            >
              Отмена
            </button>
            <button type="submit" className={styles.modalButtonSubmit}>
              Заказать звонок
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
