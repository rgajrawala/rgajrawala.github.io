// Wait for onload.
$(function() {
	// On navbar link click, close navbar.
	if ($(window).width() < 768) {
		$('.navbar a').on('click', function() {
			$('.navbar-toggle').click();
		});
	}

	// On hashtag click, slow it down.
	$('a[href*=#]:not([href=#])').click(function() {
		// Make sure we are not clicking on #about-* (not nav link).
		if (this.hash.includes('#about-')) {
			return true;
		}

		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 300);
				return false;
			}
		}
	});
});
