require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const leitorRoutes = require('./src/routes/leitor.routes');
const livrosRoutes = require('./src/routes/livros.routes');
const emprestimoRoutes = require("./src/routes/emprestimos.routes");

app.use(express.json());
app.use(cors());

app.use(leitorRoutes);
app.use(emprestimoRoutes);
app.use(livrosRoutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
})