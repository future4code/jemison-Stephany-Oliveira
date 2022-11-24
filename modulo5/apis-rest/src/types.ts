
export enum USER_TYPES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User = {
        id: number,
        name: string,
        email: string,
        type: USER_TYPES,
        age: number
}

export type Err = {
    code: number,
    name: string,
    message: string
}