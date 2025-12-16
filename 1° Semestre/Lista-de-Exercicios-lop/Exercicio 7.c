//Biblioteca
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main() {
    setlocale(LC_ALL, ""); // Para suportar acentos
    //variaveis
    int n, i, tabuada, n1;
    //Vai fazer uma repetição só enquato essa condição for verdadeira
    do{
    printf("Digite um número para realizar a tabuada:\n");
    scanf("%d",&n);
    
    printf("O número escolido foi %d\n", n);
    for(i=0;i<=10;i++)// Gera a tabuada do número digitado, a variavel vai de 0 ao 10 e exibe a tabuada do numero e mostra.

    {
    //Mostra o numero (n) vezes a variavel (i) e o resultado dessa multiplicação (O i vai se alterando do 0 ate o 10)  
    printf("%d x %d = %d\n", n,i,tabuada = n *i);
    }
   //opção de para o fim do codigo 
    printf("Digite 1 para continuar e 0 para sair:\n");
    scanf("%d", &n1);
    
    
    //Fim do codigo
    //Se n1 for difrente de 0 ele continua se for igaul ele para o codigo.
   } while(n1 != 0);
       return 0;
}
        