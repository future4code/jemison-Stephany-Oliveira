// Exercício 3: Criação de Tipagem

export type Product = {
    id:string,
    name:string,
    price:number
}

// tipagem do objeto de erros

export type Err = {
    code:number,
    name:string,
    message:string
}