$(document).ready(function () {
    $("#flip").click(function () {
       $("#painel").slideToggle("slow");
    });


    $('#button').click(function(){
        $('.div1').slideDown(6000);
        $('.div2').slideDown(3000);
        $('.div3').slideDown(1000);        
    })

    $('#button-run').click(function() {
        $('.div1').slideUp(2000);
        $('.div2').slideUp(1000);
        $('.div3').slideUp(500);
      });

});