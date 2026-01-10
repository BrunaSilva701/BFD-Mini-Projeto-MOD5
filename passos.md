### 1. Cria a pasta do projeto 

### 2. Inicializa o Node.js
````npm init -y````

### 3.Instalar dependencias
- Dependenciais principais: ```npm install express sequelize sqlite3```

- Dependenciais de desenvolvimento: ```npm install --save-dev sequelize-cli nodemon```

### 4.Configurar Sequelize CLI
```npx sequelize-cli init```

- Estrutura criada
```
/config
/models
/migrations
/seeders
```

### 5. Ajuste no banco sqlite (.config/config.json)
````
{
  "development": {
    "dialect": "sqlite",
    "storage": "./database.sqlite"
  }
}
````

### 6. Cria os models
- ESTRUTURA: ```npx sequelize-cli model:generate --name X --attributes campo:tipo,campo:tipo```

- Aluno: ```npx sequelize-cli model:generate --name Aluno --attributes nome:string,email:string```

  -> Nome e email obrigatorios

- Curso: ```npx sequelize-cli model:generate --name Curso --attributes nome:string,cargaHoraria:integer,modalidade:string```

- Matricula: ```npx sequelize-cli model:generate --name Matricula --attributes alunoId:integer,cursoId:integer,dataMatricula:date```

### 7. Configura os relacionamentos (N:N)
- models/aluno.js
```
Aluno.belongsToMany(models.Curso, {
  through: models.Matricula,
  foreignKey: 'alunoId'
});
```

- models/curso.js
````
Curso.belongsToMany(models.Aluno, {
  through: models.Matricula,
  foreignKey: 'cursoId'
});
````

### 8. Rodar as migrations (Isso cria todas as tabelas no SQLite.)
````npx sequelize-cli db:migrate````

- Saida
````
Using environment "development".
== 20251213180348-create-aluno: migrating =======
== 20251213180348-create-aluno: migrated (0.023s)

== 20251213180359-create-curso: migrating =======
== 20251213180359-create-curso: migrated (0.018s)

== 20251213180409-create-matricula: migrating =======
== 20251213180409-create-matricula: migrated (0.013s)
````

### 9. Cria o servidor express no server.js
```
const express = require('express');
const app = express();

app.use(express.json());

// rota teste
app.get('/', (req, res) => {
  res.send('API de Alunos e Cursos rodando');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:3000`);
});
```

### 10. Cria os controllers
````
.controllers/alunoContoller
.controllers/cursoContoller
.controllers/matriculaContoller
````

### 11. Cria as rotas
````
.routers/alunoRouter
.routers/cursoRouter
.routers/matriculaRouter
````

### 12. Inicia a aplicação
```node src/server.js```

### 13. Executa os testes na API
````
GET/
POST/
````

### Resumo
1. Node
2. Sequelize
3. Models
4. Migrations
5. Relacionamentos
6. Express
7. Controllers
8. Rotas
9. Testes
