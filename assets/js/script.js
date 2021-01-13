$(document).ready(function(){
	

    // start hover menu
    $('ul.custom-menu li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      });

    //end bootstrap hover menu
    


})
