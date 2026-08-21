const prisma = require("../data/prisma");

const listarFilmes = async (req, res) => {
    try {
        const filmes = await prisma.filme.findMany({
            include: {
                sessoes: true
            }
        });

        res.status(200).json(filmes);
    } catch (error) {
        console.error("Erro ao listar filmes:", error);

        res.status(500).json({
            erro: "Erro ao listar filmes"
        });
    }
};

const buscarFilme = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const filme = await prisma.filme.findUnique({
            where: {
                id
            },
            include: {
                sessoes: true
            }
        });

        if (!filme) {
            return res.status(404).json({
                erro: "Filme não encontrado"
            });
        }

        res.status(200).json(filme);
    } catch (error) {
        console.error("Erro ao buscar filme:", error);

        res.status(500).json({
            erro: "Erro ao buscar filme"
        });
    }
};

const cadastrarFilme = async (req, res) => {
    try {
        const {
            nome,
            descricao,
            duracao,
            genero
        } = req.body;

        if (!nome || !duracao || !genero) {
            return res.status(400).json({
                erro: "Nome, duração e gênero são obrigatórios"
            });
        }

        const filme = await prisma.filme.create({
            data: {
                nome,
                descricao,
                duracao: Number(duracao),
                genero
            }
        });

        res.status(201).json(filme);
    } catch (error) {
        console.error("Erro ao cadastrar filme:", error);

        res.status(500).json({
            erro: "Erro ao cadastrar filme"
        });
    }
};

module.exports = {
    listarFilmes,
    buscarFilme,
    cadastrarFilme
};