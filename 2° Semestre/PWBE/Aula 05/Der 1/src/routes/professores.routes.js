const express = require("express");
const router = express.Router();

const ProfessoresController = require("../controllers/professores.controller");
// Define os metodos e rotas da aplicação
router.get("/professores", ProfessoresController.listar);
router.get("/professores/:id", ProfessoresController.buscar);
router.post("/professores", ProfessoresController.cadastrar);
router.delete("/professores/:id", ProfessoresController.apagar);
router.put("/professor", ProfessoresController.atualizar);
router.patch("/professor/:id", ProfessoresController.alterar);

module.exports = router;