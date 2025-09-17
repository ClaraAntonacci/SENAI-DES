const reservas = require('../data/reservas.data');
const clientes = require('../data/clientes.data');
const quartos = require('../data/quartos.data');

const listar = (req, res) => {
    // envia todos os objetos do array 'reservas' para quem fez a requisição
    res.send(reservas).end();// termina a resposta
    
};

const cadastrar = (req, res) => {
    // pega do corpo da requisição os dados enviados pelo usuário
    
    const { clienteid, quartoid, checkin, checkout } = req.body;
// procura no array 'clientes' o cliente que tem o id igual ao que foi enviado
    // se não encontrar, retorna erro
    const clienteEncontrado = clientes.find(c => c.id == clienteid);

    if (!clienteEncontrado) {
        return res.status(400).send({ message: "Cliente não encontrado" }).end();
    }
     // procura no array 'quartos' o quarto que tem o id igual ao enviado
    const quartoEncontrado = quartos.find(q => q.id == quartoid);
    if (!quartoEncontrado) {
        return res.status(400).send({ message: "Quarto não encontrado" }).end();
    }
    
    // verifica se o quarto está ocupado

    if (quartoEncontrado.status === "ocupado") {
        return res.status(400).send({ message: "Quarto ocupado" }).end();
    }
     // verifica se a data de check-in enviada não é no passado
    const hoje = new Date();// data atual
    const dataCheckin = new Date(checkin);// converte string para objeto Date
    
    if (dataCheckin < hoje) {
        return res.status(400).send({ message: "Data de check-in inválida" }).end();
    }
    // verifica se a data de check-in não é maior que 6 meses no futuro
    const seisMeses = new Date();
    seisMeses.setMonth(seisMeses.getMonth() + 6);// adiciona 6 meses à data atual
    
    if (dataCheckin > seisMeses) {
        return res.status(400).send({ message: "Data de check-in inválida" }).end();
    }
    // não aceita que o cliente envie checkout ao criar a reserva
    if (checkout) {
        return res.status(400).send({ message: "Check-out só deve ser definido quando o cliente sair." }).end();
    }
// cria o objeto reserva
    const reserva = {
        id: reservas.length + 1,
        clienteid: clienteEncontrado.id,
        quartoid: quartoEncontrado.id,
        checkin: checkin,
        checkout: null
    };
     // adiciona a reserva no array 'reservas'
    reservas.push(reserva);

    // marca o quarto como ocupado
    quartoEncontrado.status = "ocupado";

// envia a resposta com a reserva criada
    res.status(201).send(reserva).end();
};

const atualizar = (req, res) => {
    const reservaid = req.params.reservaid; // pega o id da rota (/reservas/:reservaid/checkout)

    // procura a reserva no array de reservas com o id informado
    // usamos "==" para permitir comparar string e número sem erro
    const reserva = reservas.find(r => r.id == reservaid);
    
    // se não encontrou a reserva, retorna erro 400
    if (!reserva) {
        return res.status(400).send({ message: "Reserva não encontrada" }).end();
    }

    // pega a data de check-out enviada pelo usuário no corpo da requisição
    const { checkout } = req.body;

    // se não enviou a data, retorna erro
    if (!checkout) {
        return res.status(400).send({ message: "É necessário enviar a data de check-out" }).end();
    }

    // transforma a string enviada em objeto Date
    const dataCheckout = new Date(checkout);

    // transforma a data de check-in em Date para validar
    const dataCheckin = new Date(reserva.checkin);

    // valida se o check-out não é antes do check-in
    if (dataCheckout < dataCheckin) {
        return res.status(400).send({ message: "Check-out não pode ser antes do check-in" }).end();
    }

    // atualiza o check-out da reserva com a data enviada
    reserva.checkout = dataCheckout;

    // procura o quarto relacionado a essa reserva
    const quartoEncontrado = quartos.find(q => q.id == reserva.quartoid);

    // se encontrou o quarto, altera o status para "vago"
    if (quartoEncontrado) {
        quartoEncontrado.status = "vago";
    }

    // envia mensagem de sucesso e retorna a reserva atualizada
    res.send({ message: "Check-out realizado com sucesso", reserva }).end();
};

module.exports = {
    listar,
    cadastrar,
    atualizar
};
