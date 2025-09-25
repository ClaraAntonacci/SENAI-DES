const express = require("express");
const router = express.Router();

const ProdutosController = require("../controllers/produtos.controller");

router.get("/produtos", ProdutosController.listar);
router.get("/produtos/:id",ProdutosController.buscar);
router.post("/produto", ProdutosController.cadastrar);
router.delete("/produtos/:id", ProdutosController .apagar);
router.put("/produto", ProdutosController.atualizar);
// router.patch("/produto/:id",ProdutosController.alterar);

module.exports = router;