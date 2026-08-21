const prisma = require("../data/prisma");

const listarAssentos = async (req, res) => {
    try {
        const sessaoId = Number(req.params.sessaoId);

        const assentos = await prisma.assento.findMany({
            where: {
                sessaoId
            },
            orderBy: {
                numero: "asc"
            }
        });

        res.status(200).json(assentos);
    } catch (error) {
        console.error("Erro ao listar assentos:", error);

        res.status(500).json({
            erro: "Erro ao listar assentos"
        });
    }
};

const buscarAssento = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const assento = await prisma.assento.findUnique({
            where: {
                id
            },
            include: {
                sessao: true
            }
        });

        if (!assento) {
            return res.status(404).json({
                erro: "Assento não encontrado"
            });
        }

        res.status(200).json(assento);
    } catch (error) {
        console.error("Erro ao buscar assento:", error);

        res.status(500).json({
            erro: "Erro ao buscar assento"
        });
    }
};

const cadastrarAssento = async (req, res) => {
    try {
        const {
            numero,
            sessaoId
        } = req.body;

        if (!numero || !sessaoId) {
            return res.status(400).json({
                erro: "Número do assento e sessão são obrigatórios"
            });
        }

        const sessao = await prisma.sessao.findUnique({
            where: {
                id: Number(sessaoId)
            }
        });

        if (!sessao) {
            return res.status(404).json({
                erro: "Sessão não encontrada"
            });
        }

        const assentoExistente = await prisma.assento.findFirst({
            where: {
                numero,
                sessaoId: Number(sessaoId)
            }
        });

        if (assentoExistente) {
            return res.status(400).json({
                erro: "Esse assento já existe nessa sessão"
            });
        }

        const assento = await prisma.assento.create({
            data: {
                numero,
                sessaoId: Number(sessaoId)
            }
        });

        res.status(201).json(assento);
    } catch (error) {
        console.error("Erro ao cadastrar assento:", error);

        res.status(500).json({
            erro: "Erro ao cadastrar assento"
        });
    }
};

module.exports = {
    listarAssentos,
    buscarAssento,
    cadastrarAssento
};