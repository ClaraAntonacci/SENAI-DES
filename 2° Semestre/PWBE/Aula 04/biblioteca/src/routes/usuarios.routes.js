const express = require("express");
const router = express.Router();

const UsuariosController = require("../controllers/usuarios.controller");
// Define os metodos e rotas da aplicação
router.get("/usuarios", UsuariosController.listar);
router.get("/usuarios/:matricula", UsuariosController.buscar);
router.post("/usuario", UsuariosController.cadastrar);

module.exports = router;