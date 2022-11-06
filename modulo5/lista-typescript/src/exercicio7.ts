// Exercício 7

/*
Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o sistema de
organização de estoque da empresa. A pessoa desenvolvedora anterior a você chegou a criar uma função
que ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

O seguinte array traz o estoque atual da empresa:

[
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

Aproveitando a função já feita, faça uma nova função que receba o array de estoque como parâmetro,
use a função ajustaPreco para corrigir os preços e retorne a lista de estoque ordenada pela quantidade 
de cada produto.
*/

type OriginalInventory = {name:string, quantity: number, uValue:number|string}
type AdjustedInventory = {name:string, quantity:number, uValue:string|number}

const ogIventory:OriginalInventory[] = [
	{ name: "MacMugffin", quantity: 37, uValue: 51.040},
	{ name: "Vassoura voadora", quantity: 56, uValue: 210.0},
	{ name: "Laço da verdade", quantity: 32, uValue: 571.5},
	{ name: "O precioso", quantity: 1, uValue: 9181.923},
	{ name: "Caneta de 250 cores", quantity: 123, uValue: 17},
	{ name: "Plumbus", quantity: 13, uValue: 140.44},
	{ name: "Pokebola", quantity: 200, uValue: 99.9915}
]

const adjustPrice = (price:number): string => {
	const adjustedPrice: string = price.toFixed(2).replace('.', ',')
	return "R$ "+adjustedPrice
}

const inventoryOrganizationMaker = (arr:OriginalInventory[]):AdjustedInventory[] => {
    let adjustedArr:AdjustedInventory[] = arr.map((product) => {
        product.uValue = adjustPrice(Number(product.uValue))
        
        return product
    })
    
    return adjustedArr.sort((a, b) => a.quantity - b.quantity)
}

console.table(inventoryOrganizationMaker(ogIventory))