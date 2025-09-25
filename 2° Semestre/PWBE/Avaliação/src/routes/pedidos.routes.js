const express = require("express");
const router = express.Router();

const PedidosController = require("../controllers/pedidos.controller");

router.get("/pedidos", PedidosController.listar);
router.get("/pedidos/:id", PedidosController.buscar);
router.post("/pedidos", PedidosController.cadastrar);
router.patch("/pedido/:id", PedidosController.atualizar);

module.exports = router;