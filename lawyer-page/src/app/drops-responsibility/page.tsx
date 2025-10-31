import Link from "next/link";
import styles from "./ArticlePage.module.css";

export const metadata = {
  title: "Кто такие дропы и какая ответственность в России — советы адвоката",
  description:
    "Понятно объясняем, кто такие дропы, что будет за передачу карты третьим лицам, какие статьи УК РФ применяются (159, 172.2, 174, 187) и как адвокат поможет защититься.",
  keywords:
    "кто такие дропы, ответственность дроп, передал карту что будет, статья за дропов, 172.2 УК РФ, 174 УК РФ, 159 УК РФ, адвокат по уголовным делам Москва",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "none",
    "max-video-preview": -1,
    "max-snippet": -1,
  },
  alternates: {
    canonical: "https://advokatpeskov.com/drops-responsibility",
    languages: {
      ru: "https://advokatpeskov.com/drops-responsibility",
    },
  },
  openGraph: {
    type: "article",
    url: "https://advokatpeskov.com/drops-responsibility",
    title: "Дропы в России: кто это и какая ответственность",
    description:
      "Разбор для обычных людей: что такое дропы, какие статьи УК РФ применяются, как защититься и когда нужен адвокат.",
    siteName: "Адвокат Песков — уголовные дела",
  },
  twitter: {
    card: "summary",
    title: "Дропы в России: кто это и какая ответственность",
    description:
      "Передал карту — стал участником схемы? Разбираем, какая ответственность и что делать.",
  },
  icons: { icon: "/favicon.ico" },
};

const PUBLISHED = "2025-10-26";
const MODIFIED = "2025-10-26";

