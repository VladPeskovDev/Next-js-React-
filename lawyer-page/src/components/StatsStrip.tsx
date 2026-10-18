import { IMG } from "@/lib/img";
import s from "./StatsStrip.module.css";

type Item = {
  title: React.ReactNode;
  text: React.ReactNode;
  icon: { left: number; top: number; w: number; h: number; imgLeft: string; imgW: string };
};

export const ABOUT_STATS: Item[] = [
  {
    title: "12+ лет в уголовной практике",
    text: "Опыт работы с уголовными делами на всех стадиях процесса",
    icon: { left: 2.22, top: 2.78, w: 45.608, h: 45, imgLeft: "-8%", imgW: "409.6%" },
  },
  {
    title: <>Опыт следствия <br />изнутри</>,
    text: "Работал в органах предварительного следствия",
    icon: { left: 3.89, top: 4.44, w: 40, h: 41.111, imgLeft: "-114.77%", imgW: "428.92%" },
  },
  {
    title: "Работаю лично",
    text: "Cамостоятельно веду дела и общаюсь с клиентами",
    icon: { left: 2.22, top: 1.11, w: 40.877, h: 45.556, imgLeft: "-229.22%", imgW: "462.65%" },
  },
  {
    title: "200+ уголовных дел",
    text: "Более 200 проведённых уголовных дел за время адвокатской практики",
    icon: { left: -0.56, top: 2.22, w: 50.48, h: 45.556, imgLeft: "-264.63%", imgW: "374.63%" },
  },
];

export default function StatsStrip({ items = ABOUT_STATS, sprite = IMG.aboutIconsSprite }: { items?: Item[]; sprite?: string }) {
  return (
    <section className={s.strip}>
      <div className={s.row}>
        {items.map((it, i) => (
          <div className={s.item} key={i}>
            <div className={s.icon}>
              <div className={s.iconInner} style={{ left: it.icon.left, top: it.icon.top, width: it.icon.w, height: it.icon.h }}>
                <img src={sprite} alt="" style={{ left: it.icon.imgLeft, width: it.icon.imgW }} />
              </div>
            </div>
            <div className={s.text}>
              <p className="t-h3">{it.title}</p>
              <p className="t-body3">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
