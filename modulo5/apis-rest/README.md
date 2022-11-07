## Respostas

1- Exercício 1

a. Qual método HTTP você deve utilizar para isso?
r. GET

b. Como você indicaria a entidade que está sendo manipulada?
r. a entidade é o path, que nesse caso seria '/users'.

2- Exercício 2

a. Como você passou os parâmetros de type para a requisição? Por quê?
r. Através da query. E escolhi isso porque faz mais sentido usar um campo de busca para isso do que usar uma passagem de ID, já que trata-se de um tipo e não um identificador.

b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
r. Adicionei uma condição para evitar que qualquer outro valor que não seja 'normal' ou 'admin' seja aceito.

3- Exercício 3

a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
r. Name.

4- Exercício 4

a. Mude o método do endpoint para PUT. O que mudou?
r. Essencialmente, nada. O request funcionou como antes.

b. Você considera o método PUT apropriado para esta transação? Por quê?
r. Sim, já que estamos atualizando uma lista já existente com novos dados.
