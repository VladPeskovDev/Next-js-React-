import styles from "./AboutPage.module.css";


export const metadata = {
  title: "Адвокат по уголовным делам | Обо мне",
  description: "Информация об адвокате, специализирующемся на уголовных делах.",
};

export default function AboutPage(): JSX.Element {
  return (
    <main className="container mx-auto p-4">
      <div className={styles.mainContainer}>
        <div className={styles.photoContainer}>
          <div className={styles.photoOverlay}>
            <img src="/foto008.svg"
              alt="Адвокат по уголовным делам в Москве"
              className={styles.photo}/>
            </div>
        </div>
        <div className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2>Обо мне</h2>
            <p>
  Являюсь высококлассным адвокатом с многолетним опытом в сфере уголовного права, обеспечивая защиту прав и интересов клиентов на самом высоком уровне профессионализма и ответственности. Моя практика насчитывает значительное количество положительных решений, достигнутых благодаря глубоким знаниям законодательства и тщательно продуманной стратегии защиты. </p>  
            <p>
  Мои приоритеты — преданность интересам клиента, оперативность и внимательность к каждому делу, что позволяет максимально точно оценить ситуацию и выбрать эффективные способы защиты. В своей работе руководствуюсь принципами честности, строгого соблюдения этических норм и полной конфиденциальности, что укрепляет доверие клиентов и способствует успеху в решении самых сложных правовых вопросов.
           </p>
           <p>
  Обратившись ко мне за юридической помощью, вы можете быть уверены, что ваше дело в надежных руках, а результат — в приоритетном внимании. Моя цель — защита ваших интересов и достижение наилучшего возможного исхода, вне зависимости от сложности дела.
</p>
          </div>
        </div>

       
        <div className={styles.educationSection}>
          <h3>Образование и квалификация</h3>
          <p>Высшее юридическое образование</p>
          <p>Опыт работы в правоохранительных органах</p>
          <p>Более 10 лет юридического опыта</p>
          <p>Реестровый номер Адвоката 13/597</p>
        </div>
      </div>
    </main>
  );
}
