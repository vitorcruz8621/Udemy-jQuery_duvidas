$(function(){
	console.log('Iniciado:');

	$('.div:eq(0)').on('click', function(){
		$(this).fadeOut('slow');
	});
	$('.botao:eq(0)').on('click', function(){
		$('.div:eq(0)').fadeIn('slow');
	});
	$('.div:eq(1)').on('click', function(){
		$(this).fadeTo('slow', 1.0);
	});
	$('.botao:eq(1)').on('click', function(){
		$('.div:eq(1)').fadeTo('slow', 0.7);
	});

	$('.botao:eq(2)').on('click', function(){
		$('.div:eq(2)').fadeToggle('slow');
	});

});