const prisma = require("../data/prisma");

const listarSessoes = async (req, res) => {
    try {
        const filmeId = Number(req.params.filmeId);

        const sessoes = await prisma.sessao.findMany({
            where: {
                filmeId
            },
            include: {
                filme: true,
                assentos: true
            }
        });

        res.status(200).json(sessoes);
    } catch (error) {
        console.error("Erro ao listar sessões:", error);

        res.status(500).json({
            erro: "Erro ao listar sessões"
        });
    }
};

const buscarSessao = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const sessao = await prisma.sessao.findUnique({
            where: {
                id
            },
            include: {
                filme: true,
                assentos: true
            }
        });

        if (!sessao) {
            return res.status(404).json({
                erro: "Sessão não encontrada"
            });
        }

        res.status(200).json(sessao);
    } catch (error) {
        console.error("Erro ao buscar sessão:", error);

        res.status(500).json({
            erro: "Erro ao buscar sessão"
        });
    }
};

const cadastrarSessao = async (req, res) => {
    try {
        const {
            horario,
            filmeId
        } = req.body;

        if (!horario || !filmeId) {
            return res.status(400).json({
                erro: "Horário e filme são obrigatórios"
            });
        }

        const filme = await prisma.filme.findUnique({
            where: {
                id: Number(filmeId)
            }
        });

        if (!filme) {
            return res.status(404).json({
                erro: "Filme não encontrado"
            });
        }

        const sessao = await prisma.sessao.create({
            data: {
                horario,
                filmeId: Number(filmeId)
            }
        });

        res.status(201).json(sessao);
    } catch (error) {
        console.error("Erro ao cadastrar sessão:", error);

        res.status(500).json({
            erro: "Erro ao cadastrar sessão"
        });
    }
};

module.exports = {
    listarSessoes,
    buscarSessao,
    cadastrarSessao
};