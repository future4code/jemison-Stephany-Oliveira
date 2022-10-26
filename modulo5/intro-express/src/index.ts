import express,{Request, Response} from 'express'
import cors from 'cors'
import * as aliases from './types'
import { users } from './users'
import { posts } from './posts';

const app = express()

app.use(express.json())

app.use(cors())

// Exercício 1 - Teste do Endpoint 0

app.get("/", (req:Request, res:Response) => {
    res.send("Hello, APIs world!")
})

// Exercício 4 - Get Users Endpoint Creation

app.get("/users", (req:Request, res:Response) => {
    res.status(200).send(users)
})

// Exercício 7 - Get Posts Endpoint Creation

app.get("/posts", (req:Request, res:Response) => {
    res.status(200).send(posts)
})

// Exercício 8 - Get Posts from User Endpoint Creation

app.get("/posts/:userId", (req:Request, res:Response) => {
    const filteredPosts:aliases.Post[] = posts.filter((post) => post.userId === Number(req.params.userId))
    res.status(200).send(filteredPosts)
})

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003');
});