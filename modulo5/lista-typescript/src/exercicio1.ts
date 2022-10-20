// Exercício 1

/*
Crie um função que receba uma string com o nome e outra string com uma data de nascimento
(ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato:
"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"  
*/

const apresenteSe = (name:string, birthDate:string) => {
    const tempString:string = birthDate.replace(/\//g, '')
    const birthday:string = tempString.slice(0,2)
    const birthmonth:string = tempString.slice(2,4)
    const birthyear:string = tempString.slice(4,8)
    return `Olá, me chamo ${name}, nasci no dia ${birthday} do mês de ${birthmonth} do ano de ${birthyear}`
}

console.log(apresenteSe('Ste', '10/12/1998'))