import Link from 'next/link';
import styles from './Article.module.css';

export type Crumb = { name: string; url: string };

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function BreadcrumbsMicrodata({ items }: { items: Crumb[] }) {
  const liHtml = items
    .map((c, i) => {
      const isLast = i === items.length - 1;
      const name = escapeHtml(c.name);
      const url = escapeHtml(c.url);
      const inner = isLast
        ? `<span itemprop="name">${name}</span>`
        : `<a href="${url}" itemprop="item"><span itemprop="name">${name}</span></a>`;
      return `<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">${inner}<meta itemprop="position" content="${i + 1}" /></li>`;
    })
    .join('');
  const html = `<ol itemscope itemtype="https://schema.org/BreadcrumbList" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">${liHtml}</ol>`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className={styles.breadcrumbs} aria-label="breadcrumb">
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={c.url}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {isLast ? (
                <span itemProp="name">{c.name}</span>
              ) : (
                <Link href={c.url} itemProp="item">
                  <span itemProp="name">{c.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(i + 1)} />
              {!isLast && <span className={styles.sep}> · </span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
