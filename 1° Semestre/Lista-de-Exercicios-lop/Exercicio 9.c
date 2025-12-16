//Biblioteca
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main() {
    setlocale(LC_ALL, ""); // Para suportar acento.
   
    //variavel
    int n;
    //Vai criar uma repetição ate que a informação for falsa
    do{
        
     printf("1 - Somar\n");
     printf("2 - Subitrair\n");
     printf("3 - Sair\n");
     scanf("%d",&n);
     //Ve quando a informação é falsa.
    }while(n != 3);
    //Fim do codigo
    return 0;
}
   
   
   
   
   