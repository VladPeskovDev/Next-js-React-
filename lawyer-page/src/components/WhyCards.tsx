import { IMG } from "@/lib/img";
import s from "@/app/page.module.css";

type Icon = { sprite: string; box: { left: number; top: number; w: number; h: number }; img: { left: string; w: string } };

const ITEMS: { title: string; text: string; icon: Icon }[] = [
  {
    title: "Честная оценка шансов",
    text: "Перед соглашением — чёткий анализ ситуации и реальный прогноз исхода. Без сладких обещаний.",
    icon: { sprite: IMG.benefitSprite1, box: { left: -5, top: 0, w: 101, h: 90 }, img: { left: "0%", w: "268.15%" } },
  },
  {
    title: "Прозрачная стоимость",
    text: "Цена фиксируется до начала работы. Никаких доплат «по ходу дела». Оплата поэтапно — за каждую стадию отдельно.",
    icon: { sprite: IMG.benefitSprite1, box: { left: 8, top: -1, w: 74, h: 92 }, img: { left: "-138.23%", w: "370.65%" } },
  },
  {
    title: "Срочный выезд 24/7",
    text: "Задержание, обыск, допрос — выезжаю в течение 30–40 минут по Москве. Круглосуточно, без выходных, лично беру трубку.",
    icon: { sprite: IMG.benefitSprite1, box: { left: 0, top: 1, w: 90, h: 88 }, img: { left: "-195.51%", w: "295.51%" } },
  },
  {
    title: "Опыт следствия изнутри",
    text: "До адвокатуры работал в органах предварительного следствия по 159 и 228 УК РФ. Знание процессуальной механики — на стороне защиты.",
    icon: { sprite: IMG.benefitSprite2, box: { left: -4, top: -2, w: 97, h: 94 }, img: { left: "-5.15%", w: "290.72%" } },
  },
  {
    title: "Адвокатская тайна",
    text: "Всё, что вы рассказываете адвокату, охраняется законом. Ни следствие, ни суд не вправе требовать эти сведения.",
    icon: { sprite: IMG.benefitSprite2, box: { left: 6, top: -2, w: 77, h: 94 }, img: { left: "-132.47%", w: "366.23%" } },
  },
  {
    title: "Работаю лично",
    text: "Без посредников и кол-центров. Я сам беру трубку, разбираю ситуацию и лично выезжаю к задержанному. Всегда один защитник.",
    icon: { sprite: IMG.benefitSprite2, box: { left: -7, top: -2, w: 103, h: 94 }, img: { left: "-173.79%", w: "273.79%" } },
  },
];

const ITEMS_EN: { title: string; text: string; icon: Icon }[] = [
  {
    title: "Honest case assessment",
    text: "Before signing a retainer — clear analysis and realistic forecast of the outcome. No sweet promises.",
    icon: ITEMS[0].icon,
  },
  {
    title: "Transparent pricing",
    text: "Fixed fees agreed before work starts. No surprise charges mid-case. Pay per stage separately.",
    icon: ITEMS[1].icon,
  },
  {
    title: "Urgent response 24/7",
    text: "Arrest, search, interrogation — I arrive within 30–40 minutes anywhere in Moscow. Round the clock, I pick up the phone personally.",
    icon: ITEMS[2].icon,
  },
  {
    title: "Insider experience of investigation",
    text: "Before private practice I worked in criminal investigation (Articles 159 & 228 of the Russian Criminal Code). I know procedural mechanics from the other side.",
    icon: ITEMS[3].icon,
  },
  {
    title: "Attorney-client privilege",
    text: "Everything you tell the attorney is protected by Russian law. Neither investigators nor the court can compel disclosure.",
    icon: ITEMS[4].icon,
  },
  {
    title: "English via certified interpreter (C1)",
    text: "Full support in English through a certified interpreter who works with me regularly. Comfortable and precise communication at every step — negotiations, interrogations, court hearings.",
    icon: ITEMS[5].icon,
  },
];

type Props = { title?: string; lang?: "ru" | "en" };

export default function WhyCards({ title, lang = "ru" }: Props) {
  const items = lang === "en" ? ITEMS_EN : ITEMS;
  const heading = title ?? (lang === "en" ? "Why clients choose me" : "Почему доверители обращаются ко мне");
  const rows = [items.slice(0, 3), items.slice(3)];
  return (
    <section className={s.why}>
      <div className={s.ellipse} aria-hidden>
        <div className={s.ellipseRot}>
          <div className={s.ellipseBox}>
            <img src={IMG.ellipseBenefits} alt="" />
          </div>
        </div>
      </div>
      <h2 className="t-h2">{heading}</h2>
      <div className={s.whyGrid}>
        {rows.map((row, ri) => (
          <div className={s.whyRow} key={ri}>
            {row.map((it) => (
              <div className={s.whyCard} key={it.title}>
                <div className={s.whyIcon}>
                  <div
                    className={s.whyIconInner}
                    style={{ left: it.icon.box.left, top: it.icon.box.top, width: it.icon.box.w, height: it.icon.box.h }}
                  >
                    <img src={it.icon.sprite} alt="" style={{ left: it.icon.img.left, width: it.icon.img.w }} />
                  </div>
                </div>
                <div className={s.whyText}>
                  <h3 className="t-h3-36">{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
