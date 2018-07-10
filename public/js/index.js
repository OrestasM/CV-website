$(document).ready(function(){
    $(this).scrollTop(0);
    
    $(window).scroll(function(){
        $('.navbar').toggleClass('solid', $(this).scrollTop() > 100);
    });
});
