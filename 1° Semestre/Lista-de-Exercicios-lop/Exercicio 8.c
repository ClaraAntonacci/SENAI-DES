//Biblioteca
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main() {
    setlocale(LC_ALL, ""); // Para suportar acento.
   
    //variavel
    int i, res=0;
   
    //Vai dizer quantos numeros o computador vai ter que passar (200 números)
    for (i=1; i<=200; i++){
        //Se o número for par vai somar ele
        if(i%2==0){
            res= res+i;
        }
    }
   
    // resultado na tela
     printf ("A soma dos primeiros 100 números pares é : %d", res);
     
    //fim do programa.
    return 0;
}