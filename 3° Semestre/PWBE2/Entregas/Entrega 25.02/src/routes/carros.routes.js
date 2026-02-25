const express = require("express");

const router = express.Router();

const listarController = require("../controllers/carros.controller");

router.post("/cadastrar", listarController.novoCarro);

module.exports = router;
