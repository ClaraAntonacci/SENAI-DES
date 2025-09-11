const professores = require("../data/professores.data");

// Define função utilizada na rota
//req -> Request (requisição)
// res -> Response (Resposta)
const listar = (req, res) => {
    res.send(professores).end();
};

const buscar = (req,res) =>{
    const id = req.params.id;

    var user = "";

    professores.forEach((professor, index) =>{
        if(professor.id === id){
            user = professores;
        }
    });
    if(user === "") user = "Nao Encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) =>{
    const data= req.body;
    professores.push(data);
    res.status(201).send("Cadastrado Com Sucesso").end();
};

const apagar = (req, res) => {
    const id= req.params.id;

    var indice = -1;

    professores.forEach((professor, index) => {
        if(professor.id === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        professores.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) =>{
    const user = req.body;
    
var encontrei = false;

    professores.forEach((professor, index) =>{
        if(professor.id === user.id){
            professores[index] = user;
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

    professores.forEach((professor, index) =>{
        if(professor.id === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
    Object.keys(userUpdate).forEach((chave) =>{
        professores[indice][chave] = userUpdate[chave];
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