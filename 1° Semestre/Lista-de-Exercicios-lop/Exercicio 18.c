//Bibliotecas
#include <stdio.h>
//Biblioteca
#include <locale.h>

  // struct = Estrutura de variaveis
    struct Boletim {
        
        float nota;
    };
  
    //Variaveis fora do struct
    int main(){
     int i, media;
    // Permite acentos
    setlocale(LC_ALL, ""); 
    //Atribui um vetor ao struct
    struct Boletim boletim[3];
    //Variavis
    char nome[20];
    float soma;
    //Entrada de informações do nome
    printf("Informe seu nome:\n");
    scanf("%s", nome);
    
    
    //laço de repetição para repetir e armazenar 3 notas
    for(i=0;i<3;i++){
    printf("Informe suas tres notas \n");
    scanf("%f", &boletim[i].nota);
    //soma as notas conforme o usuario vai informando
    soma +=boletim[i].nota;
    //Comparação para ver quem é mais velho
    }
    //Faz as media com base na soma
    media = soma / 3;
    //Faz a comparação da media para ver se o aluno passou ou não 
    if( media >= 7)
    {
        printf("Aprovado!\n");
    }
    else{
        printf("Reprovado\n");
    }
//Fim do codigo
return 0;
}
    
    
    
    
    
    
    
    
    
