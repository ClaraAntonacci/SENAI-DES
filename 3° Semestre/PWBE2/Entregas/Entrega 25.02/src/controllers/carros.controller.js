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

    let quantidadeCaracteries = carro.placa.trim().toUpperCase().length().replace()

    // let primeiraMaiuscula = carro.marca.modelo.trim().splith(" ") rennye falou que era para pular o 2
    


    if (carro.placa != "" && quantidadeCaracteries === 7) {
        const ncarro = await prisma.carros.create({
            data: carro

        });
        res.json(ncarro).status(201).end();
    }else {
        res.json({err: "Placa Obrigatoria"}).status(500).end();
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


// const atualizarCarro = async (req, res) => {
//     const { id } = req.params;
//     const dados = req.body;

//     let tamanhoNome = dados.nome.trim().split(" ").length();

//     let temarroba = dados.email.includes("@");

//     if (tamanhoNome >= 2 && temarroba == true) {
//         const carros = await prisma.carros.update({
//             where: { id },
//             data: dados
//         });

//         res.json(carros).staus(200).end();
//     }else {
        
//     }
// };

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