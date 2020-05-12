$(document).ready(function(){
    //1ª resolução - Hover
    $('li').hover(function(){
        // o this do .menu2 abra/apareça $(?).???() -dica: find
        $(this).find('.menu2').slideDown();
    },
    function(){
        $(this).find('.menu2').slideUp();
    });

    //1ª resolução - Click
    $('li').click(function(){
        $(this).find('.menu2').slideToggle();
        $(this).siblings().find('.menu2').slideUp();
    })
});