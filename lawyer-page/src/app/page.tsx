export const metadata = {
  title: "Уголовный адвокат в Москве — Песков В.С. Защита по 228, 159 УК РФ",
  description:
    "Адвокат по уголовным делам в Москве — Песков В.С.: защита по 228, 159, 160, 187 УК РФ и экономическим составам. Следствие, суд, апелляция, срочный выезд при задержании. Консультация бесплатно, круглосуточно. +7 (916) 578-09-36.",
  keywords:
    "уголовный адвокат Москва, адвокат по уголовным делам, адвокат по 228, адвокат по 159, защита в суде, защита на следствии, срочный адвокат Москва",
  alternates: { canonical: "https://advokat-peskov.com/" },
  openGraph: {
    title: "Адвокат по уголовным делам в Москве — Песков В.С.",
    description:
      "Защита по уголовным делам на всех стадиях: следствие, суд, апелляция. Круглосуточно.",
    url: "https://advokat-peskov.com/",
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
import { FaTelegramPlane } from "react-icons/fa";
import styles from "./HomePage.module.css";
import { BreadcrumbsMicrodata } from "@/components/mdx/Breadcrumbs";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://advokat-peskov.com/" },
  ],
};

const breadcrumbItems = [{ name: "Главная", url: "/" }];

export default function HomePage() {
  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <BreadcrumbsMicrodata items={breadcrumbItems} />
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

      <section className={styles.principlesSection}>
        <div className={styles.principlesLabel}>Почему выбирают адвоката Пескова</div>
        <h2 className={styles.principlesTitle}>Принципы работы адвоката</h2>
        <div className={styles.principlesGrid}>
          <article className={styles.principleCard}>
            <div className={styles.principleNumber}>01</div>
            <h3 className={styles.principleTitle}>Честная оценка шансов</h3>
            <p className={styles.principleDescription}>
              Не берусь за заведомо проигрышные дела. Перед соглашением — чёткий
              анализ ситуации и реальный прогноз исхода. Без сладких обещаний.
            </p>
          </article>

          <article className={styles.principleCard}>
            <div className={styles.principleNumber}>02</div>
            <h3 className={styles.principleTitle}>Прозрачная стоимость</h3>
            <p className={styles.principleDescription}>
              Цена фиксируется до начала работы. Никаких доплат «по ходу дела».
              Оплата поэтапно — за каждую стадию отдельно.
            </p>
          </article>

          <article className={styles.principleCard}>
            <div className={styles.principleNumber}>03</div>
            <h3 className={styles.principleTitle}>Срочный выезд 24/7</h3>
            <p className={styles.principleDescription}>
              Задержание, обыск, допрос — выезжаю в течение 30–40 минут по
              Москве. Круглосуточно, без выходных, лично беру трубку.
            </p>
          </article>

          <article className={styles.principleCard}>
            <div className={styles.principleNumber}>04</div>
            <h3 className={styles.principleTitle}>Опыт следствия изнутри</h3>
            <p className={styles.principleDescription}>
              До адвокатуры работал в органах предварительного следствия по 159
              и 228 УК РФ. Знание процессуальной механики — на стороне защиты.
            </p>
          </article>

          <article className={styles.principleCard}>
            <div className={styles.principleNumber}>05</div>
            <h3 className={styles.principleTitle}>Адвокатская тайна</h3>
            <p className={styles.principleDescription}>
              Всё, что вы рассказываете адвокату, охраняется законом. Ни
              следствие, ни суд не вправе требовать эти сведения.
            </p>
          </article>

          <article className={styles.principleCard}>
            <div className={styles.principleNumber}>06</div>
            <h3 className={styles.principleTitle}>Работаю лично</h3>
            <p className={styles.principleDescription}>
              Без посредников и кол-центров. Я сам беру трубку, разбираю
              ситуацию и лично выезжаю к задержанному. Всегда один защитник.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.specializationSection}>
        <div className={styles.specializationLabel}>Направления практики</div>
        <h2 className={styles.specializationTitle}>Адвокат в Москве — области специализации</h2>
        <p className={styles.specializationSubtitle}>
          Защита по уголовным делам на всех стадиях — от доследственной проверки до апелляции.
          Работаю с делами любой сложности, специализация — наркотики (ст. 228 УК РФ) и мошенничество
          (ст. 159 УК РФ), включая IT-составы.
        </p>
        <div className={styles.specializationGrid}>
          <Link href="/narkotiki/" className={styles.specializationCard}>
            <div className={styles.specializationIcon}>💊</div>
            <h3 className={styles.specializationCardTitle}>Наркотики (228 УК РФ)</h3>
            <p className={styles.specializationCardDescription}>
              Защита по 228, 228.1 УК РФ: задержание, следствие, суд, апелляция. Работа с
              закладками, крупными и особо крупными размерами. Тактика 51-й, домашний арест
              вместо СИЗО.
            </p>
            <span className={styles.specializationCta}>Узнать стоимость →</span>
          </Link>

          <Link href="/moshennichestvo/" className={styles.specializationCard}>
            <div className={styles.specializationIcon}>⚖️</div>
            <h3 className={styles.specializationCardTitle}>Мошенничество (159 УК РФ)</h3>
            <p className={styles.specializationCardDescription}>
              Защита по 159 УК РФ и IT-составам: P2P-крипта, дропы, кредитное мошенничество,
              компьютерные преступления. Блокировка счетов по 115-ФЗ, работа с эпизодами.
            </p>
            <span className={styles.specializationCta}>Узнать стоимость →</span>
          </Link>

          <Link href="/srochnyj-vyezd/" className={styles.specializationCard}>
            <div className={styles.specializationIcon}>⚡</div>
            <h3 className={styles.specializationCardTitle}>Срочный выезд 24/7</h3>
            <p className={styles.specializationCardDescription}>
              Задержание, обыск, допрос, очная ставка — выезд по Москве в течение 30–40 минут.
              Круглосуточно, лично беру трубку. Первая консультация по телефону — бесплатно.
            </p>
            <span className={styles.specializationCta}>Узнать стоимость →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
