const db = require("../data/connection");


const buscarAdicionais = async (req, res) => {
    const idAdicionais = req.params.id;
    const adicional = await db.query("SELECT * FROM adicionais WHERE  id = " + idAdicionais);
    res.json(adicional[0][0]).end();
};


const atualizarAdicionais = async (req, res) => {
    const {id, flores_id, adicionais} = req.body;

    try{
        const update = await db.query("UPDATE adicionais SET  flores_id = ?, adicionais = ? WHERE id = ?", [flores_id, adicionais, id]);

        const info  = {msg:""}

        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso!";
        } else if (update[0].affectedRows === 1){
            info.msg = "Usuario não encontrado!";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};

const QuantosADicionais = async(req, res) => {
    const contar = await db.query("SELECT COUNT(*) AS total_adicionais FROM adicionais")
    res.json(contar[0][0]).end();
};

module.exports = {
    buscarAdicionais,
    atualizarAdicionais,
    QuantosADicionais
}