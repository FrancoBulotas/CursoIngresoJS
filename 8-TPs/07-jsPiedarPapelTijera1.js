/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3);
    console.log(eleccionMaquina);
}

function piedra()
{
    if(eleccionMaquina == 0){
        alert("Empataron!");
    }else if(eleccionMaquina == 1){
        alert("Perdiste!");
    }else{
        alert("Ganaste!");
    }
}

function papel()
{
    if(eleccionMaquina == 0){
        alert("Ganaste!");
    }else if(eleccionMaquina == 1){
        alert("Empataron!");
    }else{
        alert("Perdiste!");
    }
}

function tijera()
{
	if(eleccionMaquina == 0){
        alert("Perdiste!");
    }else if(eleccionMaquina == 1){
        alert("Ganaste!");
    }else{
        alert("Empataron!");
    }
}