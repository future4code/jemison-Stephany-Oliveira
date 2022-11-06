// Exercício 4

// a)

type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

/*
b) criaria, dentro do arquivo package.json, um script como o abaixo:

"exercicio4":"tsc ./build/exercicio.js"

*/

/*
c) não mudaria, já que a transpilação não leva em consideração o local do arquivo original e sim o local
do arquivo transpilado (i.e build)

*/

/*
d) sim, basta acrescentar o nome e o caminho (caso sejam diferentes) de todos os arquivos a serem transpilados
na mesma linha de comando com tsc na frente:

'exerciciosQuinta':'tsc exercicio1 exercicio2 exercico3'

*/
