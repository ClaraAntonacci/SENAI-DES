// var - escopo gloal
// let - escopo local
// const - escopo global e o valor não altera

var nome = "Fulano";//string
var idade = 50.5;
var habilitado = true;


console.log(nome);//imprime no terminal
console.log(idade);
console.log(habilitado);

console.log(typeof(nome));
console.log(typeof(idade));
console.log(typeof(habilitado));

/*
soma +
subtração -
divisão /
multiplicação *
modulo %
*/
//var a = "10"
//console.log(Number(a)+b);transforma texto em numero.

//estritamente igual ===
//estritamente diferentes!==
//o resto dos sinais são iguais o do c

var a = "10";
var b = 10;


console.log(a+b);

if(a !== b) {
    console.log("São iguais");

}else{
    console.log("São diferentes");
}


switch(b){
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

for(let i = 0; i < 100; i++){
    console.log(i);
}

while(a < 10){
    if(a == 5){
        break;
    }
}
do{

}while(a < 10);
