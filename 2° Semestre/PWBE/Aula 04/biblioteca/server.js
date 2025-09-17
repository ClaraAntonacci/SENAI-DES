const express = require("express");//importa um modulo
const cors = require("cors");//ermite que páginas em outros domínios chamem sua API.

const UsuariosRoutes = require("./src/routes/usuarios.routes");//importa os arquivos de rotas
const LivrosRoutes = require("./src/routes/livros.routes");//importa os arquivos de rotas

const app = express();// Carrega config. inicial do express

app.use(cors());// Aplica CORS ao express
//registra o parser JSON — converte o corpo (body) de requisições JSON em req.body. Necessário para POST, PUT, PATCH com JSON.
app.use(express.json()); // Habilita a comunicação com JSON


app.use(UsuariosRoutes);//registra os roteadores importados.
app.use(LivrosRoutes);//registra os roteadores importados.

//Inicia a API na porta 3000
//inicia o servidor na porta 3000 e imprime uma mensagem quando está pronto.
app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});


