const navbar = document.getElementsByClassName("navbar")[0];
const header = document.querySelector(".showcase");
const hamburguer = document.querySelector(".hamburguer");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const headerOptions = {
  threshold: 0.95,
};

const appearOptions = {
  threshold: 0.75,
};

const slidersOptions = {};

const headerObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbar.classList.remove("navbar-scrolled");
      hamburguer.classList.remove("hamburguer-scrolled");
    } else {
      navbar.classList.add("navbar-scrolled");
      hamburguer.classList.add("hamburguer-scrolled");
    }
  });
}, headerOptions);

headerObserver.observe(header);

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove("appear");
    } else {
      entry.target.classList.add("appear");
    }
  });
}, appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));

const slidersOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
    }
  });
}, slidersOptions);

sliders.forEach((slider) => slidersOnScroll.observe(slider));
