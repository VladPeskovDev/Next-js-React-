"use client";

import dynamic from "next/dynamic";

// Ленивая загрузка YandexMap
const YandexMap = dynamic(() => import("./YandexMap"), { ssr: false });

export default function ClientYandexMap() {
  return <YandexMap />;
}
