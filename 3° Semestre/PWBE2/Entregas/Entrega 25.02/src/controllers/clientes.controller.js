const prisma = require("../data/prisma");

const listarClientes = async (req, res) => {
    const clientes = await prisma.clientes.findMany();
    return res.status(200).json(clientes);
};

const buscarClientes = async (req, res) => {
    const id = Number(req.params.id);

    const cliente = await prisma.clientes.findUnique({
        where: { id }
    });

    return res.status(200).json(cliente);
};

const novoCliente = async (req, res) => {
    const cliente = req.body;

    // nome completo
    let nomeSemEspaco = cliente.nome.trim();
    let nomeSeparado = nomeSemEspaco.split(" ");
    let quantidadePalavras = nomeSeparado.length;

    // nome não pode ter número (regra desafio)
    let nomeSeparadoLetra = cliente.nome.split("");
    let temNumeroNome = nomeSeparadoLetra.some(l => l >= "0" && l <= "9");

    // cpf apenas números
    let cpfSemLetra = cliente.cpf.replace(/\D/g, "");
    let quantidadeCpf = cpfSemLetra.length;

    // email válido
    let emailMinusculo = cliente.email.toLowerCase();
    let temArroba = emailMinusculo.includes("@");
    let temPonto = emailMinusculo.includes(".");

    // email duplicado
    const clientes = await prisma.clientes.findMany();
    let emailJaExiste = clientes.some(c => c.email === emailMinusculo);

    // cnh começa com número
    let cnhSeparada = cliente.cnh.split("");
    let primeiroCaractere = cnhSeparada[0];
    let primeiroEhNumero = primeiroCaractere >= "0" && primeiroCaractere <= "9";

    if (
        nomeSemEspaco != "" &&
        quantidadePalavras >= 2 &&
        temNumeroNome == false &&
        quantidadeCpf === 11 &&
        temArroba == true &&
        temPonto == true &&
        emailJaExiste == false &&
        primeiroEhNumero == true
    ) {

        cliente.email = emailMinusculo;
        cliente.cpf = cpfSemLetra;

        const clienteNovo = await prisma.clientes.create({
            data: cliente
        });

        return res.status(201).json(clienteNovo);
    } else {
        return res.status(400).json({ err: "Erro ao cadastrar cliente" });
    }
};

const atualizarCliente = async (req, res) => {
    const id = Number(req.params.id);
    const dados = req.body;

    // nome completo
    let nomeSemEspaco = dados.nome.trim();
    let nomeSeparado = nomeSemEspaco.split(" ");
    let quantidadePalavras = nomeSeparado.length;

    // nome não pode ter número
    let nomeSeparadoLetra = dados.nome.split("");
    let temNumeroNome = nomeSeparadoLetra.some(l => l >= "0" && l <= "9");

    // cpf apenas números
    let cpfSemLetra = dados.cpf.replace(/\D/g, "");
    let quantidadeCpf = cpfSemLetra.length;

    // email válido
    let emailMinusculo = dados.email.toLowerCase();
    let temArroba = emailMinusculo.includes("@");
    let temPonto = emailMinusculo.includes(".");

    // email duplicado
    const clientes = await prisma.clientes.findMany();
    let emailJaExiste = clientes.some(c => 
        c.email === emailMinusculo && c.id != id
    );

    // cnh começa com número
    let cnhSeparada = dados.cnh.split("");
    let primeiroCaractere = cnhSeparada[0];
    let primeiroEhNumero = primeiroCaractere >= "0" && primeiroCaractere <= "9";

    if (
        nomeSemEspaco != "" &&
        quantidadePalavras >= 2 &&
        temNumeroNome == false &&
        quantidadeCpf === 11 &&
        temArroba == true &&
        temPonto == true &&
        emailJaExiste == false &&
        primeiroEhNumero == true
    ) {

        dados.email = emailMinusculo;
        dados.cpf = cpfSemLetra;

        const clienteAtualizado = await prisma.clientes.update({
            where: { id },
            data: dados
        });

        return res.status(200).json(clienteAtualizado);
    } else {
        return res.status(400).json({ err: "Erro ao atualizar cliente" });
    }
};

const apagarCliente = async (req, res) => {
    const id = Number(req.params.id);

    const cliente = await prisma.clientes.delete({
        where: { id }
    });

    return res.status(200).json(cliente);
};

module.exports = {
    listarClientes,
    buscarClientes,
    novoCliente,
    atualizarCliente,
    apagarCliente
};