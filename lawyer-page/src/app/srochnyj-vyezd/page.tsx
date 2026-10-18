import type { Metadata } from "next";
import Link from "next/link";
import { DarkPanel, PanelHead } from "@/components/DarkPanel";
import SiteFooter from "@/components/SiteFooter";
import MobileAccordion from "@/components/MobileAccordion";
import MoreButton from "@/components/MoreButton";
import PracticeHero from "@/components/PracticeHero";
import PriceGroup from "@/components/PriceGroup";
import Statement from "@/components/Statement";
import { BreadcrumbsMicrodata } from "@/components/mdx/Breadcrumbs";
import { IMG } from "@/lib/img";
import { ROUTES } from "@/lib/site";
import s from "./page.module.css";

const SITE_URL = "https://advokat-peskov.com";
const PAGE_URL = `${SITE_URL}/srochnyj-vyezd/`;

export const metadata: Metadata = {
  title: "Срочный выезд адвоката в Москве — адвокат по вызову 24/7",
  description:
    "Срочный выезд адвоката по Москве круглосуточно: задержание, обыск, допрос. Адвокат по вызову приедет за 30–40 минут. Выезд от 25 000 ₽, звонок 24/7.",
  keywords:
    "срочный выезд адвоката Москва, адвокат по вызову Москва, адвокат срочно, уголовный адвокат круглосуточно, адвокат 24/7 Москва, вызвать адвоката, вызвать адвоката по 51, адвокат при задержании, адвокат на обыск, адвокат на допрос, выезд адвоката в ОМВД, выезд адвоката в СИЗО",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Срочный выезд адвоката в Москве — адвокат по вызову 24/7",
    description:
      "Срочный выезд адвоката по Москве круглосуточно: задержание, обыск, допрос. Выезд за 30–40 минут. От 25 000 ₽.",
    siteName: "Адвокат Песков — уголовные дела",
    images: [{ url: "/1312.webp", width: 1000, height: 723, alt: "Адвокат Песков В.С." }],
  },
};

const breadcrumbItems = [
  { name: "Главная", url: "/" },
  { name: "Срочный выезд 24/7", url: "/srochnyj-vyezd/" },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Срочный выезд 24/7", item: PAGE_URL },
  ],
};

/* Service JSON-LD — для rich-результатов по срочной юридической помощи */
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Срочный выезд адвоката 24/7 по Москве",
  description:
    "Выезд уголовного адвоката при задержании, обыске, допросе. Круглосуточно, 30–40 минут. От 25 000 ₽ днём, от 35 000 ₽ ночью.",
  provider: { "@id": `${SITE_URL}#attorney` },
  areaServed: [
    { "@type": "City", name: "Москва" },
    { "@type": "AdministrativeArea", name: "Московская область" },
  ],
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  offers: [
    { "@type": "Offer", name: "Срочный выезд днём (9:00–22:00)", price: "25000", priceCurrency: "RUB" },
    { "@type": "Offer", name: "Срочный выезд ночью (22:00–9:00)", price: "35000", priceCurrency: "RUB" },
    { "@type": "Offer", name: "Защита свидетеля на допросе", price: "25000", priceCurrency: "RUB" },
  ],
};

const ZW = "​";

/* Что входит в срочный выезд — 2 ряда по 3 карточки.
   short — краткий заголовок (виден всегда), t — полное описание (на мобилке в body аккордеона). */
const INCLUDES = [
  [
    { n: "01", short: "Немедленный приезд", t: "Приезд адвоката к следователю, в отдел полиции, СИЗО или ИВС в течение 30–40 минут по Москве." },
    { n: "02", short: "Первый допрос и действия", t: "Присутствие на первом допросе, обыске, очной ставке — моменте, когда закрепляется позиция обвинения." },
    { n: "03", short: "Работа с протоколом", t: "Замечания к содержанию, отказ от «удобных» для следствия формулировок, фиксация нарушений." },
  ],
  [
    { n: "04", short: "Копии документов", t: "Получение копий процессуальных документов: протоколов, постановлений, экспертиз." },
    { n: "05", short: "Линия защиты", t: "Первичная линия защиты, право на молчание до консультации (ст. 51 Конституции РФ)." },
    { n: "06", short: "Согласование действий", t: "Согласование дальнейших действий с доверителем и родственниками, план на следующие 48 часов." },
  ],
];

/* Как проходит срочный выезд — 5 шагов из нашего контента */
const FLOW = {
  first: [
    { t: "Разбор по телефону", d: "Где сейчас человек, по какой статье задержали или к кому пришли с обыском." },
    { t: "Инструкции до приезда", d: <>Что говорить дежурному, чего не подписывать, <br />что привезти.</> },
    { t: "Поиск человека", d: <>Параллельно с выездом выясняю, в какой отдел увезли задержанного.</> },
  ],
  second: [
    { t: "Выезд", d: "По Москве — 30–40 минут. Встреча с подзащитным до допроса, контроль протоколов." },
    { t: "Документы к суду о мере пресечения", d: <>Пакет для домашнего ареста вместо СИЗО: жильё, работа, характеристики.<br />{ZW}</> },
  ],
};

