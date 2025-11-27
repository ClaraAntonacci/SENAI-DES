const db = require("../data/connection");

const cadastrarAluno = async (req, res) => {
    const { nome, turma } = req.body;

    try {

        const resultado = await db.query("INSERT INTO alunos VALUES (DEFAULT, ?, ?)", [nome, turma]);

        const novoUsuario = {
            id: resultado[0].insertId,
            nome: nome,
            turma: turma
        };

        res.status(201).json(novoUsuario).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const listarAluno = async (req, res) => {
    const lista = await db.query("SELECT * FROM  alunos");
    res.json(lista[0]).end();
};

const atualizarAluno = async (req, res) => {
    const id = req.params.id;
    const { nome, turma } = req.body;

    try{
        const update = await db.query("UPDATE alunos SET nome =?, turma =? WHERE id =?", [nome, turma, id]);

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


const excluirAluno = async (req, res) => {
    const id = req.params.id;
    try{
        const remove = await db.query("DELETE FROM alunos WHERE id = ?", [id]);

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
    cadastrarAluno,
    listarAluno,
    atualizarAluno,
    excluirAluno
}