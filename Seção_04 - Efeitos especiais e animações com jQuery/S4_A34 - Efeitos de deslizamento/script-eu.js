$(function(){
	console.log('Iniciado:');

	$('.botao:eq(0)').on('click',function(){
		$('.div').slideDown('slow');
	});

	$('.div:eq(0)').on('click',function(){
		$(this).slideUp('fast');
	});

	$('.botao:eq(1)').on('click',function(){
		$('.div:eq(1)').slideToggle('fast');
	});
	/*-------------------------------------*/
	$('#ident .botao').on('click',function(){
		$('#ident .div').slideToggle('slow');
	});

	$('#ident .div').on('click',function(){
		$('#ident .cascata').slideToggle('slow');
	});


});