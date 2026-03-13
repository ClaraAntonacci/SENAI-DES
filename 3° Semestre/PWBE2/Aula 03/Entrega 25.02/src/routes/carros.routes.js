const express = require("express");

const router = express.Router();

const listarController = require("../controllers/carros.controller");

router.post("/carro/cadastrar", listarController.novoCarro);
router.get("/carros/listar", listarController.listarCarros);
router.get("/carros/buscar/:id", listarController.buscarCarros);
router.put("/carros/atualizar/:id", listarController.atualizarCarro);
router.delete("/carros/apagar/:id", listarController.apagarCarro);


module.exports = router;
