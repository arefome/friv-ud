
// cordenadas del tesoro
const ANCHO = 400;
const ALTO = 400;

let objetivo = {
  x: getNumeroAleatorio(ANCHO),
  y: getNumeroAleatorio(ALTO)
};

// contador de clicks
let $mapa = document.querySelector('#mapa');
let $distancia = document.querySelector('#distancia');
let clicks = 0;

$mapa.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distancia = getDistancia(e, objetivo);
  let pistaDistancia = getPistaDistancia(distancia);
  $distancia.innerHTML = `<h1>${pistaDistancia}</h1>`;

  if (distancia < 20 ) {
    alert(`Encontraste el tesoro en ${clicks} clicks!`);
    location.reload();
  }
});
