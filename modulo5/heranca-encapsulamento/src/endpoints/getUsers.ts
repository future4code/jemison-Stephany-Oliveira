import { TABLE_USERS } from './../database/tableNames';
import { Request, Response } from "express"
import { UserDatabase } from "../class/UserDatabase";
import { BaseDatabase } from "../database/BaseDatabase";

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        // const result = await connection(TABLE_USERS).select()
        const result = new UserDatabase();
        result.getAllUsers()
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}