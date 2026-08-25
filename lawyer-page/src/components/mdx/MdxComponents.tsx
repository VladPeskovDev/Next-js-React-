import type { ReactNode } from 'react';
import styles from './Article.module.css';

type CalloutProps = { kind?: 'info' | 'warning' | 'law'; children: ReactNode };

export function Callout({ kind = 'info', children }: CalloutProps) {
  const cls =
    kind === 'warning' ? styles.calloutWarning : kind === 'law' ? styles.calloutLaw : styles.calloutInfo;
  return <div className={`${styles.callout} ${cls}`}>{children}</div>;
}

export function Warning({ children }: { children: ReactNode }) {
  return <Callout kind="warning">{children}</Callout>;
}

export function LawUpdate({ children }: { children: ReactNode }) {
  return <Callout kind="law">{children}</Callout>;
}

export function LawRef({ children }: { children: ReactNode }) {
  return <span className={styles.lawRef}>{children}</span>;
}

export function Disclaimer({ children }: { children?: ReactNode }) {
  return (
    <div className={styles.disclaimer}>
      {children || (
        <p>
          <strong>Важно:</strong> материал носит общий характер и не является индивидуальной юридической консультацией.
          За оценкой вашей ситуации обратитесь к адвокату.
        </p>
      )}
    </div>
  );
}

export const mdxComponents = {
  Callout,
  Warning,
  LawUpdate,
  LawRef,
  Disclaimer,
};
