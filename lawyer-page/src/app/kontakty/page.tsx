import type { Metadata } from "next";
import ContactButtons from "@/components/ContactButtons";
import SiteFooter from "@/components/SiteFooter";
import Header from "@/components/Header";
import ClientYandexMap from "@/components/ClientYandexMap";
import { BreadcrumbsMicrodata } from "@/components/mdx/Breadcrumbs";
import { IMG } from "@/lib/img";
import { ADDRESS } from "@/lib/site";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Телефон адвоката в Москве — помощь 24/7",
  description:
    "Телефон и адрес адвоката по уголовным делам в Москве — Песков В.С. Выезд при задержании 24/7, бесплатная консультация. +7 (916) 578-09-36, Telegram 24/7.",
  keywords:
    "телефон адвоката, телефоны адвокатов, адвокат по уголовным делам телефон, срочный адвокат Москва, консультация адвоката",
  alternates: { canonical: "https://advokat-peskov.com/kontakty/" },
  openGraph: {
    type: "website",
    url: "https://advokat-peskov.com/kontakty/",
    title: "Срочный телефон адвоката по уголовным делам — консультация 24/7",
    description:
      "Нужен адвокат? Телефон уголовного адвоката в Москве. Помощь при задержании, суде, следствии. Звоните для бесплатной консультации!",
    siteName: "Адвокат Песков — уголовные дела",
    images: [{ url: "/1312.webp", width: 1000, height: 723, alt: "Адвокат Песков В.С." }],
  },
};

const breadcrumbItems = [
  { name: "Главная", url: "/" },
  { name: "Контакты", url: "/kontakty/" },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://advokat-peskov.com/" },
    { "@type": "ListItem", position: 2, name: "Контакты", item: "https://advokat-peskov.com/kontakty/" },
  ],
};

export default function ContactsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <BreadcrumbsMicrodata items={breadcrumbItems} />

      <main className="page page--home page--inner" style={{ gap: 40 }}>
        <div className={s.top}>
          <Header active="contacts" />
          <div className={s.heroRow}>
            <div className={s.heroLeft}>
              <div className={s.heroLeftInner}>
                <div className={s.intro}>
                  <h1 className="t-h1">Контакты адвоката по уголовным делам в Москве</h1>
                  <p className="t-body1">
                    Если нужна помощь — звоните, работаю круглосуточно. Выезд по Москве за 30–40 минут. Первичная консультация по телефону — бесплатно.
                  </p>
                </div>
                <ContactButtons />
              </div>
            </div>
            <div className={s.photo}>
              <a className={s.qrBox} href="/contact.vcf" download aria-label="Скачать контакт адвоката">
                <img src="/qr-peskov.svg" alt="QR-код с контактами адвоката Пескова В.С." className={s.qrImg} />
                <p className={s.qrCaption}>Отсканируй и забери контакты</p>
              </a>
            </div>
          </div>

          <div className={s.bottom}>
            <div className={s.infoWrap}>
              <div className={s.infoRow}>
                <div className={s.info}>
                  <div className={s.icon}><img src={IMG.iconClock} alt="" /></div>
                  <div className={s.infoText}>
                    <p className="t-h3">Режим работы</p>
                    <p className="t-body3">Круглосуточно, без выходных</p>
                  </div>
                </div>
                <div className={s.info}>
                  <div className={s.icon}><img src={IMG.iconPin} alt="" /></div>
                  <div className={s.infoText}>
                    <p className="t-h3">Адрес</p>
                    <p className="t-body3">{ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Реквизиты адвоката — важно для E-E-A-T и подтверждения статуса */}
            <div className={s.infoWrap}>
              <div className={s.credRow}>
                <div className={s.cred}>
                  <p className={s.credLabel}>Коллегия адвокатов № 1</p>
                  <p className={s.credValue}>ИНН 1326186560 · ОГРН 1021300987070</p>
                </div>
                <div className={s.cred}>
                  <p className={s.credLabel}>Регистрационный номер</p>
                  <p className={s.credValue}>№ 13/597 · Удостоверение № 686</p>
                </div>
              </div>
            </div>

            <div className={s.mapWrap}>
              <div className={s.map} aria-label="Карта: офис адвоката Пескова В.С. в Москве">
                <ClientYandexMap />
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </main>
    </>
  );
}
