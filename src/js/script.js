//burger menu

function hideMenu() {
  $('.main-nav__burger').hide();
  $('.main-nav__burger-menu').hide();
}

function toggleMenu() {
  $('.main-nav__burger').toggle();
  $('.main-nav__burger-menu').toggle();
}

$('.main-nav__burger').click(function()
  {
    toggleMenu();
  });





//Swiper 

var swiper1 = new Swiper('.j-swiper-preview', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 6000,
  // },
  on:{
    slideChange: function(){
      let imgId = $('img', this.slides[this.realIndex]).attr('data-imageid');
      $(".img-description", ".img-descriptions").hide();
      $(".img-description[data-image-id="+ imgId +"]", ".img-descriptions").fadeIn(3000);
    }
  }
});


var swiper2 = new Swiper('.j-swiper-description', {
  slidesPerView: 3,
  spaceBetween: 30,
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

// var swiper3 = new Swiper('#swiper-3', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   freeMode: true,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });

// var swiper4 = new Swiper('.j-swiper-4', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   freeMode: true,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });

// var swiper5 = new Swiper('.j-swiper-5', {
//   slidesPerView: 3,
//   spaceBetween: 15,
//   freeMode: true,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });

//show textblock

$("#about__content-text").fadeIn(5000);

//PORTFOLIO

  // $(".img-description", ".img-descriptions").hide();
  // $(".img-description[data-imageid="+ imageId +"]", ".img-descriptions").show();


//modal open

function showPopup() {
  let popupLayer = document.querySelector('.overlay');
  let showPopup = document.querySelector('.feedback__modal');

  showPopup.classList.add('modal--open');
  popupLayer.style.display = "block";
};

function closePopup() {
  let popupLayer = document.querySelector('.overlay');
  let closePopup = document.querySelector('.modal--open');

  closePopup.classList.remove('modal--open');
  popupLayer.style.display = "none";
};

var page = document.querySelector(".js-modal");
page.addEventListener('click', event => {
  event.preventDefault();

  showPopup();

});

var closeModal = document.querySelector(".modal__content--btn");
closeModal.addEventListener('click', event => {
  event.preventDefault();

  closePopup();

});

var pageModal = document.querySelector(".overlay");
pageModal.addEventListener('click', event => {
    var popUp = document.querySelector(".modal__content");
    var isInPopUp = popUp.contains(event.srcElement) || popUp == event.srcElement;
    if (!isInPopUp) {
      event.preventDefault();

      closePopup();
    };
  });


//Скрыть/показать элемент по клику 

// $(document).ready(function() {
//   $('.projects__demo').on('click', '.projects__demo-click', function() {
//     $(this).toggleClass('red').siblings('.projects__demo-slide').slideToggle(0);
//   });
// });



//mp3 treck

(function($) {
	$(document).ready(function() {


  // обработчик нажатия на кнопку плей
  $('.music__player--button').click(function () {
    var parent = $(this).parent();
    
    var button = $(this);
    var audio = $('audio', parent[0])[0];
    var duration = $('.music__player--duration', parent);
    
    // переключение состояния плеера и смена картинки на кнопке - плей или пауза //'url(/images/play.png)'   'url(/images/pause.png)' 
    if (audio.paused == false) {
      audio.pause();
      button.css('background-image', 'url(img/play-button-white.png)');
      button.css('background-size', 'cover');
    } else {//debugger 
      audio.play();
      button.css('background-image', 'url(img/pause-button-white.png)');
      button.css('background-size', 'cover');
    }  
  });

  // по окончанию трека на кнопку устанавливается картинка плей
$('.music__player audio').on('ended', function() {
    var player = $(this).parent();
    var button = $('button', player);
    button.css('background-image', 'url(img/play-button-white.png)');
  });


// обновление текущей позиции воспроизведения
$('.music__player audio').on('timeupdate', function() {
  
  var audio = this;
  var player = $(this).parent();
  var duration = $('.music__player--duration', player);
  
  var date = new Date(audio.duration - audio.currentTime * 1000);
  duration.html(date.getMinutes()+':'+date.getSeconds());
  

  var progress =  $('.progressbar', player);
  if(progress && !progress.attr('data-sliding'))
  {
    $(progress).slider( "value", audio.currentTime / audio.duration * 100);
  }

  
});


// ползунок
$('.music__player .progressbar').slider({
  value: 0,
  stop: function( event, ui ) {
   
    var parent = $(this).parent();
    var audio = $('audio', parent)[0];

    audio.currentTime = ui.value * audio.duration / 100;

    $(this).attr('data-sliding', null);
  }, 
  start: function( event, ui ) {
    $(this).attr('data-sliding', 'true');
  }
});


    
	});
})(jQuery);


