var swiper = new Swiper(".mySwiper", {
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    868: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1250: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
