/*

1. Crie uma funcionalidade que armazena o valor do input e apresenta esse valor na tela, preenchendo
o elemento <h2> do texto.

1.2. O texto replicado inicial é: "A desenvolvedora mais incrível desse ano será a...", e o valor
do input deve completar a frase.

2. Não esqueça de validar o input de forma a não replicar valores vazios


*/

$(document).ready(function() {
    $('#botao-replicar').click(function() {
      let input = $('#campo-nome');
      let nome = input.val();
      if(nome != '') {
        input.val('');
        $('#texto-replicado').text("A desenvolvedora mais incrível desse ano será a " + nome);
      }
    });
  
  })
  
  