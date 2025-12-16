#include <stdio.h>
#include <stdlib.h>

struct pizza{
    char nome[50], descricao[300];
    float preco;
    int id;
};

struct clientes{
    char nome[50], cpf[10], telefone[11]; 
    int id;
};

int numcliente = 0;

int num = 0;

struct pizza p[100];

struct clientes c[100];

void Cadastrarpizza();
void Cadastrarcliente();
void Listarpizza();
void Listarcliente();
void Venda();

int main(){
    
    int opcao;
    
    do{
    
    printf("------ Bem vindo a Pizzaria Nostra Pizza------\n");
   
    printf("1 - Cadastrar pizza\n");
    printf("2 - Cadastrar clientes\n");
    printf("3 - Listar pizzas\n");
    printf("4 - Listar clientes\n");
    printf("5 - Vender\n");
    printf("0 - Sair\n");
    printf("Selecione uma opção: ");
    scanf("%d", &opcao);
    getchar();
    system("clear");
    
    switch(opcao){
        case 1:
           Cadastrarpizza();
           break;
        
        case 2:
           Cadastrarcliente();
           break;
           
        case 3:
           Listarpizza();
           break;
           
        case 4:
           Listarcliente();
           break;
           
        case 5:
           Venda();
           break;
        
        case 0:
           printf("Volte sempre!");
           break;
        
        default:
           printf("Opção invalida!");
           break;
    }
    
    
    printf("Clique enter para continuar\n");
 
    getchar();
    getchar();
    system("clear");
    
    }while(opcao != 0);
    
    return 0;
}

void Cadastrarpizza(){
    
    
    printf("------ Cadastro de Pizza ------\n");
    
    printf("Nome: ");
    scanf(" %[^\n]", p[num].nome);
    printf("Descrição: ");
    scanf(" %[^\n]", p[num].descricao);
    printf("Preço: ");
    scanf("%f", &p[num].preco);
    p[num].id = num;
    
    printf("ID: %d\n", p[num].id);
   
    num++;
}

void Cadastrarcliente(){
    
    
    printf("------ Cadastro de Clientes ------\n");
    
    printf("Nome: ");
    scanf(" %[^\n]", c[numcliente].nome);
    printf("CPF: ");
    scanf(" %[^\n]", c[numcliente].cpf);
    printf("Telefone: ");
    scanf(" %[^\n]", c[numcliente].telefone);
    c[numcliente].id = numcliente;
    printf("ID: %d\n", c[numcliente].id);
    
    numcliente++;
}

void Listarpizza(){
    
    printf("------- Pizzas -------\n");
    
    for(int i = 0; i < num; i++){
        printf("%s\n", p[i].nome);
        printf("%s\n", p[i].descricao);
        printf("ID: %d\n", p[i].id);
        printf("Preço: R$%.2f\n", p[i].preco);
       
        printf("---------------------------\n");
        
    }
}

void Listarcliente(){
    
    printf("------- Clientes -------\n");
   
    for(int i = 0; i < num; i++){
        printf("Nome: %s\n", c[i].nome);
        printf("CPF: %s\n", c[i].cpf);
        printf("Telefone: %s\n", c[i].telefone);
        printf("ID: %d\n", c[i].id);
       
        printf("---------------------------\n");
        
    }
}

void Venda(){
    int idpizza, idcliente, encontrado = 0, certo, quantidade, encontradoo = 1;
    
    printf("------- Venda -------\n");
   
    printf("ID da pizza: ");
    scanf("%d", &idpizza);
    
    for(int i = 0; i < num; i++){
        
    if(idpizza == p[i].id){
    printf("ID do cliente: ");
    scanf("%d", &idcliente);
    encontrado = 1;
            
    for(int i = 0;i < numcliente; i++){
                
    if(idcliente == c[i].id){
                    
    encontradoo = 0;
    getchar();
    system("clear");
    printf("Nome do usuário: %s\n", c[idcliente].nome);
    printf("Pizza: %s\n", p[idpizza].nome);
    printf("Correto? (1 - Sim/ 2 - Não): ");
    scanf("%d", &certo);
    getchar();
    system ("clear");
                    
        switch(certo){
            case 1:
              printf("Quantidade de pizzas: ");
              scanf("%d", &quantidade);
              getchar();
              system ("clear");
              printf("Total: %.2f\n", quantidade*p[idpizza].preco);
              printf("Deseja confirmar? (1 - Sim/ 2 - Não)\n");
              scanf("%d", &certo);
                
                switch(certo){
                    case 1:
                     printf("Venda confirmada!\n");
                     break;
                              
                    case 2:
                     printf("Venda encerrada!\n");
                     break;
                              
                    default:
                     printf("Opção invalida!\n");
                     break;
                          }
                     break;
                          
                    case 2:
                     printf("Venda encerrada!\n");
                     break;
                        
                    default:
                     printf("Opção invalida!\n");
                     break;
                    }
                    
                }
                    else if(encontradoo == 1){
                    printf("ID de usuário não encontrado!\n");
              }
            }
        }
        else if(encontrado == 0){
        printf("ID de pizza não encontrado!\n");
        }
    }
    
}