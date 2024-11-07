import styles from "./HomePage.module.css";
import { FaGavel, FaBook, FaUserShield, FaFileAlt } from "react-icons/fa";
import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Адвокат по уголовным делам | Главная",
  description: "Адвокат по уголовным делам в Москве – помощь и консультации.",
};

export default function HomePage(): JSX.Element {
 
  return (
    <div className={styles.container}>
      {/* Верхний контейнер */}
      <section className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>Адвокат по уголовным делам Песков В.С.</h1>
          <p className={styles.heroDescription}>
            Опытный адвокат по уголовным делам, с успешной практикой на протяжении долгих лет.
          </p>
          <div className={styles.buttons}>
            <a href="tel:+79165780936" className={styles.button}>Позвонить</a>
            </div>
        </div>
      </section>

      {/* Контейнер с надписью "Услуги" */}
      <section className={styles.servicesHeader}>
        <h2>Услуги</h2>
      </section>

      {/* Контейнер с 4 карточками */}
      <section className={styles.fourCardsSection}>
  <div className={styles.cardWrapper}>
    <div className={styles.serviceCard}>
      <FaUserShield className={styles.cardIcon} />
      <h2>Предварительное следствие</h2>
      <p>Защита на стадии предварительного следствия по любой категории дел.</p>
    </div>
    <div className={styles.serviceCard}>
      <FaBook className={styles.cardIcon} />
      <h2>Допросы и дача показаний</h2>
      <p>Защита на стадии допросов и дачи показаний по любой категории дел.</p>
    </div>
    <div className={styles.serviceCard}>
      <FaGavel className={styles.cardIcon} />
      <h2>Защита в суде</h2>
      <p>Защита на стадии судебного разбирательства по любой категории дел.</p>
    </div>
    <div className={styles.serviceCard}>
      <FaFileAlt className={styles.cardIcon} />
      <h2>Составление жалоб</h2>
      <p>Составление апелляционных, кассационных и иных жалоб необходимых для защиты.</p>
    </div>
  </div>
</section>

      {/* Контейнер с кнопкой "Все услуги" */}
      <section className={styles.allServicesButton}>
        <Link href="/pricing">
          <button className={styles.actionButton}>Все услуги</button>
        </Link>
        <a href="tel:+79165780936">
          <button className={styles.actionButton}>Позвонить адвокату</button>
        </a>
      </section>

      {/* Контейнер с 3 карточками (фото, текст) */}
      <section className={styles.threeCardsSection}>
  <div className={styles.cardWrapper3card}>
    <div className={styles.caseCard}>
      <Link href="/cases">
      <img
        src="/next.svg"
        alt="Адвокат по уголовным делам в Москве"
        className={styles.caseImage}
      />
      </Link>
      <h1>Дело о мошенничестве</h1>
    </div>
    <div className={styles.caseCard}>
    <Link href="/cases">
      <img
        src="/vercel.svg"
        alt="Юридическая помощь по уголовным делам"
        className={styles.caseImage}
      />      
      </Link>
      <p>Дело о краже</p>
    </div>
    <div className={styles.caseCard}>
    <Link href="/cases">
      <img
        src="/window.svg"
        alt="Адвокат по делам о наркотиках в Москве"
        className={styles.caseImage}
      />
      </Link>
      <p>Дело о наркотиках</p>
    </div>
  </div>
</section>
    </div>
  );
}









 