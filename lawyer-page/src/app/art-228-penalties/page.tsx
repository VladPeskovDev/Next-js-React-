import Link from "next/link";
import styles from "./ArticlePage.module.css";

export const metadata = {
  title: "Статья 228 УК РФ: ответственность за хранение и сбыт — какие наказания",
  description:
    "Разбираем части статьи 228 УК РФ, пороги массы, квалифицирующие признаки, судебную практику и типичные ошибки защиты.",
  keywords:
    "статья 228 УК РФ наказание, ответственность за наркотики, хранение и сбыт, адвокат по 228 Москва",
  openGraph: {
    title: "Наказание по 228 УК РФ: хранение и сбыт",
    description:
      "Ключевые различия частей 228, влияние массы и квалифицирующих признаков, роль адвоката на следствии и в суде.",
  },
  alternates: { canonical: "https://advokatpeskov.com/art-228-penalties" },
};

export default function Art228PenaltiesPage(): JSX.Element {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Статья 228 УК РФ: какие наказания за хранение и сбыт",
    description:
      "Части 228, масса, практика, смягчающие, типичные ошибки защиты. Когда обращаться к адвокату по наркотическим делам.",
    datePublished: "2025-10-01",
    mainEntityOfPage: "https://advokatpeskov.com/art-228-penalties",
  };

  return (
    <div className={styles.articlesContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={styles.breadcrumbs}>
        <Link href="/cases">Блог</Link> · <Link href="/about">Обо мне</Link> · <Link href="/contact">Контакты</Link>
      </div>

      <h1 className={styles.articlesTitle}>Ответственность по ст. 228 УК РФ: что грозит и как защищаться</h1>

      <div className={styles.article}>
        <h3>Части статьи и роль массы вещества</h3>
        <p>Квалификация зависит от массы и цели: хранение для личного vs. сбыт. Неверная трактовка обстоятельств ведёт к ужесточению наказания — это предмет оспаривания защитой.</p>
      </div>

      <div className={styles.article}>
        <h3>Практические акценты защиты</h3>
        <p>Отслеживаем цепочку изъятия, экспертизы, допустимость доказательств, провокации, работу понятых. На ранней стадии есть шанс повлиять на квалификацию и меру пресечения.</p>
      </div>

      <div className={styles.article}>
        <h3>Когда срочно нужен адвокат</h3>
        <p>При задержании, обыске, вызове на допрос, предъявлении обвинения. Ошибочные объяснения без адвоката часто необратимы.</p>
        <p className={styles.readMore}>
          Ещё по теме: <span className={styles.linksRow}>
            <Link href="/drugs">как работает адвокат по наркотикам</Link>, 
            <Link href="/detention-what-to-do">что делать при задержании</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
