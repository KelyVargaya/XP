!(function($) {
    "use strict";

    $(window).scroll(function() {
      if ($(this).scrollTop() > 140) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });

    if ($(window).scrollTop() > 180) {
      $('#header').addClass('header-scrolled');
    }
    
    if ($('.nav-menu').length) {
      var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
     /* $('body').append($mobile_nav);
      $('.mobile-nav').append('<div class="logo-menu"><img src="img/logo-color.png" class="img-fluid"></div>')
      $('#menu-mobil').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
      $('body').append('<div class="close-button-menu"><button type="button" class="mobile-nav-toggle"><i class="icofont-close"></i></button></div>');*/
  
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.close-button-menu').toggle();
      });
  
      $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      });
  
      $(document).click(function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.close-button-menu').fadeOut();
            $('.logo-menu').fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }

  
    // Animaciones
    function aos_init() {
      AOS.init({
        duration: 1000,
        once: true
      });
    }
    $(window).on('load', function() {
      aos_init();
    });
  
  })(jQuery);