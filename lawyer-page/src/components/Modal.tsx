import { FormEvent, useState } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps): JSX.Element | null {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/sendToTelegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, problem }),
      });
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
          <div className={styles.buttonContainer}>
            <button type="button" onClick={onClose} className={styles.modalButtonCancel}>Отмена</button>
            <button type="submit" className={styles.modalButtonSubmit}>Заказать звонок</button>
          </div>
        </form>
      </div>
    </div>
  );
}
