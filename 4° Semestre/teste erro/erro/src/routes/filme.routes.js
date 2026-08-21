const express = require("express");

const {
    listarFilmes,
    buscarFilme,
    cadastrarFilme
} = require("../controllers/filme.controller");

const router = express.Router();

router.get("/listar", listarFilmes);

router.get("/buscar/:id", buscarFilme);

router.post("/cadastrar", cadastrarFilme);

module.exports = router;