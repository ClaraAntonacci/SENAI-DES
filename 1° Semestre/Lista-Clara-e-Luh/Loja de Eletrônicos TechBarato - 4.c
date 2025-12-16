#include <stdio.h>
#include <stdlib.h>


int main(){
    
     int i, produtos[9], maior, menor;
     
    printf("Informe o preço de 10 produtos:\n");
    
      for(i = 0 ; i < 10;i++){
          scanf("%d",&produtos[i]);
      }
         maior = produtos[0];
         for(i = 1 ; i < 10;i++){
          if(produtos[i]>maior){
            maior = produtos[i];
         }
         }
           menor = produtos[0];
         for(i = 1 ;i < 10;i++){
          if(produtos[i]<menor){
            menor = produtos[i];
         }
         }
        
         printf("%d é o produto mais caro\n", maior);
         printf("%d é o produto mais barato\n",menor);  
     
    return 0;
}