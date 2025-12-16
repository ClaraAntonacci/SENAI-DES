#include <stdio.h>

int main() {
    int opcao;
    float gasolina = 6.27, etanol = 3.93, diesel = 6.66;
    float litros, res;

    printf("------------FuelMax----------\n\n");

    do {
        printf("Escolha uma opção:\n");
        printf("1 - Gasolina\n");
        printf("2 - Etanol\n");
        printf("3 - Diesel\n");
        printf("0 - Sair\n");
        
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                printf("Você escolheu Gasolina R$%.2f por litro\n", gasolina);
                printf("Quantos litros você deseja?\n");
                scanf("%f", &litros);
                res = gasolina * litros;
                printf("Você vai pagar R$%.2f\n\n", res);
                break;
            case 2:
                printf("Você escolheu Etanol R$%.2f por litro\n", etanol);
                printf("Quantos litros você deseja?\n");
                scanf("%f", &litros);
                res = etanol * litros;
                printf("Você vai pagar R$%.2f\n\n", res);
                break;
            case 3:
                printf("Você escolheu Diesel R$%.2f por litro\n", diesel);
                printf("Quantos litros você deseja?\n");
                scanf("%f", &litros);
                res = diesel * litros;
                printf("Você vai pagar R$%.2f\n\n", res);
                break;
            case 0:
                printf("Encerrando o programa.\n");
                break;
            default:
                printf("Opção inválida. Tente novamente.\n\n");
        }
    } while (opcao != 0);

    return 0;
}