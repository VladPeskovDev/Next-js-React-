import ContactButtons from "./ContactButtons";
import Header from "./Header";
import { IMG } from "@/lib/img";
import s from "./PracticeHero.module.css";

export type Stat = {
  value: string;
  label: React.ReactNode;
  icon: string;
  /** рамка картинки в иконке 64×64 и кадрирование */
  box: { left: number; top: number; width: number; height: number };
  crop?: { left: string; top: string; width: string; height: string };
  clip?: boolean;
};

export const DEFAULT_STATS: Stat[] = [
  { value: "24/7", label: "Режим работы", icon: IMG.statClock, box: { left: 2.84, top: 3.56, width: 58.378, height: 57.6 }, clip: true },
  {
    value: "от 25 000 ₽",
    label: "Выезд на место",
    icon: IMG.statVan,
    box: { left: -4, top: 4, width: 72, height: 57 },
    crop: { left: "-2.24%", top: "-0.78%", width: "104.58%", height: "101.05%" },
  },
  {
    value: "30–40 мин",
    label: <>ориентировочное<br />время выезда</>,
    icon: IMG.statBolt,
    box: { left: 2.84, top: 3.56, width: 58.378, height: 57.6 },
    clip: true,
  },
];

type Props = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  image: { src: string; left: number; top: number; width: number; height: number };
  helpTitle?: string;
  helpText?: React.ReactNode;
  stats?: Stat[];
};

export default function PracticeHero({
  title,
  subtitle,
  image,
  helpTitle = "Нужна помощь?",
  helpText = "При задержании, обыске или допросе — выезд адвоката 24/7 по Москве.",
  stats = DEFAULT_STATS,
}: Props) {
  return (
    <div className={s.top}>
      <Header active={null} />
      <section className={s.banner}>
        <div className={s.intro}>
          <h1 className="t-h1">{title}</h1>
          <p className="t-body1">{subtitle}</p>
        </div>
        <img
          className={s.img}
          src={image.src}
          alt=""
          aria-hidden
          style={{ left: image.left, top: image.top, width: image.width, height: image.height }}
        />
      </section>
      <div className={s.helpWrap}>
        <div className={s.helpRow}>
          <div className={s.help}>
            <div className={s.helpText}>
              <h2 className="t-h3">{helpTitle}</h2>
              <p className="t-body1">{helpText}</p>
            </div>
            <ContactButtons />
          </div>
          {stats.map((st) => (
            <div className={s.stat} key={st.value}>
              <div className={`${s.statIcon} ${st.clip ? s.clip : ""}`}>
                <div className={s.statIconBox} style={st.box}>
                  <img
                    src={st.icon}
                    alt=""
                    style={st.crop ?? { left: 0, top: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className={s.statText}>
                <p className={s.statValue}>{st.value}</p>
                <p className={s.statLabel}>{st.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
