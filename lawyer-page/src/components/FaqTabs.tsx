"use client";

import { useState } from "react";
import s from "./FaqTabs.module.css";

export type FaqItem = { q: string; title: string; answer: React.ReactNode };

export default function FaqTabs({ items, heading }: { items: FaqItem[]; heading?: React.ReactNode }) {
  const [active, setActive] = useState(0);
  return (
    <section className={s.wrap} aria-label={typeof heading === "string" ? heading : "Вопросы и ответы"}>
      {/* Десктоп: табы слева, активная панель справа */}
      <div className={s.list} role="tablist">
        {items.map((x, i) => (
          <button
            key={x.q}
            role="tab"
            aria-selected={i === active}
            aria-controls={`faq-panel-${i}`}
            className={`${s.tab} ${i === active ? s.active : ""}`}
            onClick={() => setActive(i)}
          >
            {x.q}
          </button>
        ))}
      </div>
      <div className={s.panelSlot}>
        {items.map((it, i) => (
          <div
            key={i}
            id={`faq-panel-${i}`}
            role="tabpanel"
            aria-hidden={i !== active}
            className={`${s.panel} ${i === active ? s.panelActive : ""}`}
          >
            <p className={s.title}>{it.title}</p>
            <div className={s.answer}>{it.answer}</div>
          </div>
        ))}
      </div>

      {/* Мобильный: аккордеон <details> — работает без JS, SEO-friendly */}
      <div className={s.accordion}>
        {items.map((it, i) => (
          <details key={i} className={s.accItem}>
            <summary className={s.accSummary}>{it.q}</summary>
            <div className={s.accBody}>
              {it.title && <p className={s.accTitle}>{it.title}</p>}
              <div className={s.accAnswer}>{it.answer}</div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
