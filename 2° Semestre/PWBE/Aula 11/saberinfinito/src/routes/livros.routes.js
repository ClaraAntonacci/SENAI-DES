const livrosController = require("../controllers/livros.controllers");

const express = require('express');
const validate = require('../middlewares/auth');


const livrosRoutes = express.Router();

livrosRoutes.post('/cadastrar', validate, livrosController.cadastrarLivro);
livrosRoutes.get('/listar', validate, livrosController.listarLivros);
livrosRoutes.get('/listar/livros/:id', validate, livrosController.buscarLivro);
livrosRoutes.put('/atualizar/livros/:id', validate, livrosController.atualizarLivro);
livrosRoutes.delete('/delete/livros/:id', validate, livrosController.excluirLivros);
livrosRoutes.get('/livros/:nome', validate, livrosController.livrosporleitor);
livrosRoutes.get('/livros', validate, livrosController.verificaLivro);


module.exports = livrosRoutes;