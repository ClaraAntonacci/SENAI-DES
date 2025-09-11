const express = require("express");
const router = express.Router();

const PossuiController = require("../controllers/possui.controller");

router.get("/possui", PossuiController.listar);
router.get("/possui/:id", PossuiController.buscar);
router.post("/possui", PossuiController.cadastrar);
router.delete("/possui/:id", PossuiController.apagar);
router.put("/possui", PossuiController.atualizar);
router.patch("/possui/:id", PossuiController.alterar);

module.exports = router;