const db = require("../data/connection");

const cadastrarLocacao = async (req, res) => {
    const { data_locacao, data_devolucao, id_aluno, id_equipamento } = req.body;

    try {

        const resultado = await db.query("INSERT INTO locacoes VALUES (DEFAULT, ?, ?, ?, ?)", [data_locacao, data_devolucao, id_aluno, id_equipamento]);

        const novoUsuario = {
            id: resultado[0].insertId,
            data_locacao: data_locacao,
            data_devolucao: data_devolucao,
            id_aluno: id_aluno,
            id_equipamento: id_equipamento
        };

        res.status(201).json(novoUsuario).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const listarLocacoes = async (req, res) => {
    const lista = await db.query("SELECT * FROM  locacoes");
    res.json(lista[0]).end();
};

const atualizarLocacoes = async (req, res) => {
    const id = req.params.id;
    const { data_locacao, data_devolucao, id_aluno, id_equipamento } = req.body;

    try{
        const update = await db.query("UPDATE locacoes SET data_locacao =?, data_devolucao =?, id_aluno =?, id_equipamento =? WHERE id =?", [data_locacao, data_devolucao, id_aluno, id_equipamento, id]);

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


const excluirLocacao = async (req, res) => {
    const id = req.params.id;
    try{
        const remove = await db.query("DELETE FROM locacoes WHERE id = ?", [id]);

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

const TotallocacoesporCategoria = async (req, res) => {
    
    const ver = await db.query(`SELECT equipamentos.categoria, COUNT(locacoes.id) AS total_locacoes FROM locacoes INNER JOIN equipamentos ON equipamentos.id = locacoes.id_equipamento GROUP BY equipamentos.categoria;`);

    res.json(ver[0]).end();
};

const TotallocacoesporAluno = async (req, res) => {
    
    const ver = await db.query(`SELECT alunos.nome, COUNT(locacoes.id) AS total_locacoes FROM locacoes INNER JOIN alunos ON alunos.id = locacoes.id_aluno GROUP BY alunos.nome;`);

    res.json(ver[0]).end();
};

const TotallocacoesporEquipamento = async (req, res) => {
    
    const ver = await db.query(`SELECT equipamentos.nome, COUNT(locacoes.id) AS total_locacoes FROM locacoes INNER JOIN equipamentos ON equipamentos.id = locacoes.id_equipamento GROUP BY equipamentos.nome;`);

    res.json(ver[0]).end();
};


module.exports = {
    cadastrarLocacao,
    listarLocacoes,
    atualizarLocacoes,
    excluirLocacao,
    TotallocacoesporCategoria,
    TotallocacoesporAluno,
    TotallocacoesporEquipamento
}