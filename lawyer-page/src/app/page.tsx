export const metadata = {
  title: "Уголовный адвокат в Москве — Песков В.С. Защита по 228, 159, УК РФ",
  description: "Адвокат по уголовным делам в Москве. Защита на следствии и в суде: наркотики (228), мошенничество (159), экономические составы. Первичная консультация бесплатно. Круглосуточно: +7 (916) 578-09-36.",
  keywords: "уголовный адвокат Москва, адвокат по уголовным делам, адвокат по 228, адвокат по 159, защита в суде, защита на следствии, срочный адвокат Москва",
  alternates: { canonical: "https://advokat-peskov.com/" },
  openGraph: {
    title: "Адвокат по уголовным делам в Москве — Песков В.С.",
    description: "Защита по уголовным делам на всех стадиях: следствие, суд, апелляция. Круглосуточно.",
    url: "https://advokat-peskov.com",
    siteName: "Адвокат Песков — уголовные дела",
    images: [
      {
        url: "https://advokat-peskov.com/foto008.webp",
        width: 1200,
        height: 630,
        alt: "Адвокат по уголовным делам Песков В.С.",
      },
    ],
    type: "website",
  },
  verification: {
    google: "OfUKS37mZTQtIaO4HfoDJeWAvCIullKEuV2r7lYfuXc",
    yandex: "ca6674660fe1aaf4",
  },
};

import styles from "./HomePage.module.css";
import { FaGavel, FaBook, FaUserShield, FaFileAlt } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>
            Адвокат по уголовным делам Песков В.С.
          </h1>
          <p className={styles.heroDescription}>
            Опытный адвокат по уголовным делам, с успешной практикой на
            протяжении долгих лет.
          </p>
          <div className={styles.buttons}>
            <a href="tel:+79165780936" className={styles.button}>
              Позвонить
            </a>
          </div>
        </div>
      </section>

      <section className={styles.servicesHeader}>
        <h2>Услуги</h2>
      </section>

      <section className={styles.fourCardsSection}>
        <div className={styles.cardWrapper}>
          <div className={styles.serviceCard}>
            <Link href="/uslugi/advokat-po-228/">
              <FaUserShield className={styles.cardIcon} />
              <h2>Адвокат по 228 УК РФ</h2>
              <p>Защита по делам о наркотиках: задержание, следствие, суд, обжалование.</p>
            </Link>
          </div>
          <div className={styles.serviceCard}>
            <Link href="/uslugi/advokat-po-159/">
              <FaBook className={styles.cardIcon} />
              <h2>Адвокат по 159 УК РФ</h2>
              <p>Защита по делам о мошенничестве, включая IT-составы: P2P, дропы, крипта.</p>
            </Link>
          </div>
          <div className={styles.serviceCard}>
            <Link href="/uslugi/">
              <FaGavel className={styles.cardIcon} />
              <h2>Все услуги</h2>
              <p>Полный спектр защиты по уголовным делам на всех стадиях процесса.</p>
            </Link>
          </div>
          <div className={styles.serviceCard}>
            <Link href="/tseny/">
              <FaFileAlt className={styles.cardIcon} />
              <h2>Цены</h2>
              <p>Прозрачный прайс с фиксированными ставками по этапам дела.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.allServicesButton}>
        <Link href="/uslugi/">
          <button className={styles.actionButton}>Все услуги</button>
        </Link>
        <a href="tel:+79165780936">
          <button className={styles.actionButton}>Позвонить адвокату</button>
        </a>
      </section>

      <section className={styles.threeCardsSection}>
        <div className={styles.cardWrapper3card}>
          <div className={styles.caseCard}>
            <Link href="/moshennichestvo/">
              <img
                src="/159.webp"
                alt="Адвокат по делам о мошенничестве в Москве"
                className={styles.caseImage}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <h2>Мошенничество (159 УК РФ)</h2>
          </div>
          <div className={styles.caseCard}>
            <Link href="/situatsii/">
              <img
                src="/raznoye.webp"
                alt="Что делать при задержании или обыске"
                className={styles.caseImage}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <h2>Что делать в ситуации</h2>
          </div>
          <div className={styles.caseCard}>
            <Link href="/narkotiki/">
              <img
                src="/narkotiki228.webp"
                alt="Адвокат по делам о наркотиках в Москве"
                className={styles.caseImage}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <h2>Наркотики (228 УК РФ)</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
