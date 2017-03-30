$(function(){
	console.log('Iniciado:');

	/*$('.botao').on('click', function(){

		$('.div').animate({
			'margin-left' : '100px',
			'margin-top' : '100px',
			'width': '500px',
			'transition': '2500'
		});
		$('.div').css({'background-color': 'red', 'transition': '2500'});

	});

	$('.div').on('click', function(){

		$('.div').animate({
			'margin-left' : '0',
			'margin-top' : '0',
			'width': '400px',
			'transition': '2500'
		});
		$('.div').css({'background-color': 'darkblue', 'transition': '2500'});

	});*/

	$('.botao').on('click', function(){
		$('.div').animate({
			'width': 200,
			'height': 200,
			'border-radius': '90'
		});
	});


});