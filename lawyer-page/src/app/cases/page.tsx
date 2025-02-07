import Head from "next/head";
import CasesList from "../../components/CasesList";
import styles from "./CasesPage.module.css";

export const metadata = {
  title: "Адвокат по уголовным делам в Москве – Примеры дел и успешные кейсы",
  description: "Примеры выигранных уголовных дел и судебных разбирательств адвоката. Ознакомьтесь с успешными кейсами по статье 228 УК РФ и другим делам в Москве",
};

export default function CasesPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
    <main className={styles.mainContainer}>
      <div className={styles.photoContainer}>
        <img src="/4.jpg" alt="Практика адвоката по уголовным делам" className={styles.caseImage} />
        <h2 className={styles.overlayText}>Результаты деятельности за долгие годы практики по уголовным делам</h2>
      </div>
      <CasesList />

      {/* Контейнер для полезных статей */}
      <div className={styles.articlesContainer}>
        <h1 className={styles.articlesTitle}>Полезные статьи по уголовным делам</h1>
        
        <div className={styles.articlesContent}>
          <div className={styles.toc}>
            <p><a href="#article1">1. Что делать при обыске</a></p>
            <p><a href="#article2">2. Что делать, если задержали</a></p>
            <p><a href="#article3">3. Что делать, если вызвали на допрос</a></p>
            <p><a href="#article4">4. Хранение и сбыт наркотиков виды наказания по 228 статье</a></p>
            <p><a href="#article5">5. Как выбрать лучшего адвоката по уголовным делам в Москве</a></p>
            <p><a href="#article6">6. Что делать если поймали с наркотиками</a></p>
          </div>

          <div id="article1" className={styles.article}>
  <h1>Что делать при обыске</h1>

  <h3>Подготовка к обыску</h3>
  <p>Обыск — это одно из самых интенсивных следственных действий, оказывающее сильное психологическое воздействие на человека. Подготовиться к такой процедуре сложно: сотрудники правоохранительных органов могут воспользоваться стрессовым состоянием для последующего допроса. Основное желание человека после обыска — чтобы сотрудники как можно скорее покинули жилье.</p>

  <h3>Основания для обыска</h3>
  <p>В России не существует «ордера на обыск» в привычном понимании. Обыск проводится на основании постановления следователя или решения суда, где указаны конкретный адрес, основания для обыска и данные должностного лица, утвердившего обыск. Это постановление должно быть предъявлено лицу, у которого проводится обыск.</p>

  <h3>Действия при обыске</h3>
  <p>Не следует препятствовать действиям сотрудников, но важно фиксировать их действия и соблюдение процессуальных норм. Контролируйте процесс обыска, записывайте действия следственной группы, сохраняйте спокойствие и воздерживайтесь от лишних контактов с предметами, найденными правоохранителями. В ходе проведения обыска обязательно контролируйте, что бы понятые, присутствие которых обязательно, находились именно в той комнате в которой в данный момент идет обыск, а не сидели безучастно в коридоричке. Понятые должны всегда находится именно там, где проходит обыск. </p>

  <h3>Протокол обыска</h3>
  <p>По завершении обыска составляется протокол, где фиксируются все изъятые предметы и документы. При ознакомлении с протоколом необходимо внимательно прочитать его и внести все замечания. Протокол должен быть подписан всеми участниками, и вам обязаны предоставить копию этого документа. Зачастую сотрудники проводившие обыск ссылаются на отсутствие технической возможности предоставить Вам копию протокла обыска, в таком случае рекомендую вам с их согласию сделать фотофиксацию на мобильный телефон, если же сотрудники будут возражать тогда вместо подписи в протоколе обыска за получение копии напиши текст - Протокол обыска не выдан, фотофиксацию сделать запретили.</p>

  <h3>Различия между обыском и обследованием</h3>
  <p>В отличие от обыска, обследование проводится оперативными службами и имеет меньше полномочий. Оно не позволяет сотрудникам ограничивать общение граждан, а также не дает права принудительно вскрывать помещения или изымать вещи без предварительного снятия копий.</p>

  <p>Для граждан, которым предстоит обыск, лучше заранее проконсультироваться с адвокатом по уголовным делам, чтобы понимать свои права и действовать грамотно в стрессовой ситуации.</p>
