// Exercícios de interpretação de código

/* Enunciado 1:
a)

Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horário: "14h"}

Enunciado 2:

a)
{nome: "Juca", idade: 3, raca: "SRD"}
{nome: "Juba", idade: 3, raca: "SRD"}
{nome: "Jubo", idade: 3, raca: "SRD"}

b) A sintaxe ... representa o spread, que é a cópia de um objeto pré-definido para dentro de outro objeto

Enunciado 3:
a)

false
undefined

b) A função molda o retorno para se encaixar na notação de colchetes, por isso, é dado apenas o valor de backender. A propriedade "altura" não foi definida, portanto, nenhum valor pode ser mostrado
*/

// Exercícios de escrita de código

// Enunciado 1:

// a)

// let pessoa = {
//     nome: "Julio Cesar",
//     apelidos: ['JC', 'Julio Cesar', 'Chefinho']
// }

// const apresentaPessoa = () => {
//     return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`
// }

// console.log(apresentaPessoa())

// b)
// pessoa = {
//     ...pessoa,
//     apelidos: ['Julinho', 'Cesar', 'Melhor Analista']
// }

// console.log(apresentaPessoa())

// Enunciado 2

// a)

// const funcionarioManha = {
//     nome: "Guilherme",
//     idade: 21,
//     profissao: "Pessoa instrutora sênior"
// }

// const funcionarioTarde = {
//     nome: "Biatriz",
//     idade: 27,
//     profissao: "Pessoa instrutora júnior"
// }

// b)

// const montaArrayFuncionarios = (primeiraVar, segundaVar) => {
//     array = [primeiraVar.nome, segundaVar.nome, primeiraVar.nome.length, segundaVar.nome.length, primeiraVar.idade, segundaVar.idade, primeiraVar.profissao, segundaVar.profissao, primeiraVar.profissao.length, segundaVar.profissao.length];
//     return array    
// }

// console.log(montaArrayFuncionarios(funcionarioManha, funcionarioTarde));

// Enunciado 3:

// a)

// const carrinho = [];

// // b)

// let primeiraFruta = {
//     nome: "Mexerica",
//     disponibilidade: true,
// }

// let segundaFruta = {
//     ...primeiraFruta,
//     nome: "Banana"
// }

// let terceiraFruta = {
//     ...primeiraFruta,
//     nome: "Melancia"
// }

// // c)

// const compra = (itemDoCarrinho) => {
//     carrinho.push(itemDoCarrinho)
//     return carrinho
// }

// compra(primeiraFruta);
// compra(segundaFruta);
// compra(terceiraFruta);

// d)

// console.log(carrinho);

// Desafios:

// 1

// const guardaDadosUsuario = () => {
//     let nome = prompt('Qual é o seu nome?');
//     let idade = Number(prompt('Qual é a sua idade?'));
//     let profissao = prompt('Qual é a sua profissão?');

//     let objetoDadosUsuario = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao
//     }
//     console.log(objetoDadosUsuario)
//     console.log(typeof objetoDadosUsuario)
//     return objetoDadosUsuario
// }

// guardaDadosUsuario()

// 2

// const primeiroFilme = {
//     nome: "A Chegada",
//     anoLancamento: 2016
// }

// const segundoFilme = {
//     nome: "As Patricinhas de Beverly Hills",
//     anoLancamento: 1995
// }

// const comparaFilmes = (parametro1, parametro2) => {
//     maisAntigo = parametro1 < parametro2;
//     mesmoAno = parametro1 === parametro2;
//     console.log(`O primeiro filme foi lançado antes do segundo? ${maisAntigo}`);
//     console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`)
// }

// comparaFilmes(primeiroFilme, segundoFilme)

// 3

// const carrinho = [];

// let primeiraFruta = {
//     nome: "Mexerica",
//     disponibilidade: true,
// }

// let segundaFruta = {
//     ...primeiraFruta,
//     nome: "Banana"
// }

// let terceiraFruta = {
//     ...primeiraFruta,
//     nome: "Melancia"
// }

// const compra = (itemDoCarrinho) => {
//     carrinho.push(itemDoCarrinho)
//     return carrinho
// }

// compra(primeiraFruta);
// compra(segundaFruta);
// compra(terceiraFruta);

// const controleEstoque = (itemVendido) => {
//     return itemVendido.disponibilidade = !itemVendido.disponibilidade
// }

// controleEstoque(primeiraFruta)

// console.log(primeiraFruta)
