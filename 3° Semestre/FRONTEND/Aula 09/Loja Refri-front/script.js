const url = 'http://localhost:3000';

const produtos = [];
let produtoAtual = null;

const modal = document.getElementById('product-modal');
const cadastro = document.getElementById('add-modal');

carregarProdutos();

function carregarProdutos(){
    fetch(url + '/produtos/listar')
    .then(response => response.json())
    .then(data =>{
        produtos.length = 0;
        produtos.push(...data);
        listarCards();
    })
    .catch(() => alert('Problemas com a conexão da API'));
}

function listarCards(){
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    produtos.forEach(produto =>{
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <h3>${produto.nome}</h3>
            <img src="${produto.imagem}" alt="${produto.nome}">
            <p>R$ ${produto.preco}</p>
            <span class="trash-icon">🗑️</span>
        `;

        card.onclick = () => abrirProduto(produto);

        card.querySelector('.trash-icon').addEventListener('click', (e) => {
            e.stopPropagation();
            excluirProduto(produto.id);
        });

        container.appendChild(card);
    });
}

document.getElementById('search-bar').addEventListener('input', function(){
    const valor = this.value.toLowerCase();

    const filtrados = produtos.filter(p =>
        p.nome.toLowerCase().includes(valor)
    );

    const container = document.getElementById('products-container');
    container.innerHTML = '';

    filtrados.forEach(produto =>{
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <h3>${produto.nome}</h3>
            <img src="${produto.imagem}">
            <p>R$ ${produto.preco}</p>
        `;

        card.onclick = () => abrirProduto(produto);
        container.appendChild(card);
    });
});

function abrirProduto(produto){
    produtoAtual = produto;

    document.getElementById('modal-title').innerText = produto.nome;
    document.getElementById('modal-image').src = produto.imagem;

    document.getElementById('nomeEdit').value = produto.nome;
    document.getElementById('descricaoEdit').value = produto.descricao;
    document.getElementById('precoEdit').value = produto.preco;
    document.getElementById('tipoEdit').value = produto.tipo;
    document.getElementById('imagemEdit').value = produto.imagem;

    modal.style.display = 'flex';
}

const btnClose = document.querySelector('.close');
if(btnClose){
    btnClose.onclick = () => {
        modal.style.display = 'none';
    };
}

window.onclick = (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
};

document.getElementById('add-product-btn').onclick = () => {
    cadastro.style.display = 'flex';
};

const btnCloseAdd = document.querySelector('.close-add');
if(btnCloseAdd){
    btnCloseAdd.onclick = () => {
        cadastro.style.display = 'none';
    };
}

document.getElementById('cancelar').onclick = () => {
    cadastro.style.display = 'none';
};

document.getElementById('salvar-produto').onclick = function(){

    const nome = document.getElementById('add-nome').value.trim();
    const descricao = document.getElementById('add-descricao').value.trim();
    const preco = document.getElementById('add-preco').value;
    const tipo = document.getElementById('add-tipo').value.trim();
    const imagem = document.getElementById('add-imagem').value.trim();

    // VALIDAÇÃO
    if (!nome || !descricao || !preco || !tipo || !imagem) {
        alert('Preencha todos os campos!');
        return; // interrompe aqui
    }

    const novoProduto = {
        nome,
        descricao,
        preco: Number(preco),
        tipo,
        imagem
    };

    fetch(url + '/produtos/cadastrar', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
    })
    .then(()=>{
        alert('Produto cadastrado!');
        cadastro.style.display = 'none';
        carregarProdutos();
    })
    .catch(()=> alert("Erro ao cadastrar"));
};

document.getElementById('update-btn').onclick = function(){

    if(!produtoAtual) return;

    const produtoEditado = {
        nome: document.getElementById('nomeEdit').value,
        descricao: document.getElementById('descricaoEdit').value,
        preco: Number(document.getElementById('precoEdit').value),
        tipo: document.getElementById('tipoEdit').value,
        imagem: document.getElementById('imagemEdit').value
    };

    fetch(url + '/produtos/atualizar/' + produtoAtual.id, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtoEditado)
    })
    .then(()=>{
        alert("Produto atualizado!");
        modal.style.display = 'none';
        carregarProdutos();
    })
    .catch(()=> alert("Erro ao editar"));
};

function excluirProduto(id){
    if(!confirm("Deseja excluir este produto?")) return;

    fetch(url + '/produtos/excluir/' + id,{
        method: 'DELETE'
    })
    .then(()=>{
        alert("Produto excluído!");
        carregarProdutos();
    })
    .catch(()=> alert("Erro ao excluir"));
}
