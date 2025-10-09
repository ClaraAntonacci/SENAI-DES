const express = require("express");
const router = express.Router();

const floresController = require("../controllers/flores.controllers");

router.get("/flores", floresController.buscarFlor1);
router.post("/flor", floresController.cadastrarFlor);
router.put("/flores", floresController.atualizarCliente);

module.exports = router;
