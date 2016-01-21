$(document).ready(function($) {
	$('.open').click(function(e) {
		$('footer').toggleClass('show');
		$('.overlay').toggleClass('overlay-show');
		return false
	});
	$('.overlay').click(function(event) {
		$(this).toggleClass('overlay-show');
		$('footer').toggleClass('show');
	});
});