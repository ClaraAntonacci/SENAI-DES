//cria um router modular do Express para agrupar rotas relacionadas.
const express = require("express");
const router = express.Router();

//importa o controller (arquivo com a lógica das operações).
const UsuariosController = require("../controllers/usuarios.controller");
// Define os metodos e rotas da aplicação
router.get("/usuarios", UsuariosController.listar);// vocer usa UsuariosController.listar pq com o usuariosController vc tem acesso a todas as funções do controller e o listar vc chama a função listar que está dentro do controller.
////o mesmo se repete para todas as rotas.
router.post("/usuario", UsuariosController.cadastrar);
router.get("/usuarios/:matricula", UsuariosController.buscar);
router.delete("/usuarios/:matricula", UsuariosController.apagar);
router.put("/usuario", UsuariosController.atualizar);
router.patch("/usuario/:matricula", UsuariosController.alterar);

module.exports = router;