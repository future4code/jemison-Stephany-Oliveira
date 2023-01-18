import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express";

export class UserController {
    
    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            let user = {
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(user)
            
            res.status(201).send({ message: "User created successfully!", item: user})
        } catch (error: any) {
            throw new Error(error)
        }
    }

    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {

            const userBusiness = new UserBusiness()
            const result = await userBusiness.getAllUsers()
            
            res.status(200).send({ result })
        } catch (error: any) {
            throw new Error(error)
        }
    }

    deleteUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id

            const userBusiness = new UserBusiness()
            await userBusiness.deleteUserById(id)
            
            res.status(200).send({ message:'Usuário deletado com sucesso' })
        } catch (error: any) {
            throw new Error(error)
        }
    }
}