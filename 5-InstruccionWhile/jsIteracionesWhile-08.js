/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta = true;
	var sumaPositivos = 0;
	var multiplicacionNegativos = 1;
	var numeroIngresado;
	var contadorNegativos = 0;

	while(respuesta == true){
		numeroIngresado = prompt("Ingresa un numero"); 
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0){
			sumaPositivos += numeroIngresado;
		}
		else{
			multiplicacionNegativos *= numeroIngresado;
			contadorNegativos++;
		}

		respuesta = confirm("Queres ingresar otro numero?");
	}

	txtIdSuma.value = sumaPositivos;

	if(contadorNegativos == 0){
		txtIdProducto.value = "No agrego negativos";
	}
	else{
		txtIdProducto.value = multiplicacionNegativos;
	}

}