$(function(){
	console.log('Iniciado:');

	/*$('button').click(function() {
		if ( $(this).hasClass('botao1') ) {
			$(this).removeClass('botao1');
		} else {
			$(this).addClass('botao1');
		}

		//$(this).toggleClass('botao1');
	});*/

	$('button').mouseover(function() {
		$(this).addClass('botao1');
	});
	$('button').mouseout(function() {
		$(this).removeClass('botao1');
	});
	
});

var chamarFuncao = function(){
	alert('Alô Vitor.');
}

// /* var $j = jQuery.noConflict(); $j(function(){ */

/*
$(function(){
	console.log('Iniciado:');
	$j('button').on('click', function(event) {
		
		if ( ($j('div').hasClass('iden') ) && ($j('h1').hasClass('iden') ) ) {
			$j('div').removeClass('iden');
			$j('h1').removeClass('iden');
		} else {
			$j('div').addClass('iden');
			$j('h1').addClass('iden');
		};
		
		//event.preventDefault();
	});

	$j(document.getElementById('#botao1')).text('Não quero ser clicado');

	function funcao() {
		return $j(document.getElementById('#botao1')).text('Não quero ser clicado');
	}

	if ( $('#identificador').length > 0 ) { //
		alert('existe');
	} else {
		alert('não existe');
	}

	if ( $('SELETOR').hasClass('CLASSE/* sem o '.CLASSE' *//*') ) { //
		alert('existe');
	} else {
		alert('não existe');
	}
});

*/
