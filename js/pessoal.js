$(document).ready(function(){
	$('.bxslider').bxSlider({
  		adaptiveHeight: true,
  		auto: true
	});

	$("#primeiro-passo").click(function() {
		$('body,html').animate({
			scrollTop: $(".sec-obrigacao").offset().top}, "slow");
	});

	$("#como-declarar").click(function() {
		$('body,html').animate({
			scrollTop: $(".sec-rascunho").offset().top}, "slow");
	});

	$("#malha-fina").click(function() {
		$('body,html').animate({
			scrollTop: $(".sec-malha").offset().top}, "slow");
	});

	$("#dicas").click(function() {
		$('body,html').animate({
			scrollTop: $(".sec-entrevista").offset().top}, "slow");
	});


});
