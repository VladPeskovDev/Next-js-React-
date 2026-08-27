import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { HUBS, HUB_KEYS, isEnabledHub, HubKey } from '@/lib/hubs';
import { getContentByHub, getHubIntro } from '@/lib/content';
import { Breadcrumbs } from '@/components/mdx/Breadcrumbs';
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
  return {
    title: `${cfg.title} — Адвокат Песков`,
    description: cfg.description,
    alternates: { canonical: url },
    openGraph: { type: 'website', url, title: cfg.title, description: cfg.description },
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

  return (
    <article className={`${styles.articlesContainer} ${styles.hubIndex}`}>
      <Breadcrumbs items={crumbs} />
      <h1 className={styles.articlesTitle}>{intro?.title || cfg.title}</h1>

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
          <ul>
            {items.map((c) => (
              <li key={c.frontmatter.slug}>
                <div className={styles.card}>
                  <Link href={`/${hub}/${c.frontmatter.slug}/`}>{c.frontmatter.h1 || c.frontmatter.title}</Link>
                  <div className={styles.cardDesc}>{c.frontmatter.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
