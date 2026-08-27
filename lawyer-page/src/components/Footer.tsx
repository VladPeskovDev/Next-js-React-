import styles from "./Footer.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        &copy; {currentYear} Все права защищены | Ваш адвокат в Москве
      </p>
      <div className={styles.linksContainer}>
        <Link href="/kontakty/" className={styles.footerLink}>
          Контакты
        </Link>
        <span className={styles.iconSeparator}>|</span>
        <a href="https://t.me/Peskov_Vladislav" target="_blank" rel="noopener noreferrer" className={styles.iconLinkTG}>
          <FaTelegramPlane />
        </a>
      </div>
    </footer>
  );
}