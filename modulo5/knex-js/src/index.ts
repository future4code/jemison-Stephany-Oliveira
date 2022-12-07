import express, { Request, Response } from "express"
import { connection } from "./database/sqlLink"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

// functions
const searchActorByName = async (name?:string): Promise<any> => {
    const result = await connection("Actor").where('name', 'like', `%${name}%`)
    return result
}

const actorsQuantityByGender = async (gender?:string): Promise<any> => {
    const result = await connection("Actor").count().where('gender', `${gender}`)
    return result
}

const avgSalaryPerGender = async (gender?:string): Promise<any> => {
    const result = await connection("Actor").avg('salary').where('gender', `${gender}`)
    return result
}

// endpoints

// GET Users by Name
app.get('/actor', async (req: Request, res: Response): Promise<void> => {
    const name = req.query.name?.toString()
    try {
        res.status(200).send(await searchActorByName(name))
    } catch (error:any) {
        console.log(error)
    }
})

// Get Quantity by Gender

app.get('/actor/qtd', async (req:Request, res:Response): Promise<void> => {
    const gender = req.query.gender?.toString()
    try {
        res.status(200).send(await actorsQuantityByGender(gender))
    } catch (error:any) {
        console.log(error)
    }
})

// GET Average Salary Per Gender

app.get('/actor/salaryAVG', async (req:Request, res:Response): Promise<void> => {
    const gender = req.query.gender?.toString()
    try {
        res.status(200).send(await avgSalaryPerGender(gender))
    } catch (error:any) {
        console.log(error)
    }
})

// PUT Update Salary

app.put('/actor', async (req:Request, res:Response): Promise<void> => {
    try {
        await connection('Actor').where('id', `${req.query.id}`).update({salary: req.body.salary})
        res.status(200).send('O salário foi atualizado com sucesso.')
    } catch (error:any) {
        console.log(error)
    }
})

// DEL Delete Actor by ID

app.delete('/actor', async (req:Request, res:Response): Promise<void> => {
    try {
        // await connection('Actor').where('id', `${req.query.id}`).del()
        await connection('MovieCast').where('actor_id',`${req.query.id}`).del()
        await connection('Actor').where('id',`${req.query.id}`).del()
        res.status(200).send('A pessoa intérprete foi deletada com sucesso.')
    } catch (error:any) {
        console.log(error)
    }
})




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});