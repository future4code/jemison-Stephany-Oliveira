// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRetangulo = Number(prompt("Insira a altura do retangulo:"));
  const larguraRetangulo = Number(prompt("Insira a largura do retangulo:"));

  console.log(alturaRetangulo * larguraRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano estamos?"));
  const anoNascimento = Number(prompt("Em que ano você nasceu?"));

  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Insira seu nome:");
  const idade = Number(prompt("Insira sua idade:"));
  const email = prompt("Insira seu e-mail:");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCorFavorita = prompt("Insira sua primeira cor favorita:");
  const segundaCorFavorita = prompt("Insira sua segunda cor favorita:");
  const terceiraCorFavorita = prompt("Insira sua terceira cor favorita:");

  coresFavoritas = [primeiraCorFavorita, segundaCorFavorita, terceiraCorFavorita];
  console.log(coresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho1 = string1.length;
  const tamanho2 = string2.length;

  return tamanho1 === tamanho2;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array [0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const tamanho = array.length;
  return array [tamanho - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  primeiraString = string1.toLowerCase();
  segundaString = string2.toLowerCase();

  return primeiraString === segundaString;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Em que ano estamos?"));
  let anoNascimento = Number(prompt("Em que ano você nasceu?"));
  let anoEmissao = Number(prompt("Em que ano seu RG foi emitido?"));
  let idade = anoAtual - anoNascimento;
  let renovacao = anoAtual - anoEmissao;

  let ate20Anos = idade <= 20;
  let ate50Anos = idade > 20 && idade <= 50;
  let acima50Anos = idade > 50;

  let renovacao5Anos = renovacao >= 5;
  let renovacao10Anos = renovacao >= 10;
  let renovacao15Anos = renovacao > 15;

  let checaIdade = ate20Anos || ate50Anos || acima50Anos;
  let checaRenovacao = renovacao5Anos || renovacao10Anos || renovacao15Anos;
  console.log(checaIdade || checaRenovacao);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorIdade = prompt("Você tem mais de 18 anos?");
  const ensinoMedio = prompt("Você possui ensino médio completo?");

}