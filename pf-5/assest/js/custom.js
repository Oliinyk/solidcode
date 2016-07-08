/*
Custom Jquery Condition For All Pages
=========================================================*/
$(document).ready(function() {
	/*
	Main Navigation Fuctions At All Pages
	=====================================================*/	
	var windowWidth = $(window).width();
	if (windowWidth < 768) {
	$('.home .toggleMenu').on('click', function(){
       $('.nav').appendTo('.toggleMenuContainer'); 
    });
	 $('.home .toggleMenu .fa').on('click', function(){
        $(".home .nav").slideToggle(200);   
        $(".home .toggleMenu .fa").toggleClass('fa-bars').toggleClass('fa-close'); open = false;
    });
	 $('.innerPage .toggleMenu').on('click', function(){
		  $(".innerPage .currentPage").toggle();
		  $(".innerPage .nav").slideToggle(200);   
		  $(".innerPage .toggleMenu i").toggleClass('active'); open = false;
		  $('.innerPage .nav').appendTo('.innerPage .toggleMenuContainer');
		  $(".innerPage .toggleMenuContainer").toggleClass("expanded")
	  });
	 $(".innerPage .currentPage").appendTo(".innerPage .toggleMenuContainer");
	};
	$('.contact form div:first-child div').click(function() {
		$(".contact form div:first-child div label").removeClass("move");
		$(this).children('label').addClass('move');
	});
	/*
	Active Tabs Portfolio Page
	=====================================================*/	
	$('.portfolioTab li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.portfolioTab  li').removeClass('active');
		$('.tabContent section').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});
	/*
	Event Button Click Function
	=====================================================*/	 
	$('.eventToggler').on('click', function(){
		$(this).children('.editLink').slideToggle('slow');
	});
	$(".fa-angle-down").click(function() {  
		$(".eventStep-1").show("show");      
		$(this).hide("show");
	});
	$(".publishNow").click(function() {  
      $(".newEventForm").show("show");     
      $(".eventStep-1").hide("show");
    });
	$(".publishLater").click(function() { 
      $(".eventStep-1").hide("show");
      $(".fa-angle-down").show("show");
    });
	$(".cancel").click(function() {  
      $(".newEventForm").hide("show");
      $(".fa-angle-down").show("show");
    });
	/*
	Smooth Scroll At About Us Page
	=====================================================*/
	$("#navigator a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash); 
    });

		var aChildren = $("#navigator li").children();
		var aArray = []; // create the empty aArray
		for (var i=0; i < aChildren.length; i++) {    
			var aChild = aChildren[i];
			var ahref = $(aChild).attr('href');
			aArray.push(ahref);
		}; 
		$(window).scroll(function(){
			var windowPos = $(window).scrollTop(); 
			var windowHeight = $(window).height();
			var docHeight = $(document).height();
	
			for (var i=0; i < aArray.length; i++) {
				var theID = aArray[i];
				var divPos = $(theID).offset().top; 
				var divHeight = $(theID).height();
				if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
					$("a[href='" + theID + "']").addClass("active");
				} else {
					$("a[href='" + theID + "']").removeClass("active");
				}
			}
	
			if(windowPos + windowHeight == docHeight) {
				if (!$("#navigator li:last-child a").hasClass("active")) {
					var navActiveCurrent = $(".active").attr("href");
					$("a[href='" + navActiveCurrent + "']").removeClass("active");
					$("#navigator li:last-child a").addClass("active");
				}
			}
    });
	if ($('#mygallery').length) {
    $('#mygallery').justifiedGallery({
		  rowHeight: 250,
		  lastRow: 'nojustify',
		  margins: 1,
		  selector: "figure, > div:not(.spinner)"
		});
    }
	/*
	Scroll To Top Fuction At About Us Page
	=====================================================*/
	 $(window).scroll(function() {
		  var scroll = $(window).scrollTop();
		  if (scroll >= 500) {
		  $(".scrollTop").addClass("show");
		  } else {
		  $(".scrollTop").removeClass("show");
		  }
	  });
	/*
	Full Screen Slider At Home Page
	=====================================================*/					   
	$('.flexslider').flexslider({
        animation: "fade", interval: 4000
      });
	$('.flexslider').css({'margin': 0, 'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
	$('.flexslider li').css({'position': 'fixed', 'width': '100%', 'height': '100%'});
	$('.flexslider ul li img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background': 'url('+imgSrc+') center center no-repeat', '-webkit-background-size': '100% ', '-moz-background-size': '100%', '-o-background-size': '100%', 'background-size': '100%', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover'});
		$(this).remove();
	});
	$(window).on('resize', function() {
		$('.flexslider').css({'width': $(window).outerWidth(), 'height': $(window).outerHeight()});
	});
	$('.flexsliderInner').flexslider({
		animation: "slide",
		interval: 4000,
    });
	
});  