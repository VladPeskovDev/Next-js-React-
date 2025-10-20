import Link from "next/link";
import styles from "./ArticlePage.module.css";

export const metadata = {
  title: "Вызвали на допрос: как подготовиться и что говорить",
  description:
    "Как вызывают на допрос, права свидетеля и подозреваемого, длительность и порядок допроса, когда и зачем нужен адвокат.",
  keywords:
    "допрос, повестка на допрос, права свидетеля, адвокат на допросе, как вести себя на допросе, уголовное дело",
  openGraph: {
    title: "Что делать, если вызвали на допрос — советы адвоката",
    description:
      "Разбор статуса, прав и обязанностей на допросе. Как избежать ошибок и зафиксировать протокол без искажений.",
  },
  alternates: { canonical: "https://advokatpeskov.com/interrogation-what-to-do" },
};

export default function InterrogationPage(): JSX.Element {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Вызвали на допрос — пошаговый разбор",
    description:
      "Порядок вызова, права, длительность, протокол и роль адвоката. Рекомендации по поведению и речи.",
    datePublished: "2025-10-01",
    mainEntityOfPage: "https://YOUR_DOMAIN/interrogation-what-to-do",
  };

  return (
    <div className={styles.articlesContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={styles.breadcrumbs}>
        <Link href="/cases">Блог</Link> · <Link href="/about">Обо мне</Link> · <Link href="/contact">Контакты</Link>
      </div>

      <h1 className={styles.articlesTitle}>Вызвали на допрос: права, статус и тактика</h1>

      <div className={styles.article}>
        <h3>Повестка и статус</h3>
        <p>Повестка должна содержать ФИО, статус (свидетель/подозреваемый и т.д.), данные следователя, время и место. От статуса зависят объём прав и обязанностей.</p>
      </div>

      <div className={styles.article}>
        <h3>Как вести себя на допросе</h3>
        <p>Избегайте «свободного рассказа». Отвечайте кратко в формате «вопрос — ответ». При сомнениях — используйте право не свидетельствовать против себя и близких. Лучше с адвокатом.</p>
      </div>

      <div className={styles.article}>
        <h3>Протокол и замечания</h3>
        <p>Внимательно перечитывайте протокол. Все искажения, неточности и дополнения — письменно. Не подписывайте документ, если он не отражает суть сказанного.</p>
        <p className={styles.readMore}>
          См. также: <span className={styles.linksRow}>
            <Link href="/detention-what-to-do">если вас задержали</Link>,
            <Link href="/house-search-what-to-do">что делать при обыске</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
