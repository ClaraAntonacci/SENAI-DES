
const express = require("express");
const router = express.Router();


const ClientesController = require("../controllers/clientes.controller");

router.get("/clientes", ClientesController.listar);
router.post("/cliente", ClientesController.cadastrar);
router.get("/clientes/:cpf", ClientesController.buscar);
// router.delete("/clientes/:cpf", ClientesController.apagar);
// router.put("/cliente", ClientesController.atualizar);
// router.patch("/cliente/:cpf", ClientesController.alterar);

module.exports = router;