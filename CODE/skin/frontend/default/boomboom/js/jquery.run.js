/*  avoid PrototypeJS conflicts, assign jQuery to $jQ instead of $  */
var $jQ = jQuery.noConflict();

/*  using $jQ(document).ready() because Magento executes Prototype inline and freaks out if jQuery executes beforehand  */
/*  using function($) to maintain normal jQuery syntax inside  */
$jQ(document).ready(function($){

	/* Progressive enhancement hook
	/* ------------------------------------------------------------------------------ */
	
	$('html').removeClass('no-js').addClass('js');
	
	
	/* Slides
	/* ------------------------------------------------------------------------------ */
		
	if ($().slides) {
	
		$("#home-slider").slides({
			preload: true, 					// boolean, Set true to preload images in an image based slideshow
			preloadImage: 'skin/frontend/default/boomboom/images/slides-js/loading.gif', 	// string, Name and location of loading image for preloader. Default is "/img/loading.gif"
			container: 'slides_container', 		// string, Class name for slides container. Default is "slides_container"
			generateNextPrev: false, 			// boolean, Auto generate next/prev buttons
			next: 'next', 						// string, Class name for next button
			prev: 'prev', 						// string, Class name for previous button
			pagination: true, 					// boolean, If you're not using pagination you can set to false, but don't have to
			generatePagination: true, 			// boolean, Auto generate pagination
			prependPagination: false, 			// boolean, prepend pagination
			paginationClass: 'pagination', 		// string, Class name for pagination
			currentClass: 'current', 			// string, Class name for current class
			fadeSpeed: 350, 					// number, Set the speed of the fading animation in milliseconds
			fadeEasing: '', 					// string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
			slideSpeed: 350, 					// number, Set the speed of the sliding animation in milliseconds
			slideEasing: '', 					// string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
			start: 1, 							// number, Set the speed of the sliding animation in milliseconds
			effect: 'fade,slide', 				// string, '[next/prev], [pagination]', e.g. 'slide, fade' or simply 'fade' for both
			crossfade: false, 					// boolean, Crossfade images in a image based slideshow
			randomize: false, 					// boolean, Set to true to randomize slides
			play: 5000, 						// number, Autoplay slideshow, a positive number will set to true and be the time between slide animation in milliseconds
			pause: 0, 							// number, Pause slideshow on click of next/prev or pagination. A positive number will set to true and be the time of pause in milliseconds
			hoverPause: false, 					// boolean, Set to true and hovering over slideshow will pause it
			autoHeight: false, 					// boolean, Set to true to auto adjust height
			autoHeightSpeed: 350, 				// number, Set auto height animation time in milliseconds
			bigTarget: false, 					// boolean, Set to true and the whole slide will link to next slide on click
			animationStart: function(){}, 		// Function called at the start of animation
			animationComplete: function(){}, 	// Function called at the completion of animation
			slidesLoaded: function() {} 		// Function is called when slides is fully loaded
		});
		
		$(".mini-slider").slides({
			preload: true, 					// boolean, Set true to preload images in an image based slideshow
			preloadImage: 'skin/frontend/default/boomboom/images/slides-js/loading-small.gif', 	// string, Name and location of loading image for preloader. Default is "/img/loading.gif"
			container: 'slides_container', 		// string, Class name for slides container. Default is "slides_container"
			generateNextPrev: true, 			// boolean, Auto generate next/prev buttons
			next: 'next', 						// string, Class name for next button
			prev: 'prev', 						// string, Class name for previous button
			pagination: true, 					// boolean, If you're not using pagination you can set to false, but don't have to
			generatePagination: true, 			// boolean, Auto generate pagination
			prependPagination: false, 			// boolean, prepend pagination
			paginationClass: 'pagination', 		// string, Class name for pagination
			currentClass: 'current', 			// string, Class name for current class
			fadeSpeed: 250, 					// number, Set the speed of the fading animation in milliseconds
			fadeEasing: '', 					// string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
			slideSpeed: 500, 					// number, Set the speed of the sliding animation in milliseconds
			slideEasing: '', 					// string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
			start: 1, 							// number, Set the speed of the sliding animation in milliseconds
			effect: 'slide,fade', 					// string, '[next/prev], [pagination]', e.g. 'slide, fade' or simply 'fade' for both
			crossfade: false, 					// boolean, Crossfade images in a image based slideshow
			randomize: false, 					// boolean, Set to true to randomize slides
			play: 8000, 						// number, Autoplay slideshow, a positive number will set to true and be the time between slide animation in milliseconds
			pause: 3000, 						// number, Pause slideshow on click of next/prev or pagination. A positive number will set to true and be the time of pause in milliseconds
			hoverPause: true, 					// boolean, Set to true and hovering over slideshow will pause it
			autoHeight: false, 					// boolean, Set to true to auto adjust height
			autoHeightSpeed: 350, 				// number, Set auto height animation time in milliseconds
			bigTarget: false, 					// boolean, Set to true and the whole slide will link to next slide on click
			animationStart: function(){}, 		// Function called at the start of animation
			animationComplete: function(){}, 	// Function called at the completion of animation
			slidesLoaded: function() {} 		// Function is called when slides is fully loaded
		});
		
		$(".product-gallery").slides({
			preload: true, 					// boolean, Set true to preload images in an image based slideshow
			preloadImage: 'skin/frontend/default/boomboom/images/slides-js/loading-small.gif', 	// string, Name and location of loading image for preloader. Default is "/img/loading.gif"
			container: 'slides_container', 		// string, Class name for slides container. Default is "slides_container"
			generateNextPrev: true, 			// boolean, Auto generate next/prev buttons
			next: 'next', 						// string, Class name for next button
			prev: 'prev', 						// string, Class name for previous button
			pagination: true, 					// boolean, If you're not using pagination you can set to false, but don't have to
			generatePagination: false, 			// boolean, Auto generate pagination
			prependPagination: false, 			// boolean, prepend pagination
			paginationClass: 'pagination', 		// string, Class name for pagination
			currentClass: 'current', 			// string, Class name for current class
			fadeSpeed: 500, 					// number, Set the speed of the fading animation in milliseconds
			fadeEasing: '', 					// string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
			slideSpeed: 350, 					// number, Set the speed of the sliding animation in milliseconds
			slideEasing: '', 					// string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
			start: 1, 							// number, Set the speed of the sliding animation in milliseconds
			effect: 'slide,fade', 					// string, '[next/prev], [pagination]', e.g. 'slide, fade' or simply 'fade' for both
			crossfade: true, 					// boolean, Crossfade images in a image based slideshow
			randomize: false, 					// boolean, Set to true to randomize slides
			play: 0, 						// number, Autoplay slideshow, a positive number will set to true and be the time between slide animation in milliseconds
			pause: 0, 						// number, Pause slideshow on click of next/prev or pagination. A positive number will set to true and be the time of pause in milliseconds
			hoverPause: true, 					// boolean, Set to true and hovering over slideshow will pause it
			autoHeight: false, 					// boolean, Set to true to auto adjust height
			autoHeightSpeed: 350, 				// number, Set auto height animation time in milliseconds
			bigTarget: false, 					// boolean, Set to true and the whole slide will link to next slide on click
			animationStart: function(){}, 		// Function called at the start of animation
			animationComplete: function(){}, 	// Function called at the completion of animation
			slidesLoaded: function() {} 		// Function is called when slides is fully loaded
		});
		
		$(".category-promo").slides({
			preload: true, 					// boolean, Set true to preload images in an image based slideshow
			preloadImage: 'skin/frontend/default/boomboom/images/slides-js/loading.gif', 	// string, Name and location of loading image for preloader. Default is "/img/loading.gif"
			container: 'slides_container', 		// string, Class name for slides container. Default is "slides_container"
			generateNextPrev: false, 			// boolean, Auto generate next/prev buttons
			next: 'next', 						// string, Class name for next button
			prev: 'prev', 						// string, Class name for previous button
			pagination: true, 					// boolean, If you're not using pagination you can set to false, but don't have to
			generatePagination: true, 			// boolean, Auto generate pagination
			prependPagination: false, 			// boolean, prepend pagination
			paginationClass: 'pagination', 		// string, Class name for pagination
			currentClass: 'current', 			// string, Class name for current class
			fadeSpeed: 500, 					// number, Set the speed of the fading animation in milliseconds
			fadeEasing: '', 					// string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
			slideSpeed: 350, 					// number, Set the speed of the sliding animation in milliseconds
			slideEasing: '', 					// string, must load jQuery's easing plugin before http://gsgd.co.uk/sandbox/jquery/easing/
			start: 1, 							// number, Set the speed of the sliding animation in milliseconds
			effect: 'slide,fade', 					// string, '[next/prev], [pagination]', e.g. 'slide, fade' or simply 'fade' for both
			crossfade: true, 					// boolean, Crossfade images in a image based slideshow
			randomize: false, 					// boolean, Set to true to randomize slides
			play: 5000, 						// number, Autoplay slideshow, a positive number will set to true and be the time between slide animation in milliseconds
			pause: 0, 						// number, Pause slideshow on click of next/prev or pagination. A positive number will set to true and be the time of pause in milliseconds
			hoverPause: true, 					// boolean, Set to true and hovering over slideshow will pause it
			autoHeight: true, 					// boolean, Set to true to auto adjust height
			autoHeightSpeed: 350, 				// number, Set auto height animation time in milliseconds
			bigTarget: false, 					// boolean, Set to true and the whole slide will link to next slide on click
			animationStart: function(){}, 		// Function called at the start of animation
			animationComplete: function(){}, 	// Function called at the completion of animation
			slidesLoaded: function() {} 		// Function is called when slides is fully loaded
		});
	}
	
	// Lets open active categories in sidebar navigation
	$("ul:has(li.active),ul:has(li.active) > li").css({height:'auto'});
	
	// toggle shop-options popup
	$("#shop-options-button").click(function() { 
		$("#shop-options-popup").toggle('200')
	});
	
	$(".toolbar .row-controls").hide();
	$("<a class='toggleControls'>List options</a>").insertAfter(".toolbar .row-pages .pages");
	$(".toggleControls").bind('click',function(){
		$(".toolbar .row-controls").slideToggle("fast");
	});

});
	
$jQ(window).load(function(){
		
		// hide loader after load
		$jQ("#loading-page").animate({ top: 0 }, 200).animate({ top: -300 }, 1000);
	
	});