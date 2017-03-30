$(function(){
	console.log('Iniciado:');// curiosidade: mousedown+mouseup = click!!!!!!!

	/*$('.botao').bind('mousedown', function(){//precionar o botão do mouse
		console.log("Apertou o mouse");
	});

	$('.botao').bind('mouseup', function(){//soltar o botão do mouse
		console.log("Soltou o mouse");
	});

	$('.botao').bind('mousemove', function(){//caso o mouse seja movimentado continuamente
		console.log("Movimentou o mouse");
	});

	$('.botao').bind('mouseover', function(){//mouse EM CIMA do elemento
		$(this).addClass('botao_emcima');
		console.log("Mouse em cima do botão.");
	});

	$('.botao').bind('mouseout', function(){//mouse FORA do elemento
		$(this).removeClass('botao_emcima');
		console.log("Mouse em fora do botão.");
	});*/

	/*$('.botao').bind('click', function(){//clicke normal
		console.log("Clicou normalmente.");
	});*/

	$('.botao').bind('dblclick', function(){//clicke DUPLO
		console.log("Click duplo!!!!!!!");
	});

});