export default function DropsResponsibilityPage(): JSX.Element {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Кто такие дропы и какая ответственность в России",
    description:
      "Кто такие дропы, какая уголовная ответственность за передачу карты, какие статьи УК РФ применяются и как защититься.",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    inLanguage: "ru-RU",
    mainEntityOfPage: "https://advokatpeskov.com/drops-responsibility",
    author: {
      "@type": "Person",
      name: "Адвокат Песков",
      url: "https://advokatpeskov.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Адвокат Песков",
      url: "https://advokatpeskov.com",
    },
    articleSection: [
      "Кто такие дропы",
      "За что наступает ответственность",
      "«Я не знал» — не оправдание",
      "Что грозит дропу",
      "Если вы стали «невольным дропом»",
      "Итог",
    ],
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Блог",
        item: "https://advokatpeskov.com/cases",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Дропы: кто это и какая ответственность",
        item: "https://advokatpeskov.com/drops-responsibility",
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Я просто дал карту знакомому. Меня могут привлечь?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Да, если через карту прошли похищенные деньги — возможна ответственность как пособника. Суд оценивает осмотрительность.",
        },
      },
      {
        "@type": "Question",
        name: "Какие статьи УК РФ применяются к дропам?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Чаще всего 159 (мошенничество), 172.2 (незаконные операции с платежными средствами), 174, 174.1 и 187 УК РФ.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать, если понял, что стал «невольным дропом»?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Срочно заблокируйте карту, сообщите в банк, сохраните переписки и обратитесь к адвокату по уголовным делам.",
        },
      },
    ],
  };

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Адвокат Песков — уголовные дела",
    url: "https://advokatpeskov.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://advokatpeskov.com/search?q={query}",
      "query-input": "required name=query",
    },
    inLanguage: "ru-RU",
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Адвокат Песков",
    url: "https://advokatpeskov.com",
  };

  return (
    <div className={styles.articlesContainer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />

      {/* ====== Хлебные крошки ====== */}
      <nav className={styles.breadcrumbs} aria-label="breadcrumb">
        <Link href="/cases">Блог</Link> · <Link href="/about">Обо мне</Link> · <Link href="/contact">Контакты</Link>
      </nav>

      {/* ====== Заголовок ====== */}
      <h1 className={styles.articlesTitle}>Кто такие дропы и какая ответственность в России</h1>

      {/* ====== Оглавление (адаптивное) ====== */}
      <details className={styles.toc} open>
        <summary className={styles.tocSummary} aria-label="Показать содержание">
          <span className={styles.tocBadge}>Содержание</span>
        </summary>
        <nav aria-label="Содержание статьи">
          <ul className={styles.tocList}>
            <li><a href="#who">Кто такие дропы</a></li>
            <li><a href="#liability">За что наступает ответственность</a></li>
            <li><a href="#ignorance">«Я не знал» — не оправдание</a></li>
            <li><a href="#penalties">Что грозит дропу</a></li>
            <li><a href="#what-to-do">Если вы стали «невольным дропом»</a></li>
            <li><a href="#summary">Итог</a></li>
          </ul>
        </nav>
      </details>

      {/* ====== Контент ====== */}
      <section className={`${styles.article} ${styles.anchorTarget}`} id="who">
        <h3>Кто такие дропы</h3>
        <p>
          В последние годы в России активно обсуждается тема дропов — людей, которые за небольшое вознаграждение
          предоставляют свои банковские карты, счета или сим-карты третьим лицам. Часто это делается без понимания
          последствий, но такие действия могут привести к уголовной ответственности.
        </p>
        <p>
          Слово «дроп» (от англ. <em>drop</em> — «сбросить») используется в интернете и криминальной среде для
          обозначения человека, на которого оформляются чужие денежные операции. Обычно дроп:
        </p>
        <ul className={styles.listTight}>
          <li>-открывает банковскую карту или счёт на своё имя и передаёт его другим людям;</li>
          <li>-получает на свою карту деньги, переводы, выплаты и потом пересылает их дальше;</li>
          <li>-может даже не знать, откуда пришли средства.</li>
        </ul>
        <p>
          Такие схемы часто используются при мошенничестве, отмывании денег или хищении средств с чужих счетов. Сам
          дроп, даже если он «ничего не делал», становится участником преступления.
        </p>
      </section>

     <section className={`${styles.article} ${styles.anchorTarget}`} id="liability">
  <h3>За что наступает ответственность</h3>
  <p>
    В зависимости от обстоятельств действия дропа могут квалифицироваться по разным статьям Уголовного кодекса РФ,
    в том числе:
  </p>
  <ul className={styles.listBullets}>
    <li><strong>Статья 159 УК РФ</strong> — мошенничество.</li>
    <li><strong>Статья 172.2 УК РФ</strong> — незаконные операции с платёжными средствами.</li>
    <li><strong>Статьи 174 и 174.1 УК РФ</strong> — отмывание (легализация) денежных средств, полученных преступным путём.</li>
    <li><strong>Статья 187 УК РФ</strong> — Неправомерный оборот средств платежей.</li>
  </ul>
  <div className={styles.lawUpdate}>
    ⚖️ <strong>Обновление 2025 года:</strong> Федеральный закон № 176-ФЗ от 24 июня 2025 года
    расширил действие статьи 187 УК РФ. Теперь под ответственность подпадает не только изготовление
    и использование поддельных платёжных инструментов, но и <strong>передача своих банковских карт
    или реквизитов третьим лицам</strong> с целью проведения незаконных операций. Именно эта поправка
    стала ключевой в современных делах, связанных с «дропами».
  </div>

  <p>
    Даже если человек просто «дал карту знакомому», не зная всех деталей, но на эту карту поступили
    похищенные деньги, его могут привлечь к уголовной ответственности как пособника.
  </p>
</section>


      <section className={`${styles.article} ${styles.anchorTarget}`} id="ignorance">
        <h3>«Я не знал» — не оправдание</h3>
        <p>
          Часто человек соглашается «дать карту на пару дней за 5 000 ₽», а потом оказывается, что через его счёт прошли
          десятки переводов от обманутых граждан. Банк блокирует карту, а в дверь стучат следователи.
        </p>
        <p>
          По закону незнание не освобождает от ответственности, если можно было догадаться, что деньги поступают
          незаконно. Суд оценивает, проявлял ли человек осторожность и понимал ли, что участвует в сомнительных
          операциях.
        </p>
      </section>

      <section className={`${styles.article} ${styles.anchorTarget}`} id="penalties">
        <h3>Что грозит дропу</h3>
        <ul className={styles.listBullets}>
          <li>штраф до <strong>1 000 000 рублей</strong>;</li>
          <li>ограничение или лишение свободы до <strong>7 лет</strong>;</li>
          <li>судимость, осложняющая жизнь — от трудоустройства до получения виз.</li>
        </ul>
        <p>
          Кроме того, пострадавшие граждане и банки могут подать иски о возмещении ущерба, и дроп будет обязан вернуть
          все похищенные деньги.
        </p>
      </section>

      <section className={`${styles.article} ${styles.anchorTarget}`} id="what-to-do">
        <h3>Если вы стали «невольным дропом»</h3>
        <ol className={styles.listOrdered}>
          <li>Немедленно сообщите в банк и заблокируйте карту.</li>
          <li>Сохраните все переписки и чеки — они помогут доказать невиновность.</li>
          <li>
            Обратитесь к <Link href="/criminal-lawyer">адвокату по уголовным делам</Link> — он объяснит позицию
            следователю и поможет избежать обвинений.
          </li>
        </ol>
        <p>Не пытайтесь «договориться» самостоятельно или скрываться — это только ухудшит ситуацию.</p>
      </section>

      <section className={`${styles.article} ${styles.anchorTarget}`} id="summary">
        <h3>Итог</h3>
        <p>
          Передача своей банковской карты или счёта третьим лицам — не безобидная услуга, а риск оказаться фигурантом
          уголовного дела. Даже если вы не участвовали в мошенничестве напрямую, сам факт использования карты может стать
          доказательством причастности.
        </p>
        <p>
          Если у вас уже возникли вопросы по допросу, задержанию или обвинению,{" "}
          <Link href="/contact">обратитесь к адвокату по уголовным делам</Link>. Своевременная помощь юриста помогает
          избежать серьёзных последствий и защитить ваши права.
        </p>
      </section>

      {/* ====== CTA (релевантный тематике статьи) ====== */}
      <div className={styles.cta}>
        <p>
          <strong>Нужна защита по делам о мошенничестве, легализации средств или «дропам»?</strong> 
          Подключусь на любой стадии, выстрою стратегию защиты, подготовлю ходатайства и представлю ваши интересы.
        </p>
        <p className={styles.linksRow}>
          <Link href="/contact" aria-label="Связаться с адвокатом">Связаться</Link> ·{" "}
          <Link href="/about" aria-label="Узнать обо мне">Обо мне</Link> ·{" "}
          <Link href="/fraud" aria-label="Адвокат по делам о мошенничестве (ст. 159 УК РФ)">Ст. 159 УК РФ</Link> ·{" "}
          <Link href="/money-laundering-174" aria-label="Адвокат по делам о легализации доходов (ст. 174, 174.1 УК РФ)">Ст. 174, 174.1 УК РФ</Link>
        </p>
      </div>
    </div>
  );
}
