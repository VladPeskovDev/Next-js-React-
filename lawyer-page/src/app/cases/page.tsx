import CasesList from "../../components/CasesList";
import styles from "./CasesPage.module.css";

export const metadata = {
  title: "Адвокат по уголовным делам | Кейсы",
  description: "Примеры успешно завершенных уголовных дел адвоката.",
};

export default function CasesPage(): JSX.Element {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.photoContainer}>
        <img src="/4.jpg" alt="Практика адвоката по уголовным делам" className={styles.caseImage} />
        <h2 className={styles.overlayText}>Результаты моей деятельности за долгие годы практики</h2>
      </div>

      <CasesList />
    </main>
  );
}
