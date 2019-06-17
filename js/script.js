wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
// HTML animation
var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};
// -----

// Burger menu
(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery);
// -----

//Slow Scroll Menu
$(document).ready(function(){
  $("#menu__links").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500,);
  });
});
// -----

// Go Top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// -----

// Video Section 6
// Получить видео c конкретным id
var video = document.getElementById("myVideo");
// Получить кнопку
var btn = document.getElementById("myBtn");
// Функция запуска, остановки видео и замены текста на кнопке
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Пауза";
  } else {
      video.pause();
      btn.innerHTML = "Запуск";
  }
}
// -----

// Получить видео c конкретным id
var video = document.getElementById("myVideo");

// Получить кнопку
var btn = document.getElementById("myBtn");

// Функция запуска, остановки видео и замены текста на кнопке
function myFunction() {
if (video.paused) {
  video.play();
  btn.innerHTML = "Пауза";
} else {
  video.pause();
  btn.innerHTML = "Запуск";
}
}
  

