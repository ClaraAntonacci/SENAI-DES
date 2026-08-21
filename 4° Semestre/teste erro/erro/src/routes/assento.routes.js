const express = require("express");

const {
    listarAssentos,
    cadastrarAssento
} = require("../controllers/assento.controller");

const router = express.Router();

router.get("/:sessaoId", listarAssentos);

router.post("/cadastrar", cadastrarAssento);

module.exports = router;