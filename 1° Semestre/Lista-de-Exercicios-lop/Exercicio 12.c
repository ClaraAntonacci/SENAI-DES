//bibliotecas
#include <stdio.h>
#include <locale.h>

int main(){
    // Permite acentos
    setlocale(LC_ALL, "");  
    //Variaveis  e um vetor (num[9]) que armazena os 10 numeros necessarios
    int num[9], i;
    int maior, menor;
    
    //laço de for para repetir até armazenar os 10 numeros necessarios o laço para quando chega as 10 repetições 
    for(i=0;i<10;i++){
        
    //Entrada de informações
    printf("Informe os numeros:\n");
    
    //Armazenamento dos 10 numeros
    scanf("%d",&num[i]);
    }
    //Para inicializar o maior e menor com o primeiro numero
    maior = menor = num[0];
    
    //laço de repetição para armazenar o maior numero e o menor numero
    for(i = 1;i < 10;i++){
        
    //Condiçao do maior que vai vericar quis numeros são maiores
     if(num[i] > maior){
         maior = num[i];
     } 
     //Condição do menor que vai verificar quais numeros são menores
    if (num[i] < menor){
     menor = num[i];
     }
    }
    //Saida de informações
    printf("Maior numero é %d\n", maior);
    printf("Menor numero é %d\n", menor);
    //Fim do codigo
    return 0;
}