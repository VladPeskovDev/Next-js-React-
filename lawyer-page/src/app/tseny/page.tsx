import Head from "next/head";
import styles from "./PricingPage.module.css";

export const metadata = {
  title: "Адвокат по уголовным делам – Цены и стоимость услуг в Москве",
  description:
    "Цены на услуги адвоката по уголовным делам в Москве. Сколько стоит адвокат? Прозрачная стоимость защиты, консультации и ведения уголовных дел.",
  keywords: "адвокат по уголовным делам цены, стоимость адвоката, услуги адвоката по уголовным делам, адвокат по уголовным делам стоимость",
  openGraph: {
    title: "Цены на услуги адвоката по уголовным делам в Москве",
    description:
      "Разберитесь, сколько стоит адвокат по уголовным делам: консультация, защита в суде, сопровождение дела. Прозрачные цены без скрытых платежей.",
  },
};


export default function PricingPage() {
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
        <meta property="og:url" content="https://advokat-peskov.com/tseny/" />
        <meta property="og:image" content="https://advokat-peskov.com/foto008.webp" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://advokat-peskov.com" />
        
        {/* Канонический URL */}
        <link rel="canonical" href="https://advokat-peskov.com/tseny/" />
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "Прайс адвоката по уголовным делам",
            url: "https://advokat-peskov.com/tseny/",
            provider: { "@id": "https://advokat-peskov.com#attorney" },
            itemListElement: [
              {
                "@type": "Offer",
                name: "Первичная устная консультация по телефону",
                price: "0",
                priceCurrency: "RUB",
              },
              {
                "@type": "Offer",
                name: "Устная консультация в офисе",
                price: "5000",
                priceCurrency: "RUB",
                priceSpecification: { "@type": "PriceSpecification", price: "5000", priceCurrency: "RUB", minPrice: "5000" },
              },
              {
                "@type": "Offer",
                name: "Консультация с изучением материалов дела",
                price: "10000",
                priceCurrency: "RUB",
                priceSpecification: { "@type": "PriceSpecification", price: "10000", priceCurrency: "RUB", minPrice: "10000" },
              },
              {
                "@type": "Offer",
                name: "Разовый срочный выезд",
                price: "15000",
                priceCurrency: "RUB",
                priceSpecification: { "@type": "PriceSpecification", price: "15000", priceCurrency: "RUB", minPrice: "15000" },
              },
              {
                "@type": "Offer",
                name: "Защита на предварительном следствии",
                price: "40000",
                priceCurrency: "RUB",
                priceSpecification: { "@type": "PriceSpecification", price: "40000", priceCurrency: "RUB", minPrice: "40000" },
              },
              {
                "@type": "Offer",
                name: "Защита в суде первой инстанции",
                price: "40000",
                priceCurrency: "RUB",
                priceSpecification: { "@type": "PriceSpecification", price: "40000", priceCurrency: "RUB", minPrice: "40000" },
              },
              {
                "@type": "Offer",
                name: "Апелляционное обжалование приговора",
                price: "30000",
                priceCurrency: "RUB",
                priceSpecification: { "@type": "PriceSpecification", price: "30000", priceCurrency: "RUB", minPrice: "30000" },
              },
              {
                "@type": "Offer",
                name: "Подготовка кассационной жалобы",
                price: "30000",
                priceCurrency: "RUB",
                priceSpecification: { "@type": "PriceSpecification", price: "30000", priceCurrency: "RUB", minPrice: "30000" },
              },
              {
                "@type": "Offer",
                name: "Защита свидетелей в ходе допроса",
                price: "15000",
                priceCurrency: "RUB",
                priceSpecification: { "@type": "PriceSpecification", price: "15000", priceCurrency: "RUB", minPrice: "15000" },
              },
              {
                "@type": "Offer",
                name: "Защита потерпевших",
                price: "40000",
                priceCurrency: "RUB",
                priceSpecification: { "@type": "PriceSpecification", price: "40000", priceCurrency: "RUB", minPrice: "40000" },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
