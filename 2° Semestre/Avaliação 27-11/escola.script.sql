CREATE DATABASE escola;

USE escola;

CREATE TABLE alunos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    turma VARCHAR(100) NOT NULL
);

CREATE TABLE equipamentos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL
);

CREATE TABLE locacoes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_locacao DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    id_aluno INTEGER NOT NULL,
    id_equipamento INTEGER NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES alunos(id),
    FOREIGN KEY (id_equipamento) REFERENCES equipamentos(id)
);

INSERT INTO alunos VALUES
(DEFAULT, 'Ana Souza', '8A'),
(DEFAULT, 'Bruno Pereira', '9B'),
(DEFAULT, 'Carla Matos', '7A'),
(DEFAULT, 'Diego Silva', '8B'),
(DEFAULT, 'Eduarda Ramos', '9A');

INSERT INTO equipamentos VALUES
(DEFAULT, 'Bola de Futebol', 'Bola', 10),
(DEFAULT, 'Bola de Basquete', 'Bola', 6),
(DEFAULT, 'Cone de Treino', 'Acessório', 20),
(DEFAULT, 'Rede de Vôlei', 'Rede', 2),
(DEFAULT, 'Coletes', 'Uniforme', 15);

INSERT INTO locacoes VALUES
(DEFAULT, '2025-02-01', '2025-02-01', 1, 1),
(DEFAULT, '2025-02-02', '2025-02-03', 2, 3),
(DEFAULT, '2025-02-03', '2025-02-03', 3, 2),
(DEFAULT, '2025-02-04', '2025-02-05', 4, 5),
(DEFAULT, '2025-02-04', '2025-02-04', 5, 4);