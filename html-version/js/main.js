// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});

// Navbar Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// Mobile Menu
function openMobileMenu() {
  document.querySelector(".mobile-nav").classList.add("active");
  document.querySelector(".mobile-nav-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  document.querySelector(".mobile-nav").classList.remove("active");
  document.querySelector(".mobile-nav-overlay").classList.remove("active");
  document.body.style.overflow = "";
}

// Theme Toggle
function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector(".theme-toggle i");

  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  }
}

// Load Theme
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    document
      .querySelector(".theme-toggle i")
      .classList.replace("fa-moon", "fa-sun");
  }
});

// Carousel
if (document.querySelector(".carousel-container")) {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slide");

  function showSlide(index) {
    slides.forEach((s) => s.classList.remove("active"));
    slides[index].classList.add("active");
  }

  window.changeSlide = function (dir) {
    currentSlide += dir;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
  };

  setInterval(() => changeSlide(1), 5000);
  showSlide(0);
}

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => q.parentElement.classList.toggle("active"));
});
