#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char nome[100];
    int quantidade;
    int comprada;
} Produtos;

Produtos produto[1]; 
int contestoque = 0; 
int com = 0;          

void adicao();
void listarestoque();
void comprar();

int main() {
    int opcao;

    do {
        printf("\n----- Bem-vindo ao Supermercado SuperMais! -----\n");
        printf("Escolha a opção do que você deseja fazer:\n");
        printf("1 - Adicionar um produto no estoque\n");
        printf("2 - Visualizar estoque\n");
        printf("3 - Comprar mercadoria\n");
        printf("0 - Sair\n");
        scanf("%d", &opcao);
        getchar(); 

        
        system("clear");

        switch(opcao) {
            case 1:
                adicao();
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

void adicao() {
    if (contestoque >= 1) {  
        printf("Limite de estoque atingido!\n");
        return;
    }

    printf("Número de estoque: %d\n", contestoque + 1);
    printf("Insira o nome do produto: \n ");
    scanf("%s", produto[contestoque].nome);
    printf("Insira a quantidade:\n");
    scanf("%d", &produto[contestoque].quantidade);
    getchar();  
    produto[contestoque].comprada = 0;  
    contestoque++;  
    printf("Produto adicionado com sucesso!\n");
}

void listarestoque() {
    if (contestoque == 0) {
        printf("Nenhum produto cadastrado ainda.\n");
        return;
    }

    for (int i = 0; i < contestoque; i++) {
        printf("\nProduto %d:\n", i + 1);
        printf("Nome: %s\n", produto[i].nome);
        printf("Quantidade em estoque: %d\n", produto[i].quantidade - produto[i].comprada);
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

    printf("Compra realizada com sucesso!\n");
}