# Banco de Dados e Introdução a SQL
> MD criado para entregar os exercícios da aula.
### Exercício 1:

 - **Resposta A**
	`CREATE TABLE` Actor => declaração a intenção de criar uma entidade de nome Actor.
	`id` => nome da primeira coluna de Actor
    `VARCHAR(255)` => Tipo de String que aceita até um valor X de caracteres (nesse caso, 255)
    `PRIMARY KEY` => nomenclatura para indicar a chave principal da entidade
    `name` => nome da segunda coluna de Actor
    `NOT NULL` => indica a obrigatoriedade de o campo não estar vazio.
    `salary` = nome da terceira coluna de Actor
    `birth_date` => nome da quarta coluna de Actor
    `DATE` => tipo de dados que fornecerá a formatação de data yyyy-mm-dd
    `gender` => nome da quinta coluna de Actor
 
 - **Resposta B**
	`SHOW DATABASES` => mostra, como um `SELECT`, todas as DATABASES presentes para aquele usuário.
    `SHOW TABLES` => mostra todas as entidades criadas dentro da DATABASE em uso naquele momento.
 
 - **Resposta C** `DESCRIBE` funciona como um `SELECT`, mas para revelar a estrutura da entidade, ao invés de seus valores. No caso de `Actor`, ele apontou os diferentes tipos de cada dado, assim como o status de obrigatoriedade na coluna `NULL`. Revelou também que nenhuma das colunas tem informações padrão, caso sejam deixadas em branco.


### Exercício 2

- **Resposta A**
>     INSERT INTO Actor (id, name, salary, birth_date, gender)
>     VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");

- **Resposta B** `Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'`
   O erro indica que estou fornecendo uma entrada duplicada para a key PRIMARY. Isso ocorre porque as chaves primárias são usadas para diferenciar os registros, por isso elas não podem se repetir.

- **Resposta C** `Error Code: 1136. Column count doesn't match value count at row 1`
    O erro indica que a quantidade de colunas não bate com a quantidade de valores fornecidos na inserção do registro.
    Query funcional:
>     INSERT INTO Actor (id, name, salary, birth_date, gender)
>     VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");

- **Resposta D** `Error Code: 1364. Field 'name' doesn't have a default value`
    O erro indica que o campo 'name' não possui um valor padrão para preencher caso nada seja fornecido, como ocorreu na passagem da query quebrada.
    Query funcional:
>     INSERT INTO Actor (id, name, salary, birth_date, gender)
>         VALUES("004", "Antonio Bandeiras", 400000, "1949-04-18", "male");

- **Resposta E** `Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1`
    O erro indica que o valor '1950' está incorreto para o tipo da coluna 'birth_date'. Isso ocorre porque ele não foi passado como uma string, como o tipo exige.
	Query funcional:
>     INSERT INTO Actor (id, name, salary, birth_date, gender)
>         VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

### Exercício 3

- **Resposta A** `SELECT * from Actor WHERE gender = "female";`

- **Resposta B** `SELECT salary from Actor WHERE name = "Tony Ramos";`

- **Resposta C** `SELECT * from Actor WHERE gender = "invalid";`
    Resultado: nenhum valor foi trazido, mas a entidade vazia foi mostrada no Workbench. Isso ocorreu porque nenhum registro se encaixou na condição colocada.

- **Resposta D** `SELECT id, name, salary from Actor WHERE salary <= 500000;`

- **Resposta E** `Error Code: 1054. Unknown column 'nome' in 'field list'`
    O erro indica que não há nenhuma columa nomeada 'nome'. Isso ocorre porque nomeamos o campo em inglês e quando buscamos em português, a busca não pode ser completada.

### Exercício 4

- **Resposta A** `SELECT * FROM Actor WHERE name LIKE "A%" OR name LIKE "J%" AND salary > 300000;`
    A query acima captura todos os valores disponíveis em Actor para os registros que atendam as seguintes condições: seu nome começa com A ou com J e seu salário é maior que 300000.

- **Resposta B** `SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;`

- **Resposta C** `SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";`

- **Resposta D** `SELECT * FROM Actor WHERE name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%" and salary BETWEEN 350000 AND 900000;`

### Exercício 5

- **Resposta A** 
    > CREATE TABLE Movies ( id VARCHAR(20) PRIMARY KEY, name VARCHAR(255)
    > NOT NULL, summary TEXT NOT NULL, release_date DATE NOT NULL, score INT
    > DEFAULT 0);

- **Resposta B** 
>     INSERT INTO Movies (id, name, summary, release_date, score)
>     VALUES ("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.", "2006-01-06", 7);

- **Resposta C**
>     INSERT INTO Movies (id, name, summary, release_date, score)
>     VALUES ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.", "2012-12-27", 10);

- **Resposta D**
>     INSERT INTO Movies (id, name, summary, release_date, score)
>     VALUES ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);

- **Resposta E** 
>     INSERT INTO Movies (id, name, summary, release_date, score)
>     VALUES ("004", "O Auto da Compadecida", "A aventura segue dois miseráveis (João Grilo e Chicó) conforme eles conseguem um emprego, bolam um esquema para Chicó se casar com uma garota e enfrentam cangaceiros.", "2000-09-10", 9);

### Exercício 6

- **Resposta A** `SELECT id, name, score FROM Movies WHERE id = "002";`

- **Resposta B** `SELECT * FROM Movies WHERE name = "Se Eu Fosse Você";`

- **Resposta C** `SELECT id, name, summary FROM Movies WHERE score >= 7;`


### Exercício 7

- **Resposta A** `SELECT * FROM Movies WHERE name LIKE "%vida%";`

- **Resposta B** `SELECT * FROM Movies WHERE name LIKE "%casados%" OR summary LIKE "%casados%";`

- **Resposta C** `SELECT * FROM Movies WHERE release_date < "2022-11-08";`

- **Resposta D** `SELECT * FROM Movies WHERE release_date < "2022-11-08" AND name LIKE "%casados%" OR summary LIKE "%casados%" AND score >= 7;`