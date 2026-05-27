var jogo =
    document.getElementsByClassName("arena")[0];

var selecao =
    document.getElementsByClassName("resultado-area")[0];

var test =
    document.getElementsByClassName("jogador-escolha")[0];

var test1 =
    document.getElementsByClassName("cpu-escolha")[0];

var resultado =
    document.getElementsByClassName("resultado-texto")[0];

var pontuacao =
    document.getElementsByClassName("pontos")[0];

var playAgain =
    document.getElementsByClassName("centro")[0];



var rennye =
    document.getElementsByClassName("rennye")[0];

var robson =
    document.getElementsByClassName("robson")[0];

var wellifabio =
    document.getElementsByClassName("wellifabio")[0];

var ronaldo =
    document.getElementsByClassName("ronaldo")[0];

var weverton =
    document.getElementsByClassName("weverton")[0];


var refs = [

    rennye,
    robson,
    wellifabio,
    ronaldo,
    weverton

];

var score = 0;



function jogar(num) {

    jogo.style.cssText =
        "animation: opacidade 0.5s linear; animation-direction:reverse;";

    setTimeout(() => {

        jogo.style.display = "none";

    }, 500);


    setTimeout(() => {

        selecao.style.display = "flex";

    }, 500);


    selecao.style.cssText =
        "animation: opacidade 1.5s linear;";



    switch (num) {

        case "rennye":

            test.innerHTML =
                rennye.outerHTML;

            test.value =
                "rennye";

            break;


        case "robson":

            test.innerHTML =
                robson.outerHTML;

            test.value =
                "robson";

            break;


        case "wellifabio":

            test.innerHTML =
                wellifabio.outerHTML;

            test.value =
                "wellifabio";

            break;


        case "ronaldo":

            test.innerHTML =
                ronaldo.outerHTML;

            test.value =
                "ronaldo";

            break;


        case "weverton":

            test.innerHTML =
                weverton.outerHTML;

            test.value =
                "weverton";

            break;
    }



    var random =
        Math.floor(Math.random() * 5);

    var house =
        refs[random];

    test1.innerHTML =
        house.outerHTML;

    test1.value =
        house.classList[1];



    setTimeout(() => {

        Resolucao();

    }, 500);

}



function Resolucao() {

    if (

        (test.value == "rennye"
            &&
            (test1.value == "robson"
                ||
                test1.value == "wellifabio"))

        ||

        (test.value == "robson"
            &&
            (test1.value == "ronaldo"
                ||
                test1.value == "weverton"))

        ||

        (test.value == "wellifabio"
            &&
            (test1.value == "robson"
                ||
                test1.value == "weverton"))

        ||

        (test.value == "ronaldo"
            &&
            (test1.value == "rennye"
                ||
                test1.value == "wellifabio"))

        ||

        (test.value == "weverton"
            &&
            (test1.value == "ronaldo"
                ||
                test1.value == "rennye"))

    ) {

        resultado.innerHTML =
            "Você Ganhou!";

        score += 1;

        pontuacao.innerHTML =
            score;

        test.style.cssText =
            "animation: luzDeFundo 1.5s ease infinite";

    }

    else if (test.value == test1.value) {

        resultado.innerHTML =
            "Empate!";

        test.style.cssText =
            "animation: luzDeFundo 1.5s ease infinite";

        test1.style.cssText =
            "animation: luzDeFundo 1.5s ease infinite";

    }

    else {

        resultado.innerHTML =
            "Você Perdeu!";

        test1.style.cssText =
            "animation: luzDeFundo 1.5s ease infinite";
    }

}






function jogarNovamente() {

    jogo.style.display =
        "flex";

    selecao.style.display =
        "none";

    test.style.cssText =
        "animation:''";

    test1.style.cssText =
        "animation:''";

}


var regras =
    document.getElementsByClassName("regras")[0];

function mostraregras() {

    regras.style.display = "flex";

}

function fecharegras() {

    regras.style.display = "none";

}


var textoProfessor =
    document.getElementById("texto-professor");

function mostrarInfo(nome) {

    switch (nome) {

        case "rennye":

            textoProfessor.innerHTML =
                "O homem que olha para o Bill Gates e diz: 'Sai daí que eu sou melhor'. A ADM É TOP.";

            break;

        case "robson":

            textoProfessor.innerHTML =
                "Se a imagem estiver nítida, não é o Robson. Experiência em Mistérios da Mistério S/A. Participou da festa rock em santa FE eventos dia 06/08/2011";

            break;

        case "wellifabio":

            textoProfessor.innerHTML =
                "O maior utilizador de IA do SENAI , o único ser vivo que gosta de Flutter. Se o seu código der pau, não perca tempo caçando o bug: utilize a técnica milenar do WELLIFABIO : 'desliga e liga de novo'.";

            break;

        case "ronaldo":

            textoProfessor.innerHTML =
                " O cara é o maior caloteiro de bombom do SENAI. Odeia celular, odeia Crocs e implantou a ditadura das escadas esquerdistas.";

            break;

        case "weverton":

            textoProfessor.innerHTML =
                "Sócio vitalício da Raquel e defensor da economia de moedas de um centavo.";

            break;

    }

}