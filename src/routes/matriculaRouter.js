const router = require('express').Router();
const matriculaController = require('../controllers/matriculaController');

// POST/matricula - Cria uma matrícula
router.post('/', matriculaController.store);

module.exports = router;
