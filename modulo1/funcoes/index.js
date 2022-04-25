// Exercício de interpretação de código

/*
Enunciado 1:

a) 10 e 50

b) Ao retirar o console.log, a chamada da função continua, porém esta não é exibida no console do navegador.

Enunciado 2:

a) a função verifica se o texto escrito pelo usuário inclui a palavra cenoura e retorna se isso é verdadeiro
ou falso em letras minusculas. ele é útil para verificar, por exemplo, se o usuário inseriu a resposta certa
diante de um enunciado específico, onde a resposta esperada era cenoura.

b) i. true, ii. true, iii. true

*/

// Exercícios de escrita de código

// Enunciado 1:

// a)

// const imprimeSobreVoce = () => {
//     console.log(`Eu sou Stephany, tenho 23 anos, moro em São Paulo e sou estudante.`);
// }

// b)

// const imprimeSobreUsuario = (nomeString, idadeNumber, cidadeString, profissaoString) => {
//     console.log(`Eu sou ${nomeString}, tenho ${idadeNumber} anos, moro em ${cidadeString} e sou ${profissaoString}.`)
// }

// Enuciado 2
// a)

// const somaDoisNumeros = (num1, num2) => {
//     return num1 + num2;
// }

// const resultado = somaDoisNumeros(3, 7);
// console.log(`A soma das entradas é: ${resultado}`);

// b)
// const retornaSeNumerosIguais = (num1, num2) => {
//     return num1 >= num2;
// }

// const resultado = retornaSeNumerosIguais(3,8);
// console.log(`É ${resultado} que a primeira entrada é maior ou igual à segunda.`);

// c)
// const retornaSePar = (num1) => {
//     let par = num1 % 2;
//     return par === 0;
// }

// console.log(retornaSePar(4));

// d)
// const imprimeTamanhoEMaiusculas = (mensagem) => {
//     console.log(`O tamanho dessa mensagem é: ${mensagem.length}`);
//     console.log(`E em maiusculo: ${mensagem.toUpperCase()}`);
// }

// imprimeTamanhoEMaiusculas("Não há ninguém aqui.")

// Enunciado 3:

// let primeiroNumeroInserido = Number(prompt('Insira o primeiro numero?'));
// let segundoNumeroInserido =  Number(prompt('Insira o segundo numero?'));

// const soma = (num1, num2) => {
//     return num1 + num2;
// }

// const subtracao = (num1, num2) => {
//     return num1 - num2;
// }

// const multiplicacao = (num1, num2) => {
//     return num1 * num2;
// }

// const divisao = (num1, num2) => {
//     return num1 / num2;
// }

// console.log(soma(primeiroNumeroInserido, segundoNumeroInserido))

// console.log(subtracao(primeiroNumeroInserido, segundoNumeroInserido))

// console.log(multiplicacao(primeiroNumeroInserido, segundoNumeroInserido))

// console.log(divisao(primeiroNumeroInserido, segundoNumeroInserido))


// Desafio
// Enunciado 1:

// a)

// const imprimeParametro = (num1) => {
//     console.log(num1)
// }

// imprimeParametro(10);

// b)

// const somaEImprime = (num1, num2) => {
//     return num1 + num2
// }

// const resultado = somaEImprime(20, 15)

// console.log(resultado)

// Enunciado 2:

const catetoA = Number(prompt(`Insira o valor do cateto A:`));
const catetoB = Number(prompt(`Insira o valor do cateto B:`));

const teoremaPitagoras = (a, b) => {
    return (Math.sqrt((a * a) + (b * b)));
}

console.log(`A hipotenusa é: ${teoremaPitagoras(catetoA, catetoB)}`);