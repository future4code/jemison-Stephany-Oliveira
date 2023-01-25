import dotenv from 'dotenv';
import knex,{ Knex } from 'knex';

dotenv.config()

export abstract class BaseDatabase{
    protected static connection = knex({
        client: "mysql",
        connection: {
           host: process.env.DB_HOST,
           port: 3306,
           user: process.env.DB_USER,
           password: process.env.DB_PASSWORD,
           database: process.env.DB_DATABASE,
           multipleStatements: true
        },
     });

    constructor(connection:Knex) {
        // connection = BaseDatabase.connection;
    }
}