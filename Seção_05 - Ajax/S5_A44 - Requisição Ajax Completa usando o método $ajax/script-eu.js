$(function(){
	console.log('Iniciado:');

	$('#form').on('submit', function(event){
		event.preventDefault();

		var txt = $(this).serialize();
		console.log(txt);

		$.ajax({
			type: 'POST',
			url: 'ajax.php',
			data: txt,
			success:function(resultado) {
				$('.div').html('Resultado: '+resultado);
				//alert('Resultado: '+resultado);
				//console.log('Resultado: '+resultado);
			},
			error:function() {
				alert('Ocorreu um error!');
			}
		});
		
	});

});