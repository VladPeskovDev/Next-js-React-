import Link from "next/link";
import styles from "./ArticlePage.module.css";

export const metadata = {
  title: "Что делать, если задержали — права, сроки, протокол",
  description:
    "Пошаговый план при задержании: кто имеет право задержать, какие права у задержанного, сроки и протокол, когда нужна помощь адвоката.",
  keywords:
    "задержание, права при задержании, протокол задержания, адвокат по уголовным делам Москва, телефонный звонок",
  openGraph: {
    title: "Если вас задержали — краткая памятка",
    description:
      "Объясняем процедуру задержания, права, сроки, когда звать адвоката и как фиксировать нарушения.",
  },
  alternates: { canonical: "https://advokatpeskov.com/detention-what-to-do" },
};

export default function DetentionPage(): JSX.Element {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Что делать, если задержали — права и обязанности",
    description:
      "Процедура задержания, сроки, права задержанного, протокол и роль адвоката по уголовным делам.",
    datePublished: "2025-10-01",
    mainEntityOfPage: "https://advokatpeskov.com/detention-what-to-do",
  };

  return (
    <div className={styles.articlesContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={styles.breadcrumbs}>
        <Link href="/cases">Блог</Link> · <Link href="/about">Обо мне</Link> · <Link href="/contact">Контакты</Link>
      </div>

      <h1 className={styles.articlesTitle}>Что делать, если задержали: ваши права и алгоритм</h1>

      <div className={styles.article}>
        <h3>Кто и на каком основании может задержать</h3>
        <p>Назовите должность, ФИО и звание сотрудника. Требуйте разъяснить основание задержания и ваши права. Попросите уведомить близких и пригласить адвоката.</p>
      </div>

      <div className={styles.article}>
        <h3>Сроки задержания</h3>
        <p>По уголовным делам — обычно до 48 часов (с возможностью продления судом до 72 ч.). По административным — до 3 часов (исключения есть). Все сроки фиксируются документально.</p>
      </div>

      <div className={styles.article}>
        <h3>Протокол и поведение</h3>
        <p>Требуйте копию протокола. Подписывайте с замечаниями при несогласии. Сохраняйте спокойствие, не оказывайте сопротивления, вопросы — через адвоката.</p>
        <p className={styles.readMore}>
          Полезно: <span className={styles.linksRow}>
            <Link href="/house-search-what-to-do">памятка при обыске</Link>,
            <Link href="/interrogation-what-to-do">вызвали на допрос — что делать</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
