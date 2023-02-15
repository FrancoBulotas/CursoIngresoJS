/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

contadorIntentos = 1;

function comenzar()
{
  numeroSecreto = Math.floor(Math.random()*100 + 1);

  console.log(numeroSecreto);
}

function verificar()
{
  var numeroIngresado;

  numeroIngresado = document.getElementById("txtIdNumero").value;

  if(numeroIngresado == numeroSecreto){
    alert("Ganaste, y en solo " + contadorIntentos + " intentos");
    txtIdIntentos.value = contadorIntentos;
    contadorIntentos = contadorIntentos + 1;

  }else{
    if(numeroIngresado > numeroSecreto){
      alert("Te pasaste!");
      txtIdIntentos.value = contadorIntentos;
      contadorIntentos = contadorIntentos + 1;

    }else if(numeroIngresado < numeroSecreto){
      alert("Te quedaste corto!");
      txtIdIntentos.value = contadorIntentos;
      contadorIntentos = contadorIntentos + 1;

    }
  }
}