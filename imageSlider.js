$(document).ready(function(){

	$slider = $(".slider-container");

	$(".slider-container img:not(:first-child)").css("display","none");

	//each li item is a circle under the slider images for links
	var circle = "<li class='img-link'><div></div></li>";

	//ul to hold the circles
	var buttonList = "<ul class='slider-links'></ul>";
	//add list to container
	$slider.append(buttonList);
	//need length because appending will lengthen children(). Must subtract 1 to exclude ul
	var childrenLength = $slider.children().length -1;
	for(var i = 0; i < childrenLength;i++){
		$(".slider-links").append(circle);
	}




});