/*
Exercícios de interpretação de código:

Enunciado 1:

O código está usando um for para modificar duas variáveis ao mesmo tempo. Dentro dos parâmetros, ele está modificando i até que atinja o limite (4). Além disso, dentro do laço, está modificando o valor da let valor.
Isso faz com que o console exiba: 10.

Enunciado 2:

a)
O console imprimirá todos os números da lista que são maiores que 18, ou seja:
19, 21, 23, 25, 27, 30

b) O laço seria útil para fazer a iteração, mas para mostrar o indice, seria necessário adicionar lista.indexOf() antes da chamada da variavel numero dentro do console.log.


Enunciado 3:

*
**
***
****

*/

// Exercícios de escrita de código:

// // Enunciado 1:

// let quantidadeBichinhosEstimacao = Number(prompt('Quantos animais de estimação você tem?'));

// // a)

// let arrayBichinhosEstimacao = []

// switch (quantidadeBichinhosEstimacao) {
//     case 0:
//         console.log(`Que pena! Você pode adotar um pet.`)
//         break;
//     default:
//         const listaBichinhosEstimacao = () => {
//             for (let i = 0; i < quantidadeBichinhosEstimacao; i++) {
//                 let nomePet = prompt('Insira os nomes dos seus pets, um por um:');
//                 arrayBichinhosEstimacao.push(nomePet);
//             }
//             return arrayBichinhosEstimacao
//         }
//     console.log(listaBichinhosEstimacao())        
// }

// Enunciado 2:

let arrayOriginal = [7, 13, 22, 23, 37, 49, 55, 75, 89];

// a)

// const iteraPeloArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }

// b)

// const divideArrayPor10 = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i] / 10)
//     }
// }

// c)

// const iteraNumerosParesDoArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             console.log(array[i])
//         }
//     }
// }

// d)

// const encontraIndiceNoArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         let novoArray = []
//         novoArray.push(`O elemento do index ${array.indexOf(array[i])} é ${array[i]}`)
//         console.log(novoArray)
//     }
// }

// e)

// let valorMaximo = arrayOriginal[0];
// let valorMinimo = arrayOriginal[arrayOriginal.length - 1];

// const encontraValorMaximo = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (valorMaximo < array[i]) {
//             valorMaximo = array[i];
//         }
//     }
//     console.log(valorMaximo)
// }

// const encontraValorMinimo = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (valorMinimo > array[i]) {
//             valorMinimo = array[i];
//         }
//     }
//     console.log(valorMinimo)
// }

