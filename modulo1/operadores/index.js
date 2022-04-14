// Interpretação de código

// 1.
// a) false
// b) false
// c) true
// d) boolean

// 2.
// Problema: o prompt só entrega strings, e ele não fez nenhuma conversão para que essas strings fossem reconhecidas como numeros.
// Será impresso: a concatenação dos dois números inseridos pelo usuário. Ex. 1º numero 2 e 2º numero 3 > 23 seria a concatenação.

// 3.
// let primeiroNumero = Number(prompt("Digite um numero!"));
// let segundoNumero = Number(prompt("Digite outro numero!"));

// Escrita de código

// Enunciado 1

// let idadeUsuario = Number(prompt("Insira a sua idade:"));
// let idadeAmigo = Number(prompt("Insira a idade do seu melhor amigo:"));
// let maisVelho = idadeUsuario > idadeAmigo;
// let diferencaIdades = idadeUsuario - idadeAmigo;

// console.log(`Sua idade é maior do que a do seu amigo? ${maisVelho}`);
// console.log(`A diferença de idades é ${diferencaIdades} ano(s).`);

// Enunciado 2

// let numeroPar = Number(prompt("Insira um número PAR:"));
// let restoDivisao = numeroPar % 2;
// console.log(`O resto da divisão do seu número é: ${restoDivisao}`);

// // Padrão encontrado: Números pares, quando divididos por um número também par (2), não deixam resto.
// // Com um número impar, mesmo sendo dividido por um número par, há sempre o resto 1.

// Enunciado 3

// const MesesAno = 12;
// const diasAno = 365;
// const horasAno = 24;
// let idadeEmAnos = Number(prompt("Insira sua idade em anos:"));
// let idadeEmMeses = idadeEmAnos * MesesAno;
// console.log(`A sua idade, em meses, é: ${idadeEmMeses} meses.`);
// let idadeEmDias = idadeEmMeses * diasAno;
// console.log(`A sua idade, em dias, é: ${idadeEmDias} dias.`);
// let idadeEmHoras = idadeEmDias * horasAno;
// console.log(`A sua idade, em horas, é: ${idadeEmHoras} horas.`);


// Enunciado 4

// let primeiroNumero = Number(prompt("Insira o primeiro número:"));
// let segundoNumero = Number(prompt("Insira o segundo número:"));

// let maior = primeiroNumero > segundoNumero;
// let igual = primeiroNumero === segundoNumero;
// let primeiroDivisivel = maior || igual;
// let segundoDivisivel = maior && igual;

// console.log(`O primeiro numero é maior que o segundo? ${maior}`);
// console.log(`O primeiro numero é igual ao segundo? ${igual}`);
// console.log(`O primeiro numero é divisível pelo segundo? ${primeiroDivisivel}`);
// console.log(`O segundo numero é divisível pelo primeiro? ${segundoDivisivel}`);

// Desafio 1

// let temperaturaFahrenheit = 77;
// let temperaturaCelsius = 80;
// let temperaturaCelsius2 = 30;
// let temperaturaCelsiusUsuario = Number(prompt("Qual é a temperatura em Celsius?"));

// let conversaoKelvin = (temperaturaFahrenheit - 32) * (5/9) + 273.15;
// let conversaoFahrenheit = (temperaturaCelsius)*(9/5) + 32;
// let conversaoFahrenheit2 = (temperaturaCelsius2)*(9/5) + 32;
// let conversaoKelvin2 = (conversaoFahrenheit2 - 32) * (5/9) + 273.15;
// let conversaoFahrenheitUsuario = (temperaturaCelsiusUsuario)*(9/5) + 32;
// let conversaoKelvinUsuario = (conversaoFahrenheitUsuario - 32) * (5/9) + 273.15;


// console.log(`O resultado da conversão de ${temperaturaFahrenheit}° em Kelvin é ${conversaoKelvin}.`);
// console.log(`O resultado da conversão de ${temperaturaCelsius}° em Fahrenheit é ${conversaoFahrenheit}.`);
// console.log(`O resultado da conversão de ${temperaturaCelsius2}° em Fahrenheit é ${conversaoFahrenheit2} e em Kelvin ${conversaoKelvin2}.`);
// console.log(`O resultado da conversão de ${temperaturaCelsiusUsuario}° em Fahrenheit é ${conversaoFahrenheitUsuario} e em Kelvin ${conversaoKelvinUsuario}.`);
