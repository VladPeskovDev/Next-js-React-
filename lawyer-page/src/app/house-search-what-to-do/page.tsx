import Link from "next/link";
import styles from "./ArticlePage.module.css";

/** ====== SEO ====== */
export const metadata = {
  title: "Что делать при обыске — пошаговая инструкция от адвоката по уголовным делам",
  description:
    "Как вести себя при обыске: основания, права, понятые/видеозапись, протокол, фиксация нарушений, изъятие техники. Пошаговый чек-лист адвоката по уголовным делам в Москве.",
  keywords:
    "обыск, как вести себя при обыске, права при обыске, понятые, видеозапись, протокол обыска, изъятие телефона, адвокат по уголовным делам Москва",
  alternates: { canonical: "https://advokatpeskov.com/house-search-what-to-do" },
  openGraph: {
    type: "article",
    url: "https://advokatpeskov.com/house-search-what-to-do",
    title: "Что делать при обыске — инструкция адвоката",
    description:
      "Разбираем: основания, права, понятые/видеозапись, протокол, изъятие техники, замечания. Пошаговый план и чек-листы.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Что делать при обыске — инструкция адвоката",
    description:
      "Практический план действий: как проверить основания, что фиксировать, как вносить замечания в протокол и защитить цифровые данные.",
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};

/** ====== Page ====== */
export default function HouseSearchPage(): JSX.Element {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Что делать при обыске — пошаговая инструкция",
    description:
      "Основания для обыска, права, понятые/видеозапись, протокол, фиксация нарушений, изъятие техники. Чек-листы и практические советы адвоката.",
    datePublished: "2025-10-01",
    dateModified: "2025-10-26",
    author: { "@type": "Person", name: "Адвокат Песков" },
    publisher: { "@type": "Organization", name: "Адвокат Песков" },
    mainEntityOfPage: "https://advokatpeskov.com/house-search-what-to-do",
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Как действовать при обыске",
    description:
      "Пошаговый план: проверка оснований, контроль процедуры, фиксация нарушений, работа с протоколом и изъятым.",
    totalTime: "PT30M",
    step: [
      {
        "@type": "HowToStep",
        name: "Проверить основания",
        itemListElement: [
          "Запросите постановление/судебное решение с адресом и основанием.",
          "Установите личности участников и понятых/наличие видеозаписи.",
        ],
      },
      {
        "@type": "HowToStep",
        name: "Контролировать процедуру",
        itemListElement: [
          "Не препятствуйте, но фиксируйте действия.",
          "Требуйте присутствия понятых в месте поиска либо непрерывной видеозаписи.",
        ],
      },
      {
        "@type": "HowToStep",
        name: "Зафиксировать нарушения",
        itemListElement: [
          "Заявляйте устные и письменные замечания.",
          "Сохраняйте фото/видео при наличии разрешения или укажите отказ в протоколе.",
        ],
      },
      {
        "@type": "HowToStep",
        name: "Проверить протокол и опись",
        itemListElement: [
          "Сверьте время, адрес, участников, перечень изъятого.",
          "Требуйте копию; при отказе — занесите это в замечания.",
        ],
      },
      {
        "@type": "HowToStep",
        name: "Дальнейшие действия",
        itemListElement: [
          "Свяжитесь с адвокатом.",
          "Подайте жалобу на процессуальные нарушения при необходимости.",
        ],
      },
    ],
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Могу ли я снимать обыск на видео?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Запросите разрешение и снимайте, если не возражают. При запрете — письменно зафиксируйте отказ в протоколе. Следственные действия обычно протоколируются; в ряде случаев допускается официальная видеозапись вместо понятых.",
        },
      },
      {
        "@type": "Question",
        name: "Должны ли быть понятые?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Как правило приглашаются двое понятых; в отдельных случаях процесс может фиксироваться видеозаписью. Важно, чтобы понятые присутствовали именно там, где ведётся поиск.",
        },
      },
      {
        "@type": "Question",
        name: "Что, если копию протокола не выдали?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Занесите в замечания: «Копия протокола не выдана, фотофиксация запрещена». Это важно для последующего обжалования.",
        },
      },
      {
        "@type": "Question",
        name: "Могут ли изъять телефон и компьютеры?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Да, при наличии оснований и процессуальных гарантий. Требуйте точной описи: модель, серийный номер/IMEI, состояние, принадлежность. Запросите копию данных/образ диска при возможности.",
        },
      },
      {
        "@type": "Question",
        name: "В чём разница между обыском и обследованием?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Обследование проводят, как правило, оперативные службы; полномочия уже — без вскрытия помещений и изъятия вне процедурных гарантий. Не путайте форматы.",
        },
      },
    ],
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Блог", item: "https://advokatpeskov.com/cases" },
      { "@type": "ListItem", position: 2, name: "Что делать при обыске", item: "https://advokatpeskov.com/house-search-what-to-do" },
    ],
  };

  return (
    <div className={styles.articlesContainer}>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />

      {/* Хлебные крошки */}
      <div className={styles.breadcrumbs}>
        <Link href="/cases">Блог</Link> · <Link href="/about">Обо мне</Link> · <Link href="/contact">Контакты</Link>
      </div>

      <h1 className={styles.articlesTitle}>Что делать при обыске: полный план действий, права и ошибки</h1>

      {/* Содержание */}
      <details className={styles.toc} open>
  <summary className={styles.tocSummary}>Содержание</summary>
  <ol className={styles.tocList}>
    <li><a href="#grounds">Основания и состав группы</a></li>
    <li><a href="#procedure">Контроль процедуры и фиксация</a></li>
    <li><a href="#protocol">Протокол и опись: как читать и дополнять</a></li>
    <li><a href="#devices">Изъятие техники и цифровые данные</a></li>
    <li><a href="#diff">Обыск ≠ обследование</a></li>
    <li><a href="#mistakes">Типовые ошибки и как их избежать</a></li>
    <li><a href="#after">Что делать после обыска</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ol>
</details>

      {/* 1 */}
      <section id="grounds" className={styles.article}>
        <h3>1) Основания и состав группы</h3>
        <ul className={styles.listBullets}>
          <li>
            Попросите <strong>постановление следователя/судебное решение</strong> с точным адресом, основанием, датой и
            должностными данными.
          </li>
          <li>
            Зафиксируйте <strong>ФИО и должности</strong> всех участников: следователь/дознаватели, оперативные сотрудники,
            эксперты, понятые или сведения о <strong>официальной видеозаписи</strong>.
          </li>
          <li>
            Уточните <strong>рамки обыска</strong>: что именно ищут, где и по какому делу. Несоответствия — в замечания.
          </li>
        </ul>
        <p className={styles.note}>
          Понятые должны присутствовать <em>именно в месте</em> поиска. Если заявлено видео вместо понятых, обратите внимание,
          чтобы запись была <strong>непрерывной</strong>.
        </p>
      </section>

      {/* 2 */}
      <section id="procedure" className={styles.article}>
        <h3>2) Контроль процедуры и фиксация нарушений</h3>
        <ul className={styles.listBullets}>
          <li>Не препятствуйте, но <strong>фиксация — ключ</strong>: время, действия, перемещения, вскрытия.</li>
          <li>
            Спросите разрешение на <strong>фото/видеосъёмку</strong>. При запрете — занесите отказ в протокол:
            «Съёмка запрещена».
          </li>
          <li>
            Следите, чтобы понятые <strong>не сидели в коридоре</strong>, а присутствовали при каждом действии, где это требуется.
          </li>
          <li>
            Все устные замечания продублируйте <strong>письменно</strong> в конце: «прошу включить в протокол следующие замечания…».
          </li>
        </ul>
      </section>

      {/* 3 */}
      <section id="protocol" className={styles.article}>
        <h3>3) Протокол и опись: как читать и дополнять</h3>
        <p>
          Требуйте <strong>копию протокола</strong>. Если говорят, что «нет техвозможности» — зафиксируйте:
          «Копия протокола не выдана, фотофиксация запрещена». Проверьте:
        </p>
        <ul className={styles.listBullets}>
          <li>адрес, время начала/окончания, состав группы и понятых/видеозапись;</li>
          <li>основание обыска и <strong>рамки поиска</strong>;</li>
          <li>
            <strong>опись изъятого</strong>: максимально конкретно — количество, модель, серийные номера/IMEI, внешний вид,
            принадлежность.
          </li>
          <li>условия хранения/упаковки: пломбы, маркировки, целостность.</li>
        </ul>
      </section>

      {/* 4 */}
      <section id="devices" className={styles.article}>
        <h3>4) Изъятие телефонов, компьютеров и цифровых данных</h3>
        <ul className={styles.listBullets}>
          <li>
            При изъятии техники требуйте <strong>точной идентификации</strong> (модель, серийник, IMEI) и отметки состояния.
          </li>
          <li>
            Просите <strong>копию данных/образ диска</strong> (если применимо) или отметку о невозможности — на будущее это
            поможет при возврате/исключении доказательств.
          </li>
          <li>
            Пароли/биометрию предоставляйте только при наличии <strong>надлежащих оснований</strong>; фиксируйте все требования
            и замечания.
          </li>
        </ul>
      </section>

      {/* 5 */}
      <section id="diff" className={styles.article}>
        <h3>5) Обыск ≠ обследование</h3>
        <p>
          Обследование, как правило, проводится оперативными подразделениями и имеет более узкие полномочия:
          <strong>нет вскрытия</strong> помещений и <strong>изъятия</strong> вещей без предусмотренных процессуальных гарантий.
          Если пришли «на обследование», сверяйте документы и объём полномочий.
        </p>
        <p className={styles.readMore}>
          Читайте также:{" "}
          <span className={styles.linksRow}>
            <Link href="/detention-what-to-do">как действовать при задержании</Link>,{" "}
            <Link href="/interrogation-what-to-do">что делать при вызове на допрос</Link>
          </span>
        </p>
      </section>

      {/* 6 */}
      <section id="mistakes" className={styles.article}>
        <h3>6) Типовые ошибки и как их избежать</h3>
        <ul className={styles.listBullets}>
          <li>
            <strong>Спор и активное противодействие</strong> → может обернуться отдельной ответственностью. Действуйте через
            фиксацию и замечания.
          </li>
          <li>
            <strong>Подпись «не глядя»</strong> → читайте каждую страницу протокола и описи, вносите корректировки и замечания.
          </li>
          <li>
            <strong>Отсутствие детализации изъятого</strong> → требуйте конкретики (кол-во, маркировки, серийники).
          </li>
          <li>
            <strong>Нет записи об отказах</strong> → любой отказ (выдать копию, разрешить фото) — в письменные замечания.
          </li>
        </ul>
      </section>

      {/* 7 */}
      <section id="after" className={styles.article}>
        <h3>7) Что делать после обыска</h3>
        <ul className={styles.listBullets}>
          <li>Свяжитесь с <Link href="/contact">адвокатом</Link> и передайте копии протоколов, описи, свои заметки.</li>
          <li>Оцените сроки и основания для <strong>жалоб</strong> на процессуальные нарушения.</li>
          <li>
            Подготовьте перечень <strong>чужих/личных вещей</strong>, изъятых без отношения к делу — это пригодится для ходатайств
            о возврате.
          </li>
        </ul>
      </section>

      

      {/* FAQ */}
      <section id="faq" className={styles.article}>
        <h3>FAQ по обыску</h3>
        <details>
          <summary>Могу ли я снимать обыск на видео?</summary>
          <p>
            Запросите разрешение. При запрете обязательно внесите это в письменные замечания к протоколу: «Съёмка
            запрещена». Официальная видеозапись со стороны следствия может в ряде случаев заменять понятых.
          </p>
        </details>
        <details>
          <summary>Должны ли быть понятые?</summary>
          <p>
            Обычно — да, два понятого. В отдельных случаях допускается официальная видеозапись. Важно присутствие понятых
            <em>в месте</em> поиска, а не «на кухне».
          </p>
        </details>
        <details>
          <summary>Что делать, если копию протокола не выдали?</summary>
          <p>
            Внесите письменное замечание. Параллельно фиксируйте это в своих заметках — пригодится при жалобе и ходатайствах.
          </p>
        </details>
        <details>
          <summary>Что с телефонами/ноутбуками и паролями?</summary>
          <p>
            Изъятие — при наличии оснований и с процессуальными гарантиями. Всегда требуйте точной описи (модель, серийник,
            IMEI). Любые требования раскрыть пароли фиксируйте в протоколе; советуйтесь с адвокатом.
          </p>
        </details>
      </section>

      {/* Внутренние ссылки для SEO */}
      <section className={styles.article}>
        <h3>Полезные материалы</h3>
        <ul className={styles.listLinks}>
          <li><Link href="/detention-what-to-do">Памятка при задержании</Link></li>
          <li><Link href="/cases">Ещё статьи блога</Link></li>
          <li><Link href="/about">Об адвокате</Link></li>
          <li><Link href="/contact">Контакты</Link></li>
        </ul>
      </section>
{/* CTA */}
      <section className={styles.article + " " + styles.ctaBlock}>
        <h3>Нужна помощь адвоката прямо сейчас?</h3>
        <p>
          Свяжитесь со мной: оценю законность действий, подготовлю жалобы и буду присутствовать на дальнейших следственных
          действиях. <Link href="/contact">Связаться с адвокатом</Link>
        </p>
      </section>
      {/* Дисклеймер */}
      <p className={styles.disclaimer}>
        Материал носит общий информационный характер и не является юридической консультацией. За точной оценкой вашей
        ситуации обратитесь к адвокату.
      </p>
    </div>
  );
}
