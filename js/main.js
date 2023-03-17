const owl = $(".owl-carousel");

$(document).ready(function () {
  owl.owlCarousel({
    loop: true,
    dots: false,
    startPosition: 2,
    center: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      769: {
        items: 1.5,
        margin: 10,
      },
      1001: {
        items: 1.5,
        margin: 20,
      },
    },
  });
});

const btnPrev = document.querySelector(".slider__btn--prev");
const btnNext = document.querySelector(".slider__btn--next");

btnPrev.onclick = function () {
  owl.trigger("prev.owl.carousel");
  console.log("1");
};

btnNext.onclick = function () {
  owl.trigger("next.owl.carousel");
  console.log("2");
};

// Nav icon
const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");

navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon--active");
  document.body.classList.toggle("no-scroll");
};
