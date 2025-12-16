const router = require('express').Router();
const cursoController = require('../controllers/cursoController');

// GET/cursos - Lista todos os cursos
router.get('/', cursoController.index);

// GET/cursos/:id - Detalha um curso específico
router.get('/:id', cursoController.show);

// POST/cursos - Cria um novo curso
router.post('/', cursoController.store);

// PUT /cursos/:id - Atualiza dados de um curso
router.put('/:id', cursoController.update);

// DELETE /cursos/:id - Remove um curso
router.delete('/:id', cursoController.destroy);

// GET/cursos/:id/alunos - Lista todos os alunos do curso
router.get('/:id/alunos', cursoController.alunos);

module.exports = router;
