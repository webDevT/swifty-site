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
  autoplaySpeed: 5000,
  fade: true
})
//end slider intit

  $(".media-tab").click(function() {
  $(".media-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".media-tab__content .media-tab__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
  

});