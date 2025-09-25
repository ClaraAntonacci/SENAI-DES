const produtos = require("../data/produtos.data");


const listar = (req, res) => {
    res.send(produtos).end();
}

const buscar = (req, res) => {
    const id = req.params.id;
    var user = "";
    produtos.forEach((produtos, index) => {
        if (produtos.id === id) {
            user = produtos;
        }
    });
    if (user === "") user = "Nao Encontrado";
    res.send(user).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    produtos.push(data);
    res.status(201).send("Cadastrado Com Sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;
    var indice = -1;
    produtos.forEach((produtos, index) => {
        if (produtos.id === id) {
            indice = index;
        }
    });
    if (indice === -1) {
        res.status(404).end();
    } else {
        produtos.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const user = req.body;
    var encontrei = false;
    produtos.forEach((produtos, index) => {
        if (produtos.id === user.id) {
            produtos[index] = user;
            encontrei = true;
        }
    });
    if (encontrei === false) {
        res.status(404).end();
    } else {
        res.status(201).end();
    }
};

// const alterar = (req, res) => {
//     const id = req.params.id;
//     const userUpdate = req.body;
//     var indice = -1;
//     produtos.forEach((produtos, index) => {
//         if (produtos.id === id) {
//             indice = index;
//         }
//     });
//     if (indice === -1) {
//         res.status(404).end();
//     } else {
//         Object.keys(userUpdate).forEach((chave) => {
//             produtos[indice][chave] = userUpdate[chave];
//         });
//         res.status(200).end();
//     }
// };

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    atualizar
    // alterar
};