</div>

<div id="article2" className={styles.article}>
  <h2>Как действовать при задержании: Права и обязанности</h2>

  <h3>Когда могут задержать гражданина</h3>
  <p>Причинами для задержания могут быть: подозрения в совершении преступления, уклонение от правовой ответственности, пребывание в розыске, нарушение комендантского часа, административные нарушения, незаконное проникновение на охраняемые территории или нарушение границы РФ, а также постановление о депортации или выдаче иностранному государству. Задержание также допустимо, если лицо представляет угрозу безопасности окружающих.</p>

  <h3>Процедура задержания</h3>
  <p>При задержании сотрудник полиции обязан назвать свою должность, фамилию и звание, предъявить удостоверение и разъяснить основания задержания. Обязательно должны быть разъяснены права гражданина, включая право на юридическую помощь, возможность уведомить близких и право отказаться от дачи объяснений. Составляется протокол задержания, в котором указываются все обстоятельства и основания задержания. Копия протокола предоставляется задержанному по его требованию.</p>

  <h3>Максимальный срок задержания</h3>
  <p>Сроки задержания зависят от ситуации. При административном нарушении максимальный срок составляет 3 часа, за исключением случаев, связанных с выявлением личности. При подозрении в преступлении задержание может длиться до 48 часов с возможностью продления до 72 часов решением суда. При особых обстоятельствах (например, в условиях военного положения) срок задержания может достигать 30 дней. В данной ситуации лучшим решением будет обратится к адвокату по уголовным делам.</p>

  <h3>Права при задержании</h3>
  <p>Задержанный имеет право на один телефонный звонок для уведомления родственников, право на молчание и защиту (в том числе судебную). Имеется право на юридическую помощь и отказ от дачи показаний до прибытия адвоката. При желании гражданин может предъявить жалобы на действия сотрудников и потребовать вызова медицинской помощи в случае физического воздействия.</p>

  <h3>Как вести себя при задержании</h3>
  <p>Сохраняйте спокойствие, не угрожайте сотрудникам полиции, не оказывайте сопротивления и зафиксируйте служебные данные задерживающего сотрудника. При ознакомлении с документами делайте пометки при несогласии с их содержанием. Не подписывайте бумаги без соответствующей пометки, если не согласны с их содержанием.</p>

  <h3>Личный досмотр и досмотр вещей</h3>
  <p>Досмотр вещей проводится в присутствии понятых, а личный досмотр — лицом одного с вами пола. По вашему запросу предоставляется копия протокола досмотра. Обыск допускается только при обоснованной необходимости и также осуществляется с участием понятых.</p>

  <h3>Применение физической силы</h3>
  <p>Физическая сила допускается только при угрозе жизни и здоровья сотрудников полиции или окружающих, при задержании или пресечении правонарушений. Сотрудник обязан предупреждать о применении силы, а если это невозможно, — сообщить о её применении по факту.</p>

  <h3>Жалобы на действия полиции</h3>
  <p>Гражданин может подать жалобу на неправомерные действия сотрудников полиции в письменной форме, устно, либо обратиться в прокуратуру или органы безопасности МВД. Важно указывать место, дату и обстоятельства произошедшего, а также все известные контактные данные сотрудников. Для защиты прав допускается также судебное разбирательство.</p>
</div>

