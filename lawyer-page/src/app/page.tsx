export const metadata = {
  title: "Уголовный адвокат в Москве — Песков В.С. Защита по 228, 159 УК РФ",
  description:
    "Адвокат по уголовным делам в Москве: защита по 228, 159, экономическим составам. Следствие, суд, апелляция. Консультация бесплатно, круглосуточно.",
  keywords:
    "уголовный адвокат Москва, адвокат по уголовным делам, адвокат по 228, адвокат по 159, защита в суде, защита на следствии, срочный адвокат Москва",
  alternates: { canonical: "https://advokat-peskov.com/" },
  openGraph: {
    title: "Адвокат по уголовным делам в Москве — Песков В.С.",
    description:
      "Защита по уголовным делам на всех стадиях: следствие, суд, апелляция. Круглосуточно.",
    url: "https://advokat-peskov.com",
    siteName: "Адвокат Песков — уголовные дела",
    images: [
      {
        url: "https://advokat-peskov.com/1312.webp",
        width: 1000,
        height: 723,
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

import Link from "next/link";
import {
  FaBook,
  FaFileAlt,
  FaGavel,
  FaTelegramPlane,
  FaUserShield,
} from "react-icons/fa";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <link rel="preload" as="image" href="/1312.webp" fetchPriority="high" />
      <section className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>
            Адвокат по уголовным делам Песков В.С.
          </h1>
          <p className={styles.heroDescription}>
            Опытный адвокат по уголовным делам, с успешной практикой на
            протяжении долгих лет.
          </p>
        </div>
        <div className={styles.buttons}>
          <a href="tel:+79165780936" className={styles.button}>
            +7 916 578 09 36
          </a>
          <a
            href="https://t.me/Peskov_Vladislav"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonTelegram}
          >
            <FaTelegramPlane />
            Telegram
          </a>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <article className={styles.aboutBlock}>
          <h2>Обо мне</h2>
          <p>
            Действующий адвокат по уголовным делам с 10-летним опытом. Работаю
            преимущественно в Москве и МО по всем стадиям уголовного процесса:
            доследственная проверка, следствие, суды всех инстанций.
          </p>
          <p>
            До адвокатской практики много лет работал в органах предварительного
            следствия, где занимался расследованием мошенничеств (159 УК РФ) и
            преступлений, связанных с незаконным оборотом наркотиков (228 УК РФ).
            Знание процессуальной механики «изнутри» системы даёт заметное
            преимущество при построении линии защиты.
          </p>

          <h3>Адвокатский статус</h3>
          <ul className={`${styles.aboutList} ${styles.aboutListCompact}`}>
            <li>Действующий адвокат</li>
            <li>Реестровый номер: 13/597</li>
            <li>Удостоверение адвоката: № 686</li>
          </ul>

          <h3>Срочный выезд 24/7 без выходных</h3>
          <p>
            В случае задержания, обыска или вызова на допрос — выезжаю в течение
            30–40 минут. Строгое соблюдение адвокатской тайны.
          </p>
        </article>

        <article className={`${styles.aboutBlock} ${styles.aboutBlockAccent}`}>
          <h2>Без посредников. Без обещаний.</h2>
          <p>
            Вы получаете помощь напрямую от квалифицированного адвоката, а не
            попадаете в кол-центр, задача которого — просто продать вашу заявку
            любому исполнителю, готовому за неё заплатить. Я сам беру трубку,
            разбираю ситуацию, даю первые инструкции и лично выезжаю к
            задержанному, если требуется срочная защита.
          </p>
          <hr className={styles.aboutDivider} />
          <p>
            Мой клиент и его близкие никогда не услышат от меня того, что им
            хотелось бы услышать — только то, как ситуация обстоит на самом деле
            и каким может быть реальный исход дела. Опыт позволяет
            прогнозировать большинство сценариев заранее. Я не даю сладких
            обещаний ради того, чтобы вы заключили со мной соглашение — я
            работаю с фактами, а не с ожиданиями.
          </p>
        </article>
      </section>

      <section className={styles.servicesHeader}>
        <h2>Услуги</h2>
      </section>

      <section className={styles.fourCardsSection}>
        <div className={styles.cardWrapper}>
          <div className={styles.serviceCard}>
            <Link href="/narkotiki/advokat-po-228/">
              <FaUserShield className={styles.cardIcon} />
              <h2>Адвокат по 228 УК РФ</h2>
              <p>
                Защита по делам о наркотиках: задержание, следствие, суд,
                обжалование.
              </p>
            </Link>
          </div>
          <div className={styles.serviceCard}>
            <Link href="/moshennichestvo/advokat-po-159/">
              <FaBook className={styles.cardIcon} />
              <h2>Адвокат по 159 УК РФ</h2>
              <p>
                Защита по делам о мошенничестве, включая IT-составы: P2P, дропы,
                крипта.
              </p>
            </Link>
          </div>
          <div className={styles.serviceCard}>
            <Link href="/srochnyj-vyezd/">
              <FaGavel className={styles.cardIcon} />
              <h2>Срочный выезд 24/7</h2>
              <p>
                Задержание, обыск, допрос — приезжаю в течение 30–40 минут.
              </p>
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
        <Link href="/blog/">
          <button className={styles.actionButton}>Читать блог</button>
        </Link>
        <a href="tel:+79165780936">
          <button className={styles.actionButton}>Позвонить адвокату</button>
        </a>
      </section>

      <section className={styles.threeCardsSection}>
        <div className={styles.cardWrapper3card}>
          <div className={styles.caseCard}>
            <Link href="/narkotiki/">
              <img
                src="/narkotiki228.webp"
                alt="Адвокат по 228 УК РФ (наркотики) в Москве — Песков В.С."
                className={styles.caseImage}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <h2>Наркотики (228 УК РФ)</h2>
          </div>
          <div className={styles.caseCard}>
            <Link href="/srochnyj-vyezd/">
              <img
                src="/raznoye.webp"
                alt="Срочный адвокат в Москве — выезд 24/7 при задержании и обыске"
                className={styles.caseImage}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <h2>Срочный выезд 24/7</h2>
          </div>
          <div className={styles.caseCard}>
            <Link href="/moshennichestvo/">
              <img
                src="/159.webp"
                alt="Адвокат по 159 УК РФ (мошенничество) в Москве — Песков В.С."
                className={styles.caseImage}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <h2>Мошенничество (159 УК РФ)</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
