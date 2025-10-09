const db = require("../data/connection");

const listarLocacao = async (req, res) => {
    const lista = await db.query("SELECT * FROM  locacoes");
    res.json(lista[0]).end();
};

const listarlocacoesIdcliente = async (req, res) => {
    const idcliente = req.params.idcliente;
    const lista = await db.query("SELECT * FROM locacoes WHERE cliente_id = ?", [idcliente]);
    res.json(lista[0]).end();
};

const listarlocacoesporstatus = async (req, res) => {
    const status = req.params.status;
    const listar = await db.query("SELECT * FROM  locacoes WHERE status = ?", [status]);
    res.json(listar[0]).end();
};


const buscarLocacoes = async (req, res) => {
    const idLocacoes = req.params.id;
    const locacao = await db.query("SELECT * FROM locacoes WHERE  id = " + idLocacoes);
    res.json(locacao[0][0]).end();
};

const cadastrarLocacoes = async (req, res) => {
    const {idCliente, idFilme, dataLocacao, status, preco} = req.body

    const novoLocacao = await db.query("INSERT INTO locacoes VALUES (DEFAULT, ?, ?, ?, ?, ?)", [idCliente, idFilme, dataLocacao, status, preco]);

    const locacao = {
        id: novoLocacao[0].insertId,
        idCliente: idCliente,
        idFilme: idFilme,
        dataLocacao: dataLocacao,
        status: status,
        preco: preco
    }

    res.json(locacao).status(201).end();
};

const excluirLocacoes = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM locacoes WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg : ""};

        if(error.errno === 1451){
            err.msg = "Locação com usuario registrado";
            
        }else if(error.code === "ECONNREFUSED") {
            err.msg = "Erro na conexão com o banco de dados";
        }

        res.status(500).json(err).send();
    }
};

const atualizarLocacao = async (req, res) => {
    const {id, idCliente, idFilme, dataLocacao, status, preco} = req.body;

    try{
        const update = await db.query("UPDATE locacoes SET  cliente_id = ?, preco = ?, filme_id = ?, data_locacao = ?, status = ? WHERE id = ?", [idCliente, preco, idFilme, dataLocacao, status, id]);

        const info  = {msg:""}

        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso!";
        } else if (update[0].affectedRows === 1){
            info.msg = "Locação não encontrada!";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};

const totalFaturamento = async (req, res) =>{
    const total = await db.query("SELECT SUM(preco) AS total FROM locacoes WHERE status = 'ENTREGUE'");
    res.json(total[0][0]).end();

};

const faturamentoequantidadepormes = async (req, res) =>{
    const pormes = await db.query("SELECT month(locacoes.data_locacao), COUNT(locacoes.id), SUM(filmes.preco) AS 'Total de gastos por mes' FROM locacoes INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY MONTH(locacoes.data_locacao) ORDER BY filmes.id")
      res.json(pormes[0]).end();
};



module.exports = {
    listarLocacao,
    listarlocacoesIdcliente,
    listarlocacoesporstatus,
    buscarLocacoes,
    cadastrarLocacoes,
    excluirLocacoes,
    atualizarLocacao,
    totalFaturamento,
    faturamentoequantidadepormes
}