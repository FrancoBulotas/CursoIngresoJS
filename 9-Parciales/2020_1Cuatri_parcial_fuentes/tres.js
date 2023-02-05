function mostrar()
{	
	var personasTotalesEnAvion = [];
	var personaActual = [];
	var solterosEdades = [];
	var temps = [];
	var nombre = "";
	var edad = 0;
	var estadoCivil = "";
	var sexo = "";
	var temperatura = 0;
	var mayoresViudos = 0;
	var hombresViudos = 0;
	var hombresSolteros = 0;
	var tercerEdadTemp = 0;
	var sumaEdad = 0;
	var promedioEdades = 0;
	var maximoTemps = 0;
	var nombrePersonaMayorTemp = "";
	var cantidadSolteros = 0;

	respuesta = prompt("Desea ingresar datos? S/N");

	while(respuesta == "S"){
		personaActual = [];

		nombre = prompt("Cual es tu nombre?");
		personaActual.push(nombre);


		edad = prompt("Cual es tu edad?");
		edad = parseInt(edad);
		personaActual.push(edad);
	

		sexo = prompt("Masculino o femenino? M/F ");
		while(sexo!="M" && sexo!="F"){
			sexo = prompt("Error. Masculino o femenino? M/F ");
		}
		personaActual.push(sexo);


		estadoCivil = prompt("Cual es tu estado civil?");
		while(estadoCivil != "soltero" && estadoCivil!="casado" && estadoCivil!="viudo" && estadoCivil !="soltera" && estadoCivil!="casada" && estadoCivil!="viuda"){
			estadoCivil = prompt("Error. Cual es tu estado civil?");
		}
		if((estadoCivil=="viudo" || estadoCivil=="viuda") && edad > 18){
			mayoresViudos=mayoresViudos + 1;
		}
		if(estadoCivil=="viudo"){
			hombresViudos=hombresViudos+1;
		}
		if(estadoCivil=="soltero"){
			hombresSolteros=hombresSolteros+1;
		}
		personaActual.push(estadoCivil);


		temperatura = prompt("Cual es tu temperatura?");
		temperatura = parseInt(temperatura);
		personaActual.push(temperatura);	
		temps.push(temperatura);


		if(sexo=="M" && estadoCivil=="soltero"){
			sumaEdad = sumaEdad + edad;
			cantidadSolteros = cantidadSolteros + 1;
		}
		if(edad > 60 && temperatura > 38){
			tercerEdadTemp=tercerEdadTemp+1;
		}


		personasTotalesEnAvion.push(personaActual);

		respuesta = prompt("Hay mas pasajeros? S/N");
	}


	promedioEdades = sumaEdad / cantidadSolteros;
	
	
	maximoTemps = Math.max(...temps);

	for (i=0 ; i < (personasTotalesEnAvion.length) ; i++){
		if(maximoTemps == personasTotalesEnAvion[i][4]){
			nombrePersonaMayorTemp = personasTotalesEnAvion[i][0];
		}
	}


	alert(personasTotalesEnAvion);
	alert("La temp maxima es " + maximoTemps);
	alert("La persona con mayor temperatura es "+ nombrePersonaMayorTemp);
	alert("La cantidad de mayores de edad que estan viudos es de "+ mayoresViudos);
	alert("La cantidad de hombres que estan solteros es de "+ hombresSolteros+", y la cantidad de hombres viudos "+hombresViudos)
	alert("La cantidad de personas de tercera edad (mas de 60) que tienen mas de 38 de temp es de "+ tercerEdadTemp)
	alert(sumaEdad);
	alert("El promedio de edad entre hombres solteros es " + promedioEdades.toFixed(2) + " años")
}
