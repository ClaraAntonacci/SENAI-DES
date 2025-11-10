const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');


const Login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString();
        const usuario = await db.query("SELECT * FROM leitor WHERE email = ? AND senha = ?", [email, senhahash]);

        if (usuario[0].length === 0) {
            return res.status(401).send({ message: 'E-mail or Password incorrect!' });
        }

        const token = jsonwebtoken.sign(
            {
                id: usuario[0][0].id,
                email: usuario[0][0].email,
                senha: usuario[0][0].senhahash

            },
            process.env.SECRET_JWT,
            { expiresIn: "60min" }
        );

        res.status(200).json({ token: token });

    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal server error' });
    }
};

const cadastrarLeitor = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString();

        const resultado = await db.query("INSERT INTO users VALUES (DEFAULT, ?, ?, ?)", [nome, email, senhahash]);

        const novoUsuario = {
            id: resultado[0].insertId,
            nome: nome,
            email: email,
            senha: senhahash
        };

        res.status(201).json(novoUsuario).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const listarLeitor = async (req, res) => {
    const lista = await db.query("SELECT * FROM  leitor");
    res.json(lista[0]).end();
};

const buscarLeitor= async (req, res) => {
    const idpost = req.params.id;
    const post = await db.query("SELECT * FROM leitor WHERE  id = " + idpost);
    res.json(post[0][0]).end();
};

const atualizarLeitor = async (req, res) => {
    const id = req.params.id;
    const { nome, email, senha} = req.body;

    try{
        const update = await db.query("UPDATE leitor SET  nome = ?, email =? senha =? WHERE id = ?", [nome, email,senha, id]);

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


const excluirLeitor = async (req, res) => {
    const id = req.params.id;
    try{
        const remove = await db.query("DELETE FROM leitor WHERE id = ?", [id]);

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

module.exports = {
    Login,
    cadastrarLeitor,
    listarLeitor,
    buscarLeitor,
    atualizarLeitor,
    excluirLeitor
}