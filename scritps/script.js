console.log('script!');

var swiper = new Swiper(".specials__swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 100,
      }
    },
  //pagination: {
    //el: ".swiper-pagination",
    //clickable: true,
  //},
});