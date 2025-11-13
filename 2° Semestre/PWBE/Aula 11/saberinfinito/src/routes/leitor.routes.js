const leitorController = require('../controllers/leitor.controllers');

const express = require('express');
const validate = require('../middlewares/auth');

const leitorRoutes = express.Router();

leitorRoutes.post('/login', leitorController.Login);
leitorRoutes.post('/register', leitorController.cadastrarLeitor);
leitorRoutes.get('/listar', validate, leitorController.listarLeitor);
leitorRoutes.get('/listar/:id', validate, leitorController.buscarLeitor);
leitorRoutes.put('/atualizar/leitor/:id', validate, leitorController.atualizarLeitor);
leitorRoutes.delete('/delete/:id', validate, leitorController.excluirLeitor);


module.exports = leitorRoutes;