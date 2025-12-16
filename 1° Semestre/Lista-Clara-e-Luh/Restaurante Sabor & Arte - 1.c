#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main(){
    
     int pratos,combo, res;
     float desconto;
     
    printf("----Bem vindo ao  Restaurante Sabor & Arte----\n");
    printf("O valor do prato principal é de 45 reais\n");
    printf("O valor do combo de refri e sobremesa é 20 reais\n");
    
    printf("Informe quantos pratos principais você comprou:\n");
    scanf("%d", &pratos);
    printf("Informe quantas sobremesas e bebidas você pediu\n");
    scanf("%d", &combo);
    
         if (pratos > 3 && combo >=1){
             res = (pratos *45) + (combo * 20);
             desconto = res - (( (pratos *45) *0.10) + ( (combo * 20) * 0.05));
              printf("O valor da conta ficou %.2f reais\n", desconto);
         }
         else{
             res = (pratos *45) + (combo * 20);             
             printf("O valor da conta não é o suficiente para ter desconto\n");
             printf("O valor da compra ficou %d reais", res);
         }
    

    return 0;
}