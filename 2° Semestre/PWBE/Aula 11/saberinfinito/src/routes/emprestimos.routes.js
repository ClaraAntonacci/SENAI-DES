const emprestimoController = require("../controllers/emprestimos.controllers");

const express = require('express');
// const validate = require('../middlewares/auth');


const emprestimoRoutes = express.Router();

emprestimoRoutes.post('/cad', emprestimoController.cadastraremprestimo);
emprestimoRoutes.get('/listar/emprestimos/e', emprestimoController.listarEmprestimos);
emprestimoRoutes.get('/listar/emprestimos/:id', emprestimoController.buscarEmprestimos);
emprestimoRoutes.put('/atualizar/:id', emprestimoController.atualizarEmprestimo);
emprestimoRoutes.delete('/delete/:id', emprestimoController.excluirEmprestimos);
emprestimoRoutes.get('/historico', emprestimoController.historico);
emprestimoRoutes.get('/conta', emprestimoController.conta);

module.exports = emprestimoRoutes;