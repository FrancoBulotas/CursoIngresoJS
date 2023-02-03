/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numUno;
    var numDos;
    var numTres;

    numUno = parseInt(txtIdPrecioUno.value);
    numDos = parseInt(txtIdPrecioDos.value);
    numTres = parseInt(txtIdPrecioTres.value);

    alert("La suma de los precios es de "+ (numUno + numDos + numTres));

}
function Promedio () 
{
	var numUno;
    var numDos;
    var numTres;
    
    numUno = parseInt(txtIdPrecioUno.value);
    numDos = parseInt(txtIdPrecioDos.value);
    numTres = parseInt(txtIdPrecioTres.value);

    alert("El promedio de estos precios es "+ ((numUno + numDos + numTres)/3).toFixed(2));

}
function PrecioFinal () 
{   	
    var numUno;
    var numDos;
    var numTres;
    var suma;
    var iva;

    numUno = parseInt(txtIdPrecioUno.value);
    numDos = parseInt(txtIdPrecioDos.value);
    numTres = parseInt(txtIdPrecioTres.value);

    suma = (numUno + numDos + numTres);
    iva = suma * 1.21;

    alert("El precio final (mas IVA 21%) es " + iva)
    
}