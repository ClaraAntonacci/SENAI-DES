let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

document.addEventListener("DOMContentLoaded", renderizarTabela);

function abrirModal(){
document.getElementById("modal").style.display = "block";
}

function fecharModal(){
document.getElementById("modal").style.display = "none";
limparCampos();
}

function salvarFilme(){

const nome = document.getElementById("nome").value.trim();
const ano = document.getElementById("ano").value;
const diretor = document.getElementById("diretor").value.trim();
const genero = document.getElementById("genero").value;
const imagem = document.getElementById("imagem").value;

if(!nome){
alert("Nome do filme obrigatório!");
return;
}

const novoFilme = {
id: Date.now(),
nome,
ano,
diretor,
genero,
imagem
};

filmes.push(novoFilme);

atualizarLocalStorage();
renderizarTabela();
fecharModal();
}

function renderizarTabela(lista = filmes){

const tabela = document.getElementById("dados");
tabela.innerHTML = "";

lista.forEach(filme => {

tabela.innerHTML += `
<tr>

<td><img src="${filme.imagem}" width="60"></td>

<td>${filme.nome}</td>

<td>${filme.ano}</td>

<td>${filme.diretor}</td>

<td>${filme.genero}</td>

<td>
<button onclick="excluirFilme(${filme.id})">Excluir</button>
</td>

</tr>
`;

});

}

function excluirFilme(id){

if(!confirm("Deseja excluir o filme?")) return;

filmes = filmes.filter(filme => filme.id !== id);

atualizarLocalStorage();
renderizarTabela();
}

function atualizarLocalStorage(){
localStorage.setItem("filmes", JSON.stringify(filmes));
}

function limparCampos(){

document.getElementById("nome").value = "";
document.getElementById("ano").value = "";
document.getElementById("diretor").value = "";
document.getElementById("genero").value = "";
document.getElementById("imagem").value = "";

}

function filtrarGenero(){

const generoSelecionado = document.getElementById("filtroGenero").value;

if(generoSelecionado === "todos"){
renderizarTabela();
return;
}

const filtrados = filmes.filter(filme => filme.genero === generoSelecionado);

renderizarTabela(filtrados);

}