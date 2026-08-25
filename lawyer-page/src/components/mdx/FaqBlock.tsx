import styles from './Article.module.css';
import type { FaqItem } from '@/lib/content';

export function FaqBlock({ items }: { items: FaqItem[] }) {
  if (!items?.length) return null;
  return (
    <section className={styles.body} id="faq">
      <h2>FAQ</h2>
      <div className={styles.faq}>
        {items.map((x) => (
          <details key={x.q} className={styles.faqItem}>
            <summary className={styles.faqQ}>{x.q}</summary>
            <p className={styles.faqA}>{x.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
