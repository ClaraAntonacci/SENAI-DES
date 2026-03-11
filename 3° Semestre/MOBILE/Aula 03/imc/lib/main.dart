import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(title: 'IMC', home: App()));
}

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  String? nome;
  double peso = 0.0;
  double altura = 0.0;
  double imc = 0.0;
  String? resultado;

  void calcular() {
    imc = peso / (altura * altura);
    if (imc < 18.5) {
      resultado = "e você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25) {
      resultado = "e você está com peso normal.";
    } else if (imc >= 25 && imc < 30) {
      resultado = "e você está com sobrepeso.";
    } else if (imc >= 30 && imc < 35) {
      resultado = "e você está com obesidade grau 1.";
    } else if (imc >= 35 && imc < 40) {
      resultado = "e você está com obesidade grau 2.";
    } else {
      resultado = "e você está com obesidade grau 3.";
    }
    resultado = "$nome seu IMC é ${imc.toStringAsFixed(1)} $resultado";
  }

  void alert(BuildContext context, String msg) {
    showAdaptiveDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('mensagens'),
          content: Text(msg),
          actions: [
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text('Ok'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            spacing: 20.0,
            children: [
              Text(
                "Indice de Massa Corpórea",
                style: TextStyle(
                  fontSize: 26.0,
                  color: Color.fromARGB(255, 64, 0, 255),
                ),
              ),
              TextField(
                decoration: InputDecoration(labelText: "Nome"),
                onChanged: (value) {
                  nome = value;
                },
              ),
              TextField(
                decoration: InputDecoration(labelText: "Peso"),
                onChanged: (value) {
                  peso = double.parse(value);
                },
              ),
              TextField(
                decoration: InputDecoration(labelText: "Altura"),
                onChanged: (value) {
                  altura = double.parse(value);
                },
              ),
              ElevatedButton(
                onPressed: () {
                  calcular();
                  alert(context, "$resultado");
                },
                child: Text('Calcular'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
