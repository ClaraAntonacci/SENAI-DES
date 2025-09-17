const express = require('express');
const router = express.Router();

// importa o controller
const ReservasController = require('../controllers/reservas.controller');

// rotas no estilo do professor
router.get("/reservas", ReservasController.listar);           // GET /reservas/reservas
router.post("/reserva", ReservasController.cadastrar);        // POST /reservas/reserva
router.put("/reserva/:reservaid/checkout", ReservasController.atualizar); // PUT /reservas/reserva/:reservaid

module.exports = router;