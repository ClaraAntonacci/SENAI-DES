const express = require("express");//importa um modulo
const cors = require("cors");//ermite que páginas em outros domínios chamem sua API.

const reservasRoutes = require("./src/routes/reservas.routes");//importa os arquivos de rotas

const app = express();

app.use(cors());
app.use(express.json());
// prefixo para todas as rotas de reservas
app.use(reservasRoutes);
// inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});
//teste
// rota de teste simples
app.get('/', (req, res) => {
    res.send("Servidor funcionando").end();
});