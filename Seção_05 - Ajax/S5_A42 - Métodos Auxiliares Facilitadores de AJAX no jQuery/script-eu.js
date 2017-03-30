$(function(){
	console.log('Iniciado:');

	$('button:eq(0)').on('click', function(){
		$('.div').load('teste.html');
	});

	$('button:eq(1)').on('click', function(){
		$.get('teste.html', function(t){
			$('.div').html(t);
		});
	});

	$('button:eq(2)').on('click', function(){
		$.post('teste.html', function(t){
			$('.div').html(t);
		});
	});

});