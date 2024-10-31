'use client';

import {  FormEvent } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps): JSX.Element | null {
  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onClose(); // Закрываем модалку после отправки
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3 className={styles.modalTitle}>Заказать обратный звонок</h3>
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <input type="text" placeholder="Ваше имя" className={styles.modalInput} required />
          <input type="tel" placeholder="Ваш номер телефона" className={styles.modalInput} required />
          <textarea placeholder="Опишите проблему" rows={4} className={styles.modalTextarea}></textarea>
          <div className={styles.buttonContainer}>
            <button type="button" onClick={onClose} className={styles.modalButtonCancel}>Отмена</button>
            <button type="submit" className={styles.modalButtonSubmit}>Заказать звонок</button>
          </div>
        </form>
      </div>
    </div>
  );
}
