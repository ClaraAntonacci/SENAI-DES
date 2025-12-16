#include <stdio.h>

typedef struct {
    char nome[30];
    char cod[5];
    float preco;
} produto;

produto produtos[5];
int totalproduto = 0;

int main() {
    int i;
    int Maior = 0; 
    char continuar;

    printf("Escolha seus produtos...\n");
    for (i = 0; i < 5; i++) {
        printf("Digite o nome do produto %d: ", i + 1);
        scanf("%s", produtos[i].nome);
        printf("Digite o codigo do produto: ");
        scanf("%s", produtos[i].cod);
        printf("Digite o preço do produto: ");
        scanf("%f", &produtos[i].preco);

        totalproduto++;

       
        if (produtos[i].preco > produtos[Maior].preco) {
            Maior = i;
        }
    }

   
    printf("\nO produto com o maior preço:\n");
    printf("Produto %s (Código: %s) custa R$%.2f\n", produtos[Maior].nome, produtos[Maior].cod, produtos[Maior].preco);

    

    return 0;
}