<div id="article3" className={styles.article}>
  <h2>Что делать, если вас вызвали на допрос: Пошаговая инструкция</h2>

  <h3>Как могут вызвать на допрос</h3>
  <p>В соответствии со статьей 188 УПК РФ, вызов гражданина на допрос может быть осуществлен через повестку или с помощью средств связи. Повестка должна содержать ФИО вызываемого, его процессуальный статус (например, «свидетель»), данные вызывающего следователя, а также точное время и место допроса.</p>

  <h3>Вызов на допрос повесткой</h3>
  <p>Повестка вручается под роспись гражданину лично или его близким. Это обязательный документ для вызова на допрос в рамках уголовного дела. Обратите внимание, что даже при уведомлении через электронные средства связи (например, SMS) сообщение должно содержать все обязательные элементы и быть подтвержденным прочтением.</p>

  <h3>Порядок допроса и права свидетеля</h3>
  <p>При вызове на допрос гражданин имеет право знать, кто будет его допрашивать. Если допрос проводит не следователь, а, например, оперуполномоченный, такой вызов является, скорее, опросом, а не официальным допросом. Важно ознакомиться со своим статусом и понять, какие права и обязанности он накладывает. Вместе с тем Вы имеете полное право явится в правоохранительные органы с авдокатом по уголовным делам.</p>

  <h3>Статус, указанный в повестке</h3>
  <p>Если вы указаны в повестке как «свидетель», явка обязательна. Свидетели обязаны давать показания, за исключением случаев, когда показания могут нанести вред им или их близким. Уклонение от явки может привести к принудительному приводу.</p>

  <h3>Принудительный привод на допрос</h3>
  <p>При уклонении от явки на допрос гражданин может быть принудительно доставлен сотрудниками полиции. Для этого необходимо письменное поручение следователя. Препятствовать приводу не рекомендуется — это можно обжаловать позже. При принудительном доставлении важно сразу заявить об отсутствии уведомлений о вызове и потребовать адвоката.</p>

  <h3>Как проходит допрос свидетеля</h3>
  <p>Перед началом допроса следователь проверяет личные данные гражданина и объясняет ему его права. Следователь может попытаться мотивировать на «свободный рассказ», однако рекомендуется придерживаться формата «вопрос-ответ» и отвечать кратко. Это поможет избежать ненужных вопросов и снизить риск манипуляций.</p>

  <h3>Права свидетеля на допросе</h3>
  <p>Свидетель может воспользоваться переводчиком, если не владеет русским языком, и имеет право требовать перерывы каждые 4 часа. Допрос не может длиться более 8 часов в сутки. При допросе желательно присутствие адвоката для защиты интересов свидетеля и предотвращения манипуляций со стороны следователя.</p>

  <h3>Когда можно отказаться от показаний</h3>
  <p>Подозреваемые и обвиняемые имеют право на полный отказ от дачи показаний, в то время как свидетели обязаны отвечать на вопросы, за исключением случаев, когда ответы могут повредить им или их близким. Для безопасного отказа от ответов в определенных случаях следует заранее проконсультироваться с адвокатом.</p>

  <h3>Как вести себя на допросе</h3>
  <p>На допросе нужно сохранять спокойствие, не торопиться с ответами, внимательно слушать вопросы и по возможности отвечать кратко. Рекомендуется фиксировать все сказанное следователем и свои ответы для сверки с протоколом. Адвокат, присутствующий на допросе, поможет защитить права и обеспечить соблюдение процедуры.</p>

  <h3>Проверка протокола допроса</h3>
  <p>После допроса следователь предоставляет протокол для проверки. Свидетелю важно тщательно его прочитать, внести коррективы, если есть искажения, и удостоверить правильность. Не рекомендуется подписывать протокол, если в нем содержатся ошибки или искажения. Адвокат может помочь провести сверку и защитить интересы свидетеля.</p>
