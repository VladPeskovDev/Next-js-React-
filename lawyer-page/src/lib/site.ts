export const PHONE_TEXT = "+ 7 916 578 09 36";
export const PHONE_TEL = "tel:+79165780936";
export const TELEGRAM_URL = "https://t.me/Peskov_Vladislav";
export const VK_URL = "https://vk.com/";
export const WHATSAPP_URL = "https://wa.me/79165780936";
export const ADDRESS = "г. Москва, ул. Маршала Рыбалко 2, корп.6, оф.408";
export const MAP_URL = "https://yandex.ru/maps/?text=" + encodeURIComponent("Москва, ул. Маршала Рыбалко 2 к6");

/* URL-маршруты сайта. Соответствуют существующим страницам в проекте. */
export const ROUTES = {
  home: "/",
  about: "/ob-advokate/",
  prices: "/tseny/",
  blog: "/blog/",
  contacts: "/kontakty/",
  drugs: "/narkotiki/",
  fraud: "/moshennichestvo/",
  urgent: "/srochnyj-vyezd/",
  other: "/drugie-prestupleniya/",
} as const;

export type NavKey = "home" | "about" | "prices" | "blog" | "contacts" | null;

export const NAV: { key: Exclude<NavKey, null>; label: string; href: string }[] = [
  { key: "home", label: "Главная", href: ROUTES.home },
  { key: "about", label: "Об адвокате", href: ROUTES.about },
  { key: "prices", label: "Цены", href: ROUTES.prices },
  { key: "blog", label: "Блог", href: ROUTES.blog },
  { key: "contacts", label: "Контакты", href: ROUTES.contacts },
];
