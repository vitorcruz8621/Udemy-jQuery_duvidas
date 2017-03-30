$(function(){
	console.log('Iniciado:');

	$('#btn_1').on('click', function(){
		$('.div').animate({
			'margin-left':'+=50'
		}, 50);
	});

	$('#btn_2').on('click', function(){
		$('.div').animate({
			'margin-left':'-=50'
		}, 50);
	});

});