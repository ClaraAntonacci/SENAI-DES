class Animal{
    //atributos
    int id =0;
    String nome='';
    String especies='';
    String raca='';
    double peso=0.0;
    //metodo
    Animal(this.id, this.nome, this.especies, this.raca, this.peso);
    String tudoJunto(){
        return "$id, $nome, $especies, $raca, $peso";

    }
}

void main(){
    Animal boi = new Animal(1, "Bandido", "Bovino", "Nelori", 499.9);
    print(boi.tudoJunto());
    
    Animal cachorro = new Animal(2, "Rex", "Canino", "Labrador", 35.5);
    print(cachorro.tudoJunto());
    
    Animal gato = new Animal(3, "Miau", "Felino", "Siamês", 4.2);
    print(gato.tudoJunto());
    
    Animal cavalo = new Animal(4, "Thunder", "Equino", "Árabe", 450.0);
    print(cavalo.tudoJunto());
    
    Animal galinha = new Animal(5, "Clóé", "Avino", "Leghorn", 2.5);
    print(galinha.tudoJunto());
    
    Animal ovelha = new Animal(6, "Dolly", "Ovino", "Merino", 60.0);
    print(ovelha.tudoJunto());
    
    Animal porco = new Animal(7, "Porquinho", "Suíno", "Duroc", 120.5);
    print(porco.tudoJunto());
    
    Animal papagaio = new Animal(8, "Loro", "Avino", "Arara", 1.2);
    print(papagaio.tudoJunto());
    
    Animal pato = new Animal(9, "Pisco", "Avino", "Pato-Real", 1.8);
    print(pato.tudoJunto());
    
    Animal coelho = new Animal(10, "Brás", "Leporino", "Coelho-Montês", 2.8);
    print(coelho.tudoJunto());
    
    Animal cobra = new Animal(11, "Serpentina", "Reptil", "Jiboia", 8.5);
    print(cobra.tudoJunto());
}