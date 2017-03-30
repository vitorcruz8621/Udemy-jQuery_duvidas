$(function(){
	console.log('Iniciado:');

	/*$('li').hover(function(){
		$(this).find('.menu2').show('fast');
	}, function(){
		$(this).find('.menu2').hide('fast');
	});*/

	$('li').hover(function(){
		$(this).find('.menu2').slideDown('fast');
	}, function(){
		$(this).find('.menu2').slideUp('slow');
	});
});