//Bibliotecas
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main(){
	// Declarei as variaveis que eu vou armazenar os numeros
    int num, num2;
       // Pedi os numeros para o usuario
       printf("Informe o primeiro numero:\n");
       scanf("%d",&num);
       
       printf("Informe o segundo numero:\n");
       scanf("%d",&num2);
       
       //Utilizei o if else para testar qual é o maior, usei o sinal de maior (>) para ele verificar qual numero é maior.
	   if(num > num2){
           printf("O numero %d é maior",num);
       }
       else{
           printf("O numero %d é maior", num2);
       }
    //Fim do codigo
    return 0;
}

   
