import Link from 'next/link';
import styles from './Article.module.css';
import { getRelated } from '@/lib/links';
import { HUBS, HubKey } from '@/lib/hubs';

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d);
  } catch {
    return iso;
  }
}

export function RelatedLinks({ hub, slug }: { hub: HubKey; slug: string }) {
  const items = getRelated(hub, slug, 3);
  if (!items.length) return null;
  return (
    <aside className={styles.related}>
      <h2>Читайте также</h2>
      <div className={styles.materialsGrid}>
        {items.map((r) => (
          <Link key={r.url} href={r.url} className={styles.materialCard}>
            <div className={styles.materialCardCategory}>{HUBS[r.hub].title}</div>
            <div className={styles.materialCardTitle}>{r.h1}</div>
            <div className={styles.materialCardDescription}>{r.description}</div>
            <hr className={styles.materialCardDivider} />
            <div className={styles.materialCardFooter}>
              <span className={styles.materialCardDate}>{formatDate(r.date)}</span>
              <span className={styles.materialCardReading}>{r.readingMinutes} мин →</span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
