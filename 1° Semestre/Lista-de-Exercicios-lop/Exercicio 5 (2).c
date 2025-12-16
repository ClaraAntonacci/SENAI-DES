//Biblioteca
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main() {
    setlocale(LC_ALL, ""); // Para suportar acentos
    //Variaveis
    int num, num2, res;
    char oper;

    // Pedi os numeros para ele
    printf("Informe o primeiro número:\n");
    scanf("%d", &num);

    printf("Informe o segundo número:\n");
    scanf("%d", &num2);

    // Pedi o operador
    printf("Informe o operador que você quer usar (+, -, *, /):\n");
    scanf(" %c", &oper);

    // Utilizei o switch case para realizar as operações cada caso é uma operação.
    //(break é uma pausa para não misturar para o proximo caso)
    switch (oper) {
        case '+':
            res = num + num2;
            printf("A operação deu %d\n", res);
            break;
        case '-':
            res = num - num2;
            printf("A operação deu %d\n", res);
            break;
        case '*':
            res = num * num2;
            printf("A operação deu %d\n", res);
            break;
        case '/':
            if (num2 == 0) {
                printf("Erro: divisão por zero não é permitida.\n");
            } else {
                res = num / num2;
                printf("A operação deu %d\n", res);
            }
            break;
        default:
            printf("Operador inválido.\n");
            break;
    }
    //Final do codigo
    return 0;
}
   
