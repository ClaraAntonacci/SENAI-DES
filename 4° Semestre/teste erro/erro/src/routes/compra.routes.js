const express = require("express");

const {
    realizarCompra,
    listarCompras
} = require("../controllers/compra.controller");

const router = express.Router();

router.post("/comprar", realizarCompra);

router.get("/listar", listarCompras);

module.exports = router;