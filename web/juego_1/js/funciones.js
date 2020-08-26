// generar numero aleatorio
let getNumeroAleatorio = size => {
  return Math.floor(Math.random() * size);
}

// distancia entre dos puntos
let getDistancia = (e, objetivo) => {
  let diffX = e.offsetX - objetivo.x;
  let diffY = e.offsetY - objetivo.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// retorna una pista dependiendo la distancia 
let getPistaDistancia = distancia => {
  if (distancia < 30) {
    return "Ardiendo!";
  } else if (distancia < 40) {
    return "Muy caliente";
  } else if (distancia < 60) {
    return "Caliente";
  } else if (distancia < 100) {
    return "Tibio";
  } else if (distancia < 180) {
    return "Frio";
  } else if (distancia < 360) {
    return "Muy frio";
  } else {
    return "Congelado!";
  }
}
