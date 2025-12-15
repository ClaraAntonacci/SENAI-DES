const equipamentosController = require('../controllers/equipamentos.controllers');

const express = require('express');

const equipamentosRoutes = express.Router();

equipamentosRoutes.post('/register/e', equipamentosController.cadastrarEquipamento);
equipamentosRoutes.get('/listar/e', equipamentosController.listarEquipamento);
equipamentosRoutes.put('/atualizar/equipamentos/:id', equipamentosController.atualizarEquipamento);
equipamentosRoutes.delete('/delete/e/:id', equipamentosController.excluirEquipamento);


module.exports = equipamentosRoutes;