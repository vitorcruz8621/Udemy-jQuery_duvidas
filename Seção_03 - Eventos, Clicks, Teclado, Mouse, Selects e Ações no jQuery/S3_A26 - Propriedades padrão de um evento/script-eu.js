function eventoDoBotao(event) {
	event.preventDefault();
	var tipo = event.type;
	var alvo = event.target.nodeName;
	alert("O evento é um: " + tipo.toUpperCase() + ".\nAlvo do evento: " + alvo + ".");
}

$(document).ready(function(){
	console.log('Iniciado:');

	$('#botao').on('click', eventoDoBotao);

	/*
	$('#botao').on('click', function(event){
		
		event.preventDefault();
		var txt = $('#nome').val();
		alert(txt);
		
	});
	*/

	/*
	$('#botao').on('click', function(event){
		event.preventDefault();
		console.log("O evento é um: "+
			event.type.toUpperCase()+
			"\nAlvo do evento: "+
			event.target.nodeName);
	});
	*/

});

/*
event.preventDefault(); previne que o formulario seja ENVIADO
retornando apenas o alert(txt);
*/