$(document).ready(function(){
	$("#item1").click(function(){
		$("#item2").trigger('click');
	})

	$("#item2").click(function(){
		alert("Has hecho click en el div #2");
	})
})