import ContactButtons from "./ContactButtons";
import s from "./UrgentWidget.module.css";

/** Правый sticky-виджет на статьях — срочная связь, иконки, статистики. */
export default function UrgentWidget() {
  return (
    <aside className={s.widget} aria-label="Срочная связь с адвокатом">
      <div className={s.head}>
        <span className={s.bolt} aria-hidden>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" fill="#fff" />
          </svg>
        </span>
        <h3 className={s.title}>Срочная связь с адвокатом 24/7</h3>
      </div>
      <p className={s.text}>
        Если у вас идёт обыск, задержание или началось уголовное преследование — свяжитесь прямо сейчас. Проконсультирую бесплатно, при необходимости выеду в течение 30–40 минут по Москве.
      </p>

      <ContactButtons className={s.buttons} />

      <div className={s.stats}>
        <div className={s.stat}>
          <p className={s.statValue}>24/7</p>
          <p className={s.statLabel}>Режим работы</p>
        </div>
        <div className={s.stat}>
          <p className={s.statValue}>от 25 000 ₽</p>
          <p className={s.statLabel}>Выезд на место</p>
        </div>
        <div className={s.stat}>
          <p className={s.statValue}>30–40 мин</p>
          <p className={s.statLabel}>Срочный выезд&nbsp;24/7</p>
        </div>
      </div>
    </aside>
  );
}
