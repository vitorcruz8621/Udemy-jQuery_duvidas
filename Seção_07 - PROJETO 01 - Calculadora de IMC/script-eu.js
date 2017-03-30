$(function(){
	console.log('Iniciado:');

	$('#form').on('submit', function(event){
		event.preventDefault();

		var txt = $(this).serialize();
		//console.log(txt);

		$.ajax({
			type: 'POST',
			url: 'ajax.php',
			data: txt,
			dataType:'json',
			success:function(json) {

				var altura = json.altura;
				var peso = json.peso;

				altura = altura.replace(',', '.');
				peso = peso.replace(',', '.');

				var imc = peso / (altura * altura);
				imc = Number(imc);
				var traducao = '';

				if (imc < 16) {
					traducao = 'Baixo peso muito grave.';
				} else if (imc >= 16 && imc < 16.99) {
					traducao = 'Baixo peso grave.';
				} else if (imc >= 17 && imc < 18.49) {
					traducao = 'Baixo peso.';
				} else if (imc >= 18.50 && imc < 24.99) {
					traducao = 'Baixo peso normal.';
				} else if (imc >= 25 && imc < 29.99) {
					traducao = 'Sobrepeso.';
				} else if (imc >= 30 && imc < 34.99) {
					traducao = 'Obesidade grau I.';
				} else if (imc >= 35 && imc < 39.99) {
					traducao = 'Obesidade grau II.';
				} else if (imc >= 40) {
					traducao = 'Obesidade grau III.';
				}

				$('#resultado').html('Seu resultado é: ' + imc  + " Kg²."
					+"\nSituação: "+traducao);
				alert("\n"+ typeof peso + "\n" + typeof altura + "\n" + typeof imc);

				},
			error:function(json) {
				alert('Ocorreu um error!');
			}
		});

	});

});