/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL,"");
    char nome[30], cpf [30] ;
    int reserva, opção, quarto, qdp, adultos, crianças, idade, telefone, pagamento, squarto, valor, fpedido, contato, dia;
    float valor1;
    //Chickin
    printf("Bem vindo ao hotel Encanto das Águas\n");
    printf("Nossos quartos possuem capacidade para quatro pessoas e nossos horarios de refeições são:\n");
    
    printf("Cafe da manhã: 7h as 10h\n");
    printf("Almoço: 11:30h as 14h\n");
    printf("Jantar: 18h as 21h\n");
    printf("Obrigada pela preferencia!\n");
    printf("Escolha o que você quer fazer:\n");
    printf("1 - Checkin\n");
    printf("2 - Solicitar sereviço de quarto\n");
    printf("3 - Fazer pedido\n");
    scanf("%d", &opção);
    switch (opção){
      case 1: 
    printf("Informe seu nome\n:");
    scanf("%s", nome);
    printf("Informe sua idade:\n");
    scanf("%d", &idade);
    if (idade >= 18){
        printf(" Idade permitida! Continue o checkin\n");
    }
    else{
        printf("Idade negada!Checkin não autorizado\n");
        return 0;
    }
    
    printf("Informe seu CPF\n:");
    scanf("%s", cpf);
    printf("Informe o seu numero de telefone:\n");
    scanf("%d" ,&telefone);
    printf("Informe seu contato de emergencia:");
    scanf("%d", &contato);
    printf("Informe quantos dias você vai ficar hospedado:\n");
    scanf("%d", &dia);
    printf("Informe a quantidade de pessoas que vão ficar no quarto:\n");
    scanf("%d", &qdp);
    printf("Informe a quantidade de adultos:\n");
    scanf("%d", &adultos);
    printf("Informe a quantidade de crianças\n");
    scanf("%d", &crianças);
    if (adultos == 2 && crianças == 1){
        valor1 = ((adultos * 300) + (crianças * 130)) * dia;
        printf("Quarto com uma cama de casal e uma cama de solteiro e no valor de %.2f\n", valor1);
    }
    else if (adultos == 2 && crianças == 0){
        valor1 = ((adultos * 300) + (crianças * 130)) * dia;
        printf("Quarto com uma cama de casal e o valor de %.2f\n", valor1);
         
    }
    else if (adultos == 2 && crianças == 2){
        valor1 = ((adultos * 300) + (crianças * 130)) * dia;
        printf("Quarto com uma cama de casal e duas de solteiro e o valor de %.2f\n", valor1);
    }
    else if (adultos == 3 && crianças == 0){
        valor1 = ((adultos * 300) + (crianças * 130)) * dia;
        printf("Quarto com tres camas de solteiro e o valor %.2f\n", valor1);
    }
    else if (adultos == 3 && crianças == 1) {
        valor1 = ((adultos * 300) + (crianças * 130)) * dia;
    printf("Quarto com quatro camas de solteiro e o valor de %.2f\n", valor1);
    }
    else{
       printf ("Quantidade de pessoas a mais para caber em um quarto");
    }
    printf("Confirme sua reserva:\n");
    printf("\n1 - Sim\n");
    printf("\n2 - Não\n");
    scanf("%d", &reserva);
    if (reserva == 1){
    printf("Reserva confirmada!");
    }
    else{
    printf("Reserva cancelada!");
        
    }
   
    printf("Informe como você vai pagar:\n");
    printf("1 - Credito\n");
    printf("2 - Debito\n");
    printf("3 - Dinheiro\n");
    printf("4 - Pix\n");
    scanf("%d",&pagamento);
        switch (pagamento) { 
        case 1: 
        printf("Você escolheu pagar com o cartão de credito!\n");
        break;
        case 2:
        printf("Você escolheu pagar com o cartão de debito!\n");
        break;
        case 3:
        printf("você escolheu pagar com o Dinheiro!\n");
        break;
        case 4:
        printf("Você escolheu pagar com pix!\n");
        break;
        default:
        printf("invalido");
        return 1;
      }
      return 0;
    
    case 2:
    printf ("Você solicitou o serviço de quarto! Informe o que você quer\n:");
    printf("1 - Traveseiro adicional\n");
    printf("2 - Cobertor adicional\n");
    printf("3 - Limpar o quato\n");
    printf("4 - Trocar o lençol\n");
    scanf("%d",&squarto);
        switch (squarto) {
        case 1 :
        printf("Você solicitou travisseiro adicional\n");
        break;
        case 2 :
        printf("Você solicitou cobertor adicional\n");
        break;
        case 3:
        printf("Você solicitou a faxina do quarto\n");
        break;
        case 4:
        printf("Você solicitou trocar o lençol\n");
        break;
        
        return 1;
        }
        return 0;
    case 3:
    printf("Voce solicitou fazer pedido! Informe qual pedido você quer fazer:\n");
    printf ("1 - Almoço no proprio quarto\n");
    printf("2 - Jantar no proprio quarto\n");
    printf("3 - Solicitar café da manhã\n");
    scanf("%d", &fpedido);
       switch (fpedido) {
       case 1:
       printf("Você solicitou Almoço no proprio quarto\n");
       break;
       case 2:
       printf("Você solicitou Jantar no proprio quarto\n");
       break;
       case 3:
       printf("Você solicitou cafe da manhã no proprio quarto\n");
       break;
       return 1;
       
       
    }
    return 0;
  }
    
    
        
    
    return 0;
}