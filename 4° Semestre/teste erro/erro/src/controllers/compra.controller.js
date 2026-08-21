const prisma = require("../data/prisma");

const PRECO_INGRESSO = 30;

const realizarCompra = async (req, res) => {
    try {
        const {
            filmeId,
            sessaoId,
            assentoId,
            verificacao
        } = req.body;

        if (!filmeId || !sessaoId || !assentoId) {
            return res.status(400).json({
                erro: "Filme, sessão e assento são obrigatórios"
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

        const assento = await prisma.assento.findUnique({
            where: {
                id: Number(assentoId)
            }
        });

        if (!assento) {
            return res.status(404).json({
                erro: "Assento não encontrado"
            });
        }

        if (assento.ocupado) {
            return res.status(400).json({
                erro: "Este assento já está ocupado"
            });
        }

        /*
         * BUG PROPOSITAL
         *
         * Regra esperada:
         * 1 assento = 1 ingresso.
         *
         * O erro está escondido nesta regra.
         */

        let quantidade = 1;

        if (verificacao && verificacao.assento) {
            quantidade = 2;
        }

        const valorTotal = quantidade * PRECO_INGRESSO;

        const compra = await prisma.compra.create({
            data: {
                filmeId: Number(filmeId),
                sessaoId: Number(sessaoId),
                quantidade,
                valorTotal,
                ingressos: {
                    create: {
                        assentoId: assento.id,
                        valor: PRECO_INGRESSO
                    }
                }
            },
            include: {
                filme: true,
                sessao: true,
                ingressos: {
                    include: {
                        assento: true
                    }
                }
            }
        });

        await prisma.assento.update({
            where: {
                id: assento.id
            },
            data: {
                ocupado: true
            }
        });

        res.status(201).json({
            mensagem: "Compra realizada com sucesso!",
            compra
        });

    } catch (error) {
        console.error("Erro ao realizar compra:", error);

        res.status(500).json({
            erro: "Erro ao realizar compra"
        });
    }
};

const listarCompras = async (req, res) => {
    try {
        const compras = await prisma.compra.findMany({
            include: {
                filme: true,
                sessao: true,
                ingressos: {
                    include: {
                        assento: true
                    }
                }
            },
            orderBy: {
                criadoEm: "desc"
            }
        });

        res.status(200).json(compras);
    } catch (error) {
        console.error("Erro ao listar compras:", error);

        res.status(500).json({
            erro: "Erro ao listar compras"
        });
    }
};

const buscarCompra = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const compra = await prisma.compra.findUnique({
            where: {
                id
            },
            include: {
                filme: true,
                sessao: true,
                ingressos: {
                    include: {
                        assento: true
                    }
                }
            }
        });

        if (!compra) {
            return res.status(404).json({
                erro: "Compra não encontrada"
            });
        }

        res.status(200).json(compra);
    } catch (error) {
        console.error("Erro ao buscar compra:", error);

        res.status(500).json({
            erro: "Erro ao buscar compra"
        });
    }
};

module.exports = {
    realizarCompra,
    listarCompras,
    buscarCompra
};