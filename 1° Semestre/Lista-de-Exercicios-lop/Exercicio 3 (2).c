//Bibliotecas
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main(){
	// Declarei as variaveis que eu vou armazenar as notas
    float nota, nota2, media;
       // Pedi as notas para o usuario
       printf("Informe a primeira nota:\n");
       scanf("%f",&nota);
       
       printf("Informe a segunda nota:\n");
       scanf("%f",&nota2);
       //Calculo da media
       media = (nota + nota2) / 2;
       
       //Utilizei o if else para testar se o aluno esta na media (que é 7), usei o sinal de maior (>=) para verificar se o aluno está na media.
	   if(media >= 7){
           printf("Aprovado!");
       }
       else{
           printf("Reprovado!");
       }
    //Fim do codigo
    return 0;
}

   
