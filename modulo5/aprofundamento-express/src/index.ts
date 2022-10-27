import express, { Request, Response } from 'express'
import cors from 'cors'
import { allToDos } from './todos'
import { ToDo } from './types';

const app = express()

app.use(express.json())

app.use(cors())

// Exercício 1

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong')
})

// Exercício 4

app.get('/todos', (req: Request, res: Response) => {
    let toDos: ToDo[];
    switch (req.query.completed) {
        case 'true':
            toDos = allToDos.filter((toDo) => toDo.completed === true)
            res.status(200).send(toDos)
            break;
        case 'false':
            toDos = allToDos.filter((toDo) => toDo.completed === false)
            res.status(200).send(toDos)
            break;
        default:
            res.status(200).send(allToDos)
    }
})

// Exercicío 5

app.put('/todos', (req: Request, res: Response) => {
    const user: number = Number(req.headers.authorization)
    const title:string = req.body.title
    const completed:boolean = req.body.completed

    const newToDo: ToDo = {
        userID: user,
        id: allToDos.length + 1,
        title: title,
        completed: completed
    }

    !user ?
    res.status(401).send('To add a new To Do to your list, please add your authorization token, also known as userID.')
    : !user || !title || !completed ?
    res.status(400).send('To add a new To Do to your list, please fill all mandatory fields: title and completed status.')
    : allToDos.push(newToDo); res.status(201).send(allToDos)
});

// Exercício 6

app.put('/todos/:id', (req:Request, res:Response) => {
    const id:number = Number(req.params.id)
    if (!id) {
        res.status(400).send('To update the completed status, please inform which ToDo you want to edit by id.')
    } else {
        for (let i = 0; i < allToDos.length; i++) {
            if (allToDos[i].id === id) {
                allToDos[i].completed = !allToDos[i].completed
            }
        }
        res.status(200).send(allToDos)
    }
})

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003');
});