$(function(){
	console.log('Iniciado:');

	/*
	$('button').bind('click', function(){
		alert('Clicou');
	});

	$('button').unbind('click'); //colocar esse comando no console ou usar essa função...
	...
	$('body button').on('click', function(){
		$(this).unbind('click');
	});
	*/

	
	$('button').on('click', function(){
		alert('Clicou');
	});

	/*
	REMOVENTO EVENTO onClick();

	$('button').off('click'); //colocar esse comando no console ou usar essa função...
	...
	$('#body button').on('click', function(){
		$(this).off('click');
	});
	*/

	// no lugar de 'click' pode-se usar tambem outros eventos, como mousehover...etc.
});