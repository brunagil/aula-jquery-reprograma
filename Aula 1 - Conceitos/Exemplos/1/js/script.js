/* Comparando a sintaxe JavaScript vanilla e JQuery */


//JS
function helloJavascript() {
    alert('Eu sou um alert JavaScript')
} helloJavascript();


//JQuery
$(document).ready(function() {
    alert('Eu sou um alert com JQuery')
});


/* Hello World */


$(document).ready(function() {
    console.log('Hello World')
})

//ou

$(function() {
    console.log('Eu sou um hello world em uma função anônima, uwahaha')
})


// ready(): DOM completamente carregado e pronto para realizar uma ação.


