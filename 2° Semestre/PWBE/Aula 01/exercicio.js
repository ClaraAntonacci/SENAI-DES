//Exercicio 1
var nome = "clara";

console.log("Olá,", nome);

console.log("------------");


//Exercicio 2

var a = 15;
var b = 10;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log("------------");
//Exercicio 3

var altura = 3;
var largura = 15;

console.log("A área do retangulo é:", altura * largura);
console.log("------------");
//Exercio 4

var nascimento = 1981;
var idade = 2025 - nascimento;

if(idade >= 18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade");
}
console.log("------------");
//Exercicio 5

var numero = 15;

if(numero % 2 == 0){
   console.log("O número é par");
}else{
    console.log("O numero é impar");
}
console.log("------------");
//Exercico 6

var n1 = 7;
var n2 = 5;
var n3 = 5;
var media = (n1+n2+n3)/3;

if(media >= 9){
    console.log("A");
}
else if(media >= 7){
   console.log("B");
}
else if(media >=5){
    console.log("C");
}
else{
    console.log("Reprovado");
}
console.log("------------");

//Exercico 7

for(let i = 1;i <= 200;i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

console.log("------------");

//Exercicio 8
var i = 0;
var f = 1;

for(i = 6 ; i > 0; i--){
    f = f * i;
   
}
console.log(f);
console.log("------------");

//Exercicio 9
var i = 0;

for( i = 0;i <= 1000;i+= 3){
  console.log(i);   
}
console.log("------------");