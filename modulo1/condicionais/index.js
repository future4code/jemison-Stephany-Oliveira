// Exercícios de interpretação de código

/*
Enunciado 1:

a) O código recebe um número do usuário, converte de string para número e verifica se ele é divisível por 2 sem resto (ou seja, se ele é par). Se ele for par, ele passa no teste e se for impar, não passa.

b) Números pares

c) Números impares

Enunciado 2:

a) o código acima, através do switch, encontra um match entre o q o usuario escreveu no prompt (fruta escolhida) e as frutas definidas, mostrando o preço delas no console.

b) a string exibida será: O preço da fruta Maçã é R$2.25.

c) a mensagem seria: O preço da fruta Pêra é R$5.

Enunciado 3:

a) a primeira linha declara a const onde o número pensado pelo usuário será guardada

b) Se 10, a mensagem seria:

Esse número passou no teste.
mensagem is not defined

Se fosse -10, a mensagem seria:
mensagem is not defined

c) haverá um erro no console por não termos retornado o valor de mensagem para fora da condição verdadeira.
como a let só existe no escopo local do if criado, o console.log não consegue alcançá-la se nós não retornarmos o valor para fora.
*/

// Exercícios de escrita de código

// Enunciado 1:

// // a) / b)

// let nomeUsuario = prompt('Qual é o seu nome?');
// let idadeUsuario = Number(prompt('Qual é a sua idade?'));

// // c)

// if (idadeUsuario >= 18) {
//     console.log(`${nomeUsuario}, você pode dirigir.`)
// } else {
//     console.log(`${nomeUsuario}, você não pode dirigir.`)
// }

// Enunciado 2:

// let nomeEstudante = prompt('Insira seu nome:')
// let turno = prompt('Informe seu turno de estudo na Labenu. M para matutino, V para vespertino ou N para noturno.');

// if (turno === "M") {
//     console.log(`${nomeEstudante}, bom dia!`)
// } else if (turno === "V") {
//     console.log(`${nomeEstudante}, boa tarde!`)
// } else if (turno === "N") {
//     console.log(`${nomeEstudante}, boa noite!`)
// } else {
//     console.log('Insira uma das letras correspondentes ao seu turno.')
// }

// Enunciado 3:

// switch (turno) {
//     case 'M':
//         console.log(`${nomeEstudante}, bom dia!`)
//         break;
    
//     case 'V':
//         console.log(`${nomeEstudante}, boa tarde!`)
//         break;

//     case 'N':
//         console.log(`${nomeEstudante}, boa noite!`)
//         break;

//     default:
//         console.log('Insira uma das letras correpondentes ao seu turno.')
//         break
// }

// Enunciado 4:

// let genero = prompt('Qual é o gênero do filme escolhido?').toLowerCase();
// let precoIngresso = Number(prompt('Qual é o preço do ingresso?'));

// if (genero === "fantasia" && precoIngresso <= 15) {
//     console.log('Bom filme!')
// } else {
//     console.log('Escolha outro filme :(')
// }

// Desafios:

// Enuciado 1:

// if (genero === "fantasia" && precoIngresso <= 15) {
//     let lanchinho = prompt('Que lanchinhos vai comprar para ver o filme?')
//     console.log('Bom filme!')
//     console.log(`Aproveite a comilança de ${lanchinho}`)
// } else {
//     console.log('Escolha outro filme :(');
// }

// let nomeCompleto = prompt('Insira seu nome completo:');
// let tipoJogo = prompt('Qual é o tipo de jogo que você quer assistir? Insira IN para jogos internacionais ou DO para jogos domésticos').toUpperCase();
// let etapaJogo = prompt('Em que etapa do campeonato o jogo está? Insira SF para semi-final, DT para decisão de terceiro lugar ou FI para final').toUpperCase();
// let categoriaJogo = Number(prompt('Insira a categoria do jogo (1, 2, 3 ou 4):'));
// let quantidadeIngressos = Number(prompt('Quantos ingressos deseja comprar?'));

// // tipoJogo

// const calculaPrecoIngresso = (tipoJogo, etapaJogo, categoriaJogo, quantidadeIngressos) => {
//     if (tipoJogo === 'IN' && etapaJogo === 'SF' && categoriaJogo === 1) {
//         let valor = 1320 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Semi-final 
//         Categoria:  1 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'DO' && etapaJogo === 'SF' && categoriaJogo === 1) {
//         let valor = 1320;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Semi-final 
//         Categoria:  1 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)

