$(document).ready(function (){
   // Trigger Wow js
   
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

      // Navbar
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 200) {
			$(".change").css({
				"background": "white",
				"boxShadow": "0px -3px 10px #b7b5b5",
				"position": 'fixed'
            });
            $('#scroll-to-top').fadeIn();
			$(".nav-link").css("color", "#000");
			$(".navbar-brand").css("color", "black");
		} else {
			$(".change").css({
				"background": "transparent",
				"boxShadow": "none"
			});
			$(".nav-link").css("color", "white");
            $(".navbar-brand").css("color", "white");
            $('#scroll-to-top').fadeOut();
		}
	});

	//Smoth Scroll

	$(".nav-link").on('click', function(e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $("#" + $(this).data("scroll")).offset().top + 1
		}, 500);
	});


    //Scroll To Top

    $('#scroll-to-top').on('click', function (){
        $("html, body").animate({scrollTop: 0}, 1000);
    });
});