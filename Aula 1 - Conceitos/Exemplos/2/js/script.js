$(document).ready(function() {

    $('h1').css('color', '#f66');
    $('h1').hide();
    $('h1').delay('2000');
    $('h1').fadeIn('slow');
    $('h1').text('Muitas coisas!');


    $('h1')
        .css('color', '#f66')
        .hide()
        .delay('2000')
        .fadeIn('slow')
        .text('Muitas coisas!');


    $('.item1')
        .click(function() {
            $('body').css("background", "#c30")
            $('h1').css('color', "#ffff")
        })

})