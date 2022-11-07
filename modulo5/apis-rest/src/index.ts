import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './users'
import * as allTypes from './types'
import * as allErrors from './errors'

const app = express()

app.use(express.json())

app.use(cors())

// Exercício 1

// app.get('/users', (req: Request, res: Response) => {
//     try {
//         if (!users) {
//             const err = {
//                 code: allErrors.dataNotFound.code,
//                 name: allErrors.dataNotFound.name,
//                 message: allErrors.dataNotFound.message
//             }
//             throw err
//         }

//         res.status(200).send(users)

//     } catch (e: any) {
//         switch (e.name) {
//             case 'dataNotFound':
//                 res.status(e.code).send(e.message)
//                 break;
//             default:
//                 res.status(allErrors.internalServerError.code).send(allErrors.internalServerError.message)
//         }
//     }
// })

// Exercício 2
// app.get('/user', (req: Request, res: Response) => {
//     try {
//         const userType = req.query.type?.toString()

//         if (!userType) {
//             const err = {
//                 code: allErrors.badSyntax.code,
//                 name: allErrors.badSyntax.name,
//                 message: allErrors.badSyntax.message
//             }
//             throw err
//         }

//         if (userType.toUpperCase() != allTypes.USER_TYPES.NORMAL && userType.toUpperCase() != allTypes.USER_TYPES.ADMIN) {
//             const err = {
//                 code: allErrors.unacceptableType.code,
//                 name: allErrors.unacceptableType.name,
//                 message: allErrors.unacceptableType.message
//             }
//             throw err
//         }

//         const searchedUser: allTypes.User[] = users.filter((user) => user.type === userType.toUpperCase())

//         if (!searchedUser.length) {
//             const err = {
//                 code: allErrors.dataNotFound.code,
//                 name: allErrors.dataNotFound.name,
//                 message: allErrors.dataNotFound.message
//             }
//             throw err
//         }

//         res.status(200).send(searchedUser)
//     } catch (e: any) {
//         switch (e.name) {
//             case 'badSyntax':
//                 res.status(e.code).send(e.message)
//                 break;
//             case 'unacceptableType':
//                 res.status(e.code).send(e.message)
//                 break;
//             case 'dataNotFound':
//                 res.status(e.code).send(e.message)
//                 break;
//             default:
//                 res.status(allErrors.internalServerError.code).send(allErrors.internalServerError.message)
//         }
//     }
// })

// Exercício 3
// app.get('/user', (req: Request, res: Response) => {
//     try {
//         const username = req.query.name

//         if (!username) {
//             const err = {
//                 code: allErrors.badSyntax.code,
//                 name: allErrors.badSyntax.name,
//                 message: allErrors.badSyntax.message
//             }
//             throw err
//         }


//         const searchedUser: allTypes.User[] = users.filter((user) => user.name.toLowerCase() === username.toString().toLowerCase())

//         if (!searchedUser.length) {
//             const err = {
//                 code: allErrors.dataNotFound.code,
//                 name: allErrors.dataNotFound.name,
//                 message: allErrors.dataNotFound.message
//             }
//             throw err
//         }

//         res.status(200).send(searchedUser)
//     } catch (e: any) {
//         switch (e.name) {
//             case 'badSyntax':
//                 res.status(e.code).send(e.message)
//                 break;
//             case 'unacceptableType':
//                 res.status(e.code).send(e.message)
//                 break;
//             case 'dataNotFound':
//                 res.status(e.code).send(e.message)
//                 break;
//             default:
//                 res.status(allErrors.internalServerError.code).send(allErrors.internalServerError.message)
//         }
//     }
// })

// Exercício 4

app.put('/new', (req: Request, res: Response) => {
    try {
        const { name, email, type, age } = req.body;

        if (!name || !email || !type || !age) {
            const err = {
                code: allErrors.badSyntax.code,
                name: allErrors.badSyntax.name,
                message: allErrors.badSyntax.message
            }
            throw err
        }

        if (type.toUpperCase() != allTypes.USER_TYPES.NORMAL && type.toUpperCase() != allTypes.USER_TYPES.ADMIN) {
            const err = {
                code: allErrors.unacceptableType.code,
                name: allErrors.unacceptableType.name,
                message: allErrors.unacceptableType.message
            }
            throw err
        }

        const newUser: allTypes.User = {
            id: users.length + 1,
            name,
            email,
            type: type.toUpperCase() === 'ADMIN'? allTypes.USER_TYPES.ADMIN : allTypes.USER_TYPES.NORMAL,
            age
        }

        users.push(newUser)

        let newUsersList = users

        res.status(201).send(newUsersList)
    } catch (e: any) {
        switch (e.name) {
            case 'badSyntax':
                res.status(e.code).send(e.message)
                break;
            case 'unacceptableType':
                res.status(e.code).send(e.message)
                break;
            default:
                res.status(allErrors.internalServerError.code).send(allErrors.internalServerError.message)
        }
    }
})


app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003');
});