'use client';

import  { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Адвокат по уголовным делам</div>
      <button onClick={toggleMenu} className={styles.menuButton}>
        ☰
      </button>

      {/* Ссылки навигации */}
      <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ""}`}>
        <li>
          <Link href="/" className={styles.navLink} onClick={toggleMenu}>
            Главная
          </Link>
        </li>
        <li>
          <Link href="/cases" className={styles.navLink} onClick={toggleMenu}>
            Кейсы
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navLink} onClick={toggleMenu}>
            Обо мне
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navLink} onClick={toggleMenu}>
            Контакты
          </Link>
        </li>
        <li>
          <Link href="/pricing" className={styles.navLink} onClick={toggleMenu}>
            Прайс
          </Link>
        </li>
      </ul>
    </nav>
  );
}
