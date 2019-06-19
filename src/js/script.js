import { inherits } from "util";

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

var swipers = {};

function initSwipers(){
  
  $('.j-swiper-description').each(function(){
    var imgId = $(this).parents('article').attr('data-image-id');
    swipers[imgId] = new Swiper($(this), {
      slidesPerView: 3,
      spaceBetween: 15,
      slidesPerGroup: 1,
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: true
    });
  });


  swipers.main = new Swiper('.j-swiper-preview', {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-btnnext',
      prevEl: '.swiper-btnprev',
    },
    on:{
      slideChange: function(){
        let imgId = $('img', this.slides[this.realIndex]).attr('data-imageid');
        $(".img-description", ".img-descriptions").hide();
        //$("#ytplayer", ".img-descriptions").stopVideo();
       // $('#ytplayer').get(0).stopVideo();
        $(".img-description[data-image-id="+ imgId +"]", ".img-descriptions").fadeIn(3000);
        if(swipers.current) swipers.current.autoplay.stop();
        swipers.current = swipers[imgId]; 
        if(!swipers.current.running) swipers.current.autoplay.start();
      }
    }
  });


}


//show textblock

$("#about__content-text").fadeIn(5000);


//modal open

function showPopup(selector) {
  let popupLayer = document.querySelector('.overlay');
  let showPopup = document.querySelector(selector);

  showPopup.classList.add('modal--open');
  popupLayer.style.display = "block";
};

function closePopup() {
  let popupLayer = document.querySelector('.overlay');
  let closePopup = document.querySelector('.modal--open');

  closePopup.classList.remove('modal--open');
  popupLayer.style.display = "none";
};

var page = $(".js-modal");
page.on('click', event => {
  event.preventDefault();

  showPopup('.feedback__modal');

});

var closeModal = $('.btn-close');
closeModal.on('click',event => {
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



function initAudio()
{
  $('audio', '.music').each(function()
  {
    this.onloadedmetadata = function()
    {
      var duration = $('.music__player--duration', $(this).parent());
  
      var date = new Date((this.duration - this.currentTime) * 1000);
      duration.html(date.getMinutes()+':'+date.getSeconds());
    };
  });


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
    } else {
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
  
  var date = new Date((audio.duration - audio.currentTime) * 1000);
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

}


function initFormSubmitHandler()
{
  $("form").data("validator").settings.submitHandler = function()
  {
    showPopup('.feedback__form-success');

    return false;
  }
}

(function($) {
	$(document).ready(function() {
    
    initSwipers(); //swiper
    initAudio(); //mp3 treck
    initFormSubmitHandler();  
});
})(jQuery);


