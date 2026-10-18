import s from "./ProcessSteps.module.css";

export type Step = { title: React.ReactNode; text: React.ReactNode };

export default function ProcessSteps({
  title = "Как проходит работа",
  steps,
  className = "",
  widths,
}: {
  title?: React.ReactNode;
  steps: Step[];
  className?: string;
  /** Фиксированные ширины колонок из макета (null — колонка тянется) */
  widths?: (number | null)[];
}) {
  return (
    <section className={`${s.wrap} ${className}`}>
      <h2 className="t-h2">{title}</h2>
      <div className={s.steps}>
        {steps.map((st, i) => (
          <div className={s.step} key={i} style={widths?.[i] ? { flex: `0 0 ${widths[i]}px` } : undefined}>
            <p className={s.num}>{String(i + 1).padStart(2, "0")}</p>
            <h3 className="t-h3">{st.title}</h3>
            <p className="t-body3">{st.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
