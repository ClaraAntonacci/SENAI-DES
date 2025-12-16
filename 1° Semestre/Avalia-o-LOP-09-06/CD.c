#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char genero[50], banda[50];
    int ano, escolha;
    int quantidade, comprada;
    
} CD;

CD produto[60]; 
int contestoque = 0; 
int com = 0;  
float Valor = 0;

void cadastrar();
void listarestoque();
void comprar();

int main() {
    int opcao;

    do {
        printf("\n----- Bem-vindo a loja Som & Arte! -----\n");
        printf("Escolha a opção do que você deseja fazer:\n");
        printf("1 - Cadastrar CD\n");
        printf("2 - Pesquisar CD por genero\n");
        printf("3 - Comprar\n");
        printf("0 - Sair\n");
        scanf("%d", &opcao);
        getchar(); 

        
        system("clear");

        switch(opcao) {
            case 1:
                cadastrar();
                break;
            case 2:
                listarestoque();
                break;
            case 3:
                comprar();
                break;
            case 0:
                printf("Saindo\n");
                break;
            default:
                printf("Opção inválida!\n");
        }

    } while(opcao != 0);

    return 0;
}

void cadastrar() {
    int i;
    if (contestoque >= 60) {  
        printf("Limite de estoque atingido!\n");
        return;
    }

    printf("Número de estoque: %d\n", contestoque + 1);
    printf("Informe o genero:\n");
    printf("1 - Sertanejo\n");
    printf("2 - POP\n");
    printf("3 - rock\n");
    printf("4 - MPB\n");
    scanf("%d", &produto[i].escolha);
    printf("Insira a banda : \n");
    scanf("%s", produto[contestoque].banda);
    printf("Insira a quantidade:\n");
    scanf("%d", &produto[contestoque].quantidade);
    getchar();  
    produto[contestoque].comprada = 0;  
    contestoque++;  
    printf("Produto adicionado com sucesso!\n");
}

void listarestoque() {
    int i, opcao;
    printf("Lembrando...\n");
    printf("1 - Sertanejo\n");
    printf("2 - POP\n");
    printf("3 - Rock\n");
    printf("4 - MPB\n");
    printf("Escolha o genero que você quer ver:\n");
    scanf("%d", &opcao);

    if (contestoque == 0) {
        printf("Nenhum produto cadastrado ainda.\n");
        return;
    }

    int encontrou = 0;  

    for (i = 0; i < contestoque; i++) {
        if (produto[i].escolha == opcao) {
            printf("\nProduto %d:\n", i + 1);
            printf("Genero: %s\n", produto[i].genero);
            printf("Banda: %s\n", produto[i].banda);
            printf("Quantidade em estoque: %d\n", produto[i].quantidade - produto[i].comprada);
            encontrou = 1;  
        }
    }

    if (!encontrou) {
        printf("Nenhum produto encontrado para o genero escolhido.\n");
    }
}

void comprar() {
    int num, quantidade;

    printf("Informe o número do produto que deseja comprar: ");
    scanf("%d", &num);
    getchar(); 

    if (num < 1 || num > contestoque) {
        printf("Número de produto inválido.\n");
        return;
    }

    printf("Informe a quantidade do produto que você quer comprar:\n");
    scanf("%d", &quantidade);

    if (quantidade > produto[num - 1].quantidade - produto[num - 1].comprada) {
        printf("Quantidade não disponível em estoque.\n");
        return;
    }

    produto[num - 1].comprada += quantidade;
    com = quantidade;
    Valor = quantidade * 20.0;  

    printf("Valor da compra ficou: %.2f\n", Valor);
    printf("Compra realizada com sucesso!\n");
}