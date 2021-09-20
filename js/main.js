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

    // Pregunas seccion

    
      $(".panel-preguntas").hide();
      $("#etapa-1").show();

  
  $(document).on('click', "#siguiente", function(){
      var pageCount = $(".panel-preguntas").length;
      var position = $(".panel-preguntas:visible").data('position');
      $(".panel-preguntas:visible").hide();
      if(position < pageCount){
          $("#etapa-" + (position+1)).show();
      }
      else
      {
         
          $("#etapa-1").show();

      }
  });
 
  
  })(jQuery);