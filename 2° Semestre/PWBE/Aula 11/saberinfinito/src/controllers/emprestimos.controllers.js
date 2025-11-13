const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const cadastraremprestimo = async (req, res) => {
    const { data_emprestimo, data_devolucao, livros_id, leitor_id } = req.body;

    try {

        const resultado = await db.query("INSERT INTO emprestimos VALUES (DEFAULT, ?, ?, ?, ?)", [data_emprestimo, data_devolucao, livros_id, leitor_id]);

        const novoUsuario = {
            id: resultado[0].insertId,
            data_emprestimo: data_emprestimo,
            data_devolucao: data_devolucao,
            livros_id: livros_id,
            leitor_id: leitor_id   
        };

        res.status(201).json(novoUsuario).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const listarEmprestimos = async (req, res) => {
    const lista = await db.query("SELECT * FROM emprestimos");
    res.json(lista[0]).end();
};

const buscarEmprestimos = async (req, res) => {
    const idpost = req.params.id;
    const post = await db.query("SELECT * FROM emprestimos WHERE  id = " + idpost);
    res.json(post[0][0]).end();
};

const atualizarEmprestimo = async (req, res) => {
    const id = req.params.id;
    const { data_emprestimo, data_devolucao, livros_id, leitor_id } = req.body;

    try{
        const update = await db.query("UPDATE emprestimos SET  data_emprestimo = ?, data_devolucao =?, livros_id =?, leitor_id =? WHERE id = ?", [data_emprestimo, data_devolucao, livros_id, leitor_id, id]);

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


const excluirEmprestimos= async (req, res) => {
    const id = req.params.id;
    try{
        const remove = await db.query("DELETE FROM emprestimos WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg : ""};

        if(error.errno === 1451){
            err.msg = "Leitor com emprestimo registrada";
            
        }else if(error.code === "ECONNREFUSED") {
            err.msg = "Erro na conexão com o banco de dados";
        }

        res.status(500).json(err).send();
    }
};

const historico = async (req, res) => {
    const id = req.params.id;
    const ver = await db.query(`SELECT livros.titulo, leitor.nome, emprestimos.* FROM emprestimos
INNER JOIN livros ON livros.id = emprestimos.livros_id
INNER JOIN leitor ON leitor.id = emprestimos.leitor_id WHERE emprestimos.livros_id = ?`, [id]);
    res.json(ver[0]).end();
};

const conta = async (req, res) => {
const ver = await db.query(`SELECT leitor.nome, COUNT(*) AS total_emprestimo FROM emprestimos
INNER JOIN livros ON livros.id = emprestimos.livros_id
INNER JOIN leitor ON leitor.id = emprestimos.leitor_id GROUP BY leitor.id`);
res.json(ver[0]).end();
};

module.exports = {
    cadastraremprestimo,
    listarEmprestimos,
    buscarEmprestimos,
    atualizarEmprestimo,
    excluirEmprestimos,
    historico,
    conta
}