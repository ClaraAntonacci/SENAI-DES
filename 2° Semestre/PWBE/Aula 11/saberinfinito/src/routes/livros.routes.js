const livrosController = require("../controllers/livros.controllers");

const express = require('express');
// const validate = require('../middlewares/auth');


const livrosRoutes = express.Router();

livrosRoutes.post('/cadastrar', livrosController.cadastrarLivro);
livrosRoutes.get('/listar', livrosController.listarLivros);
livrosRoutes.get('/listar/livros/:id', livrosController.buscarLivro);
livrosRoutes.put('/atualizar/livros/:id', livrosController.atualizarLivro);
livrosRoutes.delete('/delete/livros/:id', livrosController.excluirLivros);
livrosRoutes.get('/livros/:nome', livrosController.livrosporleitor);
livrosRoutes.get('/livros', livrosController.verificaLivro);


module.exports = livrosRoutes;