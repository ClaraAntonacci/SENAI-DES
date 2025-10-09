const db = require("../data/connection");

const contarClientes = async (req, res) =>{
const contar = await db.query("SELECT COUNT(*) AS total_clientes FROM cliente")
    res.json(contar[0][0]).end();

}
const cadastrarClientes = async (req, res) => {
    const {nome, telefone, email} = req.body

    const novoCliente = await db.query("INSERT INTO cliente VALUES (DEFAULT, ?, ?, ?)", [nome,telefone, email]);

    const cliente = {
        id: novoCliente[0].insertId,
        nome: nome
    }

    res.json(cliente).status(201).end();
};


const atualizarCliente = async (req, res) => {
  const { nome, telefone, email, id } = req.body;
  try {
   
    const update = await db.query(
      `UPDATE cliente SET nome = ?, telefone = ?, email = ? WHERE id = ?`,
      [nome, telefone, email, id]
    );

    let info = { msg: '' };


    if (update[0].affectedRows === 1) {
      info.msg = 'Atualizado com sucesso!';
    } else {
      info.msg = 'Usuário não encontrado ou não atualizado!';
    }

    res.status(200).json(info).end();
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};



module.exports = {
    contarClientes,
    cadastrarClientes,
    atualizarCliente
}