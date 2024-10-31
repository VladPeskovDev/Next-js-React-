'use client';


import { useState } from "react";
import styles from "./HomePage.module.css";
import Modal from "../components/Modal";

export default function HomePage(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.container}>
      {/* Верхний контейнер */}
      <section className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>Адвокат по уголовным делам Песков В.С.</h1>
          <p className={styles.heroDescription}>
            Опытный адвокат по уголовным делам, с успешной практикой на протяжении долгих лет.
          </p>
        </div>
      </section>

      {/* Контейнер с надписью "Услуги" */}
      <section className={styles.servicesHeader}>
        <h2>Услуги</h2>
      </section>

      {/* Контейнер с 4 карточками */}
      <section className={styles.fourCardsSection}>
        <div className={styles.cardWrapper}>
          <div className={styles.serviceCard}>Услуга 1</div>
          <div className={styles.serviceCard}>Услуга 2</div>
          <div className={styles.serviceCard}>Услуга 3</div>
          <div className={styles.serviceCard}>Услуга 4</div>
        </div>
      </section>

      {/* Контейнер с кнопкой "Все услуги" */}
      <section className={styles.allServicesButton}>
        <button>Все услуги</button>
      </section>

      {/* Контейнер с 3 карточками (фото, текст) */}
      <section className={styles.threeCardsSection}>
        <div className={styles.cardWrapper}>
          <div className={styles.caseCard}>
            <div className={styles.caseImage} />
            <p>Описание кейса 1</p>
          </div>
          <div className={styles.caseCard}>
            <div className={styles.caseImage} />
            <p>Описание кейса 2</p>
          </div>
          <div className={styles.caseCard}>
            <div className={styles.caseImage} />
            <p>Описание кейса 3</p>
          </div>
        </div>
      </section>

      {/* Использование модального окна */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}









 