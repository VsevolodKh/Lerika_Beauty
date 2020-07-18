// Smooth scroll

$(function(){

  $(window).scroll(function() {
    if ($(this).scrollTop() > 900) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

  $("a[href^='#']").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
  });

  // Modal

  $('[data-modal=booking]').on('click', function() {
    $('.overlay, #booking').fadeIn();
  });

  $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
  });

});

