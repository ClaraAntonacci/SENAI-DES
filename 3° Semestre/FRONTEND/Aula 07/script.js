const url = 'https://receitasapi-b-2025.vercel.app/';

// const baseUrl = "http://localhost:3000/";

// fetch(`${baseUrl}/eventos/cadastrar`)

const receitas = [];


getReceitas();

function getReceitas() {
    fetch(`${url}receitas`)
        .then(response => response.json())
        .then(data => {
            receitas.length = 0; 
            data.forEach(receita => {
                receitas.push(receita);
            });
            renderReceitas();
        })
        .catch(error => console.log(error));
}


function renderReceitas() {
    const main = document.querySelector('main');

    receitas.forEach(r => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${r.img}" alt="${r.nome}">
            <h2>${r.nome}</h2>
            <p>${r.ingredientes}</p>
            <p>${r.modoFazer}</p>
        `;

        main.appendChild(card);
    });
}


function abrirModal(){
    document.getElementById("modal").style.display = "block";
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
}

function salvarReceita(){
    const nome = document.getElementById("nome").value;
    const img = document.getElementById("img").value;
    const ingredientes = document.getElementById("ingredientes").value;
    const modoFazer = document.getElementById("modoFazer").value;

    const nova = {
        nome,
        img,
        ingredientes,
        modoFazer
    };

    receitas.push(nova);

    document.querySelector('main').innerHTML = ""; 
    renderReceitas();

    fecharModal();
}