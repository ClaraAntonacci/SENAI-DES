const express = require("express");

const {
    verificarCompra
} = require("../controllers/verificacao.controller");

const router = express.Router();

router.post("/", verificarCompra);

module.exports = router;