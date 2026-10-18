'use client';

import { useState } from "react";
import Link from "next/link";
import { NAV, NavKey, PHONE_TEL, ROUTES } from "@/lib/site";
import s from "./Header.module.css";

export default function Header({ active, className = "" }: { active: NavKey; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`${s.header} ${className}`}>
      <Link href={ROUTES.home} className={`${s.pill} ${s.brand}`}>
        {/* Полный вариант — показывается на десктопе */}
        <span className={s.brandFull}>Адвокат по уголовным делам в Москве</span>
        {/* Короткий вариант — показывается на мобильном (≤767px) */}
        <span className={s.brandShort}>Адвокат по уголовным делам</span>
      </Link>

      <nav className={`${s.pill} ${s.nav}`} aria-label="Основное меню">
        {NAV.map((item) => (
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

      <a href={PHONE_TEL} className={s.call}>
        Заказать звонок
      </a>

      {/* Бургер — виден только на мобильном (CSS). При открытии показывает выпадающее меню */}
      <button
        className={`${s.pill} ${s.burger} ${open ? s.burgerOpen : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Открыть меню"
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
          {NAV.map((item) => (
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
            Заказать звонок
          </a>
        </div>
      )}
    </header>
  );
}
