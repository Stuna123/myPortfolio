const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");
const ahref = document.querySelectorAll('a[href^="#"]');
const backToTopBtn = document.getElementById("backToTop");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


/* TRANSLATION */
/*
    const btnFR = document.getElementById("lang-fr");
    const btnEN = document.getElementById("lang-en");
    const dataI18n = document.querySelectorAll("[data-i18n]");
    const dataI18nPlaceholder = document.querySelectorAll("[data-i18n-placeholder]");
    const savedLang = localStorage.getItem("lang") || "fr";

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
                `Actuellement à la recherche d'un CDI/CDD en tant qu'ingénieur junior afin de valoriser mes compétences techniques. 
                <br>Motivé, adaptable et orienté solution, je suis prêt à relever les défis.`,

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
                "• Automatisation de tests fonctionnels et non-régression sur Ocean, module de SAP Analytics Cloud intégré à Microsoft Excel.",
            expText_1: "• Comparer les outils et proposer la solution la plus pertinente.",

            expIntern2: "Opinaka — Stagiaire en développement",
            expText2:
                " • Développement de plugins Elasticsearch et interfaces via Strapi & Gatsby.",
            expText_2: " • Création d'une liste déroulante JSON des données.",

            expIntern3:
                "Office d'Aviation Civile et des Aéroports (OACA Tn) — Stagiaire en développement",
            expText3:
                "• Mise en œuvre d'une application de gestion pour la déclaration de l'employeur.",
            expText_3:
                "• Mise en place d'une base de données Oracle pour les informations des utilisateurs.",

            expIntern4: "SWIM IT — Stagiaire en développement",
            expText4: "• Mise en œuvre d'une application de gestion de taxi.",
            expText_4:
                "• Création d'une base de données pour la collecte des informations utilisateurs.",

            edTitle: "Formation académique",
            edText1: "ESIEA - École d’ingénieur·e·s d’un numérique utile",
            edText2: "Université Centrale",

            aboutTitle: "À propos de moi",
            aboutText:
                `Ingénieur diplômé en Software Engineering (ESIEA), passionné par le développement web et backend. 
                J’aime comprendre les systèmes en profondeur, résoudre des problèmes complexes et livrer des solutions propres et fiables. 
                <br>Curieux et ouvert d’esprit, je reste constamment à l’écoute des nouvelles technologies et 
                n’hésite pas à sortir de ma zone de confort pour apprendre, m’adapter et évoluer.`,

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
                "Currently seeking a full-time or fixed-term position as a junior software engineer to apply and grow my technical skills. <br>Motivated, adaptable and solution-oriented, I am ready to take on new challenges.",

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
                "• Automation of functional and non-regression tests on Ocean, a SAP Analytics Cloud module integrated with Microsoft Excel.",
            expText_1:
                "• Tool comparison and recommendation of the most suitable solution.",

            expIntern2: "Opinaka — Software Development Intern",
            expText2:
                "• Development of Elasticsearch plugins and interfaces using Strapi & Gatsby.",
            expText_2: "• Creation of a JSON dropdown list from data.",

            expIntern3:
                "Civil Aviation and Airports Authority (OACA TN) — Software Development Intern",
            expText3:
                "• Implementation of a management application for employer declarations.",
            expText_3:
                "• Design and setup of an Oracle database for user information.",

            expIntern4: "SWIM IT — Software Development Intern",
            expText4: "• Implementation of a taxi management application.",
            expText_4:
                "• Creation of a database for collecting user information.",

            edTitle: "Education",
            edText1: "ESIEA - School of Engineering for a Useful Digital World",
            edText2: "Central University",

            aboutTitle: "About me",
            aboutText:
                `Software Engineering graduate (ESIEA), passionate about web and backend development. 
                I enjoy understanding systems in depth, solving complex problems and delivering clean and reliable solutions. 
                <br>Curious and open-minded, I stay up to date with new technologies and willingly step out of my comfort zone to learn, adapt and grow.`,

            msgSuccess: "Message sent successfully!",
            msgTextEmail:
                "Please enter a valid email address (e.g. example@gmail.com)",
            msgSend: "Send",

            namePlaceholder: "Your Full Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message"
        }
    };

    btnFR.addEventListener("click", () => {
        switchLanguage("fr");
    });

    btnEN.addEventListener("click", () => {
        switchLanguage("en");
    })

    function switchLanguage(lang) {

        //* Tous les textes
        dataI18n.forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        //* Tous les placeholders
        dataI18nPlaceholder.forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        
        btnFR.classList.toggle("active", lang === "fr");
        btnEN.classList.toggle("active", lang === "en");

        localStorage.setItem("lang", lang);
    }
    switchLanguage(savedLang);
*/

/* ANIMATIONS */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll(
  ".project-card, .timeline-item, .certifications-list li"
).forEach(el => observer.observe(el));

/* CONTACT FORM */
if (successMessage) successMessage.style.display = "none";

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector("button");

        if (!emailRegex.test(emailInput.value)) {
            emailError.style.display = "block";
            emailInput.focus();
            return;
        } else {
        emailError.style.display = "none";
        }

        submitBtn.disabled = true;

        try {
            const res = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });

            if( res.ok && successMessage ) {
                successMessage.classList.remove("hide");
                successMessage.classList.add("show");
                successMessage.style.display = "block";

                form.reset();

                // Disparition après 3 secondes
                setTimeout(() => {
                    successMessage.classList.remove("show");
                }, 4000)
            }
        } 
        catch (error) {
            console.log("Erreur de l'envoie du formulaire", error);
        } 
        finally {
            submitBtn.disabled = false;
        }
    });
}

/* SMOOTH SCROLL */
ahref.forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));
        if(!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});

/* BACK TO TOP */
window.addEventListener("scroll", () => {
    if (window.scrollY > 1360) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

/* HAMBURGER */
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    })
})
