const express = require("express");
const router = express.Router();

const pedidosController = require("../controllers/pedidos.controllers");

router.get("/pedidos", pedidosController.listarpedidos);
router.delete("/pedidos/:id", pedidosController.excluirpedidos);
router.put("/pedido", pedidosController.atualizarpedido);


module.exports = router;