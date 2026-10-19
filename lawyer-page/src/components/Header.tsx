'use client';

import { useState } from "react";
import Link from "next/link";
import { NAV, NAV_EN, NavKey, PHONE_TEL, ROUTES } from "@/lib/site";
import s from "./Header.module.css";

type Props = { active: NavKey; className?: string; lang?: "ru" | "en" };

export default function Header({ active, className = "", lang = "ru" }: Props) {
  const [open, setOpen] = useState(false);
  const isEn = lang === "en";
  const items = isEn ? NAV_EN : NAV;

  const brandFull = isEn ? "Criminal Defense Attorney in Moscow" : "Адвокат по уголовным делам в Москве";
  const brandShort = isEn ? "Criminal Defense Attorney" : "Адвокат по уголовным делам";
  const callLabel = isEn ? "Request a call" : "Заказать звонок";
  const menuAria = isEn ? "Main menu" : "Основное меню";
  const burgerAria = isEn ? "Open menu" : "Открыть меню";
  const brandHref = isEn ? "/en/" : ROUTES.home;
  const switchHref = isEn ? "/" : "/en/";
  const switchLabel = isEn ? "RU" : "EN";
  const switchAria = isEn ? "Switch to Russian" : "Switch to English";

  return (
    <header className={`${s.header} ${className}`}>
      <Link href={brandHref} className={`${s.pill} ${s.brand}`}>
        <span className={s.brandFull}>{brandFull}</span>
        <span className={s.brandShort}>{brandShort}</span>
      </Link>

      <nav className={`${s.pill} ${s.nav}`} aria-label={menuAria}>
        {items.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`${s.link} ${active === item.key ? s.active : ""}`}
            aria-current={active === item.key ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Переключатель RU/EN на десктопе — только на главной.
          На внутренних страницах скрыт (клик с /kontakty/ не должен уводить на /en/ homepage).
          Для мобилки языковой пункт остаётся всегда внутри бургер-меню (см. ниже). */}
      {active === "home" && (
        <Link
          href={switchHref}
          className={`${s.pill} ${s.langSwitch}`}
          aria-label={switchAria}
          hrefLang={isEn ? "ru" : "en"}
        >
          {switchLabel}
        </Link>
      )}

      <a href={PHONE_TEL} className={s.call}>
        {callLabel}
      </a>

      {/* Бургер */}
      <button
        className={`${s.pill} ${s.burger} ${open ? s.burgerOpen : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={burgerAria}
        aria-expanded={open}
      >
        <span className={s.burgerLines}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {open && (
        <div className={s.mobileMenu}>
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`${s.mobileLink} ${active === item.key ? s.mobileLinkActive : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={PHONE_TEL} className={s.mobileCall} onClick={() => setOpen(false)}>
            {callLabel}
          </a>
        </div>
      )}
    </header>
  );
}
