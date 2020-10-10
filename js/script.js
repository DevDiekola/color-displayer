$(document).ready(function() {
	var body = $("body");
	var input = $("#input");
	const gradientButton = $("#gradient-button");
	let isGradientEnabled = false;
	var secondInput = $("#second-input");
	let gradientVal;

	input.keyup(function(){
		if (isGradientEnabled == false || !gradientVal && !secondInput.val()) {
		body.css("background", input.val());
		} else {
		setGradientVal();
		body.css("background", gradientVal);
		} 
		input.css("border-color", input.val());
	})
	
	secondInput.keyup(function(){
		setGradientVal();
		body.css("background", gradientVal);
		secondInput.css("border-color", secondInput.val());
	})
	
	let setGradientVal = () => {
		gradientVal = "linear-gradient(" + input.val() + ", " + secondInput.val() + ")" ;
	}
	
	let toggleGradient = () => {
		if (isGradientEnabled == false) {
		gradientButton.addClass("enabled");
		secondInput.css("display", "block");
		isGradientEnabled = true;
		if (gradientVal) {
		setGradientVal();
		body.css("background", gradientVal);
		secondInput.css("border-color", secondInput.val());
		};
		} else {
		gradientButton.removeClass("enabled");
		secondInput.css("display", "none");
		body.css("background", input.val());
		isGradientEnabled = false;
		}
	}
	
	
	
	
	gradientButton.on("click", toggleGradient); 
	
})