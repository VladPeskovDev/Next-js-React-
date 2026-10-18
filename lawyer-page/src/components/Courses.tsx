"use client";

import { useState } from "react";
import s from "./Courses.module.css";

type Course = { tab: string; date: string; org: React.ReactNode; topics: string[]; image: string };

const ORG = <>Федеральная палата <br />адвокатов РФ</>;

/** Реальные сертификаты адвоката Пескова В.С. (мои)*/
const COURSES: Course[] = [
  {
    tab: "01 ОКТ 2025",
    date: "01 октября 2025 · 6 ч",
    org: ORG,
    topics: [
      "Практические вопросы судебного доказывания по гражданским делам (часть 3)",
      "Новые нормы миграционного законодательства: практика правоприменения",
      "Соглашение об оказании юридической помощи: правовая природа и условия",
    ],
    image: "/certificate-previews/cert-04.webp",
  },
  {
    tab: "10 СЕН 2025",
    date: "10 сентября 2025 · 6 ч",
    org: ORG,
    topics: [
      "Практические вопросы судебного доказывания по гражданским делам (часть 1)",
      "Обжалование результатов экологического надзора в практике судов",
      "Постановление Пленума ВС РФ о возвращении уголовного дела прокурору",
    ],
    image: "/certificate-previews/cert-05.webp",
  },
  {
    tab: "22 СЕН 2025 · ч.1",
    date: "22 сентября 2025 · 6 ч",
    org: ORG,
    topics: [
      "Практические вопросы судебного доказывания по гражданским делам (часть 2)",
      "Наследование: базовые вопросы и подводные камни",
      "Разрешение спортивных споров: теория и практика",
    ],
    image: "/certificate-previews/cert-10.webp",
  },
  {
    tab: "22 СЕН 2025 · ч.2",
    date: "22 сентября 2025 · 6 ч",
    org: ORG,
    topics: [
      "Практические вопросы судебного доказывания по гражданским делам (часть 4)",
      "Незаконное воздействие на членов судебных заседателей и защита от него",
      "Альтернативные процедуры разрешения споров, переговоры",
    ],
    image: "/certificate-previews/cert-01.webp",
  },
  {
    tab: "10 ДЕК 2025",
    date: "10 декабря 2025 · 6 ч",
    org: ORG,
    topics: [
      "Правовые основы производства медицинской экспертизы",
      "Защита и самозащита прав адвокатов при вызове на допрос",
      "Отвод адвоката как способ нарушения профессиональных прав",
    ],
    image: "/certificate-previews/cert-02.webp",
  },
  {
    tab: "16 СЕН 2026",
    date: "16 сентября 2026 · 6 ч",
    org: ORG,
    topics: [
      "Биомеханика падения из положения стоя (судебно-медицинское значение)",
      "Выделение супружеской доли и наследование бизнеса",
      "Участие адвоката в делах о правовом статусе граждан (дееспособность)",
    ],
    image: "/certificate-previews/cert-07.webp",
  },
  {
    tab: "17 СЕН 2026",
    date: "17 сентября 2026 · 2 ч",
    org: ORG,
    topics: [
      "Соблюдение адвокатами требований 115-ФЗ (ПОД/ФТ)",
      "Противодействие легализации (отмыванию) доходов, финансированию терроризма",
    ],
    image: "/certificate-previews/cert-03.webp",
  },
  {
    tab: "07 ОКТ 2026",
    date: "07 октября 2026 · 6 ч",
    org: ORG,
    topics: [
      "Основы международного коммерческого арбитража (МКА)",
      "Арбитражный процесс: этапы и стадии",
      "Особенности рассмотрения трудовых допинговых споров с участием профессиональных спортсменов",
      "Директор под ударом. Взыскать убытки или добиться уголовного преследования: корпоративный конфликт на стыке арбитражного и уголовного процесса",
    ],
    image: "/certificate-previews/cert-11.webp",
  },
];

export default function Courses() {
  const [active, setActive] = useState(0);
  return (
    <section className={s.wrap}>
      <div className={s.head}>
        <div>
          <h2 className={s.h}>Повышение квалификации</h2>
          <p className={s.sub}>44 академических часа · 8 программ · 2025–2026</p>
        </div>
        <p className={s.sub}>
          Повышение квалификации в Федеральной палате адвокатов РФ по вопросам судебного доказывания, уголовного процесса и другим актуальным направлениям юридической практики.
        </p>
      </div>
      <div className={s.body}>
        <div className={s.tabs} role="tablist" aria-label="Программы повышения квалификации">
          {COURSES.map((it, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-controls={`course-panel-${i}`}
              className={`${s.tab} ${i === active ? s.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              {it.tab}
            </button>
          ))}
        </div>
        <div className={s.panelSlot}>
          {COURSES.map((c, i) => (
            <div
              key={i}
              id={`course-panel-${i}`}
              role="tabpanel"
              aria-hidden={i !== active}
              className={`${s.panel} ${i === active ? s.panelActive : ""}`}
            >
              <div className={s.info}>
                <div className={s.meta}>
                  <p className="t-body3">{c.date}</p>
                  <p className={s.org}>{c.org}</p>
                </div>
                <div className={s.topics}>
                  <p className="t-body1">Темы программы:</p>
                  <ul className={s.list}>
                    {c.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <img className={s.cert} src={c.image} alt={`Сертификат о повышении квалификации, ${c.tab.trim()}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
