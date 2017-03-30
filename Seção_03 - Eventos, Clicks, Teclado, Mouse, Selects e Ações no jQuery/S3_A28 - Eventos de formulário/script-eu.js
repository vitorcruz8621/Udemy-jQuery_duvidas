$(document).ready(function(){
	console.log('Iniciado:');

	$('#form').bind('submit', function(e){
		e.preventDefault();

		alert('O formulario foi submetido!');
	});
	
	$('#nome').bind('select', function(e){
		//e.preventDefault();
		alert('Algo foi selecionado!');
	});

	$('#nome, #email').bind('focus', function(){
		$(this).addClass('focado');
	});
	
	$('#nome, #email').bind('blur', function(){
		$(this).removeClass('focado');
	});
	


});