import { IMG } from "@/lib/img";
import { ROUTES } from "@/lib/site";
import Link from "next/link";
import s from "./PracticeAreas.module.css";

export default function PracticeAreas() {
  return (
    <section className={s.wrap}>
      <div className={s.head}>
        <h2 className={`t-h2 ${s.title}`}>Направления практики</h2>
        <p className={`t-body2 ${s.desc}`}>
          {
            "Защита по уголовным делам на всех стадиях — от доследственной проверки до апелляции. Работаю с делами любой сложности, специализация — наркотики  (ст. 228 УК РФ) и мошенничество (ст. 159 УК РФ), а также иные составы."
          }
        </p>
      </div>
      <div className={s.cards}>
        <Link href={ROUTES.urgent} className={`${s.card} ${s.dark}`}>
          <div className={s.content}>
            <h3 className="t-h3-36">Срочный выезд 24/7</h3>
            <p className="t-body3">
              Задержание, обыск, допрос, очная ставка — выезд по Москве в
              течение 30–40 минут. Круглосуточно, лично беру трубку. Первая
              консультация по телефону — бесплатно.
            </p>
          </div>
          <span className={s.arrow}>
            <img src={IMG.arrowCardLight} alt="" />
          </span>
        </Link>
        <Link href={ROUTES.drugs} className={s.card}>
          <div className={s.content}>
            <h3 className="t-h3-36">
              Наркотики <br />
              (228 УК РФ)
            </h3>
            <p className="t-body3">
              Защита по 228, 228.1 УК РФ: задержание, следствие, суд, апелляция.
              Работа с закладками, крупными и особо крупными размерами. Тактика
              51-й, домашний арест вместо СИЗО.
            </p>
          </div>
          <span className={s.arrow}>
            <img src={IMG.arrowCardDark} alt="" />
          </span>
        </Link>
        <Link href={ROUTES.fraud} className={s.card}>
          <div className={s.content}>
            <h3 className="t-h3-36">
              Мошенничество <br />
              (159 УК РФ)
            </h3>
            <p className="t-body3">
              Защита по 159 УК РФ и IT-составам: P2P-крипта, дропы, кредитное
              мошенничество, компьютерные преступления. Блокировка счетов по
              115-ФЗ, работа с эпизодами.
            </p>
          </div>
          <span className={s.arrow}>
            <img src={IMG.arrowCardDark} alt="" />
          </span>
        </Link>
        <Link href={ROUTES.other} className={s.card}>
          <div className={s.content}>
            <h3 className="t-h3-36">Защита по иным составам УК РФ</h3>
            <p className="t-body3">
              Контрабанда (226.1, 229.1, 200.1), кража и кража с банковской
              карты (158), самоуправство (330), драки и причинение вреда
              здоровью (111, 112, 115, 116, 119). На всех стадиях: следствие,
              суд первой инстанции, апелляция.
            </p>
          </div>
          <span className={s.arrow}>
            <img src={IMG.arrowCardDark} alt="" />
          </span>
        </Link>
      </div>
    </section>
  );
}
