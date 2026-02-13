const express = require("express");

const router = express.Router();

const listarController = require("../controllers/lista.controller");

router.get("/listar", listarController.listarClientes);
router.post("/cliente", listarController.cadastrarCliente);

module.exports = router;
