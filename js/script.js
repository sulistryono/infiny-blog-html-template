var $ = jQuery.noConflict();

$(window).load(function(){
	navigationScroll();
	masonryGrid();
	// startProgressbar();
});

// Progress Bar Animate
function startProgressbar() {
	$('.progress .progress-bar').each(function() {
		var s = $('.progress').width();
		$(this).data("origWidth", $(this).width()).width('0%').animate({
			width: $(this).data("origWidth") * 100/s + '%'
		}, 1000);
	});
}

// Navigation Scroll
function navigationScroll() {
	$(window).scroll(function() {
		var head = $('header').height();
		var top = $(window).scrollTop();
		if (top > head) {
			$('.navbar').css({
				'position':'fixed',
				'width':'100%',
				'top':'0',
				'z-index':'888'
			});
		}
		else {
			$('.navbar').removeAttr('style').css({
				'position':'absolute',
				'width':'100%',
				'top': head,
				'z-index':'888'
			});
			$('#headers').css({
				'margin-top': '50px'
			});
		}
	});
}

// Masonry
function masonryGrid() {
	var msnry = new Masonry( '#main-masonry' );
}