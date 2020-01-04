(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
var person = {
    'name': 'Rodrigo',
    'lastname': 'Costa',
    'age': 25
}
console.log( 'Propriedades de "person": ');
console.log(person);

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/

console.log('Em string: ');
console.log(JSON.stringify(person));

console.log('Em array: ');
var arr = JSON.stringify(person).split([',']);
console.log(arr);

/*
Crie um array vazio chamado `books`.
*/
// ?

var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
console.log( '\nLista de livros:' );
books[0] = {
    'name': 'A Batalha do Apocalipse',
    'pages': 300
}
books[1] = {
    'name': 'Queda de gigantes',
    'pages': 950
}
books[2] = {
    'name': 'Moby Dick',
    'pages': 250
}
/*
Mostre no console todos os livros.
*/
for(var i=0; i<books.length; i++){
    console.log(books[i]);
}

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ?
console.log(books.pop());

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
//
for(var i=0; i<books.length; i++){
    console.log(books[i]);
}

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );
var booksstr = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
// ?

console.log(booksstr);

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );
var booksobj = JSON.parse(booksstr);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

console.log(booksobj);

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );
var myName = ['r', 'o', 'd', 'r', 'i', 'g', 'o'];

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
//
var myname2;
myname2 = myName.join('');
console.log(myname2);

var myname3 = [];
myname3 = myName.reverse();
myname3 = myname3.join('');

console.log( '\nMeu nome invertido é: ' + myname3);

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
//


console.log( '\nAgora em ordem alfabética:');
var ordem = [];
ordem = myName.sort();
ordem = ordem.join('');
console.log(ordem);
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?

}())
