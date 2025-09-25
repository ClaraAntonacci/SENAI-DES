CREATE DATABASE bibliotecaa;

use bibliotecaa;
CREATE TABLE usuarios(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)  
);

use bibliotecaa;
CREATE TABLE livros(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    autor VARCHAR(100),
    ano VARCHAR(50)
);

use bibliotecaa;
CREATE TABLE emprestimos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    usuario_id INTEGER,
    livro_id INTEGER,
    data_retirada DATE,
    data_devolucao DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (livro_id) REFERENCES livros(id)
);

use biblioteca;
INSERT INTO usuarios
VALUES (DEFAULT, "Julia Novo","julia.novo@gmail.com");

use bibliotecaa;
INSERT INTO usuarios
VALUES (DEFAULT, "Luiza Amaral","luiza.amaral@gmail.com");

use bibliotecaa;
INSERT INTO usuarios
VALUES (DEFAULT, "Giovana Correa","giovana.correa@gmail.com");

use bibliotecaa;
INSERT INTO livros
VALUES (DEFAULT, "Jantar Secreto","Raphael Montes", "2019");

use bibliotecaa;
INSERT INTO livros
VALUES (DEFAULT, "Suicidas","Raphael Montes", "2016");

use bibliotecaa;
INSERT INTO livros
VALUES (DEFAULT, "Dias Perfeitos","Raphael Montes", "2013");

use bibliotecaa;
INSERT INTO emprestimos
VALUES (DEFAULT, "1","1", "2025-09-15", "");

use bibliotecaa;
INSERT INTO emprestimos
VALUES (DEFAULT, "2","2", "2025-08-15", "");

use bibliotecaa;
INSERT INTO emprestimos
VALUES (DEFAULT, "3","3", "2025-07-09", "");

UPDATE emprestimos
SET data_devolucao = '2025-09-15' 
WHERE id =2 ;