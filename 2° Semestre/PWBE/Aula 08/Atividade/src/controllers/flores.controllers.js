const db = require("../data/connection");

const buscarFlor1 = async (req, res) => {

    const flor = await db.query("SELECT * FROM `flores` WHERE id = 1");
    res.json(flor[0][0]).end();
};

const cadastrarFlor = async (req, res) => {
    const {especie, preço} = req.body

    const novoFlor = await db.query("INSERT INTO flores VALUES (DEFAULT, ?, ?)", [especie, preço]);

    const flor = {
        id: novoFlor[0].insertId,
        especie: especie,
        preço:preço 
    }

    res.json(flor).status(201).end();
};

const atualizarCliente = async (req, res) => {
    const {id, especie, preço} = req.body;

    try{
        const update = await db.query("UPDATE flores SET  especie = ?, preço = ? WHERE id = ?", [especie, preço, id]);

        const info  = {msg:""}

        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso!";
        } else if (update[0].affectedRows === 1){
            info.msg = "Flor não encontrada!";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};

module.exports = {
    buscarFlor1,
    cadastrarFlor,
    atualizarCliente
};