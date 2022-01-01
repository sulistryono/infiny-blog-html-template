var $ = jQuery.noConflict();

jQuery(function($) {
	$(document).ready(function() {
		$(function(){
			var $container = $('#main-masonry');
			$container.imagesLoaded( function(){
				$container.masonry({
					itemSelector: '#main-masonry .item-post'
				});
			});
			$container.infinitescroll({
				navSelector : '.load-button',
				nextSelector : '.load-button a',
				itemSelector : '#main-masonry .item-post',
				loading : {
					finished : undefined,
					finishedMsg : null,
					img : '', 
					msg : null,
					msgText : null,
					selector : null,
					speed : 'fast',
					start : null	
				},
				behavior : 'local',
				path : function() {
					return "grid.html";
				},
				maxPage : 2
			},
			function( newElements ){
				var $newElems = $( newElements ).css({
					opacity: 0
				});
				$newElems.imagesLoaded(function(){
					$newElems.animate({
						opacity: 1
					});
					$container.masonry( 'appended', $newElems, true );
				});
			});
		});
	});
});