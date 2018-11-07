
// Declaración Tablero
var tauler = new Array (30);

for (i = 0; i < tauler.length; i++) {
    
    tauler[i] = new Array (30);
    
}

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

var fantasma1 = new Array();
fantasma1["y"] = 0;
fantasma1["x"] = 0;
fantasma1["tipo"] = "f";
fantasma1["dire"] = "";

var fantasma2 = new Array();
fantasma2["y"] = 0;
fantasma2["x"] = 0;
fantasma2["tipo"] = "f";
fantasma2["dire"] = "";

var fantasma3 = new Array();
fantasma3["y"] = 0;
fantasma3["x"] = 0;
fantasma3["tipo"] = "f";
fantasma3["dire"] = "";

var jugador = new Array();
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

        
function randomUbi(array1) {
    
    while (i !== true) {
    
    var x = Math.floor(Math.random() * 29);
    var y = Math.floor(Math.random() * 29);
    var i = false;
    
    
        if (tauler[y][x] === 0) {
            array1["y"] = y;
            array1["x"] = x;
            i = true;
            tauler[y][x] = array1["tipo"];
        }
        
    }
}

// Asignación dirección

posiValidas(fantasma1);
posiValidas(fantasma2);
posiValidas(fantasma3);
posiValidas(jugador);

function posiValidas (array1) {
    
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


