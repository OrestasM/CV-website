$('.navbar').toggleClass('solid', $(document).scrollTop() > 100);

if($(window).width() <=1000){
    $('.navbar').addClass('solid');
}else{
    $(window).scroll(function(){
        $('.navbar').toggleClass('solid', $(this).scrollTop() > 100);  
    });
}

