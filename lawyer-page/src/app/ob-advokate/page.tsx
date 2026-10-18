import type { Metadata } from "next";
import ConsultationCta from "@/components/ConsultationCta";
import ContactButtons from "@/components/ContactButtons";
import Courses from "@/components/Courses";
import SiteFooter from "@/components/SiteFooter";
import Header from "@/components/Header";
import MoreButton from "@/components/MoreButton";
import PracticeAreas from "@/components/PracticeAreas";
import Reviews from "@/components/Reviews";
import StatsStrip from "@/components/StatsStrip";
import { IMG } from "@/lib/img";
import { BreadcrumbsMicrodata } from "@/components/mdx/Breadcrumbs";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Об адвокате Пескове В.С. — уголовные дела в Москве",
  description:
    "Адвокат Песков Владислав Сергеевич в Москве. Реестр № 13/597. Более 200 уголовных дел, 228 и 159 УК РФ. Публикации в СМИ, повышение квалификации, кейсы.",
  keywords:
    "адвокат Песков, Песков Владислав Сергеевич, адвокат по уголовным делам Москва, реестровый номер 13/597, удостоверение 686, адвокат Песков биография, адвокат Песков публикации",
  alternates: { canonical: "https://advokat-peskov.com/ob-advokate/" },
  openGraph: {
    type: "profile",
    url: "https://advokat-peskov.com/ob-advokate/",
    title: "Об адвокате Пескове В.С. — уголовные дела в Москве",
    description:
      "Адвокат Песков Владислав Сергеевич — уголовные дела в Москве. Реестр № 13/597, удостоверение № 686. С 2018 года: более 200 проведённых дел, специализация 228, 159 УК РФ. Публикации в СМИ, повышение квалификации, судебная практика.",
    siteName: "Адвокат Песков — уголовные дела",
    images: [{ url: "/peskov-hero.webp", width: 800, height: 800, alt: "Адвокат Песков Владислав Сергеевич" }],
  },
};

const breadcrumbItems = [
  { name: "Главная", url: "/" },
  { name: "Об адвокате", url: "/ob-advokate/" },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://advokat-peskov.com/" },
    { "@type": "ListItem", position: 2, name: "Об адвокате", item: "https://advokat-peskov.com/ob-advokate/" },
  ],
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
  workLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Москва",
      addressCountry: "RU",
    },
  },
  sameAs: [
    "https://yandex.ru/maps/org/advokat_peskov_v_s_/188017863893/",
    "https://www.google.com/maps/place/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82+%D0%9F%D0%B5%D1%81%D0%BA%D0%BE%D0%B2+%D0%92.%D0%A1./@55.7981739,37.4932198,461m/data=!3m1!1e3!4m6!3m5!1s0x46b549d8bc932b7b:0x84f43677f11ea3e6!8m2!3d55.7981709!4d37.4957947!16s%2Fg%2F11zz0kcjjm",
    "https://t.me/Peskov_Vladislav",
  ],
};

