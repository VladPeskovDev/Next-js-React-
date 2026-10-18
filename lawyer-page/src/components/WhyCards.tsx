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

export default function WhyCards({ title = "Почему доверители обращаются ко мне" }: { title?: string }) {
  const rows = [ITEMS.slice(0, 3), ITEMS.slice(3)];
  return (
    <section className={s.why}>
      <div className={s.ellipse} aria-hidden>
        <div className={s.ellipseRot}>
          <div className={s.ellipseBox}>
            <img src={IMG.ellipseBenefits} alt="" />
          </div>
        </div>
      </div>
      <h2 className="t-h2">{title}</h2>
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
