import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { HUBS, HUB_KEYS, isEnabledHub, HubKey } from '@/lib/hubs';
import { getContentByHub, getHubIntro } from '@/lib/content';
import { Breadcrumbs, BreadcrumbsMicrodata } from '@/components/mdx/Breadcrumbs';
import { mdxComponents } from '@/components/mdx/MdxComponents';
import styles from '@/components/mdx/Article.module.css';

const SITE_URL = 'https://advokat-peskov.com';

export function generateStaticParams() {
  return HUB_KEYS.filter((k) => HUBS[k].enabled).map((hub) => ({ hub }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ hub: string }> }): Promise<Metadata> {
  const { hub } = await params;
  if (!isEnabledHub(hub)) return {};
  const cfg = HUBS[hub as HubKey];
  const intro = getHubIntro(hub as HubKey);
  const url = `${SITE_URL}/${hub}/`;
  const metaTitle = intro?.title ?? `${cfg.title} — Адвокат Песков`;
  return {
    title: { absolute: metaTitle },
    description: cfg.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: metaTitle,
      description: cfg.description,
      siteName: 'Адвокат Песков — уголовные дела',
      images: [{ url: '/1312.webp', width: 1000, height: 723, alt: 'Адвокат Песков В.С.' }],
    },
    robots: intro?.noindex ? { index: false, follow: true } : undefined,
  };
}

export default async function HubIndexPage({ params }: { params: Promise<{ hub: string }> }) {
  const { hub } = await params;
  if (!isEnabledHub(hub)) notFound();

  const cfg = HUBS[hub as HubKey];
  const intro = getHubIntro(hub as HubKey);
  const items = getContentByHub(hub as HubKey).sort((a, b) =>
    (b.frontmatter.updated || b.frontmatter.published).localeCompare(
      a.frontmatter.updated || a.frontmatter.published
    )
  );

  const crumbs = [
    { name: 'Главная', url: '/' },
    { name: cfg.title, url: `/${hub}/` },
  ];

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: SITE_URL + c.url,
    })),
  };

  return (
    <article className={`${styles.articlesContainer} ${styles.hubIndex}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <BreadcrumbsMicrodata items={crumbs} />
      <Breadcrumbs items={crumbs} />
      <h1 className={styles.articlesTitle}>{intro?.h1 || intro?.title || cfg.title}</h1>

      <div className={styles.body}>
        {intro ? (
          <MDXRemote
            source={intro.body}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
          />
        ) : (
          <p>{cfg.description}</p>
        )}
      </div>

      {items.length > 0 && (
        <div className={styles.body}>
          <h2>Материалы раздела</h2>
          <div className={styles.materialsGrid}>
            {items.map((c) => {
              const date = c.frontmatter.updated || c.frontmatter.published;
              const formattedDate = (() => {
                try {
                  return new Intl.DateTimeFormat('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  }).format(new Date(date));
                } catch {
                  return date;
                }
              })();
              return (
                <Link
                  key={c.frontmatter.slug}
                  href={`/${hub}/${c.frontmatter.slug}/`}
                  className={styles.materialCard}
                >
                  <div className={styles.materialCardCategory}>{cfg.title}</div>
                  <div className={styles.materialCardTitle}>{c.frontmatter.h1 || c.frontmatter.title}</div>
                  <div className={styles.materialCardDescription}>{c.frontmatter.description}</div>
                  <hr className={styles.materialCardDivider} />
                  <div className={styles.materialCardFooter}>
                    <span className={styles.materialCardDate}>{formattedDate}</span>
                    <span className={styles.materialCardReading}>{c.readingMinutes} мин →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
}
