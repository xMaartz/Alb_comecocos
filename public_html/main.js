
// Declaración Tablero
tauler = new Array (30);

for (i = 0; i < tauler.length; i++) {
    
    tauler[i] = new Array (30);
    
}

creaTabla();

function creaTabla () {

tauler[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
tauler[1] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[2] =  [1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1];
tauler[3] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[4] =  [1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1];
tauler[5] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[6] =  [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1];
tauler[7] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[8] =  [1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1];
tauler[9] =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[10] = [1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1];
tauler[11] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[12] = [1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1];
tauler[13] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[14] = [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1];
tauler[15] = [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1];
tauler[16] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[17] = [1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1];
tauler[18] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[19] = [1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1];
tauler[20] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[21] = [1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1];
tauler[22] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[23] = [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1];
tauler[24] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[25] = [1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1];
tauler[26] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[27] = [1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1];
tauler[28] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
tauler[29] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

}

/*for (i = 0; i < tauler.length; i++) {
                
    for (j = 0; j < tauler[i].length; j++) {

        if (tauler[i][j] === 1) {
            tauler[i][j] = "x";
        } else if (tauler[i][j] === 0) {
            tauler[i][j] = "&nbsp;&nbsp;";
        }

    }
}*/

// Declaración Fantasmas y Jugador

fantasma1 = new Array();
fantasma1["y"] = 0;
fantasma1["x"] = 0;
fantasma1["tipo"] = "o";
fantasma1["dire"] = "";

fantasma2 = new Array();
fantasma2["y"] = 0;
fantasma2["x"] = 0;
fantasma2["tipo"] = "f";
fantasma2["dire"] = "";

fantasma3 = new Array();
fantasma3["y"] = 0;
fantasma3["x"] = 0;
fantasma3["tipo"] = "f";
fantasma3["dire"] = "";

jugador = new Array();
jugador["y"] = 0;
jugador["x"] = 0;
jugador["tipo"] = "j";
jugador["dire"] = "";
jugador["dire2"] = "";


// Asignación posiciones random

randomUbi(fantasma1);
randomUbi(fantasma2);
randomUbi(fantasma3);
randomUbi(jugador);

// Asignación direcciones random

asignaDire(fantasma1);
asignaDire(fantasma2);
asignaDire(fantasma3);
asignaDire(jugador);

        
function randomUbi(array1) {
    
    while (i !== true) {
    
    var x = Math.floor(Math.random() * 29);
    var y = Math.floor(Math.random() * 29);
    var i = false;
    
    
        if (tauler[y][x] === 0) {
            array1["y"] = y;
            array1["x"] = x;
            i = true; //esta vacio
        }
        
    }
}



function asignaDire (array1) {
    
    var y = array1["y"];
    var x = array1["x"];
    var posiciones = Array();
    var i = 0;
        
        if (tauler[y][x+1] === 0) {
            posiciones[i] = "Derecha";
            i++;
        }
        
        if (tauler[y+1][x] === 0) {
            posiciones[i] = "Abajo";
            i++;
        }
        
        if (tauler[y][x-1] === 0) {
            posiciones[i] = "Izquierda";
            i++;
        }
        
        if (tauler[y-1][x] === 0) {
            posiciones[i] = "Arriba";
            i++;
        }
        
        var resu = Math.floor(Math.random() * posiciones.length);
    
        array1["dire"] = posiciones[resu];
    
}


function posiValidas (array1) {
    
    var y = array1["y"];
    var x = array1["x"];
    var posiciones = Array();
    posiciones["R"] = 0;
    posiciones["D"] = 0;
    posiciones["L"] = 0;
    posiciones["U"] = 0;
    posiciones["leng"] = 0;
        
        if ((array1["x"]<29) && tauler[y][x+1] === 0) {
            posiciones["D"] = 1;
            posiciones["leng"]++;
        }
        
        if ((array1["y"]<29) && tauler[y+1][x] === 0) {
            posiciones["D"] = 1;
            posiciones["leng"]++;
        }
        
        if ((array1["x"]>0) && tauler[y][x-1] === 0) {
            posiciones["L"] = 1;
            posiciones["leng"]++;
        }
        
        if ((array1["y"]>0) && tauler[y-1][x] === 0) {
            posiciones["U"] = 1;
            posiciones["leng"]++;
        }
        
        return posiciones;
}
// imprimir muñecos

function imprimir (array1) {
    
    var y = array1["y"];
    var x = array1["x"];
    
    tauler[y][x] = array1["tipo"];
    
}

// movimiento

function movimiento (array1) {
    
    var y = array1["y"];
    var x = array1["x"];
    var muro = false;
    var direActual = "";
    
    // fase de movimiento
    
    if ((array1["x"]<29) && (array1["dire"] === "Derecha")) {
        array1["x"]++;
        direActual = "Derecha";
    }
    
    if ((array1["y"]<29) && (array1["dire"] === "Abajo")) {
        array1["y"]++;
        direActual = "Abajo";
    }
    
    if ((array1["x"]>0) && (array1["dire"] === "Izquierda")) {
        array1["x"]--;
        direActual = "Izquierda";
    }
    
    if ((array1["y"]>0) && (array1["dire"] === "Arriba")) {
        array1["y"]--;
        direActual = "Arriba";
    }
    
    // fase de asignación nueva dirección
    
    var posiciones = posiValidas(array1);
    
    if (direActual === "Derecha" && posiciones["R"] === 0) muro = true;
    if (direActual === "Abajo" && posiciones["D"] === 0) muro = true;
    if (direActual === "Izquierda" && posiciones["L"] === 0) muro = true;
    if (direActual === "Arriba" && posiciones["U"] === 0) muro = true;
    
    if (posiciones["Leng"] >= 3) {
        asignaDire(array1);
    } else if (posiciones["Leng"] === 2 && muro === true) {
        asignaDire(array1);
    } else {
        array1["dire"] = direActual;
    }
    
}

function activar () {
    inter = setInterval(imprimirTablero, 1000);
}

function imprimirTablero () {
    
    var tabla = "";
    
    creaTabla();
    
    imprimir (fantasma1);
    movimiento (fantasma1);
    imprimir (fantasma2);
    movimiento (fantasma2);
    imprimir (fantasma3);
    movimiento (fantasma3);
    imprimir (jugador);
    movimiento (jugador);
    
    for (i = 0; i < tauler.length; i++) {
                
                tabla=tabla+"<br />";
                
                for (j = 0; j < tauler[i].length; j++) {
                    
                    tabla=tabla+tauler[i][j]+" ";
                    
                }
    }
    
    document.getElementById("tabla").innerHTML = tabla;
    
}
