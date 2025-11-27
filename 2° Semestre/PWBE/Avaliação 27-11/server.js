require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const alunosRoutes = require('./src/routes/alunos.routes');
const equipamentosRoutes = require('./src/routes/equipamentos.routes');
const locacoesRoutes = require('./src/routes/locacoes.controllers');

app.use(express.json());
app.use(cors());

app.use(alunosRoutes);
app.use(equipamentosRoutes);
app.use(locacoesRoutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
});