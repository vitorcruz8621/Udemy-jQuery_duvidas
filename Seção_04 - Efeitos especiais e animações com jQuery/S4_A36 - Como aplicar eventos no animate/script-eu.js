$(function(){
	console.log('Iniciado:');

	$('.botao').on('click',function(){

		$('.div').animate({
			'top':80,
			'left':400,
			'height':50,
			'width':50
		}, {
			duration:500,
			complete:function(){

				$('.div').animate({
					'top':0,
					'left':0,
					'height':150,
					'width':150
				}, 500);
			}
		});

	});


});