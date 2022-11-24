import express, { Request, Response } from "express"
import cors from 'cors'
import { products } from "./data"
import * as typeAliases from './types'
import * as allErrors from './errors'

const app = express()

app.use(express.json())

app.use(cors())

// Exercício 1: Endpoint de teste

app.get('/test', (req: Request, res: Response) => {
    const port = 'http://localhost:3003'
    res.status(200).send(`Server is running in ${port}`)
})

// Exercício 4: Endpoint de Criação de novos Produtos + Exercício 8: Refatoração

app.post('/new', (req: Request, res: Response) => {
    const { name, price } = req.body

    try {
        // verifica se o valor é menor ou igual a zero
        if (price <= 0) {
            const err:typeAliases.Err = {
                code: allErrors.unacceptableValue.code,
                name:allErrors.unacceptableValue.name,
                message: allErrors.unacceptableValue.message
            }
            throw err
        }
        // verifica se name ou price foram passados
        if (!name || !price) {
            const err:typeAliases.Err = {
                code: allErrors.missingProductData.code,
                name:allErrors.missingProductData.name,
                message: allErrors.missingProductData.message
            }
            throw err
        }
        // verifica se os tipos são string ou number.
        if (typeof name != 'string' || typeof price != 'number') {
            const err:typeAliases.Err = {
                code: allErrors.wrongTypeProvided.code,
                name:allErrors.wrongTypeProvided.name,
                message: allErrors.wrongTypeProvided.message
            }
            throw err
        }

        let newProduct: typeAliases.Product = {
            id: (products.length + 1).toString(),
            name: name,
            price: Number(price.toFixed(2))
        }
        products.push(newProduct)

        let updatedProducts: typeAliases.Product[] = products

        res.status(201).send(updatedProducts)

    } catch (e: any) {
        switch (e.name) {
            case 'missingProductData':
                 res.status(e.code).send(e.message)
                 break;
            case 'wrongTypeProvided':
                    res.status(e.code).send(e.message)
                    break;
            case 'unacceptableValue':
                res.status(e.code).send(e.message)
                break;
            default:
                res.status(allErrors.internalServerError.code).send(allErrors.internalServerError.message)
        }
    }
})

// Exercício 5: Endpoint retorna todos os produtos

app.get('/products', (req: Request, res: Response) => {
    try {
        if (!products) {
            const err:typeAliases.Err = {
                code: allErrors.productsEndpointNotFound.code,
                name:allErrors.productsEndpointNotFound.name,
                message: allErrors.productsEndpointNotFound.message
            }
            throw err
        }

        res.status(200).send(products)
    } catch (e: any) {
        switch (e.name) {
            case 'productsEndpointNotFound':
                res.status(e.code).send(e.message)
                break;
            default:
                res.status(allErrors.internalServerError.code).send(allErrors.internalServerError.message)
        }
    }
})

// Exercício 6: Endpoint que edita preços de um produto

app.patch('/products/:id', (req: Request, res: Response) => {
    const id:string = req.params.id
    const price:number = req.body.price

    try {
        if (price <= 0) {
            const err:typeAliases.Err = {
                code: allErrors.unacceptableValue.code,
                name:allErrors.unacceptableValue.name,
                message: allErrors.unacceptableValue.message
            }
            throw err
        }

        if (id === ':id') {
            const err:typeAliases.Err = {
                code: allErrors.noID.code,
                name:allErrors.noID.name,
                message: allErrors.noID.message
            }
            throw err
        }

        const modifiedProduct = products.filter((product) => product.id === id.trim())

        if (!modifiedProduct.length) {
            const err:typeAliases.Err = {
                code: allErrors.productNotFound.code,
                name:allErrors.productNotFound.name,
                message: allErrors.productNotFound.message
            }
            throw err
        }

        if (!price) {
            const err:typeAliases.Err = {
                code: allErrors.missingPriceData.code,
                name:allErrors.missingPriceData.name,
                message: allErrors.missingPriceData.message
            }
            throw err
        }

        if (typeof price != 'number') {
            const err:typeAliases.Err = {
                code: allErrors.wrongTypeProvided.code,
                name:allErrors.wrongTypeProvided.name,
                message: allErrors.wrongTypeProvided.message
            }
            throw err
        }

        modifiedProduct[0].price = Number(price.toFixed(2));

        res.status(201).send(modifiedProduct[0])
    } catch (e: any) {
        switch (e.name) {
            case 'noID':
                res.status(e.code).send(e.message)
                break;
            case 'productNotFound':
                res.status(e.code).send(e.message)
                break;
            case 'missingPriceData':
                res.status(e.code).send(e.message)
                break;
            case 'wrongTypeProvided':
                res.status(e.code).send(e.message)
                break;
            case 'unacceptableValue':
                res.status(e.code).send(e.message)
                break;
            default:
                res.status(allErrors.internalServerError.code).send(allErrors.internalServerError.message)
        }

    }
})

// Exercício 7: Endpoint que deleta um produto

app.delete('/products/:id', (req: Request, res: Response) => {
    const id:string = req.params.id

    try {
        if (id === ':id') {
            const err:typeAliases.Err = {
                code: allErrors.noID.code,
                name:allErrors.noID.name,
                message: allErrors.noID.message
            }
            throw err
        }

        const productToDelete = products.filter((product) => product.id === id.trim())

        if (!productToDelete.length) {
            const err:typeAliases.Err = {
                code: allErrors.productNotFound.code,
                name:allErrors.productNotFound.name,
                message: allErrors.productNotFound.message
            }
            throw err
        }

        const newProductList = products.filter((product) => product.id != id.trim())

        res.status(201).send(newProductList)
    } catch (e: any) {
        switch (e.name) {
            case 'noID':
                res.status(e.code).send(e.message)
                break;
            case 'productNotFound':
                res.status(e.code).send(e.message)
                break;
            default:
                res.status(allErrors.internalServerError.code).send(allErrors.internalServerError.message)
        }

    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});