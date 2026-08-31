const fs = require('node:fs');
const path = require('node:path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, 'content');
const APP_DIR = path.join(__dirname, 'src/app');

function mtimeIso(p) {
  try {
    return fs.statSync(p).mtime.toISOString();
  } catch {
    return null;
  }
}

// lastmod для статических страниц — берём mtime исходного файла
function staticPageLastmod(clean) {
  const staticMap = {
    '/': 'page.tsx',
    '/tseny/': 'tseny/page.tsx',
    '/kontakty/': 'kontakty/page.tsx',
  };
  if (staticMap[clean]) return mtimeIso(path.join(APP_DIR, staticMap[clean]));

  // хабы — используем mtime intro-файла контента, если есть
  const hubMatch = clean.match(/^\/([^/]+)\/$/);
  if (hubMatch) {
    const intro = mtimeIso(path.join(CONTENT_DIR, hubMatch[1], '_index.mdx'));
    if (intro) return intro;
    return mtimeIso(path.join(APP_DIR, '[hub]/page.tsx'));
  }
  return null;
}

// Хабы с enabled:false (см. src/lib/hubs.ts) — их индексы не должны попадать в sitemap
const DISABLED_HUBS = new Set(['ekonomika', 'sledstvie', 'praktika']);

// lastmod из frontmatter (updated || published) по URL /{hub}/{slug}/
const lastmodByUrl = new Map();
// Хабы с noindex:true в _index.mdx — не попадают в sitemap
const NOINDEX_HUBS = new Set();

function collectContentLastmod() {
  if (!fs.existsSync(CONTENT_DIR)) return;
  for (const hub of fs.readdirSync(CONTENT_DIR)) {
    const hubDir = path.join(CONTENT_DIR, hub);
    if (!fs.statSync(hubDir).isDirectory()) continue;
    for (const file of fs.readdirSync(hubDir)) {
      if (!file.endsWith('.mdx')) continue;
      const raw = fs.readFileSync(path.join(hubDir, file), 'utf8');
      const fm = matter(raw).data;
      if (file === '_index.mdx') {
        if (fm.noindex === true) NOINDEX_HUBS.add(hub);
        continue;
      }
      const slug = file.replace(/\.mdx$/, '');
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
  generateIndexSitemap: false,
  outDir: 'out',
  changefreq: 'monthly',
  priority: 0.5,
  sitemapSize: 5000,
  trailingSlash: true,
  exclude: [
    '/404',
    '/ob-advokate',
    '/ob-advokate/',
    ...Array.from(DISABLED_HUBS).flatMap((h) => [`/${h}`, `/${h}/*`]),
    ...Array.from(NOINDEX_HUBS).flatMap((h) => [`/${h}`, `/${h}/`]),
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
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'YandexAdditional', allow: '/' },
    ],
  },
  transform: async (config, url) => {
    const normalized = url.endsWith('/') ? url : url + '/';
    const clean = normalized.replace(/^https?:\/\/[^/]+/, '');

    let priority = 0.5;
    let changefreq = 'monthly';

    // Коммерческие посадки — высший приоритет для конверсионных страниц
    const commercialLandings = new Set([
      '/narkotiki/advokat-po-228/',
      '/moshennichestvo/advokat-po-159/',
    ]);

    if (clean === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (clean === '/srochnyj-vyezd/' || /^\/srochnyj-vyezd\/[^/]+\/$/.test(clean)) {
      // Хаб срочного выезда и все его подстраницы — коммерческие
      priority = 0.9;
      changefreq = 'weekly';
    } else if (commercialLandings.has(clean)) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (['/tseny/', '/kontakty/'].includes(clean)) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (/^\/(narkotiki|moshennichestvo|blog)\/$/.test(clean)) {
      priority = 0.7;
      changefreq = 'weekly';
    } else if (/^\/(narkotiki|moshennichestvo|blog)\/[^/]+\/$/.test(clean)) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    const lastmod = lastmodByUrl.get(clean) || staticPageLastmod(clean) || new Date().toISOString();

    return {
      loc: url,
      changefreq,
      priority,
      lastmod,
      alternateRefs: [],
    };
  },
};
