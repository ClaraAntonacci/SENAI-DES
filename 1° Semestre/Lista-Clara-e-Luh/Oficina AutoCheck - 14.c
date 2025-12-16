#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct carros {
    char marca[30];
    int ano;
    float quilometragem;
    
} Carro;
struct carros carro[5];

void cadastro();
void consulta();

int totalcarros = 0;

int main() {
    int opcao;

    printf("----Bem vindo a Oficina AutoCheck----\n\n");

    do {
        printf("\nEscolha uma opçao:\n");
        printf("1 - Cadastrar carro\n");
        printf("2 - Consultar carros com mais de 100.000 km rodados\n");
        printf("0 - Sair\n");
        scanf("%d", &opcao);
        getchar();
        system("clear"); 

        switch (opcao) {
            case 1:
                cadastro();
                break;
            case 2:
                consulta();
                break;
            case 0:
                printf("Saindo...\n");
                break;
            default:
                printf("Opcao invalida!\n");
                break;
        }

    } while (opcao != 0);

    return 0;
}

void cadastro() {
    if (totalcarros >= 6) {
        printf("Limite de cadastro atingido!\n");
        return;
    }

    printf("Informe a marca do carro:\n");
    scanf("%s", carro[totalcarros].marca);

    printf("Informe o ano do carro:\n");
    scanf("%d", &carro[totalcarros].ano);

    printf("Informe a quilometragem do carro:\n");
    scanf("%f", &carro[totalcarros].quilometragem);

   totalcarros++;

    printf("Carro cadastrado com sucesso!\n");
}

void consulta() {
    int encontrados = 0;
    printf("Carros com mais de 100.000 km rodados:\n");

    for (int i = 0; i < totalcarros; i++) {
        if (carro[i].quilometragem > 100.000) {
            printf("Marca: %s, Ano: %d, quilometragem: %.2f\n", carro[i].marca, carro[i].ano, carro[i].quilometragem);
            encontrados++;
        }
    }

    if (encontrados == 0) {
        printf("Nenhum carro com mais de 100.000 km rodados cadastrado.\n");
    }
}