import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter_splash_08/ui/home.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with TickerProviderStateMixin {
  late AnimationController _animController;

  String nome = '';
  String idade = '';

  double _posY = -200;

  @override
  void initState() {
    super.initState();

    _animController =
        AnimationController(vsync: this, duration: const Duration(seconds: 2))
          ..addListener(() {
            setState(() {
              _posY = -200 + (200 * _animController.value);
            });
          });

    _animController.forward();
  }

  Future<void> salvarDados() async {
    final localStorage = await SharedPreferences.getInstance();
    await localStorage.setString('nome', json.encode(nome));
    await localStorage.setString('idade', json.encode(idade));
    irParaHome();
  }

  void irParaHome() {
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => const Home()),
    );
  }

  @override
  void dispose() {
    _animController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Transform.translate(
              offset: Offset(0, _posY),
              child: Image.asset(
                'img/aula08.flutter.png',
                width: 200,
                height: 200,
              ),
            ),

            const SizedBox(height: 20),

            Padding(
              padding: const EdgeInsets.all(18.0),
              child: TextField(
                decoration: const InputDecoration(labelText: "Digite seu nome"),
                onChanged: (value) {
                  nome = value;
                },
              ),
            ),

            Padding(
              padding: const EdgeInsets.all(18.0),
              child: TextField(
                decoration: const InputDecoration(
                  labelText: "Digite sua idade",
                ),
                onChanged: (value) {
                  idade = value;
                },
              ),
            ),

            ElevatedButton(onPressed: salvarDados, child: const Text("Entrar")),
          ],
        ),
      ),
    );
  }
}
