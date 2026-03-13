const prisma = require("../data/prisma");

const listarCarros = async (req, res) => {
    const carros = await prisma.carros.findMany();

    res.json(carros).status(200).end();
};

const buscarCarros = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.findUnique({
        where: { id },
        include: {
            carros: true
        }
    });

    res.json(carro).status(200).end();
};

const novoCarro = async (req, res) => {
    const carro = req.body;

    // Placa obrigatória e padronizada
    let placaSemEspaco = carro.placa.trim().replace(" ", "");
    let placaMaiuscula = placaSemEspaco.toUpperCase();
    let quantidadeCaracteres = placaMaiuscula.length;
    let temEspaco = placaMaiuscula.includes(" ");

    // Ano com 4 dígitos
    let quantidadeAno = carro.ano.length;
    let anoSeparado = carro.ano.split("");
    let temLetraAno = anoSeparado.some(c => isNaN(c));

    //  Não permitir placa duplicada
    const carros = await prisma.carros.findMany();
    let placaExiste = carros.some(c => c.placa.toUpperCase() === placaMaiuscula);

    if (
        carro.placa != "" &&
        quantidadeCaracteres === 7 &&
        temEspaco == false &&
        quantidadeAno === 4 &&
        temLetraAno == false &&
        placaExiste == false
    ) {

        carro.placa = placaMaiuscula;

        const ncarro = await prisma.carros.create({
            data: carro
        });

        res.json(ncarro).status(201).end();

    } else {
        res.json({ err: "Erro ao cadastrar carro" }).status(500).end();
    }
};

const atualizarCarro = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const carros = await prisma.carros.update({
        where: { id },
        data: dados
    });

    res.json(carros).staus(200).end();
};


const apagarCarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.delete({
        where: { id }
    });

    res.json(carro).status(200).end();
};

module.exports = {
    listarCarros,
    novoCarro,
    buscarCarros,
    atualizarCarro,
    apagarCarro
}