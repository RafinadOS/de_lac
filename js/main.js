$(document).ready(function($) {
	$('.open').click(function(e) {
		$('footer').toggleClass('show');
		$('.overlay').toggleClass('overlay-show');
		return false
	});
	$('.overlay').click(function() {
		$(this).toggleClass('overlay-show');
		$('footer').removeClass('show');
		$('body').removeClass('header__menu-vissible');
	});

	// вызов корзины
	$('.cart-popup-close').click(function() {
		$('body').toggleClass('cart-popup-show');
		return false
	});
	$('.purchases__link').click(function() {
		$('body').toggleClass('cart-popup-show');
		return false
	});

	$('.header__menu-show').click(function() {
		$('body').toggleClass('header__menu-vissible');
		$('.overlay').toggleClass('overlay-show');
		return false
	});

	// инициализация кастомного скрола
	$('.ship-list').jScrollPane();

	$(window).load(function() {
		setTimeout(function() {
			$('#loader-wrapper').fadeOut('slow', function() {});
		}, 500);
	});
});




