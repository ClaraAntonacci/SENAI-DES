//Bibliotecas
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main(){
	// Declarei a variavel que eu vou armazenar o numero
    int num;
       // Pedi o numero para o usuario
       printf("Informe um numero:\n");
       scanf("%d",&num);
       
       //Utilizei o if else para testar se o numero é par ou impar, usei o resto da divisão (%) para verificar.
	   if(num % 2 == 0){
           printf("O numero é par!");
       }
       else{
           printf("O numero é impar!");
       }
    //Fim do codigo
    return 0;
}

   
