const professores = require("../data/professores.data");
const turmas = require("../data/turmas.data");

// Define função utilizada na rota
//req -> Request (requisição)
// res -> Response (Resposta)
const listar = (req, res) => {
    res.send(turmas).end();
};

const buscar = (req,res) =>{
    const id = req.params.id;

    var user = "";

    turmas.forEach((turma, index) =>{
        if(turma.id === id){
            user = turma;
        }
    });
    if(user === "") user = "Nao Encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) =>{
    const data= req.body;
    turmas.push(data);
    res.status(201).send("Cadastrado Com Sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    turmas.forEach((turma, index) => {
        if(turma.id === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        turmas.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) =>{
    const user = req.body;
    
var encontrei = false;

    turmas.forEach((turma, index) =>{
        if(turma.id === user.id){
            turmas[index] = user;
            encontrei = true;
        }
    });

    if(encontrei === false){
        res.status(404).end();
    }else{
        res.status(201).end();
    }
    
};

const alterar = (req, res) =>{
    const id = req.params.id;
    const userUpdate = req.body;
    
    var indice = -1;

    turmas.forEach((turma, index) =>{
        if(turma.id === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
    Object.keys(userUpdate).forEach((chave) =>{
        turmas[indice][chave] = userUpdate[chave];
    });
    res.status(200).end();
  }
};
module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    atualizar,
    alterar
};