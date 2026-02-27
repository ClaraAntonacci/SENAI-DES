class Animal{
    //atributos
    int id =0;
    String nome='';
    String especies='';
    String raca='';
    double peso=0.0;
    //metodo
    String tudoJunto(){
        return "$id, $nome, $especies, $raca, $peso";

    }
}

void main(){
    //instancia
    Animal boi;
    //objeto
    boi = new Animal();

    boi.id = 1;
    boi.nome = "bandido";
    boi.especies = "Bovino";
    boi.raca = "Nelori";
    boi.peso = 499.9;

    print(boi.tudoJunto());
}