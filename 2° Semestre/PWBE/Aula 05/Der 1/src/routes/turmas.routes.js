const express = require("express");
const router = express.Router();

const TurmasController = require("../controllers/turmas.controller");
// Define os metodos e rotas da aplicação
router.get("/turmas", TurmasController.listar);
router.get("/turmas/:id", TurmasController.buscar);
router.post("/turma", TurmasController.cadastrar);
router.delete("/turmas/:id", TurmasController.apagar);
router.put("/turma", TurmasController.atualizar);
router.patch("/turmas/:id", TurmasController.alterar);

module.exports = router;