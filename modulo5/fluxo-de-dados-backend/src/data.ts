import * as typeAliases from './types'

// Exercício 2: Criação de Arrays

export let products:typeAliases.Product[] = [
    {
        id: '1',
        name: 'Batata',
        price:Number(3.25.toFixed(2))
    },
    {
        id: '2',
        name: 'Banana',
        price:Number(2.15.toFixed(2))
    },
    {
        id: '3',
        name: 'Tomate',
        price:Number(9.75.toFixed(2))
    },
    {
        id: '4',
        name: 'Maça',
        price:Number(1.22.toFixed(2))
    },
    {
        id: '5',
        name: 'Laranja',
        price:Number(0.25.toFixed(2))
    },
    {
        id: '6',
        name: 'Cebola',
        price:Number(1.99.toFixed(2))
    }
]