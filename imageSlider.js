$(document).ready(function(){

	$slider = $(".slider-container");

	$(".slider-container img:not(:first-child)").css("display","none");
	$slider.css("width","75%");
	$slider.css("left","12.5%");
	$slider.css("height","auto");
	$slider.css("min-height","300px");
	$slider.css("top","20px");
	$slider.css("position","relative");

	$slider.children().css("margin-left","35%");
	$slider.children().css("position","absolute");
	$slider.children().css("height","100%");
	$slider.children().css("max-height","250px");
	$slider.children().css("width","auto");
	$slider.children().css("min-width","200px");

	//each li item is a circle under the slider images for links
	var circle = "<li class='img-link' style='border-radius:20px; height:50px; width:50px; margin-right:10px; display:inline; position:absolute; '></li>"

	//ul to hold the circles
	var buttonList = "<ul class='slider-links' style='margin-left:35%; margin-bottom:0%; padding-left:0; list-style-type:none; position:absolute; bottom:0%; height:50px; width:50%;'></ul>"
	//add list to container
	$slider.append(buttonList);
	//need length because appending will lengthen children()
	var childrenLength = $slider.children().length
	for(var i = 0; i < childrenLength;i++){
		$(".slider-links").append(circle);
	}


});