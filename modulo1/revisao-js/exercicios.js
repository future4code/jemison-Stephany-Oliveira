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

console.log(retornaNPrimeirosPares(2))

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}