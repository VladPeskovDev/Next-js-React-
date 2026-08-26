import styles from "./AboutPage.module.css";

export const metadata = {
  title: "Об адвокате Пескове В.С. — уголовные дела, Москва",
  description:
    "Опытный адвокат по уголовным делам в Москве. Опыт в правоохранительных органах, реестровый номер 13/597. Защита на следствии и в суде.",
  keywords: "адвокат Песков, адвокат по уголовным делам Москва, реестровый номер, опыт следствия, защита в суде",
  alternates: { canonical: "https://advokat-peskov.com/ob-advokate/" },
  openGraph: {
    type: "profile",
    url: "https://advokat-peskov.com/ob-advokate/",
    title: "Об адвокате Пескове В.С. — уголовные дела",
    description:
      "Адвокат по уголовным делам в Москве: опыт в следствии, реестровый номер, направления работы.",
    siteName: "Адвокат Песков — уголовные дела",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://advokat-peskov.com/ob-advokate/#person",
  name: "Песков Владислав Сергеевич",
  alternateName: "Адвокат Песков",
  jobTitle: "Адвокат",
  worksFor: { "@id": "https://advokat-peskov.com#attorney" },
  url: "https://advokat-peskov.com/ob-advokate/",
  image: "https://advokat-peskov.com/foto008.webp",
  memberOf: {
    "@type": "Organization",
    name: "Адвокатская палата",
  },
  identifier: [
    { "@type": "PropertyValue", name: "Реестровый номер", value: "13/597" },
    { "@type": "PropertyValue", name: "Удостоверение", value: "686" },
  ],
  knowsAbout: [
    "Уголовное право",
    "Уголовный процесс",
    "Защита по ст. 228 УК РФ",
    "Защита по ст. 159 УК РФ",
    "Экономические преступления",
  ],
  areaServed: [
    { "@type": "City", name: "Москва" },
    { "@type": "Country", name: "Россия" },
  ],
};

export default function AboutPage() {
  return (
    <main className="container mx-auto p-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <div className={styles.mainContainer}>
        <div className={styles.photoContainer}>
          <div className={styles.photoOverlay}>
            <img
              src="/foto008.webp"
              alt="Адвокат Песков В.С. — уголовные дела, Москва"
              className={styles.photo}
              width={600}
              height={800}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
        <div className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h1>Об адвокате Пескове В.С.</h1>
            <p>
              Являюсь высококлассным адвокатом по уголовным делам с многолетним опытом в сфере уголовного права,
              обеспечивая защиту прав и интересов клиентов на самом высоком уровне профессионализма и
              ответственности. Моя практика по уголовным делам насчитывает значительное количество положительных
              решений, достигнутых благодаря глубоким знаниям законодательства и тщательно
              продуманной стратегии защиты.
            </p>
            <p>
              Мои приоритеты — преданность интересам клиента, оперативность и внимательность к
              каждому делу, что позволяет максимально точно оценить ситуацию и выбрать эффективные
              способы защиты. В своей работе руководствуюсь принципами честности, строгого
              соблюдения этических норм и полной конфиденциальности, что укрепляет доверие клиентов и
              способствует успеху в решении самых сложных уголовно - правовых вопросов.
            </p>
            <p>
              Обратившись ко мне за юридической помощью, вы можете быть уверены, что ваше дело в
              надежных руках, а результат — в приоритетном внимании. Моя цель — защита ваших
              интересов и достижение наилучшего возможного исхода, вне зависимости от сложности дела.
            </p>
          </div>
        </div>

        <div className={styles.educationSection}>
          <h3>Образование и квалификация адвоката по уголовным делам</h3>
          <p>Высшее юридическое образование</p>
          <p>Опыт работы в правоохранительных органах</p>
          <p>Более 10 лет юридического опыта</p>
          <p>Реестровый номер Адвоката 13/597</p>
        </div>
      </div>
    </main>
  );
}
