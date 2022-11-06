// Exercício 6

/*
Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua
tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome
do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo cliente. Exemplo:

[
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

Pensando em aumentar seus lucros, o banco quer identificar possíveis clientes precisando de empréstimos.
Dessa forma, a sua tarefa é criar uma função que receba este array como parâmetro, atualize o saldo
total descontando todos os débitos e retorne apenas os clientes com saldo negativo.
*/

type Client = { client: string, totalFunds: number, spends: number[]}

const clientsBase: Client[] = [
    { client: "João", totalFunds: 1000, spends: [100, 200, 300] },
    { client: "Paula", totalFunds: 7500, spends: [200, 1040] },
    { client: "Pedro", totalFunds: 10000, spends: [5140, 6100, 100, 2000] },
    { client: "Luciano", totalFunds: 100, spends: [100, 200, 1700] },
    { client: "Artur", totalFunds: 1800, spends: [200, 300] },
    { client: "Soter", totalFunds: 1200, spends: [] }
]

const findLeads = (arr:Client[]):Client[] => {
    let arrOfLeads:Client[] = arr.map((client) => {
        const totalSpends:number = client.spends.reduce((pV, cV) => pV + cV, 0)
        client.totalFunds = client.totalFunds - totalSpends
        client.spends = []
        return client
    })
    arrOfLeads = arrOfLeads.filter((client) => {
        return client.totalFunds < 0
    })
    return arrOfLeads
}

console.table(findLeads(clientsBase))
