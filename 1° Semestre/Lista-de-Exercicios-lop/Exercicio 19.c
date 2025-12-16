// Biblioteca 
#include <stdio.h> 
//  struct = Estrutura de variaveis 
typedef struct {
    char nome[15];   // Nome 
    float media;     // Média final do aluno
} Aluno;


int main() {
     // Array para armazenar 3 vagas
    Aluno alunos[3]; 
     // Array para armazenar o nome que vai ser buscado
    char nome_busca[15]; 
    //Verificar se o aluno foi encontrado
    int encontrado; 
    // Variável para armazenar a opção do usuário para continuar ou não
    char opcao;

    // Cadastro dos 3 alunos
    for (int i = 0; i < 3; i++) {
       
        printf("Digite o nome do aluno %d: ", i + 1);
        scanf("%s", alunos[i].nome); 

        // Solicita a média final do aluno
        printf("Digite a média final do aluno %d: ", i + 1);
        scanf("%f", &alunos[i].media); // Lê a média e armazena na estrutura
    }

    do {
        encontrado = 0; // Reseta o encontrado em 0

        // Solicita o nome para busca
        printf("Digite o nome do aluno para buscar: ");
        scanf("%14s", nome_busca); // Lê o nome a ser buscado

        // Busca pelo aluno com o nome informado
        for (int i = 0; i < 3; i++) {
            // Assume que os nomes são iguais inicialmente
            int igual = 1; 
            // Verifica e compara cada caractere do nome
            for (int j = 0; j < 15; j++) {
                // Se os caracteres não forem iguais marca como nao igual e sai do loop de comparação
                if (alunos[i].nome[j] != nome_busca[j]) { 
                    igual = 0; 
                    break; 
                }
            }
            // Se os nomes forem iguais, Exibe os dados do aluno encontrado
            if (igual) { 
               
                printf("Aluno encontrado:\n");
                printf("Nome: %s\n", alunos[i].nome);
                printf("Média: %.2f\n", alunos[i].media);
                encontrado = 1; // Marca que o aluno foi encontrado
                break; // Sai do loop de busca
            }
        }

        // Se o aluno não foi encontrado
        if (!encontrado) {
            printf("Aluno não encontrado.\n");
        }

        // Pergunta se o usuário deseja tentar buscar outro aluno 
        printf("Deseja buscar outro aluno? (s/n): ");
        scanf(" %c", &opcao); 
       //Continua enquanto a opção for 's' ou 'S'
    } while (opcao == 's' || opcao == 'S'); 
//Fim do codigo
    return 0; 
}    
    
    
    
    
    
    
    
