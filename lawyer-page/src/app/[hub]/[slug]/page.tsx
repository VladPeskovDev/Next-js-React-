import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeFaqDetails from '@/lib/rehype-faq-details';

import { getAllHubSlugPairs, getContent } from '@/lib/content';
import { HUBS, isEnabledHub, HubKey } from '@/lib/hubs';
import { validateRelated } from '@/lib/links';
import { mdxComponents } from '@/components/mdx/MdxComponents';
import { Breadcrumbs, BreadcrumbsMicrodata } from '@/components/mdx/Breadcrumbs';
import { RelatedLinks } from '@/components/mdx/RelatedLinks';
import { Cta } from '@/components/mdx/Cta';
import { Disclaimer } from '@/components/mdx/MdxComponents';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import UrgentWidget from '@/components/UrgentWidget';
import styles from '@/components/mdx/Article.module.css';

const SITE_URL = 'https://advokat-peskov.com';

export function generateStaticParams() {
  const { ok, errors } = validateRelated();
  if (!ok) {
    console.error('validateRelated failed:\n' + errors.map((e) => '  - ' + e).join('\n'));
    throw new Error('Broken related refs. Fix them before build.');
  }
  return getAllHubSlugPairs();
}

export const dynamicParams = false;

type Params = { hub: string; slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { hub, slug } = await params;
  if (!isEnabledHub(hub)) return {};
  const item = getContent(hub as HubKey, slug);
  if (!item) return {};
  const fm = item.frontmatter;
  const url = `${SITE_URL}/${hub}/${slug}/`;
  return {
    title: fm.title,
    description: fm.description,
    keywords: fm.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: fm.title,
      description: fm.description,
      siteName: 'Адвокат Песков — уголовные дела',
      images: [
        fm.ogImage
          ? { url: fm.ogImage }
          : { url: '/1312.webp', width: 1000, height: 723, alt: 'Адвокат Песков В.С.' },
      ],
    },
    twitter: { card: 'summary', title: fm.title, description: fm.description },
    robots: fm.noindex ? { index: false, follow: false } : undefined,
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { hub, slug } = await params;

  if (!isEnabledHub(hub)) notFound();
  const item = getContent(hub as HubKey, slug);
  if (!item) notFound();

  const fm = item.frontmatter;
  const url = `${SITE_URL}/${hub}/${slug}/`;
  const hubTitle = HUBS[hub as HubKey].title;
  const h1 = fm.h1 || fm.title;

  const crumbs = [
    { name: 'Главная', url: '/' },
    { name: hubTitle, url: `/${hub}/` },
    { name: h1, url: `/${hub}/${slug}/` },
  ];

  const isService = fm.type === 'usluga';

  /* Article — всегда (контентная сущность с автором и датами).
     Service+Offer — дополнительно для коммерческих usluga-страниц. */
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: h1,
    description: fm.description,
    image: [fm.ogImage ? `${SITE_URL}${fm.ogImage}` : `${SITE_URL}/1312.webp`],
    datePublished: fm.published,
    dateModified: fm.updated || fm.published,
    inLanguage: 'ru-RU',
    mainEntityOfPage: url,
    author: { '@type': 'Person', name: 'Адвокат Песков В.С.', url: `${SITE_URL}/ob-advokate/` },
    publisher: { '@id': `${SITE_URL}#attorney` },
  };

  const serviceLd = isService
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: h1,
        name: fm.title,
        description: fm.description,
        url,
        provider: { '@id': `${SITE_URL}#attorney` },
        areaServed: [
          { '@type': 'City', name: 'Москва' },
          { '@type': 'Country', name: 'Россия' },
        ],
        ...(fm.priceFrom
          ? {
              offers: {
                '@type': 'Offer',
                priceCurrency: 'RUB',
                price: String(fm.priceFrom),
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'RUB',
                  minPrice: String(fm.priceFrom),
                },
                url: `${SITE_URL}/tseny/`,
                availability: 'https://schema.org/InStock',
              },
            }
          : {}),
      }
    : null;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url.startsWith('http') ? c.url : SITE_URL + c.url,
    })),
  };

  const faqLd = fm.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: fm.faq.map((x) => ({
          '@type': 'Question',
          name: x.q,
          acceptedAnswer: { '@type': 'Answer', text: x.a },
        })),
      }
    : null;

  return (
    <main className={`page page--inner ${styles.wrap}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {serviceLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      <Header active={null} />

      <article className={styles.articlesContainer}>
        <BreadcrumbsMicrodata items={crumbs} />
        <Breadcrumbs items={crumbs} />
        <h1 className={styles.articlesTitle}>{h1}</h1>
        <p className={styles.meta}>
          Обновлено: {fm.updated || fm.published} · {item.readingMinutes} мин чтения
        </p>

        <div className={styles.body}>
          <UrgentWidget />
          <MDXRemote
            source={item.body}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, rehypeFaqDetails] } }}
          />
        </div>

        <Disclaimer />
        <Cta />
        <RelatedLinks hub={hub as HubKey} slug={slug} />
      </article>

      <SiteFooter />
    </main>
  );
}
