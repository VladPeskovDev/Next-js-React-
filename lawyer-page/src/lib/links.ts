import { ContentItem, getAllContent, getContentByHub } from './content';
import { HubKey } from './hubs';

export type RelatedLink = {
  hub: HubKey;
  slug: string;
  title: string;
  h1: string;
  url: string;
};

function toLink(c: ContentItem): RelatedLink {
  const { hub, slug, title, h1 } = c.frontmatter;
  return {
    hub,
    slug,
    title,
    h1: h1 || title,
    url: `/${hub}/${slug}/`,
  };
}

function findAnywhere(slug: string): ContentItem | null {
  return getAllContent().find((c) => c.frontmatter.slug === slug) || null;
}

export function getRelated(hub: HubKey, slug: string, minCount = 3): RelatedLink[] {
  const self = getAllContent().find((c) => c.frontmatter.hub === hub && c.frontmatter.slug === slug);
  if (!self) return [];

  const declared = (self.frontmatter.related || [])
    .map((s) => findAnywhere(s))
    .filter((c): c is ContentItem => !!c)
    .map(toLink);

  if (declared.length >= minCount) return declared;

  const takenSlugs = new Set([slug, ...declared.map((l) => l.slug)]);
  const filler = getContentByHub(hub)
    .filter((c) => !takenSlugs.has(c.frontmatter.slug))
    .slice(0, minCount - declared.length)
    .map(toLink);

  return [...declared, ...filler];
}

export function getBacklinks(slug: string): RelatedLink[] {
  return getAllContent()
    .filter((c) => (c.frontmatter.related || []).includes(slug))
    .map(toLink);
}

export function findOrphans(): RelatedLink[] {
  const all = getAllContent();
  const referenced = new Set<string>();
  for (const c of all) for (const r of c.frontmatter.related || []) referenced.add(r);
  return all
    .filter((c) => !referenced.has(c.frontmatter.slug))
    .map(toLink);
}

export function validateRelated(): { ok: boolean; errors: string[] } {
  const errors: string[] = [];
  const known = new Set(getAllContent().map((c) => c.frontmatter.slug));
  for (const c of getAllContent()) {
    for (const ref of c.frontmatter.related || []) {
      if (!known.has(ref)) {
        errors.push(`${c.frontmatter.hub}/${c.frontmatter.slug}: related → "${ref}" not found`);
      }
    }
  }
  return { ok: errors.length === 0, errors };
}
