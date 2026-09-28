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
        url: "https://advokat-peskov.com/peskov-hero.webp",
        width: 800,
        height: 800,
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
      <link rel="preload" as="image" href="/peskov-hero.webp" fetchPriority="high" />
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}>
          <div className={styles.heroPhoto}>
            <img
              src="/peskov-hero.webp"
              alt="Адвокат по уголовным делам Песков В.С. — Москва"
              width={800}
              height={800}
              fetchPriority="high"
            />

            <div className={styles.heroTextOverlay}>
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
          </div>

          <article className={`${styles.heroContent} ${styles.aboutBlock} ${styles.aboutBlockAccent}`}>
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
              и каким может быть реальный исход дела. Опыт позволяет прогнозировать
              большинство сценариев заранее. Я не даю сладких обещаний ради того,
              чтобы вы заключили со мной соглашение — я работаю с фактами, а не с
              ожиданиями.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.ctaBlock}>
          {/* Статистика — 4 карточки */}
          <div className={styles.ctaStatsGrid}>
            <a
              href="https://yandex.ru/maps/org/advokat_peskov_v_s_/188017863893/"
              target="_blank"
              rel="noopener nofollow"
              className={styles.ctaStatCard}
            >
              <div className={styles.ctaStatValue}>5.0 ★</div>
              <div className={styles.ctaStatLabel}>Яндекс.Карты</div>
            </a>
            <a
              href="https://www.google.com/maps/place/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82+%D0%9F%D0%B5%D1%81%D0%BA%D0%BE%D0%B2+%D0%92.%D0%A1./@55.7981739,37.4932198,461m/data=!3m1!1e3!4m6!3m5!1s0x46b549d8bc932b7b:0x84f43677f11ea3e6!8m2!3d55.7981709!4d37.4957947!16s%2Fg%2F11zz0kcjjm"
              target="_blank"
              rel="noopener nofollow"
              className={styles.ctaStatCard}
            >
              <div className={styles.ctaStatValue}>5.0 ★</div>
              <div className={styles.ctaStatLabel}>Google Maps</div>
            </a>
            <div className={styles.ctaStatCard}>
              <div className={styles.ctaStatValue}>24/7</div>
              <div className={styles.ctaStatLabel}>Режим работы</div>
            </div>
            <Link href="/tseny/" className={styles.ctaStatCard}>
              <div className={styles.ctaStatValue}>от 25 000 ₽</div>
              <div className={styles.ctaStatLabel}>Выезд на место</div>
            </Link>
          </div>

          {/* Кнопки CTA — позвонить и Telegram */}
          <div className={styles.ctaButtons}>
            <a href="tel:+79165780936" className={styles.ctaButtonPrimary}>
              Позвонить — +7 (916) 578-09-36
            </a>
            <a
              href="https://t.me/Peskov_Vladislav"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonSecondary}
            >
              <FaTelegramPlane /> Записаться онлайн
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
