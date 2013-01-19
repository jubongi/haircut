/**
 * @author Julian Bongiorno
 */
/*
JavaScript for the demo: Recreating the Nikebetterworld.com Parallax Demo
Demo: Recreating the Nikebetterworld.com Parallax Demo
Author: Ian Lunn
Author URL: http://www.ianlunn.co.uk/
Demo URL: http://www.ianlunn.co.uk/demos/recreate-nikebetterworld-parallax/
Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/
/*
$(window).load(function(){ 

	// For each instance of p.caption
	$("p.caption").each(function(){
		$(this)
			// Add the following CSS properties and values
			.css({
				 // Height equal to the height of the image
				"height" : $(this).children("img").height() + "px",
				// Width equal to the width of the image
				"width" : $(this).children("img").width() + "px"
			})
			// Select the child "span" of this p.caption
			// Add the following CSS properties and values
			.children("span").css(

				// Width equal to p.caption
				// But subtract 20px to callibrate for the padding
				"width", $(this).width() - 20 + "px")

			// find the <big> tag if it exists
			// And then add the following div to break the line
			.find("big").after('<div class="clear"></div>');
		
			// When you hover over p.caption
			$("p.caption").hover(function(){

				// Fade in the child "span"
				$(this).children("span").stop().fadeTo(400, 1);
				}, function(){
				// Once you mouse off, fade it out
				$(this).children("span").stop().delay(600).fadeOut(400);
			});
	// End $(this)	 
	});

});
*/



$(function() {  
  $('.error').hide();  
  $(".button").click(function() {  
    // validate and process form here  
    $('.error').hide();  
	        var email = $("input#email").val();  
	        if (email == "") {  
	      $("label#email_error").show();  
	      $("input#email").focus();  
	    return false;  
	    } 
	});
		var dataString = '&email=' + email;  
		//alert (dataString);return false;  
		$.ajax({  
		  type: "POST",  
		  url: "bin/process.php",  
		  data: dataString,  
		  success: function() {  
		    $('#email_form').html("<div id='message'></div>");  
		    $('#message').html("<h2>Thank You. A confirmation email has been sent.</h2>")  
		    .append("<p>We will be in touch soon.</p>")  
		    .hide()  
		    .fadeIn(1500, function() {  
		      $('#message').append("<img id='checkmark' src='images/check.png' />");  
		    });  
		  }  
		});  
		return false;    
});  


$(document).ready(function() { //when the document is ready...


	//save selectors as variables to increase performance
	var $window = $(window);
	var $firstBG = $('#intro');
	var $secondBG = $('#about');
	var $thirdBG = $('#schedule');
	var $fourthBG = $('#companies');
	var $fivethBG = $("#keynotes");
	var $sixthBG = $("#sponsors");

	
	var windowHeight = $window.height(); //get the height of the window
	
	
	//apply the class "inview" to a section that is in the viewport
	$('#intro, #about, #schedule, #companies, #keynote, #sponsors').bind('inview', function (event, visible) {
			if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});
	
			
	//function that places the navigation in the center of the window
	function RepositionNav(){
		var windowHeight = $window.height(); //get the height of the window
		var navHeight = $('#nav').height() / 2;
		var windowCenter = (windowHeight / 2); 
		var newtop = windowCenter - navHeight;
		$('#nav').css({"top": newtop}); //set the new top position of the navigation list
	}
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar

		//if the first section is in view...
		if($firstBG.hasClass("inview")){
			//call the newPos function and change the background position
			$firstBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 900, 0.3)}); 
		}
		
		//if the second section is in view...
		if($secondBG.hasClass("inview")){
			//call the newPos function and change the background position
			$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1250, 0.3)});
			//call the newPos function and change the secnond background position
			//$fivethBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1900, 0.6)});
		}
		
		//if the third section is in view...
		if($thirdBG.hasClass("inview")){
			//call the newPos function and change the background position
			$thirdBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 2850, 0.3)});
		}
		
		//if the fourth section is in view...
		if($fourthBG.hasClass("inview")){
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			$fourthBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 200, 0.9) + ", " + newPos(50, windowHeight, pos, 0, 0.7) + ", " + newPos(50, windowHeight, pos, 0, 0.5) + ", " + newPos(50, windowHeight, pos, 700, 0.3)});
		}
		
		$('#pixels').html(pos); //display the number of pixels scrolled at the bottom of the page
	}
		
	//RepositionNav(); //Reposition the Navigation to center it in the window when the script loads
	
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
		//RepositionNav(); //reposition the navigation list so it remains vertically central
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});
	
});
