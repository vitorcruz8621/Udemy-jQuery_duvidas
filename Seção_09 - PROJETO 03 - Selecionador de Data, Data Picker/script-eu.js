$(function(){
	console.log('Iniciado:');

	var horaEscolhaCampo;

	$('input').on('focus', function(){

		var pos = $(this).offset();
		var width = $(this).width();

		$('.horaescolha').css('left', pos.left + width + 5);
		$('.horaescolha').css('top', pos.top);
		$('.horaescolha').show('slow');

		horaEscolhaCampo = $(this);

	});

	$('input').on('blur', function(){
		setTimeout(function(){
			$(this).find('.class').hide('slow');
		});
	});

	$('.horaescolha button').on('click', function(){
		var hora = $(this).html();
		horaEscolhaCampo.val(hora);
	});

	$('#botao').on('focus', function(){
		$('.horaescolha').each(function(){
			$(this).hide('slow');
		});
	});

});