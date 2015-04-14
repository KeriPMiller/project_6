/*
// jQuery Cheat Sheet

//include a copy of the jQuery library in the <head> of the html doc
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"> </script>

//select elements in the DOM similar to css selecting:

	$('element').jQueryAction() {
		// do this and that ; 
	}

//anonymous functions are functions with no declared parameters
//they can also be stored in variables

	function(){
		console.log("anonymous!");
	}

	or

	var scream = function(){alert("AHH!");}

//a callback often uses anon functions in functions to run after another func is done

	anonFunc1(anonFunc2);

//it's good practice to use document ready wrapper so that your js doesn't execute before the elements are loaded
$(document).ready();
// ** document does not get quotes like other elements
*/
$(document).ready(function() {
	console.log("ready");
	$("#blue").fadeOut(4000);

	$("#red").click(function(){
		alert("How dare you.");
	});
	$("#green").hide(4000);
	
	$("#yellow").mouseenter(function(){
		$("#yellow").animate({opacity: .2});
		console.log("Mouse is in");
	})
	$("#yellow").mouseout(function(){
		console.log("Mouse is out");
	})
});