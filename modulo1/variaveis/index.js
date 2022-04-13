/* Enunciado 1:
 10

 10 5
*/

/* Enunciado 2:
10 10 10
*/

/* Enunciado 3:
O programa pergunta ao usuário
quantas horas ele trabalha por dia,
quanto ele recebe e então calcula
quanto a pessoa recebe por hora, 
ao dividir horas por salário.

eu alteraria let p por
let horasTrabalhadasPorDia
e alteraria let t por
let pagamentoPorDia
*/


let nome;
let idade;

console.log("O tipo da variavel nome é", typeof nome);
console.log("O tipo da variavel idade é", typeof idade);

/*
a ausência de valor faz com que o tipo objeto seja selecionado
pois null não é número, nem string, nem booleano.
*/

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

console.log("O tipo da variavel nome é", typeof nome);
console.log("O tipo da variavel idade é", typeof idade);

/*
a entrada do usuário é reconhecida como uma string, mesmo
quando é um número.
*/

console.log("Olá", nome, "você tem", idade, "anos.");

const primeiraPergunta = prompt("Você gosta de café?");
const segundaPergunta = prompt("Você toma refrigerante?");
const terceiraPergunta = prompt("Você esqueceu as suas chaves?");

console.log("Você gosta de café? R:", primeiraPergunta);
console.log("Você toma refrigerante? R:", segundaPergunta);
console.log("Você esqueceu as suas chaves? R:", terceiraPergunta);

// Enunciado 3

let a = 10;
let b = 25;
const c = a;

a = b;
b = c;

console.log("O novo valor de a é", a); // 25
console.log("O novo valor de b é", b); // 10


// DESAFIO

let primeiroNumeroEmString = prompt("Insira o primeiro número:");
let segundoNumeroEmString = prompt("Insira o segundo número:");

let primeiroNumero = Number(primeiroNumeroEmString);
let segundoNumero = Number(segundoNumeroEmString);

let soma = primeiroNumeroEmString + segundoNumeroEmString;
let multiplicacao = primeiroNumeroEmString * segundoNumeroEmString;

console.log("O primeiro número somado ao segundo número resulta em:", soma);
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicacao);