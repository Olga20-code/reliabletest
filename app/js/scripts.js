'use strict';

$(document).ready(function() {

  // ัะบัั
  $(".go-to").on('click',function(e){

    e.preventDefault();

    let anchor = $(this).attr("href");

    if ($(anchor).length) {
      let run = $(anchor).offset().top;
      $('body,html').stop().animate({scrollTop: run}, 1500);
    } else {
      console.warn("ID don't search!")
    }
  });

  $(".mobile-menu").on("click", function(){
    $(this).toggleClass("active");
    $(".main-header .menu").stop().slideToggle( "slow", function(){
      if ($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
    $('body').toggleClass("bg-menu");
  });

  $.fn.forceNumbericOnly = function () {
    return this.each(function () {
      $(this).keydown(function (e) {
        var key = e.charCode || e.keyCode || 0;
        return (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >=
          48 && key <= 57) || (key >= 96 && key <= 105) || key == 107 || key ==
          109 || key == 173 || key == 61);
      });
    });
  };

  $('input[type=tel]').forceNumbericOnly();

  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      // slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },

    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },

  });

  let header = $('.main-header'),
      scrollPrev = 0;

  $(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if ( scrolled > 50 && scrolled > scrollPrev ) {
      header.addClass('out');
    }
    else {
      header.addClass('out-menu');
      header.removeClass('out');

      if (scrolled === 0){
        header.removeClass('out-menu');
        header.addClass('main-header');
      }
    }
    scrollPrev = scrolled;
  });

});
