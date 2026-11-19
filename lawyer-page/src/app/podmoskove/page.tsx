import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import PracticeHero from "@/components/PracticeHero";
import Statement from "@/components/Statement";
import { BreadcrumbsMicrodata } from "@/components/mdx/Breadcrumbs";
import { IMG } from "@/lib/img";
import { ROUTES } from "@/lib/site";
import s from "./page.module.css";

const SITE_URL = "https://advokat-peskov.com";
const PAGE_URL = `${SITE_URL}/podmoskove/`;

export const metadata: Metadata = {
  title: "Адвокат по уголовным делам в Московской области",
  description:
    "Адвокат по уголовным делам в Подмосковье: Красногорск, Химки, Одинцово и другие города. Суды области, апелляция в Мособлсуде, кассация, выезд 24/7.",
  keywords:
    "адвокат по уголовным делам Московская область, адвокат Подмосковье, адвокат в Красногорске, адвокат в Химках, адвокат в Одинцово, адвокат в Мытищах, адвокат в Подольске, адвокат в Видном, адвокат в Троицке, Московский областной суд, Первый кассационный суд, Мособлсуд, адвокат по уголовным делам МО",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Адвокат по уголовным делам в Московской области",
    description:
      "Адвокат по уголовным делам в Подмосковье: Красногорск, Химки, Одинцово и другие города. Суды области, апелляция в Мособлсуде, кассация, выезд 24/7.",
    siteName: "Адвокат Песков — уголовные дела",
    images: [{ url: "/1312.webp", width: 1000, height: 723, alt: "Адвокат Песков В.С." }],
  },
};

const breadcrumbItems = [
  { name: "Главная", url: "/" },
  { name: "Московская область", url: "/podmoskove/" },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Московская область", item: PAGE_URL },
  ],
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Адвокат по уголовным делам в Московской области",
  description:
    "Защита по уголовным делам в Московской области и Новой Москве: Красногорск, Химки, Одинцово, Мытищи, Подольск, Видное, Троицк. Городские и районные суды МО, апелляция в Мособлсуде, кассация в Первом кассационном суде (Саратов). Выезд круглосуточно.",
  provider: { "@id": `${SITE_URL}#attorney` },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Московская область" },
    { "@type": "City", name: "Красногорск" },
    { "@type": "City", name: "Химки" },
    { "@type": "City", name: "Одинцово" },
    { "@type": "City", name: "Мытищи" },
    { "@type": "City", name: "Подольск" },
    { "@type": "City", name: "Видное" },
    { "@type": "City", name: "Троицк" },
  ],
  serviceType: "Уголовная защита в Московской области",
};

