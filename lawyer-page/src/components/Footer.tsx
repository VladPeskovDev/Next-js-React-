import React from "react";
import styles from "./Footer.module.css";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        &copy; {currentYear} Адвокат Песков В.С. Все права защищены.
      </div>
    </footer>
  );
}
