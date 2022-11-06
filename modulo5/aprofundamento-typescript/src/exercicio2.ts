// Exercício 2

/*
a) a função espera como entrada um array de números. e sua saída é o objeto estatísticas, do tipo
Estatistica, com o maior número na primeira propriedade, o menor na segunda, e a média de todos os valores
na terceira.

*/

type Estatistica = {
    maior:number,
	menor:number,
	media:number
}

function obterEstatisticas(numeros?:number[]):Estatistica {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.table(obterEstatisticas([10]))


/*
b) A função possui as seguintes variáveis:
numerosOrdenados => tipo array de números (number[])
soma => tipo número (number)
estatisticas => tipo Aliases (Estatistica)
*/

// c)

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: Estatistica
}