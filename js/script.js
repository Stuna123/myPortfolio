/*  Reveal on scroll  */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/*  Mobile menu  */
const hamburgerBtn = document.querySelector(".hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  });
});

/*  Contact form  */
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (form && emailInput && emailError && successMessage) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector("button");

    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.classList.remove("hidden");
      emailInput.focus();
      return;
    }

    emailError.classList.add("hidden");
    submitBtn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        successMessage.classList.remove("hidden");
        form.reset();

        setTimeout(() => {
          successMessage.classList.add("hidden");
        }, 4000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/*  Back to top  */
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (!backToTopBtn) return;

  if (window.scrollY > 500) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}