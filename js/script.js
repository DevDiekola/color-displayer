$(document).ready(function() {
	var body = $("body");
	var input = $("#input");

	input.keyup(function(){
		body.css("background-color", input.val());
		input.css("border-bottom", "3px solid " + input.val());
	})
})