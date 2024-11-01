import styles from "./Footer.module.css";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        &copy; {currentYear} Все права защищены | Ваш адвокат в Москве
      </p>
      <div className={styles.linksContainer}>
        <Link href="/contact" className={styles.footerLink}>
          Контакты
        </Link>
        <span className={styles.iconSeparator}>|</span>
        <a href="https://t.me/VladislavPeskov" target="_blank" rel="noopener noreferrer" className={styles.iconLinkTG}>
          <FaTelegramPlane />
        </a>
        <a href="https://wa.me/+79165780936" target="_blank" rel="noopener noreferrer" className={styles.iconLinkWA}>
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}