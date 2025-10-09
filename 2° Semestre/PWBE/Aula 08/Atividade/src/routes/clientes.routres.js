const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/clientes.controllers");

router.get("/clientes", clientesController.contarClientes);
router.post("/cliente", clientesController.cadastrarClientes);
router.put("/cliente", clientesController.atualizarCliente);


module.exports = router;