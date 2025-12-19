// Servidor Express
const express = require('express');
const app = express();

app.use(express.json());

// Rotas
const alunoRoutes = require('./routes/alunoRouter');
const cursoRoutes = require('./routes/cursoRouter');
const matriculaRoutes = require('./routes/matriculaRouter');

// Conexão das rotas
app.use('/aluno', alunoRoutes);
app.use('/curso', cursoRoutes);
app.use('/matricula', matriculaRoutes);

// rota teste 
app.get('/', (req, res) => {
  res.send('API rodando');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:3000`);
});
