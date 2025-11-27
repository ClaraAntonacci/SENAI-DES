const alunosController = require('../controllers/alunos.controllers');

const express = require('express');

const alunosRoutes = express.Router();

alunosRoutes.post('/register', alunosController.cadastrarAluno);
alunosRoutes.get('/listar', alunosController.listarAluno);
alunosRoutes.put('/atualizar/:id', alunosController.atualizarAluno);
alunosRoutes.delete('/delete/:id', alunosController.excluirAluno);


module.exports = alunosRoutes;