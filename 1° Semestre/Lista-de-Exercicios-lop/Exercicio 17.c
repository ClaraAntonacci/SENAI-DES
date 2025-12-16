//Bibliotecas
#include <stdio.h>
//Biblioteca
#include <locale.h>

  // struct = Estrutura de variaveis
    struct Idade {
        char nome[20];
        int idade;
    };
  
    //Variaveis fora do struct
    int main(){
     int i;
    // Permite acentos
    setlocale(LC_ALL, ""); 
    struct Idade idade[2];
    //laço de repetição para repetir as duas perguntas e armazenar os resultados
    for(i=0;i<2;i++){
    printf("Informe o nome da pessoa:\n");
    scanf("%s", idade[i].nome);
    printf("Informe a idade da pessoa\n");
    scanf("%d", &idade[i].idade);
    
    //Comparação para ver quem é mais velho
    }
    if(idade[1].idade > idade[2].idade)
    {
        printf("A primera pessoa é mais velha\n");
    }
    else{
        printf("A segunda pessoa é a mais velha\n");
    }
    //Fim do codigo
return 0;
}
    
    
    
    
    
    
    
    
    
