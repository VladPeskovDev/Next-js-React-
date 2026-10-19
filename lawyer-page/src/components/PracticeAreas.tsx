import { IMG } from "@/lib/img";
import { ROUTES } from "@/lib/site";
import Link from "next/link";
import s from "./PracticeAreas.module.css";

type Lang = "ru" | "en";

export default function PracticeAreas({ lang = "ru" }: { lang?: Lang }) {
  const t = lang === "en"
    ? {
        title: "Practice areas",
        desc:
          "Criminal defense at every stage — from pre-investigation checks to appeal. I take cases of any complexity, with a focus on drug cases (Art. 228 of the Russian Criminal Code) and fraud (Art. 159), plus other offenses.",
        urgentTitle: "Urgent 24/7 response",
        urgentText:
          "Arrest, search, interrogation, confrontation — I arrive anywhere in Moscow within 30–40 minutes. Round the clock, I pick up personally. First phone consultation is free.",
        drugsTitle: <>Drug cases <br />(Art. 228)</>,
        drugsText:
          "Defense under Articles 228 and 228.1: arrest, investigation, trial, appeal. Dead drops, large and especially large quantities. Right-to-silence strategy, house arrest instead of pre-trial detention.",
        fraudTitle: <>Fraud <br />(Art. 159)</>,
        fraudText:
          "Defense under Art. 159 and IT-related offenses: P2P crypto, money mules, credit fraud, computer crime. Bank account freezes (Federal Law 115-FZ), episode-by-episode work.",
        otherTitle: "Defense in other criminal cases",
        otherText:
          "Smuggling (Art. 226.1, 229.1, 200.1), theft and bank card theft (Art. 158), self-help (Art. 330), fights and bodily injury (Art. 111, 112, 115, 116, 119). All stages: investigation, trial, appeal.",
      }
    : {
        title: "Направления практики",
        desc:
          "Защита по уголовным делам на всех стадиях — от доследственной проверки до апелляции. Работаю с делами любой сложности, специализация — наркотики  (ст. 228 УК РФ) и мошенничество (ст. 159 УК РФ), а также иные составы.",
        urgentTitle: "Срочный выезд 24/7",
        urgentText:
          "Задержание, обыск, допрос, очная ставка — выезд по Москве в течение 30–40 минут. Круглосуточно, лично беру трубку. Первая консультация по телефону — бесплатно.",
        drugsTitle: <>Наркотики <br />(228 УК РФ)</>,
        drugsText:
          "Защита по 228, 228.1 УК РФ: задержание, следствие, суд, апелляция. Работа с закладками, крупными и особо крупными размерами. Тактика 51-й, домашний арест вместо СИЗО.",
        fraudTitle: <>Мошенничество <br />(159 УК РФ)</>,
        fraudText:
          "Защита по 159 УК РФ и IT-составам: P2P-крипта, дропы, кредитное мошенничество, компьютерные преступления. Блокировка счетов по 115-ФЗ, работа с эпизодами.",
        otherTitle: "Защита по иным составам УК РФ",
        otherText:
          "Контрабанда (226.1, 229.1, 200.1), кража и кража с банковской карты (158), самоуправство (330), драки и причинение вреда здоровью (111, 112, 115, 116, 119). На всех стадиях: следствие, суд первой инстанции, апелляция.",
      };

  return (
    <section className={s.wrap}>
      <div className={s.head}>
        <h2 className={`t-h2 ${s.title}`}>{t.title}</h2>
        <p className={`t-body2 ${s.desc}`}>{t.desc}</p>
      </div>
      <div className={s.cards}>
        <Link href={ROUTES.urgent} className={`${s.card} ${s.dark}`}>
          <div className={s.content}>
            <h3 className="t-h3-36">{t.urgentTitle}</h3>
            <p className="t-body3">{t.urgentText}</p>
          </div>
          <span className={s.arrow}>
            <img src={IMG.arrowCardLight} alt="" />
          </span>
        </Link>
        <Link href={ROUTES.drugs} className={s.card}>
          <div className={s.content}>
            <h3 className="t-h3-36">{t.drugsTitle}</h3>
            <p className="t-body3">{t.drugsText}</p>
          </div>
          <span className={s.arrow}>
            <img src={IMG.arrowCardDark} alt="" />
          </span>
        </Link>
        <Link href={ROUTES.fraud} className={s.card}>
          <div className={s.content}>
            <h3 className="t-h3-36">{t.fraudTitle}</h3>
            <p className="t-body3">{t.fraudText}</p>
          </div>
          <span className={s.arrow}>
            <img src={IMG.arrowCardDark} alt="" />
          </span>
        </Link>
        <Link href={ROUTES.other} className={s.card}>
          <div className={s.content}>
            <h3 className="t-h3-36">{t.otherTitle}</h3>
            <p className="t-body3">{t.otherText}</p>
          </div>
          <span className={s.arrow}>
            <img src={IMG.arrowCardDark} alt="" />
          </span>
        </Link>
      </div>
    </section>
  );
}
