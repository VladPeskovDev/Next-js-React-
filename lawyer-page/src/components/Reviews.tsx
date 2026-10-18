import { IMG } from "@/lib/img";
import LawyerPhoto from "./LawyerPhoto";
import s from "./Reviews.module.css";

export type Review = { topic: string; text: string; name: string; rating?: string; url?: string };

const YANDEX_REVIEWS_URL =
  "https://yandex.ru/maps/org/advokat_peskov_v_s_/188017863893/reviews/";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82+%D0%9F%D0%B5%D1%81%D0%BA%D0%BE%D0%B2+%D0%92.%D0%A1./@55.7981739,37.4932198,461m/data=!3m1!1e3!4m6!3m5!1s0x46b549d8bc932b7b:0x84f43677f11ea3e6!8m2!3d55.7981709!4d37.4957947!16s%2Fg%2F11zz0kcjjm";

export const DEFAULT_REVIEWS: Review[] = [
  {
    topic: "Консультация",
    text: "Обратился в сложной ситуации по уголовному делу. С первого разговора Владислав чётко разложил перспективы, без «всё будет отлично» и без запугивания. Работал лично, без помощников, всегда на связи. По результату — минимально возможное наказание для моей ситуации. Рекомендую тем, кто хочет понимать, что происходит, а не просто отдать всё «на откуп».",
    name: "Юрий Шмелев",
    url: YANDEX_REVIEWS_URL,
  },
  {
    topic: "Юридическая помощь",
    text: "Обратилась недавно к Владиславу за юридической помощью. С самого начала он внимательно разобрался в ситуации, подробно объяснил все возможные варианты и ответил на все мои вопросы. Владислав всегда был на связи, давал понятные рекомендации и действительно был заинтересован в том, чтобы решить дело наилучшим образом. Очень благодарна за помощь и могу смело рекомендовать Владислава как грамотного и надежного адвоката!",
    name: "Дарья П.",
    url: YANDEX_REVIEWS_URL,
  },
  {
    topic: "Юридическая помощь",
    text: "Единственный профессионал, без внушения клиенту пафосных речей и введения в заблуждение по поводу дальнейших перспектив в уголовном деле. Договор отрабатывает на все сто процентов. Год защищал по уголовному делу, и добился своего. Огромная благодарность за профессионализм!",
    name: "Jerzy Hectic",
    url: GOOGLE_REVIEWS_URL,
  },
];

function PlatformRating({ count = 7 }: { count?: number }) {
  return (
    <div className={s.platformRating}>
      <span className={s.star}>
        <Star />
        5.0
      </span>
      <span>·</span>
      <span>{count} отзывов</span>
    </div>
  );
}

const GOOGLE_URL =
  "https://www.google.com/maps/place/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82+%D0%9F%D0%B5%D1%81%D0%BA%D0%BE%D0%B2+%D0%92.%D0%A1./@55.7981739,37.4932198,461m/data=!3m1!1e3!4m6!3m5!1s0x46b549d8bc932b7b:0x84f43677f11ea3e6!8m2!3d55.7981709!4d37.4957947!16s%2Fg%2F11zz0kcjjm";
const YANDEX_URL =
  "https://yandex.ru/maps/org/advokat_peskov_v_s_/188017863893/?ll=37.495626%2C55.798116&z=16";

function Star() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" fill="#FFC107" />
    </svg>
  );
}

function ReviewCard({ r }: { r: Review }) {
  const content = (
    <>
      <LawyerPhoto width={60} height={48} />
      <p className="t-h3">{r.topic}</p>
      <p className="t-body3">{r.text}</p>
      <div className={s.footer}>
        <p className={s.name}>{r.name}</p>
        <span className={s.cardRating}>
          <Star />
          {r.rating ?? "5.0"}
        </span>
      </div>
    </>
  );
  if (r.url) {
    return (
      <a
        className={`${s.card} ${s.cardLink}`}
        href={r.url}
        target="_blank"
        rel="noopener nofollow"
        aria-label={`Открыть оригинал отзыва (${r.name})`}
      >
        {content}
      </a>
    );
  }
  return <article className={s.card}>{content}</article>;
}

export default function Reviews({ items = DEFAULT_REVIEWS, title = "Отзывы" }: { items?: Review[]; title?: string }) {
  return (
    <section className={s.reviews}>
      <div className={s.head}>
        <h2 className={`t-h2 ${s.title}`}>{title}</h2>
        <div className={s.platforms}>
          <a
            className={s.platform}
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener nofollow"
          >
            <img src={IMG.googleMaps} alt="Google Maps" style={{ width: 164.417, height: 31.601 }} />
            <PlatformRating count={7} />
          </a>
          <a
            className={s.platform}
            href={YANDEX_URL}
            target="_blank"
            rel="noopener nofollow"
          >
            <img src={IMG.yandexMaps} alt="Яндекс Карты" style={{ width: 164, height: 34.104 }} />
            <PlatformRating count={7} />
          </a>
        </div>
      </div>
      <div className={`${s.track} no-scrollbar`}>
        {items.map((r) => (
          <ReviewCard r={r} key={r.name + r.topic} />
        ))}
      </div>
    </section>
  );
}
