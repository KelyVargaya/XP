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
 
  // Control animacion nave
  var $body=$("#hero"),
	$heroA=$("#nave"),
	$heroB=$("#fondo-azul");

	TweenMax.set( $heroA, { transformStyle: 'preserve-3d'  });
  TweenMax.set( $heroB, { transformStyle: 'preserve-3d'  });
	
	$body.mousemove(function(e) {
		
		var sxPos =  e.pageX / $body.width()  * 100 - 50;
		var syPos =  e.pageY / $body.height() * 100 - 50;
    
		TweenMax.to( $heroA, 1, { rotationY: 0.01 * sxPos, rotationX: 0.02 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
    TweenMax.to( $heroB, 1, { rotationY: -0.025 * sxPos, rotationX: -0.02 * syPos, rotationZ: 0, transformPerspective:500, transformOrigin:'center center' });
	});
  

	let i=2;

	
		var radius = 200;
		var fields = $('.itemDot');
		var container = $('.dotCircle');
		var width = container.width();
 radius = width/2.5;
 
		 var height = container.height();
		var angle = 0, step = (2*Math.PI) / fields.length;
		fields.each(function() {
			var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
			var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
			if(window.console) {
				console.log($(this).text(), x, y);
			}
			
			$(this).css({
				left: x + 'px',
				top: y + 'px'
			});
			angle += step;
		});
		

		var header = $('.marca-planeta-4');
    setTimeout(function() {
      header.addClass('planeta-active');
    }, 15000);

  })(jQuery);

  /* ----- Control video ----- */
  function myFunction(){ 
    var playVideo = document.getElementById('bienvenida');
    var button = document.getElementById('btn-play');

    if (playVideo.paused) {
       playVideo.play();
        button.innerHTML= "<i class='icofont-ui-pause'></i>";
    } else {
       button.innerHTML= "<i class='icofont-ui-play'></i>";
       playVideo.pause();
    }
    }; 
