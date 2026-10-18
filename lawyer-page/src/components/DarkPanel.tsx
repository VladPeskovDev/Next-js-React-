import { IMG } from "@/lib/img";
import s from "./DarkPanel.module.css";

export function DarkPanel({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <section className={`${s.panel} ${className}`} style={style}>
      <div className={s.ellipse} aria-hidden>
        <div className={s.rot}>
          <div className={s.box}>
            <img src={IMG.ellipsePrices} alt="" />
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}

export type GlassCard = { title: React.ReactNode; text: React.ReactNode };

/** Сетка «стеклянных» карточек на тёмной панели, по 3 в ряд. */
export function GlassGrid({ items, perRow = 3 }: { items: GlassCard[]; perRow?: number }) {
  const rows: GlassCard[][] = [];
  for (let i = 0; i < items.length; i += perRow) rows.push(items.slice(i, i + perRow));
  return (
    <div className={s.grid}>
      {rows.map((row, ri) => (
        <div className={s.row} key={ri}>
          {row.map((c, i) => (
            <div className={s.card} key={i}>
              <h3 className="t-h3-36">{c.title}</h3>
              <p className={s.cardText}>{c.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function PanelHead({ title, text }: { title: React.ReactNode; text?: React.ReactNode }) {
  return (
    <div className={s.head}>
      <h2 className="t-h2">{title}</h2>
      {text && <p className="t-body2">{text}</p>}
    </div>
  );
}
