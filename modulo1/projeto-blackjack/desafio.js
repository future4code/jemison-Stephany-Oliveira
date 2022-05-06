/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


const verificaSeDeu21 = (mao) => {
   const limite = 21;
   if (mao < limite) {
      return true
   } else {
      return false
   }
}

const somaCartas = (array) => {
   return array.reduce((prevVal, elem) => prevVal + elem.valor, 0)
}

const compraMaisCartas = (array) => {
   array = array.push(comprarCarta().valor)
}

const usuario = [comprarCarta(), comprarCarta()]
const computador = [comprarCarta(), comprarCarta()]

switch (confirm('Bem vinde ao jogo de Blackjack! \nQuer iniciar uma nova rodada?')) {
   
   case true:

         if (verificaSeDeu21(somaCartas(usuario))) {
               switch (confirm(`Suas cartas são ${usuario[0].texto} ${usuario[1].texto}. A carta revelada do computador é ${computador[0].texto}. \nDeseja comprar mais uma carta?`)) {
                  
                     case true:
                        compraMaisCartas(usuario)
                           if (verificaSeDeu21(somaCartas(computador))) {
                              switch(confirm(`Suas cartas são ${usuario[0].texto} ${usuario[1].texto}. A carta revelada do computador é ${computador[0].texto}. \nDeseja comprar mais uma carta?`)) {
                              }
                           } 
                           
                           else {
                              alert(
                                 `Usuario - Cartas: ${usuario[0].texto} ${usuario[1].texto} ${usuario[2].texto} - Pontuação: ${somaCartas(usuario)} \n
                                 Computador - Cartas: ${computador[0].texto} ${computador[1].texto} - Pontuação: ${somaCartas(computador)}`
                              )
                        }
               }
         }
         
         else {
               alert('O usuário perdeu!')
         }
   
}