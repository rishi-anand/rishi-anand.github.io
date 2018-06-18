$(document).ready(function() {
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$(".page-header-image").mousemove(function(e){
	          var pageX = e.pageX - ($(window).width() / 2);
	          var pageY = e.pageY - ($(window).height() / 2);
	          var newvalueX = width * pageX * -1 - 25;
	          var newvalueY = height * pageY * -1 - 50;
	          $('.page-header-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
	});
});

//Thanks to CodePen: https://codepen.io/onurburak9/pen/oxKMQq