import Link from "next/link";
import styles from "./ArticlePage.module.css";

export const metadata = {
  title: "Что делать при обыске — пошаговая инструкция от адвоката по уголовным делам",
  description:
    "Как вести себя при обыске: основания, права, понятые, протокол, фиксация нарушений. Пошаговые советы адвоката по уголовным делам в Москве.",
  keywords:
    "обыск, что делать при обыске, права при обыске, адвокат по уголовным делам Москва, понятые, протокол обыска",
  openGraph: {
    title: "Что делать при обыске — инструкция адвоката",
    description:
      "Разбираем: основания для обыска, права, понятые, протокол, фото- и видеофиксация. Практические советы адвоката по уголовным делам.",
  },
  alternates: { canonical: "https://advokatpeskov.com/house-search-what-to-do" },
};

export default function HouseSearchPage(): JSX.Element {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Что делать при обыске — пошаговая инструкция",
    description:
      "Основания для обыска, права, понятые, протокол, фиксация нарушений. Советы адвоката по уголовным делам.",
    datePublished: "2025-10-01",
    mainEntityOfPage: "https://advokatpeskov.com/house-search-what-to-do",
  };

  return (
    <div className={styles.articlesContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={styles.breadcrumbs}>
        <Link href="/cases">Блог</Link> · <Link href="/about">Обо мне</Link> · <Link href="/contact">Контакты</Link>
      </div>

      <h1 className={styles.articlesTitle}>Что делать при обыске: краткий план действий</h1>

      <div className={styles.article}>
        <h3>1) Проверяем основания и состав группы</h3>
        <p>Требуйте предъявить постановление следователя/решение суда с адресом, основанием, должностными данными. Фиксируйте ФИО и должности всех участников, проверьте наличие понятых именно в комнате, где идёт обыск.</p>
      </div>

      <div className={styles.article}>
        <h3>2) Контроль процедуры и фиксация нарушений</h3>
        <p>Не препятствуйте, но фиксируйте ход действий. Следите, чтобы понятые не «сидели в коридоре». Просите разрешения на фото/видеосъёмку. Любые нарушения — в письменные замечания к протоколу.</p>
      </div>

      <div className={styles.article}>
        <h3>3) Протокол обыска — читаем и дополняем</h3>
        <p>Требуйте копию протокола. Если «нет техвозможности выдать», укажите это письменно: «Копия протокола не выдана, фотофиксация запрещена». Перечисляйте изъятое максимально конкретно (количество, маркировки, IMEI и т.п.).</p>
      </div>

      <div className={styles.article}>
        <h3>4) Обыск ≠ обследование</h3>
        <p>Обследование проводят оперативные службы, полномочия уже: нет права вскрывать помещения или изымать вещи без процедурных гарантий. Не путайте форматы.</p>
        <p className={styles.readMore}>
          Читайте также: <span className={styles.linksRow}>
            <Link href="/detention-what-to-do">как действовать при задержании</Link>,
            <Link href="/interrogation-what-to-do">что делать при вызове на допрос</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
