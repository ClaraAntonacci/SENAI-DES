//bibliotecas
#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "");  // Permite acentos
    //variaveis
    //(notas[9]) é o array que vai servir para armazenar 10 notas, media = 0 para adicionar os valores corretamente ja quw o 0 nao vai interferir no resultado final. 
    int notas[9], media = 0,i; 
    //Laço de for para repetir 10 vezes e armazenar as 10 notas.
    for(i=0;i<=9;i++){
    printf("Informe suas 10 notas:\n");
    scanf("%d",&notas[i]);
    //Adicionado na media as notas conforme o usuario esta informando elas (quem faz isso é o +=)
    media += notas[i];
    }
    
    //Conta da media com as notas adicionadas depois do for
    media = media /10;
    
    //Saida da media para o computador
    printf("Sua media é %d",media);
    //Fim do codigo
    return 0;
}