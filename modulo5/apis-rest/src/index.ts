import { userTypes } from './types';
import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './users'
import * as errors from './errors'

const app = express()

app.use(express.json())

app.use(cors())

// Exercício 1: endpoint que busca todos os usuários de uma lista
// 1.a) o método GET
// 1.b) a entidade manipulada é '/users', também conhecida como path.

// app.get('/users',(req:Request, res:Response) => {
//     let errorCode = 400;
//         try {
//             if (!users) {
//                 errorCode = 404
//                 throw new Error('Não há usuários nessa base de dados.')
//             } else {
//                 res.status(200).send(users)
//             }
//         } catch (err:any) {
//             res.status(errorCode).send(err.message)
//         }
// })

/* Exercício 2: endpoint que busca todos os usuários que tenham uma propriedade type específica, 
recebendo apenas um type por vez. 

*/

app.get('/users', (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        if (!req.query.type) {
            let searchedType: string | undefined = req.query.type?.toString()
            if (searchedType?.toUpperCase() != userTypes.ADMIN && searchedType?.toUpperCase() != userTypes.NORMAL) {
                errorCode = 422;
                throw errors.wrongTypeError
            } else {
                let matchingUsers = users.filter((user) => user.type === searchedType?.toUpperCase())
                res.status(200).send(matchingUsers)
            }
        } else {
            throw errors.noTypeError
        }

    } catch (err: any) {
        res.status(errorCode).status(err.message)
    }

})


app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003');
});