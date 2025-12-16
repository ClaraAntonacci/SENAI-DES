#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct{
    char nome[50];
    int idade;
    float nota;
}Aluno;

Aluno alunos[3];

void ListarAlunos (){
    for(int i = 0; i < 3;i++){
        printf("\nAluno: %s\n", alunos[i].nome);
        printf("\nIdade: %d\n", alunos[i].idade);
        printf("\nNota: %.2f\n", alunos[i].nota);
    }
}


int main(){
    for(int i = 0; i < 3;i++){
        printf("Digite os dados do aluno %d:\n", i + 1);
        printf("Nome:\n");
        scanf("%s", alunos[i].nome);
        printf("Idade:\n");
        scanf("%d", &alunos[i].idade);
        printf("Nota: \n");
        scanf("%f", &alunos[i].nota);
        
    }
    
    ListarAlunos();
    
    return 0;
}