import Link from 'next/link';
import styles from './Article.module.css';

export function Cta({ children }: { children?: React.ReactNode }) {
  return (
    <div className={styles.cta}>
      {children ?? (
        <p>
          <strong>Нужна защита по уголовному делу?</strong> Подключусь на любой стадии, выстрою стратегию защиты,
          подготовлю ходатайства и представлю ваши интересы.
        </p>
      )}
      <p className={styles.linksRow}>
        <Link href="/kontakty">Связаться</Link>
        <Link href="/tseny">Цены</Link>
      </p>
    </div>
  );
}
