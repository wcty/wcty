import React from "react"
export default {

  //Side drawer
    initiativeMap: "Мапа ініціатив",
    myInitiatives: "Мої ініціативи",
    projectLibrary: "Проектні пропозиції",
    resourceLibrary: "Локальні ресурси",
    settings: "Налаштування",
    feedback: "Зворотній зв'язок", 
    language: "Мова",
    en: "Англійська",
    uk: "Українська",
    ka: "Грузинська",
    fi: "Фінська",

    //App bar
    enter: "Увійти",
    exit: "Вийти",
    loading: "Завантаження",

    //Project Library
    projectLibraryTitle: "Бібліотека проектних рішень",
    myProjectsTitle: "Мої проектні рішення", //when adding project to inititiative
    onlyMineCheckbox: "Показати лише створені мною",
    noMyProjects: "Ви ще не створили проектів{#choice у бібліотеці | за даною категорією#}.",
    noProjects:  `У бібліотеці поки що немає проектів{#choice | за даною категорією#}.
    Будьте першими хто їх додасть.`,

    //categories of projects
    chooseCategory: "Оберіть категорію",
    allCategories: "Всі категорії",
    greenery: "Озеленення",
    publicSpace:"Громадські простори",
    domestic:"Побутові",
    recreation: "Відпочинок",
    help: "Допомога",
    art: "Мистецтво",
    business: "Бізнес",
    other: "Інше",

    //Form controls
    add: "Додати",
    addAndJoin: "Додати та приєднатися",
    addToInitiative: "Додати проект в ініціативу",
    join: "Приєднатися",
    leave: "Залишити",
    delete: "Видалити",
    cancel: "Відмінити",
    back: "Назад",
    next: "Далі",
    send: "Надіслати",

    //Feedback form
    feedbackGreeting: "🖐Вітаємо шановний відвідувачу!",
    feedbackDescription: <>
      <p>- За будь яких питань пишіть нам на пошту hi@weee.city.</p>
      <p>- Якщо ви зареєстровані на нашому сайті ви також можете залишити свої запитання чи пропозиції у формі зворотнього зв"язку.</p>
    </>,
    feedbackName: "Ваше ім'я:",
    feedbackMessage: "Ваше повідомлення:",
    feedbackContact: "Як з вами можна зв'язатися:",
    //Feedback email contents
    feedbackEmailTitle: "Зворотній зв'язок від",
    feedbackEmailName: "Ім'я",
    feedbackEmailMessage: "Повідомлення",
    feedbackEmailContact: "Як зі мною зв'язатися",

    //Intro
    introGreetings: 'Вітаємо',
    introGreetingsDescription: <>
        Ви потрапили на сайт, що є першим прототипом платформи для громадського мережування We.city. 
        З його допомогою ви зможете об'єднатися з небайдужими людьми навколо актуальних міських проблем
        задля колективного пошуку рішень, ресурсів і виконавців. 
        Він для тих, хто хотів би бачити навколо себе позитивні зміни, 
        але не має часу, енергії чи знань, щоб здійснювати їх самостійно.
        </>,
    introPartners: 'Наші партнери',
    introPartnersDescription: <>
        Проєкт представлений в рамках Тбіліського Архітектурного Бієналє.
        Ви можете підтримати його на <a style={{color:"black"}} href="https://biggggidea.com/project/wecity-platform/">Спільнокошті</a>  і ваш внесок буде подвоєний Фондом Відродження.
        Проект реалізується спільно з Європейською Архітектурною Студентською Асамблеєю.
        </>,
    introFunctions: 'Ознайомлення з функціями',
    introFunctionsDescription: <>
        Сайт поки що знаходиться в активній стадії розробки і його функціювання не є стабільним. 
        Однак, ви вже можете скористатися деякими його функціями - переглядати ініціативи на мапі, долучатися до них та створювати нові.
        Неважливо чи є у вас план або час для їх реалізації. Просто скажіть всьому світу що ви потребуєте змін, та оберіть спосіб вашої участі.
        </>,
    introLogin: 'Що далі?',
    introLoginDescription: <>
        На сторінці кожної ініціати до якої ви долучились ви знайдете стрічку новин. Коментуйте, спілкуйтесь з іншими учасниками та шукайте найкращі шляхи реалізації ініціативи, допоки ми працюємо над розширенням функціоналу.
        Але перед тим, будь ласка натисніть кнопку "Далі" та зареєструйтесь або увійдіть🙏
        </>,
    
    //Project form
    projectFormAddCoverPhoto: "+ Додайте титульну картинку",
    projectFormName: "Назва вашої пропозиції",
    projectFormContractor: "Виконавець",
    projectFormContractorLocation: "Локація",
    projectFormChooseCategory: "Оберіть категорію проекту",
    projectFormProblem: "Яку проблему він має вирішити?",
    projectFormDescription: "Опишіть проект:",
    projectFormContractorExperience: "Який маєте досвід для реалізації?",
    projectFormOtherResources: "Які негрошові ресурси необхідні?",
    projectFormNumberOfVolunteers: "Скільки волонтерів вам буде потрібно?",
    projectFormVolunteerTasks: "Які задачі мають виконувати волонтери?",
    projectFormMinimalBudget: "Який мінімальний необхідний бюджет?",
    projectFormBudgetExpenses: "Які витрати має покривати бюджет?",
    projectFormCategory: "Оберіть категорію",

    //Project preview
    projectContractor: "Ім'я виконавця",
    projectContractorLocation: "Місце виробництва",
    projectProblem: "Яку проблему має вирішити",
    projectDescription: "Опис проекту",
    projectContractorExperience: "Досвід виконавця",
    projectOtherResources: "Необхідні ресурси (не грошові)",
    projectNumberOfVolunteers: "Необхідна кількість волонтерів",
    projectVolunteerTasks: "Задачі волонтерів",
    projectMinimalBudget: "Мінімальний необхідний бюджет",
    projectBudgetExpenses: "Які витрати покриває бюджет",
    projectDateAdded: "Додано",

    //Initiative library
    intiativeLibraryTitle: 'Ініціативи до яких ви долучилися:',
    initiativeLibraryEmpty: 
    `Ви поки що не долучилися до жодної ініціативи! 
    Перейдіть на мапу і долучіться до тої, що здається вам важливою,
    або запропонуйте власну`,
    //Initiative form
    initiativeFormInstruction: "Рухайте мапу щоб навести відмітку ініціативи (червоний маркер) на необхідну локацію, додайте назву і натисніть Далі.",
    initiativeFormName: "Назва вашої ініціативи",
    initiativeFormAddCoverPhoto: "+ Додайте титульне фото",
    initiativeFormProblem: "Яку проблему має вирішити ініціатива?",
    initiativeFormExpectedResult: "Опишіть очікувані результати:",
    initiativeFormCurrentState: "Передумови для реалізації:",

    //Initiative preview
    initiativeDistanceFromMeKM: 'км від мене',
    initiativeDistanceFromMeM: 'м від мене',
    initiativeShare: 'Поділитися',
    initiativeProblem: 'Проблема або ідея:',
    initiativeExpectedResult: 'Мета:',
    initiativeCurrentState: 'Передумови:',
    initiativeDateAdded: 'Додано:',

    //Initiative Group
    initiativeGroupChat: "Чат",
    initiativeGroupMembers: "Учасники",
    initiativeGroupProjects: "Рішення",
    initiativeGroupResources: "Ресурси",

    //Alerts
    alertYouNeedToLogin: "Ви маєте увійти щоб створити ініціативу, проект або ресурс",
    alertLinkWasCopied: "Посилання було успішно скопійовано в буфер обміну",

    //Chat
    chatCreatedInitiative: "{0} created initiative",
    chatJoinedInitiative: "{0} joined initiative",
    chatWriteYourMessage: "Write your message",
    chatWriteYourComment: "Write your comment",
    chatWriteReply: "Reply"
};