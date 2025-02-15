import styles from "./ContactPage.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import ClientYandexMap from "../../components/ClientYandexMap"; // Импортируем клиентский компонент

export const metadata = {
  title: "Телефон адвоката по уголовным делам в Москве – Срочная помощь 24/7",
  description:
    "Телефоны адвокатов по уголовным делам. Срочная юридическая помощь, консультация, защита в суде. Звоните круглосуточно: 8 916 578 09 36.",
  keywords: "телефон адвоката, телефоны адвокатов, адвокат по уголовным делам телефон, срочный адвокат Москва, консультация адвоката",
  openGraph: {
    title: "Срочный телефон адвоката по уголовным делам – консультация 24/7",
    description:
      "Нужен адвокат? Телефон уголовного адвоката в Москве. Помощь при задержании, суде, следствии. Звоните для бесплатной консультации!",
  },
};


export default function ContactPage(): JSX.Element {
  return (
    <main className={styles.container}>
      <div className={styles.photoContainer}>
        <div className={styles.photoOverlay}>
          <p className={styles.overlayText}>Если Вам нужна помощь, контакты для консультации</p>
          <div className={styles.buttons}>
            <a href="tel:+79165780936" className={styles.button}>+7 916 578 09 36</a>
            <a href="https://t.me/VladislavPeskov" target="_blank" rel="noopener noreferrer" className={styles.buttonTelegram}>
              <FaTelegramPlane className={styles.icon}/>Telegram
            </a>
          </div>
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <div className={styles.card}>
            <p>Адрес: г. Москва, ул. Маршала Рыбалко 2, корп.6, оф.408</p>
          </div>
          <div className={styles.card}>
            <p>Коллегия адвокатов №1, ИНН 1326186560, ОГРН 1021300987070</p>
          </div>
          <div className={styles.card}>
            <p>Регистрационный №13/597, Удостоверение № 686</p>
          </div>
        </div>
      </div>

      {/* Карта загружается лениво */}
      <div className={styles.mapContainer}>
        <ClientYandexMap />
      </div>
    </main>
  );
}