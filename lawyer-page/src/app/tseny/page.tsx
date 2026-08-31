import Link from "next/link";
import styles from "./PricingPage.module.css";

export const metadata = {
  title: "Сколько стоит адвокат по уголовным делам в Москве — цены",
  description:
    "Прозрачные цены адвоката Пескова В.С. в Москве: консультация от 5 000 ₽, срочный выезд от 25 000 ₽, ведение дела под ключ от 250 000 ₽. Оплата поэтапно.",
  keywords:
    "сколько стоит адвокат по уголовным делам, сколько стоит уголовный адвокат, сколько стоят услуги адвоката, адвокат в Москве цена, уголовный адвокат в Москве цены, стоимость услуг адвоката",
  alternates: { canonical: "https://advokat-peskov.com/tseny/" },
  openGraph: {
    type: "website",
    url: "https://advokat-peskov.com/tseny/",
    title: "Сколько стоит адвокат по уголовным делам в Москве — цены Пескова В.С.",
    description:
      "Прозрачные цены адвоката по уголовным делам в Москве. Консультация от 5 000 ₽, срочный выезд от 25 000 ₽, дело под ключ от 250 000 ₽.",
    siteName: "Адвокат Песков — уголовные дела",
    images: [{ url: "/1312.webp", width: 1000, height: 723, alt: "Адвокат Песков В.С." }],
  },
};

