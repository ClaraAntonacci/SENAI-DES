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
    let diasAtraso = Number(document.getElementById('dias').value);
    let resultado = document.getElementById('resultado');
    let multa= 0;

    if(diasAtraso > 0){
        multa = mensalidade * (2 / 100);
    }

    let precoFinal = mensalidade + multa;

    resultado.innerHTML = 
    `Multa de R$ ${multa.toFixed(2)} <br>Preço Final R$ ${precoFinal.toFixed(2)}`;
}

function calcularCashback(){
    let valorCompra = Number(document.getElementById('valorCompra').value);
    let resultado = document.getElementById('resultado');
    let conta = 0;
    let cashback = 0;

    if(valorCompra > 300){
        conta = valorCompra * (5 / 100);
    }
    cashback = valorCompra - conta;

    resultado.innerHTML = 
    `Cashback de R$ ${conta.toFixed(2)} <br>Valor liquido R$ ${cashback.toFixed(2)}`;
}   