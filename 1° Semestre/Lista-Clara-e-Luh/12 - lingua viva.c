#include <stdio.h>

int main() {
    char nome[50];
    float nota1, nota2, nota3, media;
    int i;

    for (i = 1; i <= 5; i++) {
        printf("\nAluno %d \n", i);
        printf("Qual seu nome?\n");
        scanf("%s", nome);

        printf("Nota 1:\n");
        scanf("%f", &nota1);

        printf("Nota 2:\n");
        scanf("%f", &nota2);

        printf("Nota 3:\n");
        scanf("%f", &nota3);


        media = (nota1 + nota2 + nota3) / 3;

        printf("Aluno: %s\n", nome);
        printf("Média final: %.2f\n", media);

        if (media >= 6.0)
            printf("Situação: Aprovado\n");
        else
            printf("Situação: Reprovado\n");

       
    }

    return 0;
}