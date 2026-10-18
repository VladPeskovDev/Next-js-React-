import Link from "next/link";
import { IMG } from "@/lib/img";
import { ADDRESS, PHONE_TEL, PHONE_TEXT, ROUTES, TELEGRAM_URL, VK_URL } from "@/lib/site";
import s from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <div className={s.cols}>
          <div className={`${s.col} ${s.sections}`}>
            <p className={s.label}>Разделы</p>
            <Link className={s.link} href={ROUTES.home}>Главная</Link>
            <Link className={s.link} href={ROUTES.about}>Об адвокате</Link>
            <Link className={s.link} href={ROUTES.prices}>Цены</Link>
            <Link className={s.link} href={ROUTES.blog}>Блог</Link>
            <Link className={s.link} href={ROUTES.contacts}>Контакты</Link>
          </div>
          <div className={`${s.col} ${s.practice}`}>
            <p className={s.label}>Практика</p>
            <Link className={s.link} href={ROUTES.drugs}>Адвокат по наркотикам</Link>
            <Link className={s.link} href={ROUTES.fraud}>Адвокат по мошенничеству</Link>
            <Link className={s.link} href={ROUTES.urgent}>Адвокат 24/7</Link>
          </div>
          <div className={`${s.col} ${s.contact}`}>
            <p className={`${s.label} ${s.full}`}>Адрес</p>
            <p className={`t-body3 ${s.full}`}>{ADDRESS}</p>
            <Link href={ROUTES.contacts} className={s.secondary}>
              Как добраться
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
              <a className={`${s.social} ${s.socialPlain}`} href={VK_URL} target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте">
                <img src={IMG.vkCircle48} alt="" width={48} height={48} />
              </a>
              <a className={s.social} href="#" aria-label="Мессенджер">
                <span className={s.max}>
                  <img src={IMG.socialIcon} alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <p className={s.copy}>© 2026 Все права защищены | Ваш адвокат в Москве</p>
      </div>
    </footer>
  );
}