const offerCatalog = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Прайс адвоката по уголовным делам",
  url: "https://advokat-peskov.com/tseny/",
  provider: { "@id": "https://advokat-peskov.com#attorney" },
  itemListElement: [
    { "@type": "Offer", name: "Первичная устная консультация по телефону", price: "0", priceCurrency: "RUB" },
    { "@type": "Offer", name: "Устная консультация в офисе", price: "5000", priceCurrency: "RUB",
      priceSpecification: { "@type": "PriceSpecification", price: "5000", priceCurrency: "RUB", minPrice: "5000" } },
    { "@type": "Offer", name: "Изучение материалов уголовного дела (1 том)", price: "5000", priceCurrency: "RUB",
      priceSpecification: { "@type": "PriceSpecification", price: "5000", priceCurrency: "RUB", minPrice: "5000" } },
    { "@type": "Offer", name: "Разовый выезд адвоката днём", price: "25000", priceCurrency: "RUB",
      priceSpecification: { "@type": "PriceSpecification", price: "25000", priceCurrency: "RUB", minPrice: "25000" } },
    { "@type": "Offer", name: "Разовый выезд адвоката ночью", price: "35000", priceCurrency: "RUB",
      priceSpecification: { "@type": "PriceSpecification", price: "35000", priceCurrency: "RUB", minPrice: "35000" } },
    { "@type": "Offer", name: "Защита свидетеля на допросе", price: "25000", priceCurrency: "RUB",
      priceSpecification: { "@type": "PriceSpecification", price: "25000", priceCurrency: "RUB", minPrice: "25000" } },
    { "@type": "Offer", name: "Защита на предварительном следствии", price: "200000", priceCurrency: "RUB",
      priceSpecification: { "@type": "PriceSpecification", price: "200000", priceCurrency: "RUB", minPrice: "200000" } },
    { "@type": "Offer", name: "Защита в суде первой инстанции", price: "200000", priceCurrency: "RUB",
      priceSpecification: { "@type": "PriceSpecification", price: "200000", priceCurrency: "RUB", minPrice: "200000" } },
    { "@type": "Offer", name: "Апелляционное обжалование приговора", price: "75000", priceCurrency: "RUB",
      priceSpecification: { "@type": "PriceSpecification", price: "75000", priceCurrency: "RUB", minPrice: "75000" } },
    { "@type": "Offer", name: "Кассационное обжалование приговора", price: "75000", priceCurrency: "RUB",
      priceSpecification: { "@type": "PriceSpecification", price: "75000", priceCurrency: "RUB", minPrice: "75000" } },
    { "@type": "Offer", name: "Защита потерпевшего", price: "50000", priceCurrency: "RUB",
      priceSpecification: { "@type": "PriceSpecification", price: "50000", priceCurrency: "RUB", minPrice: "50000" } },
    { "@type": "Offer", name: "Дело под ключ (следствие + суд первой инстанции)", price: "250000", priceCurrency: "RUB",
      priceSpecification: { "@type": "PriceSpecification", price: "250000", priceCurrency: "RUB", minPrice: "250000" } },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько стоит адвокат по 228 УК РФ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Стоимость защиты по 228 УК РФ начинается от 200 000 ₽ за стадию (следствие или суд). Итоговая цена зависит от части статьи, размера и обстоятельств дела. Точная сумма обсуждается на очной консультации.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько стоит адвокат по 159 УК РФ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Защита по 159 УК РФ — от 200 000 ₽ за стадию. При большом количестве эпизодов, потерпевших или сложности IT-составов (P2P, крипта, дропы) стоимость растёт.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько стоит разовый срочный выезд адвоката?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Разовый выезд днём (с 9:00 до 22:00) — от 25 000 ₽. Ночью (с 22:00 до 9:00) — от 35 000 ₽. Цена фиксируется до выезда, никаких надбавок «по факту».",
      },
    },
    {
      "@type": "Question",
      name: "Что входит в стоимость защиты на следствии?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Присутствие на всех допросах и следственных действиях, работа с ходатайствами и жалобами, взаимодействие с экспертами, сбор доказательств защиты, работа с мерой пресечения, обжалование действий следствия.",
      },
    },
    {
      "@type": "Question",
      name: "Возможна ли оплата по этапам?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, оплата идёт поэтапно — за конкретную стадию процесса. Клиент платит за следствие, потом отдельно за суд первой инстанции, потом отдельно за апелляцию (при необходимости). Не нужно платить всё сразу за весь процесс.",
      },
    },
    {
      "@type": "Question",
      name: "Работаете ли по постоплате или «после результата»?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Работаем только по предоплате. Это стандарт частной адвокатской практики: закон запрещает адвокату определять гонорар по результату дела (ст. 25 ФЗ «Об адвокатской деятельности»). Первичная консультация по телефону — бесплатно.",
      },
    },
    {
      "@type": "Question",
      name: "Что дешевле: адвокат по назначению или частный?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Адвокат по назначению для клиента бесплатный (оплачивает государство), но у него ограничены время и мотивация. Частный адвокат — платный, но работает с полной вовлечённостью, отвечает только перед клиентом и подбирает линию защиты индивидуально.",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <main className={`${styles.mainContainer} container mx-auto p-4`}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Сколько стоит адвокат по уголовным делам в Москве
        </h1>
        <p className={styles.subtitle}>
          Прозрачные цены без «договорных» формулировок. Оплата по этапам.
        </p>
      </header>

      <section className={styles.intro}>
        <p>
          Сколько стоит адвокат по уголовным делам — вопрос, который задают чаще всего. Ниже — конкретные цифры по каждой услуге: от бесплатной первичной консультации до ведения дела под ключ.
        </p>
        <p>
          Работаю лично, без посредников и кол-центра. Первичная консультация по телефону — бесплатно: обсудим ситуацию, назову ориентировочную стоимость под конкретный случай.
        </p>
      </section>

      <section className={styles.pricingTable}>
        <h2 className={styles.priceGroupTitle}>Консультации</h2>

        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Первичная устная консультация по телефону</h3>
          <p className={styles.price}>Бесплатно</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Устная консультация в офисе</h3>
          <p className={styles.price}>от 5 000 ₽</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Изучение материалов уголовного дела (за 1 том)</h3>
          <p className={styles.price}>5 000 ₽</p>
        </div>

        <h2 className={styles.priceGroupTitle}>Срочный выезд и разовые действия</h2>

        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Срочный выезд днём (с 9:00 до 22:00)</h3>
          <p className={styles.price}>от 25 000 ₽</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Срочный выезд ночью (с 22:00 до 9:00)</h3>
          <p className={styles.price}>от 35 000 ₽</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Защита свидетеля на допросе (разово)</h3>
          <p className={styles.price}>от 25 000 ₽</p>
        </div>

        <h2 className={styles.priceGroupTitle}>Ведение дела по стадиям</h2>

        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Защита на предварительном следствии</h3>
          <p className={styles.price}>от 200 000 ₽</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Защита в суде первой инстанции</h3>
          <p className={styles.price}>от 200 000 ₽</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Апелляционное обжалование приговора</h3>
          <p className={styles.price}>от 75 000 ₽</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Кассационное обжалование приговора</h3>
          <p className={styles.price}>от 75 000 ₽</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Защита потерпевшего</h3>
          <p className={styles.price}>от 50 000 ₽</p>
        </div>

        <h2 className={styles.priceGroupTitle}>Комплексно</h2>

        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Дело под ключ (следствие + суд первой инстанции)</h3>
          <p className={styles.price}>от 250 000 ₽</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Как формируется цена</h2>
        <p>
          Стоимость не берётся «с потолка» и не «договорная». На финальную цену влияют конкретные факторы, которые оцениваются на первой консультации:
        </p>
        <ul>
          <li><strong>Статья УК РФ и её часть.</strong> 228 ч.1 (хранение) и 228.1 ч.4 (сбыт в особо крупном размере) — это разные объёмы работы и разные риски. Чем тяжелее статья, тем больше защите нужно вкладываться.</li>
          <li><strong>Сложность дела.</strong> Одно дело — простое хранение с подпиской о невыезде, где всё быстро и очевидно. Другое — многоэпизодная история с десятками свидетелей, экспертизами и оперативно-разыскными данными. Разница по объёму работы — в разы.</li>
          <li><strong>Количество эпизодов.</strong> Один эпизод или двадцать — это принципиально разный объём документов, допросов, ходатайств и работы с квалификацией.</li>
          <li><strong>Мера пресечения.</strong> Подписка о невыезде и заключение под стражу требуют разного темпа работы адвоката. При аресте — регулярные визиты в СИЗО, ходатайства об изменении меры, апелляции на постановления — всё это дополнительная нагрузка.</li>
          <li><strong>Стадия процесса.</strong> Одна цена за защиту на следствии, отдельная за суд первой инстанции, отдельная за апелляцию и кассацию. Клиент платит только за ту стадию, в которую вошёл адвокат.</li>
          <li><strong>Место расследования и суда.</strong> Территориальный фактор — если следствие и суд в другом округе или в области, это отражается на времени работы адвоката (дорога, ожидание) и учитывается в цене.</li>
        </ul>
        <p>
          После первичного разбора ситуации называю конкретную сумму под ваш случай — без «плавающих» доплат в процессе.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Оплата по этапам</h2>
        <p>
          Клиент не платит всё сразу за весь процесс — оплата идёт по стадиям, за конкретный этап работы адвоката.
        </p>
        <ul>
          <li>Заключаем соглашение на первый этап (например — защита на предварительном следствии). Клиент вносит оплату за этот этап, я вхожу в дело.</li>
          <li>После завершения следствия и передачи дела в суд — обсуждаем следующий этап (защита в суде первой инстанции). Оплата за него — отдельно, только если клиент решил продолжить работу со мной.</li>
          <li>Если после приговора клиент решает обжаловать — оплата за апелляцию или кассацию отдельно от предыдущих этапов.</li>
        </ul>
        <p>
          Такой формат защищает клиента: если по каким-то причинам он решит сменить защитника или прекратить работу, он не потеряет уже уплаченные средства за неоказанные услуги.
        </p>
        <p>
          Работаем только по предоплате за конкретный этап. По результату (в зависимости от исхода дела) закон запрещает адвокату определять гонорар — это регулируется <a href="https://www.consultant.ru/document/cons_doc_LAW_36945/59a8d69a4dee71a05bd93f60eb8d4c62b6e9be05/" target="_blank" rel="noopener nofollow">ст. 25 ФЗ «Об адвокатской деятельности»</a>.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Часто задаваемые вопросы</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Сколько стоит адвокат по 228 УК РФ?</h3>
          <p className={styles.faqAnswer}>
            Стоимость защиты по 228 УК РФ начинается от 200 000 ₽ за стадию (следствие или суд). Итоговая цена зависит от части статьи, размера и обстоятельств дела. Точная сумма обсуждается на очной консультации. Подробнее — на странице <Link href="/narkotiki/advokat-po-228/">адвокат по 228 УК РФ</Link>.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Сколько стоит адвокат по 159 УК РФ?</h3>
          <p className={styles.faqAnswer}>
            Защита по 159 УК РФ — от 200 000 ₽ за стадию. При большом количестве эпизодов, потерпевших или сложности IT-составов (P2P, крипта, дропы) стоимость растёт. Подробнее — <Link href="/moshennichestvo/advokat-po-159/">адвокат по 159 УК РФ</Link>.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Сколько стоит разовый срочный выезд адвоката?</h3>
          <p className={styles.faqAnswer}>
            Разовый выезд днём (с 9:00 до 22:00) — от 25 000 ₽. Ночью (с 22:00 до 9:00) — от 35 000 ₽. Цена фиксируется до выезда, никаких надбавок «по факту». Подробнее — <Link href="/srochnyj-vyezd/">срочный выезд адвоката 24/7</Link>.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Что входит в стоимость защиты на следствии?</h3>
          <p className={styles.faqAnswer}>
            Присутствие на всех допросах и следственных действиях, работа с ходатайствами и жалобами, взаимодействие с экспертами, сбор доказательств защиты, работа с мерой пресечения, обжалование действий следствия.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Возможна ли оплата по этапам?</h3>
          <p className={styles.faqAnswer}>
            Да, оплата идёт поэтапно — за конкретную стадию процесса. Клиент платит за следствие, потом отдельно за суд первой инстанции, потом отдельно за апелляцию (при необходимости). Не нужно платить всё сразу за весь процесс.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Работаете ли по постоплате или «после результата»?</h3>
          <p className={styles.faqAnswer}>
            Нет. Работаем только по предоплате. Это стандарт частной адвокатской практики: закон запрещает адвокату определять гонорар по результату дела (<a href="https://www.consultant.ru/document/cons_doc_LAW_36945/59a8d69a4dee71a05bd93f60eb8d4c62b6e9be05/" target="_blank" rel="noopener nofollow">ст. 25 ФЗ «Об адвокатской деятельности»</a>). Первичная консультация по телефону — бесплатно.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Что дешевле: адвокат по назначению или частный?</h3>
          <p className={styles.faqAnswer}>
            Адвокат по назначению для клиента бесплатный (оплачивает государство), но у него ограничены время и мотивация. Частный адвокат — платный, но работает с полной вовлечённостью, отвечает только перед клиентом и подбирает линию защиты индивидуально.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalog) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
