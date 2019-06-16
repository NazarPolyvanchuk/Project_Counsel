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

//Slow Scroll Menu
$(document).ready(function(){
      $("#menu__links").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
          top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
      });
  });
// -----
  

