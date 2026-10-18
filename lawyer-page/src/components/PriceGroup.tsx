import s from "./PriceGroup.module.css";

export type Price = { title: React.ReactNode; text: string; price: string } | null;

/** Группа тарифов: заголовок + ряды карточек. null в ряду — пустая ячейка (как в макете). */
export default function PriceGroup({ title, rows }: { title: string; rows: { height: number | (number | null)[]; items: Price[] }[] }) {
  return (
    <section className={s.group}>
      <h2 className="t-h2">{title}</h2>
      <div className={s.rows}>
        {rows.map((row, ri) => (
          <div className={s.row} key={ri}>
            {row.items.map((p, i) =>
              p ? (
                <div
                  className={`${s.card} ${Array.isArray(row.height) && row.height[i] == null ? s.natural : ""}`}
                  style={{ height: Array.isArray(row.height) ? row.height[i] ?? undefined : row.height }}
                  key={i}
                >
                  <div className={s.text}>
                    <h3 className="t-h3">{p.title}</h3>
                    <p className="t-body3">{p.text}</p>
                  </div>
                  <p className={s.price}>{p.price}</p>
                </div>
              ) : (
                <div className={s.spacer} key={i} aria-hidden />
              ),
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
