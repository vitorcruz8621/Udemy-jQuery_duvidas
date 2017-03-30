$(function(){
	$(window).bind('resize', function(){
		alert("Foi arrastado.");// não conssegui fazer console.log() no Mozilla
		//console.log("Foi arrastado.");
	});

	
	$('#id').bind('scroll', function(){
		$(this).css('background-color', 'darkgray');
		console.log("Foi arrastado.");
	});
});