$(function(){
	console.log('Iniciado:');

	$('#objeto').bind('mousedown', function(){
		$('#objeto').bind('mousemove', function(event){
			var x = event.pageX;
			var y = event.pageY;

			var width = $(this).width();
			var height = $(this).height();

			$(this).css('left', (x - (width/2) ) + 'px');
			$(this).css('top', (y - (height/2) ) + 'px');

			console.log('width: '+x+'\nheight: '+y+'\n-----')
		});
	});

	$('#objeto').bind('mouseup', function(){
		$('#objeto').unbind('mousemove');
	});
	
});