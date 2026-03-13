const prisma = require("../data/prisma");

const listarCarros = async (req, res) => {
    const carros = await prisma.carros.findMany();

    res.json(carros).status(200).end();
};

const buscarCarros = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.findUnique({
        where: { id }
    });

    res.json(carro).status(200).end();
};

const novoCarro = async (req, res) => {
    const carro = req.body;

    // Placa obrigatória e padronizada
    let placaSemEspaco = carro.placa.trim().replace(/\s/g, "");
    let placaMaiuscula = placaSemEspaco.toUpperCase();
    let quantidadeCaracteres = placaMaiuscula.length;
    let temEspaco = placaMaiuscula.includes(" ");

    // Marca e modelo com primeira letra maiúscula
    let marcaCapitalizada = carro.marca.trim().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    let modeloCapitalizado = carro.modelo.trim().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

    // Ano com 4 dígitos
    let quantidadeAno = carro.ano.length;
    let anoSeparado = carro.ano.split("");
    let temLetraAno = anoSeparado.some(c => isNaN(c));

    // Não permitir placa duplicada
    const carros = await prisma.carros.findMany();
    let placaExiste = carros.some(c => c.placa.toUpperCase() === placaMaiuscula);

    if (
        carro.placa != "" &&
        quantidadeCaracteres === 7 &&
        temEspaco == false &&
        carro.marca.trim() != "" &&
        carro.modelo.trim() != "" &&
        quantidadeAno === 4 &&
        temLetraAno == false &&
        placaExiste == false
    ) {

        carro.placa = placaMaiuscula;
        carro.marca = marcaCapitalizada;
        carro.modelo = modeloCapitalizado;

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

    // Placa obrigatória e padronizada
    let placaSemEspaco = dados.placa.trim().replace(/\s/g, "");
    let placaMaiuscula = placaSemEspaco.toUpperCase();
    let quantidadeCaracteres = placaMaiuscula.length;
    let temEspaco = placaMaiuscula.includes(" ");

    // Marca e modelo com primeira letra maiúscula
    let marcaCapitalizada = dados.marca.trim().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    let modeloCapitalizado = dados.modelo.trim().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

    // Ano com 4 dígitos
    let quantidadeAno = dados.ano.length;
    let anoSeparado = dados.ano.split("");
    let temLetraAno = anoSeparado.some(c => isNaN(c));

    // Não permitir placa duplicada
    const carros = await prisma.carros.findMany();
    let placaExiste = carros.some(c => c.placa.toUpperCase() === placaMaiuscula && c.id != id);

    if (
        dados.placa != "" &&
        quantidadeCaracteres === 7 &&
        temEspaco == false &&
        dados.marca.trim() != "" &&
        dados.modelo.trim() != "" &&
        quantidadeAno === 4 &&
        temLetraAno == false &&
        placaExiste == false
    ) {

        dados.placa = placaMaiuscula;
        dados.marca = marcaCapitalizada;
        dados.modelo = modeloCapitalizado;

        const carros = await prisma.carros.update({
            where: { id },
            data: dados
        });

        res.json(carros).status(200).end();
    } else {
        res.json({ err: "Erro ao atualizar carro" }).status(500).end();
    }
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