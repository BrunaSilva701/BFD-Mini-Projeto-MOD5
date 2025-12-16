const { Curso, Aluno } = require('../models');

module.exports = {

  // GET/cursos - Lista todos os cursos
  async index(req, res) {
    const cursos = await Curso.findAll();
    res.json(cursos);
  },

  // GET/cursos/:id - Detalha um curso específico
  async show(req, res) {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) return res.status(404).json({ erro: 'Curso não encontrado' });
    res.json(curso);
  },

  // POST/cursos - Cria um novo curso
  async store(req, res) {
    const curso = await Curso.create(req.body);
    res.status(201).json(curso);
  },

  // PUT/cursos/:id - Atualiza dados de um curso
  async update(req, res) {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) return res.status(404).json({ erro: 'Curso não encontrado' });
    await curso.update(req.body);
    res.json(curso);
  },

  // DELETE/cursos/:id Remove um curso
  async destroy(req, res) {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) return res.status(404).json({ erro: 'Curso não encontrado' });
    await curso.destroy();
    res.status(204).send();
  },

  // GET/cursos/:id/alunos - Lista todos os alunos do curso
  async alunos(req, res) {
    const curso = await Curso.findByPk(req.params.id, {
      include: {
        model: Aluno,
        through: { attributes: [] }
      }
    });

    if (!curso) return res.status(404).json({ erro: 'Curso não encontrado' });

    res.json(curso.Alunos);
  }

};
