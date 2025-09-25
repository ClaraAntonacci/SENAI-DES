const pedidos = require("../data/pedidos.data");

const listar = (req, res) => {
    res.send(pedidos).end();
};

const buscar = (req, res) => {
    const id = req.params.id;
    let pedido = "";
    pedidos.forEach((pedidos, index) => {
        if (pedidos.id == id) { 
            pedido = pedidos;
        }
    });
    if (pedido === "") pedido = "Não encontrado";
    res.send(pedido).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    
    if (data.quantidade <= 0) {
        res.status(400).send("Dados inválidos").end();
        return;
    }
    pedidos.push(data);
    res.status(201).send("Pedido cadastrado com sucesso").end();
};

const atualizar = (req, res) => {
    const id = req.params.id;
    const novoStatus = req.body.status;
    let encontrei = false;
    pedidos.forEach((pedido, index) => {
        if (pedido.id == id) {
            pedidos[index].status = novoStatus;
            encontrei = true;
        }
    });
    if (!encontrei) {
        res.status(404).send("Pedido não encontrado").end();
    } else {
        res.status(200).send("Status atualizado").end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    atualizar
};