const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// GET/aluno - Lista todos os alunos
router.get('/', alunoController.index);

// GET/alunos/:id - Detalha um aluno específico
router.get('/:id', alunoController.show);

// POST/alunos - Cria um novo aluno
router.post('/', alunoController.store);

// PUT /alunos/:id - Atualiza dados de um aluno
router.put('/:id', alunoController.update);

// DELETE /alunos/:id - Remove um aluno
router.delete('/:id', alunoController.destroy);

// GET /alunos/:id/cursos - Lista todos os cursos do aluno
router.get('/:id/cursos', alunoController.cursos);

module.exports = router;
