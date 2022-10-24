// Exercício 1

/*
Crie um função que receba uma string com o nome e outra string com uma data de nascimento
(ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato:
"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"  
*/

const getMonth = (numberedMonth:string):string => {
    switch (numberedMonth) {
        case "01":
            numberedMonth = 'Janeiro'
            break;
        case "02":
            numberedMonth = 'Fevereiro'
            break;
        case "03":
            numberedMonth = 'Março'
            break;
        case "04":
            numberedMonth = 'Abril'
            break;
        case "05":
            numberedMonth = 'Maio'
            break;
        case "06":
            numberedMonth = 'Junho'
            break;
        case "07":
            numberedMonth = 'Julho'
            break;
        case "08":
            numberedMonth = 'Agosto'
            break;
        case "09":
            numberedMonth = 'Setembro'
            break;
        case "10":
            numberedMonth = 'Outubro'
            break;
        case "11":
            numberedMonth = 'Novembro'
            break;
        case "12":
            numberedMonth = 'Dezembro'
            break;
        default:
            console.log('Insira uma data de nascimento válida')
    }
    
    return numberedMonth
}

const introduceYou = (name: string, birthDate: string):string => {
    const fullDate: string[] = birthDate.split("/")
    return `Olá, me chamo ${name}, nasci no dia ${fullDate[0]} do mês de ${getMonth(fullDate[1])} do ano de ${fullDate[2]}`
}


console.log(introduceYou('Ste', '10/12/1998'))