//nome, estado, fundação,diretor, Brasão, vitorias, derrotas, empates

//buscar por nome e exibir o total de pontos daquele time.

const time = [
   {
    "Nome": "Palmeiras",
    "Estado": "São Paula",
    "Fundação": "26 de agosto de 1914",
    "Diretor": "Anderson Barros",
    "Brasão" : "palmeiras.jpg",
    "Vitorias": 10,
    "Empates": 3,
    "Derrotas": 3
   },
   {
    "Nome": "Corinthians",
    "Estado": "São Paulo",
    "Fundação": "1° de setembro de 1910",
    "Diretor": "Dorival Junior",
    "Vitorias": 5,
    "Empates": 7,
    "Derrotas": 6 
   },
   {
    "Nome": "São Paulo",
    "Estado": "São Paulo",
    "Fundação": "25 de janeiro de 1930",
    "Diretor": "Marcelo Teixeira",
    "Vitorias":6,
    "Empates": 7,
    "Derrotas":5
   }

];

time.forEach((procura) => {
     if(procura.Nome === "São Paulo"){
        console.log(procura.Vitorias * 3 + procura.Empates);
     }
});

