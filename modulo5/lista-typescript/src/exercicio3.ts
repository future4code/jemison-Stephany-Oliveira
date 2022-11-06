// Exercício 3

/*
Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes.
Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme.
Os gêneros da plataforma se limitam aqueles encontrados no seguinte `ENUM` de gêneros: 

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional:
4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).

Considerando todas estas informações, crie uma função que receba todas essas informações como
parâmetros( 3 essenciais + 1 opcional) e retorne todas informações organizadas em um `type`.
*/

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Movie = {name:string, releaseYear:number, genre:GENERO, score?:number}

const movieCatalogMaker = (movieName:string, releaseYear:number, genre:GENERO, score?:number):Movie => {
    if (score != undefined) {
        const movie:Movie = {name:movieName, releaseYear:releaseYear, genre:genre, score:score}
        return movie
    } else {
        const movie:Movie = {name:movieName, releaseYear:releaseYear, genre:genre}
        return movie
    }
}

console.table(movieCatalogMaker('To the Bone', 2017, GENERO.DRAMA, 68))