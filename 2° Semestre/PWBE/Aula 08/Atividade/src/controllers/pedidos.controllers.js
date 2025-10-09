const db = require("../data/connection");

const listarpedidos = async (req, res) => {
    const lista = await db.query("SELECT * FROM  pedidos");
    res.json(lista[0]).end();
};



const excluirpedidos = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM pedidos WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        res.status(500).json(err).send();
    }
};

const atualizarpedido = async (req, res) => {
    const {id, cliente_id, telefone, endereco} = req.body;

    try{
        const update = await db.query("UPDATE pedidos SET cliente_id = ?, telefone = ? , endereço = ? WHERE id = ?", [cliente_id, telefone,endereco, id]);

        const info  = {msg:""}

        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso!";
        } else if (update[0].affectedRows === 0){
            info.msg = "Pedido não encontrado!";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};


module.exports = {
    listarpedidos,
    excluirpedidos,
    atualizarpedido
}