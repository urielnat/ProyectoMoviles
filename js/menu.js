$(document).ready(main);

var contador=1;
var mq = window.matchMedia("(max-width: 800px)");
 function main() {
 	$('.menu_bar').click(function(){
 		//$('nav').toggle(); 
 		if(contador==1) {
 			$('nav').animate({
 				left: '0'
 			});
 			contador=0;
 		} else {
 			contador=1;
 			$('nav').animate({
 				left: '-100%'
 			});
 		}
 	});

 	//Submenus
 		$('.submenu').click(function(){
	 		$(this).children('.children').slideToggle();
	 	});
 	

 	/*if (matchMedia) {
	  mq.addListener(WidthChange);
	  WidthChange(mq);
	};*/
 }

 /*function WidthChange(mq) {
	  if (mq.matches) {
	    	$('.submenu').click(function(){
		 		$(this).children('.children').slideToggle();
		 	});
	  } else{
	  	$('.submenu').unbind('click');
	  }
}*/