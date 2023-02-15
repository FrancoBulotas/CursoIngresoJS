

var eleccionMaquina;
var contadorDeEmpates=0;
var contadorDeGanadas=0;
var contadorDePerdidas=0;


function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3);
    console.log(eleccionMaquina);
}

function piedra()
{
    if(eleccionMaquina == 0){
        alert("Empataron!");
		contadorDeEmpates++;
		document.getElementById("txtIdEmpatadas").value = contadorDeEmpates;

    }else if(eleccionMaquina == 1){
        alert("Perdiste!");
		contadorDePerdidas++;
		document.getElementById("txtIdPerdidas").value = contadorDePerdidas;

    }else{
        alert("Ganaste!");
		contadorDeGanadas++;
		document.getElementById("txtIdGanadas").value = contadorDeGanadas;

    }
}

function papel()
{
    if(eleccionMaquina == 0){
        alert("Ganaste!");
		contadorDeGanadas++;
		document.getElementById("txtIdGanadas").value = contadorDeGanadas;

    }else if(eleccionMaquina == 1){
        alert("Empataron!");
		contadorDeEmpates++;
		document.getElementById("txtIdEmpatadas").value = contadorDeEmpates;

    }else{
        alert("Perdiste!");
		contadorDePerdidas++;
		document.getElementById("txtIdPerdidas").value = contadorDePerdidas;
		
    }
}

function tijera()
{
	if(eleccionMaquina == 0){
        alert("Perdiste!");
		contadorDePerdidas++;
		document.getElementById("txtIdPerdidas").value = contadorDePerdidas;

    }else if(eleccionMaquina == 1){
        alert("Ganaste!");
		contadorDeGanadas++;
		document.getElementById("txtIdGanadas").value = contadorDeGanadas;

    }else{
        alert("Empataron!");
		contadorDeEmpates++;
		document.getElementById("txtIdEmpatadas").value = contadorDeEmpates;

    }
}

function mostrarResultado()
{

}