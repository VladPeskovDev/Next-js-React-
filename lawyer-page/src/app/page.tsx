'use client';

import Link from "next/link";
import { useState } from "react";
import styles from "./HomePage.module.css";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa"; 

export default function HomePage(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.container}>
      {/* Первая карточка на всю ширину */}
      <section className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>Адвокат по уголовным делам Песков В.С.</h1>
          <p className={styles.heroDescription}>Опытный адвокат по уголовным делам, с успешной практикой на протяжении долгих лет.</p>
        </div>
        <Link href="/about">
          <button className={styles.heroButton}>Обо мне</button>
        </Link>
      </section>

      {/* Контейнер для карточек на десктопе */}
      <div className={styles.cardContainer}>
        {/* Карточка с кейсами */}
        <section className={styles.callbackCases}>
          <h2 className={styles.callbackTitle}>Ознакомиться с кейсами адвоката</h2>
          <Link href="/cases">
            <button className={styles.callbackButton}>Кейсы</button>
          </Link>
        </section>

        {/* Карточка обратного звонка */}
        <section className={styles.callbackCard}>
        <h2 className={styles.callbackTitle}>Заказать звонок адвоката</h2>
        <p className={styles.callbackDescription}>Оставьте свой номер, и мы свяжемся с вами в ближайшее время.</p>
        
        {/* Контейнер для кнопки и иконок */}
        <div className={styles.buttonAndIcons}>
          <button onClick={openModal} className={styles.callbackButton}>Заказать звонок</button>
          <div className={styles.socialIcons}>
            <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaTelegramPlane />
            </a>
            <a href="https://wa.me/your_whatsapp_number" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Заказать обратный звонок</h3>
            <form className={styles.modalForm}>
              <input type="text" placeholder="Ваше имя" className={styles.modalInput} />
              <input type="tel" placeholder="Ваш номер телефона" className={styles.modalInput} />
              <textarea placeholder="Опишите проблему" rows={4} className={styles.modalTextarea}></textarea>
              <div className="flex gap-4 mt-4">
                <button type="button" onClick={closeModal} className={styles.modalButtonCancel}>Отмена</button>
                <button type="submit" className={styles.modalButtonSubmit}>Заказать звонок</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}










 {/* Карточки с информацией 
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
        <div className="flex flex-col gap-3 rounded-lg border border-gray-500 bg-[#1f2a44] p-4">
          <div className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
            </svg>
          </div>
          <h2 className="text-white text-base font-bold leading-tight">Разрешенные дела</h2>
          <p className="text-gray-300 text-sm">
            Большой опыт в разрешении уголовных дел различных категорий.
          </p>
        </div>
         
      </section> */}