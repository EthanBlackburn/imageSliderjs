$(document).ready(function(){

	$slider = $(".slider-container");

	//hide all images but the first
	$(".slider-container img:not(:first-child)").css("display","none");


	//selected refers to the currently selected image
	var selected = 0;

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
		$(".slider-links li:last-child").attr("id","link"+i.toString());
		$(".slider-links li#link"+i.toString()).bind("click",function(event){
			//binding is tricky. Needs to bind to caller
			var myID = this.id.replace("link","");
			//image slide out
			$(".slider-container img#"+selected).toggle("drop");
			//set image # we selected
			selected = myID;
			//new image slide in
			$(".slider-container img#"+myID).toggle("drop");
			//reset background color of all image selectors
			$(".slider-links li > div").css("background-color","#71efd3");
			//change the color of the one we selected
			$(".slider-links li#link"+myID+" div").css("background-color","#00a8b8");
		});
	}
	//select first button
	$(".slider-links li#link0 div").css("background-color","#00a8b8");

	var next = function(){
		//current image slide out
		$(".slider-container img#"+selected).toggle("drop");
		//set image # we selected. Selected number loops after last image
		selected = (selected+1)%childrenLength;
		//new image slide in
		$(".slider-container img#"+selected).toggle("drop");
		//reset background color of all image selectors
		$(".slider-links li > div").css("background-color","#71efd3");
		//change the color of the one we selected
		$(".slider-links li#link"+selected+" div").css("background-color","#00a8b8");
	}

	var previous = function(){
		//current image slide out
		$(".slider-container img#"+selected).toggle("drop");
		//set image # we selected. Selected number loops after last image
		selected = (selected-1)%childrenLength;
		//new image slide in
		$(".slider-container img#"+selected).toggle("drop");
		//reset background color of all image selectors
		$(".slider-links li > div").css("background-color","#71efd3");
		//change the color of the one we selected
		$(".slider-links li#link"+selected+" div").css("background-color","#00a8b8");
	}

	//set image scroll timer
	setInterval(next,5000);

});