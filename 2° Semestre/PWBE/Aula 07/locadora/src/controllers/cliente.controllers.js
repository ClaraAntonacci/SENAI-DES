const db = require("../data/connection");

const listarClientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM  clientes");
    res.json(lista[0]).end();
};

const buscarClientes = async (req, res) => {
    const idClientes = req.params.id;
    const cliente = await db.query("SELECT * FROM clientes WHERE  id = " + idClientes);
    res.json(cliente[0][0]).end();
};

const cadastrarClientes = async (req, res) => {
    const {nome, email} = req.body

    const novoCliente = await db.query("INSERT INTO clientes VALUES (DEFAULT, ?, ?)", [nome, email]);

    const cliente = {
        id: novoCliente[0].insertId,
        nome: nome
    }

    res.json(cliente).status(201).end();
};

const excluirClientes = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM clientes WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg : ""};

        if(error.errno === 1451){
            err.msg = "Usuario com locação registrada";
            
        }else if(error.code === "ECONNREFUSED") {
            err.msg = "Erro na conexão com o banco de dados";
        }

        res.status(500).json(err).send();
    }
};

const atualizarCliente = async (req, res) => {
    const {id, nome, email} = req.body;

    try{
        const update = await db.query("UPDATE clientes SET  nome = ?, email = ? WHERE id = ?", [nome, email, id]);

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

const TotalGastos = async (req, res) =>{
    const gastos = await db.query("SELECT locacoes.cliente_id, SUM(filmes.preco) AS 'Total de gastos' FROM locacoes INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY locacoes.cliente_id ORDER BY filmes.id");
    res.json(gastos[0]).end();
};

module.exports = {
    listarClientes,
    buscarClientes,
    cadastrarClientes,
    excluirClientes,
    atualizarCliente,
    TotalGastos
}