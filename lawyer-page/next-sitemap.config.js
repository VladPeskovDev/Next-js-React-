const fs = require('node:fs');
const path = require('node:path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, 'content');

// Хабы с enabled:false (см. src/lib/hubs.ts) — их индексы не должны попадать в sitemap
const DISABLED_HUBS = new Set(['ekonomika', 'sledstvie', 'praktika']);

// lastmod из frontmatter (updated || published) по URL /{hub}/{slug}/
const lastmodByUrl = new Map();

function collectContentLastmod() {
  if (!fs.existsSync(CONTENT_DIR)) return;
  for (const hub of fs.readdirSync(CONTENT_DIR)) {
    const hubDir = path.join(CONTENT_DIR, hub);
    if (!fs.statSync(hubDir).isDirectory()) continue;
    for (const file of fs.readdirSync(hubDir)) {
      if (!file.endsWith('.mdx') || file.startsWith('_')) continue;
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(hubDir, file), 'utf8');
      const fm = matter(raw).data;
      const date = fm.updated || fm.published;
      if (date) {
        const url = `/${hub}/${slug}/`;
        lastmodByUrl.set(url, new Date(date).toISOString());
      }
    }
  }
}

collectContentLastmod();

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://advokat-peskov.com',
  generateRobotsTxt: true,
  outDir: 'out',
  changefreq: 'monthly',
  priority: 0.5,
  sitemapSize: 5000,
  trailingSlash: true,
  exclude: [
    '/404',
    ...Array.from(DISABLED_HUBS).flatMap((h) => [`/${h}`, `/${h}/*`]),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
    ],
  },
  transform: async (config, url) => {
    const normalized = url.endsWith('/') ? url : url + '/';
    const clean = normalized.replace(/^https?:\/\/[^/]+/, '');

    let priority = 0.5;
    let changefreq = 'monthly';

    if (clean === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (/^\/uslugi\/[^/]+\/$/.test(clean)) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (clean === '/uslugi/') {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (['/ceny/', '/kontakty/', '/ob-advokate/'].includes(clean)) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (/^\/(narkotiki|moshennichestvo|situacii|blog)\/$/.test(clean)) {
      priority = 0.7;
      changefreq = 'weekly';
    } else if (/^\/(narkotiki|moshennichestvo|situacii|blog)\/[^/]+\/$/.test(clean)) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    const lastmod = lastmodByUrl.get(clean) || new Date().toISOString();

    return {
      loc: url,
      changefreq,
      priority,
      lastmod,
      alternateRefs: [],
    };
  },
};
