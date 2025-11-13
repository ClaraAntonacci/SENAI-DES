const emprestimoController = require("../controllers/emprestimos.controllers");

const express = require('express');
const validate = require("../middlewares/auth");
// const validate = require('../middlewares/auth');


const emprestimoRoutes = express.Router();

emprestimoRoutes.post('/cad',validate, emprestimoController.cadastraremprestimo);
emprestimoRoutes.get('/listar/emprestimos/e', validate, emprestimoController.listarEmprestimos);
emprestimoRoutes.get('/listar/emprestimos/:id',validate, emprestimoController.buscarEmprestimos);
emprestimoRoutes.put('/atualizar/:id', validate, emprestimoController.atualizarEmprestimo);
emprestimoRoutes.delete('/delete/:id', validate, emprestimoController.excluirEmprestimos);
emprestimoRoutes.get('/historico/:id',validate, emprestimoController.historico);
emprestimoRoutes.get('/conta', validate,emprestimoController.conta);

module.exports = emprestimoRoutes;