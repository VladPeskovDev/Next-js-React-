import Link from 'next/link';
import styles from './Article.module.css';

export type Crumb = { name: string; url: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className={styles.breadcrumbs} aria-label="breadcrumb">
      <ol>
        {items.map((c, i) => (
          <li key={c.url}>
            {i < items.length - 1 ? <Link href={c.url}>{c.name}</Link> : <span>{c.name}</span>}
            {i < items.length - 1 && <span className={styles.sep}> · </span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
