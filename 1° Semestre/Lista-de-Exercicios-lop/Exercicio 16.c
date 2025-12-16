//Bibliotecas
#include <stdio.h>
#include <locale.h>

  // struct = Estrutura de variaveis
    struct compra {
        char nome[20];
        int preço;
        float quantidade;
    };
    //variaveis fora do struct
    int main(){
    float totalq, totalp;
    // Permite acentos
    setlocale(LC_ALL, ""); 
    //Permite o struct a guardar 5 variaveis cada variavel
    struct compra compra[5];
    //variavel para o for
    int i;
    //repete e armazena 5 espaços dentro do struct
    for(i=0;i<5;i++){
    printf("Informe nome do produto:\n");
    scanf("%s",compra[i].nome);
    printf("Informe o preço:\n");
    scanf("%d", &compra[i].preço);
    printf("Informe a quantidade:\n");
    scanf("%f", &compra[i].quantidade);
     // concatena os preços e as quantidades para que no total de para fazer a conta
   totalp +=compra[i].preço * compra[i].quantidade;
   totalq +=compra[i].quantidade;
   }
   //laço de repetição para informar as quantidades e o preço que o usuario colocou
   for(i=0;i<5;i++){
   
       printf("Produto %s\n", compra[i].nome);
       printf("Preço %d\n", compra[i].preço);
       printf("Quantidade%.2f\n", compra[i].quantidade);
   }
   //informa para o usuario o valor total e a quantidade de produtos
   printf ("Total de Quantidades: %.2f\n", totalq);
   printf("Total de Preço: %.2f\n", totalp);
 //Fim do codigo  
return 0;
}