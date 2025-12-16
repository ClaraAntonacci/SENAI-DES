#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Pet {
    char nome[30], tipo[30];
    int idade;
    
} Animal;
struct Pet animal[6];

void cadastro();
void consulta();

int totalanimais = 0;

int main() {
    int opcao;

    printf("----Bem vindo ao Pet Shop Amigo Fiel----\n\n");

    do {
        printf("\nEscolha uma opçao:\n");
        printf("1 - Cadastrar Animal\n");
        printf("2 - Consultar animais com mais de 5 anos\n");
        printf("0 - Sair\n");
        scanf("%d", &opcao);
        getchar();
        system("clear"); // ou "cls" no Windows

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
    if (totalanimais >= 6) {
        printf("Limite de cadastro atingido!\n");
        return;
    }

    printf("Informe o nome do Animal:\n");
    scanf("%s", animal[totalanimais].nome);

    printf("Informe o tipo do Animal:\n");
    scanf("%s", animal[totalanimais].tipo);

    printf("Informe a idade do Animal:\n");
    scanf("%d", &animal[totalanimais].idade);

   totalanimais++;

    printf("Animal cadastrado com sucesso!\n");
}

void consulta() {
    int encontrados = 0;
    printf("Animais com mais de 5 anos:\n");

    for (int i = 0; i < totalanimais; i++) {
        if (animal[i].idade > 5) {
            printf("Nome: %s, Tipo: %s, Idade: %d\n", animal[i].nome, animal[i].tipo, animal[i].idade);
            encontrados++;
        }
    }

    if (encontrados == 0) {
        printf("Nenhum animal com mais de 5 anos cadastrado.\n");
    }
}