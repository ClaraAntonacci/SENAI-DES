//bibliotecas
#include <stdio.h>
#include <locale.h>

  // struct  = Estrutura de variaveis
    struct pessoa {
        char nome[20];
        int idade;
        float nota;
    };
    int main(){
    // Permite acentos
    setlocale(LC_ALL, ""); 
    //Chamndo o struct para armazenar as variaveis
    struct pessoa pessoa1;
   
    printf("Informe seu nome:\n");
    scanf("%s", pessoa1.nome);
    printf("Informe sua idade:\n");
    scanf("%d", &pessoa1.idade);
    printf("Informe sua nota:\n");
    scanf("%f", &pessoa1.nota);
    
  //Saida de informações conforme foi armazenado na variavel
    
    printf("Nome:%s\n", pessoa1.nome);
    printf("Idade:%d\n",pessoa1.idade);
    printf("Nota:%.2f\n",pessoa1.nota);
//Fim do codigo    
return 0;
}