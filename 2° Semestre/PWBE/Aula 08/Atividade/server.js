const express = require('express');
const cors = require('cors');

const adicionaisRoutes = require("./src/routes/adicionais.routes");
const pedidiosRoutes = require("./src/routes/pedidos.routes");
const clientesRoutes = require("./src/routes/clientes.routres");
const floresRoutes = require("./src/routes/flores.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(adicionaisRoutes);
app.use(pedidiosRoutes);
app.use(clientesRoutes);
app.use(floresRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});