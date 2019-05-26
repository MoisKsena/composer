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


//mp3 treck

// обработчик нажатия на кнопку плей
$('.music__player button').click(function () {
	var parent = $(this).parent();
	
	var button = $(this);
	var audio = $('audio', parent)[0];
	var duration = $('.music__player--duration', parent);
	
	// переключение состояния плеера и смена картинки на кнопке - плей или пауза //'url(/images/play.png)'   'url(/images/pause.png)' 
	if (audio.paused == false) {
		audio.pause();
    button.css('background', 'url(../img/play-button.png)');
    button.css('background-size', 'cover');
	} else {
		audio.play();
		button.css('background', 'url(../img/pause-button.svg)');
	}
	
	// по окончанию трека на кнопку устанавливается картинка плей
	$(audio).on('ended', function() {
		button.css('background', 'url(../img/play-button.svg)');
	});
	
	// обновление текущей позиции воспроизведения
	$(audio).on('timeupdate', function() {
		var date = new Date(audio.currentTime * 1000);
		duration.html(date.getMinutes()+':'+date.getSeconds());
	});
});



