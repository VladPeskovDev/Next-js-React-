import Link from "next/link";
import { IMG } from "@/lib/img";
import { ADDRESS, PHONE_TEL, PHONE_TEXT, ROUTES, TELEGRAM_URL } from "@/lib/site";
import s from "./SiteFooter.module.css";

export default function SiteFooter({ lang = "ru" }: { lang?: "ru" | "en" }) {
  const t = lang === "en"
    ? {
        sections: "Sections", home: "Home", about: "About", prices: "Prices", blog: "Blog", contacts: "Contacts",
        practice: "Practice", drugs: "Drug cases", fraud: "Fraud cases", urgent: "24/7 urgent",
        address: "Address", directions: "Get directions",
        copy: "© 2026 All rights reserved | Your attorney in Moscow",
      }
    : {
        sections: "Разделы", home: "Главная", about: "Об адвокате", prices: "Цены", blog: "Блог", contacts: "Контакты",
        practice: "Практика", drugs: "Адвокат по наркотикам", fraud: "Адвокат по мошенничеству", urgent: "Адвокат 24/7",
        address: "Адрес", directions: "Как добраться",
        copy: "© 2026 Все права защищены | Ваш адвокат в Москве",
      };
  const addressText = lang === "en"
    ? "2 Marshala Rybalko St., bldg. 6, office 408, Moscow, Russia"
    : ADDRESS;
  const homeHref = lang === "en" ? "/en/" : ROUTES.home;

  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <div className={s.cols}>
          <div className={`${s.col} ${s.sections}`}>
            <p className={s.label}>{t.sections}</p>
            <Link className={s.link} href={homeHref}>{t.home}</Link>
            <Link className={s.link} href={ROUTES.about}>{t.about}</Link>
            <Link className={s.link} href={ROUTES.prices}>{t.prices}</Link>
            <Link className={s.link} href={ROUTES.blog}>{t.blog}</Link>
            <Link className={s.link} href={ROUTES.contacts}>{t.contacts}</Link>
          </div>
          <div className={`${s.col} ${s.practice}`}>
            <p className={s.label}>{t.practice}</p>
            <Link className={s.link} href={ROUTES.drugs}>{t.drugs}</Link>
            <Link className={s.link} href={ROUTES.fraud}>{t.fraud}</Link>
            <Link className={s.link} href={ROUTES.urgent}>{t.urgent}</Link>
          </div>
          <div className={`${s.col} ${s.contact}`}>
            <p className={`${s.label} ${s.full}`}>{t.address}</p>
            <p className={`t-body3 ${s.full}`}>{addressText}</p>
            <Link href={ROUTES.contacts} className={s.secondary}>
              {t.directions}
              <span className={s.icon16}>
                <img src={IMG.arrowSecondary} alt="" width={16} height={16} />
              </span>
            </Link>
          </div>
          <div className={`${s.col} ${s.contact}`}>
            <a className={s.phone} href={PHONE_TEL}>
              <span className={s.icon24}>
                <img src={IMG.addCall24} alt="" width={24} height={24} />
              </span>
              {PHONE_TEXT}
            </a>
            <div className={s.socials}>
              <a className={s.social} href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <span className={s.icon16}>
                  <span className={s.tg}>
                    <img src={IMG.telegramFooter} alt="" width={16} height={16} />
                  </span>
                </span>
              </a>
              {/* VK скрыт — потом решим на что менять. Иконка «Мессенджер» на месте. */}
              <a className={s.social} href="#" aria-label="Мессенджер">
                <span className={s.max}>
                  <img src={IMG.socialIcon} alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <p className={s.copy}>{t.copy}</p>
      </div>
    </footer>
  );
}
