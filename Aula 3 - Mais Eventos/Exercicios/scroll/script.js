$(document).ready(function () {
    /******************************
        BOTTOM SCROLL TOP BUTTON
     ******************************/

    // declare letiable
    let scrollTop = $(".scrollTop");

    $(window).scroll(function () {
        // declara a letiável de topo
        let topPos = $(this).scrollTop();

        // se o usuário fizer scroll para baixo, aparece o top button scroll
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    }); // scroll ACABA

    //Evento para fazer o scroll ir para o topo 
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    }); // click() scroll top EMD

    /*************************************
      LEFT MENU SMOOTH SCROLL ANIMATION
     *************************************/
    // declara as variáveis de título
    let h1 = $("#h1").position();
    let h2 = $("#h2").position();
    let h3 = $("#h3").position();

    $('.link1').click(function () {
        $('html, body').animate({
            scrollTop: h1.top
        }, 500);
        return false;

    }); // left menu link2 click() scroll END

    $('.link2').click(function () {
        $('html, body').animate({
            scrollTop: h2.top
        }, 500);
        return false;

    }); // left menu link2 click() scroll END

    $('.link3').click(function () {
        $('html, body').animate({
            scrollTop: h3.top
        }, 500);
        return false;

    }); // left menu link3 click() scroll END

}); // ready() END