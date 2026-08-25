import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { HUBS, HUB_KEYS, HubKey, isHubKey } from './hubs';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export type FaqItem = { q: string; a: string };

export type Frontmatter = {
  title: string;
  description: string;
  h1?: string;
  slug: string;
  hub: HubKey;
  type?: 'sostav' | 'situaciya' | 'usluga' | 'keys' | 'article';
  published: string;
  updated?: string;
  keywords?: string;
  lawRefs?: string[];
  related?: string[];
  priceFrom?: number | null;
  faq?: FaqItem[];
  noindex?: boolean;
  ogImage?: string;
};

export type ContentItem = {
  frontmatter: Frontmatter;
  body: string;
  readingMinutes: number;
  filePath: string;
};

function readFileIfExists(p: string): string | null {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch {
    return null;
  }
}

function parseFile(hub: HubKey, slug: string): ContentItem | null {
  const filePath = path.join(CONTENT_DIR, hub, `${slug}.mdx`);
  const raw = readFileIfExists(filePath);
  if (raw == null) return null;
  const parsed = matter(raw);
  const fm = parsed.data as Partial<Frontmatter>;

  if (!fm.title || !fm.description || !fm.slug || !fm.hub || !fm.published) {
    throw new Error(`Missing required frontmatter in ${filePath}. Need: title, description, slug, hub, published.`);
  }
  if (fm.slug !== slug) {
    throw new Error(`Slug mismatch in ${filePath}: frontmatter slug "${fm.slug}" != filename "${slug}".`);
  }
  if (fm.hub !== hub) {
    throw new Error(`Hub mismatch in ${filePath}: frontmatter hub "${fm.hub}" != folder "${hub}".`);
  }
  if (!isHubKey(fm.hub)) {
    throw new Error(`Unknown hub "${fm.hub}" in ${filePath}.`);
  }

  return {
    frontmatter: fm as Frontmatter,
    body: parsed.content,
    readingMinutes: Math.max(1, Math.round(readingTime(parsed.content).minutes)),
    filePath,
  };
}

export function getAllContent(): ContentItem[] {
  const out: ContentItem[] = [];
  for (const hub of HUB_KEYS) {
    const dir = path.join(CONTENT_DIR, hub);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx') && !f.startsWith('_'));
    for (const file of files) {
      const slug = file.replace(/\.mdx$/, '');
      const item = parseFile(hub, slug);
      if (item) out.push(item);
    }
  }
  return out;
}

export type HubIntro = { title?: string; body: string } | null;

export function getHubIntro(hub: HubKey): HubIntro {
  const filePath = path.join(CONTENT_DIR, hub, '_index.mdx');
  const raw = readFileIfExists(filePath);
  if (raw == null) return null;
  const parsed = matter(raw);
  return { title: (parsed.data.title as string) || undefined, body: parsed.content };
}

export function getContentByHub(hub: HubKey): ContentItem[] {
  return getAllContent().filter((c) => c.frontmatter.hub === hub);
}

export function getContent(hub: HubKey, slug: string): ContentItem | null {
  return parseFile(hub, slug);
}

export function getAllHubSlugPairs(): { hub: HubKey; slug: string }[] {
  return getAllContent().map((c) => ({ hub: c.frontmatter.hub, slug: c.frontmatter.slug }));
}

export function hubTitle(hub: HubKey): string {
  return HUBS[hub].title;
}
