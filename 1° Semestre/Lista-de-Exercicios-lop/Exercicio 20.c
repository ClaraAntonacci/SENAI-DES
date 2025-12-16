// Biblioteca
#include <stdio.h>  

//Inicio do codigo
int main() { 
    // Variável para armazenar a média de cada aluno e para acumular a soma das média e a média geral
    float media, soma = 0.0, medgeral; 
    
    // Laço de 5 vezes para armazenar para cada aluno
    for (int i = 0; i < 5; i++) {
        // Pede ao usuário que digite a mdia final do aluno atual
        printf("Digite a média final do aluno %d: ", i + 1);
        // Lê a média digitada pelo usuário e a armazena na variável 'media'
        scanf("%f", &media);
        // Adiciona a média do aluno atual à soma total
        soma += media;
    }
    // Calcula a média geral dividindo a soma número total de alunos
    medgeral = soma / 5;
    // Exibe a média geral da turma com uma casa decimal
    printf("Média geral da turma: %.1f\n", medgeral);
   // Encerra o programa retornando 0

    return 0; 
}    
    
    
    
    
    
    
