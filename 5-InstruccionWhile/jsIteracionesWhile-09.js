/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var numeroIngresado;
	var banderaDelPrimero = true;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta = true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingresa un numero");
		
		if(numeroIngresado > numeroMaximo || banderaDelPrimero == true){
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo || banderaDelPrimero == true){
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;	
		}

		respuesta = confirm("Desea continuar?");
	} 	
	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}