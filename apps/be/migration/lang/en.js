module.exports = {
  app_side_drawer:{
    initiativeMap: "Map of initiatives",
    myInitiatives: "My initiatives",
    projectLibrary: "Project Library",
    resourceLibrary: "Local Resources",
    settings: "Settings",
    about: "About us",
    feedback: "Feedback", 
    language: "Language",
    en: "English",
    uk: "Ukrainian",
    ka: "Georgian",
    fi: "Finnish",

  },

  app_bar:{
    enter: "Login",
    exit: "Logout",
    loading: "Loading",
  },

  project_library:{
    projectLibraryTitle: "Library of project proposals",
    myProjectsTitle: "My projects", //when adding project to inititiative
    onlyMineCheckbox: "Show only created by me",
    noMyProjects: "You didn't create projects yet {#choice in the library | by this category#}.",
    noProjects:  `There are no projects in the library{#choice | by this category#}.
    Be the first to propose one.`,

  },

  project_category:{
    chooseCategory: "Choose category",
    allCategories: "All categories",
    greenery: "Greenery",
    publicSpace:"Public spaces",
    domestic:"Domestic",
    recreation: "Recreation",
    help: "Help",
    art: "Art",
    business: "Enterpreneurship",
    other: "Other",

  },

  global_form_control:{
    add: "Add",
    addAndJoin: "Add and join",
    addToInitiative: "Add to Initiative",
    join: "Join",
    leave: "Leave",
    delete: "Delete",
    clear: "Clear",
    cancel: "Cancel",
    back: "Back",
    next: "Next",
    send: "Send",
  },
  feedback_form:{
    feedbackGreeting: "🖐Welcome to our site!",
    feedbackDescription: `<>
      <p>- In case of any questions please contact us by email hi@weee.city.</p>
      <p>- If you are registered on our site you can leave your questions or offers in the feedback form.</p>
    </>`,
    feedbackName: "Your name:",
    feedbackMessage: "Your message:",
    feedbackContact: "How to contact you:",
  },
  feedback_email_content:{
    feedbackEmailTitle: "Feedback from",
    feedbackEmailName: "Name",
    feedbackEmailMessage: "Message",
    feedbackEmailContact: "How to contact me",

  },

  app_intro:{
    introGreetings: 'Hi!',
    introGreetingsDescription: `<>
        You landed on the site, which is the first prototype of the platform for urban networking We.city. 
        It can help you to find the others, who share your concerns regarding your city/environment,
        and organize your communication with them to find solutions, resources and contractors to resolve it collectively. 
        It is for those who would like to see positive changes around, but do not have time, energy or expertise,
        to realize them on alone.
        </>`,
    introPartners: 'Our partners',
    introPartnersDescription: `<>
        This project is publsihed specially for Tbilisi Architectural Biennial.
        You can support it at <a style={{color:"black"}} href="https://biggggidea.com/project/wecity-platform/">Biggggidea</a>  and your contribution will be doubled by International Renaissance Foundation.
        The project is realized together with European Architectural Student Assembly.
        </>`,
    introFunctions: 'Functionality',
    introFunctionsDescription: `<>
        This web app is currently under active development, and is not stable. 
        However, you can use some of its functions already now - look through the initiatives on the map, join them or create new ones.
        It doesn't matter whether you have plan or time for their realization. Simply say to the whole world that you need changes, and choose the mode of you participation.
        </>`,
    introLogin: 'What is next?',
    introLoginDescription: `<>
        In every initiative that you join you will find a news feed. Speak with the other members and comment, and find together the best ways to implement your idea, while we are working to extend the functionality of the app.
        But before that, please click "Next" button, and register or login🙏
        </>`,

  },

  project_form:{
    projectFormAddCoverPhoto: "+ Add cover image",
    projectFormName: "Name of your proposal",
    projectFormContractor: "Contractor organization",
    projectFormContractorLocation: "Place of realization",
    projectFormChooseCategory: "Choose project category",
    projectFormProblem: "Which problem it is called to solve?",
    projectFormDescription: "describe the project:",
    projectFormContractorExperience: "Do you have any relavant experience?",
    projectFormOtherResources: "Which non-financial resources would you need for its relization?",
    projectFormNumberOfVolunteers: "How many volunteers would you need?",//maybe remove
    projectFormVolunteerTasks: "What tasks should be done by volunteers?",
    projectFormMinimalBudget: "What is the minimal necessary budget?",
    projectFormBudgetExpenses: "Which expenses will it cover?",
    projectFormCategory: "Choose category",
  },

  project_preview:{
    projectContractor: "Contractor name",
    projectContractorLocation: "Place of implementation",
    projectProblem: "Which problem is solving",
    projectDescription: "Project description",
    projectContractorExperience: "Contractor experience",
    projectOtherResources: "Necessary no-financial resources",
    projectNumberOfVolunteers: "Necessary number of volunteers",
    projectVolunteerTasks: "Volunteer tasks",
    projectMinimalBudget: "Minimal required budget",
    projectBudgetExpenses: "What does the budget covers",
    projectDateAdded: "Date added",

  },

  initiative_library:{
    intiativeLibraryTitle: "Initiatives that you've joined:",
    initiativeLibraryEmpty: 
    `You didn't join any initiative yet! 
    Go to the Map and join the one, that seem important,
    or propose your own`,

  },

  initiative_form:{
    initiativeFormInstruction: "Move the map to locate the initiative marker (red) in the right place, then add the name and click Next.",
    initiativeFormName: "Name of your initiative",
    initiativeFormAddCoverPhoto: "+ Add the cover picture",
    initiativeChangePicture: "Change Picture",
    initiativeFormProblem: "Which problem stands behind the initiative?",
    initiativeFormExpectedResult: "Describe desired outcomes:",
    initiativeFormCurrentState: "What is the current state of it:",

  },

  initiative_preview:{
    initiativeDistanceFromMeKM: 'km from me',
    initiativeDistanceFromMeM: 'm from me',
    initiativeShare: 'Share',
    initiativeProblem: 'Problematics or idea:',
    initiativeExpectedResult: 'Goals:',
    initiativeCurrentState: 'Current state:',
    initiativeDateAdded: 'Date added:',

  },
  
  initiative_group:{
    initiativeGroupChat: "Chat",
    initiativeGroupMembers: "Members",
    initiativeGroupProjects: "Projects",
    initiativeGroupResources: "Resources",

  },
  global_alert:{

    alertYouNeedToLogin: "You must be logged in to create initiative, project or resource",
    alertLinkWasCopied: "Link was succesfully copied to the clipboard",
  },

  initiative_join:{
    joinInitiativeGoal: "The goal for initiative to find {0} volunteers and {1} UAH.",
    joinTheInitiative: "Join the initiative",
    joinDonateLabel: "I am ready to donate",
    joinDonateSum: "Amount",
    joinMonthlyPayment: "Monthly payment?",
    joinVolunteerLabel: "I am ready to volunteer",
    joinVolunteerJob: "What kind of job you can do?",
    joinContractLabel: "I am ready to propose the solution",
    joinChooseFromLibrary: "Choose from library",
    joinCreateNew: "Create new",

  },
  global_currency:{
    UAH: "uah",
    USD: "usd",
    EUR: "eur",

  },
  chat:{
    chatCreatedInitiative: "{0} created initiative",
    chatJoinedInitiative: "{0} joined the initiative",
    chatJoinedAsVolunteer: "{0} joined as volunteer",
    chatCanHelpWith: "Ready to help with: ",
    chatJoinedAsSponsor: "{0} joined as sponsor",
    chatCanSponsor: "Ready to sponsor: ",
    chatMonthly: " monthly",
    chatWriteYourMessage: "Post a message",
    chatWriteYourComment: "Add comment",
    chatWriteReply: "Reply",

  },
  explore:{
    exploreHelmetTitle: "Explore initiatives",
    exploreHelmetDescription: "Platform for urban networking around common cases",
    exploreYouAreHere: "You are here",
    exploreHereItStarts: "Here we start",
    exploreNearestInitiativeDistance: "The nearest to you initiative is in {0}{#choice m | km#}",
    exporeTurnOnLocationService: `Please, turn on location service to use all functions.`,
    exploreNearestToMaidan: "The nearest to the Independence Square new initiative is in {0}{#choice m | km#}",
    exploreShowInitiative: "Show initiative",
    exploreOr: "or",
    exploreProposeNew: "Propose new",
    exploreAddInitiative: "Add initiative",
    exploreWatchedAllAddNew: `
      Please, add new initiative to find city-neighborghs
      who consider it relevant and worth support.
    `,
    exploreProposeNewInitiative: "Propose new initiative",

  },
    
};