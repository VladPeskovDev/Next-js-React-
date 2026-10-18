import { IMG } from "./img";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

/* 3 поста блога — совпадают с content/blog/*.mdx. */
export const POSTS: Post[] = [
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
    title: "Задержали — что делать: памятка от адвоката (48 часов, права)",
    excerpt: "Основания, права, телефонный звонок (ст. 96 УПК), сроки 48 и 72 часа, протокол задержания.",
    image: IMG.postDetained,
    date: "24 сентября 2026 · 4 мин",
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