function Arrow() {
  return <img className={s.arrow} src={IMG.arrowCircleWhite} alt="" aria-hidden />;
}

/* Материалы раздела — 6 подхабов срочного выезда (тексты из оригинальных MDX) */
const MATERIALS = [
  {
    slug: "advokat-na-dopros",
    title: "Адвокат на допрос в Москве — подготовка и защита на допросе",
    desc: "Адвокат на допрос свидетеля, подозреваемого и обвиняемого в Москве: подготовка, тактика по ст. 51, выезд к следователю за 30–40 минут.",
    date: "7 октября 2026 г.",
    readTime: "9 мин",
  },
  {
    slug: "apellyatsiya-po-ugolovnomu-delu",
    title: "Апелляция по уголовному делу в Москве — адвокат и обжалование приговора",
    desc: "Апелляция по уголовному делу в Москве: срок 15 суток, обжалование приговора, подготовка апелляционной жалобы.",
    date: "27 сентября 2026 г.",
    readTime: "8 мин",
  },
  {
    slug: "advokat-na-obysk",
    title: "Адвокат на обыск в Москве — вызов защитника при обыске в квартире 24/7",
    desc: "Пришли с обыском? Адвокат в Москве 24/7, выезд за 30–40 минут. Права при обыске, проверка постановления, замечания в протокол.",
    date: "22 сентября 2026 г.",
    readTime: "7 мин",
  },
  {
    slug: "advokat-v-politsiyu",
    title: "Срочный адвокат в полицию 24/7 — выезд за 30 минут",
    desc: "Адвокат в полицию в Москве круглосуточно. Выезд за 30–40 минут при задержании, обыске, допросе. От 25 000 ₽. Личный приём звонков.",
    date: "18 сентября 2026 г.",
    readTime: "8 мин",
  },
  {
    slug: "advokat-na-ochnuyu-stavku",
    title: "Адвокат на очную ставку в Москве — как готовимся и защищаем",
    desc: "Адвокат на очную ставку в Москве: подготовка позиции, тактика, права свидетеля и подозреваемого, разбор итогов.",
    date: "8 сентября 2026 г.",
    readTime: "4 мин",
  },
  {
    slug: "advokat-v-sizo",
    title: "Адвокат в СИЗО в Москве — как вступаем в дело и защищаем подзащитного",
    desc: "Адвокат в СИЗО Москвы: вступление в дело, свидания, отказ от назначенного защитника, борьба за домашний арест на 48 часах.",
    date: "7 сентября 2026 г.",
    readTime: "5 мин",
  },
];

