import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import ConsultationCta from "@/components/ConsultationCta";
import SiteFooter from "@/components/SiteFooter";
import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import { BreadcrumbsMicrodata } from "@/components/mdx/Breadcrumbs";
import { IMG } from "@/lib/img";
import { POSTS } from "@/lib/posts";
import { ROUTES } from "@/lib/site";
import s from "./page.module.css";

const SITE_URL = "https://advokat-peskov.com";
const PAGE_URL = `${SITE_URL}/blog/`;

export const metadata: Metadata = {
  title: "Блог: комментарии к изменениям законодательства и практике",
  description:
    "Блог адвоката по уголовным делам: разбор судебной практики, свежие изменения законодательства, разъяснения статей УК РФ и пошаговые инструкции для клиентов.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Блог: комментарии к изменениям законодательства и практике",
    description:
      "Блог адвоката по уголовным делам: разбор судебной практики, свежие изменения законодательства, разъяснения статей УК РФ и пошаговые инструкции для клиентов.",
    siteName: "Адвокат Песков — уголовные дела",
    images: [{ url: "/1312.webp", width: 1000, height: 723, alt: "Адвокат Песков В.С." }],
  },
};

const breadcrumbItems = [
  { name: "Главная", url: "/" },
  { name: "Блог", url: "/blog/" },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Блог", item: PAGE_URL },
  ],
};

/* Blog JSON-LD — список статей для крауллеров */
const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${PAGE_URL}#blog`,
  url: PAGE_URL,
  name: "Блог адвоката Пескова В.С.",
  description:
    "Разбор судебной практики, свежие изменения законодательства, разъяснения статей УК РФ и пошаговые инструкции для клиентов.",
  publisher: { "@id": `${SITE_URL}#attorney` },
  blogPost: POSTS.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `${SITE_URL}/blog/${p.slug}/`,
    image: `${SITE_URL}${p.image}`,
    datePublished: "2025-10-01",
    dateModified: "2026-09-24",
    author: { "@id": `${SITE_URL}#attorney` },
  })),
};

const TOPICS = [
  { label: "Срочный выезд 24/7", href: ROUTES.urgent },
  { label: "Наркотики (228 УК РФ)", href: ROUTES.drugs },
  { label: "Мошенничество (159 УК РФ)", href: ROUTES.fraud },
  { label: "Иные преступления", href: ROUTES.other },
];

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <BreadcrumbsMicrodata items={breadcrumbItems} />

      <main className="page page--home page--inner">
        <div className={s.top}>
          <Header active="blog" />
          <PageBanner
            title={<>Блог: комментарии к изменениям <br />законодательства и практике</>}
            subtitle="Разбор изменений УК и УПК РФ, свежих постановлений Пленума Верховного суда, резонансных дел и актуальной правоприменительной практики. Систематические разборы составов — в тематических хабах."
            image={{
              src: IMG.blogHero,
              box: { left: 653, top: -387, width: 799, height: 1075 },
              crop: { left: "0", top: "0", width: "100%", height: "100%" },
            }}
          />
        </div>

        <section className={s.grid} aria-label="Статьи">
          {POSTS.map((p) => (
            <BlogCard post={p} key={p.slug} />
          ))}
        </section>

        <section className={s.topics}>
          <h2 className="t-h2">Тематические разделы</h2>
          <div className={s.topicRow}>
            {TOPICS.map((t) => (
              <Link key={t.href} href={t.href} className={s.topic}>
                <p className="t-h3">{t.label}</p>
                <img src={IMG.arrowCircleTopic} alt="" />
              </Link>
            ))}
          </div>
        </section>

        <ConsultationCta />
        <SiteFooter />
      </main>
    </>
  );
}
