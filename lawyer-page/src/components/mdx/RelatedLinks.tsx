import Link from 'next/link';
import styles from './Article.module.css';
import { getRelated } from '@/lib/links';
import { HUBS, HubKey } from '@/lib/hubs';

export function RelatedLinks({ hub, slug }: { hub: HubKey; slug: string }) {
  const items = getRelated(hub, slug, 3);
  if (!items.length) return null;
  return (
    <aside className={styles.related}>
      <h2>Читайте также</h2>
      <ul>
        {items.map((r) => (
          <li key={r.url}>
            <span className={styles.hubTag}>{HUBS[r.hub].title}</span>
            <Link href={r.url}>{r.h1}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
