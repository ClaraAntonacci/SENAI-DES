const express = require("express");

const router = express.Router();

const { cadastrarProduto, listarProdutos, buscarProdutoPorId, atualizarProduto, excluirProduto} = require("../controllers/produtos.controller");

router.post("/cadastrar", cadastrarProduto);
router.get("/listar", listarProdutos);
router.get("/buscar/:id", buscarProdutoPorId);
router.put("/atualizar/:id", atualizarProduto);
router.delete("/excluir/:id", excluirProduto);

module.exports = router;
