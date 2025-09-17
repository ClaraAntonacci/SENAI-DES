//importa o array de usuários (mesmo objeto em memória).
const usuarios = require("../data/usuarios.data");

// Define função utilizada na rota
//req -> Request (requisição)
// res -> Response (Resposta)

//Envia o array usuarios na resposta 
//  res.send() define o corpo da resposta e já finaliza;
const listar = (req, res) => {
    // res.send(usuarios) - Envia o conteúdo de usuarios como resposta.
    // .end() - Finaliza a resposta.
    res.send(usuarios).end();
};

const buscar = (req,res) =>{
    //Lê matricula de req.params.
    const matricula = req.params.matricula;

    var user = "";// começa dizendo: "não achei ninguém ainda"

//Percorre o array com forEach
    usuarios.forEach((usuarios, index) =>{
        if(usuarios.matricula === matricula){//se encontrar matricula igual
            user = usuarios;// guarda o usuário encontrado
        }
    });
    //Se não encontrar, retorna a string "Nao Encontrado"
    if(user === "") user = "Nao Encontrado";

    res.send(user).end();//Envia a resposta
};

const cadastrar = (req, res) =>{
 
    const data= req.body;//Lê o objeto enviado no corpo da requisição
    usuarios.push(data);//Adiciona esse objeto ao array de usuários
    res.status(201).send("Cadastrado Com Sucesso").end();//Retorna status 201 (Created) e mensagem de sucesso.
};

const apagar = (req, res) => {
   //Lê a matrícula que veio na URL
    const matricula = req.params.matricula;


    var indice = -1;// começa dizendo: "ainda não achei ninguém"

   //Percorre o array procurando a matrícula
    usuarios.forEach((usuario, index) => {//index é a posição desse objeto no array
        if(usuario.matricula === matricula){
            indice = index;// se achar, guarda a posição onde encontrou
        }
    });
//se não achou, indice continua -1 e da erro 404
    if(indice === -1){
        res.status(404).end();
    }
//se achou, remove o (usuario) item do array (splice) e retorna status 200 (OK).
    else{
        usuarios.splice(indice, 1);
        res.status(200).end();
    }
};


const atualizar = (req, res) =>{
    const user = req.body;// pega o que veio na requisição (o novo usuário)
    
var encontrei = false;// começa assumindo que não encontrou

    usuarios.forEach((usuario, index) =>{
        if(usuario.matricula === user.matricula){
            usuarios[index] = user; // substitui o usuário antigo pelo novo
            encontrei = true;// marca que achou
        }
    });

    if(encontrei === false){
        res.status(404).end();// se não achou, responde "404 - não encontrado"
    }else{
        res.status(201).end();//// se achou e atualizou, responde "201 - criado/atualizado"
    }
    
};

const alterar = (req, res) =>{
    const matricula = req.params.matricula;// pega a matrícula que veio pela URL
    const userUpdate = req.body; // pega os novos dados enviados no corpo
    
    
    var indice = -1; // começa assumindo que não encontrou

    usuarios.forEach((usuario, index) =>{
        if(usuario.matricula === matricula){
            indice = index; // guarda o índice se achou a matrícula
        }
    });

    if(indice === -1){
        res.status(404).end();// não achou → responde "404 Not Found"
    }else{
    // percorre cada chave do objeto enviado e atualiza só o campo correspondente
    //"Object.keys(userUpdate)" - pega todas as chaves do objeto enviado no req.body.
    Object.keys(userUpdate).forEach((chave) =>{
        //Para cada chave, ele faz:
        usuarios[indice][chave] = userUpdate[chave];
    });
    res.status(200).end();// sucesso → responde "200 OK"
  }
};
//Quero disponibilizar essas coisas para serem usadas em outro arquivo
module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    atualizar,
    alterar
};