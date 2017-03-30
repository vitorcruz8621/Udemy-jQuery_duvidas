$(function(){
	console.log('Iniciado:');

	$('#form').on('submit', function(event){
		event.preventDefault();

		var txt = $(this).serialize();
		console.log(txt);

		$.ajax({
			type: 'POST',
			url: 'ajax.php',/* algo do download/function/loadpage */
			data: txt,
			dataType:'json',
			success:function(json) {
				//alert("Meu nome é " + json.nome + " e tenho " + qt_nome + " caracteres.");
				//alert("Meu nome é " + json.nome + " e senha " + json.senha);
				alert("Meu nome é " + json.usuario + " e minha senha é " + json.senha);
			},
			error:function() {
				alert('Ocorreu um error!');
			}
		});

	});

});