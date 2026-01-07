const btnFR = document.getElementById("lang-fr")
const btnEN = document.getElementById("lang-en")

const translations = {
    fr: {
        navProjects: "Projets",
        navExperience: "Expérience",
        navEducation: "Formation",
        navAbout: "À propos",
        navContact: "Contact",
        navResume: "Mon CV",

        heroTitle: "Software Engineer Junior — Web & Backend",
        heroText:
            "Actuellement à la recherche d'un CDI/CDD en tant qu'ingénieur junior afin de valoriser mes compétences techniques. Motivé, adaptable et orienté solution, je suis prêt à relever les défis.",

        seeProject: "Voir mes projets",
        contactMe: "Me contacter",

        keyTitle: "Projets clés",

        descriptionProjects:
            "Projet web : Site web complet avec système de commande, authentification sécurisée et panneau administrateur.",
        descriptionProjects2:
            "Projet web : Gestion financière personnelle dynamique pour ses revenus et dépenses.",
        descriptionProjects3:
            "Projet web : Gestion de tâches inspirée de Trello avec organisation par colonnes.",
        descriptionProjects4:
            "Projet web : Gestionnaire de favoris personnalisé.",

        expTitle: "Expérience professionnelle",
        expTask: "Tâches :",

        expIntern1: "SAP France — Stagiaire en Automatisation de Test",
        expText1:
            "Automatisation de tests fonctionnels et non-régression sur Ocean, module de SAP Analytics Cloud intégré à Microsoft Excel.",
        expText_1: "Comparer les outils et proposer la solution la plus pertinente.",

        expIntern2: "Opinaka — Stagiaire en développement",
        expText2:
            "Développement de plugins Elasticsearch et interfaces via Strapi & Gatsby.",
        expText_2: "Création d'une liste déroulante JSON des données.",

        expIntern3:
            "Office d'Aviation Civile et des Aéroports (OACA Tn) — Stagiaire en développement",
        expText3:
            "Mise en œuvre d'une application de gestion pour la déclaration de l'employeur.",
        expText_3:
            "Mise en place d'une base de données Oracle pour les informations des utilisateurs.",

        expIntern4: "SWIM IT — Stagiaire en développement",
        expText4: "Mise en œuvre d'une application de gestion de taxi.",
        expText_4:
            "Création d'une base de données pour la collecte des informations utilisateurs.",

        edTitle: "Formation académique",
        edText1: "ESIEA - École d’ingénieur·e·s d’un numérique utile",
        edText2: "Université Centrale",

        aboutTitle: "À propos de moi",
        aboutText:
            "Ingénieur diplômé en Software Engineering (ESIEA), passionné par le développement web et backend. J’aime comprendre les systèmes en profondeur, résoudre des problèmes complexes et livrer des solutions propres et fiables. Curieux et ouvert d’esprit, je reste constamment à l’écoute des nouvelles technologies et n’hésite pas à sortir de ma zone de confort pour apprendre, m’adapter et évoluer.",

        msgSuccess: "Message envoyé avec succès !",
        msgTextEmail:
            "Veuillez entrer une adresse email valide (ex : exemple@gmail.com)",
        msgSend: "Envoyer",

        namePlaceholder: "Votre nom",
        emailPlaceholder: "Votre email",
        messagePlaceholder: "Votre message"
    },

  en: {
        navProjects: "Projects",
        navExperience: "Experience",
        navEducation: "Education",
        navAbout: "About",
        navContact: "Contact",
        navResume: "Resume",

        heroTitle: "Junior Software Engineer — Web & Backend",
        heroText:
            "Currently seeking a full-time or fixed-term position as a junior software engineer to apply and grow my technical skills. Motivated, adaptable and solution-oriented, I am ready to take on new challenges.",

        seeProject: "View my projects",
        contactMe: "Contact me",

        keyTitle: "Key projects",

        descriptionProjects:
            "Web project: Full-featured website with ordering system, secure authentication and admin dashboard.",
        descriptionProjects2:
            "Web project: Dynamic personal finance management for income and expenses.",
        descriptionProjects3:
            "Web project: Task management inspired by Trello with column-based organization.",
        descriptionProjects4:
            "Web project: Custom bookmark manager.",

        expTitle: "Professional experience",
        expTask: "Tasks:",

        expIntern1: "SAP France — Test Automation Intern",
        expText1:
            "Automation of functional and non-regression tests on Ocean, a SAP Analytics Cloud module integrated with Microsoft Excel.",
        expText_1:
            "Tool comparison and recommendation of the most suitable solution.",

        expIntern2: "Opinaka — Software Development Intern",
        expText2:
            "Development of Elasticsearch plugins and interfaces using Strapi & Gatsby.",
        expText_2: "Creation of a JSON dropdown list from data.",

        expIntern3:
            "Civil Aviation and Airports Authority (OACA TN) — Software Development Intern",
        expText3:
            "Implementation of a management application for employer declarations.",
        expText_3:
            "Design and setup of an Oracle database for user information.",

        expIntern4: "SWIM IT — Software Development Intern",
        expText4: "Implementation of a taxi management application.",
        expText_4:
            "Creation of a database for collecting user information.",

        edTitle: "Education",
        edText1: "ESIEA - School of Engineering for a Useful Digital World",
        edText2: "Central University",

        aboutTitle: "About me",
        aboutText:
            "Software Engineering graduate (ESIEA), passionate about web and backend development. I enjoy understanding systems in depth, solving complex problems and delivering clean and reliable solutions. Curious and open-minded, I stay up to date with new technologies and willingly step out of my comfort zone to learn, adapt and grow.",

        msgSuccess: "Message sent successfully!",
        msgTextEmail:
            "Please enter a valid email address (e.g. example@gmail.com)",
        msgSend: "Send",

        namePlaceholder: "Your name",
        emailPlaceholder: "Your email",
        messagePlaceholder: "Your message"
    }
};

function setLanguage(lang) {
    // Texte normal
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.CDATA_SECTION_NODE.i18n;
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // placeholder 
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        if(translations[lang][key]) {
            el.placeholder = translations[lang][key]
        }
    });
}

btnFR.addEventListener("click", () => {
    setLanguage("fr");
});

btnEN.addEventListener("click", () => {
    setLanguage("en");
})