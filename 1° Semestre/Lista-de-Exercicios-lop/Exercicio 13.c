//bibliotecas
#include <stdio.h>
#include <locale.h>

int main(){
    // Permite acentos
    setlocale(LC_ALL, "");  
    //Variaveis  e um vetor (num[9]) que armazena os 10 numeros necessarios
    int num[9], pares, i;
    //laço de for para repetir até armazenar os 10 numeros necessarios o laço para quando chega as 10 repetições 
    for(i=0;i<10;i++){
    //Entrada de informações
    printf("Informe os numeros que vc quer\n");
    //Armazenamento dos 10 numeros
    scanf("%d",&num[9]);
    //Se o resto da divisão por 2 der 0(par) ele armazena na variavel pares, quem faz isso é o ++
     if(num[9] % 2 == 0){
         pares++;
     }
    } 
    //Saida de informações (quantidade de numeros pares)
    printf("Tem %d numeros pares",pares);
    //Fim do codigo
    return 0;
}