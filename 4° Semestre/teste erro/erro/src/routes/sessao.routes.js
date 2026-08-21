const express = require("express");

const {
    listarSessoes,
    cadastrarSessao
} = require("../controllers/sessao.controller");

const router = express.Router();

router.get("/:filmeId", listarSessoes);

router.post("/cadastrar", cadastrarSessao);

module.exports = router;