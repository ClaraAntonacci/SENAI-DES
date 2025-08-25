const usuarios = require("../data/usuarios.data");

// Define função utilizada na rota
//req -> Request (requisição)
// res -> Response (Resposta)
const listar = (req, res) => {
    res.send(usuarios).end();
};

const buscar = (req,res) =>{
    const matricula = req.params.matricula;

    var user = "";

    usuarios.forEach((usuarios, index) =>{
        if(usuarios.matricula === matricula){
            user = usuarios;
        }
    });
    if(user === "") user = "Nao Encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) =>{
    const data= req.body;
    usuarios.push(data);
    res.status(201).send("Cadastrado Com Sucesso").end();
};

module.exports = {
    listar,
    buscar,
    cadastrar
};