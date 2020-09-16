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
    en: "🇬🇧",
    uk: "🇺🇦",
    ka: "🇬🇪",
    fi: "🇫🇮",

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

    //User form
    userFormGreetings: '🖐Вітаємо шановний відвідувачу!',
    userFormDescription: <>
        <p>- Ви потрапили на сайт, що є першим прототипом платформи для міського самоврядування Wecity.</p>
        <p>- Цей сайт працює в експериментальному режимі, і його мета - протестувати різні методи громадського самоврядування онлайн
        задля покращення наших міст - в рамках студентської архітектурної літньої школи EASA Chocolocal в Києві, на Чоколівці. </p>
        <p>Щоби взяти участь у цьому експерименті, ми просимо вас для початку відповісти на декілька запитань.</p>
    </>,
    userFormName: "Ваше ім'я:",
    userFormHowDidYouFindUs: "Як ви дізнались про наш експеримент:",
    userFormHowToContactYou: "Як з вами можна зв'язатися:",

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
    chatWriteYourMessage: "Write your message"
};