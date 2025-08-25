CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE suarios(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100),
nascimento DATE
);

use biblioteca;

CREATE TABLE livros(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(100) NOT NULL,
autor VARCHAR(100) NOT NULL,
publicacao VARCHAR(4)
);

use biblioteca;


CREATE TABLE emprestimos(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
usuarioid INTEGER,
livroid INTEGER,
data_empresitimo DATE,
data_devolucao DATE,
FOREIGN KEY (usuarioid) REFERENCES usuarios(id),
FOREIGN KEY (livroid) REFERENCES livros(id)
);
use biblioteca;

INSERT INTO usuarios 
VALUES (DEFAULT, "Fulano da Silva","fulaninho.da.silva@gmail.com", "2000-05-20");

use biblioteca;

INSERT INTO usuarios 
VALUES (DEFAULT, "Beltrano de Costa","belbel.de.Costa@gmail.com", "1990-04-13");

use biblioteca;

INSERT INTO usuarios 
VALUES (DEFAULT, "Luiza Corazin","lulu.Corazin@gmail.com", "2008-07-23");

SELECT * FROM usuarios;

SELECT * FROM `usuarios` WHERE id = 2;

use biblioteca;

INSERT INTO livros
VALUES (DEFAULT, "Jantar Secreto", "Raphael Montes", "2016");

use biblioteca;

INSERT INTO livros
VALUES (DEFAULT, "Suicidas", "Raphael Montes", "2009");

use biblioteca;

INSERT INTO livros
VALUES (DEFAULT, "Uma Familia Feliz", "Raphael Montes", "2020");

SELECT * FROM livros WHERE 1;

SELECT titulo, publicacao FROM livros WHERE id = 3;

use biblioteca;

INSERT INTO emprestimos
VALUES (DEFAULT, "1", "2", "2025-08-25", "2025-09-25");

INSERT INTO emprestimos
VALUES (DEFAULT, "3", "1", "2025-08-15", "2025-09-15");


SELECT * FROM emprestimos WHERE 1;

SELECT usuarioid, data_empresitimo FROM emprestimos;

use biblioteca;
UPDATE emprestimos
SET data_devolucao = "2025-09-29"
WHERE id = 1;

SELECT * FROM emprestimos WHERE id = 1;

DELETE FROM usuarios
WHERE id = 2;

SELECT * FROM usuarios WHERE 1;

SELECT * FROM usuarios WHERE id = 2;


