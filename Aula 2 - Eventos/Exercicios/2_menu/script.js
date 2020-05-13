/*

  Desafio!

  1. Faça com que o menu lateral apareça
  2. Faça com que o menu lateral desapareça

*/

// $(document).ready(function () {
//   $("#botaoAbrir").click(function () {
//     $("#botaoAbrir").css("width", "250px");
//     $(".div-botao").css("margin-left", "250px");
//     $("#menulateral").css("display", "block");
//   });

//   $("#botaoFechar").click(function () {
//     $("#botaoAbrir").css("width", "0px");
//     $(".div-botao").css("margin-left", "0px");
//     $("#menulateral").css("display", "none");
//   });
// });

// //------------------ resolução 2

// function abrirMenu() {
//   $("#botaoAbrir").click(function () {
//     $("#botaoAbrir").css("width", "250px");
//     $(".div-botao").css("margin-left", "250px");
//     $("#menulateral").css("display", "block");
//   });
// }

// function fecharMenu() {
//   $("#botaoFechar").click(function () {
//     $("#botaoAbrir").css("width", "0px");
//     $(".div-botao").css("margin-left", "0px");
//     $("#menulateral").css("display", "none");
//   });
// }

// $(document).ready(function () {
//   abrirMenu();
//   fecharMenu();
// });

// //------------ resolução 3

// function abrirMenu() {
//   $("#botaoAbrir").css("width", "250px");
//   $(".div-botao").css("margin-left", "250px");
//   $("#menulateral").css("display", "block");
// }

// function fecharMenu() {
//   $("#botaoAbrir").css("width", "0px");
//   $(".div-botao").css("margin-left", "0px");
//   $("#menulateral").css("display", "none");
// }

// $(document).ready(function () {
//   $("#botaoAbrir").click(abrirMenu);
//   $("#botaoFechar").click(fecharMenu);
// });


//-------------resolução 4

$(document).ready(function () { 
  $("#botaoAbrir").click(function(){
    $(".menu-lateral").toggle()
    $("#botaoAbrir").css("width", "250px");
  })
  $("#botaoFechar").click(function(){
    $(".menu-lateral").hide()
    $("#botaoAbrir").css("width", "0px");
  })
})

