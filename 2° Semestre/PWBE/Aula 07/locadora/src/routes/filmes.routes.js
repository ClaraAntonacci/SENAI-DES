const express = require("express");
const router = express.Router();

const filmesController = require("../controllers/filmes.controllers");

router.get("/filmes", filmesController.listarFilmes);
router.get("/filmes/:id", filmesController.buscarFilmes);
router.post("/filme", filmesController.cadastrarFilmes);
router.delete("/filme/:id", filmesController.excluirFilmes);
router.put("/filme", filmesController.atualizarFilme);

module.exports = router;