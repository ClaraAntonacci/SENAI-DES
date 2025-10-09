const express = require("express");
const router = express.Router();

const locacoesController = require("../controllers/locacoes.controllers");

router.get("/locacoes", locacoesController.listarLocacao);
router.get("/locacoes/clientes/:idcliente", locacoesController.listarlocacoesIdcliente);
router.get("/locacoes/status/:status", locacoesController.listarlocacoesporstatus);
router.get("/locacoes/:id", locacoesController.buscarLocacoes);
router.post("/locacao", locacoesController.cadastrarLocacoes);
router.delete("/locacao/:id", locacoesController.excluirLocacoes);
router.put("/locacao", locacoesController.atualizarLocacao);
router.get("/locacoes/faturamento/total", locacoesController.totalFaturamento);
router.get("/locacao", locacoesController.faturamentoequantidadepormes);

module.exports = router;