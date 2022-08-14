/* eslint-disable */
import '../scss/main.scss';
import 'magnific-popup';
import Swiper from 'swiper/bundle';

$('.popup-youtube').magnificPopup({ 
    type: 'iframe' 
 });

 $('.first__nav-li_1').mouseenter(function () {
  $('.circles').toggleClass('active1');
  $(this).toggleClass('active');
  $('.circles').removeClass('active2');
  $('.first__nav-li_2').removeClass('active');
});

$('.first__nav-li_2').mouseenter(function () {
  $('.circles').toggleClass('active2');
  $('.circles').removeClass('active1');
  $('.first__nav-li_1').removeClass('active');
  $(this).toggleClass('active');
});


$('.daily__table-row_content').click( function() {
    if($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $('.daily__table-row_content').removeClass('active');
        $(this).addClass('active');
    }
});

const events = new Swiper(".events__slider", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        991: {
          spaceBetween: 69,
        },
      },
  });

  const articleGallery = new Swiper(".article__gallery", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        991: {
          spaceBetween: 37,
        },
      },
  });

  const  partReviews = new Swiper(".part-reviews__slider", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 12,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

  const ruleSlider = new Swiper(".rule-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  });
  
  const achSlider = new Swiper(".ach-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        991: {
          slidesPerView: 2,
          spaceBetween: 91,
        },
      },
  });

  const ourVk = new Swiper(".ourvk__gallery", {
    slidesPerView: 2,
    spaceBetween: 9,
    freeMode: true,
    loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        991: {
          slidesPerView: 5,
        },
      },
  });

$('ul.contacts__nav').on('click', 'li:not(.active)', function () {
  $(this).addClass('active').siblings().removeClass('active').closest('div.contacts__map').find('div.contacts__block').removeClass('active').eq($(this).index()).addClass('active');
});

$('ul.feedback__nav').on('click', 'li:not(.active)', function () {
  $(this).addClass('active').siblings().removeClass('active').closest('div.feedback__wrapper').find('div.feedback__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('ul.events-page__nav').on('click', 'li:not(.active)', function () {
  $(this).addClass('active').siblings().removeClass('active').closest('div.events-page__wrapper').find('div.events-page__block').removeClass('active').eq($(this).index()).addClass('active');
});

$('ul.accord-red__nav').on('click', 'li:not(.active)', function () {
  $(this).addClass('active').siblings().removeClass('active').closest('div.accord-red').find('div.accord-red__block').removeClass('active').eq($(this).index()).addClass('active');
});

$('ul.rule__nav').on('click', 'li:not(.active)', function () {
  $(this).addClass('active').siblings().removeClass('active').closest('div.rule__accordion').find('div.rule-slider').removeClass('active').eq($(this).index()).addClass('active');
});

$(window).on("scroll", function() {
  let scrollInfo = $(window).scrollTop();
  $('.circles').css('transform', `translateY(${scrollInfo}px)`);
});

$(window).on("scroll", function() {
  let scrollInfo = $(window).scrollTop();
  let calcHelper = $('.main-info__link').offset().top - $('.js--objHelper').offset().top;
  if (calcHelper <= -286) {
    $('.main-info__object').css('position', 'absolute');
    $('.main-info__object').css('bottom', 'auto');
    $('.main-info__object').css('top', '535px');
  } else {
    $('.main-info__object').css('position', 'fixed');
    $('.main-info__object').css('bottom', '80px');
    $('.main-info__object').css('top', 'auto');
  }
});


$(window).on("scroll", function() {
  let scrollHelper = $('.helpScroller').offset().top - $('.gallery-block__row').offset().top;
  scrollHelper = scrollHelper / 4;
  if(scrollHelper > 0) {
    $('.gallery-block__row').css('transform', `translateX(${scrollHelper}px)`);
  }
});

$('.header__openMenu').click(function () {
  $('.dropnav').toggleClass('active');
  $(this).toggleClass('active');
  $('.header').toggleClass('active');
  if($(this).hasClass('active')) {
    $(this).html('<i><span></span><span></span><span></span></i>Закрыть');
  } else {
    $(this).html('<i><span></span><span></span><span></span></i>Открыть меню');
  }
  $('html').toggleClass('locked');
});

$('.header__call').click(function () {
  $('html').addClass('locked');
  $('.modal_call').addClass('active');
  $('.backdrop').addClass('active');
});

$('.modal__close, .backdrop').click(function () {
  $('html').removeClass('locked');
  $('.modal').removeClass('active');
  $('.backdrop').removeClass('active');
});