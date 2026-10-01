import Link from "next/link";
import styles from "./AboutPage.module.css";

export const metadata = {
  title: "Об адвокате Пескове В.С. — уголовные дела в Москве",
  description:
    "Адвокат Песков В.С. — уголовные дела в Москве. Реестр № 13/597. С 2018 года: 200+ дел, специализация 228, 159 УК РФ. Публикации в СМИ.",
  keywords:
    "адвокат Песков, Песков Владислав Сергеевич, адвокат по уголовным делам Москва, реестровый номер 13/597, удостоверение 686, адвокат Песков биография, адвокат Песков публикации",
  alternates: { canonical: "https://advokat-peskov.com/ob-advokate/" },
  openGraph: {
    type: "profile",
    url: "https://advokat-peskov.com/ob-advokate/",
    title: "Об адвокате Пескове В.С. — уголовные дела в Москве",
    description:
      "Адвокат Песков В.С. — уголовные дела в Москве. Реестр № 13/597. С 2018 года: 200+ дел, специализация 228, 159 УК РФ. Публикации в СМИ.",
    siteName: "Адвокат Песков — уголовные дела",
    images: [{ url: "/peskov-hero.webp", width: 800, height: 800, alt: "Адвокат Песков Владислав Сергеевич" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://advokat-peskov.com/ob-advokate/#person",
  name: "Песков Владислав Сергеевич",
  alternateName: ["Адвокат Песков", "Владислав Песков"],
  jobTitle: "Адвокат по уголовным делам",
  worksFor: { "@id": "https://advokat-peskov.com#attorney" },
  url: "https://advokat-peskov.com/ob-advokate/",
  image: "https://advokat-peskov.com/peskov-hero.webp",
  telephone: "+7 (916) 578-09-36",
  memberOf: {
    "@type": "Organization",
    name: "Адвокатская палата Московской области",
  },
  identifier: [
    { "@type": "PropertyValue", name: "Реестровый номер адвоката", value: "13/597" },
    { "@type": "PropertyValue", name: "Номер удостоверения", value: "686" },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Высшее юридическое образование",
      educationalLevel: "Специалист",
      dateCreated: "2014",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Статус адвоката",
      dateCreated: "2018-07",
    },
  ],
  knowsAbout: [
    "Уголовное право",
    "Уголовный процесс",
    "Защита по ст. 228 УК РФ",
    "Защита по ст. 228.1 УК РФ",
    "Защита по ст. 159 УК РФ",
    "Экономические преступления",
    "Мошенничество",
    "Наркотические преступления",
    "Апелляционное обжалование приговоров",
  ],
  areaServed: [
    { "@type": "City", name: "Москва" },
    { "@type": "Country", name: "Россия" },
  ],
  sameAs: [
    "https://yandex.ru/maps/org/advokat_peskov_v_s_/188017863893/",
    "https://www.google.com/maps/place/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82+%D0%9F%D0%B5%D1%81%D0%BA%D0%BE%D0%B2+%D0%92.%D0%A1./@55.7981739,37.4932198,461m/data=!3m1!1e3!4m6!3m5!1s0x46b549d8bc932b7b:0x84f43677f11ea3e6!8m2!3d55.7981709!4d37.4957947!16s%2Fg%2F11zz0kcjjm",
    "https://t.me/Peskov_Vladislav",
  ],
};

const mediaPublications = [
  {
    topic: "Что делать при банкротстве брокера",
    source: "News.ru",
    logo: "/newsru.png",
    url: "https://news.ru/economics/advokat-rasskazal-chto-delat-pri-bankrotstve-brokera",
    description: "Комментарий адвоката о действиях инвестора при банкротстве брокерской компании: защита активов, правовые механизмы, судебная практика.",
  },
  {
    topic: "Комментарий адвоката по актуальным вопросам",
    source: "360.ru",
    logo: "/360ru.png",
    url: "https://360.ru/news/dengi/advokat-peskov/",
    description: "Экспертный комментарий о правовых аспектах защиты имущественных прав граждан.",
  },
  {
    topic: "Публикация в АН «Аргументы недели»",
    source: "Аргументы недели",
    logo: "/argumenty.png",
    url: "https://argumenti.ru/education/2022/02/759627",
    description: "Материал в разделе образования и права.",
  },
  {
    topic: "Когда учитель может применить силу к ученику",
    source: "News.ru",
    logo: "/newsru.png",
    url: "https://news.ru/society/advokat-rasskazal-kogda-uchitel-mozhet-primenit-silu-k-ucheniku",
    description: "Юридический разбор границ допустимого применения педагогом силы: нормы Закона об образовании, УК РФ, реальная практика.",
  },
  {
    topic: "Педагог и применение силы к ученику (перепечатка)",
    source: "БезФормата",
    logo: "/bezformata.png",
    url: "https://ntagil.bezformata.com/listnews/mozhet-primenyat-silu-k-ucheniku/102503716/",
    description: "Региональная перепечатка материала о правах педагога.",
  },
  {
    topic: "Как провести рефинансирование ипотечного кредита",
    source: "360.ru",
    logo: "/360ru.png",
    url: "https://360.ru/news/obschestvo/advokat-objasnil-kak-provesti-refinansirovanie-ipotechnogo-kredita/",
    description: "Практическая инструкция для заёмщиков: процедура рефинансирования, документы, риски, что проверить в договоре.",
  },
  {
    topic: "Как рефинансировать ипотечный кредит",
    source: "News.ru",
    logo: "/newsru.png",
    url: "https://news.ru/economics/yurist-rasskazal-kak-refinansirovat-ipotechnyj-kredit",
    description: "Разбор процедуры рефинансирования ипотеки с юридической стороны.",
  },
  {
    topic: "Что делать при банкротстве брокера (перепечатка)",
    source: "Rambler Finance",
    logo: "/rambler.png",
    url: "https://finance.rambler.ru/markets/48232719-advokat-rasskazal-chto-delat-pri-bankrotstve-brokera/",
    description: "Перепечатка материала о защите активов инвестора.",
  },
];

const certificates = [
  {
    preview: "/certificate-previews/cert-04.webp",
    date: "1 сентября 2025 г.",
    hours: 6,
    topics: [
      "Практические вопросы судебного доказывания по гражданским делам (часть 3)",
      "Новые нормы миграционного законодательства: практика правоприменения",
      "Соглашение об оказании юридической помощи: правовая природа и условия",
    ],
  },
  {
    preview: "/certificate-previews/cert-05.webp",
    date: "10 сентября 2025 г.",
    hours: 6,
    topics: [
      "Практические вопросы судебного доказывания по гражданским делам (часть 1)",
      "Обжалование результатов экологического надзора в практике судов",
      "Постановление Пленума ВС РФ о возвращении уголовного дела прокурору",
    ],
  },
  {
    preview: "/certificate-previews/cert-10.webp",
    date: "22 сентября 2025 г.",
    hours: 6,
    topics: [
      "Практические вопросы судебного доказывания по гражданским делам (часть 2)",
      "Наследование: базовые вопросы и подводные камни",
      "Разрешение спортивных споров: теория и практика",
    ],
  },
  {
    preview: "/certificate-previews/cert-01.webp",
    date: "22 сентября 2025 г.",
    hours: 6,
    topics: [
      "Практические вопросы судебного доказывания по гражданским делам (часть 4)",
      "Незаконное воздействие на членов судебных заседателей и защита от него",
      "Альтернативные процедуры разрешения споров, переговоры",
    ],
  },
  {
    preview: "/certificate-previews/cert-02.webp",
    date: "10 декабря 2025 г.",
    hours: 6,
    topics: [
      "Правовые основы производства медицинской экспертизы",
      "Защита и самозащита прав адвокатов при вызове на допрос",
      "Отвод адвоката как способ нарушения профессиональных прав",
    ],
  },
  {
    preview: "/certificate-previews/cert-07.webp",
    date: "16 сентября 2026 г.",
    hours: 6,
    topics: [
      "Биомеханика падения из положения стоя (судебно-медицинское значение)",
      "Выделение супружеской доли и наследование бизнеса",
      "Участие адвоката в делах о правовом статусе граждан (дееспособность)",
    ],
  },
  {
    preview: "/certificate-previews/cert-03.webp",
    date: "17 сентября 2026 г.",
    hours: 2,
    topics: [
      "Соблюдение адвокатами требований 115-ФЗ (ПОД/ФТ)",
      "Противодействие легализации (отмыванию) доходов, финансированию терроризма",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="container mx-auto p-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <div className={styles.mainContainer}>
        {/* Hero-блок: фото слева + текст справа */}
        <div className={styles.heroGrid}>
          <div className={styles.photoContainer}>
            <img
              src="/peskov-portrait.webp"
              alt="Адвокат Песков Владислав Сергеевич — уголовные дела, Москва"
              className={styles.photo}
              width={853}
              height={1280}
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className={styles.aboutSection}>
            <div className={styles.aboutContent}>
              <h1>Песков Владислав Сергеевич</h1>
              <p>
                Действующий адвокат по уголовным делам с 10-летним опытом. Работаю преимущественно в Москве и МО
                по всем стадиям уголовного процесса: доследственная проверка, следствие, суды всех инстанций.
              </p>
              <p>
                До адвокатской практики много лет работал в органах предварительного следствия, где занимался
                расследованием мошенничеств (<strong>ст. 159 УК РФ</strong>) и преступлений, связанных с незаконным
                оборотом наркотиков (<strong>ст. 228 УК РФ</strong>). Знание процессуальной механики «изнутри» системы
                даёт заметное преимущество при построении линии защиты.
              </p>
              <p>
                За 12 лет практики — свыше <strong>200 проведённых дел</strong>. Работаю лично, без посредников
                и кол-центра. Не берусь за дела без реальной перспективы — сразу говорю об этом клиенту при
                первичной консультации. Оплата поэтапно, по каждой стадии отдельно.
              </p>
              <p>
                <strong>Срочный выезд 24/7 без выходных.</strong> В случае задержания, обыска или вызова на допрос —
                выезжаю в течение 30–40 минут. Строгое соблюдение адвокатской тайны.
              </p>
            </div>
          </div>
        </div>

        {/* Данные адвоката */}
        <section className={styles.section}>
          <h2>Данные адвоката</h2>
          <p><strong>ФИО:</strong> Песков Владислав Сергеевич</p>
          <p><strong>Регистрационный номер адвоката:</strong> 13/597</p>
          <p><strong>Номер удостоверения:</strong> 686</p>
          <p><strong>Статус:</strong> действующий</p>
          <p><strong>Начало практики:</strong> июль 2018 года</p>
          <p><strong>Проверить статус:</strong> <a href="https://lawyers.minjust.gov.ru/" target="_blank" rel="noopener nofollow">Реестр адвокатов Министерства юстиции РФ</a></p>
        </section>

        {/* Образование и специализация */}
        <section className={styles.section}>
          <h2>Образование и специализация</h2>
          <p><strong>Образование:</strong> высшее юридическое, выпуск 2014 года.</p>
          <p><strong>Специализация:</strong> сложные и особо сложные уголовные дела. Преимущественные направления работы:</p>
          <ul>
            <li>защита по <Link href="/narkotiki/advokat-po-228/">ст. 228, 228.1 УК РФ</Link> — наркотические преступления, включая закладки;</li>
            <li>защита по <Link href="/moshennichestvo/advokat-po-159/">ст. 159 УК РФ</Link> — мошенничество, включая IT-составы (P2P-крипта, дропы);</li>
            <li>защита по иным составам УК РФ на всех стадиях: следствие, суд первой инстанции, <Link href="/srochnyj-vyezd/apellyatsiya-po-ugolovnomu-delu/">апелляционное обжалование</Link>;</li>
            <li><Link href="/srochnyj-vyezd/">срочный выезд адвоката 24/7</Link> — в полицию, СИЗО, к следователю.</li>
          </ul>
          <p><strong>Опыт практики:</strong> более 200 проведённых уголовных дел за 12 лет работы в юриспруденции.</p>
        </section>

        {/* Публикации в СМИ — сетка кубиков */}
        <section className={styles.section}>
          <h2>Публикации и комментарии в СМИ</h2>
          <p>
            Регулярно даю экспертные комментарии по правовым вопросам федеральным и региональным СМИ.
            Ниже — публикации, где мои комментарии использованы в качестве экспертного мнения адвоката.
          </p>

          <div className={styles.mediaGrid}>
            {/* Кубик с ТВ-интервью — первым в сетке, с фото сверху вместо логотипа */}
            <a
              href="https://360.ru/"
              target="_blank"
              rel="noopener nofollow"
              className={`${styles.mediaCard} ${styles.mediaCardTv}`}
            >
              <img
                src="/peskov-tv-interview.jpg"
                alt="Адвокат Песков В.С. — интервью телеканалу «360°» по ст. 264 УК РФ"
                className={styles.mediaCardImage}
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.mediaCardContent}>
                <div className={styles.mediaSource}>Телеканал «360°»</div>
                <div className={styles.mediaTopic}>Интервью по резонансному ДТП (ст. 264 УК РФ)</div>
                <span className={styles.mediaLink}>На сайт телеканала →</span>
              </div>
            </a>

            {mediaPublications.map((pub, i) => (
              <a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener nofollow"
                className={styles.mediaCard}
              >
                <div className={styles.mediaLogoBox}>
                  <img
                    src={pub.logo}
                    alt={`Логотип ${pub.source}`}
                    className={styles.mediaLogo}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.mediaCardContent}>
                  <div className={styles.mediaSource}>{pub.source}</div>
                  <div className={styles.mediaTopic}>{pub.topic}</div>
                  <span className={styles.mediaLink}>Читать →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Повышения квалификации / сертификаты */}
        <section className={styles.section}>
          <h2>Повышение квалификации адвоката</h2>
          <p>
            Систематически прохожу программы повышения квалификации в{" "}
            <strong>Федеральной палате адвокатов Российской Федерации</strong> — по требованиям
            адвокатского статуса и по темам, актуальным для практики: уголовный процесс,
            судебное доказывание, защита прав адвокатов, миграционное законодательство,
            наследственные и семейные споры, медицинская экспертиза, ПОД/ФТ (115-ФЗ).
          </p>
          <p>
            За 2025-2026 годы — <strong>{certificates.reduce((sum, c) => sum + c.hours, 0)} академических часов</strong>
            {" "}по {certificates.length} программам. Каждый сертификат — нажмите для просмотра оригинала.
          </p>
          <div className={styles.certificateGrid}>
            {certificates.map((cert, i) => (
              <a
                key={i}
                href={cert.preview}
                target="_blank"
                rel="noopener"
                className={styles.certificateItem}
              >
                <img
                  src={cert.preview}
                  alt={`Сертификат Федеральной палаты адвокатов РФ — ${cert.date}, ${cert.hours} акад. часов`}
                  className={styles.certPreview}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.certContent}>
                  <div className={styles.certDate}>
                    {cert.date} · {cert.hours} акад. {cert.hours === 1 ? "час" : cert.hours < 5 ? "часа" : "часов"}
                  </div>
                  <div className={styles.certOrg}>Федеральная палата адвокатов РФ</div>
                  <ul className={styles.certTopics}>
                    {cert.topics.map((t, j) => (
                      <li key={j}>{t}</li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Профили и внешние точки */}
        <section className={styles.section}>
          <h2>Профили и подтверждение статуса</h2>
          <p>
            Проверить статус адвоката, специализацию и историю практики можно на официальных ресурсах и картах:
          </p>
          <div className={styles.linksGrid}>
            <a href="https://lawyers.minjust.gov.ru/" target="_blank" rel="noopener nofollow" className={styles.linkCard}>
              <strong>Реестр адвокатов Минюста РФ</strong>
              Проверка по регистрационному номеру 13/597
            </a>
            <a href="https://yandex.ru/maps/org/advokat_peskov_v_s_/188017863893/" target="_blank" rel="noopener nofollow" className={styles.linkCard}>
              <div className={styles.linkCardRating}>5.0 <span className={styles.linkCardStar}>★</span> · 5 отзывов</div>
              <strong>Яндекс.Карты</strong>
              Карточка организации, отзывы, маршрут
            </a>
            <a href="https://www.google.com/maps/place/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82+%D0%9F%D0%B5%D1%81%D0%BA%D0%BE%D0%B2+%D0%92.%D0%A1./@55.7981739,37.4932198,461m/data=!3m1!1e3!4m6!3m5!1s0x46b549d8bc932b7b:0x84f43677f11ea3e6!8m2!3d55.7981709!4d37.4957947!16s%2Fg%2F11zz0kcjjm" target="_blank" rel="noopener nofollow" className={styles.linkCard}>
              <div className={styles.linkCardRating}>5.0 <span className={styles.linkCardStar}>★</span> · 5 отзывов</div>
              <strong>Google Maps</strong>
              Карточка организации в Google
            </a>
            <a href="https://t.me/Peskov_Vladislav" target="_blank" rel="noopener nofollow" className={styles.linkCard}>
              <strong>Telegram</strong>
              @Peskov_Vladislav — прямой канал связи
            </a>
          </div>
        </section>

        {/* Контакты */}
        <section className={styles.section}>
          <h2>Как связаться</h2>
          <p>
            По любым вопросам защиты по уголовному делу — звоните напрямую. Первичная консультация по телефону
            бесплатна. Круглосуточно, без выходных, лично беру трубку.
          </p>
          <div className={styles.contactBlock}>
            <p>
              <strong>Телефон:</strong> <a href="tel:+79165780936">+7 (916) 578-09-36</a>
            </p>
            <p>
              <strong>Telegram:</strong> <a href="https://t.me/Peskov_Vladislav" target="_blank" rel="noopener">@Peskov_Vladislav</a>
            </p>
            <p>
              По Москве — выезд к следователю, в отдел полиции или в СИЗО в течение 30–40 минут в любое время суток.
            </p>
          </div>
          <p style={{ marginTop: 16, textAlign: 'center' }}>
            Смотрите также: <Link href="/tseny/">цены на услуги адвоката</Link> · <Link href="/kontakty/">полные контакты</Link> · <Link href="/srochnyj-vyezd/">срочный выезд 24/7</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
