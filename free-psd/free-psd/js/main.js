$(function () {

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next">1</button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev">2</button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function () {
    $('.menu ul').slideToggle();
  });

});