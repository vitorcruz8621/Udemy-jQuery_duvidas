$(function(){
	console.log('Iniciado:');

	$('#botao_1').on('click', function(){
		alert('Click redirecionado(trigger) para...');
		$('#botao_2').trigger('click');
	});
	$('#botao_2').on('click', function(){
		alert('Clicou no botão 2');
	});
	$('#botao_1').on('mouseover', function(){
		alert('Tente clicar no outro botão...');
	});
	$('#botao_2').on('mouseover', function(){
		alert('...pra ver o que acontece.');
	});

});