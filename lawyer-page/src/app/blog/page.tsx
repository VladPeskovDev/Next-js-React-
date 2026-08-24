import Link from "next/link";
import styles from "./CasesPage.module.css";

export const metadata = {
  title: "Блог адвоката по уголовным делам в Москве – статьи, советы и кейсы",
  description:
    "Адвокат по уголовным делам в Москве: статьи, полезные материалы, советы и примеры реальных дел. Разборы резонансных уголовных дел, практика защиты и успешные кейсы.",
  keywords:
    "адвокат по уголовным делам, блог адвоката, уголовные дела, успешные кейсы, юридические статьи, советы адвоката",
  alternates: { canonical: "https://advokat-peskov.com/blog" },
  openGraph: {
    title: "Блог адвоката по уголовным делам – полезные статьи и кейсы",
    description:
      "Читайте блог адвоката по уголовным делам: полезные статьи, советы, практика защиты и реальные кейсы.",
    url: "https://advokat-peskov.com/blog",
  },
};

export default function BlogPage(): JSX.Element {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.articlesContainer}>
        <h1 className={styles.articlesTitle}>Полезные статьи по уголовным делам</h1>

        <div className={styles.articlesContent}>
          <div className={styles.toc}>
            <p><Link href="/blog/situacii/obysk-doma">1. Что делать при обыске</Link></p>
            <p><Link href="/blog/situacii/zaderzhali-chto-delat">2. Что делать, если задержали</Link></p>
            <p><Link href="/blog/moshennichestvo/p2p-arbitrazh">3. Опасность обмена криптовалюты через P2P: как не стать фигурантом уголовного дела</Link></p>
            <p><Link href="/blog/moshennichestvo/droppery">4. Кто такие дропы и какая ответственность за это в России</Link></p>
            <p><Link href="/blog/situacii/vpn-i-zakon">5. Новые правила по VPN-сервисам в России: что важно знать</Link></p>
            <Link href="/narkotiki"><p>6. Как работает адвокат по наркотикам, что делать если задержали с наркотиками</p></Link>
            <Link href="/article"><p>7. Как работает адвокат по уголовным делам в Москве</p></Link>
            <Link href="/moshennichestvo"><p>8. Как работает адвокат по делам о мошенничестве в Москве</p></Link>

            <div className={styles.tocBottomLinks}>
              <Link href="/about">Обо мне</Link> · <Link href="/contact">Контакты</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
