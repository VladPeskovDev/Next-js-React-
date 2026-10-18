import ContactButtons from "./ContactButtons";
import s from "./ConsultationCta.module.css";

type Props = { title?: string; text?: string };

export default function ConsultationCta({
  title = "Нужна помощь по уголовному делу?",
  text = "По любым вопросам защиты по уголовному делу — звоните напрямую. Первичная консультация по телефону бесплатна. Круглосуточно, без выходных, лично беру трубку.",
}: Props) {
  return (
    <section className={s.cta}>
      <h2 className="t-h2">{title}</h2>
      <p className="t-body2">{text}</p>
      <ContactButtons />
    </section>
  );
}
