//bibliotecas
#include <stdio.h>
#include <locale.h>

   int main(){
  // Permite acentos
      setlocale(LC_ALL, ""); 
     //Variaveis
     int num, i, res = 1; // res começa em 1 porque você está acumulando multiplicações, e 1 não interfere no resultado inicial. Se usasse outro valor (como 0 ou 2), o cálculo estaria errado desde o início.
     // Pedi o o numero para o usuario
     printf("Informe o numero que vc quer saber o fatorial:\n");
     scanf("%d",&num);
     // utilizei o for (loop) que calcula o fatorial multiplicando res pelos valores de 1 até num(numero)
      for(i = 1; i <= num; i++){
        //res vai sendo multiplicado sucessivamente por i em cada passo do for ate chegar no num
        res = res * i;
      }
      printf("%d", res);
return 0;
}