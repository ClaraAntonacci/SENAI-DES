#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct {
    char nome[100];
    int quantidade;
    float preco;
} produto;

produto estoque[10];
int totalprodutos = 0;

void relatorioEstoque() {
    float valortotal = 0.0;
    
    
    printf("\nEstoque\n");
    
    
    if (totalprodutos == 0) {
        printf("Nenhum produto cadastrado no estoque.\n");
    } else {
        for (int i = 0; i < totalprodutos; i++) {
            float valorproduto = estoque[i].quantidade * estoque[i].preco;
            valortotal += valorproduto;
            printf("Produto: %s | Quantidade: %d | Preço Unitário: R$%.2f | Valor em Estoque: R$%.2f\n",
                   estoque[i].nome, estoque[i].quantidade, estoque[i].preco, valorproduto);
        }
        
        printf("Valor Total Geral do Estoque: R$%.2f\n", valortotal);
    }
}


int main() {
    int opcao;

    do {
        printf("\nBem-vindo ao Mercado SuperCompra...\n");
        printf("1. Adicionar Produto\n");
        printf("2. Calcular Valor Total do Estoque\n");
        printf("0. Sair\n");
        printf("Escolha uma opção: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                if (totalprodutos < 10) {
                    printf("\nAdicionar Novo Produto\n");
                    printf("Nome do produto: ");
                    getchar();
                    scanf(" %[^\n]", estoque[totalprodutos].nome);
                    printf("Quantidade em estoque: ");
                    scanf("%d", &estoque[totalprodutos].quantidade);
                    printf("Preço por unidade: R$");
                    scanf("%f", &estoque[totalprodutos].preco);
                    totalprodutos++;
                    printf("Produto %s adicionado com sucesso!\n", estoque[totalprodutos - 1].nome);
                } else {
                    printf("\nEstoque cheio! Não é possível adicionar mais produtos (Limite de 10).\n");
                }
                break;
            case 2:
                relatorioEstoque();
                break;
            case 0:
                printf("\nSaindo do sistema. Obrigado por usar o SuperCompra!\n");
                break;
            default:
                printf("\nOpção inválida. Por favor, tente novamente.\n");
                break;
        }

       
    } while (opcao != 0);

    return 0;
}