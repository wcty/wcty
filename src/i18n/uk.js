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
    projectAddCoverPhoto: "+ Додайте титульну картинку",
    projectName: "Назва вашої пропозиції",
    projectContractor: "Виконавець",
    projectContractorLocation: "Локація",
    projectChooseCategory: "Оберіть категорію проекту",
    projectProblem: "Яку проблему він має вирішити?",
    projectDescription: "Опишіть проект:",
    projectContractorExperience: "Який маєте досвід для реалізації?",
    projectOtherResources: "Які негрошові ресурси необхідні?",
    projectNumberOfVolunteers: "Скільки волонтерів вам буде потрібно?",
    projectVolunteerTasks: "Які задачі мають виконувати волонтери?",
    projectMinimalBudget: "Який мінімальний необхідний бюджет?",
    projectBudgetExpenses: "Які витрати має покривати бюджет?",

    //Initiative library
    intiativeLibraryTitle: 'Ініціативи до яких ви долучилися:',
    initiativeLibraryEmpty: 
    `Ви поки що не долучилися до жодної ініціативи! 
    Перейдіть на мапу і долучіться до тої, що здається вам важливою,
    або запропонуйте власну`,
    //Initiative form
    initiativeInstruction: "Рухайте мапу щоб навести відмітку ініціативи (червоний маркер) на необхідну локацію, додайте назву і натисніть Далі.",
    initiativeName: "Назва вашої ініціативи",
    initiativeAddCoverPhoto: "+ Додайте титульне фото",
    initiativeProblem: "Яку проблему має вирішити ініціатива?",
    initiativeExpectedResult: "Опишіть очікувані результати:",
    initiativeCurrentState: "Передумови для реалізації:",

    //Initiative preview
    initiativePreviewDistanceFromMeKM: 'км від мене',
    initiativePreviewDistanceFromMeM: 'м від мене',
    initiativePreviewShare: 'Поділитися',
    initiativePreviewProblem: 'Проблема або ідея:',
    initiativePreviewExpectedResult: 'Мета:',
    initiativePreviewCurrentState: 'Передумови:',
    initiativePreviewDateAdded: 'Додано:',

    //Alerts
    alertYouNeedToLogin: "Ви маєте увійти щоб створити ініціативу, проект або ресурс",
    alertLinkWasCopied: "Посилання було успішно скопійовано в буфер обміну",
};