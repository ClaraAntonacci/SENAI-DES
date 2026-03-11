const prisma = require("../data/prisma");

const listarClientes = async (req, res) => {
    const clientes = await prisma.clientes.findMany();

    res.json(clientes).status(200).end();
};

const buscarClientes = async (req, res) => {
    const { id } = req.params;

    const cliente = await prisma.clientes.findUnique({
        where: { id }
    });

    res.json(cliente).status(200).end();
};

const novoCliente = async (req, res) => {
    const cliente = req.body;

    // nome completo
    let nomeSemEspaco = cliente.nome.trim();
    let partesNome = nomeSemEspaco.split(" ");
    let quantidadePalavras = partesNome.length;

    // nome não pode ter número
    let letrasNome = cliente.nome.split("");
    let temNumeroNome = letrasNome.some(l => !isNaN(l) && l != " ");

    // cpf apenas números
    let cpfSemPonto = cliente.cpf.replace(".", "");
    let cpfSemPonto2 = cpfSemPonto.replace(".", "");
    let cpfFinal = cpfSemPonto2.replace("-", "");
    let tamanhoCpf = cpfFinal.length;

    // email válido
    let emailMinusculo = cliente.email.toLowerCase();
    let temArroba = emailMinusculo.includes("@");
    let temPonto = emailMinusculo.includes(".");

    // email duplicado
    const clientes = await prisma.clientes.findMany();
    let emailExiste = clientes.some(c => c.email === emailMinusculo);

    // cnh começa com número
    let cnhSeparada = cliente.cnh.split("");
    let primeiroNumero = cnhSeparada[0];
    let primeiroEhNumero = !isNaN(primeiroNumero);

    if (
        quantidadePalavras >= 2 &&
        temNumeroNome == false &&
        tamanhoCpf === 11 &&
        temArroba == true &&
        temPonto == true &&
        emailExiste == false &&
        primeiroEhNumero == true
    ) {

        cliente.email = emailMinusculo;
        cliente.cpf = cpfFinal;

        const ncliente = await prisma.clientes.create({
            data: cliente
        });

        res.json(ncliente).status(201).end();

    } else {
        res.json({ err: "Erro ao cadastrar cliente" }).status(500).end();
    }
};

const atualizarCliente = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const cliente = await prisma.clientes.update({
        where: { id },
        data: dados
    });

    res.json(cliente).status(200).end();
};

const apagarCliente = async (req, res) => {
    const { id } = req.params;

    const cliente = await prisma.clientes.delete({
        where: { id }
    });

    res.json(cliente).status(200).end();
};

module.exports = {
    listarClientes,
    buscarClientes,
    novoCliente,
    atualizarCliente,
    apagarCliente
};