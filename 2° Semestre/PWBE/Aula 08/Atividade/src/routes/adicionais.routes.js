const express = require("express");
const router = express.Router();

const adicionaisController = require("../controllers/adicionais.controllers");

router.get("/adicionais/:id", adicionaisController.buscarAdicionais);
router.put("/adicionais", adicionaisController.atualizarAdicionais);
router.get("/adicional", adicionaisController.QuantosADicionais);

module.exports = router;