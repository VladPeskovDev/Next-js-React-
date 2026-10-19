export const metadata = {
  title: "Criminal Defense Attorney in Moscow — Vladislav Peskov",
  description:
    "English-speaking criminal defense attorney in Moscow — defense in drug cases, fraud, 24/7 urgent response. Investigation, trial, appeal. Free initial phone consultation.",
  keywords:
    "criminal defense attorney moscow, english speaking lawyer moscow, criminal lawyer moscow russia, drug lawyer moscow, fraud lawyer russia, arrested in moscow lawyer, 24/7 criminal attorney moscow, defense lawyer article 228, russian criminal defense english",
  alternates: {
    canonical: "https://advokat-peskov.com/en/",
    languages: {
      ru: "https://advokat-peskov.com/",
      en: "https://advokat-peskov.com/en/",
      "x-default": "https://advokat-peskov.com/",
    },
  },
  openGraph: {
    title: "Criminal Defense Attorney in Moscow — Vladislav Peskov",
    description:
      "English-speaking criminal defense in Moscow at every stage. 24/7, personally answered. Free initial phone consultation.",
    url: "https://advokat-peskov.com/en/",
    siteName: "Peskov Criminal Defense Attorney",
    locale: "en_US",
    images: [
      {
        url: "https://advokat-peskov.com/peskov-hero.webp",
        width: 800,
        height: 800,
        alt: "Criminal defense attorney Vladislav Peskov",
      },
    ],
    type: "website",
  },
};

import ConsultationCta from "@/components/ConsultationCta";
import ContactButtons from "@/components/ContactButtons";
import Header from "@/components/Header";
import { BreadcrumbsMicrodata } from "@/components/mdx/Breadcrumbs";
import PracticeAreas from "@/components/PracticeAreas";
import ProcessSteps from "@/components/ProcessSteps";
import SiteFooter from "@/components/SiteFooter";
import Statement from "@/components/Statement";
import WhyCards from "@/components/WhyCards";
import { IMG } from "@/lib/img";
import s from "../page.module.css";

const SITE_URL = "https://advokat-peskov.com";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en/` },
  ],
};

/* Attorney JSON-LD на английском — для англоязычной выдачи */
const attorneyEnLd = {
  "@context": "https://schema.org",
  "@type": ["Attorney", "LegalService"],
  "@id": `${SITE_URL}#attorney-en`,
  name: "Vladislav Peskov — Criminal Defense Attorney",
  description:
    "English-speaking criminal defense attorney in Moscow. Drug cases, fraud, urgent 24/7 response. Investigation, trial, appeal.",
  url: `${SITE_URL}/en/`,
  image: `${SITE_URL}/peskov-hero.webp`,
  telephone: "+7-916-578-09-36",
  priceRange: "from 15000 RUB",
  areaServed: [
    { "@type": "City", name: "Moscow" },
    { "@type": "Country", name: "Russia" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Marshala Rybalko St., bldg. 6, office 408",
    addressLocality: "Moscow",
    postalCode: "123298",
    addressCountry: "RU",
  },
  availableLanguage: ["English", "Russian"],
  knowsAbout: [
    "Criminal defense",
    "Drug cases (Russian Criminal Code Art. 228)",
    "Fraud defense (Russian Criminal Code Art. 159)",
    "Pre-trial detention",
    "Criminal appeals",
    "Urgent legal response",
  ],
};

const breadcrumbItems = [{ name: "Home", url: "/en/" }];

const FACTS: [string, string][] = [
  ["12+", "years of practice"],
  ["200+", "criminal cases"],
  ["24/7", "always on call"],
  ["Moscow + region", "service area"],
  ["from 25,000 ₽", "on-site response"],
  ["Stage-based payment", "transparent & fair"],
];

const STEPS = [
  {
    title: <>You explain <br />the situation</>,
    text: "We briefly go through the circumstances by phone. The initial consultation is free.",
  },
  {
    title: <>I assess <br />the case</>,
    text: "I lay out the risks, perspectives, and necessary actions. If the case has no real prospects, I tell you directly.",
  },
  {
    title: "We agree on a defense plan",
    text: "We align on the scope of work, the fee, and the stage at which the attorney is needed.",
  },
  {
    title: <>I join <br />the case</>,
    text: "I attend the arrest or investigative actions, review the file, and conduct the defense at the relevant stage.",
  },
];

export default function HomeEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attorneyEnLd) }} />
      <BreadcrumbsMicrodata items={breadcrumbItems} />
      <link rel="preload" as="image" href={IMG.heroHome} fetchPriority="high" />

      <main className="page page--home" lang="en">
        <div className={s.top}>
          <section className={s.hero}>
            <div className={s.heroImg}>
              <img src={IMG.heroHome} alt="Attorney Vladislav Peskov" />
            </div>
            <div className={s.heroCard}>
              <div className={s.intro}>
                <h1 className="t-h1">Criminal Defense Attorney Vladislav Peskov</h1>
                <p className="t-body1">
                  Experienced English-speaking criminal defense attorney in Moscow with 12 years of successful practice
                </p>
              </div>
              <div className={s.contact}>
                <div className={`t-body1 ${s.benefits}`}>
                  <p>
                    <span className="accent">Fast</span> response. I pick up immediately or call back within 15 minutes
                  </p>
                  <p>
                    First consultation — <span className="accent">free</span>
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
                <span>Yandex Maps</span>
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
            <Header active="home" className={s.header} lang="en" />
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

        <PracticeAreas lang="en" />
        <WhyCards lang="en" />

        <Statement>
          My clients and their families will never hear from me what they want to hear — only how the situation actually
          stands and what the realistic outcome can be. Experience lets me forecast most scenarios in advance. I don’t
          make sweet promises to sign a retainer — I work with facts, not expectations.
        </Statement>

        <ProcessSteps title="How we work together" steps={STEPS} widths={[291, null, 291, 291]} />

        <ConsultationCta
          title="Need help with a criminal case?"
          text="For any questions about criminal defense — call directly. The initial phone consultation is free. Round the clock, I pick up personally."
        />
        <SiteFooter lang="en" />
      </main>
    </>
  );
}
