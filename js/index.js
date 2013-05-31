whenRady();

$(document).ready(whenRady());

$(window).resize(resize());

$(window).bind('scroll',function(){
    parallaxScroll();
});
 
function whenRady(){
	$('section').css('margin-bottom', $(window).height()/1.4+'px');

	$("section header").fitText(0.37, { minFontSize: '85px', maxFontSize: '132px' })

	marginTop = $(window).height() - 2*parseInt($("section header").css('font-size')) - 110;
	$('.container').css('top', marginTop+'px');

	ratio = countRatio();

	var imageBG = new Image();
 	imageBG.src = $('.background').attr("src");
 	i = $('.background').attr("src");

	//alert(imageBG.height+' '+$(window).width()+' '+imageBG.width +'/'+Math.round((imageBG.height*$(window).width())/imageBG.width));
	$('.background').height(Math.round((700*$(window).width())/600));

	ratio = countRatio();

	parallaxScroll();
}

function resize(){
	marginTop = $(window).height() - 2*parseInt($("section header").css('font-size')) - 110;
	$('.container').css('top', marginTop+'px');
	ratio = countRatio();
	parallaxScroll();
}

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    //$('.test').text(scrolled +'/WH'+ $(window).height() +'/PH'+ $(document).height() +'/RBGH' + $('.background').height() +'/R' + ratio +'/BGM'+ scrolled*ratio);
    $('.background').css('top', Math.round(scrolled*ratio)+'px');
}
// for element fixed
function countRatio () {
	return -( $('.background').height() - $(window).height()) / ( $(document).height() - $(window).height() );
}
// for element absolute
// function countRatio () {
// 	return ( $(document).height() - $('.background').height() ) / ( $(document).height() - $(window).height() );
// }