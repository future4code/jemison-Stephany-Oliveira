## Relações SQL

### Exercício 1
**RESPOSTA A:** Uma chave estrangeira é um elo que podemos criar entre uma entidade e outra. Ele carrega esse termo porque esse elo referencia uma entidade diferente (estrangeira) a outra (local). Exemplo: podemos criar uma chave estrangeira na tabela Contas (local), para ligá-la a Clientes (estrageira). Porque essa chave pertence à Clientes, mas está dentro de Contas, ela é uma chave estrangeira.

**RESPOSTA B:** 
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating
VALUES (
        "001", "Engraçado demais. A dinâmica da Glória e do Tony é demais!", 3.8, "001"
        );
```

**RESPOSTA C:** O erro impede a criação do comentário, porque não há uma PRIMARY_KEY correspondente na entidade indicada.
```
INSERT INTO Rating
VALUES (
        "008", "Simplesmente o melhor filme que já vi. Nunca mais verei um filme de novo, para não estragar a experiência.", 5.0, "008"
        );

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416033-stephany-oliveira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
```

**RESPOSTA D:** Na minha tabela, eu tinha nomeado rate como score.
```
ALTER TABLE Movies DROP score;
```

**RESPOSTA E:** A ligação criada pela FOREIGN_KEY impede que o filme seja apagado, já que, caso isso aconteça, o registro na outra entidade ficaria sozinho (desconectado).

```
DELETE FROM Movies WHERE id = "001";

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416033-stephany-oliveira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
```

### Exercício 2

**RESPOSTA A:** A entidade MovieCast possui apenas dois campos: movie_id e actor_id. Ela servirá apenas para conectar os valores na entidade Movies e na entidade Actor, já que, quando temos a cardinalidade n:m, a relação precisa se tornar uma entidade própria, para que possamos relacioná-las.

**RESPOSTA B:**
```
INSERT INTO MovieCast VALUES ("001", "001");
```

**RESPOSTA C:** O erro impede a criação da relação entre filme e ator, porque não há uma PRIMARY_KEY correspondente na entidade indicada.
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416033-stephany-oliveira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

**RESPOSTA D:** A ligação criada pela FOREIGN_KEY impede que o ator seja apagado, já que, caso isso aconteça, o registro na outra entidade ficaria sozinho (desconectado).

```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416033-stephany-oliveira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

### Exercício 3

**RESPOSTA A:** O operador ON, em tradução literal, quer dizer EM. Se fizermos a leitura da query, podemos compreendê-la da seguinte forma: *Selecione TUDO da entidade Movies e na Rating, EM que Movies.id seja igual a Rating.movie_id.

**RESPOSTA B:**
```
SELECT Movies.name, Movies.id, Rating.rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```