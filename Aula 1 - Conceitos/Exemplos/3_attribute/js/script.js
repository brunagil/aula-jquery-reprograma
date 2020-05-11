/*

$(seletor).ação()

seletor: string ("" ou '')
ação: uma método que faz coisas legais. 
Pode receber como argumento uma ou mais strings, number, função ou um obj


css()
click()

*/

$(document).ready(function() {

    //Obtem o conteúdo HTML do primeiro elemento no conjunto de elementos correspondentes.
    //não aceita argumentos
    $("p").html("<span class='cor'>Hello <b>Darkness</b></span>");

    //Adds the specified class(es) to each element in the set of matched elements.
    $("il").addClass("margin")

    // $("il").removeClass("item1")

    //Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.
    $("p").click(function() {
        $(this).toggleClass("destaque");
      });


    //   Obtem o valor atual do primeiro elemento no conjunto de elementos correspondentes.
    //   val()
    // attr()

})