</div>
<div id="article4" className={styles.article}>
            <h2>Ответственность за хранение и сбыт наркотиков: Наказание по статье 228 УК РФ</h2>

            <h3>Когда необходима помощь адвоката по наркотическим делам</h3>
            <p>Если вам предъявили обвинение в хранении или распространении наркотических веществ, незамедлительно обратитесь к квалифицированному адвокату. Нарушения в сфере оборота наркотиков могут быть строго наказуемы, включая штрафы и даже пожизненное лишение свободы. Срок и вид наказания зависят от количества изъятых веществ и подозрений в их возможном сбыте. Зачастую следствие усугубляет обвинения, добавляя дополнительные эпизоды, что приводит к увеличению наказания. При грамотной защите можно уменьшить срок наказания или добиться прекращения уголовного дела.</p>

            <h3>Практика адвоката по делам ст. 228</h3>
            <p>В своей практике я многократно добивался смягчения приговоров и полного прекращения уголовных дел по статьям о наркотиках. Дела, связанные с незаконным оборотом, требуют комплексного подхода и детального анализа. Самостоятельные попытки защититься редко приводят к положительному исходу, ведь на кону ваша свобода. Квалифицированный адвокат имеет опыт и навыки, необходимые для эффективного ведения таких дел.</p>

            <h3>Почему важно вовремя обратиться за защитой</h3>
            <p>Опытный юрист знает, что наилучший способ прекратить дело по ст. 228 УК РФ — это добиться его завершения еще на стадии следствия. Если вам инкриминируют хранение или сбыт наркотических средств, обратитесь ко мне за профессиональной помощью. Я незамедлительно приступлю к изучению вашего дела, подготовлю необходимые материалы и обеспечу защиту ваших интересов в суде.</p>

            <h3>Проблемы в судебной практике: провокации и фальсификации</h3>
            <p>К сожалению, случаи фальсификации доказательств или провокаций со стороны правоохранительных органов — не редкость. Нередко происходит оперативная закупка наркотиков в присутствии «фальшивых» понятых или под давлением оперативников. Такие действия должны оспариваться профессиональным адвокатом, чтобы исключить сфабрикованные доказательства из дела.</p>

            <h3>Как адвокат помогает по делам о наркотиках</h3>
            <p>Юрист, привлеченный на ранней стадии, может исключить как случайные ошибки, так и преднамеренные искажения фактов. Я оказываю юридическую помощь по уголовным делам о наркотиках (228 УК РФ) на всех этапах: от подготовки документов до выступления в суде. Готов при встрече подробно показать успешные примеры из своей практики, чтобы вы могли убедиться в моей компетентности.</p>

            <h3>Особенности защиты по делам о наркотиках</h3>
            <p>Зачастую успешное разрешение дела зависит от доказательной базы. Адвокат по статье 228 должен тщательно проанализировать происхождение каждого доказательства, представленного следствием, и настоять на судебной экспертизе. Только детальный подход позволяет добиваться справедливых решений, а не только положиться на добровольную выдачу наркотиков, которая не всегда освобождает от ответственности. Я помогаю выстроить надежную стратегию защиты с акцентом на правовую оценку и факты дела.</p>
          </div>
          <div id="article5" className={styles.article}>
            <h2>Как выбрать лучшего адвоката по уголовным делам в Москве?</h2>

            <h3>Профессионализм и опыт адвоката</h3>
            <p>Первый шаг к выбору хорошего адвоката — это личное общение. Обратите внимание на то, насколько адвокат умеет четко объяснять свои мысли, формулировать юридические аргументы и отвечать на ваши вопросы. Профессиональный адвокат сможет донести вашу позицию до судьи в максимально понятной форме.</p>

            <h3>Опыт работы в уголовном праве</h3>
            <p>Опыт и стаж — ключевые показатели квалификации. Лучшие адвокаты Москвы в сфере уголовных дел имеют многолетний опыт и охотно делятся с клиентами практическими примерами из своей деятельности. Убедитесь, что адвокат работал с делами, аналогичными вашему, и имеет положительные результаты.</p>

            <h3>Прозрачность сотрудничества</h3>
            <p>Хороший адвокат по уголовным делам в Москве всегда готов предоставить клиенту четкие ответы на вопросы о ходе дела и обсудить дальнейшие шаги. От профессионала не стоит ожидать скрытности в процессуальных вопросах — доверие клиента является основой успешного сотрудничества.</p>

            <h3>Юридическая этика и репутация</h3>
            <p>Лучший адвокат дорожит своей репутацией и работает исключительно в рамках закона, не идя на сомнительные сделки и обещания. Такой правозащитник поможет вам в рамках правовых инструментов, не нарушая этических норм, что является залогом успешного исхода дела.</p>

            <h3>Честность в оценке перспектив</h3>
            <p>Профессиональный адвокат всегда прямо говорит о возможных исходах дела, даже если они не столь оптимистичны. Честная оценка перспектив позволяет подготовиться к любым поворотам и выбрать стратегию, способствующую наилучшему исходу.</p>

            <h3>Услуги адвокатов по уголовным делам</h3>
            <p>Моя команда лучших адвокатов Москвы предоставляет всестороннюю защиту и правовую поддержку по уголовным делам, включая:</p>
            <ul>
              <li>Консультации по всем вопросам на постоянной или разовой основе;</li>
              <li>Формирование доказательной базы и работа с доказательствами;</li>
              <li>Поддержка и сопровождение подзащитного на допросах, следственных экспериментах и других процессуальных мероприятиях;</li>
              <li>Посещение подзащитного в СИЗО по запросу родственников или в рамках следственных действий;</li>
              <li>Защита интересов клиента от неправомерного давления со стороны следствия;</li>
              <li>Представительство в суде и обжалование приговора;</li>
              <li>Помощь в сборе документов и подготовка исков;</li>
              <li>Другие виды правовой поддержки.</li>
            </ul>
            <p>Независимо от вашего процессуального статуса — свидетель, подозреваемый или обвиняемый — вы получите полноценную правовую помощь. Адвокат защитит ваши права на каждом этапе разбирательства, обеспечивая уверенность в надежной юридической поддержке.</p>
          </div>
          <div id="article6" className={styles.article}>
  <h2>Что делать, если поймали с наркотиками</h2>

  <h3>Сохраняйте спокойствие</h3>
  <p>
    При задержании с наркотиками крайне важно сохранять самообладание. Паника или
    необдуманные слова могут только усугубить ваше положение. Следует помнить, что ваши
    первые действия определяют исход дела.
  </p>

  <h3>Не признавайте вину без адвоката</h3>
  <p>
    Главное правило — не признавайте вину и не подписывайте никаких документов до
    прибытия адвоката. Следователи часто пытаются использовать давление и психологические
    уловки, чтобы заставить вас признать вину. Вы имеете право молчать (ст. 51
    Конституции РФ) и требовать защиты адвоката.
  </p>

  <h3>Требуйте адвоката</h3>
  <p>
    Вы имеете право на адвоката с момента задержания. Это право закреплено в статье 48
    Конституции РФ. Если у вас нет собственного адвоката, требуйте назначение
    защитника. Однако государственный адвокат не всегда заинтересован в вашей защите, поэтому
    лучше обратиться к опытному адвокату по уголовным делам.
  </p>

  <h3>Проверяйте законность действий полиции</h3>
  <p>
    Следите за соблюдением процессуальных норм. Вы имеете право узнать основания
    задержания, видеть, как изымаются подозрительные вещества, и участвовать в составлении
    протокола. Если что-то нарушено, ваш адвокат сможет использовать это для защиты.
  </p>

  <h3>Избегайте провокаций</h3>
  <p>
    Провокации на сбыт наркотиков, оперативные закупки и давление со стороны полиции
    — частые явления в делах, связанных с наркотиками. Адвокат проверит все материалы
    дела, чтобы исключить фальсификации или незаконные действия сотрудников полиции.
  </p>

  <h3>Строгость наказания по ст. 228 УК РФ</h3>
  <p>Наказание за наркотики варьируется в зависимости от размера вещества и его назначения:</p>
  <ul>
    <li>Хранение без цели сбыта — от 3 до 10 лет лишения свободы;</li>
    <li>Сбыт наркотиков — от 4 до 20 лет лишения свободы, в особо крупном размере — до пожизненного заключения.</li>
  </ul>

  <h3>Как адвокат поможет</h3>
  <p>Опытный адвокат обеспечит защиту на всех этапах дела:</p>
  <ul>
    <li>Проверка законности задержания и процедуры изъятия веществ;</li>
    <li>Обжалование нарушений со стороны сотрудников полиции;</li>
    <li>Сбор доказательств невиновности и проведение независимых экспертиз;</li>
    <li>Представление интересов в суде и обжалование приговора.</li>
  </ul>

  <h3>Почему выбирают меня</h3>
  <p>
    Как адвокат по уголовным делам с опытом успешной защиты в делах о наркотиках, я
    знаю все тонкости этой категории. Моя цель — минимизировать последствия или добиться
    прекращения уголовного преследования.
  </p>

  <p>
    Если вы или ваши близкие столкнулись с обвинением по ст. 228 УК РФ, обращайтесь
    за профессиональной помощью. Позвоните по номеру <a href="tel:+79165780936">+7 (916) 578-09-36</a>, чтобы получить
    юридическую консультацию и начать защиту ваших прав прямо сейчас.
  </p>
</div>

        </div>
      </div>
    </main>
    </>
  );
}
