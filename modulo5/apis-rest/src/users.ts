import * as allTypes from './types'

export let users:allTypes.User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: allTypes.USER_TYPES.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: allTypes.USER_TYPES.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: allTypes.USER_TYPES.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: allTypes.USER_TYPES.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: allTypes.USER_TYPES.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: allTypes.USER_TYPES.ADMIN,
        age: 60
    }
]