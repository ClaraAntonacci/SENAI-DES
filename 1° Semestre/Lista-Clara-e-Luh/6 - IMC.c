#include <stdio.h>

struct Aluno {
    char nome[50];
    int idade;
    float peso, altura, imc;
};

void classificarIMC(struct Aluno aluno) {
    
    if (aluno.imc > 30)
        printf("%s está obeso.\n", aluno.nome);
    else if (aluno.imc >= 25)
        printf("%s está com sobrepeso.\n", aluno.nome);
    else
        printf("%s está saudavel.\n", aluno.nome);
}

int main() {
    struct Aluno aluno;
    printf("Bem vindo a corpo em movimento...\nVamos fazer sua avaliação\n");
    printf("Digite o nome do aluno: ");
    scanf("%s", aluno.nome);

    printf("Digite a idade do aluno: ");
    scanf("%d", &aluno.idade);

    printf("Digite o peso do aluno em kilos: ");
    scanf("%f", &aluno.peso);

    printf("Digite a altura do aluno em metros: ");
    scanf("%f", &aluno.altura);

    aluno.imc = aluno.peso / (aluno.altura * aluno.altura);

    classificarIMC(aluno);

    return 0;
}