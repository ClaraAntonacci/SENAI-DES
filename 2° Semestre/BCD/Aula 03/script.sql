Base Banco de dados

//ta usando a base loja
USE loja;

//ta criando a tabela usuarios
CREATE TABLE Usuarios(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(160),
    nascimento DATE,
    endereco VARCHAR(100),
    telefone VARCHAR(11)
);

//ta criando a segunda tabela 
CREATE TABLE Pedidos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    clienteid INTEGER, 
    datahora DATETIME,
    nomeProduto VARCHAR(50),
    valor DECIMAL(4,3),
    FOREIGN KEY (clienteid) REFERENCES Usuarios(id)
    
);

//ta inserindo na tabela usuários os valores
INSERT INTO usuarios 
VALUES (DEFAULT, "Fulano da Silva", "2000-05-20", "Rua Sem Saida, 120", "1191234768");

//vai aparecer todos os dados dessa tabela
SELECT * FROM usuários;

//vai aparecer so o nome e o enderço
SELECT nome, endereco FROM usuarios;

//Atualizando a data de nasciemnto
UPDATE usuarios
SET nascimento = "1990-05-25"
WHERE id = 1;

//apaga uma informação
DELETE FROM usuarios
WHERE id = 1;