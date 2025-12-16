//Biblioteca
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main() {
    setlocale(LC_ALL, ""); // Para suportar acentos
    //Variavel
    int i;
    //Ele faz uma contagem ate cem (Um laço)
   for(i = 1; i <= 100;i++){
       printf("%d\n",i);
   }
    
//Fim do codigo
 return 0;
}
   
