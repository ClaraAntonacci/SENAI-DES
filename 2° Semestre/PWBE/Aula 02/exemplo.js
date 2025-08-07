// const numeros = [1, 2, 3, 4, 5];

// for(let i = 0;i < numeros.length;i++){
//     console.log("["+ i + "] -> " + numeros[i]);
// } 

// function soma(a, b) {
//    ex1 //return a + b;
//     ex2 console.log(a+b)
// }
// ex1 console.log(soma(2,5));
// ex2 soma(5,5);

// const soma = (a,b) => {
//      console.log(a+b);
// }

// soma(8,2);

const numeros = [1, 2, 3, 4, 5];
const marcas = ["Nike", "Adidas", "Jaguar"];
 const usuarios = [
    {
        "nome": "Fulano",
        "sobrenome": "Pereira",
        "matricula": "1234",
         "telefone": "(12) 1234-4321"    
    },
    {
    "nome":"Beltrano",
    "sobrenome": "Silva",
    "matricula": "4567",
    "telefone": "(32) 4567-7894"
    } 
];
 marcas.forEach((value) =>{
         if(value === "Nike"){
             console.log("Encontrei")
         }
 });

usuarios.forEach((usuario)=>{
    if(usuario.matricula === "4567"){
       console.log(usuario.nome +" "+ usuario.sobrenome);
       console.log(usuario.telefone);
    }
});


// function imprime(value){
//      console.log("value - " + value);
// }

// marcas.forEach(imprime);

// marcas.forEach((value) => {
//     console.log("value - " + value)
// });




// const carro = {
//     "Ano": 2000,
//     "Cor": "vermelho",
//     "Modelo": "Uno",
//     "Marca": "Fiat",
//     "escada": true,
//     "placa": "abc1234"
// },

// console.log(carro.placa);

