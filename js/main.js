$(document).ready(function($) {
	$('.open').click(function(e) {
		$('footer').toggleClass('show');
		$('.overlay').toggleClass('overlay-show');
		return false
	});
	$('.overlay').click(function(e) {
		$(this).toggleClass('overlay-show');
		$('footer').toggleClass('show');
	});

	// вызов корзины
	$('.cart-popup-close').click(function(e) {
		$('.cart-popup').toggleClass('cart-popup-show');
		return false
	});
	$('.purchases__link').click(function(e) {
		$('.cart-popup').toggleClass('cart-popup-show');
		return false
	});

	// инициализация кастомного скрола
	$('.ship-list').jScrollPane();
});


