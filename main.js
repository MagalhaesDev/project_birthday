// ========== MENU HAMBURGUER ==========

const nav = document.querySelector("nav");
const closeModal = document.querySelector(".close-modal");

function openMenuModal() {
  nav.classList.add("open-modal");
  closeModal.style.display = "block";
}

function closeMenuModal() {
  nav.classList.remove("open-modal");
  closeModal.style.display = "none";
}

// ========== CAROUSEL ==========

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 3,
      setWrapperSize: true,
    },
  },
});

// ========== SCROLLREVEALJS ==========

const scrollRevealTop = {
  origin: "top",
  distance: "50px",
  duration: 1500,
  reset: true,
};

const scrollRevealLeft = {
  origin: "left",
  distance: "10px",
  duration: 1500,
  reset: true,
};

const scrollRevealRight = {
  origin: "right",
  distance: "10px",
  duration: 1500,
  reset: true,
};

ScrollReveal().reveal(
  `.img-meeting-pleople, .introduction, .swiper, .section-three h2, .section-four h2, .section-five h2`,
  scrollRevealTop
);

ScrollReveal().reveal(
  `.introduction, .img-team, .img-history, .section-four .pair, .social-midia`,
  scrollRevealRight
);

ScrollReveal().reveal(
  `.img-meeting-pleople, .message-team, .message-history, .section-four .odd, form`,
  scrollRevealLeft
);
