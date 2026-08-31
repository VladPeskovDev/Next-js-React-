import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advokat-peskov.com"),
  title: {
    default: "Адвокат по уголовным делам в Москве — Песков В.С.",
    template: "%s | Адвокат Песков",
  },
  description: "Адвокат по уголовным делам в Москве. Защита на следствии и в суде, консультации, обжалование. Круглосуточно: +7 (916) 578-09-36.",
  keywords: "уголовный адвокат Москва, адвокат по уголовным делам, защита в суде, консультация адвоката",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Адвокат Песков — уголовные дела",
    images: [{ url: "/1312.webp", width: 1000, height: 723, alt: "Адвокат Песков В.С. — уголовные дела, Москва" }],
  },
  twitter: { card: "summary_large_image" },
};

const SITE_URL = "https://advokat-peskov.com";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Attorney", "LegalService"],
      "@id": `${SITE_URL}#attorney`,
      name: "Адвокат Песков В.С.",
      alternateName: "Vladislav Peskov",
      description:
        "Адвокат по уголовным делам в Москве. Защита на следствии и в суде, консультации, обжалование.",
      url: SITE_URL,
      image: `${SITE_URL}/1312.webp`,
      logo: `${SITE_URL}/1312.webp`,
      telephone: "+7-916-578-09-36",
      priceRange: "от 15000 руб.",
      areaServed: [
        { "@type": "City", name: "Москва" },
        { "@type": "Country", name: "Россия" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Маршала Рыбалко, д. 2, корп. 6, оф. 408",
        addressLocality: "Москва",
        postalCode: "123298",
        addressCountry: "RU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 55.797279,
        longitude: 37.4893491,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [
        "https://t.me/Peskov_Vladislav",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+7-916-578-09-36",
          contactType: "customer service",
          areaServed: "RU",
          availableLanguage: ["Russian"],
        },
      ],
      identifier: [
        { "@type": "PropertyValue", name: "ИНН", value: "1326186560" },
        { "@type": "PropertyValue", name: "ОГРН", value: "1021300987070" },
        { "@type": "PropertyValue", name: "Реестровый номер", value: "13/597" },
        { "@type": "PropertyValue", name: "Удостоверение", value: "686" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Адвокат Песков В.С.",
      inLanguage: "ru-RU",
      publisher: { "@id": `${SITE_URL}#attorney` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="preconnect" href="https://mc.yandex.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=111984647", "ym");

              ym(111984647, "init", {
                  ssr:true,
                  webvisor:true,
                  clickmap:true,
                  ecommerce:"dataLayer",
                  accurateTrackBounce:true,
                  trackLinks:true
              });
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
