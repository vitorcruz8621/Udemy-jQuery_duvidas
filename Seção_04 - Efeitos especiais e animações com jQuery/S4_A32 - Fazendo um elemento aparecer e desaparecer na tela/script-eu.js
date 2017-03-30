$(function(){
	console.log('Iniciado:');

	$('.div:eq(0)').on('click', function(){
		$(this).hide('slow');
	});
	$('.botao:eq(0)').on('click', function(){
		$('.div:eq(0)').show('fast');
	});
	$('.botao:eq(1)').on('click', function(){
		$('.div:eq(1)').toggle('slow');
	});

});