$( window ).on( "load", function(){
var section = $(".inner").height();
var win = $(window).height();

$('.grey-left').click(function(){
jQuery(this).toggleClass('grey-left-open');
if (section > win ) {
$('html,body').scrollTop(0);
$(".grey-left").toggleClass('grey-scroll');
console.log("too big");
}
});

$('.grey-right').click(function(){
jQuery(this).toggleClass('grey-right-open');
if (section > win ) {
$('html,body').scrollTop(0);
$(".grey-right").toggleClass('grey-scroll');
console.log("biggie");
}
});
});