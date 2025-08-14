const livros = [
    {
        "Titulo": "Jantar Secreto",
        "Autor": "Raphael Montes",
        "Numero de Paginas": 367,
        "Genero": "Suspense",
        "protagonista": "Dante"
    },
    {
        "Titulo": "A Cabana",
        "Autor": "William P. Young",
        "Numero de Paginas": 240,
        "Genero": "Ficção Religiosa",
        "protagonista": "Mackenzie Allen Phillips"
    },
    {
        "Titulo": "Os Sete Maridos de Evelyn Hugo",
        "Autor": "Taylor Jenkins Reid",
        "Numero de Paginas": 360,
        "Genero": "Romance",
        "protagonista": "Evelyn Hugo"
    },
];

console.log("-----------------------");
livros.forEach((procura) => {
    if (procura.Titulo === "Jantar Secreto") {
        console.log("Livro encontrado:", procura.Titulo);
    }
});

console.log("----------------------");


function removerLivro(titulo) {
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].Titulo === titulo) {
            livros.splice(i, 1);
            console.log("Livro removido.");
            return;
        }
    }
    console.log("Livro não encontrado para remover.");
}
removerLivro("A Cabana");
console.log("--------------------------");

function buscarLivro(titulo) {
    const livro = livros.find(l => l.Titulo === titulo);
    if (livro) {
        console.log("Livro buscado:", livro.Titulo);
    } else {
        console.log("Livro não encontrado.");
    }
}

buscarLivro("Os Sete Maridos de Evelyn Hugo");

console.log("--------------------------");


function alterarAutor(titulo, novoAutor) {
    livros.forEach(livro => {
        if (livro.Titulo === titulo) {
            livro.Autor = novoAutor;
           console.log("Autor alterado.");
           console.log("Autor:" + novoAutor);
        }
    });
}
alterarAutor("Jantar Secreto", "Novo Autor");


console.log("--------------------------");
    



