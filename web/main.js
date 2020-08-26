function click_juego1(){
    var n = document.getElementById("num1").value
    eel.add(n)(callBack1)
}

function click_juego2(){
    var n = document.getElementById("num2").value
    eel.add(n)(callBack2)
}

function click_juego3(){
    var n = document.getElementById("num3").value
    eel.add(n)(callBack3)   
}

function mas_jugado(){
    var n1 = document.getElementById("num1").value
    var n2 = document.getElementById("num2").value
    var n3 = document.getElementById("num3").value

    eel.mas_jugado([n1,n2,n3])(callBack)
}

function callBack(result){
    document.getElementById("masJugado").innerHTML = "JUEGO MAS JUGADO: " + result;
}

function callBack1(result){ 
    document.getElementById("num1").value = result 
    mas_jugado()
}

function callBack2(result){ 
    document.getElementById("num2").value = result 
    mas_jugado()
}

function callBack3(result){ 
    document.getElementById("num3").value = result 
    mas_jugado()
}