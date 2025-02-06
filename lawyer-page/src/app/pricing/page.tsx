import Head from "next/head";
import styles from "./PricingPage.module.css";

export const metadata = {
  title: "Адвокат по уголовным делам – Цены и стоимость услуг в 2025 году",
  description:
    "Цены на услуги адвоката по уголовным делам в Москве. Стоимость консультации, защиты в суде и ведения дела. Прозрачные тарифы и гарантии.",
};

export default function PricingPage(): JSX.Element {
  return (
    <main className={`${styles.mainContainer} container mx-auto p-4`}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="адвокат по уголовным делам цены, стоимость адвоката, юридическая помощь, защита в суде, услуги адвоката" />
        
        {/* Open Graph для соцсетей */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advokatpeskov.com/pricing" />
        <meta property="og:image" content="https://advokatpeskov.com/pricing" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://advokatpeskov.com" />
        
        {/* Канонический URL */}
        <link rel="canonical" href="https://advokatpeskov.com/pricing" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Прайс-лист на услуги адвоката по уголовным делам</h1>
        <p className={styles.subtitle}>
          Ниже представлены ориентировочные цены на услуги. Пожалуйста, свяжитесь для уточнения стоимости конкретного дела.
        </p>
      </header>

      <section className={styles.pricingTable}>
        <h2 className={styles.sectionTitle} aria-label="Цены на услуги адвоката по уголовным делам">
          Стоимость юридических услуг
        </h2>
        
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Первичная устная консультация по телефону</h3>
          <p className={styles.price}>Бесплатно</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Устная консультация по уголовному делу в офисе</h3>
          <p className={styles.price}>от 5,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Консультация по уголовному делу с изучением материалов уголовного дела</h3>
          <p className={styles.price}>от 10,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Разовый срочный выезд</h3>
          <p className={styles.price}>от 15,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Представление интересов на стадии предварительного следствия</h3>
          <p className={styles.price}>от 40,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Защита в суде первой инстанции</h3>
          <p className={styles.price}>от 40,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Апелляционное обжалование приговора</h3>
          <p className={styles.price}>от 30,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Подготовка кассационной жалобы</h3>
          <p className={styles.price}>от 30,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Защита свидетелей в ходе допроса (суд/следствие/объяснение)</h3>
          <p className={styles.price}>от 15,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h3 className={styles.serviceTitle}>Защита потерпевших</h3>
          <p className={styles.price}>от 40,000 руб.</p>
        </div>
      </section>

      {/* Schema.org JSON-LD разметка */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Адвокат по уголовным делам",
          "description": "Цены на услуги адвоката по уголовным делам в Москве. Стоимость консультации, защиты в суде и ведения дела.",
          "url": "https://advokatpeskov.com/pricing",
          "telephone": "+79165780936",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Маршала Рыбалко, д. 2, корп. 6, офис 408",
            "addressLocality": "Москва",
            "postalCode": "101000",
            "addressCountry": "RU"
          }
        }
        `}
      </script>
    </main>
  );
}
