var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var radioPelota = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var barraAlto = 10;
var barraAncho = 75;
var barraX = (canvas.width-barraAncho)/2;
var derecha = false;
var izquierda = false;
var filaLadrillos = 5;
var columnaLadrillos = 3;
var anchoLadrillo = 75;
var altoLadrillo = 20;
var margenLadrillo = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var puntaje = 0;
var vidas = 3;

var colores = ["#F7FA00","#6E00FA","#FA00E3","#0095DD","#00FA04"]

let getNumeroAleatorio = size => {
    return Math.floor(Math.random() * size);
  }

var ladrillos = [];
for(var c=0; c<columnaLadrillos; c++) {
    ladrillos[c] = [];
    for(var r=0; r<filaLadrillos; r++) {
        ladrillos[c][r] = { x: 0, y: 0, estado: 1 };
    }
}

document.addEventListener("keydown", flechaAbajo, false);
document.addEventListener("keyup", flechaArriba, false);
document.addEventListener("mousemove", movimientoMouse, false);

function flechaAbajo(e) {
    if(e.keyCode == 39) {
        derecha = true;
    }
    else if(e.keyCode == 37) {
        izquierda = true;
    }
}
function flechaArriba(e) {
    if(e.keyCode == 39) {
        derecha = false;
    }
    else if(e.keyCode == 37) {
        izquierda = false;
    }
}
function movimientoMouse(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        barraX = relativeX - barraAncho/2;
    }
}
function colision() {
    for(var c=0; c<columnaLadrillos; c++) {
        for(var r=0; r<filaLadrillos; r++) {
            var b = ladrillos[c][r];
            if(b.estado == 1) {
                if(x > b.x && x < b.x+anchoLadrillo && y > b.y && y < b.y+altoLadrillo) {
                    dy = -dy;
                    b.estado = 0;
                    puntaje++;
                    if(puntaje == filaLadrillos*columnaLadrillos) {
                        alert("GANASTE!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function drawPelota() {
    ctx.beginPath();
    ctx.arc(x, y, radioPelota, 0, Math.PI*2);
    ctx.fillStyle = "#08FA00"; 
    ctx.fill();
    ctx.closePath();
}
function drawBarra() {
    ctx.beginPath();
    ctx.rect(barraX, canvas.height-barraAlto, barraAncho, barraAlto);
    ctx.fillStyle = "#08FA00"; //color
    ctx.fill();
    ctx.closePath();
}
function drawLadrillos() {
    for(var c=0; c<columnaLadrillos; c++) {
        for(var r=0; r<filaLadrillos; r++) {
            if(ladrillos[c][r].estado == 1) {
                var ladrilloX = (r*(anchoLadrillo+margenLadrillo))+brickOffsetLeft;
                var ladrilloY = (c*(altoLadrillo+margenLadrillo))+brickOffsetTop;
                ladrillos[c][r].x = ladrilloX;
                ladrillos[c][r].y = ladrilloY;
                ctx.beginPath();
                ctx.rect(ladrilloX, ladrilloY, anchoLadrillo, altoLadrillo);
                ctx.fillStyle = colores[getNumeroAleatorio(colores.length)]; // color
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function drawPuntaje() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "08FA00";//color
    ctx.fillText("Puntaje: "+puntaje, 8, 20);
}
function drawVidas() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "08FA00";
    ctx.fillText("Vidas: "+vidas, canvas.width-65, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLadrillos();
    drawPelota();
    drawBarra();
    drawPuntaje();
    drawVidas();
    colision();

    if(x + dx > canvas.width-radioPelota || x + dx < radioPelota) {
        dx = -dx;
    }
    if(y + dy < radioPelota) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-radioPelota) {
        if(x > barraX && x < barraX + barraAncho) {
            dy = -dy;
        }
        else {
            vidas--;
            if(!vidas) {
                alert(":(");
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 3;
                dy = -3;
                barraX = (canvas.width-barraAncho)/2;
            }
        }
    }

    if(derecha && barraX < canvas.width-barraAncho) {
        barraX += 7;
    }
    else if(izquierda && barraX > 0) {
        barraX -= 7;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();