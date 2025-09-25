const clientes = require("../data/cliente.data");


const listar = (req, res) => {
    res.send(clientes).end();
};

const buscar = (req,res) =>{
    const cpf = req.params.cpf;

    var user = "";


    clientes.forEach((clientes, index) =>{
        if(clientes.cpf === cpf){
            user = clientes;
        }
    });
    
    if(user === "") user = "Nao Encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) =>{
 
    const data= req.body;
    clientes.push(data);
    res.status(201).send("Cadastrado Com Sucesso").end();
};

// const apagar = (req, res) => {
   
//     const cpf = req.params.cpf;


//     var indice = -1;
   
//     clientes.forEach((cliente, index) => {
//         if(cliente.cpf === cpf){
//             indice = index;
//         }
//     });

//     if(indice === -1){
//         res.status(404).end();
//     }

//     else{
//         clientes.splice(indice, 1);
//         res.status(200).end();
//     }
// };


// const atualizar = (req, res) =>{
//     const user = req.body;
// var encontrei = false;

//     clientes.forEach((cliente, index) =>{
//         if(cliente.cpf === user.cpf){
//             clientes[index] = user; 
//             encontrei = true;
//         }
//     });

//     if(encontrei === false){
//         res.status(404).end();
//     }else{
//         res.status(201).end();
//     }
    
// };

// const alterar = (req, res) =>{
//     const cpf = req.params.cpf;
//     const userUpdate = req.body; 
    
    
//     var indice = -1; 

//     clientes.forEach((cliente, index) =>{
//         if(cliente.cpf === cpf){
//             indice = index; 
//         }
//     });

//     if(indice === -1){
//         res.status(404).end();
//     }else{
    
//     Object.keys(userUpdate).forEach((chave) =>{
        
//         clientes[indice][chave] = userUpdate[chave];
//     });
//     res.status(200).end();
//   }
// };

module.exports = {
    listar,
    buscar,
    cadastrar
    // apagar,
    // atualizar,
    // alterar
};