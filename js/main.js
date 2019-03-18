$(document).ready(function(){
	$('.defaultCarousel').slick({
		infinite: true,
		dots: true,
		prevArrow: false,
		nextArrow: false,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	});

	var $window = $(window);

	function checkWidth() {
		var windowsize = $window.width();
		if (windowsize <= 767) {
			//Botão para fechar menu
			var $closeBtn = $('.closeBtn');
			var $navbarToggler = $('.navbar-toggler');

			$navbarToggler.on('click', function(){
				$('.collapse').css("display","flex").removeClass('animated slideOutRight').addClass('animated slideInLeft');
			});

			$closeBtn.on('click', function(){
				$('.collapse').removeClass('animated slideInLeft').addClass('animated slideOutRight'),
				setTimeout(function(){
					$('.collapse').css("display","none");
				}, 1000);
			});

			$('.navbar-collapse').on('click', function() {
				$('.collapse').removeClass('animated slideInLeft').addClass('animated slideOutRight'),
				setTimeout(function(){
					$('.collapse').css("display","none");
				}, 1000);
			});

			$('.navbar a').on('click', function() {
				$('.collapse').removeClass('animated slideInLeft').addClass('animated slideOutRight'),
				setTimeout(function(){
					$('.collapse').css("display","none");
				}, 1000);
			});
		}
	}
	// Execute on load
	checkWidth();
	$(window).resize(checkWidth);


	//Aumentar e diminuir fonte
	var $btnAumentar = $(".uppercase");
	var $btnDiminuir = $(".lowercase");
	var $elemento = $("body #apresentacao").find("*"); //encontra todos os elementos dentro do #content
	var $elemento1 = $("body #contato").find("*"); //encontra todos os elementos dentro do #content
	var fonts = [];

	function obterTamanhoFonte() {
		for (var i = 0; i < $elemento.length; i++) {
			fonts.push(parseFloat($elemento.eq(i).css('font-size')));
		}
		for (var i = 0; i < $elemento1.length; i++) {
			fonts.push(parseFloat($elemento1.eq(i).css('font-size')));
		}
	}
	obterTamanhoFonte();
	$btnAumentar.on('click', function() {
		for (var i = 0; i < $elemento.length; i++) {
			++fonts[i];
			$elemento.eq(i).css('font-size', fonts[i]);
		}
		for (var i = 0; i < $elemento1.length; i++) {
			++fonts[i];
			$elemento1.eq(i).css('font-size', fonts[i]);
		}
	});

	$btnDiminuir.on('click', function() {
		for (var i = 0; i < $elemento.length; i++) {
			--fonts[i];
			$elemento.eq(i).css('font-size', fonts[i]);
		}
		for (var i = 0; i < $elemento1.length; i++) {
			--fonts[i];
			$elemento1.eq(i).css('font-size', fonts[i]);
		}
	});

	//Máscara de CPF
	var options =  {
		onKeyPress: function(cep, e, field, options) {
			var masks = ['(00) 0000-0000', '(00) 00000-0000'];
			var mask = (cep.length>13) ? masks[1] : masks[0];
			$('.telefone').mask(mask, options);
		}};

		$('.telefone').mask('(00) 0000-0000', options);
	});
