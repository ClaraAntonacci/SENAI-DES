const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "locadora"
});

module.exports = connection;


/*
host -> Endereço do banco de dados
usuario -> Usuari do banco de dados
password -> Senha do usuario
database -> Base de dados
*/