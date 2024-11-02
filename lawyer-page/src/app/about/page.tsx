import styles from "./AboutPage.module.css";

export const metadata = {
    title: "Адвокат по уголовным делам | Обо мне",
    description: "Информация об адвокате, специализирующемся на уголовных делах.",
  };
  
  export default function AboutPage(): JSX.Element {
    return (
      <main className="container mx-auto p-4">
        <div className={styles.mainContainer}>
        <h1 className={styles.title}>Обо мне</h1>
        <p>Здесь представлена информация о квалификации и опыте работы адвоката.</p>
        </div>
      </main>
    );
  }
  