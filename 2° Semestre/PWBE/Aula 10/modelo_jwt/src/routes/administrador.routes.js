const AdmController = require("../controllers/administrador.controllers");

const express = require('express');
const validate = require('../middlewares/auth');
const {validaAdm, validaMedicos, validaAtendente} = require('../middlewares/validaCargo');

const AdmRoutes = express.Router();

// AdmRoutes.post('/usuario',validate, validaAtendente, AdmController.cadastrarUsuario);
AdmRoutes.post('/usuario', AdmController.cadastrarUsuario);

AdmRoutes.post('/usuario/paciente/cadastrar', validate, validaAdm, AdmController.cadastrarPaciente);
// AdmRoutes.post('/usuario/paciente/cadastrar', AdmController.cadastrarPaciente);

AdmRoutes.post('/usuario/medico/cadastrar', validate, validaAdm, AdmController.cadastrarMedico);
// AdmRoutes.post('/usuario/medico/cadastrar', AdmController.cadastrarMedico);

AdmRoutes.post('/usuario/consultas/cadastrar', validate, validaAtendente, AdmController.cadastrarConsultas);
// AdmRoutes.post('/usuario/consultas/cadastrar', AdmController.cadastrarConsultas);

AdmRoutes.put('/usuario/consultas/atualizar/:id', validate, validaAdm, AdmController.AtualizarConsulta);
// AdmRoutes.put('/usuario/consultas/atualizar/:id', AdmController.AtualizarConsulta);

AdmRoutes.get('/usuario', validate, validaAdm,AdmController.listarRelatorios);
// AdmRoutes.get('/usuario', AdmController.listarRelatorios);

AdmRoutes.get('/usuario/medico/:medico_id', validate, validaMedicos,AdmController.listarPormedico);
// AdmRoutes.get('/usuario/medico/:medico_id', AdmController.listarPormedico);

AdmRoutes.get('/usuario/especialidade/:especialidade_id', validate, validaMedicos,AdmController.consultasPorespecialidade);
// AdmRoutes.get('/usuario/especialidade/:especialidade_id', AdmController.consultasPorespecialidade);

AdmRoutes.get('/usuario/paciente/:paciente_id', validate, validaMedicos,AdmController.verDadosPaciente);
// AdmRoutes.get('/usuario/paciente/:paciente_id', AdmController.verDadosPaciente);


module.exports = AdmRoutes;