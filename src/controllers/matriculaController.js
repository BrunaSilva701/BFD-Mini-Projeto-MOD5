const { Matricula } = require('../models');

module.exports = {

  // POST/matricula - Cria uma matrícula
  async store(req, res) {
    const { alunoId, cursoId } = req.body;

    const matricula = await Matricula.create({
      alunoId,
      cursoId,
      dataMatricula: new Date()
    });

    res.status(201).json(matricula);
  }

};
