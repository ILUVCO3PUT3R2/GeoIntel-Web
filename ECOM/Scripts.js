// script.js — interactive features: mobile nav, counter animation, carousel, form handling, newsletter
document.addEventListener("DOMContentLoaded", () => {
  // ---------- MOBILE NAVIGATION TOGGLE ----------
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.querySelector(".nav-links");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    // close nav when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // ---------- ACTIVE NAVIGATION HIGHLIGHT ON SCROLL ----------
  const sections = document.querySelectorAll("section, .hero-section");
  const navItems = document.querySelectorAll(".nav-link");
  function setActiveLink() {
    let current = "";
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });
    if (!current && window.scrollY < 100) current = "home";
    navItems.forEach(item => {
      item.classList.remove("active");
      const href = item.getAttribute("href").substring(1);
      if (href === current) item.classList.add("active");
    });
  }
  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  // ---------- STAT COUNTER ANIMATION (about section) ----------
  const statNumbers = document.querySelectorAll(".stat-number");
  let started = false;
  function startCounters() {
    if (started) return;
    const aboutSection = document.getElementById("about");
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      started = true;
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute("data-target"));
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            stat.innerText = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            stat.innerText = target;
          }
        };
        updateCounter();
      });
    }
  }
  window.addEventListener("scroll", startCounters);
  startCounters();

  // ---------- FEEDBACK CAROUSEL (interactive) ----------
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  if (track && prevBtn && nextBtn) {
    const cards = Array.from(track.children);
    const cardWidth = cards[0]?.getBoundingClientRect().width || 400;
    let currentIndex = 0;
    const updateCarousel = () => {
      const newTranslate = -currentIndex * cardWidth;
      track.style.transform = `translateX(${newTranslate}px)`;
    };
    nextBtn.addEventListener("click", () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
      } else {
        currentIndex = 0;
        updateCarousel();
      }
    });
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      } else {
        currentIndex = cards.length - 1;
        updateCarousel();
      }
    });
    window.addEventListener("resize", () => {
      const newWidth = cards[0]?.getBoundingClientRect().width;
      if (newWidth) updateCarousel();
    });
  }

  // ---------- CONTACT FORM HANDLER (interactive) ----------
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedbackMsg");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const msg = document.getElementById("contactMsg").value.trim();
      if (!name || !email) {
        formFeedback.innerText = "Please fill name and email.";
        formFeedback.style.color = "#c0392b";
        return;
      }
      formFeedback.innerText = `Thanks ${name}! We'll reply within 24h.`;
      formFeedback.style.color = "#2c7a4d";
      contactForm.reset();
      setTimeout(() => { formFeedback.innerText = ""; }, 4000);
    });
  }

  // ---------- FEEDBACK SUBMISSION (add to carousel dynamic) ----------
  const feedbackSubmitForm = document.getElementById("feedbackForm");
  const feedbackSubmitMsgDiv = document.getElementById("feedbackSubmitMsg");
  if (feedbackSubmitForm) {
    feedbackSubmitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("feedbackName");
      const commentInput = document.getElementById("feedbackComment");
      const name = nameInput.value.trim();
      const comment = commentInput.value.trim();
      if (!name || !comment) {
        feedbackSubmitMsgDiv.innerText = "Please enter both name and feedback.";
        feedbackSubmitMsgDiv.style.color = "#c0392b";
        return;
      }
      // Dynamically add new feedback card to carousel
      const trackContainer = document.getElementById("carouselTrack");
      if (trackContainer) {
        const newCard = document.createElement("div");
        newCard.classList.add("feedback-card");
        newCard.innerHTML = `<p class="feedback-text">"${escapeHtml(comment)}"</p><h4>— ${escapeHtml(name)}</h4><span>Customer</span>`;
        trackContainer.appendChild(newCard);
        // scroll to the new card after appending? just reset position to show appreciation
        const totalCards = trackContainer.children.length;
        if (totalCards > 0 && document.querySelector(".next-btn")) {
          // optional: move to new card if user wants, but better show success msg
        }
      }
      feedbackSubmitMsgDiv.innerText = "Thank you! Your feedback has been added.";
      feedbackSubmitMsgDiv.style.color = "#2c7a4d";
      feedbackSubmitForm.reset();
      setTimeout(() => { feedbackSubmitMsgDiv.innerText = ""; }, 3000);
    });
  }

  // helper for safe text
  function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
      if (m === "&") return "&amp;";
      if (m === "<") return "&lt;";
      if (m === ">") return "&gt;";
      return m;
    });
  }

  // ---------- NEWSLETTER SUBSCRIPTION ----------
  const newsletterBtn = document.getElementById("newsletterBtn");
  const newsletterEmail = document.getElementById("newsletterEmail");
  const newsMsg = document.getElementById("newsMsg");
  if (newsletterBtn) {
    newsletterBtn.addEventListener("click", () => {
      const email = newsletterEmail.value.trim();
      if (!email || !email.includes("@")) {
        newsMsg.innerText = "Valid email required.";
        newsMsg.style.color = "#ffaa88";
        return;
      }
      newsMsg.innerText = "Subscribed! You'll get updates.";
      newsMsg.style.color = "#a3e4d7";
      newsletterEmail.value = "";
      setTimeout(() => { newsMsg.innerText = ""; }, 3000);
    });
  }

  // Hero CTA interactive
  const ctaBtn = document.getElementById("heroCtaBtn");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  // mini map interaction for fun
  const miniMapDiv = document.getElementById("miniMap");
  if (miniMapDiv) {
    miniMapDiv.addEventListener("click", () => {
      alert("📍 Global headquarters: Delaware, USA — reachable for inquiries via contact form.");
    });
  }
});