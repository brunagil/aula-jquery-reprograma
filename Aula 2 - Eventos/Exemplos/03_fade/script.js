$(document).ready(function () {
    $("button").click(function () {
        $('#div1').fadeIn();
        $('#div2').fadeOut("slow");
        $('#div3').fadeToggle(2000);

    });
});