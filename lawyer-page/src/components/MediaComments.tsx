import { IMG } from "@/lib/img";
import s from "./MediaComments.module.css";

type Logo = { src: string; w: number; h: number; flip?: boolean };
type PhotoBlock = { src: string; alt: string; source: string; linkLabel?: string };
export type MediaItem = {
  title: React.ReactNode;
  href?: string;
  logo?: Logo;
  /** small = 108px-блок + стрелка, wide = 178.5px-блок + стрелка, big = большой логотип без стрелки, photo = фото сверху */
  layout: "small" | "wide" | "big" | "photo";
  titleStyle?: "h3" | "h3-36" | "inter";
  linkIcon?: string;
  photo?: PhotoBlock;
};

export const DEFAULT_MEDIA: MediaItem[] = [
  {
    title: "Интервью по резонансному ДТП (ст. 264 УК РФ)",
    layout: "photo",
    href: "https://360.ru/",
    photo: {
      src: "/peskov-tv-interview.jpg",
      alt: "Адвокат Песков В.С. — интервью телеканалу «360°» по ст. 264 УК РФ",
      source: "Телеканал «360°»",
      linkLabel: "На сайт телеканала →",
    },
  },
  {
    title: "Когда работа курьера становится мошенничеством",
    layout: "big",
    titleStyle: "inter",
    href: "https://zakon.ru/blog/2026/10/16/kurer_na_million_pochemu_obychnaya_dostavka_mozhet_zakonchitsya_obvineniem_v_moshennichestve",
    logo: { src: IMG.logoZakonRu, w: 200, h: 98.5 },
  },
  {
    title: "Что делать при банкротстве брокера",
    layout: "wide",
    href: "https://news.ru/economics/advokat-rasskazal-chto-delat-pri-bankrotstve-brokera",
    logo: { src: IMG.logoNews, w: 153.999, h: 26.214 },
  },
  {
    title: "Публикация в АН «Аргументы недели»",
    layout: "wide",
    href: "https://argumenti.ru/education/2022/02/759627",
    logo: { src: IMG.logoArgumenty, w: 171, h: 25.2, flip: true },
  },
  {
    title: "Комментарий адвоката по актуальным вопросам",
    layout: "small",
    href: "https://360.ru/news/dengi/advokat-peskov/",
    logo: { src: IMG.logo360, w: 100, h: 42.859 },
    linkIcon: IMG.mediaLink2,
  },
  {
    title: "Когда учитель может применить силу к ученику",
    layout: "big",
    titleStyle: "inter",
    href: "https://news.ru/society/advokat-rasskazal-kogda-uchitel-mozhet-primenit-silu-k-ucheniku",
    logo: { src: IMG.logoWide, w: 308, h: 52.428 },
  },
  {
    title: "Педагог и применение силы к ученику (перепечатка)",
    layout: "big",
    titleStyle: "inter",
    href: "https://ntagil.bezformata.com/listnews/mozhet-primenyat-silu-k-ucheniku/102503716/",
    logo: { src: IMG.logo7vfm, w: 103.612, h: 95.18 },
  },
  {
    title: "Как провести рефинансирование ипотечного кредита",
    layout: "big",
    titleStyle: "inter",
    href: "https://360.ru/news/obschestvo/advokat-objasnil-kak-provesti-refinansirovanie-ipotechnogo-kredita/",
    logo: { src: IMG.logoGroup1, w: 200, h: 85.719 },
  },
  {
    title: "Как рефинансировать ипотечный кредит",
    layout: "big",
    titleStyle: "inter",
    href: "https://news.ru/economics/yurist-rasskazal-kak-refinansirovat-ipotechnyj-kredit",
    logo: { src: IMG.logoWide, w: 308, h: 52.428 },
  },
  {
    title: "Что делать при банкротстве брокера (перепечатка)",
    layout: "big",
    titleStyle: "inter",
    href: "https://finance.rambler.ru/markets/48232719-advokat-rasskazal-chto-delat-pri-bankrotstve-brokera/",
    logo: { src: IMG.logoRambler, w: 249, h: 60.242 },
  },
];

function LogoImg({ logo }: { logo: Logo }) {
  return (
    <img
      src={logo.src}
      alt=""
      className={logo.flip ? s.flip : undefined}
      style={{ width: logo.w, height: logo.h, flexShrink: 0, maxWidth: "none" }}
    />
  );
}

type Props = { title?: string; text?: string; items?: MediaItem[]; className?: string };

export default function MediaComments({
  title = "Экспертные комментарии в СМИ",
  text = "Регулярно даю экспертные комментарии по правовым вопросам федеральным и региональным СМИ. Ниже — публикации, где мои комментарии использованы в качестве экспертного мнения адвоката.",
  items = DEFAULT_MEDIA,
  className = "",
}: Props) {
  return (
    <section className={`${s.media} ${className}`}>
      <div className={s.head}>
        <h2 className="t-h2">{title}</h2>
        <p className="t-body2">{text}</p>
      </div>
      <div className={`${s.track} no-scrollbar`}>
        {items.map((m, i) => {
          const titleCls =
            m.titleStyle === "inter" ? s.titleInter : m.titleStyle === "h3-36" ? "t-h3-36" : "t-h3";
          const inner =
            m.layout === "photo" && m.photo ? (
              <>
                <img
                  src={m.photo.src}
                  alt={m.photo.alt}
                  className={s.photo}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
                <div className={s.photoContent}>
                  <p className={s.photoSource}>{m.photo.source}</p>
                  <p className={`${s.title} ${titleCls}`}>{m.title}</p>
                  {m.photo.linkLabel && <span className={s.photoLink}>{m.photo.linkLabel}</span>}
                </div>
              </>
            ) : (
              <>
                <p className={`${s.title} ${titleCls}`}>{m.title}</p>
                {m.layout === "big" ? (
                  <div className={s.pubBig}>{m.logo && <LogoImg logo={m.logo} />}</div>
                ) : (
                  <div className={s.foot}>
                    <div className={m.layout === "small" ? s.pubSmall : s.pubWide}>
                      {m.logo && <LogoImg logo={m.logo} />}
                    </div>
                  </div>
                )}
              </>
            );
          const className = `${s.card} ${m.layout === "big" ? s.cardAlt : ""} ${
            m.layout === "photo" ? s.cardPhoto : ""
          } ${m.href ? s.cardLink : ""}`;
          return m.href ? (
            <a
              key={i}
              className={className}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={typeof m.title === "string" ? m.title : undefined}
            >
              {inner}
            </a>
          ) : (
            <article key={i} className={className}>{inner}</article>
          );
        })}
      </div>
    </section>
  );
}
