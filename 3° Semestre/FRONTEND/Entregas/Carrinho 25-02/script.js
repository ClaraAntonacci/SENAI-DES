const produtos = [
{ id:1, nome:"Camiseta Geek", preco:59.9, img:"https://m.media-amazon.com/images/I/51LFLBN8C3L._AC_SX569_.jpg"},
{ id:2, nome:"Mouse Gamer", preco:120, img:"https://m.media-amazon.com/images/I/51sg9BLSMTL._AC_SY300_SX300_QL70_ML2_.jpg"},
{ id:3, nome:"Teclado RGB", preco:250, img:"https://http2.mlstatic.com/D_NQ_NP_2X_978149-MLB72387881489_102023-F.webp"},
{ id:4, nome:"Headset Pro", preco:199, img:"https://m.media-amazon.com/images/I/61Vu8zV3QUL._AC_SY300_SX300_QL70_ML2_.jpg"},
{ id:5, nome:"Caneca Nerd", preco:35, img:"https://m.media-amazon.com/images/I/61n3LWgtQ5L._AC_SY300_SX300_QL70_ML2_.jpg"},
{ id:6, nome:"Action Figure", preco:89, img:"https://m.media-amazon.com/images/I/71ERn1X-wOL._AC_SY300_SX300_QL70_ML2_.jpg"},
{ id:7, nome:"Controle PS5", preco:300, img:"https://a-static.mlcdn.com.br/420x420/controle-sony-dualsense-ps5-sem-fio-midnight-black-3006452/kabum/161471/aa05d6224805eb94179903afaa3aaa99.jpeg"},
{ id:8, nome:"Cadeira Gamer", preco:999, img:"https://m.media-amazon.com/images/I/51hUCYlmTfL._AC_SY300_SX300_QL70_ML2_.jpg"},
{ id:9, nome:"Tapete Mouse", preco:45, img:"https://http2.mlstatic.com/D_NQ_NP_2X_999829-MLU72340857110_102023-F.webp"},
{ id:10, nome:"Luminária LED", preco:70, img:"https://http2.mlstatic.com/D_NQ_NP_2X_609430-MLB74306521280_022024-F.webp"}
];

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const container = document.querySelector("#produtos");

produtos.forEach(p=>{
container.innerHTML += `
<div class="card">
<img src="${p.img}">
<h3>${p.nome}</h3>
<p>R$ ${p.preco.toFixed(2)}</p>
<button onclick="adicionar(${p.id})">Add ao carrinho</button>
</div>
`;
});

function adicionar(id){
let item = carrinho.find(p => p.id == id);

if(item){
    item.qtd++;
}else{
    const produto = produtos.find(p => p.id == id);
    carrinho.push({...produto, qtd:1});
}

salvar();
}

function salvar(){
localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function abrirCarrinho(){
document.querySelector("#modalCarrinho").style.display="block";
renderizarCarrinho();
}

function fecharCarrinho(){
document.querySelector("#modalCarrinho").style.display="none";
}

function renderizarCarrinho(){
const lista = document.querySelector("#listaCarrinho");
lista.innerHTML="";
let total=0;

carrinho.forEach((p,i)=>{
total += p.preco * p.qtd;

lista.innerHTML += `
<tr>
<td>${p.nome}</td>
<td>
<button onclick="alterar(${i},-1)">-</button>
${p.qtd}
<button onclick="alterar(${i},1)">+</button>
</td>
<td>R$ ${(p.preco*p.qtd).toFixed(2)}</td>
</tr>
`;
});

document.querySelector("#total").innerText =
"Total: R$ " + total.toFixed(2);
}

function alterar(i,valor){
carrinho[i].qtd += valor;

if(carrinho[i].qtd <= 0){
    carrinho.splice(i,1);
}

salvar();
renderizarCarrinho();
}

function finalizarPedido(){
carrinho=[];
localStorage.removeItem("carrinho");
renderizarCarrinho();
fecharCarrinho();
alert("Pedido realizado!");
}