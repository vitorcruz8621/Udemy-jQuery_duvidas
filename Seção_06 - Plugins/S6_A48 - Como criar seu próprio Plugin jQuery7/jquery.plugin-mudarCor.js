(function($){

	$.fn.mudarCorDasLetras = function(corDasLetras){
		this.each(function(){
			$(this).css('color', corDasLetras);
		});
		return this;
	}

	$.fn.mudarCorDoFundo = function(corDoFundo){
		this.each(function(){
			$(this).css('background-color', corDoFundo);
		});
		return this;
	}

}(jQuery));