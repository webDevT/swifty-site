$(function(){

$('.menu__btn').click(function(){
	$(this).toggleClass('active');
	$('.menu').toggleClass('active');
})

//start slider init
$('.slider').slick({
  slidesToShow: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  autoplay: true,
  fade: true
})
//end slider intit


});