//     } else if (tipoJogo === 'IN' && etapaJogo === 'DT' && categoriaJogo === 1) {
//         let valor = 660 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Decisão de terceiro lugar 
//         Categoria:  1 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'DO' && etapaJogo === 'DT' && categoriaJogo === 1) {
//         let valor = 660;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Decisão de terceiro lugar
//         Categoria:  1 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'IN' && etapaJogo === 'FI' && categoriaJogo === 1) {
//         let valor = 1980 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Final
//         Categoria:  1 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'DO' && etapaJogo === 'FI' && categoriaJogo === 1) {
//         let valor = 1980;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Final 
//         Categoria:  1 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'IN' && etapaJogo === 'SF' && categoriaJogo === 2) {
//         let valor = 880 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Semi-final 
//         Categoria:  2 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'DO' && etapaJogo === 'SF' && categoriaJogo === 2) {
//         let valor = 880;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Semi-final 
//         Categoria:  2 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'IN' && etapaJogo === 'DT' && categoriaJogo === 2) {
//         let valor = 440 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Decisão de terceiro lugar
//         Categoria:  2 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'DO' && etapaJogo === 'DT' && categoriaJogo === 2) {
//         let valor = 440;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Decisão de terceiro lugar 
//         Categoria:  2 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'IN' && etapaJogo === 'FI' && categoriaJogo === 2) {
//         let valor = 1320 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Final 
//         Categoria:  2 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)

//     } else if (tipoJogo === 'DO' && etapaJogo === 'FI' && categoriaJogo === 2) {
//         let valor = 1320;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Final 
//         Categoria:  2 
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'IN' && etapaJogo === 'SF' && categoriaJogo === 3) {
//         let valor = 550 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Semi-final 
//         Categoria:  3
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'DO' && etapaJogo === 'SF' && categoriaJogo === 3) {
//         let valor = 550;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Semi-final 
//         Categoria:  3
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'IN' && etapaJogo === 'DT' && categoriaJogo === 3) {
//         let valor = 330 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Decisão de terceiro lugar
//         Categoria:  3
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'DO' && etapaJogo === 'DT' && categoriaJogo === 3) {
//         let valor = 330;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Decisão de terceiro lugar
//         Categoria:  3
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'IN' && etapaJogo === 'FI' && categoriaJogo === 3) {
//         let valor = 880 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Final 
//         Categoria:  3
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'DO' && etapaJogo === 'FI' && categoriaJogo === 3) {
//         let valor = 880;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Final 
//         Categoria:  3
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'IN' && etapaJogo === 'SF' && categoriaJogo === 4) {
//         let valor = 220 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Semi-final 
//         Categoria:  4
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'DO' && etapaJogo === 'SF' && categoriaJogo === 4) {
//         let valor = 220;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Semi-final 
//         Categoria:  4
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'IN' && etapaJogo === 'DT' && categoriaJogo === 4) {
//         let valor = 170 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Decisão de terceiro lugar
//         Categoria:  4
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'DO' && etapaJogo === 'DT' && categoriaJogo === 4) {
//         let valor = 170;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Decisão de terceiro lugar
//         Categoria:  4
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'IN' && etapaJogo === 'FI' && categoriaJogo === 4) {
//         let valor = 330 / 4.10;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Internacional 
//         Etapa do jogo:  Final 
//         Categoria:  4
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: U$D ${Math.round(valor)}
//         Valor total:  U$D ${Math.round(valorTotal)}`)
        
//     } else if (tipoJogo === 'DO' && etapaJogo === 'FI' && categoriaJogo === 4) {
//         let valor = 330;
//         let valorTotal = valor * quantidadeIngressos
//         console.log(`
//         ---Dados da compra--- 
//         Nome do cliente:  ${nomeCompleto} 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Final 
//         Categoria:  4
//         Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
//         ---Valores--- 
//         Valor do ingresso: R$ ${Math.round(valor)}
//         Valor total:  R$ ${Math.round(valorTotal)}`)

//     } else {
//         console.log('Você inseriu um ou mais intens incorretamente. Recarregue a página e tente novamente.')
//     }
// }

// calculaPrecoIngresso(tipoJogo, etapaJogo, categoriaJogo, quantidadeIngressos);