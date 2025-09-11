const express = require("express");//importa um modulo
const cors = require("cors");

const ProfessoresRoutes = require("./src/routes/professores.routes");
const DisciplinasRoutes = require("./src/routes/disciplinas.routes");
const PossuiRoutes = require("./src/routes/possui.routes");
const TurmasRoutes = require("./src/routes/turmas.routes"); 

const app = express();// Carrega config. inicial do express

app.use(cors());// Aplica CORS ao express
app.use(express.json()); // Habilita a comunicação com JSON


app.use(ProfessoresRoutes);
app.use(DisciplinasRoutes);
app.use(PossuiRoutes);
app.use(TurmasRoutes);

//Inicia a API na porta 3000
app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});