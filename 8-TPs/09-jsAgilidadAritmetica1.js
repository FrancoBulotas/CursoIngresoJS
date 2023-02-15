/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuestaUsuario;
var numeroRandomUno;
var numeroRandomDos;
var operadorMatematico;

function comenzar()
{
    numeroRandomUno = Math.floor(Math.random() * 10 + 1);

    numeroRandomDos = Math.floor(Math.random() * 10 + 1);

    document.getElementById("txtIdPrimerNumero").value = numeroRandomUno;

    document.getElementById("txtIdSegundoNumero").value = numeroRandomDos;

    operadorMatematico = 2 //Math.floor(Math.random() * 4);

    if(operadorMatematico == 0)
    {
        document.getElementById("txtIdOperador").value = "+";
    }
    else if(operadorMatematico == 1)
    {
        document.getElementById("txtIdOperador").value = "-";
    }
    else if(operadorMatematico == 2)
    {
        document.getElementById("txtIdOperador").value = "/";
    }
    else
    {
        document.getElementById("txtIdOperador").value = "*";
    }
}

function Responder()
{
    respuestaUsuario = document.getElementById("txtIdRespuesta").value;
    respuestaUsuario = parseFloat(respuestaUsuario);

    if(operadorMatematico == 0 && (respuestaUsuario == numeroRandomUno + numeroRandomDos) ||
                                  (respuestaUsuario == numeroRandomUno - numeroRandomDos) ||
                                  (respuestaUsuario == numeroRandomUno * numeroRandomDos) ||
                                  (respuestaUsuario == (numeroRandomUno / numeroRandomDos).toFixed(2) ))
                                  {

        return alert("El resultado es correcto");
    }
    else
    {
        return alert("El resultado esta mal")
    }
}
