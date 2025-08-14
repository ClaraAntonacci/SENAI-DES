
//cadastrar livros

// Localizar um livro por título
// Remover um livro por título
// Buscar um livro por título
// Alterar o autor de um livro por título





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


livros.forEach((livro) => {

   if (livro.Titulo === "Jantar Secreto") {
        console.log (livro);
    }
});
livros.forEach((livro,i) =>{
    if(livro.Titulo === "Jantar Secreto") {
        livros.splice(i, 1);
}
});

var novo = {
    titulo : "livro 3",
    autor : "autor Beltrano",
};

livros.push(novo);

livros.forEach((livro) => {
    if (livro.Titulo === "Jantar Secreto") {
     livro.Autor = "Novo Autor";
    }
});
console.log(livros);



