// CREATE DATABASE Saberinfinito;

// use saberinfinito;

// CREATE TABLE livros(
//     id INTEGER AUTO_INCREMENT PRIMARY KEY,
//     titulo VARCHAR(100),
//     autor VARCHAR(100),
//     ano VARCHAR(50)
// );

// use saberinfinito;

// CREATE TABLE leitor(
//     id INTEGER AUTO_INCREMENT PRIMARY KEY,
//     nome VARCHAR(100),
//     email VARCHAR(100),
//     senha VARCHAR(100)
// );


// CREATE TABLE emprestimos(
//   id INTEGER 
//   AUTO_INCREMENT PRIMARY KEY, 
//   data_emprestimo DATE,
//   data_devolucao DATE,
//   livros_id INTEGER,
//   leitor_id INTEGER, 
//   FOREIGN KEY (livros_id) REFERENCES livros(id), 
//   FOREIGN KEY (leitor_id) REFERENCES leitor(id) 
// );

// INSERT INTO livros VALUES
// (DEFAULT, "O pequeno principe", "fulano", "1990"),
// (DEFAULT, "Dom Casmurro", "Machado de Assis", "1899"),
// (DEFAULT, "1984", "George Orwell", "1949"),
// (DEFAULT, "A Revolução dos Bichos", "George Orwell", "1945"),
// (DEFAULT, "O Hobbit", "J.R.R. Tolkien", "1937"),
// (DEFAULT, "Senhor dos Anéis: A Sociedade do Anel", "J.R.R. Tolkien", "1954"),
// (DEFAULT, "Harry Potter e a Pedra Filosofal", "J.K. Rowling", "1997"),
// (DEFAULT, "Cem Anos de Solidão", "Gabriel García Márquez", "1967"),
// (DEFAULT, "O Alquimista", "Paulo Coelho", "1988"),
// (DEFAULT, "O Código Da Vinci", "Dan Brown", "2003"),
// (DEFAULT, "A Menina que Roubava Livros", "Markus Zusak", "2005"),
// (DEFAULT, "It: A Coisa", "Stephen King", "1986"),
// (DEFAULT, "Orgulho e Preconceito", "Jane Austen", "1813"),
// (DEFAULT, "O Morro dos Ventos Uivantes", "Emily Brontë", "1847"),
// (DEFAULT, "A Metamorfose", "Franz Kafka", "1915");

// INSERT INTO leitor VALUES
// (DEFAULT, "Fulano", "fulano@gmail.com", "12345"),
// (DEFAULT, "Ciclano", "ciclano@gmail.com", "98765"),
// (DEFAULT, "Beltrano", "beltrano@gmail.com", "45678"),
// (DEFAULT, "Ana Silva", "ana.silva@gmail.com", "21999998888"),
// (DEFAULT, "João Pereira", "joao.pereira@gmail.com", "21987654321"),
// (DEFAULT, "Maria Oliveira", "maria.oliveira@gmail.com", "21988776655"),
// (DEFAULT, "Pedro Santos", "pedro.santos@gmail.com", "11999887766"),
// (DEFAULT, "Carla Souza", "carla.souza@gmail.com", "31988776655"),
// (DEFAULT, "Lucas Almeida", "lucas.almeida@gmail.com", "11977665544"),
// (DEFAULT, "Fernanda Costa", "fernanda.costa@gmail.com", "21966554433"),
// (DEFAULT, "Gustavo Lima", "gustavo.lima@gmail.com", "61999990000"),
// (DEFAULT, "Juliana Rocha", "juliana.rocha@gmail.com", "21991112222"),
// (DEFAULT, "Marcos Paulo", "marcos.paulo@gmail.com", "21998887777"),
// (DEFAULT, "Paula Fernandes", "paula.fernandes@gmail.com", "31996665555"),
// (DEFAULT, "Rafael Souza", "rafael.souza@gmail.com", "11995554433");

// INSERT INTO emprestimos VALUES
// (DEFAULT, "2025-10-22", "2025-11-06", 1, 1),
// (DEFAULT, "2025-10-25", "2025-11-09", 2, 3),
// (DEFAULT, "2025-09-30", "2025-10-15", 5, 2),
// (DEFAULT, "2025-10-10", "2025-10-25", 3, 4),
// (DEFAULT, "2025-10-12", "2025-10-30", 6, 5),
// (DEFAULT, "2025-10-15", "2025-10-31", 7, 6),
// (DEFAULT, "2025-10-18", "2025-11-01", 4, 7),
// (DEFAULT, "2025-09-20", "2025-10-05", 8, 8),
// (DEFAULT, "2025-09-25", "2025-10-10", 9, 9),
// (DEFAULT, "2025-10-05", "2025-10-20", 10, 10),
// (DEFAULT, "2025-10-08", "2025-10-23", 11, 11),
// (DEFAULT, "2025-10-11", "2025-10-26", 12, 12),
// (DEFAULT, "2025-10-14", "2025-10-29", 13, 13),
// (DEFAULT, "2025-10-17", "2025-11-01", 14, 14),
// (DEFAULT, "2025-10-20", "2025-11-04", 15, 15);

// USE saberinfinito;

SELECT livros.titulo, leitor.nome FROM emprestimos
INNER JOIN livros ON livros.id = emprestimos.livros_id
INNER JOIN leitor ON leitor.id = emprestimos.leitor_id
WHERE leitor.nome LIKE "%fulano%"


SELECT livros.titulo, leitor.nome, emprestimos.* FROM emprestimos
INNER JOIN livros ON livros.id = emprestimos.livros_id
INNER JOIN leitor ON leitor.id = emprestimos.leitor_id
WHERE data_devolucao < "2025-11-07"

	
SELECT livros.titulo, leitor.nome, emprestimos.* FROM emprestimos
INNER JOIN livros ON livros.id = emprestimos.livros_id
INNER JOIN leitor ON leitor.id = emprestimos.leitor_id WHERE emprestimos.livros_id = 1


SELECT leitor.nome, COUNT(*) AS total_emprestimo FROM emprestimos
INNER JOIN livros ON livros.id = emprestimos.livros_id
INNER JOIN leitor ON leitor.id = emprestimos.leitor_id GROUP BY leitor.id
