// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a, b){return a-b});
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((item) => item % 2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArr = array.filter((item) => item % 2 === 0);
    return novoArr.map((item) => item * item)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0];
    for (let i = 0; i < array.length; i++) {
        if (maiorNumero < array[i]) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objetoNumerico = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: false,
        diferenca: 0
    }
    let arrayTemporario = [];
    arrayTemporario.push(num1, num2);

    let maiorNumero = arrayTemporario[0];
    for (let i = 0; i < arrayTemporario.length; i++) {
        if (maiorNumero < arrayTemporario[i]) {
            maiorNumero = arrayTemporario[i]
        }
    }
    objetoNumerico.maiorNumero = maiorNumero;

    let menorNumero = arrayTemporario[0];
    for (let i = 0; i < arrayTemporario.length; i++) {
        if (menorNumero > arrayTemporario[i]) {
            menorNumero = arrayTemporario[i]
        }
    }
    
    objetoNumerico.diferenca = maiorNumero - menorNumero;

    if (maiorNumero % menorNumero === 0) {
        objetoNumerico.maiorDivisivelPorMenor = true
    } else {
        objetoNumerico.maiorDivisivelPorMenor = false
    }
    return objetoNumerico

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayNumerosPares = [];
    for (let i = 0; i < n; i++) {
        let valor = i * 2
        arrayNumerosPares.push(valor)
    }
    return arrayNumerosPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return 'Equilátero'
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return 'Isósceles'
    } else if (ladoA !== ladoB !== ladoC) {
        return 'Escaleno'
    } else {
        return 'Você não inseriu medidas válidas.'
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novoArr = array.sort(function(a, b){return a-b})
    let segundoMaior = novoArr[novoArr.length - 2];
    let segundoMenor = novoArr[1]
    let segundoMaiorESegundoMenor = [segundoMaior, segundoMenor]
    return segundoMaiorESegundoMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let assistirFilme = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
    return assistirFilme
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novaPessoaAnon = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return novaPessoaAnon
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let idadeMinima = 14;
    let idadeMaxima = 60;
    let alturaMinima = 1.5;
    let pessoasAutorizadas = pessoas.filter((item) => item.idade > idadeMinima && item.idade < idadeMaxima && item.altura >= alturaMinima);
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let idadeMinima = 14;
    let idadeMaxima = 60;
    let alturaMinima = 1.5;
    let pessoasNaoAutorizadas = pessoas.filter((item) => item.idade <= idadeMinima || item.idade > idadeMaxima || item.altura < alturaMinima);
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < contas.length; i++) {
        contas[i].saldoTotal = contas[i].saldoTotal - contas[i].compras.reduce((total, item, index, array) => total + item, 0, contas[i])
        contas[i].compras = [];
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => a.nome.localeCompare(b.nome))
}

/*

   [ 
     { nome: "Márcia", dataDaConsulta: "04/05/2021" },
     { nome: "Pedro", dataDaConsulta: "02/07/2021" },
     { nome: "João",  dataDaConsulta: "01/10/2021" },
     { nome: "Paula", dataDaConsulta: "03/11/2021" } 
    ];

*/
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let arr = []
    for (let i = 0; i < consultas.length; i++) {
        arr.push(consultas[i].dataDaConsulta.split('/'))
    }
    let arrToString = arr.join(' ')
    let primeiraData = arrToString.substring(0, 10)
    let segundaData = arrToString.substring(10, 21)
    let terceiraData = arrToString.substring(21, 32)
    let quartaData = arrToString.substring(32, 43)

    let arrNumerico = [primeiraData, segundaData, terceiraData, quartaData]
    arrNumerico = arrNumerico.sort(function(a, b){return a-b})

    for (let i = 0; i < arrNumerico.length; i++) {
        arrNumerico[i] = arrNumerico[i].replace(',','/')
        arrNumerico[i] = arrNumerico[i].replace(',','/')
    }

    for (let i = 0; i < consultas.length; i++) {
        consultas[i].dataDaConsulta = consultas[i].dataDaConsulta
    }

    return arrNumerico
}

let teste = [ 
    { nome: "Márcia", dataDaConsulta: "04/05/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "João",  dataDaConsulta: "01/10/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" } 
   ];

console.log(retornaArrayOrdenadoPorData(teste))