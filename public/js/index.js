$('.navbar').toggleClass('solid', $(document).scrollTop() > 100);

$(window).scroll(function(){
    $('.navbar').toggleClass('solid', $(this).scrollTop() > 100);
});