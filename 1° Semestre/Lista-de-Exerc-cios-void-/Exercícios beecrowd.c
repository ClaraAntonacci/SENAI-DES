#include <stdio.h>


void exercicio1();
void exercicio2();
void exercicio3();



int main(){
    
    int esc;
    
    printf("Escolha um exercicio\n");
    printf("1 - 1014\n");
    printf("2 - 1020\n");
    printf("3 - 1052\n");
    scanf("%d", &esc);
    
     switch (esc){
         case 1:
             exercicio1();
             break;
        
        case 2:
         
           exercicio2();
            break;
        case 3:
            exercicio3();
            break;
        default:
             printf("Opção invalida\n");
     }   

}   

void exercicio1(){
    float res, km, combustivel;
    printf("Infrome a distância percorrida:\n");
    scanf("%f", &km);
    printf("Informe a  quantidade de combustível consumida:\n");
    scanf("%f", &combustivel);
    res = km / combustivel;
    printf("%.3f km/l", res);
    
}

void exercicio2(){
    int idade;
    float dia, meses, diasres, anos;
    printf("Informe quantos dias você tem de vida:\n");
    scanf("%d", &idade);
    anos = idade / 365;
    dia = (idade % 365) % 30;
    meses = (idade % 365) / 30;
    printf("%.0f ano(s)\n", anos);
    printf("%.0f mes(es)\n", meses);
    printf("%.0f dia(s)\n", dia);
}

void exercicio3(){
    int num;
    printf("Informe um numero:\n");
    scanf("%d", &num);
        switch(num){
           case 1:
              num = 1;
              printf("January\n");
              break;
            case 2:
              num = 2;
              printf("February\n");
              break;
            case 3:
              num = 3;
              printf("March\n");
              break;
            case 4:
              num = 4;
              printf("April\n");
              break;
            case 5:
              num = 5;
              printf("May\n");
              break;
            case 6:
              num = 6;
              printf("June\n");
              break;
            case 7:
              num = 7;
              printf("July\n");
              break;
            case 8:
              num = 8;
              printf("August\n");
              break;
            case 9:
              num = 9;
              printf("September\n");
              break;
            case 10:
              num = 10;
              printf("October\n");
              break;
            case 11:
              num = 11;
              printf("November\n");
              break;
            case 12:
              num = 12;
              printf("December\n");
              break;
        }

}
            
    
