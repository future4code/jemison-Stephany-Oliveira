// Exercício 1

/* a) ao tentarmos atribuir um valor de tipo number, vemos um erro abaixo do nome da string. e se
tentaremos executar o código, recebemos o seguinte erro no console:

error TS2322: Type 'number' is not assignable to type 'string'.
7 const minhaString1:string = 122222 // erros na tipagem da variável
        ~~~~~~~~~~~~
Found 1 error in src/exercicio1.ts:7
*/

const minhaString:string = 'Hello, world!' // sem erros na execução desse código.

// const minhaString1:string = 122222 // erros na tipagem da variável

console.log(minhaString)
// console.log(minhaString1)

/* b) para que a variável abaixo possa receber tanto números quanto strings, usamos o Union Type (|)
para adicionar a condição OU à tipagem da variável.

ex.
const meuNumero:number | string = 1998;
*/

// c)

enum Cores {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    AZUL_ESCURO = 'azul-escuro',
    VIOLETA = 'violeta'
}

type Pessoa = {
    nome:string,
    idade:number,
    corFavorita:Cores
}

const obj1:Pessoa = {
    nome:'Edward Gross',
    idade: 50,
    corFavorita: Cores.AZUL
}

const obj2:Pessoa = {
    nome:'Mark A. Altman',
    idade: 49,
    corFavorita: Cores.AZUL_ESCURO
}

const obj3:Pessoa = {
    nome: 'Drew Karpyshyn',
    idade: 12,
    corFavorita:Cores.AMARELO
}

const obj4:Pessoa = {
    nome: 'Kami Garcia',
    idade: 26,
    corFavorita:Cores.VERMELHO
}

