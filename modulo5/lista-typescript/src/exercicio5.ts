// Exercício 5

/*
Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne
uma lista com apenas os emails dos usuários “admin”.

[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 
*/

type User = {name:string, email:string, role:string}

const users:User[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const showAdminsContact = (arr:User[]):string[] => {
    const newArr:User[] = arr.filter((user) => {
        return user.role === "admin"
    })
    return newArr.map((user) => user.email)
}

console.table(showAdminsContact(users))