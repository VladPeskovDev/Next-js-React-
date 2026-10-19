export const metadata = {
  title: "Уголовный адвокат в Москве — Песков В.С. Защита по 228, 159 УК РФ",
  description:
    "Адвокат по уголовным делам в Москве — защита по ст. 228, 159, 160, 187 УК РФ. Следствие, суд, апелляция, срочный выезд 24/7. Консультация по телефону бесплатно.",
  keywords:
    "уголовный адвокат Москва, адвокат по уголовным делам, адвокат по уголовным делам Москва, юрист по уголовным делам Москва, помощь адвоката по уголовным делам, защита по уголовным делам, защита адвокатом по уголовным делам, адвокат по 228, адвокат по 159, защита в суде, защита на следствии, срочный адвокат Москва",
  alternates: {
    canonical: "https://advokat-peskov.com/",
    languages: {
      ru: "https://advokat-peskov.com/",
      en: "https://advokat-peskov.com/en/",
      "x-default": "https://advokat-peskov.com/",
    },
  },
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

import ConsultationCta from "@/components/ConsultationCta";
import ContactButtons from "@/components/ContactButtons";
import Header from "@/components/Header";
import { BreadcrumbsMicrodata } from "@/components/mdx/Breadcrumbs";
import MediaComments from "@/components/MediaComments";
import PracticeAreas from "@/components/PracticeAreas";
import ProcessSteps from "@/components/ProcessSteps";
import Reviews from "@/components/Reviews";
import SiteFooter from "@/components/SiteFooter";
import Statement from "@/components/Statement";
import WhyCards from "@/components/WhyCards";
import { IMG } from "@/lib/img";
import s from "./page.module.css";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: "https://advokat-peskov.com/",
    },
  ],
};

const breadcrumbItems = [{ name: "Главная", url: "/" }];

const FACTS: [string, string][] = [
  ["12+", "лет опыта"],
  ["200+", "уголовных дел"],
  ["24/7", "Режим работы"],
  ["Москва и МО", "Область работы"],
  ["от 25 000 ₽", "Выезд на место"],
  ["Поэтапная оплата", "Прозрачно и честно"],
];

const STEPS = [
  {
    title: (
      <>
        Вы рассказываете <br />о ситуации
      </>
    ),
    text: "Коротко разбираем обстоятельства дела по телефону. Первичная консультация — бесплатно.",
  },
  {
    title: (
      <>
        Я оцениваю <br />
        ситуацию
      </>
    ),
    text: "Обозначаю возможные риски, перспективы и необходимые действия. Если дело не имеет реальной перспективы — говорю об этом прямо.",
  },
  {
    title: "Определяем план защиты",
    text: "Согласовываем объём работы, стоимость и этап, на котором требуется участие адвоката.",
  },
  {
    title: (
      <>
        Я подключаюсь <br />к делу
      </>
    ),
    text: "Выезжаю на задержание или следственные действия, знакомлюсь с материалами и веду защиту на соответствующей стадии.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <BreadcrumbsMicrodata items={breadcrumbItems} />
      <link rel="preload" as="image" href={IMG.heroHome} fetchPriority="high" />

      <main className="page page--home">
        <div className={s.top}>
          <section className={s.hero}>
            <div className={s.heroImg}>
              <img
                src={IMG.heroHome}
                alt="Адвокат Песков Владислав Сергеевич"
              />
            </div>
            <div className={s.heroCard}>
              <div className={s.intro}>
                <h1 className="t-h1">Адвокат по уголовным делам Песков В.С.</h1>
                <p className="t-body1">
                  Опытный адвокат по уголовным делам, с успешной практикой на
                  протяжении 12 лет
                </p>
              </div>
              <div className={s.contact}>
                <div className={`t-body1 ${s.benefits}`}>
                  <p>
                    <span className="accent">Быстрый</span> ответ. Ответим сразу
                    или перезвоним в течении 15 минут
                  </p>
                  <p>
                    Первичная консультация -{" "}
                    <span className="accent">бесплатно</span>
                  </p>
                </div>
                <ContactButtons />
              </div>
            </div>
            <div className={s.ratings}>
              <a
                className={s.ratingRow}
                href="https://yandex.ru/maps/org/advokat_peskov_v_s_/188017863893/?ll=37.495626%2C55.798116&z=16"
                target="_blank"
                rel="noopener nofollow"
              >
                <span className={s.ratingVal}>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" fill="#FFC107" />
                  </svg>
                  5.0
                </span>
                <span>Яндекс.Карты</span>
              </a>
              <a
                className={s.ratingRow}
                href="https://www.google.com/maps/place/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82+%D0%9F%D0%B5%D1%81%D0%BA%D0%BE%D0%B2+%D0%92.%D0%A1./@55.7981739,37.4932198,461m/data=!3m1!1e3!4m6!3m5!1s0x46b549d8bc932b7b:0x84f43677f11ea3e6!8m2!3d55.7981709!4d37.4957947!16s%2Fg%2F11zz0kcjjm"
                target="_blank"
                rel="noopener nofollow"
              >
                <span className={s.ratingVal}>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" fill="#FFC107" />
                  </svg>
                  5.0
                </span>
                <span>Google Maps</span>
              </a>
            </div>
            <Header active="home" className={s.header} />
          </section>
          <section className={s.facts}>
            <div className={s.factsRow}>
              {FACTS.map(([v, l]) => (
                <div className={s.fact} key={v}>
                  <p className="t-h3">{v}</p>
                  <p className="t-body1">{l}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <PracticeAreas />
        <WhyCards />

        <Statement>
          Мой доверитель и его близкие никогда не услышат от меня того, что им
          хотелось бы услышать — только то, как ситуация обстоит на самом деле и
          каким может быть реальный исход дела. Опыт позволяет прогнозировать
          большинство сценариев заранее. Я не даю сладких обещаний ради того,
          чтобы вы заключили со мной соглашение — я работаю с фактами, а не с
          ожиданиями.
        </Statement>

        <ProcessSteps steps={STEPS} widths={[291, null, 291, 291]} />

        <MediaComments />
        <Reviews />
        <ConsultationCta />
        <SiteFooter />
      </main>
    </>
  );
}
