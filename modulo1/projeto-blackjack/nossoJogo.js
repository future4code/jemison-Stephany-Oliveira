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

    let computador = {
       nome: "Computador",
       primeiraCarta: comprarCarta(),
       segundaCarta: comprarCarta()
    }
    let usuario = {
       ...computador,
       nome: "Usuário",
       primeiraCarta: comprarCarta(),
       segundaCarta: comprarCarta()
    }

    let limite = 21;
    let textoPrimeiraCartaUsuario = usuario.primeiraCarta.texto;
    let textoSegundaCartaUsuario = usuario.segundaCarta.texto;
    let textoPrimeiraCartaComputador = computador.primeiraCarta.texto;
    let textoSegundaCartaComputador = computador.segundaCarta.texto;
    let somaDasCartasDoUsuario = usuario.primeiraCarta.valor + usuario.segundaCarta.valor;
    let somaDasCartasDoComputador = computador.primeiraCarta.valor + computador.segundaCarta.valor;

   console.log('Boas vindas ao jogo de Blackjack!')

   switch (confirm("Quer iniciar uma nova rodada?")) {
      case true:
         console.log(`${usuario.nome} - cartas: ${textoPrimeiraCartaUsuario} ${textoSegundaCartaUsuario} - ${somaDasCartasDoUsuario}`)
         console.log(`${computador.nome} - cartas: ${textoPrimeiraCartaComputador} ${textoSegundaCartaComputador} - ${somaDasCartasDoComputador}`)
            if (somaDasCartasDoUsuario <= limite && somaDasCartasDoComputador <= limite) {
               if (somaDasCartasDoUsuario > somaDasCartasDoComputador) {
                  console.log(`O ${usuario.nome.toLowerCase()} venceu!`)
               } else if (somaDasCartasDoUsuario === somaDasCartasDoComputador) {
                  console.log(`Deu empate!`)
               } else {
                  console.log(`O ${computador.nome.toLowerCase()} venceu!`)
               }
            } else {
               console.log(`O ${usuario.nome.toLowerCase()} venceu!`)
            }
         break;
      default:
         console.log('O jogo acabou!')
         break
   }