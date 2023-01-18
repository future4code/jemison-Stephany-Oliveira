import { TABLE_USERS } from './../database/tableNames';
import { Knex } from 'knex';
import { BaseDatabase } from "../database/BaseDatabase";

export class UserDatabase extends BaseDatabase {
    protected static tableName:string = "Labe_Users"

    constructor() {
        super(BaseDatabase.connection)
    }

    public getAllUsers = async () => {
        const result = await BaseDatabase.connection(TABLE_USERS).select()
        return result
    }
}