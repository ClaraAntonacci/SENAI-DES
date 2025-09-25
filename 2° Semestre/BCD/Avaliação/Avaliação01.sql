CREATE DATABASE lojaa;

use lojaa;
CREATE TABLE clientes(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)  
);

use lojaa;
CREATE TABLE pedidos(
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     clientes_id INTEGER,
     data_pedido DATE,
     status VARCHAR(50),
     FOREIGN KEY (clientes_id) REFERENCES clientes(id)
);

use lojaa;
INSERT INTO clientes
VALUES (DEFAULT, "Julia Novo","julia.novo@gmail.com");

use lojaa;
INSERT INTO clientes
VALUES (DEFAULT, "Luiza Amaral","luiza.amaral@gmail.com");

use lojaa;
INSERT INTO clientes
VALUES (DEFAULT, "Giovana Correa","giovana.correa@gmail.com");

use lojaa;
INSERT INTO pedidos
VALUES (DEFAULT, "1","2025-09-15", "pendente");

use lojaa;
INSERT INTO pedidos
VALUES (DEFAULT, "2","2025-08-10", "entregue");

use lojaa;
INSERT INTO pedidos
VALUES (DEFAULT, "3","2025-09-09", "entregue");

UPDATE clientes
SET email = 'julinha.novo@gmail.com' 
WHERE id =1 ;

DELETE FROM pedidos WHERE id = 1;