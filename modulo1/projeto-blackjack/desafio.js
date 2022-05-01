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

   let limite = 21;

   let computador = {
      nome: "Computador",
      maoComputador: [comprarCarta(), comprarCarta()]
   }
   let usuario = {
      ...computador,
      nome: "Usuário",
      maoUsuario: [comprarCarta(), comprarCarta()]
   }

   let tamanhoArray = computador.maoComputador.length - 1;
   let somaMaoUsuario = usuario.maoUsuario[0].valor + usuario.maoUsuario[1].valor;


switch (confirm('Bem-vinde ao jogo de Blackjack! \nQuer iniciar uma nova rodada?')) {
   case true:
      if (somaMaoUsuario < limite && confirm(`Suas cartas são ${usuario.maoUsuario[0].texto}${usuario.maoUsuario[1].texto}. A carta revelada do computador é ${computador.maoComputador[0].texto}.\nDeseja comprar mais uma carta?`)) {
         usuario.maoUsuario.push(comprarCarta())
         if (usuario.maoUsuario[0].valor + usuario.maoUsuario[1].valor + usuario.maoUsuario[2].valor < limite && confirm(`Suas cartas são ${usuario.maoUsuario[0].texto}${usuario.maoUsuario[1].texto}${usuario.maoUsuario[2].texto}. A carta revelada do computador é ${computador.maoComputador[0].texto}.\nDeseja comprar mais uma carta?`)) {
            usuario.maoUsuario.push(comprarCarta())
         }
      } else {
         while (computador.maoComputador.reduce <= limite) {
            computador.maoComputador.push(comprarCarta())
         }
         alert(`${usuario.nome} - ${usuario.maoUsuario[0].texto} ${usuario.maoUsuario[1].texto} - Pontuação: ${somaMaoUsuario}\n${computador.nome} - Cartas: ${computador.maoComputador[0].texto}${computador.maoComputador[1].texto}${computador.maoComputador[2].texto} - Pontuação:${computador.maoComputador[0].valor + computador.maoComputador[1].valor + computador.maoComputador[2].valor}`)
      }
      break;
   default:
      console.log('O jogo acabou! :(')
      break;
}
