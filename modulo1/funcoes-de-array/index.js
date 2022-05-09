/* Exercício de interpretação de código
Enunciado 1:

a) O código imprimirá os dados do objeto usuário dentro de um array único, como se cada item fosse um item da lista.

Enunciado 2:

a) O código imprimirá apenas o nome dos itens dentro de um novo array:
["Amanda Rangel", "Laís Petra", "Leticia Chijo"]

Enunciado 3:

a) Imprimirá todos os apelidos que forem diferentes de "Chijo"
["Mandi", "Laura"]

*/

// Exercício de escrita de código

// Enunciado 1:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// a)

// let arrayNomesDoguinhos = pets.map((item, index, array) => {
//     return item.nome
// })

// console.log(arrayNomesDoguinhos)

// b)

// let arrayDoguinhosPao = pets.filter((item, index, array) => {
//     if (item.raca === 'Salsicha') {
//         return item
//     }
// })

// console.log(arrayDoguinhosPao)

// c)

// const imprimeMensagemDesconto = (array) => {
//     for (i = 0; i < array.length; i++) {
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${array[i]}`)}
// }

// let arrayDescontosParaPoodles = pets.filter((item, index, array) => {
//     if (item.raca === 'Poodle') {
//         return item
//     }
// })

// arrayDescontosParaPoodles = arrayDescontosParaPoodles.map((item, index, array) => {
//     return item.nome
// })

// console.log(imprimeMensagemDesconto(arrayDescontosParaPoodles))

// Enunciado 2:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a)

// let listaDeProdutos = produtos.map((item, index, array) => {
//     return item.nome
// })

// console.log(itensParaVenda)

// b)

// let novoArray = produtos.map((item, index, array) => {
//     return item.preco
// })

// const pegaValorAplicaDesconto = (array) => {
//     for (i = 0; i < array.length; i++) {
//         novoArray[i] = (novoArray[i] / 10) / 2;
//         return novoArray[i]
//     }
// }

// const criaObjeto = (arr1, arr2) => {
//     for (i = 0; i < arr1.length; i++) {
//         let produtosComNovosPrecos = {
//             nome: arr1[i],
//             preco: arr2[i]
//         }
//         return produtosComNovosPrecos
//     }
// }

// pegaValorAplicaDesconto(novoArray)

// console.log(criaObjeto(produtos, novoArray))

// c)

// let arraySeparaBebidas = produtos.filter((item, index, array) => {
//     if (item.categoria === 'Bebidas') {
//         return item
//     }
// })

// console.log(arraySeparaBebidas)

// d)

// let produtosYpe = produtos.filter((item, index, array) => {
//     return item.nome.includes('Ypê')
// })

// console.log(produtosYpe)

// e)

// const imprimeMensagemCompra = (array) => {
//     for (i = 0; i < array.length; i++) {
//     console.log(`Compre ${array[i].nome} por ${array[i].preco}`)}
// }

// let produtosYpe = produtos.filter((item, index, array) => {
//     return item.nome.includes('Ypê')
// })

// imprimeMensagemCompra(produtosYpe)