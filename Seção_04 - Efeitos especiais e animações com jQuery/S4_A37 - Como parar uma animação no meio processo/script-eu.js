$(function(){
	console.log('Iniciado:');

	$('#btn_1').on('click', function(){

		$('.div').animate({
			'margin-left':500
		}, {
			'duration':2000,
			complete: function(){
				console.log('FIM');
			}
		});

	});

	$('#btn_2').on('click', function(){
		$('.div').stop();
	});

});