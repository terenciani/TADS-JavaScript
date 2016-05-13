$(document).ready(function () {
	//document.write($("p.autor").css("font-size"));
	$("h1#titulo").css({"font-size": "12px", "font-style": "italic"});

	
});

$(function(){
	$("p#rodape").hover(function () {
		$(this).addClass("destacar");
	});	
});



