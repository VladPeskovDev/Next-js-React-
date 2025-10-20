import Link from "next/link";
import styles from "./ArticlePage.module.css";

export const metadata = {
  title: "Как выбрать лучшего адвоката по уголовным делам в Москве — чек-лист",
  description:
    "Какие критерии важны: опыт, специализация, репутация, тактика защиты, прозрачность условий и коммуникации. Кому доверить защиту по уголовному делу.",
  keywords:
    "как выбрать адвоката по уголовным делам Москва, лучший адвокат, уголовный адвокат рекомендации",
  openGraph: {
    title: "Как выбрать адвоката по уголовным делам — что проверить",
    description:
      "Пошаговый чек-лист выбора: опыт в сходных делах, стратегия, работа в суде, документы и прозрачные условия.",
  },
  alternates: { canonical: "https://advokatpeskov.com/how-to-choose-criminal-lawyer-moscow" },
};

export default function ChooseLawyerPage(): JSX.Element {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Как выбрать лучшего адвоката по уголовным делам в Москве",
    description:
      "На что смотреть при выборе защитника: опыт, специализация, стратегия, документы и прозрачные условия сотрудничества.",
    datePublished: "2025-10-01",
    mainEntityOfPage: "https://YOUR_DOMAIN/how-to-choose-criminal-lawyer-moscow",
  };

  return (
    <div className={styles.articlesContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={styles.breadcrumbs}>
        <Link href="/cases">Блог</Link> · <Link href="/about">Обо мне</Link> · <Link href="/contact">Контакты</Link>
      </div>

      <h1 className={styles.articlesTitle}>Как выбрать адвоката по уголовным делам в Москве</h1>

      <div className={styles.article}>
        <h3>Профессионализм и релевантный опыт</h3>
        <p>Смотрите не общий стаж, а реальные кейсы по схожим категориям дел. Обсудите возможные риски и тактику — честная оценка лучше, чем обещания «гарантированного результата».</p>
      </div>

      <div className={styles.article}>
        <h3>Прозрачные условия и коммуникация</h3>
        <p>Договор, объём работ, порядок оплаты, отчётность. Регулярная связь и понятные объяснения — признак профессионального подхода.</p>
      </div>

      <div className={styles.article}>
        <h3>Репутация и этика</h3>
        <p>Задача защитника — законные инструменты и процессуальная грамотность, а не «серые» обещания. Это влияет на исход и на апелляционные перспективы.</p>
        <p className={styles.readMore}>
          Полезно почитать: <span className={styles.linksRow}>
            <Link href="/article">как работает адвокат по уголовным делам</Link>,
            <Link href="/fraud">адвокат по делам о мошенничестве</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
