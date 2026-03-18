const prisma = require("../data/prisma");

const listarCarros = async (req, res) => {
    const carros = await prisma.carros.findMany();
    return res.status(200).json(carros);
};

const buscarCarros = async (req, res) => {
    const id = Number(req.params.id);

    const carro = await prisma.carros.findUnique({
        where: { id }
    });

    return res.status(200).json(carro);
};

const novoCarro = async (req, res) => {
    const carro = req.body;

    // Placa obrigatória e padronizada
    let placaSemEspaco = carro.placa.trim().replace(/\s/g, "");
    let placaMaiuscula = placaSemEspaco.toUpperCase();
    let quantidadeCaracteres = placaMaiuscula.length;
    let temEspaco = placaMaiuscula.includes(" ");

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

        const ncarro = await prisma.carros.create({
            data: carro
        });

        return res.status(201).json(ncarro);

    } else {
        return res.status(400).json({ err: "Erro ao cadastrar carro" });
    }
};

const atualizarCarro = async (req, res) => {
    const id = Number(req.params.id);
    const dados = req.body;

    // Placa obrigatória e padronizada
    let placaSemEspaco = dados.placa.trim().replace(/\s/g, "");
    let placaMaiuscula = placaSemEspaco.toUpperCase();
    let quantidadeCaracteres = placaMaiuscula.length;
    let temEspaco = placaMaiuscula.includes(" ");

    // Ano com 4 dígitos
    let quantidadeAno = dados.ano.length;
    let anoSeparado = dados.ano.split("");
    let temLetraAno = anoSeparado.some(c => isNaN(c));

    // Não permitir placa duplicada
    const carros = await prisma.carros.findMany();
    let placaExiste = carros.some(c => 
        c.placa.toUpperCase() === placaMaiuscula && c.id != id
    );

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

        const carroAtualizado = await prisma.carros.update({
            where: { id },
            data: dados
        });

        return res.status(200).json(carroAtualizado);
    } else {
        return res.status(400).json({ err: "Erro ao atualizar carro" });
    }
};

const apagarCarro = async (req, res) => {
    const id = Number(req.params.id);

    const carro = await prisma.carros.delete({
        where: { id }
    });

    return res.status(200).json(carro);
};

module.exports = {
    listarCarros,
    novoCarro,
    buscarCarros,
    atualizarCarro,
    apagarCarro
};