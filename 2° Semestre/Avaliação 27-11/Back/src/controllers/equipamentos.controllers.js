const db = require("../data/connection");

const cadastrarEquipamento = async (req, res) => {
    const { nome, categoria, quantidade } = req.body;

    if (!nome || !categoria || quantidade < 1 || quantidade === undefined) {
        return res.status(400).json({ error: "A quantidade do equipamento deve ser maior ou igual a 1 e todos os campos devem ser preenchidos." }).end();
    }

    try {

        const resultado = await db.query("INSERT INTO equipamentos VALUES (DEFAULT, ?, ?, ?)", [nome, categoria, quantidade]);

        const novoUsuario = {
            id: resultado[0].insertId,
            nome: nome,
            categoria: categoria,
            quantidade: quantidade
        };

        res.status(201).json(novoUsuario).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const listarEquipamento = async (req, res) => {
    const lista = await db.query("SELECT * FROM  equipamentos");
    res.json(lista[0]).end();
};

const atualizarEquipamento = async (req, res) => {
    const id = req.params.id;
    const { nome, categoria, quantidade } = req.body;

    try{
        const update = await db.query("UPDATE equipamentos SET nome =?, categoria =?, quantidade=? WHERE id =?", [nome, categoria,quantidade, id]);

        const info  = {msg:""}

        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso!";
        } else if (update[0].affectedRows === 1){
            info.msg = "Post não encontrado!";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};


const excluirEquipamento = async (req, res) => {
    const id = req.params.id;
    try{
        const remove = await db.query("DELETE FROM equipamentos WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg : ""};

        if(error.errno === 1451){
            err.msg = "Aluno com locação registrada";
            
        }else if(error.code === "ECONNREFUSED") {
            err.msg = "Erro na conexão com o banco de dados";
        }

        res.status(500).json(err).send();
    }
};

module.exports = {
    cadastrarEquipamento,
    listarEquipamento,
    atualizarEquipamento,
    excluirEquipamento
}