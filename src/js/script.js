//import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js';




var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 130,
  freeMode: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});



//Скрыть/показать элемент по клику 
$(document).ready(function() {
  $('.projects__demo').on('click', '.projects__demo-click', function() {
    $(this).toggleClass('red').siblings('.projects__demo-slide').slideToggle(0);
  });
});



