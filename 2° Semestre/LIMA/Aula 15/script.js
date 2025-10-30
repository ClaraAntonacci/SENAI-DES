const lista = document.getElementById('lista-filmes');
const form = document.getElementById('form-filme');

let filmes =[...filmesIniciais];

function renderFilmes(){
    lista.innerHTML = '';
    filmes.forEach((f) => {
        const card = document.createElement('div');
        card.className = "card";

        card.innerHTML = `
        <div class="media-conteiner"> <img src= "${f.capa} alt="${f.nome}" class="poster"></div>
        <h3 class="titulo">${f.nome}</h3>
        <p><strong>Ano:</strong> ${f.ano}</p>
        <p><strong>Categoria:</strong> ${f.categoria}</p>
        <p class ="estrelas">${"★". repeat(f.estrelas)}${"☆".repeat(5-f.estrelas)}</p>`;

        const midiaContainer = card.querySelector('.media-conteiner');

        card.addEventListener('mouseenter', () => {
        if (f.trailer) {
            midiaContainer.innerHTML = `<iframe width="100%" height="100%" src="${f.trailer}? atoplay=18 mute=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        }
    });

    card.addEventListener('mouseleave', () => {
        mediaContainer.innerHTML = `<img src="${f.capa}" alt="${f.nome}" class="poster">`;
    });
    lista.appendChild(card);
    })
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const novoFilme = {
        capa: document.getElementById('capa').value.trim(),
        nome: document.getElementById('nome').value.trim(),
        ano: parseInt(document.getElementById('ano').value),
        categoria: document.getElementById('categoria').value.trim(),
        estrelas: parseInt(document.getElementById('estrelas').value),
        trailer: document.getElementById('trailer').value.trim()
    };

    filmes.push(novoFilme);
    renderFilmes();
    form.reset();
});

renderFilmes();