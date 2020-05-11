/*

$(seletor).ação()

seletor: string ("" ou '')
ação: uma método que faz coisas legais. 
Pode receber como argumento uma ou mais strings, number, função ou um obj

------ Funções JQuery
css()
click()

--- Em CSS
h1 {
    color: #f66;
}




*/

$(document).ready(function() {

    $('h1').css('color', '#f66');
    $('h1').hide();
    $('h1').delay('2000');
    $('h1').fadeIn('slow');
    $('h1').text('Surpresa!');

//encadeamento em bloco
//facilidade de visualização e em modificar as ações, se necessário
    $('h1')
        .css('color', '#f66')
        .hide()
        .delay('2000')
        .fadeIn('slow')
        .text('Surpresa!')
  

//podemos adicionar um evento no nosso elemento 
//recebe uma FUNÇÃO
    $(".item1")
        .click(function() {
            $('body').css("background", "#2196f3")
            $('h1').css("color", "#ffff")
        })

//selecionando o elemento TAG
//recebe um OBJ
    $('il').css({
        color: '#000',
        display: 'flex'
    });    

 
//selecionando o elemento por classe  
$('.item1').css("border", "1px solid red")
//selecionando o elemento por ID
$('#item2').css('color', 'yellow');
//selecionando todos os elementos da página
$('*').css('padding', '10px');
//selecionando mais de um elemento ao mesmo tempo
$('h1, #item2').css('border-bottom', 'solid 3px blue')


/* jQuery Selectors

Um dos maiores poderes do jQuery está na sua capacidade de selecionar elementos a partir de seletores CSS.
Como já aprendemos, existem diversas formas de selecionarmos quais elementos ganharão determinado estilo. Infelizmente muitos desses seletores não funcionam em todos os navegadores. Contudo, no jQuery, temos todos à nossa disposição.
Por exemplo, se quisermos esconder todas as tags <td> filhas de um <tbody>, basta: */


//Seletores mais comuns:
// pinta o fundo do formulário com id "form" de preto
$('#tabela').css('background', 'black');

// esconde todos os elementos com o atributo "class" igual a "linha"
$('.linha').hide();

// muda o texto de todos os parágrafos
// $('p').text('oi gatan ;)');

// Mais exemplos:
$('section > p:first'); // o primeiro elemento <p> imediatamente filho de uma <section>

$('input:hidden'); // todos os inputs invisíveis

$('input:selected'); // todas os checkboxes selecionados

$('input[type=button]'); // todos os inputs com type="button"

$('td, th'); // todas as tds e ths

})


/*
1) Crie um comando que, quando o usuário clicar no link, o navegador adicione uma borda
azul, com 4 pixels de espessura e que seja tracejada, esta formatação deve ser uma
classe CSS do seu documento anexo ou que esteja entre as tags <style></style> do seu
documento HTML.
2) Modifique este comando para que os atributos sejam adicionados diretamente à tag.


*/