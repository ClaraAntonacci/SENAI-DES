#include <stdio.h>

int main() {
    int ocupado = 0, livre = 0;
    int i, opcao;
    float porcentagem;
    
    printf("Bem-vindo ao Hotel Estrela do Norte\n\n");
     
    for (i = 0; i < 10; i++) {
        printf("O quarto %d está ocupado?\n", i + 1);
        printf("1 - Sim\n");
        printf("0 - Não\n");
        scanf("%d", &opcao);
        
        if (opcao == 1) {
            ocupado++;
        } 
        else{
            livre++;
        }
    }

    porcentagem = (ocupado / 10.0) * 100;

    printf("\nTotal de quartos ocupados: %d\n", ocupado);
    printf("Total de quartos livres: %d\n", livre);
    printf("Porcentagem de ocupação: %.2f%%\n", porcentagem);

    return 0;
}