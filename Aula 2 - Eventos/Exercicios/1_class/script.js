/*
  1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"

  2. Preencha os spans do html utilizando JQuery, adicionando informações suas. 
  ATENÇÃO! As informações devem estar estar guardadas em variáveis!

  3. Imagine que você muda com frequencia de opinião sobre um dos seus filmes favoritos. 
  Sendo assim, crie uma variável "favDoMomento" com esse filme

  3. selecione o h1 e altere seu texto para "sobre mim". Acrescente também a classe 'titulo' para que ele 
  fique bacanudo

  4. Adicione as classes 'list' e 'item-list' na lista e nos itens de lista, utilizando JQuery
  
  5. Adicionei uma classe errada! Suma com a classe 'wrongClass', utilizando JQuery
*/


$(document).ready(function() { 

  let nickname = "Bru"
  let cidade = "São Paulo"
  let favoritos = "Os Miseráveis, Mulan"
  let favDoMomento = "Parasita"
  
  $('body').css('font-family', "Arial, sans-serif");
  
  $('#nickname').text(nickname)
  $('#favoritos').text([favoritos, favDoMomento]);
  $('#cidade').text(cidade)
  $('h1')
    .text('Sobre mim')
    .addClass('titulo')
  
  $('li').addClass('list');
  $('span').addClass('item-list');

  //resolução 1
  $('li').eq(0).removeClass();

  //resolução 2
  $('li')
    .even()
    .removeClass("wrongClass");

})