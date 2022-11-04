export type User = {
    id: number,
    name: string,
    email: string,
    type: userTypes,
    age: number
}

export enum userTypes {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}