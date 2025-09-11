const express = require("express");
const router = express.Router();

const ReservasControllers = require("../controllers/reservas.controller");

router.get("/reservas", ReservasControllers.listar);
router.post("/reservas", ReservasControllers.cadastrar);
router.put("/reservas/:id", ReservasControllers.atualizar);

module.exports = router;     