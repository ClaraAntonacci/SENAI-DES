const express = require("express");//importa um modulo
const cors = require("cors");

const UsuariosRoutes = require("./src/routes/usuarios.routes");

const app = express();// Carrega config. inicial do express

app.use(cors());// Aplica CORS ao express
app.use(express.json()); // Habilita a comunicação com JSON

app.use(UsuariosRoutes);

//Inicia a API na porta 3000
app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});


