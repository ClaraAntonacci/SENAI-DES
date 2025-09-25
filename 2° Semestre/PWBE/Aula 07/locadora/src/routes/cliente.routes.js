const express = require('express');
const router = express.Router();

const clientesController = require("../controllers/cliente.controllers");

router.get("/clientes", clientesController.listarClientes);
router.get("/cliente/:id", clientesController.buscarCliente);
router.post("/cliente", clientesController.cadastrarCliente);

module.exports = router;
