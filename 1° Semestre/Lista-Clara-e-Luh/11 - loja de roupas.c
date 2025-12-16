#include<locale.h>
#include <stdio.h>
#include <stdlib.h>

int main () {
    setlocale(LC_ALL, "");
    int opçao;
    float n1, n2, res;
    
    do 
    {
        printf("\n ---FashionMix--- \n");
        printf("digite seu código.\n");
        printf("1 - Camisa\n");
        printf("2 - Calça\n");
        printf("3 - Casaco\n");
        printf("0 - sair\n");
        
        scanf("%d", &opçao);
        
        switch (opçao) {
            case 1:
            printf ("você escolheu Camisa - por apenas R$ 89,99\n");
              break;
            
            case 2:
            printf ("Você escolheu calça - por apenas R$120,00s\n");
            
              break;
              
            case 3:
            printf ("Você escolheu casaco - por apenas R$135,00s\n");
            break;
            
    
            case 0:
            printf("até logo...\n");
            break;
            default:
            printf("opção invalida! tente novamente");
        }
    } while (opçao !=0);
    return 0;
}
