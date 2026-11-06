import { IMG } from "./img";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

/* 5 постов блога — совпадают с content/blog/*.mdx. */
export const POSTS: Post[] = [
  {
    slug: "nuzhen-li-advokat",
    title: "Нужен ли адвокат по уголовному делу: когда без него нельзя",
    excerpt: "Нужен ли адвокат на беседе, допросе, обыске, при задержании и в суде, кому он обязателен и что теряет человек без защитника.",
    image: IMG.postNeedLawyer,
    date: "31 октября 2026 · 9 мин",
  },
  {
    slug: "kak-najti-advokata-po-ugolovnomu-delu",
    title: "Как найти хорошего адвоката по уголовному делу",
    excerpt: "Как проверить адвоката в реестре, чем он отличается от юриста, что спросить на первой встрече и какие красные флаги.",
    image: IMG.postFindLawyer,
    date: "14 октября 2026 · 8 мин",
  },
  {
    slug: "obysk-doma",
    title: "Обыск дома — что делать: инструкция от адвоката",
    excerpt: "Права при обыске, понятые, проверка постановления, изъятие техники — пошаговый чек-лист.",
    image: IMG.postSearch,
    date: "24 сентября 2026 · 4 мин",
  },
  {
    slug: "vpn-i-zakon",
    title: "VPN в России и закон — ответственность и роль адвоката",
    excerpt: "Что законно при использовании VPN: административная и уголовная ответственность, ст. 272, 273, 280, 207.3 УК РФ.",
    image: IMG.postVpn,
    date: "24 сентября 2026 · 5 мин",
  },
  {
    slug: "zaderzhali-chto-delat",
    title: "Задержали — что делать: права, сроки и протокол задержания",
    excerpt: "Что делать при задержании: чек-лист на первые часы, звонок близким, сроки 48 и 72 часа, что проверить в протоколе. Отдельно — для родственников.",
    image: IMG.postDetained,
    date: "5 ноября 2026 · 7 мин",
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
