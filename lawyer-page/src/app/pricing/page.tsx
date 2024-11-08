import styles from './PricingPage.module.css';

export const metadata = {
  title: "Адвокат по уголовным делам | Прайс",
  description: "Цены на услуги адвоката по уголовным делам в Москве.",
};

export default function PricingPage(): JSX.Element {
  return (
    <main className={`${styles.mainContainer} container mx-auto p-4`}>
      <header className={styles.header}>
        <h1 className={styles.title}>Прайс-лист на услуги адвоката по уголовным делам</h1>
        <p className={styles.subtitle}>Ниже представлены ориентировочные цены на услуги. Пожалуйста, свяжитесь для уточнения стоимости конкретного дела.</p>
      </header>

      <section className={styles.pricingTable}>
      <div className={styles.pricingItem}>
          <h2 className={styles.serviceTitle}>Первичная устная консультация по телефону</h2>
          <p className={styles.price}>Бесплатно</p>
        </div>
        <div className={styles.pricingItem}>
          <h2 className={styles.serviceTitle}>Устная консультация по уголовному делу</h2>
          <p className={styles.price}>от 5,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h2 className={styles.serviceTitle}>Консультация по уголовному делу с изучением материалов уголовного дела</h2>
          <p className={styles.price}>от 10,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h2 className={styles.serviceTitle}>Разовый срочный выезд</h2>
          <p className={styles.price}>от 25,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h2 className={styles.serviceTitle}>Представление интересов на стадии предварительного следствия</h2>
          <p className={styles.price}>от 75,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h2 className={styles.serviceTitle}>Защита в суде первой инстанции</h2>
          <p className={styles.price}>от 75,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h2 className={styles.serviceTitle}>Апелляционное обжалование приговора</h2>
          <p className={styles.price}>от 50,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h2 className={styles.serviceTitle}>Подготовка кассационной жалобы</h2>
          <p className={styles.price}>от 30,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h2 className={styles.serviceTitle}>Защита свидетелей в ходе допроса (суд/следствие/объяснение)</h2>
          <p className={styles.price}>от 25,000 руб.</p>
        </div>
        <div className={styles.pricingItem}>
          <h2 className={styles.serviceTitle}>Защита потерпевших</h2>
          <p className={styles.price}>от 50,000 руб.</p>
        </div>
      </section>
    </main>
  );
}
