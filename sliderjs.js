var sliderStart = 1;
var sliderNext = 2;

var startSlider = function(){
	count = $("#slider>img").size();

	loop = setInterval(function(){
		if(sliderNext>count){
			sliderNext=1;
			sliderStart=1;
		}

		$("#slider > img").fadeOut(300);
		$("#slider > img#" + sliderNext).fadeIn(300);

		sliderStart = sliderNext;
		sliderNext = sliderNext + 1;
	},3000)
}

var prev = function(){
 	var newSlide = sliderStart-1;
 	showSlide(newSlide);
}

var next = function(){
	var newSlide = sliderStart+1;
 	showSlide(newSlide);
}

var stopLoop = function(){
	window.clearInterval(loop);
}

var showSlide = function(id){
	stopLoop();
	if(id>count){
			id=1;
		}
		else if(id<1){
			id = count;
		}

		$("#slider > img").fadeOut(300);
		$("#slider > img#" + id).fadeIn(300);

		sliderStart = id;
		sliderNext = id + 1;
		startSlider();
}


$(document).ready(function(){
$("#slider > img#1").fadeIn(300);
startSlider();

$("#slider > img").hover(function(){
	stopLoop();
},
function(){
	startSlider();
});
});
