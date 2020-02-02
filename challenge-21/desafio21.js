/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
// 
(function(win, doc){
    'use strict';

    var $startButton = doc.getElementById('startbutton');
    var $stopButton = doc.getElementById('stopbutton');
    var $resetButton = doc.getElementById('resetbutton');
    var $campotexto = doc.querySelector('[data-js="text"]');
    var cont=0, temporizador, ligado;
    
    $campotexto.value = 0;
    function timer(){
        if(ligado){
            console.log(cont++);
            temporizador = setTimeout(timer, 1000);
            $campotexto.value = cont;
        }
        else
            return;
    }

    $startButton.addEventListener('click', function(){
        if(ligado){
            return;
        }
        else{
            ligado = true;
            timer();
        }
    }, false);

    $stopButton.addEventListener('click', function(){
        ligado = false;
        clearTimeout(temporizador);
    }, false);

    $resetButton.addEventListener('click', function(){
        ligado = false;
        clearTimeout(temporizador);
        cont=0;
        $campotexto.value = cont;
    }, false);

})(window, document);