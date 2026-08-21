require("dotenv").config();

const express = require("express");
const cors = require("cors");

const filmeRoutes = require("./src/routes/filme.routes");
const sessaoRoutes = require("./src/routes/sessao.routes");
const assentoRoutes = require("./src/routes/assento.routes");
const verificacaoRoutes = require("./src/routes/verificacao.routes");
const compraRoutes = require("./src/routes/compra.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/filmes", filmeRoutes);
app.use("/sessoes", sessaoRoutes);
app.use("/assentos", assentoRoutes);
app.use("/verificacao", verificacaoRoutes);
app.use("/compras", compraRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});