#include <stdio.h>
#include <stdlib.h>

float clientes[7];  
int totalnotas = 0;

void notas();
void consulta();

int main() {
    int opcao;

    printf("----Bem vindo a Cafeteria Café com Letras----\n\n");

    do {
        printf("\nEscolha uma opção:\n");
        printf("1 - Registrar nota de atendimentos\n");
        printf("2 - Checar avaliação geral do nosso estabelecimento\n");
        printf("0 - Sair\n");
        scanf("%d", &opcao);
        getchar();
        system("clear");

        switch (opcao) {
            case 1:
                notas();
                break;
            case 2:
                consulta();
                break;
            case 0:
                printf("Saindo...\n");
                break;
            default:
                printf("Opção inválida!\n");
                break;
        }

    } while (opcao != 0);

    return 0;
}

void notas() {
    if (totalnotas >= 7) {
        printf("Limite de 7 avaliações atingido!\n");
        return;
    }

    float nota;
    printf("Informe sua nota para nosso atendimento (0 a 10):\n");
    scanf("%f", &nota);

    if (nota < 0 || nota > 10) {
        printf("Nota inválida! Digite um valor entre 0 e 10.\n");
        return;
    }

    clientes[totalnotas] = nota;  
    totalnotas++;

    printf("Avaliação cadastrada com sucesso!\n");
}

void consulta() {
    if (totalnotas == 0) {
        printf("Nenhuma avaliação registrada ainda.\n");
        return;
    }

    float soma = 0.0;
    for (int i = 0; i < totalnotas; i++) {
        soma += clientes[i];
    }

    float media = soma / totalnotas;

    printf("Avaliação geral do estabelecimento: %.2f\n", media);

    if (media >= 8) {
        printf("Avaliação: Boa\n");
    } else if (media >= 5) {
        printf("Avaliação: Razoável\n");
    } else {
        printf("Avaliação: Ruim\n");
    }
}