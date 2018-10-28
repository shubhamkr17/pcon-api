(function() {// Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
// Place any jQuery/helper plugins in here.

var s; 

$(function(){
	var windowHeight; 
	init(); 
	
	$( window ).resize(function() {
		init(); 
	});
	
	$('[rel="popover"]').popover();
	
	$(window).scroll(function(e) {
        var winTop = $("body").scrollTop();
        var allSlides = $('.decades > .decade'); 
        
        $('#ScrollY').html(winTop);
		 
		activeSlide = Math.round(winTop / 1000)-1;
		
        if (activeSlide > -1) {
        	$('.app-nav li').removeClass('active').eq(activeSlide).addClass('active');
        }
    });
	
	$('.scroll-arrow').click( function () {
		$('html, body').animate({scrollTop: $('.decade2010').offset().top});
		$('.scroll-arrow').hide(); 
	}); 
	
	
	$('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
	    console.log(e); 
	    var target = this.hash;
	    var $target = $(target);
	    console.log($(this).attr('data-position')); 
	    $('html, body').stop().animate({
	        'scrollTop': $(this).attr('data-position')
	    }, 900, 'swing');
	});
	
	$('.popover-markup.share-social>.trigger').popover({
		html: true,
		title: '',
		content: function () {
			return $(this).parent().find('.content').html();
		},
		placement: 'left'
	});
	
	$('.popover-markup>.trigger').popover({
		html: true,
		title: function () {
			return $(this).parent().find('.title').html();
		},
		content: function () {
			return $(this).parent().find('.content').html();
		},
		placement: 'right'
	});
	
	function init() {
		
		if ($(window).width() < 950 || $('html').hasClass('lt-ie9') ) {
			if ( typeof s !== "undefined" && s) {
				s.destroy(); 
			}
			$('html').removeClass('js').addClass('no-js no-js-mode'); 
		} else {
			$('html').removeClass('no-js').removeClass('no-js-mode').addClass('js'); 
		}
		
		if ($('html').hasClass('no-js')) return; 
		
		windowHeight = $(window).height();
		
		$('.app-wrap .app-nav').remove();
		$('.app-wrap').append('<nav class="app-nav"><ul></ul></nav>');
		
		s = skrollr.init();
	
		//This is the main meat of the app 
		var YPos = 500;
		$('.decades > .decade').each( function (index, el) {
			YPos += 1000; 
			$('.app-wrap .app-nav > ul').append('<li><a data-position="'+YPos+'" href="#'+$(this).attr('id')+'"><span>'+$(this).data('nav')+'</span></a></li>'); 
			
		}); 
		
		var navOffset = ( windowHeight - $('.app-nav > ul').height() ) /2; 
		$('.app-nav > ul').css('top', navOffset); 

		return;
	}
});