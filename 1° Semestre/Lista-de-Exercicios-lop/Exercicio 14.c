//bibliotecas
#include <stdio.h>
#include <locale.h>

int main(){
    // Permite acentos
    setlocale(LC_ALL, ""); 
	//variaveis 
    int num[4], i;
    //Entrada de informação
    printf("Informe 5 numeros:\n");
    //Laço para pedir 5 numeros
	for(i=0;i< 5;i++){
    scanf("%d",&num[i]);
    }
    printf("\n");// Espaço
    //laço para inverter os numeros recebidos no primeiro for
	for(i=4;i >= 0;i--){
		//Saida dos numeros de ordem invertida
         printf("%d\n", num[i]);
    }
 //Fim do codigo  
return 0;
}