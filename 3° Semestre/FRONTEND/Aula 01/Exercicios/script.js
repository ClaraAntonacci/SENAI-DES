function calcularBonus(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;

    if(salario > 2000){
        bonus = salario * (10 / 100);
    }

    let salarioFinal = salario + bonus;

    resultado.innerHTML = 
    `Bonus de R$ ${bonus.toFixed(2)} <br>Preço Final R$ ${salarioFinal.toFixed(2)}`;
}

function calcularFrete(){
    let valorCompra = Number(document.getElementById('valorCompra').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;

    if(valorCompra >= 150){
        frete =  0; 
    } else if(valorCompra < 150) {
        frete = 20; 
    }

    let precoFinal = valorCompra + frete;

    resultado.innerHTML = 
    `Valor do frete: R$ ${frete.toFixed(2)} <br>Valor total da compra: R$ ${precoFinal.toFixed(2)}`;
}

function calcularDesconto(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(valor > 200){
        desconto = valor * (5 / 100);
    }

    let precoFinal = valor- desconto;

    resultado.innerHTML = 
    `Desconto de R$ ${desconto.toFixed(2)} <br>Preço Final R$ ${precoFinal.toFixed(2)}`;
}

function calcularTaxa(){
    let valorConta = Number(document.getElementById('conta').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;

    if(valorConta > 100){
        taxa = valorConta * (10 / 100);
    }else if(valorConta < 100){
        taxa = 0;
    }

    let precoFinal = valorConta + taxa;

    resultado.innerHTML = 
    `Taxa R$ ${taxa.toFixed(2)} <br>Preço Final R$ ${precoFinal.toFixed(2)}`;
}

function calcularMulta(){
    let mensalidade = Number(document.getElementById('mensalidade').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(preco > 2500){
        desconto = preco * (15 / 100);
    }else if(preco > 2000){
        desconto = preco * (10 / 100);
    }else if (preco > 1000){
        desconto = preco * (8 / 100);
    }

    let precoFinal = preco - desconto;

    resultado.innerHTML = 
    `Desconto de R$ ${desconto.toFixed(2)} <br>Preço Final R$ ${precoFinal.toFixed(2)}`;
}