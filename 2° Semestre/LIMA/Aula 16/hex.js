const btn = document.getElementById('btn');
const info = document.getElementById('wave-info');

const waveFacts = [
  "As ondas de rádio são usadas para transmitir dados, voz e imagens.",
  "A primeira transmissão de rádio foi feita por Guglielmo Marconi em 1895.",
  "As ondas de rádio podem atravessar paredes e nuvens facilmente.",
  "Ondas de maior frequência têm mais energia, como as micro-ondas.",
  "O rádio AM usa ondas longas, enquanto o FM usa ondas curtas.",
  "As ondas de rádio viajam à velocidade da luz: cerca de 300.000 km/s.",
  "Elas são usadas em Wi-Fi, GPS, Bluetooth e telecomunicações.",
  "Sem ondas de rádio, não existiria internet sem fio nem TV por satélite."
];

function getRandomBlue() {
  const blue = Math.floor(Math.random() * 150) + 100;
  const green = Math.floor(Math.random() * 100) + 80;
  const red = Math.floor(Math.random() * 70);
  return `rgb(${red}, ${green}, ${blue})`;
}

btn.addEventListener('click', function() {
  const randomFact = waveFacts[Math.floor(Math.random() * waveFacts.length)];
  const newColor = getRandomBlue();

  document.body.style.backgroundColor = newColor;
  info.style.opacity = 0;
  setTimeout(() => {
    info.textContent = randomFact;
    info.style.color = newColor;
    info.style.opacity = 1;
  }, 300);
});