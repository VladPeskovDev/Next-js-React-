import Link from "next/link";
// import CasesList from "../../components/CasesList";
import styles from "./CasesPage.module.css";

export const metadata = {
  title: "Блог адвоката по уголовным делам в Москве – статьи, советы и кейсы",
  description:
    "Адвокат по уголовным делам в Москве: статьи, полезные материалы, советы и примеры реальных дел. Разборы резонансных уголовных дел, практика защиты и успешные кейсы.",
  keywords:
    "адвокат по уголовным делам, блог адвоката, уголовные дела, успешные кейсы, юридические статьи, советы адвоката",
  openGraph: {
    title: "Блог адвоката по уголовным делам – полезные статьи и кейсы",
    description:
      "Читайте блог адвоката по уголовным делам: полезные статьи, советы, практика защиты и реальные кейсы.",
  },
};

export default function CasesPage(): JSX.Element {
  return (
    <main className={styles.mainContainer}>
      {/* <div className={styles.photoContainer}>
        <img src="/4.jpg" alt="Практика адвоката по уголовным делам" className={styles.caseImage} />
      </div>
      <CasesList /> */}

      <div className={styles.articlesContainer}>
        <h1 className={styles.articlesTitle}>Полезные статьи по уголовным делам</h1>

        <div className={styles.articlesContent}>
          <div className={styles.toc}>
            <p><Link href="/house-search-what-to-do">1. Что делать при обыске</Link></p>
            <p><Link href="/detention-what-to-do">2. Что делать, если задержали</Link></p>
            <p><Link href="/p2p-crypto-risk">3. Опасность обмена криптовалюты через P2P: как не стать фигурантом уголовного дела</Link></p>
            <p><Link href="/drops-responsibility">4. Кто такие дропы и какая ответственность за это в России</Link></p>
            <p><Link href="/vpn-laws-russia">5. Новые правила по VPN-сервисам в России: что важно знать</Link></p>
            <Link href="/drugs"><p>6. Как работает адвокат по наркотикам, что делать если задержали с наркотиками</p></Link>
            <Link href="/article"><p>7. Как работает адвокат по уголовным делам в Москве</p></Link>
            <Link href="/fraud"><p>8. Как работает адвокат по делам о мошенничестве в Москве</p></Link>

            <div className={styles.tocBottomLinks}>
              <Link href="/about">Обо мне</Link> · <Link href="/contact">Контакты</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
