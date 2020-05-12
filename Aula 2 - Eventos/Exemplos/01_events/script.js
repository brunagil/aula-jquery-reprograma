$(document).ready(function () {
  $("h2").click(function () {
      $(this).css({
        "background-color": "black",
        "color":  "white"
    });
    alert("Foi clicado");
  });

  $("h3").dblclick(function(){ //quando se clica duas vezes
      alert('foi clicado duas vezes')
    $(this).hide();
  });

  $("#div").mouseenter(function(){ //quando o mouse entra no espaço do elemento
    alert("Você entrou em uma div!");
  });

  $("#div").mouseleave(function(){ //quando o mouse se afasta do elementp
    alert("Tchauuuuu div");
  });

  $("input").focus(function() { //quando o elemento está em foco
    $(this).css("background-color", "#cccccc");
  });

  $("input").blur(function(){ //quando saio do focus
    $(this).css("background-color", "blue");
  });
});
