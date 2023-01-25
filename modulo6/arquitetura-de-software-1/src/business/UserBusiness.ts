import { UserDatabase } from './../data/UserDatabase';
import { User } from '../class/User';

export class UserBusiness {

    createUser = async (input: any):Promise<void> => {
        try {

            const userDatabase = new UserDatabase();
            await userDatabase.createUser(input)

        } catch (error: any) {
            throw new Error(error)
        }
    }

    getAllUsers = async (): Promise<User[]> => {
        try {
            const userDatabase = new UserDatabase()
            const result = await userDatabase.getAllUsers()
            return result
        } catch (error: any) {
            throw new Error(error)
        }
    }

    deleteUserById = async (id: string): Promise<void> => {
        try {
            const userDatabase = new UserDatabase()
            userDatabase.deleteUserById(id)
        } catch (error: any) {
            throw new Error(error)
        }
    }
}