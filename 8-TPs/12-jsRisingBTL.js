/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var numeroDeLegajoIngresado;
	var nacionalidadIngresada;
	var respuesta = true;

   
	//Punto A
	edadIngresada = prompt("Cuantos años tienes?");

	while(edadIngresada < 18 || edadIngresada > 90){
		edadIngresada = prompt("Edad no valida. Cuantos años tienes?");
	}
	edadIngresada = parseInt(edadIngresada);
	document.getElementById("txtIdEdad").value = "Edad: " + edadIngresada;

	//Punto B
	sexoIngresado = prompt("Ingrese el sexo M/F");

	while(sexoIngresado != "M" && sexoIngresado != "F"){
		sexoIngresado = prompt("Sexo invalido. Ingrese el sexo M/F");
	}
	document.getElementById("txtIdSexo").value = "Sexo: " + sexoIngresado;

	//Punto C
	estadoCivilIngresado = prompt("Estado civil? 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");

	while(estadoCivilIngresado != "1" && estadoCivilIngresado != "2" && estadoCivilIngresado != "3" && estadoCivilIngresado != "4"){
		estadoCivilIngresado = prompt("Error, ingrese nuevamente Estado Civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
	}

	switch(estadoCivilIngresado){
		case "1":
			estadoCivilIngresado = "Soltero/a";
			break;
		case "2":
			estadoCivilIngresado = "Casado/a";
			break;
		case "3":
			estadoCivilIngresado = "Divorciado/a";
			break;
		case "4":
			estadoCivilIngresado = "Viudo/A";
			break;
	} 	

	document.getElementById("txtIdEstadoCivil").value = "Estado Civil: " + estadoCivilIngresado;

	//Punto D
	sueldoBrutoIngresado = prompt("Cual es su sueldo bruto?");
	sueldoBrutoIngresado = parseFloat(sueldoBrutoIngresado);

	while(sueldoBrutoIngresado < 8000){
		sueldoBrutoIngresado = prompt("Error. El sueldo bruto debe ser mayor a $8000. Cual es su sueldo bruto?");
	}
	document.getElementById("txtIdSueldo").value = "Sueldo bruto: $" + sueldoBrutoIngresado;


	//Punto E
	numeroDeLegajoIngresado = prompt("Cual es su numero de legajo?");
	
	while(numeroDeLegajoIngresado.length > 4 || numeroDeLegajoIngresado.length < 4 || numeroDeLegajoIngresado[0] == "0"){
		numeroDeLegajoIngresado = prompt("Numero de legajo invalido. Cual es su numero de legajo?");
	}
	document.getElementById("txtIdLegajo").value = "Numero de legajo: " + numeroDeLegajoIngresado;
	
	//Punto F
	nacionalidadIngresada = prompt("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N"){
		nacionalidadIngresada = prompt("Nacionalidad incorrecta, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");	
	}

	switch(nacionalidadIngresada){
		case "A":
			nacionalidadIngresada = "Argentino";
			break;
		case "E":
			nacionalidadIngresada = "Extranjero";
			break;
		case "N":
			nacionalidadIngresada = "Nacionalizado";
			break;
	}
	document.getElementById("txtIdNacionalidad").value = "Nacionalidad: " + nacionalidadIngresada;

}
