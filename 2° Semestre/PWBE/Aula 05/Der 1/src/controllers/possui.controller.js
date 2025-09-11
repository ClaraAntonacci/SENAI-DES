const possui = require("../data/possui.data");
const turmas = require("../data/turmas.data");
const disciplinas = require("../data/disciplinas.data");

const listar = (req, res) => {
    res.send(possui).end();
}

const buscar = (req, res) => {
    const id = req.params.id;
    var user = "";
    possui.forEach((possui, index) => {
        if (possui.id === id) {
            user = possui;
        }
    });
    if (user === "") user = "Nao Encontrado";
    res.send(user).end();
};

const cadastrar = (req, res) => {
    const cadastro = req.body;

    var turmaExiste = false;
    var disciplinaExiste = false;

    turmas.forEach((turma, index) => {
        if(turma.id === cadastro.turmaid){
            turmaExiste = true;
        }
    });

    disciplinas.forEach((disciplina, index) => {
        
    });

    const data = req.body;
    possui.push(data);
    res.status(201).send("Cadastrado Com Sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;
    var indice = -1;
    possui.forEach((possui, index) => {
        if (possui.id === id) {
            indice = index;
        }
    });
    if (indice === -1) {
        res.status(404).end();
    } else {
        possui.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const user = req.body;
    var encontrei = false;
    possui.forEach((possui, index) => {
        if (possui.id === user.id) {
            possui[index] = user;
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
    possui.forEach((possui, index) => {
        if (possui.id === id) {
            indice = index;
        }
    });
    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(userUpdate).forEach((chave) => {
            possui[indice][chave] = userUpdate[chave];
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