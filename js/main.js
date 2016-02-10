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

	// прелоадер
	$(window).load(function() {
		setTimeout(function() {
			$('#loader-wrapper').fadeOut('slow', function() {});
		}, 500);
	});

	var contleftw	= $('.content__left').width(); // ширина сайтбара
	var contw 		= $('.content').width(); // ширина контента
	var realcontw	= contw - 270;
	var winh 		= $(window).height();
	var realh 		= winh - 20;
	var shplisth	= realh - 185;
	var cartw 		= $('.cart-popup').width();
	var scrollw 	= cartw - 70;



	// условия для всплывающей корзины
	if (winh <= '570') {
		$(function(){
			$('.cart-popup').height(realh);
			$('.ship-list').height(shplisth);
			$('.jspContainer').width(scrollw );
			$('.jspContainer').height(shplisth);
			$('.jspPane').height(shplisth);
		});
	};

	// условия для каталога
	if (contw <= '1170') {
		$(function(){
			$('.content__right').width(realcontw);
		});
	};



});




