//Bibliotecas
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main(){
	// Declarei as variaveis que eu vou armazenar a idade
    int idade;
       // Pedi a idade do usuario
       printf("Informe sua idade:\n");
       scanf("%d",&idade);
       
       
       //Utilizei o if e o else if  para verificar a idade e comparar com os padrões da eleição
	   if(idade >= 18 && idade < 70){ // Aqui vai ver se a idade é maior que 18 ou menor que 70 para ver se ele vota obrigatorio e o && vai verificar se as duas condições são verdadeiras.
           printf("Voto obrigatorio");
       }
       else if (idade >= 16){// Vai ver a idade do voto facultativo 
           printf("Voto facultativo");
       }
       else if(idade < 16){//Vai ver quem não vota 
           printf("Não vota");
       }
    //Fim do codigo
    return 0;
}

   
