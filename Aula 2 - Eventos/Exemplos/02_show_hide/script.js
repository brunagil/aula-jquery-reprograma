$(document).ready(function () {
  let elementoComAcao = $("#aguardandoAcao");

  $("#hideElement").click(function () {
    elementoComAcao.hide("slow"); //desaparecer devagar
    elementoComAcao.hide("fast"); //desaparecer rápido
    elementoComAcao.hide("2000"); //tempo para desaparecer
  });

  $("#showElement").click(function () {
    elementoComAcao.show("slow"); //aparece devagar
    elementoComAcao.show("fast"); //aparece rápido
    elementoComAcao.show("2000"); //tempo para aparecer
  });

  $("#toggleElement").click(function () {
    elementoComAcao.toggle("slow"); //alterna entre aparecer e desaparecer (T/F)
    elementoComAcao.toggle("fast"); //alterna entre aparecer e desaparecer (T/F)
    elementoComAcao.toggle("2000"); //alterna entre aparecer e desaparecer (T/F)
  });

  $("#input").keyup(function() {
      let textoDigitado = $(this).val(); //recebe do campo que estamos digitando o valor
      //Get the current value of the first element in the set of matched elements.
      //https://api.jquery.com/val/

      if(textoDigitado == 'hide') {
        elementoComAcao.hide('slow')
      }
      if(textoDigitado == 'show') {
        elementoComAcao.show('slow')
      }
      if(textoDigitado == 'toggle') {
        elementoComAcao.toggle('slow')
      }
  })

});
