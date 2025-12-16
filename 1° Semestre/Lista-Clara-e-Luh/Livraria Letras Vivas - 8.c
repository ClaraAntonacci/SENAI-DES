#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Livro {
    char titulo[30];
    int ano;
};

int main() {
    struct Livro livros[10];  
    int i = 0, opcao;
    int livroscadastrados = 0;  

    printf("----Bem vindo a Livraria Letras Vivas----\n\n");

    do {
        printf("\nEscolha uma opçao:\n");
        printf("1 - Cadastrar livro\n");
        printf("2 - Consultar livros antes do ano 2000\n");
        printf("3 - Sair\n");
        scanf("%d", &opcao);
        getchar();
        system ("clear");

        if(opcao == 1){
            if (livroscadastrados < 10) {
                printf("Informe o nome do Livro:\n");
                scanf(" %[^\n]", livros[livroscadastrados].titulo); 

                printf("Informe o ano do livro:\n");
                scanf("%d", &livros[livroscadastrados].ano);
                getchar(); 

                livroscadastrados++;
            } else {
                printf("Limite de livros atingido.\n");
            }
            
        }
        else if(opcao == 2){
            printf("\nLivros antes do ano 2000:\n");
            int encontrou = 0;
            for(i = 0; i < livroscadastrados; i++){
                if(livros[i].ano < 2000){
                    printf("Livro: %s\n", livros[i].titulo);
                    printf("Ano: %d\n", livros[i].ano);
                    encontrou = 1;
                }
            }
            if (!encontrou) {
                printf("Nenhum livro encontrado.\n");
            }
        }
        else if(opcao == 3){
            printf("Saindo...\n");
        }
        else {
            printf("Opção inválida.\n");
        }

    } while(opcao != 3);

    return 0;
}
