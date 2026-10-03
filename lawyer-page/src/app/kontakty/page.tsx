import styles from "./ContactPage.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import ClientYandexMap from "../../components/ClientYandexMap"; // Импортируем клиентский компонент
import { BreadcrumbsMicrodata } from "@/components/mdx/Breadcrumbs";

const breadcrumbItems = [
  { name: "Главная", url: "/" },
  { name: "Контакты", url: "/kontakty/" },
];

export const metadata = {
  title: "Телефон адвоката в Москве — помощь 24/7",
  description:
    "Телефоны и адрес адвоката по уголовным делам Пескова В.С. в Москве. Срочная юридическая помощь, бесплатная консультация, защита в суде, выезд при задержании 24/7. Звоните круглосуточно: 8 916 578 09 36. Telegram: @Peskov_Vladislav.",
  keywords: "телефон адвоката, телефоны адвокатов, адвокат по уголовным делам телефон, срочный адвокат Москва, консультация адвоката",
  alternates: { canonical: "https://advokat-peskov.com/kontakty/" },
  openGraph: {
    type: "website",
    url: "https://advokat-peskov.com/kontakty/",
    title: "Срочный телефон адвоката по уголовным делам — консультация 24/7",
    description:
      "Нужен адвокат? Телефон уголовного адвоката в Москве. Помощь при задержании, суде, следствии. Звоните для бесплатной консультации!",
    siteName: "Адвокат Песков — уголовные дела",
    images: [{ url: "/1312.webp", width: 1000, height: 723, alt: "Адвокат Песков В.С." }],
  },
};


const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://advokat-peskov.com/" },
    { "@type": "ListItem", position: 2, name: "Контакты", item: "https://advokat-peskov.com/kontakty/" },
  ],
};

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <BreadcrumbsMicrodata items={breadcrumbItems} />
      <div className={styles.photoContainer}>
        <div className={styles.photoOverlay}>
          <h1 className={styles.overlayText}>Контакты адвоката по уголовным делам в Москве</h1>
          <p className={styles.overlaySubtext}>Если Вам нужна помощь, звоните — работаю круглосуточно.</p>
          <div className={styles.buttons}>
            <a href="tel:+79165780936" className={styles.button}>+7 916 578 09 36</a>
            <a href="https://t.me/Peskov_Vladislav" target="_blank" rel="noopener noreferrer" className={styles.buttonTelegram}>
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