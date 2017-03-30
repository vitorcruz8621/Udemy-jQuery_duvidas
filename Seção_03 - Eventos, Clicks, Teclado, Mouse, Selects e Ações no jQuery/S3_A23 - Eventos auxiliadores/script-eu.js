$(function(){
	console.log('Iniciado:');

	$('#botao_1').hover(function() {
		// /* Stuff to do when the mouse enters the element *//*
		$(this).toggleClass('botao1');
	}, function() {
		$(this).toggleClass('botao1');
		// Stuff to do when the mouse leaves the element *//*
	});

	$('#botao_2').hover(function() {
		// Stuff to do when the mouse enters the element
		$(this).addClass('botao2');
	}, function() {
		$(this).removeClass('botao2');
		// Stuff to do when the mouse leaves the element
	});
	
});
/*

é importante lembrar que...

INCORRETO --------------------------------------------------- $('seletor seletor ID')
CORRETO, id torna uma tag única. ---------------------------- $('ID')

e é diferente de...

CORRETO e ESPECIFICADO -------------------------------------- $('seletor seletor CLASSE CLASSE*...')
CORRETO, só que com uma abordagem GENÉRICA, todos herdam ---- $('CLASSE')

*/