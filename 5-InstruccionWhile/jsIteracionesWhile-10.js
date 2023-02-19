/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var respuesta = true;
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioNegativos = 0;
	var promedioPositivos = 0;
	var diferenciaPosNeg = 0;
	var porcentajeNegativos = 0;
	var porcentajePositivos = 0;
	var numerosTotales = 0;
	var maximoPositivos;
	var minimoNegativos;
	var banderaPrimerPos = true;
	var banderaPrimerNeg = true;

	
	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);

		if(numeroIngresado < 0){
			sumaNegativos += numeroIngresado;
			contadorNegativos++;
			//Negativo mas chico
			if(numeroIngresado < minimoNegativos || banderaPrimerNeg == true){
				minimoNegativos = numeroIngresado;
				banderaPrimerNeg = false;
			}
		}
		else if(numeroIngresado == 0){
			contadorCeros++;
		}
		else{
			sumaPositivos += numeroIngresado;
			contadorPositivos++;
			//Positivo mas grande
			if(numeroIngresado > maximoPositivos || banderaPrimerPos == true){
				maximoPositivos = numeroIngresado;
				banderaPrimerPos = false;
			}
		}
		//Numeros pares
		if((numeroIngresado % 2) == 0){
			contadorPares++;
		}
		
		console.log(numeroIngresado);
		respuesta = confirm("Desea continuar?");
	}

	// Promedio de positivos y negativos

	if(contadorNegativos > 0){
		promedioNegativos = sumaNegativos / contadorNegativos;
	}
	else{
		promedioNegativos = 0;
	}

	if(contadorPositivos > 0){
		promedioPositivos = sumaPositivos / contadorPositivos;
	}
	else{
		promedioPositivos = 0;
	}

	// diferencia entre positivos y negativos

	diferenciaPosNeg = sumaPositivos + sumaNegativos; 

	//Porcentaje positivos y negativos

	numerosTotales = contadorCeros + contadorNegativos + contadorPositivos;

	porcentajePositivos = (contadorPositivos * 100) / numerosTotales;
	porcentajeNegativos = (contadorNegativos * 100) / numerosTotales;


	document.write("La suma de negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de los positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de positivos es: " + contadorPositivos + "<br>");
	document.write("La cantidad de negativos es: " + contadorNegativos + "<br>");
	document.write("La cantidad de ceros es: " + contadorCeros + "<br>");
	document.write("La cantidad de numeros pares es: " + contadorPares + "<br>");
	document.write("El promedio de positivos es: " + promedioPositivos.toFixed(2) + "<br>");
	document.write("El promedio de negativos es: " + promedioNegativos.toFixed(2) + "<br>");
	document.write("La diferencia entre positivos y negativos es: " + diferenciaPosNeg.toFixed(2) + "<br>");
	document.write("El porcentaje de positivos es " + porcentajePositivos.toFixed(2) + "% y el de negativos es " + porcentajeNegativos.toFixed(2) + "% <br>");
	document.write("El mas grande de los positivos es " + maximoPositivos + "<br>");
	document.write("El mas chico de los negativos es " + minimoNegativos + "<br>");
}