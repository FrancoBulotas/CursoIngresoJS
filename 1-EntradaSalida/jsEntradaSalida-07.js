/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	var numUno;
	var numDos;

	numUno = parseInt(txtIdNumeroUno.value);
	numDos = parseInt(txtIdNumeroDos.value)

	alert("La suma es "+ (numUno+numDos))
}

function restar()
{
	var numUno;
	var numDos;

	numUno = parseInt(txtIdNumeroUno.value);
	numDos = parseInt(txtIdNumeroDos.value)

	alert("La resta es "+ (numUno-numDos))
}

function multiplicar()
{ 
	var numUno;
	var numDos;

	numUno = parseInt(txtIdNumeroUno.value);
	numDos = parseInt(txtIdNumeroDos.value)

	alert("La multiplicación es "+ (numUno*numDos))
}

function dividir()
{
	var numUno;
	var numDos;

	numUno = parseInt(txtIdNumeroUno.value);
	numDos = parseInt(txtIdNumeroDos.value)

	alert("La división es "+ (numUno/numDos))
}


