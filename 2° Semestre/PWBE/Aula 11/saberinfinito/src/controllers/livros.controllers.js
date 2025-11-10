const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const cadastrarLivro = async (req, res) => {
    const { titulo, autor, ano } = req.body;

    try {

        const resultado = await db.query("INSERT INTO livros VALUES (DEFAULT, ?, ?, ?)", [titulo, autor, ano]);

        const novoUsuario = {
            id: resultado[0].insertId,
            titulo: titulo,
            autor: autor,
            ano: ano
        };

        res.status(201).json(novoUsuario).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const listarLivros = async (req, res) => {
    const lista = await db.query("SELECT * FROM livros");
    res.json(lista[0]).end();
};

const buscarLivro = async (req, res) => {
    const idpost = req.params.id;
    const post = await db.query("SELECT * FROM livros WHERE  id = " + idpost);
    res.json(post[0][0]).end();
};

const atualizarLivro = async (req, res) => {
    const id = req.params.id;
    const { titulo, autor, ano } = req.body;

    try {
        const update = await db.query("UPDATE livros SET  titulo= ?, autor =?, ano =? WHERE id = ?", [titulo, autor, ano, id]);

        const info = { msg: "" }

        if (update[0].affectedRows === 1) {
            info.msg = "Atualizado com sucesso!";
        } else if (update[0].affectedRows === 1) {
            info.msg = "Post não encontrado!";
        }
        res.status(200).json(info).end();
    } catch (error) {
        console.log(error);

        res.status(500).end();
    }
};


const excluirLivros = async (req, res) => {
    const id = req.params.id;
    try {
        const remove = await db.query("DELETE FROM livros WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch (error) {
        console.log(error);

        const err = { msg: "" };

        if (error.errno === 1451) {
            err.msg = "Leitor com emprestimo registrada";

        } else if (error.code === "ECONNREFUSED") {
            err.msg = "Erro na conexão com o banco de dados";
        }

        res.status(500).json(err).send();
    }
};

const livrosporleitor = async (req, res) => {
    const { nome } = req.params;

    try {
        const ver = await db.query(`SELECT livros.titulo, leitor.nome FROM emprestimos INNER JOIN livros ON livros.id = emprestimos.livros_id INNER JOIN leitor ON leitor.id = emprestimos.leitor_id WHERE leitor.nome LIKE "%`+ nome +`%"`);
        
        res.status(200).json(ver[0]).end();
    } catch (err) {
        console.log(err);
        res.status(500).json(err).end();
    }
};

const verificaLivro = async (req, res) => {
    
    const ver = await db.query(`SELECT livros.titulo, leitor.nome, emprestimos.* FROM emprestimos
INNER JOIN livros ON livros.id = emprestimos.livros_id
INNER JOIN leitor ON leitor.id = emprestimos.leitor_id
WHERE data_devolucao < "2025-11-07"`);

    res.json(ver[0]).end();
};



module.exports = {
    cadastrarLivro,
    listarLivros,
    buscarLivro,
    atualizarLivro,
    excluirLivros,
    livrosporleitor,
    verificaLivro
}