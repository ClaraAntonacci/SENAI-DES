const exprss = require("express");

const router = exprss.Router();

const listarController = require("../controllers/clientes.controller");

router.post("/cadastrar", listarController.novoCliente);
router.get("/listar", listarController.listarClientes);
router.get("/buscar/:id", listarController.buscarClientes);
router.put("/atualizar/:id", listarController.atualizarCliente);
router.delete("/apagar/:id", listarController.apagarCliente);

module.exports = router;