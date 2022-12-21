(function ($) {

  $(document).ready(function () {
    // TODO SVG Sprite init in IE/SAFARI
    svg4everybody();
  });

  new Swiper('.swiper-container', {
    speed: 1000,
    spaceBetween: 60,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  $('#date').mask('99/99/9999');

  $('#time').mask('99:99:99');

  // TODO Burger
  $('button.menu').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('menu-active');
    // $('body').toggleClass('overflow');
  });
  $('.wrapper').on('click', function () {
    $('button.menu').removeClass('active');
    $('.header__nav').removeClass('menu-active');
    // $('body').removeClass('overflow');
  });
  // TODO Wrapper click burger disabled
  $('button.menu, .header__nav').on('click', function (event) {
    event.stopPropagation();
  });


})(jQuery);