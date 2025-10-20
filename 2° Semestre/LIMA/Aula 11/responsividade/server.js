const menu = document.querySelector("#menu");

menu.addEventListener("click", function(){
    const nav = document.querySelector("nav");

    const leftNav = nav.style.left;

    if(leftNav === "" || leftNav === "-200px"){
        nav.style.left = "0";
    }else{
        nav.style.left = "-200px";
    } 
});

const content = document.querySelector(".content");
const box = document.querySelector(".box");

const produtos = [
    {
        img:"https://cdn.awsli.com.br/800x800/541/541574/produto/231667837/img--1--zznxhijyav.png",
        nome:"Veja Gold",
        valor:14.99
    },
    {
        img:"https://eu-images.contentstack.com/v3/assets/blt9ca8222b5acaa556/blt87b4c392963ed6e1/65f9ad71400b4a040ae7a683/banner-head-products-(2)_(1).png?width=460&height=610&format=png&quality=80",
        nome:"Quite desinfetante",
        valor:35.50
    },
    {
        img:"https://eu-images.contentstack.com/v3/assets/blt9ca8222b5acaa556/blt6628a973380884d4/65f9a7ce232a08040738ce96/banner-head-products.png?width=460&height=610&format=png&quality=80",
        nome:"Quite multiuso",
        valor:40.00
    }

];
produtos.forEach((produto) =>{
    let novoCartao = box.cloneNode(true);

    novoCartao.querySelector("img").src = produto.img;
    novoCartao.querySelector("#nome").innerHTML = produto.nome;
    novoCartao.querySelector("#valor").innerHTML = "R$" + produto.valor;

    content.appendChild(novoCartao);
});

const busca = document.querySelector("#buscar");

busca.addEventListener("keyup", () =>{
    content.childNodes.forEach((node) => {
        let conteudo = node.innerHTML;
        if(conteudo) {
            if(conteudo.toLowerCase().includes(busca.value.toLowerCase())){
                node.style.display = "block";
            }else{
                node.style.display = "none";
            }
        }
    });
});
