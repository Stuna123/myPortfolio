const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");
const ahref = document.querySelectorAll('a[href^="#"]');
const backToTopBtn = document.getElementById("backToTop");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ================= ANIMATIONS ================= */
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

/* ================= CONTACT FORM ================= */
if (successMessage) successMessage.style.display = "none";

if (form) {
    form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = "block";
        emailInput.focus();
        return;
    } else {
      emailError.style.display = "none";
    }

    const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
    });

    if (response.ok && successMessage) {
        // Reset ancien état
        successMessage.classList.remove("hide");
        successMessage.classList.add("show");
        successMessage.style.display = "block";

        form.reset();

        // Disparition après 5 secondes
        setTimeout(() => {
        successMessage.classList.add("hide");

        setTimeout(() => {
            successMessage.classList.remove("show", "hide");
            successMessage.style.display = "none";
        }, 300); // durée animation CSS
        }, 5000);
    }
    });
}

/* ================= SMOOTH SCROLL ================= */
ahref.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});

/* ================= BACK TO TOP ================= */
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
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
