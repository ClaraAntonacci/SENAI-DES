const disciplinas = require("../data/disciplinas.data");
const professores = require("../data/professores.data");

const listar = (req, res) => {
    res.send(disciplinas).end();
}

const buscar = (req, res) => {
    const id = req.params.id;
    
    var user = "";

    disciplinas.forEach((disciplinas, index) => {
        if (disciplinas.id === id) {
            user = disciplinas;
        }
    });
    if (user === "") user = "Nao Encontrado";
    res.send(user).end();
};
const cadastrar = (req, res) => {
    const data = req.body;

    var profExiste = false;

    professores.forEach((professores, index) => {
        if(professores.id === data.professor_id){
            profExiste = true;
        }
    });
}

const apagar = (req, res) => {
    const id = req.params.id;
    var indice = -1;
    disciplinas.forEach((disciplinas, index) => {
        if (disciplinas.id === id) {
            indice = index;
        }
    });
    if (indice === -1) {
        res.status(404).end();
    } else {
        disciplinas.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const user = req.body;
    var encontrei = false;
    disciplinas.forEach((disciplinas, index) => {
        if (disciplinas.id === user.id) {
            disciplinas[index] = user;
            encontrei = true;
        }
    });
    if (encontrei === false) {
        res.status(404).end();
    } else {
        res.status(201).end();
    }
};

const alterar = (req, res) => {
    const id = req.params.id;
    const userUpdate = req.body;
    var indice = -1;
    disciplinas.forEach((disciplinas, index) => {
        if (disciplinas.id === id) {
            indice = index;
        }
    });
    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(userUpdate).forEach((chave) => {
            disciplinas[indice][chave] = userUpdate[chave];
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