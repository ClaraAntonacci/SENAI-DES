const pedidos= [
    {
        "id": "1",
        "produtoid": "123",
        "clientecpf": "123456",
        "quantidade": "2",
        "data": "2025-09-18",
        "status": "pendente"
    },
    {
        "id": "2",
        "produtoid": "321",
        "clientecpf": "654321",
        "quantidade": "1",
        "data": "2025-09-15",
        "status": "enviado"
    },
    {
        "id": "3",
        "produtoid": "456",
        "clientecpf": "789123",
        "quantidade": "3",
        "data": "2025-09-11",
        "status": "entregue"
    }
]
module.exports = pedidos;



// // Esse pedido
// deve indicar qual cliente comprou, qual foi o produto comprado, a quantidade e a data da
// compra.