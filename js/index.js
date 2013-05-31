$(document).ready(function(){
	whenRady()
});

$(window).resize(function(){
	whenResize();
});

$(window).bind('scroll',function(){
    parallaxScroll();
});
 
function whenRady(){
	$('section').css('margin-bottom', $(window).height()/1.4+'px');

	$("section header").fitText(0.37, { minFontSize: '85px', maxFontSize: '132px' })

	whenResize();

	// var imageBG = new Image();
	// imageBG.onload = function(){
	// 	alert(imageBG.height+' '+$(window).width()+' '+imageBG.width +'/'+Math.round((imageBG.height*$(window).width())/imageBG.width));
	// };
 	// 	imageBG.src = $('.background').attr("src")+ '?v=' + Math.random();

	$('.background').height(Math.round((700*$(window).width())/600));
}

function whenResize(){
	marginTop = $(window).height() - 2*parseInt($("section header").css('font-size')) - 110;
	$('.container').css('margin-top', marginTop+'px');
	ratio = countRatio();
}

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
   	var ratio = countRatio();
    //$('.test').text(scrolled +'/WH'+ $(window).height() +'/PH'+ $(document).height() +'/RBGH' + $('.background').height() +'/R' + ratio +'/BGM'+ scrolled*ratio);
    $('.background').css('top', Math.round(scrolled*ratio)+'px');
}

// for element fixed
function countRatio () {
	return -( $('.background').height() - $(window).height()) / ( $(document).height() - $(window).height() );
}