export default function PodmoskoveHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <BreadcrumbsMicrodata items={breadcrumbItems} />

      <main className={`page page--home page--inner ${s.main}`}>
        <PracticeHero
          title="Адвокат по уголовным делам в Московской области"
          subtitle="Защита в городах Подмосковья и Новой Москве: Красногорск, Химки, Одинцово, Мытищи, Подольск, Видное, Троицк. Городские суды МО, апелляция в Мособлсуде, кассация в Саратове. Выезд в область круглосуточно."
          image={{ src: IMG.urgentHero, left: 760, top: -40, width: 540, height: 580 }}
        />

        {/* Вводные параграфы — SEO-смысловое ядро */}
        <section className={s.intro}>
          <p>
            Я работаю не только в Москве, но и по всей области: езжу на задержания, допросы и обыски в городские отделы полиции и ИВС Подмосковья, веду дела в городских судах области и в Московском областном суде. Адвокаты Московской области и Москвы работают в одной системе, но дела в Подмосковье имеют свои особенности, о которых стоит знать заранее: другая апелляционная инстанция, другой кассационный суд, большие расстояния между судом, отделом и ИВС.
          </p>
          <p>
            Если нужна помощь прямо сейчас — звоните: <a href="tel:+79165780936">+7 (916) 578-09-36</a>, круглосуточно. Консультация по телефону бесплатна.
          </p>
        </section>

        {/* Как идёт уголовное дело в Подмосковье */}
        <section className={s.block}>
          <h2 className="t-h2">Как идёт уголовное дело в Подмосковье</h2>
          <p className={s.p}>
            Дело, возбуждённое в Подмосковье, рассматривает городской или районный суд того города, где совершено преступление. Дальше путь у области и у Москвы разный:
          </p>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Инстанция</th>
                  <th>Московская область</th>
                  <th>Новая Москва (ТиНАО)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Первая инстанция</strong></td>
                  <td>Городской или районный суд МО</td>
                  <td>Районный суд г. Москвы (Троицкий, Щербинский)</td>
                </tr>
                <tr>
                  <td><strong>Апелляция</strong></td>
                  <td>Московский областной суд</td>
                  <td>Московский городской суд</td>
                </tr>
                <tr>
                  <td><strong>Кассация</strong></td>
                  <td>Первый кассационный суд общей юрисдикции (Саратов)</td>
                  <td>Второй кассационный суд общей юрисдикции (Москва)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={s.p}>
            Самое неожиданное для многих — <strong>кассация</strong>. Жалобы на приговоры судов Московской области рассматривает не московский суд, а Первый кассационный суд общей юрисдикции в Саратове. Это нужно учитывать и по срокам, и по тому, кто будет представлять вас в заседании.
          </p>
          <p className={s.p}>
            Новая Москва — Троицк, Щербинка, поселения ТиНАО — формально Москва. Дела там рассматривают районные суды Москвы, апелляция идёт в Мосгорсуд, кассация — во Второй кассационный суд в Москве.
          </p>
        </section>

        {/* Что отличает дела в области */}
        <section className={s.block}>
          <h2 className="t-h2">Что ещё отличает дела в области</h2>
          <p className={s.p}>
            <strong>Расстояния.</strong> Отдел полиции, ИВС и суд могут находиться в разных частях городского округа. Задержанного часто везут в ИВС другого города, и родственники не сразу понимают, где его искать.
          </p>
          <p className={s.p}>
            <strong>Время выезда.</strong> В область адвокат едет дольше, чем по Москве: в ближние города — 30–40 минут, в дальние — до 90 минут. Это стоит учитывать, если допрос назначен на ближайшие часы.
          </p>
          <p className={s.p}>
            <strong>Суд о мере пресечения</strong> проходит в местном городском суде, и к нему нужно успеть собрать документы для домашнего ареста так же быстро, как в Москве.
          </p>
        </section>

        {/* Практика в судах Подмосковья и Новой Москвы */}
        <section className={s.block}>
          <h2 className="t-h2">Практика в судах Подмосковья и Новой Москвы</h2>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Суд</th>
                  <th>Дело</th>
                  <th>Итог</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Красногорский городской суд</td>
                  <td>грабёж группой лиц, прокурор просил стражу</td>
                  <td>домашний арест на следствии, наказание без реального срока</td>
                </tr>
                <tr>
                  <td>Люберецкий городской суд</td>
                  <td>незаконное лишение свободы и вымогательство</td>
                  <td>переквалификация на самоуправство с насилием</td>
                </tr>
                <tr>
                  <td>Троицкий районный суд г. Москвы</td>
                  <td>кражи группой лиц, в том числе с проникновением</td>
                  <td>2 года условно</td>
                </tr>
                <tr>
                  <td>Щербинский районный суд г. Москвы</td>
                  <td>тяжкий вред здоровью, повлёкший смерть</td>
                  <td>переквалификация на причинение смерти по неосторожности, исправительные работы</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={s.p}>
            Подробные разборы этих дел — на страницах о <Link href="/drugie-prestupleniya/grabezh-i-razboj/">грабеже и разбое</Link>, <Link href="/drugie-prestupleniya/statya-330/">самоуправстве</Link>, <Link href="/drugie-prestupleniya/statya-158/">краже</Link> и <Link href="/drugie-prestupleniya/draki-vred-zdorovyu/">драках и вреде здоровью</Link>.
          </p>
        </section>

        {/* Города, где я работаю */}
        <section className={s.block}>
          <h2 className="t-h2">Города, где я работаю</h2>
          <p className={s.p}>
            Отдельные страницы с подробностями по каждому городу — какие суды рассматривают дела, время выезда, местная практика. Список пополняется.
          </p>
          <div className={s.otherGrid}>
            <Link href="/podmoskove/krasnogorsk/" className={s.otherCard}>
              <h3 className="t-h3">Красногорск</h3>
              <span className={s.sitLink}>Перейти →</span>
            </Link>
            <Link href="/podmoskove/himki/" className={s.otherCard}>
              <h3 className="t-h3">Химки · Шереметьево</h3>
              <span className={s.sitLink}>Перейти →</span>
            </Link>
            <Link href="/podmoskove/odincovo/" className={s.otherCard}>
              <h3 className="t-h3">Одинцово</h3>
              <span className={s.sitLink}>Перейти →</span>
            </Link>
            <Link href="/podmoskove/vidnoe/" className={s.otherCard}>
              <h3 className="t-h3">Видное</h3>
              <span className={s.sitLink}>Перейти →</span>
            </Link>
            <Link href="/podmoskove/troitsk/" className={s.otherCard}>
              <h3 className="t-h3">Троицк · Новая Москва</h3>
              <span className={s.sitLink}>Перейти →</span>
            </Link>
            <Link href="/podmoskove/mytishchi/" className={s.otherCard}>
              <h3 className="t-h3">Мытищи</h3>
              <span className={s.sitLink}>Перейти →</span>
            </Link>
            <Link href="/podmoskove/podolsk/" className={s.otherCard}>
              <h3 className="t-h3">Подольск</h3>
              <span className={s.sitLink}>Перейти →</span>
            </Link>
          </div>
        </section>

        {/* Выезд по области и стоимость */}
        <section className={s.block}>
          <h2 className="t-h2">Выезд по области и стоимость</h2>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Услуга</th>
                  <th>Стоимость</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Консультация по телефону</td>
                  <td><strong>бесплатно</strong></td>
                </tr>
                <tr>
                  <td>Выезд на допрос, обыск или к задержанному в Подмосковье</td>
                  <td>от 30 000 ₽</td>
                </tr>
                <tr>
                  <td><strong>Защита на одной стадии (следствие или суд первой инстанции)</strong></td>
                  <td><strong>от 250 000 ₽</strong></td>
                </tr>
                <tr>
                  <td><strong>Дело под ключ (следствие + суд первой инстанции)</strong></td>
                  <td><strong>от 500 000 ₽</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={s.p}>
            Если человека задержали в области, а вы не знаете, куда его увезли, — звоните сразу: выяснять, в каком он отделе или ИВС, я начинаю параллельно с выездом. Что делать в первые часы — в памятке о <Link href="/blog/zaderzhali-chto-delat/">задержании</Link>.
          </p>
        </section>

        {/* Как связаться */}
        <Statement>
          Телефон: <a href="tel:+79165780936">+7 (916) 578-09-36</a> — круглосуточно, отвечаю сам. Telegram:{" "}
          <a href="https://t.me/Peskov_Vladislav" target="_blank" rel="noopener">@Peskov_Vladislav</a>. Выезд по области — от 30 000 ₽, полный прайс — на странице <Link href={ROUTES.prices}>«Цены»</Link>.
        </Statement>

        {/* Другие разделы */}
        <section className={s.otherSections}>
          <h2 className="t-h2">Другие разделы</h2>
          <div className={s.otherGrid}>
            <Link href={ROUTES.drugs} className={s.otherCard}>
              <h3 className="t-h3">Наркотики — ст. 228, 228.1, 229.1 УК РФ</h3>
              <span className={s.sitLink}>Перейти →</span>
            </Link>
            <Link href={ROUTES.fraud} className={s.otherCard}>
              <h3 className="t-h3">Мошенничество и экономические преступления</h3>
              <span className={s.sitLink}>Перейти →</span>
            </Link>
            <Link href={ROUTES.other} className={s.otherCard}>
              <h3 className="t-h3">Другие уголовные дела</h3>
              <span className={s.sitLink}>Перейти →</span>
            </Link>
            <Link href={ROUTES.urgent} className={s.otherCard}>
              <h3 className="t-h3">Срочный выезд адвоката 24/7</h3>
              <span className={s.sitLink}>Перейти →</span>
            </Link>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
