$(document).ready(function () {
    $("#menuBar").click(function () {
        $("#navBar").slideToggle(500);
    
    
    
    
    })

    
   
    $(window).scroll(function () {

    
        if ($(this).scrollTop() > 50) {
            $('#menu').addClass('nav-menu');
        } else {
            $('#menu').removeClass('nav-menu');
        }

    
        
    })


})