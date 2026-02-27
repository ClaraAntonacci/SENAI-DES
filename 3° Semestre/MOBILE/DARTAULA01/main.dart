void main(){
    String texto = "Wello Word!";
    int numero = 9999999988888888;
    double n = 0.3333333333;
    bool ativo = false;
    var coisa = "Texto";//nao tipada
    dynamic tudo = "oi";

    print(texto);
    print(numero);
    print("Real = "+n.toString());//concatenação
    print(ativo?"Oi":"Tchau");//if ternario
    print(coisa);
    tudo = 500;
    print(tudo);

}
