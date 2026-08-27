"use client";

import { FaPhone, FaTelegramPlane } from "react-icons/fa";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps): React.JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className={styles.modalClose}
        >
          ✕
        </button>

        <h3 className={styles.modalTitle}>Связаться с адвокатом</h3>
        <p className={styles.modalSubtitle}>
          Круглосуточно. Отвечаю в течение 10 минут.
        </p>

        <div className={styles.contactList}>
          <a href="tel:+79165780936" className={styles.contactLink}>
            <FaPhone className={styles.contactIcon} />
            <span>+7 916 578-09-36</span>
          </a>
          <a
            href="https://t.me/Peskov_Vladislav"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <FaTelegramPlane className={styles.contactIcon} />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
