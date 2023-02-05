/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;
    var anchoTerreno;

    largoTerreno = parseInt(txtIdLargo.value);
    anchoTerreno = parseInt(txtIdAncho.value);

    alert("La cantidad de alambre a comprar es de " + (largoTerreno *2 + anchoTerreno *2)*2 + " metros.")

}
function Circulo () 
{
    var radioTerreno;

    radioTerreno = parseInt(txtIdRadio.value);

    alert("La cantidad de alambre a comprar es de " + (2 * 3.14159 * radioTerreno).toFixed(2) + " metros.")
}
function Materiales () 
{
    var largoTerreno;
    var anchoTerreno;
    var areaRectangulo;

    largoTerreno = parseInt(txtIdLargo.value);
    anchoTerreno = parseInt(txtIdAncho.value);
    areaRectangulo = largoTerreno * anchoTerreno;
    
    alert("La cantidad de bolsas de cemento a utilizar son " + areaRectangulo*2 + " bolsas, y de cal " + areaRectangulo*3 + " bolsas.")
}