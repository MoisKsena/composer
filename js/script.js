/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//Swiper \nvar swiper1 = new Swiper('.j-swiper-1', {\n  slidesPerView: 3,\n  spaceBetween: 30,\n  slidesPerGroup: 1,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  },\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev'\n  },\n  autoplay: {\n    delay: 5000\n  }\n});\nvar swiper2 = new Swiper('.j-swiper-2', {\n  slidesPerView: 3,\n  spaceBetween: 30,\n  freeMode: true,\n  loop: true,\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  },\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  }\n}); //show textblock\n\n$(\"#about__content-text\").fadeIn(5000); //PORTFOLIO\n// $(\".img-description\", \".img-descriptions\").hide();\n// $(\".img-description[data-imageid=\"+ imageId +\"]\", \".img-descriptions\").show();\n//modal open\n\nfunction showPopup() {\n  var popupLayer = document.querySelector('.overlay');\n  var showPopup = document.querySelector('.feedback__modal');\n  showPopup.classList.add('modal--open');\n  popupLayer.style.display = \"block\";\n}\n\n;\n\nfunction closePopup() {\n  var popupLayer = document.querySelector('.overlay');\n  var closePopup = document.querySelector('.modal--open');\n  closePopup.classList.remove('modal--open');\n  popupLayer.style.display = \"none\";\n}\n\n;\nvar page = document.querySelector(\".js-modal\");\npage.addEventListener('click', function (event) {\n  event.preventDefault();\n  showPopup();\n});\nvar closeModal = document.querySelector(\".modal__content--btn\");\ncloseModal.addEventListener('click', function (event) {\n  event.preventDefault();\n  closePopup();\n});\nvar pageModal = document.querySelector(\".overlay\");\npageModal.addEventListener('click', function (event) {\n  var popUp = document.querySelector(\".modal__content\");\n  var isInPopUp = popUp.contains(event.srcElement) || popUp == event.srcElement;\n\n  if (!isInPopUp) {\n    event.preventDefault();\n    closePopup();\n  }\n\n  ;\n}); //Скрыть/показать элемент по клику \n// $(document).ready(function() {\n//   $('.projects__demo').on('click', '.projects__demo-click', function() {\n//     $(this).toggleClass('red').siblings('.projects__demo-slide').slideToggle(0);\n//   });\n// });\n//mp3 treck\n\n(function ($) {\n  $(document).ready(function () {\n    // обработчик нажатия на кнопку плей\n    $('.music__player button').click(function () {\n      var parent = $(this).parent();\n      var button = $(this);\n      var audio = $('audio', parent)[0];\n      var duration = $('.music__player--duration', parent); // переключение состояния плеера и смена картинки на кнопке - плей или пауза //'url(/images/play.png)'   'url(/images/pause.png)' \n\n      if (audio.paused == false) {\n        audio.pause();\n        button.css('background-image', 'url(img/play-button-white.png)');\n        button.css('background-size', 'cover');\n      } else {\n        audio.play();\n        button.css('background-image', 'url(img/pause-button-white.png)');\n        button.css('background-size', 'cover');\n      }\n    }); // по окончанию трека на кнопку устанавливается картинка плей\n\n    $('.music__player audio').on('ended', function () {\n      var player = $(this).parent();\n      var button = $('button', player);\n      button.css('background-image', 'url(img/play-button-white.png)');\n    }); // обновление текущей позиции воспроизведения\n\n    $('.music__player audio').on('timeupdate', function () {\n      var audio = this;\n      var player = $(this).parent();\n      var duration = $('.music__player--duration', player);\n      var date = new Date(audio.duration - audio.currentTime * 1000);\n      duration.html(date.getMinutes() + ':' + date.getSeconds());\n      var progress = $('.progressbar', player);\n\n      if (progress && !progress.attr('data-sliding')) {\n        $(progress).slider(\"value\", audio.currentTime / audio.duration * 100);\n      }\n    }); // ползунок\n\n    $('.music__player .progressbar').slider({\n      value: 0,\n      stop: function stop(event, ui) {\n        var parent = $(this).parent();\n        var audio = $('audio', parent)[0];\n        audio.currentTime = ui.value * audio.duration / 100;\n        $(this).attr('data-sliding', null);\n      },\n      start: function start(event, ui) {\n        $(this).attr('data-sliding', 'true');\n      }\n    });\n  });\n})(jQuery);\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });