const locacoesController = require('../controllers/locacoes.controllers');

const express = require('express');

const locacoesRoutes = express.Router();

locacoesRoutes.post('/register/l', locacoesController.cadastrarLocacao);
locacoesRoutes.get('/listar/l', locacoesController.listarLocacoes);
locacoesRoutes.put('/atualizar/locacoes/:id', locacoesController.atualizarLocacoes);
locacoesRoutes.delete('/delete/l/:id', locacoesController.excluirLocacao);
locacoesRoutes.get('/total/locacoes/categoria', locacoesController.TotallocacoesporCategoria);
locacoesRoutes.get('/total/locacoes/aluno', locacoesController.TotallocacoesporAluno);
locacoesRoutes.get('/total/locacoes/equipamento', locacoesController.TotallocacoesporEquipamento);


module.exports = locacoesRoutes;