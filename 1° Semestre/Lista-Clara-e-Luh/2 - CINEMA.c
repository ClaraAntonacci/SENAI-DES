#include <stdio.h>

int main() {
    int pontos = 0;
    int opcao;
    char nome[50]; 

    do {
        printf("\n--- Cine Ponto ---\n");
        printf("1 - Comprar ingresso\n");
        printf("2 - Pontos acumulados\n");
        printf("0 - Sair\n");
        printf("Escolha uma das opções: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                printf("Qual seu nome?\n");
                scanf("%s", nome);
                pontos += 2; 
                printf("Olá, %s! Você adicionou 2 pontos por comprar um ingresso.\n", nome);
                break;

            case 2:
                printf("Pontos acumulados: %d\n", pontos);
                break;

            case 0:
                printf("Até logo...\n");
                break;

            default:
                printf("Opção inválida! Tente novamente.\n");
        }
    } while (opcao != 0);

    return 0;
}