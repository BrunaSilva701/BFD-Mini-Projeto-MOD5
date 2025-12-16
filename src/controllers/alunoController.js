const { Aluno, Curso } = require('../models');

module.exports = {

  // GET/aluno - Lista todos os alunos
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  // GET/alunos/:id - Detalha um aluno específico
  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
      }
      return res.json(aluno);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  // POST/alunos - Cria um novo aluno
  async store(req, res) {
    try {
      const { nome, email } = req.body;
      if (!nome || !email) {
        return res.status(400).json({ erro: 'nome e email são obrigatórios' });
      }
      const aluno = await Aluno.create({ nome, email });
      return res.status(201).json(aluno);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  // PUT /alunos/:id - Atualiza dados de um aluno
  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
      }
      await aluno.update(req.body);
      return res.json(aluno);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  // DELETE /alunos/:id - Remove um aluno
  async destroy(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
      }
      await aluno.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  // GET /alunos/:id/cursos - Lista todos os cursos do aluno
  async cursos(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id, {
        include: {
          model: Curso,
          through: { attributes: [] }
        }
      });

      if (!aluno) {
        return res.status(404).json({ erro: 'Aluno não encontrado' });
      }

      return res.json(aluno.Cursos);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

};
