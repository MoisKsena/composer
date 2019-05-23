import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js';

//<!-- Initialize Swiper -->
// var swiper = new Swiper('.swiper-container', {
//   direction:	'horizontal',
//   //loop: true,
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    //loop: true
  })
});

//Скрыть/показать элемент по клику 
$(document).ready(function() {
  $('.projects__demo').on('click', '.projects__demo-click', function() {
    $(this).toggleClass('red').siblings('.projects__demo-slide').slideToggle(0);
  });
});



