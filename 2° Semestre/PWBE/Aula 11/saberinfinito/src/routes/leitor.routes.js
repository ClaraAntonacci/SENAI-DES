const leitorController = require('../controllers/leitor.controllers');

const express = require('express');

const leitorRoutes = express.Router();

leitorRoutes.post('/login', leitorController.Login);
leitorRoutes.post('/register', leitorController.cadastrarLeitor);
leitorRoutes.get('/listar', leitorController.listarLeitor);
leitorRoutes.get('/listar/:id', leitorController.buscarLeitor);
leitorRoutes.put('/atualizar/:id', leitorController.atualizarLeitor);
leitorRoutes.delete('/delete/:id', leitorController.excluirLeitor);


module.exports = leitorRoutes;