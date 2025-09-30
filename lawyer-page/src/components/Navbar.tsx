'use client';

import { useState } from "react";
import Link from "next/link";
import Modal from "../components/Modal";
import styles from "./Navbar.module.css";
import { FaPhone } from "react-icons/fa";

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.brand}>Адвокат по уголовным делам</div>

        <div className={styles.navLinks}>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ""}`}>
            <li><Link href="/" className={styles.navLink} onClick={toggleMenu}>Главная</Link></li>
            <li><Link href="/pricing" className={styles.navLink} onClick={toggleMenu}>Прайс</Link></li>
            <li><Link href="/cases" className={styles.navLink} onClick={toggleMenu}>Блог</Link></li>
            <li><Link href="/about" className={styles.navLink} onClick={toggleMenu}>Обо мне</Link></li>
            <li><Link href="/contact" className={styles.navLink} onClick={toggleMenu}>Контакты</Link></li>
          </ul>

          {/* Кнопка для вызова модального окна */}
          <button onClick={openModal} className={styles.callButton}>
            <span className={styles.callButtonText}>Заказать звонок</span>
            <FaPhone className={styles.callButtonIcon} />
          </button>
        </div>

        {/* Кнопка для мобильного меню */}
        <button onClick={toggleMenu} className={styles.menuButton}>
          ☰
        </button>
      </nav>

      {/* Модальное окно обратного звонка */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
