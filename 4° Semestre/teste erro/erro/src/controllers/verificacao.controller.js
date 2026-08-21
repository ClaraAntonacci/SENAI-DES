const prisma = require("../data/prisma");

const verificarCompra = async (req, res) => {
    try {
        const {
            filmeId,
            sessaoId,
            nomeFilme,
            assento
        } = req.body;

        if (!filmeId || !sessaoId || !nomeFilme || !assento) {
            return res.status(400).json({
                aprovado: false,
                mensagem: "Filme, sessão, nome do filme e assento são obrigatórios"
            });
        }

        const filme = await prisma.filme.findUnique({
            where: {
                id: Number(filmeId)
            }
        });

        if (!filme) {
            return res.status(404).json({
                aprovado: false,
                mensagem: "Filme não encontrado"
            });
        }

        const nomeDigitado = nomeFilme
            .trim()
            .toLowerCase();

        const nomeCorreto = filme.nome
            .trim()
            .toLowerCase();

        if (nomeDigitado !== nomeCorreto) {
            return res.status(400).json({
                aprovado: false,
                mensagem: "Nome do filme incorreto"
            });
        }

        const assentoEncontrado = await prisma.assento.findFirst({
            where: {
                numero: assento,
                sessaoId: Number(sessaoId)
            }
        });

        if (!assentoEncontrado) {
            return res.status(400).json({
                aprovado: false,
                mensagem: "Assento não encontrado"
            });
        }

        if (assentoEncontrado.ocupado) {
            return res.status(400).json({
                aprovado: false,
                mensagem: "Este assento já está ocupado"
            });
        }

        res.status(200).json({
            aprovado: true,
            mensagem: "Verificação aprovada",
            filme: filme.nome,
            assento: assentoEncontrado.numero,
            assentoId: assentoEncontrado.id
        });

    } catch (error) {
        console.error("Erro na verificação:", error);

        res.status(500).json({
            aprovado: false,
            erro: "Erro durante a verificação"
        });
    }
};

module.exports = {
    verificarCompra
};