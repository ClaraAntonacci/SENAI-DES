const db = require("../data/connection");

const listarClientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM clientes;");
    res.json(lista[0]).end();//so mostra aprimeira posição do vetor so as informações sem o buffer por causa do [0]
}
const buscarCliente = async (req, res) => {
    const idCliente = req.params.id;
    const cliente = await db.query("SELECT * FROM clientes WHERE id = " + idCliente);
    res.json(cliente[0][0]).end();//o mesmo acontece aqui so que tirando os couxetes

    //res.json(cliente[0][0]).end();  -> 1° [0] pq o mysql retorna um array dentro de outro array, 2° [0] pq é a primeira posição do array que é o cliente que queremos
}
const cadastrarCliente = async (req, res) => {
    const {id, nome, email} = req.body;
    
    const novoCliente = await db.query("INSERT INTO clientes VALUES (?, ?, ?)", [id, nome, email]);

    const cliente ={
        id: novoCliente[0].insertId,
        nome: nome
    }
    
    res.json(cliente).status(201).end();
}


module.exports = {
    listarClientes,
    buscarCliente,
    cadastrarCliente
};