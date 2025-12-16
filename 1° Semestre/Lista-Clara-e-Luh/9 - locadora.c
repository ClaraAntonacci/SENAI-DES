#include <locale.h>
#include <stdio.h>
#include <stdlib.h>

int main () {
    setlocale(LC_ALL, "");
    int opcao;
    float filmes;
    
    do {
        printf("\n --- video boom --- \n");
        printf("Quantos filmes você deseja alugar?\n");
        scanf("%f", &filmes);
        
    } while (filmes !=5);  
    
    printf("\nobrigado.\n");
    return 0;
}