export default function UrgentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <BreadcrumbsMicrodata items={breadcrumbItems} />

      <main className={`page page--home page--inner ${s.main}`}>
        <PracticeHero
          title="Срочный выезд адвоката в Москве — круглосуточно"
          subtitle="Задержали, пришли с обыском, вызвали на допрос — звоните. Выезд адвоката по Москве за 30–40 минут. В отдел полиции, ИВС, СИЗО, к следователю или на обыск."
          image={{ src: IMG.urgentHero, left: 705, top: -64, width: 637, height: 620 }}
        />

        {/* Вводные параграфы — SEO-смысловое ядро страницы */}
        <section className={s.intro}>
          <p>
            Телефон адвоката круглосуточно: <a href="tel:+79165780936">+7 (916) 578-09-36</a>. Беру трубку лично, без диспетчеров и колл-центра. Консультация по телефону бесплатна — за несколько минут разберёмся, что делать до моего приезда.
          </p>
          <p>
            Когда нужен <strong>адвокат срочно</strong>, в Москве важна не только скорость. Важно, чтобы первый допрос, первый протокол и первая ночь в отделе прошли с защитником. Показания, данные в шоке и без адвоката, потом приходится оспаривать месяцами — и не всегда успешно.
          </p>
          <p>
            <strong>Уголовный адвокат круглосуточно</strong> на связи — это не про то, что трубку возьмут ночью. Это про то, что работа <strong>адвоката по вызову</strong> начинается с первой минуты разговора, а не с момента приезда.
          </p>
        </section>

        {/* Стоимость */}
        <div className={s.priceWrap}>
          <PriceGroup
            title="Стоимость выезда"
            rows={[
              {
                height: 240,
                items: [
                  { title: <>Срочный выезд днём <br />(с 9:00 до 22:00)</>, text: "Выезд адвоката к задержанному, на допрос или другое неотложное следственное действие.", price: "от 25 000 ₽" },
                  { title: <>Срочный выезд ночью <br />(с 22:00 до 9:00)</>, text: "Помощь в неотложной ситуации: выезд к задержанному или на срочное следственное действие.", price: "от 35 000 ₽" },
                  { title: "Защита свидетеля на допросе", text: "Адвокат присутствует на допросе, защищает ваши права и помогает избежать процессуальных ошибок.", price: "от 25 000 ₽" },
                ],
              },
            ]}
          />
          <div className={s.priceRow2}>
            <div className={s.priceCard}>
              <p className="t-h3">Дальнейшее ведение дела оплачивается отдельно. Стоимость выезда засчитывается в сумму договора на ведение дела.</p>
              <Link className="btn-secondary" href={ROUTES.prices}>Полный прайс</Link>
            </div>
            <div className={`${s.priceCard} ${s.priceCardFree}`}>
              <p className="t-h3">Первичная консультация по телефону</p>
              <p className={s.free}>Бесплатно</p>
            </div>
          </div>
        </div>

        {/* Что входит — аккордеон через MobileAccordion. На десктопе всё раскрыто */}
        <section className={s.includes}>
          <h2 className="t-h2">Что входит в срочный выезд</h2>
          <div className={s.grid}>
            {INCLUDES.map((row, i) => (
              <div className={s.row} key={i}>
                {row.map((c, j) => (
                  <MobileAccordion
                    key={j}
                    className={s.incCard}
                    summaryClassName={s.incSummary}
                    bodyClassName={s.incBody}
                    title={
                      <>
                        <span className={s.gradNum}>{c.n}</span>
                        <span className={s.incShort}>{c.short}</span>
                      </>
                    }
                  >
                    <p className="t-body1">{c.t}</p>
                  </MobileAccordion>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Когда нужен (chips) */}
        <section className={s.when}>
          <h2 className="t-h2">Когда нужен срочный выезд</h2>
          <div className={s.chips}>
            <span className={s.chip}>Очная ставка</span>
            <span className={s.chip}>Проверка показаний на месте</span>
            <span className={s.chip}>Опознание</span>
            <span className={`${s.chip} ${s.chipWithBtn}`}>
              Задержание в порядке ст. 91 УПК РФ
              <MoreButton title="Задержание в порядке ст. 91 УПК РФ">
                При задержании по уголовному делу (ст. 91 УПК РФ) у защитника есть 48 часов до суда о мере пресечения. За это время нужно встретиться с задержанным, выстроить позицию по первому допросу, собрать документы для просьбы о домашнем аресте вместо СИЗО. Поэтому срочный выезд уголовного адвоката — не формальность, а реальная работа на будущий исход дела.
              </MoreButton>
            </span>
            <span className={s.chip}>Обыск в жилище, офисе, автомобиле</span>
            <span className={s.chip}>Вызов на допрос — как подозреваемого/свидетеля</span>
            <span className={s.chip}>Визит защитника к доверителю (СИЗО,ИВС)</span>
          </div>
          <img className={s.question} src={IMG.questionMark} alt="" aria-hidden />
        </section>

        {/* Почему нельзя ждать */}
        <section className={s.cards}>
          <h2 className="t-h2">Почему нельзя ждать до утра</h2>
          <div className={s.cardsRow}>
            <div className={s.card}>
              <h3 className={`t-h3 ${s.card2lines}`}>Первые показания — самые дорогие</h3>
              <p className="t-body3">То, что сказано в отделе в первые часы, следствие потом использует как основу обвинения. До приезда адвоката — пользуйтесь правом не свидетельствовать против себя по ст. 51 Конституции («вызвать адвоката по 51»).</p>
            </div>
            <div className={s.card}>
              <h3 className={`t-h3 ${s.card2lines}`}>Протоколы подписываются один раз</h3>
              <p className="t-body3">Замечания к протоколу задержания, обыска или допроса вносятся до подписи, а не после. Если их нет, оспорить нарушения потом почти невозможно.</p>
            </div>
            <div className={s.card}>
              <h3 className={`t-h3 ${s.card2lines}`}>«Договориться» без защитника — риск нового дела</h3>
              <p className="t-body3">Попытка решить вопрос через знакомых или передать деньги — отдельное преступление, которое ложится и на тех, кто платил.</p>
            </div>
          </div>
        </section>

        {/* Как проходит срочный выезд */}
        <section className={s.cards}>
          <h2 className="t-h2">Как проходит срочный выезд</h2>
          <div className={s.flow}>
            <div className={s.flowRow}>
              {FLOW.first.map((c, i) => (
                <span key={c.t} style={{ display: "contents" }}>
                  {i > 0 && <Arrow />}
                  <div className={s.card}>
                    <h3 className="t-h3">{c.t}</h3>
                    <p className="t-body3">{c.d}</p>
                  </div>
                </span>
              ))}
            </div>
            <div className={s.flowRow}>
              {FLOW.second.map((c) => (
                <span key={c.t} style={{ display: "contents" }}>
                  <Arrow />
                  <div className={s.card}>
                    <h3 className="t-h3">{c.t}</h3>
                    <p className="t-body3">{c.d}</p>
                  </div>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Три панели — на мобилке аккордеон (useState), на десктопе всё раскрыто */}
        <div className={s.panels}>
          <MobileAccordion
            className={s.panel}
            summaryClassName={s.panelSummary}
            bodyClassName={s.panelBody}
            title="Что успеваю за первый час"
          >
            <p className="t-body3">
              Приём звонка, короткий разбор по телефону, выезд. По Москве — 30–40 минут, ночью обычно быстрее. По пути согласую план действий до приезда: куда можно и куда нельзя идти самостоятельно, что говорить дежурному, нужно ли родственникам везти вещи.
            </p>
          </MobileAccordion>
          <MobileAccordion
            className={s.panel}
            summaryClassName={s.panelSummary}
            bodyClassName={s.panelBody}
            title="Работаю по всем составам"
          >
            <p className="t-body3">
              Выезд по всем уголовным составам: <Link href={ROUTES.drugs}>наркотики (ст. 228, 228.1)</Link>, <Link href={ROUTES.fraud}>мошенничество (ст. 159, 159.1–159.6)</Link>, присвоение (ст. 160), платёжные средства (ст. 187), отмывание (ст. 174, 174.1), а также обыски и допросы по любым другим статьям.
            </p>
          </MobileAccordion>
          <MobileAccordion
            className={s.panel}
            summaryClassName={s.panelSummary}
            bodyClassName={s.panelBody}
            title="Как найти задержанного"
          >
            <p className="t-body3">
              Родственники часто не знают, в какой отдел повезли человека после задержания. Пока еду, я параллельно выясняю это через дежурные части и адвокатскую сеть. Это занимает минуты, а не часы — время критично при 48-часовом сроке до суда о мере пресечения.
            </p>
          </MobileAccordion>
        </div>

        {/* Что делать прямо сейчас */}
        <DarkPanel>
          <PanelHead title="Что делать прямо сейчас" />
          <div className={s.nowGrid}>
            <div className={s.nowRow}>
              <div className={s.nowCard} style={{ gap: 8 }}>
                <p>01</p>
                <p className="t-body1">Позвоните адвокату, коротко расскажите, где вы и что происходит.</p>
              </div>
              <div className={s.nowCard}>
                <p>02</p>
                <p className="t-body1">Не объясняйте обстоятельства дела, пока не получите юридическую консультацию.</p>
              </div>
              <div className={s.nowCard}>
                <p>03</p>
                <p className="t-body1">Не препятствуйте проведению законных действий.<br />{ZW}</p>
              </div>
            </div>
            <div className={s.nowRow}>
              <div className={s.nowCard} style={{ gap: 8 }}>
                <p>04</p>
                <p className="t-body1" style={{ whiteSpace: "pre-wrap" }}>{"Внимательно ознакомьтесь \nс документами и протоколами перед подписанием."}</p>
              </div>
              <div className={s.nowCard}>
                <p>05</p>
                <p className="t-body1">Сохраняйте копии процессуальных документов. При задержании — требуйте копию протокола.</p>
              </div>
              <div className={s.nowSpacer} aria-hidden />
            </div>
          </div>
          <div className={s.hourglassBox} aria-hidden>
            <img src={IMG.hourglass} alt="" />
          </div>
        </DarkPanel>

        <Statement>
          Первые часы решают исход дела. Показания, данные без защитника, потом сложно оспорить. До приезда юриста — пользуйтесь правом на молчание (ст. 51 Конституции РФ). Если нужна памятка — <Link href="/blog/zaderzhali-chto-delat/">«Что делать, если задержали»</Link> и <Link href="/blog/obysk-doma/">«Что делать при обыске дома»</Link>.
        </Statement>

        <section className={s.materials}>
          <h2 className="t-h2">Материалы раздела</h2>
          <div className={s.materialsGrid}>
            {MATERIALS.map((m) => (
              <Link key={m.slug} href={`/srochnyj-vyezd/${m.slug}/`} className={s.matCard}>
                <h3 className={`t-h3-36 ${s.matTitle}`}>{m.title}</h3>
                <p className={s.matDesc}>{m.desc}</p>
                <div className={s.matFoot}>
                  <span className={s.matDate}>{m.date}</span>
                  <span className={s.matTime}>{m.readTime} →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