const REGISTRY_URL = "https://minjust.gov.ru/ru/pages/advokaty-rossijskoj-federacii/";

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <BreadcrumbsMicrodata items={breadcrumbItems} />

      <main className="page page--home page--inner">
        <div className={s.top}>
          <Header active="about" />
          <div className={s.heroRow}>
            <div className={s.heroLeft}>
              <div className={s.heroLeftTop}>
                <div className={s.titleBlock}>
                  <p className={s.status}>
                    <img src={IMG.greenDot} alt="" />
                    Действующий адвокат по уголовным делам
                  </p>
                  <h1 className={`t-h1 ${s.name}`}>Песков Владислав Сергеевич</h1>
                </div>
                <ContactButtons className={s.contactsBlock} />
              </div>
              <div className={s.cardsBlock}>
                <div className={s.regRow}>
                  <div className={s.regCard}>
                    <p>Регистрационный номер адвоката:</p>
                    <p>13/597</p>
                  </div>
                  <div className={s.regCard}>
                    <p>Номер удостоверения:</p>
                    <p>686</p>
                  </div>
                </div>
                <div className={s.registry}>
                  <p className="t-body1">Реестр адвокатов Минюста РФ</p>
                  <a className="btn-secondary" href={REGISTRY_URL} target="_blank" rel="noopener noreferrer">
                    Проверить статус адвоката
                  </a>
                </div>
              </div>
            </div>
            <div className={s.photo}>
              <img src="/images/contacts-portrait.webp" alt="Адвокат Песков Владислав Сергеевич" className={s.photoImg} />
            </div>
          </div>
          <StatsStrip />
        </div>

        <section className={s.edu}>
          <h2 className="t-h2">Образование и специализация</h2>
          <div className={s.timeline}>
            <p className={`t-h3 ${s.tl} ${s.year}`} style={{ left: 5.36 }}>2014</p>
            <p className={`t-h3 ${s.tl} ${s.year}`} style={{ left: 296.43 }}>2014-2018</p>
            <p className={`t-h3 ${s.tl} ${s.year}`} style={{ left: 587.5 }}>2018</p>
            <p className={`t-h3 ${s.tl} ${s.year}`} style={{ left: 878.57 }}>Настоящее время</p>
            <div className={`${s.tl} ${s.line}`} aria-hidden>
              <span className={s.dot}><span /></span>
              <span className={s.seg} style={{ width: 266 }} />
              <span className={s.dot}><span /></span>
              <span className={s.seg} style={{ width: 267 }} />
              <span className={s.dot}><span /></span>
              <span className={s.seg} style={{ width: 266 }} />
              <span className={s.dot}><span /></span>
              <span className={s.seg} style={{ width: 613, marginRight: 0 }} />
            </div>
            <p className={`t-body3 ${s.tl} ${s.desc}`} style={{ left: 0, whiteSpace: "pre-wrap" }}>
              {"Получил высшее юридическое образование, специализация: \nсложные  и особо сложные\n уголовные дела"}
            </p>
            <div className={`${s.tl} ${s.desc} ${s.descCol}`} style={{ left: 294.64 }}>
              <p className="t-body3">Опыт работы в органах предварительного следствия</p>
              <MoreButton title="2014-2018 год">
                До адвокатской практики много лет работал в органах предварительного следствия, где занимался расследованием мошенничеств (ст. 159 УК РФ) и преступлений, связанных с незаконным оборотом наркотиков (ст. 228 УК РФ). Знание процессуальной механики «изнутри» системы даёт заметное преимущество при построении линии защиты.
              </MoreButton>
            </div>
            <p className={`t-body3 ${s.tl} ${s.desc}`} style={{ left: 592.86 }}>Начало адвокатской практики</p>
            <p className={`t-body3 ${s.tl} ${s.desc}`} style={{ left: 889.29 }}>Более 200 проведённых уголовных дел</p>
          </div>
          {/* Мобильная версия — 2 карточки-вехи */}
          <div className={s.milestones}>
            <div className={s.milestone}>
              <p className={`t-h3 ${s.year}`}>2014–2018</p>
              <p className="t-body3">Опыт работы в органах предварительного следствия</p>
              <MoreButton title="2014–2018 год">
                До адвокатской практики много лет работал в органах предварительного следствия, где занимался расследованием мошенничеств (ст. 159 УК РФ) и преступлений, связанных с незаконным оборотом наркотиков (ст. 228 УК РФ). Знание процессуальной механики «изнутри» системы даёт заметное преимущество при построении линии защиты.
              </MoreButton>
            </div>
            <div className={s.milestone}>
              <p className={`t-h3 ${s.year}`}>2018 — настоящее время</p>
              <p className="t-body3">Адвокатская практика. Специализация — сложные и особо сложные уголовные дела (ст. 228 УК РФ, ст. 159 УК РФ). Более 200 проведённых уголовных дел.</p>
            </div>
          </div>
        </section>

        <PracticeAreas />
        <Courses />
        <Reviews />
        <ConsultationCta />
        <SiteFooter />
      </main>
    </>
  );
}
