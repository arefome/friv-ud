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

function callBack1(result){ 
    document.getElementById("num1").value = result 
}

function callBack2(result){ 
    document.getElementById("num2").value = result 
}

function callBack3(result){ 
    document.getElementById("num3").value = result 
}