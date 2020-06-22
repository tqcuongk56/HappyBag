$(document).ready(function() {
	$('.banner .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    dots: false,
	    nav: true,
	    // navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:1,
	        },
	        1000:{
	            items:1,
	        }
	    },
	});
	$('.products .owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    dots: false,
	    nav: true,
	    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:4,
	        }
	    },
	});

	$('.news .owl-carousel').owlCarousel({
	    loop:true,
	    margin:20,
	    dots: false,
	    nav: false,
	    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:3,
	        }
	    },
	});

	$('.product-related .owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    dots: false,
	    nav: true,
	    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:4,
	        }
	    },
	});

	$('.post-related .owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    dots: false,
	    nav: true,
	    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:3,
	        }
	    },
	});
	$('.step .owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    dots: false,
	    nav: false,
	    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:1,
	        },
	        1000:{
	            items:1,
	        }
	    },
	});
	$('.intro-list .owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    dots: false,
	    nav: true,
	    // navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:2,
	        }
	    },
	});
	$('.promise .owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    dots: false,
	    nav: true,
	    // navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:1,
	        },
	        1000:{
	            items:1,
	        }
	    },
	});

	var owl = $('.product-preview .owl-carousel');
    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
        items: 1,
        center: true,
        nav: false,
        thumbs: true,
        thumbImage: false,
        thumbsPrerendered: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
        navText: ['<span class="prev">＜</span>','<span class="next">＞</span>'],
    });

    //make tabs click single-product
    
    function activeTab(obj)
    {
        $('.tab li').removeClass('active');
 
        $(obj).addClass('active');
 
        var id = $(obj).find('a').attr('href');
 
        $('.tabContents > div').hide();

        $(id) .show();
    }
 
    $('.tab li').click(function(){
        activeTab(this);
        return false;
    });

    activeTab($('.tab li:first-child'));

  //   //active fancybox
	 // $('.fancybox').fancybox({
	 // 		openEffect	: 'elastic',
		//     closeEffect	: 'elastic',
	 // });

	 $('.number-btn > span').click(function(){
	 	$(this).parent().find('.popup').fadeIn();
	 });

	 $('.popup-close').on('click', function(event) {
	 	$(this).parents('.popup').fadeOut();
	 });    
	$(document).mouseup(function (e){

		var container = $(".popup-content");

		if (!container.is(e.target) && container.has(e.target).length === 0){

			container.parent().fadeOut();
			
		}	
	});


	$('.mobile-icon').on('click', function(event) {
		$(this).parents('body').find('.main-menu').toggleClass('show');
		$(this).parents('body').find('.fixed').toggleClass('show');
		$(this).find('span').toggleClass('trigger');
	});	

	$('.fixed').on('click', function(event) {
		
		$(this).parents('body').find('.main-menu').removeClass('show');
		$(this).parents('body').find('.mobile-icon span').removeClass('trigger');
		$(this).removeClass('show');
	});

	$('li.has-sub i').on('click', function(event) {
		$(this).parent().find('ul.sub-menu').slideToggle();
	});	
});