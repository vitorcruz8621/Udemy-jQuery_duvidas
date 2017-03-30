$(document).ready(function(){
	console.log('Iniciado:');

	/*$('#nome').on('keydown', function(){
		console.log('Tecla precionada.');
	});

	$('#nome').on('keyup', function(){
		console.log('Tecla liberada.');
	});*/

	$('#nome').on('keyup', function(event){
		//console.log(event.keyCode);//codigo da tecla
		if (event.keyCode == 49) {
			console.log("Tecla precionada: 1");
			event.keyCode == null;
			}
		else if (event.keyCode == 50) {
			console.log("Tecla precionada: 2");
			event.keyCode == null;
			}
		else if (event.keyCode == 51) {
			console.log("Tecla precionada: 3");
			event.keyCode == null;
			}
		else if (event.keyCode == 52) {
			console.log("Tecla precionada: 4");
			event.keyCode == null;
			}
		else if (event.keyCode == 53) {
			console.log("Tecla precionada: 5");
			event.keyCode == null;
			}
		else {
			$(this).val("");
		}
	});


});

/*
IDEIA: fazer a movimentação de uma DIV com o comando keydown.
*/