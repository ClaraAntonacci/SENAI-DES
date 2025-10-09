const db = require("../data/connection");

const listarFilmes = async (req, res) => {
    const lista = await db.query("SELECT * FROM  filmes");
    res.json(lista[0]).end();
};

const buscarFilmes = async (req, res) => {
    const idFilmes = req.params.id;
    const filme = await db.query("SELECT * FROM filmes WHERE  id = " + idFilmes);
    res.json(filme[0][0]).end();
};

const cadastrarFilmes = async (req, res) => {
    const {titulo, categoria, preco} = req.body

    const novoFilme = await db.query("INSERT INTO filmes VALUES (DEFAULT, ?, ?, ?)", [titulo, categoria, preco]);

    const filme = {
        id: novoFilme[0].insertId,
        titulo: titulo
    }

    res.json(filme).status(201).end();
};

const excluirFilmes = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM filmes WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg : ""};

        if(error.errno === 1451){
            err.msg = "Filme com locação registrada";
            
        }else if(error.code === "ECONNREFUSED") {
            err.msg = "Erro na conexão com o banco de dados";
        }

        res.status(500).json(err).send();
    }
};

const atualizarFilme = async (req, res) => {
    const {id, titulo, categoria, preco} = req.body;

    try{
        const update = await db.query("UPDATE filmes SET  titulo= ?, categoria = ?, preco = ? WHERE id = ? ", [titulo, categoria, preco, id]);

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

const quantidadeporCategoria = async (req, res) =>{
    const categoria = await db.query("SELECT filmes.categoria, COUNT(locacoes.id) AS Total FROM locacoes INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY filmes.categoria ORDER BY filmes.id");
    res.json(categoria[0]).end();
}

const faturamentoporcategoria = async (req, res) =>{
    const faturamento = await db.query ("SELECT filmes.categoria, SUM(filmes.preco) AS Faturamento FROM locacoes INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY filmes.categoria ORDER BY filmes.id")
    res.json(faturamento[0]).end();
}

module.exports = {
    listarFilmes,
    buscarFilmes,
    cadastrarFilmes,
    excluirFilmes,
    atualizarFilme,
    quantidadeporCategoria,
    faturamentoporcategoria
}