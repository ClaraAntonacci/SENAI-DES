const prisma = require("../data/prisma");

const cadastrarProduto = async (req, res) => {
  try{
    const {nome, descricao, preco, tipo, imagem} = req.body;
    const produto = await prisma.produtos.create({
      data: {
        nome,
        descricao,
        preco,
        tipo,
        imagem
      }
    });
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar produto" });

  }

}

const listarProdutos = async (req, res) => {
  try{
    const produtos = await prisma.produtos.findMany();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar produtos" });
  }
}

const buscarProdutoPorId = async (req, res) => {
  try{
    const { id } = req.params;
    const produto = await prisma.produtos.findUnique({
      where: { id: Number(id) }
    });
    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).json({ error: "Produto não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
}

const atualizarProduto = async (req, res)=> {
  try{
    const { id } = req.params;
    const {nome, descricao, preco, tipo, imagem} = req.body;
    const produto = await prisma.produtos.update({
      where: { id: Number(id)},
      data:{
        nome,
        descricao,
        preco,
        tipo,
        imagem
      }
    })
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
}

const excluirProduto = async (req, res)=>{
  try{
    const { id } = req.params;
    await prisma.produtos.delete({
      where: { id: Number(id) }
    });
    res.status(204).send();
  }catch (error){
    res.status(500).json({ error: "Erro ao excluir produto"});
  }
}

module.exports ={
  cadastrarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  excluirProduto
}
