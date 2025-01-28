interface CaseData {
    id: number;
    image: string;
    shortDescription: string;
    fullDescription: string;
  }
  
  const casesData: CaseData[] = [
    {
      id: 1,
      image: "/case1.svg",
      shortDescription: "Прекращение уголовного дела возбужденного по ч.1 ст.303 Уголовного кодекса Российской Федерации в связи с отсутствием состава преступления.",
      fullDescription: "При вступлении в уголовное дело для защиты сотрудника ПДН было установлено, что было гражданином было подано заявление по факту фальсификации его подписи сотрудником ПДН при составлении протокола об административном правонарушении. В ходе защиты органам предварительного следствия было доказано, что фальсификации процессуальных документов не было, в связи с чем уголовное дело было прекращено, сотрудник полциии был восстановлен на службе."
    },
    {
      id: 2,
      image: "/case2.svg",
      shortDescription: "Отказ районного суда города Москвы в удовлетворении ходатайтва органов предварительного следствия об избрании меры пресечения в виде заключения под стражу.",
      fullDescription: "Осуществлялась правовая защита по ч. 4 ст. 159 УК РФ. На этапе предварительного следствия следственные органы, с целью усиления давления на моего доверителя, инициировали возбуждение уголовного дела по п.п. «а,б» ч. 6 ст. 171.1 УК РФ и обратились в районный суд с ходатайством об изменении меры пресечения. В результате выработанной стратегии защиты, направленной на защиту прав и свобод моего доверителя, суд отклонил ходатайство следственных органов, что позволило сохранить меру пресечения без изменения, и доверитель остался на свободе. В дальнейшем уголовное дело по п.п. «а,б» ч. 6 ст. 171.1 УК РФ было прекращено. Дело № 3/1-0004/2023, уникальный идентификатор: 77RS0010-02-2023-000668-67 на сайте Московского городского суда."
    },
    {
      id: 3,
      image: "/case3.svg",
      shortDescription: "Отказ в продлении срока содержания под стражей обвиняемой в рамках предварительного следствия.",
      fullDescription: "На момент вступления в дело подзащитная привлекалась к уголовной ответственности по обвинениям в совершении преступлений, предусмотренных ч. 2 ст. 210 и п. «а» ч. 4 ст. 228.1 УК РФ. На протяжении года она содержалась под стражей. При рассмотрении вопроса о продлении срока содержания под стражей стороной защиты были выявлены существенные процессуальные нарушения, допущенные органами предварительного следствия в постановлении о возбуждении ходатайства перед судом. В результате указания на данные обстоятельства Московский городской суд отказал в удовлетворении ходатайства о продлении срока содержания под стражей, что позволило подзащитной выйти на свободу. Дело № 402к-722,723/2020, уникальный идентификатор дела 77OS0000-01-2020-004111-92."
    },
    {
      id: 4,
      image: "/case4.svg",
      shortDescription: "Подача апелляционной жалобы в Московский городской суд на приговор районного суда города Москвы и снижение наказания судом апелляционной инстанции.", 
      fullDescription: "Преступление: ч. 3 ст. 30, п. «г» ч. 4 ст. 228.1 УК РФ. В рамках защиты по делу было достигнуто смягчение наказания для моего подзащитного, назначенного в размере 8 лет лишения свободы с отбыванием в колонии строгого режима, при минимально возможном сроке в 10 лет лишения свободы. Несмотря на то, что наказание было смягчено ниже минимального предела, предусмотренного УК РФ, и принимая во внимание допущенные процессуальные нарушения, стороной защиты было принято решение о подаче обоснованной и мотивированной апелляционной жалобы. В результате проведения комплексной и аргументированной защиты суд апелляционной инстанции снизил срок наказания до 6 лет лишения свободы с отбыванием в колонии строгого режима. Дело № 10-4513/2021, уникальный идентификатор 77RS0024-01-2020-015525-55."
    },
    {
      id: 5,
      image: "/case5.svg",
      shortDescription: "Изменение меры пресечения с заключения под стражу на домашний арест в рамках предварительного следствия.",
      fullDescription: "Уголовное дело было возбуждено по признакам преступления, предусмотренного ч. 3 ст. 30, п. «б» ч. 3 ст. 228.1 УК РФ. Первоначально в отношении подзащитного была избрана мера пресечения в виде заключения под стражу сроком на два месяца. Спустя два месяца, при попытке органов предварительного следствия продлить срок содержания под стражей, стороной защиты было указано на многочисленные нарушения, допущенные следствием, а также на отсутствие оснований для продления столь строгой меры пресечения. Было также заявлено мотивированное ходатайство об изменении меры пресечения на домашний арест. Выслушав доводы сторон, судом было принято решение согласиться с позицией защиты и отказать в продлении срока содержания под стражей, избрав в качестве меры пресечения домашний арест. Дело № 3/2-0109/2020, уникальный идентификатор 77RS0003-01-2020-002486-30."
      },
      {
        id: 6,
        image: "/case6.svg",
        shortDescription: "Переквалификация судом преступления с кражи (п. «г» ч.3 ст.158 УК РФ) на самоуправство (ч.1 ст.330 УК РФ).",
        fullDescription: "При вступлении в уголовное дело подзащитный был привлечен к ответственности за преступление, предусмотренное п. «г» ч.3 ст.158 УК РФ. В ходе защиты, как на стадии предварительного следствия, так и на судебной стадии, были представлены доказательства необоснованности обвинений, выдвинутых органами предварительного следствия. В результате, при вынесении приговора, действия подзащитного были переквалифицированы на ч.1 ст.330 УК РФ, с назначением наказания в виде штрафа. Дело № 01-0431/2020, уникальный идентификатор дела 77RS0009-01-2020-005961-54."
      },
      {
        id: 7,
        image: "/case7.svg",
        shortDescription: "Переквалификация судом преступлений с похищения и вымогательства на самоуправство (Люберецкий городской суд МО).",
        fullDescription: "Преступление при поступлении дела в суд: п.п. «а», «в», «г» ч. 2 ст. 127, п.п. «а», «в» ч. 2 ст. 163 УК РФ.Преступление по приговору суда: ч.2 ст.330 УК РФ.Дело № 1-763/2020, уникальный идентификатор дела 50RS0026-01-2020-011019-77."
      },
      {
        id: 8,
        image: "/case1.svg",
        shortDescription: "Снижение наказания в суде апелляционной инстанции.",
        fullDescription: "Преступление: ч.3 ст.30, п. «г» ч.4 ст.228.1 УК РФ. Наказание, назначенное судом 1 инстанции: 8 лет лишения свободы, с отбыванием наказания в колонии строгого режима. Наказание, назначенное судом апелляционной инстанции: 6 лет лишения свободы, с отбыванием наказания в колонии строгого режима. Дело 10-4513/2021, уникальный идентификатор 77RS0024-01-2020-015525-55."
      },
      {
        id: 9,
        image: "/case2.svg",
        shortDescription: "Переквалификация судом преступлений с покушения на сбыт (наркотическое вещество – 248 гр. кокаина) на хранение наркотических средств.",
        fullDescription: "Преступление при поступлении дела в суд: ч.3 ст.30, п. «г» ч.4 ст.228.1 УК РФ. Преступление по приговору суда: ч.2 ст.228 УК РФ.Дело № 01-0037/2021 (01-0819/2020), уникальный идентификатор дела 77RS0020-02-2020-002525-29."
      },
      {
        id: 10,
        image: "/case3.svg",
        shortDescription: "Отказ суда в избрании меры пресечения в виде заключения под стражу (Красногорский городской суд МО).",
        fullDescription: "На момент вступления в уголовное дело подзащитная была задержана в порядке ст.91 УПК РФ. После провдеения допросов следователем было принято решение о привлечении моей подзащитной в качкстве обвиняемой по признакам преступления предусмотренного п.п. «а», «г» ч.2 ст.161 УК РФ. Далее следователь обратился в суд с ходатайством об избрании меры пресечения в виде заключения под стражу моей подзащитной, однако в ходе грамотной адвокатской работы мне удалось убедить суд в избыточности меры пресечения в виде заключения под стражу, в связи с чем суд избрал меру пресечения в виде домашнего ареста. Дело № 10А-15/2023."
      },
      {
        id: 11,
        image: "/case2.svg",
        shortDescription: "Отказ суда в избрании меры пресечения в виде заключения под стражу (Красногорский городской суд МО).",
        fullDescription: "Преступление: п.п. «а», «г» ч.2 ст.161 УК РФ.Избранная меры пресечения: домашний арест.Дело № 10А-15/2023."
      },
      {
        id: 12,
        image: "/case1.svg",
        shortDescription: "Отказ в продлении срока содержания под стражей обвиняемой в рамках предварительного следствия.",
        fullDescription: "На момент вступления в дело подзащитная привлекалась к уголовной ответственности по обвинениям в совершении преступлений, предусмотренных ч. 2 ст. 210 и п. «а» ч. 4 ст. 228.1 УК РФ. На протяжении года она содержалась под стражей. При рассмотрении вопроса о продлении срока содержания под стражей стороной защиты были выявлены существенные процессуальные нарушения, допущенные органами предварительного следствия в постановлении о возбуждении ходатайства перед судом. В результате указания на данные обстоятельства Московский городской суд отказал в удовлетворении ходатайства о продлении срока содержания под стражей, что позволило подзащитной выйти на свободу. Дело № 402к-722,723/2020, уникальный идентификатор дела 77OS0000-01-2020-004111-92."
      },
      {
        id: 13,
        image: "/case6.svg",
        shortDescription: "Отказ суда в избрании меры пресечения в виде заключения под стражу (Красногорский городской суд МО).",
        fullDescription: "На момент вступления в уголовное дело подзащитная была задержана в порядке ст.91 УПК РФ. После провдеения допросов следователем было принято решение о привлечении моей подзащитной в качкстве обвиняемой по признакам преступления предусмотренного п.п. «а», «г» ч.2 ст.161 УК РФ. Далее следователь обратился в суд с ходатайством об избрании меры пресечения в виде заключения под стражу моей подзащитной, однако в ходе грамотной адвокатской работы мне удалось убедить суд в избыточности меры пресечения в виде заключения под стражу, в связи с чем суд избрал меру пресечения в виде домашнего ареста. Дело № 10А-15/2023."
      },
      {
        id: 14,
        image: "/case3.svg",
        shortDescription: "Отказ суда в избрании меры пресечения в виде заключения под стражу (Красногорский городской суд МО).",
        fullDescription: "Преступление: п.п. «а», «г» ч.2 ст.161 УК РФ.Избранная меры пресечения: домашний арест.Дело № 10А-15/2023."
      },
      {
        id: 15,
        image: "/case7.svg",
        shortDescription: "Отказ суда в избрании меры пресечения в виде заключения под стражу (Красногорский городской суд МО).",
        fullDescription: "Преступление: п.п. «а», «г» ч.2 ст.161 УК РФ.Избранная меры пресечения: домашний арест.Дело № 10А-15/2023."
      },
       
  ];
  
  export default casesData;
  