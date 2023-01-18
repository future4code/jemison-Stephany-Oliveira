import { BaseDatabase } from "./BaseDatabase";
import { User } from './../class/User';

export class UserDatabase extends BaseDatabase {

    createUser = async (item: User):Promise<void> => {
        try {
            await BaseDatabase.connection.insert(item).into('User_Arq')
        } catch (error: any) {
            throw new Error(error)
        }
    }

    getAllUsers = async ():Promise<User[]> => {
        try {
            const result = await BaseDatabase.connection.select().from('User_Arq')
            return result
        } catch (error: any) {
            throw new Error(error)
        }
    }

    deleteUserById = async (id: string):Promise<void> => {
        try {
            await BaseDatabase.connection('User_Arq').where({ id }).del()
        } catch (error: any) {
            throw new Error(error)
        }
    }
}