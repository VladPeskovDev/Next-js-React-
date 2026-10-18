import { IMG } from "@/lib/img";
import { PHONE_TEL, PHONE_TEXT, TELEGRAM_URL, VK_URL, WHATSAPP_URL } from "@/lib/site";
import s from "./ContactButtons.module.css";

function TgIcon() {
  return (
    <span className={s.icon}>
      <span className={s.tg}>
        <img src={IMG.telegram16} alt="" width={16} height={16} />
      </span>
    </span>
  );
}

/** Кнопка телефона + три круглые кнопки мессенджеров (Telegram, VK, WhatsApp). */
export default function ContactButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`${s.row} ${className}`}>
      <a href={PHONE_TEL} className={s.phone}>
        <span className={s.icon}>
          <img src={IMG.addCall16} alt="" width={16} height={16} />
        </span>
        {PHONE_TEXT}
      </a>
      <a href={TELEGRAM_URL} className={s.round} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
        <TgIcon />
      </a>
      <a href={VK_URL} className={s.round} target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте">
        <span className={s.icon}>
          <img src={IMG.vk16} alt="" width={16} height={16} />
        </span>
      </a>
      <a href={WHATSAPP_URL} className={s.round} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <span className={s.icon}>
          <img src={IMG.whatsapp16} alt="" width={16} height={16} />
        </span>
      </a>
    </div>
  );
}
