/**
 * @author Julian Bongiorno
 */


$(document).ready(function(){
  // get the height of #wrap

   $(".fixedlogo").hide();
   $("nav").css('margin-left', '23%');
 });

 $(window).scroll(function(){
  // get the height of #wrap
  var h = $('body').height();
  var y = $(window).scrollTop();
  if( y <= (h*.06 )) {
   // if we are show keyboardTips
   $(".fixedlogo").hide();
   $("nav").css('margin-left', '300px');
   $('nav').css('margin-right, 20px');
   $('#socialemail').css('z-index', '30');			
  } else {
    $('nav').css('margin-left', '50px')
    $('.fixedlogo').fadeIn('slow');
    $('nav').css('margin-right, 20px');

  }
 });


$('.exit').click(function() {
    $(this).parent().hide();
});



 $(window).scroll(function(){
  // get the height of #wrap
  var h = $('body').height();
  var y = $(window).scrollTop();
  if(y> (h*.09 ) && y < (h*.18)) {
   // if we are show keyboardTips
   $("#image1").css('opacity', '1');			
  } else {
    $('#image1').css('opacity', '.4')
  }
 });

 $(window).scroll(function(){
  // get the height of #wrap
  var h = $('body').height();
  var y = $(window).scrollTop();
  if(y> (h*.23 ) && y < (h*.32)) {
   // if we are show keyboardTips
   $("#image2").css('opacity', '1');			
  } else {
    $('#image2').css('opacity', '.4')
  }
 });

 $(window).scroll(function(){
  // get the height of #wrap
  var h = $('body').height();
  var y = $(window).scrollTop();
  if(y> (h*.37 ) && y < (h*.46)) {
   // if we are show keyboardTips
   $("#image3").css('opacity', '1');			
  } else {
    $('#image3').css('opacity', '.4')
  }
 });

 $(window).scroll(function(){
  // get the height of #wrap
  var h = $('body').height();
  var y = $(window).scrollTop();
  if(y> (h*.50 ) && y < (h*.59)) {
   // if we are show keyboardTips
   $("#image4").css('opacity', '1');			
  } else {
    $('#image4').css('opacity', '.4')
  }
 });

 $(window).scroll(function(){
  // get the height of #wrap
  var h = $('body').height();
  var y = $(window).scrollTop();
  if(y> (h*.63 ) && y < (h*.73)) {
   // if we are show keyboardTips
   $("#image5").css('opacity', '1');			
  } else {
    $('#image5').css('opacity', '.4')
  }
 });
