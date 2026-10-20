import s from "./PageBanner.module.css";

export type BannerImage = {
  src: string;
  /** Положение рамки картинки внутри баннера (px) */
  box: { left: number; top: number; width: number; height: number };
  /** Кадрирование картинки внутри рамки (%) */
  crop: { left: string; top: string; width: string; height: string };
};

export default function PageBanner({
  title,
  subtitle,
  chips = [],
  image,
  children,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  chips?: string[];
  image?: BannerImage;
  children?: React.ReactNode;
}) {
  return (
    <section className={s.banner}>
      <div className={`${s.content} ${subtitle ? s.withSub : ""}`}>
        <h1 className={`t-h1 ${s.title}`}>{title}</h1>
        {subtitle && <p className={`t-body1 ${s.sub}`}>{subtitle}</p>}
        {chips.length > 0 && (
          <div className={s.chips}>
            {chips.map((c) => (
              <span key={c} className={`t-body1 ${s.chip}`}>{c}</span>
            ))}
          </div>
        )}
        {children}
      </div>
      {image && (
        <div className={s.imgBox} style={image.box} aria-hidden>
          <img src={image.src} alt="" style={image.crop} />
        </div>
      )}
    </section>
  );
}
