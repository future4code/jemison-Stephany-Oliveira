# Aprofundamento SQL

Folha de respostas do exercício de aprofundamento SQL.

### Exercício 1

- **Resposta A**:
> `ALTER TABLE Actor DROP COLUMN salary;`
`ALTER TABLE` é o comando usado para indicar que mudanças na entidade X serão definidas a seguir. O nome da Entidade vem logo em seguida. Depois, a mudança é definida. Nesse caso, `DROP COLUMN` remove a coluna salary da tabela.

- **RESPOSTA B**:
> `ALTER TABLE Actor CHANGE gender sex VARCHAR(6);`
O comando `CHANGE` iniciará a alteração do nome da coluna de `gender` para `sex` e vai configurar um limite de caracteres para 6 com `VARCHAR(6)`.

- **RESPOSTA C**:
> `ALTER TABLE Actor CHANGE gender gender VARCHAR(255);`
Aqui, o comando vai manter o nome como `gender`, por isso a repetição, mas vai aumentar o limite de caracteres com `VARCHAR(255)`

- **RESPOSTA D**:
> `ALTER TABLE Actor MODIFY gender VARCHAR(100);`

### Exercício 2

- **RESPOSTA A**:
 > `UPDATE Actor SET name = "Paola Oliveira", birth_date = "1982-04-14" WHERE id = "003"`

- **RESPOSTA B**:
Para transformar o nome em maiúsculas:
> `UPDATE Actor SET name = UPPER(name) WHERE id = "005";`

Para voltar ao estado anterior:
> `UPDATE Actor SET name = "Juliana Paes" WHERE id = "005"`

- **RESPOSTA C**:
> `UPDATE Actor SET name = "Taís Araújo", salary = 1500000, birth_date = "1978-11-25", gender = "female" WHERE id = "005";`

- **RESPOSTA D**:
Query:
> `UPDATE Actor SET name = "Taís Araújo", salary = 1500000, birth_date = "1978-11-25", gender = "female" WHERE id = "115";`

Response:
    0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Explicação:
Como o id não existe, nenhuma linha pôde ser afetada pela modificação em `UPDATE`.

### Exercício 3

- **RESPOSTA A**:
> `DELETE FROM Actor WHERE name = "Fernanda Montenegro";`

- **RESPOSTA B**:
> `DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;`

### Exercício 4

- **RESPOSTA A**:
> `SELECT MAX(salary) FROM Actor;`

- **RESPOSTA B**: 
> `SELECT MIN(salary) FROM Actor WHERE gender = "female";`

- **RESPOSTA C**:
> `SELECT COUNT(*) FROM Actor WHERE gender = "female";`

- **RESPOSTA D**:
> `SELECT SUM(salary) FROM Actor`